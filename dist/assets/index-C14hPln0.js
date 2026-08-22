(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ja=1.1,Qa="BoxNetGenerator",tl="Six-Sided Cube Box Net with Attached Lid",el=["creasePattern"],nl=["2D"],il=[[1,0],[2,0],[1,1],[2,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3],[1,4],[2,4]],sl=[[0,1],[1,3],[3,6],[6,7],[7,11],[11,10],[10,13],[13,12],[12,9],[9,8],[8,4],[4,5],[5,2],[2,0],[2,3],[5,6],[6,10],[9,10],[5,9]],rl=["B","B","B","B","B","B","B","B","B","B","B","B","B","B","V","V","V","V","V"],ol=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,90,90,90,90,90],al=[[0,1,3,2],[2,3,6,5],[4,5,9,8],[5,6,10,9],[6,7,11,10],[9,10,13,12]],mc={file_spec:Ja,file_creator:Qa,file_title:tl,file_classes:el,frame_attributes:nl,vertices_coords:il,edges_vertices:sl,edges_assignment:rl,edges_foldAngle:ol,faces_vertices:al},gc=Object.freeze(Object.defineProperty({__proto__:null,default:mc,edges_assignment:rl,edges_foldAngle:ol,edges_vertices:sl,faces_vertices:al,file_classes:el,file_creator:Qa,file_spec:Ja,file_title:tl,frame_attributes:nl,vertices_coords:il},Symbol.toStringTag,{value:"Module"})),ll=1.1,cl="NotchedCubeGenerator",hl="Notched Cube Net (Cube with Corner Subcube Subtracted)",ul=["creasePattern"],dl=["2D"],fl=[[2,2],[3,2],[3,3],[2,3],[4,2],[4,3],[3,4],[2,4],[4,4],[2,1],[3,1],[4,1],[2,0],[3,0],[4,0],[1,2],[1,3],[1,4],[0,2],[0,3],[0,4],[-1,2],[-1,3],[-1,4],[-2,2],[-2,3],[3,5],[2,5],[4,5],[3,6],[2,6],[5,2],[5,3],[5,4],[6,2],[6,3],[4,6],[4,7],[3,7],[5,6],[5,7],[2,7],[2,6]],pl=[[0,1],[1,2],[2,3],[0,3],[1,4],[4,5],[5,2],[2,6],[6,7],[3,7],[5,8],[6,8],[9,10],[1,10],[0,9],[10,11],[4,11],[12,13],[10,13],[9,12],[13,14],[11,14],[0,15],[3,16],[15,16],[7,17],[16,17],[15,18],[16,19],[18,19],[17,20],[19,20],[18,21],[19,22],[21,22],[20,23],[22,23],[21,24],[22,25],[24,25],[6,26],[26,27],[7,27],[8,28],[26,28],[26,29],[29,30],[27,30],[4,31],[31,32],[5,32],[32,33],[8,33],[31,34],[34,35],[32,35],[28,36],[29,36],[36,37],[37,38],[29,38],[42,41],[38,41],[29,42]],ml=["V","F","F","V","V","V","F","F","V","V","V","V","F","F","B","F","B","B","F","B","B","B","B","F","F","B","F","B","F","V","B","V","B","F","F","B","B","B","B","B","F","F","B","B","V","B","B","B","B","F","F","B","B","B","B","B","B","M","B","B","M","B","B","B"],gl=[90,0,0,90,90,90,0,0,90,90,90,90,0,0,null,0,null,null,0,null,null,null,null,0,0,null,0,null,0,90,null,90,null,0,0,null,null,null,null,null,0,0,null,null,90,null,null,null,null,0,0,null,null,null,null,null,null,-90,null,null,-90,null,null,null],_l=[[0,1,2,3],[1,4,5,2],[3,2,6,7],[2,5,8,6],[9,10,1,0],[10,11,4,1],[12,13,10,9],[13,14,11,10],[15,0,3,16],[16,3,7,17],[18,15,16,19],[19,16,17,20],[21,18,19,22],[22,19,20,23],[24,21,22,25],[7,6,26,27],[6,8,28,26],[27,26,29,30],[4,31,32,5],[5,32,33,8],[31,34,35,32],[26,28,36,29],[29,36,37,38],[42,29,38,41]],_c={file_spec:ll,file_creator:cl,file_title:hl,file_classes:ul,frame_attributes:dl,vertices_coords:fl,edges_vertices:pl,edges_assignment:ml,edges_foldAngle:gl,faces_vertices:_l},vc=Object.freeze(Object.defineProperty({__proto__:null,default:_c,edges_assignment:ml,edges_foldAngle:gl,edges_vertices:pl,faces_vertices:_l,file_classes:ul,file_creator:cl,file_spec:ll,file_title:hl,frame_attributes:dl,vertices_coords:fl},Symbol.toStringTag,{value:"Module"})),vl=1.1,xl="SubdividedNotchedCubeGenerator",Al="Subdivided Notched Cube Net (3x3 Sub-Squares Per Face, 216 Faces)",Ml=["creasePattern"],El=["2D"],Sl=[[2,2],[2.3333333333333335,2],[2.6666666666666665,2],[3,2],[2,2.3333333333333335],[2.3333333333333335,2.3333333333333335],[2.6666666666666665,2.3333333333333335],[3,2.3333333333333335],[2,2.6666666666666665],[2.3333333333333335,2.6666666666666665],[2.6666666666666665,2.6666666666666665],[3,2.6666666666666665],[2,3],[2.3333333333333335,3],[2.6666666666666665,3],[3,3],[3.3333333333333335,2],[3.6666666666666665,2],[4,2],[3.3333333333333335,2.3333333333333335],[3.6666666666666665,2.3333333333333335],[4,2.3333333333333335],[3.3333333333333335,2.6666666666666665],[3.6666666666666665,2.6666666666666665],[4,2.6666666666666665],[3.3333333333333335,3],[3.6666666666666665,3],[4,3],[2,3.3333333333333335],[2.3333333333333335,3.3333333333333335],[2.6666666666666665,3.3333333333333335],[3,3.3333333333333335],[2,3.6666666666666665],[2.3333333333333335,3.6666666666666665],[2.6666666666666665,3.6666666666666665],[3,3.6666666666666665],[2,4],[2.3333333333333335,4],[2.6666666666666665,4],[3,4],[3.3333333333333335,3.3333333333333335],[3.6666666666666665,3.3333333333333335],[4,3.3333333333333335],[3.3333333333333335,3.6666666666666665],[3.6666666666666665,3.6666666666666665],[4,3.6666666666666665],[3.3333333333333335,4],[3.6666666666666665,4],[4,4],[2,1],[2.3333333333333335,1],[2.6666666666666665,1],[3,1],[2,1.3333333333333333],[2.3333333333333335,1.3333333333333333],[2.6666666666666665,1.3333333333333333],[3,1.3333333333333333],[2,1.6666666666666667],[2.3333333333333335,1.6666666666666667],[2.6666666666666665,1.6666666666666667],[3,1.6666666666666667],[3.3333333333333335,1],[3.6666666666666665,1],[4,1],[3.3333333333333335,1.3333333333333333],[3.6666666666666665,1.3333333333333333],[4,1.3333333333333333],[3.3333333333333335,1.6666666666666667],[3.6666666666666665,1.6666666666666667],[4,1.6666666666666667],[2,0],[2.3333333333333335,0],[2.6666666666666665,0],[3,0],[2,.3333333333333333],[2.3333333333333335,.3333333333333333],[2.6666666666666665,.3333333333333333],[3,.3333333333333333],[2,.6666666666666666],[2.3333333333333335,.6666666666666666],[2.6666666666666665,.6666666666666666],[3,.6666666666666666],[3.3333333333333335,0],[3.6666666666666665,0],[4,0],[3.3333333333333335,.3333333333333333],[3.6666666666666665,.3333333333333333],[4,.3333333333333333],[3.3333333333333335,.6666666666666666],[3.6666666666666665,.6666666666666666],[4,.6666666666666666],[1,2],[1.3333333333333333,2],[1.6666666666666667,2],[1,2.3333333333333335],[1.3333333333333333,2.3333333333333335],[1.6666666666666667,2.3333333333333335],[1,2.6666666666666665],[1.3333333333333333,2.6666666666666665],[1.6666666666666667,2.6666666666666665],[1,3],[1.3333333333333333,3],[1.6666666666666667,3],[1,3.3333333333333335],[1.3333333333333333,3.3333333333333335],[1.6666666666666667,3.3333333333333335],[1,3.6666666666666665],[1.3333333333333333,3.6666666666666665],[1.6666666666666667,3.6666666666666665],[1,4],[1.3333333333333333,4],[1.6666666666666667,4],[0,2],[.3333333333333333,2],[.6666666666666666,2],[0,2.3333333333333335],[.3333333333333333,2.3333333333333335],[.6666666666666666,2.3333333333333335],[0,2.6666666666666665],[.3333333333333333,2.6666666666666665],[.6666666666666666,2.6666666666666665],[0,3],[.3333333333333333,3],[.6666666666666666,3],[0,3.3333333333333335],[.3333333333333333,3.3333333333333335],[.6666666666666666,3.3333333333333335],[0,3.6666666666666665],[.3333333333333333,3.6666666666666665],[.6666666666666666,3.6666666666666665],[0,4],[.3333333333333333,4],[.6666666666666666,4],[-1,2],[-.6666666666666666,2],[-.3333333333333333,2],[-1,2.3333333333333335],[-.6666666666666666,2.3333333333333335],[-.3333333333333333,2.3333333333333335],[-1,2.6666666666666665],[-.6666666666666666,2.6666666666666665],[-.3333333333333333,2.6666666666666665],[-1,3],[-.6666666666666666,3],[-.3333333333333333,3],[-1,3.3333333333333335],[-.6666666666666666,3.3333333333333335],[-.3333333333333333,3.3333333333333335],[-1,3.6666666666666665],[-.6666666666666666,3.6666666666666665],[-.3333333333333333,3.6666666666666665],[-1,4],[-.6666666666666666,4],[-.3333333333333333,4],[-2,2],[-1.6666666666666667,2],[-1.3333333333333333,2],[-2,2.3333333333333335],[-1.6666666666666667,2.3333333333333335],[-1.3333333333333333,2.3333333333333335],[-2,2.6666666666666665],[-1.6666666666666667,2.6666666666666665],[-1.3333333333333333,2.6666666666666665],[-2,3],[-1.6666666666666667,3],[-1.3333333333333333,3],[2,4.333333333333333],[2.3333333333333335,4.333333333333333],[2.6666666666666665,4.333333333333333],[3,4.333333333333333],[2,4.666666666666667],[2.3333333333333335,4.666666666666667],[2.6666666666666665,4.666666666666667],[3,4.666666666666667],[2,5],[2.3333333333333335,5],[2.6666666666666665,5],[3,5],[3.3333333333333335,4.333333333333333],[3.6666666666666665,4.333333333333333],[4,4.333333333333333],[3.3333333333333335,4.666666666666667],[3.6666666666666665,4.666666666666667],[4,4.666666666666667],[3.3333333333333335,5],[3.6666666666666665,5],[4,5],[2,5.333333333333333],[2.3333333333333335,5.333333333333333],[2.6666666666666665,5.333333333333333],[3,5.333333333333333],[2,5.666666666666667],[2.3333333333333335,5.666666666666667],[2.6666666666666665,5.666666666666667],[3,5.666666666666667],[2,6],[2.3333333333333335,6],[2.6666666666666665,6],[3,6],[4.333333333333333,2],[4.666666666666667,2],[5,2],[4.333333333333333,2.3333333333333335],[4.666666666666667,2.3333333333333335],[5,2.3333333333333335],[4.333333333333333,2.6666666666666665],[4.666666666666667,2.6666666666666665],[5,2.6666666666666665],[4.333333333333333,3],[4.666666666666667,3],[5,3],[4.333333333333333,3.3333333333333335],[4.666666666666667,3.3333333333333335],[5,3.3333333333333335],[4.333333333333333,3.6666666666666665],[4.666666666666667,3.6666666666666665],[5,3.6666666666666665],[4.333333333333333,4],[4.666666666666667,4],[5,4],[5.333333333333333,2],[5.666666666666667,2],[6,2],[5.333333333333333,2.3333333333333335],[5.666666666666667,2.3333333333333335],[6,2.3333333333333335],[5.333333333333333,2.6666666666666665],[5.666666666666667,2.6666666666666665],[6,2.6666666666666665],[5.333333333333333,3],[5.666666666666667,3],[6,3],[3,5.333333333333333],[3.3333333333333335,5.333333333333333],[3.6666666666666665,5.333333333333333],[4,5.333333333333333],[3,5.666666666666667],[3.3333333333333335,5.666666666666667],[3.6666666666666665,5.666666666666667],[4,5.666666666666667],[3.3333333333333335,6],[3.6666666666666665,6],[4,6],[3,6.333333333333333],[3.3333333333333335,6.333333333333333],[3.6666666666666665,6.333333333333333],[4,6.333333333333333],[3,6.666666666666667],[3.3333333333333335,6.666666666666667],[3.6666666666666665,6.666666666666667],[4,6.666666666666667],[3,7],[3.3333333333333335,7],[3.6666666666666665,7],[4,7],[2,6],[2.3333333333333335,6],[2.6666666666666665,6],[2,6.333333333333333],[2.3333333333333335,6.333333333333333],[2.6666666666666665,6.333333333333333],[2,6.666666666666667],[2.3333333333333335,6.666666666666667],[2.6666666666666665,6.666666666666667],[2,7],[2.3333333333333335,7],[2.6666666666666665,7]],yl=[[0,1],[1,5],[4,5],[0,4],[1,2],[2,6],[5,6],[2,3],[3,7],[6,7],[5,9],[8,9],[4,8],[6,10],[9,10],[7,11],[10,11],[9,13],[12,13],[8,12],[10,14],[13,14],[11,15],[14,15],[3,16],[16,19],[7,19],[16,17],[17,20],[19,20],[17,18],[18,21],[20,21],[19,22],[11,22],[20,23],[22,23],[21,24],[23,24],[22,25],[15,25],[23,26],[25,26],[24,27],[26,27],[13,29],[28,29],[12,28],[14,30],[29,30],[15,31],[30,31],[29,33],[32,33],[28,32],[30,34],[33,34],[31,35],[34,35],[33,37],[36,37],[32,36],[34,38],[37,38],[35,39],[38,39],[25,40],[31,40],[26,41],[40,41],[27,42],[41,42],[40,43],[35,43],[41,44],[43,44],[42,45],[44,45],[43,46],[39,46],[44,47],[46,47],[45,48],[47,48],[49,50],[50,54],[53,54],[49,53],[50,51],[51,55],[54,55],[51,52],[52,56],[55,56],[54,58],[57,58],[53,57],[55,59],[58,59],[56,60],[59,60],[1,58],[0,57],[2,59],[3,60],[52,61],[61,64],[56,64],[61,62],[62,65],[64,65],[62,63],[63,66],[65,66],[64,67],[60,67],[65,68],[67,68],[66,69],[68,69],[16,67],[17,68],[18,69],[70,71],[71,75],[74,75],[70,74],[71,72],[72,76],[75,76],[72,73],[73,77],[76,77],[75,79],[78,79],[74,78],[76,80],[79,80],[77,81],[80,81],[50,79],[49,78],[51,80],[52,81],[73,82],[82,85],[77,85],[82,83],[83,86],[85,86],[83,84],[84,87],[86,87],[85,88],[81,88],[86,89],[88,89],[87,90],[89,90],[61,88],[62,89],[63,90],[91,92],[92,95],[94,95],[91,94],[92,93],[93,96],[95,96],[0,93],[4,96],[95,98],[97,98],[94,97],[96,99],[98,99],[8,99],[98,101],[100,101],[97,100],[99,102],[101,102],[12,102],[101,104],[103,104],[100,103],[102,105],[104,105],[28,105],[104,107],[106,107],[103,106],[105,108],[107,108],[32,108],[107,110],[109,110],[106,109],[108,111],[110,111],[36,111],[112,113],[113,116],[115,116],[112,115],[113,114],[114,117],[116,117],[91,114],[94,117],[116,119],[118,119],[115,118],[117,120],[119,120],[97,120],[119,122],[121,122],[118,121],[120,123],[122,123],[100,123],[122,125],[124,125],[121,124],[123,126],[125,126],[103,126],[125,128],[127,128],[124,127],[126,129],[128,129],[106,129],[128,131],[130,131],[127,130],[129,132],[131,132],[109,132],[133,134],[134,137],[136,137],[133,136],[134,135],[135,138],[137,138],[112,135],[115,138],[137,140],[139,140],[136,139],[138,141],[140,141],[118,141],[140,143],[142,143],[139,142],[141,144],[143,144],[121,144],[143,146],[145,146],[142,145],[144,147],[146,147],[124,147],[146,149],[148,149],[145,148],[147,150],[149,150],[127,150],[149,152],[151,152],[148,151],[150,153],[152,153],[130,153],[154,155],[155,158],[157,158],[154,157],[155,156],[156,159],[158,159],[133,156],[136,159],[158,161],[160,161],[157,160],[159,162],[161,162],[139,162],[161,164],[163,164],[160,163],[162,165],[164,165],[142,165],[37,167],[166,167],[36,166],[38,168],[167,168],[39,169],[168,169],[167,171],[170,171],[166,170],[168,172],[171,172],[169,173],[172,173],[171,175],[174,175],[170,174],[172,176],[175,176],[173,177],[176,177],[46,178],[169,178],[47,179],[178,179],[48,180],[179,180],[178,181],[173,181],[179,182],[181,182],[180,183],[182,183],[181,184],[177,184],[182,185],[184,185],[183,186],[185,186],[175,188],[187,188],[174,187],[176,189],[188,189],[177,190],[189,190],[188,192],[191,192],[187,191],[189,193],[192,193],[190,194],[193,194],[192,196],[195,196],[191,195],[193,197],[196,197],[194,198],[197,198],[18,199],[199,202],[21,202],[199,200],[200,203],[202,203],[200,201],[201,204],[203,204],[202,205],[24,205],[203,206],[205,206],[204,207],[206,207],[205,208],[27,208],[206,209],[208,209],[207,210],[209,210],[208,211],[42,211],[209,212],[211,212],[210,213],[212,213],[211,214],[45,214],[212,215],[214,215],[213,216],[215,216],[214,217],[48,217],[215,218],[217,218],[216,219],[218,219],[201,220],[220,223],[204,223],[220,221],[221,224],[223,224],[221,222],[222,225],[224,225],[223,226],[207,226],[224,227],[226,227],[225,228],[227,228],[226,229],[210,229],[227,230],[229,230],[228,231],[230,231],[184,233],[232,233],[177,232],[185,234],[233,234],[186,235],[234,235],[233,237],[236,237],[232,236],[234,238],[237,238],[235,239],[238,239],[237,240],[198,240],[198,236],[238,241],[240,241],[239,242],[241,242],[240,244],[243,244],[198,243],[241,245],[244,245],[242,246],[245,246],[244,248],[247,248],[243,247],[245,249],[248,249],[246,250],[249,250],[248,252],[251,252],[247,251],[249,253],[252,253],[250,254],[253,254],[255,256],[256,259],[258,259],[255,258],[256,257],[257,260],[259,260],[198,257],[243,260],[259,262],[261,262],[258,261],[260,263],[262,263],[247,263],[262,265],[264,265],[261,264],[263,266],[265,266],[251,266]],bl=["V","F","F","V","V","F","F","V","F","F","F","F","V","F","F","F","F","F","F","V","F","F","F","F","V","F","F","V","F","F","V","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","V","F","F","F","F","F","F","V","F","F","F","F","F","V","V","F","V","F","V","F","F","F","F","V","F","F","F","F","F","V","F","F","V","F","V","V","V","F","F","F","B","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","B","B","F","F","B","B","F","F","B","F","F","F","F","B","F","F","F","F","F","B","F","F","B","F","F","B","F","F","B","B","F","F","F","F","F","B","F","F","F","B","B","F","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","B","B","B","F","F","V","B","F","F","B","F","F","F","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","F","B","V","F","B","B","B","F","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","F","B","B","F","B","B","B","F","F","B","B","F","F","B","F","F","F","B","F","F","F","F","B","B","F","B","B","F","F","B","F","F","F","F","F","F","B","F","F","F","F","F","F","B","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","V","F","V","B","V","F","F","B","F","F","B","F","F","F","B","F","F","B","F","F","B","B","F","B","B","B","B","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","B","F","B","B","B","B","F","F","B","F","F","B","B","F","F","F","F","F","B","F","F","B","F","B","B","B","F","F","B","F","F","B","F","F","F","B","F","F","B","F","F","M","B","F","M","B","M","F","F","M","F","F","B","F","F","F","M","F","F","B","F","F","B","M","F","B","B","B","B","F","F","B","B","F","F","B","F","F","F","B","F","F","F","F","B","B","F","B","B"],Tl=[90,0,0,90,90,0,0,90,0,0,0,0,90,0,0,0,0,0,0,90,0,0,0,0,90,0,0,90,0,0,90,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,90,0,0,0,0,0,0,90,0,0,0,0,0,90,90,0,90,0,90,0,0,0,0,90,0,0,0,0,0,90,0,0,90,0,90,90,90,0,0,0,null,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,null,null,0,0,null,null,0,0,null,0,0,0,0,null,0,0,0,0,0,null,0,0,null,0,0,null,0,0,null,null,0,0,0,0,0,null,0,0,0,null,null,0,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,null,null,null,0,0,90,null,0,0,null,0,0,0,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,0,null,90,0,null,null,null,0,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,null,null,0,null,null,null,0,0,null,null,0,0,null,0,0,0,null,0,0,0,0,null,null,0,null,null,0,0,null,0,0,0,0,0,0,null,0,0,0,0,0,0,null,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,90,0,90,null,90,0,0,null,0,0,null,0,0,0,null,0,0,null,0,0,null,null,0,null,null,null,null,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,null,0,null,null,null,null,0,0,null,0,0,null,null,0,0,0,0,0,null,0,0,null,0,null,null,null,0,0,null,0,0,null,0,0,0,null,0,0,null,0,0,-90,null,0,-90,null,-90,0,0,-90,0,0,null,0,0,0,-90,0,0,null,0,0,null,-90,0,null,null,null,null,0,0,null,null,0,0,null,0,0,0,null,0,0,0,0,null,null,0,null,null],wl=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[4,5,9,8],[5,6,10,9],[6,7,11,10],[8,9,13,12],[9,10,14,13],[10,11,15,14],[3,16,19,7],[16,17,20,19],[17,18,21,20],[7,19,22,11],[19,20,23,22],[20,21,24,23],[11,22,25,15],[22,23,26,25],[23,24,27,26],[12,13,29,28],[13,14,30,29],[14,15,31,30],[28,29,33,32],[29,30,34,33],[30,31,35,34],[32,33,37,36],[33,34,38,37],[34,35,39,38],[15,25,40,31],[25,26,41,40],[26,27,42,41],[31,40,43,35],[40,41,44,43],[41,42,45,44],[35,43,46,39],[43,44,47,46],[44,45,48,47],[49,50,54,53],[50,51,55,54],[51,52,56,55],[53,54,58,57],[54,55,59,58],[55,56,60,59],[57,58,1,0],[58,59,2,1],[59,60,3,2],[52,61,64,56],[61,62,65,64],[62,63,66,65],[56,64,67,60],[64,65,68,67],[65,66,69,68],[60,67,16,3],[67,68,17,16],[68,69,18,17],[70,71,75,74],[71,72,76,75],[72,73,77,76],[74,75,79,78],[75,76,80,79],[76,77,81,80],[78,79,50,49],[79,80,51,50],[80,81,52,51],[73,82,85,77],[82,83,86,85],[83,84,87,86],[77,85,88,81],[85,86,89,88],[86,87,90,89],[81,88,61,52],[88,89,62,61],[89,90,63,62],[91,92,95,94],[92,93,96,95],[93,0,4,96],[94,95,98,97],[95,96,99,98],[96,4,8,99],[97,98,101,100],[98,99,102,101],[99,8,12,102],[100,101,104,103],[101,102,105,104],[102,12,28,105],[103,104,107,106],[104,105,108,107],[105,28,32,108],[106,107,110,109],[107,108,111,110],[108,32,36,111],[112,113,116,115],[113,114,117,116],[114,91,94,117],[115,116,119,118],[116,117,120,119],[117,94,97,120],[118,119,122,121],[119,120,123,122],[120,97,100,123],[121,122,125,124],[122,123,126,125],[123,100,103,126],[124,125,128,127],[125,126,129,128],[126,103,106,129],[127,128,131,130],[128,129,132,131],[129,106,109,132],[133,134,137,136],[134,135,138,137],[135,112,115,138],[136,137,140,139],[137,138,141,140],[138,115,118,141],[139,140,143,142],[140,141,144,143],[141,118,121,144],[142,143,146,145],[143,144,147,146],[144,121,124,147],[145,146,149,148],[146,147,150,149],[147,124,127,150],[148,149,152,151],[149,150,153,152],[150,127,130,153],[154,155,158,157],[155,156,159,158],[156,133,136,159],[157,158,161,160],[158,159,162,161],[159,136,139,162],[160,161,164,163],[161,162,165,164],[162,139,142,165],[36,37,167,166],[37,38,168,167],[38,39,169,168],[166,167,171,170],[167,168,172,171],[168,169,173,172],[170,171,175,174],[171,172,176,175],[172,173,177,176],[39,46,178,169],[46,47,179,178],[47,48,180,179],[169,178,181,173],[178,179,182,181],[179,180,183,182],[173,181,184,177],[181,182,185,184],[182,183,186,185],[174,175,188,187],[175,176,189,188],[176,177,190,189],[187,188,192,191],[188,189,193,192],[189,190,194,193],[191,192,196,195],[192,193,197,196],[193,194,198,197],[18,199,202,21],[199,200,203,202],[200,201,204,203],[21,202,205,24],[202,203,206,205],[203,204,207,206],[24,205,208,27],[205,206,209,208],[206,207,210,209],[27,208,211,42],[208,209,212,211],[209,210,213,212],[42,211,214,45],[211,212,215,214],[212,213,216,215],[45,214,217,48],[214,215,218,217],[215,216,219,218],[201,220,223,204],[220,221,224,223],[221,222,225,224],[204,223,226,207],[223,224,227,226],[224,225,228,227],[207,226,229,210],[226,227,230,229],[227,228,231,230],[177,184,233,232],[184,185,234,233],[185,186,235,234],[232,233,237,236],[233,234,238,237],[234,235,239,238],[236,237,240,198],[237,238,241,240],[238,239,242,241],[198,240,244,243],[240,241,245,244],[241,242,246,245],[243,244,248,247],[244,245,249,248],[245,246,250,249],[247,248,252,251],[248,249,253,252],[249,250,254,253],[255,256,259,258],[256,257,260,259],[257,198,243,260],[258,259,262,261],[259,260,263,262],[260,243,247,263],[261,262,265,264],[262,263,266,265],[263,247,251,266]],xc={file_spec:vl,file_creator:xl,file_title:Al,file_classes:Ml,frame_attributes:El,vertices_coords:Sl,edges_vertices:yl,edges_assignment:bl,edges_foldAngle:Tl,faces_vertices:wl},Ac=Object.freeze(Object.defineProperty({__proto__:null,default:xc,edges_assignment:bl,edges_foldAngle:Tl,edges_vertices:yl,faces_vertices:wl,file_classes:Ml,file_creator:xl,file_spec:vl,file_title:Al,frame_attributes:El,vertices_coords:Sl},Symbol.toStringTag,{value:"Module"})),Mc="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAgAAAAIAAAIC/AACkQgAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAApEIAAKRCAAAAAACAAAAAgAAAgL8AAKRCAAAAAAAApEIAAAAAAAAAAAAApEIAAAAAAACkQgAApEIAAAAAAAAAAIC/AAAAAAAApEIAAKRCAAAAAAAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAAAAAAgAAAgL8AAACAAACkQgAApEIAAKRCAAAAAAAApEIAAKRCAAAAAAAApEIAAAAAAAAAAIC/AAAAgAAAAIAAAKRCAACkQgAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAApEIAAAAAgL8AAACAAAAAgAAApEIAAKRCAAAAAAAApEIAAAAAAAAAAAAApEIAAAAAAACkQgAAAAAAAAAAAAAAAIC/AAAAAAAApEIAAAAAAECcqAAAyEIAAAAAAACkQgAApEIAAAAAAAAAAAAAAAAAgAAAgL8AQJyoAADIQgAAAAAAAMhCAADIQgAAAAAAAKRCAACkQgAAAAAAAAAAAAAAAAAAAACAvwAApEIAAKRCAAAAAAAAyEIAAMhCAAAAAAAApEIAAAAAAAAAAAAAAAAAgAAAAIAAAIC/AADIQgAAyEIAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAAAAAAAAAAACAAACAPwAAAAAAQJyoAADIQgAAyEIAAMhCAADIQgAAyEIAQJyoAADIQgAAAAAAAAAAAIAAAIA/AAAAAAAAyEIAAMhCAADIQgAAyEIAAMhCAAAAAABAnKgAAMhCAAAAAAAAAAAAAAAAgL8AAAAAAACkQgAAAAAAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAAKRCAAAAAACAAACAvwAAAAAAAMhCAAAAAAAAAAAAAMhCAAAAAAAAyEIAAKRCAAAAAAAApEIAAAAAAAAAAIC/AAAAAAAApEIAAAAAAACkQgAAyEIAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAgAAAgL8AAACAAADIQgAAAAAAAMhCAAAAAAAAAAAAAMhCAAAAAAAAAAAAAKRCAAAAAAAAAAAAgAAAgD8AAMhCAAAAAAAAyEIAAMhCAADIQgAAyEIAAAAAAAAAAAAAyEIAAAAAAAAAAACAAACAPwAAyEIAAMhCAADIQgBAnKgAAMhCAADIQgAAAAAAAAAAAADIQgAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAKRCAAAAAAAAAAAAAMhCAAAAAAAApEIAAKRCAAAAAIC/AABIpR3HY6YAAAAAAAAAAAAAyEIAQJyoAADIQgAAyEIAAAAAAACkQgAApEIAAAAAgL+P44qmAAAAgAAAAAAAAKRCAACkQgBAnKgAAMhCAADIQgAAAAAAAKRCAAAAAAAAAACAv4/jiqYAAACAAECcqAAAyEIAAMhCAECcqAAAyEIAAAAAAAAAAAAApEIAAAAAAAAAAIA/AAAAAAAAAAAAAMhCAADIQgAAyEIAAMhCAAAAAAAAyEIAAMhCAADIQgAAAAAAAAAAgD8AAACAAAAAgAAAyEIAAAAAAADIQgAAyEIAAAAAAAAAAAAAyEIAAMhCAAAAAAAA",Ec=Object.freeze(Object.defineProperty({__proto__:null,default:Mc},Symbol.toStringTag,{value:"Module"}));function Ro(i){if(!i||typeof i!="object")throw new Error("Invalid FOLD file: must be a JSON object.");const t=i.vertices_coords||[],e=i.faces_vertices||[],n=i.edges_vertices||[],s=i.edges_assignment||[],r=i.edges_foldAngle||[];if(t.length===0||e.length===0)throw new Error("Invalid FOLD file: missing vertices_coords or faces_vertices.");const o=t.map(h=>h.length===2?[h[0],h[1],0]:[h[0],h[1],h[2]||0]),a=n.map((h,u)=>{const d=r[u];if(d!=null)return d;switch((s[u]||"B").toUpperCase()){case"V":return 90;case"M":return-90;case"B":return 0;case"C":return 0;case"F":return 0;case"U":return 0;default:return 0}}),l=new Map;n.forEach((h,u)=>{const d=Math.min(h[0],h[1]),p=Math.max(h[0],h[1]);l.set(`${d}-${p}`,u)});const c={boundary:0,valley:0,mountain:0,cut:0,flat:0,unassigned:0};return s.forEach(h=>{switch((h||"B").toUpperCase()){case"B":c.boundary++;break;case"V":c.valley++;break;case"M":c.mountain++;break;case"C":c.cut++;break;case"F":c.flat++;break;case"U":c.unassigned++;break;default:c.boundary++;break}}),{raw:i,title:i.file_title||"Untitled Box Net",creator:i.file_creator||"Unknown",spec:i.file_spec||1.1,vertices:o,facesVertices:e,edgesVertices:n,edgesAssignment:s,edgesFoldAngle:a,edgeLookup:l,counts:{vertices:o.length,edges:n.length,faces:e.length,...c}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="170",oi={ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sc=0,Po=1,yc=2,Cl=1,Rl=2,nn=3,cn=0,Me=1,sn=2,Mn=0,ai=1,Do=2,Lo=3,Fo=4,bc=5,Fn=100,Tc=101,wc=102,Cc=103,Rc=104,Pc=200,Dc=201,Lc=202,Fc=203,_r=204,vr=205,Ic=206,Uc=207,Nc=208,Oc=209,Bc=210,zc=211,Vc=212,kc=213,Hc=214,xr=0,Ar=1,Mr=2,ui=3,Er=4,Sr=5,yr=6,br=7,lo=0,Gc=1,Wc=2,En=0,Xc=1,Yc=2,qc=3,jc=4,$c=5,Kc=6,Zc=7,Pl=300,di=301,fi=302,Tr=303,wr=304,Cs=306,Cr=1e3,Un=1001,Rr=1002,He=1003,Jc=1004,Vi=1005,Ye=1006,Ns=1007,Nn=1008,hn=1009,Dl=1010,Ll=1011,Di=1012,co=1013,On=1014,rn=1015,Ui=1016,ho=1017,uo=1018,pi=1020,Fl=35902,Il=1021,Ul=1022,ke=1023,Nl=1024,Ol=1025,li=1026,mi=1027,Bl=1028,fo=1029,zl=1030,po=1031,mo=1033,gs=33776,_s=33777,vs=33778,xs=33779,Pr=35840,Dr=35841,Lr=35842,Fr=35843,Ir=36196,Ur=37492,Nr=37496,Or=37808,Br=37809,zr=37810,Vr=37811,kr=37812,Hr=37813,Gr=37814,Wr=37815,Xr=37816,Yr=37817,qr=37818,jr=37819,$r=37820,Kr=37821,As=36492,Zr=36494,Jr=36495,Vl=36283,Qr=36284,to=36285,eo=36286,Qc=3200,th=3201,go=0,eh=1,An="",be="srgb",_i="srgb-linear",Rs="linear",qt="srgb",Gn=7680,Io=519,nh=512,ih=513,sh=514,kl=515,rh=516,oh=517,ah=518,lh=519,Uo=35044,No="300 es",on=2e3,Ss=2001;class kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ms=Math.PI/180,no=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function ch(i,t){return(i%t+t)%t}function Os(i,t,e){return(1-e)*i+e*t}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hh={DEG2RAD:Ms};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,s,r,o,a,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],E=s[4],v=s[7],L=s[2],T=s[5],w=s[8];return r[0]=o*_+a*y+l*L,r[3]=o*m+a*E+l*T,r[6]=o*f+a*v+l*w,r[1]=c*_+h*y+u*L,r[4]=c*m+h*E+u*T,r[7]=c*f+h*v+u*w,r[2]=d*_+p*y+g*L,r[5]=d*m+p*E+g*T,r[8]=d*f+p*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Dt;function Hl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uh(){const i=ys("canvas");return i.style.display="block",i}const Oo={};function Ci(i){i in Oo||(Oo[i]=!0,console.warn(i))}function dh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ph(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const kt={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===qt&&(i.r=ln(i.r),i.g=ln(i.g),i.b=ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===qt&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?Rs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bo=[.64,.33,.3,.6,.15,.06],zo=[.2126,.7152,.0722],Vo=[.3127,.329],ko=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);kt.define({[_i]:{primaries:Bo,whitePoint:Vo,transfer:Rs,toXYZ:ko,fromXYZ:Ho,luminanceCoefficients:zo,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Bo,whitePoint:Vo,transfer:qt,toXYZ:ko,fromXYZ:Ho,luminanceCoefficients:zo,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});let Wn;class mh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=ys("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ln(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gh=0;class Gl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zs(s[o].image)):r.push(zs(s[o]))}else r=zs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _h=0;class Te extends kn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Un,s=Un,r=Ye,o=Nn,a=ke,l=hn,c=Te.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Ni(),this.name="",this.source=new Gl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Pl;Te.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(p+1)/2,L=(f+1)/2,T=(h+d)/4,w=(u+_)/4,I=(g+m)/4;return E>v&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=w/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=I/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vh extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wl extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xh extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const L=Math.sqrt(E),T=Math.atan2(L,f*y);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}const v=a*y;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Go.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Go.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vs.copy(this).projectOnVector(t),this.sub(Vs)}reflect(t){return this.sub(Vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new C,Go=new zn;class Sn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oe):Oe.fromBufferAttribute(r,o),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),Hi.subVectors(this.max,Si),Xn.subVectors(t.a,Si),Yn.subVectors(t.b,Si),qn.subVectors(t.c,Si),fn.subVectors(Yn,Xn),pn.subVectors(qn,Yn),Tn.subVectors(Xn,qn);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Tn.z,Tn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Tn.z,0,-Tn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Tn.y,Tn.x,0];return!ks(e,Xn,Yn,qn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!ks(e,Xn,Yn,qn,Hi))?!1:(Gi.crossVectors(fn,pn),e=[Gi.x,Gi.y,Gi.z],ks(e,Xn,Yn,qn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new C,new C,new C,new C,new C,new C,new C,new C],Oe=new C,ki=new Sn,Xn=new C,Yn=new C,qn=new C,fn=new C,pn=new C,Tn=new C,Si=new C,Hi=new C,Gi=new C,wn=new C;function ks(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wn.fromArray(i,r);const a=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),l=t.dot(wn),c=e.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ah=new Sn,yi=new C,Hs=new C;class Oi{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ah.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Hs)),this.expandByPoint(yi.copy(t.center).sub(Hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new C,Gs=new C,Wi=new C,mn=new C,Ws=new C,Xi=new C,Xs=new C;class Ps{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gs.copy(t).add(e).multiplyScalar(.5),Wi.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(Gs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wi),a=mn.dot(this.direction),l=-mn.dot(Wi),c=mn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gs).addScaledVector(Wi,d),p}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),s=Ze.dot(Ze)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,s,r){Ws.subVectors(e,t),Xi.subVectors(n,t),Xs.crossVectors(Ws,Xi);let o=this.direction.dot(Xs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mn.subVectors(this.origin,t);const l=a*this.direction.dot(Xi.crossVectors(mn,Xi));if(l<0)return null;const c=a*this.direction.dot(Ws.cross(mn));if(c<0||l+c>o)return null;const h=-a*mn.dot(Xs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/jn.setFromMatrixColumn(t,0).length(),r=1/jn.setFromMatrixColumn(t,1).length(),o=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mh,t,Eh)}lookAt(t,e,n){const s=this.elements;return Ce.subVectors(t,e),Ce.lengthSq()===0&&(Ce.z=1),Ce.normalize(),gn.crossVectors(n,Ce),gn.lengthSq()===0&&(Math.abs(n.z)===1?Ce.x+=1e-4:Ce.z+=1e-4,Ce.normalize(),gn.crossVectors(n,Ce)),gn.normalize(),Yi.crossVectors(Ce,gn),s[0]=gn.x,s[4]=Yi.x,s[8]=Ce.x,s[1]=gn.y,s[5]=Yi.y,s[9]=Ce.y,s[2]=gn.z,s[6]=Yi.z,s[10]=Ce.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],E=n[7],v=n[11],L=n[15],T=s[0],w=s[4],I=s[8],S=s[12],M=s[1],R=s[5],W=s[9],U=s[13],H=s[2],q=s[6],k=s[10],K=s[14],V=s[3],et=s[7],ct=s[11],_t=s[15];return r[0]=o*T+a*M+l*H+c*V,r[4]=o*w+a*R+l*q+c*et,r[8]=o*I+a*W+l*k+c*ct,r[12]=o*S+a*U+l*K+c*_t,r[1]=h*T+u*M+d*H+p*V,r[5]=h*w+u*R+d*q+p*et,r[9]=h*I+u*W+d*k+p*ct,r[13]=h*S+u*U+d*K+p*_t,r[2]=g*T+_*M+m*H+f*V,r[6]=g*w+_*R+m*q+f*et,r[10]=g*I+_*W+m*k+f*ct,r[14]=g*S+_*U+m*K+f*_t,r[3]=y*T+E*M+v*H+L*V,r[7]=y*w+E*R+v*q+L*et,r[11]=y*I+E*W+v*k+L*ct,r[15]=y*S+E*U+v*K+L*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,E=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,L=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*y+n*E+s*v+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=y*w,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*w,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*w,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*w,t[4]=E*w,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*w,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*w,t[8]=v*w,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*w,t[12]=L*w,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,y=l*c,E=l*h,v=l*u,L=n.x,T=n.y,w=n.z;return s[0]=(1-(_+f))*L,s[1]=(p+v)*L,s[2]=(g-E)*L,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(d+f))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+E)*w,s[9]=(m-y)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=jn.set(s[0],s[1],s[2]).length();const o=jn.set(s[4],s[5],s[6]).length(),a=jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);const c=1/r,h=1/o,u=1/a;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=u,Be.elements[9]*=u,Be.elements[10]*=u,e.setFromRotationMatrix(Be),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=on){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===on)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ss)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=on){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let g,_;if(a===on)g=(o+r)*u,_=-2*u;else if(a===Ss)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new C,Be=new Gt,Mh=new C(0,0,0),Eh=new C(1,1,1),gn=new C,Yi=new C,Ce=new C,Wo=new Gt,Xo=new zn;class Ge{constructor(t=0,e=0,n=0,s=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sh=0;const Yo=new C,$n=new zn,Je=new Gt,qi=new C,bi=new C,yh=new C,bh=new zn,qo=new C(1,0,0),jo=new C(0,1,0),$o=new C(0,0,1),Ko={type:"added"},Th={type:"removed"},Kn={type:"childadded",child:null},Ys={type:"childremoved",child:null};class de extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new C,e=new Ge,n=new zn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Dt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(qo,t)}rotateY(t){return this.rotateOnAxis(jo,t)}rotateZ(t){return this.rotateOnAxis($o,t)}translateOnAxis(t,e){return Yo.copy(t).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qo,t)}translateY(t){return this.translateOnAxis(jo,t)}translateZ(t){return this.translateOnAxis($o,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qi.copy(t):qi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(bi,qi,this.up):Je.lookAt(qi,bi,this.up),this.quaternion.setFromRotationMatrix(Je),s&&(Je.extractRotation(s.matrixWorld),$n.setFromRotationMatrix(Je),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ko),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Th),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ko),Kn.child=t,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new C(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new C,Qe=new C,qs=new C,tn=new C,Zn=new C,Jn=new C,Zo=new C,js=new C,$s=new C,Ks=new C,Zs=new se,Js=new se,Qs=new se;class Ve{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ze.subVectors(t,e),s.cross(ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ze.subVectors(s,e),Qe.subVectors(n,e),qs.subVectors(t,e);const o=ze.dot(ze),a=ze.dot(Qe),l=ze.dot(qs),c=Qe.dot(Qe),h=Qe.dot(qs),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zs.setScalar(0),Js.setScalar(0),Qs.setScalar(0),Zs.fromBufferAttribute(t,e),Js.fromBufferAttribute(t,n),Qs.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zs,r.x),o.addScaledVector(Js,r.y),o.addScaledVector(Qs,r.z),o}static isFrontFacing(t,e,n,s){return ze.subVectors(n,e),Qe.subVectors(t,e),ze.cross(Qe).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),ze.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Zn.subVectors(s,n),Jn.subVectors(r,n),js.subVectors(t,n);const l=Zn.dot(js),c=Jn.dot(js);if(l<=0&&c<=0)return e.copy(n);$s.subVectors(t,s);const h=Zn.dot($s),u=Jn.dot($s);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zn,o);Ks.subVectors(t,r);const p=Zn.dot(Ks),g=Jn.dot(Ks);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Jn,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Zo.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Zo,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Zn,o).addScaledVector(Jn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ji={h:0,s:0,l:0};function tr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=ch(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tr(o,r,t+1/3),this.g=tr(o,r,t),this.b=tr(o,r,t-1/3)}return kt.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const n=Yl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return kt.fromWorkingColorSpace(_e.copy(this),t),Math.round(xe(_e.r*255,0,255))*65536+Math.round(xe(_e.g*255,0,255))*256+Math.round(xe(_e.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(_e.copy(this),e);const n=_e.r,s=_e.g,r=_e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=be){kt.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,n=_e.g,s=_e.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(ji);const n=Os(_n.h,ji.h,e),s=Os(_n.s,ji.s,e),r=Os(_n.l,ji.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new yt;yt.NAMES=Yl;let wh=0;class qe extends kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ni(),this.name="",this.blending=ai,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_r,this.blendDst=vr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Io,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_r&&(n.blendSrc=this.blendSrc),this.blendDst!==vr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Io&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ql extends qe{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const oe=new C,$i=new wt;class pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Uo,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uo&&(t.usage=this.usage),t}}class jl extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $l extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ch=0;const Le=new Gt,er=new de,Qn=new C,Re=new Sn,Ti=new Sn,ue=new C;class fe extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hl(t)?$l:jl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return er.lookAt(t),er.updateMatrix(),this.applyMatrix4(er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(Re.min,Ti.min),Re.expandByPoint(ue),ue.addVectors(Re.max,Ti.max),Re.expandByPoint(ue)):(Re.expandByPoint(Ti.min),Re.expandByPoint(Ti.max))}Re.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ue.fromBufferAttribute(a,c),l&&(Qn.fromBufferAttribute(t,c),ue.add(Qn)),s=Math.max(s,n.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;const c=new C,h=new C,u=new C,d=new wt,p=new wt,g=new wt,_=new C,m=new C;function f(I,S,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),a[I].add(_),a[S].add(_),a[M].add(_),l[I].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,S=y.length;I<S;++I){const M=y[I],R=M.start,W=M.count;for(let U=R,H=R+W;U<H;U+=3)f(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new C,v=new C,L=new C,T=new C;function w(I){L.fromBufferAttribute(s,I),T.copy(L);const S=a[I];E.copy(S),E.sub(L.multiplyScalar(L.dot(S))).normalize(),v.crossVectors(T,S);const R=v.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,R)}for(let I=0,S=y.length;I<S;++I){const M=y[I],R=M.start,W=M.count;for(let U=R,H=R+W;U<H;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new pe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jo=new Gt,Cn=new Ps,Ki=new Oi,Qo=new C,Zi=new C,Ji=new C,Qi=new C,nr=new C,ts=new C,ta=new C,es=new C;class Ae extends de{constructor(t=new fe,e=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(nr.fromBufferAttribute(u,t),o?ts.addScaledVector(nr,h):ts.addScaledVector(nr.sub(e),h))}e.add(ts)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(Ki.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Ki,Qo)===null||Cn.origin.distanceToSquared(Qo)>(t.far-t.near)**2))&&(Jo.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(Jo),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,L=E;v<L;v+=3){const T=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);s=ns(this,f,t,n,c,h,u,T,w,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=ns(this,o,t,n,c,h,u,y,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,L=E;v<L;v+=3){const T=v,w=v+1,I=v+2;s=ns(this,f,t,n,c,h,u,T,w,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,E=m+1,v=m+2;s=ns(this,o,t,n,c,h,u,y,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Rh(i,t,e,n,s,r,o,a){let l;if(t.side===Me?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===cn,a),l===null)return null;es.copy(a),es.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(es);return c<e.near||c>e.far?null:{distance:c,point:es.clone(),object:i}}function ns(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Zi),i.getVertexPosition(l,Ji),i.getVertexPosition(c,Qi);const h=Rh(i,t,e,n,Zi,Ji,Qi,ta);if(h){const u=new C;Ve.getBarycoord(ta,Zi,Ji,Qi,u),s&&(h.uv=Ve.getInterpolatedAttribute(s,a,l,c,u,new wt)),r&&(h.uv1=Ve.getInterpolatedAttribute(r,a,l,c,u,new wt)),o&&(h.normal=Ve.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};Ve.getNormal(Zi,Ji,Qi,d.normal),h.face=d,h.barycoord=u}return h}class vi extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,m,f,y,E,v,L,T,w,I,S){const M=v/w,R=L/I,W=v/2,U=L/2,H=T/2,q=w+1,k=I+1;let K=0,V=0;const et=new C;for(let ct=0;ct<k;ct++){const _t=ct*R-U;for(let It=0;It<q;It++){const $t=It*M-W;et[_]=$t*y,et[m]=_t*E,et[f]=H,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[f]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(It/w),u.push(1-ct/I),K+=1}}for(let ct=0;ct<I;ct++)for(let _t=0;_t<w;_t++){const It=d+_t+q*ct,$t=d+_t+q*(ct+1),Y=d+(_t+1)+q*(ct+1),tt=d+(_t+1)+q*ct;l.push(It,$t,tt),l.push($t,Y,tt),V+=6}a.addGroup(p,V,S),p+=V,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=gi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ph(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const Dh={clone:gi,merge:ve};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends qe{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Fh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zl extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new C,ea=new wt,na=new wt;class Ie extends Zl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,ea,na),e.subVectors(na,ea)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class Ih extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ie(ti,ei,t,e);s.layers=this.layers,this.add(s);const r=new Ie(ti,ei,t,e);r.layers=this.layers,this.add(r);const o=new Ie(ti,ei,t,e);o.layers=this.layers,this.add(o);const a=new Ie(ti,ei,t,e);a.layers=this.layers,this.add(a);const l=new Ie(ti,ei,t,e);l.layers=this.layers,this.add(l);const c=new Ie(ti,ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jl extends Te{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:di,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Uh extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Jl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:Mn});r.uniforms.tEquirect.value=e;const o=new Ae(s,r),a=e.minFilter;return e.minFilter===Nn&&(e.minFilter=Ye),new Ih(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ir=new C,Nh=new C,Oh=new Dt;class xn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ir.subVectors(n,e).cross(Nh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Oh.getNormalMatrix(t),s=this.coplanarPoint(ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Oi,is=new C;class _o{constructor(t=new xn,e=new xn,n=new xn,s=new xn,r=new xn,o=new xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],y=s[13],E=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+h,m+g,v+y).normalize(),n[3].setComponents(l-o,d-h,m-g,v-y).normalize(),n[4].setComponents(l-a,d-u,m-_,v-E).normalize(),e===on)n[5].setComponents(l+a,d+u,m+_,v+E).normalize();else if(e===Ss)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(is.x=s.normal.x>0?t.max.x:t.min.x,is.y=s.normal.y>0?t.max.y:t.min.y,is.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ql(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bh(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ds extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-o;for(let E=0;E<c;E++){const v=E*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const E=y+c*f,v=y+c*(f+1),L=y+1+c*(f+1),T=y+1+c*f;p.push(E,v,T),p.push(v,L,T)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_u=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ku=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ju=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ju=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,of=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,af=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_f=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:zh,alphahash_pars_fragment:Vh,alphamap_fragment:kh,alphamap_pars_fragment:Hh,alphatest_fragment:Gh,alphatest_pars_fragment:Wh,aomap_fragment:Xh,aomap_pars_fragment:Yh,batching_pars_vertex:qh,batching_vertex:jh,begin_vertex:$h,beginnormal_vertex:Kh,bsdfs:Zh,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:tu,clipping_planes_pars_fragment:eu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:su,color_pars_fragment:ru,color_pars_vertex:ou,color_vertex:au,common:lu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:hu,displacementmap_pars_vertex:uu,displacementmap_vertex:du,emissivemap_fragment:fu,emissivemap_pars_fragment:pu,colorspace_fragment:mu,colorspace_pars_fragment:gu,envmap_fragment:_u,envmap_common_pars_fragment:vu,envmap_pars_fragment:xu,envmap_pars_vertex:Au,envmap_physical_pars_fragment:Du,envmap_vertex:Mu,fog_vertex:Eu,fog_pars_vertex:Su,fog_fragment:yu,fog_pars_fragment:bu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:wu,lights_lambert_fragment:Cu,lights_lambert_pars_fragment:Ru,lights_pars_begin:Pu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Fu,lights_phong_fragment:Iu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Nu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Bu,lights_fragment_maps:zu,lights_fragment_end:Vu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Wu,map_fragment:Xu,map_pars_fragment:Yu,map_particle_fragment:qu,map_particle_pars_fragment:ju,metalnessmap_fragment:$u,metalnessmap_pars_fragment:Ku,morphinstance_vertex:Zu,morphcolor_vertex:Ju,morphnormal_vertex:Qu,morphtarget_pars_vertex:td,morphtarget_vertex:ed,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:sd,normal_pars_vertex:rd,normal_vertex:od,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:ud,opaque_fragment:dd,packing:fd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:_d,roughnessmap_fragment:vd,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Md,shadowmap_vertex:Ed,shadowmask_pars_fragment:Sd,skinbase_vertex:yd,skinning_pars_vertex:bd,skinning_vertex:Td,skinnormal_vertex:wd,specularmap_fragment:Cd,specularmap_pars_fragment:Rd,tonemapping_fragment:Pd,tonemapping_pars_fragment:Dd,transmission_fragment:Ld,transmission_pars_fragment:Fd,uv_pars_fragment:Id,uv_pars_vertex:Ud,uv_vertex:Nd,worldpos_vertex:Od,background_vert:Bd,background_frag:zd,backgroundCube_vert:Vd,backgroundCube_frag:kd,cube_vert:Hd,cube_frag:Gd,depth_vert:Wd,depth_frag:Xd,distanceRGBA_vert:Yd,distanceRGBA_frag:qd,equirect_vert:jd,equirect_frag:$d,linedashed_vert:Kd,linedashed_frag:Zd,meshbasic_vert:Jd,meshbasic_frag:Qd,meshlambert_vert:tf,meshlambert_frag:ef,meshmatcap_vert:nf,meshmatcap_frag:sf,meshnormal_vert:rf,meshnormal_frag:of,meshphong_vert:af,meshphong_frag:lf,meshphysical_vert:cf,meshphysical_frag:hf,meshtoon_vert:uf,meshtoon_frag:df,points_vert:ff,points_frag:pf,shadow_vert:mf,shadow_frag:gf,sprite_vert:_f,sprite_frag:vf},nt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Xe={basic:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:ve([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:ve([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:ve([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:ve([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:ve([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:ve([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:ve([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:ve([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:ve([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:ve([nt.lights,nt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Xe.physical={uniforms:ve([Xe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const ss={r:0,b:0,g:0},Pn=new Ge,xf=new Gt;function Af(i,t,e,n,s,r,o){const a=new yt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function _(y){let E=!1;const v=g(y);v===null?f(a,l):v&&v.isColor&&(f(v,1),E=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===Cs)?(h===void 0&&(h=new Ae(new vi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:gi(Xe.backgroundCube.uniforms),vertexShader:Xe.backgroundCube.vertexShader,fragmentShader:Xe.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pn.copy(E.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(Pn)),h.material.toneMapped=kt.getTransfer(v.colorSpace)!==qt,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ae(new Ds(2,2),new yn({name:"BackgroundMaterial",uniforms:gi(Xe.background.uniforms),vertexShader:Xe.background.vertexShader,fragmentShader:Xe.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=kt.getTransfer(v.colorSpace)!==qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,E){y.getRGB(ss,Kl(i)),n.buffers.color.setClear(ss.r,ss.g,ss.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:m}}function Mf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,R,W,U,H){let q=!1;const k=u(U,W,R);r!==k&&(r=k,c(r.object)),q=p(M,U,W,H),q&&g(M,U,W,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(M,R,W,U),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,R,W){const U=W.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let q=H[R.id];q===void 0&&(q={},H[R.id]=q);let k=q[U];return k===void 0&&(k=d(l()),q[U]=k),k}function d(M){const R=[],W=[],U=[];for(let H=0;H<e;H++)R[H]=0,W[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:U,object:M,attributes:{},index:null}}function p(M,R,W,U){const H=r.attributes,q=R.attributes;let k=0;const K=W.getAttributes();for(const V in K)if(K[V].location>=0){const ct=H[V];let _t=q[V];if(_t===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),ct===void 0||ct.attribute!==_t||_t&&ct.data!==_t.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function g(M,R,W,U){const H={},q=R.attributes;let k=0;const K=W.getAttributes();for(const V in K)if(K[V].location>=0){let ct=q[V];ct===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const _t={};_t.attribute=ct,ct&&ct.data&&(_t.data=ct.data),H[V]=_t,k++}r.attributes=H,r.attributesNum=k,r.index=U}function _(){const M=r.newAttributes;for(let R=0,W=M.length;R<W;R++)M[R]=0}function m(M){f(M,0)}function f(M,R){const W=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;W[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),H[M]!==R&&(i.vertexAttribDivisor(M,R),H[M]=R)}function y(){const M=r.newAttributes,R=r.enabledAttributes;for(let W=0,U=R.length;W<U;W++)R[W]!==M[W]&&(i.disableVertexAttribArray(W),R[W]=0)}function E(M,R,W,U,H,q,k){k===!0?i.vertexAttribIPointer(M,R,W,H,q):i.vertexAttribPointer(M,R,W,U,H,q)}function v(M,R,W,U){_();const H=U.attributes,q=W.getAttributes(),k=R.defaultAttributeValues;for(const K in q){const V=q[K];if(V.location>=0){let et=H[K];if(et===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(et=M.instanceColor)),et!==void 0){const ct=et.normalized,_t=et.itemSize,It=t.get(et);if(It===void 0)continue;const $t=It.buffer,Y=It.type,tt=It.bytesPerElement,gt=Y===i.INT||Y===i.UNSIGNED_INT||et.gpuType===co;if(et.isInterleavedBufferAttribute){const st=et.data,St=st.stride,Ct=et.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)f(V.location+Ut,st.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Ut=0;Ut<V.locationSize;Ut++)E(V.location+Ut,_t/V.locationSize,Y,ct,St*tt,(Ct+_t/V.locationSize*Ut)*tt,gt)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)f(V.location+st,et.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let st=0;st<V.locationSize;st++)E(V.location+st,_t/V.locationSize,Y,ct,_t*tt,_t/V.locationSize*st*tt,gt)}}else if(k!==void 0){const ct=k[K];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(V.location,ct);break;case 3:i.vertexAttrib3fv(V.location,ct);break;case 4:i.vertexAttrib4fv(V.location,ct);break;default:i.vertexAttrib1fv(V.location,ct)}}}}y()}function L(){I();for(const M in n){const R=n[M];for(const W in R){const U=R[W];for(const H in U)h(U[H].object),delete U[H];delete R[W]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const W in R){const U=R[W];for(const H in U)h(U[H].object),delete U[H];delete R[W]}delete n[M.id]}function w(M){for(const R in n){const W=n[R];if(W[M.id]===void 0)continue;const U=W[M.id];for(const H in U)h(U[H].object),delete U[H];delete W[M.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Ef(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ke&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==hn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==rn&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:L,maxSamples:T}}function yf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new xn,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,E=y*4;let v=f.clippingState||null;l.value=v,v=h(g,d,E,p);for(let L=0;L!==E;++L)v[L]=e[L];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==_;++E,v+=4)o.copy(u[E]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function bf(i){let t=new WeakMap;function e(o,a){return a===Tr?o.mapping=di:a===wr&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tr||a===wr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Uh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class tc extends Zl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const si=4,ia=[.125,.215,.35,.446,.526,.582],In=20,sr=new tc,sa=new yt;let rr=null,or=0,ar=0,lr=!1;const Ln=(1+Math.sqrt(5))/2,ni=1/Ln,ra=[new C(-Ln,ni,0),new C(Ln,ni,0),new C(-ni,0,Ln),new C(ni,0,Ln),new C(0,Ln,-ni),new C(0,Ln,ni),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){rr=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=la(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(rr,or,ar),this._renderer.xr.enabled=lr,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rr=this._renderer.getRenderTarget(),or=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Ui,format:ke,colorSpace:_i,depthBuffer:!1},s=aa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=aa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tf(r)),this._blurMaterial=wf(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,sr)}_sceneToCubeUV(t,e,n,s){const a=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(sa),h.toneMapping=En,h.autoClear=!1;const p=new ql({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new Ae(new vi,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(sa),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const E=this._cubeSize;rs(s,y*E,f>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===di||t.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=la());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;rs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ra[(s-r-1)%ra.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*In-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):In;m>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${In}`);const f=[];let y=0;for(let w=0;w<In;++w){const I=w/_,S=Math.exp(-I*I/2);f.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[s],L=3*v*(s>E-si?s-E+si:0),T=4*(this._cubeSize-v);rs(e,L,T,3*v,2*v),l.setRenderTarget(e),l.render(u,sr)}}function Tf(i){const t=[],e=[],n=[];let s=i;const r=i-si+1+ia.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-si?l=ia[o-i+si-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,I=T>2?0:-1,S=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];y.set(S,_*g*T),E.set(d,m*g*T);const M=[T,T,T,T,T,T];v.set(M,f*g*T)}const L=new fe;L.setAttribute("position",new pe(y,_)),L.setAttribute("uv",new pe(E,m)),L.setAttribute("faceIndex",new pe(v,f)),t.push(L),s>si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function aa(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wf(i,t,e){const n=new Float32Array(In),s=new C(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function la(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ca(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tr||l===wr,h=l===di||l===fi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new oa(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new oa(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pf(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let E=0,v=y.length;E<v;E+=3){const L=y[E+0],T=y[E+1],w=y[E+2];d.push(L,T,T,w,w,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,v=y.length/3-1;E<v;E+=3){const L=E+0,T=E+1,w=E+2;d.push(L,T,T,w,w,L)}}else return;const m=new(Hl(d)?$l:jl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Df(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Lf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ff(i,t,e){const n=new WeakMap,s=new se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*T*4*u),I=new Wl(w,L,T,u);I.type=rn,I.needsUpdate=!0;const S=v*4;for(let R=0;R<u;R++){const W=f[R],U=y[R],H=E[R],q=L*T*4*R;for(let k=0;k<W.count;k++){const K=k*S;g===!0&&(s.fromBufferAttribute(W,k),w[q+K+0]=s.x,w[q+K+1]=s.y,w[q+K+2]=s.z,w[q+K+3]=0),_===!0&&(s.fromBufferAttribute(U,k),w[q+K+4]=s.x,w[q+K+5]=s.y,w[q+K+6]=s.z,w[q+K+7]=0),m===!0&&(s.fromBufferAttribute(H,k),w[q+K+8]=s.x,w[q+K+9]=s.y,w[q+K+10]=s.z,w[q+K+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new wt(L,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function If(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ec extends Te{constructor(t,e,n,s,r,o,a,l,c,h=li){if(h!==li&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===li&&(n=On),n===void 0&&h===mi&&(n=pi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const nc=new Te,ha=new ec(1,1),ic=new Wl,sc=new xh,rc=new Jl,ua=[],da=[],fa=new Float32Array(16),pa=new Float32Array(9),ma=new Float32Array(4);function xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ua[s];if(r===void 0&&(r=new Float32Array(s),ua[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function he(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ls(i,t){let e=da[t];e===void 0&&(e=new Int32Array(t),da[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Uf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2fv(this.addr,t),he(e,t)}}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;i.uniform3fv(this.addr,t),he(e,t)}}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4fv(this.addr,t),he(e,t)}}function zf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;ma.set(n),i.uniformMatrix2fv(this.addr,!1,ma),he(e,n)}}function Vf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;pa.set(n),i.uniformMatrix3fv(this.addr,!1,pa),he(e,n)}}function kf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;fa.set(n),i.uniformMatrix4fv(this.addr,!1,fa),he(e,n)}}function Hf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2iv(this.addr,t),he(e,t)}}function Wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3iv(this.addr,t),he(e,t)}}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4iv(this.addr,t),he(e,t)}}function Yf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;i.uniform2uiv(this.addr,t),he(e,t)}}function jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;i.uniform3uiv(this.addr,t),he(e,t)}}function $f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;i.uniform4uiv(this.addr,t),he(e,t)}}function Kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ha.compareFunction=kl,r=ha):r=nc,e.setTexture2D(t||r,s)}function Zf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sc,s)}function Jf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rc,s)}function Qf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ic,s)}function tp(i){switch(i){case 5126:return Uf;case 35664:return Nf;case 35665:return Of;case 35666:return Bf;case 35674:return zf;case 35675:return Vf;case 35676:return kf;case 5124:case 35670:return Hf;case 35667:case 35671:return Gf;case 35668:case 35672:return Wf;case 35669:case 35673:return Xf;case 5125:return Yf;case 36294:return qf;case 36295:return jf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Qf}}function ep(i,t){i.uniform1fv(this.addr,t)}function np(i,t){const e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function ip(i,t){const e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function sp(i,t){const e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function rp(i,t){const e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function op(i,t){const e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ap(i,t){const e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lp(i,t){i.uniform1iv(this.addr,t)}function cp(i,t){i.uniform2iv(this.addr,t)}function hp(i,t){i.uniform3iv(this.addr,t)}function up(i,t){i.uniform4iv(this.addr,t)}function dp(i,t){i.uniform1uiv(this.addr,t)}function fp(i,t){i.uniform2uiv(this.addr,t)}function pp(i,t){i.uniform3uiv(this.addr,t)}function mp(i,t){i.uniform4uiv(this.addr,t)}function gp(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nc,r[o])}function _p(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sc,r[o])}function vp(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rc,r[o])}function xp(i,t,e){const n=this.cache,s=t.length,r=Ls(e,s);ce(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ic,r[o])}function Ap(i){switch(i){case 5126:return ep;case 35664:return np;case 35665:return ip;case 35666:return sp;case 35674:return rp;case 35675:return op;case 35676:return ap;case 5124:case 35670:return lp;case 35667:case 35671:return cp;case 35668:case 35672:return hp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return fp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return xp}}class Mp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tp(e.type)}}class Ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ap(e.type)}}class Sp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function ga(i,t){i.seq.push(t),i.map[t.id]=t}function yp(i,t,e){const n=i.name,s=n.length;for(cr.lastIndex=0;;){const r=cr.exec(n),o=cr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ga(e,c===void 0?new Mp(a,i,t):new Ep(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sp(a),ga(e,u)),e=u}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);yp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function _a(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bp=37297;let Tp=0;function wp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const va=new Dt;function Cp(i){kt._getMatrix(va,kt.workingColorSpace,i);const t=`mat3( ${va.elements.map(e=>e.toFixed(4))} )`;switch(kt.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+wp(i.getShaderSource(t),o)}else return s}function Rp(i,t){const e=Cp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pp(i,t){let e;switch(t){case Xc:e="Linear";break;case Yc:e="Reinhard";break;case qc:e="Cineon";break;case jc:e="ACESFilmic";break;case Kc:e="AgX";break;case Zc:e="Neutral";break;case $c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const os=new C;function Dp(){kt.getLuminanceCoefficients(os);const i=os.x.toFixed(4),t=os.y.toFixed(4),e=os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Fp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ip(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ri(i){return i!==""}function Aa(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ma(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Up=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(Up,Op)}const Np=new Map;function Op(i,t){let e=Ft[t];if(e===void 0){const n=Np.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const Bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ea(i){return i.replace(Bp,zp)}function zp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(t="SHADOWMAP_TYPE_VSM"),t}function kp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Gp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lo:t="ENVMAP_BLENDING_MULTIPLY";break;case Gc:t="ENVMAP_BLENDING_MIX";break;case Wc:t="ENVMAP_BLENDING_ADD";break}return t}function Wp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vp(e),c=kp(e),h=Hp(e),u=Gp(e),d=Wp(e),p=Lp(e),g=Fp(r),_=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),f.length>0&&(f+=`
`)):(m=[Sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),f=[Sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Ft.tonemapping_pars_fragment:"",e.toneMapping!==En?Pp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Rp("linearToOutputTexel",e.outputColorSpace),Dp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),o=io(o),o=Aa(o,e),o=Ma(o,e),a=io(a),a=Aa(a,e),a=Ma(a,e),o=Ea(o),a=Ea(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=y+m+o,v=y+f+a,L=_a(s,s.VERTEX_SHADER,E),T=_a(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(T).trim();let q=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{const K=xa(s,L,"vertex"),V=xa(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+K+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||H==="")&&(k=!1);k&&(R.diagnostics={runnable:q,programLog:W,vertexShader:{log:U,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(L),s.deleteShader(T),I=new Es(s,_),S=Ip(s,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,bp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let Yp=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jp(t),e.set(t,n)),n}}class jp{constructor(t){this.id=Yp++,this.code=t,this.usedTimes=0}}function $p(i,t,e,n,s,r,o){const a=new Xl,l=new qp,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,W,U){const H=W.fog,q=U.geometry,k=S.isMeshStandardMaterial?W.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),V=K&&K.mapping===Cs?K.image.height:null,et=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=ct!==void 0?ct.length:0;let It=0;q.morphAttributes.position!==void 0&&(It=1),q.morphAttributes.normal!==void 0&&(It=2),q.morphAttributes.color!==void 0&&(It=3);let $t,Y,tt,gt;if(et){const Yt=Xe[et];$t=Yt.vertexShader,Y=Yt.fragmentShader}else $t=S.vertexShader,Y=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),gt=l.getFragmentShaderID(S);const st=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Ct=U.isInstancedMesh===!0,Ut=U.isBatchedMesh===!0,ee=!!S.map,zt=!!S.matcap,re=!!K,N=!!S.aoMap,Pe=!!S.lightMap,Nt=!!S.bumpMap,Ot=!!S.normalMap,Mt=!!S.displacementMap,Jt=!!S.emissiveMap,At=!!S.metalnessMap,b=!!S.roughnessMap,x=S.anisotropy>0,O=S.clearcoat>0,j=S.dispersion>0,Z=S.iridescence>0,X=S.sheen>0,vt=S.transmission>0,rt=x&&!!S.anisotropyMap,ht=O&&!!S.clearcoatMap,Vt=O&&!!S.clearcoatNormalMap,J=O&&!!S.clearcoatRoughnessMap,ut=Z&&!!S.iridescenceMap,Et=Z&&!!S.iridescenceThicknessMap,bt=X&&!!S.sheenColorMap,dt=X&&!!S.sheenRoughnessMap,Bt=!!S.specularMap,Lt=!!S.specularColorMap,Kt=!!S.specularIntensityMap,P=vt&&!!S.transmissionMap,it=vt&&!!S.thicknessMap,G=!!S.gradientMap,$=!!S.alphaMap,lt=S.alphaTest>0,ot=!!S.alphaHash,Rt=!!S.extensions;let ie=En;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ie=i.toneMapping);const me={shaderID:et,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:Y,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ut,batchingColor:Ut&&U._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&U.instanceColor!==null,instancingMorph:Ct&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:_i,alphaToCoverage:!!S.alphaToCoverage,map:ee,matcap:zt,envMap:re,envMapMode:re&&K.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:Pe,bumpMap:Nt,normalMap:Ot,displacementMap:d&&Mt,emissiveMap:Jt,normalMapObjectSpace:Ot&&S.normalMapType===eh,normalMapTangentSpace:Ot&&S.normalMapType===go,metalnessMap:At,roughnessMap:b,anisotropy:x,anisotropyMap:rt,clearcoat:O,clearcoatMap:ht,clearcoatNormalMap:Vt,clearcoatRoughnessMap:J,dispersion:j,iridescence:Z,iridescenceMap:ut,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:bt,sheenRoughnessMap:dt,specularMap:Bt,specularColorMap:Lt,specularIntensityMap:Kt,transmission:vt,transmissionMap:P,thicknessMap:it,gradientMap:G,opaque:S.transparent===!1&&S.blending===ai&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ot,combine:S.combine,mapUv:ee&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:Pe&&_(S.lightMap.channel),bumpMapUv:Nt&&_(S.bumpMap.channel),normalMapUv:Ot&&_(S.normalMap.channel),displacementMapUv:Mt&&_(S.displacementMap.channel),emissiveMapUv:Jt&&_(S.emissiveMap.channel),metalnessMapUv:At&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:rt&&_(S.anisotropyMap.channel),clearcoatMapUv:ht&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(S.sheenRoughnessMap.channel),specularMapUv:Bt&&_(S.specularMap.channel),specularColorMapUv:Lt&&_(S.specularColorMap.channel),specularIntensityMapUv:Kt&&_(S.specularIntensityMap.channel),transmissionMapUv:P&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:$&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ot||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(ee||$),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:ee&&S.map.isVideoTexture===!0&&kt.getTransfer(S.map.colorSpace)===qt,decodeVideoTextureEmissive:Jt&&S.emissiveMap.isVideoTexture===!0&&kt.getTransfer(S.emissiveMap.colorSpace)===qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Me,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Rt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&S.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(y(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let R;if(M){const W=Xe[M];R=Dh.clone(W.uniforms)}else R=S.uniforms;return R}function L(S,M){let R;for(let W=0,U=h.length;W<U;W++){const H=h[W];if(H.cacheKey===M){R=H,++R.usedTimes;break}}return R===void 0&&(R=new Xp(i,M,S,r),h.push(R)),R}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:I}}function Kp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ya(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ba(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Zp),n.length>1&&n.sort(d||ya),s.length>1&&s.sort(d||ya)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Jp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ba,i.set(n,[o])):s>=r.length?(o=new ba,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new yt};break;case"SpotLight":e={position:new C,direction:new C,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function tm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let em=0;function nm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function im(i){const t=new Qp,e=tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new Gt,o=new Gt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,E=0,v=0,L=0,T=0,w=0;c.sort(nm);for(let S=0,M=c.length;S<M;S++){const R=c[S],W=R.color,U=R.intensity,H=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=W.r*U,u+=W.g*U,d+=W.b*U;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],U);w++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(W).multiplyScalar(U),k.distance=H,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;const K=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,K.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,v++}_++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(W).multiplyScalar(U),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const K=R.shadow,V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(U),k.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==v||I.numSpotMaps!==L||I.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=v,I.numSpotMaps=L,I.numLightProbes=w,n.version=em++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const E=c[f];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ta(i){const t=new im(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ta(i),t.set(s,[a])):r>=o.length?(a=new Ta(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rm extends qe{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class om extends qe{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cm(i,t,e){let n=new _o;const s=new wt,r=new wt,o=new se,a=new rm({depthPacking:th}),l=new om,c={},h=e.maxTextureSize,u={[cn]:Me,[Me]:cn,[sn]:sn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:am,fragmentShader:lm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let f=this.type;this.render=function(T,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Mn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const U=f!==nn&&this.type===nn,H=f===nn&&this.type!==nn;for(let q=0,k=T.length;q<k;q++){const K=T[q],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const et=V.getFrameExtents();if(s.multiply(et),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,V.mapSize.y=r.y)),V.map===null||U===!0||H===!0){const _t=this.type!==nn?{minFilter:He,magFilter:He}:{};V.map!==null&&V.map.dispose(),V.map=new Bn(s.x,s.y,_t),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ct=V.getViewportCount();for(let _t=0;_t<ct;_t++){const It=V.getViewport(_t);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),W.viewport(o),V.updateMatrices(K,_t),n=V.getFrustum(),v(w,I,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===nn&&y(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function y(T,w){const I=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,I,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,I,p,_,null)}function E(T,w,I,S){let M=null;const R=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=M.uuid,U=w.uuid;let H=c[W];H===void 0&&(H={},c[W]=H);let q=H[U];q===void 0&&(q=M.clone(),H[U]=q,w.addEventListener("dispose",L)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,S===nn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=I}return M}function v(T,w,I,S,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const U=t.update(T),H=T.material;if(Array.isArray(H)){const q=U.groups;for(let k=0,K=q.length;k<K;k++){const V=q[k],et=H[V.materialIndex];if(et&&et.visible){const ct=E(T,et,S,M);T.onBeforeShadow(i,T,w,I,U,ct,V),i.renderBufferDirect(I,null,U,ct,T,V),T.onAfterShadow(i,T,w,I,U,ct,V)}}}else if(H.visible){const q=E(T,H,S,M);T.onBeforeShadow(i,T,w,I,U,q,null),i.renderBufferDirect(I,null,U,q,T,null),T.onAfterShadow(i,T,w,I,U,q,null)}}const W=T.children;for(let U=0,H=W.length;U<H;U++)v(W[U],w,I,S,M)}function L(T){T.target.removeEventListener("dispose",L);for(const I in c){const S=c[I],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const hm={[xr]:Ar,[Mr]:yr,[Er]:br,[ui]:Sr,[Ar]:xr,[yr]:Mr,[br]:Er,[Sr]:ui};function um(i,t){function e(){let P=!1;const it=new se;let G=null;const $=new se(0,0,0,0);return{setMask:function(lt){G!==lt&&!P&&(i.colorMask(lt,lt,lt,lt),G=lt)},setLocked:function(lt){P=lt},setClear:function(lt,ot,Rt,ie,me){me===!0&&(lt*=ie,ot*=ie,Rt*=ie),it.set(lt,ot,Rt,ie),$.equals(it)===!1&&(i.clearColor(lt,ot,Rt,ie),$.copy(it))},reset:function(){P=!1,G=null,$.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,G=null,$=null,lt=null;return{setReversed:function(ot){if(it!==ot){const Rt=t.get("EXT_clip_control");it?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT);const ie=lt;lt=null,this.setClear(ie)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?st(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ot){G!==ot&&!P&&(i.depthMask(ot),G=ot)},setFunc:function(ot){if(it&&(ot=hm[ot]),$!==ot){switch(ot){case xr:i.depthFunc(i.NEVER);break;case Ar:i.depthFunc(i.ALWAYS);break;case Mr:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Er:i.depthFunc(i.EQUAL);break;case Sr:i.depthFunc(i.GEQUAL);break;case yr:i.depthFunc(i.GREATER);break;case br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ot}},setLocked:function(ot){P=ot},setClear:function(ot){lt!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){P=!1,G=null,$=null,lt=null,it=!1}}}function s(){let P=!1,it=null,G=null,$=null,lt=null,ot=null,Rt=null,ie=null,me=null;return{setTest:function(Yt){P||(Yt?st(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Yt){it!==Yt&&!P&&(i.stencilMask(Yt),it=Yt)},setFunc:function(Yt,Ue,je){(G!==Yt||$!==Ue||lt!==je)&&(i.stencilFunc(Yt,Ue,je),G=Yt,$=Ue,lt=je)},setOp:function(Yt,Ue,je){(ot!==Yt||Rt!==Ue||ie!==je)&&(i.stencilOp(Yt,Ue,je),ot=Yt,Rt=Ue,ie=je)},setLocked:function(Yt){P=Yt},setClear:function(Yt){me!==Yt&&(i.clearStencil(Yt),me=Yt)},reset:function(){P=!1,it=null,G=null,$=null,lt=null,ot=null,Rt=null,ie=null,me=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,E=null,v=null,L=null,T=null,w=new yt(0,0,0),I=0,S=!1,M=null,R=null,W=null,U=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=K>=2);let et=null,ct={};const _t=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),$t=new se().fromArray(_t),Y=new se().fromArray(It);function tt(P,it,G,$){const lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(P,ot),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<G;Rt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(ui),Nt(!1),Ot(Po),st(i.CULL_FACE),N(Mn);function st(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function St(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ct(P,it){return u[P]!==it?(i.bindFramebuffer(P,it),u[P]=it,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ut(P,it){let G=p,$=!1;if(P){G=d.get(it),G===void 0&&(G=[],d.set(it,G));const lt=P.textures;if(G.length!==lt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Rt=lt.length;ot<Rt;ot++)G[ot]=i.COLOR_ATTACHMENT0+ot;G.length=lt.length,$=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,$=!0);$&&i.drawBuffers(G)}function ee(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const zt={[Fn]:i.FUNC_ADD,[Tc]:i.FUNC_SUBTRACT,[wc]:i.FUNC_REVERSE_SUBTRACT};zt[Cc]=i.MIN,zt[Rc]=i.MAX;const re={[Pc]:i.ZERO,[Dc]:i.ONE,[Lc]:i.SRC_COLOR,[_r]:i.SRC_ALPHA,[Bc]:i.SRC_ALPHA_SATURATE,[Nc]:i.DST_COLOR,[Ic]:i.DST_ALPHA,[Fc]:i.ONE_MINUS_SRC_COLOR,[vr]:i.ONE_MINUS_SRC_ALPHA,[Oc]:i.ONE_MINUS_DST_COLOR,[Uc]:i.ONE_MINUS_DST_ALPHA,[zc]:i.CONSTANT_COLOR,[Vc]:i.ONE_MINUS_CONSTANT_COLOR,[kc]:i.CONSTANT_ALPHA,[Hc]:i.ONE_MINUS_CONSTANT_ALPHA};function N(P,it,G,$,lt,ot,Rt,ie,me,Yt){if(P===Mn){_===!0&&(St(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),P!==bc){if(P!==m||Yt!==S){if((f!==Fn||v!==Fn)&&(i.blendEquation(i.FUNC_ADD),f=Fn,v=Fn),Yt)switch(P){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,E=null,L=null,T=null,w.set(0,0,0),I=0,m=P,S=Yt}return}lt=lt||it,ot=ot||G,Rt=Rt||$,(it!==f||lt!==v)&&(i.blendEquationSeparate(zt[it],zt[lt]),f=it,v=lt),(G!==y||$!==E||ot!==L||Rt!==T)&&(i.blendFuncSeparate(re[G],re[$],re[ot],re[Rt]),y=G,E=$,L=ot,T=Rt),(ie.equals(w)===!1||me!==I)&&(i.blendColor(ie.r,ie.g,ie.b,me),w.copy(ie),I=me),m=P,S=!1}function Pe(P,it){P.side===sn?St(i.CULL_FACE):st(i.CULL_FACE);let G=P.side===Me;it&&(G=!G),Nt(G),P.blending===ai&&P.transparent===!1?N(Mn):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const $=P.stencilWrite;a.setTest($),$&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Jt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function Ot(P){P!==Sc?(st(i.CULL_FACE),P!==R&&(P===Po?i.cullFace(i.BACK):P===yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),R=P}function Mt(P){P!==W&&(k&&i.lineWidth(P),W=P)}function Jt(P,it,G){P?(st(i.POLYGON_OFFSET_FILL),(U!==it||H!==G)&&(i.polygonOffset(it,G),U=it,H=G)):St(i.POLYGON_OFFSET_FILL)}function At(P){P?st(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function b(P){P===void 0&&(P=i.TEXTURE0+q-1),et!==P&&(i.activeTexture(P),et=P)}function x(P,it,G){G===void 0&&(et===null?G=i.TEXTURE0+q-1:G=et);let $=ct[G];$===void 0&&($={type:void 0,texture:void 0},ct[G]=$),($.type!==P||$.texture!==it)&&(et!==G&&(i.activeTexture(G),et=G),i.bindTexture(P,it||gt[P]),$.type=P,$.texture=it)}function O(){const P=ct[et];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(P){$t.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$t.copy(P))}function dt(P){Y.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Bt(P,it){let G=c.get(it);G===void 0&&(G=new WeakMap,c.set(it,G));let $=G.get(P);$===void 0&&($=i.getUniformBlockIndex(it,P.name),G.set(P,$))}function Lt(P,it){const $=c.get(it).get(P);l.get(it)!==$&&(i.uniformBlockBinding(it,$,P.__bindingPointIndex),l.set(it,$))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,ct={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,E=null,v=null,L=null,T=null,w=new yt(0,0,0),I=0,S=!1,M=null,R=null,W=null,U=null,H=null,$t.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:St,bindFramebuffer:Ct,drawBuffers:Ut,useProgram:ee,setBlending:N,setMaterial:Pe,setFlipSided:Nt,setCullFace:Ot,setLineWidth:Mt,setPolygonOffset:Jt,setScissorTest:At,activeTexture:b,bindTexture:x,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:ut,texImage3D:Et,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Vt,texStorage3D:J,texSubImage2D:X,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:bt,viewport:dt,reset:Kt}}function wa(i,t,e,n){const s=dm(n);switch(e){case Il:return i*t;case Nl:return i*t;case Ol:return i*t*2;case Bl:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case Ul:return i*t*3/s.components*s.byteLength;case ke:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case gs:case _s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:case Fr:return Math.max(i,16)*Math.max(t,8)/4;case Pr:case Lr:return Math.max(i,8)*Math.max(t,8)/2;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Br:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case As:case Zr:case Jr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vl:case Qr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dm(i){switch(i){case hn:case Dl:return{byteLength:1,components:1};case Di:case Ll:case Ui:return{byteLength:2,components:1};case ho:case uo:return{byteLength:2,components:4};case On:case co:case rn:return{byteLength:4,components:1};case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):ys("canvas")}function _(b,x,O){let j=1;const Z=At(b);if((Z.width>O||Z.height>O)&&(j=O/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(j*Z.width),vt=Math.floor(j*Z.height);u===void 0&&(u=g(X,vt));const rt=x?g(X,vt):u;return rt.width=X,rt.height=vt,rt.getContext("2d").drawImage(b,0,0,X,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+vt+")."),rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,x,O,j,Z=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=x;if(x===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),x===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),x===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),x===i.RGBA){const vt=Z?Rs:kt.getTransfer(j);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=vt===qt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(b,x){let O;return b?x===null||x===On||x===pi?O=i.DEPTH24_STENCIL8:x===rn?O=i.DEPTH32F_STENCIL8:x===Di&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===On||x===pi?O=i.DEPTH_COMPONENT24:x===rn?O=i.DEPTH_COMPONENT32F:x===Di&&(O=i.DEPTH_COMPONENT16),O}function L(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==He&&b.minFilter!==Ye?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function T(b){const x=b.target;x.removeEventListener("dispose",T),I(x),x.isVideoTexture&&h.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),M(x)}function I(b){const x=n.get(b);if(x.__webglInit===void 0)return;const O=b.source,j=d.get(O);if(j){const Z=j[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(b),Object.keys(j).length===0&&d.delete(O)}n.remove(b)}function S(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const O=b.source,j=d.get(O);delete j[x.__cacheKey],o.memory.textures--}function M(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Z=0;Z<x.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let j=0,Z=O.length;j<Z;j++){const X=n.get(O[j]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(O[j])}n.remove(b)}let R=0;function W(){R=0}function U(){const b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function H(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function q(b,x){const O=n.get(b);if(b.isVideoTexture&&Mt(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,x);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function k(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function K(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function V(b,x){const O=n.get(b);if(b.version>0&&O.__version!==b.version){tt(O,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}const et={[Cr]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Rr]:i.MIRRORED_REPEAT},ct={[He]:i.NEAREST,[Jc]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[Ns]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},_t={[nh]:i.NEVER,[lh]:i.ALWAYS,[ih]:i.LESS,[kl]:i.LEQUAL,[sh]:i.EQUAL,[ah]:i.GEQUAL,[rh]:i.GREATER,[oh]:i.NOTEQUAL};function It(b,x){if(x.type===rn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ye||x.magFilter===Ns||x.magFilter===Vi||x.magFilter===Nn||x.minFilter===Ye||x.minFilter===Ns||x.minFilter===Vi||x.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,et[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,et[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,et[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===He||x.minFilter!==Vi&&x.minFilter!==Nn||x.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $t(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",T));const j=x.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const X=H(x);if(X!==b.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[X].usedTimes++;const vt=Z[b.__cacheKey];vt!==void 0&&(Z[b.__cacheKey].usedTimes--,vt.usedTimes===0&&S(x)),b.__cacheKey=X,b.__webglTexture=Z[X].texture}return O}function Y(b,x,O){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);const Z=$t(b,x),X=x.source;e.bindTexture(j,b.__webglTexture,i.TEXTURE0+O);const vt=n.get(X);if(X.version!==vt.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const rt=kt.getPrimaries(kt.workingColorSpace),ht=x.colorSpace===An?null:kt.getPrimaries(x.colorSpace),Vt=x.colorSpace===An||rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let J=_(x.image,!1,s.maxTextureSize);J=Jt(x,J);const ut=r.convert(x.format,x.colorSpace),Et=r.convert(x.type);let bt=E(x.internalFormat,ut,Et,x.colorSpace,x.isVideoTexture);It(j,x);let dt;const Bt=x.mipmaps,Lt=x.isVideoTexture!==!0,Kt=vt.__version===void 0||Z===!0,P=X.dataReady,it=L(x,J);if(x.isDepthTexture)bt=v(x.format===mi,x.type),Kt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,bt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,bt,J.width,J.height,0,ut,Et,null));else if(x.isDataTexture)if(Bt.length>0){Lt&&Kt&&e.texStorage2D(i.TEXTURE_2D,it,bt,Bt[0].width,Bt[0].height);for(let G=0,$=Bt.length;G<$;G++)dt=Bt[G],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,Et,dt.data):e.texImage2D(i.TEXTURE_2D,G,bt,dt.width,dt.height,0,ut,Et,dt.data);x.generateMipmaps=!1}else Lt?(Kt&&e.texStorage2D(i.TEXTURE_2D,it,bt,J.width,J.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ut,Et,J.data)):e.texImage2D(i.TEXTURE_2D,0,bt,J.width,J.height,0,ut,Et,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,Bt[0].width,Bt[0].height,J.depth);for(let G=0,$=Bt.length;G<$;G++)if(dt=Bt[G],x.format!==ke)if(ut!==null)if(Lt){if(P)if(x.layerUpdates.size>0){const lt=wa(dt.width,dt.height,x.format,x.type);for(const ot of x.layerUpdates){const Rt=dt.data.subarray(ot*lt/dt.data.BYTES_PER_ELEMENT,(ot+1)*lt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ot,dt.width,dt.height,1,ut,Rt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,J.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,bt,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,dt.width,dt.height,J.depth,ut,Et,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,bt,dt.width,dt.height,J.depth,0,ut,Et,dt.data)}else{Lt&&Kt&&e.texStorage2D(i.TEXTURE_2D,it,bt,Bt[0].width,Bt[0].height);for(let G=0,$=Bt.length;G<$;G++)dt=Bt[G],x.format!==ke?ut!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,bt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,dt.width,dt.height,ut,Et,dt.data):e.texImage2D(i.TEXTURE_2D,G,bt,dt.width,dt.height,0,ut,Et,dt.data)}else if(x.isDataArrayTexture)if(Lt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,J.width,J.height,J.depth),P)if(x.layerUpdates.size>0){const G=wa(J.width,J.height,x.format,x.type);for(const $ of x.layerUpdates){const lt=J.data.subarray($*G/J.data.BYTES_PER_ELEMENT,($+1)*G/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,ut,Et,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,J.width,J.height,J.depth,0,ut,Et,J.data);else if(x.isData3DTexture)Lt?(Kt&&e.texStorage3D(i.TEXTURE_3D,it,bt,J.width,J.height,J.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,bt,J.width,J.height,J.depth,0,ut,Et,J.data);else if(x.isFramebufferTexture){if(Kt)if(Lt)e.texStorage2D(i.TEXTURE_2D,it,bt,J.width,J.height);else{let G=J.width,$=J.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,bt,G,$,0,ut,Et,null),G>>=1,$>>=1}}else if(Bt.length>0){if(Lt&&Kt){const G=At(Bt[0]);e.texStorage2D(i.TEXTURE_2D,it,bt,G.width,G.height)}for(let G=0,$=Bt.length;G<$;G++)dt=Bt[G],Lt?P&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,ut,Et,dt):e.texImage2D(i.TEXTURE_2D,G,bt,ut,Et,dt);x.generateMipmaps=!1}else if(Lt){if(Kt){const G=At(J);e.texStorage2D(i.TEXTURE_2D,it,bt,G.width,G.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,bt,ut,Et,J);m(x)&&f(j),vt.__version=X.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function tt(b,x,O){if(x.image.length!==6)return;const j=$t(b,x),Z=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const X=n.get(Z);if(Z.version!==X.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const vt=kt.getPrimaries(kt.workingColorSpace),rt=x.colorSpace===An?null:kt.getPrimaries(x.colorSpace),ht=x.colorSpace===An||vt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Vt=x.isCompressedTexture||x.image[0].isCompressedTexture,J=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let $=0;$<6;$++)!Vt&&!J?ut[$]=_(x.image[$],!0,s.maxCubemapSize):ut[$]=J?x.image[$].image:x.image[$],ut[$]=Jt(x,ut[$]);const Et=ut[0],bt=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),Bt=E(x.internalFormat,bt,dt,x.colorSpace),Lt=x.isVideoTexture!==!0,Kt=X.__version===void 0||j===!0,P=Z.dataReady;let it=L(x,Et);It(i.TEXTURE_CUBE_MAP,x);let G;if(Vt){Lt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Bt,Et.width,Et.height);for(let $=0;$<6;$++){G=ut[$].mipmaps;for(let lt=0;lt<G.length;lt++){const ot=G[lt];x.format!==ke?bt!==null?Lt?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ot.width,ot.height,bt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ot.width,ot.height,bt,dt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Bt,ot.width,ot.height,0,bt,dt,ot.data)}}}else{if(G=x.mipmaps,Lt&&Kt){G.length>0&&it++;const $=At(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Bt,$.width,$.height)}for(let $=0;$<6;$++)if(J){Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ut[$].width,ut[$].height,bt,dt,ut[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,ut[$].width,ut[$].height,0,bt,dt,ut[$].data);for(let lt=0;lt<G.length;lt++){const Rt=G[lt].image[$].image;Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Rt.width,Rt.height,bt,dt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Bt,Rt.width,Rt.height,0,bt,dt,Rt.data)}}else{Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,bt,dt,ut[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,bt,dt,ut[$]);for(let lt=0;lt<G.length;lt++){const ot=G[lt];Lt?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,bt,dt,ot.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Bt,bt,dt,ot.image[$])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),X.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function gt(b,x,O,j,Z,X){const vt=r.convert(O.format,O.colorSpace),rt=r.convert(O.type),ht=E(O.internalFormat,vt,rt,O.colorSpace),Vt=n.get(x),J=n.get(O);if(J.__renderTarget=x,!Vt.__hasExternalTextures){const ut=Math.max(1,x.width>>X),Et=Math.max(1,x.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,ht,ut,Et,x.depth,0,vt,rt,null):e.texImage2D(Z,X,ht,ut,Et,0,vt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ot(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,J.__webglTexture,0,Nt(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,J.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const j=x.depthTexture,Z=j&&j.isDepthTexture?j.type:null,X=v(x.stencilBuffer,Z),vt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Nt(x);Ot(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,X,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,b)}else{const j=x.textures;for(let Z=0;Z<j.length;Z++){const X=j[Z],vt=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ht=E(X.internalFormat,vt,rt,X.colorSpace),Vt=Nt(x);O&&Ot(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ht,x.width,x.height):Ot(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const Z=j.__webglTexture,X=Nt(x);if(x.depthTexture.format===li)Ot(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===mi)Ot(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ct(b){const x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=j}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");St(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),st(x.__webglDepthbuffer[j],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(b,x,O){const j=n.get(b);x!==void 0&&gt(j.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ct(b)}function ee(b){const x=b.texture,O=n.get(b),j=n.get(x);b.addEventListener("dispose",w);const Z=b.textures,X=b.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)O.__webglFramebuffer[rt][ht]=i.createFramebuffer()}else O.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)O.__webglFramebuffer[rt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(vt)for(let rt=0,ht=Z.length;rt<ht;rt++){const Vt=n.get(Z[rt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Ot(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const ht=Z[rt];O.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);const Vt=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),ut=E(ht.internalFormat,Vt,J,ht.colorSpace,b.isXRRenderTarget===!0),Et=Nt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ut,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),st(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),It(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)gt(O.__webglFramebuffer[rt][ht],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else gt(O.__webglFramebuffer[rt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,ht=Z.length;rt<ht;rt++){const Vt=Z[rt],J=n.get(Vt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),It(i.TEXTURE_2D,Vt),gt(O.__webglFramebuffer,b,Vt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Vt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,j.__webglTexture),It(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)gt(O.__webglFramebuffer[ht],b,x,i.COLOR_ATTACHMENT0,rt,ht);else gt(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,rt,0);m(x)&&f(rt),e.unbindTexture()}b.depthBuffer&&Ct(b)}function zt(b){const x=b.textures;for(let O=0,j=x.length;O<j;O++){const Z=x[O];if(m(Z)){const X=y(b),vt=n.get(Z).__webglTexture;e.bindTexture(X,vt),f(X),e.unbindTexture()}}}const re=[],N=[];function Pe(b){if(b.samples>0){if(Ot(b)===!1){const x=b.textures,O=b.width,j=b.height;let Z=i.COLOR_BUFFER_BIT;const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(b),rt=x.length>1;if(rt)for(let ht=0;ht<x.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ht=0;ht<x.length;ht++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const Vt=n.get(x[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,O,j,0,0,O,j,Z,i.NEAREST),l===!0&&(re.length=0,N.length=0,re.push(i.COLOR_ATTACHMENT0+ht),b.depthBuffer&&b.resolveDepthBuffer===!1&&(re.push(X),N.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<x.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ht]);const Vt=n.get(x[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Nt(b){return Math.min(s.maxSamples,b.samples)}function Ot(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Jt(b,x){const O=b.colorSpace,j=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==_i&&O!==An&&(kt.getTransfer(O)===qt?(j!==ke||Z!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function At(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ot}function pm(i,t){function e(n,s=An){let r;const o=kt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.BYTE;if(n===Ll)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===co)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Ul)return i.RGB;if(n===ke)return i.RGBA;if(n===Nl)return i.LUMINANCE;if(n===Ol)return i.LUMINANCE_ALPHA;if(n===li)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===gs||n===_s||n===vs||n===xs)if(o===qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pr||n===Dr||n===Lr||n===Fr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ir||n===Ur||n===Nr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ir||n===Ur)return o===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Or||n===Br||n===zr||n===Vr||n===kr||n===Hr||n===Gr||n===Wr||n===Xr||n===Yr||n===qr||n===jr||n===$r||n===Kr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Or)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Br)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$r)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kr)return o===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===As||n===Zr||n===Jr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===As)return o===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vl||n===Qr||n===to||n===eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===As)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class mm extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gm={type:"move"};class hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:_m,fragmentShader:vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends kn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new xm,m=e.getContextAttributes();let f=null,y=null;const E=[],v=[],L=new wt;let T=null;const w=new Ie;w.viewport=new se;const I=new Ie;I.viewport=new se;const S=[w,I],M=new mm;let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=E[Y];return tt===void 0&&(tt=new hr,E[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=E[Y];return tt===void 0&&(tt=new hr,E[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=E[Y];return tt===void 0&&(tt=new hr,E[Y]=tt),tt.getHandSpace()};function U(Y){const tt=v.indexOf(Y.inputSource);if(tt===-1)return;const gt=E[tt];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,c||o),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<E.length;Y++){const tt=v[Y];tt!==null&&(v[Y]=null,E[Y].disconnect(tt))}R=null,W=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Bn(p.framebufferWidth,p.framebufferHeight,{format:ke,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?mi:li,gt=m.stencil?pi:On);const St={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Bn(d.textureWidth,d.textureHeight,{format:ke,type:hn,depthTexture:new ec(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let tt=0;tt<Y.removed.length;tt++){const gt=Y.removed[tt],st=v.indexOf(gt);st>=0&&(v[st]=null,E[st].disconnect(gt))}for(let tt=0;tt<Y.added.length;tt++){const gt=Y.added[tt];let st=v.indexOf(gt);if(st===-1){for(let Ct=0;Ct<E.length;Ct++)if(Ct>=v.length){v.push(gt),st=Ct;break}else if(v[Ct]===null){v[Ct]=gt,st=Ct;break}if(st===-1)break}const St=E[st];St&&St.connect(gt)}}const k=new C,K=new C;function V(Y,tt,gt){k.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(gt.matrixWorld);const st=k.distanceTo(K),St=tt.projectionMatrix.elements,Ct=gt.projectionMatrix.elements,Ut=St[14]/(St[10]-1),ee=St[14]/(St[10]+1),zt=(St[9]+1)/St[5],re=(St[9]-1)/St[5],N=(St[8]-1)/St[0],Pe=(Ct[8]+1)/Ct[0],Nt=Ut*N,Ot=Ut*Pe,Mt=st/(-N+Pe),Jt=Mt*-N;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Jt),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const At=Ut+Mt,b=ee+Mt,x=Nt-Jt,O=Ot+(st-Jt),j=zt*ee/b*At,Z=re*ee/b*At;Y.projectionMatrix.makePerspective(x,O,j,Z,At,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,gt=Y.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=I.near=w.near=tt,M.far=I.far=w.far=gt,(R!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,W=M.far),w.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,M.layers.mask=w.layers.mask|I.layers.mask;const st=Y.parent,St=M.cameras;et(M,st);for(let Ct=0;Ct<St.length;Ct++)et(St[Ct],st);St.length===2?V(M,w,I):M.projectionMatrix.copy(w.projectionMatrix),ct(Y,M,st)};function ct(Y,tt,gt){gt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=no*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let _t=null;function It(Y,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let st=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Ct=0;Ct<gt.length;Ct++){const Ut=gt[Ct];let ee=null;if(p!==null)ee=p.getViewport(Ut);else{const re=u.getViewSubImage(d,Ut);ee=re.viewport,Ct===0&&(t.setRenderTargetTextures(y,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(y))}let zt=S[Ct];zt===void 0&&(zt=new Ie,zt.layers.enable(Ct),zt.viewport=new se,S[Ct]=zt),zt.matrix.fromArray(Ut.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Ut.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ee.x,ee.y,ee.width,ee.height),Ct===0&&(M.matrix.copy(zt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(zt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Ct=u.getDepthInformation(gt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,s.renderState)}}for(let gt=0;gt<E.length;gt++){const st=v[gt],St=E[gt];st!==null&&St!==void 0&&St.update(st,tt,c||o)}_t&&_t(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const $t=new Ql;$t.setAnimationLoop(It),this.setAnimationLoop=function(Y){_t=Y},this.dispose=function(){}}}const Dn=new Ge,Mm=new Gt;function Em(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Kl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Me&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Me&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),E=y.envMap,v=y.envMapRotation;E&&(m.envMap.value=E,Dn.copy(v),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),m.envMapRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Dn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Me&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const v=E.program;n.uniformBlockBinding(y,v)}function c(y,E){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const L=E.program;n.updateUBOMapping(y,L);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const E=u();y.__bindingPointIndex=E;const v=i.createBuffer(),L=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=s[y.id],v=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,w=v.length;T<w;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=I.length;S<M;S++){const R=I[S];if(p(R,T,S,L)===!0){const W=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let q=0;q<U.length;q++){const k=U[q],K=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,W+H,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,E,v,L){const T=y.value,w=E+"_"+v;if(L[w]===void 0)return typeof T=="number"||typeof T=="boolean"?L[w]=T:L[w]=T.clone(),!0;{const I=L[w];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return L[w]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){const E=y.uniforms;let v=0;const L=16;for(let w=0,I=E.length;w<I;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,R=S.length;M<R;M++){const W=S[M],U=Array.isArray(W.value)?W.value:[W.value];for(let H=0,q=U.length;H<q;H++){const k=U[H],K=_(k),V=v%L,et=V%K.boundary,ct=V+et;v+=et,ct!==0&&L-ct<K.storage&&(v+=L-ct),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=K.storage}}}const T=v%L;return T>0&&(v+=L-T),y.__size=v,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class ym{constructor(t={}){const{canvas:e=uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=En,this.toneMappingExposure=1;const v=this;let L=!1,T=0,w=0,I=null,S=-1,M=null;const R=new se,W=new se;let U=null;const H=new yt(0);let q=0,k=e.width,K=e.height,V=1,et=null,ct=null;const _t=new se(0,0,k,K),It=new se(0,0,k,K);let $t=!1;const Y=new _o;let tt=!1,gt=!1;const st=new Gt,St=new Gt,Ct=new C,Ut=new se,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function re(){return I===null?V:1}let N=n;function Pe(A,D){return e.getContext(A,D)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ao}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const D="webgl2";if(N=Pe(D,A),N===null)throw Pe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Nt,Ot,Mt,Jt,At,b,x,O,j,Z,X,vt,rt,ht,Vt,J,ut,Et,bt,dt,Bt,Lt,Kt,P;function it(){Nt=new Rf(N),Nt.init(),Lt=new pm(N,Nt),Ot=new Sf(N,Nt,t,Lt),Mt=new um(N,Nt),Ot.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Jt=new Lf(N),At=new Kp,b=new fm(N,Nt,Mt,At,Ot,Lt,Jt),x=new bf(v),O=new Cf(v),j=new Bh(N),Kt=new Mf(N,j),Z=new Pf(N,j,Jt,Kt),X=new If(N,Z,j,Jt),bt=new Ff(N,Ot,b),J=new yf(At),vt=new $p(v,x,O,Nt,Ot,Kt,J),rt=new Em(v,At),ht=new Jp,Vt=new sm(Nt),Et=new Af(v,x,O,Mt,X,p,l),ut=new cm(v,X,Ot),P=new Sm(N,Jt,Ot,Mt),dt=new Ef(N,Nt,Jt),Bt=new Df(N,Nt,Jt),Jt.programs=vt.programs,v.capabilities=Ot,v.extensions=Nt,v.properties=At,v.renderLists=ht,v.shadowMap=ut,v.state=Mt,v.info=Jt}it();const G=new Am(v,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(k,K,!1))},this.getSize=function(A){return A.set(k,K)},this.setSize=function(A,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,K=D,e.width=Math.floor(A*V),e.height=Math.floor(D*V),B===!0&&(e.style.width=A+"px",e.style.height=D+"px"),this.setViewport(0,0,A,D)},this.getDrawingBufferSize=function(A){return A.set(k*V,K*V).floor()},this.setDrawingBufferSize=function(A,D,B){k=A,K=D,V=B,e.width=Math.floor(A*B),e.height=Math.floor(D*B),this.setViewport(0,0,A,D)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,D,B,z){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,D,B,z),Mt.viewport(R.copy(_t).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(It)},this.setScissor=function(A,D,B,z){A.isVector4?It.set(A.x,A.y,A.z,A.w):It.set(A,D,B,z),Mt.scissor(W.copy(It).multiplyScalar(V).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(A){Mt.setScissorTest($t=A)},this.setOpaqueSort=function(A){et=A},this.setTransparentSort=function(A){ct=A},this.getClearColor=function(A){return A.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(A=!0,D=!0,B=!0){let z=0;if(A){let F=!1;if(I!==null){const Q=I.texture.format;F=Q===mo||Q===po||Q===fo}if(F){const Q=I.texture.type,at=Q===hn||Q===On||Q===Di||Q===pi||Q===ho||Q===uo,ft=Et.getClearColor(),pt=Et.getClearAlpha(),Tt=ft.r,Pt=ft.g,mt=ft.b;at?(g[0]=Tt,g[1]=Pt,g[2]=mt,g[3]=pt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Tt,_[1]=Pt,_[2]=mt,_[3]=pt,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ht.dispose(),Vt.dispose(),At.dispose(),x.dispose(),O.dispose(),X.dispose(),Kt.dispose(),P.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Mo),G.removeEventListener("sessionend",Eo),bn.stop()};function $(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=Jt.autoReset,D=ut.enabled,B=ut.autoUpdate,z=ut.needsUpdate,F=ut.type;it(),Jt.autoReset=A,ut.enabled=D,ut.autoUpdate=B,ut.needsUpdate=z,ut.type=F}function ot(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Rt(A){const D=A.target;D.removeEventListener("dispose",Rt),ie(D)}function ie(A){me(A),At.remove(A)}function me(A){const D=At.get(A).programs;D!==void 0&&(D.forEach(function(B){vt.releaseProgram(B)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,D,B,z,F,Q){D===null&&(D=ee);const at=F.isMesh&&F.matrixWorld.determinant()<0,ft=dc(A,D,B,z,F);Mt.setMaterial(z,at);let pt=B.index,Tt=1;if(z.wireframe===!0){if(pt=Z.getWireframeAttribute(B),pt===void 0)return;Tt=2}const Pt=B.drawRange,mt=B.attributes.position;let Ht=Pt.start*Tt,Zt=(Pt.start+Pt.count)*Tt;Q!==null&&(Ht=Math.max(Ht,Q.start*Tt),Zt=Math.min(Zt,(Q.start+Q.count)*Tt)),pt!==null?(Ht=Math.max(Ht,0),Zt=Math.min(Zt,pt.count)):mt!=null&&(Ht=Math.max(Ht,0),Zt=Math.min(Zt,mt.count));const Qt=Zt-Ht;if(Qt<0||Qt===1/0)return;Kt.setup(F,z,ft,B,pt);let Ee,Wt=dt;if(pt!==null&&(Ee=j.get(pt),Wt=Bt,Wt.setIndex(Ee)),F.isMesh)z.wireframe===!0?(Mt.setLineWidth(z.wireframeLinewidth*re()),Wt.setMode(N.LINES)):Wt.setMode(N.TRIANGLES);else if(F.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),Mt.setLineWidth(xt*re()),F.isLineSegments?Wt.setMode(N.LINES):F.isLineLoop?Wt.setMode(N.LINE_LOOP):Wt.setMode(N.LINE_STRIP)}else F.isPoints?Wt.setMode(N.POINTS):F.isSprite&&Wt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Wt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const xt=F._multiDrawStarts,$e=F._multiDrawCounts,Xt=F._multiDrawCount,Ne=pt?j.get(pt).bytesPerElement:1,Hn=At.get(z).currentProgram.getUniforms();for(let we=0;we<Xt;we++)Hn.setValue(N,"_gl_DrawID",we),Wt.render(xt[we]/Ne,$e[we])}else if(F.isInstancedMesh)Wt.renderInstances(Ht,Qt,F.count);else if(B.isInstancedBufferGeometry){const xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,$e=Math.min(B.instanceCount,xt);Wt.renderInstances(Ht,Qt,$e)}else Wt.render(Ht,Qt)};function Yt(A,D,B){A.transparent===!0&&A.side===sn&&A.forceSinglePass===!1?(A.side=Me,A.needsUpdate=!0,zi(A,D,B),A.side=cn,A.needsUpdate=!0,zi(A,D,B),A.side=sn):zi(A,D,B)}this.compile=function(A,D,B=null){B===null&&(B=A),f=Vt.get(B),f.init(D),E.push(f),B.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),A!==B&&A.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const z=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let at=0;at<Q.length;at++){const ft=Q[at];Yt(ft,B,F),z.add(ft)}else Yt(Q,B,F),z.add(Q)}),E.pop(),f=null,z},this.compileAsync=function(A,D,B=null){const z=this.compile(A,D,B);return new Promise(F=>{function Q(){if(z.forEach(function(at){At.get(at).currentProgram.isReady()&&z.delete(at)}),z.size===0){F(A);return}setTimeout(Q,10)}Nt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ue=null;function je(A){Ue&&Ue(A)}function Mo(){bn.stop()}function Eo(){bn.start()}const bn=new Ql;bn.setAnimationLoop(je),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(A){Ue=A,G.setAnimationLoop(A),A===null?bn.stop():bn.start()},G.addEventListener("sessionstart",Mo),G.addEventListener("sessionend",Eo),this.render=function(A,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,D,I),f=Vt.get(A,E.length),f.init(D),E.push(f),St.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(St),gt=this.localClippingEnabled,tt=J.init(this.clippingPlanes,gt),m=ht.get(A,y.length),m.init(),y.push(m),G.enabled===!0&&G.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&Us(Q,D,-1/0,v.sortObjects)}Us(A,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,ct),zt=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,zt&&Et.addToRenderList(m,A),this.info.render.frame++,tt===!0&&J.beginShadows();const B=f.state.shadowsArray;ut.render(B,A,D),tt===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(f.setupLights(),D.isArrayCamera){const Q=D.cameras;if(F.length>0)for(let at=0,ft=Q.length;at<ft;at++){const pt=Q[at];yo(z,F,A,pt)}zt&&Et.render(A);for(let at=0,ft=Q.length;at<ft;at++){const pt=Q[at];So(m,A,pt,pt.viewport)}}else F.length>0&&yo(z,F,A,D),zt&&Et.render(A),So(m,A,D);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(v,A,D),Kt.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],tt===!0&&J.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Us(A,D,B,z){if(A.visible===!1)return;if(A.layers.test(D.layers)){if(A.isGroup)B=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(D);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){z&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);const at=X.update(A),ft=A.material;ft.visible&&m.push(A,at,ft,B,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const at=X.update(A),ft=A.material;if(z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Ut.copy(at.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(ft)){const pt=at.groups;for(let Tt=0,Pt=pt.length;Tt<Pt;Tt++){const mt=pt[Tt],Ht=ft[mt.materialIndex];Ht&&Ht.visible&&m.push(A,at,Ht,B,Ut.z,mt)}}else ft.visible&&m.push(A,at,ft,B,Ut.z,null)}}const Q=A.children;for(let at=0,ft=Q.length;at<ft;at++)Us(Q[at],D,B,z)}function So(A,D,B,z){const F=A.opaque,Q=A.transmissive,at=A.transparent;f.setupLightsView(B),tt===!0&&J.setGlobalState(v.clippingPlanes,B),z&&Mt.viewport(R.copy(z)),F.length>0&&Bi(F,D,B),Q.length>0&&Bi(Q,D,B),at.length>0&&Bi(at,D,B),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function yo(A,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Bn(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Ui:hn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[z.id],at=z.viewport||R;Q.setSize(at.z,at.w);const ft=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),zt&&Et.render(B);const pt=v.toneMapping;v.toneMapping=En;const Tt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),tt===!0&&J.setGlobalState(v.clippingPlanes,z),Bi(A,B,z),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let mt=0,Ht=D.length;mt<Ht;mt++){const Zt=D[mt],Qt=Zt.object,Ee=Zt.geometry,Wt=Zt.material,xt=Zt.group;if(Wt.side===sn&&Qt.layers.test(z.layers)){const $e=Wt.side;Wt.side=Me,Wt.needsUpdate=!0,bo(Qt,B,z,Ee,Wt,xt),Wt.side=$e,Wt.needsUpdate=!0,Pt=!0}}Pt===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}v.setRenderTarget(ft),v.setClearColor(H,q),Tt!==void 0&&(z.viewport=Tt),v.toneMapping=pt}function Bi(A,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let F=0,Q=A.length;F<Q;F++){const at=A[F],ft=at.object,pt=at.geometry,Tt=z===null?at.material:z,Pt=at.group;ft.layers.test(B.layers)&&bo(ft,D,B,pt,Tt,Pt)}}function bo(A,D,B,z,F,Q){A.onBeforeRender(v,D,B,z,F,Q),A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(v,D,B,z,A,Q),F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=Me,F.needsUpdate=!0,v.renderBufferDirect(B,D,z,F,A,Q),F.side=cn,F.needsUpdate=!0,v.renderBufferDirect(B,D,z,F,A,Q),F.side=sn):v.renderBufferDirect(B,D,z,F,A,Q),A.onAfterRender(v,D,B,z,F,Q)}function zi(A,D,B){D.isScene!==!0&&(D=ee);const z=At.get(A),F=f.state.lights,Q=f.state.shadowsArray,at=F.state.version,ft=vt.getParameters(A,F.state,Q,D,B),pt=vt.getProgramCacheKey(ft);let Tt=z.programs;z.environment=A.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(A.isMeshStandardMaterial?O:x).get(A.envMap||z.environment),z.envMapRotation=z.environment!==null&&A.envMap===null?D.environmentRotation:A.envMapRotation,Tt===void 0&&(A.addEventListener("dispose",Rt),Tt=new Map,z.programs=Tt);let Pt=Tt.get(pt);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===at)return wo(A,ft),Pt}else ft.uniforms=vt.getUniforms(A),A.onBeforeCompile(ft,v),Pt=vt.acquireProgram(ft,pt),Tt.set(pt,Pt),z.uniforms=ft.uniforms;const mt=z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(mt.clippingPlanes=J.uniform),wo(A,ft),z.needsLights=pc(A),z.lightsStateVersion=at,z.needsLights&&(mt.ambientLightColor.value=F.state.ambient,mt.lightProbe.value=F.state.probe,mt.directionalLights.value=F.state.directional,mt.directionalLightShadows.value=F.state.directionalShadow,mt.spotLights.value=F.state.spot,mt.spotLightShadows.value=F.state.spotShadow,mt.rectAreaLights.value=F.state.rectArea,mt.ltc_1.value=F.state.rectAreaLTC1,mt.ltc_2.value=F.state.rectAreaLTC2,mt.pointLights.value=F.state.point,mt.pointLightShadows.value=F.state.pointShadow,mt.hemisphereLights.value=F.state.hemi,mt.directionalShadowMap.value=F.state.directionalShadowMap,mt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,mt.spotShadowMap.value=F.state.spotShadowMap,mt.spotLightMatrix.value=F.state.spotLightMatrix,mt.spotLightMap.value=F.state.spotLightMap,mt.pointShadowMap.value=F.state.pointShadowMap,mt.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function To(A){if(A.uniformsList===null){const D=A.currentProgram.getUniforms();A.uniformsList=Es.seqWithValue(D.seq,A.uniforms)}return A.uniformsList}function wo(A,D){const B=At.get(A);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function dc(A,D,B,z,F){D.isScene!==!0&&(D=ee),b.resetTextureUnits();const Q=D.fog,at=z.isMeshStandardMaterial?D.environment:null,ft=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_i,pt=(z.isMeshStandardMaterial?O:x).get(z.envMap||at),Tt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),mt=!!B.morphAttributes.position,Ht=!!B.morphAttributes.normal,Zt=!!B.morphAttributes.color;let Qt=En;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Qt=v.toneMapping);const Ee=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Wt=Ee!==void 0?Ee.length:0,xt=At.get(z),$e=f.state.lights;if(tt===!0&&(gt===!0||A!==M)){const De=A===M&&z.id===S;J.setState(z,A,De)}let Xt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==$e.state.version||xt.outputColorSpace!==ft||F.isBatchedMesh&&xt.batching===!1||!F.isBatchedMesh&&xt.batching===!0||F.isBatchedMesh&&xt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&xt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&xt.instancing===!1||!F.isInstancedMesh&&xt.instancing===!0||F.isSkinnedMesh&&xt.skinning===!1||!F.isSkinnedMesh&&xt.skinning===!0||F.isInstancedMesh&&xt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&xt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&xt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&xt.instancingMorph===!1&&F.morphTexture!==null||xt.envMap!==pt||z.fog===!0&&xt.fog!==Q||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==J.numPlanes||xt.numIntersection!==J.numIntersection)||xt.vertexAlphas!==Tt||xt.vertexTangents!==Pt||xt.morphTargets!==mt||xt.morphNormals!==Ht||xt.morphColors!==Zt||xt.toneMapping!==Qt||xt.morphTargetsCount!==Wt)&&(Xt=!0):(Xt=!0,xt.__version=z.version);let Ne=xt.currentProgram;Xt===!0&&(Ne=zi(z,D,F));let Hn=!1,we=!1,Ai=!1;const te=Ne.getUniforms(),We=xt.uniforms;if(Mt.useProgram(Ne.program)&&(Hn=!0,we=!0,Ai=!0),z.id!==S&&(S=z.id,we=!0),Hn||M!==A){Mt.buffers.depth.getReversed()?(st.copy(A.projectionMatrix),fh(st),ph(st),te.setValue(N,"projectionMatrix",st)):te.setValue(N,"projectionMatrix",A.projectionMatrix),te.setValue(N,"viewMatrix",A.matrixWorldInverse);const un=te.map.cameraPosition;un!==void 0&&un.setValue(N,Ct.setFromMatrixPosition(A.matrixWorld)),Ot.logarithmicDepthBuffer&&te.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&te.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,we=!0,Ai=!0)}if(F.isSkinnedMesh){te.setOptional(N,F,"bindMatrix"),te.setOptional(N,F,"bindMatrixInverse");const De=F.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),te.setValue(N,"boneTexture",De.boneTexture,b))}F.isBatchedMesh&&(te.setOptional(N,F,"batchingTexture"),te.setValue(N,"batchingTexture",F._matricesTexture,b),te.setOptional(N,F,"batchingIdTexture"),te.setValue(N,"batchingIdTexture",F._indirectTexture,b),te.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&te.setValue(N,"batchingColorTexture",F._colorsTexture,b));const Mi=B.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&bt.update(F,B,Ne),(we||xt.receiveShadow!==F.receiveShadow)&&(xt.receiveShadow=F.receiveShadow,te.setValue(N,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(We.envMap.value=pt,We.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(We.envMapIntensity.value=D.environmentIntensity),we&&(te.setValue(N,"toneMappingExposure",v.toneMappingExposure),xt.needsLights&&fc(We,Ai),Q&&z.fog===!0&&rt.refreshFogUniforms(We,Q),rt.refreshMaterialUniforms(We,z,V,K,f.state.transmissionRenderTarget[A.id]),Es.upload(N,To(xt),We,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Es.upload(N,To(xt),We,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&te.setValue(N,"center",F.center),te.setValue(N,"modelViewMatrix",F.modelViewMatrix),te.setValue(N,"normalMatrix",F.normalMatrix),te.setValue(N,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const De=z.uniformsGroups;for(let un=0,dn=De.length;un<dn;un++){const Co=De[un];P.update(Co,Ne),P.bind(Co,Ne)}}return Ne}function fc(A,D){A.ambientLightColor.needsUpdate=D,A.lightProbe.needsUpdate=D,A.directionalLights.needsUpdate=D,A.directionalLightShadows.needsUpdate=D,A.pointLights.needsUpdate=D,A.pointLightShadows.needsUpdate=D,A.spotLights.needsUpdate=D,A.spotLightShadows.needsUpdate=D,A.rectAreaLights.needsUpdate=D,A.hemisphereLights.needsUpdate=D}function pc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,D,B){At.get(A.texture).__webglTexture=D,At.get(A.depthTexture).__webglTexture=B;const z=At.get(A);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,D){const B=At.get(A);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(A,D=0,B=0){I=A,T=D,w=B;let z=!0,F=null,Q=!1,at=!1;if(A){const pt=At.get(A);if(pt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(pt.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(pt.__hasExternalTextures)b.rebindTextures(A,At.get(A.texture).__webglTexture,At.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const mt=A.depthTexture;if(pt.__boundDepthTexture!==mt){if(mt!==null&&At.has(mt)&&(A.width!==mt.image.width||A.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Tt=A.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(at=!0);const Pt=At.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?F=Pt[D][B]:F=Pt[D],Q=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?F=At.get(A).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[B]:F=Pt,R.copy(A.viewport),W.copy(A.scissor),U=A.scissorTest}else R.copy(_t).multiplyScalar(V).floor(),W.copy(It).multiplyScalar(V).floor(),U=$t;if(Mt.bindFramebuffer(N.FRAMEBUFFER,F)&&z&&Mt.drawBuffers(A,F),Mt.viewport(R),Mt.scissor(W),Mt.setScissorTest(U),Q){const pt=At.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,B)}else if(at){const pt=At.get(A.texture),Tt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,pt.__webglTexture,B||0,Tt)}S=-1},this.readRenderTargetPixels=function(A,D,B,z,F,Q,at){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){Mt.bindFramebuffer(N.FRAMEBUFFER,ft);try{const pt=A.texture,Tt=pt.format,Pt=pt.type;if(!Ot.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=A.width-z&&B>=0&&B<=A.height-F&&N.readPixels(D,B,z,F,Lt.convert(Tt),Lt.convert(Pt),Q)}finally{const pt=I!==null?At.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(N.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(A,D,B,z,F,Q,at){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){const pt=A.texture,Tt=pt.format,Pt=pt.type;if(!Ot.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=A.width-z&&B>=0&&B<=A.height-F){Mt.bindFramebuffer(N.FRAMEBUFFER,ft);const mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(D,B,z,F,Lt.convert(Tt),Lt.convert(Pt),0);const Ht=I!==null?At.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(N.FRAMEBUFFER,Ht);const Zt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await dh(N,Zt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(mt),N.deleteSync(Zt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,D=null,B=0){A.isTexture!==!0&&(Ci("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,A=arguments[1]);const z=Math.pow(2,-B),F=Math.floor(A.image.width*z),Q=Math.floor(A.image.height*z),at=D!==null?D.x:0,ft=D!==null?D.y:0;b.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,at,ft,F,Q),Mt.unbindTexture()},this.copyTextureToTexture=function(A,D,B=null,z=null,F=0){A.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1],D=arguments[2],F=arguments[3]||0,B=null);let Q,at,ft,pt,Tt,Pt,mt,Ht,Zt;const Qt=A.isCompressedTexture?A.mipmaps[F]:A.image;B!==null?(Q=B.max.x-B.min.x,at=B.max.y-B.min.y,ft=B.isBox3?B.max.z-B.min.z:1,pt=B.min.x,Tt=B.min.y,Pt=B.isBox3?B.min.z:0):(Q=Qt.width,at=Qt.height,ft=Qt.depth||1,pt=0,Tt=0,Pt=0),z!==null?(mt=z.x,Ht=z.y,Zt=z.z):(mt=0,Ht=0,Zt=0);const Ee=Lt.convert(D.format),Wt=Lt.convert(D.type);let xt;D.isData3DTexture?(b.setTexture3D(D,0),xt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),xt=N.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const $e=N.getParameter(N.UNPACK_ROW_LENGTH),Xt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ne=N.getParameter(N.UNPACK_SKIP_PIXELS),Hn=N.getParameter(N.UNPACK_SKIP_ROWS),we=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Qt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,pt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Tt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pt);const Ai=A.isDataArrayTexture||A.isData3DTexture,te=D.isDataArrayTexture||D.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const We=At.get(A),Mi=At.get(D),De=At.get(We.__renderTarget),un=At.get(Mi.__renderTarget);Mt.bindFramebuffer(N.READ_FRAMEBUFFER,De.__webglFramebuffer),Mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let dn=0;dn<ft;dn++)Ai&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(A).__webglTexture,F,Pt+dn),A.isDepthTexture?(te&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(D).__webglTexture,F,Zt+dn),N.blitFramebuffer(pt,Tt,Q,at,mt,Ht,Q,at,N.DEPTH_BUFFER_BIT,N.NEAREST)):te?N.copyTexSubImage3D(xt,F,mt,Ht,Zt+dn,pt,Tt,Q,at):N.copyTexSubImage2D(xt,F,mt,Ht,Zt+dn,pt,Tt,Q,at);Mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else te?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(xt,F,mt,Ht,Zt,Q,at,ft,Ee,Wt,Qt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,F,mt,Ht,Zt,Q,at,ft,Ee,Qt.data):N.texSubImage3D(xt,F,mt,Ht,Zt,Q,at,ft,Ee,Wt,Qt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,mt,Ht,Q,at,Ee,Wt,Qt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,mt,Ht,Qt.width,Qt.height,Ee,Qt.data):N.texSubImage2D(N.TEXTURE_2D,F,mt,Ht,Q,at,Ee,Wt,Qt);N.pixelStorei(N.UNPACK_ROW_LENGTH,$e),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),N.pixelStorei(N.UNPACK_SKIP_ROWS,Hn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,we),F===0&&D.generateMipmaps&&N.generateMipmap(xt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(A,D,B=null,z=null,F=0){return A.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,A=arguments[2],D=arguments[3],F=arguments[4]||0),Ci('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,D,B,z,F)},this.initRenderTarget=function(A){At.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){T=0,w=0,I=null,Mt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}class bm extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hi extends qe{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bs=new C,Ts=new C,Ca=new Gt,wi=new Ps,as=new Oi,ur=new C,Ra=new C;class Tm extends de{constructor(t=new fe,e=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bs.fromBufferAttribute(e,s-1),Ts.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bs.distanceTo(Ts);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(s),as.radius+=r,t.ray.intersectsSphere(as)===!1)return;Ca.copy(s).invert(),wi.copy(t.ray).applyMatrix4(Ca);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),y=h.getX(_+1),E=ls(this,t,wi,l,f,y);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=ls(this,t,wi,l,_,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=ls(this,t,wi,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=ls(this,t,wi,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ls(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(bs.fromBufferAttribute(o,s),Ts.fromBufferAttribute(o,r),e.distanceSqToSegment(bs,Ts,ur,Ra)>n)return;ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ur);if(!(l<t.near||l>t.far))return{distance:l,point:Ra.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Pa=new C,Da=new C;class ws extends Tm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Pa.fromBufferAttribute(e,s),Da.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pa.distanceTo(Da);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pi extends qe{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const La=new Gt,so=new Ps,cs=new Oi,hs=new C;class dr extends de{constructor(t=new fe,e=new Pi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(s),cs.radius+=r,t.ray.intersectsSphere(cs)===!1)return;La.copy(s).invert(),so.copy(t.ray).applyMatrix4(La);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);hs.fromBufferAttribute(u,m),Fa(hs,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)hs.fromBufferAttribute(u,g),Fa(hs,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fa(i,t,e,n,s,r,o){const a=so.distanceSqToPoint(i);if(a<e){const l=new C;so.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}const wm={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=oc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=Lm(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Li(r,o,e,a,l,p,0),o}};function oc(i,t,e,n,s){let r,o;if(s===Gm(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ia(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ia(r,i[r],i[r+1],o);return o&&Fs(o,o.next)&&(Ii(o),o=o.next),o}function Vn(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fs(e,e.next)||ne(e.prev,e,e.next)===0)){if(Ii(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Li(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Om(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Rm(i,n,s,r):Cm(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ii(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Pm(Vn(i),t,e),Li(i,t,e,n,s,r,2)):o===2&&Dm(i,t,e,n,s,r):Li(Vn(i),t,e,n,s,r,1);break}}}function Cm(i){const t=i.prev,e=i,n=i.next;if(ne(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&ri(s,a,r,l,o,c,g.x,g.y)&&ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rm(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ne(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=ro(p,g,t,e,n),y=ro(_,m,t,e,n);let E=i.prevZ,v=i.nextZ;for(;E&&E.z>=f&&v&&v.z<=y;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&ri(a,h,l,u,c,d,E.x,E.y)&&ne(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ri(a,h,l,u,c,d,v.x,v.y)&&ne(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&ri(a,h,l,u,c,d,E.x,E.y)&&ne(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ri(a,h,l,u,c,d,v.x,v.y)&&ne(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Pm(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Fs(s,r)&&ac(s,n,n.next,r)&&Fi(s,r)&&Fi(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ii(n),Ii(n.next),n=i=r),n=n.next}while(n!==i);return Vn(n)}function Dm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vm(o,a)){let l=lc(o,a);o=Vn(o,o.next),l=Vn(l,l.next),Li(o,t,e,n,s,r,0),Li(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Lm(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=oc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(zm(c));for(s.sort(Fm),r=0;r<s.length;r++)e=Im(s[r],e);return e}function Fm(i,t){return i.x-t.x}function Im(i,t){const e=Um(i,t);if(!e)return t;const n=lc(e,i);return Vn(n,n.next),Vn(e,e.next)}function Um(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ri(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Fi(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Nm(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Nm(i,t){return ne(i.prev,i,t.prev)<0&&ne(t.next,i,i.next)<0}function Om(i,t,e,n){let s=i;do s.z===0&&(s.z=ro(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bm(s)}function Bm(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ro(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ri(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Vm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!km(i,t)&&(Fi(i,t)&&Fi(t,i)&&Hm(i,t)&&(ne(i.prev,i,t.prev)||ne(i,t.prev,t))||Fs(i,t)&&ne(i.prev,i,i.next)>0&&ne(t.prev,t,t.next)>0)}function ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fs(i,t){return i.x===t.x&&i.y===t.y}function ac(i,t,e,n){const s=ds(ne(i,t,e)),r=ds(ne(i,t,n)),o=ds(ne(e,n,i)),a=ds(ne(e,n,t));return!!(s!==r&&o!==a||s===0&&us(i,e,t)||r===0&&us(i,n,t)||o===0&&us(e,i,n)||a===0&&us(e,t,n))}function us(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ds(i){return i>0?1:i<0?-1:0}function km(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ac(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fi(i,t){return ne(i.prev,i,i.next)<0?ne(i,t,i.next)>=0&&ne(i,i.prev,t)>=0:ne(i,t,i.prev)<0||ne(i,i.next,t)<0}function Hm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function lc(i,t){const e=new oo(i.i,i.x,i.y),n=new oo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ia(i,t,e,n){const s=new oo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ii(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Gm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class xo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return xo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ua(t),Na(n,t);let o=t.length;e.forEach(Ua);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Na(n,e[l]);const a=wm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ua(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Na(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Oa extends qe{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wm extends qe{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new yt(16777215),this.specular=new yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ba={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Xm{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Ym=new Xm;class Is{constructor(t){this.manager=t!==void 0?t:Ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const en={};class qm extends Error{constructor(t,e){super(t),this.response=e}}class cc extends Is{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ba.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(en[t]!==void 0){en[t].push({onLoad:e,onProgress:n,onError:s});return}en[t]=[],en[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=en[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){y();function y(){u.read().then(({done:E,value:v})=>{if(E)f.close();else{_+=v.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let T=0,w=h.length;T<w;T++){const I=h[T];I.onProgress&&I.onProgress(L)}f.enqueue(v),y()}},E=>{f.error(E)})}}});return new Response(m)}else throw new qm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ba.add(t,c);const h=en[t];delete en[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=en[t];if(h===void 0)throw this.manager.itemError(t),c;delete en[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class hc extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const fr=new Gt,za=new C,Va=new C;class jm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;za.setFromMatrixPosition(t.matrixWorld),e.position.copy(za),Va.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Va),e.updateMatrixWorld(),fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $m extends jm{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ka extends hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new $m}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Km extends hc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ha{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zm extends ws{constructor(t=10,e=10,n=4473924,s=8947848){n=new yt(n),s=new yt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new fe;h.setAttribute("position",new le(l,3)),h.setAttribute("color",new le(c,3));const u=new hi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jm extends kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);class Ga{constructor(t){this.fold=t,this.rootFaceIndex=0,this.spanningTree=[],this.faceAdjacency=[],this.buildGraph(),this.selectDefaultRoot(),this.buildSpanningTree()}buildGraph(){const t=this.fold.facesVertices.length;this.faceAdjacency=Array.from({length:t},()=>[]);const e=new Map;this.fold.facesVertices.forEach((n,s)=>{const r=n.length;for(let o=0;o<r;o++){const a=n[o],l=n[(o+1)%r],c=`${Math.min(a,l)}-${Math.max(a,l)}`;e.has(c)||e.set(c,[]),e.get(c).push({faceIndex:s,v1:a,v2:l})}}),e.forEach((n,s)=>{if(n.length===2){const r=n[0],o=n[1],a=this.fold.edgeLookup.get(s);this.faceAdjacency[r.faceIndex].push({neighborFace:o.faceIndex,edgeIndex:a,parentEdge:[r.v1,r.v2],childEdge:[o.v1,o.v2]}),this.faceAdjacency[o.faceIndex].push({neighborFace:r.faceIndex,edgeIndex:a,parentEdge:[o.v1,o.v2],childEdge:[r.v1,r.v2]})}})}selectDefaultRoot(){let t=-1,e=0;this.faceAdjacency.forEach((n,s)=>{n.length>t&&(t=n.length,e=s)}),this.rootFaceIndex=e}setRootFace(t){t>=0&&t<this.fold.facesVertices.length&&(this.rootFaceIndex=t,this.buildSpanningTree())}buildSpanningTree(){const t=this.fold.facesVertices.length,e=new Array(t).fill(!1);this.spanningTree=[];const n=[this.rootFaceIndex];for(e[this.rootFaceIndex]=!0;n.length>0;){const s=n.shift(),r=this.faceAdjacency[s]||[];for(const o of r){const a=o.neighborFace;if(!e[a]){e[a]=!0;const l=o.edgeIndex,h=(this.fold.edgesFoldAngle[l]||0)*Math.PI/180,u=o.parentEdge[0],d=o.parentEdge[1];this.spanningTree.push({parentFace:s,childFace:a,edgeIndex:l,v1Idx:u,v2Idx:d,foldAngleRad:h}),n.push(a)}}}}evaluateTransforms(t){const e=this.fold.facesVertices.length,n=Array.from({length:e},()=>new Gt);n[this.rootFaceIndex].identity();const s=this.fold.vertices;for(const r of this.spanningTree){const o=n[r.parentFace],a=t*r.foldAngleRad,l=new C(...s[r.v1Idx]),c=new C(...s[r.v2Idx]),h=new C().subVectors(c,l).normalize(),u=new Gt().makeTranslation(-l.x,-l.y,-l.z),d=new Gt().makeRotationAxis(h,a),p=new Gt().makeTranslation(l.x,l.y,l.z),g=new Gt().multiply(p).multiply(d).multiply(u),_=new Gt().multiplyMatrices(o,g);n[r.childFace]=_}return n}}const Wa={type:"change"},Ao={type:"start"},uc={type:"end"},fs=new Ps,Xa=new xn,Qm=Math.cos(70*hh.DEG2RAD),ae=new C,ye=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pr=1e-6;class tg extends Jm{constructor(t,e=null){super(t,e),this.state=jt.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new zn,this._lastTargetPosition=new C,this._quat=new zn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ha,this._sphericalDelta=new Ha,this._scale=1,this._panOffset=new C,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new C,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ng.bind(this),this._onPointerDown=eg.bind(this),this._onPointerUp=ig.bind(this),this._onContextMenu=hg.bind(this),this._onMouseWheel=og.bind(this),this._onKeyDown=ag.bind(this),this._onTouchStart=lg.bind(this),this._onTouchMove=cg.bind(this),this._onMouseDown=sg.bind(this),this._onMouseMove=rg.bind(this),this._interceptControlDown=ug.bind(this),this._interceptControlUp=dg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wa),this.update(),this.state=jt.NONE}update(t=null){const e=this.object.position;ae.copy(e).sub(this.target),ae.applyQuaternion(this._quat),this._spherical.setFromVector3(ae),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ye:n>Math.PI&&(n-=ye),s<-Math.PI?s+=ye:s>Math.PI&&(s-=ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ae.setFromSpherical(this._spherical),ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ae.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fs.origin.copy(this.object.position),fs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fs.direction))<Qm?this.object.lookAt(this.target):(Xa.setFromNormalAndCoplanarPoint(this.object.up,this.target),fs.intersectPlane(Xa,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pr||this._lastTargetPosition.distanceToSquared(this.target)>pr?(this.dispatchEvent(Wa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ye/60*this.autoRotateSpeed*t:ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ae.setFromMatrixColumn(e,0),ae.multiplyScalar(-t),this._panOffset.add(ae)}_panUp(t,e){this.screenSpacePanning===!0?ae.setFromMatrixColumn(e,1):(ae.setFromMatrixColumn(e,0),ae.crossVectors(this.object.up,ae)),ae.multiplyScalar(t),this._panOffset.add(ae)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ae.copy(s).sub(this.target);let r=ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ye*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function eg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ng(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ig(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uc),this.state=jt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function sg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=jt.DOLLY;break;case oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}break;case oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Ao)}function rg(i){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function og(i){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(i.preventDefault(),this.dispatchEvent(Ao),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(uc))}function ag(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function lg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ii.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=jt.TOUCH_ROTATE;break;case ii.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case ii.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=jt.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(Ao)}function cg(i){switch(this._trackPointer(i),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=jt.NONE}}function hg(i){this.enabled!==!1&&i.preventDefault()}function ug(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const mr={highContrast:{name:"High Contrast (Yellow/Cyan)",bg:592656,frontColor:16771584,backColor:61695,valleyColor:3900150,mountainColor:15680580,boundaryColor:16777215,cutColor:16347926,flatColor:6583435,unassignedColor:11032055,gridColor:1976635},cardboard:{name:"Cardboard Craft",bg:987673,frontColor:13935475,backColor:11107408,valleyColor:3900150,mountainColor:15680580,boundaryColor:16096779,cutColor:16347926,flatColor:6583435,unassignedColor:11032055,gridColor:1976635},blueprint:{name:"Blueprint",bg:727340,frontColor:1981066,backColor:1516884,valleyColor:6333946,mountainColor:16281969,boundaryColor:9684477,cutColor:16486972,flatColor:4674921,unassignedColor:12616956,gridColor:1976635},cyber:{name:"Cyber Neon",bg:461075,frontColor:4988309,backColor:3018853,valleyColor:440020,mountainColor:16007006,boundaryColor:11032055,cutColor:16347926,flatColor:4674921,unassignedColor:15235577,gridColor:1973067},paper:{name:"Origami Paper",bg:1579035,frontColor:16317180,backColor:14870768,valleyColor:2450411,mountainColor:14251782,boundaryColor:3359061,cutColor:14753096,flatColor:9741240,unassignedColor:9133302,gridColor:2565930}};class Ya{constructor(t){this.container=t,this.currentTheme=mr.highContrast,this.scene=new bm,this.scene.background=new yt(this.currentTheme.bg),this.camera=new Ie(45,t.clientWidth/t.clientHeight,.1,1e4),this.renderer=new ym({antialias:!0,alpha:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rl,t.appendChild(this.renderer.domElement),this.controls=new tg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.setupLights(),this.setupGrid(),this.modelGroup=new an,this.scene.add(this.modelGroup),this.faceMeshes=[],this.creaseLines=null,this.showCreases=!0,window.addEventListener("resize",()=>this.onWindowResize())}setupLights(){const t=new Km(16777215,.7);this.scene.add(t);const e=new ka(16777215,1.2);e.position.set(10,20,15),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.bias=-1e-4,this.scene.add(e);const n=new ka(9482495,.4);n.position.set(-10,-10,-10),this.scene.add(n)}setupGrid(){this.gridHelper=new Zm(20,20,this.currentTheme.gridColor,this.currentTheme.gridColor),this.gridHelper.position.y=-.01,this.scene.add(this.gridHelper)}setTheme(t){mr[t]&&(this.currentTheme=mr[t],this.scene.background.setHex(this.currentTheme.bg),this.gridHelper.material.color.setHex(this.currentTheme.gridColor),this.faceMeshes.forEach(e=>{e.frontMesh.material.color.setHex(this.currentTheme.frontColor),e.backMesh.material.color.setHex(this.currentTheme.backColor)}),this.creaseLines&&this.updateCreaseColors())}triangulateFace(t,e){const n=t.length;if(n===3)return[0,1,2];if(n===4)return[0,1,2,0,2,3];const s=new C(...e[t[0]]),r=new C(...e[t[1]]);let o=new C().subVectors(r,s).normalize(),a=null;for(let d=2;d<n;d++){const p=new C(...e[t[d]]),g=new C().crossVectors(o,new C().subVectors(p,s));if(g.lengthSq()>1e-6){a=g.normalize();break}}a||(a=new C(0,0,1));const l=new C().crossVectors(a,o).normalize(),c=t.map(d=>{const p=new C(...e[d]),g=new C().subVectors(p,s);return new wt(g.dot(o),g.dot(l))}),h=xo.triangulateShape(c,[]),u=[];return h.forEach(d=>{u.push(d[0],d[1],d[2])}),u.length>0?u:[0,1,2]}buildModel(t,e){for(this.fold=t,this.kinematics=e;this.modelGroup.children.length>0;){const s=this.modelGroup.children[0];s.geometry&&s.geometry.dispose(),this.modelGroup.remove(s)}this.faceMeshes=[];const n=this.fold.vertices;this.fold.facesVertices.forEach((s,r)=>{const o=this.triangulateFace(s,n),a=new Float32Array(s.length*3);s.forEach((_,m)=>{const f=n[_];a[m*3+0]=f[0],a[m*3+1]=f[1],a[m*3+2]=f[2]});const l=new fe;l.setAttribute("position",new pe(a.slice(),3)),l.setIndex(o),l.computeVertexNormals();const c=new Oa({color:this.currentTheme.frontColor,roughness:.4,metalness:.1,side:cn}),h=new Ae(l,c);h.castShadow=!0,h.receiveShadow=!0;const u=new fe;u.setAttribute("position",new pe(a.slice(),3)),u.setIndex(o),u.computeVertexNormals();const d=new Oa({color:this.currentTheme.backColor,roughness:.5,metalness:.05,side:Me}),p=new Ae(u,d);p.castShadow=!0;const g=new an;g.add(h),g.add(p),this.modelGroup.add(g),this.faceMeshes.push({faceGroup:g,frontMesh:h,backMesh:p,faceVerts:s,geometryFront:l,geometryBack:u})}),this.buildCreaseLines(),this.centerModel()}buildCreaseLines(){this.creaseLines&&this.modelGroup.remove(this.creaseLines);const t=this.fold.edgesVertices.length,e=new Float32Array(t*2*3),n=new Float32Array(t*2*3),s=new fe;s.setAttribute("position",new pe(e,3)),s.setAttribute("color",new pe(n,3));const r=new hi({vertexColors:!0,linewidth:2});this.creaseLines=new ws(s,r),this.creaseLines.visible=this.showCreases,this.modelGroup.add(this.creaseLines),this.updateCreaseColors()}updateCreaseColors(){if(!this.creaseLines)return;const t=this.creaseLines.geometry.attributes.color,e=t.array,n=new yt(this.currentTheme.valleyColor),s=new yt(this.currentTheme.mountainColor),r=new yt(this.currentTheme.boundaryColor),o=new yt(this.currentTheme.cutColor),a=new yt(this.currentTheme.flatColor),l=new yt(this.currentTheme.unassignedColor);this.fold.edgesAssignment.forEach((c,h)=>{const u=(c||"B").toUpperCase();let d=r;switch(u){case"V":d=n;break;case"M":d=s;break;case"B":d=r;break;case"C":d=o;break;case"F":d=a;break;case"U":d=l;break;default:d=r;break}const p=h*6;e[p+0]=d.r,e[p+1]=d.g,e[p+2]=d.b,e[p+3]=d.r,e[p+4]=d.g,e[p+5]=d.b}),t.needsUpdate=!0}updateFold(t){if(!this.kinematics||!this.fold)return;const e=this.kinematics.evaluateTransforms(t);if(this.faceMeshes.forEach((n,s)=>{const r=e[s];n.faceGroup.matrix.copy(r),n.faceGroup.matrixAutoUpdate=!1}),this.creaseLines&&this.showCreases){const n=this.creaseLines.geometry.attributes.position,s=n.array,r=this.fold.vertices;this.fold.edgesVertices.forEach((o,a)=>{const l=o[0],c=o[1],h=new C(...r[l]),u=new C(...r[c]),d=(m,f,y)=>{const E=m.length;for(let v=0;v<E;v++){const L=m[v],T=m[(v+1)%E];if(L===f&&T===y||L===y&&T===f)return!0}return!1},p=this.fold.facesVertices.findIndex(m=>d(m,l,c)),g=p>=0?e[p]:new Gt;h.applyMatrix4(g),u.applyMatrix4(g);const _=a*6;s[_+0]=h.x,s[_+1]=h.y,s[_+2]=h.z+.002,s[_+3]=u.x,s[_+4]=u.y,s[_+5]=u.z+.002}),n.needsUpdate=!0}}centerModel(){if(!this.fold)return;const t=new Sn;this.fold.vertices.forEach(r=>{t.expandByPoint(new C(r[0],r[1],r[2]))});const e=new C;t.getCenter(e);const n=new C;t.getSize(n),this.modelGroup.position.set(-e.x,-e.y,0);const s=Math.max(n.x,n.y,n.z,2);this.camera.far=Math.max(1e4,s*20),this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,s*2.2),this.controls.target.set(0,0,0),this.controls.update()}setView2D(){const t=new Sn().setFromObject(this.modelGroup),e=new C;t.getSize(e);const n=Math.max(e.x,e.y,4);this.camera.far=Math.max(1e4,n*20),this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,n*2.2),this.controls.target.set(0,0,0),this.controls.update()}setView3D(){const t=new Sn().setFromObject(this.modelGroup),e=new C;t.getSize(e);const n=Math.max(e.x,e.y,e.z,4);this.camera.far=Math.max(1e4,n*20),this.camera.updateProjectionMatrix(),this.camera.position.set(n*1.5,n*1.5,n*1.8),this.controls.target.set(0,0,0),this.controls.update()}setShowCreases(t){this.showCreases=t,this.creaseLines&&(this.creaseLines.visible=t)}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}resize(){if(!this.container)return;const t=this.container.clientWidth||300,e=this.container.clientHeight||300;t>0&&e>0&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}onWindowResize(){this.resize()}}class fg{constructor(t,e){this.container=t,this.onChange=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.zoom=60,this.panX=0,this.panY=0,this.isPanning=!1,this.lastMouse={x:0,y:0},this.selectedEdgeIndex=-1,this.hoveredEdgeIndex=-1,this.selectedFaceIndex=-1,this.activeDirective="V",this.foldData=this.createDefaultCubeNet(),this.setupEvents(),this.resizeCanvas(),this.centerView(),this.render()}createDefaultCubeNet(){const e=[[0,0],[1.5,0],[1.5,1.5],[0,1.5],[3,0],[3,1.5],[-1.5,0],[-1.5,1.5],[0,3],[1.5,3],[0,-1.5],[1.5,-1.5],[0,4.5],[1.5,4.5]],n=[[0,1,2,3],[1,4,5,2],[7,6,0,3],[3,2,9,8],[10,11,1,0],[8,9,13,12]];return this.buildFoldDataFromFaces(e,n)}buildFoldDataFromFaces(t,e,n={}){const s=new Map,r=[];e.forEach(l=>{const c=l.length;for(let h=0;h<c;h++){const u=l[h],d=l[(h+1)%c],p=`${Math.min(u,d)}-${Math.max(u,d)}`;s.has(p)?s.get(p).count+=1:(r.push([Math.min(u,d),Math.max(u,d)]),s.set(p,{count:1}))}});const o=[],a=[];return r.forEach((l,c)=>{const h=`${l[0]}-${l[1]}`,u=s.get(h).count;n[h]?(o.push(n[h].assignment),a.push(n[h].angle)):u===1?(o.push("B"),a.push(0)):(o.push("V"),a.push(90))}),{file_spec:1.1,file_title:"Net Preparation Model",file_creator:"FOLDNet Net Editor",vertices_coords:t,faces_vertices:e,edges_vertices:r,edges_assignment:o,edges_foldAngle:a}}getFoldJSON(){return JSON.parse(JSON.stringify(this.foldData))}loadFoldJSON(t){if(!t||!t.vertices_coords||!t.faces_vertices)return;const e=t.vertices_coords.map(a=>[a[0],a[1]]),n=t.faces_vertices.slice();let s=t.edges_vertices?t.edges_vertices.slice():[],r=t.edges_assignment?t.edges_assignment.slice():[],o=t.edges_foldAngle?t.edges_foldAngle.slice():[];if(s.length===0){const a=this.buildFoldDataFromFaces(e,n);s=a.edges_vertices,r=a.edges_assignment,o=a.edges_foldAngle}this.foldData={file_spec:t.file_spec||1.1,file_title:t.file_title||t.title||"box-net-prepared",file_creator:t.file_creator||"FOLDNet Editor",vertices_coords:e,faces_vertices:n,edges_vertices:s,edges_assignment:r,edges_foldAngle:o},this.selectedEdgeIndex=-1,this.hoveredEdgeIndex=-1,this.centerView(),this.render(),this.notifyChange()}notifyChange(){typeof this.onChange=="function"&&this.onChange(this.getFoldJSON())}setupEvents(){window.addEventListener("resize",()=>this.resizeCanvas()),this.canvas.addEventListener("mousedown",t=>{if(t.button===1||t.button===0&&t.shiftKey){this.isPanning=!0,this.lastMouse={x:t.clientX,y:t.clientY};return}if(t.button===0){const e=this.screenToWorld(t.offsetX,t.offsetY),n=this.findNearestEdge(e,20/this.zoom);n>=0?(this.selectedEdgeIndex=n,this.activeDirective&&this.setEdgeAssignment(n,this.activeDirective),this.render()):(this.isPanning=!0,this.lastMouse={x:t.clientX,y:t.clientY},this.selectedEdgeIndex=-1,this.render())}}),this.canvas.addEventListener("mousemove",t=>{if(this.isPanning){const s=t.clientX-this.lastMouse.x,r=t.clientY-this.lastMouse.y;this.panX+=s,this.panY+=r,this.lastMouse={x:t.clientX,y:t.clientY},this.render();return}const e=this.screenToWorld(t.offsetX,t.offsetY),n=this.findNearestEdge(e,20/this.zoom);n!==this.hoveredEdgeIndex&&(this.hoveredEdgeIndex=n,this.canvas.style.cursor=n>=0?"pointer":"default",this.render())}),this.canvas.addEventListener("mouseup",()=>{this.isPanning=!1}),this.canvas.addEventListener("mouseleave",()=>{this.isPanning=!1,this.hoveredEdgeIndex=-1,this.render()}),this.canvas.addEventListener("wheel",t=>{t.preventDefault();const e=t.deltaY<0?1.15:.85,n=this.screenToWorld(t.offsetX,t.offsetY);this.zoom=Math.min(Math.max(this.zoom*e,.05),500);const s=this.screenToWorld(t.offsetX,t.offsetY);this.panX+=(s.x-n.x)*this.zoom,this.panY-=(s.y-n.y)*this.zoom,this.render()},{passive:!1})}resizeCanvas(){this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,this.render()}centerView(){if(!this.foldData||this.foldData.vertices_coords.length===0)return;let t=1/0,e=-1/0,n=1/0,s=-1/0;this.foldData.vertices_coords.forEach(u=>{t=Math.min(t,u[0]),e=Math.max(e,u[0]),n=Math.min(n,u[1]),s=Math.max(s,u[1])});const r=(t+e)/2,o=(n+s)/2,a=e-t||2,l=s-n||2,c=this.canvas.width*.7/a,h=this.canvas.height*.7/l;this.zoom=Math.min(Math.max(Math.min(c,h),.05),300),this.panX=this.canvas.width/2-r*this.zoom,this.panY=this.canvas.height/2+o*this.zoom}screenToWorld(t,e){return{x:(t-this.panX)/this.zoom,y:-(e-this.panY)/this.zoom}}worldToScreen(t,e){return{x:this.panX+t*this.zoom,y:this.panY-e*this.zoom}}findNearestEdge(t,e){if(!this.foldData||!this.foldData.edges_vertices)return-1;let n=e,s=-1;return this.foldData.edges_vertices.forEach((r,o)=>{const a=this.foldData.vertices_coords[r[0]],l=this.foldData.vertices_coords[r[1]];if(!a||!l)return;const c=this.pointToSegmentDistance(t.x,t.y,a[0],a[1],l[0],l[1]);c<n&&(n=c,s=o)}),s}pointToSegmentDistance(t,e,n,s,r,o){const a=(r-n)*(r-n)+(o-s)*(o-s);if(a===0)return Math.hypot(t-n,e-s);let l=((t-n)*(r-n)+(e-s)*(o-s))/a;l=Math.max(0,Math.min(1,l));const c=n+l*(r-n),h=s+l*(o-s);return Math.hypot(t-c,e-h)}setEdgeAssignment(t,e,n=null){if(!(t<0||t>=this.foldData.edges_vertices.length)){if(this.foldData.edges_assignment[t]=e,n!==null)this.foldData.edges_foldAngle[t]=n;else switch(e){case"V":this.foldData.edges_foldAngle[t]=90;break;case"M":this.foldData.edges_foldAngle[t]=-90;break;case"B":case"C":case"F":case"U":default:this.foldData.edges_foldAngle[t]=0;break}this.render(),this.notifyChange()}}autoDetectBoundaries(){if(!this.foldData)return;const t=new Array(this.foldData.edges_vertices.length).fill(0);this.foldData.faces_vertices.forEach(e=>{const n=e.length;for(let s=0;s<n;s++){const r=e[s],o=e[(s+1)%n],a=this.findEdgeIndexByVerts(r,o);a>=0&&t[a]++}}),t.forEach((e,n)=>{e===1?(this.foldData.edges_assignment[n]="B",this.foldData.edges_foldAngle[n]=0):e>=2&&this.foldData.edges_assignment[n]==="B"&&(this.foldData.edges_assignment[n]="V",this.foldData.edges_foldAngle[n]=90)}),this.render(),this.notifyChange()}invertFolds(){this.foldData&&(this.foldData.edges_assignment.forEach((t,e)=>{const n=(t||"B").toUpperCase();n==="V"?(this.foldData.edges_assignment[e]="M",this.foldData.edges_foldAngle[e]=-90):n==="M"&&(this.foldData.edges_assignment[e]="V",this.foldData.edges_foldAngle[e]=90)}),this.render(),this.notifyChange())}attachFaceToSelectedEdge(){this.selectedEdgeIndex>=0&&this.attachFaceToEdge(this.selectedEdgeIndex)}attachFaceToEdge(t){if(t<0||t>=this.foldData.edges_vertices.length)return;const e=this.foldData.edges_vertices[t],n=e[0],s=e[1],r=this.foldData.vertices_coords[n],o=this.foldData.vertices_coords[s],a=o[0]-r[0],l=o[1]-r[1];if(Math.hypot(a,l)===0)return;let h=-l,u=a;const d=this.foldData.faces_vertices.find(v=>v.includes(n)&&v.includes(s));if(d){let v=0,L=0;d.forEach(M=>{v+=this.foldData.vertices_coords[M][0],L+=this.foldData.vertices_coords[M][1]}),v/=d.length,L/=d.length;const T=(r[0]+o[0])/2,w=(r[1]+o[1])/2,I=T-v,S=w-L;h*I+u*S<0&&(h=-h,u=-u)}const p=[r[0]+h,r[1]+u],g=[o[0]+h,o[1]+u],_=this.findOrAddVertex(p[0],p[1]),m=this.findOrAddVertex(g[0],g[1]),f=[n,s,m,_];this.foldData.faces_vertices.push(f);const y={};this.foldData.edges_vertices.forEach((v,L)=>{const T=`${Math.min(v[0],v[1])}-${Math.max(v[0],v[1])}`;y[T]={assignment:this.foldData.edges_assignment[L],angle:this.foldData.edges_foldAngle[L]}});const E=`${Math.min(n,s)}-${Math.max(n,s)}`;y[E]={assignment:"V",angle:90},this.foldData=this.buildFoldDataFromFaces(this.foldData.vertices_coords,this.foldData.faces_vertices,y),this.autoDetectBoundaries()}findOrAddVertex(t,e,n=.05){const s=this.foldData.vertices_coords.findIndex(r=>Math.hypot(r[0]-t,r[1]-e)<n);return s>=0?s:(this.foldData.vertices_coords.push([t,e]),this.foldData.vertices_coords.length-1)}findEdgeIndexByVerts(t,e){const n=Math.min(t,e),s=Math.max(t,e);return this.foldData.edges_vertices.findIndex(r=>r[0]===n&&r[1]===s||r[0]===s&&r[1]===n)}render(){const t=this.canvas.width,e=this.canvas.height;this.ctx.fillStyle="#090b10",this.ctx.fillRect(0,0,t,e),this.renderGrid(t,e),this.foldData&&(this.renderFaces(),this.renderEdges(),this.renderVertices())}renderGrid(t,e){this.ctx.strokeStyle="#1e293b",this.ctx.lineWidth=1;const n=this.screenToWorld(0,e),s=this.screenToWorld(t,0),r=1,o=Math.floor(n.x/r)*r,a=Math.ceil(s.x/r)*r,l=Math.floor(n.y/r)*r,c=Math.ceil(s.y/r)*r;this.ctx.beginPath();for(let u=o;u<=a;u+=r){const d=this.worldToScreen(u,l),p=this.worldToScreen(u,c);this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(p.x,p.y)}for(let u=l;u<=c;u+=r){const d=this.worldToScreen(o,u),p=this.worldToScreen(a,u);this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(p.x,p.y)}this.ctx.stroke();const h=this.worldToScreen(0,0);this.ctx.strokeStyle="rgba(255, 255, 255, 0.15)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(h.x-15,h.y),this.ctx.lineTo(h.x+15,h.y),this.ctx.moveTo(h.x,h.y-15),this.ctx.lineTo(h.x,h.y+15),this.ctx.stroke()}renderFaces(){this.foldData.faces_vertices.forEach((t,e)=>{if(t.length<3)return;this.ctx.beginPath(),t.forEach((o,a)=>{const l=this.foldData.vertices_coords[o],c=this.worldToScreen(l[0],l[1]);a===0?this.ctx.moveTo(c.x,c.y):this.ctx.lineTo(c.x,c.y)}),this.ctx.closePath(),this.ctx.fillStyle=e===0?"rgba(255, 234, 0, 0.15)":"rgba(0, 240, 255, 0.08)",this.ctx.fill();let n=0,s=0;t.forEach(o=>{const a=this.foldData.vertices_coords[o];n+=a[0],s+=a[1]}),n/=t.length,s/=t.length;const r=this.worldToScreen(n,s);this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font='11px "JetBrains Mono", monospace',this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(`F${e}${e===0?" (Root)":""}`,r.x,r.y)})}renderEdges(){const t={V:{color:"#3b82f6",dash:[6,4],width:3,label:"Valley (+90°)"},M:{color:"#ef4444",dash:[6,4],width:3,label:"Mountain (-90°)"},B:{color:"#f8fafc",dash:[],width:3,label:"Boundary"},C:{color:"#f97316",dash:[],width:2,label:"Cut"},F:{color:"#64748b",dash:[2,2],width:1.5,label:"Flat"},U:{color:"#a855f7",dash:[4,4],width:2,label:"Unassigned"}};this.foldData.edges_vertices.forEach((e,n)=>{const s=this.foldData.vertices_coords[e[0]],r=this.foldData.vertices_coords[e[1]];if(!s||!r)return;const o=this.worldToScreen(s[0],s[1]),a=this.worldToScreen(r[0],r[1]),l=(this.foldData.edges_assignment[n]||"B").toUpperCase(),c=t[l]||t.B,h=n===this.selectedEdgeIndex,u=n===this.hoveredEdgeIndex;if(this.ctx.save(),this.ctx.beginPath(),this.ctx.setLineDash(c.dash),this.ctx.moveTo(o.x,o.y),this.ctx.lineTo(a.x,a.y),h?(this.ctx.strokeStyle="#eab308",this.ctx.lineWidth=c.width+4,this.ctx.shadowColor="#eab308",this.ctx.shadowBlur=10):u?(this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=c.width+2):(this.ctx.strokeStyle=c.color,this.ctx.lineWidth=c.width),this.ctx.stroke(),this.ctx.restore(),h||u){const d=(o.x+a.x)/2,p=(o.y+a.y)/2,g=this.foldData.edges_foldAngle[n]??0;this.ctx.fillStyle=h?"#fef08a":"#ffffff",this.ctx.font='bold 12px "Outfit", sans-serif',this.ctx.textAlign="center",this.ctx.textBaseline="bottom",this.ctx.fillText(`E${n}: ${l} (${g}°)`,d,p-6)}})}renderVertices(){this.foldData.vertices_coords.forEach((t,e)=>{const n=this.worldToScreen(t[0],t[1]);this.ctx.fillStyle="#64748b",this.ctx.beginPath(),this.ctx.arc(n.x,n.y,3.5,0,Math.PI*2),this.ctx.fill()})}}const pg=/^[og]\s*(.+)?/,mg=/^mtllib /,gg=/^usemtl /,_g=/^usemap /,qa=/\s+/,ja=new C,gr=new C,$a=new C,Ka=new C,Fe=new C,ps=new yt;function vg(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;ja.fromArray(s,t),gr.fromArray(s,e),$a.fromArray(s,n),Fe.subVectors($a,gr),Ka.subVectors(ja,gr),Fe.cross(Ka),Fe.normalize(),r.push(Fe.x,Fe.y,Fe.z),r.push(Fe.x,Fe.y,Fe.z),r.push(Fe.x,Fe.y,Fe.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,d,p),this.addColor(u,d,p),a!==void 0&&a!==""){const g=this.normals.length;u=this.parseNormalIndex(a,g),d=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(u,d,p)}else this.addFaceNormal(u,d,p);if(s!==void 0&&s!==""){const g=this.uvs.length;u=this.parseUVIndex(s,g),d=this.parseUVIndex(r,g),p=this.parseUVIndex(o,g),this.addUV(u,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=t.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,o=e.length;r<o;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class xg extends Is{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,o=new cc(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new vg;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(qa);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(ps.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),be),e.colors.push(ps.r,ps.g,ps.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const d=c.slice(1).trim().split(qa),p=[];for(let _=0,m=d.length;_<m;_++){const f=d[_];if(f.length>0){const y=f.split("/");p.push(y)}}const g=p[0];for(let _=1,m=p.length-1;_<m;_++){const f=p[_],y=p[_+1];e.addFace(g[0],f[0],y[0],g[1],f[1],y[1],g[2],f[2],y[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let d=[];const p=[];if(c.indexOf("/")===-1)d=u;else for(let g=0,_=u.length;g<_;g++){const m=u[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&p.push(m[1])}e.addLineGeometry(d,p)}else if(h==="p"){const d=c.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((s=pg.exec(c))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);e.startObject(u)}else if(gg.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(mg.test(c))e.materialLibraries.push(c.substring(7).trim());else if(_g.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){const d=s[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const r=new an;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],h=c.geometry,u=c.materials,d=h.type==="Line",p=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const _=new fe;_.setAttribute("position",new le(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new le(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new le(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new le(h.uvs,2));const m=[];for(let y=0,E=u.length;y<E;y++){const v=u[y],L=v.name+"_"+v.smooth+"_"+g;let T=e.materials[L];if(this.materials!==null){if(T=this.materials.create(v.name),d&&T&&!(T instanceof hi)){const w=new hi;qe.prototype.copy.call(w,T),w.color.copy(T.color),T=w}else if(p&&T&&!(T instanceof Pi)){const w=new Pi({size:10,sizeAttenuation:!1});qe.prototype.copy.call(w,T),w.color.copy(T.color),w.map=T.map,T=w}}T===void 0&&(d?T=new hi:p?T=new Pi({size:1,sizeAttenuation:!1}):T=new Wm,T.name=v.name,T.flatShading=!v.smooth,T.vertexColors=g,e.materials[L]=T),m.push(T)}let f;if(m.length>1){for(let y=0,E=u.length;y<E;y++){const v=u[y];_.addGroup(v.groupStart,v.groupCount,y)}d?f=new ws(_,m):p?f=new dr(_,m):f=new Ae(_,m)}else d?f=new ws(_,m[0]):p?f=new dr(_,m[0]):f=new Ae(_,m[0]);f.name=c.name,r.add(f)}else if(e.vertices.length>0){const a=new Pi({size:1,sizeAttenuation:!1}),l=new fe;l.setAttribute("position",new le(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new le(e.colors,3)),a.vertexColors=!0);const c=new dr(l,a);r.add(c)}return r}}class Ag extends Is{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new cc(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){function e(c){const h=new DataView(c),u=32/8*3+32/8*3*3+16/8,d=h.getUint32(80,!0);if(80+32/8+d*u===h.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(n(g,h,_))return!1;return!0}function n(c,h,u){for(let d=0,p=c.length;d<p;d++)if(c[d]!==h.getUint8(u+d))return!1;return!0}function s(c){const h=new DataView(c),u=h.getUint32(80,!0);let d,p,g,_=!1,m,f,y,E,v;for(let R=0;R<70;R++)h.getUint32(R,!1)==1129270351&&h.getUint8(R+4)==82&&h.getUint8(R+5)==61&&(_=!0,m=new Float32Array(u*3*3),f=h.getUint8(R+6)/255,y=h.getUint8(R+7)/255,E=h.getUint8(R+8)/255,v=h.getUint8(R+9)/255);const L=84,T=12*4+2,w=new fe,I=new Float32Array(u*3*3),S=new Float32Array(u*3*3),M=new yt;for(let R=0;R<u;R++){const W=L+R*T,U=h.getFloat32(W,!0),H=h.getFloat32(W+4,!0),q=h.getFloat32(W+8,!0);if(_){const k=h.getUint16(W+48,!0);k&32768?(d=f,p=y,g=E):(d=(k&31)/31,p=(k>>5&31)/31,g=(k>>10&31)/31)}for(let k=1;k<=3;k++){const K=W+k*12,V=R*3*3+(k-1)*3;I[V]=h.getFloat32(K,!0),I[V+1]=h.getFloat32(K+4,!0),I[V+2]=h.getFloat32(K+8,!0),S[V]=U,S[V+1]=H,S[V+2]=q,_&&(M.setRGB(d,p,g,be),m[V]=M.r,m[V+1]=M.g,m[V+2]=M.b)}}return w.setAttribute("position",new pe(I,3)),w.setAttribute("normal",new pe(S,3)),_&&(w.setAttribute("color",new pe(m,3)),w.hasColors=!0,w.alpha=v),w}function r(c){const h=new fe,u=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),f=new RegExp("normal"+_+_+_,"g"),y=[],E=[],v=[],L=new C;let T,w=0,I=0,S=0;for(;(T=u.exec(c))!==null;){I=S;const M=T[0],R=(T=p.exec(M))!==null?T[1]:"";for(v.push(R);(T=d.exec(M))!==null;){let H=0,q=0;const k=T[0];for(;(T=f.exec(k))!==null;)L.x=parseFloat(T[1]),L.y=parseFloat(T[2]),L.z=parseFloat(T[3]),q++;for(;(T=m.exec(k))!==null;)y.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),E.push(L.x,L.y,L.z),H++,S++;q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),H!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const W=I,U=S-I;h.userData.groupNames=v,h.addGroup(W,U,w),w++}return h.setAttribute("position",new le(y,3)),h.setAttribute("normal",new le(E,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const h=new Uint8Array(c.length);for(let u=0;u<c.length;u++)h[u]=c.charCodeAt(u)&255;return h.buffer||h}else return c}const l=a(t);return e(l)?s(l):r(o(t))}}class ms{static async parseCADFile(t,e){const n=e.toLowerCase().replace(".","");if(n==="obj")return this.parseOBJ(typeof t=="string"?t:new TextDecoder().decode(t));if(n==="stl")return this.parseSTL(t);if(n==="step"||n==="stp")return this.parseSTEP(typeof t=="string"?t:new TextDecoder().decode(t));throw new Error(`Unsupported CAD file extension: .${n}`)}static parseOBJ(t){const n=new xg().parse(t);return this.extractFromThreeGroup(n)}static parseSTL(t){const n=new Ag().parse(t),s=new Ae(n),r=new an;return r.add(s),this.extractFromThreeGroup(r)}static parseSTEP(t){const e=[...t.matchAll(/#(\d+)\s*=\s*CARTESIAN_POINT\s*\(\s*'[^']*'\s*,\s*\(\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*\)\s*\)/gi)];if(e.length===0)throw new Error("STEP file parsing: No CARTESIAN_POINT entities found in STEP file.");const n=new Map;e.forEach(r=>{const o=parseInt(r[1],10),a=parseFloat(r[2]),l=parseFloat(r[3]),c=parseFloat(r[4]);n.set(o,[a,l,c])});const s=Array.from(n.values());if(s.length<4)throw new Error("STEP file contains insufficient 3D geometry points.");return this.createBoxMeshFromPoints(s)}static createBoxMeshFromPoints(t){let e=1/0,n=-1/0,s=1/0,r=-1/0,o=1/0,a=-1/0;t.forEach(u=>{e=Math.min(e,u[0]),n=Math.max(n,u[0]),s=Math.min(s,u[1]),r=Math.max(r,u[1]),o=Math.min(o,u[2]),a=Math.max(a,u[2])});const l=new vi(n-e,r-s,a-o);l.translate((e+n)/2,(s+r)/2,(o+a)/2);const c=new Ae(l),h=new an;return h.add(c),this.extractFromThreeGroup(h)}static extractFromThreeGroup(t){const e=[],n=[],s=new Map,r=(o,a,l,c=1e-4)=>{const h=Math.round(o/c)*c,u=Math.round(a/c)*c,d=Math.round(l/c)*c,p=`${h},${u},${d}`;if(s.has(p))return s.get(p);const g=e.length;return e.push([o,a,l]),s.set(p,g),g};return t.traverse(o=>{if(o.isMesh&&o.geometry){const a=o.geometry.isBufferGeometry?o.geometry:new fe().fromGeometry(o.geometry),l=a.attributes.position,c=a.index;o.updateMatrixWorld(!0);const h=o.matrixWorld,u=(d,p,g)=>{const _=new C().fromBufferAttribute(l,d).applyMatrix4(h),m=new C().fromBufferAttribute(l,p).applyMatrix4(h),f=new C().fromBufferAttribute(l,g).applyMatrix4(h),y=r(_.x,_.y,_.z),E=r(m.x,m.y,m.z),v=r(f.x,f.y,f.z);y!==E&&E!==v&&y!==v&&n.push([y,E,v])};if(c)for(let d=0;d<c.count;d+=3)u(c.getX(d),c.getX(d+1),c.getX(d+2));else for(let d=0;d<l.count;d+=3)u(d,d+1,d+2)}}),{vertices:e,triangles:n}}static extractOrthogonalPlanarFaces(t,e=1e-4){const{vertices:n,triangles:s}=t;if(n.length===0||s.length===0)throw new Error("Invalid CAD data: empty vertices or triangles.");const r=s.map(c=>{const h=new C(...n[c[0]]),u=new C(...n[c[1]]),d=new C(...n[c[2]]),p=new C().subVectors(u,h),g=new C().subVectors(d,h),_=new C().crossVectors(p,g).normalize(),m=Math.abs(_.x),f=Math.abs(_.y),y=Math.abs(_.z),E=Math.abs(m-1)<e&&f<e&&y<e,v=Math.abs(f-1)<e&&m<e&&y<e,L=Math.abs(y-1)<e&&m<e&&f<e;if(!E&&!v&&!L)throw new Error(`Non-orthogonal face detected (Normal: [${_.x.toFixed(3)}, ${_.y.toFixed(3)}, ${_.z.toFixed(3)}]). FOLDNet CAD import requires 3D orthogonal box geometries aligned to principal axes.`);let T=0,w=0,I=0;E&&(T=Math.sign(_.x)||1),v&&(w=Math.sign(_.y)||1),L&&(I=Math.sign(_.z)||1);const S=new C(T,w,I),M=S.dot(h),R=`${T},${w},${I}:${(Math.round(M/e)*e).toFixed(4)}`;return{tri:c,normal:S,dist:M,planeKey:R}}),o=new Map;r.forEach(c=>{o.has(c.planeKey)||o.set(c.planeKey,[]),o.get(c.planeKey).push(c.tri)});const a=[];o.forEach((c,h)=>{const u=new Map;c.forEach(m=>{for(let f=0;f<3;f++){const y=m[f],E=m[(f+1)%3],v=`${y}->${E}`,L=`${E}->${y}`;u.has(L)?u.delete(L):u.set(v,[y,E])}});const d=Array.from(u.values());if(d.length<3)return;const p=new Map;d.forEach(([m,f])=>p.set(m,f));const g=new Set,_=[];d.forEach(([m])=>{if(g.has(m))return;const f=[];let y=m;for(;y!==void 0&&!g.has(y);)g.add(y),f.push(y),y=p.get(y);f.length>=3&&_.push(f)}),_.forEach(m=>a.push(m))});const l=this.filterOuterBoundaryFaces(n,a);return{vertices:n,facesVertices:l}}static filterOuterBoundaryFaces(t,e,n=.001){if(e.length<=6)return e;const s=new Map;e.forEach(o=>{const a=new C(...t[o[0]]),l=new C(...t[o[1]]),c=new C(...t[o[2]]),h=new C().subVectors(l,a),u=new C().subVectors(c,a),d=new C().crossVectors(h,u).normalize(),p=Math.round(d.x),g=Math.round(d.y),_=Math.round(d.z),m=`${p},${g},${_}`,f=d.x*a.x+d.y*a.y+d.z*a.z;s.has(m)||s.set(m,[]),s.get(m).push({fv:o,d:f})});const r=[];return s.forEach(o=>{o.sort((l,c)=>c.d-l.d);const a=o[0].d;o.filter(l=>Math.abs(l.d-a)<n).forEach(l=>r.push(l.fv))}),r.length>=4?r:e}}class Za{static unfoldToFoldJSON(t,e,n=500){if(e.length===0)throw new Error("Unfolder: No 3D faces provided.");const s=this.buildDualGraph(t,e);let r=null;for(let o=0;o<n;o++){const a=s.edges.map(u=>({...u,weight:Math.random()})),l=this.computeKruskalMST(s.numFaces,a),c=o%s.numFaces,h=this.unrollTree2D(t,e,s,l,c);if(h.success){r=h;break}}if(!r)throw new Error(`Unfolder: Could not find a collision-free 2D unrolling after ${n} randomized attempts.`);return this.buildFoldSpecJSON(t,e,s,r)}static buildDualGraph(t,e){const n=e.length,s=new Map,r=e.map(l=>{const c=new C(...t[l[0]]),h=new C(...t[l[1]]),u=new C(...t[l[2]]),d=new C().subVectors(h,c),p=new C().subVectors(u,c);return new C().crossVectors(d,p).normalize()});e.forEach((l,c)=>{const h=l.length;for(let u=0;u<h;u++){const d=l[u],p=l[(u+1)%h],g=Math.min(d,p),_=Math.max(d,p),m=`${g}-${_}`;s.has(m)||s.set(m,[]),s.get(m).push({faceIndex:c,v1:d,v2:p})}});const o=[],a=Array.from({length:n},()=>[]);return s.forEach((l,c)=>{if(l.length===2){const h=l[0],u=l[1],d=r[h.faceIndex],p=r[u.faceIndex],g=new C(...t[h.v1]),_=new C(...t[h.v2]),m=new C().subVectors(_,g).normalize(),E=new C().crossVectors(d,m).normalize().dot(p)<0?90:-90,v={f0:h.faceIndex,f1:u.faceIndex,v1:h.v1,v2:h.v2,edgeKey:c,foldAngleDeg:E};o.push(v),a[h.faceIndex].push({neighbor:u.faceIndex,edge:v}),a[u.faceIndex].push({neighbor:h.faceIndex,edge:v})}}),{numFaces:n,edges:o,adjacency:a,faceNormals:r}}static computeKruskalMST(t,e){const n=e.slice().sort((a,l)=>a.weight-l.weight),s=Array.from({length:t},(a,l)=>l),r=a=>s[a]===a?a:(s[a]=r(s[a]),s[a]),o=[];for(const a of n){const l=r(a.f0),c=r(a.f1);if(l!==c&&(s[l]=c,o.push(a),o.length===t-1))break}return o}static unrollTree2D(t,e,n,s,r=0){const o=n.numFaces,a=Array.from({length:o},()=>[]);s.forEach(p=>{a[p.f0].push({neighbor:p.f1,edge:p}),a[p.f1].push({neighbor:p.f0,edge:p})});const l=Array.from({length:o},()=>null),c=e[r].map(p=>t[p]),h=this.projectFaceToLocal2D(c,n.faceNormals[r]);l[r]=h;const u=new Array(o).fill(!1);u[r]=!0;const d=[r];for(;d.length>0;){const p=d.shift(),g=l[p];for(const _ of a[p]){const m=_.neighbor;if(!u[m]){u[m]=!0;const f=_.edge,y=e[p],E=e[m],v=f.v1,L=f.v2,T=g[y.indexOf(v)],w=g[y.indexOf(L)];if(!T||!w)return{success:!1};const I=E.map(k=>t[k]),S=n.faceNormals[m],M=this.projectFaceToLocal2D(I,S),R=M[E.indexOf(v)],W=M[E.indexOf(L)];if(!R||!W)return{success:!1};const U=this.computeCentroid2D(g),H=this.alignFaceHinge2D(M,R,W,T,w,U);l[m]=H;let q=!1;for(let k=0;k<o;k++)if(u[k]&&k!==m&&l[k]&&this.doFacesOverlap2D(H,l[k])){q=!0;break}if(q)return{success:!1};d.push(m)}}}return{success:!0,facePositions2D:l,treeEdges:s}}static projectFaceToLocal2D(t,e=null){const n=new C(...t[0]),s=new C(...t[1]),r=new C().subVectors(s,n).normalize();let o=e?e.clone().normalize():null;if(!o||o.lengthSq()<.5)for(let l=2;l<t.length;l++){const c=new C(...t[l]),h=new C().crossVectors(r,new C().subVectors(c,n));if(h.lengthSq()>1e-6){o=h.normalize();break}}o||(o=new C(0,0,1));const a=new C().crossVectors(o,r).normalize();return t.map(l=>{const c=new C(...l),h=new C().subVectors(c,n);return[h.dot(r),h.dot(a)]})}static computeCentroid2D(t){let e=0,n=0;return t.forEach(s=>{e+=s[0],n+=s[1]}),[e/t.length,n/t.length]}static transformPoints2D(t,e,n,s,r){const o=n[0]-e[0],a=n[1]-e[1],l=r[0]-s[0],c=r[1]-s[1],h=Math.atan2(a,o),d=Math.atan2(c,l)-h,p=Math.cos(d),g=Math.sin(d);return t.map(_=>{const m=(_[0]-e[0])*p-(_[1]-e[1])*g+s[0],f=(_[0]-e[0])*g+(_[1]-e[1])*p+s[1];return[m,f]})}static reflectPointsAcrossLine2D(t,e,n){const s=n[0]-e[0],r=n[1]-e[1],o=Math.hypot(s,r);if(o<1e-9)return t;const a=s/o,l=r/o;return t.map(c=>{const h=c[0]-e[0],u=c[1]-e[1],d=h*a+u*l,p=h-d*a,g=u-d*l;return[e[0]+d*a-p,e[1]+d*l-g]})}static alignFaceHinge2D(t,e,n,s,r,o){const a=this.transformPoints2D(t,e,n,s,r),l=this.computeCentroid2D(a),c=r[0]-s[0],h=r[1]-s[1],u=c*(o[1]-s[1])-h*(o[0]-s[0]),d=c*(l[1]-s[1])-h*(l[0]-s[0]);return Math.sign(u)!==0&&Math.sign(d)===Math.sign(u)?this.reflectPointsAcrossLine2D(a,s,r):a}static doFacesOverlap2D(t,e,n=.001){const s=t.length,r=e.length;for(let l=0;l<s;l++){const c=t[l],h=t[(l+1)%s];for(let u=0;u<r;u++){const d=e[u],p=e[(u+1)%r];if(this.segmentsIntersectStrict(c[0],c[1],h[0],h[1],d[0],d[1],p[0],p[1],n))return!0}}const o=this.computeCentroid2D(t),a=this.computeCentroid2D(e);return!!(this.isPointInsidePolygon2D(o[0],o[1],e,n)||this.isPointInsidePolygon2D(a[0],a[1],t,n))}static segmentsIntersectStrict(t,e,n,s,r,o,a,l,c=.001){if(Math.hypot(t-r,e-o)<c||Math.hypot(t-a,e-l)<c||Math.hypot(n-r,s-o)<c||Math.hypot(n-a,s-l)<c)return!1;const h=(l-o)*(n-t)-(a-r)*(s-e);if(Math.abs(h)<1e-9)return!1;const u=((a-r)*(e-o)-(l-o)*(t-r))/h,d=((n-t)*(e-o)-(s-e)*(t-r))/h;return u>c&&u<1-c&&d>c&&d<1-c}static isPointInsidePolygon2D(t,e,n,s=.001){let r=!1;const o=n.length;for(let a=0,l=o-1;a<o;l=a++){const c=n[a][0],h=n[a][1],u=n[l][0],d=n[l][1];h>e!=d>e&&t<(u-c)*(e-h)/(d-h+1e-9)+c&&(r=!r)}return r}static buildFoldSpecJSON(t,e,n,s){const{facePositions2D:r,treeEdges:o}=s,a=[],l=new Map,c=(m,f,y=.001)=>{const E=Math.round(m/y)*y,v=Math.round(f/y)*y,L=`${E},${v}`;if(l.has(L))return l.get(L);const T=a.length;return a.push([E,v]),l.set(L,T),T},h=e.map((m,f)=>r[f].map(E=>c(E[0],E[1]))),u=new Map,d=[];h.forEach(m=>{const f=m.length;for(let y=0;y<f;y++){const E=m[y],v=m[(y+1)%f],L=`${Math.min(E,v)}-${Math.max(E,v)}`;u.has(L)?u.get(L).count+=1:(d.push([Math.min(E,v),Math.max(E,v)]),u.set(L,{count:1}))}}),new Set(o.map(m=>m.edgeKey));const p=new Map(o.map(m=>[m.edgeKey,m.foldAngleDeg])),g=[],_=[];return d.forEach(m=>{const f=`${m[0]}-${m[1]}`;if(u.get(f).count===1)g.push("B"),_.push(0);else{const E=p.get(f)||90,v=E<0?"M":"V";g.push(v),_.push(E)}}),{file_spec:1.1,file_title:"CAD Imported Box Net",file_creator:"FOLDNet CAD Unfolder",vertices_coords:a,faces_vertices:h,edges_vertices:d,edges_assignment:g,edges_foldAngle:_}}}class Mg{constructor(){this.container=document.getElementById("canvas-container"),this.renderer=new Ya(this.container),this.foldData=null,this.kinematics=null,this.isPlaying=!1,this.animSpeed=1,this.direction=1,this.netEditor=null,this.previewRenderer=null,this.previewKinematics=null,this.previewFoldData=null,this.isPreviewPlaying=!1,this.previewDirection=1,this.initNetEditor(),this.discoverModels(),this.bindUIEvents(),this.loadDefaultModel(),this.startAnimationLoop()}discoverModels(){const t=document.getElementById("model-select");if(t)try{const e=Object.assign({"../models/lid-cube.json":gc,"../models/notched-cube.json":vc,"../models/subdivided-notched-cube.json":Ac}),n=Object.assign({"../models/box-shell.stl":Ec}),s=[];for(const a in e){const l=a.split("/").pop(),c=e[a],h=c.default||c;if(h&&typeof h=="object"){const u=h.file_title||h.title||l.replace(".json",""),d=Array.isArray(h.faces_vertices)?h.faces_vertices.length:null;s.push({url:`models/${l}`,filename:l,title:u,facesCount:d})}}for(const a in n){const l=a.split("/").pop(),c=n[a],h=c.default||c;s.push({url:h,filename:l,title:"3D CAD Model",facesCount:null})}s.sort((a,l)=>a.filename.localeCompare(l.filename)),t.innerHTML="";let r="models/subdivided-notched-cube.json";s.forEach(a=>{const l=document.createElement("option");l.value=a.url;const c=a.facesCount?` (${a.facesCount} Faces)`:" (CAD Model)",h=a.filename.replace(/\.[^/.]+$/,""),u=a.title.toLowerCase().replace(/[^a-z0-9]+/g,""),d=h.toLowerCase().replace(/[^a-z0-9]+/g,"");u===d||a.title==="3D CAD Model"?l.textContent=`${a.filename}${c}`:l.textContent=`${a.filename} — ${a.title}${c}`,(a.filename==="subdivided-notched-cube.json"||a.filename.includes("subdivided-notched"))&&(l.selected=!0,r=a.url),t.appendChild(l)});const o=document.createElement("option");o.value="custom",o.textContent="Custom File...",t.appendChild(o),this.defaultModelUrl=r}catch(e){console.warn("Error discovering models:",e)}}async loadDefaultModel(){const t=this.defaultModelUrl||"models/subdivided-notched-cube.json";await this.loadModelFromUrl(t)}onWindowResize(){this.renderer&&this.renderer.resize(),this.netEditor&&this.netEditor.resizeCanvas(),this.previewRenderer&&this.previewRenderer.resize()}async loadModelFromUrl(t){try{const e=t.split(".").pop().split("?")[0].toLowerCase();if(["obj","stl","step","stp"].includes(e)){const n=await fetch(t);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=e==="stl"?await n.arrayBuffer():await n.text(),r=await ms.parseCADFile(s,e),o=ms.extractOrthogonalPlanarFaces(r),a=Za.unfoldToFoldJSON(o.vertices,o.facesVertices),l=t.split("/").pop().split("?")[0];a.file_title=l.replace(/\.[^/.]+$/,""),this.initFoldModel(a)}else{const n=await fetch(t);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=await n.json();this.initFoldModel(s)}}catch(e){console.error("Failed to load model:",e),alert(`Could not load model: ${e.message}`)}}initFoldModel(t){try{this.foldData=Ro(t),this.kinematics=new Ga(this.foldData),this.renderer.buildModel(this.foldData,this.kinematics),this.updateInspectorUI(),this.resetSlider(),this.updateFoldProgress(),this.netEditor&&this.netEditor.loadFoldJSON(t)}catch(e){console.error("Error initializing FOLD model:",e),alert(`Error parsing FOLD file: ${e.message}`)}}initNetEditor(){const t=document.getElementById("editor-canvas-container");if(!t)return;this.netEditor=new fg(t,n=>{this.onNetEditorChange(n)});const e=document.getElementById("preview-canvas-container");e&&(this.previewRenderer=new Ya(e))}onNetEditorChange(t){if(this.previewRenderer)try{this.previewFoldData=Ro(t),this.previewKinematics=new Ga(this.previewFoldData),this.previewRenderer.buildModel(this.previewFoldData,this.previewKinematics),this.updatePreviewFoldProgress()}catch(n){console.warn("Preview fold kinematics warning:",n.message)}const e=document.getElementById("json-code-textarea");e&&document.activeElement!==e&&(e.value=JSON.stringify(t,null,2))}resetSlider(){const t=document.getElementById("fold-slider");t.value=0,this.updateFoldProgress()}updateFoldProgress(){const t=document.getElementById("fold-slider"),e=parseFloat(t.value),n=e/100;this.renderer.updateFold(n);const s=document.getElementById("slider-value");s&&(s.textContent=`${Math.round(e)}%`);const r=document.getElementById("slider-progress");r&&(r.style.width=`${e}%`);const o=document.getElementById("state-text");o&&(e===0?o.textContent="FLAT 2D NET":e===100?o.textContent="3D BOX":o.textContent=`FOLDING (${Math.round(e)}%)`)}updatePreviewFoldProgress(){const t=document.getElementById("preview-fold-slider");if(!t||!this.previewRenderer)return;const e=parseFloat(t.value),n=e/100;this.previewRenderer.updateFold(n);const s=document.getElementById("preview-slider-value");s&&(s.textContent=`${Math.round(e)}%`)}bindUIEvents(){const t=document.getElementById("btn-mode-3d"),e=document.getElementById("btn-mode-editor"),n=document.getElementById("viewer-workspace"),s=document.getElementById("editor-workspace");t.addEventListener("click",()=>{t.classList.add("active"),e.classList.remove("active"),n.classList.add("active"),s.classList.remove("active"),this.renderer.resize()}),e.addEventListener("click",()=>{e.classList.add("active"),t.classList.remove("active"),s.classList.add("active"),n.classList.remove("active"),this.netEditor&&this.netEditor.resizeCanvas(),this.previewRenderer&&this.previewRenderer.resize()}),document.getElementById("fold-slider").addEventListener("input",()=>{this.isPlaying&&this.pauseAnimation(),this.updateFoldProgress()}),document.getElementById("model-select").addEventListener("change",U=>{const H=U.target.value;H==="custom"?document.getElementById("file-input").click():this.loadModelFromUrl(H)}),document.getElementById("file-input").addEventListener("change",U=>{const H=U.target.files[0];H&&this.readFoldFile(H)});const l=document.getElementById("cad-file-input");l&&l.addEventListener("change",U=>{const H=U.target.files[0];H&&this.readFoldFile(H)});const c=document.getElementById("drop-zone"),h=document.querySelector(".viewport-container");h.addEventListener("dragover",U=>{U.preventDefault(),c.classList.add("active")}),h.addEventListener("dragleave",U=>{(U.target===c||!h.contains(U.relatedTarget))&&c.classList.remove("active")}),h.addEventListener("drop",U=>{U.preventDefault(),c.classList.remove("active"),U.dataTransfer.files&&U.dataTransfer.files.length>0&&this.readFoldFile(U.dataTransfer.files[0])}),document.getElementById("theme-select").addEventListener("change",U=>{this.renderer.setTheme(U.target.value),this.previewRenderer&&this.previewRenderer.setTheme(U.target.value)}),document.getElementById("btn-play-pause").addEventListener("click",()=>{this.toggleAnimation()}),document.getElementById("speed-select").addEventListener("change",U=>{this.animSpeed=parseFloat(U.target.value)}),document.getElementById("btn-view-2d").addEventListener("click",()=>{this.renderer.setView2D()}),document.getElementById("btn-view-3d").addEventListener("click",()=>{this.renderer.setView3D()}),document.getElementById("btn-reset-cam").addEventListener("click",()=>{this.renderer.centerModel()});const g=document.getElementById("inspector-panel"),_=document.getElementById("btn-toggle-inspector"),m=document.getElementById("btn-close-inspector");_.addEventListener("click",()=>{g.classList.toggle("open"),_.classList.toggle("active")}),m.addEventListener("click",()=>{g.classList.remove("open"),_.classList.remove("active")}),document.getElementById("root-face-select").addEventListener("change",U=>{const H=parseInt(U.target.value,10);this.kinematics&&(this.kinematics.setRootFace(H),this.updateFoldProgress())}),document.getElementById("show-creases-check").addEventListener("change",U=>{this.renderer.setShowCreases(U.target.checked),this.previewRenderer&&this.previewRenderer.setShowCreases(U.target.checked),this.updateFoldProgress()});const E=document.querySelectorAll(".palette-btn");E.forEach(U=>{U.addEventListener("click",()=>{E.forEach(q=>q.classList.remove("active")),U.classList.add("active");const H=U.dataset.directive;this.netEditor&&(this.netEditor.activeDirective=H,this.netEditor.selectedEdgeIndex>=0&&this.netEditor.setEdgeAssignment(this.netEditor.selectedEdgeIndex,H))})}),document.getElementById("btn-attach-face").addEventListener("click",()=>{this.netEditor&&(this.netEditor.selectedEdgeIndex<0?alert("Please click to select an edge first on the 2D Net Editor canvas!"):this.netEditor.attachFaceToSelectedEdge())}),document.getElementById("btn-auto-boundary").addEventListener("click",()=>{this.netEditor&&this.netEditor.autoDetectBoundaries()}),document.getElementById("btn-invert-folds").addEventListener("click",()=>{this.netEditor&&this.netEditor.invertFolds()}),document.getElementById("btn-center-net").addEventListener("click",()=>{this.netEditor&&this.netEditor.centerView()}),window.addEventListener("resize",()=>this.onWindowResize());const v=document.getElementById("preview-sidebar"),L=document.getElementById("btn-toggle-preview"),T=document.getElementById("btn-close-preview");L.addEventListener("click",()=>{v.classList.toggle("open"),L.classList.toggle("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),T.addEventListener("click",()=>{v.classList.remove("open"),L.classList.remove("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),document.getElementById("preview-fold-slider").addEventListener("input",()=>{this.isPreviewPlaying&&this.pausePreviewAnimation(),this.updatePreviewFoldProgress()}),document.getElementById("btn-preview-play").addEventListener("click",()=>{this.togglePreviewAnimation()});const S=document.getElementById("code-panel"),M=document.getElementById("btn-toggle-code"),R=document.getElementById("btn-close-code"),W=document.getElementById("btn-apply-json");M.addEventListener("click",()=>{S.classList.toggle("open"),M.classList.toggle("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),R.addEventListener("click",()=>{S.classList.remove("open"),M.classList.remove("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),W.addEventListener("click",()=>{const U=document.getElementById("json-code-textarea");try{const H=JSON.parse(U.value);this.netEditor&&this.netEditor.loadFoldJSON(H)}catch(H){alert(`Invalid JSON format: ${H.message}`)}}),document.getElementById("btn-send-to-3d").addEventListener("click",()=>{if(this.netEditor){const U=this.netEditor.getFoldJSON(),H=document.getElementById("model-select");H.value="custom",this.initFoldModel(U),t.click()}}),document.getElementById("btn-export-fold").addEventListener("click",async()=>{if(!this.netEditor)return;const U=this.netEditor.getFoldJSON(),H=JSON.stringify(U,null,2);let k=(U.file_title||(this.foldData&&this.foldData.title?this.foldData.title:"box-net")).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");(!k||k==="untitled")&&(k="box-net-prepared");const K=`${k}.json`;if("showSaveFilePicker"in window)try{const _t=await(await window.showSaveFilePicker({suggestedName:K,types:[{description:"FOLD 1.1 Spec File (*.json, *.fold)",accept:{"application/json":[".json",".fold"]}}]})).createWritable();await _t.write(H),await _t.close();return}catch(ct){if(ct.name==="AbortError")return;console.warn("Native save picker fallback:",ct)}const V="data:application/json;charset=utf-8,"+encodeURIComponent(H),et=document.createElement("a");et.setAttribute("href",V),et.setAttribute("download",K),et.style.display="none",document.body.appendChild(et),et.click(),setTimeout(()=>{et.parentNode&&document.body.removeChild(et)},300)})}async readFoldFile(t){const e=t.name.split(".").pop().toLowerCase(),n=document.getElementById("model-select");if(e==="json"||e==="fold"){const s=new FileReader;s.onload=r=>{try{const o=JSON.parse(r.target.result);n&&(n.value="custom"),this.initFoldModel(o)}catch{alert(`Failed to parse file "${t.name}": Invalid JSON.`)}},s.readAsText(t)}else if(["obj","stl","step","stp"].includes(e)){const s=new FileReader;s.onload=async r=>{try{const o=r.target.result,a=await ms.parseCADFile(o,e),l=ms.extractOrthogonalPlanarFaces(a),c=Za.unfoldToFoldJSON(l.vertices,l.facesVertices);c.file_title=t.name.replace(/\.[^/.]+$/,""),n&&(n.value="custom"),this.initFoldModel(c);const h=document.getElementById("btn-mode-editor");h&&h.click()}catch(o){console.error("CAD Import Error:",o),alert(`CAD Import Failed: ${o.message}`)}},e==="stl"?s.readAsArrayBuffer(t):s.readAsText(t)}else alert(`Unsupported file format: .${e}`)}toggleAnimation(){this.isPlaying?this.pauseAnimation():this.startAnimation()}startAnimation(){this.isPlaying=!0,document.getElementById("play-icon").style.display="none",document.getElementById("pause-icon").style.display="block"}pauseAnimation(){this.isPlaying=!1,document.getElementById("play-icon").style.display="block",document.getElementById("pause-icon").style.display="none"}togglePreviewAnimation(){this.isPreviewPlaying?this.pausePreviewAnimation():this.startPreviewAnimation()}startPreviewAnimation(){this.isPreviewPlaying=!0,document.getElementById("preview-play-icon").style.display="none",document.getElementById("preview-pause-icon").style.display="block"}pausePreviewAnimation(){this.isPreviewPlaying=!1,document.getElementById("preview-play-icon").style.display="block",document.getElementById("preview-pause-icon").style.display="none"}updateInspectorUI(){if(!this.foldData)return;document.getElementById("meta-title").textContent=this.foldData.title,document.getElementById("meta-creator").textContent=this.foldData.creator,document.getElementById("meta-spec").textContent=`v${this.foldData.spec}`,document.getElementById("stat-vertices").textContent=this.foldData.counts.vertices,document.getElementById("stat-edges").textContent=this.foldData.counts.edges,document.getElementById("stat-faces").textContent=this.foldData.counts.faces,document.getElementById("stat-boundary").textContent=this.foldData.counts.boundary,document.getElementById("stat-valley").textContent=this.foldData.counts.valley,document.getElementById("stat-mountain").textContent=this.foldData.counts.mountain,document.getElementById("stat-cut").textContent=this.foldData.counts.cut,document.getElementById("stat-flat").textContent=this.foldData.counts.flat,document.getElementById("stat-unassigned").textContent=this.foldData.counts.unassigned;const t=document.getElementById("root-face-select");t.innerHTML="",this.foldData.facesVertices.forEach((e,n)=>{const s=document.createElement("option");s.value=n,s.textContent=`Face #${n} ${n===this.kinematics.rootFaceIndex?"(Root Base)":""}`,n===this.kinematics.rootFaceIndex&&(s.selected=!0),t.appendChild(s)})}startAnimationLoop(){let t=performance.now();const e=n=>{requestAnimationFrame(e);const s=(n-t)/1e3;if(t=n,this.isPlaying){const r=document.getElementById("fold-slider");let o=parseFloat(r.value);o+=this.direction*(100/3)*this.animSpeed*s,o>=100?(o=100,this.direction=-1):o<=0&&(o=0,this.direction=1),r.value=o,this.updateFoldProgress()}if(this.renderer.render(),this.previewRenderer){if(this.isPreviewPlaying){const r=document.getElementById("preview-fold-slider");let o=parseFloat(r.value);o+=this.previewDirection*(100/3)*this.animSpeed*s,o>=100?(o=100,this.previewDirection=-1):o<=0&&(o=0,this.previewDirection=1),r.value=o,this.updatePreviewFoldProgress()}this.previewRenderer.render()}};requestAnimationFrame(e)}}window.addEventListener("DOMContentLoaded",()=>{new Mg});
