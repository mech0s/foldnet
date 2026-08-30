(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Sl=1.1,bl="BoxNetGenerator",wl="Six-Sided Cube Box Net with Attached Lid",Tl=["creasePattern"],Cl=["2D"],Rl=[[1,0],[2,0],[1,1],[2,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3],[1,4],[2,4]],Il=[[0,1],[1,3],[3,6],[6,7],[7,11],[11,10],[10,13],[13,12],[12,9],[9,8],[8,4],[4,5],[5,2],[2,0],[2,3],[5,6],[6,10],[9,10],[5,9]],Pl=["B","B","B","B","B","B","B","B","B","B","B","B","B","B","V","V","V","V","V"],Dl=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,90,90,90,90,90],Fl=[[0,1,3,2],[2,3,6,5],[4,5,9,8],[5,6,10,9],[6,7,11,10],[9,10,13,12]],Hc={file_spec:Sl,file_creator:bl,file_title:wl,file_classes:Tl,frame_attributes:Cl,vertices_coords:Rl,edges_vertices:Il,edges_assignment:Pl,edges_foldAngle:Dl,faces_vertices:Fl},Gc=Object.freeze(Object.defineProperty({__proto__:null,default:Hc,edges_assignment:Pl,edges_foldAngle:Dl,edges_vertices:Il,faces_vertices:Fl,file_classes:Tl,file_creator:bl,file_spec:Sl,file_title:wl,frame_attributes:Cl,vertices_coords:Rl},Symbol.toStringTag,{value:"Module"})),Ll=1.1,Ul="NotchedCubeGenerator",Nl="Notched Cube Net (Cube with Corner Subcube Subtracted)",Bl=["creasePattern"],Ol=["2D"],kl=[[2,2],[3,2],[3,3],[2,3],[4,2],[4,3],[3,4],[2,4],[4,4],[2,1],[3,1],[4,1],[2,0],[3,0],[4,0],[1,2],[1,3],[1,4],[0,2],[0,3],[0,4],[-1,2],[-1,3],[-1,4],[-2,2],[-2,3],[3,5],[2,5],[4,5],[3,6],[2,6],[5,2],[5,3],[5,4],[6,2],[6,3],[4,6],[4,7],[3,7],[5,6],[5,7],[2,7],[2,6]],zl=[[0,1],[1,2],[2,3],[0,3],[1,4],[4,5],[5,2],[2,6],[6,7],[3,7],[5,8],[6,8],[9,10],[1,10],[0,9],[10,11],[4,11],[12,13],[10,13],[9,12],[13,14],[11,14],[0,15],[3,16],[15,16],[7,17],[16,17],[15,18],[16,19],[18,19],[17,20],[19,20],[18,21],[19,22],[21,22],[20,23],[22,23],[21,24],[22,25],[24,25],[6,26],[26,27],[7,27],[8,28],[26,28],[26,29],[29,30],[27,30],[4,31],[31,32],[5,32],[32,33],[8,33],[31,34],[34,35],[32,35],[28,36],[29,36],[36,37],[37,38],[29,38],[42,41],[38,41],[29,42]],Vl=["V","F","F","V","V","V","F","F","V","V","V","V","F","F","B","F","B","B","F","B","B","B","B","F","F","B","F","B","F","V","B","V","B","F","F","B","B","B","B","B","F","F","B","B","V","B","B","B","B","F","F","B","B","B","B","B","B","M","B","B","M","B","B","B"],Hl=[90,0,0,90,90,90,0,0,90,90,90,90,0,0,null,0,null,null,0,null,null,null,null,0,0,null,0,null,0,90,null,90,null,0,0,null,null,null,null,null,0,0,null,null,90,null,null,null,null,0,0,null,null,null,null,null,null,-90,null,null,-90,null,null,null],Gl=[[0,1,2,3],[1,4,5,2],[3,2,6,7],[2,5,8,6],[9,10,1,0],[10,11,4,1],[12,13,10,9],[13,14,11,10],[15,0,3,16],[16,3,7,17],[18,15,16,19],[19,16,17,20],[21,18,19,22],[22,19,20,23],[24,21,22,25],[7,6,26,27],[6,8,28,26],[27,26,29,30],[4,31,32,5],[5,32,33,8],[31,34,35,32],[26,28,36,29],[29,36,37,38],[42,29,38,41]],Wc={file_spec:Ll,file_creator:Ul,file_title:Nl,file_classes:Bl,frame_attributes:Ol,vertices_coords:kl,edges_vertices:zl,edges_assignment:Vl,edges_foldAngle:Hl,faces_vertices:Gl},Xc=Object.freeze(Object.defineProperty({__proto__:null,default:Wc,edges_assignment:Vl,edges_foldAngle:Hl,edges_vertices:zl,faces_vertices:Gl,file_classes:Bl,file_creator:Ul,file_spec:Ll,file_title:Nl,frame_attributes:Ol,vertices_coords:kl},Symbol.toStringTag,{value:"Module"})),Wl=1.1,Xl="SubdividedNotchedCubeGenerator",Yl="Subdivided Notched Cube Net (3x3 Sub-Squares Per Face, 216 Faces)",jl=["creasePattern"],ql=["2D"],$l=[[2,2],[2.3333333333333335,2],[2.6666666666666665,2],[3,2],[2,2.3333333333333335],[2.3333333333333335,2.3333333333333335],[2.6666666666666665,2.3333333333333335],[3,2.3333333333333335],[2,2.6666666666666665],[2.3333333333333335,2.6666666666666665],[2.6666666666666665,2.6666666666666665],[3,2.6666666666666665],[2,3],[2.3333333333333335,3],[2.6666666666666665,3],[3,3],[3.3333333333333335,2],[3.6666666666666665,2],[4,2],[3.3333333333333335,2.3333333333333335],[3.6666666666666665,2.3333333333333335],[4,2.3333333333333335],[3.3333333333333335,2.6666666666666665],[3.6666666666666665,2.6666666666666665],[4,2.6666666666666665],[3.3333333333333335,3],[3.6666666666666665,3],[4,3],[2,3.3333333333333335],[2.3333333333333335,3.3333333333333335],[2.6666666666666665,3.3333333333333335],[3,3.3333333333333335],[2,3.6666666666666665],[2.3333333333333335,3.6666666666666665],[2.6666666666666665,3.6666666666666665],[3,3.6666666666666665],[2,4],[2.3333333333333335,4],[2.6666666666666665,4],[3,4],[3.3333333333333335,3.3333333333333335],[3.6666666666666665,3.3333333333333335],[4,3.3333333333333335],[3.3333333333333335,3.6666666666666665],[3.6666666666666665,3.6666666666666665],[4,3.6666666666666665],[3.3333333333333335,4],[3.6666666666666665,4],[4,4],[2,1],[2.3333333333333335,1],[2.6666666666666665,1],[3,1],[2,1.3333333333333333],[2.3333333333333335,1.3333333333333333],[2.6666666666666665,1.3333333333333333],[3,1.3333333333333333],[2,1.6666666666666667],[2.3333333333333335,1.6666666666666667],[2.6666666666666665,1.6666666666666667],[3,1.6666666666666667],[3.3333333333333335,1],[3.6666666666666665,1],[4,1],[3.3333333333333335,1.3333333333333333],[3.6666666666666665,1.3333333333333333],[4,1.3333333333333333],[3.3333333333333335,1.6666666666666667],[3.6666666666666665,1.6666666666666667],[4,1.6666666666666667],[2,0],[2.3333333333333335,0],[2.6666666666666665,0],[3,0],[2,.3333333333333333],[2.3333333333333335,.3333333333333333],[2.6666666666666665,.3333333333333333],[3,.3333333333333333],[2,.6666666666666666],[2.3333333333333335,.6666666666666666],[2.6666666666666665,.6666666666666666],[3,.6666666666666666],[3.3333333333333335,0],[3.6666666666666665,0],[4,0],[3.3333333333333335,.3333333333333333],[3.6666666666666665,.3333333333333333],[4,.3333333333333333],[3.3333333333333335,.6666666666666666],[3.6666666666666665,.6666666666666666],[4,.6666666666666666],[1,2],[1.3333333333333333,2],[1.6666666666666667,2],[1,2.3333333333333335],[1.3333333333333333,2.3333333333333335],[1.6666666666666667,2.3333333333333335],[1,2.6666666666666665],[1.3333333333333333,2.6666666666666665],[1.6666666666666667,2.6666666666666665],[1,3],[1.3333333333333333,3],[1.6666666666666667,3],[1,3.3333333333333335],[1.3333333333333333,3.3333333333333335],[1.6666666666666667,3.3333333333333335],[1,3.6666666666666665],[1.3333333333333333,3.6666666666666665],[1.6666666666666667,3.6666666666666665],[1,4],[1.3333333333333333,4],[1.6666666666666667,4],[0,2],[.3333333333333333,2],[.6666666666666666,2],[0,2.3333333333333335],[.3333333333333333,2.3333333333333335],[.6666666666666666,2.3333333333333335],[0,2.6666666666666665],[.3333333333333333,2.6666666666666665],[.6666666666666666,2.6666666666666665],[0,3],[.3333333333333333,3],[.6666666666666666,3],[0,3.3333333333333335],[.3333333333333333,3.3333333333333335],[.6666666666666666,3.3333333333333335],[0,3.6666666666666665],[.3333333333333333,3.6666666666666665],[.6666666666666666,3.6666666666666665],[0,4],[.3333333333333333,4],[.6666666666666666,4],[-1,2],[-.6666666666666666,2],[-.3333333333333333,2],[-1,2.3333333333333335],[-.6666666666666666,2.3333333333333335],[-.3333333333333333,2.3333333333333335],[-1,2.6666666666666665],[-.6666666666666666,2.6666666666666665],[-.3333333333333333,2.6666666666666665],[-1,3],[-.6666666666666666,3],[-.3333333333333333,3],[-1,3.3333333333333335],[-.6666666666666666,3.3333333333333335],[-.3333333333333333,3.3333333333333335],[-1,3.6666666666666665],[-.6666666666666666,3.6666666666666665],[-.3333333333333333,3.6666666666666665],[-1,4],[-.6666666666666666,4],[-.3333333333333333,4],[-2,2],[-1.6666666666666667,2],[-1.3333333333333333,2],[-2,2.3333333333333335],[-1.6666666666666667,2.3333333333333335],[-1.3333333333333333,2.3333333333333335],[-2,2.6666666666666665],[-1.6666666666666667,2.6666666666666665],[-1.3333333333333333,2.6666666666666665],[-2,3],[-1.6666666666666667,3],[-1.3333333333333333,3],[2,4.333333333333333],[2.3333333333333335,4.333333333333333],[2.6666666666666665,4.333333333333333],[3,4.333333333333333],[2,4.666666666666667],[2.3333333333333335,4.666666666666667],[2.6666666666666665,4.666666666666667],[3,4.666666666666667],[2,5],[2.3333333333333335,5],[2.6666666666666665,5],[3,5],[3.3333333333333335,4.333333333333333],[3.6666666666666665,4.333333333333333],[4,4.333333333333333],[3.3333333333333335,4.666666666666667],[3.6666666666666665,4.666666666666667],[4,4.666666666666667],[3.3333333333333335,5],[3.6666666666666665,5],[4,5],[2,5.333333333333333],[2.3333333333333335,5.333333333333333],[2.6666666666666665,5.333333333333333],[3,5.333333333333333],[2,5.666666666666667],[2.3333333333333335,5.666666666666667],[2.6666666666666665,5.666666666666667],[3,5.666666666666667],[2,6],[2.3333333333333335,6],[2.6666666666666665,6],[3,6],[4.333333333333333,2],[4.666666666666667,2],[5,2],[4.333333333333333,2.3333333333333335],[4.666666666666667,2.3333333333333335],[5,2.3333333333333335],[4.333333333333333,2.6666666666666665],[4.666666666666667,2.6666666666666665],[5,2.6666666666666665],[4.333333333333333,3],[4.666666666666667,3],[5,3],[4.333333333333333,3.3333333333333335],[4.666666666666667,3.3333333333333335],[5,3.3333333333333335],[4.333333333333333,3.6666666666666665],[4.666666666666667,3.6666666666666665],[5,3.6666666666666665],[4.333333333333333,4],[4.666666666666667,4],[5,4],[5.333333333333333,2],[5.666666666666667,2],[6,2],[5.333333333333333,2.3333333333333335],[5.666666666666667,2.3333333333333335],[6,2.3333333333333335],[5.333333333333333,2.6666666666666665],[5.666666666666667,2.6666666666666665],[6,2.6666666666666665],[5.333333333333333,3],[5.666666666666667,3],[6,3],[3,5.333333333333333],[3.3333333333333335,5.333333333333333],[3.6666666666666665,5.333333333333333],[4,5.333333333333333],[3,5.666666666666667],[3.3333333333333335,5.666666666666667],[3.6666666666666665,5.666666666666667],[4,5.666666666666667],[3.3333333333333335,6],[3.6666666666666665,6],[4,6],[3,6.333333333333333],[3.3333333333333335,6.333333333333333],[3.6666666666666665,6.333333333333333],[4,6.333333333333333],[3,6.666666666666667],[3.3333333333333335,6.666666666666667],[3.6666666666666665,6.666666666666667],[4,6.666666666666667],[3,7],[3.3333333333333335,7],[3.6666666666666665,7],[4,7],[2,6],[2.3333333333333335,6],[2.6666666666666665,6],[2,6.333333333333333],[2.3333333333333335,6.333333333333333],[2.6666666666666665,6.333333333333333],[2,6.666666666666667],[2.3333333333333335,6.666666666666667],[2.6666666666666665,6.666666666666667],[2,7],[2.3333333333333335,7],[2.6666666666666665,7]],Kl=[[0,1],[1,5],[4,5],[0,4],[1,2],[2,6],[5,6],[2,3],[3,7],[6,7],[5,9],[8,9],[4,8],[6,10],[9,10],[7,11],[10,11],[9,13],[12,13],[8,12],[10,14],[13,14],[11,15],[14,15],[3,16],[16,19],[7,19],[16,17],[17,20],[19,20],[17,18],[18,21],[20,21],[19,22],[11,22],[20,23],[22,23],[21,24],[23,24],[22,25],[15,25],[23,26],[25,26],[24,27],[26,27],[13,29],[28,29],[12,28],[14,30],[29,30],[15,31],[30,31],[29,33],[32,33],[28,32],[30,34],[33,34],[31,35],[34,35],[33,37],[36,37],[32,36],[34,38],[37,38],[35,39],[38,39],[25,40],[31,40],[26,41],[40,41],[27,42],[41,42],[40,43],[35,43],[41,44],[43,44],[42,45],[44,45],[43,46],[39,46],[44,47],[46,47],[45,48],[47,48],[49,50],[50,54],[53,54],[49,53],[50,51],[51,55],[54,55],[51,52],[52,56],[55,56],[54,58],[57,58],[53,57],[55,59],[58,59],[56,60],[59,60],[1,58],[0,57],[2,59],[3,60],[52,61],[61,64],[56,64],[61,62],[62,65],[64,65],[62,63],[63,66],[65,66],[64,67],[60,67],[65,68],[67,68],[66,69],[68,69],[16,67],[17,68],[18,69],[70,71],[71,75],[74,75],[70,74],[71,72],[72,76],[75,76],[72,73],[73,77],[76,77],[75,79],[78,79],[74,78],[76,80],[79,80],[77,81],[80,81],[50,79],[49,78],[51,80],[52,81],[73,82],[82,85],[77,85],[82,83],[83,86],[85,86],[83,84],[84,87],[86,87],[85,88],[81,88],[86,89],[88,89],[87,90],[89,90],[61,88],[62,89],[63,90],[91,92],[92,95],[94,95],[91,94],[92,93],[93,96],[95,96],[0,93],[4,96],[95,98],[97,98],[94,97],[96,99],[98,99],[8,99],[98,101],[100,101],[97,100],[99,102],[101,102],[12,102],[101,104],[103,104],[100,103],[102,105],[104,105],[28,105],[104,107],[106,107],[103,106],[105,108],[107,108],[32,108],[107,110],[109,110],[106,109],[108,111],[110,111],[36,111],[112,113],[113,116],[115,116],[112,115],[113,114],[114,117],[116,117],[91,114],[94,117],[116,119],[118,119],[115,118],[117,120],[119,120],[97,120],[119,122],[121,122],[118,121],[120,123],[122,123],[100,123],[122,125],[124,125],[121,124],[123,126],[125,126],[103,126],[125,128],[127,128],[124,127],[126,129],[128,129],[106,129],[128,131],[130,131],[127,130],[129,132],[131,132],[109,132],[133,134],[134,137],[136,137],[133,136],[134,135],[135,138],[137,138],[112,135],[115,138],[137,140],[139,140],[136,139],[138,141],[140,141],[118,141],[140,143],[142,143],[139,142],[141,144],[143,144],[121,144],[143,146],[145,146],[142,145],[144,147],[146,147],[124,147],[146,149],[148,149],[145,148],[147,150],[149,150],[127,150],[149,152],[151,152],[148,151],[150,153],[152,153],[130,153],[154,155],[155,158],[157,158],[154,157],[155,156],[156,159],[158,159],[133,156],[136,159],[158,161],[160,161],[157,160],[159,162],[161,162],[139,162],[161,164],[163,164],[160,163],[162,165],[164,165],[142,165],[37,167],[166,167],[36,166],[38,168],[167,168],[39,169],[168,169],[167,171],[170,171],[166,170],[168,172],[171,172],[169,173],[172,173],[171,175],[174,175],[170,174],[172,176],[175,176],[173,177],[176,177],[46,178],[169,178],[47,179],[178,179],[48,180],[179,180],[178,181],[173,181],[179,182],[181,182],[180,183],[182,183],[181,184],[177,184],[182,185],[184,185],[183,186],[185,186],[175,188],[187,188],[174,187],[176,189],[188,189],[177,190],[189,190],[188,192],[191,192],[187,191],[189,193],[192,193],[190,194],[193,194],[192,196],[195,196],[191,195],[193,197],[196,197],[194,198],[197,198],[18,199],[199,202],[21,202],[199,200],[200,203],[202,203],[200,201],[201,204],[203,204],[202,205],[24,205],[203,206],[205,206],[204,207],[206,207],[205,208],[27,208],[206,209],[208,209],[207,210],[209,210],[208,211],[42,211],[209,212],[211,212],[210,213],[212,213],[211,214],[45,214],[212,215],[214,215],[213,216],[215,216],[214,217],[48,217],[215,218],[217,218],[216,219],[218,219],[201,220],[220,223],[204,223],[220,221],[221,224],[223,224],[221,222],[222,225],[224,225],[223,226],[207,226],[224,227],[226,227],[225,228],[227,228],[226,229],[210,229],[227,230],[229,230],[228,231],[230,231],[184,233],[232,233],[177,232],[185,234],[233,234],[186,235],[234,235],[233,237],[236,237],[232,236],[234,238],[237,238],[235,239],[238,239],[237,240],[198,240],[198,236],[238,241],[240,241],[239,242],[241,242],[240,244],[243,244],[198,243],[241,245],[244,245],[242,246],[245,246],[244,248],[247,248],[243,247],[245,249],[248,249],[246,250],[249,250],[248,252],[251,252],[247,251],[249,253],[252,253],[250,254],[253,254],[255,256],[256,259],[258,259],[255,258],[256,257],[257,260],[259,260],[198,257],[243,260],[259,262],[261,262],[258,261],[260,263],[262,263],[247,263],[262,265],[264,265],[261,264],[263,266],[265,266],[251,266]],Zl=["V","F","F","V","V","F","F","V","F","F","F","F","V","F","F","F","F","F","F","V","F","F","F","F","V","F","F","V","F","F","V","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","V","F","F","F","F","F","F","V","F","F","F","F","F","V","V","F","V","F","V","F","F","F","F","V","F","F","F","F","F","V","F","F","V","F","V","V","V","F","F","F","B","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","B","B","F","F","B","B","F","F","B","F","F","F","F","B","F","F","F","F","F","B","F","F","B","F","F","B","F","F","B","B","F","F","F","F","F","B","F","F","F","B","B","F","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","B","B","B","F","F","V","B","F","F","B","F","F","F","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","F","B","V","F","B","B","B","F","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","F","B","B","F","B","B","B","F","F","B","B","F","F","B","F","F","F","B","F","F","F","F","B","B","F","B","B","F","F","B","F","F","F","F","F","F","B","F","F","F","F","F","F","B","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","V","F","V","B","V","F","F","B","F","F","B","F","F","F","B","F","F","B","F","F","B","B","F","B","B","B","B","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","B","F","B","B","B","B","F","F","B","F","F","B","B","F","F","F","F","F","B","F","F","B","F","B","B","B","F","F","B","F","F","B","F","F","F","B","F","F","B","F","F","M","B","F","M","B","M","F","F","M","F","F","B","F","F","F","M","F","F","B","F","F","B","M","F","B","B","B","B","F","F","B","B","F","F","B","F","F","F","B","F","F","F","F","B","B","F","B","B"],Ql=[90,0,0,90,90,0,0,90,0,0,0,0,90,0,0,0,0,0,0,90,0,0,0,0,90,0,0,90,0,0,90,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,90,0,0,0,0,0,0,90,0,0,0,0,0,90,90,0,90,0,90,0,0,0,0,90,0,0,0,0,0,90,0,0,90,0,90,90,90,0,0,0,null,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,null,null,0,0,null,null,0,0,null,0,0,0,0,null,0,0,0,0,0,null,0,0,null,0,0,null,0,0,null,null,0,0,0,0,0,null,0,0,0,null,null,0,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,null,null,null,0,0,90,null,0,0,null,0,0,0,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,0,null,90,0,null,null,null,0,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,null,null,0,null,null,null,0,0,null,null,0,0,null,0,0,0,null,0,0,0,0,null,null,0,null,null,0,0,null,0,0,0,0,0,0,null,0,0,0,0,0,0,null,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,90,0,90,null,90,0,0,null,0,0,null,0,0,0,null,0,0,null,0,0,null,null,0,null,null,null,null,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,null,0,null,null,null,null,0,0,null,0,0,null,null,0,0,0,0,0,null,0,0,null,0,null,null,null,0,0,null,0,0,null,0,0,0,null,0,0,null,0,0,-90,null,0,-90,null,-90,0,0,-90,0,0,null,0,0,0,-90,0,0,null,0,0,null,-90,0,null,null,null,null,0,0,null,null,0,0,null,0,0,0,null,0,0,0,0,null,null,0,null,null],Jl=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[4,5,9,8],[5,6,10,9],[6,7,11,10],[8,9,13,12],[9,10,14,13],[10,11,15,14],[3,16,19,7],[16,17,20,19],[17,18,21,20],[7,19,22,11],[19,20,23,22],[20,21,24,23],[11,22,25,15],[22,23,26,25],[23,24,27,26],[12,13,29,28],[13,14,30,29],[14,15,31,30],[28,29,33,32],[29,30,34,33],[30,31,35,34],[32,33,37,36],[33,34,38,37],[34,35,39,38],[15,25,40,31],[25,26,41,40],[26,27,42,41],[31,40,43,35],[40,41,44,43],[41,42,45,44],[35,43,46,39],[43,44,47,46],[44,45,48,47],[49,50,54,53],[50,51,55,54],[51,52,56,55],[53,54,58,57],[54,55,59,58],[55,56,60,59],[57,58,1,0],[58,59,2,1],[59,60,3,2],[52,61,64,56],[61,62,65,64],[62,63,66,65],[56,64,67,60],[64,65,68,67],[65,66,69,68],[60,67,16,3],[67,68,17,16],[68,69,18,17],[70,71,75,74],[71,72,76,75],[72,73,77,76],[74,75,79,78],[75,76,80,79],[76,77,81,80],[78,79,50,49],[79,80,51,50],[80,81,52,51],[73,82,85,77],[82,83,86,85],[83,84,87,86],[77,85,88,81],[85,86,89,88],[86,87,90,89],[81,88,61,52],[88,89,62,61],[89,90,63,62],[91,92,95,94],[92,93,96,95],[93,0,4,96],[94,95,98,97],[95,96,99,98],[96,4,8,99],[97,98,101,100],[98,99,102,101],[99,8,12,102],[100,101,104,103],[101,102,105,104],[102,12,28,105],[103,104,107,106],[104,105,108,107],[105,28,32,108],[106,107,110,109],[107,108,111,110],[108,32,36,111],[112,113,116,115],[113,114,117,116],[114,91,94,117],[115,116,119,118],[116,117,120,119],[117,94,97,120],[118,119,122,121],[119,120,123,122],[120,97,100,123],[121,122,125,124],[122,123,126,125],[123,100,103,126],[124,125,128,127],[125,126,129,128],[126,103,106,129],[127,128,131,130],[128,129,132,131],[129,106,109,132],[133,134,137,136],[134,135,138,137],[135,112,115,138],[136,137,140,139],[137,138,141,140],[138,115,118,141],[139,140,143,142],[140,141,144,143],[141,118,121,144],[142,143,146,145],[143,144,147,146],[144,121,124,147],[145,146,149,148],[146,147,150,149],[147,124,127,150],[148,149,152,151],[149,150,153,152],[150,127,130,153],[154,155,158,157],[155,156,159,158],[156,133,136,159],[157,158,161,160],[158,159,162,161],[159,136,139,162],[160,161,164,163],[161,162,165,164],[162,139,142,165],[36,37,167,166],[37,38,168,167],[38,39,169,168],[166,167,171,170],[167,168,172,171],[168,169,173,172],[170,171,175,174],[171,172,176,175],[172,173,177,176],[39,46,178,169],[46,47,179,178],[47,48,180,179],[169,178,181,173],[178,179,182,181],[179,180,183,182],[173,181,184,177],[181,182,185,184],[182,183,186,185],[174,175,188,187],[175,176,189,188],[176,177,190,189],[187,188,192,191],[188,189,193,192],[189,190,194,193],[191,192,196,195],[192,193,197,196],[193,194,198,197],[18,199,202,21],[199,200,203,202],[200,201,204,203],[21,202,205,24],[202,203,206,205],[203,204,207,206],[24,205,208,27],[205,206,209,208],[206,207,210,209],[27,208,211,42],[208,209,212,211],[209,210,213,212],[42,211,214,45],[211,212,215,214],[212,213,216,215],[45,214,217,48],[214,215,218,217],[215,216,219,218],[201,220,223,204],[220,221,224,223],[221,222,225,224],[204,223,226,207],[223,224,227,226],[224,225,228,227],[207,226,229,210],[226,227,230,229],[227,228,231,230],[177,184,233,232],[184,185,234,233],[185,186,235,234],[232,233,237,236],[233,234,238,237],[234,235,239,238],[236,237,240,198],[237,238,241,240],[238,239,242,241],[198,240,244,243],[240,241,245,244],[241,242,246,245],[243,244,248,247],[244,245,249,248],[245,246,250,249],[247,248,252,251],[248,249,253,252],[249,250,254,253],[255,256,259,258],[256,257,260,259],[257,198,243,260],[258,259,262,261],[259,260,263,262],[260,243,247,263],[261,262,265,264],[262,263,266,265],[263,247,251,266]],Yc={file_spec:Wl,file_creator:Xl,file_title:Yl,file_classes:jl,frame_attributes:ql,vertices_coords:$l,edges_vertices:Kl,edges_assignment:Zl,edges_foldAngle:Ql,faces_vertices:Jl},jc=Object.freeze(Object.defineProperty({__proto__:null,default:Yc,edges_assignment:Zl,edges_foldAngle:Ql,edges_vertices:Kl,faces_vertices:Jl,file_classes:jl,file_creator:Xl,file_spec:Wl,file_title:Yl,frame_attributes:ql,vertices_coords:$l},Symbol.toStringTag,{value:"Module"})),qc="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAgAAAAIAAAIC/AACkQgAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAApEIAAKRCAAAAAACAAAAAgAAAgL8AAKRCAAAAAAAApEIAAAAAAAAAAAAApEIAAAAAAACkQgAApEIAAAAAAAAAAIC/AAAAAAAApEIAAKRCAAAAAAAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAAAAAAgAAAgL8AAACAAACkQgAApEIAAKRCAAAAAAAApEIAAKRCAAAAAAAApEIAAAAAAAAAAIC/AAAAgAAAAIAAAKRCAACkQgAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAApEIAAAAAgL8AAACAAAAAgAAApEIAAKRCAAAAAAAApEIAAAAAAAAAAAAApEIAAAAAAACkQgAAAAAAAAAAAAAAAIC/AAAAAAAApEIAAAAAAECcqAAAyEIAAAAAAACkQgAApEIAAAAAAAAAAAAAAAAAgAAAgL8AQJyoAADIQgAAAAAAAMhCAADIQgAAAAAAAKRCAACkQgAAAAAAAAAAAAAAAAAAAACAvwAApEIAAKRCAAAAAAAAyEIAAMhCAAAAAAAApEIAAAAAAAAAAAAAAAAAgAAAAIAAAIC/AADIQgAAyEIAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAAAAAAAAAAACAAACAPwAAAAAAQJyoAADIQgAAyEIAAMhCAADIQgAAyEIAQJyoAADIQgAAAAAAAAAAAIAAAIA/AAAAAAAAyEIAAMhCAADIQgAAyEIAAMhCAAAAAABAnKgAAMhCAAAAAAAAAAAAAAAAgL8AAAAAAACkQgAAAAAAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAAKRCAAAAAACAAACAvwAAAAAAAMhCAAAAAAAAAAAAAMhCAAAAAAAAyEIAAKRCAAAAAAAApEIAAAAAAAAAAIC/AAAAAAAApEIAAAAAAACkQgAAyEIAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAgAAAgL8AAACAAADIQgAAAAAAAMhCAAAAAAAAAAAAAMhCAAAAAAAAAAAAAKRCAAAAAAAAAAAAgAAAgD8AAMhCAAAAAAAAyEIAAMhCAADIQgAAyEIAAAAAAAAAAAAAyEIAAAAAAAAAAACAAACAPwAAyEIAAMhCAADIQgBAnKgAAMhCAADIQgAAAAAAAAAAAADIQgAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAKRCAAAAAAAAAAAAAMhCAAAAAAAApEIAAKRCAAAAAIC/AABIpR3HY6YAAAAAAAAAAAAAyEIAQJyoAADIQgAAyEIAAAAAAACkQgAApEIAAAAAgL+P44qmAAAAgAAAAAAAAKRCAACkQgBAnKgAAMhCAADIQgAAAAAAAKRCAAAAAAAAAACAv4/jiqYAAACAAECcqAAAyEIAAMhCAECcqAAAyEIAAAAAAAAAAAAApEIAAAAAAAAAAIA/AAAAAAAAAAAAAMhCAADIQgAAyEIAAMhCAAAAAAAAyEIAAMhCAADIQgAAAAAAAAAAgD8AAACAAAAAgAAAyEIAAAAAAADIQgAAyEIAAAAAAAAAAAAAyEIAAMhCAAAAAAAA",$c=Object.freeze(Object.defineProperty({__proto__:null,default:qc},Symbol.toStringTag,{value:"Module"})),Kc="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAgAAAAIAAAIC/AACkQgAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAApEIAAKRCAAAAAACAAAAAgAAAgL8AAKRCAAAAAAAApEIAAAAAAAAAAAAApEIAAAAAAACkQgAApEIAAAAAAAAAAIC/AAAAAAAApEIAAKRCmZmhQQAApEIAAKRCAACkQgAAAAAAAKRCmZmhQQAAAAAAgAAAgL8AAACAAACkQgAApEIAAKRCAAAAAAAApEIAAKRCAAAAAAAApEKZmaFBAAAAAIC/AAAAgAAAAIAAAKRCAACkQgAApEIAAKRCAACkQpmZoUEAAKRCAAAAAAAApEIAAAAAgL8AAACAAAAAgAAApEIAAKRCmZmhQQAApEIAAAAAmZmhQQAApEIAAAAAAACkQgAAAAAAAAAAAIAAAIA/AADIQgAAAAAAAMhCAADIQgAAyEIAAMhCAAAAAAAAAAAAAMhCAAAAAAAAAAAAgAAAgD8AAMhCAADIQgAAyEIAQJyoAADIQgAAyEIAAAAAAAAAAAAAyEIAAAAAAIAAAIA/AAAAAABAnKgAAMhCAADIQgAAyEIAAMhCAADIQgBAnKgAAMhCmZmhQQAAAAAAgAAAgD8AAAAAAADIQgAAyEIAAMhCAADIQgAAyEKZmaFBAECcqAAAyEKZmaFBAAAAAIA/AAAAAAAAAAAAAMhCAADIQgAAyEIAAMhCAAAAAAAAyEIAAMhCAADIQpmZoUEAAAAAgD8AAACAAAAAgAAAyEIAAAAAAADIQgAAyEIAAAAAmZmhQQAAyEIAAMhCmZmhQQAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAKRCAAAAAAAAAAAAAMhCAAAAAAAApEIAAKRCAAAAAIC/AABIpR3HY6YAAAAAAAAAAAAAyEIAQJyoAADIQgAAyEIAAAAAAACkQgAApEIAAAAAgL+P44qmAAAAgAAAAAAAAKRCAACkQgBAnKgAAMhCAADIQgAAAAAAAKRCmZmhQQAAAACAv4/jiqYAAACAAECcqAAAyEIAAMhCAECcqAAAyEKZmaFBAAAAAAAApEKZmaFBAAAAAAAAAAAAAAAAgL8AAAAAAACkQpmZoUEAQJyoAADIQpmZoUEAAKRCAACkQpmZoUEAAAAAAAAAAACAAACAvwBAnKgAAMhCmZmhQQAAyEIAAMhCmZmhQQAApEIAAKRCmZmhQQAAAAAAAAAAAAAAAIC/AACkQgAApEKZmaFBAADIQgAAyEKZmaFBAACkQgAAAACZmaFBAAAAAACAAAAAgAAAgL8AAMhCAADIQpmZoUEAAMhCAAAAAJmZoUEAAKRCAAAAAJmZoUEAAAAAAAAAAIC/AAAAAAAApEIAAAAAmZmhQQAAyEIAAAAAmZmhQQAApEIAAAAAAACkQgAAAAAAgAAAgL8AAAAAAADIQgAAAACZmaFBAADIQgAAAAAAAMhCAACkQgAAAAAAAKRCAAAAAAAAAACAvwAAAAAAAKRCAAAAAAAApEIAAMhCAAAAAAAAyEIAAAAAAAAAAAAApEIAAAAAAIAAAIC/AAAAgAAAyEIAAAAAAADIQgAAAAAAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAgAAAAIAAAIC/IpTCQSKUwkEAAChCIpTCQd5rjcEAAChC3muNwSKUwkEAAChCAAAAAACAAAAAgAAAgL8ilMJB3muNwQAAKELea43B3muNwQAAKELea43BIpTCQQAAKEIAAAAAAAAAAIC/AAAAACKUwkEilMJBAADAwCKUwkEilMJBAAAoQt5rjcEilMJBAADAwAAAAAAAgAAAgL8AAACAIpTCQSKUwkEAAChC3muNwSKUwkEAAChC3muNwSKUwkEAAMDAAAAAAAAAAAAAgAAAgD8RSnlC3muNwQAAoEIRSnlCEUp5QgAAoELea43B3muNwQAAoEIAAAAAAAAAAACAAACAPxFKeUIRSnlCAACgQt5rjcERSnlCAACgQt5rjcHea43BAACgQgAAAAAAgAAAgD8AAAAA3muNwRFKeUIAAKBCEUp5QhFKeUIAAKBC3muNwRFKeUIAAMDAAAAAAACAAACAPwAAAAARSnlCEUp5QgAAoEIRSnlCEUp5QgAAwMDea43BEUp5QgAAwMAAAAAAgD8AAAAAAAAAABFKeUIRSnlCAACgQhFKeULea43BAACgQhFKeUIRSnlCAADAwAAAAACAPwAAAIAAAACAEUp5Qt5rjcEAAKBCEUp5Qt5rjcEAAMDAEUp5QhFKeUIAAMDAAAAAAIC/AAAAAAAAAADea43B3muNwQAAKELea43B3muNwQAAoELea43BIpTCQQAAKEIAAAAAgL8AAAAAAAAAgN5rjcHea43BAACgQt5rjcERSnlCAACgQt5rjcEilMJBAAAoQgAAAACAvwAAAAAAAAAA3muNwSKUwkEAAChC3muNwRFKeUIAAKBC3muNwSKUwkEAAMDAAAAAAIC/AAAAgAAAAIDea43BEUp5QgAAoELea43BEUp5QgAAwMDea43BIpTCQQAAwMAAAAAAgL8AAACAAAAAgCKUwkEilMJBAAAoQiKUwkEilMJBAADAwCKUwkHea43BAAAoQgAAAACAvwAAAIAAAACAIpTCQSKUwkEAAMDAIpTCQd5rjcEAAMDAIpTCQd5rjcEAAChCAAAAAAAAAAAAAAAAgL/ea43BIpTCQQAAwMDea43BEUp5QgAAwMAilMJBIpTCQQAAwMAAAAAAAAAAAACAAACAv95rjcERSnlCAADAwBFKeUIRSnlCAADAwCKUwkEilMJBAADAwAAAAAAAAAAAAAAAAIC/IpTCQSKUwkEAAMDAEUp5QhFKeUIAAMDAIpTCQd5rjcEAAMDAAAAAAACAAAAAgAAAgL8RSnlCEUp5QgAAwMARSnlC3muNwQAAwMAilMJB3muNwQAAwMAAAAAAAAAAAIC/AAAAACKUwkHea43BAADAwBFKeULea43BAADAwCKUwkHea43BAAAoQgAAAAAAgAAAgL8AAAAAEUp5Qt5rjcEAAMDAEUp5Qt5rjcEAAKBCIpTCQd5rjcEAAChCAAAAAAAAAACAvwAAAAAilMJB3muNwQAAKEIRSnlC3muNwQAAoELea43B3muNwQAAKEIAAAAAAIAAAIC/AAAAgBFKeULea43BAACgQt5rjcHea43BAACgQt5rjcHea43BAAAoQgAAAAAAgAAAAIAAAIC/FOICQRTiAkEAAAAAFOICQfaO/sEAAAAA9o7+wRTiAkEAAAAAAAAAAACAAAAAgAAAgL8U4gJB9o7+wQAAAAD2jv7B9o7+wQAAAAD2jv7BFOICQQAAAAAAAAAAAAAAAACAAACAPxTiAkH2jv7BAAAgQhTiAkEU4gJBAAAgQvaO/sH2jv7BAAAgQgAAAAAAAAAAAIAAAIA/FOICQRTiAkEAACBC9o7+wRTiAkEAACBC9o7+wfaO/sEAACBCAAAAAACAAACAPwAAAAD2jv7BFOICQQAAIEIU4gJBFOICQQAAIEL2jv7BFOICQQAAAAAAAAAAAIAAAIA/AAAAABTiAkEU4gJBAAAgQhTiAkEU4gJBAAAAAPaO/sEU4gJBAAAAAAAAAACAPwAAAAAAAAAAFOICQRTiAkEAACBCFOICQfaO/sEAACBCFOICQRTiAkEAAAAAAAAAAIA/AAAAgAAAAIAU4gJB9o7+wQAAIEIU4gJB9o7+wQAAAAAU4gJBFOICQQAAAAAAAAAAAIAAAIC/AAAAgBTiAkH2jv7BAAAgQvaO/sH2jv7BAAAgQhTiAkH2jv7BAAAAAAAAAAAAgAAAgL8AAACA9o7+wfaO/sEAACBC9o7+wfaO/sEAAAAAFOICQfaO/sEAAAAAAAAAAIC/AAAAAAAAAAD2jv7B9o7+wQAAIEL2jv7BFOICQQAAIEL2jv7B9o7+wQAAAAAAAAAAgL8AAACAAAAAgPaO/sEU4gJBAAAgQvaO/sEU4gJBAAAAAPaO/sH2jv7BAAAAAAAA",Zc=Object.freeze(Object.defineProperty({__proto__:null,default:Kc},Symbol.toStringTag,{value:"Module"}));function ki(s){if(!s||typeof s!="object")throw new Error("Invalid FOLD file: must be a JSON object.");const e=s.vertices_coords||[],t=s.faces_vertices||[],n=s.edges_vertices||[],i=s.edges_assignment||[],r=s.edges_foldAngle||[];if(e.length===0||t.length===0)throw new Error("Invalid FOLD file: missing vertices_coords or faces_vertices.");const o=e.map(h=>h.length===2?[h[0],h[1],0]:[h[0],h[1],h[2]||0]),a=n.map((h,d)=>{const u=r[d];if(u!=null)return u;switch((i[d]||"B").toUpperCase()){case"V":return 90;case"M":return-90;case"B":return 0;case"C":return 0;case"F":return 0;case"U":return 0;default:return 0}}),l=new Map;n.forEach((h,d)=>{const u=Math.min(h[0],h[1]),f=Math.max(h[0],h[1]);l.set(`${u}-${f}`,d)});const c={boundary:0,valley:0,mountain:0,cut:0,flat:0,unassigned:0};return i.forEach(h=>{switch((h||"B").toUpperCase()){case"B":c.boundary++;break;case"V":c.valley++;break;case"M":c.mountain++;break;case"C":c.cut++;break;case"F":c.flat++;break;case"U":c.unassigned++;break;default:c.boundary++;break}}),{raw:s,title:s.file_title||"Untitled Box Net",creator:s.file_creator||"Unknown",spec:s.file_spec||1.1,vertices:o,facesVertices:t,edgesVertices:n,edgesAssignment:i,edgesFoldAngle:a,edgeLookup:l,counts:{vertices:o.length,edges:n.length,faces:t.length,...c}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xs="170",ui={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qc=0,Zo=1,Jc=2,ec=1,tc=2,dn=3,en=0,St=1,Jt=2,Cn=0,fi=1,Qo=2,Jo=3,ea=4,eh=5,zn=100,th=101,nh=102,ih=103,sh=104,rh=200,oh=201,ah=202,lh=203,Nr=204,Br=205,ch=206,hh=207,dh=208,uh=209,fh=210,ph=211,mh=212,gh=213,Ah=214,Or=0,kr=1,zr=2,Ai=3,Vr=4,Hr=5,Gr=6,Wr=7,wo=0,_h=1,xh=2,Rn=0,vh=1,yh=2,Mh=3,Eh=4,Sh=5,bh=6,wh=7,nc=300,_i=301,xi=302,Xr=303,Yr=304,Ys=306,Ns=1e3,wn=1001,Bs=1002,kt=1003,ic=1004,Li=1005,jt=1006,Rs=1007,Tn=1008,gn=1009,sc=1010,rc=1011,Gi=1012,To=1013,Hn=1014,fn=1015,qi=1016,Co=1017,Ro=1018,vi=1020,oc=35902,ac=1021,lc=1022,Ot=1023,cc=1024,hc=1025,pi=1026,yi=1027,dc=1028,Io=1029,uc=1030,Po=1031,Do=1033,Is=33776,Ps=33777,Ds=33778,Fs=33779,jr=35840,qr=35841,$r=35842,Kr=35843,Zr=36196,Qr=37492,Jr=37496,eo=37808,to=37809,no=37810,io=37811,so=37812,ro=37813,oo=37814,ao=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,Ls=36492,mo=36494,go=36495,fc=36283,Ao=36284,_o=36285,xo=36286,Th=2300,Ch=2301,Rh=3200,Ih=3201,Fo=0,Ph=1,un="",Mt="srgb",Ei="srgb-linear",js="linear",Je="srgb",jn=7680,ta=519,Dh=512,Fh=513,Lh=514,pc=515,Uh=516,Nh=517,Bh=518,Oh=519,na=35044,ia="300 es",pn=2e3,Os=2001;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sa=1234567;const zi=Math.PI/180,Wi=180/Math.PI;function Si(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function Lo(s,e){return(s%e+e)%e}function kh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function zh(s,e,t){return s!==e?(t-s)/(e-s):0}function Vi(s,e,t){return(1-t)*s+t*e}function Vh(s,e,t,n){return Vi(s,e,1-Math.exp(-t*n))}function Hh(s,e=1){return e-Math.abs(Lo(s,e*2)-e)}function Gh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Wh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Yh(s,e){return s+Math.random()*(e-s)}function jh(s){return s*(.5-Math.random())}function qh(s){s!==void 0&&(sa=s);let e=sa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $h(s){return s*zi}function Kh(s){return s*Wi}function Zh(s){return(s&s-1)===0&&s!==0}function Qh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ed(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:zi,RAD2DEG:Wi,generateUUID:Si,clamp:Et,euclideanModulo:Lo,mapLinear:kh,inverseLerp:zh,lerp:Vi,damp:Vh,pingpong:Hh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:Yh,randFloatSpread:jh,seededRandom:qh,degToRad:$h,radToDeg:Kh,isPowerOfTwo:Zh,ceilPowerOfTwo:Qh,floorPowerOfTwo:Jh,setQuaternionFromProperEuler:ed,normalize:wt,denormalize:li};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,i,r,o,a,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],A=i[0],p=i[3],m=i[6],v=i[1],x=i[4],_=i[7],T=i[2],S=i[5],w=i[8];return r[0]=o*A+a*v+l*T,r[3]=o*p+a*x+l*S,r[6]=o*m+a*_+l*w,r[1]=c*A+h*v+d*T,r[4]=c*p+h*x+d*S,r[7]=c*m+h*_+d*w,r[2]=u*A+f*v+g*T,r[5]=u*p+f*x+g*S,r[8]=u*m+f*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/g;return e[0]=d*A,e[1]=(i*c-h*n)*A,e[2]=(a*n-i*o)*A,e[3]=u*A,e[4]=(h*t-i*l)*A,e[5]=(i*r-a*t)*A,e[6]=f*A,e[7]=(n*l-c*t)*A,e[8]=(o*t-n*r)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Ne;function mc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function td(){const s=zs("canvas");return s.style.display="block",s}const ra={};function Ui(s){s in ra||(ra[s]=!0,console.warn(s))}function nd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function id(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Je&&(s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Je&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===un?js:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const oa=[.64,.33,.3,.6,.15,.06],aa=[.2126,.7152,.0722],la=[.3127,.329],ca=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ha=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Ei]:{primaries:oa,whitePoint:la,transfer:js,toXYZ:ca,fromXYZ:ha,luminanceCoefficients:aa,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:oa,whitePoint:la,transfer:Je,toXYZ:ca,fromXYZ:ha,luminanceCoefficients:aa,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}});let qn;class rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=zs("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=mn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let od=0;class Uo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(er(i[o].image)):r.push(er(i[o]))}else r=er(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function er(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class bt extends Xn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=wn,i=wn,r=jt,o=Tn,a=Ot,l=gn,c=bt.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Si(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=nc;bt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],A=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-A)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+A)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(f+1)/2,T=(m+1)/2,S=(h+u)/4,w=(d+A)/4,P=(g+p)/4;return x>_&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=S/n,r=w/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=S/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-A)*(d-A)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-A)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ld extends Xn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gc extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],A=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=A;return}if(d!==A||l!==u||c!==f||h!==g){let p=1-a;const m=l*u+c*f+h*g+d*A,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const T=Math.sqrt(x),S=Math.atan2(T,m*v);p=Math.sin(p*S)/T,a=Math.sin(a*S)/T}const _=a*v;if(l=l*p+u*_,c=c*p+f*_,h=h*p+g*_,d=d*p+A*_,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tr.copy(this).projectOnVector(e),this.sub(tr)}reflect(e){return this.sub(tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new I,da=new zt;class In{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(r,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),es.subVectors(this.max,Ri),$n.subVectors(e.a,Ri),Kn.subVectors(e.b,Ri),Zn.subVectors(e.c,Ri),xn.subVectors(Kn,$n),vn.subVectors(Zn,Kn),Fn.subVectors($n,Zn);let t=[0,-xn.z,xn.y,0,-vn.z,vn.y,0,-Fn.z,Fn.y,xn.z,0,-xn.x,vn.z,0,-vn.x,Fn.z,0,-Fn.x,-xn.y,xn.x,0,-vn.y,vn.x,0,-Fn.y,Fn.x,0];return!nr(t,$n,Kn,Zn,es)||(t=[1,0,0,0,1,0,0,0,1],!nr(t,$n,Kn,Zn,es))?!1:(ts.crossVectors(xn,vn),t=[ts.x,ts.y,ts.z],nr(t,$n,Kn,Zn,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new I,new I,new I,new I,new I,new I,new I,new I],Gt=new I,Ji=new In,$n=new I,Kn=new I,Zn=new I,xn=new I,vn=new I,Fn=new I,Ri=new I,es=new I,ts=new I,Ln=new I;function nr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ln.fromArray(s,r);const a=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=e.dot(Ln),c=t.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hd=new In,Ii=new I,ir=new I;class $i{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(ir)),this.expandByPoint(Ii.copy(e.center).sub(ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new I,sr=new I,ns=new I,yn=new I,rr=new I,is=new I,or=new I;class Ki{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sr.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(sr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ns),a=yn.dot(this.direction),l=-yn.dot(ns),c=yn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const A=1/h;d*=A,u*=A,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(sr).addScaledVector(ns,u),f}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){rr.subVectors(t,e),is.subVectors(n,e),or.crossVectors(rr,is);let o=this.direction.dot(or),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,e);const l=a*this.direction.dot(is.crossVectors(yn,is));if(l<0)return null;const c=a*this.direction.dot(rr.cross(yn));if(c<0||l+c>o)return null;const h=-a*yn.dot(or);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(e,t,n,i,r,o,a,l,c,h,d,u,f,g,A,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,u,f,g,A,p)}set(e,t,n,i,r,o,a,l,c,h,d,u,f,g,A,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=A,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qn.setFromMatrixColumn(e,0).length(),r=1/Qn.setFromMatrixColumn(e,1).length(),o=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,A=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-A*c,t[9]=-a*l,t[2]=A-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,A=c*d;t[0]=u+A*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=A+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,A=c*d;t[0]=u-A*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=A-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,A=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+A,t[1]=l*d,t[5]=A*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,A=a*c;t[0]=l*h,t[4]=A-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-A*d}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,A=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+A,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=A*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dd,e,ud)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Mn.crossVectors(n,Pt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Mn.crossVectors(n,Pt)),Mn.normalize(),ss.crossVectors(Pt,Mn),i[0]=Mn.x,i[4]=ss.x,i[8]=Pt.x,i[1]=Mn.y,i[5]=ss.y,i[9]=Pt.y,i[2]=Mn.z,i[6]=ss.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],A=n[6],p=n[10],m=n[14],v=n[3],x=n[7],_=n[11],T=n[15],S=i[0],w=i[4],P=i[8],E=i[12],y=i[1],R=i[5],O=i[9],N=i[13],W=i[2],V=i[6],X=i[10],z=i[14],B=i[3],J=i[7],se=i[11],ue=i[15];return r[0]=o*S+a*y+l*W+c*B,r[4]=o*w+a*R+l*V+c*J,r[8]=o*P+a*O+l*X+c*se,r[12]=o*E+a*N+l*z+c*ue,r[1]=h*S+d*y+u*W+f*B,r[5]=h*w+d*R+u*V+f*J,r[9]=h*P+d*O+u*X+f*se,r[13]=h*E+d*N+u*z+f*ue,r[2]=g*S+A*y+p*W+m*B,r[6]=g*w+A*R+p*V+m*J,r[10]=g*P+A*O+p*X+m*se,r[14]=g*E+A*N+p*z+m*ue,r[3]=v*S+x*y+_*W+T*B,r[7]=v*w+x*R+_*V+T*J,r[11]=v*P+x*O+_*X+T*se,r[15]=v*E+x*N+_*z+T*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],A=e[7],p=e[11],m=e[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+A*(+t*l*f-t*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+p*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-t*l*d+t*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],A=e[13],p=e[14],m=e[15],v=d*p*c-A*u*c+A*l*f-a*p*f-d*l*m+a*u*m,x=g*u*c-h*p*c-g*l*f+o*p*f+h*l*m-o*u*m,_=h*A*c-g*d*c+g*a*f-o*A*f-h*a*m+o*d*m,T=g*d*l-h*A*l-g*a*u+o*A*u+h*a*p-o*d*p,S=t*v+n*x+i*_+r*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=v*w,e[1]=(A*u*r-d*p*r-A*i*f+n*p*f+d*i*m-n*u*m)*w,e[2]=(a*p*r-A*l*r+A*i*c-n*p*c-a*i*m+n*l*m)*w,e[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*w,e[4]=x*w,e[5]=(h*p*r-g*u*r+g*i*f-t*p*f-h*i*m+t*u*m)*w,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*w,e[7]=(o*u*r-h*l*r+h*i*c-t*u*c-o*i*f+t*l*f)*w,e[8]=_*w,e[9]=(g*d*r-h*A*r-g*n*f+t*A*f+h*n*m-t*d*m)*w,e[10]=(o*A*r-g*a*r+g*n*c-t*A*c-o*n*m+t*a*m)*w,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*f-t*a*f)*w,e[12]=T*w,e[13]=(h*A*i-g*d*i+g*n*u-t*A*u-h*n*p+t*d*p)*w,e[14]=(g*a*i-o*A*i-g*n*l+t*A*l+o*n*p-t*a*p)*w,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*u+t*a*u)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,A=o*h,p=o*d,m=a*d,v=l*c,x=l*h,_=l*d,T=n.x,S=n.y,w=n.z;return i[0]=(1-(A+m))*T,i[1]=(f+_)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(f-_)*S,i[5]=(1-(u+m))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(g+x)*w,i[9]=(p-v)*w,i[10]=(1-(u+A))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Qn.set(i[0],i[1],i[2]).length();const o=Qn.set(i[4],i[5],i[6]).length(),a=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const c=1/r,h=1/o,d=1/a;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=h,Wt.elements[5]*=h,Wt.elements[6]*=h,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=pn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(a===pn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Os)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=pn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-r),u=(t+e)*c,f=(n+i)*h;let g,A;if(a===pn)g=(o+r)*d,A=-2*d;else if(a===Os)g=r*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=A,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qn=new I,Wt=new Be,dd=new I(0,0,0),ud=new I(1,1,1),Mn=new I,ss=new I,Pt=new I,ua=new Be,fa=new zt;class $t{constructor(e=0,t=0,n=0,i=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fa.setFromEuler(this),this.setFromQuaternion(fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fd=0;const pa=new I,Jn=new zt,an=new Be,rs=new I,Pi=new I,pd=new I,md=new zt,ma=new I(1,0,0),ga=new I(0,1,0),Aa=new I(0,0,1),_a={type:"added"},gd={type:"removed"},ei={type:"childadded",child:null},ar={type:"childremoved",child:null};class gt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new I,t=new $t,n=new zt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ne}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(ma,e)}rotateY(e){return this.rotateOnAxis(ga,e)}rotateZ(e){return this.rotateOnAxis(Aa,e)}translateOnAxis(e,t){return pa.copy(e).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ma,e)}translateY(e){return this.translateOnAxis(ga,e)}translateZ(e){return this.translateOnAxis(Aa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Pi,rs,this.up):an.lookAt(rs,Pi,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(an),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_a),ei.child=e,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gd),ar.child=e,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_a),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new I(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new I,ln=new I,lr=new I,cn=new I,ti=new I,ni=new I,xa=new I,cr=new I,hr=new I,dr=new I,ur=new lt,fr=new lt,pr=new lt;class Yt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),ln.subVectors(n,t),lr.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(ln),l=Xt.dot(lr),c=ln.dot(ln),h=ln.dot(lr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ur.setScalar(0),fr.setScalar(0),pr.setScalar(0),ur.fromBufferAttribute(e,t),fr.fromBufferAttribute(e,n),pr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ur,r.x),o.addScaledVector(fr,r.y),o.addScaledVector(pr,r.z),o}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),ln.subVectors(e,t),Xt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Xt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ti.subVectors(i,n),ni.subVectors(r,n),cr.subVectors(e,n);const l=ti.dot(cr),c=ni.dot(cr);if(l<=0&&c<=0)return t.copy(n);hr.subVectors(e,i);const h=ti.dot(hr),d=ni.dot(hr);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ti,o);dr.subVectors(e,r);const f=ti.dot(dr),g=ni.dot(dr);if(g>=0&&f<=g)return t.copy(r);const A=f*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ni,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return xa.subVectors(r,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(xa,a);const m=1/(p+A+u);return o=A*m,a=u*m,t.copy(n).addScaledVector(ti,o).addScaledVector(ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},os={h:0,s:0,l:0};function mr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Lo(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=mr(o,r,e+1/3),this.g=mr(o,r,e),this.b=mr(o,r,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Ac[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Xe.fromWorkingColorSpace(yt.copy(this),e),Math.round(Et(yt.r*255,0,255))*65536+Math.round(Et(yt.g*255,0,255))*256+Math.round(Et(yt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Mt){Xe.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(os);const n=Vi(En.h,os.h,t),i=Vi(En.s,os.s,t),r=Vi(En.l,os.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ce;Ce.NAMES=Ac;let Ad=0;class tn extends Xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Si(),this.name="",this.blending=fi,this.side=en,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Br,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ta,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==en&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ta&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _c extends tn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new I,as=new De;class qe{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=na,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==na&&(e.usage=this.usage),e}}class xc extends qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vc extends qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _d=0;const Ut=new Be,gr=new gt,ii=new I,Dt=new In,Di=new In,mt=new I;class dt extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?vc:xc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return gr.lookAt(e),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Dt.min,Di.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,Di.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(Di.min),Dt.expandByPoint(Di.max))}Dt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)mt.fromBufferAttribute(a,c),l&&(ii.fromBufferAttribute(e,c),mt.add(ii)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const c=new I,h=new I,d=new I,u=new De,f=new De,g=new De,A=new I,p=new I;function m(P,E,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(A.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(A),a[E].add(A),a[y].add(A),l[P].add(p),l[E].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){const y=v[P],R=y.start,O=y.count;for(let N=R,W=R+O;N<W;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new I,_=new I,T=new I,S=new I;function w(P){T.fromBufferAttribute(i,P),S.copy(T);const E=a[P];x.copy(E),x.sub(T.multiplyScalar(T.dot(E))).normalize(),_.crossVectors(S,E);const R=_.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,R)}for(let P=0,E=v.length;P<E;++P){const y=v[P],R=y.start,O=y.count;for(let N=R,W=R+O;N<W;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),A=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,A),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let A=0,p=l.length;A<p;A++){a.isInterleavedBufferAttribute?f=l[A]*a.data.stride+a.offset:f=l[A]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new qe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const va=new Be,Un=new Ki,ls=new $i,ya=new I,cs=new I,hs=new I,ds=new I,Ar=new I,us=new I,Ma=new I,fs=new I;class _t extends gt{constructor(e=new dt,t=new _c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ar.fromBufferAttribute(d,e),o?us.addScaledVector(Ar,h):us.addScaledVector(Ar.sub(t),h))}t.add(us)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(ls.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ls,ya)===null||Un.origin.distanceToSquared(ya)>(e.far-e.near)**2))&&(va.copy(r).invert(),Un.copy(e.ray).applyMatrix4(va),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=u.length;g<A;g++){const p=u[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=v,T=x;_<T;_+=3){const S=a.getX(_),w=a.getX(_+1),P=a.getX(_+2);i=ps(this,m,e,n,c,h,d,S,w,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(a.count,f.start+f.count);for(let p=g,m=A;p<m;p+=3){const v=a.getX(p),x=a.getX(p+1),_=a.getX(p+2);i=ps(this,o,e,n,c,h,d,v,x,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,A=u.length;g<A;g++){const p=u[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=v,T=x;_<T;_+=3){const S=_,w=_+1,P=_+2;i=ps(this,m,e,n,c,h,d,S,w,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let p=g,m=A;p<m;p+=3){const v=p,x=p+1,_=p+2;i=ps(this,o,e,n,c,h,d,v,x,_),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function xd(s,e,t,n,i,r,o,a){let l;if(e.side===St?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===en,a),l===null)return null;fs.copy(a),fs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:s}}function ps(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,cs),s.getVertexPosition(l,hs),s.getVertexPosition(c,ds);const h=xd(s,e,t,n,cs,hs,ds,Ma);if(h){const d=new I;Yt.getBarycoord(Ma,cs,hs,ds,d),i&&(h.uv=Yt.getInterpolatedAttribute(i,a,l,c,d,new De)),r&&(h.uv1=Yt.getInterpolatedAttribute(r,a,l,c,d,new De)),o&&(h.normal=Yt.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};Yt.getNormal(cs,hs,ds,u.normal),h.face=u,h.barycoord=d}return h}class bi extends dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2));function g(A,p,m,v,x,_,T,S,w,P,E){const y=_/w,R=T/P,O=_/2,N=T/2,W=S/2,V=w+1,X=P+1;let z=0,B=0;const J=new I;for(let se=0;se<X;se++){const ue=se*R-N;for(let be=0;be<V;be++){const He=be*y-O;J[A]=He*v,J[p]=ue*x,J[m]=W,c.push(J.x,J.y,J.z),J[A]=0,J[p]=0,J[m]=S>0?1:-1,h.push(J.x,J.y,J.z),d.push(be/w),d.push(1-se/P),z+=1}}for(let se=0;se<P;se++)for(let ue=0;ue<w;ue++){const be=u+ue+V*se,He=u+ue+V*(se+1),j=u+(ue+1)+V*(se+1),Q=u+(ue+1)+V*se;l.push(be,He,Q),l.push(He,j,Q),B+=6}a.addGroup(f,B,E),f+=B,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(s){const e={};for(let t=0;t<s.length;t++){const n=Mi(s[t]);for(const i in n)e[i]=n[i]}return e}function vd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const yd={clone:Mi,merge:Tt};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends tn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=vd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new I,Ea=new De,Sa=new De;class Bt extends Mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,Ea,Sa),t.subVectors(Sa,Ea)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ri=1;class Sd extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bt(si,ri,e,t);i.layers=this.layers,this.add(i);const r=new Bt(si,ri,e,t);r.layers=this.layers,this.add(r);const o=new Bt(si,ri,e,t);o.layers=this.layers,this.add(o);const a=new Bt(si,ri,e,t);a.layers=this.layers,this.add(a);const l=new Bt(si,ri,e,t);l.layers=this.layers,this.add(l);const c=new Bt(si,ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ec extends bt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bd extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ec(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bi(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:Cn});r.uniforms.tEquirect.value=t;const o=new _t(i,r),a=t.minFilter;return t.minFilter===Tn&&(t.minFilter=jt),new Sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const _r=new I,wd=new I,Td=new Ne;class bn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_r.subVectors(n,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Td.getNormalMatrix(e),i=this.coplanarPoint(_r).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new $i,ms=new I;class Bo{constructor(e=new bn,t=new bn,n=new bn,i=new bn,r=new bn,o=new bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],A=i[10],p=i[11],m=i[12],v=i[13],x=i[14],_=i[15];if(n[0].setComponents(l-r,u-c,p-f,_-m).normalize(),n[1].setComponents(l+r,u+c,p+f,_+m).normalize(),n[2].setComponents(l+o,u+h,p+g,_+v).normalize(),n[3].setComponents(l-o,u-h,p-g,_-v).normalize(),n[4].setComponents(l-a,u-d,p-A,_-x).normalize(),t===pn)n[5].setComponents(l+a,u+d,p+A,_+x).normalize();else if(t===Os)n[5].setComponents(a,d,A,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ms.x=i.normal.x>0?e.max.x:e.min.x,ms.y=i.normal.y>0?e.max.y:e.min.y,ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Cd(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],A=d[f];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++u,d[u]=A)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const A=d[f];s.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class qs extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],A=[],p=[];for(let m=0;m<h;m++){const v=m*u-o;for(let x=0;x<c;x++){const _=x*d-r;g.push(_,-v,0),A.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+c*m,_=v+c*(m+1),T=v+1+c*(m+1),S=v+1+c*m;f.push(x,_,S),f.push(_,T,S)}this.setIndex(f),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(A,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Id=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Gd=`#ifdef USE_BUMPMAP
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qd=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eu=`vec3 transformedNormal = objectNormal;
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
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",ou=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,au=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gu=`#ifdef USE_GRADIENTMAP
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
}`,Au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vu=`uniform bool receiveShadow;
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
#endif`,yu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wu=`PhysicalMaterial material;
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
#endif`,Tu=`struct PhysicalMaterial {
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
}`,Cu=`
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
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Du=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ou=`#if defined( USE_POINTS_UV )
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
#endif`,ku=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
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
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zu=`#ifdef USE_NORMALMAP
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
#endif`,Qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,Af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,Nf=`#if DEPTH_PACKING == 3200
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
}`,Bf=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#define LAMBERT
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
}`,Yf=`#define LAMBERT
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
}`,jf=`#define MATCAP
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
}`,qf=`#define MATCAP
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
}`,$f=`#define NORMAL
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
}`,Kf=`#define NORMAL
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
}`,Zf=`#define PHONG
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
}`,Qf=`#define PHONG
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
}`,Jf=`#define STANDARD
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
}`,ep=`#define STANDARD
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
}`,tp=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,op=`uniform vec3 color;
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
}`,ap=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Rd,alphahash_pars_fragment:Id,alphamap_fragment:Pd,alphamap_pars_fragment:Dd,alphatest_fragment:Fd,alphatest_pars_fragment:Ld,aomap_fragment:Ud,aomap_pars_fragment:Nd,batching_pars_vertex:Bd,batching_vertex:Od,begin_vertex:kd,beginnormal_vertex:zd,bsdfs:Vd,iridescence_fragment:Hd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:jd,color_fragment:qd,color_pars_fragment:$d,color_pars_vertex:Kd,color_vertex:Zd,common:Qd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:eu,displacementmap_pars_vertex:tu,displacementmap_vertex:nu,emissivemap_fragment:iu,emissivemap_pars_fragment:su,colorspace_fragment:ru,colorspace_pars_fragment:ou,envmap_fragment:au,envmap_common_pars_fragment:lu,envmap_pars_fragment:cu,envmap_pars_vertex:hu,envmap_physical_pars_fragment:yu,envmap_vertex:du,fog_vertex:uu,fog_pars_vertex:fu,fog_fragment:pu,fog_pars_fragment:mu,gradientmap_pars_fragment:gu,lightmap_pars_fragment:Au,lights_lambert_fragment:_u,lights_lambert_pars_fragment:xu,lights_pars_begin:vu,lights_toon_fragment:Mu,lights_toon_pars_fragment:Eu,lights_phong_fragment:Su,lights_phong_pars_fragment:bu,lights_physical_fragment:wu,lights_physical_pars_fragment:Tu,lights_fragment_begin:Cu,lights_fragment_maps:Ru,lights_fragment_end:Iu,logdepthbuf_fragment:Pu,logdepthbuf_pars_fragment:Du,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:Lu,map_fragment:Uu,map_pars_fragment:Nu,map_particle_fragment:Bu,map_particle_pars_fragment:Ou,metalnessmap_fragment:ku,metalnessmap_pars_fragment:zu,morphinstance_vertex:Vu,morphcolor_vertex:Hu,morphnormal_vertex:Gu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Xu,normal_fragment_begin:Yu,normal_fragment_maps:ju,normal_pars_fragment:qu,normal_pars_vertex:$u,normal_vertex:Ku,normalmap_pars_fragment:Zu,clearcoat_normal_fragment_begin:Qu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:of,dithering_fragment:af,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:uf,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:Af,skinnormal_vertex:_f,specularmap_fragment:xf,specularmap_pars_fragment:vf,tonemapping_fragment:yf,tonemapping_pars_fragment:Mf,transmission_fragment:Ef,transmission_pars_fragment:Sf,uv_pars_fragment:bf,uv_pars_vertex:wf,uv_vertex:Tf,worldpos_vertex:Cf,background_vert:Rf,background_frag:If,backgroundCube_vert:Pf,backgroundCube_frag:Df,cube_vert:Ff,cube_frag:Lf,depth_vert:Uf,depth_frag:Nf,distanceRGBA_vert:Bf,distanceRGBA_frag:Of,equirect_vert:kf,equirect_frag:zf,linedashed_vert:Vf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:Yf,meshmatcap_vert:jf,meshmatcap_frag:qf,meshnormal_vert:$f,meshnormal_frag:Kf,meshphong_vert:Zf,meshphong_frag:Qf,meshphysical_vert:Jf,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:op,sprite_vert:ap,sprite_frag:lp},re={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Zt={basic:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Tt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Tt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Tt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Tt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Tt([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Tt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Tt([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Tt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Tt([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Tt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Tt([re.lights,re.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Zt.physical={uniforms:Tt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const gs={r:0,b:0,g:0},Bn=new $t,cp=new Be;function hp(s,e,t,n,i,r,o){const a=new Ce(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function A(v){let x=!1;const _=g(v);_===null?m(a,l):_&&_.isColor&&(m(_,1),x=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===Ys)?(h===void 0&&(h=new _t(new bi(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Mi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Bn.copy(x.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(Bn)),h.material.toneMapped=Xe.getTransfer(_.colorSpace)!==Je,(d!==_||u!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new _t(new qs(2,2),new Pn({name:"BackgroundMaterial",uniforms:Mi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(_.colorSpace)!==Je,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,x){v.getRGB(gs,yc(s)),n.buffers.color.setClear(gs.r,gs.g,gs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:A,addToRenderList:p}}function dp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(y,R,O,N,W){let V=!1;const X=d(N,O,R);r!==X&&(r=X,c(r.object)),V=f(y,N,O,W),V&&g(y,N,O,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(y,R,O,N),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,R,O){const N=O.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let V=W[R.id];V===void 0&&(V={},W[R.id]=V);let X=V[N];return X===void 0&&(X=u(l()),V[N]=X),X}function u(y){const R=[],O=[],N=[];for(let W=0;W<t;W++)R[W]=0,O[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,R,O,N){const W=r.attributes,V=R.attributes;let X=0;const z=O.getAttributes();for(const B in z)if(z[B].location>=0){const se=W[B];let ue=V[B];if(ue===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),se===void 0||se.attribute!==ue||ue&&se.data!==ue.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function g(y,R,O,N){const W={},V=R.attributes;let X=0;const z=O.getAttributes();for(const B in z)if(z[B].location>=0){let se=V[B];se===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(se=y.instanceColor));const ue={};ue.attribute=se,se&&se.data&&(ue.data=se.data),W[B]=ue,X++}r.attributes=W,r.attributesNum=X,r.index=N}function A(){const y=r.newAttributes;for(let R=0,O=y.length;R<O;R++)y[R]=0}function p(y){m(y,0)}function m(y,R){const O=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;O[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),W[y]!==R&&(s.vertexAttribDivisor(y,R),W[y]=R)}function v(){const y=r.newAttributes,R=r.enabledAttributes;for(let O=0,N=R.length;O<N;O++)R[O]!==y[O]&&(s.disableVertexAttribArray(O),R[O]=0)}function x(y,R,O,N,W,V,X){X===!0?s.vertexAttribIPointer(y,R,O,W,V):s.vertexAttribPointer(y,R,O,N,W,V)}function _(y,R,O,N){A();const W=N.attributes,V=O.getAttributes(),X=R.defaultAttributeValues;for(const z in V){const B=V[z];if(B.location>=0){let J=W[z];if(J===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const se=J.normalized,ue=J.itemSize,be=e.get(J);if(be===void 0)continue;const He=be.buffer,j=be.type,Q=be.bytesPerElement,le=j===s.INT||j===s.UNSIGNED_INT||J.gpuType===To;if(J.isInterleavedBufferAttribute){const ne=J.data,Ee=ne.stride,Te=J.offset;if(ne.isInstancedInterleavedBuffer){for(let ie=0;ie<B.locationSize;ie++)m(B.location+ie,ne.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<B.locationSize;ie++)p(B.location+ie);s.bindBuffer(s.ARRAY_BUFFER,He);for(let ie=0;ie<B.locationSize;ie++)x(B.location+ie,ue/B.locationSize,j,se,Ee*Q,(Te+ue/B.locationSize*ie)*Q,le)}else{if(J.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)m(B.location+ne,J.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ne=0;ne<B.locationSize;ne++)p(B.location+ne);s.bindBuffer(s.ARRAY_BUFFER,He);for(let ne=0;ne<B.locationSize;ne++)x(B.location+ne,ue/B.locationSize,j,se,ue*Q,ue/B.locationSize*ne*Q,le)}}else if(X!==void 0){const se=X[z];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(B.location,se);break;case 3:s.vertexAttrib3fv(B.location,se);break;case 4:s.vertexAttrib4fv(B.location,se);break;default:s.vertexAttrib1fv(B.location,se)}}}}v()}function T(){P();for(const y in n){const R=n[y];for(const O in R){const N=R[O];for(const W in N)h(N[W].object),delete N[W];delete R[O]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const O in R){const N=R[O];for(const W in N)h(N[W].object),delete N[W];delete R[O]}delete n[y.id]}function w(y){for(const R in n){const O=n[R];if(O[y.id]===void 0)continue;const N=O[y.id];for(const W in N)h(N[W].object),delete N[W];delete O[y.id]}}function P(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:p,disableUnusedAttributes:v}}function up(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let A=0;A<d;A++)g+=h[A]*u[A];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fp(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Ot&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==gn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!P)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:S}}function pp(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new bn,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,A=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,x=v*4;let _=m.clippingState||null;l.value=_,_=h(g,u,x,f);for(let T=0;T!==x;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const A=d!==null?d.length:0;let p=null;if(A!==0){if(p=l.value,g!==!0||p===null){const m=f+A*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,_=f;x!==A;++x,_+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,p}}function mp(s){let e=new WeakMap;function t(o,a){return a===Xr?o.mapping=_i:a===Yr&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xr||a===Yr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bd(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class bc extends Mc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,ba=[.125,.215,.35,.446,.526,.582],Vn=20,xr=new bc,wa=new Ce;let vr=null,yr=0,Mr=0,Er=!1;const kn=(1+Math.sqrt(5))/2,oi=1/kn,Ta=[new I(-kn,oi,0),new I(kn,oi,0),new I(-oi,0,kn),new I(oi,0,kn),new I(0,kn,-oi),new I(0,kn,oi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vr,yr,Mr),this._renderer.xr.enabled=Er,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:qi,format:Ot,colorSpace:Ei,depthBuffer:!1},i=Ra(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=Ap(r,e,t)}return i}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,n,i){const a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(wa),h.toneMapping=Rn,h.autoClear=!1;const f=new _c({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new _t(new bi,f);let A=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,A=!0):(f.color.copy(wa),A=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;As(i,v*x,m>2?x:0,x,x),h.setRenderTarget(i),A&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_i||e.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ta[(i-r-1)%Ta.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new _t(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vn-1),A=r/g,p=isFinite(r)?1+Math.floor(h*A):Vn;p>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const m=[];let v=0;for(let w=0;w<Vn;++w){const P=w/A,E=Math.exp(-P*P/2);m.push(E),w===0?v+=E:w<p&&(v+=2*E)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const _=this._sizeLods[i],T=3*_*(i>x-hi?i-x+hi:0),S=4*(this._cubeSize-_);As(t,T,S,3*_,2*_),l.setRenderTarget(t),l.render(d,xr)}}function gp(s){const e=[],t=[],n=[];let i=s;const r=s-hi+1+ba.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-hi?l=ba[o-s+hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,A=3,p=2,m=1,v=new Float32Array(A*g*f),x=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let S=0;S<f;S++){const w=S%3*2/3-1,P=S>2?0:-1,E=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(E,A*g*S),x.set(u,p*g*S);const y=[S,S,S,S,S,S];_.set(y,m*g*S)}const T=new dt;T.setAttribute("position",new qe(v,A)),T.setAttribute("uv",new qe(x,p)),T.setAttribute("faceIndex",new qe(_,m)),e.push(T),i>hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ra(s,e,t){const n=new Gn(s,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ap(s,e,t){const n=new Float32Array(Vn),i=new I(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ia(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Pa(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Oo(){return`

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
	`}function _p(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xr||l===Yr,h=l===_i||l===xi;if(c||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Ca(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ca(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vp(s,e,t,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const A=u.morphAttributes[g];for(let p=0,m=A.length;p<m;p++)e.remove(A[p])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const A=f[g];for(let p=0,m=A.length;p<m;p++)e.update(A[p],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let A=0;if(f!==null){const v=f.array;A=f.version;for(let x=0,_=v.length;x<_;x+=3){const T=v[x+0],S=v[x+1],w=v[x+2];u.push(T,S,S,w,w,T)}}else if(g!==void 0){const v=g.array;A=g.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const T=x+0,S=x+1,w=x+2;u.push(T,S,S,w,w,T)}}else return;const p=new(mc(u)?vc:xc)(u,1);p.version=A;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function yp(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function d(u,f,g,A){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],A[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,A,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*A[v];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Mp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ep(s,e,t){const n=new WeakMap,i=new lt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),A===!0&&(_=2),p===!0&&(_=3);let T=a.attributes.position.count*_,S=1;T>e.maxTextureSize&&(S=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const w=new Float32Array(T*S*4*d),P=new gc(w,T,S,d);P.type=fn,P.needsUpdate=!0;const E=_*4;for(let R=0;R<d;R++){const O=m[R],N=v[R],W=x[R],V=T*S*4*R;for(let X=0;X<O.count;X++){const z=X*E;g===!0&&(i.fromBufferAttribute(O,X),w[V+z+0]=i.x,w[V+z+1]=i.y,w[V+z+2]=i.z,w[V+z+3]=0),A===!0&&(i.fromBufferAttribute(N,X),w[V+z+4]=i.x,w[V+z+5]=i.y,w[V+z+6]=i.z,w[V+z+7]=0),p===!0&&(i.fromBufferAttribute(W,X),w[V+z+8]=i.x,w[V+z+9]=i.y,w[V+z+10]=i.z,w[V+z+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new De(T,S)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const A=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",A),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Sp(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class wc extends bt{constructor(e,t,n,i,r,o,a,l,c,h=pi){if(h!==pi&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=Hn),n===void 0&&h===yi&&(n=vi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tc=new bt,Da=new wc(1,1),Cc=new gc,Rc=new cd,Ic=new Ec,Fa=[],La=[],Ua=new Float32Array(16),Na=new Float32Array(9),Ba=new Float32Array(4);function wi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Fa[i];if(r===void 0&&(r=new Float32Array(i),Fa[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $s(s,e){let t=La[e];t===void 0&&(t=new Int32Array(e),La[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function bp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function Tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function Cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function Rp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ba.set(n),s.uniformMatrix2fv(this.addr,!1,Ba),pt(t,n)}}function Ip(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Na.set(n),s.uniformMatrix3fv(this.addr,!1,Na),pt(t,n)}}function Pp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ua.set(n),s.uniformMatrix4fv(this.addr,!1,Ua),pt(t,n)}}function Dp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function Lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function Up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function Np(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function Op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function kp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function zp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Da.compareFunction=pc,r=Da):r=Tc,t.setTexture2D(e||r,i)}function Vp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rc,i)}function Hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ic,i)}function Gp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cc,i)}function Wp(s){switch(s){case 5126:return bp;case 35664:return wp;case 35665:return Tp;case 35666:return Cp;case 35674:return Rp;case 35675:return Ip;case 35676:return Pp;case 5124:case 35670:return Dp;case 35667:case 35671:return Fp;case 35668:case 35672:return Lp;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Bp;case 36295:return Op;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(s,e){s.uniform1fv(this.addr,e)}function Yp(s,e){const t=wi(e,this.size,2);s.uniform2fv(this.addr,t)}function jp(s,e){const t=wi(e,this.size,3);s.uniform3fv(this.addr,t)}function qp(s,e){const t=wi(e,this.size,4);s.uniform4fv(this.addr,t)}function $p(s,e){const t=wi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Kp(s,e){const t=wi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Zp(s,e){const t=wi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Qp(s,e){s.uniform1iv(this.addr,e)}function Jp(s,e){s.uniform2iv(this.addr,e)}function em(s,e){s.uniform3iv(this.addr,e)}function tm(s,e){s.uniform4iv(this.addr,e)}function nm(s,e){s.uniform1uiv(this.addr,e)}function im(s,e){s.uniform2uiv(this.addr,e)}function sm(s,e){s.uniform3uiv(this.addr,e)}function rm(s,e){s.uniform4uiv(this.addr,e)}function om(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Tc,r[o])}function am(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Rc,r[o])}function lm(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ic,r[o])}function cm(s,e,t){const n=this.cache,i=e.length,r=$s(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Cc,r[o])}function hm(s){switch(s){case 5126:return Xp;case 35664:return Yp;case 35665:return jp;case 35666:return qp;case 35674:return $p;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return Qp;case 35667:case 35671:return Jp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class dm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wp(t.type)}}class um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hm(t.type)}}class fm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Oa(s,e){s.seq.push(e),s.map[e.id]=e}function pm(s,e,t){const n=s.name,i=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),o=Sr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Oa(t,c===void 0?new dm(a,s,e):new um(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new fm(a),Oa(t,d)),t=d}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);pm(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ka(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const mm=37297;let gm=0;function Am(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const za=new Ne;function _m(s){Xe._getMatrix(za,Xe.workingColorSpace,s);const e=`mat3( ${za.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case js:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Va(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Am(s.getShaderSource(e),o)}else return i}function xm(s,e){const t=_m(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function vm(s,e){let t;switch(e){case vh:t="Linear";break;case yh:t="Reinhard";break;case Mh:t="Cineon";break;case Eh:t="ACESFilmic";break;case bh:t="AgX";break;case wh:t="Neutral";break;case Sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _s=new I;function ym(){Xe.getLuminanceCoefficients(_s);const s=_s.x.toFixed(4),e=_s.y.toFixed(4),t=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function Em(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ni(s){return s!==""}function Ha(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ga(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(s){return s.replace(bm,Tm)}const wm=new Map;function Tm(s,e){let t=ke[e];if(t===void 0){const n=wm.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vo(t)}const Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wa(s){return s.replace(Cm,Rm)}function Rm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xa(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Im(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Pm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case xi:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Fm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case _h:e="ENVMAP_BLENDING_MIX";break;case xh:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Um(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Im(t),c=Pm(t),h=Dm(t),d=Fm(t),u=Lm(t),f=Mm(t),g=Em(r),A=i.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),m.length>0&&(m+=`
`)):(p=[Xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),m=[Xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Rn?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,xm("linearToOutputTexel",t.outputColorSpace),ym(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),o=vo(o),o=Ha(o,t),o=Ga(o,t),a=vo(a),a=Ha(a,t),a=Ga(a,t),o=Wa(o),a=Wa(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+p+o,_=v+m+a,T=ka(i,i.VERTEX_SHADER,x),S=ka(i,i.FRAGMENT_SHADER,_);i.attachShader(A,T),i.attachShader(A,S),t.index0AttributeName!==void 0?i.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function w(R){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(A).trim(),N=i.getShaderInfoLog(T).trim(),W=i.getShaderInfoLog(S).trim();let V=!0,X=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,T,S);else{const z=Va(i,T,"vertex"),B=Va(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+z+`
`+B)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||W==="")&&(X=!1);X&&(R.diagnostics={runnable:V,programLog:O,vertexShader:{log:N,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(T),i.deleteShader(S),P=new Us(i,A),E=Sm(i,A)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(A,mm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gm++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=T,this.fragmentShader=S,this}let Nm=0;class Bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Om(e),t.set(e,n)),n}}class Om{constructor(e){this.id=Nm++,this.code=e,this.usedTimes=0}}function km(s,e,t,n,i,r,o){const a=new No,l=new Bm,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,y,R,O,N){const W=O.fog,V=N.geometry,X=E.isMeshStandardMaterial?O.environment:null,z=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),B=z&&z.mapping===Ys?z.image.height:null,J=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=se!==void 0?se.length:0;let be=0;V.morphAttributes.position!==void 0&&(be=1),V.morphAttributes.normal!==void 0&&(be=2),V.morphAttributes.color!==void 0&&(be=3);let He,j,Q,le;if(J){const Ze=Zt[J];He=Ze.vertexShader,j=Ze.fragmentShader}else He=E.vertexShader,j=E.fragmentShader,l.update(E),Q=l.getVertexShaderID(E),le=l.getFragmentShaderID(E);const ne=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Te=N.isInstancedMesh===!0,ie=N.isBatchedMesh===!0,xe=!!E.map,Re=!!E.matcap,Qe=!!z,F=!!E.aoMap,ct=!!E.lightMap,Fe=!!E.bumpMap,ze=!!E.normalMap,Me=!!E.displacementMap,it=!!E.emissiveMap,Se=!!E.metalnessMap,C=!!E.roughnessMap,M=E.anisotropy>0,k=E.clearcoat>0,$=E.dispersion>0,Z=E.iridescence>0,q=E.sheen>0,ve=E.transmission>0,ae=M&&!!E.anisotropyMap,fe=k&&!!E.clearcoatMap,We=k&&!!E.clearcoatNormalMap,ee=k&&!!E.clearcoatRoughnessMap,pe=Z&&!!E.iridescenceMap,we=Z&&!!E.iridescenceThicknessMap,Ie=q&&!!E.sheenColorMap,me=q&&!!E.sheenRoughnessMap,Ge=!!E.specularMap,Oe=!!E.specularColorMap,tt=!!E.specularIntensityMap,D=ve&&!!E.transmissionMap,oe=ve&&!!E.thicknessMap,Y=!!E.gradientMap,K=!!E.alphaMap,de=E.alphaTest>0,ce=!!E.alphaHash,Le=!!E.extensions;let at=Rn;E.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(at=s.toneMapping);const xt={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:He,fragmentShader:j,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:le,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ie,batchingColor:ie&&N._colorsTexture!==null,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ei,alphaToCoverage:!!E.alphaToCoverage,map:xe,matcap:Re,envMap:Qe,envMapMode:Qe&&z.mapping,envMapCubeUVHeight:B,aoMap:F,lightMap:ct,bumpMap:Fe,normalMap:ze,displacementMap:u&&Me,emissiveMap:it,normalMapObjectSpace:ze&&E.normalMapType===Ph,normalMapTangentSpace:ze&&E.normalMapType===Fo,metalnessMap:Se,roughnessMap:C,anisotropy:M,anisotropyMap:ae,clearcoat:k,clearcoatMap:fe,clearcoatNormalMap:We,clearcoatRoughnessMap:ee,dispersion:$,iridescence:Z,iridescenceMap:pe,iridescenceThicknessMap:we,sheen:q,sheenColorMap:Ie,sheenRoughnessMap:me,specularMap:Ge,specularColorMap:Oe,specularIntensityMap:tt,transmission:ve,transmissionMap:D,thicknessMap:oe,gradientMap:Y,opaque:E.transparent===!1&&E.blending===fi&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:de,alphaHash:ce,combine:E.combine,mapUv:xe&&A(E.map.channel),aoMapUv:F&&A(E.aoMap.channel),lightMapUv:ct&&A(E.lightMap.channel),bumpMapUv:Fe&&A(E.bumpMap.channel),normalMapUv:ze&&A(E.normalMap.channel),displacementMapUv:Me&&A(E.displacementMap.channel),emissiveMapUv:it&&A(E.emissiveMap.channel),metalnessMapUv:Se&&A(E.metalnessMap.channel),roughnessMapUv:C&&A(E.roughnessMap.channel),anisotropyMapUv:ae&&A(E.anisotropyMap.channel),clearcoatMapUv:fe&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:we&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:me&&A(E.sheenRoughnessMap.channel),specularMapUv:Ge&&A(E.specularMap.channel),specularColorMapUv:Oe&&A(E.specularColorMap.channel),specularIntensityMapUv:tt&&A(E.specularIntensityMap.channel),transmissionMapUv:D&&A(E.transmissionMap.channel),thicknessMapUv:oe&&A(E.thicknessMap.channel),alphaMapUv:K&&A(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ze||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(xe||K),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ee,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:xe&&E.map.isVideoTexture===!0&&Xe.getTransfer(E.map.colorSpace)===Je,decodeVideoTextureEmissive:it&&E.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(E.emissiveMap.colorSpace)===Je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Jt,flipSided:E.side===St,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function m(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)y.push(R),y.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(v(y,E),x(y,E),y.push(s.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function v(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const y=g[E.type];let R;if(y){const O=Zt[y];R=yd.clone(O.uniforms)}else R=E.uniforms;return R}function T(E,y){let R;for(let O=0,N=h.length;O<N;O++){const W=h[O];if(W.cacheKey===y){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Um(s,y,E,r),h.push(R)),R}function S(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function w(E){l.remove(E)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:P}}function zm(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ya(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ja(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,g,A,p){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:A,group:p},s[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=A,m.group=p),e++,m}function a(d,u,f,g,A,p){const m=o(d,u,f,g,A,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,u,f,g,A,p){const m=o(d,u,f,g,A,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||Vm),n.length>1&&n.sort(u||Ya),i.length>1&&i.sort(u||Ya)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Hm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ja,s.set(n,[o])):i>=r.length?(o=new ja,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ce};break;case"SpotLight":t={position:new I,direction:new I,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function Wm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Xm=0;function Ym(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function jm(s){const e=new Gm,t=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Be,o=new Be;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,A=0,p=0,m=0,v=0,x=0,_=0,T=0,S=0,w=0;c.sort(Ym);for(let E=0,y=c.length;E<y;E++){const R=c[E],O=R.color,N=R.intensity,W=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*N,d+=O.g*N,u+=O.b*N;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],N);w++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,B=t.get(R);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=X,f++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(O).multiplyScalar(N),X.distance=W,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[A]=X;const z=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,z.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[A]=z.matrix,R.castShadow){const B=t.get(R);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.spotShadow[A]=B,n.spotShadowMap[A]=V,_++}A++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(O).multiplyScalar(N),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=X,p++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const z=R.shadow,B=t.get(R);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(N),X.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[m]=X,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==A||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=A,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=w,n.version=Xm++)}function l(c,h){let d=0,u=0,f=0,g=0,A=0;const p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const x=c[m];if(x.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),d++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){const _=n.hemi[A];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(p),A++}}}return{setup:a,setupView:l,state:n}}function qa(s){const e=new jm(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qm(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new qa(s),e.set(i,[a])):r>=o.length?(a=new qa(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class $m extends tn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Km extends tn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qm=`uniform sampler2D shadow_pass;
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
}`;function Jm(s,e,t){let n=new Bo;const i=new De,r=new De,o=new lt,a=new $m({depthPacking:Ih}),l=new Km,c={},h=t.maxTextureSize,d={[en]:St,[St]:en,[Jt]:Jt},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Zm,fragmentShader:Qm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new dt;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _t(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let m=this.type;this.render=function(S,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const E=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Cn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=m!==dn&&this.type===dn,W=m===dn&&this.type!==dn;for(let V=0,X=S.length;V<X;V++){const z=S[V],B=z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const J=B.getFrameExtents();if(i.multiply(J),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||N===!0||W===!0){const ue=this.type!==dn?{minFilter:kt,magFilter:kt}:{};B.map!==null&&B.map.dispose(),B.map=new Gn(i.x,i.y,ue),B.map.texture.name=z.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const se=B.getViewportCount();for(let ue=0;ue<se;ue++){const be=B.getViewport(ue);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),O.viewport(o),B.updateMatrices(z,ue),n=B.getFrustum(),_(w,P,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===dn&&v(B,P),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(E,y,R)};function v(S,w){const P=e.update(A);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Gn(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,P,u,A,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,P,f,A,null)}function x(S,w,P,E){let y=null;const R=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)y=R;else if(y=P.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=y.uuid,N=w.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let V=W[N];V===void 0&&(V=y.clone(),W[N]=V,w.addEventListener("dispose",T)),y=V}if(y.visible=w.visible,y.wireframe=w.wireframe,E===dn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=P}return y}function _(S,w,P,E,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===dn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const N=e.update(S),W=S.material;if(Array.isArray(W)){const V=N.groups;for(let X=0,z=V.length;X<z;X++){const B=V[X],J=W[B.materialIndex];if(J&&J.visible){const se=x(S,J,E,y);S.onBeforeShadow(s,S,w,P,N,se,B),s.renderBufferDirect(P,null,N,se,S,B),S.onAfterShadow(s,S,w,P,N,se,B)}}}else if(W.visible){const V=x(S,W,E,y);S.onBeforeShadow(s,S,w,P,N,V,null),s.renderBufferDirect(P,null,N,V,S,null),S.onAfterShadow(s,S,w,P,N,V,null)}}const O=S.children;for(let N=0,W=O.length;N<W;N++)_(O[N],w,P,E,y)}function T(S){S.target.removeEventListener("dispose",T);for(const P in c){const E=c[P],y=S.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const eg={[Or]:kr,[zr]:Gr,[Vr]:Wr,[Ai]:Hr,[kr]:Or,[Gr]:zr,[Wr]:Vr,[Hr]:Ai};function tg(s,e){function t(){let D=!1;const oe=new lt;let Y=null;const K=new lt(0,0,0,0);return{setMask:function(de){Y!==de&&!D&&(s.colorMask(de,de,de,de),Y=de)},setLocked:function(de){D=de},setClear:function(de,ce,Le,at,xt){xt===!0&&(de*=at,ce*=at,Le*=at),oe.set(de,ce,Le,at),K.equals(oe)===!1&&(s.clearColor(de,ce,Le,at),K.copy(oe))},reset:function(){D=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,Y=null,K=null,de=null;return{setReversed:function(ce){if(oe!==ce){const Le=e.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const at=de;de=null,this.setClear(at)}oe=ce},getReversed:function(){return oe},setTest:function(ce){ce?ne(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!D&&(s.depthMask(ce),Y=ce)},setFunc:function(ce){if(oe&&(ce=eg[ce]),K!==ce){switch(ce){case Or:s.depthFunc(s.NEVER);break;case kr:s.depthFunc(s.ALWAYS);break;case zr:s.depthFunc(s.LESS);break;case Ai:s.depthFunc(s.LEQUAL);break;case Vr:s.depthFunc(s.EQUAL);break;case Hr:s.depthFunc(s.GEQUAL);break;case Gr:s.depthFunc(s.GREATER);break;case Wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ce}},setLocked:function(ce){D=ce},setClear:function(ce){de!==ce&&(oe&&(ce=1-ce),s.clearDepth(ce),de=ce)},reset:function(){D=!1,Y=null,K=null,de=null,oe=!1}}}function i(){let D=!1,oe=null,Y=null,K=null,de=null,ce=null,Le=null,at=null,xt=null;return{setTest:function(Ze){D||(Ze?ne(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(Ze){oe!==Ze&&!D&&(s.stencilMask(Ze),oe=Ze)},setFunc:function(Ze,Vt,nn){(Y!==Ze||K!==Vt||de!==nn)&&(s.stencilFunc(Ze,Vt,nn),Y=Ze,K=Vt,de=nn)},setOp:function(Ze,Vt,nn){(ce!==Ze||Le!==Vt||at!==nn)&&(s.stencilOp(Ze,Vt,nn),ce=Ze,Le=Vt,at=nn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){xt!==Ze&&(s.clearStencil(Ze),xt=Ze)},reset:function(){D=!1,oe=null,Y=null,K=null,de=null,ce=null,Le=null,at=null,xt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,A=!1,p=null,m=null,v=null,x=null,_=null,T=null,S=null,w=new Ce(0,0,0),P=0,E=!1,y=null,R=null,O=null,N=null,W=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,z=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=z>=2);let J=null,se={};const ue=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),He=new lt().fromArray(ue),j=new lt().fromArray(be);function Q(D,oe,Y,K){const de=new Uint8Array(4),ce=s.createTexture();s.bindTexture(D,ce),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<Y;Le++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(oe+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return ce}const le={};le[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(Ai),Fe(!1),ze(Zo),ne(s.CULL_FACE),F(Cn);function ne(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ee(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Te(D,oe){return d[D]!==oe?(s.bindFramebuffer(D,oe),d[D]=oe,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=oe),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function ie(D,oe){let Y=f,K=!1;if(D){Y=u.get(oe),Y===void 0&&(Y=[],u.set(oe,Y));const de=D.textures;if(Y.length!==de.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,Le=de.length;ce<Le;ce++)Y[ce]=s.COLOR_ATTACHMENT0+ce;Y.length=de.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function xe(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Re={[zn]:s.FUNC_ADD,[th]:s.FUNC_SUBTRACT,[nh]:s.FUNC_REVERSE_SUBTRACT};Re[ih]=s.MIN,Re[sh]=s.MAX;const Qe={[rh]:s.ZERO,[oh]:s.ONE,[ah]:s.SRC_COLOR,[Nr]:s.SRC_ALPHA,[fh]:s.SRC_ALPHA_SATURATE,[dh]:s.DST_COLOR,[ch]:s.DST_ALPHA,[lh]:s.ONE_MINUS_SRC_COLOR,[Br]:s.ONE_MINUS_SRC_ALPHA,[uh]:s.ONE_MINUS_DST_COLOR,[hh]:s.ONE_MINUS_DST_ALPHA,[ph]:s.CONSTANT_COLOR,[mh]:s.ONE_MINUS_CONSTANT_COLOR,[gh]:s.CONSTANT_ALPHA,[Ah]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,oe,Y,K,de,ce,Le,at,xt,Ze){if(D===Cn){A===!0&&(Ee(s.BLEND),A=!1);return}if(A===!1&&(ne(s.BLEND),A=!0),D!==eh){if(D!==p||Ze!==E){if((m!==zn||_!==zn)&&(s.blendEquation(s.FUNC_ADD),m=zn,_=zn),Ze)switch(D){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qo:s.blendFunc(s.ONE,s.ONE);break;case Jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ea:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ea:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,x=null,T=null,S=null,w.set(0,0,0),P=0,p=D,E=Ze}return}de=de||oe,ce=ce||Y,Le=Le||K,(oe!==m||de!==_)&&(s.blendEquationSeparate(Re[oe],Re[de]),m=oe,_=de),(Y!==v||K!==x||ce!==T||Le!==S)&&(s.blendFuncSeparate(Qe[Y],Qe[K],Qe[ce],Qe[Le]),v=Y,x=K,T=ce,S=Le),(at.equals(w)===!1||xt!==P)&&(s.blendColor(at.r,at.g,at.b,xt),w.copy(at),P=xt),p=D,E=!1}function ct(D,oe){D.side===Jt?Ee(s.CULL_FACE):ne(s.CULL_FACE);let Y=D.side===St;oe&&(Y=!Y),Fe(Y),D.blending===fi&&D.transparent===!1?F(Cn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),it(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function ze(D){D!==Qc?(ne(s.CULL_FACE),D!==R&&(D===Zo?s.cullFace(s.BACK):D===Jc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),R=D}function Me(D){D!==O&&(X&&s.lineWidth(D),O=D)}function it(D,oe,Y){D?(ne(s.POLYGON_OFFSET_FILL),(N!==oe||W!==Y)&&(s.polygonOffset(oe,Y),N=oe,W=Y)):Ee(s.POLYGON_OFFSET_FILL)}function Se(D){D?ne(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+V-1),J!==D&&(s.activeTexture(D),J=D)}function M(D,oe,Y){Y===void 0&&(J===null?Y=s.TEXTURE0+V-1:Y=J);let K=se[Y];K===void 0&&(K={type:void 0,texture:void 0},se[Y]=K),(K.type!==D||K.texture!==oe)&&(J!==Y&&(s.activeTexture(Y),J=Y),s.bindTexture(D,oe||le[D]),K.type=D,K.texture=oe)}function k(){const D=se[J];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){He.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),He.copy(D))}function me(D){j.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function Ge(D,oe){let Y=c.get(oe);Y===void 0&&(Y=new WeakMap,c.set(oe,Y));let K=Y.get(D);K===void 0&&(K=s.getUniformBlockIndex(oe,D.name),Y.set(D,K))}function Oe(D,oe){const K=c.get(oe).get(D);l.get(oe)!==K&&(s.uniformBlockBinding(oe,K,D.__bindingPointIndex),l.set(oe,K))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,se={},d={},u=new WeakMap,f=[],g=null,A=!1,p=null,m=null,v=null,x=null,_=null,T=null,S=null,w=new Ce(0,0,0),P=0,E=!1,y=null,R=null,O=null,N=null,W=null,He.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Ee,bindFramebuffer:Te,drawBuffers:ie,useProgram:xe,setBlending:F,setMaterial:ct,setFlipSided:Fe,setCullFace:ze,setLineWidth:Me,setPolygonOffset:it,setScissorTest:Se,activeTexture:C,bindTexture:M,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:pe,texImage3D:we,updateUBOMapping:Ge,uniformBlockBinding:Oe,texStorage2D:We,texStorage3D:ee,texSubImage2D:q,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Ie,viewport:me,reset:tt}}function $a(s,e,t,n){const i=ng(n);switch(t){case ac:return s*e;case cc:return s*e;case hc:return s*e*2;case dc:return s*e/i.components*i.byteLength;case Io:return s*e/i.components*i.byteLength;case uc:return s*e*2/i.components*i.byteLength;case Po:return s*e*2/i.components*i.byteLength;case lc:return s*e*3/i.components*i.byteLength;case Ot:return s*e*4/i.components*i.byteLength;case Do:return s*e*4/i.components*i.byteLength;case Is:case Ps:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Fs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qr:case Kr:return Math.max(s,16)*Math.max(e,8)/4;case jr:case $r:return Math.max(s,8)*Math.max(e,8)/2;case Zr:case Qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ro:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case oo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ls:case mo:case go:return Math.ceil(s/4)*Math.ceil(e/4)*16;case fc:case Ao:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _o:case xo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(s){switch(s){case gn:case sc:return{byteLength:1,components:1};case Gi:case rc:case qi:return{byteLength:2,components:1};case Co:case Ro:return{byteLength:2,components:4};case Hn:case To:case fn:return{byteLength:4,components:1};case oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ig(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):zs("canvas")}function A(C,M,k){let $=1;const Z=Se(C);if((Z.width>k||Z.height>k)&&($=k/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor($*Z.width),ve=Math.floor($*Z.height);d===void 0&&(d=g(q,ve));const ae=M?g(q,ve):d;return ae.width=q,ae.height=ve,ae.getContext("2d").drawImage(C,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ve+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,M,k,$,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===s.RED&&(k===s.FLOAT&&(q=s.R32F),k===s.HALF_FLOAT&&(q=s.R16F),k===s.UNSIGNED_BYTE&&(q=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.R8UI),k===s.UNSIGNED_SHORT&&(q=s.R16UI),k===s.UNSIGNED_INT&&(q=s.R32UI),k===s.BYTE&&(q=s.R8I),k===s.SHORT&&(q=s.R16I),k===s.INT&&(q=s.R32I)),M===s.RG&&(k===s.FLOAT&&(q=s.RG32F),k===s.HALF_FLOAT&&(q=s.RG16F),k===s.UNSIGNED_BYTE&&(q=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RG8UI),k===s.UNSIGNED_SHORT&&(q=s.RG16UI),k===s.UNSIGNED_INT&&(q=s.RG32UI),k===s.BYTE&&(q=s.RG8I),k===s.SHORT&&(q=s.RG16I),k===s.INT&&(q=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGB8UI),k===s.UNSIGNED_SHORT&&(q=s.RGB16UI),k===s.UNSIGNED_INT&&(q=s.RGB32UI),k===s.BYTE&&(q=s.RGB8I),k===s.SHORT&&(q=s.RGB16I),k===s.INT&&(q=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),k===s.UNSIGNED_INT&&(q=s.RGBA32UI),k===s.BYTE&&(q=s.RGBA8I),k===s.SHORT&&(q=s.RGBA16I),k===s.INT&&(q=s.RGBA32I)),M===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),M===s.RGBA){const ve=Z?js:Xe.getTransfer($);k===s.FLOAT&&(q=s.RGBA32F),k===s.HALF_FLOAT&&(q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(q=ve===Je?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(C,M){let k;return C?M===null||M===Hn||M===vi?k=s.DEPTH24_STENCIL8:M===fn?k=s.DEPTH32F_STENCIL8:M===Gi&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hn||M===vi?k=s.DEPTH_COMPONENT24:M===fn?k=s.DEPTH_COMPONENT32F:M===Gi&&(k=s.DEPTH_COMPONENT16),k}function T(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function S(C){const M=C.target;M.removeEventListener("dispose",S),P(M),M.isVideoTexture&&h.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),y(M)}function P(C){const M=n.get(C);if(M.__webglInit===void 0)return;const k=C.source,$=u.get(k);if($){const Z=$[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(C),Object.keys($).length===0&&u.delete(k)}n.remove(C)}function E(C){const M=n.get(C);s.deleteTexture(M.__webglTexture);const k=C.source,$=u.get(k);delete $[M.__cacheKey],o.memory.textures--}function y(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Z=0;Z<M.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=C.textures;for(let $=0,Z=k.length;$<Z;$++){const q=n.get(k[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(C)}let R=0;function O(){R=0}function N(){const C=R;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function W(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function V(C,M){const k=n.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,C,M);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function X(C,M){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function z(C,M){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function B(C,M){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Q(k,C,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const J={[Ns]:s.REPEAT,[wn]:s.CLAMP_TO_EDGE,[Bs]:s.MIRRORED_REPEAT},se={[kt]:s.NEAREST,[ic]:s.NEAREST_MIPMAP_NEAREST,[Li]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[Rs]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},ue={[Dh]:s.NEVER,[Oh]:s.ALWAYS,[Fh]:s.LESS,[pc]:s.LEQUAL,[Lh]:s.EQUAL,[Bh]:s.GEQUAL,[Uh]:s.GREATER,[Nh]:s.NOTEQUAL};function be(C,M){if(M.type===fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===Rs||M.magFilter===Li||M.magFilter===Tn||M.minFilter===jt||M.minFilter===Rs||M.minFilter===Li||M.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,se[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kt||M.minFilter!==Li&&M.minFilter!==Tn||M.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function He(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",S));const $=M.source;let Z=u.get($);Z===void 0&&(Z={},u.set($,Z));const q=W(M);if(q!==C.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[q].usedTimes++;const ve=Z[C.__cacheKey];ve!==void 0&&(Z[C.__cacheKey].usedTimes--,ve.usedTimes===0&&E(M)),C.__cacheKey=q,C.__webglTexture=Z[q].texture}return k}function j(C,M,k){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);const Z=He(C,M),q=M.source;t.bindTexture($,C.__webglTexture,s.TEXTURE0+k);const ve=n.get(q);if(q.version!==ve.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const ae=Xe.getPrimaries(Xe.workingColorSpace),fe=M.colorSpace===un?null:Xe.getPrimaries(M.colorSpace),We=M.colorSpace===un||ae===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ee=A(M.image,!1,i.maxTextureSize);ee=it(M,ee);const pe=r.convert(M.format,M.colorSpace),we=r.convert(M.type);let Ie=x(M.internalFormat,pe,we,M.colorSpace,M.isVideoTexture);be($,M);let me;const Ge=M.mipmaps,Oe=M.isVideoTexture!==!0,tt=ve.__version===void 0||Z===!0,D=q.dataReady,oe=T(M,ee);if(M.isDepthTexture)Ie=_(M.format===yi,M.type),tt&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Ie,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ie,ee.width,ee.height,0,pe,we,null));else if(M.isDataTexture)if(Ge.length>0){Oe&&tt&&t.texStorage2D(s.TEXTURE_2D,oe,Ie,Ge[0].width,Ge[0].height);for(let Y=0,K=Ge.length;Y<K;Y++)me=Ge[Y],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(s.TEXTURE_2D,Y,Ie,me.width,me.height,0,pe,we,me.data);M.generateMipmaps=!1}else Oe?(tt&&t.texStorage2D(s.TEXTURE_2D,oe,Ie,ee.width,ee.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,we,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,ee.width,ee.height,0,pe,we,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Ie,Ge[0].width,Ge[0].height,ee.depth);for(let Y=0,K=Ge.length;Y<K;Y++)if(me=Ge[Y],M.format!==Ot)if(pe!==null)if(Oe){if(D)if(M.layerUpdates.size>0){const de=$a(me.width,me.height,M.format,M.type);for(const ce of M.layerUpdates){const Le=me.data.subarray(ce*de/me.data.BYTES_PER_ELEMENT,(ce+1)*de/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ce,me.width,me.height,1,pe,Le)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ie,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ee.depth,pe,we,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ie,me.width,me.height,ee.depth,0,pe,we,me.data)}else{Oe&&tt&&t.texStorage2D(s.TEXTURE_2D,oe,Ie,Ge[0].width,Ge[0].height);for(let Y=0,K=Ge.length;Y<K;Y++)me=Ge[Y],M.format!==Ot?pe!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(s.TEXTURE_2D,Y,Ie,me.width,me.height,0,pe,we,me.data)}else if(M.isDataArrayTexture)if(Oe){if(tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Ie,ee.width,ee.height,ee.depth),D)if(M.layerUpdates.size>0){const Y=$a(ee.width,ee.height,M.format,M.type);for(const K of M.layerUpdates){const de=ee.data.subarray(K*Y/ee.data.BYTES_PER_ELEMENT,(K+1)*Y/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,pe,we,de)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,we,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,ee.width,ee.height,ee.depth,0,pe,we,ee.data);else if(M.isData3DTexture)Oe?(tt&&t.texStorage3D(s.TEXTURE_3D,oe,Ie,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,we,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,ee.width,ee.height,ee.depth,0,pe,we,ee.data);else if(M.isFramebufferTexture){if(tt)if(Oe)t.texStorage2D(s.TEXTURE_2D,oe,Ie,ee.width,ee.height);else{let Y=ee.width,K=ee.height;for(let de=0;de<oe;de++)t.texImage2D(s.TEXTURE_2D,de,Ie,Y,K,0,pe,we,null),Y>>=1,K>>=1}}else if(Ge.length>0){if(Oe&&tt){const Y=Se(Ge[0]);t.texStorage2D(s.TEXTURE_2D,oe,Ie,Y.width,Y.height)}for(let Y=0,K=Ge.length;Y<K;Y++)me=Ge[Y],Oe?D&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,pe,we,me):t.texImage2D(s.TEXTURE_2D,Y,Ie,pe,we,me);M.generateMipmaps=!1}else if(Oe){if(tt){const Y=Se(ee);t.texStorage2D(s.TEXTURE_2D,oe,Ie,Y.width,Y.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,we,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ie,pe,we,ee);p(M)&&m($),ve.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Q(C,M,k){if(M.image.length!==6)return;const $=He(C,M),Z=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const q=n.get(Z);if(Z.version!==q.__version||$===!0){t.activeTexture(s.TEXTURE0+k);const ve=Xe.getPrimaries(Xe.workingColorSpace),ae=M.colorSpace===un?null:Xe.getPrimaries(M.colorSpace),fe=M.colorSpace===un||ve===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!We&&!ee?pe[K]=A(M.image[K],!0,i.maxCubemapSize):pe[K]=ee?M.image[K].image:M.image[K],pe[K]=it(M,pe[K]);const we=pe[0],Ie=r.convert(M.format,M.colorSpace),me=r.convert(M.type),Ge=x(M.internalFormat,Ie,me,M.colorSpace),Oe=M.isVideoTexture!==!0,tt=q.__version===void 0||$===!0,D=Z.dataReady;let oe=T(M,we);be(s.TEXTURE_CUBE_MAP,M);let Y;if(We){Oe&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ge,we.width,we.height);for(let K=0;K<6;K++){Y=pe[K].mipmaps;for(let de=0;de<Y.length;de++){const ce=Y[de];M.format!==Ot?Ie!==null?Oe?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,ce.width,ce.height,Ie,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,Ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,ce.width,ce.height,Ie,me,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,Ge,ce.width,ce.height,0,Ie,me,ce.data)}}}else{if(Y=M.mipmaps,Oe&&tt){Y.length>0&&oe++;const K=Se(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ge,K.width,K.height)}for(let K=0;K<6;K++)if(ee){Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,Ie,me,pe[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,pe[K].width,pe[K].height,0,Ie,me,pe[K].data);for(let de=0;de<Y.length;de++){const Le=Y[de].image[K].image;Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Le.width,Le.height,Ie,me,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,Ge,Le.width,Le.height,0,Ie,me,Le.data)}}else{Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ie,me,pe[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ge,Ie,me,pe[K]);for(let de=0;de<Y.length;de++){const ce=Y[de];Oe?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Ie,me,ce.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,Ge,Ie,me,ce.image[K])}}}p(M)&&m(s.TEXTURE_CUBE_MAP),q.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function le(C,M,k,$,Z,q){const ve=r.convert(k.format,k.colorSpace),ae=r.convert(k.type),fe=x(k.internalFormat,ve,ae,k.colorSpace),We=n.get(M),ee=n.get(k);if(ee.__renderTarget=M,!We.__hasExternalTextures){const pe=Math.max(1,M.width>>q),we=Math.max(1,M.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,fe,pe,we,M.depth,0,ve,ae,null):t.texImage2D(Z,q,fe,pe,we,0,ve,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),ze(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,ee.__webglTexture,0,Fe(M)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,ee.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(C,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){const $=M.depthTexture,Z=$&&$.isDepthTexture?$.type:null,q=_(M.stencilBuffer,Z),ve=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=Fe(M);ze(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,q,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,C)}else{const $=M.textures;for(let Z=0;Z<$.length;Z++){const q=$[Z],ve=r.convert(q.format,q.colorSpace),ae=r.convert(q.type),fe=x(q.internalFormat,ve,ae,q.colorSpace),We=Fe(M);k&&ze(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,fe,M.width,M.height):ze(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,fe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,fe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const Z=$.__webglTexture,q=Fe(M);if(M.depthTexture.format===pi)ze(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(M.depthTexture.format===yi)ze(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Te(C){const M=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ee(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),ne(M.__webglDepthbuffer[$],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ne(M.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(C,M,k){const $=n.get(C);M!==void 0&&le($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Te(C)}function xe(C){const M=C.texture,k=n.get(C),$=n.get(M);C.addEventListener("dispose",w);const Z=C.textures,q=C.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let fe=0;fe<M.mipmaps.length;fe++)k.__webglFramebuffer[ae][fe]=s.createFramebuffer()}else k.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)k.__webglFramebuffer[ae]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ve)for(let ae=0,fe=Z.length;ae<fe;ae++){const We=n.get(Z[ae]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&ze(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const fe=Z[ae];k.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const We=r.convert(fe.format,fe.colorSpace),ee=r.convert(fe.type),pe=x(fe.internalFormat,We,ee,fe.colorSpace,C.isXRRenderTarget===!0),we=Fe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,pe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),be(s.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)le(k.__webglFramebuffer[ae][fe],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else le(k.__webglFramebuffer[ae],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(M)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,fe=Z.length;ae<fe;ae++){const We=Z[ae],ee=n.get(We);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),be(s.TEXTURE_2D,We),le(k.__webglFramebuffer,C,We,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,0),p(We)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),be(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)le(k.__webglFramebuffer[fe],C,M,s.COLOR_ATTACHMENT0,ae,fe);else le(k.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,ae,0);p(M)&&m(ae),t.unbindTexture()}C.depthBuffer&&Te(C)}function Re(C){const M=C.textures;for(let k=0,$=M.length;k<$;k++){const Z=M[k];if(p(Z)){const q=v(C),ve=n.get(Z).__webglTexture;t.bindTexture(q,ve),m(q),t.unbindTexture()}}}const Qe=[],F=[];function ct(C){if(C.samples>0){if(ze(C)===!1){const M=C.textures,k=C.width,$=C.height;let Z=s.COLOR_BUFFER_BIT;const q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(C),ae=M.length>1;if(ae)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);const We=n.get(M[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,We,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,Z,s.NEAREST),l===!0&&(Qe.length=0,F.length=0,Qe.push(s.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Qe.push(q),F.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ve.__webglColorRenderbuffer[fe]);const We=n.get(M[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,We,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Fe(C){return Math.min(i.maxSamples,C.samples)}function ze(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(C){const M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function it(C,M){const k=C.colorSpace,$=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ei&&k!==un&&(Xe.getTransfer(k)===Je?($!==Ot||Z!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=B,this.rebindTextures=ie,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ze}function sg(s,e){function t(n,i=un){let r;const o=Xe.getTransfer(i);if(n===gn)return s.UNSIGNED_BYTE;if(n===Co)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return s.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return s.BYTE;if(n===rc)return s.SHORT;if(n===Gi)return s.UNSIGNED_SHORT;if(n===To)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===ac)return s.ALPHA;if(n===lc)return s.RGB;if(n===Ot)return s.RGBA;if(n===cc)return s.LUMINANCE;if(n===hc)return s.LUMINANCE_ALPHA;if(n===pi)return s.DEPTH_COMPONENT;if(n===yi)return s.DEPTH_STENCIL;if(n===dc)return s.RED;if(n===Io)return s.RED_INTEGER;if(n===uc)return s.RG;if(n===Po)return s.RG_INTEGER;if(n===Do)return s.RGBA_INTEGER;if(n===Is||n===Ps||n===Ds||n===Fs)if(o===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===qr||n===$r||n===Kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===Qr||n===Jr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===Qr)return o===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jr)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===eo||n===to||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===mo||n===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ls)return o===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===Ao||n===_o||n===xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ls)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class rg extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const og={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const A of e.hand.values()){const p=t.getJointPose(A,n),m=this._getHandJoint(c,A);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
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

}`;class cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:ag,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hg extends Xn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const A=new cg,p=t.getContextAttributes();let m=null,v=null;const x=[],_=[],T=new De;let S=null;const w=new Bt;w.viewport=new lt;const P=new Bt;P.viewport=new lt;const E=[w,P],y=new rg;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=x[j];return Q===void 0&&(Q=new br,x[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=x[j];return Q===void 0&&(Q=new br,x[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=x[j];return Q===void 0&&(Q=new br,x[j]=Q),Q.getHandSpace()};function N(j){const Q=_.indexOf(j.inputSource);if(Q===-1)return;const le=x[Q];le!==void 0&&(le.update(j.inputSource,j.frame,c||o),le.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",V);for(let j=0;j<x.length;j++){const Q=_[j];Q!==null&&(_[j]=null,x[j].disconnect(Q))}R=null,O=null,A.reset(),e.setRenderTarget(m),f=null,u=null,d=null,i=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",W),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Ot,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,le=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?yi:pi,le=p.stencil?vi:Hn);const Ee={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Ee),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Gn(u.textureWidth,u.textureHeight,{format:Ot,type:gn,depthTexture:new wc(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function V(j){for(let Q=0;Q<j.removed.length;Q++){const le=j.removed[Q],ne=_.indexOf(le);ne>=0&&(_[ne]=null,x[ne].disconnect(le))}for(let Q=0;Q<j.added.length;Q++){const le=j.added[Q];let ne=_.indexOf(le);if(ne===-1){for(let Te=0;Te<x.length;Te++)if(Te>=_.length){_.push(le),ne=Te;break}else if(_[Te]===null){_[Te]=le,ne=Te;break}if(ne===-1)break}const Ee=x[ne];Ee&&Ee.connect(le)}}const X=new I,z=new I;function B(j,Q,le){X.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const ne=X.distanceTo(z),Ee=Q.projectionMatrix.elements,Te=le.projectionMatrix.elements,ie=Ee[14]/(Ee[10]-1),xe=Ee[14]/(Ee[10]+1),Re=(Ee[9]+1)/Ee[5],Qe=(Ee[9]-1)/Ee[5],F=(Ee[8]-1)/Ee[0],ct=(Te[8]+1)/Te[0],Fe=ie*F,ze=ie*ct,Me=ne/(-F+ct),it=Me*-F;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(it),j.translateZ(Me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Se=ie+Me,C=xe+Me,M=Fe-it,k=ze+(ne-it),$=Re*xe/C*Se,Z=Qe*xe/C*Se;j.projectionMatrix.makePerspective(M,k,$,Z,Se,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function J(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,le=j.far;A.texture!==null&&(A.depthNear>0&&(Q=A.depthNear),A.depthFar>0&&(le=A.depthFar)),y.near=P.near=w.near=Q,y.far=P.far=w.far=le,(R!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,O=y.far),w.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,y.layers.mask=w.layers.mask|P.layers.mask;const ne=j.parent,Ee=y.cameras;J(y,ne);for(let Te=0;Te<Ee.length;Te++)J(Ee[Te],ne);Ee.length===2?B(y,w,P):y.projectionMatrix.copy(w.projectionMatrix),se(j,y,ne)};function se(j,Q,le){le===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Wi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(y)};let ue=null;function be(j,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ne=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let Te=0;Te<le.length;Te++){const ie=le[Te];let xe=null;if(f!==null)xe=f.getViewport(ie);else{const Qe=d.getViewSubImage(u,ie);xe=Qe.viewport,Te===0&&(e.setRenderTargetTextures(v,Qe.colorTexture,u.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(v))}let Re=E[Te];Re===void 0&&(Re=new Bt,Re.layers.enable(Te),Re.viewport=new lt,E[Te]=Re),Re.matrix.fromArray(ie.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ie.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(xe.x,xe.y,xe.width,xe.height),Te===0&&(y.matrix.copy(Re.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ne===!0&&y.cameras.push(Re)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Te=d.getDepthInformation(le[0]);Te&&Te.isValid&&Te.texture&&A.init(e,Te,i.renderState)}}for(let le=0;le<x.length;le++){const ne=_[le],Ee=x[le];ne!==null&&Ee!==void 0&&Ee.update(ne,Q,c||o)}ue&&ue(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const He=new Sc;He.setAnimationLoop(be),this.setAnimationLoop=function(j){ue=j},this.dispose=function(){}}}const On=new $t,dg=new Be;function ug(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,yc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),A(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===St&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===St&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),x=v.envMap,_=v.envMapRotation;x&&(p.envMap.value=x,On.copy(_),On.x*=-1,On.y*=-1,On.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),p.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(On)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===St&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function A(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fg(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const _=x.program;n.uniformBlockBinding(v,_)}function c(v,x){let _=i[v.id];_===void 0&&(g(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(v,T);const S=e.render.frame;r[v.id]!==S&&(u(v),r[v.id]=S)}function h(v){const x=d();v.__bindingPointIndex=x;const _=s.createBuffer(),T=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=i[v.id],_=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let S=0,w=_.length;S<w;S++){const P=Array.isArray(_[S])?_[S]:[_[S]];for(let E=0,y=P.length;E<y;E++){const R=P[E];if(f(R,S,E,T)===!0){const O=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let V=0;V<N.length;V++){const X=N[V],z=A(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+W,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,x,_,T){const S=v.value,w=x+"_"+_;if(T[w]===void 0)return typeof S=="number"||typeof S=="boolean"?T[w]=S:T[w]=S.clone(),!0;{const P=T[w];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return T[w]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(v){const x=v.uniforms;let _=0;const T=16;for(let w=0,P=x.length;w<P;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,R=E.length;y<R;y++){const O=E[y],N=Array.isArray(O.value)?O.value:[O.value];for(let W=0,V=N.length;W<V;W++){const X=N[W],z=A(X),B=_%T,J=B%z.boundary,se=B+J;_+=J,se!==0&&T-se<z.storage&&(_+=T-se),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=z.storage}}}const S=_%T;return S>0&&(_+=T-S),v.__size=_,v.__cache={},this}function A(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class pg{constructor(e={}){const{canvas:t=td(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),A=new Int32Array(4);let p=null,m=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=Rn,this.toneMappingExposure=1;const _=this;let T=!1,S=0,w=0,P=null,E=-1,y=null;const R=new lt,O=new lt;let N=null;const W=new Ce(0);let V=0,X=t.width,z=t.height,B=1,J=null,se=null;const ue=new lt(0,0,X,z),be=new lt(0,0,X,z);let He=!1;const j=new Bo;let Q=!1,le=!1;const ne=new Be,Ee=new Be,Te=new I,ie=new lt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Qe(){return P===null?B:1}let F=n;function ct(b,L){return t.getContext(b,L)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xs}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ce,!1),F===null){const L="webgl2";if(F=ct(L,b),F===null)throw ct(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Fe,ze,Me,it,Se,C,M,k,$,Z,q,ve,ae,fe,We,ee,pe,we,Ie,me,Ge,Oe,tt,D;function oe(){Fe=new xp(F),Fe.init(),Oe=new sg(F,Fe),ze=new fp(F,Fe,e,Oe),Me=new tg(F,Fe),ze.reverseDepthBuffer&&u&&Me.buffers.depth.setReversed(!0),it=new Mp(F),Se=new zm,C=new ig(F,Fe,Me,Se,ze,Oe,it),M=new mp(_),k=new _p(_),$=new Cd(F),tt=new dp(F,$),Z=new vp(F,$,it,tt),q=new Sp(F,Z,$,it),Ie=new Ep(F,ze,C),ee=new pp(Se),ve=new km(_,M,k,Fe,ze,tt,ee),ae=new ug(_,Se),fe=new Hm,We=new qm(Fe),we=new hp(_,M,k,Me,q,f,l),pe=new Jm(_,q,ze),D=new fg(F,it,ze,Me),me=new up(F,Fe,it),Ge=new yp(F,Fe,it),it.programs=ve.programs,_.capabilities=ze,_.extensions=Fe,_.properties=Se,_.renderLists=fe,_.shadowMap=pe,_.state=Me,_.info=it}oe();const Y=new hg(_,F);this.xr=Y,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Fe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Fe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(X,z,!1))},this.getSize=function(b){return b.set(X,z)},this.setSize=function(b,L,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,z=L,t.width=Math.floor(b*B),t.height=Math.floor(L*B),H===!0&&(t.style.width=b+"px",t.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(X*B,z*B).floor()},this.setDrawingBufferSize=function(b,L,H){X=b,z=L,B=H,t.width=Math.floor(b*H),t.height=Math.floor(L*H),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,L,H,G){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,L,H,G),Me.viewport(R.copy(ue).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(be)},this.setScissor=function(b,L,H,G){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,L,H,G),Me.scissor(O.copy(be).multiplyScalar(B).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(b){Me.setScissorTest(He=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(b=!0,L=!0,H=!0){let G=0;if(b){let U=!1;if(P!==null){const te=P.texture.format;U=te===Do||te===Po||te===Io}if(U){const te=P.texture.type,he=te===gn||te===Hn||te===Gi||te===vi||te===Co||te===Ro,ge=we.getClearColor(),Ae=we.getClearAlpha(),Pe=ge.r,Ue=ge.g,_e=ge.b;he?(g[0]=Pe,g[1]=Ue,g[2]=_e,g[3]=Ae,F.clearBufferuiv(F.COLOR,0,g)):(A[0]=Pe,A[1]=Ue,A[2]=_e,A[3]=Ae,F.clearBufferiv(F.COLOR,0,A))}else G|=F.COLOR_BUFFER_BIT}L&&(G|=F.DEPTH_BUFFER_BIT),H&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),We.dispose(),Se.dispose(),M.dispose(),k.dispose(),q.dispose(),tt.dispose(),D.dispose(),ve.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Go),Y.removeEventListener("sessionend",Wo),Dn.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=it.autoReset,L=pe.enabled,H=pe.autoUpdate,G=pe.needsUpdate,U=pe.type;oe(),it.autoReset=b,pe.enabled=L,pe.autoUpdate=H,pe.needsUpdate=G,pe.type=U}function ce(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Le(b){const L=b.target;L.removeEventListener("dispose",Le),at(L)}function at(b){xt(b),Se.remove(b)}function xt(b){const L=Se.get(b).programs;L!==void 0&&(L.forEach(function(H){ve.releaseProgram(H)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,H,G,U,te){L===null&&(L=xe);const he=U.isMesh&&U.matrixWorld.determinant()<0,ge=kc(b,L,H,G,U);Me.setMaterial(G,he);let Ae=H.index,Pe=1;if(G.wireframe===!0){if(Ae=Z.getWireframeAttribute(H),Ae===void 0)return;Pe=2}const Ue=H.drawRange,_e=H.attributes.position;let Ye=Ue.start*Pe,nt=(Ue.start+Ue.count)*Pe;te!==null&&(Ye=Math.max(Ye,te.start*Pe),nt=Math.min(nt,(te.start+te.count)*Pe)),Ae!==null?(Ye=Math.max(Ye,0),nt=Math.min(nt,Ae.count)):_e!=null&&(Ye=Math.max(Ye,0),nt=Math.min(nt,_e.count));const st=nt-Ye;if(st<0||st===1/0)return;tt.setup(U,G,ge,H,Ae);let Ct,$e=me;if(Ae!==null&&(Ct=$.get(Ae),$e=Ge,$e.setIndex(Ct)),U.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*Qe()),$e.setMode(F.LINES)):$e.setMode(F.TRIANGLES);else if(U.isLine){let ye=G.linewidth;ye===void 0&&(ye=1),Me.setLineWidth(ye*Qe()),U.isLineSegments?$e.setMode(F.LINES):U.isLineLoop?$e.setMode(F.LINE_LOOP):$e.setMode(F.LINE_STRIP)}else U.isPoints?$e.setMode(F.POINTS):U.isSprite&&$e.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)$e.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))$e.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ye=U._multiDrawStarts,sn=U._multiDrawCounts,Ke=U._multiDrawCount,Ht=Ae?$.get(Ae).bytesPerElement:1,Yn=Se.get(G).currentProgram.getUniforms();for(let It=0;It<Ke;It++)Yn.setValue(F,"_gl_DrawID",It),$e.render(ye[It]/Ht,sn[It])}else if(U.isInstancedMesh)$e.renderInstances(Ye,st,U.count);else if(H.isInstancedBufferGeometry){const ye=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,sn=Math.min(H.instanceCount,ye);$e.renderInstances(Ye,st,sn)}else $e.render(Ye,st)};function Ze(b,L,H){b.transparent===!0&&b.side===Jt&&b.forceSinglePass===!1?(b.side=St,b.needsUpdate=!0,Qi(b,L,H),b.side=en,b.needsUpdate=!0,Qi(b,L,H),b.side=Jt):Qi(b,L,H)}this.compile=function(b,L,H=null){H===null&&(H=b),m=We.get(H),m.init(L),x.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),b!==H&&b.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const G=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const ge=te[he];Ze(ge,H,U),G.add(ge)}else Ze(te,H,U),G.add(te)}),x.pop(),m=null,G},this.compileAsync=function(b,L,H=null){const G=this.compile(b,L,H);return new Promise(U=>{function te(){if(G.forEach(function(he){Se.get(he).currentProgram.isReady()&&G.delete(he)}),G.size===0){U(b);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Vt=null;function nn(b){Vt&&Vt(b)}function Go(){Dn.stop()}function Wo(){Dn.start()}const Dn=new Sc;Dn.setAnimationLoop(nn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(b){Vt=b,Y.setAnimationLoop(b),b===null?Dn.stop():Dn.start()},Y.addEventListener("sessionstart",Go),Y.addEventListener("sessionend",Wo),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(L),L=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,L,P),m=We.get(b,x.length),m.init(L),x.push(m),Ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),j.setFromProjectionMatrix(Ee),le=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,le),p=fe.get(b,v.length),p.init(),v.push(p),Y.enabled===!0&&Y.isPresenting===!0){const te=_.xr.getDepthSensingMesh();te!==null&&Qs(te,L,-1/0,_.sortObjects)}Qs(b,L,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(J,se),Re=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Re&&we.addToRenderList(p,b),this.info.render.frame++,Q===!0&&ee.beginShadows();const H=m.state.shadowsArray;pe.render(H,b,L),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=p.opaque,U=p.transmissive;if(m.setupLights(),L.isArrayCamera){const te=L.cameras;if(U.length>0)for(let he=0,ge=te.length;he<ge;he++){const Ae=te[he];Yo(G,U,b,Ae)}Re&&we.render(b);for(let he=0,ge=te.length;he<ge;he++){const Ae=te[he];Xo(p,b,Ae,Ae.viewport)}}else U.length>0&&Yo(G,U,b,L),Re&&we.render(b),Xo(p,b,L);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(_,b,L),tt.resetDefaultState(),E=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],Q===!0&&ee.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Qs(b,L,H,G){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){G&&ie.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const he=q.update(b),ge=b.material;ge.visible&&p.push(b,he,ge,H,ie.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const he=q.update(b),ge=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ie.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ie.copy(he.boundingSphere.center)),ie.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(ge)){const Ae=he.groups;for(let Pe=0,Ue=Ae.length;Pe<Ue;Pe++){const _e=Ae[Pe],Ye=ge[_e.materialIndex];Ye&&Ye.visible&&p.push(b,he,Ye,H,ie.z,_e)}}else ge.visible&&p.push(b,he,ge,H,ie.z,null)}}const te=b.children;for(let he=0,ge=te.length;he<ge;he++)Qs(te[he],L,H,G)}function Xo(b,L,H,G){const U=b.opaque,te=b.transmissive,he=b.transparent;m.setupLightsView(H),Q===!0&&ee.setGlobalState(_.clippingPlanes,H),G&&Me.viewport(R.copy(G)),U.length>0&&Zi(U,L,H),te.length>0&&Zi(te,L,H),he.length>0&&Zi(he,L,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Yo(b,L,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Gn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?qi:gn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const te=m.state.transmissionRenderTarget[G.id],he=G.viewport||R;te.setSize(he.z,he.w);const ge=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(W),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Re&&we.render(H);const Ae=_.toneMapping;_.toneMapping=Rn;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Q===!0&&ee.setGlobalState(_.clippingPlanes,G),Zi(b,H,G),C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let _e=0,Ye=L.length;_e<Ye;_e++){const nt=L[_e],st=nt.object,Ct=nt.geometry,$e=nt.material,ye=nt.group;if($e.side===Jt&&st.layers.test(G.layers)){const sn=$e.side;$e.side=St,$e.needsUpdate=!0,jo(st,H,G,Ct,$e,ye),$e.side=sn,$e.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te))}_.setRenderTarget(ge),_.setClearColor(W,V),Pe!==void 0&&(G.viewport=Pe),_.toneMapping=Ae}function Zi(b,L,H){const G=L.isScene===!0?L.overrideMaterial:null;for(let U=0,te=b.length;U<te;U++){const he=b[U],ge=he.object,Ae=he.geometry,Pe=G===null?he.material:G,Ue=he.group;ge.layers.test(H.layers)&&jo(ge,L,H,Ae,Pe,Ue)}}function jo(b,L,H,G,U,te){b.onBeforeRender(_,L,H,G,U,te),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,L,H,G,b,te),U.transparent===!0&&U.side===Jt&&U.forceSinglePass===!1?(U.side=St,U.needsUpdate=!0,_.renderBufferDirect(H,L,G,U,b,te),U.side=en,U.needsUpdate=!0,_.renderBufferDirect(H,L,G,U,b,te),U.side=Jt):_.renderBufferDirect(H,L,G,U,b,te),b.onAfterRender(_,L,H,G,U,te)}function Qi(b,L,H){L.isScene!==!0&&(L=xe);const G=Se.get(b),U=m.state.lights,te=m.state.shadowsArray,he=U.state.version,ge=ve.getParameters(b,U.state,te,L,H),Ae=ve.getProgramCacheKey(ge);let Pe=G.programs;G.environment=b.isMeshStandardMaterial?L.environment:null,G.fog=L.fog,G.envMap=(b.isMeshStandardMaterial?k:M).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",Le),Pe=new Map,G.programs=Pe);let Ue=Pe.get(Ae);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===he)return $o(b,ge),Ue}else ge.uniforms=ve.getUniforms(b),b.onBeforeCompile(ge,_),Ue=ve.acquireProgram(ge,Ae),Pe.set(Ae,Ue),G.uniforms=ge.uniforms;const _e=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(_e.clippingPlanes=ee.uniform),$o(b,ge),G.needsLights=Vc(b),G.lightsStateVersion=he,G.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function qo(b){if(b.uniformsList===null){const L=b.currentProgram.getUniforms();b.uniformsList=Us.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function $o(b,L){const H=Se.get(b);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function kc(b,L,H,G,U){L.isScene!==!0&&(L=xe),C.resetTextureUnits();const te=L.fog,he=G.isMeshStandardMaterial?L.environment:null,ge=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ei,Ae=(G.isMeshStandardMaterial?k:M).get(G.envMap||he),Pe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),_e=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,nt=!!H.morphAttributes.color;let st=Rn;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(st=_.toneMapping);const Ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$e=Ct!==void 0?Ct.length:0,ye=Se.get(G),sn=m.state.lights;if(Q===!0&&(le===!0||b!==y)){const Lt=b===y&&G.id===E;ee.setState(G,b,Lt)}let Ke=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==sn.state.version||ye.outputColorSpace!==ge||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==Ae||G.fog===!0&&ye.fog!==te||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ee.numPlanes||ye.numIntersection!==ee.numIntersection)||ye.vertexAlphas!==Pe||ye.vertexTangents!==Ue||ye.morphTargets!==_e||ye.morphNormals!==Ye||ye.morphColors!==nt||ye.toneMapping!==st||ye.morphTargetsCount!==$e)&&(Ke=!0):(Ke=!0,ye.__version=G.version);let Ht=ye.currentProgram;Ke===!0&&(Ht=Qi(G,L,U));let Yn=!1,It=!1,Ti=!1;const rt=Ht.getUniforms(),Kt=ye.uniforms;if(Me.useProgram(Ht.program)&&(Yn=!0,It=!0,Ti=!0),G.id!==E&&(E=G.id,It=!0),Yn||y!==b){Me.buffers.depth.getReversed()?(ne.copy(b.projectionMatrix),id(ne),sd(ne),rt.setValue(F,"projectionMatrix",ne)):rt.setValue(F,"projectionMatrix",b.projectionMatrix),rt.setValue(F,"viewMatrix",b.matrixWorldInverse);const An=rt.map.cameraPosition;An!==void 0&&An.setValue(F,Te.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&rt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&rt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,It=!0,Ti=!0)}if(U.isSkinnedMesh){rt.setOptional(F,U,"bindMatrix"),rt.setOptional(F,U,"bindMatrixInverse");const Lt=U.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),rt.setValue(F,"boneTexture",Lt.boneTexture,C))}U.isBatchedMesh&&(rt.setOptional(F,U,"batchingTexture"),rt.setValue(F,"batchingTexture",U._matricesTexture,C),rt.setOptional(F,U,"batchingIdTexture"),rt.setValue(F,"batchingIdTexture",U._indirectTexture,C),rt.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&rt.setValue(F,"batchingColorTexture",U._colorsTexture,C));const Ci=H.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&Ie.update(U,H,Ht),(It||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,rt.setValue(F,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Kt.envMap.value=Ae,Kt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&L.environment!==null&&(Kt.envMapIntensity.value=L.environmentIntensity),It&&(rt.setValue(F,"toneMappingExposure",_.toneMappingExposure),ye.needsLights&&zc(Kt,Ti),te&&G.fog===!0&&ae.refreshFogUniforms(Kt,te),ae.refreshMaterialUniforms(Kt,G,B,z,m.state.transmissionRenderTarget[b.id]),Us.upload(F,qo(ye),Kt,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Us.upload(F,qo(ye),Kt,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&rt.setValue(F,"center",U.center),rt.setValue(F,"modelViewMatrix",U.modelViewMatrix),rt.setValue(F,"normalMatrix",U.normalMatrix),rt.setValue(F,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Lt=G.uniformsGroups;for(let An=0,_n=Lt.length;An<_n;An++){const Ko=Lt[An];D.update(Ko,Ht),D.bind(Ko,Ht)}}return Ht}function zc(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Vc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,L,H){Se.get(b.texture).__webglTexture=L,Se.get(b.depthTexture).__webglTexture=H;const G=Se.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,L){const H=Se.get(b);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,H=0){P=b,S=L,w=H;let G=!0,U=null,te=!1,he=!1;if(b){const Ae=Se.get(b);if(Ae.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(F.FRAMEBUFFER,null),G=!1;else if(Ae.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Ae.__hasExternalTextures)C.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const _e=b.depthTexture;if(Ae.__boundDepthTexture!==_e){if(_e!==null&&Se.has(_e)&&(b.width!==_e.image.width||b.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const Ue=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[L])?U=Ue[L][H]:U=Ue[L],te=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?U=Se.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[H]:U=Ue,R.copy(b.viewport),O.copy(b.scissor),N=b.scissorTest}else R.copy(ue).multiplyScalar(B).floor(),O.copy(be).multiplyScalar(B).floor(),N=He;if(Me.bindFramebuffer(F.FRAMEBUFFER,U)&&G&&Me.drawBuffers(b,U),Me.viewport(R),Me.scissor(O),Me.setScissorTest(N),te){const Ae=Se.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ae.__webglTexture,H)}else if(he){const Ae=Se.get(b.texture),Pe=L||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,H||0,Pe)}E=-1},this.readRenderTargetPixels=function(b,L,H,G,U,te,he){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){Me.bindFramebuffer(F.FRAMEBUFFER,ge);try{const Ae=b.texture,Pe=Ae.format,Ue=Ae.type;if(!ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-G&&H>=0&&H<=b.height-U&&F.readPixels(L,H,G,U,Oe.convert(Pe),Oe.convert(Ue),te)}finally{const Ae=P!==null?Se.get(P).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,L,H,G,U,te,he){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){const Ae=b.texture,Pe=Ae.format,Ue=Ae.type;if(!ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=b.width-G&&H>=0&&H<=b.height-U){Me.bindFramebuffer(F.FRAMEBUFFER,ge);const _e=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.bufferData(F.PIXEL_PACK_BUFFER,te.byteLength,F.STREAM_READ),F.readPixels(L,H,G,U,Oe.convert(Pe),Oe.convert(Ue),0);const Ye=P!==null?Se.get(P).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Ye);const nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await nd(F,nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,_e),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,te),F.deleteBuffer(_e),F.deleteSync(nt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,L=null,H=0){b.isTexture!==!0&&(Ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),U=Math.floor(b.image.width*G),te=Math.floor(b.image.height*G),he=L!==null?L.x:0,ge=L!==null?L.y:0;C.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,he,ge,U,te),Me.unbindTexture()},this.copyTextureToTexture=function(b,L,H=null,G=null,U=0){b.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],L=arguments[2],U=arguments[3]||0,H=null);let te,he,ge,Ae,Pe,Ue,_e,Ye,nt;const st=b.isCompressedTexture?b.mipmaps[U]:b.image;H!==null?(te=H.max.x-H.min.x,he=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,Ae=H.min.x,Pe=H.min.y,Ue=H.isBox3?H.min.z:0):(te=st.width,he=st.height,ge=st.depth||1,Ae=0,Pe=0,Ue=0),G!==null?(_e=G.x,Ye=G.y,nt=G.z):(_e=0,Ye=0,nt=0);const Ct=Oe.convert(L.format),$e=Oe.convert(L.type);let ye;L.isData3DTexture?(C.setTexture3D(L,0),ye=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(C.setTexture2DArray(L,0),ye=F.TEXTURE_2D_ARRAY):(C.setTexture2D(L,0),ye=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);const sn=F.getParameter(F.UNPACK_ROW_LENGTH),Ke=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ht=F.getParameter(F.UNPACK_SKIP_PIXELS),Yn=F.getParameter(F.UNPACK_SKIP_ROWS),It=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,st.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue);const Ti=b.isDataArrayTexture||b.isData3DTexture,rt=L.isDataArrayTexture||L.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Kt=Se.get(b),Ci=Se.get(L),Lt=Se.get(Kt.__renderTarget),An=Se.get(Ci.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let _n=0;_n<ge;_n++)Ti&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.get(b).__webglTexture,U,Ue+_n),b.isDepthTexture?(rt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.get(L).__webglTexture,U,nt+_n),F.blitFramebuffer(Ae,Pe,te,he,_e,Ye,te,he,F.DEPTH_BUFFER_BIT,F.NEAREST)):rt?F.copyTexSubImage3D(ye,U,_e,Ye,nt+_n,Ae,Pe,te,he):F.copyTexSubImage2D(ye,U,_e,Ye,nt+_n,Ae,Pe,te,he);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else rt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(ye,U,_e,Ye,nt,te,he,ge,Ct,$e,st.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,U,_e,Ye,nt,te,he,ge,Ct,st.data):F.texSubImage3D(ye,U,_e,Ye,nt,te,he,ge,Ct,$e,st):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,_e,Ye,te,he,Ct,$e,st.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,_e,Ye,st.width,st.height,Ct,st.data):F.texSubImage2D(F.TEXTURE_2D,U,_e,Ye,te,he,Ct,$e,st);F.pixelStorei(F.UNPACK_ROW_LENGTH,sn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ke),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,Yn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,It),U===0&&L.generateMipmaps&&F.generateMipmap(ye),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,L,H=null,G=null,U=0){return b.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],L=arguments[3],U=arguments[4]||0),Ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,L,H,G,U)},this.initRenderTarget=function(b){Se.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){S=0,w=0,P=null,Me.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class yo extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class gi extends tn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vs=new I,Hs=new I,Ka=new Be,Fi=new Ki,xs=new $i,wr=new I,Za=new I;class mg extends gt{constructor(e=new dt,t=new gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vs.fromBufferAttribute(t,i-1),Hs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vs.distanceTo(Hs);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=r,e.ray.intersectsSphere(xs)===!1)return;Ka.copy(i).invert(),Fi.copy(e.ray).applyMatrix4(Ka);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let A=f,p=g-1;A<p;A+=c){const m=h.getX(A),v=h.getX(A+1),x=vs(this,e,Fi,l,m,v);x&&t.push(x)}if(this.isLineLoop){const A=h.getX(g-1),p=h.getX(f),m=vs(this,e,Fi,l,A,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let A=f,p=g-1;A<p;A+=c){const m=vs(this,e,Fi,l,A,A+1);m&&t.push(m)}if(this.isLineLoop){const A=vs(this,e,Fi,l,g-1,f);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vs(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Vs.fromBufferAttribute(o,i),Hs.fromBufferAttribute(o,r),t.distanceSqToSegment(Vs,Hs,wr,Za)>n)return;wr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(wr);if(!(l<e.near||l>e.far))return{distance:l,point:Za.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Qa=new I,Ja=new I;class Gs extends mg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Qa.fromBufferAttribute(t,i),Ja.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qa.distanceTo(Ja);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bi extends tn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const el=new Be,Mo=new Ki,ys=new $i,Ms=new I;class Tr extends gt{constructor(e=new dt,t=new Bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(i),ys.radius+=r,e.ray.intersectsSphere(ys)===!1)return;el.copy(i).invert(),Mo.copy(e.ray).applyMatrix4(el);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,A=f;g<A;g++){const p=c.getX(g);Ms.fromBufferAttribute(d,p),tl(Ms,p,l,i,e,t,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,A=f;g<A;g++)Ms.fromBufferAttribute(d,g),tl(Ms,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function tl(s,e,t,n,i,r,o){const a=Mo.distanceSqToPoint(s);if(a<t){const l=new I;Mo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Cr extends bt{constructor(e,t,n,i,r,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class gg extends bt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ag={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Pc(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=Mg(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)d=s[g],u=s[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Xi(r,o,t,a,l,f,0),o}};function Pc(s,e,t,n,i){let r,o;if(i===Fg(s,e,t,n)>0)for(r=e;r<t;r+=n)o=nl(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=nl(r,s[r],s[r+1],o);return o&&Ks(o,o.next)&&(ji(o),o=o.next),o}function Wn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||ot(t.prev,t,t.next)===0)){if(ji(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xi(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Tg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?xg(s,n,i,r):_g(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ji(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=vg(Wn(s),e,t),Xi(s,e,t,n,i,r,2)):o===2&&yg(s,e,t,n,i,r):Xi(Wn(s),e,t,n,i,r,1);break}}}function _g(s){const e=s.prev,t=s,n=s.next;if(ot(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&di(i,a,r,l,o,c,g.x,g.y)&&ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xg(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ot(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,A=a>l?a>c?a:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,m=Eo(f,g,e,t,n),v=Eo(A,p,e,t,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=m&&_&&_.z<=v;){if(x.x>=f&&x.x<=A&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&di(a,h,l,d,c,u,x.x,x.y)&&ot(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=A&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&di(a,h,l,d,c,u,_.x,_.y)&&ot(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=A&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&di(a,h,l,d,c,u,x.x,x.y)&&ot(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=A&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&di(a,h,l,d,c,u,_.x,_.y)&&ot(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function vg(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Ks(i,r)&&Dc(i,n,n.next,r)&&Yi(i,r)&&Yi(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ji(n),ji(n.next),n=s=r),n=n.next}while(n!==s);return Wn(n)}function yg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ig(o,a)){let l=Fc(o,a);o=Wn(o,o.next),l=Wn(l,l.next),Xi(o,e,t,n,i,r,0),Xi(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Mg(s,e,t,n){const i=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Pc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Rg(c));for(i.sort(Eg),r=0;r<i.length;r++)t=Sg(i[r],t);return t}function Eg(s,e){return s.x-e.x}function Sg(s,e){const t=bg(s,e);if(!t)return e;const n=Fc(t,s);return Wn(n,n.next),Wn(t,t.next)}function bg(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&di(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Yi(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&wg(i,t)))&&(i=t,h=d)),t=t.next;while(t!==a);return i}function wg(s,e){return ot(s.prev,s,e.prev)<0&&ot(e.next,s,s.next)<0}function Tg(s,e,t,n){let i=s;do i.z===0&&(i.z=Eo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cg(i)}function Cg(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Eo(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Rg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function di(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Ig(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Pg(s,e)&&(Yi(s,e)&&Yi(e,s)&&Dg(s,e)&&(ot(s.prev,s,e.prev)||ot(s,e.prev,e))||Ks(s,e)&&ot(s.prev,s,s.next)>0&&ot(e.prev,e,e.next)>0)}function ot(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ks(s,e){return s.x===e.x&&s.y===e.y}function Dc(s,e,t,n){const i=Ss(ot(s,e,t)),r=Ss(ot(s,e,n)),o=Ss(ot(t,n,s)),a=Ss(ot(t,n,e));return!!(i!==r&&o!==a||i===0&&Es(s,t,e)||r===0&&Es(s,n,e)||o===0&&Es(t,s,n)||a===0&&Es(t,e,n))}function Es(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ss(s){return s>0?1:s<0?-1:0}function Pg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Dc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Yi(s,e){return ot(s.prev,s,s.next)<0?ot(s,e,s.next)>=0&&ot(s,s.prev,e)>=0:ot(s,e,s.prev)<0||ot(s,s.next,e)<0}function Dg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Fc(s,e){const t=new So(s.i,s.x,s.y),n=new So(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nl(s,e,t,n){const i=new So(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ji(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function So(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ko{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ko.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];il(e),sl(n,e);let o=e.length;t.forEach(il);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,sl(n,t[l]);const a=Ag.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function il(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function sl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class bs extends tn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lg extends tn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const rl={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ug{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ng=new Ug;class Zs{constructor(e){this.manager=e!==void 0?e:Ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const hn={};class Bg extends Error{constructor(e,t){super(e),this.response=t}}class Lc extends Zs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=rl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hn[e]!==void 0){hn[e].push({onLoad:t,onProgress:n,onError:i});return}hn[e]=[],hn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let A=0;const p=new ReadableStream({start(m){v();function v(){d.read().then(({done:x,value:_})=>{if(x)m.close();else{A+=_.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:A,total:f});for(let S=0,w=h.length;S<w;S++){const P=h[S];P.onProgress&&P.onProgress(T)}m.enqueue(_),v()}},x=>{m.error(x)})}}});return new Response(p)}else throw new Bg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{rl.add(e,c);const h=hn[e];delete hn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=hn[e];if(h===void 0)throw this.manager.itemError(e),c;delete hn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Uc extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Rr=new Be,ol=new I,al=new I;class Og{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ol.setFromMatrixPosition(e.matrixWorld),t.position.copy(ol),al.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(al),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kg extends Og{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ll extends Uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new kg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zg extends Uc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const zo="\\[\\]\\.:\\/",Vg=new RegExp("["+zo+"]","g"),Vo="[^"+zo+"]",Hg="[^"+zo.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",Vo),Wg=/(WCOD+)?/.source.replace("WCOD",Hg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),jg=new RegExp("^"+Gg+Wg+Xg+Yg+"$"),qg=["material","materials","bones","map"];class $g{constructor(e,t,n){const i=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(e){const t=jg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=$g;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const cl=new Be;class Kg{constructor(e,t,n=0,i=1/0){this.ray=new Ki(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cl),this}intersectObject(e,t=!0,n=[]){return bo(e,this,n,t),n.sort(hl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)bo(e[i],this,n,t);return n.sort(hl),n}}function hl(s,e){return s.distance-e.distance}function bo(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)bo(r[o],e,t,!0)}}class dl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zg extends Xn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs);class Hi{constructor(e){this.fold=e,this.rootFaceIndex=0,this.spanningTree=[],this.faceAdjacency=[],this.buildGraph(),this.fold.raw&&this.fold.raw._assembly&&typeof this.fold.raw._assembly.rootFaceIndex=="number"?this.rootFaceIndex=this.fold.raw._assembly.rootFaceIndex:this.selectDefaultRoot(),this.buildSpanningTree()}buildGraph(){const e=this.fold.facesVertices.length;this.faceAdjacency=Array.from({length:e},()=>[]);const t=new Map;this.fold.facesVertices.forEach((n,i)=>{const r=n.length;for(let o=0;o<r;o++){const a=n[o],l=n[(o+1)%r],c=`${Math.min(a,l)}-${Math.max(a,l)}`;t.has(c)||t.set(c,[]),t.get(c).push({faceIndex:i,v1:a,v2:l})}}),t.forEach((n,i)=>{if(n.length===2){const r=n[0],o=n[1],a=this.fold.edgeLookup.get(i),l=(this.fold.edgesAssignment[a]||"B").toUpperCase();if(l==="C"||l==="B")return;this.faceAdjacency[r.faceIndex].push({neighborFace:o.faceIndex,edgeIndex:a,parentEdge:[r.v1,r.v2],childEdge:[o.v1,o.v2]}),this.faceAdjacency[o.faceIndex].push({neighborFace:r.faceIndex,edgeIndex:a,parentEdge:[o.v1,o.v2],childEdge:[r.v1,r.v2]})}})}selectDefaultRoot(){let e=-1,t=0;this.faceAdjacency.forEach((n,i)=>{n.length>e&&(e=n.length,t=i)}),this.rootFaceIndex=t}setRootFace(e){e>=0&&e<this.fold.facesVertices.length&&(this.rootFaceIndex=e,this.buildSpanningTree())}buildSpanningTree(){const e=this.fold.facesVertices.length,t=new Array(e).fill(!1);this.spanningTree=[];const n=[this.rootFaceIndex];for(t[this.rootFaceIndex]=!0;n.length>0;){const i=n.shift(),r=this.faceAdjacency[i]||[];for(const o of r){const a=o.neighborFace;if(!t[a]){t[a]=!0;const l=o.edgeIndex,h=(this.fold.edgesFoldAngle[l]||0)*Math.PI/180,d=o.parentEdge[0],u=o.parentEdge[1];this.spanningTree.push({parentFace:i,childFace:a,edgeIndex:l,v1Idx:d,v2Idx:u,foldAngleRad:h}),n.push(a)}}}}evaluateTransforms(e){const t=this.fold.facesVertices.length,n=Array.from({length:t},()=>new Be);n[this.rootFaceIndex].identity();const i=this.fold.vertices;for(const r of this.spanningTree){const o=n[r.parentFace],a=e*r.foldAngleRad,l=new I(...i[r.v1Idx]),c=new I(...i[r.v2Idx]),h=new I().subVectors(c,l).normalize(),d=new Be().makeTranslation(-l.x,-l.y,-l.z),u=new Be().makeRotationAxis(h,a),f=new Be().makeTranslation(l.x,l.y,l.z),g=new Be().multiply(f).multiply(u).multiply(d),A=new Be().multiplyMatrices(o,g);n[r.childFace]=A}return n}}const ul={type:"change"},Ho={type:"start"},Nc={type:"end"},ws=new Ki,fl=new bn,Qg=Math.cos(70*ks.DEG2RAD),ut=new I,Rt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ir=1e-6;class Jg extends Zg{constructor(e,t=null){super(e,t),this.state=et.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new zt,this._lastTargetPosition=new I,this._quat=new zt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dl,this._sphericalDelta=new dl,this._scale=1,this._panOffset=new I,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new I,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tA.bind(this),this._onPointerDown=eA.bind(this),this._onPointerUp=nA.bind(this),this._onContextMenu=cA.bind(this),this._onMouseWheel=rA.bind(this),this._onKeyDown=oA.bind(this),this._onTouchStart=aA.bind(this),this._onTouchMove=lA.bind(this),this._onMouseDown=iA.bind(this),this._onMouseMove=sA.bind(this),this._interceptControlDown=hA.bind(this),this._interceptControlUp=dA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ul),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;ut.copy(t).sub(this.target),ut.applyQuaternion(this._quat),this._spherical.setFromVector3(ut),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Rt:n>Math.PI&&(n-=Rt),i<-Math.PI?i+=Rt:i>Math.PI&&(i-=Rt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ut.setFromSpherical(this._spherical),ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ut.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ws.origin.copy(this.object.position),ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ws.direction))<Qg?this.object.lookAt(this.target):(fl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ws.intersectPlane(fl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ir||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ir||this._lastTargetPosition.distanceToSquared(this.target)>Ir?(this.dispatchEvent(ul),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rt/60*this.autoRotateSpeed*e:Rt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ut.setFromMatrixColumn(t,0),ut.multiplyScalar(-e),this._panOffset.add(ut)}_panUp(e,t){this.screenSpacePanning===!0?ut.setFromMatrixColumn(t,1):(ut.setFromMatrixColumn(t,0),ut.crossVectors(this.object.up,ut)),ut.multiplyScalar(e),this._panOffset.add(ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ut.copy(i).sub(this.target);let r=ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function eA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function tA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function nA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nc),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=et.DOLLY;break;case ui.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=et.ROTATE}break;case ui.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Ho)}function sA(s){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function rA(s){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(s.preventDefault(),this.dispatchEvent(Ho),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Nc))}function oA(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function aA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=et.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=et.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Ho)}function lA(s){switch(this._trackPointer(s),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=et.NONE}}function cA(s){this.enabled!==!1&&s.preventDefault()}function hA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pl={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Ws{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new yA(e)}),this.register(function(e){return new MA(e)}),this.register(function(e){return new wA(e)}),this.register(function(e){return new TA(e)}),this.register(function(e){return new CA(e)}),this.register(function(e){return new RA(e)}),this.register(function(e){return new EA(e)}),this.register(function(e){return new SA(e)}),this.register(function(e){return new bA(e)}),this.register(function(e){return new IA(e)}),this.register(function(e){return new PA(e)}),this.register(function(e){return new DA(e)}),this.register(function(e){return new FA(e)}),this.register(function(e){return new LA(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,i){const r=new vA,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const Ve={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Pr="KHR_mesh_quantization",Ft={};Ft[kt]=Ve.NEAREST;Ft[ic]=Ve.NEAREST_MIPMAP_NEAREST;Ft[Li]=Ve.NEAREST_MIPMAP_LINEAR;Ft[jt]=Ve.LINEAR;Ft[Rs]=Ve.LINEAR_MIPMAP_NEAREST;Ft[Tn]=Ve.LINEAR_MIPMAP_LINEAR;Ft[wn]=Ve.CLAMP_TO_EDGE;Ft[Ns]=Ve.REPEAT;Ft[Bs]=Ve.MIRRORED_REPEAT;const ml={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},uA=new Ce,gl=12,fA=1179937895,pA=2,Al=8,mA=1313821514,gA=5130562;function Oi(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function AA(s){return new TextEncoder().encode(s).buffer}function _A(s){return Oi(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function xA(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let o;s.itemSize>4?o=s.array[i*s.itemSize+r]:(r===0?o=s.getX(i):r===1?o=s.getY(i):r===2?o=s.getZ(i):r===3&&(o=s.getW(i)),s.normalized===!0&&(o=ks.normalize(o,s.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Bc(s){return Math.ceil(s/4)*4}function Dr(s,e=0){const t=Bc(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function _l(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function xl(s,e){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class vA{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Xs}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const i=this,r=i.buffers,o=i.json;n=i.options;const a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),d=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),d.length>0&&(o.extensionsRequired=d),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const u=new FileReader;u.readAsArrayBuffer(c),u.onloadend=function(){const f=Dr(u.result),g=new DataView(new ArrayBuffer(Al));g.setUint32(0,f.byteLength,!0),g.setUint32(4,gA,!0);const A=Dr(AA(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Al));p.setUint32(0,A.byteLength,!0),p.setUint32(4,mA,!0);const m=new ArrayBuffer(gl),v=new DataView(m);v.setUint32(0,fA,!0),v.setUint32(4,pA,!0);const x=gl+p.byteLength+A.byteLength+g.byteLength+f.byteLength;v.setUint32(8,x,!0);const _=new Blob([m,p,A,g,f],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(_),T.onloadend=function(){t(T.result)}}}else if(o.buffers&&o.buffers.length>0){const u=new FileReader;u.readAsDataURL(c),u.onloadend=function(){const f=u.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],i[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new I;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new I;for(let r=0,o=n.count;r<o;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===Mt?function(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}:function(A){return A}}e instanceof Cr&&(e=await this.decompressTextureAsync(e)),t instanceof Cr&&(t=await this.decompressTextureAsync(t));const i=e?e.image:null,r=t?t.image:null,o=Math.max(i?i.width:0,r?r.width:0),a=Math.max(i?i.height:0,r?r.height:0),l=_l();l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const h=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);const f=n(e),g=c.getImageData(0,0,o,a).data;for(let A=2;A<g.length;A+=4)h.data[A]=f(g[A]/256)*256}if(r){c.drawImage(r,0,0,o,a);const f=n(t),g=c.getImageData(0,0,o,a).data;for(let A=1;A<g.length;A+=4)h.data[A]=f(g[A]/256)*256}c.putImageData(h,0,0);const u=(e||t).clone();return u.source=new Uo(l),u.colorSpace=un,u.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case Ve.BYTE:case Ve.UNSIGNED_BYTE:a=1;break;case Ve.SHORT:case Ve.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===Ve.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Bc(i*l),h=new DataView(new ArrayBuffer(c));let d=0;for(let g=n;g<n+i;g++){for(let A=0;A<e.itemSize;A++){let p;e.itemSize>4?p=e.array[g*e.itemSize+A]:(A===0?p=e.getX(g):A===1?p=e.getY(g):A===2?p=e.getZ(g):A===3&&(p=e.getW(g)),e.normalized===!0&&(p=ks.normalize(p,e.array))),t===Ve.FLOAT?h.setFloat32(d,p,!0):t===Ve.INT?h.setInt32(d,p,!0):t===Ve.UNSIGNED_INT?h.setUint32(d,p,!0):t===Ve.SHORT?h.setInt16(d,p,!0):t===Ve.UNSIGNED_SHORT?h.setUint16(d,p,!0):t===Ve.BYTE?h.setInt8(d,p):t===Ve.UNSIGNED_BYTE&&h.setUint8(d,p),d+=a}d%l!==0&&(d+=l-d%l)}const u={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===Ve.ARRAY_BUFFER&&(u.byteStride=l),this.byteOffset+=c,o.bufferViews.push(u),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=Dr(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=Ve.FLOAT;else if(e.array.constructor===Int32Array)a=Ve.INT;else if(e.array.constructor===Uint32Array)a=Ve.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=Ve.SHORT;else if(e.array.constructor===Uint16Array)a=Ve.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=Ve.BYTE;else if(e.array.constructor===Uint8Array)a=Ve.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=e.count),i===0)return null;const l=xA(e,n,i);let c;t!==void 0&&(c=e===t.index?Ve.ELEMENT_ARRAY_BUFFER:Ve.ARRAY_BUFFER);const h=this.processBufferView(e,a,n,i,c),d={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});const h=o.images.get(e),d=i+":flipY/"+n.toString();if(h[d]!==void 0)return h[d];a.images||(a.images=[]);const u={mimeType:i},f=_l();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==Ot&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const p=new Uint8ClampedArray(e.height*e.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=e.data[m+0],p[m+1]=e.data[m+1],p[m+2]=e.data[m+2],p[m+3]=e.data[m+3];g.putImageData(new ImageData(p,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(xl(f,i).then(p=>r.processBufferViewImage(p)).then(p=>{u.bufferView=p})):f.toDataURL!==void 0?u.uri=f.toDataURL(i):c.push(xl(f,i).then(p=>new FileReader().readAsDataURL(p)).then(p=>{u.uri=p}));const A=a.images.push(u)-1;return h[d]=A,A}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Ft[e.magFilter],minFilter:Ft[e.minFilter],wrapS:Ft[e.wrapS],wrapT:Ft[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(e))return i.textures.get(e);r.textures||(r.textures=[]),e instanceof Cr&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,a)});const l=r.textures.push(a)-1;return i.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(Oi(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){const a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===Jt&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,i)});const o=n.materials.push(i)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,T=e.material.length;_<T;_++)i.push(e.material[_].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=Ve.LINES:e.isLineLoop?a=Ve.LINE_LOOP:e.isLine?a=Ve.LINE_STRIP:e.isPoints?a=Ve.POINTS:a=e.material.wireframe?Ve.LINES:Ve.TRIANGLES;const l={},c={},h=[],d=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;const T=o.attributes[_];if(_=u[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),t.attributes.has(this.getUID(T))){c[_]=t.attributes.get(this.getUID(T));continue}g=null;const w=T.array;_==="JOINTS_0"&&!(w instanceof Uint16Array)&&!(w instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new qe(new Uint16Array(w),T.itemSize,T.normalized)):(w instanceof Uint32Array||w instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=Ws.Utils.toFloat32BufferAttribute(T));const P=this.processAccessor(g||T,o);P!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,T),c[_]=P,t.attributes.set(this.getUID(T),P))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const _=[],T=[],S={};if(e.morphTargetDictionary!==void 0)for(const w in e.morphTargetDictionary)S[e.morphTargetDictionary[w]]=w;for(let w=0;w<e.morphTargetInfluences.length;++w){const P={};let E=!1;for(const y in o.morphAttributes){if(y!=="position"&&y!=="normal"){E||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),E=!0);continue}const R=o.morphAttributes[y][w],O=y.toUpperCase(),N=o.attributes[y];if(t.attributes.has(this.getUID(R,!0))){P[O]=t.attributes.get(this.getUID(R,!0));continue}const W=R.clone();if(!o.morphTargetsRelative)for(let V=0,X=R.count;V<X;V++)for(let z=0;z<R.itemSize;z++)z===0&&W.setX(V,R.getX(V)-N.getX(V)),z===1&&W.setY(V,R.getY(V)-N.getY(V)),z===2&&W.setZ(V,R.getZ(V)-N.getZ(V)),z===3&&W.setW(V,R.getW(V)-N.getW(V));P[O]=this.processAccessor(W,o),t.attributes.set(this.getUID(N,!0),P[O])}d.push(P),_.push(e.morphTargetInfluences[w]),e.morphTargetDictionary!==void 0&&T.push(S[w])}l.weights=_,T.length>0&&(l.extras={},l.extras.targetNames=T)}const A=Array.isArray(e.material);if(A&&o.groups.length===0)return null;let p=!1;if(A&&o.index===null){const _=[];for(let T=0,S=o.attributes.position.count;T<S;T++)_[T]=T;o.setIndex(_),p=!0}const m=A?e.material:[e.material],v=A?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,T=v.length;_<T;_++){const S={mode:a,attributes:c};if(this.serializeUserData(o,S),d.length>0&&(S.targets=d),o.index!==null){let P=this.getUID(o.index);(v[_].start!==void 0||v[_].count!==void 0)&&(P+=":"+v[_].start+":"+v[_].count),t.attributes.has(P)?S.indices=t.attributes.get(P):(S.indices=this.processAccessor(o.index,o,v[_].start,v[_].count),t.attributes.set(P,S.indices)),S.indices===null&&delete S.indices}const w=await this.processMaterialAsync(m[v[_].materialIndex]);w!==null&&(S.material=w),h.push(S)}p===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(e,l)});const x=n.meshes.push(l)-1;return t.meshes.set(r,x),x}detectMeshQuantization(e,t){if(this.extensionsUsed[Pr])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];pl[i]&&pl[i].includes(n)&&(this.extensionsUsed[Pr]=!0,this.extensionsRequired[Pr]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:ks.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=Ws.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let l=0;l<r.length;++l){const c=r[l],h=je.parseTrackName(c.name);let d=je.findNode(t,h.nodeName);const u=ml[h.propertyName];if(h.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(h.objectIndex):d=void 0),!d||!u){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const f=1;let g=c.values.length/c.times.length;u===ml.morphTargetInfluences&&(g/=d.morphTargetInfluences.length);let A;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(A="CUBICSPLINE",g/=3):c.getInterpolation()===Th?A="STEP":A="LINEAR",a.push({input:this.processAccessor(new qe(c.times,f)),output:this.processAccessor(new qe(c.values,g)),interpolation:A}),o.push({sampler:a.length-1,target:{node:i.get(d),path:u}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(r.bones.length*16),c=new Be;for(let d=0;d<r.bones.length;++d)a.push(n.get(r.bones[d])),c.copy(r.boneInverses[d]),c.multiply(e.bindMatrix).toArray(l,d*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new qe(l,16)),joints:a,skeleton:n.get(o)}),i.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Oi(a,[0,0,0,1])||(r.rotation=a),Oi(l,[0,0,0])||(r.translation=l),Oi(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),_A(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=await this.processMeshAsync(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const d=await this.processNodeAsync(h);d!==null&&a.push(d)}}a.length>0&&(r.children=a)}await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,r)});const o=t.nodes.push(r)-1;return i.set(e,o),o}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}async processObjectsAsync(e){const t=new yo;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof yo?await this.processSceneAsync(e[i]):n.push(e[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class yA{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const a=i.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class MA{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class EA{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class SA{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const i=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class bA{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class wA{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class TA{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class CA{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class RA{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(uA)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class IA{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class PA{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.anisotropyMap){const o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class DA{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class FA{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.bumpMap){const o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class LA{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,i=e,r=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),l=new Be,c=new I,h=new zt,d=new I;for(let f=0;f<i.count;f++)i.getMatrixAt(f,l),l.decompose(c,h,d),c.toArray(r,f*3),h.toArray(o,f*4),d.toArray(a,f*3);const u={TRANSLATION:n.processAccessor(new qe(r,3)),ROTATION:n.processAccessor(new qe(o,4)),SCALE:n.processAccessor(new qe(a,3))};i.instanceColor&&(u._COLOR_0=n.processAccessor(i.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:u},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Ws.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),o=s.createInterpolant(new s.ValueBufferType(n));let a;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(o.evaluate(e),0),r.set(s.values,n),a=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(o.evaluate(e),s.values.length),a=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return s.times=i,s.values=r,a},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let o=i[r];const a=je.parseTrackName(o.name),l=je.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Ch)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let d;if(n[l.uuid]===void 0){d=o.clone();const f=new d.ValueBufferType(c*d.times.length);for(let g=0;g<d.times.length;g++)f[g*c+h]=d.values[g];d.name=(a.nodeName||"")+".morphTargetInfluences",d.values=f,n[l.uuid]=d,t.push(d);continue}const u=o.createInterpolant(new o.ValueBufferType(1));d=n[l.uuid];for(let f=0;f<d.times.length;f++)d.values[f*c+h]=u.evaluate(d.times[f]);for(let f=0;f<o.times.length;f++){const g=this.insertKeyframe(d,o.times[f]);d.values[g*c+h]=o.values[f]}}return s.tracks=t,s},toFloat32BufferAttribute:function(s){const e=new qe(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return e.array.set(s.array),e;for(let t=0,n=s.count;t<n;t++)for(let i=0;i<s.itemSize;i++)e.setComponent(t,i,s.getComponent(t,i));return e}};const Fr={highContrast:{name:"High Contrast (Yellow/Cyan)",bg:592656,frontColor:16771584,backColor:61695,valleyColor:3900150,mountainColor:15680580,boundaryColor:16777215,cutColor:16347926,flatColor:6583435,unassignedColor:11032055,gridColor:1976635},cardboard:{name:"Cardboard Craft",bg:987673,frontColor:13935475,backColor:11107408,valleyColor:3900150,mountainColor:15680580,boundaryColor:16096779,cutColor:16347926,flatColor:6583435,unassignedColor:11032055,gridColor:1976635},blueprint:{name:"Blueprint",bg:727340,frontColor:1981066,backColor:1516884,valleyColor:6333946,mountainColor:16281969,boundaryColor:9684477,cutColor:16486972,flatColor:4674921,unassignedColor:12616956,gridColor:1976635},cyber:{name:"Cyber Neon",bg:461075,frontColor:4988309,backColor:3018853,valleyColor:440020,mountainColor:16007006,boundaryColor:11032055,cutColor:16347926,flatColor:4674921,unassignedColor:15235577,gridColor:1973067},paper:{name:"Origami Paper",bg:1579035,frontColor:16317180,backColor:14870768,valleyColor:2450411,mountainColor:14251782,boundaryColor:3359061,cutColor:14753096,flatColor:9741240,unassignedColor:9133302,gridColor:2565930}};class Lr{constructor(e,t={}){this.container=e,this.currentTheme=Fr.highContrast,this.onFaceClick=t.onFaceClick||null,this.scene=new yo,this.scene.background=new Ce(this.currentTheme.bg),this.camera=new Bt(45,e.clientWidth/e.clientHeight,.1,1e4),this.renderer=new pg({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tc,e.appendChild(this.renderer.domElement),this.controls=new Jg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.setupLights(),this.raycaster=new Kg,this.mouse=new De,this.pointerDownPos={x:0,y:0},this.renderer.domElement.addEventListener("pointerdown",n=>{this.pointerDownPos={x:n.clientX,y:n.clientY}}),this.renderer.domElement.addEventListener("pointerup",n=>{if(Math.hypot(n.clientX-this.pointerDownPos.x,n.clientY-this.pointerDownPos.y)<6&&this.onFaceClick){const r=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(n.clientX-r.left)/r.width*2-1,this.mouse.y=-((n.clientY-r.top)/r.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const o=this.faceMeshes.flatMap(l=>[l.frontMesh,l.backMesh]),a=this.raycaster.intersectObjects(o,!1);if(a.length>0){const l=a[0].object;if(l.userData&&l.userData.faceIndex!==void 0){const c=l.userData.faceIndex,h=l.userData.partIndex!==void 0?l.userData.partIndex:0;this.onFaceClick(c,h,l.userData)}}}}),this.modelGroup=new qt,this.scene.add(this.modelGroup),this.faceMeshes=[],this.creaseLines=null,this.showCreases=t.showCreases!==void 0?t.showCreases:!1,window.addEventListener("resize",()=>this.onWindowResize())}setupLights(){const e=new zg(16777215,.85);this.scene.add(e);const t=new ll(16777215,1);t.position.set(10,20,15),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.bias=-1e-4,this.scene.add(t);const n=new ll(9482495,.4);n.position.set(-10,-10,-10),this.scene.add(n)}setTheme(e){Fr[e]&&(this.currentTheme=Fr[e],this.scene.background.setHex(this.currentTheme.bg),this.gridHelper&&this.gridHelper.material.color.setHex(this.currentTheme.gridColor),this.faceMeshes.forEach(t=>{t.frontMesh.material.color.setHex(this.currentTheme.frontColor),t.backMesh.material.color.setHex(this.currentTheme.backColor)}),this.creaseLines&&this.updateCreaseColors())}triangulateFace(e,t){const n=e.length;if(n===3)return[0,1,2];if(n===4)return[0,1,2,0,2,3];const i=new I(...t[e[0]]),r=new I(...t[e[1]]);let o=new I().subVectors(r,i).normalize(),a=null;for(let u=2;u<n;u++){const f=new I(...t[e[u]]),g=new I().crossVectors(o,new I().subVectors(f,i));if(g.lengthSq()>1e-6){a=g.normalize();break}}a||(a=new I(0,0,1));const l=new I().crossVectors(a,o).normalize(),c=e.map(u=>{const f=new I(...t[u]),g=new I().subVectors(f,i);return new De(g.dot(o),g.dot(l))}),h=ko.triangulateShape(c,[]),d=[];return h.forEach(u=>{d.push(u[0],u[1],u[2])}),d.length>0?d:[0,1,2]}buildModel(e,t,n=null){if(n&&n.isAssembly)return this.buildAssembly(n);for(this.assemblyManager=null,this.fold=e,this.kinematics=t,this.partMeshGroups=[];this.modelGroup.children.length>0;){const r=this.modelGroup.children[0];r.geometry&&r.geometry.dispose(),this.modelGroup.remove(r)}this.faceMeshes=[];const i=this.fold.vertices;this.fold.facesVertices.forEach((r,o)=>{const a=this.triangulateFace(r,i),l=new Float32Array(r.length*3);r.forEach((w,P)=>{const E=i[w];l[P*3+0]=E[0],l[P*3+1]=E[1],l[P*3+2]=E[2]});let c=1/0,h=-1/0,d=1/0,u=-1/0;r.forEach(w=>{const P=i[w];P[0]<c&&(c=P[0]),P[0]>h&&(h=P[0]),P[1]<d&&(d=P[1]),P[1]>u&&(u=P[1])});const f=Math.max(h-c,1e-4),g=Math.max(u-d,1e-4),A=new Float32Array(r.length*2);r.forEach((w,P)=>{const E=i[w];A[P*2+0]=(E[0]-c)/f,A[P*2+1]=(E[1]-d)/g});const p=new dt;p.setAttribute("position",new qe(l.slice(),3)),p.setAttribute("uv",new qe(A,2)),p.setIndex(a),p.computeVertexNormals();const m=new bs({color:this.currentTheme.frontColor,roughness:.4,metalness:.1,side:en}),v=new _t(p,m);v.castShadow=!0,v.receiveShadow=!0,v.userData={faceIndex:o,partIndex:0};const x=new dt;x.setAttribute("position",new qe(l.slice(),3)),x.setIndex(a),x.computeVertexNormals();const _=new bs({color:this.currentTheme.backColor,roughness:.5,metalness:.05,side:St}),T=new _t(x,_);T.castShadow=!0,T.userData={faceIndex:o,partIndex:0};const S=new qt;S.add(v),S.add(T),this.modelGroup.add(S),this.faceMeshes.push({faceGroup:S,frontMesh:v,backMesh:T,faceVerts:r,geometryFront:p,geometryBack:x,faceBounds:{minX:c,maxX:h,minY:d,maxY:u,width:f,height:g}})}),this.buildCreaseLines(),this.centerModel()}buildAssembly(e){for(this.assemblyManager=e,this.partMeshGroups=[],this.faceMeshes=[];this.modelGroup.children.length>0;){const t=this.modelGroup.children[0];t.geometry&&t.geometry.dispose(),this.modelGroup.remove(t)}e.parts.forEach((t,n)=>{const i=new qt;i.name=`part_${t.id}`,this.modelGroup.add(i);const r=t.foldData,o=r.vertices,a=[];r.facesVertices.forEach((g,A)=>{const p=this.triangulateFace(g,o),m=new Float32Array(g.length*3);g.forEach((z,B)=>{const J=o[z];m[B*3+0]=J[0],m[B*3+1]=J[1],m[B*3+2]=J[2]});let v=1/0,x=-1/0,_=1/0,T=-1/0;g.forEach(z=>{const B=o[z];B[0]<v&&(v=B[0]),B[0]>x&&(x=B[0]),B[1]<_&&(_=B[1]),B[1]>T&&(T=B[1])});const S=Math.max(x-v,1e-4),w=Math.max(T-_,1e-4),P=new Float32Array(g.length*2);g.forEach((z,B)=>{const J=o[z];P[B*2+0]=(J[0]-v)/S,P[B*2+1]=(J[1]-_)/w});const E=new dt;E.setAttribute("position",new qe(m.slice(),3)),E.setAttribute("uv",new qe(P,2)),E.setIndex(p),E.computeVertexNormals();const y=new bs({color:this.currentTheme.frontColor,roughness:.4,metalness:.1,side:en}),R=new _t(E,y);R.castShadow=!0,R.receiveShadow=!0,R.userData={faceIndex:A,partIndex:n};const O=new dt;O.setAttribute("position",new qe(m.slice(),3)),O.setIndex(p),O.computeVertexNormals();const N=new bs({color:this.currentTheme.backColor,roughness:.5,metalness:.05,side:St}),W=new _t(O,N);W.castShadow=!0,W.userData={faceIndex:A,partIndex:n};const V=new qt;V.add(R),V.add(W),i.add(V);const X={faceGroup:V,frontMesh:R,backMesh:W,faceVerts:g,partIndex:n,faceIndex:A,faceBounds:{minX:v,maxX:x,minY:_,maxY:T,width:S,height:w}};a.push(X),this.faceMeshes.push(X)});const l=r.edgesVertices.length,c=new Float32Array(l*2*3),h=new Float32Array(l*2*3),d=new dt;d.setAttribute("position",new qe(c,3)),d.setAttribute("color",new qe(h,3));const u=new gi({vertexColors:!0,linewidth:2}),f=new Gs(d,u);f.visible=this.showCreases,i.add(f),this.partMeshGroups.push({partIndex:n,part:t,group:i,faceMeshes:a,creaseLines:f,foldData:r,kinematics:t.kinematics})}),this.centerModel()}highlightActivePart(e){}updateFaceArtworks(e,t=0){!this.faceMeshes||this.faceMeshes.length===0||this.faceMeshes.forEach(n=>{const i=n.partIndex!==void 0?n.partIndex:0,r=n.faceIndex!==void 0?n.faceIndex:0;let o=[];if(this.assemblyManager&&this.assemblyManager.isAssembly){const p=this.assemblyManager.parts[i];p&&p.faceArtworks?o=p.faceArtworks.get(r)||[]:i===t&&e&&(o=e.get(r)||[])}else e&&(o=e.get(r)||[]);let a=null;if(this.assemblyManager&&this.assemblyManager.isAssembly){const p=this.assemblyManager.parts[i];p&&p.foldData&&(a=p.foldData.vertices)}else this.fold&&(a=this.fold.vertices);const l=n.frontMesh;if(o.length===0){l.material.map&&(l.material.map.dispose(),l.material.map=null),l.material.color.setHex(this.currentTheme.frontColor),l.material.needsUpdate=!0;return}const c=document.createElement("canvas");c.width=512,c.height=512;const h=c.getContext("2d"),d="#"+this.currentTheme.frontColor.toString(16).padStart(6,"0");h.fillStyle=d,h.fillRect(0,0,512,512);const u=n.faceBounds,f=512/u.width,g=512/u.height;a&&n.faceVerts&&(h.beginPath(),n.faceVerts.forEach((p,m)=>{const v=a[p],x=(v[0]-u.minX)*f,_=(u.maxY-v[1])*g;m===0?h.moveTo(x,_):h.lineTo(x,_)}),h.closePath(),h.clip()),o.forEach(p=>{if(h.save(),p.clusterToNet){const m=p.clusterToNet;h.setTransform(m.a*f,-m.b*g,m.c*f,-m.d*g,(m.e-u.minX)*f,(u.maxY-m.f)*g)}this.drawArtworkOnCanvas(h,p,f,g),h.restore()}),l.material.map&&l.material.map.dispose();const A=new gg(c);A.colorSpace=Mt,A.needsUpdate=!0,l.material.map=A,l.material.color.setHex(16777215),l.material.needsUpdate=!0})}drawArtworkOnCanvas(e,t,n=512,i=512){const r=(t.strokeWidth||2)/(n||512),o=t.unitScale||1;if(t.type==="rect")t.fill&&t.fill!=="transparent"&&(e.fillStyle=t.fill,e.fillRect(t.x,t.y,t.width,t.height)),t.stroke&&t.stroke!=="none"&&(e.strokeStyle=t.stroke,e.lineWidth=r,e.strokeRect(t.x,t.y,t.width,t.height));else if(t.type==="circle")e.beginPath(),e.arc(t.cx,t.cy,t.r,0,Math.PI*2),t.fill&&t.fill!=="transparent"&&(e.fillStyle=t.fill,e.fill()),t.stroke&&t.stroke!=="none"&&(e.strokeStyle=t.stroke,e.lineWidth=r,e.stroke());else if(t.type==="text"){e.save(),e.translate(t.x,t.y),e.scale(1,-1),e.fillStyle=t.fill||"#ffffff";const a=(t.fontSize||24)*o;e.font=`bold ${a}px sans-serif`,e.textAlign="left",e.textBaseline="top",e.fillText(t.text||"",0,0),e.restore()}else if(t.type==="stamp"){e.save(),e.translate(t.x,t.y);const a=(t.scale||1)*o;e.scale(a,-a),this.drawStampOnCanvas(e,t),e.restore()}}drawStampOnCanvas(e,t){if(t.stampType==="fragile")e.fillStyle="#ef4444",e.fillRect(0,0,60,40),e.fillStyle="#ffffff",e.font="bold 10px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("FRAGILE",30,20);else if(t.stampType==="up")e.fillStyle="#3b82f6",e.fillRect(0,0,40,50),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(20,8),e.lineTo(10,20),e.lineTo(15,20),e.lineTo(15,38),e.lineTo(25,38),e.lineTo(25,20),e.lineTo(30,20),e.closePath(),e.fill();else if(t.stampType==="recycle")e.fillStyle="#10b981",e.beginPath(),e.arc(25,25,22,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="16px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("♻",25,25);else if(t.stampType==="barcode")e.fillStyle="#ffffff",e.fillRect(0,0,70,40),e.fillStyle="#000000",e.fillRect(5,5,3,30),e.fillRect(12,5,2,30),e.fillRect(18,5,5,30),e.fillRect(28,5,2,30),e.fillRect(35,5,4,30),e.fillRect(44,5,6,30),e.fillRect(55,5,3,30),e.fillRect(62,5,4,30);else{e.fillStyle="#f59e0b",e.beginPath();const r=25,o=25;for(let a=0;a<5;a++){const l=-Math.PI/2+a*2*Math.PI/5;e.lineTo(r+20*Math.cos(l),o+20*Math.sin(l));const c=l+Math.PI/5;e.lineTo(r+8*Math.cos(c),o+8*Math.sin(c))}e.closePath(),e.fill()}}buildCreaseLines(){this.creaseLines&&this.modelGroup.remove(this.creaseLines);const e=this.fold.edgesVertices.length,t=new Float32Array(e*2*3),n=new Float32Array(e*2*3),i=new dt;i.setAttribute("position",new qe(t,3)),i.setAttribute("color",new qe(n,3));const r=new gi({vertexColors:!0,linewidth:2});this.creaseLines=new Gs(i,r),this.creaseLines.visible=this.showCreases,this.modelGroup.add(this.creaseLines),this.updateCreaseColors()}updateCreaseColors(){if(!this.creaseLines)return;const e=this.creaseLines.geometry.attributes.color,t=e.array,n=new Ce(this.currentTheme.valleyColor),i=new Ce(this.currentTheme.mountainColor),r=new Ce(this.currentTheme.boundaryColor),o=new Ce(this.currentTheme.cutColor),a=new Ce(this.currentTheme.flatColor),l=new Ce(this.currentTheme.unassignedColor);this.fold.edgesAssignment.forEach((c,h)=>{const d=(c||"B").toUpperCase();let u=r;switch(d){case"V":u=n;break;case"M":u=i;break;case"B":u=r;break;case"C":u=o;break;case"F":u=a;break;case"U":u=l;break;default:u=r;break}const f=h*6;t[f+0]=u.r,t[f+1]=u.g,t[f+2]=u.b,t[f+3]=u.r,t[f+4]=u.g,t[f+5]=u.b}),e.needsUpdate=!0}updateFold(e,t=0){if(this.assemblyManager&&this.assemblyManager.isAssembly){this.partMeshGroups.forEach(i=>{const r=i.kinematics.evaluateTransforms(e),o=i.part.explosionVector||[0,0,0],a=t*e;if(i.part.alignQuaternion&&i.part.alignTranslation){const c=new zt().clone().slerp(i.part.alignQuaternion,e);i.group.quaternion.copy(c);const h=i.part.alignTranslation.clone().multiplyScalar(e);i.group.position.set(h.x+o[0]*a,h.y+o[1]*a,h.z+o[2]*a)}else i.group.position.set(o[0]*a,o[1]*a,o[2]*a);if(i.faceMeshes.forEach((l,c)=>{const h=r[c];h&&(l.faceGroup.matrix.copy(h),l.faceGroup.matrixAutoUpdate=!1)}),i.creaseLines&&this.showCreases){const l=i.creaseLines.geometry.attributes.position,c=l.array,h=i.foldData.vertices;i.foldData.edgesVertices.forEach((d,u)=>{const f=d[0],g=d[1],A=new I(...h[f]),p=new I(...h[g]),m=(T,S,w)=>{const P=T.length;for(let E=0;E<P;E++){const y=T[E],R=T[(E+1)%P];if(y===S&&R===w||y===w&&R===S)return!0}return!1},v=i.foldData.facesVertices.findIndex(T=>m(T,f,g)),x=v>=0?r[v]:new Be;A.applyMatrix4(x),p.applyMatrix4(x);const _=u*6;c[_+0]=A.x,c[_+1]=A.y,c[_+2]=A.z+.002,c[_+3]=p.x,c[_+4]=p.y,c[_+5]=p.z+.002}),l.needsUpdate=!0}});return}if(!this.kinematics||!this.fold)return;const n=this.kinematics.evaluateTransforms(e);if(this.faceMeshes.forEach((i,r)=>{const o=n[r];i.faceGroup.matrix.copy(o),i.faceGroup.matrixAutoUpdate=!1}),this.creaseLines&&this.showCreases){const i=this.creaseLines.geometry.attributes.position,r=i.array,o=this.fold.vertices;this.fold.edgesVertices.forEach((a,l)=>{const c=a[0],h=a[1],d=new I(...o[c]),u=new I(...o[h]),f=(m,v,x)=>{const _=m.length;for(let T=0;T<_;T++){const S=m[T],w=m[(T+1)%_];if(S===v&&w===x||S===x&&w===v)return!0}return!1},g=this.fold.facesVertices.findIndex(m=>f(m,c,h)),A=g>=0?n[g]:new Be;d.applyMatrix4(A),u.applyMatrix4(A);const p=l*6;r[p+0]=d.x,r[p+1]=d.y,r[p+2]=d.z+.002,r[p+3]=u.x,r[p+4]=u.y,r[p+5]=u.z+.002}),i.needsUpdate=!0}}centerModel(){const e=new In;if(this.assemblyManager&&this.assemblyManager.isAssembly)this.assemblyManager.parts.forEach(r=>{r.bbox&&r.bbox.min&&r.bbox.max?(e.expandByPoint(new I(...r.bbox.min)),e.expandByPoint(new I(...r.bbox.max))):r.foldData.vertices.forEach(o=>{e.expandByPoint(new I(o[0],o[1],o[2]))})});else if(this.fold)this.fold.vertices.forEach(r=>{e.expandByPoint(new I(r[0],r[1],r[2]))});else return;const t=new I;e.getCenter(t);const n=new I;e.getSize(n),this.modelGroup.position.set(-t.x,-t.y,-t.z);const i=Math.max(n.x,n.y,n.z,2);this.camera.far=Math.max(1e4,i*20),this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,i*2.2),this.controls.target.set(0,0,0),this.controls.update()}setView2D(){const e=new In().setFromObject(this.modelGroup),t=new I;e.getSize(t);const n=Math.max(t.x,t.y,4);this.camera.far=Math.max(1e4,n*20),this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,n*2.2),this.controls.target.set(0,0,0),this.controls.update()}setView3D(){const e=new In().setFromObject(this.modelGroup),t=new I;e.getSize(t);const n=Math.max(t.x,t.y,t.z,4);this.camera.far=Math.max(1e4,n*20),this.camera.updateProjectionMatrix(),this.camera.position.set(n*1.5,n*1.5,n*1.8),this.controls.target.set(0,0,0),this.controls.update()}setShowCreases(e){this.showCreases=e,this.creaseLines&&(this.creaseLines.visible=e)}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}resize(){if(!this.container)return;const e=this.container.clientWidth||300,t=this.container.clientHeight||300;e>0&&t>0&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t))}onWindowResize(){this.resize()}async exportGLB(e="folded-model"){if(!this.modelGroup||this.modelGroup.children.length===0){alert("No 3D model available to export.");return}const t=new Ws,n={binary:!0,onlyVisible:!0,embedImages:!0};return new Promise((i,r)=>{t.parse(this.modelGroup,o=>{const a=new Blob([o],{type:"model/gltf-binary"}),l=document.createElement("a");l.href=URL.createObjectURL(a),l.download=`${e}.glb`,l.click(),URL.revokeObjectURL(l.href),i()},o=>{console.error("An error occurred exporting GLB:",o),alert(`Error exporting GLB: ${o.message||o}`),r(o)},n)})}}class Oc{constructor(e,t={}){this.container=e,this.options=t,this.parts=[],this.activeIndex=0,this.wrapper=document.createElement("div"),this.wrapper.className="part-thumbnail-strip",this.container.appendChild(this.wrapper)}update(e=[],t=0){this.parts=e,this.activeIndex=t,this.render()}selectPart(e){this.activeIndex=e,this.wrapper.querySelectorAll(".part-card").forEach((n,i)=>{n.classList.toggle("active",i===e);const r=n.querySelector(".part-card-active-tag");if(i===e){if(!r){const o=document.createElement("span");o.className="part-card-active-tag",o.textContent="ACTIVE",n.appendChild(o)}}else r&&r.remove()})}render(){if(this.wrapper.innerHTML="",!this.parts||this.parts.length<=1){this.wrapper.style.display="none";return}this.wrapper.style.display="flex";const e=document.createElement("div");e.className="part-strip-label",e.innerHTML=`<span class="part-strip-icon">📦</span> Assembly Parts (${this.parts.length}):`,this.wrapper.appendChild(e);const t=document.createElement("div");t.className="part-cards-scroll",this.parts.forEach((n,i)=>{const r=n.foldData||n.foldJson||{},a=(r.facesVertices||r.faces_vertices||(n.foldJson?n.foldJson.faces_vertices:[])||[]).length,l=document.createElement("div");l.className=`part-card ${i===this.activeIndex?"active":""}`,l.setAttribute("data-part-index",i),l.title=`Switch to ${n.name} (${a} faces)`;const c=this.generateMiniSVG(n.foldJson||n.foldData),h=document.createElement("div");h.className="part-card-thumb",h.appendChild(c);const d=document.createElement("div");d.className="part-card-info";const u=document.createElement("div");u.className="part-card-title",u.textContent=n.name||`Part ${i+1}`;const f=document.createElement("div");if(f.className="part-card-badge",f.textContent=`${a} Faces`,d.appendChild(u),d.appendChild(f),i===this.activeIndex){const g=document.createElement("span");g.className="part-card-active-tag",g.textContent="ACTIVE",l.appendChild(g)}l.appendChild(h),l.appendChild(d),l.addEventListener("click",()=>{this.options.onSelectPart&&this.options.onSelectPart(i)}),t.appendChild(l)}),this.wrapper.appendChild(t)}generateMiniSVG(e){if(!e){const p=document.createElementNS("http://www.w3.org/2000/svg","svg");return p.setAttribute("viewBox","0 0 100 100"),p}const t=e.vertices_coords||e.vertices||[],n=e.faces_vertices||e.facesVertices||[];if(t.length===0||n.length===0){const p=document.createElementNS("http://www.w3.org/2000/svg","svg");return p.setAttribute("viewBox","0 0 100 100"),p}let i=1/0,r=1/0,o=-1/0,a=-1/0;t.forEach(p=>{const m=p[0]||0,v=p[1]||0;i=Math.min(i,m),o=Math.max(o,m),r=Math.min(r,v),a=Math.max(a,v)});const l=Math.max(o-i,a-r)*.1||5,c=i-l,h=r-l,d=Math.max(o-i+l*2,10),u=Math.max(a-r+l*2,10),f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("viewBox",`${c} ${h} ${d} ${u}`),f.setAttribute("class","part-mini-svg"),n.forEach(p=>{if(p.length<3)return;const m=p.map(x=>{const _=t[x]||[0,0];return`${_[0]},${_[1]}`}).join(" "),v=document.createElementNS("http://www.w3.org/2000/svg","polygon");v.setAttribute("points",m),v.setAttribute("class","part-thumb-poly"),f.appendChild(v)});const g=e.edges_vertices||e.edgesVertices||[],A=e.edges_assignment||e.edgesAssignment||[];return g.forEach((p,m)=>{const v=t[p[0]],x=t[p[1]];if(!v||!x)return;const _=document.createElementNS("http://www.w3.org/2000/svg","line");_.setAttribute("x1",v[0]),_.setAttribute("y1",v[1]),_.setAttribute("x2",x[0]),_.setAttribute("y2",x[1]);const T=A[m]||"B";_.setAttribute("class",`part-thumb-edge edge-${T}`),f.appendChild(_)}),f}}class UA{constructor(e,t){this.container=e,this.onChange=t,this.assemblyManager=null,this.onSelectAssemblyPart=null,this.thumbnailStrip=new Oc(this.container,{onSelectPart:n=>this.selectPart(n)}),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.zoom=60,this.panX=0,this.panY=0,this.isPanning=!1,this.lastMouse={x:0,y:0},this.selectedEdgeIndex=-1,this.hoveredEdgeIndex=-1,this.selectedFaceIndex=-1,this.activeDirective="V",this.foldData=this.createDefaultCubeNet(),this.setupEvents(),this.resizeCanvas(),this.centerView(),this.render()}loadAssembly(e,t=null){if(this.assemblyManager=e,this.onSelectAssemblyPart=t,e&&e.isAssembly){this.thumbnailStrip&&this.thumbnailStrip.update(e.parts,e.activePartIndex);const n=e.getActivePart();n&&this.loadFoldJSON(n.foldJson||n.foldData,!0)}else if(this.thumbnailStrip&&this.thumbnailStrip.update([],0),e){const n=e.getActivePart();n&&this.loadFoldJSON(n.foldJson||n.foldData,!0)}}selectPart(e){if(this.assemblyManager&&this.assemblyManager.parts[e])if(this.onSelectAssemblyPart)this.onSelectAssemblyPart(e);else{this.assemblyManager.setActivePartIndex(e),this.thumbnailStrip&&this.thumbnailStrip.selectPart(e);const t=this.assemblyManager.parts[e];this.loadFoldJSON(t.foldJson||t.foldData,!0)}}createDefaultCubeNet(){const t=[[0,0],[1.5,0],[1.5,1.5],[0,1.5],[3,0],[3,1.5],[-1.5,0],[-1.5,1.5],[0,3],[1.5,3],[0,-1.5],[1.5,-1.5],[0,4.5],[1.5,4.5]],n=[[0,1,2,3],[1,4,5,2],[7,6,0,3],[3,2,9,8],[10,11,1,0],[8,9,13,12]];return this.buildFoldDataFromFaces(t,n)}buildFoldDataFromFaces(e,t,n={}){const i=new Map,r=[];t.forEach(l=>{const c=l.length;for(let h=0;h<c;h++){const d=l[h],u=l[(h+1)%c],f=`${Math.min(d,u)}-${Math.max(d,u)}`;i.has(f)?i.get(f).count+=1:(r.push([Math.min(d,u),Math.max(d,u)]),i.set(f,{count:1}))}});const o=[],a=[];return r.forEach(([l,c])=>{const h=`${l}-${c}`,d=i.get(h).count===1;n[h]?(o.push(n[h].assignment),a.push(n[h].foldAngle)):d?(o.push("B"),a.push(0)):(o.push("V"),a.push(90))}),{file_spec:1.1,file_title:"Net Preparation Model",file_creator:"FOLDNet Net Editor",vertices_coords:e,faces_vertices:t,edges_vertices:r,edges_assignment:o,edges_foldAngle:a}}getFoldJSON(){return JSON.parse(JSON.stringify(this.foldData))}loadFoldJSON(e,t=!1){if(!e||!e.vertices_coords||!e.faces_vertices)return;const n=e.vertices_coords.map(l=>[l[0],l[1]]),i=e.faces_vertices.slice();let r=e.edges_vertices?e.edges_vertices.slice():[],o=e.edges_assignment?e.edges_assignment.slice():[],a=e.edges_foldAngle?e.edges_foldAngle.slice():[];if(r.length===0){const l=this.buildFoldDataFromFaces(n,i);r=l.edges_vertices,o=l.edges_assignment,a=l.edges_foldAngle}this.foldData={file_spec:e.file_spec||1.1,file_title:e.file_title||e.title||"box-net-prepared",file_creator:e.file_creator||"FOLDNet Editor",vertices_coords:n,faces_vertices:i,edges_vertices:r,edges_assignment:o,edges_foldAngle:a},this.selectedEdgeIndex=-1,this.hoveredEdgeIndex=-1,this.centerView(),this.render(),t||this.notifyChange()}notifyChange(){typeof this.onChange=="function"&&this.onChange(this.getFoldJSON())}setupEvents(){window.addEventListener("resize",()=>this.resizeCanvas()),this.canvas.addEventListener("mousedown",e=>{if(e.button===1||e.button===0&&e.shiftKey){this.isPanning=!0,this.lastMouse={x:e.clientX,y:e.clientY};return}if(e.button===0){const t=this.screenToWorld(e.offsetX,e.offsetY),n=this.findNearestEdge(t,20/this.zoom);n>=0?(this.selectedEdgeIndex=n,this.activeDirective&&this.setEdgeAssignment(n,this.activeDirective),this.render()):(this.isPanning=!0,this.lastMouse={x:e.clientX,y:e.clientY},this.selectedEdgeIndex=-1,this.render())}}),this.canvas.addEventListener("mousemove",e=>{if(this.isPanning){const i=e.clientX-this.lastMouse.x,r=e.clientY-this.lastMouse.y;this.panX+=i,this.panY+=r,this.lastMouse={x:e.clientX,y:e.clientY},this.render();return}const t=this.screenToWorld(e.offsetX,e.offsetY),n=this.findNearestEdge(t,20/this.zoom);n!==this.hoveredEdgeIndex&&(this.hoveredEdgeIndex=n,this.canvas.style.cursor=n>=0?"pointer":"default",this.render())}),this.canvas.addEventListener("mouseup",()=>{this.isPanning=!1}),this.canvas.addEventListener("mouseleave",()=>{this.isPanning=!1,this.hoveredEdgeIndex=-1,this.render()}),this.canvas.addEventListener("wheel",e=>{e.preventDefault();const t=e.deltaY<0?1.15:.85,n=this.screenToWorld(e.offsetX,e.offsetY);this.zoom=Math.min(Math.max(this.zoom*t,.05),500);const i=this.screenToWorld(e.offsetX,e.offsetY);this.panX+=(i.x-n.x)*this.zoom,this.panY-=(i.y-n.y)*this.zoom,this.render()},{passive:!1})}resizeCanvas(){const e=this.canvas.width,t=this.canvas.height;this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,(e===0||t===0)&&this.canvas.width>0&&this.canvas.height>0&&this.centerView(),this.render()}centerView(){if(!this.foldData||!this.foldData.vertices_coords||this.foldData.vertices_coords.length===0)return;let e=1/0,t=-1/0,n=1/0,i=-1/0;this.foldData.vertices_coords.forEach(f=>{e=Math.min(e,f[0]),t=Math.max(t,f[0]),n=Math.min(n,f[1]),i=Math.max(i,f[1])});const r=(e+t)/2,o=(n+i)/2,a=Math.max(t-e,.01),l=Math.max(i-n,.01),c=this.canvas.width||this.container.clientWidth||800,h=this.canvas.height||this.container.clientHeight||600,d=c*.75/a,u=h*.75/l;this.zoom=Math.min(d,u),(!Number.isFinite(this.zoom)||this.zoom<=0)&&(this.zoom=60),this.panX=c/2-r*this.zoom,this.panY=h/2+o*this.zoom,this.render()}screenToWorld(e,t){return{x:(e-this.panX)/this.zoom,y:-(t-this.panY)/this.zoom}}worldToScreen(e,t){return{x:this.panX+e*this.zoom,y:this.panY-t*this.zoom}}findNearestEdge(e,t){if(!this.foldData||!this.foldData.edges_vertices)return-1;let n=t,i=-1;return this.foldData.edges_vertices.forEach((r,o)=>{const a=this.foldData.vertices_coords[r[0]],l=this.foldData.vertices_coords[r[1]];if(!a||!l)return;const c=this.pointToSegmentDistance(e.x,e.y,a[0],a[1],l[0],l[1]);c<n&&(n=c,i=o)}),i}pointToSegmentDistance(e,t,n,i,r,o){const a=(r-n)*(r-n)+(o-i)*(o-i);if(a===0)return Math.hypot(e-n,t-i);let l=((e-n)*(r-n)+(t-i)*(o-i))/a;l=Math.max(0,Math.min(1,l));const c=n+l*(r-n),h=i+l*(o-i);return Math.hypot(e-c,t-h)}setEdgeAssignment(e,t,n=null){if(!(e<0||e>=this.foldData.edges_vertices.length)){if(this.foldData.edges_assignment[e]=t,n!==null)this.foldData.edges_foldAngle[e]=n;else switch(t){case"V":this.foldData.edges_foldAngle[e]=90;break;case"M":this.foldData.edges_foldAngle[e]=-90;break;case"B":case"C":case"F":case"U":default:this.foldData.edges_foldAngle[e]=0;break}this.render(),this.notifyChange()}}autoDetectBoundaries(){if(!this.foldData)return;const e=new Array(this.foldData.edges_vertices.length).fill(0);this.foldData.faces_vertices.forEach(t=>{const n=t.length;for(let i=0;i<n;i++){const r=t[i],o=t[(i+1)%n],a=this.findEdgeIndexByVerts(r,o);a>=0&&e[a]++}}),e.forEach((t,n)=>{t===1?(this.foldData.edges_assignment[n]="B",this.foldData.edges_foldAngle[n]=0):t>=2&&this.foldData.edges_assignment[n]==="B"&&(this.foldData.edges_assignment[n]="V",this.foldData.edges_foldAngle[n]=90)}),this.render(),this.notifyChange()}invertFolds(){this.foldData&&(this.foldData.edges_assignment.forEach((e,t)=>{const n=(e||"B").toUpperCase();n==="V"?(this.foldData.edges_assignment[t]="M",this.foldData.edges_foldAngle[t]=-90):n==="M"&&(this.foldData.edges_assignment[t]="V",this.foldData.edges_foldAngle[t]=90)}),this.render(),this.notifyChange())}flipVertically(){if(!this.foldData||!this.foldData.vertices_coords.length)return;let e=1/0,t=-1/0;this.foldData.vertices_coords.forEach(i=>{i[1]<e&&(e=i[1]),i[1]>t&&(t=i[1])});const n=(e+t)/2;this.foldData.vertices_coords.forEach(i=>{i[1]=2*n-i[1]}),this.foldData.faces_vertices&&this.foldData.faces_vertices.forEach(i=>i.reverse()),this.render(),this.notifyChange()}flipHorizontally(){if(!this.foldData||!this.foldData.vertices_coords.length)return;let e=1/0,t=-1/0;this.foldData.vertices_coords.forEach(i=>{i[0]<e&&(e=i[0]),i[0]>t&&(t=i[0])});const n=(e+t)/2;this.foldData.vertices_coords.forEach(i=>{i[0]=2*n-i[0]}),this.foldData.faces_vertices&&this.foldData.faces_vertices.forEach(i=>i.reverse()),this.render(),this.notifyChange()}attachFaceToSelectedEdge(){this.selectedEdgeIndex>=0&&this.attachFaceToEdge(this.selectedEdgeIndex)}attachFaceToEdge(e){if(e<0||e>=this.foldData.edges_vertices.length)return;const t=this.foldData.edges_vertices[e],n=t[0],i=t[1],r=this.foldData.vertices_coords[n],o=this.foldData.vertices_coords[i],a=o[0]-r[0],l=o[1]-r[1];if(Math.hypot(a,l)===0)return;let h=-l,d=a;const u=this.foldData.faces_vertices.find(_=>_.includes(n)&&_.includes(i));if(u){let _=0,T=0;u.forEach(y=>{_+=this.foldData.vertices_coords[y][0],T+=this.foldData.vertices_coords[y][1]}),_/=u.length,T/=u.length;const S=(r[0]+o[0])/2,w=(r[1]+o[1])/2,P=S-_,E=w-T;h*P+d*E<0&&(h=-h,d=-d)}const f=[r[0]+h,r[1]+d],g=[o[0]+h,o[1]+d],A=this.findOrAddVertex(f[0],f[1]),p=this.findOrAddVertex(g[0],g[1]),m=[n,i,p,A];this.foldData.faces_vertices.push(m);const v={};this.foldData.edges_vertices.forEach((_,T)=>{const S=`${Math.min(_[0],_[1])}-${Math.max(_[0],_[1])}`;v[S]={assignment:this.foldData.edges_assignment[T],angle:this.foldData.edges_foldAngle[T]}});const x=`${Math.min(n,i)}-${Math.max(n,i)}`;v[x]={assignment:"V",angle:90},this.foldData=this.buildFoldDataFromFaces(this.foldData.vertices_coords,this.foldData.faces_vertices,v),this.autoDetectBoundaries()}findOrAddVertex(e,t,n=.05){const i=this.foldData.vertices_coords.findIndex(r=>Math.hypot(r[0]-e,r[1]-t)<n);return i>=0?i:(this.foldData.vertices_coords.push([e,t]),this.foldData.vertices_coords.length-1)}findEdgeIndexByVerts(e,t){const n=Math.min(e,t),i=Math.max(e,t);return this.foldData.edges_vertices.findIndex(r=>r[0]===n&&r[1]===i||r[0]===i&&r[1]===n)}render(){const e=this.canvas.width,t=this.canvas.height;this.ctx.fillStyle="#090b10",this.ctx.fillRect(0,0,e,t),this.renderGrid(e,t),this.foldData&&(this.renderFaces(),this.renderEdges(),this.renderVertices())}renderGrid(e,t){this.ctx.strokeStyle="#1e293b",this.ctx.lineWidth=1;const n=this.screenToWorld(0,t),i=this.screenToWorld(e,0),r=1,o=Math.floor(n.x/r)*r,a=Math.ceil(i.x/r)*r,l=Math.floor(n.y/r)*r,c=Math.ceil(i.y/r)*r;this.ctx.beginPath();for(let d=o;d<=a;d+=r){const u=this.worldToScreen(d,l),f=this.worldToScreen(d,c);this.ctx.moveTo(u.x,u.y),this.ctx.lineTo(f.x,f.y)}for(let d=l;d<=c;d+=r){const u=this.worldToScreen(o,d),f=this.worldToScreen(a,d);this.ctx.moveTo(u.x,u.y),this.ctx.lineTo(f.x,f.y)}this.ctx.stroke();const h=this.worldToScreen(0,0);this.ctx.strokeStyle="rgba(255, 255, 255, 0.15)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(h.x-15,h.y),this.ctx.lineTo(h.x+15,h.y),this.ctx.moveTo(h.x,h.y-15),this.ctx.lineTo(h.x,h.y+15),this.ctx.stroke()}renderFaces(){this.foldData.faces_vertices.forEach((e,t)=>{if(e.length<3)return;this.ctx.beginPath(),e.forEach((o,a)=>{const l=this.foldData.vertices_coords[o],c=this.worldToScreen(l[0],l[1]);a===0?this.ctx.moveTo(c.x,c.y):this.ctx.lineTo(c.x,c.y)}),this.ctx.closePath(),this.ctx.fillStyle=t===0?"rgba(255, 234, 0, 0.15)":"rgba(0, 240, 255, 0.08)",this.ctx.fill();let n=0,i=0;e.forEach(o=>{const a=this.foldData.vertices_coords[o];n+=a[0],i+=a[1]}),n/=e.length,i/=e.length;const r=this.worldToScreen(n,i);this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font='11px "JetBrains Mono", monospace',this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(`F${t}${t===0?" (Root)":""}`,r.x,r.y)})}renderEdges(){const e={V:{color:"#3b82f6",dash:[6,4],width:3,label:"Valley (+90°)"},M:{color:"#ef4444",dash:[6,4],width:3,label:"Mountain (-90°)"},B:{color:"#f8fafc",dash:[],width:3,label:"Boundary"},C:{color:"#f97316",dash:[],width:2,label:"Cut"},F:{color:"#64748b",dash:[2,2],width:1.5,label:"Flat"},U:{color:"#a855f7",dash:[4,4],width:2,label:"Unassigned"}};this.foldData.edges_vertices.forEach((t,n)=>{const i=this.foldData.vertices_coords[t[0]],r=this.foldData.vertices_coords[t[1]];if(!i||!r)return;const o=this.worldToScreen(i[0],i[1]),a=this.worldToScreen(r[0],r[1]),l=(this.foldData.edges_assignment[n]||"B").toUpperCase(),c=e[l]||e.B,h=n===this.selectedEdgeIndex,d=n===this.hoveredEdgeIndex;if(this.ctx.save(),this.ctx.beginPath(),this.ctx.setLineDash(c.dash),this.ctx.moveTo(o.x,o.y),this.ctx.lineTo(a.x,a.y),h?(this.ctx.strokeStyle="#eab308",this.ctx.lineWidth=c.width+4,this.ctx.shadowColor="#eab308",this.ctx.shadowBlur=10):d?(this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=c.width+2):(this.ctx.strokeStyle=c.color,this.ctx.lineWidth=c.width),this.ctx.stroke(),this.ctx.restore(),h||d){const u=(o.x+a.x)/2,f=(o.y+a.y)/2,g=this.foldData.edges_foldAngle[n]??0;this.ctx.fillStyle=h?"#fef08a":"#ffffff",this.ctx.font='bold 12px "Outfit", sans-serif',this.ctx.textAlign="center",this.ctx.textBaseline="bottom",this.ctx.fillText(`E${n}: ${l} (${g}°)`,u,f-6)}})}renderVertices(){this.foldData.vertices_coords.forEach((e,t)=>{const n=this.worldToScreen(e[0],e[1]);this.ctx.fillStyle="#64748b",this.ctx.beginPath(),this.ctx.arc(n.x,n.y,3.5,0,Math.PI*2),this.ctx.fill()})}}const NA=/^[og]\s*(.+)?/,BA=/^mtllib /,OA=/^usemtl /,kA=/^usemap /,vl=/\s+/,yl=new I,Ur=new I,Ml=new I,El=new I,Nt=new I,Ts=new Ce;function zA(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,r=this.object.geometry.normals;yl.fromArray(i,e),Ur.fromArray(i,t),Ml.fromArray(i,n),Nt.subVectors(Ml,Ur),El.subVectors(yl,Ur),Nt.cross(El),Nt.normalize(),r.push(Nt.x,Nt.y,Nt.z),r.push(Nt.x,Nt.y,Nt.z),r.push(Nt.x,Nt.y,Nt.z)},addColor:function(e,t,n){const i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,o,a,l,c){const h=this.vertices.length;let d=this.parseVertexIndex(e,h),u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(n,h);if(this.addVertex(d,u,f),this.addColor(d,u,f),a!==void 0&&a!==""){const g=this.normals.length;d=this.parseNormalIndex(a,g),u=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(d,u,f)}else this.addFaceNormal(d,u,f);if(i!==void 0&&i!==""){const g=this.uvs.length;d=this.parseUVIndex(i,g),u=this.parseUVIndex(r,g),f=this.parseUVIndex(o,g),this.addUV(d,u,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}class VA extends Zs{constructor(e){super(e),this.materials=null}load(e,t,n,i){const r=this,o=new Lc(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new zA;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const d=c.split(vl);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Ts.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Mt),t.colors.push(Ts.r,Ts.g,Ts.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(h==="f"){const u=c.slice(1).trim().split(vl),f=[];for(let A=0,p=u.length;A<p;A++){const m=u[A];if(m.length>0){const v=m.split("/");f.push(v)}}const g=f[0];for(let A=1,p=f.length-1;A<p;A++){const m=f[A],v=f[A+1];t.addFace(g[0],m[0],v[0],g[1],m[1],v[1],g[2],m[2],v[2])}}else if(h==="l"){const d=c.substring(1).trim().split(" ");let u=[];const f=[];if(c.indexOf("/")===-1)u=d;else for(let g=0,A=d.length;g<A;g++){const p=d[g].split("/");p[0]!==""&&u.push(p[0]),p[1]!==""&&f.push(p[1])}t.addLineGeometry(u,f)}else if(h==="p"){const u=c.slice(1).trim().split(" ");t.addPointGeometry(u)}else if((i=NA.exec(c))!==null){const d=(" "+i[0].slice(1).trim()).slice(1);t.startObject(d)}else if(OA.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(BA.test(c))t.materialLibraries.push(c.substring(7).trim());else if(kA.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const u=i[1].trim().toLowerCase();t.object.smooth=u!=="0"&&u!=="off"}else t.object.smooth=!0;const d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const r=new qt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],h=c.geometry,d=c.materials,u=h.type==="Line",f=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const A=new dt;A.setAttribute("position",new At(h.vertices,3)),h.normals.length>0&&A.setAttribute("normal",new At(h.normals,3)),h.colors.length>0&&(g=!0,A.setAttribute("color",new At(h.colors,3))),h.hasUVIndices===!0&&A.setAttribute("uv",new At(h.uvs,2));const p=[];for(let v=0,x=d.length;v<x;v++){const _=d[v],T=_.name+"_"+_.smooth+"_"+g;let S=t.materials[T];if(this.materials!==null){if(S=this.materials.create(_.name),u&&S&&!(S instanceof gi)){const w=new gi;tn.prototype.copy.call(w,S),w.color.copy(S.color),S=w}else if(f&&S&&!(S instanceof Bi)){const w=new Bi({size:10,sizeAttenuation:!1});tn.prototype.copy.call(w,S),w.color.copy(S.color),w.map=S.map,S=w}}S===void 0&&(u?S=new gi:f?S=new Bi({size:1,sizeAttenuation:!1}):S=new Lg,S.name=_.name,S.flatShading=!_.smooth,S.vertexColors=g,t.materials[T]=S),p.push(S)}let m;if(p.length>1){for(let v=0,x=d.length;v<x;v++){const _=d[v];A.addGroup(_.groupStart,_.groupCount,v)}u?m=new Gs(A,p):f?m=new Tr(A,p):m=new _t(A,p)}else u?m=new Gs(A,p[0]):f?m=new Tr(A,p[0]):m=new _t(A,p[0]);m.name=c.name,r.add(m)}else if(t.vertices.length>0){const a=new Bi({size:1,sizeAttenuation:!1}),l=new dt;l.setAttribute("position",new At(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new At(t.colors,3)),a.vertexColors=!0);const c=new Tr(l,a);r.add(c)}return r}}class HA extends Zs{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Lc(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){function t(c){const h=new DataView(c),d=32/8*3+32/8*3*3+16/8,u=h.getUint32(80,!0);if(80+32/8+u*d===h.byteLength)return!0;const g=[115,111,108,105,100];for(let A=0;A<5;A++)if(n(g,h,A))return!1;return!0}function n(c,h,d){for(let u=0,f=c.length;u<f;u++)if(c[u]!==h.getUint8(d+u))return!1;return!0}function i(c){const h=new DataView(c),d=h.getUint32(80,!0);let u,f,g,A=!1,p,m,v,x,_;for(let R=0;R<70;R++)h.getUint32(R,!1)==1129270351&&h.getUint8(R+4)==82&&h.getUint8(R+5)==61&&(A=!0,p=new Float32Array(d*3*3),m=h.getUint8(R+6)/255,v=h.getUint8(R+7)/255,x=h.getUint8(R+8)/255,_=h.getUint8(R+9)/255);const T=84,S=12*4+2,w=new dt,P=new Float32Array(d*3*3),E=new Float32Array(d*3*3),y=new Ce;for(let R=0;R<d;R++){const O=T+R*S,N=h.getFloat32(O,!0),W=h.getFloat32(O+4,!0),V=h.getFloat32(O+8,!0);if(A){const X=h.getUint16(O+48,!0);X&32768?(u=m,f=v,g=x):(u=(X&31)/31,f=(X>>5&31)/31,g=(X>>10&31)/31)}for(let X=1;X<=3;X++){const z=O+X*12,B=R*3*3+(X-1)*3;P[B]=h.getFloat32(z,!0),P[B+1]=h.getFloat32(z+4,!0),P[B+2]=h.getFloat32(z+8,!0),E[B]=N,E[B+1]=W,E[B+2]=V,A&&(y.setRGB(u,f,g,Mt),p[B]=y.r,p[B+1]=y.g,p[B+2]=y.b)}}return w.setAttribute("position",new qe(P,3)),w.setAttribute("normal",new qe(E,3)),A&&(w.setAttribute("color",new qe(p,3)),w.hasColors=!0,w.alpha=_),w}function r(c){const h=new dt,d=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let g=0;const A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+A+A+A,"g"),m=new RegExp("normal"+A+A+A,"g"),v=[],x=[],_=[],T=new I;let S,w=0,P=0,E=0;for(;(S=d.exec(c))!==null;){P=E;const y=S[0],R=(S=f.exec(y))!==null?S[1]:"";for(_.push(R);(S=u.exec(y))!==null;){let W=0,V=0;const X=S[0];for(;(S=m.exec(X))!==null;)T.x=parseFloat(S[1]),T.y=parseFloat(S[2]),T.z=parseFloat(S[3]),V++;for(;(S=p.exec(X))!==null;)v.push(parseFloat(S[1]),parseFloat(S[2]),parseFloat(S[3])),x.push(T.x,T.y,T.z),W++,E++;V!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),W!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const O=P,N=E-P;h.userData.groupNames=_,h.addGroup(O,N,w),w++}return h.setAttribute("position",new At(v,3)),h.setAttribute("normal",new At(x,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d)&255;return h.buffer||h}else return c}const l=a(e);return t(l)?i(l):r(o(e))}}class Cs{static async parseCADFile(e,t){const n=t.toLowerCase().replace(".","");if(n==="obj")return this.parseOBJ(typeof e=="string"?e:new TextDecoder().decode(e));if(n==="stl")return this.parseSTL(e);if(n==="step"||n==="stp")return this.parseSTEP(typeof e=="string"?e:new TextDecoder().decode(e));throw new Error(`Unsupported CAD file extension: .${n}`)}static parseOBJ(e){const n=new VA().parse(e);return this.extractFromThreeGroup(n)}static parseSTL(e){const n=new HA().parse(e),i=new _t(n),r=new qt;return r.add(i),this.extractFromThreeGroup(r)}static parseSTEP(e){const t=[...e.matchAll(/#(\d+)\s*=\s*CARTESIAN_POINT\s*\(\s*'[^']*'\s*,\s*\(\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*\)\s*\)/gi)];if(t.length===0)throw new Error("STEP file parsing: No CARTESIAN_POINT entities found in STEP file.");const n=new Map;t.forEach(r=>{const o=parseInt(r[1],10),a=parseFloat(r[2]),l=parseFloat(r[3]),c=parseFloat(r[4]);n.set(o,[a,l,c])});const i=Array.from(n.values());if(i.length<4)throw new Error("STEP file contains insufficient 3D geometry points.");return this.createBoxMeshFromPoints(i)}static createBoxMeshFromPoints(e){let t=1/0,n=-1/0,i=1/0,r=-1/0,o=1/0,a=-1/0;e.forEach(d=>{t=Math.min(t,d[0]),n=Math.max(n,d[0]),i=Math.min(i,d[1]),r=Math.max(r,d[1]),o=Math.min(o,d[2]),a=Math.max(a,d[2])});const l=new bi(n-t,r-i,a-o);l.translate((t+n)/2,(i+r)/2,(o+a)/2);const c=new _t(l),h=new qt;return h.add(c),this.extractFromThreeGroup(h)}static extractFromThreeGroup(e,t=!0){const n=[],i=[],r=new Map,o=(a,l,c,h=1e-4)=>{let d=a,u=l,f=c;t&&(d=a,u=c,f=-l);const g=Math.round(d/h)*h,A=Math.round(u/h)*h,p=Math.round(f/h)*h,m=`${g},${A},${p}`;if(r.has(m))return r.get(m);const v=n.length;return n.push([d,u,f]),r.set(m,v),v};return e.traverse(a=>{if(a.isMesh&&a.geometry){const l=a.geometry.isBufferGeometry?a.geometry:new dt().fromGeometry(a.geometry),c=l.attributes.position,h=l.index;a.updateMatrixWorld(!0);const d=a.matrixWorld,u=(f,g,A)=>{const p=new I().fromBufferAttribute(c,f).applyMatrix4(d),m=new I().fromBufferAttribute(c,g).applyMatrix4(d),v=new I().fromBufferAttribute(c,A).applyMatrix4(d),x=o(p.x,p.y,p.z),_=o(m.x,m.y,m.z),T=o(v.x,v.y,v.z);x!==_&&_!==T&&x!==T&&i.push([x,_,T])};if(h)for(let f=0;f<h.count;f+=3)u(h.getX(f),h.getX(f+1),h.getX(f+2));else for(let f=0;f<c.count;f+=3)u(f,f+1,f+2)}}),{vertices:n,triangles:i}}static segmentConnectedTriangleBodies(e){const{vertices:t,triangles:n}=e;if(!n||n.length===0)return[];const i=new Map;n.forEach((l,c)=>{for(let h=0;h<3;h++){const d=Math.min(l[h],l[(h+1)%3]),u=Math.max(l[h],l[(h+1)%3]),f=`${d}-${u}`;i.has(f)||i.set(f,[]),i.get(f).push(c)}});const r=Array.from({length:n.length},()=>[]);i.forEach(l=>{for(let c=0;c<l.length;c++)for(let h=c+1;h<l.length;h++)r[l[c]].push(l[h]),r[l[h]].push(l[c])});const o=new Uint8Array(n.length),a=[];for(let l=0;l<n.length;l++){if(o[l])continue;const c=[],h=[l];for(o[l]=1;h.length>0;){const g=h.shift();c.push(g);for(const A of r[g])o[A]||(o[A]=1,h.push(A))}const d=new Map,u=[],f=[];c.forEach(g=>{const p=n[g].map(m=>{if(d.has(m))return d.get(m);const v=u.length;return u.push(t[m]),d.set(m,v),v});f.push(p)}),a.push({vertices:u,triangles:f})}return a}static extractMultiBodyPlanarFaces(e,t=1e-4){const n=this.segmentConnectedTriangleBodies(e);if(n.length===0)throw new Error("Invalid CAD data: no valid 3D geometry found.");const i=[];if(n.forEach((r,o)=>{try{const a=this.extractSingleBodyPlanarFaces(r,t);if(a.facesVertices.length>0){let l=1/0,c=1/0,h=1/0,d=-1/0,u=-1/0,f=-1/0;a.vertices.forEach(p=>{l=Math.min(l,p[0]),d=Math.max(d,p[0]),c=Math.min(c,p[1]),u=Math.max(u,p[1]),h=Math.min(h,p[2]),f=Math.max(f,p[2])});const g=[(l+d)/2,(c+u)/2,(h+f)/2],A=a.facesVertices.reduce((p,m)=>p+this.computeFaceArea(a.vertices,m),0);i.push({id:`part_${o}`,name:n.length>1?`Component ${o+1}`:"Main Body",vertices:a.vertices,facesVertices:a.facesVertices,bbox:{min:[l,c,h],max:[d,u,f]},center:g,area:A})}}catch(a){console.warn(`[CADParser] Warning extracting body ${o}:`,a.message)}}),i.length===0)throw new Error("Could not extract any valid orthogonal planar faces from the CAD model.");return console.log(`[CADParser] Extracted ${i.length} component(s) from CAD model.`),{isAssembly:i.length>1,components:i}}static extractSingleBodyPlanarFaces(e,t=1e-4){const{vertices:n,triangles:i}=e;if(n.length===0||i.length===0)throw new Error("Invalid CAD data: empty vertices or triangles.");const r=i.map(d=>{const u=new I(...n[d[0]]),f=new I(...n[d[1]]),g=new I(...n[d[2]]),A=new I().subVectors(f,u),p=new I().subVectors(g,u),m=new I().crossVectors(A,p).normalize(),v=Math.abs(m.x),x=Math.abs(m.y),_=Math.abs(m.z),T=Math.abs(v-1)<t&&x<t&&_<t,S=Math.abs(x-1)<t&&v<t&&_<t,w=Math.abs(_-1)<t&&v<t&&x<t;if(!T&&!S&&!w)throw new Error(`Non-orthogonal face detected (Normal: [${m.x.toFixed(3)}, ${m.y.toFixed(3)}, ${m.z.toFixed(3)}]). FOLDNet CAD import requires 3D orthogonal box geometries aligned to principal axes.`);let P=0,E=0,y=0;T&&(P=Math.sign(m.x)||1),S&&(E=Math.sign(m.y)||1),w&&(y=Math.sign(m.z)||1);const R=new I(P,E,y),O=R.dot(u),N=`${P},${E},${y}:${(Math.round(O/t)*t).toFixed(4)}`;return{tri:d,normal:R,dist:O,planeKey:N}}),o=new Map;r.forEach(d=>{o.has(d.planeKey)||o.set(d.planeKey,[]),o.get(d.planeKey).push(d.tri)});const a=[];o.forEach((d,u)=>{const f=new Map;d.forEach(v=>{for(let x=0;x<3;x++){const _=v[x],T=v[(x+1)%3],S=`${_}->${T}`,w=`${T}->${_}`;f.has(w)?f.delete(w):f.set(S,[_,T])}});const g=Array.from(f.values());if(g.length<3)return;const A=new Map;g.forEach(([v,x])=>A.set(v,x));const p=new Set,m=[];g.forEach(([v])=>{if(p.has(v))return;const x=[];let _=v;for(;_!==void 0&&!p.has(_);)p.add(_),x.push(_),_=A.get(_);x.length>=3&&m.push(x)}),m.forEach(v=>a.push(v))});const l=this.filterLargestConnectedComponent(n,a),{vertices:c,facesVertices:h}=this.subdivideNonConvexFaces(n,l);return{vertices:c,facesVertices:h}}static extractOrthogonalPlanarFaces(e,t=1e-4){const n=this.extractMultiBodyPlanarFaces(e,t),i=n.components.reduce((r,o)=>o.area>r.area?o:r,n.components[0]);return{vertices:i.vertices,facesVertices:i.facesVertices}}static computePolygonNormal(e,t){let n=0,i=0,r=0;const o=t.length;for(let l=0;l<o;l++){const c=e[t[l]],h=e[t[(l+1)%o]];n+=(c[1]-h[1])*(c[2]+h[2]),i+=(c[2]-h[2])*(c[0]+h[0]),r+=(c[0]-h[0])*(c[1]+h[1])}const a=Math.hypot(n,i,r);return a>1e-6?new I(n/a,i/a,r/a):new I(0,0,1)}static subdivideNonConvexFaces(e,t){const n=new Set,i=new Set,r=new Set,o=1e-4,a=p=>Math.round(p/o)*o;for(const p of t)for(const m of p){const v=e[m];n.add(a(v[0])),i.add(a(v[1])),r.add(a(v[2]))}const l=[...n].sort((p,m)=>p-m),c=[...i].sort((p,m)=>p-m),h=[...r].sort((p,m)=>p-m),d=e.map(p=>[a(p[0]),a(p[1]),a(p[2])]),u=new Map;d.forEach((p,m)=>{u.set(`${p[0]},${p[1]},${p[2]}`,m)});const f=(p,m,v)=>{const x=a(p),_=a(m),T=a(v),S=`${x},${_},${T}`;if(u.has(S))return u.get(S);const w=d.length;return d.push([x,_,T]),u.set(S,w),w},g=[],A=[l,c,h];for(const p of t){const m=this.computePolygonNormal(e,p),v=Math.abs(m.x),x=Math.abs(m.y),_=Math.abs(m.z);let T,S,w;v>=x&&v>=_?(T=0,S=1,w=2):x>=v&&x>=_?(T=1,S=0,w=2):(T=2,S=0,w=1);const P=a(e[p[0]][T]),E=p.map(z=>{const B=e[z];return[B[S],B[w]]});let y=1/0,R=-1/0,O=1/0,N=-1/0;for(const z of E)z[0]<y&&(y=z[0]),z[0]>R&&(R=z[0]),z[1]<O&&(O=z[1]),z[1]>N&&(N=z[1]);const W=A[S].filter(z=>z>=y-o&&z<=R+o),V=A[w].filter(z=>z>=O-o&&z<=N+o);if(W.length<2||V.length<2){g.push(p);continue}let X=0;for(let z=0;z<W.length-1;z++)for(let B=0;B<V.length-1;B++){const J=W[z],se=W[z+1],ue=V[B],be=V[B+1],He=(J+se)/2,j=(ue+be)/2;if(this.isPointInPolygon2D(He,j,E)){const le=[[J,ue],[se,ue],[se,be],[J,be]].map(([Qe,F])=>{const ct=[0,0,0];return ct[S]=Qe,ct[w]=F,ct[T]=P,f(ct[0],ct[1],ct[2])}),ne=new I(...d[le[0]]),Ee=new I(...d[le[1]]),Te=new I(...d[le[2]]),ie=new I().subVectors(Ee,ne),xe=new I().subVectors(Te,ne);new I().crossVectors(ie,xe).dot(m)<0&&le.reverse(),g.push(le),X++}}X===0&&g.push(p)}return console.log(`[CADParser] Grid refinement: ${t.length} faces → ${g.length} rectangular cells, ${d.length} vertices. Grid: X=${l.length} Y=${c.length} Z=${h.length} lines.`),{vertices:d,facesVertices:g}}static isPointInPolygon2D(e,t,n){let i=!1;const r=n.length;for(let o=0,a=r-1;o<r;a=o++){const l=n[o][0],c=n[o][1],h=n[a][0],d=n[a][1];c>t!=d>t&&e<(h-l)*(t-c)/(d-c+1e-9)+l&&(i=!i)}return i}static filterLargestConnectedComponent(e,t){if(t.length<=1)return t;const n=new Map;t.forEach((h,d)=>{const u=h.length;for(let f=0;f<u;f++){const g=h[f],A=h[(f+1)%u],p=`${Math.min(g,A)}-${Math.max(g,A)}`;n.has(p)||n.set(p,[]),n.get(p).push(d)}});const i=t.length,r=Array.from({length:i},()=>new Set);n.forEach(h=>{if(h.length>=2)for(let d=0;d<h.length;d++)for(let u=d+1;u<h.length;u++)r[h[d]].add(h[u]),r[h[u]].add(h[d])});const o=new Array(i).fill(!1),a=[];for(let h=0;h<i;h++){if(o[h])continue;const d=[],u=[h];for(o[h]=!0;u.length>0;){const f=u.shift();d.push(f),r[f].forEach(g=>{o[g]||(o[g]=!0,u.push(g))})}a.push(d)}if(a.length===1)return t;const l=a.map(h=>h.reduce((d,u)=>d+this.computeFaceArea(e,t[u]),0)),c=l.indexOf(Math.max(...l));return console.log(`[CADParser] Found ${a.length} disconnected surface components. Keeping outer surface (${a[c].length} faces, area ≈ ${l[c].toFixed(1)}).`),a[c].map(h=>t[h])}static computeFaceArea(e,t){if(t.length<3)return 0;const n=new I(...e[t[0]]);let i=0;for(let r=1;r<t.length-1;r++){const o=new I(...e[t[r]]),a=new I(...e[t[r+1]]);i+=new I().crossVectors(new I().subVectors(o,n),new I().subVectors(a,n)).length()/2}return i}}class ai{static createPRNG(e){let t=e>>>0||1;return function(){t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}static unfoldToFoldJSON(e,t,n=1,i=500,r={}){if(t.length===0)throw new Error("Unfolder: No 3D faces provided.");const o=typeof n=="function"?n:this.createPRNG(n);console.log(`[NetUnfolder] Unfolding ${t.length} faces, ${e.length} vertices with seed ${typeof n=="number"?n:"custom"}.`);const a=this.buildDualGraph(e,t);console.log(`[NetUnfolder] Dual graph built: ${a.edges.length} edges between ${a.numFaces} faces.`);let l=null;for(let c=0;c<i;c++){const h=this.computeSpanningTree(a.numFaces,a.edges,o),d=c%a.numFaces,u=this.unrollTree2D(e,t,a,h,d);if(u.success){l={...u,rootFace:d},console.log(`[NetUnfolder] Success on attempt ${c+1}. Root face: ${d}`);break}}if(!l)throw new Error(`Unfolder: Could not find a collision-free 2D unrolling after ${i} randomized attempts.`);return this.buildFoldSpecJSON(e,t,a,l,r)}static unfoldAssemblyToFold(e,t=1,n=500){const i=[...e].map((h,d)=>({comp:h,originalIdx:d}));i.sort((h,d)=>h.comp.center[0]-d.comp.center[0]);const r=e.reduce((h,d)=>h+(d.center?d.center[0]:0),0)/(e.length||1),o=[];i.forEach(({comp:h,originalIdx:d})=>{const u=typeof t=="number"?t+d*7919:t,f=this.unfoldToFoldJSON(h.vertices,h.facesVertices,u,n,{componentId:h.id,name:h.name,bbox:h.bbox,center:h.center,area:h.area});f.file_title=h.name;let g=1/0,A=-1/0,p=1/0,m=-1/0;f.vertices_coords.forEach(S=>{S[0]<g&&(g=S[0]),S[0]>A&&(A=S[0]),S[1]<p&&(p=S[1]),S[1]>m&&(m=S[1])});const v=A-g,x=m-p,_=(p+m)/2,T=Math.max(Math.max(v,x)*.1,8);o.push({comp:h,partFold:f,minX:g,maxX:A,minY:p,maxY:m,partW:v,partH:x,partMidY:_,gap:T})});const a=o.reduce((h,d,u)=>h+d.partW+(u<o.length-1?d.gap:0),0);let l=r-a/2;const c=[];return o.forEach(h=>{const d=l-h.minX,u=-h.partMidY;h.partFold.vertices_coords.forEach(f=>{f[0]=Math.round((f[0]+d)*1e3)/1e3,f[1]=Math.round((f[1]+u)*1e3)/1e3}),l+=h.partW+h.gap,c.push({id:h.comp.id,name:h.comp.name,foldData:h.partFold,bbox:h.comp.bbox,center:h.comp.center})}),{isAssembly:c.length>1,title:"Multi-Part CAD Assembly",parts:c}}static buildFoldSpecJSON(e,t,n,i,r={}){const{facePositions2D:o,treeEdges:a}=i,l=[],c=new Map,h=(x,_,T=1e-5)=>{const S=Math.round(x/T)*T,w=Math.round(_/T)*T,P=`${S.toFixed(5)},${w.toFixed(5)}`;if(c.has(P))return c.get(P);const E=l.length;return l.push([S,w]),c.set(P,E),E},d=t.map((x,_)=>o[_].map(S=>h(S[0],S[1]))),u=new Map;a.forEach(x=>{const _=t[x.f0],T=d[x.f0],S=_.indexOf(x.v1),w=_.indexOf(x.v2);if(S>=0&&w>=0){const P=T[S],E=T[w],y=`${Math.min(P,E)}-${Math.max(P,E)}`;u.set(y,x)}});const f=new Map,g=[];d.forEach(x=>{const _=x.length;for(let T=0;T<_;T++){const S=x[T],w=x[(T+1)%_],P=`${Math.min(S,w)}-${Math.max(S,w)}`;f.has(P)?f.get(P).count+=1:(g.push([Math.min(S,w),Math.max(S,w)]),f.set(P,{count:1}))}});const A=[],p=[];g.forEach(x=>{const _=`${x[0]}-${x[1]}`;if(f.get(_).count===1)A.push("B"),p.push(0);else{const S=u.get(_);if(S){const w=S.foldAngleDeg;let P="F";w<0?P="M":w>0&&(P="V"),A.push(P),p.push(w)}else A.push("C"),p.push(0)}});const m=i.rootFace!==void 0?i.rootFace:0,v=(t[m]||[]).map(x=>e[x]);return{file_spec:1.1,file_title:r.name||"Unfolded Box Net",file_creator:"FOLDNet CAD Unfolder",vertices_coords:l,faces_vertices:d,edges_vertices:g,edges_assignment:A,edges_foldAngle:p,_assembly:{componentId:r.componentId||"part_0",name:r.name||"Component",rootFaceIndex:m,target3DOrigin:r.center||[0,0,0],target3DBBox:r.bbox||null,rootFace3DVertices:v}}}static buildDualGraph(e,t){const n=t.length,i=new Map,r=t.map(l=>{let c=0,h=0,d=0;const u=l.length;for(let g=0;g<u;g++){const A=e[l[g]],p=e[l[(g+1)%u]];c+=(A[1]-p[1])*(A[2]+p[2]),h+=(A[2]-p[2])*(A[0]+p[0]),d+=(A[0]-p[0])*(A[1]+p[1])}const f=Math.hypot(c,h,d);return f>1e-6?new I(c/f,h/f,d/f):new I(0,0,1)});t.forEach((l,c)=>{const h=l.length;for(let d=0;d<h;d++){const u=l[d],f=l[(d+1)%h],g=Math.min(u,f),A=Math.max(u,f),p=`${g}-${A}`;i.has(p)||i.set(p,[]),i.get(p).push({faceIndex:c,v1:u,v2:f})}});const o=[],a=Array.from({length:n},()=>[]);return i.forEach((l,c)=>{if(l.length===2){const h=l[0],d=l[1],u=r[h.faceIndex],f=r[d.faceIndex],g=new I(...e[h.v1]),A=new I(...e[h.v2]),p=new I().subVectors(A,g).normalize(),v=new I().crossVectors(u,p).normalize().dot(f);let x=0;v<-1e-4?x=90:v>1e-4&&(x=-90);const _={f0:h.faceIndex,f1:d.faceIndex,v1:h.v1,v2:h.v2,edgeKey:c,foldAngleDeg:x};o.push(_),a[h.faceIndex].push({neighbor:d.faceIndex,edge:_}),a[d.faceIndex].push({neighbor:h.faceIndex,edge:_})}}),{numFaces:n,edges:o,adjacency:a,faceNormals:r}}static computeSpanningTree(e,t,n=Math.random){const i=n||Math.random,r=t.map(c=>{const d=Math.abs(c.foldAngleDeg)<1e-4?i()*.01:.1+i()*.9;return{...c,weight:d}});r.sort((c,h)=>c.weight-h.weight);const o=Array.from({length:e},(c,h)=>h),a=c=>o[c]===c?c:(o[c]=a(o[c]),o[c]),l=[];for(const c of r){const h=a(c.f0),d=a(c.f1);if(h!==d&&(o[h]=d,l.push(c),l.length===e-1))break}return l}static unrollTree2D(e,t,n,i,r=0){const o=n.numFaces,a=Array.from({length:o},()=>[]);i.forEach(u=>{a[u.f0].push({neighbor:u.f1,edge:u}),a[u.f1].push({neighbor:u.f0,edge:u})});const l=Array.from({length:o},()=>null),c=t[r].map(u=>e[u]);l[r]=this.projectFaceToLocal2D(c,n.faceNormals[r]);const h=new Array(o).fill(!1);h[r]=!0;const d=[r];for(;d.length>0;){const u=d.shift(),f=l[u];for(const g of a[u]){const A=g.neighbor;if(!h[A]){h[A]=!0;const p=g.edge,m=t[u],v=t[A],x=f[m.indexOf(p.v1)],_=f[m.indexOf(p.v2)];if(!x||!_)return{success:!1};const T=v.map(y=>e[y]),S=this.projectFaceToLocal2D(T,n.faceNormals[A]),w=S[v.indexOf(p.v1)],P=S[v.indexOf(p.v2)];if(!w||!P)return{success:!1};const E=this.transformPoints2D(S,w,P,x,_);l[A]=E;for(let y=0;y<o;y++)if(h[y]&&y!==A&&l[y]&&this.doFacesOverlap2D(E,l[y]))return{success:!1};d.push(A)}}}return{success:!0,facePositions2D:l,treeEdges:i}}static projectFaceToLocal2D(e,t){const n=new I(...e[0]),i=new I(...e[1]),r=new I().subVectors(i,n).normalize(),o=new I().crossVectors(t,r).normalize();return e.map(a=>{const l=new I(...a),c=new I().subVectors(l,n);return[c.dot(r),c.dot(o)]})}static transformPoints2D(e,t,n,i,r){const o=n[0]-t[0],a=n[1]-t[1],l=r[0]-i[0],c=r[1]-i[1],h=Math.atan2(a,o),u=Math.atan2(c,l)-h,f=Math.cos(u),g=Math.sin(u);return e.map(A=>{const p=(A[0]-t[0])*f-(A[1]-t[1])*g+i[0],m=(A[0]-t[0])*g+(A[1]-t[1])*f+i[1];return[p,m]})}static doFacesOverlap2D(e,t,n=.001){let i=0,r=0,o=0,a=0;if(e.forEach(c=>{i+=c[0],r+=c[1]}),t.forEach(c=>{o+=c[0],a+=c[1]}),Math.hypot(i/e.length-o/t.length,r/e.length-a/t.length)<n)return!0;const l=[e,t];for(let c=0;c<2;c++){const h=l[c],d=h.length;for(let u=0;u<d;u++){const f=h[u],g=h[(u+1)%d],A=[g[0]-f[0],g[1]-f[1]],p=[-A[1],A[0]],m=Math.hypot(p[0],p[1]);if(m<1e-9)continue;const v=p[0]/m,x=p[1]/m;let _=1/0,T=-1/0;e.forEach(P=>{const E=P[0]*v+P[1]*x;E<_&&(_=E),E>T&&(T=E)});let S=1/0,w=-1/0;if(t.forEach(P=>{const E=P[0]*v+P[1]*x;E<S&&(S=E),E>w&&(w=E)}),T<=S+n||w<=_+n)return!1}}return!0}}class Qt{static build3DAdjacency(e,t=null,n=null){const i=e.facesVertices.length,r=Array.from({length:i},()=>[]),o=t?t.evaluateTransforms(1):null,a=e.vertices,l=e.facesVertices.map((f,g)=>{const A=o?o[g]:new Be;return f.map(p=>{const m=a[p],v=new I(m[0],m[1],m[2]||0);return v.applyMatrix4(A),v})}),c=l.map(f=>{if(f.length<3)return new I(0,0,1);const g=f[0],A=f[1],p=f[2],m=new I().subVectors(p,A),v=new I().subVectors(g,A);return m.cross(v),m.lengthSq()>1e-6?m.normalize():m.set(0,0,1),m}),h=[];l.forEach((f,g)=>{const A=f.length;for(let p=0;p<A;p++){const m=f[p],v=f[(p+1)%A],x=new I().addVectors(m,v).multiplyScalar(.5),_=m.distanceTo(v);h.push({faceIndex:g,edgeIndexInFace:p,p1:m,p2:v,mid:x,segLen:_,v1_2D:e.facesVertices[g][p],v2_2D:e.facesVertices[g][(p+1)%A]})}});const d=.01,u=h.length;for(let f=0;f<u;f++){const g=h[f];for(let A=f+1;A<u;A++){const p=h[A];if(g.faceIndex!==p.faceIndex&&g.mid.distanceTo(p.mid)<d&&Math.abs(g.segLen-p.segLen)<d){const m=g.p1.distanceTo(p.p2)+g.p2.distanceTo(p.p1),v=g.p1.distanceTo(p.p1)+g.p2.distanceTo(p.p2);if(m<d*2||v<d*2){const x=m<=v,_=c[g.faceIndex],T=c[p.faceIndex],S=_.dot(T)>.98;r[g.faceIndex].push({neighborFace:p.faceIndex,edgeIndexInFace:g.edgeIndexInFace,v1_2D:g.v1_2D,v2_2D:g.v2_2D,neighborEdgeIndex:p.edgeIndexInFace,isOpposite:x,isCoPlanar:S}),r[p.faceIndex].push({neighborFace:g.faceIndex,edgeIndexInFace:p.edgeIndexInFace,v1_2D:p.v1_2D,v2_2D:p.v2_2D,neighborEdgeIndex:g.edgeIndexInFace,isOpposite:x,isCoPlanar:S})}}}}return r}static buildNeighborCluster(e,t,n,i=4){const r=t.vertices,a=t.facesVertices[e].map(x=>r[x]);let l=0,c=0;a.forEach(x=>{l+=x[0],c+=x[1]}),l/=a.length,c/=a.length;const h=a.map(x=>[x[0]-l,x[1]-c]),d=[],u=[],f=new Map,g=[];let A=0;f.set(e,{branchId:-1,depth:0,isCoPlanarWithFocus:!0}),d.push({faceIndex:e,isFocus:!0,polygon:h,origPolygon2D:a,branchId:-1,depth:0,isCoPlanarWithFocus:!0,transformToNet:{tx:l,ty:c,rot:0,scale:1},clusterToNet:{a:1,b:0,c:0,d:1,e:l,f:c},netToCluster:{a:1,b:0,c:0,d:1,e:-l,f:-c}});const p=t.facesVertices[e],m=p.length,v=n[e]||[];for(let x=0;x<m;x++){const _=v.find(N=>N.edgeIndexInFace===x),T=h[x],S=h[(x+1)%m],w=p[x],P=p[(x+1)%m],E=`${Math.min(w,P)}-${Math.max(w,P)}`,y=t.edgeLookup?t.edgeLookup.get(E):-1,R=y>=0&&t.edgesAssignment[y]||"C",O=R==="V"||R==="M"||R==="F";if(_){const N=_.neighborFace;if(u.push({edgeIndex:x,v1:w,v2:P,p1:T,p2:S,isFoldHinge:O,assignment:R,hasNeighbor:!0,neighborFace:N}),!f.has(N)&&i>=1){const V=t.facesVertices[N].map(J=>r[J]),X=_.isOpposite!==void 0?_.isOpposite:!0,z=this.alignNeighborFaceToEdge(V,_.neighborEdgeIndex,T,S,X);if(Qt.checkPolygonOverlap(z,d))continue;const B=A++;f.set(N,{branchId:B,depth:1,isCoPlanarWithFocus:_.isCoPlanar}),d.push({faceIndex:N,isFocus:!1,polygon:z,origPolygon2D:V,sharedEdgeIndex:x,branchId:B,depth:1,isCoPlanarWithFocus:_.isCoPlanar,isFoldHinge:O,clusterToNet:Qt.computeRigidAffine(z,V),netToCluster:Qt.computeRigidAffine(V,z)}),g.push({faceIndex:N,localPolygon:z,entryEdgeIndex:_.neighborEdgeIndex,branchId:B,depth:1})}}else u.push({edgeIndex:x,v1:w,v2:P,p1:T,p2:S,isFoldHinge:O,assignment:R,hasNeighbor:!1,neighborFace:null})}for(;g.length>0;){const x=g.shift();if(x.depth>=i)continue;const _=x.faceIndex,T=t.facesVertices[_],S=T.length,w=n[_]||[],P=new Set,E=(x.entryEdgeIndex+Math.floor(S/2))%S;P.add(E);const y=(x.entryEdgeIndex+1)%S;P.add(y),w.forEach(R=>{R.isCoPlanar&&P.add(R.edgeIndexInFace)});for(const R of P){if(R===x.entryEdgeIndex)continue;const O=w.find(ne=>ne.edgeIndexInFace===R);if(!O)continue;const N=O.neighborFace;if(f.has(N))continue;const W=x.localPolygon[R],V=x.localPolygon[(R+1)%S],z=t.facesVertices[N].map(ne=>r[ne]),B=O.isOpposite!==void 0?O.isOpposite:!0,J=this.alignNeighborFaceToEdge(z,O.neighborEdgeIndex,W,V,B);if(Qt.checkPolygonOverlap(J,d))continue;const se=x.depth+1;f.set(N,{branchId:x.branchId,depth:se,isCoPlanarWithFocus:O.isCoPlanar});const ue=T[R],be=T[(R+1)%S],He=`${Math.min(ue,be)}-${Math.max(ue,be)}`,j=t.edgeLookup?t.edgeLookup.get(He):-1,Q=j>=0&&t.edgesAssignment[j]||"C",le=Q==="V"||Q==="M"||Q==="F";u.push({edgeIndex:R,v1:ue,v2:be,p1:W,p2:V,isFoldHinge:le,assignment:Q,hasNeighbor:!0,neighborFace:N}),d.push({faceIndex:N,isFocus:!1,polygon:J,origPolygon2D:z,sharedEdgeIndex:R,branchId:x.branchId,depth:se,isCoPlanarWithFocus:O.isCoPlanar,isFoldHinge:le,clusterToNet:Qt.computeRigidAffine(J,z),netToCluster:Qt.computeRigidAffine(z,J)}),g.push({faceIndex:N,localPolygon:J,entryEdgeIndex:O.neighborEdgeIndex,branchId:x.branchId,depth:se})}}return{focusFaceIndex:e,clusterFaces:d,clusterEdges:u,center:[l,c]}}static alignNeighborFaceToEdge(e,t,n,i,r=!0){const o=e.length,a=e[t],l=e[(t+1)%o],c=r?l:a,h=r?a:l,d=h[0]-c[0],u=h[1]-c[1],f=i[0]-n[0],g=i[1]-n[1],A=Math.atan2(u,d),m=Math.atan2(g,f)-A,v=Math.cos(m),x=Math.sin(m);return e.map(_=>{const T=(_[0]-c[0])*v-(_[1]-c[1])*x+n[0],S=(_[0]-c[0])*x+(_[1]-c[1])*v+n[1];return[T,S]})}static mapClusterPointToFaceUV(e,t){let n=1/0,i=-1/0,r=1/0,o=-1/0;t.forEach(c=>{c[0]<n&&(n=c[0]),c[0]>i&&(i=c[0]),c[1]<r&&(r=c[1]),c[1]>o&&(o=c[1])});const a=(e[0]-n)/(i-n||1),l=(e[1]-r)/(o-r||1);return[a,l]}static computeRigidAffine(e,t){const n=e[0],i=e[1],r=t[0],o=t[1],a=i[0]-n[0],l=i[1]-n[1],c=o[0]-r[0],h=o[1]-r[1],d=Math.hypot(a,l),u=Math.hypot(c,h),f=d>1e-9?u/d:1,g=Math.atan2(l,a),p=Math.atan2(h,c)-g,m=Math.cos(p)*f,v=Math.sin(p)*f;return{a:m,b:v,c:-v,d:m,e:r[0]-m*n[0]+v*n[1],f:r[1]-v*n[0]-m*n[1]}}static composeAffine(e,t){return{a:e.a*t.a+e.c*t.b,b:e.b*t.a+e.d*t.b,c:e.a*t.c+e.c*t.d,d:e.b*t.c+e.d*t.d,e:e.a*t.e+e.c*t.f+e.e,f:e.b*t.e+e.d*t.f+e.f}}static applyAffine(e,t,n){return{x:e.a*t+e.c*n+e.e,y:e.b*t+e.d*n+e.f}}static checkPolygonOverlap(e,t){let n=0,i=0;e.forEach(d=>{n+=d[0],i+=d[1]}),n/=e.length,i/=e.length;let r=1/0,o=-1/0,a=1/0,l=-1/0;e.forEach(d=>{r=Math.min(r,d[0]),o=Math.max(o,d[0]),a=Math.min(a,d[1]),l=Math.max(l,d[1])});const c=o-r,h=l-a;for(const d of t){const u=d.polygon;let f=1/0,g=-1/0,A=1/0,p=-1/0,m=0,v=0;if(u.forEach(_=>{f=Math.min(f,_[0]),g=Math.max(g,_[0]),A=Math.min(A,_[1]),p=Math.max(p,_[1]),m+=_[0],v+=_[1]}),m/=u.length,v/=u.length,Math.hypot(n-m,i-v)<.25*Math.min(c,h)||this.isPointInsidePoly([n,i],u)||this.isPointInsidePoly([m,v],e))return!0}return!1}static isPointInsidePoly(e,t){let n=!1;const i=t.length;for(let r=0,o=i-1;r<i;o=r++){const a=t[r][0],l=t[r][1],c=t[o][0],h=t[o][1];l>e[1]!=h>e[1]&&e[0]<(c-a)*(e[1]-l)/(h-l||1e-9)+a&&(n=!n)}return n}}class GA{constructor(e,t={}){this.container=e,this.assemblyManager=null,this.onSelectAssemblyPart=null,this.thumbnailStrip=null,this.foldData=null,this.kinematics=null,this.cadDualGraph=null,this.focusFaceIndex=0,this.faceAdjacency3D=[],this.currentCluster=null,this.partArtworksMap=new Map,this.currentPartIndex=0,this.faceArtworks=new Map,this.activeTool="rect",this.selectedElement=null,this.fillColor="#3b82f6",this.strokeColor="#ffffff",this.strokeWidth=2,this.textValue="BOX LOGO",this.fontSize=24,this.activeStamp="fragile",this.zoom=2,this.panX=0,this.panY=0,this.isPanning=!1,this.panStart={x:0,y:0},this.clusterDepth=1,this.isDrawing=!1,this.drawStart=null,this.undoStack=[],this.redoStack=[],this.onTextureUpdate=t.onTextureUpdate||null,this.onFocusChange=t.onFocusChange||null,this.initUI(),this.bindEvents()}initUI(){this.container.innerHTML=`
      <div class="studio-wrapper">
        <!-- Graphic Studio Top Toolbar (matching Net Editor layout) -->
        <div class="studio-top-toolbar">
          <div class="toolbar-section">
            <span class="toolbar-label">Graphic Studio:</span>
            <span class="cluster-badge">Focus Face: <strong id="lbl-focus-face">F0</strong></span>
            <span class="cluster-legend">
              <span class="legend-item"><span class="dot fold-dot"></span> Fold Hinge</span>
              <span class="legend-item"><span class="dot cut-dot"></span> 3D Seam (Cut Line)</span>
            </span>
          </div>

          <div class="toolbar-section">
            <span class="toolbar-label">Unpack Depth:</span>
            <select id="studio-depth-select" class="custom-select custom-select-sm" title="Cardinal Unpack Depth">
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="999">Max</option>
            </select>
          </div>

          <div class="toolbar-section right">
            <button id="btn-studio-toggle-preview" class="btn btn-secondary active" title="Toggle Pop-Out Live 3D Preview Sidebar">
              <span>👁️ 3D Preview</span>
            </button>
          </div>
        </div>

        <div id="studio-part-strip-container"></div>

        <div class="studio-layout">
          <!-- Studio Left Toolbar -->
          <aside class="studio-toolbar">
            <div class="tool-section">
              <span class="tool-section-title">Vector Tools</span>
              <div class="tool-btn-group">
                <button class="tool-btn" data-tool="select" title="Select & Move (V)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3l7 18 3-7 7-3L3 3z"></path>
                  </svg>
                  <span>Select</span>
                </button>
                <button class="tool-btn active" data-tool="rect" title="Rectangle (R)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  </svg>
                  <span>Rect</span>
                </button>
                <button class="tool-btn" data-tool="circle" title="Circle (C)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="9"></circle>
                  </svg>
                  <span>Circle</span>
                </button>
                <button class="tool-btn" data-tool="text" title="Text Label (T)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="4 7 4 4 20 4 20 7"></polyline>
                    <line x1="9" y1="20" x2="15" y2="20"></line>
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                  </svg>
                  <span>Text</span>
                </button>
                <button class="tool-btn" data-tool="stamp" title="Stamps & Decals (S)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span>Stamp</span>
                </button>
              </div>
            </div>

            <div class="tool-section">
              <span class="tool-section-title">Fill & Stroke</span>
              <div class="color-row">
                <label class="color-picker-label" title="Fill Color">
                  <span>Fill:</span>
                  <input type="color" id="studio-fill-color" value="#3b82f6" />
                </label>
                <label class="color-picker-label" title="Stroke Color">
                  <span>Stroke:</span>
                  <input type="color" id="studio-stroke-color" value="#ffffff" />
                </label>
              </div>
              <div class="control-slider-group">
                <label>Stroke Width: <span id="val-stroke-width">2px</span></label>
                <input type="range" id="studio-stroke-width" min="0" max="10" value="2" />
              </div>
            </div>

            <div class="tool-section stamp-options" style="display: none;">
              <span class="tool-section-title">Stamp Type</span>
              <select id="studio-stamp-select" class="custom-select">
                <option value="fragile">📦 Fragile / Handle with Care</option>
                <option value="up">⬆️ This Way Up</option>
                <option value="recycle">♻️ Recyclable</option>
                <option value="barcode">📊 Barcode & QR</option>
                <option value="star">⭐ Quality Seal</option>
              </select>
            </div>

            <div class="tool-section text-options" style="display: none;">
              <span class="tool-section-title">Text Options</span>
              <input type="text" id="studio-text-input" class="text-input" value="BOX LOGO" placeholder="Enter text..." />
              <div class="control-slider-group">
                <label>Font Size: <span id="val-font-size">24px</span></label>
                <input type="range" id="studio-font-size" min="12" max="64" value="24" />
              </div>
            </div>

            <div class="tool-section">
              <span class="tool-section-title">Actions</span>
              <div class="action-btn-group">
                <button id="btn-studio-undo" class="btn btn-secondary btn-sm" title="Undo (Ctrl+Z)">Undo</button>
                <button id="btn-studio-clear" class="btn btn-secondary btn-sm" title="Clear current face">Clear Face</button>
                <button id="btn-studio-clear-all" class="btn btn-danger btn-sm" title="Clear all faces">Reset Art</button>
              </div>
            </div>
          </aside>

          <!-- Studio Main Canvas Viewport -->
          <main class="studio-canvas-container">
            <svg id="studio-svg-canvas" class="studio-canvas" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              <g id="cluster-root-group"></g>
            </svg>

            <!-- Mini Map Face Navigator -->
            <div class="face-navigator">
              <span class="navigator-title">Net Overview (Click Face to Focus)</span>
              <svg id="navigator-svg" width="160" height="120"></svg>
            </div>
          </main>

          <!-- Pop-Out Live 3D Preview Sidebar in Graphic Studio -->
          <aside id="studio-preview-sidebar" class="preview-sidebar open">
            <div class="preview-header">
              <div class="preview-title">
                <span class="preview-dot"></span>
                <h3>Live 3D Fold Preview</h3>
              </div>
              <button id="btn-studio-close-preview" class="btn-close">&times;</button>
            </div>

            <div id="studio-preview-canvas-container" class="preview-canvas-container"></div>

            <div class="preview-controls-bar">
              <button id="btn-studio-preview-play" class="btn btn-primary btn-round btn-sm" title="Play/Pause 3D Preview">
                <svg id="studio-preview-play-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <svg id="studio-preview-pause-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              </button>

              <div class="preview-slider-container">
                <input type="range" id="studio-preview-fold-slider" min="0" max="100" step="0.1" value="0" />
              </div>
              <span id="studio-preview-slider-value" class="preview-slider-val">0%</span>
            </div>
          </aside>
        </div>
      </div>
    `,this.svgElement=this.container.querySelector("#studio-svg-canvas"),this.rootGroup=this.container.querySelector("#cluster-root-group"),this.navSvg=this.container.querySelector("#navigator-svg");const e=this.container.querySelector("#studio-part-strip-container");e&&(this.thumbnailStrip=new Oc(e,{onSelectPart:t=>this.selectPart(t)}))}loadAssembly(e,t=null){if(this.assemblyManager=e,this.onSelectAssemblyPart=t,e&&e.isAssembly){this.thumbnailStrip&&this.thumbnailStrip.update(e.parts,e.activePartIndex);const n=e.getActivePart();n&&this.loadModel(n.foldData,n.kinematics,null,e.activePartIndex)}else if(this.thumbnailStrip&&this.thumbnailStrip.update([],0),e){const n=e.getActivePart();n&&this.loadModel(n.foldData,n.kinematics,null,0)}}selectPart(e){if(this.assemblyManager&&this.assemblyManager.parts[e])if(this.onSelectAssemblyPart)this.onSelectAssemblyPart(e);else{this.assemblyManager.setActivePartIndex(e),this.thumbnailStrip&&this.thumbnailStrip.selectPart(e);const t=this.assemblyManager.parts[e];this.loadModel(t.foldData,t.kinematics)}}bindEvents(){this.container.querySelectorAll(".tool-btn").forEach(l=>{l.addEventListener("click",()=>{this.container.querySelectorAll(".tool-btn").forEach(c=>c.classList.remove("active")),l.classList.add("active"),this.activeTool=l.getAttribute("data-tool"),this.container.querySelector(".stamp-options").style.display=this.activeTool==="stamp"?"block":"none",this.container.querySelector(".text-options").style.display=this.activeTool==="text"?"block":"none"})}),this.container.querySelector("#studio-fill-color").addEventListener("input",l=>{this.fillColor=l.target.value}),this.container.querySelector("#studio-stroke-color").addEventListener("input",l=>{this.strokeColor=l.target.value}),this.container.querySelector("#studio-stroke-width").addEventListener("input",l=>{this.strokeWidth=parseInt(l.target.value,10),this.container.querySelector("#val-stroke-width").textContent=`${this.strokeWidth}px`}),this.container.querySelector("#studio-text-input").addEventListener("input",l=>{this.textValue=l.target.value}),this.container.querySelector("#studio-font-size").addEventListener("input",l=>{this.fontSize=parseInt(l.target.value,10),this.container.querySelector("#val-font-size").textContent=`${this.fontSize}px`}),this.container.querySelector("#studio-stamp-select").addEventListener("change",l=>{this.activeStamp=l.target.value});const a=this.container.querySelector("#studio-depth-select");a&&a.addEventListener("change",l=>{this.clusterDepth=parseInt(l.target.value,10)||4,this.updateClusterView()}),this.container.querySelector("#btn-studio-undo").addEventListener("click",()=>this.undo()),this.container.querySelector("#btn-studio-clear").addEventListener("click",()=>this.clearActiveFace()),this.container.querySelector("#btn-studio-clear-all").addEventListener("click",()=>this.clearAll()),this.svgElement.addEventListener("pointerdown",l=>this.onPointerDown(l)),this.svgElement.addEventListener("pointermove",l=>this.onPointerMove(l)),this.svgElement.addEventListener("pointerup",l=>this.onPointerUp(l)),this.svgElement.addEventListener("wheel",l=>this.onWheel(l),{passive:!1}),window.addEventListener("keydown",l=>{(this.container.closest(".active")||this.container.offsetParent!==null)&&l.key==="z"&&(l.ctrlKey||l.metaKey)&&(l.preventDefault(),this.undo())})}loadModel(e,t=null,n=null,i=0){this.foldData=e,this.kinematics=t,this.cadDualGraph=n,this.currentPartIndex=i,this.partArtworksMap.has(i)||this.partArtworksMap.set(i,new Map),this.faceArtworks=this.partArtworksMap.get(i),this.assemblyManager&&this.assemblyManager.parts[i]&&(this.assemblyManager.parts[i].faceArtworks=this.faceArtworks),this.faceAdjacency3D=Qt.build3DAdjacency(e,t,n),this.focusFaceIndex=0,this.panX=0,this.panY=0,this.autoFitZoom(),this.updateClusterView(),this.updateNavigator()}autoFitZoom(){if(!this.foldData||!this.foldData.vertices||this.foldData.vertices.length===0)return;let e=1/0,t=-1/0,n=1/0,i=-1/0;this.foldData.vertices.forEach(u=>{u[0]<e&&(e=u[0]),u[0]>t&&(t=u[0]),u[1]<n&&(n=u[1]),u[1]>i&&(i=u[1])});const r=Math.max(t-e,.01),o=Math.max(i-n,.01),a=Math.max(r,o),l=this.foldData.facesVertices.length||1,c=Math.max(a/Math.sqrt(l),.01),d=250/c;this.modelUnitScale=c/100,this.zoom=Math.max(.01,Math.min(2e3,d)),this.minZoom=this.zoom*.05,this.maxZoom=this.zoom*50}setFocusFace(e){e>=0&&e<this.foldData.facesVertices.length&&(this.focusFaceIndex=e,this.updateClusterView(),this.updateNavigator(),this.onFocusChange&&this.onFocusChange(e))}updateClusterView(){if(!this.foldData)return;const e=this.clusterDepth||4;this.currentCluster=Qt.buildNeighborCluster(this.focusFaceIndex,this.foldData,this.faceAdjacency3D,e),this.container.querySelector("#lbl-focus-face").textContent=`F${this.focusFaceIndex}`,this.renderClusterSVG()}renderClusterSVG(){if(!this.currentCluster)return;const e=this.currentCluster,t=this.svgElement.getBoundingClientRect(),n=t.width/2+this.panX,i=t.height/2+this.panY;this.rootGroup.innerHTML="",this.rootGroup.setAttribute("transform",`translate(${n}, ${i}) scale(${this.zoom}, ${-this.zoom})`);const r=document.createElementNS("http://www.w3.org/2000/svg","defs");e.clusterFaces.forEach(o=>{const a=document.createElementNS("http://www.w3.org/2000/svg","clipPath");a.setAttribute("id",`face-clip-${o.faceIndex}`);const l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points",o.polygon.map(c=>`${c[0]},${c[1]}`).join(" ")),a.appendChild(l),r.appendChild(a)}),this.rootGroup.appendChild(r),e.clusterFaces.forEach(o=>{const a=o.polygon.map(g=>`${g[0]},${g[1]}`).join(" "),l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points",a);let c="cluster-face neighbor";o.isFocus?c="cluster-face focus":o.isCoPlanarWithFocus&&(c="cluster-face coplanar"),l.setAttribute("class",c),l.setAttribute("data-face",o.faceIndex),o.isFocus||l.addEventListener("click",g=>{g.stopPropagation(),this.setFocusFace(o.faceIndex)}),this.rootGroup.appendChild(l);let h=0,d=0;o.polygon.forEach(g=>{h+=g[0],d+=g[1]}),h/=o.polygon.length,d/=o.polygon.length;const u=document.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("x",h),u.setAttribute("y",-d),u.setAttribute("transform","scale(1, -1)"),u.setAttribute("class","face-id-label");const f=Math.max(.001,14/(this.zoom||1));u.setAttribute("font-size",`${f}px`),u.textContent=o.isFocus?`F${o.faceIndex} (Focus)`:`F${o.faceIndex}`,this.rootGroup.appendChild(u)}),e.clusterFaces.forEach(o=>{const a=this.faceArtworks.get(o.faceIndex)||[];if(a.length===0)return;const l=document.createElementNS("http://www.w3.org/2000/svg","g");l.setAttribute("clip-path",`url(#face-clip-${o.faceIndex})`),l.setAttribute("class",`face-art-layer face-${o.faceIndex}`),a.forEach(c=>{const h=c.clusterToNet?Qt.composeAffine(o.netToCluster,c.clusterToNet):{a:1,b:0,c:0,d:1,e:0,f:0},d=document.createElementNS("http://www.w3.org/2000/svg","g");d.setAttribute("transform",`matrix(${h.a} ${h.b} ${h.c} ${h.d} ${h.e} ${h.f})`);const u=this.createSVGElementFromSpec(c,o);u&&(d.appendChild(u),l.appendChild(d))}),this.rootGroup.appendChild(l)}),e.clusterEdges.forEach(o=>{const a=document.createElementNS("http://www.w3.org/2000/svg","line");a.setAttribute("x1",o.p1[0]),a.setAttribute("y1",o.p1[1]),a.setAttribute("x2",o.p2[0]),a.setAttribute("y2",o.p2[1]),a.setAttribute("class",o.isFoldHinge?"cluster-crease fold":"cluster-crease cut-seam"),this.rootGroup.appendChild(a)})}createSVGElementFromSpec(e,t=null){let n=null;const i=this.modelUnitScale||1;return e.type==="rect"?(n=document.createElementNS("http://www.w3.org/2000/svg","rect"),n.setAttribute("x",e.x),n.setAttribute("y",e.y),n.setAttribute("width",e.width),n.setAttribute("height",e.height)):e.type==="circle"?(n=document.createElementNS("http://www.w3.org/2000/svg","circle"),n.setAttribute("cx",e.cx),n.setAttribute("cy",e.cy),n.setAttribute("r",e.r)):e.type==="text"?(n=document.createElementNS("http://www.w3.org/2000/svg","text"),n.setAttribute("x",e.x),n.setAttribute("y",-e.y),n.setAttribute("transform","scale(1, -1)"),n.setAttribute("dominant-baseline","hanging"),n.setAttribute("font-size",(e.fontSize||24)*i),n.setAttribute("font-weight","bold"),n.setAttribute("font-family","sans-serif"),n.textContent=e.text):e.type==="stamp"&&(n=this.createStampElement(e)),n&&(n.setAttribute("fill",e.fill||"transparent"),n.setAttribute("stroke",e.stroke||"none"),n.setAttribute("stroke-width",`${e.strokeWidth||2}px`),n.setAttribute("vector-effect","non-scaling-stroke"),n.setAttribute("class","artwork-element")),n}createStampElement(e){const t=this.modelUnitScale||1,n=document.createElementNS("http://www.w3.org/2000/svg","g"),i=(e.scale||1)*t;return n.setAttribute("transform",`translate(${e.x}, ${e.y}) scale(${i}, ${-i})`),e.stampType==="fragile"?n.innerHTML=`
        <rect width="60" height="40" rx="4" fill="#ef4444" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <text x="30" y="24" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">FRAGILE</text>
      `:e.stampType==="up"?n.innerHTML=`
        <rect width="40" height="50" rx="4" fill="#3b82f6" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <path d="M20 12 L10 24 L16 24 L16 38 L24 38 L24 24 L30 24 Z" fill="#ffffff" />
      `:e.stampType==="recycle"?n.innerHTML=`
        <circle cx="25" cy="25" r="22" fill="#10b981" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <text x="25" y="30" fill="#ffffff" font-size="16" text-anchor="middle">♻</text>
      `:e.stampType==="barcode"?n.innerHTML=`
        <rect width="70" height="40" fill="#ffffff" stroke="#000000" stroke-width="1" vector-effect="non-scaling-stroke" />
        <line x1="10" y1="8" x2="10" y2="32" stroke="#000" stroke-width="3" />
        <line x1="18" y1="8" x2="18" y2="32" stroke="#000" stroke-width="1" />
        <line x1="24" y1="8" x2="24" y2="32" stroke="#000" stroke-width="4" />
        <line x1="34" y1="8" x2="34" y2="32" stroke="#000" stroke-width="2" />
        <line x1="42" y1="8" x2="42" y2="32" stroke="#000" stroke-width="1" />
        <line x1="50" y1="8" x2="50" y2="32" stroke="#000" stroke-width="4" />
        <line x1="60" y1="8" x2="60" y2="32" stroke="#000" stroke-width="2" />
      `:n.innerHTML=`
        <polygon points="25,5 31,18 45,18 34,27 38,40 25,32 12,40 16,27 5,18 19,18" fill="#f59e0b" stroke="#ffffff" stroke-width="1" vector-effect="non-scaling-stroke" />
      `,n}getCanvasCoords(e){const t=this.svgElement.getBoundingClientRect(),n=t.width/2+this.panX,i=t.height/2+this.panY,r=(e.clientX-t.left-n)/this.zoom,o=-(e.clientY-t.top-i)/this.zoom;return{x:r,y:o}}onPointerDown(e){if(e.button===1||e.shiftKey){this.isPanning=!0,this.panStart={x:e.clientX-this.panX,y:e.clientY-this.panY};return}const t=this.getCanvasCoords(e),n=this.modelUnitScale||1;if(this.isDrawing=!0,this.drawStart=t,this.activeTool==="stamp"){const i={type:"stamp",stampType:this.activeStamp,x:t.x-30*n,y:t.y-20*n,scale:1,unitScale:n,faceIndex:this.focusFaceIndex};this.addArtwork(i),this.isDrawing=!1}else if(this.activeTool==="text"){const i={type:"text",text:this.textValue,x:t.x,y:t.y,fontSize:this.fontSize,unitScale:n,fill:this.fillColor,stroke:this.strokeColor,strokeWidth:this.strokeWidth,faceIndex:this.focusFaceIndex};this.addArtwork(i),this.isDrawing=!1}}onPointerMove(e){if(this.isPanning){this.panX=e.clientX-this.panStart.x,this.panY=e.clientY-this.panStart.y,this.renderClusterSVG();return}if(!this.isDrawing||!this.drawStart)return;const t=this.getCanvasCoords(e);this.modelUnitScale;let n=this.rootGroup.querySelector("#draw-preview");if(n||(n=document.createElementNS("http://www.w3.org/2000/svg",this.activeTool==="circle"?"circle":"rect"),n.setAttribute("id","draw-preview"),n.setAttribute("fill",this.fillColor),n.setAttribute("stroke",this.strokeColor),n.setAttribute("stroke-width",`${this.strokeWidth||2}px`),n.setAttribute("vector-effect","non-scaling-stroke"),n.setAttribute("opacity","0.6"),this.rootGroup.appendChild(n)),this.activeTool==="rect"){const i=Math.min(this.drawStart.x,t.x),r=Math.min(this.drawStart.y,t.y),o=Math.abs(t.x-this.drawStart.x),a=Math.abs(t.y-this.drawStart.y);n.setAttribute("x",i),n.setAttribute("y",r),n.setAttribute("width",o),n.setAttribute("height",a)}else if(this.activeTool==="circle"){const i=Math.hypot(t.x-this.drawStart.x,t.y-this.drawStart.y);n.setAttribute("cx",this.drawStart.x),n.setAttribute("cy",this.drawStart.y),n.setAttribute("r",i)}}onPointerUp(e){if(this.isPanning){this.isPanning=!1;return}if(!this.isDrawing||!this.drawStart)return;const t=this.getCanvasCoords(e),n=this.modelUnitScale||1;this.isDrawing=!1;const i=this.rootGroup.querySelector("#draw-preview");if(i&&i.remove(),this.activeTool==="rect"){const r=Math.abs(t.x-this.drawStart.x),o=Math.abs(t.y-this.drawStart.y);if(r>.01*n&&o>.01*n){const a={type:"rect",x:Math.min(this.drawStart.x,t.x),y:Math.min(this.drawStart.y,t.y),width:r,height:o,fill:this.fillColor,stroke:this.strokeColor,strokeWidth:this.strokeWidth,unitScale:n,faceIndex:this.focusFaceIndex};this.addArtwork(a)}}else if(this.activeTool==="circle"){const r=Math.hypot(t.x-this.drawStart.x,t.y-this.drawStart.y);if(r>.01*n){const o={type:"circle",cx:this.drawStart.x,cy:this.drawStart.y,r,fill:this.fillColor,stroke:this.strokeColor,strokeWidth:this.strokeWidth,unitScale:n,faceIndex:this.focusFaceIndex};this.addArtwork(o)}}}onWheel(e){e.preventDefault();const t=e.deltaY<0?1.15:.85,n=this.minZoom||.01,i=this.maxZoom||5e3;this.zoom=Math.max(n,Math.min(i,this.zoom*t)),this.renderClusterSVG()}getArtworkBBox(e){const t=e.unitScale||this.modelUnitScale||1;if(e.type==="rect")return{minX:e.x,minY:e.y,maxX:e.x+e.width,maxY:e.y+e.height};if(e.type==="circle")return{minX:e.cx-e.r,minY:e.cy-e.r,maxX:e.cx+e.r,maxY:e.cy+e.r};if(e.type==="text"){const n=(e.text||"").length*(e.fontSize||24)*.6*t,i=(e.fontSize||24)*t;return{minX:e.x-5*t,minY:e.y-i,maxX:e.x+n,maxY:e.y+5*t}}if(e.type==="stamp"){const n={fragile:[60,40],up:[40,50],recycle:[50,50],barcode:[70,40],star:[50,50]},[i,r]=n[e.stampType]||[60,40],o=i*t,a=r*t;return{minX:e.x,minY:e.y-a,maxX:e.x+o,maxY:e.y}}return{minX:-1e9,minY:-1e9,maxX:1e9,maxY:1e9}}getPolygonBBox(e){let t=1/0,n=1/0,i=-1/0,r=-1/0;return e.forEach(o=>{o[0]<t&&(t=o[0]),o[1]<n&&(n=o[1]),o[0]>i&&(i=o[0]),o[1]>r&&(r=o[1])}),{minX:t,minY:n,maxX:i,maxY:r}}bboxOverlap(e,t){return e.minX<t.maxX&&e.maxX>t.minX&&e.minY<t.maxY&&e.maxY>t.minY}addArtwork(e){if(!this.currentCluster){const i=e.faceIndex;this.faceArtworks.has(i)||this.faceArtworks.set(i,[]),this.faceArtworks.get(i).push(e),this.undoStack.push({action:"add",spec:e,faceIndex:i}),this.redoStack=[],this.renderClusterSVG(),this.notifyTextureUpdate();return}const t=this.getArtworkBBox(e),n=[];for(const i of this.currentCluster.clusterFaces){const r=this.getPolygonBBox(i.polygon);if(this.bboxOverlap(t,r)){const o={...e,faceIndex:i.faceIndex,clusterToNet:i.clusterToNet};this.faceArtworks.has(i.faceIndex)||this.faceArtworks.set(i.faceIndex,[]),this.faceArtworks.get(i.faceIndex).push(o),n.push({faceIndex:i.faceIndex,spec:o})}}n.length>0&&(this.undoStack.push({action:"add_multi",pairs:n}),this.redoStack=[]),this.renderClusterSVG(),this.notifyTextureUpdate()}undo(){if(this.undoStack.length===0)return;const e=this.undoStack.pop();if(e.action==="add"){const t=this.faceArtworks.get(e.faceIndex)||[],n=t.indexOf(e.spec);n>=0&&t.splice(n,1),this.redoStack.push(e)}else e.action==="add_multi"&&(e.pairs.forEach(t=>{const n=this.faceArtworks.get(t.faceIndex)||[],i=n.indexOf(t.spec);i>=0&&n.splice(i,1)}),this.redoStack.push(e));this.renderClusterSVG(),this.notifyTextureUpdate()}clearActiveFace(){this.faceArtworks.set(this.focusFaceIndex,[]),this.renderClusterSVG(),this.notifyTextureUpdate()}clearAll(){this.faceArtworks.clear(),this.renderClusterSVG(),this.notifyTextureUpdate()}notifyTextureUpdate(){this.assemblyManager&&this.assemblyManager.parts[this.currentPartIndex]&&(this.assemblyManager.parts[this.currentPartIndex].faceArtworks=this.faceArtworks),this.onTextureUpdate&&this.onTextureUpdate(this.faceArtworks,this.currentPartIndex)}updateNavigator(){if(!this.foldData||!this.navSvg)return;this.navSvg.innerHTML="";const e=this.foldData.vertices;let t=1/0,n=-1/0,i=1/0,r=-1/0;e.forEach(h=>{h[0]<t&&(t=h[0]),h[0]>n&&(n=h[0]),h[1]<i&&(i=h[1]),h[1]>r&&(r=h[1])});const o=n-t||100,a=r-i||100,l=Math.min(140/o,100/a),c=document.createElementNS("http://www.w3.org/2000/svg","g");c.setAttribute("transform",`translate(${10+(140-o*l)/2}, ${10+(100+a*l)/2}) scale(${l}, ${-l}) translate(${-t}, ${-i})`),this.foldData.facesVertices.forEach((h,d)=>{const u=h.map(g=>`${e[g][0]},${e[g][1]}`).join(" "),f=document.createElementNS("http://www.w3.org/2000/svg","polygon");f.setAttribute("points",u),f.setAttribute("class",d===this.focusFaceIndex?"nav-face focus":"nav-face"),f.addEventListener("click",()=>this.setFocusFace(d)),c.appendChild(f)}),this.navSvg.appendChild(c)}}class WA{constructor(e=null,t={}){this.parts=[],this.activePartIndex=0,this.title="Assembly",this.isAssembly=!1,this.foldProgress=0,this.explodedProgress=0,this.listeners={partSelected:[],assemblyUpdated:[],progressChanged:[]},e&&this.loadAssembly(e)}on(e,t){this.listeners[e]&&this.listeners[e].push(t)}emit(e,t){this.listeners[e]&&this.listeners[e].forEach(n=>{try{n(t)}catch(i){console.error(`Error in ${e} listener:`,i)}})}loadAssembly(e){if(this.parts=[],this.activePartIndex=0,e&&e.isAssembly&&Array.isArray(e.parts))this.isAssembly=!0,this.title=e.title||"Multi-Part Assembly",e.parts.forEach((t,n)=>{const i=t.foldData||t,r=ki(i),o=new Hi(r),a=t.bbox||(i._assembly?i._assembly.target3DBBox:null)||this.computeBBoxFromFold(r),l=t.center||(i._assembly?i._assembly.target3DOrigin:null)||[(a.min[0]+a.max[0])/2,(a.min[1]+a.max[1])/2,(a.min[2]+a.max[2])/2],c=this.computePartAlignmentTransform(i,r);this.parts.push({id:t.id||`part_${n}`,name:t.name||i.file_title||`Component ${n+1}`,foldJson:i,foldData:r,kinematics:o,bbox:a,center:l,isVisible:!0,alignMatrix:c.matrix,alignTranslation:c.translation,alignQuaternion:c.quaternion,explosionVector:[0,0,0]})});else if(e){this.isAssembly=!1;const t=ki(e),n=new Hi(t),i=this.computeBBoxFromFold(t),r=[(i.min[0]+i.max[0])/2,(i.min[1]+i.max[1])/2,(i.min[2]+i.max[2])/2],o=this.computePartAlignmentTransform(e,t);this.parts.push({id:"part_0",name:e.file_title||"Main Body",foldJson:e,foldData:t,kinematics:n,bbox:i,center:r,isVisible:!0,alignMatrix:o.matrix,alignTranslation:o.translation,alignQuaternion:o.quaternion,explosionVector:[0,0,0]})}this.computeAssemblyCentroidAndExplosion(),this.emit("assemblyUpdated",this),this.parts.length>0&&this.emit("partSelected",this.getActivePart())}computePartAlignmentTransform(e,t){const n=e._assembly;if(!n||!n.rootFace3DVertices||n.rootFace3DVertices.length<3)return{matrix:new Be,translation:new I(0,0,0),quaternion:new zt};const i=n.rootFaceIndex!==void 0?n.rootFaceIndex:0,r=t.facesVertices[i];if(!r||r.length<3)return{matrix:new Be,translation:new I(0,0,0),quaternion:new zt};const o=r.map(N=>t.vertices[N]),a=n.rootFace3DVertices,l=new I(o[0][0],o[0][1],0),c=new I(o[1][0],o[1][1],0),h=new I().subVectors(c,l).normalize(),d=new I(0,0,1),u=new I().crossVectors(d,h).normalize(),f=new I(...a[0]),g=new I(...a[1]),A=new I().subVectors(g,f).normalize();let p=0,m=0,v=0;const x=a.length;for(let N=0;N<x;N++){const W=a[N],V=a[(N+1)%x];p+=(W[1]-V[1])*(W[2]+V[2]),m+=(W[2]-V[2])*(W[0]+V[0]),v+=(W[0]-V[0])*(W[1]+V[1])}const _=Math.hypot(p,m,v),T=_>1e-6?new I(p/_,m/_,v/_):new I(0,0,1),S=new I().crossVectors(T,A).normalize(),w=new Be().makeBasis(h,u,d).setPosition(l),P=new Be().makeBasis(A,S,T).setPosition(f),E=new Be().multiplyMatrices(P,w.clone().invert()),y=new I,R=new zt,O=new I;return E.decompose(y,R,O),{matrix:E,translation:y,quaternion:R}}computeBBoxFromFold(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;return(e.vertices_coords||[]).forEach(c=>{const h=c[0]||0,d=c[1]||0,u=c[2]||0;t=Math.min(t,h),r=Math.max(r,h),n=Math.min(n,d),o=Math.max(o,d),i=Math.min(i,u),a=Math.max(a,u)}),t===1/0?{min:[-50,-50,-50],max:[50,50,50]}:{min:[t,n,i],max:[r,o,a]}}computeAssemblyCentroidAndExplosion(){if(this.parts.length===0)return;let e=0,t=0,n=0,i=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0];this.parts.forEach(d=>{e+=d.center[0],t+=d.center[1],n+=d.center[2];for(let u=0;u<3;u++)i[u]=Math.min(i[u],d.bbox.min[u]),r[u]=Math.max(r[u],d.bbox.max[u])});const o=this.parts.length;this.globalCentroid=[e/o,t/o,n/o],this.globalBBox={min:i,max:r};const a=r[0]-i[0],l=r[1]-i[1],c=r[2]-i[2],h=Math.max(a,l,c,50);this.parts.forEach((d,u)=>{const f=d.center[0]-this.globalCentroid[0],g=d.center[1]-this.globalCentroid[1],A=d.center[2]-this.globalCentroid[2],p=Math.hypot(f,g,A);if(p>1e-4)d.explosionVector=[f/p*h*.8,g/p*h*.8,A/p*h*.8];else{const m=u%3;d.explosionVector=[m===0?h*.6*(u%2===0?1:-1):0,m===1?h*.6*(u%2===0?1:-1):0,m===2?h*.6*(u%2===0?1:-1):0]}})}getActivePart(){return this.parts[this.activePartIndex]||null}setActivePartIndex(e){e>=0&&e<this.parts.length&&e!==this.activePartIndex&&(this.activePartIndex=e,this.emit("partSelected",this.getActivePart()))}updateFoldProgress(e){this.foldProgress=Math.max(0,Math.min(1,e)),this.emit("progressChanged",{fold:this.foldProgress,exploded:this.explodedProgress})}updateExplodedProgress(e){this.explodedProgress=Math.max(0,Math.min(1,e)),this.emit("progressChanged",{fold:this.foldProgress,exploded:this.explodedProgress})}updateActivePartFoldJSON(e){const t=this.getActivePart();t&&(t.foldJson=e,t.foldData=ki(e),t.kinematics=new Hi(t.foldData),this.emit("assemblyUpdated",this))}}class XA{constructor(){this.container=document.getElementById("canvas-container"),this.renderer=new Lr(this.container,{onFaceClick:(e,t)=>{this.assemblyManager&&this.assemblyManager.isAssembly&&t!==void 0&&t!==this.assemblyManager.activePartIndex&&(this.onSelectAssemblyPart(t),this.graphicStudio&&this.graphicStudio.thumbnailStrip&&this.graphicStudio.thumbnailStrip.selectPart(t),this.netEditor&&this.netEditor.thumbnailStrip&&this.netEditor.thumbnailStrip.selectPart(t)),this.graphicStudio&&this.graphicStudio.setFocusFace(e)}}),this.assemblyManager=new WA,this.foldData=null,this.kinematics=null,this.explodedProgress=0,this.isPlaying=!1,this.animSpeed=1,this.direction=1,this.netEditor=null,this.previewRenderer=null,this.previewKinematics=null,this.previewFoldData=null,this.isPreviewPlaying=!1,this.previewDirection=1,this.graphicStudio=null,this.studioPreviewRenderer=null,this.isStudioPreviewPlaying=!1,this.studioPreviewDirection=1,this.currentCadPlanarData=null,this.currentCadSeed=1,this.initNetEditor(),this.initGraphicStudio(),this.discoverModels(),this.bindUIEvents(),this.loadDefaultModel(),this.startAnimationLoop()}initGraphicStudio(){const e=document.getElementById("studio-workspace");if(!e)return;this.graphicStudio=new GA(e,{onTextureUpdate:(n,i)=>{this.renderer&&this.renderer.updateFaceArtworks(n,i),this.previewRenderer&&this.previewRenderer.updateFaceArtworks(n,i),this.studioPreviewRenderer&&this.studioPreviewRenderer.updateFaceArtworks(n,i)}});const t=document.getElementById("studio-preview-canvas-container");if(t){this.studioPreviewRenderer=new Lr(t,{showCreases:!0,onFaceClick:(i,r)=>{this.assemblyManager&&this.assemblyManager.isAssembly&&r!==void 0&&r!==this.assemblyManager.activePartIndex&&(this.onSelectAssemblyPart(r),this.graphicStudio&&this.graphicStudio.thumbnailStrip&&this.graphicStudio.thumbnailStrip.selectPart(r),this.netEditor&&this.netEditor.thumbnailStrip&&this.netEditor.thumbnailStrip.selectPart(r)),this.graphicStudio&&this.graphicStudio.setFocusFace(i)}});const n=document.getElementById("theme-select");n&&this.studioPreviewRenderer.setTheme(n.value)}}discoverModels(){const e=document.getElementById("model-select");if(e)try{const t=Object.assign({"../models/lid-cube.json":Gc,"../models/notched-cube.json":Xc,"../models/subdivided-notched-cube.json":jc}),n=Object.assign({"../models/box-shell.stl":$c,"../models/nested3.stl":Zc}),i=[],r=[];for(const l in t){const c=l.split("/").pop(),h=t[l],d=h.default||h;if(d&&typeof d=="object"){const u=d.file_title||d.title||c.replace(".json",""),f=Array.isArray(d.faces_vertices)?d.faces_vertices.length:null;i.push({url:`models/${c}`,filename:c,title:u,facesCount:f})}}for(const l in n){const c=l.split("/").pop(),h=n[l],d=h.default||h;r.push({url:d,filename:c,title:"3D CAD Model",facesCount:null})}i.sort((l,c)=>l.filename.localeCompare(c.filename)),r.sort((l,c)=>l.filename.localeCompare(c.filename)),e.innerHTML="";let o="models/subdivided-notched-cube.json";if(i.length>0){const l=document.createElement("optgroup");l.label="Sample FOLD Nets",i.forEach(c=>{const h=document.createElement("option");h.value=c.url;const d=c.facesCount?` (${c.facesCount} Faces)`:"",u=c.filename.replace(/\.[^/.]+$/,""),f=c.title.toLowerCase().replace(/[^a-z0-9]+/g,""),g=u.toLowerCase().replace(/[^a-z0-9]+/g,"");f===g?h.textContent=`${c.filename}${d}`:h.textContent=`${c.filename} — ${c.title}${d}`,(c.filename==="subdivided-notched-cube.json"||c.filename.includes("subdivided-notched"))&&(h.selected=!0,o=c.url),l.appendChild(h)}),e.appendChild(l)}if(r.length>0){const l=document.createElement("optgroup");l.label="Sample CAD Models",r.forEach(c=>{const h=document.createElement("option");h.value=c.url,h.textContent=c.filename,l.appendChild(h)}),e.appendChild(l)}const a=document.createElement("option");a.value="custom",a.textContent="Custom File...",e.appendChild(a),this.defaultModelUrl=o}catch(t){console.warn("Error discovering models:",t)}}async loadDefaultModel(){const e=this.defaultModelUrl||"models/subdivided-notched-cube.json";await this.loadModelFromUrl(e)}onWindowResize(){this.renderer&&this.renderer.resize(),this.netEditor&&this.netEditor.resizeCanvas(),this.previewRenderer&&this.previewRenderer.resize(),this.studioPreviewRenderer&&this.studioPreviewRenderer.resize()}async loadModelFromUrl(e){try{const t=e.split(".").pop().split("?")[0].toLowerCase();if(["obj","stl","step","stp"].includes(t)){const n=await fetch(e);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=t==="stl"?await n.arrayBuffer():await n.text(),r=await Cs.parseCADFile(i,t),o=Cs.extractMultiBodyPlanarFaces(r);this.currentCadSeed=1;const l=e.split("/").pop().split("?")[0].replace(/\.[^/.]+$/,"");if(this.currentCadPlanarData={...o,title:l},o.isAssembly){const c=ai.unfoldAssemblyToFold(o.components,this.currentCadSeed);this.assemblyManager.loadAssembly(c),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}else{const c=o.components[0],h=ai.unfoldToFoldJSON(c.vertices,c.facesVertices,this.currentCadSeed,500,{componentId:c.id,bbox:c.bbox,center:c.center,name:l});h.file_title=l,this.assemblyManager.loadAssembly(h),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}}else{const n=await fetch(e);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=await n.json();this.currentCadPlanarData=null,this.currentCadSeed=1,this.updateRegenButtonUI(!1),this.initFoldModel(i)}}catch(t){console.error("Failed to load model:",t),alert(`Could not load model: ${t.message}`)}}initFoldModel(e){this.assemblyManager.loadAssembly(e),this.initAssemblyModel(this.assemblyManager)}initAssemblyModel(e){try{this.assemblyManager=e;const t=e.getActivePart();if(!t)return;this.foldData=t.foldData,this.kinematics=t.kinematics,this.renderer.buildModel(this.foldData,this.kinematics,this.assemblyManager),this.previewRenderer&&(this.previewFoldData=this.foldData,this.previewKinematics=this.kinematics,this.previewRenderer.buildModel(this.foldData,this.kinematics),this.updatePreviewFoldProgress()),this.studioPreviewRenderer&&(this.studioPreviewRenderer.buildModel(this.foldData,this.kinematics,this.assemblyManager),this.updateStudioPreviewFoldProgress());const n=document.getElementById("exploded-slider-group");if(n){n.style.display=e.isAssembly?"flex":"none";const i=document.getElementById("exploded-slider");i&&(i.value=0),this.explodedProgress=0;const r=document.getElementById("exploded-slider-value");r&&(r.textContent="0%")}this.updateInspectorUI(),this.resetSlider(),this.updateFoldProgress(),this.netEditor&&this.netEditor.loadAssembly(this.assemblyManager,i=>{this.onSelectAssemblyPart(i)}),this.graphicStudio&&this.graphicStudio.loadAssembly(this.assemblyManager,i=>{this.onSelectAssemblyPart(i)})}catch(t){console.error("Error initializing Assembly model:",t),alert(`Error initializing Assembly: ${t.message}`)}}onSelectAssemblyPart(e){if(!this.assemblyManager)return;this.assemblyManager.setActivePartIndex(e),this.renderer.highlightActivePart(e),this.studioPreviewRenderer&&this.studioPreviewRenderer.highlightActivePart(e);const t=this.assemblyManager.getActivePart();t&&(this.foldData=t.foldData,this.kinematics=t.kinematics,this.netEditor&&(this.netEditor.thumbnailStrip&&this.netEditor.thumbnailStrip.selectPart(e),this.netEditor.loadFoldJSON(t.foldJson||t.foldData,!0)),this.graphicStudio&&(this.graphicStudio.thumbnailStrip&&this.graphicStudio.thumbnailStrip.selectPart(e),this.graphicStudio.loadModel(t.foldData,t.kinematics)),this.previewRenderer&&(this.previewFoldData=t.foldData,this.previewKinematics=t.kinematics,this.previewRenderer.buildModel(this.foldData,this.kinematics),this.updatePreviewFoldProgress()),this.updateInspectorUI())}updateStudioPreviewFoldProgress(){if(!this.studioPreviewRenderer)return;const e=document.getElementById("studio-preview-fold-slider"),t=document.getElementById("studio-preview-slider-value");if(!e)return;const n=parseFloat(e.value),i=n/100;this.studioPreviewRenderer.updateFold(i),t&&(t.textContent=`${Math.round(n)}%`)}initNetEditor(){const e=document.getElementById("editor-canvas-container");if(!e)return;this.netEditor=new UA(e,n=>{this.onNetEditorChange(n)});const t=document.getElementById("preview-canvas-container");if(t){this.previewRenderer=new Lr(t,{showCreases:!0});const n=document.getElementById("theme-select");n&&this.previewRenderer.setTheme(n.value)}}onNetEditorChange(e){if(this.previewRenderer)try{this.previewFoldData=ki(e),this.previewKinematics=new Hi(this.previewFoldData),this.previewRenderer.buildModel(this.previewFoldData,this.previewKinematics),this.updatePreviewFoldProgress()}catch(n){console.warn("Preview fold kinematics warning:",n.message)}try{this.assemblyManager&&this.assemblyManager.updateActivePartFoldJSON(e),this.foldData=ki(e),this.kinematics=new Hi(this.foldData),this.renderer&&(this.renderer.buildModel(this.foldData,this.kinematics,this.assemblyManager),this.updateFoldProgress()),this.studioPreviewRenderer&&(this.studioPreviewRenderer.buildModel(this.foldData,this.kinematics,this.assemblyManager),this.updateStudioPreviewFoldProgress()),this.graphicStudio&&this.graphicStudio.loadAssembly(this.assemblyManager,n=>{this.onSelectAssemblyPart(n)}),this.updateInspectorUI()}catch(n){console.warn("Live fold sync warning:",n.message)}const t=document.getElementById("json-code-textarea");t&&document.activeElement!==t&&(t.value=JSON.stringify(e,null,2))}resetSlider(){const e=document.getElementById("fold-slider");e.value=0,this.updateFoldProgress()}updateFoldProgress(){const e=document.getElementById("fold-slider"),t=parseFloat(e.value),n=t/100;this.renderer.updateFold(n,this.explodedProgress||0);const i=document.getElementById("slider-value");i&&(i.textContent=`${Math.round(t)}%`);const r=document.getElementById("slider-progress");r&&(r.style.width=`${t}%`);const o=document.getElementById("state-text");if(o){const l=this.assemblyManager&&this.assemblyManager.isAssembly?` [${this.assemblyManager.parts.length} PARTS]`:"";t===0?o.textContent=`FLAT 2D NET${l}`:t===100?o.textContent=`3D ASSEMBLED${l}`:o.textContent=`FOLDING (${Math.round(t)}%)${l}`}}updatePreviewFoldProgress(){const e=document.getElementById("preview-fold-slider");if(!e||!this.previewRenderer)return;const t=parseFloat(e.value),n=t/100;this.previewRenderer.updateFold(n);const i=document.getElementById("preview-slider-value");i&&(i.textContent=`${Math.round(t)}%`)}bindUIEvents(){const e=document.getElementById("btn-mode-3d"),t=document.getElementById("btn-mode-editor"),n=document.getElementById("btn-mode-studio"),i=document.getElementById("viewer-workspace"),r=document.getElementById("editor-workspace"),o=document.getElementById("studio-workspace"),a=(ie,xe)=>{[e,t,n].forEach(Re=>{Re&&Re.classList.toggle("active",Re===ie)}),[i,r,o].forEach(Re=>{Re&&Re.classList.toggle("active",Re===xe)}),this.onWindowResize()};e.addEventListener("click",()=>a(e,i)),t.addEventListener("click",()=>{a(t,r),this.netEditor&&(this.netEditor.resizeCanvas(),this.netEditor.centerView()),this.previewRenderer&&this.previewRenderer.resize()}),n&&n.addEventListener("click",()=>{a(n,o),this.graphicStudio&&(this.graphicStudio.updateClusterView(),this.graphicStudio.updateNavigator())}),document.getElementById("fold-slider").addEventListener("input",()=>{this.isPlaying&&this.pauseAnimation(),this.updateFoldProgress()});const c=document.getElementById("exploded-slider");c&&c.addEventListener("input",ie=>{this.explodedProgress=parseFloat(ie.target.value)/100;const xe=document.getElementById("exploded-slider-value");xe&&(xe.textContent=`${Math.round(this.explodedProgress*100)}%`),this.updateFoldProgress()}),document.getElementById("model-select").addEventListener("change",ie=>{const xe=ie.target.value;xe==="custom"?document.getElementById("file-input").click():this.loadModelFromUrl(xe)}),document.getElementById("file-input").addEventListener("change",ie=>{const xe=ie.target.files[0];xe&&this.readFoldFile(xe)});const u=document.getElementById("cad-file-input");u&&u.addEventListener("change",ie=>{const xe=ie.target.files[0];xe&&this.readFoldFile(xe)});const f=document.getElementById("drop-zone"),g=document.querySelector(".viewport-container");g.addEventListener("dragover",ie=>{ie.preventDefault(),f.classList.add("active")}),g.addEventListener("dragleave",ie=>{(ie.target===f||!g.contains(ie.relatedTarget))&&f.classList.remove("active")}),g.addEventListener("drop",ie=>{ie.preventDefault(),f.classList.remove("active"),ie.dataTransfer.files&&ie.dataTransfer.files.length>0&&this.readFoldFile(ie.dataTransfer.files[0])}),document.getElementById("theme-select").addEventListener("change",ie=>{const xe=ie.target.value;this.renderer&&this.renderer.setTheme(xe),this.previewRenderer&&this.previewRenderer.setTheme(xe),this.studioPreviewRenderer&&this.studioPreviewRenderer.setTheme(xe),this.graphicStudio&&this.graphicStudio.faceArtworks&&(this.renderer&&this.renderer.updateFaceArtworks(this.graphicStudio.faceArtworks),this.previewRenderer&&this.previewRenderer.updateFaceArtworks(this.graphicStudio.faceArtworks),this.studioPreviewRenderer&&this.studioPreviewRenderer.updateFaceArtworks(this.graphicStudio.faceArtworks))}),document.getElementById("btn-play-pause").addEventListener("click",()=>{this.toggleAnimation()}),document.getElementById("speed-select").addEventListener("change",ie=>{this.animSpeed=parseFloat(ie.target.value)});const v=document.getElementById("btn-view-2d");v&&v.addEventListener("click",()=>this.renderer.setView2D());const x=document.getElementById("btn-view-3d");x&&x.addEventListener("click",()=>this.renderer.setView3D());const _=document.getElementById("btn-reset-cam");_&&_.addEventListener("click",()=>this.renderer.centerModel());const T=document.getElementById("inspector-panel"),S=document.getElementById("btn-toggle-inspector"),w=document.getElementById("btn-close-inspector");S.addEventListener("click",()=>{T.classList.toggle("open"),S.classList.toggle("active")}),w.addEventListener("click",()=>{T.classList.remove("open"),S.classList.remove("active")}),document.getElementById("root-face-select").addEventListener("change",ie=>{const xe=parseInt(ie.target.value,10);this.kinematics&&(this.kinematics.setRootFace(xe),this.updateFoldProgress())}),document.getElementById("show-creases-check").addEventListener("change",ie=>{this.renderer.setShowCreases(ie.target.checked),this.previewRenderer&&this.previewRenderer.setShowCreases(ie.target.checked),this.updateFoldProgress()});const y=document.querySelectorAll(".palette-btn");y.forEach(ie=>{ie.addEventListener("click",()=>{y.forEach(Re=>Re.classList.remove("active")),ie.classList.add("active");const xe=ie.dataset.directive;this.netEditor&&(this.netEditor.activeDirective=xe,this.netEditor.selectedEdgeIndex>=0&&this.netEditor.setEdgeAssignment(this.netEditor.selectedEdgeIndex,xe))})}),document.getElementById("btn-attach-face").addEventListener("click",()=>{this.netEditor&&(this.netEditor.selectedEdgeIndex<0?alert("Please click to select an edge first on the 2D Net Editor canvas!"):this.netEditor.attachFaceToSelectedEdge())}),document.getElementById("btn-auto-boundary").addEventListener("click",()=>{this.netEditor&&this.netEditor.autoDetectBoundaries()}),document.getElementById("btn-invert-folds").addEventListener("click",()=>{this.netEditor&&this.netEditor.invertFolds()});const R=document.getElementById("btn-flip-v");R&&R.addEventListener("click",()=>{this.netEditor&&this.netEditor.flipVertically()});const O=document.getElementById("btn-flip-h");O&&O.addEventListener("click",()=>{this.netEditor&&this.netEditor.flipHorizontally()}),document.getElementById("btn-center-net").addEventListener("click",()=>{this.netEditor&&this.netEditor.centerView()});const N=document.getElementById("btn-regen-cad");N&&N.addEventListener("click",()=>this.regenerateCadNet());const W=document.getElementById("btn-editor-regen-cad");W&&W.addEventListener("click",()=>this.regenerateCadNet()),window.addEventListener("resize",()=>this.onWindowResize());const V=document.getElementById("preview-sidebar"),X=document.getElementById("btn-toggle-preview"),z=document.getElementById("btn-close-preview");X.addEventListener("click",()=>{V.classList.toggle("open"),X.classList.toggle("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),z.addEventListener("click",()=>{V.classList.remove("open"),X.classList.remove("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),document.getElementById("preview-fold-slider").addEventListener("input",()=>{this.isPreviewPlaying&&this.pausePreviewAnimation(),this.updatePreviewFoldProgress()}),document.getElementById("btn-preview-play").addEventListener("click",()=>{this.togglePreviewAnimation()});const se=document.getElementById("studio-preview-sidebar"),ue=document.getElementById("btn-studio-toggle-preview"),be=document.getElementById("btn-studio-close-preview");ue&&se&&ue.addEventListener("click",()=>{se.classList.toggle("open"),ue.classList.toggle("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),be&&se&&be.addEventListener("click",()=>{se.classList.remove("open"),ue&&ue.classList.remove("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)});const He=document.getElementById("studio-preview-fold-slider");He&&He.addEventListener("input",()=>{this.isStudioPreviewPlaying&&this.pauseStudioPreviewAnimation(),this.updateStudioPreviewFoldProgress()});const j=document.getElementById("btn-studio-preview-play");j&&j.addEventListener("click",()=>{this.toggleStudioPreviewAnimation()});const Q=document.getElementById("code-panel"),le=document.getElementById("btn-toggle-code"),ne=document.getElementById("btn-close-code"),Ee=document.getElementById("btn-apply-json");le.addEventListener("click",()=>{Q.classList.toggle("open"),le.classList.toggle("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),ne.addEventListener("click",()=>{Q.classList.remove("open"),le.classList.remove("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),Ee.addEventListener("click",()=>{const ie=document.getElementById("json-code-textarea");try{const xe=JSON.parse(ie.value);this.netEditor&&this.netEditor.loadFoldJSON(xe)}catch(xe){alert(`Invalid JSON format: ${xe.message}`)}});const Te=document.getElementById("btn-export-glb");Te&&Te.addEventListener("click",async()=>{const xe=(this.foldData&&this.foldData.title?this.foldData.title:"folded-box").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"folded-box";this.renderer&&await this.renderer.exportGLB(xe)}),document.getElementById("btn-export-fold").addEventListener("click",async()=>{if(!this.netEditor)return;const ie=this.netEditor.getFoldJSON(),xe=JSON.stringify(ie,null,2);let Qe=(ie.file_title||(this.foldData&&this.foldData.title?this.foldData.title:"box-net")).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");(!Qe||Qe==="untitled")&&(Qe="box-net-prepared");const F=`${Qe}.json`;if("showSaveFilePicker"in window)try{const Me=await(await window.showSaveFilePicker({suggestedName:F,types:[{description:"FOLD 1.1 Spec File (*.json, *.fold)",accept:{"application/json":[".json",".fold"]}}]})).createWritable();await Me.write(xe),await Me.close();return}catch(ze){if(ze.name==="AbortError")return;console.warn("Native save picker fallback:",ze)}const ct="data:application/json;charset=utf-8,"+encodeURIComponent(xe),Fe=document.createElement("a");Fe.setAttribute("href",ct),Fe.setAttribute("download",F),Fe.style.display="none",document.body.appendChild(Fe),Fe.click(),setTimeout(()=>{Fe.parentNode&&document.body.removeChild(Fe)},300)})}async readFoldFile(e){const t=e.name.split(".").pop().toLowerCase(),n=document.getElementById("model-select");if(t==="json"||t==="fold"){const i=new FileReader;i.onload=r=>{try{const o=JSON.parse(r.target.result);this.currentCadPlanarData=null,this.currentCadSeed=1,this.updateRegenButtonUI(!1),n&&(n.value="custom"),this.initFoldModel(o)}catch{alert(`Failed to parse file "${e.name}": Invalid JSON.`)}},i.readAsText(e)}else if(["obj","stl","step","stp"].includes(t)){const i=new FileReader;i.onload=async r=>{try{const o=r.target.result,a=await Cs.parseCADFile(o,t),l=Cs.extractMultiBodyPlanarFaces(a);this.currentCadSeed=1;const c=e.name.replace(/\.[^/.]+$/,"");if(this.currentCadPlanarData={...l,title:c},n&&(n.value="custom"),l.isAssembly){const d=ai.unfoldAssemblyToFold(l.components,this.currentCadSeed);this.assemblyManager.loadAssembly(d),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}else{const d=l.components[0],u=ai.unfoldToFoldJSON(d.vertices,d.facesVertices,this.currentCadSeed,500,{componentId:d.id,bbox:d.bbox,center:d.center,name:c});u.file_title=c,this.assemblyManager.loadAssembly(u),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}const h=document.getElementById("btn-mode-editor");h&&h.click()}catch(o){console.error("CAD Import Error:",o),alert(`CAD Import Failed: ${o.message}`)}},t==="stl"?i.readAsArrayBuffer(e):i.readAsText(e)}else alert(`Unsupported file format: .${t}`)}regenerateCadNet(){if(this.currentCadPlanarData){this.currentCadSeed++,console.log(`[App] Regenerating CAD net with seed #${this.currentCadSeed}...`);try{if(this.currentCadPlanarData.isAssembly){const e=ai.unfoldAssemblyToFold(this.currentCadPlanarData.components,this.currentCadSeed);this.assemblyManager.loadAssembly(e),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}else{const e=this.currentCadPlanarData.components?this.currentCadPlanarData.components[0]:this.currentCadPlanarData,t=ai.unfoldToFoldJSON(e.vertices,e.facesVertices,this.currentCadSeed,500,{componentId:e.id||"part_0",bbox:e.bbox,center:e.center,name:this.currentCadPlanarData.title});t.file_title=this.currentCadPlanarData.title,this.assemblyManager.loadAssembly(t),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}}catch(e){console.error("Regeneration error:",e),alert(`Could not generate net with seed #${this.currentCadSeed}: ${e.message}`)}}}updateRegenButtonUI(e){const t=document.getElementById("editor-cad-section"),n=document.getElementById("btn-editor-regen-cad"),i=document.getElementById("btn-editor-regen-label"),r=e?"flex":"none";t&&(t.style.display=r),n&&(n.style.display=e?"inline-flex":"none"),i&&(i.textContent=`🎲 Re-gen (Seed #${this.currentCadSeed})`)}toggleAnimation(){this.isPlaying?this.pauseAnimation():this.startAnimation()}startAnimation(){this.isPlaying=!0,document.getElementById("play-icon").style.display="none",document.getElementById("pause-icon").style.display="block"}pauseAnimation(){this.isPlaying=!1,document.getElementById("play-icon").style.display="block",document.getElementById("pause-icon").style.display="none"}togglePreviewAnimation(){this.isPreviewPlaying?this.pausePreviewAnimation():this.startPreviewAnimation()}startPreviewAnimation(){this.isPreviewPlaying=!0,document.getElementById("preview-play-icon").style.display="none",document.getElementById("preview-pause-icon").style.display="block"}pausePreviewAnimation(){this.isPreviewPlaying=!1,document.getElementById("preview-play-icon").style.display="block",document.getElementById("preview-pause-icon").style.display="none"}toggleStudioPreviewAnimation(){this.isStudioPreviewPlaying?this.pauseStudioPreviewAnimation():this.startStudioPreviewAnimation()}startStudioPreviewAnimation(){this.isStudioPreviewPlaying=!0;const e=document.getElementById("studio-preview-play-icon"),t=document.getElementById("studio-preview-pause-icon");e&&(e.style.display="none"),t&&(t.style.display="block")}pauseStudioPreviewAnimation(){this.isStudioPreviewPlaying=!1;const e=document.getElementById("studio-preview-play-icon"),t=document.getElementById("studio-preview-pause-icon");e&&(e.style.display="block"),t&&(t.style.display="none")}updateInspectorUI(){if(!this.foldData)return;this.foldData.title&&(document.getElementById("meta-title").textContent=this.foldData.title),this.foldData.creator&&(document.getElementById("meta-creator").textContent=this.foldData.creator),this.foldData.spec&&(document.getElementById("meta-spec").textContent=`v${this.foldData.spec}`),this.foldData.counts&&(document.getElementById("stat-vertices").textContent=this.foldData.counts.vertices??0,document.getElementById("stat-edges").textContent=this.foldData.counts.edges??0,document.getElementById("stat-faces").textContent=this.foldData.counts.faces??0,document.getElementById("stat-boundary").textContent=this.foldData.counts.boundary??0,document.getElementById("stat-valley").textContent=this.foldData.counts.valley??0,document.getElementById("stat-mountain").textContent=this.foldData.counts.mountain??0,document.getElementById("stat-cut").textContent=this.foldData.counts.cut??0,document.getElementById("stat-flat").textContent=this.foldData.counts.flat??0,document.getElementById("stat-unassigned").textContent=this.foldData.counts.unassigned??0);const e=document.getElementById("root-face-select");if(e){e.innerHTML="";const t=this.foldData.facesVertices||this.foldData.faces_vertices||[],n=this.kinematics?this.kinematics.rootFaceIndex:0;t.forEach((i,r)=>{const o=document.createElement("option");o.value=r,o.textContent=`Face #${r} ${r===n?"(Root Base)":""}`,r===n&&(o.selected=!0),e.appendChild(o)})}}startAnimationLoop(){let e=performance.now();const t=n=>{requestAnimationFrame(t);const i=(n-e)/1e3;if(e=n,this.isPlaying){const r=document.getElementById("fold-slider");let o=parseFloat(r.value);o+=this.direction*(100/3)*this.animSpeed*i,o>=100?(o=100,this.direction=-1):o<=0&&(o=0,this.direction=1),r.value=o,this.updateFoldProgress()}if(this.renderer.render(),this.previewRenderer){if(this.isPreviewPlaying){const r=document.getElementById("preview-fold-slider");let o=parseFloat(r.value);o+=this.previewDirection*(100/3)*this.animSpeed*i,o>=100?(o=100,this.previewDirection=-1):o<=0&&(o=0,this.previewDirection=1),r.value=o,this.updatePreviewFoldProgress()}this.previewRenderer.render()}if(this.studioPreviewRenderer){if(this.isStudioPreviewPlaying){const r=document.getElementById("studio-preview-fold-slider");if(r){let o=parseFloat(r.value);o+=this.studioPreviewDirection*(100/3)*this.animSpeed*i,o>=100?(o=100,this.studioPreviewDirection=-1):o<=0&&(o=0,this.studioPreviewDirection=1),r.value=o,this.updateStudioPreviewFoldProgress()}}this.studioPreviewRenderer.render()}};requestAnimationFrame(t)}}window.addEventListener("DOMContentLoaded",()=>{new XA});
