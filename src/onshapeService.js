/**
 * Onshape CAD Cloud Bridge & Credentials Management Service
 * Supports:
 *  1. onshape_config.json if present on local server
 *  2. Browser credentials prompt with Chrome Password Manager integration (foldnet.localhost)
 *  3. In-memory / localStorage caching
 *  4. Direct and proxied Onshape REST API calls with HMAC-SHA256 authentication
 *  5. Onshape Document URL parsing & Part Studio STL export
 */

export class OnshapeService {
  constructor() {
    this.credentials = null;
    this.source = null; // 'file' | 'localStorage' | 'session'
    this.modalEl = null;
    this.importModalEl = null;
  }

  /**
   * Checks if valid credentials exist in onshape_config.json or localStorage.
   * @returns {Promise<{accessKey: string, secretKey: string, source: string}|null>}
   */
  async getCredentials() {
    if (this.credentials) {
      return { ...this.credentials, source: this.source };
    }

    // 1. Check if local onshape_config.json (or temp_secret_onshape_config.json) is served
    const potentialPaths = ['/onshape_config.json', '/temp_secret_onshape_config.json'];
    for (const configPath of potentialPaths) {
      try {
        const res = await fetch(configPath, { cache: 'no-cache' });
        if (res.ok) {
          const contentType = res.headers.get('content-type') || '';
          if (contentType.includes('application/json')) {
            const data = await res.json();
            if (data && data.accessKey && data.secretKey && !data.accessKey.includes('YOUR_')) {
              this.credentials = {
                accessKey: data.accessKey.trim(),
                secretKey: data.secretKey.trim()
              };
              this.source = 'file';
              console.log(`[OnshapeService] Loaded credentials from ${configPath}`);
              return { ...this.credentials, source: this.source };
            }
          }
        }
      } catch (e) {
        // Continue to next path
      }
    }

    // 2. Check localStorage (stored from browser input)
    try {
      const stored = localStorage.getItem('foldnet_onshape_credentials');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.accessKey && parsed.secretKey) {
          this.credentials = {
            accessKey: parsed.accessKey.trim(),
            secretKey: parsed.secretKey.trim()
          };
          this.source = 'localStorage';
          console.log('[OnshapeService] Loaded credentials from browser storage');
          return { ...this.credentials, source: this.source };
        }
      }
    } catch (e) {
      console.warn('[OnshapeService] Error reading localStorage credentials:', e);
    }

    return null;
  }

  /**
   * Save credentials into memory and optionally localStorage.
   */
  setCredentials(accessKey, secretKey, rememberInBrowser = true) {
    this.credentials = {
      accessKey: accessKey.trim(),
      secretKey: secretKey.trim()
    };
    this.source = rememberInBrowser ? 'localStorage' : 'session';

    if (rememberInBrowser) {
      try {
        localStorage.setItem('foldnet_onshape_credentials', JSON.stringify(this.credentials));
      } catch (e) {}
    } else {
      try {
        localStorage.removeItem('foldnet_onshape_credentials');
      } catch (e) {}
    }
  }

  /**
   * Clears saved credentials.
   */
  clearCredentials() {
    this.credentials = null;
    this.source = null;
    try {
      localStorage.removeItem('foldnet_onshape_credentials');
    } catch (e) {}
  }

  /**
   * Prompts the user with a browser-autofill-friendly modal to supply their Onshape keys.
   * Leverages autocomplete="username" and autocomplete="current-password" so Chrome
   * Password Manager automatically prompts to save them under foldnet.localhost.
   */
  promptForCredentials() {
    return new Promise((resolve, reject) => {
      this.ensureModalDOM();

      const modal = document.getElementById('onshape-credentials-modal');
      const form = document.getElementById('onshape-creds-form');
      const accessInput = document.getElementById('onshape-access-key-input');
      const secretInput = document.getElementById('onshape-secret-key-input');
      const rememberCheckbox = document.getElementById('onshape-remember-check');
      const btnCancel = document.getElementById('btn-onshape-creds-cancel');
      const statusNotice = document.getElementById('onshape-creds-notice');

      if (!modal || !form) {
        reject(new Error('Credentials modal could not be initialized.'));
        return;
      }

      // If credentials already exist, pre-fill them
      if (this.credentials) {
        accessInput.value = this.credentials.accessKey;
        secretInput.value = this.credentials.secretKey;
        statusNotice.textContent = `Currently using credentials from: ${this.source === 'file' ? 'onshape_config.json' : 'browser storage'}.`;
        statusNotice.className = 'onshape-notice info';
      } else {
        accessInput.value = '';
        secretInput.value = '';
        statusNotice.textContent = 'Chrome Password Manager will offer to save these keys for foldnet.localhost.';
        statusNotice.className = 'onshape-notice info';
      }

      modal.classList.add('visible');
      accessInput.focus();

      const cleanup = () => {
        modal.classList.remove('visible');
        form.removeEventListener('submit', onSubmit);
        btnCancel.removeEventListener('click', onCancel);
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        const accessKey = accessInput.value.trim();
        const secretKey = secretInput.value.trim();

        if (!accessKey || !secretKey) {
          statusNotice.textContent = 'Please enter both Access Key and Secret Key.';
          statusNotice.className = 'onshape-notice error';
          return;
        }

        const remember = rememberCheckbox.checked;
        this.setCredentials(accessKey, secretKey, remember);

        // Explicitly invoke Chrome/W3C Credential Management API to trigger "Save Password?"
        if (window.PasswordCredential && navigator.credentials && navigator.credentials.store) {
          try {
            const cred = new PasswordCredential(form);
            await navigator.credentials.store(cred);
          } catch (credErr) {
            console.log('[OnshapeService] Credential management prompt:', credErr.message);
          }
        }

        cleanup();
        resolve(this.credentials);
      };

      const onCancel = () => {
        cleanup();
        reject(new Error('Onshape authentication cancelled by user.'));
      };

      form.addEventListener('submit', onSubmit);
      btnCancel.addEventListener('click', onCancel);
    });
  }

  /**
   * Ensures credentials exist. If not present in config file or storage, triggers the prompt modal.
   */
  async ensureCredentials() {
    const creds = await this.getCredentials();
    if (creds) return creds;
    return this.promptForCredentials();
  }

  /**
   * Displays the Onshape Import Dialog where user can paste an Onshape document URL.
   */
  async openImportDialog(onImportModel) {
    try {
      const creds = await this.ensureCredentials();
      this.ensureImportModalDOM();

      const modal = document.getElementById('onshape-import-modal');
      const form = document.getElementById('onshape-import-form');
      const urlInput = document.getElementById('onshape-url-input');
      const btnCancel = document.getElementById('btn-onshape-import-cancel');
      const btnConfigKeys = document.getElementById('btn-onshape-reconfig-keys');
      const statusNotice = document.getElementById('onshape-import-status');
      const sourceBadge = document.getElementById('onshape-auth-source-badge');

      if (sourceBadge) {
        sourceBadge.textContent = creds.source === 'file' 
          ? 'Config File (onshape_config.json)' 
          : 'Browser / Password Manager';
      }

      modal.classList.add('visible');
      urlInput.focus();

      const cleanup = () => {
        modal.classList.remove('visible');
        form.removeEventListener('submit', onSubmit);
        btnCancel.removeEventListener('click', onCancel);
        if (btnConfigKeys) btnConfigKeys.removeEventListener('click', onReconfig);
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        const url = urlInput.value.trim();
        if (!url) return;

        statusNotice.textContent = 'Connecting to Onshape and exporting geometry...';
        statusNotice.className = 'onshape-notice loading';

        try {
          const result = await this.importFromUrl(url);
          statusNotice.textContent = `Successfully exported "${result.name}"! Loading into FoldNet...`;
          statusNotice.className = 'onshape-notice success';
          
          setTimeout(() => {
            cleanup();
            if (typeof onImportModel === 'function') {
              onImportModel(result.buffer, result.name, 'stl');
            }
          }, 600);
        } catch (err) {
          statusNotice.textContent = `Error: ${err.message}`;
          statusNotice.className = 'onshape-notice error';
        }
      };

      const onCancel = () => {
        cleanup();
      };

      const onReconfig = async () => {
        modal.classList.remove('visible');
        try {
          await this.promptForCredentials();
          this.openImportDialog(onImportModel);
        } catch (err) {
          // User cancelled prompt
        }
      };

      form.addEventListener('submit', onSubmit);
      btnCancel.addEventListener('click', onCancel);
      if (btnConfigKeys) btnConfigKeys.addEventListener('click', onReconfig);

    } catch (err) {
      console.log('[OnshapeService] Import dialog cancelled or keys missing:', err.message);
    }
  }

  /**
   * Parse an Onshape Document URL into its constituent IDs:
   * Format: https://cad.onshape.com/documents/{did}/(w|v|m)/{wvmId}/e/{eid}
   */
  parseOnshapeUrl(urlStr) {
    try {
      const url = new URL(urlStr);
      if (!url.hostname.includes('onshape.com')) {
        throw new Error('URL must be an onshape.com document link.');
      }
      const parts = url.pathname.split('/').filter(Boolean);
      // Expected structure: ['documents', did, wvmType, wvmId, 'e', eid]
      const docIdx = parts.indexOf('documents');
      if (docIdx === -1 || parts.length < docIdx + 6) {
        throw new Error('Invalid Onshape URL structure. Expected /documents/{did}/w/{wid}/e/{eid}');
      }
      return {
        did: parts[docIdx + 1],
        wvmType: parts[docIdx + 2], // 'w' | 'v' | 'm'
        wvmId: parts[docIdx + 3],
        eid: parts[docIdx + 5]
      };
    } catch (err) {
      throw new Error(`Invalid Onshape URL: ${err.message}`);
    }
  }

  /**
   * Generates HMAC-SHA256 authorization headers using Web Crypto API.
   */
  async generateHMACHeaders(method, endpointPath, accessKey, secretKey) {
    const enc = new TextEncoder();
    const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(16).padStart(2, '0')).join('').slice(0, 25);
    const date = new Date().toUTCString();
    const urlObj = new URL(endpointPath, 'https://cad.onshape.com');
    const pathname = urlObj.pathname;
    const query = urlObj.search ? urlObj.search.slice(1) : '';
    const contentType = 'application/json';

    const stringToSign = `${method}\n${nonce}\n${date}\n${contentType}\n${pathname}\n${query}\n`.toLowerCase();

    const key = await crypto.subtle.importKey(
      'raw',
      enc.encode(secretKey),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signatureBuf = await crypto.subtle.sign('HMAC', key, enc.encode(stringToSign));
    const signatureBase64 = btoa(String.fromCharCode(...new Uint8Array(signatureBuf)));

    return {
      'Date': date,
      'On-Nonce': nonce,
      'Authorization': `On ${accessKey}:HmacSHA256:${signatureBase64}`,
      'Content-Type': contentType,
      'Accept': 'application/json, application/vnd.onshape.v1+json, */*'
    };
  }

  /**
   * Perform an API call to Onshape, preferentially using the local Vite dev proxy to bypass CORS.
   */
  async fetchApi(endpoint, options = {}) {
    const creds = await this.ensureCredentials();
    const method = options.method || 'GET';

    // 1. Try local dev proxy (/api/onshape/proxy?endpoint=...)
    try {
      const proxyUrl = `/api/onshape/proxy?endpoint=${encodeURIComponent(endpoint)}`;
      const headers = {
        'x-onshape-access-key': creds.accessKey,
        'x-onshape-secret-key': creds.secretKey,
        ...(options.headers || {})
      };

      const res = await fetch(proxyUrl, {
        method,
        headers,
        body: options.body
      });

      if (res.ok) {
        return res;
      }
      
      const errJson = await res.json().catch(() => null);
      if (errJson && errJson.error) {
        throw new Error(errJson.error);
      }
    } catch (proxyErr) {
      console.warn('[OnshapeService] Proxy call issue, trying direct API call:', proxyErr.message);
    }

    // 2. Direct fallback (in case direct CORS or browser extensions allow it)
    const directHeaders = await this.generateHMACHeaders(method, endpoint, creds.accessKey, creds.secretKey);
    const directRes = await fetch(`https://cad.onshape.com${endpoint}`, {
      method,
      headers: { ...directHeaders, ...(options.headers || {}) },
      body: options.body
    });

    if (!directRes.ok) {
      const errText = await directRes.text().catch(() => '');
      throw new Error(`Onshape API returned ${directRes.status}: ${errText || directRes.statusText}`);
    }

    return directRes;
  }

  /**
   * Export an Onshape Part Studio element as STL ArrayBuffer.
   */
  async importFromUrl(urlStr) {
    const parsed = this.parseOnshapeUrl(urlStr);
    const { did, wvmType, wvmId, eid } = parsed;

    // First fetch element metadata to get its name
    let docTitle = `onshape-${did.slice(0, 6)}`;
    try {
      const metaRes = await this.fetchApi(`/api/documents/${did}`);
      if (metaRes.ok) {
        const docJson = await metaRes.json();
        if (docJson && docJson.name) {
          docTitle = docJson.name.replace(/[^a-zA-Z0-9_\-\s]/g, '').trim();
        }
      }
    } catch (e) {
      console.warn('[OnshapeService] Could not fetch document title:', e.message);
    }

    // Request STL export from Onshape
    // Endpoint: /api/partstudios/d/{did}/(w|v|m)/{wvmId}/e/{eid}/stl
    const wvmPath = wvmType === 'w' ? 'w' : (wvmType === 'v' ? 'v' : 'm');
    const exportEndpoint = `/api/partstudios/d/${did}/${wvmPath}/${wvmId}/e/${eid}/stl?mode=binary&units=millimeter`;

    const stlRes = await this.fetchApi(exportEndpoint);
    const arrayBuffer = await stlRes.arrayBuffer();

    if (!arrayBuffer || arrayBuffer.byteLength < 84) {
      throw new Error('Onshape returned empty or invalid geometry data.');
    }

    return {
      buffer: arrayBuffer,
      name: docTitle
    };
  }

  /**
   * Injects the Credentials Modal DOM if not already present.
   */
  ensureModalDOM() {
    if (document.getElementById('onshape-credentials-modal')) return;

    const modalHTML = `
      <div id="onshape-credentials-modal" class="foldnet-modal-backdrop">
        <div class="foldnet-modal-card" role="dialog" aria-labelledby="onshape-modal-title">
          <div class="modal-header">
            <div class="modal-title-group">
              <div class="modal-icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div>
                <h3 id="onshape-modal-title">Connect Onshape API Keys</h3>
                <p class="modal-subtitle">Secure access for importing CAD models into FoldNet</p>
              </div>
            </div>
            <button id="btn-onshape-creds-cancel" class="btn-close" aria-label="Close">&times;</button>
          </div>

          <form id="onshape-creds-form" action="/login" method="post" autocomplete="on">
            <div class="modal-body">
              <div id="onshape-creds-notice" class="onshape-notice info">
                Chrome Password Manager will offer to save these keys for <strong>foldnet.localhost</strong>.
              </div>

              <div class="form-field">
                <label for="onshape-access-key-input">
                  <span>Access Key</span>
                  <a href="https://cad.onshape.com/user/keys" target="_blank" rel="noopener" class="field-help-link">Get Keys ↗</a>
                </label>
                <input 
                  type="text" 
                  id="onshape-access-key-input" 
                  name="username" 
                  autocomplete="username" 
                  placeholder="e.g. on_a1b2c3d4..." 
                  required 
                />
              </div>

              <div class="form-field">
                <label for="onshape-secret-key-input">Secret Key</label>
                <input 
                  type="password" 
                  id="onshape-secret-key-input" 
                  name="password" 
                  autocomplete="current-password" 
                  placeholder="e.g. secret_key_here..." 
                  required 
                />
              </div>

              <div class="form-checkbox-row">
                <label class="custom-checkbox">
                  <input type="checkbox" id="onshape-remember-check" checked />
                  <span>Remember keys in browser (localStorage)</span>
                </label>
              </div>

              <div class="security-info-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>Keys are kept locally in your browser/vault and are never tracked by Git.</span>
              </div>
            </div>

            <div class="modal-footer">
              <button type="submit" id="btn-save-onshape-creds" class="btn btn-primary">
                Save & Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  /**
   * Injects the Import Model from Onshape Modal DOM if not already present.
   */
  ensureImportModalDOM() {
    if (document.getElementById('onshape-import-modal')) return;

    const modalHTML = `
      <div id="onshape-import-modal" class="foldnet-modal-backdrop">
        <div class="foldnet-modal-card" role="dialog" aria-labelledby="onshape-import-title">
          <div class="modal-header">
            <div class="modal-title-group">
              <div class="modal-icon-badge onshape-brand-color">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 id="onshape-import-title">Import CAD from Onshape</h3>
                <div class="auth-source-tag">
                  Auth: <span id="onshape-auth-source-badge">Checking...</span>
                </div>
              </div>
            </div>
            <button id="btn-onshape-import-cancel" class="btn-close" aria-label="Close">&times;</button>
          </div>

          <form id="onshape-import-form">
            <div class="modal-body">
              <div id="onshape-import-status" class="onshape-notice info">
                Paste the URL of any public or private Onshape Document or Part Studio.
              </div>

              <div class="form-field">
                <label for="onshape-url-input">Onshape Document / Part Studio URL</label>
                <input 
                  type="url" 
                  id="onshape-url-input" 
                  placeholder="https://cad.onshape.com/documents/.../w/.../e/..." 
                  required 
                />
                <span class="field-hint">e.g. https://cad.onshape.com/documents/d123/w/w123/e/e123</span>
              </div>
            </div>

            <div class="modal-footer split">
              <button type="button" id="btn-onshape-reconfig-keys" class="btn btn-secondary btn-sm" title="Change or update API keys">
                ⚙️ Key Settings
              </button>
              <button type="submit" id="btn-submit-onshape-import" class="btn btn-primary">
                Import into FoldNet
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }
}
