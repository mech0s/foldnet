import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import https from 'https';

function generateOnshapeHeaders(method, urlPath, accessKey, secretKey, contentType = 'application/json') {
  const nonce = crypto.randomBytes(16).toString('hex').slice(0, 25);
  const date = new Date().toUTCString();
  const parsedUrl = new URL(urlPath, 'https://cad.onshape.com');
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.search ? parsedUrl.search.slice(1) : '';

  const stringToSign = (
    method + '\n' +
    nonce + '\n' +
    date + '\n' +
    contentType + '\n' +
    pathname + '\n' +
    query + '\n'
  ).toLowerCase();

  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(stringToSign);
  const signature = hmac.digest('base64');

  return {
    'Date': date,
    'On-Nonce': nonce,
    'Authorization': `On ${accessKey}:HmacSHA256:${signature}`,
    'Content-Type': contentType,
    'Accept': 'application/json, application/vnd.onshape.v1+json, */*'
  };
}

function getLocalOnshapeConfig() {
  const possiblePaths = [
    path.resolve(process.cwd(), 'onshape_config.json'),
    path.resolve(process.cwd(), 'temp_secret_onshape_config.json')
  ];
  for (const configPath of possiblePaths) {
    if (fs.existsSync(configPath)) {
      try {
        const content = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        if (content.accessKey && content.secretKey && !content.accessKey.includes('YOUR_')) {
          return content;
        }
      } catch (e) {
        console.warn('[Vite] Failed to parse config:', configPath, e.message);
      }
    }
  }
  return null;
}

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    open: 'http://foldnet.localhost:5173'
  },
  plugins: [
    {
      name: 'foldnet-url-printer',
      configureServer(server) {
        const origPrintUrls = server.printUrls;
        server.printUrls = () => {
          const address = server.httpServer?.address();
          const port = (address && typeof address === 'object') ? address.port : (server.config.server.port || 5173);
          
          server.config.logger.info(
            `\n  \x1b[32m➜\x1b[39m  \x1b[1mFoldNet:\x1b[22m \x1b[36m\x1b[4mhttp://foldnet.localhost:${port}/\x1b[24m\x1b[39m (Password Manager Domain)`
          );
          origPrintUrls.call(server);
        };
      }
    },
    {
      name: 'onshape-api-handler',
      configureServer(server) {
        // 1. Config status endpoint
        server.middlewares.use('/api/onshape/config-status', (req, res) => {
          const config = getLocalOnshapeConfig();
          res.setHeader('Content-Type', 'application/json');
          if (config) {
            res.end(JSON.stringify({
              configured: true,
              source: 'file',
              accessKeyPreview: config.accessKey.slice(0, 8) + '...'
            }));
          } else {
            res.end(JSON.stringify({
              configured: false,
              source: null
            }));
          }
        });

        // 2. Proxy endpoint for Onshape API with automatic redirect following
        server.middlewares.use('/api/onshape/proxy', (req, res) => {
          const reqUrl = new URL(req.url, 'http://localhost');
          const targetEndpoint = reqUrl.searchParams.get('endpoint');
          if (!targetEndpoint) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Missing endpoint parameter' }));
            return;
          }

          const headerAccessKey = req.headers['x-onshape-access-key'];
          const headerSecretKey = req.headers['x-onshape-secret-key'];

          let accessKey = headerAccessKey;
          let secretKey = headerSecretKey;

          if (!accessKey || !secretKey) {
            const localConfig = getLocalOnshapeConfig();
            if (localConfig) {
              accessKey = localConfig.accessKey;
              secretKey = localConfig.secretKey;
            }
          }

          if (!accessKey || !secretKey) {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              error: 'No Onshape credentials provided. Configure onshape_config.json or pass credentials.'
            }));
            return;
          }

          const method = req.method || 'GET';

          function doProxy(currentUrlStr, redirectCount = 0) {
            if (redirectCount > 5) {
              res.statusCode = 502;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Too many redirects from Onshape' }));
              return;
            }

            const currentUrl = new URL(currentUrlStr, 'https://cad.onshape.com');
            const onshapeHeaders = generateOnshapeHeaders(
              method,
              currentUrl.pathname + currentUrl.search,
              accessKey,
              secretKey
            );

            const options = {
              hostname: currentUrl.hostname,
              path: currentUrl.pathname + currentUrl.search,
              method: method,
              headers: {
                ...onshapeHeaders,
                'User-Agent': 'FoldNet-CAD-Bridge/1.0'
              }
            };

            const proxyReq = https.request(options, (proxyRes) => {
              if ([301, 302, 303, 307, 308].includes(proxyRes.statusCode) && proxyRes.headers.location) {
                const redirectTarget = new URL(proxyRes.headers.location, currentUrl).toString();
                proxyRes.resume();
                doProxy(redirectTarget, redirectCount + 1);
                return;
              }

              res.statusCode = proxyRes.statusCode || 200;
              for (const [key, value] of Object.entries(proxyRes.headers)) {
                if (key.toLowerCase() !== 'content-security-policy') {
                  res.setHeader(key, value);
                }
              }
              proxyRes.pipe(res);
            });

            proxyReq.on('error', (err) => {
              console.error('[Onshape Proxy Error]:', err.message);
              res.statusCode = 502;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: `Onshape gateway error: ${err.message}` }));
            });

            if (req.method === 'POST' || req.method === 'PUT') {
              req.pipe(proxyReq);
            } else {
              proxyReq.end();
            }
          }

          doProxy(targetEndpoint);
        });
      }
    }
  ]
});
