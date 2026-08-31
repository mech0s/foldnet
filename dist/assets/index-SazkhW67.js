(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Sl=1.1,bl="BoxNetGenerator",wl="Six-Sided Cube Box Net with Attached Lid",Tl=["creasePattern"],Cl=["2D"],Rl=[[1,0],[2,0],[1,1],[2,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[2,3],[3,3],[1,4],[2,4]],Il=[[0,1],[1,3],[3,6],[6,7],[7,11],[11,10],[10,13],[13,12],[12,9],[9,8],[8,4],[4,5],[5,2],[2,0],[2,3],[5,6],[6,10],[9,10],[5,9]],Pl=["B","B","B","B","B","B","B","B","B","B","B","B","B","B","V","V","V","V","V"],Dl=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,90,90,90,90,90],Fl=[[0,1,3,2],[2,3,6,5],[4,5,9,8],[5,6,10,9],[6,7,11,10],[9,10,13,12]],Hc={file_spec:Sl,file_creator:bl,file_title:wl,file_classes:Tl,frame_attributes:Cl,vertices_coords:Rl,edges_vertices:Il,edges_assignment:Pl,edges_foldAngle:Dl,faces_vertices:Fl},Gc=Object.freeze(Object.defineProperty({__proto__:null,default:Hc,edges_assignment:Pl,edges_foldAngle:Dl,edges_vertices:Il,faces_vertices:Fl,file_classes:Tl,file_creator:bl,file_spec:Sl,file_title:wl,frame_attributes:Cl,vertices_coords:Rl},Symbol.toStringTag,{value:"Module"})),Ll=1.1,Ul="NotchedCubeGenerator",Nl="Notched Cube Net (Cube with Corner Subcube Subtracted)",Bl=["creasePattern"],Ol=["2D"],kl=[[2,2],[3,2],[3,3],[2,3],[4,2],[4,3],[3,4],[2,4],[4,4],[2,1],[3,1],[4,1],[2,0],[3,0],[4,0],[1,2],[1,3],[1,4],[0,2],[0,3],[0,4],[-1,2],[-1,3],[-1,4],[-2,2],[-2,3],[3,5],[2,5],[4,5],[3,6],[2,6],[5,2],[5,3],[5,4],[6,2],[6,3],[4,6],[4,7],[3,7],[5,6],[5,7],[2,7],[2,6]],zl=[[0,1],[1,2],[2,3],[0,3],[1,4],[4,5],[5,2],[2,6],[6,7],[3,7],[5,8],[6,8],[9,10],[1,10],[0,9],[10,11],[4,11],[12,13],[10,13],[9,12],[13,14],[11,14],[0,15],[3,16],[15,16],[7,17],[16,17],[15,18],[16,19],[18,19],[17,20],[19,20],[18,21],[19,22],[21,22],[20,23],[22,23],[21,24],[22,25],[24,25],[6,26],[26,27],[7,27],[8,28],[26,28],[26,29],[29,30],[27,30],[4,31],[31,32],[5,32],[32,33],[8,33],[31,34],[34,35],[32,35],[28,36],[29,36],[36,37],[37,38],[29,38],[42,41],[38,41],[29,42]],Vl=["V","F","F","V","V","V","F","F","V","V","V","V","F","F","B","F","B","B","F","B","B","B","B","F","F","B","F","B","F","V","B","V","B","F","F","B","B","B","B","B","F","F","B","B","V","B","B","B","B","F","F","B","B","B","B","B","B","M","B","B","M","B","B","B"],Hl=[90,0,0,90,90,90,0,0,90,90,90,90,0,0,null,0,null,null,0,null,null,null,null,0,0,null,0,null,0,90,null,90,null,0,0,null,null,null,null,null,0,0,null,null,90,null,null,null,null,0,0,null,null,null,null,null,null,-90,null,null,-90,null,null,null],Gl=[[0,1,2,3],[1,4,5,2],[3,2,6,7],[2,5,8,6],[9,10,1,0],[10,11,4,1],[12,13,10,9],[13,14,11,10],[15,0,3,16],[16,3,7,17],[18,15,16,19],[19,16,17,20],[21,18,19,22],[22,19,20,23],[24,21,22,25],[7,6,26,27],[6,8,28,26],[27,26,29,30],[4,31,32,5],[5,32,33,8],[31,34,35,32],[26,28,36,29],[29,36,37,38],[42,29,38,41]],Wc={file_spec:Ll,file_creator:Ul,file_title:Nl,file_classes:Bl,frame_attributes:Ol,vertices_coords:kl,edges_vertices:zl,edges_assignment:Vl,edges_foldAngle:Hl,faces_vertices:Gl},Xc=Object.freeze(Object.defineProperty({__proto__:null,default:Wc,edges_assignment:Vl,edges_foldAngle:Hl,edges_vertices:zl,faces_vertices:Gl,file_classes:Bl,file_creator:Ul,file_spec:Ll,file_title:Nl,frame_attributes:Ol,vertices_coords:kl},Symbol.toStringTag,{value:"Module"})),Wl=1.1,Xl="SubdividedNotchedCubeGenerator",Yl="Subdivided Notched Cube Net (3x3 Sub-Squares Per Face, 216 Faces)",jl=["creasePattern"],ql=["2D"],$l=[[2,2],[2.3333333333333335,2],[2.6666666666666665,2],[3,2],[2,2.3333333333333335],[2.3333333333333335,2.3333333333333335],[2.6666666666666665,2.3333333333333335],[3,2.3333333333333335],[2,2.6666666666666665],[2.3333333333333335,2.6666666666666665],[2.6666666666666665,2.6666666666666665],[3,2.6666666666666665],[2,3],[2.3333333333333335,3],[2.6666666666666665,3],[3,3],[3.3333333333333335,2],[3.6666666666666665,2],[4,2],[3.3333333333333335,2.3333333333333335],[3.6666666666666665,2.3333333333333335],[4,2.3333333333333335],[3.3333333333333335,2.6666666666666665],[3.6666666666666665,2.6666666666666665],[4,2.6666666666666665],[3.3333333333333335,3],[3.6666666666666665,3],[4,3],[2,3.3333333333333335],[2.3333333333333335,3.3333333333333335],[2.6666666666666665,3.3333333333333335],[3,3.3333333333333335],[2,3.6666666666666665],[2.3333333333333335,3.6666666666666665],[2.6666666666666665,3.6666666666666665],[3,3.6666666666666665],[2,4],[2.3333333333333335,4],[2.6666666666666665,4],[3,4],[3.3333333333333335,3.3333333333333335],[3.6666666666666665,3.3333333333333335],[4,3.3333333333333335],[3.3333333333333335,3.6666666666666665],[3.6666666666666665,3.6666666666666665],[4,3.6666666666666665],[3.3333333333333335,4],[3.6666666666666665,4],[4,4],[2,1],[2.3333333333333335,1],[2.6666666666666665,1],[3,1],[2,1.3333333333333333],[2.3333333333333335,1.3333333333333333],[2.6666666666666665,1.3333333333333333],[3,1.3333333333333333],[2,1.6666666666666667],[2.3333333333333335,1.6666666666666667],[2.6666666666666665,1.6666666666666667],[3,1.6666666666666667],[3.3333333333333335,1],[3.6666666666666665,1],[4,1],[3.3333333333333335,1.3333333333333333],[3.6666666666666665,1.3333333333333333],[4,1.3333333333333333],[3.3333333333333335,1.6666666666666667],[3.6666666666666665,1.6666666666666667],[4,1.6666666666666667],[2,0],[2.3333333333333335,0],[2.6666666666666665,0],[3,0],[2,.3333333333333333],[2.3333333333333335,.3333333333333333],[2.6666666666666665,.3333333333333333],[3,.3333333333333333],[2,.6666666666666666],[2.3333333333333335,.6666666666666666],[2.6666666666666665,.6666666666666666],[3,.6666666666666666],[3.3333333333333335,0],[3.6666666666666665,0],[4,0],[3.3333333333333335,.3333333333333333],[3.6666666666666665,.3333333333333333],[4,.3333333333333333],[3.3333333333333335,.6666666666666666],[3.6666666666666665,.6666666666666666],[4,.6666666666666666],[1,2],[1.3333333333333333,2],[1.6666666666666667,2],[1,2.3333333333333335],[1.3333333333333333,2.3333333333333335],[1.6666666666666667,2.3333333333333335],[1,2.6666666666666665],[1.3333333333333333,2.6666666666666665],[1.6666666666666667,2.6666666666666665],[1,3],[1.3333333333333333,3],[1.6666666666666667,3],[1,3.3333333333333335],[1.3333333333333333,3.3333333333333335],[1.6666666666666667,3.3333333333333335],[1,3.6666666666666665],[1.3333333333333333,3.6666666666666665],[1.6666666666666667,3.6666666666666665],[1,4],[1.3333333333333333,4],[1.6666666666666667,4],[0,2],[.3333333333333333,2],[.6666666666666666,2],[0,2.3333333333333335],[.3333333333333333,2.3333333333333335],[.6666666666666666,2.3333333333333335],[0,2.6666666666666665],[.3333333333333333,2.6666666666666665],[.6666666666666666,2.6666666666666665],[0,3],[.3333333333333333,3],[.6666666666666666,3],[0,3.3333333333333335],[.3333333333333333,3.3333333333333335],[.6666666666666666,3.3333333333333335],[0,3.6666666666666665],[.3333333333333333,3.6666666666666665],[.6666666666666666,3.6666666666666665],[0,4],[.3333333333333333,4],[.6666666666666666,4],[-1,2],[-.6666666666666666,2],[-.3333333333333333,2],[-1,2.3333333333333335],[-.6666666666666666,2.3333333333333335],[-.3333333333333333,2.3333333333333335],[-1,2.6666666666666665],[-.6666666666666666,2.6666666666666665],[-.3333333333333333,2.6666666666666665],[-1,3],[-.6666666666666666,3],[-.3333333333333333,3],[-1,3.3333333333333335],[-.6666666666666666,3.3333333333333335],[-.3333333333333333,3.3333333333333335],[-1,3.6666666666666665],[-.6666666666666666,3.6666666666666665],[-.3333333333333333,3.6666666666666665],[-1,4],[-.6666666666666666,4],[-.3333333333333333,4],[-2,2],[-1.6666666666666667,2],[-1.3333333333333333,2],[-2,2.3333333333333335],[-1.6666666666666667,2.3333333333333335],[-1.3333333333333333,2.3333333333333335],[-2,2.6666666666666665],[-1.6666666666666667,2.6666666666666665],[-1.3333333333333333,2.6666666666666665],[-2,3],[-1.6666666666666667,3],[-1.3333333333333333,3],[2,4.333333333333333],[2.3333333333333335,4.333333333333333],[2.6666666666666665,4.333333333333333],[3,4.333333333333333],[2,4.666666666666667],[2.3333333333333335,4.666666666666667],[2.6666666666666665,4.666666666666667],[3,4.666666666666667],[2,5],[2.3333333333333335,5],[2.6666666666666665,5],[3,5],[3.3333333333333335,4.333333333333333],[3.6666666666666665,4.333333333333333],[4,4.333333333333333],[3.3333333333333335,4.666666666666667],[3.6666666666666665,4.666666666666667],[4,4.666666666666667],[3.3333333333333335,5],[3.6666666666666665,5],[4,5],[2,5.333333333333333],[2.3333333333333335,5.333333333333333],[2.6666666666666665,5.333333333333333],[3,5.333333333333333],[2,5.666666666666667],[2.3333333333333335,5.666666666666667],[2.6666666666666665,5.666666666666667],[3,5.666666666666667],[2,6],[2.3333333333333335,6],[2.6666666666666665,6],[3,6],[4.333333333333333,2],[4.666666666666667,2],[5,2],[4.333333333333333,2.3333333333333335],[4.666666666666667,2.3333333333333335],[5,2.3333333333333335],[4.333333333333333,2.6666666666666665],[4.666666666666667,2.6666666666666665],[5,2.6666666666666665],[4.333333333333333,3],[4.666666666666667,3],[5,3],[4.333333333333333,3.3333333333333335],[4.666666666666667,3.3333333333333335],[5,3.3333333333333335],[4.333333333333333,3.6666666666666665],[4.666666666666667,3.6666666666666665],[5,3.6666666666666665],[4.333333333333333,4],[4.666666666666667,4],[5,4],[5.333333333333333,2],[5.666666666666667,2],[6,2],[5.333333333333333,2.3333333333333335],[5.666666666666667,2.3333333333333335],[6,2.3333333333333335],[5.333333333333333,2.6666666666666665],[5.666666666666667,2.6666666666666665],[6,2.6666666666666665],[5.333333333333333,3],[5.666666666666667,3],[6,3],[3,5.333333333333333],[3.3333333333333335,5.333333333333333],[3.6666666666666665,5.333333333333333],[4,5.333333333333333],[3,5.666666666666667],[3.3333333333333335,5.666666666666667],[3.6666666666666665,5.666666666666667],[4,5.666666666666667],[3.3333333333333335,6],[3.6666666666666665,6],[4,6],[3,6.333333333333333],[3.3333333333333335,6.333333333333333],[3.6666666666666665,6.333333333333333],[4,6.333333333333333],[3,6.666666666666667],[3.3333333333333335,6.666666666666667],[3.6666666666666665,6.666666666666667],[4,6.666666666666667],[3,7],[3.3333333333333335,7],[3.6666666666666665,7],[4,7],[2,6],[2.3333333333333335,6],[2.6666666666666665,6],[2,6.333333333333333],[2.3333333333333335,6.333333333333333],[2.6666666666666665,6.333333333333333],[2,6.666666666666667],[2.3333333333333335,6.666666666666667],[2.6666666666666665,6.666666666666667],[2,7],[2.3333333333333335,7],[2.6666666666666665,7]],Kl=[[0,1],[1,5],[4,5],[0,4],[1,2],[2,6],[5,6],[2,3],[3,7],[6,7],[5,9],[8,9],[4,8],[6,10],[9,10],[7,11],[10,11],[9,13],[12,13],[8,12],[10,14],[13,14],[11,15],[14,15],[3,16],[16,19],[7,19],[16,17],[17,20],[19,20],[17,18],[18,21],[20,21],[19,22],[11,22],[20,23],[22,23],[21,24],[23,24],[22,25],[15,25],[23,26],[25,26],[24,27],[26,27],[13,29],[28,29],[12,28],[14,30],[29,30],[15,31],[30,31],[29,33],[32,33],[28,32],[30,34],[33,34],[31,35],[34,35],[33,37],[36,37],[32,36],[34,38],[37,38],[35,39],[38,39],[25,40],[31,40],[26,41],[40,41],[27,42],[41,42],[40,43],[35,43],[41,44],[43,44],[42,45],[44,45],[43,46],[39,46],[44,47],[46,47],[45,48],[47,48],[49,50],[50,54],[53,54],[49,53],[50,51],[51,55],[54,55],[51,52],[52,56],[55,56],[54,58],[57,58],[53,57],[55,59],[58,59],[56,60],[59,60],[1,58],[0,57],[2,59],[3,60],[52,61],[61,64],[56,64],[61,62],[62,65],[64,65],[62,63],[63,66],[65,66],[64,67],[60,67],[65,68],[67,68],[66,69],[68,69],[16,67],[17,68],[18,69],[70,71],[71,75],[74,75],[70,74],[71,72],[72,76],[75,76],[72,73],[73,77],[76,77],[75,79],[78,79],[74,78],[76,80],[79,80],[77,81],[80,81],[50,79],[49,78],[51,80],[52,81],[73,82],[82,85],[77,85],[82,83],[83,86],[85,86],[83,84],[84,87],[86,87],[85,88],[81,88],[86,89],[88,89],[87,90],[89,90],[61,88],[62,89],[63,90],[91,92],[92,95],[94,95],[91,94],[92,93],[93,96],[95,96],[0,93],[4,96],[95,98],[97,98],[94,97],[96,99],[98,99],[8,99],[98,101],[100,101],[97,100],[99,102],[101,102],[12,102],[101,104],[103,104],[100,103],[102,105],[104,105],[28,105],[104,107],[106,107],[103,106],[105,108],[107,108],[32,108],[107,110],[109,110],[106,109],[108,111],[110,111],[36,111],[112,113],[113,116],[115,116],[112,115],[113,114],[114,117],[116,117],[91,114],[94,117],[116,119],[118,119],[115,118],[117,120],[119,120],[97,120],[119,122],[121,122],[118,121],[120,123],[122,123],[100,123],[122,125],[124,125],[121,124],[123,126],[125,126],[103,126],[125,128],[127,128],[124,127],[126,129],[128,129],[106,129],[128,131],[130,131],[127,130],[129,132],[131,132],[109,132],[133,134],[134,137],[136,137],[133,136],[134,135],[135,138],[137,138],[112,135],[115,138],[137,140],[139,140],[136,139],[138,141],[140,141],[118,141],[140,143],[142,143],[139,142],[141,144],[143,144],[121,144],[143,146],[145,146],[142,145],[144,147],[146,147],[124,147],[146,149],[148,149],[145,148],[147,150],[149,150],[127,150],[149,152],[151,152],[148,151],[150,153],[152,153],[130,153],[154,155],[155,158],[157,158],[154,157],[155,156],[156,159],[158,159],[133,156],[136,159],[158,161],[160,161],[157,160],[159,162],[161,162],[139,162],[161,164],[163,164],[160,163],[162,165],[164,165],[142,165],[37,167],[166,167],[36,166],[38,168],[167,168],[39,169],[168,169],[167,171],[170,171],[166,170],[168,172],[171,172],[169,173],[172,173],[171,175],[174,175],[170,174],[172,176],[175,176],[173,177],[176,177],[46,178],[169,178],[47,179],[178,179],[48,180],[179,180],[178,181],[173,181],[179,182],[181,182],[180,183],[182,183],[181,184],[177,184],[182,185],[184,185],[183,186],[185,186],[175,188],[187,188],[174,187],[176,189],[188,189],[177,190],[189,190],[188,192],[191,192],[187,191],[189,193],[192,193],[190,194],[193,194],[192,196],[195,196],[191,195],[193,197],[196,197],[194,198],[197,198],[18,199],[199,202],[21,202],[199,200],[200,203],[202,203],[200,201],[201,204],[203,204],[202,205],[24,205],[203,206],[205,206],[204,207],[206,207],[205,208],[27,208],[206,209],[208,209],[207,210],[209,210],[208,211],[42,211],[209,212],[211,212],[210,213],[212,213],[211,214],[45,214],[212,215],[214,215],[213,216],[215,216],[214,217],[48,217],[215,218],[217,218],[216,219],[218,219],[201,220],[220,223],[204,223],[220,221],[221,224],[223,224],[221,222],[222,225],[224,225],[223,226],[207,226],[224,227],[226,227],[225,228],[227,228],[226,229],[210,229],[227,230],[229,230],[228,231],[230,231],[184,233],[232,233],[177,232],[185,234],[233,234],[186,235],[234,235],[233,237],[236,237],[232,236],[234,238],[237,238],[235,239],[238,239],[237,240],[198,240],[198,236],[238,241],[240,241],[239,242],[241,242],[240,244],[243,244],[198,243],[241,245],[244,245],[242,246],[245,246],[244,248],[247,248],[243,247],[245,249],[248,249],[246,250],[249,250],[248,252],[251,252],[247,251],[249,253],[252,253],[250,254],[253,254],[255,256],[256,259],[258,259],[255,258],[256,257],[257,260],[259,260],[198,257],[243,260],[259,262],[261,262],[258,261],[260,263],[262,263],[247,263],[262,265],[264,265],[261,264],[263,266],[265,266],[251,266]],Zl=["V","F","F","V","V","F","F","V","F","F","F","F","V","F","F","F","F","F","F","V","F","F","F","F","V","F","F","V","F","F","V","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","V","F","F","F","F","F","F","V","F","F","F","F","F","V","V","F","V","F","V","F","F","F","F","V","F","F","F","F","F","V","F","F","V","F","V","V","V","F","F","F","B","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","B","B","F","F","B","B","F","F","B","F","F","F","F","B","F","F","F","F","F","B","F","F","B","F","F","B","F","F","B","B","F","F","F","F","F","B","F","F","F","B","B","F","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","B","B","B","F","F","V","B","F","F","B","F","F","F","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","F","F","V","F","F","F","F","B","V","F","B","B","B","F","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","F","F","B","B","F","B","B","B","F","F","B","B","F","F","B","F","F","F","B","F","F","F","F","B","B","F","B","B","F","F","B","F","F","F","F","F","F","B","F","F","F","F","F","F","B","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","V","F","V","B","V","F","F","B","F","F","B","F","F","F","B","F","F","B","F","F","B","B","F","B","B","B","B","F","F","B","F","F","B","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","B","F","F","F","F","F","B","F","F","B","F","B","B","B","B","F","F","B","F","F","B","B","F","F","F","F","F","B","F","F","B","F","B","B","B","F","F","B","F","F","B","F","F","F","B","F","F","B","F","F","M","B","F","M","B","M","F","F","M","F","F","B","F","F","F","M","F","F","B","F","F","B","M","F","B","B","B","B","F","F","B","B","F","F","B","F","F","F","B","F","F","F","F","B","B","F","B","B"],Ql=[90,0,0,90,90,0,0,90,0,0,0,0,90,0,0,0,0,0,0,90,0,0,0,0,90,0,0,90,0,0,90,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,90,0,0,0,0,0,0,90,0,0,0,0,0,90,90,0,90,0,90,0,0,0,0,90,0,0,0,0,0,90,0,0,90,0,90,90,90,0,0,0,null,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,null,null,0,0,null,null,0,0,null,0,0,0,0,null,0,0,0,0,0,null,0,0,null,0,0,null,0,0,null,null,0,0,0,0,0,null,0,0,0,null,null,0,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,null,null,null,0,0,90,null,0,0,null,0,0,0,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,0,0,90,0,0,0,0,null,90,0,null,null,null,0,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,null,null,0,null,null,null,0,0,null,null,0,0,null,0,0,0,null,0,0,0,0,null,null,0,null,null,0,0,null,0,0,0,0,0,0,null,0,0,0,0,0,0,null,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,90,0,90,null,90,0,0,null,0,0,null,0,0,0,null,0,0,null,0,0,null,null,0,null,null,null,null,0,0,null,0,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,null,0,null,null,null,null,0,0,null,0,0,null,null,0,0,0,0,0,null,0,0,null,0,null,null,null,0,0,null,0,0,null,0,0,0,null,0,0,null,0,0,-90,null,0,-90,null,-90,0,0,-90,0,0,null,0,0,0,-90,0,0,null,0,0,null,-90,0,null,null,null,null,0,0,null,null,0,0,null,0,0,0,null,0,0,0,0,null,null,0,null,null],Jl=[[0,1,5,4],[1,2,6,5],[2,3,7,6],[4,5,9,8],[5,6,10,9],[6,7,11,10],[8,9,13,12],[9,10,14,13],[10,11,15,14],[3,16,19,7],[16,17,20,19],[17,18,21,20],[7,19,22,11],[19,20,23,22],[20,21,24,23],[11,22,25,15],[22,23,26,25],[23,24,27,26],[12,13,29,28],[13,14,30,29],[14,15,31,30],[28,29,33,32],[29,30,34,33],[30,31,35,34],[32,33,37,36],[33,34,38,37],[34,35,39,38],[15,25,40,31],[25,26,41,40],[26,27,42,41],[31,40,43,35],[40,41,44,43],[41,42,45,44],[35,43,46,39],[43,44,47,46],[44,45,48,47],[49,50,54,53],[50,51,55,54],[51,52,56,55],[53,54,58,57],[54,55,59,58],[55,56,60,59],[57,58,1,0],[58,59,2,1],[59,60,3,2],[52,61,64,56],[61,62,65,64],[62,63,66,65],[56,64,67,60],[64,65,68,67],[65,66,69,68],[60,67,16,3],[67,68,17,16],[68,69,18,17],[70,71,75,74],[71,72,76,75],[72,73,77,76],[74,75,79,78],[75,76,80,79],[76,77,81,80],[78,79,50,49],[79,80,51,50],[80,81,52,51],[73,82,85,77],[82,83,86,85],[83,84,87,86],[77,85,88,81],[85,86,89,88],[86,87,90,89],[81,88,61,52],[88,89,62,61],[89,90,63,62],[91,92,95,94],[92,93,96,95],[93,0,4,96],[94,95,98,97],[95,96,99,98],[96,4,8,99],[97,98,101,100],[98,99,102,101],[99,8,12,102],[100,101,104,103],[101,102,105,104],[102,12,28,105],[103,104,107,106],[104,105,108,107],[105,28,32,108],[106,107,110,109],[107,108,111,110],[108,32,36,111],[112,113,116,115],[113,114,117,116],[114,91,94,117],[115,116,119,118],[116,117,120,119],[117,94,97,120],[118,119,122,121],[119,120,123,122],[120,97,100,123],[121,122,125,124],[122,123,126,125],[123,100,103,126],[124,125,128,127],[125,126,129,128],[126,103,106,129],[127,128,131,130],[128,129,132,131],[129,106,109,132],[133,134,137,136],[134,135,138,137],[135,112,115,138],[136,137,140,139],[137,138,141,140],[138,115,118,141],[139,140,143,142],[140,141,144,143],[141,118,121,144],[142,143,146,145],[143,144,147,146],[144,121,124,147],[145,146,149,148],[146,147,150,149],[147,124,127,150],[148,149,152,151],[149,150,153,152],[150,127,130,153],[154,155,158,157],[155,156,159,158],[156,133,136,159],[157,158,161,160],[158,159,162,161],[159,136,139,162],[160,161,164,163],[161,162,165,164],[162,139,142,165],[36,37,167,166],[37,38,168,167],[38,39,169,168],[166,167,171,170],[167,168,172,171],[168,169,173,172],[170,171,175,174],[171,172,176,175],[172,173,177,176],[39,46,178,169],[46,47,179,178],[47,48,180,179],[169,178,181,173],[178,179,182,181],[179,180,183,182],[173,181,184,177],[181,182,185,184],[182,183,186,185],[174,175,188,187],[175,176,189,188],[176,177,190,189],[187,188,192,191],[188,189,193,192],[189,190,194,193],[191,192,196,195],[192,193,197,196],[193,194,198,197],[18,199,202,21],[199,200,203,202],[200,201,204,203],[21,202,205,24],[202,203,206,205],[203,204,207,206],[24,205,208,27],[205,206,209,208],[206,207,210,209],[27,208,211,42],[208,209,212,211],[209,210,213,212],[42,211,214,45],[211,212,215,214],[212,213,216,215],[45,214,217,48],[214,215,218,217],[215,216,219,218],[201,220,223,204],[220,221,224,223],[221,222,225,224],[204,223,226,207],[223,224,227,226],[224,225,228,227],[207,226,229,210],[226,227,230,229],[227,228,231,230],[177,184,233,232],[184,185,234,233],[185,186,235,234],[232,233,237,236],[233,234,238,237],[234,235,239,238],[236,237,240,198],[237,238,241,240],[238,239,242,241],[198,240,244,243],[240,241,245,244],[241,242,246,245],[243,244,248,247],[244,245,249,248],[245,246,250,249],[247,248,252,251],[248,249,253,252],[249,250,254,253],[255,256,259,258],[256,257,260,259],[257,198,243,260],[258,259,262,261],[259,260,263,262],[260,243,247,263],[261,262,265,264],[262,263,266,265],[263,247,251,266]],Yc={file_spec:Wl,file_creator:Xl,file_title:Yl,file_classes:jl,frame_attributes:ql,vertices_coords:$l,edges_vertices:Kl,edges_assignment:Zl,edges_foldAngle:Ql,faces_vertices:Jl},jc=Object.freeze(Object.defineProperty({__proto__:null,default:Yc,edges_assignment:Zl,edges_foldAngle:Ql,edges_vertices:Kl,faces_vertices:Jl,file_classes:jl,file_creator:Xl,file_spec:Wl,file_title:Yl,frame_attributes:ql,vertices_coords:$l},Symbol.toStringTag,{value:"Module"})),qc="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAgAAAAIAAAIC/AACkQgAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAApEIAAKRCAAAAAACAAAAAgAAAgL8AAKRCAAAAAAAApEIAAAAAAAAAAAAApEIAAAAAAACkQgAApEIAAAAAAAAAAIC/AAAAAAAApEIAAKRCAAAAAAAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAAAAAAgAAAgL8AAACAAACkQgAApEIAAKRCAAAAAAAApEIAAKRCAAAAAAAApEIAAAAAAAAAAIC/AAAAgAAAAIAAAKRCAACkQgAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAApEIAAAAAgL8AAACAAAAAgAAApEIAAKRCAAAAAAAApEIAAAAAAAAAAAAApEIAAAAAAACkQgAAAAAAAAAAAAAAAIC/AAAAAAAApEIAAAAAAECcqAAAyEIAAAAAAACkQgAApEIAAAAAAAAAAAAAAAAAgAAAgL8AQJyoAADIQgAAAAAAAMhCAADIQgAAAAAAAKRCAACkQgAAAAAAAAAAAAAAAAAAAACAvwAApEIAAKRCAAAAAAAAyEIAAMhCAAAAAAAApEIAAAAAAAAAAAAAAAAAgAAAAIAAAIC/AADIQgAAyEIAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAAAAAAAAAAACAAACAPwAAAAAAQJyoAADIQgAAyEIAAMhCAADIQgAAyEIAQJyoAADIQgAAAAAAAAAAAIAAAIA/AAAAAAAAyEIAAMhCAADIQgAAyEIAAMhCAAAAAABAnKgAAMhCAAAAAAAAAAAAAAAAgL8AAAAAAACkQgAAAAAAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAAKRCAAAAAACAAACAvwAAAAAAAMhCAAAAAAAAAAAAAMhCAAAAAAAAyEIAAKRCAAAAAAAApEIAAAAAAAAAAIC/AAAAAAAApEIAAAAAAACkQgAAyEIAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAgAAAgL8AAACAAADIQgAAAAAAAMhCAAAAAAAAAAAAAMhCAAAAAAAAAAAAAKRCAAAAAAAAAAAAgAAAgD8AAMhCAAAAAAAAyEIAAMhCAADIQgAAyEIAAAAAAAAAAAAAyEIAAAAAAAAAAACAAACAPwAAyEIAAMhCAADIQgBAnKgAAMhCAADIQgAAAAAAAAAAAADIQgAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAKRCAAAAAAAAAAAAAMhCAAAAAAAApEIAAKRCAAAAAIC/AABIpR3HY6YAAAAAAAAAAAAAyEIAQJyoAADIQgAAyEIAAAAAAACkQgAApEIAAAAAgL+P44qmAAAAgAAAAAAAAKRCAACkQgBAnKgAAMhCAADIQgAAAAAAAKRCAAAAAAAAAACAv4/jiqYAAACAAECcqAAAyEIAAMhCAECcqAAAyEIAAAAAAAAAAAAApEIAAAAAAAAAAIA/AAAAAAAAAAAAAMhCAADIQgAAyEIAAMhCAAAAAAAAyEIAAMhCAADIQgAAAAAAAAAAgD8AAACAAAAAgAAAyEIAAAAAAADIQgAAyEIAAAAAAAAAAAAAyEIAAMhCAAAAAAAA",$c=Object.freeze(Object.defineProperty({__proto__:null,default:qc},Symbol.toStringTag,{value:"Module"})),Kc="data:model/stl;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAgAAAAIAAAIC/AACkQgAApEIAAKRCAACkQgAAAAAAAKRCAAAAAAAApEIAAKRCAAAAAACAAAAAgAAAgL8AAKRCAAAAAAAApEIAAAAAAAAAAAAApEIAAAAAAACkQgAApEIAAAAAAAAAAIC/AAAAAAAApEIAAKRCmZmhQQAApEIAAKRCAACkQgAAAAAAAKRCmZmhQQAAAAAAgAAAgL8AAACAAACkQgAApEIAAKRCAAAAAAAApEIAAKRCAAAAAAAApEKZmaFBAAAAAIC/AAAAgAAAAIAAAKRCAACkQgAApEIAAKRCAACkQpmZoUEAAKRCAAAAAAAApEIAAAAAgL8AAACAAAAAgAAApEIAAKRCmZmhQQAApEIAAAAAmZmhQQAApEIAAAAAAACkQgAAAAAAAAAAAIAAAIA/AADIQgAAAAAAAMhCAADIQgAAyEIAAMhCAAAAAAAAAAAAAMhCAAAAAAAAAAAAgAAAgD8AAMhCAADIQgAAyEIAQJyoAADIQgAAyEIAAAAAAAAAAAAAyEIAAAAAAIAAAIA/AAAAAABAnKgAAMhCAADIQgAAyEIAAMhCAADIQgBAnKgAAMhCmZmhQQAAAAAAgAAAgD8AAAAAAADIQgAAyEIAAMhCAADIQgAAyEKZmaFBAECcqAAAyEKZmaFBAAAAAIA/AAAAAAAAAAAAAMhCAADIQgAAyEIAAMhCAAAAAAAAyEIAAMhCAADIQpmZoUEAAAAAgD8AAACAAAAAgAAAyEIAAAAAAADIQgAAyEIAAAAAmZmhQQAAyEIAAMhCmZmhQQAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAKRCAAAAAAAAAAAAAMhCAAAAAAAApEIAAKRCAAAAAIC/AABIpR3HY6YAAAAAAAAAAAAAyEIAQJyoAADIQgAAyEIAAAAAAACkQgAApEIAAAAAgL+P44qmAAAAgAAAAAAAAKRCAACkQgBAnKgAAMhCAADIQgAAAAAAAKRCmZmhQQAAAACAv4/jiqYAAACAAECcqAAAyEIAAMhCAECcqAAAyEKZmaFBAAAAAAAApEKZmaFBAAAAAAAAAAAAAAAAgL8AAAAAAACkQpmZoUEAQJyoAADIQpmZoUEAAKRCAACkQpmZoUEAAAAAAAAAAACAAACAvwBAnKgAAMhCmZmhQQAAyEIAAMhCmZmhQQAApEIAAKRCmZmhQQAAAAAAAAAAAAAAAIC/AACkQgAApEKZmaFBAADIQgAAyEKZmaFBAACkQgAAAACZmaFBAAAAAACAAAAAgAAAgL8AAMhCAADIQpmZoUEAAMhCAAAAAJmZoUEAAKRCAAAAAJmZoUEAAAAAAAAAAIC/AAAAAAAApEIAAAAAmZmhQQAAyEIAAAAAmZmhQQAApEIAAAAAAACkQgAAAAAAgAAAgL8AAAAAAADIQgAAAACZmaFBAADIQgAAAAAAAMhCAACkQgAAAAAAAKRCAAAAAAAAAACAvwAAAAAAAKRCAAAAAAAApEIAAMhCAAAAAAAAyEIAAAAAAAAAAAAApEIAAAAAAIAAAIC/AAAAgAAAyEIAAAAAAADIQgAAAAAAAAAAAADIQgAAAAAAAAAAAACkQgAAAAAAgAAAAIAAAIC/IpTCQSKUwkEAAChCIpTCQd5rjcEAAChC3muNwSKUwkEAAChCAAAAAACAAAAAgAAAgL8ilMJB3muNwQAAKELea43B3muNwQAAKELea43BIpTCQQAAKEIAAAAAAAAAAIC/AAAAACKUwkEilMJBAADAwCKUwkEilMJBAAAoQt5rjcEilMJBAADAwAAAAAAAgAAAgL8AAACAIpTCQSKUwkEAAChC3muNwSKUwkEAAChC3muNwSKUwkEAAMDAAAAAAAAAAAAAgAAAgD8RSnlC3muNwQAAoEIRSnlCEUp5QgAAoELea43B3muNwQAAoEIAAAAAAAAAAACAAACAPxFKeUIRSnlCAACgQt5rjcERSnlCAACgQt5rjcHea43BAACgQgAAAAAAgAAAgD8AAAAA3muNwRFKeUIAAKBCEUp5QhFKeUIAAKBC3muNwRFKeUIAAMDAAAAAAACAAACAPwAAAAARSnlCEUp5QgAAoEIRSnlCEUp5QgAAwMDea43BEUp5QgAAwMAAAAAAgD8AAAAAAAAAABFKeUIRSnlCAACgQhFKeULea43BAACgQhFKeUIRSnlCAADAwAAAAACAPwAAAIAAAACAEUp5Qt5rjcEAAKBCEUp5Qt5rjcEAAMDAEUp5QhFKeUIAAMDAAAAAAIC/AAAAAAAAAADea43B3muNwQAAKELea43B3muNwQAAoELea43BIpTCQQAAKEIAAAAAgL8AAAAAAAAAgN5rjcHea43BAACgQt5rjcERSnlCAACgQt5rjcEilMJBAAAoQgAAAACAvwAAAAAAAAAA3muNwSKUwkEAAChC3muNwRFKeUIAAKBC3muNwSKUwkEAAMDAAAAAAIC/AAAAgAAAAIDea43BEUp5QgAAoELea43BEUp5QgAAwMDea43BIpTCQQAAwMAAAAAAgL8AAACAAAAAgCKUwkEilMJBAAAoQiKUwkEilMJBAADAwCKUwkHea43BAAAoQgAAAACAvwAAAIAAAACAIpTCQSKUwkEAAMDAIpTCQd5rjcEAAMDAIpTCQd5rjcEAAChCAAAAAAAAAAAAAAAAgL/ea43BIpTCQQAAwMDea43BEUp5QgAAwMAilMJBIpTCQQAAwMAAAAAAAAAAAACAAACAv95rjcERSnlCAADAwBFKeUIRSnlCAADAwCKUwkEilMJBAADAwAAAAAAAAAAAAAAAAIC/IpTCQSKUwkEAAMDAEUp5QhFKeUIAAMDAIpTCQd5rjcEAAMDAAAAAAACAAAAAgAAAgL8RSnlCEUp5QgAAwMARSnlC3muNwQAAwMAilMJB3muNwQAAwMAAAAAAAAAAAIC/AAAAACKUwkHea43BAADAwBFKeULea43BAADAwCKUwkHea43BAAAoQgAAAAAAgAAAgL8AAAAAEUp5Qt5rjcEAAMDAEUp5Qt5rjcEAAKBCIpTCQd5rjcEAAChCAAAAAAAAAACAvwAAAAAilMJB3muNwQAAKEIRSnlC3muNwQAAoELea43B3muNwQAAKEIAAAAAAIAAAIC/AAAAgBFKeULea43BAACgQt5rjcHea43BAACgQt5rjcHea43BAAAoQgAAAAAAgAAAAIAAAIC/FOICQRTiAkEAAAAAFOICQfaO/sEAAAAA9o7+wRTiAkEAAAAAAAAAAACAAAAAgAAAgL8U4gJB9o7+wQAAAAD2jv7B9o7+wQAAAAD2jv7BFOICQQAAAAAAAAAAAAAAAACAAACAPxTiAkH2jv7BAAAgQhTiAkEU4gJBAAAgQvaO/sH2jv7BAAAgQgAAAAAAAAAAAIAAAIA/FOICQRTiAkEAACBC9o7+wRTiAkEAACBC9o7+wfaO/sEAACBCAAAAAACAAACAPwAAAAD2jv7BFOICQQAAIEIU4gJBFOICQQAAIEL2jv7BFOICQQAAAAAAAAAAAIAAAIA/AAAAABTiAkEU4gJBAAAgQhTiAkEU4gJBAAAAAPaO/sEU4gJBAAAAAAAAAACAPwAAAAAAAAAAFOICQRTiAkEAACBCFOICQfaO/sEAACBCFOICQRTiAkEAAAAAAAAAAIA/AAAAgAAAAIAU4gJB9o7+wQAAIEIU4gJB9o7+wQAAAAAU4gJBFOICQQAAAAAAAAAAAIAAAIC/AAAAgBTiAkH2jv7BAAAgQvaO/sH2jv7BAAAgQhTiAkH2jv7BAAAAAAAAAAAAgAAAgL8AAACA9o7+wfaO/sEAACBC9o7+wfaO/sEAAAAAFOICQfaO/sEAAAAAAAAAAIC/AAAAAAAAAAD2jv7B9o7+wQAAIEL2jv7BFOICQQAAIEL2jv7B9o7+wQAAAAAAAAAAgL8AAACAAAAAgPaO/sEU4gJBAAAgQvaO/sEU4gJBAAAAAPaO/sH2jv7BAAAAAAAA",Zc=Object.freeze(Object.defineProperty({__proto__:null,default:Kc},Symbol.toStringTag,{value:"Module"}));function ki(s){if(!s||typeof s!="object")throw new Error("Invalid FOLD file: must be a JSON object.");const t=s.vertices_coords||[],e=s.faces_vertices||[],n=s.edges_vertices||[],i=s.edges_assignment||[],r=s.edges_foldAngle||[];if(t.length===0||e.length===0)throw new Error("Invalid FOLD file: missing vertices_coords or faces_vertices.");const o=t.map(h=>h.length===2?[h[0],h[1],0]:[h[0],h[1],h[2]||0]),a=n.map((h,d)=>{const u=r[d];if(u!=null)return u;switch((i[d]||"B").toUpperCase()){case"V":return 90;case"M":return-90;case"B":return 0;case"C":return 0;case"F":return 0;case"U":return 0;default:return 0}}),l=new Map;n.forEach((h,d)=>{const u=Math.min(h[0],h[1]),f=Math.max(h[0],h[1]);l.set(`${u}-${f}`,d)});const c={boundary:0,valley:0,mountain:0,cut:0,flat:0,unassigned:0};return i.forEach(h=>{switch((h||"B").toUpperCase()){case"B":c.boundary++;break;case"V":c.valley++;break;case"M":c.mountain++;break;case"C":c.cut++;break;case"F":c.flat++;break;case"U":c.unassigned++;break;default:c.boundary++;break}}),{raw:s,title:s.file_title||"Untitled Box Net",creator:s.file_creator||"Unknown",spec:s.file_spec||1.1,vertices:o,facesVertices:e,edgesVertices:n,edgesAssignment:i,edgesFoldAngle:a,edgeLookup:l,_assembly:s._assembly||null,_artworks:s._artworks||null,counts:{vertices:o.length,edges:n.length,faces:e.length,...c}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xs="170",ui={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qc=0,Zo=1,Jc=2,tc=1,ec=2,dn=3,tn=0,be=1,Je=2,Cn=0,fi=1,Qo=2,Jo=3,ta=4,th=5,zn=100,eh=101,nh=102,ih=103,sh=104,rh=200,oh=201,ah=202,lh=203,Nr=204,Br=205,ch=206,hh=207,dh=208,uh=209,fh=210,ph=211,mh=212,gh=213,Ah=214,Or=0,kr=1,zr=2,Ai=3,Vr=4,Hr=5,Gr=6,Wr=7,wo=0,_h=1,xh=2,Rn=0,vh=1,yh=2,Mh=3,Eh=4,Sh=5,bh=6,wh=7,nc=300,_i=301,xi=302,Xr=303,Yr=304,Ys=306,Ns=1e3,Tn=1001,Bs=1002,Ve=1003,ic=1004,Li=1005,ke=1006,Rs=1007,fn=1008,An=1009,sc=1010,rc=1011,Gi=1012,To=1013,Hn=1014,pn=1015,qi=1016,Co=1017,Ro=1018,vi=1020,oc=35902,ac=1021,lc=1022,ze=1023,cc=1024,hc=1025,pi=1026,yi=1027,dc=1028,Io=1029,uc=1030,Po=1031,Do=1033,Is=33776,Ps=33777,Ds=33778,Fs=33779,jr=35840,qr=35841,$r=35842,Kr=35843,Zr=36196,Qr=37492,Jr=37496,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,oo=37814,ao=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,Ls=36492,mo=36494,go=36495,fc=36283,Ao=36284,_o=36285,xo=36286,Th=2300,Ch=2301,Rh=3200,Ih=3201,Fo=0,Ph=1,un="",Ee="srgb",Ei="srgb-linear",js="linear",Jt="srgb",jn=7680,ea=519,Dh=512,Fh=513,Lh=514,pc=515,Uh=516,Nh=517,Bh=518,Oh=519,na=35044,ia="300 es",mn=2e3,Os=2001;class Xn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sa=1234567;const zi=Math.PI/180,Wi=180/Math.PI;function Si(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function Lo(s,t){return(s%t+t)%t}function kh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function zh(s,t,e){return s!==t?(e-s)/(t-s):0}function Vi(s,t,e){return(1-e)*s+e*t}function Vh(s,t,e,n){return Vi(s,t,1-Math.exp(-e*n))}function Hh(s,t=1){return t-Math.abs(Lo(s,t*2)-t)}function Gh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Wh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Xh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Yh(s,t){return s+Math.random()*(t-s)}function jh(s){return s*(.5-Math.random())}function qh(s){s!==void 0&&(sa=s);let t=sa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $h(s){return s*zi}function Kh(s){return s*Wi}function Zh(s){return(s&s-1)===0&&s!==0}function Qh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function td(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:zi,RAD2DEG:Wi,generateUUID:Si,clamp:Se,euclideanModulo:Lo,mapLinear:kh,inverseLerp:zh,lerp:Vi,damp:Vh,pingpong:Hh,smoothstep:Gh,smootherstep:Wh,randInt:Xh,randFloat:Yh,randFloatSpread:jh,seededRandom:qh,degToRad:$h,radToDeg:Kh,isPowerOfTwo:Zh,ceilPowerOfTwo:Qh,floorPowerOfTwo:Jh,setQuaternionFromProperEuler:td,normalize:Te,denormalize:li};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],A=i[0],p=i[3],m=i[6],y=i[1],v=i[4],_=i[7],T=i[2],b=i[5],w=i[8];return r[0]=o*A+a*y+l*T,r[3]=o*p+a*v+l*b,r[6]=o*m+a*_+l*w,r[1]=c*A+h*y+d*T,r[4]=c*p+h*v+d*b,r[7]=c*m+h*_+d*w,r[2]=u*A+f*y+g*T,r[5]=u*p+f*v+g*b,r[8]=u*m+f*_+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/g;return t[0]=d*A,t[1]=(i*c-h*n)*A,t[2]=(a*n-i*o)*A,t[3]=u*A,t[4]=(h*e-i*l)*A,t[5]=(i*r-a*e)*A,t[6]=f*A,t[7]=(n*l-c*e)*A,t[8]=(o*e-n*r)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Ot;function mc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ed(){const s=zs("canvas");return s.style.display="block",s}const ra={};function Ui(s){s in ra||(ra[s]=!0,console.warn(s))}function nd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function id(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Jt&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Jt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===un?js:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const oa=[.64,.33,.3,.6,.15,.06],aa=[.2126,.7152,.0722],la=[.3127,.329],ca=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ha=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Ei]:{primaries:oa,whitePoint:la,transfer:js,toXYZ:ca,fromXYZ:ha,luminanceCoefficients:aa,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:oa,whitePoint:la,transfer:Jt,toXYZ:ca,fromXYZ:ha,luminanceCoefficients:aa,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});let qn;class rd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=zs("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let od=0;class Uo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tr(i[o].image)):r.push(tr(i[o]))}else r=tr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function tr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class we extends Xn{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Tn,i=Tn,r=ke,o=fn,a=ze,l=An,c=we.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Si(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Bs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Bs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=nc;we.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],A=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-A)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+A)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(f+1)/2,T=(m+1)/2,b=(h+u)/4,w=(d+A)/4,P=(g+p)/4;return v>_&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=w/n):_>T?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=P/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=w/r,i=P/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-A)*(d-A)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-A)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ld extends Xn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gc extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class He{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],A=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=A;return}if(d!==A||l!==u||c!==f||h!==g){let p=1-a;const m=l*u+c*f+h*g+d*A,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,m*y);p=Math.sin(p*b)/T,a=Math.sin(a*b)/T}const _=a*y;if(l=l*p+u*_,c=c*p+f*_,h=h*p+g*_,d=d*p+A*_,p===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(da.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(da.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return er.copy(this).projectOnVector(t),this.sub(er)}reflect(t){return this.sub(er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const er=new I,da=new He;class In{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),ts.subVectors(this.max,Ri),$n.subVectors(t.a,Ri),Kn.subVectors(t.b,Ri),Zn.subVectors(t.c,Ri),vn.subVectors(Kn,$n),yn.subVectors(Zn,Kn),Fn.subVectors($n,Zn);let e=[0,-vn.z,vn.y,0,-yn.z,yn.y,0,-Fn.z,Fn.y,vn.z,0,-vn.x,yn.z,0,-yn.x,Fn.z,0,-Fn.x,-vn.y,vn.x,0,-yn.y,yn.x,0,-Fn.y,Fn.x,0];return!nr(e,$n,Kn,Zn,ts)||(e=[1,0,0,0,1,0,0,0,1],!nr(e,$n,Kn,Zn,ts))?!1:(es.crossVectors(vn,yn),e=[es.x,es.y,es.z],nr(e,$n,Kn,Zn,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new I,new I,new I,new I,new I,new I,new I,new I],Xe=new I,Ji=new In,$n=new I,Kn=new I,Zn=new I,vn=new I,yn=new I,Fn=new I,Ri=new I,ts=new I,es=new I,Ln=new I;function nr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ln.fromArray(s,r);const a=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=t.dot(Ln),c=e.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hd=new In,Ii=new I,ir=new I;class $i{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(ir)),this.expandByPoint(Ii.copy(t.center).sub(ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new I,sr=new I,ns=new I,Mn=new I,rr=new I,is=new I,or=new I;class Ki{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sr.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(sr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ns),a=Mn.dot(this.direction),l=-Mn.dot(ns),c=Mn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const A=1/h;d*=A,u*=A,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(sr).addScaledVector(ns,u),f}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,r){rr.subVectors(e,t),is.subVectors(n,t),or.crossVectors(rr,is);let o=this.direction.dot(or),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,t);const l=a*this.direction.dot(is.crossVectors(Mn,is));if(l<0)return null;const c=a*this.direction.dot(rr.cross(Mn));if(c<0||l+c>o)return null;const h=-a*Mn.dot(or);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,g,A,p){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,A,p)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,A,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=A,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),o=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,A=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-A*c,e[9]=-a*l,e[2]=A-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,A=c*d;e[0]=u+A*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=A+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,A=c*d;e[0]=u-A*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=A-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,A=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+A,e[1]=l*d,e[5]=A*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,A=a*c;e[0]=l*h,e[4]=A-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-A*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,A=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+A,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=A*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,ud)}lookAt(t,e,n){const i=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),En.crossVectors(n,De),En.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),En.crossVectors(n,De)),En.normalize(),ss.crossVectors(De,En),i[0]=En.x,i[4]=ss.x,i[8]=De.x,i[1]=En.y,i[5]=ss.y,i[9]=De.y,i[2]=En.z,i[6]=ss.z,i[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],A=n[6],p=n[10],m=n[14],y=n[3],v=n[7],_=n[11],T=n[15],b=i[0],w=i[4],P=i[8],M=i[12],x=i[1],R=i[5],O=i[9],N=i[13],G=i[2],k=i[6],H=i[10],z=i[14],B=i[3],J=i[7],it=i[11],ut=i[15];return r[0]=o*b+a*x+l*G+c*B,r[4]=o*w+a*R+l*k+c*J,r[8]=o*P+a*O+l*H+c*it,r[12]=o*M+a*N+l*z+c*ut,r[1]=h*b+d*x+u*G+f*B,r[5]=h*w+d*R+u*k+f*J,r[9]=h*P+d*O+u*H+f*it,r[13]=h*M+d*N+u*z+f*ut,r[2]=g*b+A*x+p*G+m*B,r[6]=g*w+A*R+p*k+m*J,r[10]=g*P+A*O+p*H+m*it,r[14]=g*M+A*N+p*z+m*ut,r[3]=y*b+v*x+_*G+T*B,r[7]=y*w+v*R+_*k+T*J,r[11]=y*P+v*O+_*H+T*it,r[15]=y*M+v*N+_*z+T*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],A=t[7],p=t[11],m=t[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+A*(+e*l*f-e*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+p*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],A=t[13],p=t[14],m=t[15],y=d*p*c-A*u*c+A*l*f-a*p*f-d*l*m+a*u*m,v=g*u*c-h*p*c-g*l*f+o*p*f+h*l*m-o*u*m,_=h*A*c-g*d*c+g*a*f-o*A*f-h*a*m+o*d*m,T=g*d*l-h*A*l-g*a*u+o*A*u+h*a*p-o*d*p,b=e*y+n*v+i*_+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=y*w,t[1]=(A*u*r-d*p*r-A*i*f+n*p*f+d*i*m-n*u*m)*w,t[2]=(a*p*r-A*l*r+A*i*c-n*p*c-a*i*m+n*l*m)*w,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*w,t[4]=v*w,t[5]=(h*p*r-g*u*r+g*i*f-e*p*f-h*i*m+e*u*m)*w,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*m-e*l*m)*w,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*f+e*l*f)*w,t[8]=_*w,t[9]=(g*d*r-h*A*r-g*n*f+e*A*f+h*n*m-e*d*m)*w,t[10]=(o*A*r-g*a*r+g*n*c-e*A*c-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*w,t[12]=T*w,t[13]=(h*A*i-g*d*i+g*n*u-e*A*u-h*n*p+e*d*p)*w,t[14]=(g*a*i-o*A*i-g*n*l+e*A*l+o*n*p-e*a*p)*w,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,A=o*h,p=o*d,m=a*d,y=l*c,v=l*h,_=l*d,T=n.x,b=n.y,w=n.z;return i[0]=(1-(A+m))*T,i[1]=(f+_)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(f-_)*b,i[5]=(1-(u+m))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(g+v)*w,i[9]=(p-y)*w,i[10]=(1-(u+A))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qn.set(i[0],i[1],i[2]).length();const o=Qn.set(i[4],i[5],i[6]).length(),a=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const c=1/r,h=1/o,d=1/a;return Ye.elements[0]*=c,Ye.elements[1]*=c,Ye.elements[2]*=c,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=d,Ye.elements[9]*=d,Ye.elements[10]*=d,e.setFromRotationMatrix(Ye),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=mn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===mn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Os)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=mn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,f=(n+i)*h;let g,A;if(a===mn)g=(o+r)*d,A=-2*d;else if(a===Os)g=r*d,A=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=A,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new I,Ye=new Ut,dd=new I(0,0,0),ud=new I(1,1,1),En=new I,ss=new I,De=new I,ua=new Ut,fa=new He;class Ke{constructor(t=0,e=0,n=0,i=Ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fa.setFromEuler(this),this.setFromQuaternion(fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ke.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fd=0;const pa=new I,Jn=new He,an=new Ut,rs=new I,Pi=new I,pd=new I,md=new He,ma=new I(1,0,0),ga=new I(0,1,0),Aa=new I(0,0,1),_a={type:"added"},gd={type:"removed"},ti={type:"childadded",child:null},ar={type:"childremoved",child:null};class Ae extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new Ke,n=new He,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ot}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(ma,t)}rotateY(t){return this.rotateOnAxis(ga,t)}rotateZ(t){return this.rotateOnAxis(Aa,t)}translateOnAxis(t,e){return pa.copy(t).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ma,t)}translateY(t){return this.translateOnAxis(ga,t)}translateZ(t){return this.translateOnAxis(Aa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Pi,rs,this.up):an.lookAt(rs,Pi,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(an),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_a),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gd),ar.child=t,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_a),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new I,ln=new I,lr=new I,cn=new I,ei=new I,ni=new I,xa=new I,cr=new I,hr=new I,dr=new I,ur=new ce,fr=new ce,pr=new ce;class qe{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),ln.subVectors(n,e),lr.subVectors(t,e);const o=je.dot(je),a=je.dot(ln),l=je.dot(lr),c=ln.dot(ln),h=ln.dot(lr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ur.setScalar(0),fr.setScalar(0),pr.setScalar(0),ur.fromBufferAttribute(t,e),fr.fromBufferAttribute(t,n),pr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ur,r.x),o.addScaledVector(fr,r.y),o.addScaledVector(pr,r.z),o}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),ln.subVectors(t,e),je.cross(ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),je.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ei.subVectors(i,n),ni.subVectors(r,n),cr.subVectors(t,n);const l=ei.dot(cr),c=ni.dot(cr);if(l<=0&&c<=0)return e.copy(n);hr.subVectors(t,i);const h=ei.dot(hr),d=ni.dot(hr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ei,o);dr.subVectors(t,r);const f=ei.dot(dr),g=ni.dot(dr);if(g>=0&&f<=g)return e.copy(r);const A=f*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ni,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return xa.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(xa,a);const m=1/(p+A+u);return o=A*m,a=u*m,e.copy(n).addScaledVector(ei,o).addScaledVector(ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},os={h:0,s:0,l:0};function mr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Lo(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mr(o,r,t+1/3),this.g=mr(o,r,t),this.b=mr(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=Ac[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Yt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Se(Me.r*255,0,255))*65536+Math.round(Se(Me.g*255,0,255))*256+Math.round(Se(Me.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,r=Me.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ee){Yt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(os);const n=Vi(Sn.h,os.h,e),i=Vi(Sn.s,os.s,e),r=Vi(Sn.l,os.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Pt;Pt.NAMES=Ac;let Ad=0;class en extends Xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Si(),this.name="",this.blending=fi,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Br,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _c extends en{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new I,as=new Lt;class $t{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=na,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==na&&(t.usage=this.usage),t}}class xc extends $t{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vc extends $t{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends $t{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _d=0;const Ne=new Ut,gr=new Ae,ii=new I,Fe=new In,Di=new In,me=new I;class de extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?vc:xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,n){return Ne.makeTranslation(t,e,n),this.applyMatrix4(Ne),this}scale(t,e,n){return Ne.makeScale(t,e,n),this.applyMatrix4(Ne),this}lookAt(t){return gr.lookAt(t),gr.updateMatrix(),this.applyMatrix4(gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(me.addVectors(Fe.min,Di.min),Fe.expandByPoint(me),me.addVectors(Fe.max,Di.max),Fe.expandByPoint(me)):(Fe.expandByPoint(Di.min),Fe.expandByPoint(Di.max))}Fe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)me.fromBufferAttribute(a,c),l&&(ii.fromBufferAttribute(t,c),me.add(ii)),i=Math.max(i,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const c=new I,h=new I,d=new I,u=new Lt,f=new Lt,g=new Lt,A=new I,p=new I;function m(P,M,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(A.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(A),a[M].add(A),a[x].add(A),l[P].add(p),l[M].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,M=y.length;P<M;++P){const x=y[P],R=x.start,O=x.count;for(let N=R,G=R+O;N<G;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new I,_=new I,T=new I,b=new I;function w(P){T.fromBufferAttribute(i,P),b.copy(T);const M=a[P];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),_.crossVectors(b,M);const R=_.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,M=y.length;P<M;++P){const x=y[P],R=x.start,O=x.count;for(let N=R,G=R+O;N<G;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),A=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,A),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let A=0,p=l.length;A<p;A++){a.isInterleavedBufferAttribute?f=l[A]*a.data.stride+a.offset:f=l[A]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new $t(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const va=new Ut,Un=new Ki,ls=new $i,ya=new I,cs=new I,hs=new I,ds=new I,Ar=new I,us=new I,Ma=new I,fs=new I;class xe extends Ae{constructor(t=new de,e=new _c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){us.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ar.fromBufferAttribute(d,t),o?us.addScaledVector(Ar,h):us.addScaledVector(Ar.sub(e),h))}e.add(us)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(ls.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ls,ya)===null||Un.origin.distanceToSquared(ya)>(t.far-t.near)**2))&&(va.copy(r).invert(),Un.copy(t.ray).applyMatrix4(va),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=u.length;g<A;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,T=v;_<T;_+=3){const b=a.getX(_),w=a.getX(_+1),P=a.getX(_+2);i=ps(this,m,t,n,c,h,d,b,w,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(a.count,f.start+f.count);for(let p=g,m=A;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),_=a.getX(p+2);i=ps(this,o,t,n,c,h,d,y,v,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,A=u.length;g<A;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let _=y,T=v;_<T;_+=3){const b=_,w=_+1,P=_+2;i=ps(this,m,t,n,c,h,d,b,w,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),A=Math.min(l.count,f.start+f.count);for(let p=g,m=A;p<m;p+=3){const y=p,v=p+1,_=p+2;i=ps(this,o,t,n,c,h,d,y,v,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function xd(s,t,e,n,i,r,o,a){let l;if(t.side===be?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===tn,a),l===null)return null;fs.copy(a),fs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:s}}function ps(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,cs),s.getVertexPosition(l,hs),s.getVertexPosition(c,ds);const h=xd(s,t,e,n,cs,hs,ds,Ma);if(h){const d=new I;qe.getBarycoord(Ma,cs,hs,ds,d),i&&(h.uv=qe.getInterpolatedAttribute(i,a,l,c,d,new Lt)),r&&(h.uv1=qe.getInterpolatedAttribute(r,a,l,c,d,new Lt)),o&&(h.normal=qe.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};qe.getNormal(cs,hs,ds,u.normal),h.face=u,h.barycoord=d}return h}class bi extends de{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(d,2));function g(A,p,m,y,v,_,T,b,w,P,M){const x=_/w,R=T/P,O=_/2,N=T/2,G=b/2,k=w+1,H=P+1;let z=0,B=0;const J=new I;for(let it=0;it<H;it++){const ut=it*R-N;for(let Tt=0;Tt<k;Tt++){const Ht=Tt*x-O;J[A]=Ht*y,J[p]=ut*v,J[m]=G,c.push(J.x,J.y,J.z),J[A]=0,J[p]=0,J[m]=b>0?1:-1,h.push(J.x,J.y,J.z),d.push(Tt/w),d.push(1-it/P),z+=1}}for(let it=0;it<P;it++)for(let ut=0;ut<w;ut++){const Tt=u+ut+k*it,Ht=u+ut+k*(it+1),j=u+(ut+1)+k*(it+1),Q=u+(ut+1)+k*it;l.push(Tt,Ht,Q),l.push(Ht,j,Q),B+=6}a.addGroup(f,B,M),f+=B,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=Mi(s[e]);for(const i in n)t[i]=n[i]}return t}function vd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const yd={clone:Mi,merge:Ce};var Md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends en{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Md,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new I,Ea=new Lt,Sa=new Lt;class Oe extends Mc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,Ea,Sa),e.subVectors(Sa,Ea)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ri=1;class Sd extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(si,ri,t,e);i.layers=this.layers,this.add(i);const r=new Oe(si,ri,t,e);r.layers=this.layers,this.add(r);const o=new Oe(si,ri,t,e);o.layers=this.layers,this.add(o);const a=new Oe(si,ri,t,e);a.layers=this.layers,this.add(a);const l=new Oe(si,ri,t,e);l.layers=this.layers,this.add(l);const c=new Oe(si,ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ec extends we{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bd extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ec(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bi(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Cn});r.uniforms.tEquirect.value=e;const o=new xe(i,r),a=e.minFilter;return e.minFilter===fn&&(e.minFilter=ke),new Sd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const _r=new I,wd=new I,Td=new Ot;class wn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_r.subVectors(n,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Td.getNormalMatrix(t),i=this.coplanarPoint(_r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new $i,ms=new I;class Bo{constructor(t=new wn,e=new wn,n=new wn,i=new wn,r=new wn,o=new wn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],A=i[10],p=i[11],m=i[12],y=i[13],v=i[14],_=i[15];if(n[0].setComponents(l-r,u-c,p-f,_-m).normalize(),n[1].setComponents(l+r,u+c,p+f,_+m).normalize(),n[2].setComponents(l+o,u+h,p+g,_+y).normalize(),n[3].setComponents(l-o,u-h,p-g,_-y).normalize(),n[4].setComponents(l-a,u-d,p-A,_-v).normalize(),e===mn)n[5].setComponents(l+a,u+d,p+A,_+v).normalize();else if(e===Os)n[5].setComponents(a,d,A,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Cd(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],A=d[f];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++u,d[u]=A)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const A=d[f];s.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class qs extends de{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],A=[],p=[];for(let m=0;m<h;m++){const y=m*u-o;for(let v=0;v<c;v++){const _=v*d-r;g.push(_,-y,0),A.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,_=y+c*(m+1),T=y+1+c*(m+1),b=y+1+c*m;f.push(v,_,b),f.push(_,T,b)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(A,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rd=`#ifdef USE_ALPHAHASH
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
#endif`,tu=`vec3 transformedNormal = objectNormal;
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
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
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
}`,tp=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,zt={alphahash_fragment:Rd,alphahash_pars_fragment:Id,alphamap_fragment:Pd,alphamap_pars_fragment:Dd,alphatest_fragment:Fd,alphatest_pars_fragment:Ld,aomap_fragment:Ud,aomap_pars_fragment:Nd,batching_pars_vertex:Bd,batching_vertex:Od,begin_vertex:kd,beginnormal_vertex:zd,bsdfs:Vd,iridescence_fragment:Hd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:Yd,clipping_planes_vertex:jd,color_fragment:qd,color_pars_fragment:$d,color_pars_vertex:Kd,color_vertex:Zd,common:Qd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:tu,displacementmap_pars_vertex:eu,displacementmap_vertex:nu,emissivemap_fragment:iu,emissivemap_pars_fragment:su,colorspace_fragment:ru,colorspace_pars_fragment:ou,envmap_fragment:au,envmap_common_pars_fragment:lu,envmap_pars_fragment:cu,envmap_pars_vertex:hu,envmap_physical_pars_fragment:yu,envmap_vertex:du,fog_vertex:uu,fog_pars_vertex:fu,fog_fragment:pu,fog_pars_fragment:mu,gradientmap_pars_fragment:gu,lightmap_pars_fragment:Au,lights_lambert_fragment:_u,lights_lambert_pars_fragment:xu,lights_pars_begin:vu,lights_toon_fragment:Mu,lights_toon_pars_fragment:Eu,lights_phong_fragment:Su,lights_phong_pars_fragment:bu,lights_physical_fragment:wu,lights_physical_pars_fragment:Tu,lights_fragment_begin:Cu,lights_fragment_maps:Ru,lights_fragment_end:Iu,logdepthbuf_fragment:Pu,logdepthbuf_pars_fragment:Du,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:Lu,map_fragment:Uu,map_pars_fragment:Nu,map_particle_fragment:Bu,map_particle_pars_fragment:Ou,metalnessmap_fragment:ku,metalnessmap_pars_fragment:zu,morphinstance_vertex:Vu,morphcolor_vertex:Hu,morphnormal_vertex:Gu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Xu,normal_fragment_begin:Yu,normal_fragment_maps:ju,normal_pars_fragment:qu,normal_pars_vertex:$u,normal_vertex:Ku,normalmap_pars_fragment:Zu,clearcoat_normal_fragment_begin:Qu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:of,dithering_fragment:af,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:uf,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:Af,skinnormal_vertex:_f,specularmap_fragment:xf,specularmap_pars_fragment:vf,tonemapping_fragment:yf,tonemapping_pars_fragment:Mf,transmission_fragment:Ef,transmission_pars_fragment:Sf,uv_pars_fragment:bf,uv_pars_vertex:wf,uv_vertex:Tf,worldpos_vertex:Cf,background_vert:Rf,background_frag:If,backgroundCube_vert:Pf,backgroundCube_frag:Df,cube_vert:Ff,cube_frag:Lf,depth_vert:Uf,depth_frag:Nf,distanceRGBA_vert:Bf,distanceRGBA_frag:Of,equirect_vert:kf,equirect_frag:zf,linedashed_vert:Vf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:Yf,meshmatcap_vert:jf,meshmatcap_frag:qf,meshnormal_vert:$f,meshnormal_frag:Kf,meshphong_vert:Zf,meshphong_frag:Qf,meshphysical_vert:Jf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:op,sprite_vert:ap,sprite_frag:lp},rt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Qe={basic:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ce([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ce([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ce([rt.points,rt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ce([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ce([rt.common,rt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ce([rt.sprite,rt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ce([rt.common,rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ce([rt.lights,rt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Qe.physical={uniforms:Ce([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const gs={r:0,b:0,g:0},Bn=new Ke,cp=new Ut;function hp(s,t,e,n,i,r,o){const a=new Pt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function A(y){let v=!1;const _=g(y);_===null?m(a,l):_&&_.isColor&&(m(_,1),v=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===Ys)?(h===void 0&&(h=new xe(new bi(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Mi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Bn.copy(v.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(Bn)),h.material.toneMapped=Yt.getTransfer(_.colorSpace)!==Jt,(d!==_||u!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new xe(new qs(2,2),new Pn({name:"BackgroundMaterial",uniforms:Mi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(_.colorSpace)!==Jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(gs,yc(s)),n.buffers.color.setClear(gs.r,gs.g,gs.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:A,addToRenderList:p}}function dp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(x,R,O,N,G){let k=!1;const H=d(N,O,R);r!==H&&(r=H,c(r.object)),k=f(x,N,O,G),k&&g(x,N,O,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(x,R,O,N),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function d(x,R,O){const N=O.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let k=G[R.id];k===void 0&&(k={},G[R.id]=k);let H=k[N];return H===void 0&&(H=u(l()),k[N]=H),H}function u(x){const R=[],O=[],N=[];for(let G=0;G<e;G++)R[G]=0,O[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,R,O,N){const G=r.attributes,k=R.attributes;let H=0;const z=O.getAttributes();for(const B in z)if(z[B].location>=0){const it=G[B];let ut=k[B];if(ut===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),it===void 0||it.attribute!==ut||ut&&it.data!==ut.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function g(x,R,O,N){const G={},k=R.attributes;let H=0;const z=O.getAttributes();for(const B in z)if(z[B].location>=0){let it=k[B];it===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(it=x.instanceColor));const ut={};ut.attribute=it,it&&it.data&&(ut.data=it.data),G[B]=ut,H++}r.attributes=G,r.attributesNum=H,r.index=N}function A(){const x=r.newAttributes;for(let R=0,O=x.length;R<O;R++)x[R]=0}function p(x){m(x,0)}function m(x,R){const O=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;O[x]=1,N[x]===0&&(s.enableVertexAttribArray(x),N[x]=1),G[x]!==R&&(s.vertexAttribDivisor(x,R),G[x]=R)}function y(){const x=r.newAttributes,R=r.enabledAttributes;for(let O=0,N=R.length;O<N;O++)R[O]!==x[O]&&(s.disableVertexAttribArray(O),R[O]=0)}function v(x,R,O,N,G,k,H){H===!0?s.vertexAttribIPointer(x,R,O,G,k):s.vertexAttribPointer(x,R,O,N,G,k)}function _(x,R,O,N){A();const G=N.attributes,k=O.getAttributes(),H=R.defaultAttributeValues;for(const z in k){const B=k[z];if(B.location>=0){let J=G[z];if(J===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),J!==void 0){const it=J.normalized,ut=J.itemSize,Tt=t.get(J);if(Tt===void 0)continue;const Ht=Tt.buffer,j=Tt.type,Q=Tt.bytesPerElement,ot=j===s.INT||j===s.UNSIGNED_INT||J.gpuType===To;if(J.isInterleavedBufferAttribute){const st=J.data,At=st.stride,bt=J.offset;if(st.isInstancedInterleavedBuffer){for(let tt=0;tt<B.locationSize;tt++)m(B.location+tt,st.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let tt=0;tt<B.locationSize;tt++)p(B.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let tt=0;tt<B.locationSize;tt++)v(B.location+tt,ut/B.locationSize,j,it,At*Q,(bt+ut/B.locationSize*tt)*Q,ot)}else{if(J.isInstancedBufferAttribute){for(let st=0;st<B.locationSize;st++)m(B.location+st,J.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let st=0;st<B.locationSize;st++)p(B.location+st);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let st=0;st<B.locationSize;st++)v(B.location+st,ut/B.locationSize,j,it,ut*Q,ut/B.locationSize*st*Q,ot)}}else if(H!==void 0){const it=H[z];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(B.location,it);break;case 3:s.vertexAttrib3fv(B.location,it);break;case 4:s.vertexAttrib4fv(B.location,it);break;default:s.vertexAttrib1fv(B.location,it)}}}}y()}function T(){P();for(const x in n){const R=n[x];for(const O in R){const N=R[O];for(const G in N)h(N[G].object),delete N[G];delete R[O]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const O in R){const N=R[O];for(const G in N)h(N[G].object),delete N[G];delete R[O]}delete n[x.id]}function w(x){for(const R in n){const O=n[R];if(O[x.id]===void 0)continue;const N=O[x.id];for(const G in N)h(N[G].object),delete N[G];delete O[x.id]}}function P(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:p,disableUnusedAttributes:y}}function up(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let A=0;A<d;A++)g+=h[A]*u[A];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==ze&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==An&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==pn&&!P)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:b}}function pp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new wn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,A=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,v=y*4;let _=m.clippingState||null;l.value=_,_=h(g,u,v,f);for(let T=0;T!==v;++T)_[T]=e[T];m.clippingState=_,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const A=d!==null?d.length:0;let p=null;if(A!==0){if(p=l.value,g!==!0||p===null){const m=f+A*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,_=f;v!==A;++v,_+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}function mp(s){let t=new WeakMap;function e(o,a){return a===Xr?o.mapping=_i:a===Yr&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xr||a===Yr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bd(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class bc extends Mc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hi=4,ba=[.125,.215,.35,.446,.526,.582],Vn=20,xr=new bc,wa=new Pt;let vr=null,yr=0,Mr=0,Er=!1;const kn=(1+Math.sqrt(5))/2,oi=1/kn,Ta=[new I(-kn,oi,0),new I(kn,oi,0),new I(-oi,0,kn),new I(oi,0,kn),new I(0,kn,-oi),new I(0,kn,oi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ca{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vr,yr,Mr),this._renderer.xr.enabled=Er,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Mr=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:qi,format:ze,colorSpace:Ei,depthBuffer:!1},i=Ra(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(r)),this._blurMaterial=Ap(r,t,e)}return i}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,i){const a=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(wa),h.toneMapping=Rn,h.autoClear=!1;const f=new _c({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new xe(new bi,f);let A=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,A=!0):(f.color.copy(wa),A=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;As(i,y*v,m>2?v:0,v,v),h.setRenderTarget(i),A&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ta[(i-r-1)%Ta.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new xe(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vn-1),A=r/g,p=isFinite(r)?1+Math.floor(h*A):Vn;p>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const m=[];let y=0;for(let w=0;w<Vn;++w){const P=w/A,M=Math.exp(-P*P/2);m.push(M),w===0?y+=M:w<p&&(y+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const _=this._sizeLods[i],T=3*_*(i>v-hi?i-v+hi:0),b=4*(this._cubeSize-_);As(e,T,b,3*_,2*_),l.setRenderTarget(e),l.render(d,xr)}}function gp(s){const t=[],e=[],n=[];let i=s;const r=s-hi+1+ba.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-hi?l=ba[o-s+hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,A=3,p=2,m=1,y=new Float32Array(A*g*f),v=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let b=0;b<f;b++){const w=b%3*2/3-1,P=b>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];y.set(M,A*g*b),v.set(u,p*g*b);const x=[b,b,b,b,b,b];_.set(x,m*g*b)}const T=new de;T.setAttribute("position",new $t(y,A)),T.setAttribute("uv",new $t(v,p)),T.setAttribute("faceIndex",new $t(_,m)),t.push(T),i>hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ra(s,t,e){const n=new Gn(s,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ap(s,t,e){const n=new Float32Array(Vn),i=new I(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oo(),fragmentShader:`

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
	`}function _p(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xr||l===Yr,h=l===_i||l===xi;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ca(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ca(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vp(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const A=u.morphAttributes[g];for(let p=0,m=A.length;p<m;p++)t.remove(A[p])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const A=f[g];for(let p=0,m=A.length;p<m;p++)t.update(A[p],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let A=0;if(f!==null){const y=f.array;A=f.version;for(let v=0,_=y.length;v<_;v+=3){const T=y[v+0],b=y[v+1],w=y[v+2];u.push(T,b,b,w,w,T)}}else if(g!==void 0){const y=g.array;A=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){const T=v+0,b=v+1,w=v+2;u.push(T,b,b,w,w,T)}}else return;const p=new(mc(u)?vc:xc)(u,1);p.version=A;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function yp(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(u,f,g,A){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],A[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,A,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y]*A[y];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Mp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ep(s,t,e){const n=new WeakMap,i=new ce;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,A=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),A===!0&&(_=2),p===!0&&(_=3);let T=a.attributes.position.count*_,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*b*4*d),P=new gc(w,T,b,d);P.type=pn,P.needsUpdate=!0;const M=_*4;for(let R=0;R<d;R++){const O=m[R],N=y[R],G=v[R],k=T*b*4*R;for(let H=0;H<O.count;H++){const z=H*M;g===!0&&(i.fromBufferAttribute(O,H),w[k+z+0]=i.x,w[k+z+1]=i.y,w[k+z+2]=i.z,w[k+z+3]=0),A===!0&&(i.fromBufferAttribute(N,H),w[k+z+4]=i.x,w[k+z+5]=i.y,w[k+z+6]=i.z,w[k+z+7]=0),p===!0&&(i.fromBufferAttribute(G,H),w[k+z+8]=i.x,w[k+z+9]=i.y,w[k+z+10]=i.z,w[k+z+11]=G.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new Lt(T,b)},n.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const A=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",A),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Sp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class wc extends we{constructor(t,e,n,i,r,o,a,l,c,h=pi){if(h!==pi&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===pi&&(n=Hn),n===void 0&&h===yi&&(n=vi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tc=new we,Da=new wc(1,1),Cc=new gc,Rc=new cd,Ic=new Ec,Fa=[],La=[],Ua=new Float32Array(16),Na=new Float32Array(9),Ba=new Float32Array(4);function wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fa[i];if(r===void 0&&(r=new Float32Array(i),Fa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $s(s,t){let e=La[t];e===void 0&&(e=new Int32Array(t),La[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function bp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2fv(this.addr,t),pe(e,t)}}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;s.uniform3fv(this.addr,t),pe(e,t)}}function Cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4fv(this.addr,t),pe(e,t)}}function Rp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Ba.set(n),s.uniformMatrix2fv(this.addr,!1,Ba),pe(e,n)}}function Ip(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Na.set(n),s.uniformMatrix3fv(this.addr,!1,Na),pe(e,n)}}function Pp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Ua.set(n),s.uniformMatrix4fv(this.addr,!1,Ua),pe(e,n)}}function Dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2iv(this.addr,t),pe(e,t)}}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3iv(this.addr,t),pe(e,t)}}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4iv(this.addr,t),pe(e,t)}}function Np(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2uiv(this.addr,t),pe(e,t)}}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3uiv(this.addr,t),pe(e,t)}}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4uiv(this.addr,t),pe(e,t)}}function zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Da.compareFunction=pc,r=Da):r=Tc,e.setTexture2D(t||r,i)}function Vp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rc,i)}function Hp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ic,i)}function Gp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cc,i)}function Wp(s){switch(s){case 5126:return bp;case 35664:return wp;case 35665:return Tp;case 35666:return Cp;case 35674:return Rp;case 35675:return Ip;case 35676:return Pp;case 5124:case 35670:return Dp;case 35667:case 35671:return Fp;case 35668:case 35672:return Lp;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Bp;case 36295:return Op;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(s,t){s.uniform1fv(this.addr,t)}function Yp(s,t){const e=wi(t,this.size,2);s.uniform2fv(this.addr,e)}function jp(s,t){const e=wi(t,this.size,3);s.uniform3fv(this.addr,e)}function qp(s,t){const e=wi(t,this.size,4);s.uniform4fv(this.addr,e)}function $p(s,t){const e=wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Kp(s,t){const e=wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Zp(s,t){const e=wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Qp(s,t){s.uniform1iv(this.addr,t)}function Jp(s,t){s.uniform2iv(this.addr,t)}function tm(s,t){s.uniform3iv(this.addr,t)}function em(s,t){s.uniform4iv(this.addr,t)}function nm(s,t){s.uniform1uiv(this.addr,t)}function im(s,t){s.uniform2uiv(this.addr,t)}function sm(s,t){s.uniform3uiv(this.addr,t)}function rm(s,t){s.uniform4uiv(this.addr,t)}function om(s,t,e){const n=this.cache,i=t.length,r=$s(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Tc,r[o])}function am(s,t,e){const n=this.cache,i=t.length,r=$s(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Rc,r[o])}function lm(s,t,e){const n=this.cache,i=t.length,r=$s(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ic,r[o])}function cm(s,t,e){const n=this.cache,i=t.length,r=$s(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Cc,r[o])}function hm(s){switch(s){case 5126:return Xp;case 35664:return Yp;case 35665:return jp;case 35666:return qp;case 35674:return $p;case 35675:return Kp;case 35676:return Zp;case 5124:case 35670:return Qp;case 35667:case 35671:return Jp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}class dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wp(e.type)}}class um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hm(e.type)}}class fm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function Oa(s,t){s.seq.push(t),s.map[t.id]=t}function pm(s,t,e){const n=s.name,i=n.length;for(Sr.lastIndex=0;;){const r=Sr.exec(n),o=Sr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Oa(e,c===void 0?new dm(a,s,t):new um(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new fm(a),Oa(e,d)),e=d}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);pm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ka(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const mm=37297;let gm=0;function Am(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const za=new Ot;function _m(s){Yt._getMatrix(za,Yt.workingColorSpace,s);const t=`mat3( ${za.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case js:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Va(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Am(s.getShaderSource(t),o)}else return i}function xm(s,t){const e=_m(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vm(s,t){let e;switch(t){case vh:e="Linear";break;case yh:e="Reinhard";break;case Mh:e="Cineon";break;case Eh:e="ACESFilmic";break;case bh:e="AgX";break;case wh:e="Neutral";break;case Sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _s=new I;function ym(){Yt.getLuminanceCoefficients(_s);const s=_s.x.toFixed(4),t=_s.y.toFixed(4),e=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function Em(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ni(s){return s!==""}function Ha(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ga(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(s){return s.replace(bm,Tm)}const wm=new Map;function Tm(s,t){let e=zt[t];if(e===void 0){const n=wm.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vo(e)}const Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wa(s){return s.replace(Cm,Rm)}function Rm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xa(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Im(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ec?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case xi:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Fm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wo:t="ENVMAP_BLENDING_MULTIPLY";break;case _h:t="ENVMAP_BLENDING_MIX";break;case xh:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Um(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Im(e),c=Pm(e),h=Dm(e),d=Fm(e),u=Lm(e),f=Mm(e),g=Em(r),A=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ni).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ni).join(`
`),m.length>0&&(m+=`
`)):(p=[Xa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),m=[Xa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Rn?vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),o=vo(o),o=Ha(o,e),o=Ga(o,e),a=vo(a),a=Ha(a,e),a=Ga(a,e),o=Wa(o),a=Wa(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+o,_=y+m+a,T=ka(i,i.VERTEX_SHADER,v),b=ka(i,i.FRAGMENT_SHADER,_);i.attachShader(A,T),i.attachShader(A,b),e.index0AttributeName!==void 0?i.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(A,0,"position"),i.linkProgram(A);function w(R){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(A).trim(),N=i.getShaderInfoLog(T).trim(),G=i.getShaderInfoLog(b).trim();let k=!0,H=!0;if(i.getProgramParameter(A,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,A,T,b);else{const z=Va(i,T,"vertex"),B=Va(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(A,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+z+`
`+B)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||G==="")&&(H=!1);H&&(R.diagnostics={runnable:k,programLog:O,vertexShader:{log:N,prefix:p},fragmentShader:{log:G,prefix:m}})}i.deleteShader(T),i.deleteShader(b),P=new Us(i,A),M=Sm(i,A)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(A,mm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gm++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=T,this.fragmentShader=b,this}let Nm=0;class Bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Om(t),e.set(t,n)),n}}class Om{constructor(t){this.id=Nm++,this.code=t,this.usedTimes=0}}function km(s,t,e,n,i,r,o){const a=new No,l=new Bm,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,R,O,N){const G=O.fog,k=N.geometry,H=M.isMeshStandardMaterial?O.environment:null,z=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),B=z&&z.mapping===Ys?z.image.height:null,J=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=it!==void 0?it.length:0;let Tt=0;k.morphAttributes.position!==void 0&&(Tt=1),k.morphAttributes.normal!==void 0&&(Tt=2),k.morphAttributes.color!==void 0&&(Tt=3);let Ht,j,Q,ot;if(J){const Qt=Qe[J];Ht=Qt.vertexShader,j=Qt.fragmentShader}else Ht=M.vertexShader,j=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),ot=l.getFragmentShaderID(M);const st=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),bt=N.isInstancedMesh===!0,tt=N.isBatchedMesh===!0,ft=!!M.map,St=!!M.matcap,Gt=!!z,D=!!M.aoMap,ie=!!M.lightMap,Ct=!!M.bumpMap,It=!!M.normalMap,Et=!!M.displacementMap,se=!!M.emissiveMap,wt=!!M.metalnessMap,C=!!M.roughnessMap,E=M.anisotropy>0,V=M.clearcoat>0,$=M.dispersion>0,Z=M.iridescence>0,q=M.sheen>0,yt=M.transmission>0,lt=E&&!!M.anisotropyMap,pt=V&&!!M.clearcoatMap,Xt=V&&!!M.clearcoatNormalMap,et=V&&!!M.clearcoatRoughnessMap,mt=Z&&!!M.iridescenceMap,Rt=Z&&!!M.iridescenceThicknessMap,Dt=q&&!!M.sheenColorMap,gt=q&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,kt=!!M.specularColorMap,ee=!!M.specularIntensityMap,F=yt&&!!M.transmissionMap,at=yt&&!!M.thicknessMap,Y=!!M.gradientMap,K=!!M.alphaMap,dt=M.alphaTest>0,ct=!!M.alphaHash,Nt=!!M.extensions;let le=Rn;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(le=s.toneMapping);const ve={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Ht,fragmentShader:j,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:ot,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:tt,batchingColor:tt&&N._colorsTexture!==null,instancing:bt,instancingColor:bt&&N.instanceColor!==null,instancingMorph:bt&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ei,alphaToCoverage:!!M.alphaToCoverage,map:ft,matcap:St,envMap:Gt,envMapMode:Gt&&z.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:ie,bumpMap:Ct,normalMap:It,displacementMap:u&&Et,emissiveMap:se,normalMapObjectSpace:It&&M.normalMapType===Ph,normalMapTangentSpace:It&&M.normalMapType===Fo,metalnessMap:wt,roughnessMap:C,anisotropy:E,anisotropyMap:lt,clearcoat:V,clearcoatMap:pt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:et,dispersion:$,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:Rt,sheen:q,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:kt,specularIntensityMap:ee,transmission:yt,transmissionMap:F,thicknessMap:at,gradientMap:Y,opaque:M.transparent===!1&&M.blending===fi&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:ct,combine:M.combine,mapUv:ft&&A(M.map.channel),aoMapUv:D&&A(M.aoMap.channel),lightMapUv:ie&&A(M.lightMap.channel),bumpMapUv:Ct&&A(M.bumpMap.channel),normalMapUv:It&&A(M.normalMap.channel),displacementMapUv:Et&&A(M.displacementMap.channel),emissiveMapUv:se&&A(M.emissiveMap.channel),metalnessMapUv:wt&&A(M.metalnessMap.channel),roughnessMapUv:C&&A(M.roughnessMap.channel),anisotropyMapUv:lt&&A(M.anisotropyMap.channel),clearcoatMapUv:pt&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&A(M.sheenRoughnessMap.channel),specularMapUv:Wt&&A(M.specularMap.channel),specularColorMapUv:kt&&A(M.specularColorMap.channel),specularIntensityMapUv:ee&&A(M.specularIntensityMap.channel),transmissionMapUv:F&&A(M.transmissionMap.channel),thicknessMapUv:at&&A(M.thicknessMap.channel),alphaMapUv:K&&A(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(It||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(ft||K),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Tt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:ft&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)===Jt,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)===Jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function m(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(x,M),v(x,M),x.push(s.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function y(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function v(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const x=g[M.type];let R;if(x){const O=Qe[x];R=yd.clone(O.uniforms)}else R=M.uniforms;return R}function T(M,x){let R;for(let O=0,N=h.length;O<N;O++){const G=h[O];if(G.cacheKey===x){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Um(s,x,M,r),h.push(R)),R}function b(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:T,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:P}}function zm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Vm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ya(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ja(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,A,p){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:A,group:p},s[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=A,m.group=p),t++,m}function a(d,u,f,g,A,p){const m=o(d,u,f,g,A,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(d,u,f,g,A,p){const m=o(d,u,f,g,A,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Vm),n.length>1&&n.sort(u||Ya),i.length>1&&i.sort(u||Ya)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Hm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new ja,s.set(n,[o])):i>=r.length?(o=new ja,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Pt};break;case"SpotLight":e={position:new I,direction:new I,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Wm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Xm=0;function Ym(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jm(s){const t=new Gm,e=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new Ut,o=new Ut;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,A=0,p=0,m=0,y=0,v=0,_=0,T=0,b=0,w=0;c.sort(Ym);for(let M=0,x=c.length;M<x;M++){const R=c[M],O=R.color,N=R.intensity,G=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*N,d+=O.g*N,u+=O.b*N;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],N);w++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,B=e.get(R);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=H,f++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(O).multiplyScalar(N),H.distance=G,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[A]=H;const z=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,z.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[A]=z.matrix,R.castShadow){const B=e.get(R);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.spotShadow[A]=B,n.spotShadowMap[A]=k,_++}A++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(O).multiplyScalar(N),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=H,p++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const z=R.shadow,B=e.get(R);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(N),H.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[m]=H,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==A||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=A,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=A,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=w,n.version=Xm++)}function l(c,h){let d=0,u=0,f=0,g=0,A=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const v=c[m];if(v.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),d++}else if(v.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const _=n.hemi[A];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(p),A++}}}return{setup:a,setupView:l,state:n}}function qa(s){const t=new jm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new qa(s),t.set(i,[a])):r>=o.length?(a=new qa(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class $m extends en{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Km extends en{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zm=`void main() {
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
}`;function Jm(s,t,e){let n=new Bo;const i=new Lt,r=new Lt,o=new ce,a=new $m({depthPacking:Ih}),l=new Km,c={},h=e.maxTextureSize,d={[tn]:be,[be]:tn,[Je]:Je},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Zm,fragmentShader:Qm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new xe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let m=this.type;this.render=function(b,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Cn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=m!==dn&&this.type===dn,G=m===dn&&this.type!==dn;for(let k=0,H=b.length;k<H;k++){const z=b[k],B=z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const J=B.getFrameExtents();if(i.multiply(J),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||N===!0||G===!0){const ut=this.type!==dn?{minFilter:Ve,magFilter:Ve}:{};B.map!==null&&B.map.dispose(),B.map=new Gn(i.x,i.y,ut),B.map.texture.name=z.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const it=B.getViewportCount();for(let ut=0;ut<it;ut++){const Tt=B.getViewport(ut);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),O.viewport(o),B.updateMatrices(z,ut),n=B.getFrustum(),_(w,P,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===dn&&y(B,P),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(M,x,R)};function y(b,w){const P=t.update(A);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,P,u,A,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,P,f,A,null)}function v(b,w,P,M){let x=null;const R=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=x.uuid,N=w.uuid;let G=c[O];G===void 0&&(G={},c[O]=G);let k=G[N];k===void 0&&(k=x.clone(),G[N]=k,w.addEventListener("dispose",T)),x=k}if(x.visible=w.visible,x.wireframe=w.wireframe,M===dn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=s.properties.get(x);O.light=P}return x}function _(b,w,P,M,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===dn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const N=t.update(b),G=b.material;if(Array.isArray(G)){const k=N.groups;for(let H=0,z=k.length;H<z;H++){const B=k[H],J=G[B.materialIndex];if(J&&J.visible){const it=v(b,J,M,x);b.onBeforeShadow(s,b,w,P,N,it,B),s.renderBufferDirect(P,null,N,it,b,B),b.onAfterShadow(s,b,w,P,N,it,B)}}}else if(G.visible){const k=v(b,G,M,x);b.onBeforeShadow(s,b,w,P,N,k,null),s.renderBufferDirect(P,null,N,k,b,null),b.onAfterShadow(s,b,w,P,N,k,null)}}const O=b.children;for(let N=0,G=O.length;N<G;N++)_(O[N],w,P,M,x)}function T(b){b.target.removeEventListener("dispose",T);for(const P in c){const M=c[P],x=b.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const tg={[Or]:kr,[zr]:Gr,[Vr]:Wr,[Ai]:Hr,[kr]:Or,[Gr]:zr,[Wr]:Vr,[Hr]:Ai};function eg(s,t){function e(){let F=!1;const at=new ce;let Y=null;const K=new ce(0,0,0,0);return{setMask:function(dt){Y!==dt&&!F&&(s.colorMask(dt,dt,dt,dt),Y=dt)},setLocked:function(dt){F=dt},setClear:function(dt,ct,Nt,le,ve){ve===!0&&(dt*=le,ct*=le,Nt*=le),at.set(dt,ct,Nt,le),K.equals(at)===!1&&(s.clearColor(dt,ct,Nt,le),K.copy(at))},reset:function(){F=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let F=!1,at=!1,Y=null,K=null,dt=null;return{setReversed:function(ct){if(at!==ct){const Nt=t.get("EXT_clip_control");at?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const le=dt;dt=null,this.setClear(le)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?st(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ct){Y!==ct&&!F&&(s.depthMask(ct),Y=ct)},setFunc:function(ct){if(at&&(ct=tg[ct]),K!==ct){switch(ct){case Or:s.depthFunc(s.NEVER);break;case kr:s.depthFunc(s.ALWAYS);break;case zr:s.depthFunc(s.LESS);break;case Ai:s.depthFunc(s.LEQUAL);break;case Vr:s.depthFunc(s.EQUAL);break;case Hr:s.depthFunc(s.GEQUAL);break;case Gr:s.depthFunc(s.GREATER);break;case Wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ct}},setLocked:function(ct){F=ct},setClear:function(ct){dt!==ct&&(at&&(ct=1-ct),s.clearDepth(ct),dt=ct)},reset:function(){F=!1,Y=null,K=null,dt=null,at=!1}}}function i(){let F=!1,at=null,Y=null,K=null,dt=null,ct=null,Nt=null,le=null,ve=null;return{setTest:function(Qt){F||(Qt?st(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!F&&(s.stencilMask(Qt),at=Qt)},setFunc:function(Qt,Ge,nn){(Y!==Qt||K!==Ge||dt!==nn)&&(s.stencilFunc(Qt,Ge,nn),Y=Qt,K=Ge,dt=nn)},setOp:function(Qt,Ge,nn){(ct!==Qt||Nt!==Ge||le!==nn)&&(s.stencilOp(Qt,Ge,nn),ct=Qt,Nt=Ge,le=nn)},setLocked:function(Qt){F=Qt},setClear:function(Qt){ve!==Qt&&(s.clearStencil(Qt),ve=Qt)},reset:function(){F=!1,at=null,Y=null,K=null,dt=null,ct=null,Nt=null,le=null,ve=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,A=!1,p=null,m=null,y=null,v=null,_=null,T=null,b=null,w=new Pt(0,0,0),P=0,M=!1,x=null,R=null,O=null,N=null,G=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=z>=1):B.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=z>=2);let J=null,it={};const ut=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),Ht=new ce().fromArray(ut),j=new ce().fromArray(Tt);function Q(F,at,Y,K){const dt=new Uint8Array(4),ct=s.createTexture();s.bindTexture(F,ct),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<Y;Nt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(at+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ct}const ot={};ot[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(s.DEPTH_TEST),o.setFunc(Ai),Ct(!1),It(Zo),st(s.CULL_FACE),D(Cn);function st(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function At(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function bt(F,at){return d[F]!==at?(s.bindFramebuffer(F,at),d[F]=at,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function tt(F,at){let Y=f,K=!1;if(F){Y=u.get(at),Y===void 0&&(Y=[],u.set(at,Y));const dt=F.textures;if(Y.length!==dt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Nt=dt.length;ct<Nt;ct++)Y[ct]=s.COLOR_ATTACHMENT0+ct;Y.length=dt.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function ft(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const St={[zn]:s.FUNC_ADD,[eh]:s.FUNC_SUBTRACT,[nh]:s.FUNC_REVERSE_SUBTRACT};St[ih]=s.MIN,St[sh]=s.MAX;const Gt={[rh]:s.ZERO,[oh]:s.ONE,[ah]:s.SRC_COLOR,[Nr]:s.SRC_ALPHA,[fh]:s.SRC_ALPHA_SATURATE,[dh]:s.DST_COLOR,[ch]:s.DST_ALPHA,[lh]:s.ONE_MINUS_SRC_COLOR,[Br]:s.ONE_MINUS_SRC_ALPHA,[uh]:s.ONE_MINUS_DST_COLOR,[hh]:s.ONE_MINUS_DST_ALPHA,[ph]:s.CONSTANT_COLOR,[mh]:s.ONE_MINUS_CONSTANT_COLOR,[gh]:s.CONSTANT_ALPHA,[Ah]:s.ONE_MINUS_CONSTANT_ALPHA};function D(F,at,Y,K,dt,ct,Nt,le,ve,Qt){if(F===Cn){A===!0&&(At(s.BLEND),A=!1);return}if(A===!1&&(st(s.BLEND),A=!0),F!==th){if(F!==p||Qt!==M){if((m!==zn||_!==zn)&&(s.blendEquation(s.FUNC_ADD),m=zn,_=zn),Qt)switch(F){case fi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qo:s.blendFunc(s.ONE,s.ONE);break;case Jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ta:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case fi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ta:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,v=null,T=null,b=null,w.set(0,0,0),P=0,p=F,M=Qt}return}dt=dt||at,ct=ct||Y,Nt=Nt||K,(at!==m||dt!==_)&&(s.blendEquationSeparate(St[at],St[dt]),m=at,_=dt),(Y!==y||K!==v||ct!==T||Nt!==b)&&(s.blendFuncSeparate(Gt[Y],Gt[K],Gt[ct],Gt[Nt]),y=Y,v=K,T=ct,b=Nt),(le.equals(w)===!1||ve!==P)&&(s.blendColor(le.r,le.g,le.b,ve),w.copy(le),P=ve),p=F,M=!1}function ie(F,at){F.side===Je?At(s.CULL_FACE):st(s.CULL_FACE);let Y=F.side===be;at&&(Y=!Y),Ct(Y),F.blending===fi&&F.transparent===!1?D(Cn):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const K=F.stencilWrite;a.setTest(K),K&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(F){x!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),x=F)}function It(F){F!==Qc?(st(s.CULL_FACE),F!==R&&(F===Zo?s.cullFace(s.BACK):F===Jc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),R=F}function Et(F){F!==O&&(H&&s.lineWidth(F),O=F)}function se(F,at,Y){F?(st(s.POLYGON_OFFSET_FILL),(N!==at||G!==Y)&&(s.polygonOffset(at,Y),N=at,G=Y)):At(s.POLYGON_OFFSET_FILL)}function wt(F){F?st(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function C(F){F===void 0&&(F=s.TEXTURE0+k-1),J!==F&&(s.activeTexture(F),J=F)}function E(F,at,Y){Y===void 0&&(J===null?Y=s.TEXTURE0+k-1:Y=J);let K=it[Y];K===void 0&&(K={type:void 0,texture:void 0},it[Y]=K),(K.type!==F||K.texture!==at)&&(J!==Y&&(s.activeTexture(Y),J=Y),s.bindTexture(F,at||ot[F]),K.type=F,K.texture=at)}function V(){const F=it[J];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(F){Ht.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ht.copy(F))}function gt(F){j.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function Wt(F,at){let Y=c.get(at);Y===void 0&&(Y=new WeakMap,c.set(at,Y));let K=Y.get(F);K===void 0&&(K=s.getUniformBlockIndex(at,F.name),Y.set(F,K))}function kt(F,at){const K=c.get(at).get(F);l.get(at)!==K&&(s.uniformBlockBinding(at,K,F.__bindingPointIndex),l.set(at,K))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,it={},d={},u=new WeakMap,f=[],g=null,A=!1,p=null,m=null,y=null,v=null,_=null,T=null,b=null,w=new Pt(0,0,0),P=0,M=!1,x=null,R=null,O=null,N=null,G=null,Ht.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:At,bindFramebuffer:bt,drawBuffers:tt,useProgram:ft,setBlending:D,setMaterial:ie,setFlipSided:Ct,setCullFace:It,setLineWidth:Et,setPolygonOffset:se,setScissorTest:wt,activeTexture:C,bindTexture:E,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:kt,texStorage2D:Xt,texStorage3D:et,texSubImage2D:q,texSubImage3D:yt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Dt,viewport:gt,reset:ee}}function $a(s,t,e,n){const i=ng(n);switch(e){case ac:return s*t;case cc:return s*t;case hc:return s*t*2;case dc:return s*t/i.components*i.byteLength;case Io:return s*t/i.components*i.byteLength;case uc:return s*t*2/i.components*i.byteLength;case Po:return s*t*2/i.components*i.byteLength;case lc:return s*t*3/i.components*i.byteLength;case ze:return s*t*4/i.components*i.byteLength;case Do:return s*t*4/i.components*i.byteLength;case Is:case Ps:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Fs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qr:case Kr:return Math.max(s,16)*Math.max(t,8)/4;case jr:case $r:return Math.max(s,8)*Math.max(t,8)/2;case Zr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ls:case mo:case go:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fc:case Ao:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _o:case xo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ng(s){switch(s){case An:case sc:return{byteLength:1,components:1};case Gi:case rc:case qi:return{byteLength:2,components:1};case Co:case Ro:return{byteLength:2,components:4};case Hn:case To:case pn:return{byteLength:4,components:1};case oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ig(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return f?new OffscreenCanvas(C,E):zs("canvas")}function A(C,E,V){let $=1;const Z=wt(C);if((Z.width>V||Z.height>V)&&($=V/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor($*Z.width),yt=Math.floor($*Z.height);d===void 0&&(d=g(q,yt));const lt=E?g(q,yt):d;return lt.width=q,lt.height=yt,lt.getContext("2d").drawImage(C,0,0,q,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+yt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,E,V,$,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=E;if(E===s.RED&&(V===s.FLOAT&&(q=s.R32F),V===s.HALF_FLOAT&&(q=s.R16F),V===s.UNSIGNED_BYTE&&(q=s.R8)),E===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.R8UI),V===s.UNSIGNED_SHORT&&(q=s.R16UI),V===s.UNSIGNED_INT&&(q=s.R32UI),V===s.BYTE&&(q=s.R8I),V===s.SHORT&&(q=s.R16I),V===s.INT&&(q=s.R32I)),E===s.RG&&(V===s.FLOAT&&(q=s.RG32F),V===s.HALF_FLOAT&&(q=s.RG16F),V===s.UNSIGNED_BYTE&&(q=s.RG8)),E===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RG8UI),V===s.UNSIGNED_SHORT&&(q=s.RG16UI),V===s.UNSIGNED_INT&&(q=s.RG32UI),V===s.BYTE&&(q=s.RG8I),V===s.SHORT&&(q=s.RG16I),V===s.INT&&(q=s.RG32I)),E===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RGB8UI),V===s.UNSIGNED_SHORT&&(q=s.RGB16UI),V===s.UNSIGNED_INT&&(q=s.RGB32UI),V===s.BYTE&&(q=s.RGB8I),V===s.SHORT&&(q=s.RGB16I),V===s.INT&&(q=s.RGB32I)),E===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),V===s.UNSIGNED_INT&&(q=s.RGBA32UI),V===s.BYTE&&(q=s.RGBA8I),V===s.SHORT&&(q=s.RGBA16I),V===s.INT&&(q=s.RGBA32I)),E===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),E===s.RGBA){const yt=Z?js:Yt.getTransfer($);V===s.FLOAT&&(q=s.RGBA32F),V===s.HALF_FLOAT&&(q=s.RGBA16F),V===s.UNSIGNED_BYTE&&(q=yt===Jt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(C,E){let V;return C?E===null||E===Hn||E===vi?V=s.DEPTH24_STENCIL8:E===pn?V=s.DEPTH32F_STENCIL8:E===Gi&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hn||E===vi?V=s.DEPTH_COMPONENT24:E===pn?V=s.DEPTH_COMPONENT32F:E===Gi&&(V=s.DEPTH_COMPONENT16),V}function T(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==ke?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){const E=C.target;E.removeEventListener("dispose",b),P(E),E.isVideoTexture&&h.delete(E)}function w(C){const E=C.target;E.removeEventListener("dispose",w),x(E)}function P(C){const E=n.get(C);if(E.__webglInit===void 0)return;const V=C.source,$=u.get(V);if($){const Z=$[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(C),Object.keys($).length===0&&u.delete(V)}n.remove(C)}function M(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const V=C.source,$=u.get(V);delete $[E.__cacheKey],o.memory.textures--}function x(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let Z=0;Z<E.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)s.deleteFramebuffer(E.__webglFramebuffer[$]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=C.textures;for(let $=0,Z=V.length;$<Z;$++){const q=n.get(V[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(V[$])}n.remove(C)}let R=0;function O(){R=0}function N(){const C=R;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function G(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function k(C,E){const V=n.get(C);if(C.isVideoTexture&&Et(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,C,E);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+E)}function H(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){j(V,C,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+E)}function z(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){j(V,C,E);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+E)}function B(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Q(V,C,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+E)}const J={[Ns]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[Bs]:s.MIRRORED_REPEAT},it={[Ve]:s.NEAREST,[ic]:s.NEAREST_MIPMAP_NEAREST,[Li]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Rs]:s.LINEAR_MIPMAP_NEAREST,[fn]:s.LINEAR_MIPMAP_LINEAR},ut={[Dh]:s.NEVER,[Oh]:s.ALWAYS,[Fh]:s.LESS,[pc]:s.LEQUAL,[Lh]:s.EQUAL,[Bh]:s.GEQUAL,[Uh]:s.GREATER,[Nh]:s.NOTEQUAL};function Tt(C,E){if(E.type===pn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ke||E.magFilter===Rs||E.magFilter===Li||E.magFilter===fn||E.minFilter===ke||E.minFilter===Rs||E.minFilter===Li||E.minFilter===fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,J[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,it[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,it[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ut[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ve||E.minFilter!==Li&&E.minFilter!==fn||E.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ht(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",b));const $=E.source;let Z=u.get($);Z===void 0&&(Z={},u.set($,Z));const q=G(E);if(q!==C.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Z[q].usedTimes++;const yt=Z[C.__cacheKey];yt!==void 0&&(Z[C.__cacheKey].usedTimes--,yt.usedTimes===0&&M(E)),C.__cacheKey=q,C.__webglTexture=Z[q].texture}return V}function j(C,E,V){let $=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=s.TEXTURE_3D);const Z=Ht(C,E),q=E.source;e.bindTexture($,C.__webglTexture,s.TEXTURE0+V);const yt=n.get(q);if(q.version!==yt.__version||Z===!0){e.activeTexture(s.TEXTURE0+V);const lt=Yt.getPrimaries(Yt.workingColorSpace),pt=E.colorSpace===un?null:Yt.getPrimaries(E.colorSpace),Xt=E.colorSpace===un||lt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let et=A(E.image,!1,i.maxTextureSize);et=se(E,et);const mt=r.convert(E.format,E.colorSpace),Rt=r.convert(E.type);let Dt=v(E.internalFormat,mt,Rt,E.colorSpace,E.isVideoTexture);Tt($,E);let gt;const Wt=E.mipmaps,kt=E.isVideoTexture!==!0,ee=yt.__version===void 0||Z===!0,F=q.dataReady,at=T(E,et);if(E.isDepthTexture)Dt=_(E.format===yi,E.type),ee&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Dt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Dt,et.width,et.height,0,mt,Rt,null));else if(E.isDataTexture)if(Wt.length>0){kt&&ee&&e.texStorage2D(s.TEXTURE_2D,at,Dt,Wt[0].width,Wt[0].height);for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,mt,Rt,gt.data);E.generateMipmaps=!1}else kt?(ee&&e.texStorage2D(s.TEXTURE_2D,at,Dt,et.width,et.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,mt,Rt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,et.width,et.height,0,mt,Rt,et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){kt&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Dt,Wt[0].width,Wt[0].height,et.depth);for(let Y=0,K=Wt.length;Y<K;Y++)if(gt=Wt[Y],E.format!==ze)if(mt!==null)if(kt){if(F)if(E.layerUpdates.size>0){const dt=$a(gt.width,gt.height,E.format,E.type);for(const ct of E.layerUpdates){const Nt=gt.data.subarray(ct*dt/gt.data.BYTES_PER_ELEMENT,(ct+1)*dt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ct,gt.width,gt.height,1,mt,Nt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Dt,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,et.depth,mt,Rt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Dt,gt.width,gt.height,et.depth,0,mt,Rt,gt.data)}else{kt&&ee&&e.texStorage2D(s.TEXTURE_2D,at,Dt,Wt[0].width,Wt[0].height);for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],E.format!==ze?mt!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,Y,Dt,gt.width,gt.height,0,mt,Rt,gt.data)}else if(E.isDataArrayTexture)if(kt){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Dt,et.width,et.height,et.depth),F)if(E.layerUpdates.size>0){const Y=$a(et.width,et.height,E.format,E.type);for(const K of E.layerUpdates){const dt=et.data.subarray(K*Y/et.data.BYTES_PER_ELEMENT,(K+1)*Y/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,mt,Rt,dt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Rt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,et.width,et.height,et.depth,0,mt,Rt,et.data);else if(E.isData3DTexture)kt?(ee&&e.texStorage3D(s.TEXTURE_3D,at,Dt,et.width,et.height,et.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Rt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,et.width,et.height,et.depth,0,mt,Rt,et.data);else if(E.isFramebufferTexture){if(ee)if(kt)e.texStorage2D(s.TEXTURE_2D,at,Dt,et.width,et.height);else{let Y=et.width,K=et.height;for(let dt=0;dt<at;dt++)e.texImage2D(s.TEXTURE_2D,dt,Dt,Y,K,0,mt,Rt,null),Y>>=1,K>>=1}}else if(Wt.length>0){if(kt&&ee){const Y=wt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,at,Dt,Y.width,Y.height)}for(let Y=0,K=Wt.length;Y<K;Y++)gt=Wt[Y],kt?F&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt,Rt,gt):e.texImage2D(s.TEXTURE_2D,Y,Dt,mt,Rt,gt);E.generateMipmaps=!1}else if(kt){if(ee){const Y=wt(et);e.texStorage2D(s.TEXTURE_2D,at,Dt,Y.width,Y.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Rt,et)}else e.texImage2D(s.TEXTURE_2D,0,Dt,mt,Rt,et);p(E)&&m($),yt.__version=q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Q(C,E,V){if(E.image.length!==6)return;const $=Ht(C,E),Z=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);const q=n.get(Z);if(Z.version!==q.__version||$===!0){e.activeTexture(s.TEXTURE0+V);const yt=Yt.getPrimaries(Yt.workingColorSpace),lt=E.colorSpace===un?null:Yt.getPrimaries(E.colorSpace),pt=E.colorSpace===un||yt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Xt&&!et?mt[K]=A(E.image[K],!0,i.maxCubemapSize):mt[K]=et?E.image[K].image:E.image[K],mt[K]=se(E,mt[K]);const Rt=mt[0],Dt=r.convert(E.format,E.colorSpace),gt=r.convert(E.type),Wt=v(E.internalFormat,Dt,gt,E.colorSpace),kt=E.isVideoTexture!==!0,ee=q.__version===void 0||$===!0,F=Z.dataReady;let at=T(E,Rt);Tt(s.TEXTURE_CUBE_MAP,E);let Y;if(Xt){kt&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Wt,Rt.width,Rt.height);for(let K=0;K<6;K++){Y=mt[K].mipmaps;for(let dt=0;dt<Y.length;dt++){const ct=Y[dt];E.format!==ze?Dt!==null?kt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ct.width,ct.height,Dt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Wt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ct.width,ct.height,Dt,gt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,Wt,ct.width,ct.height,0,Dt,gt,ct.data)}}}else{if(Y=E.mipmaps,kt&&ee){Y.length>0&&at++;const K=wt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(et){kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Dt,gt,mt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,mt[K].width,mt[K].height,0,Dt,gt,mt[K].data);for(let dt=0;dt<Y.length;dt++){const Nt=Y[dt].image[K].image;kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Nt.width,Nt.height,Dt,gt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Wt,Nt.width,Nt.height,0,Dt,gt,Nt.data)}}else{kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,gt,mt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,Dt,gt,mt[K]);for(let dt=0;dt<Y.length;dt++){const ct=Y[dt];kt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Dt,gt,ct.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,Wt,Dt,gt,ct.image[K])}}}p(E)&&m(s.TEXTURE_CUBE_MAP),q.__version=Z.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ot(C,E,V,$,Z,q){const yt=r.convert(V.format,V.colorSpace),lt=r.convert(V.type),pt=v(V.internalFormat,yt,lt,V.colorSpace),Xt=n.get(E),et=n.get(V);if(et.__renderTarget=E,!Xt.__hasExternalTextures){const mt=Math.max(1,E.width>>q),Rt=Math.max(1,E.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,pt,mt,Rt,E.depth,0,yt,lt,null):e.texImage2D(Z,q,pt,mt,Rt,0,yt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),It(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,et.__webglTexture,0,Ct(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,et.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(C,E,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const $=E.depthTexture,Z=$&&$.isDepthTexture?$.type:null,q=_(E.stencilBuffer,Z),yt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Ct(E);It(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,q,E.width,E.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,q,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,q,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,C)}else{const $=E.textures;for(let Z=0;Z<$.length;Z++){const q=$[Z],yt=r.convert(q.format,q.colorSpace),lt=r.convert(q.type),pt=v(q.internalFormat,yt,lt,q.colorSpace),Xt=Ct(E);V&&It(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,pt,E.width,E.height):It(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,pt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const Z=$.__webglTexture,q=Ct(E);if(E.depthTexture.format===pi)It(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(E.depthTexture.format===yi)It(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function bt(C){const E=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=$}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");At(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=s.createRenderbuffer(),st(E.__webglDepthbuffer[$],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),st(E.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Z)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(C,E,V){const $=n.get(C);E!==void 0&&ot($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&bt(C)}function ft(C){const E=C.texture,V=n.get(C),$=n.get(E);C.addEventListener("dispose",w);const Z=C.textures,q=C.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,o.memory.textures++),q){V.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[lt]=[];for(let pt=0;pt<E.mipmaps.length;pt++)V.__webglFramebuffer[lt][pt]=s.createFramebuffer()}else V.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let lt=0;lt<E.mipmaps.length;lt++)V.__webglFramebuffer[lt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(yt)for(let lt=0,pt=Z.length;lt<pt;lt++){const Xt=n.get(Z[lt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&It(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const pt=Z[lt];V.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[lt]);const Xt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),mt=v(pt.internalFormat,Xt,et,pt.colorSpace,C.isXRRenderTarget===!0),Rt=Ct(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,mt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,V.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),st(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,E);for(let lt=0;lt<6;lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)ot(V.__webglFramebuffer[lt][pt],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else ot(V.__webglFramebuffer[lt],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(E)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let lt=0,pt=Z.length;lt<pt;lt++){const Xt=Z[lt],et=n.get(Xt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Tt(s.TEXTURE_2D,Xt),ot(V.__webglFramebuffer,C,Xt,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),p(Xt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),Tt(lt,E),E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)ot(V.__webglFramebuffer[pt],C,E,s.COLOR_ATTACHMENT0,lt,pt);else ot(V.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,lt,0);p(E)&&m(lt),e.unbindTexture()}C.depthBuffer&&bt(C)}function St(C){const E=C.textures;for(let V=0,$=E.length;V<$;V++){const Z=E[V];if(p(Z)){const q=y(C),yt=n.get(Z).__webglTexture;e.bindTexture(q,yt),m(q),e.unbindTexture()}}}const Gt=[],D=[];function ie(C){if(C.samples>0){if(It(C)===!1){const E=C.textures,V=C.width,$=C.height;let Z=s.COLOR_BUFFER_BIT;const q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(C),lt=E.length>1;if(lt)for(let pt=0;pt<E.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let pt=0;pt<E.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Xt=n.get(E[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,V,$,0,0,V,$,Z,s.NEAREST),l===!0&&(Gt.length=0,D.length=0,Gt.push(s.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Gt.push(q),D.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<E.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[pt]);const Xt=n.get(E[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ct(C){return Math.min(i.maxSamples,C.samples)}function It(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(C){const E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function se(C,E){const V=C.colorSpace,$=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Ei&&V!==un&&(Yt.getTransfer(V)===Jt?($!==ze||Z!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=B,this.rebindTextures=tt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=It}function sg(s,t){function e(n,i=un){let r;const o=Yt.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===Co)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return s.UNSIGNED_SHORT_5_5_5_1;if(n===oc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return s.BYTE;if(n===rc)return s.SHORT;if(n===Gi)return s.UNSIGNED_SHORT;if(n===To)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===qi)return s.HALF_FLOAT;if(n===ac)return s.ALPHA;if(n===lc)return s.RGB;if(n===ze)return s.RGBA;if(n===cc)return s.LUMINANCE;if(n===hc)return s.LUMINANCE_ALPHA;if(n===pi)return s.DEPTH_COMPONENT;if(n===yi)return s.DEPTH_STENCIL;if(n===dc)return s.RED;if(n===Io)return s.RED_INTEGER;if(n===uc)return s.RG;if(n===Po)return s.RG_INTEGER;if(n===Do)return s.RGBA_INTEGER;if(n===Is||n===Ps||n===Ds||n===Fs)if(o===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===qr||n===$r||n===Kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zr||n===Qr||n===Jr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zr||n===Qr)return o===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jr)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ls)return o===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===Ao||n===_o||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ls)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class rg extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $e extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const og={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const A of t.hand.values()){const p=e.getJointPose(A,n),m=this._getHandJoint(c,A);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ag=`
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

}`;class cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:ag,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hg extends Xn{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const A=new cg,p=e.getContextAttributes();let m=null,y=null;const v=[],_=[],T=new Lt;let b=null;const w=new Oe;w.viewport=new ce;const P=new Oe;P.viewport=new ce;const M=[w,P],x=new rg;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=v[j];return Q===void 0&&(Q=new br,v[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=v[j];return Q===void 0&&(Q=new br,v[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=v[j];return Q===void 0&&(Q=new br,v[j]=Q),Q.getHandSpace()};function N(j){const Q=_.indexOf(j.inputSource);if(Q===-1)return;const ot=v[Q];ot!==void 0&&(ot.update(j.inputSource,j.frame,c||o),ot.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",k);for(let j=0;j<v.length;j++){const Q=_[j];Q!==null&&(_[j]=null,v[j].disconnect(Q))}R=null,O=null,A.reset(),t.setRenderTarget(m),f=null,u=null,d=null,i=null,y=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",G),i.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Gn(f.framebufferWidth,f.framebufferHeight,{format:ze,type:An,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ot=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?yi:pi,ot=p.stencil?vi:Hn);const At={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Gn(u.textureWidth,u.textureHeight,{format:ze,type:An,depthTexture:new wc(u.textureWidth,u.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function k(j){for(let Q=0;Q<j.removed.length;Q++){const ot=j.removed[Q],st=_.indexOf(ot);st>=0&&(_[st]=null,v[st].disconnect(ot))}for(let Q=0;Q<j.added.length;Q++){const ot=j.added[Q];let st=_.indexOf(ot);if(st===-1){for(let bt=0;bt<v.length;bt++)if(bt>=_.length){_.push(ot),st=bt;break}else if(_[bt]===null){_[bt]=ot,st=bt;break}if(st===-1)break}const At=v[st];At&&At.connect(ot)}}const H=new I,z=new I;function B(j,Q,ot){H.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(ot.matrixWorld);const st=H.distanceTo(z),At=Q.projectionMatrix.elements,bt=ot.projectionMatrix.elements,tt=At[14]/(At[10]-1),ft=At[14]/(At[10]+1),St=(At[9]+1)/At[5],Gt=(At[9]-1)/At[5],D=(At[8]-1)/At[0],ie=(bt[8]+1)/bt[0],Ct=tt*D,It=tt*ie,Et=st/(-D+ie),se=Et*-D;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(se),j.translateZ(Et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const wt=tt+Et,C=ft+Et,E=Ct-se,V=It+(st-se),$=St*ft/C*wt,Z=Gt*ft/C*wt;j.projectionMatrix.makePerspective(E,V,$,Z,wt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function J(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,ot=j.far;A.texture!==null&&(A.depthNear>0&&(Q=A.depthNear),A.depthFar>0&&(ot=A.depthFar)),x.near=P.near=w.near=Q,x.far=P.far=w.far=ot,(R!==x.near||O!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,O=x.far),w.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,x.layers.mask=w.layers.mask|P.layers.mask;const st=j.parent,At=x.cameras;J(x,st);for(let bt=0;bt<At.length;bt++)J(At[bt],st);At.length===2?B(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),it(j,x,st)};function it(j,Q,ot){ot===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ot.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Wi*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(x)};let ut=null;function Tt(j,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let st=!1;ot.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let bt=0;bt<ot.length;bt++){const tt=ot[bt];let ft=null;if(f!==null)ft=f.getViewport(tt);else{const Gt=d.getViewSubImage(u,tt);ft=Gt.viewport,bt===0&&(t.setRenderTargetTextures(y,Gt.colorTexture,u.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(y))}let St=M[bt];St===void 0&&(St=new Oe,St.layers.enable(bt),St.viewport=new ce,M[bt]=St),St.matrix.fromArray(tt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(tt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(ft.x,ft.y,ft.width,ft.height),bt===0&&(x.matrix.copy(St.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(St)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const bt=d.getDepthInformation(ot[0]);bt&&bt.isValid&&bt.texture&&A.init(t,bt,i.renderState)}}for(let ot=0;ot<v.length;ot++){const st=_[ot],At=v[ot];st!==null&&At!==void 0&&At.update(st,Q,c||o)}ut&&ut(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ht=new Sc;Ht.setAnimationLoop(Tt),this.setAnimationLoop=function(j){ut=j},this.dispose=function(){}}}const On=new Ke,dg=new Ut;function ug(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,yc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),A(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===be&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===be&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,_=y.envMapRotation;v&&(p.envMap.value=v,On.copy(_),On.x*=-1,On.y*=-1,On.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),p.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(On)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===be&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function A(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fg(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",p));const T=v.program;n.updateUBOMapping(y,T);const b=t.render.frame;r[y.id]!==b&&(u(y),r[y.id]=b)}function h(y){const v=d();y.__bindingPointIndex=v;const _=s.createBuffer(),T=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const v=i[y.id],_=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,w=_.length;b<w;b++){const P=Array.isArray(_[b])?_[b]:[_[b]];for(let M=0,x=P.length;M<x;M++){const R=P[M];if(f(R,b,M,T)===!0){const O=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let k=0;k<N.length;k++){const H=N[k],z=A(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,O+G,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,_,T){const b=y.value,w=v+"_"+_;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:T[w]=b.clone(),!0;{const P=T[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return T[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(y){const v=y.uniforms;let _=0;const T=16;for(let w=0,P=v.length;w<P;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,R=M.length;x<R;x++){const O=M[x],N=Array.isArray(O.value)?O.value:[O.value];for(let G=0,k=N.length;G<k;G++){const H=N[G],z=A(H),B=_%T,J=B%z.boundary,it=B+J;_+=J,it!==0&&T-it<z.storage&&(_+=T-it),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=z.storage}}}const b=_%T;return b>0&&(_+=T-b),y.__size=_,y.__cache={},this}function A(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class pg{constructor(t={}){const{canvas:e=ed(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),A=new Int32Array(4);let p=null,m=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=Rn,this.toneMappingExposure=1;const _=this;let T=!1,b=0,w=0,P=null,M=-1,x=null;const R=new ce,O=new ce;let N=null;const G=new Pt(0);let k=0,H=e.width,z=e.height,B=1,J=null,it=null;const ut=new ce(0,0,H,z),Tt=new ce(0,0,H,z);let Ht=!1;const j=new Bo;let Q=!1,ot=!1;const st=new Ut,At=new Ut,bt=new I,tt=new ce,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function Gt(){return P===null?B:1}let D=n;function ie(S,L){return e.getContext(S,L)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xs}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){const L="webgl2";if(D=ie(L,S),D===null)throw ie(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ct,It,Et,se,wt,C,E,V,$,Z,q,yt,lt,pt,Xt,et,mt,Rt,Dt,gt,Wt,kt,ee,F;function at(){Ct=new xp(D),Ct.init(),kt=new sg(D,Ct),It=new fp(D,Ct,t,kt),Et=new eg(D,Ct),It.reverseDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),se=new Mp(D),wt=new zm,C=new ig(D,Ct,Et,wt,It,kt,se),E=new mp(_),V=new _p(_),$=new Cd(D),ee=new dp(D,$),Z=new vp(D,$,se,ee),q=new Sp(D,Z,$,se),Dt=new Ep(D,It,C),et=new pp(wt),yt=new km(_,E,V,Ct,It,ee,et),lt=new ug(_,wt),pt=new Hm,Xt=new qm(Ct),Rt=new hp(_,E,V,Et,q,f,l),mt=new Jm(_,q,It),F=new fg(D,se,It,Et),gt=new up(D,Ct,se),Wt=new yp(D,Ct,se),se.programs=yt.programs,_.capabilities=It,_.extensions=Ct,_.properties=wt,_.renderLists=pt,_.shadowMap=mt,_.state=Et,_.info=se}at();const Y=new hg(_,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Ct.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ct.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(H,z,!1))},this.getSize=function(S){return S.set(H,z)},this.setSize=function(S,L,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,z=L,e.width=Math.floor(S*B),e.height=Math.floor(L*B),W===!0&&(e.style.width=S+"px",e.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(H*B,z*B).floor()},this.setDrawingBufferSize=function(S,L,W){H=S,z=L,B=W,e.width=Math.floor(S*W),e.height=Math.floor(L*W),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(ut)},this.setViewport=function(S,L,W,X){S.isVector4?ut.set(S.x,S.y,S.z,S.w):ut.set(S,L,W,X),Et.viewport(R.copy(ut).multiplyScalar(B).round())},this.getScissor=function(S){return S.copy(Tt)},this.setScissor=function(S,L,W,X){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,L,W,X),Et.scissor(O.copy(Tt).multiplyScalar(B).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(S){Et.setScissorTest(Ht=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(S=!0,L=!0,W=!0){let X=0;if(S){let U=!1;if(P!==null){const nt=P.texture.format;U=nt===Do||nt===Po||nt===Io}if(U){const nt=P.texture.type,ht=nt===An||nt===Hn||nt===Gi||nt===vi||nt===Co||nt===Ro,_t=Rt.getClearColor(),xt=Rt.getClearAlpha(),Ft=_t.r,Bt=_t.g,vt=_t.b;ht?(g[0]=Ft,g[1]=Bt,g[2]=vt,g[3]=xt,D.clearBufferuiv(D.COLOR,0,g)):(A[0]=Ft,A[1]=Bt,A[2]=vt,A[3]=xt,D.clearBufferiv(D.COLOR,0,A))}else X|=D.COLOR_BUFFER_BIT}L&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),pt.dispose(),Xt.dispose(),wt.dispose(),E.dispose(),V.dispose(),q.dispose(),ee.dispose(),F.dispose(),yt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Go),Y.removeEventListener("sessionend",Wo),Dn.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=se.autoReset,L=mt.enabled,W=mt.autoUpdate,X=mt.needsUpdate,U=mt.type;at(),se.autoReset=S,mt.enabled=L,mt.autoUpdate=W,mt.needsUpdate=X,mt.type=U}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Nt(S){const L=S.target;L.removeEventListener("dispose",Nt),le(L)}function le(S){ve(S),wt.remove(S)}function ve(S){const L=wt.get(S).programs;L!==void 0&&(L.forEach(function(W){yt.releaseProgram(W)}),S.isShaderMaterial&&yt.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,W,X,U,nt){L===null&&(L=ft);const ht=U.isMesh&&U.matrixWorld.determinant()<0,_t=kc(S,L,W,X,U);Et.setMaterial(X,ht);let xt=W.index,Ft=1;if(X.wireframe===!0){if(xt=Z.getWireframeAttribute(W),xt===void 0)return;Ft=2}const Bt=W.drawRange,vt=W.attributes.position;let jt=Bt.start*Ft,ne=(Bt.start+Bt.count)*Ft;nt!==null&&(jt=Math.max(jt,nt.start*Ft),ne=Math.min(ne,(nt.start+nt.count)*Ft)),xt!==null?(jt=Math.max(jt,0),ne=Math.min(ne,xt.count)):vt!=null&&(jt=Math.max(jt,0),ne=Math.min(ne,vt.count));const re=ne-jt;if(re<0||re===1/0)return;ee.setup(U,X,_t,W,xt);let Re,Kt=gt;if(xt!==null&&(Re=$.get(xt),Kt=Wt,Kt.setIndex(Re)),U.isMesh)X.wireframe===!0?(Et.setLineWidth(X.wireframeLinewidth*Gt()),Kt.setMode(D.LINES)):Kt.setMode(D.TRIANGLES);else if(U.isLine){let Mt=X.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*Gt()),U.isLineSegments?Kt.setMode(D.LINES):U.isLineLoop?Kt.setMode(D.LINE_LOOP):Kt.setMode(D.LINE_STRIP)}else U.isPoints?Kt.setMode(D.POINTS):U.isSprite&&Kt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Mt=U._multiDrawStarts,sn=U._multiDrawCounts,Zt=U._multiDrawCount,We=xt?$.get(xt).bytesPerElement:1,Yn=wt.get(X).currentProgram.getUniforms();for(let Pe=0;Pe<Zt;Pe++)Yn.setValue(D,"_gl_DrawID",Pe),Kt.render(Mt[Pe]/We,sn[Pe])}else if(U.isInstancedMesh)Kt.renderInstances(jt,re,U.count);else if(W.isInstancedBufferGeometry){const Mt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,sn=Math.min(W.instanceCount,Mt);Kt.renderInstances(jt,re,sn)}else Kt.render(jt,re)};function Qt(S,L,W){S.transparent===!0&&S.side===Je&&S.forceSinglePass===!1?(S.side=be,S.needsUpdate=!0,Qi(S,L,W),S.side=tn,S.needsUpdate=!0,Qi(S,L,W),S.side=Je):Qi(S,L,W)}this.compile=function(S,L,W=null){W===null&&(W=S),m=Xt.get(W),m.init(L),v.push(m),W.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),S!==W&&S.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const X=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){const _t=nt[ht];Qt(_t,W,U),X.add(_t)}else Qt(nt,W,U),X.add(nt)}),v.pop(),m=null,X},this.compileAsync=function(S,L,W=null){const X=this.compile(S,L,W);return new Promise(U=>{function nt(){if(X.forEach(function(ht){wt.get(ht).currentProgram.isReady()&&X.delete(ht)}),X.size===0){U(S);return}setTimeout(nt,10)}Ct.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ge=null;function nn(S){Ge&&Ge(S)}function Go(){Dn.stop()}function Wo(){Dn.start()}const Dn=new Sc;Dn.setAnimationLoop(nn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(S){Ge=S,Y.setAnimationLoop(S),S===null?Dn.stop():Dn.start()},Y.addEventListener("sessionstart",Go),Y.addEventListener("sessionend",Wo),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(L),L=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,L,P),m=Xt.get(S,v.length),m.init(L),v.push(m),At.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),j.setFromProjectionMatrix(At),ot=this.localClippingEnabled,Q=et.init(this.clippingPlanes,ot),p=pt.get(S,y.length),p.init(),y.push(p),Y.enabled===!0&&Y.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&Qs(nt,L,-1/0,_.sortObjects)}Qs(S,L,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(J,it),St=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,St&&Rt.addToRenderList(p,S),this.info.render.frame++,Q===!0&&et.beginShadows();const W=m.state.shadowsArray;mt.render(W,S,L),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=p.opaque,U=p.transmissive;if(m.setupLights(),L.isArrayCamera){const nt=L.cameras;if(U.length>0)for(let ht=0,_t=nt.length;ht<_t;ht++){const xt=nt[ht];Yo(X,U,S,xt)}St&&Rt.render(S);for(let ht=0,_t=nt.length;ht<_t;ht++){const xt=nt[ht];Xo(p,S,xt,xt.viewport)}}else U.length>0&&Yo(X,U,S,L),St&&Rt.render(S),Xo(p,S,L);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(_,S,L),ee.resetDefaultState(),M=-1,x=null,v.pop(),v.length>0?(m=v[v.length-1],Q===!0&&et.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Qs(S,L,W,X){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){X&&tt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const ht=q.update(S),_t=S.material;_t.visible&&p.push(S,ht,_t,W,tt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){const ht=q.update(S),_t=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),tt.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),tt.copy(ht.boundingSphere.center)),tt.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(_t)){const xt=ht.groups;for(let Ft=0,Bt=xt.length;Ft<Bt;Ft++){const vt=xt[Ft],jt=_t[vt.materialIndex];jt&&jt.visible&&p.push(S,ht,jt,W,tt.z,vt)}}else _t.visible&&p.push(S,ht,_t,W,tt.z,null)}}const nt=S.children;for(let ht=0,_t=nt.length;ht<_t;ht++)Qs(nt[ht],L,W,X)}function Xo(S,L,W,X){const U=S.opaque,nt=S.transmissive,ht=S.transparent;m.setupLightsView(W),Q===!0&&et.setGlobalState(_.clippingPlanes,W),X&&Et.viewport(R.copy(X)),U.length>0&&Zi(U,L,W),nt.length>0&&Zi(nt,L,W),ht.length>0&&Zi(ht,L,W),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Yo(S,L,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Gn(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?qi:An,minFilter:fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const nt=m.state.transmissionRenderTarget[X.id],ht=X.viewport||R;nt.setSize(ht.z,ht.w);const _t=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(G),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),St&&Rt.render(W);const xt=_.toneMapping;_.toneMapping=Rn;const Ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Q===!0&&et.setGlobalState(_.clippingPlanes,X),Zi(S,W,X),C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let vt=0,jt=L.length;vt<jt;vt++){const ne=L[vt],re=ne.object,Re=ne.geometry,Kt=ne.material,Mt=ne.group;if(Kt.side===Je&&re.layers.test(X.layers)){const sn=Kt.side;Kt.side=be,Kt.needsUpdate=!0,jo(re,W,X,Re,Kt,Mt),Kt.side=sn,Kt.needsUpdate=!0,Bt=!0}}Bt===!0&&(C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt))}_.setRenderTarget(_t),_.setClearColor(G,k),Ft!==void 0&&(X.viewport=Ft),_.toneMapping=xt}function Zi(S,L,W){const X=L.isScene===!0?L.overrideMaterial:null;for(let U=0,nt=S.length;U<nt;U++){const ht=S[U],_t=ht.object,xt=ht.geometry,Ft=X===null?ht.material:X,Bt=ht.group;_t.layers.test(W.layers)&&jo(_t,L,W,xt,Ft,Bt)}}function jo(S,L,W,X,U,nt){S.onBeforeRender(_,L,W,X,U,nt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(_,L,W,X,S,nt),U.transparent===!0&&U.side===Je&&U.forceSinglePass===!1?(U.side=be,U.needsUpdate=!0,_.renderBufferDirect(W,L,X,U,S,nt),U.side=tn,U.needsUpdate=!0,_.renderBufferDirect(W,L,X,U,S,nt),U.side=Je):_.renderBufferDirect(W,L,X,U,S,nt),S.onAfterRender(_,L,W,X,U,nt)}function Qi(S,L,W){L.isScene!==!0&&(L=ft);const X=wt.get(S),U=m.state.lights,nt=m.state.shadowsArray,ht=U.state.version,_t=yt.getParameters(S,U.state,nt,L,W),xt=yt.getProgramCacheKey(_t);let Ft=X.programs;X.environment=S.isMeshStandardMaterial?L.environment:null,X.fog=L.fog,X.envMap=(S.isMeshStandardMaterial?V:E).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Ft===void 0&&(S.addEventListener("dispose",Nt),Ft=new Map,X.programs=Ft);let Bt=Ft.get(xt);if(Bt!==void 0){if(X.currentProgram===Bt&&X.lightsStateVersion===ht)return $o(S,_t),Bt}else _t.uniforms=yt.getUniforms(S),S.onBeforeCompile(_t,_),Bt=yt.acquireProgram(_t,xt),Ft.set(xt,Bt),X.uniforms=_t.uniforms;const vt=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(vt.clippingPlanes=et.uniform),$o(S,_t),X.needsLights=Vc(S),X.lightsStateVersion=ht,X.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=Bt,X.uniformsList=null,Bt}function qo(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Us.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function $o(S,L){const W=wt.get(S);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function kc(S,L,W,X,U){L.isScene!==!0&&(L=ft),C.resetTextureUnits();const nt=L.fog,ht=X.isMeshStandardMaterial?L.environment:null,_t=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ei,xt=(X.isMeshStandardMaterial?V:E).get(X.envMap||ht),Ft=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),vt=!!W.morphAttributes.position,jt=!!W.morphAttributes.normal,ne=!!W.morphAttributes.color;let re=Rn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(re=_.toneMapping);const Re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=Re!==void 0?Re.length:0,Mt=wt.get(X),sn=m.state.lights;if(Q===!0&&(ot===!0||S!==x)){const Ue=S===x&&X.id===M;et.setState(X,S,Ue)}let Zt=!1;X.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==sn.state.version||Mt.outputColorSpace!==_t||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==xt||X.fog===!0&&Mt.fog!==nt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==et.numPlanes||Mt.numIntersection!==et.numIntersection)||Mt.vertexAlphas!==Ft||Mt.vertexTangents!==Bt||Mt.morphTargets!==vt||Mt.morphNormals!==jt||Mt.morphColors!==ne||Mt.toneMapping!==re||Mt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,Mt.__version=X.version);let We=Mt.currentProgram;Zt===!0&&(We=Qi(X,L,U));let Yn=!1,Pe=!1,Ti=!1;const oe=We.getUniforms(),Ze=Mt.uniforms;if(Et.useProgram(We.program)&&(Yn=!0,Pe=!0,Ti=!0),X.id!==M&&(M=X.id,Pe=!0),Yn||x!==S){Et.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),id(st),sd(st),oe.setValue(D,"projectionMatrix",st)):oe.setValue(D,"projectionMatrix",S.projectionMatrix),oe.setValue(D,"viewMatrix",S.matrixWorldInverse);const _n=oe.map.cameraPosition;_n!==void 0&&_n.setValue(D,bt.setFromMatrixPosition(S.matrixWorld)),It.logarithmicDepthBuffer&&oe.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&oe.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Pe=!0,Ti=!0)}if(U.isSkinnedMesh){oe.setOptional(D,U,"bindMatrix"),oe.setOptional(D,U,"bindMatrixInverse");const Ue=U.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),oe.setValue(D,"boneTexture",Ue.boneTexture,C))}U.isBatchedMesh&&(oe.setOptional(D,U,"batchingTexture"),oe.setValue(D,"batchingTexture",U._matricesTexture,C),oe.setOptional(D,U,"batchingIdTexture"),oe.setValue(D,"batchingIdTexture",U._indirectTexture,C),oe.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(D,"batchingColorTexture",U._colorsTexture,C));const Ci=W.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&Dt.update(U,W,We),(Pe||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,oe.setValue(D,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ze.envMap.value=xt,Ze.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&L.environment!==null&&(Ze.envMapIntensity.value=L.environmentIntensity),Pe&&(oe.setValue(D,"toneMappingExposure",_.toneMappingExposure),Mt.needsLights&&zc(Ze,Ti),nt&&X.fog===!0&&lt.refreshFogUniforms(Ze,nt),lt.refreshMaterialUniforms(Ze,X,B,z,m.state.transmissionRenderTarget[S.id]),Us.upload(D,qo(Mt),Ze,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Us.upload(D,qo(Mt),Ze,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&oe.setValue(D,"center",U.center),oe.setValue(D,"modelViewMatrix",U.modelViewMatrix),oe.setValue(D,"normalMatrix",U.normalMatrix),oe.setValue(D,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ue=X.uniformsGroups;for(let _n=0,xn=Ue.length;_n<xn;_n++){const Ko=Ue[_n];F.update(Ko,We),F.bind(Ko,We)}}return We}function zc(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Vc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,L,W){wt.get(S.texture).__webglTexture=L,wt.get(S.depthTexture).__webglTexture=W;const X=wt.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const W=wt.get(S);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,W=0){P=S,b=L,w=W;let X=!0,U=null,nt=!1,ht=!1;if(S){const xt=wt.get(S);if(xt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(xt.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(xt.__hasExternalTextures)C.rebindTextures(S,wt.get(S.texture).__webglTexture,wt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const vt=S.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&wt.has(vt)&&(S.width!==vt.image.width||S.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ht=!0);const Bt=wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[L])?U=Bt[L][W]:U=Bt[L],nt=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?U=wt.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?U=Bt[W]:U=Bt,R.copy(S.viewport),O.copy(S.scissor),N=S.scissorTest}else R.copy(ut).multiplyScalar(B).floor(),O.copy(Tt).multiplyScalar(B).floor(),N=Ht;if(Et.bindFramebuffer(D.FRAMEBUFFER,U)&&X&&Et.drawBuffers(S,U),Et.viewport(R),Et.scissor(O),Et.setScissorTest(N),nt){const xt=wt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,W)}else if(ht){const xt=wt.get(S.texture),Ft=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,W||0,Ft)}M=-1},this.readRenderTargetPixels=function(S,L,W,X,U,nt,ht){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){Et.bindFramebuffer(D.FRAMEBUFFER,_t);try{const xt=S.texture,Ft=xt.format,Bt=xt.type;if(!It.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-X&&W>=0&&W<=S.height-U&&D.readPixels(L,W,X,U,kt.convert(Ft),kt.convert(Bt),nt)}finally{const xt=P!==null?wt.get(P).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(S,L,W,X,U,nt,ht){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(_t=_t[ht]),_t){const xt=S.texture,Ft=xt.format,Bt=xt.type;if(!It.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-X&&W>=0&&W<=S.height-U){Et.bindFramebuffer(D.FRAMEBUFFER,_t);const vt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(L,W,X,U,kt.convert(Ft),kt.convert(Bt),0);const jt=P!==null?wt.get(P).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,jt);const ne=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await nd(D,ne,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,vt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(vt),D.deleteSync(ne),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,W=0){S.isTexture!==!0&&(Ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const X=Math.pow(2,-W),U=Math.floor(S.image.width*X),nt=Math.floor(S.image.height*X),ht=L!==null?L.x:0,_t=L!==null?L.y:0;C.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ht,_t,U,nt),Et.unbindTexture()},this.copyTextureToTexture=function(S,L,W=null,X=null,U=0){S.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],L=arguments[2],U=arguments[3]||0,W=null);let nt,ht,_t,xt,Ft,Bt,vt,jt,ne;const re=S.isCompressedTexture?S.mipmaps[U]:S.image;W!==null?(nt=W.max.x-W.min.x,ht=W.max.y-W.min.y,_t=W.isBox3?W.max.z-W.min.z:1,xt=W.min.x,Ft=W.min.y,Bt=W.isBox3?W.min.z:0):(nt=re.width,ht=re.height,_t=re.depth||1,xt=0,Ft=0,Bt=0),X!==null?(vt=X.x,jt=X.y,ne=X.z):(vt=0,jt=0,ne=0);const Re=kt.convert(L.format),Kt=kt.convert(L.type);let Mt;L.isData3DTexture?(C.setTexture3D(L,0),Mt=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(C.setTexture2DArray(L,0),Mt=D.TEXTURE_2D_ARRAY):(C.setTexture2D(L,0),Mt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const sn=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),We=D.getParameter(D.UNPACK_SKIP_PIXELS),Yn=D.getParameter(D.UNPACK_SKIP_ROWS),Pe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ft),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt);const Ti=S.isDataArrayTexture||S.isData3DTexture,oe=L.isDataArrayTexture||L.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Ze=wt.get(S),Ci=wt.get(L),Ue=wt.get(Ze.__renderTarget),_n=wt.get(Ci.__renderTarget);Et.bindFramebuffer(D.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let xn=0;xn<_t;xn++)Ti&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(S).__webglTexture,U,Bt+xn),S.isDepthTexture?(oe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(L).__webglTexture,U,ne+xn),D.blitFramebuffer(xt,Ft,nt,ht,vt,jt,nt,ht,D.DEPTH_BUFFER_BIT,D.NEAREST)):oe?D.copyTexSubImage3D(Mt,U,vt,jt,ne+xn,xt,Ft,nt,ht):D.copyTexSubImage2D(Mt,U,vt,jt,ne+xn,xt,Ft,nt,ht);Et.bindFramebuffer(D.READ_FRAMEBUFFER,null),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else oe?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Mt,U,vt,jt,ne,nt,ht,_t,Re,Kt,re.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Mt,U,vt,jt,ne,nt,ht,_t,Re,re.data):D.texSubImage3D(Mt,U,vt,jt,ne,nt,ht,_t,Re,Kt,re):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,vt,jt,nt,ht,Re,Kt,re.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,vt,jt,re.width,re.height,Re,re.data):D.texSubImage2D(D.TEXTURE_2D,U,vt,jt,nt,ht,Re,Kt,re);D.pixelStorei(D.UNPACK_ROW_LENGTH,sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe),U===0&&L.generateMipmaps&&D.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(S,L,W=null,X=null,U=0){return S.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,S=arguments[2],L=arguments[3],U=arguments[4]||0),Ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,L,W,X,U)},this.initRenderTarget=function(S){wt.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Et.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,Et.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class yo extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gi extends en{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vs=new I,Hs=new I,Ka=new Ut,Fi=new Ki,xs=new $i,wr=new I,Za=new I;class mg extends Ae{constructor(t=new de,e=new gi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Vs.fromBufferAttribute(e,i-1),Hs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Vs.distanceTo(Hs);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=r,t.ray.intersectsSphere(xs)===!1)return;Ka.copy(i).invert(),Fi.copy(t.ray).applyMatrix4(Ka);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let A=f,p=g-1;A<p;A+=c){const m=h.getX(A),y=h.getX(A+1),v=vs(this,t,Fi,l,m,y);v&&e.push(v)}if(this.isLineLoop){const A=h.getX(g-1),p=h.getX(f),m=vs(this,t,Fi,l,A,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let A=f,p=g-1;A<p;A+=c){const m=vs(this,t,Fi,l,A,A+1);m&&e.push(m)}if(this.isLineLoop){const A=vs(this,t,Fi,l,g-1,f);A&&e.push(A)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vs(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Vs.fromBufferAttribute(o,i),Hs.fromBufferAttribute(o,r),e.distanceSqToSegment(Vs,Hs,wr,Za)>n)return;wr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(wr);if(!(l<t.near||l>t.far))return{distance:l,point:Za.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Qa=new I,Ja=new I;class Gs extends mg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Qa.fromBufferAttribute(e,i),Ja.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qa.distanceTo(Ja);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bi extends en{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tl=new Ut,Mo=new Ki,ys=new $i,Ms=new I;class Tr extends Ae{constructor(t=new de,e=new Bi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(i),ys.radius+=r,t.ray.intersectsSphere(ys)===!1)return;tl.copy(i).invert(),Mo.copy(t.ray).applyMatrix4(tl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,A=f;g<A;g++){const p=c.getX(g);Ms.fromBufferAttribute(d,p),el(Ms,p,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,A=f;g<A;g++)Ms.fromBufferAttribute(d,g),el(Ms,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function el(s,t,e,n,i,r,o){const a=Mo.distanceSqToPoint(s);if(a<e){const l=new I;Mo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Cr extends we{constructor(t,e,n,i,r,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class gg extends we{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ag={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Pc(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=Mg(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)d=s[g],u=s[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Xi(r,o,e,a,l,f,0),o}};function Pc(s,t,e,n,i){let r,o;if(i===Fg(s,t,e,n)>0)for(r=t;r<e;r+=n)o=nl(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=nl(r,s[r],s[r+1],o);return o&&Ks(o,o.next)&&(ji(o),o=o.next),o}function Wn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ks(e,e.next)||ae(e.prev,e,e.next)===0)){if(ji(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xi(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Tg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?xg(s,n,i,r):_g(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),ji(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=vg(Wn(s),t,e),Xi(s,t,e,n,i,r,2)):o===2&&yg(s,t,e,n,i,r):Xi(Wn(s),t,e,n,i,r,1);break}}}function _g(s){const t=s.prev,e=s,n=s.next;if(ae(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&di(i,a,r,l,o,c,g.x,g.y)&&ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xg(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ae(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,A=a>l?a>c?a:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,m=Eo(f,g,t,e,n),y=Eo(A,p,t,e,n);let v=s.prevZ,_=s.nextZ;for(;v&&v.z>=m&&_&&_.z<=y;){if(v.x>=f&&v.x<=A&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&di(a,h,l,d,c,u,v.x,v.y)&&ae(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=A&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&di(a,h,l,d,c,u,_.x,_.y)&&ae(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=f&&v.x<=A&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&di(a,h,l,d,c,u,v.x,v.y)&&ae(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=A&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&di(a,h,l,d,c,u,_.x,_.y)&&ae(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function vg(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ks(i,r)&&Dc(i,n,n.next,r)&&Yi(i,r)&&Yi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ji(n),ji(n.next),n=s=r),n=n.next}while(n!==s);return Wn(n)}function yg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ig(o,a)){let l=Fc(o,a);o=Wn(o,o.next),l=Wn(l,l.next),Xi(o,t,e,n,i,r,0),Xi(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Mg(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Pc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Rg(c));for(i.sort(Eg),r=0;r<i.length;r++)e=Sg(i[r],e);return e}function Eg(s,t){return s.x-t.x}function Sg(s,t){const e=bg(s,t);if(!e)return t;const n=Fc(e,s);return Wn(n,n.next),Wn(e,e.next)}function bg(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&di(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Yi(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&wg(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function wg(s,t){return ae(s.prev,s,t.prev)<0&&ae(t.next,s,s.next)<0}function Tg(s,t,e,n){let i=s;do i.z===0&&(i.z=Eo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cg(i)}function Cg(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Eo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Rg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function di(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ig(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Pg(s,t)&&(Yi(s,t)&&Yi(t,s)&&Dg(s,t)&&(ae(s.prev,s,t.prev)||ae(s,t.prev,t))||Ks(s,t)&&ae(s.prev,s,s.next)>0&&ae(t.prev,t,t.next)>0)}function ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ks(s,t){return s.x===t.x&&s.y===t.y}function Dc(s,t,e,n){const i=Ss(ae(s,t,e)),r=Ss(ae(s,t,n)),o=Ss(ae(e,n,s)),a=Ss(ae(e,n,t));return!!(i!==r&&o!==a||i===0&&Es(s,e,t)||r===0&&Es(s,n,t)||o===0&&Es(e,s,n)||a===0&&Es(e,t,n))}function Es(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ss(s){return s>0?1:s<0?-1:0}function Pg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Dc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Yi(s,t){return ae(s.prev,s,s.next)<0?ae(s,t,s.next)>=0&&ae(s,s.prev,t)>=0:ae(s,t,s.prev)<0||ae(s,s.next,t)<0}function Dg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Fc(s,t){const e=new So(s.i,s.x,s.y),n=new So(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nl(s,t,e,n){const i=new So(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ji(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function So(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ko{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ko.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];il(t),sl(n,t);let o=t.length;e.forEach(il);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,sl(n,e[l]);const a=Ag.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function il(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function sl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class bs extends en{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lg extends en{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const rl={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ug{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ng=new Ug;class Zs{constructor(t){this.manager=t!==void 0?t:Ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const hn={};class Bg extends Error{constructor(t,e){super(t),this.response=e}}class Lc extends Zs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=rl.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(hn[t]!==void 0){hn[t].push({onLoad:e,onProgress:n,onError:i});return}hn[t]=[],hn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hn[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let A=0;const p=new ReadableStream({start(m){y();function y(){d.read().then(({done:v,value:_})=>{if(v)m.close();else{A+=_.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:A,total:f});for(let b=0,w=h.length;b<w;b++){const P=h[b];P.onProgress&&P.onProgress(T)}m.enqueue(_),y()}},v=>{m.error(v)})}}});return new Response(p)}else throw new Bg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{rl.add(t,c);const h=hn[t];delete hn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=hn[t];if(h===void 0)throw this.manager.itemError(t),c;delete hn[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Uc extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Rr=new Ut,ol=new I,al=new I;class Og{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(al),e.updateMatrixWorld(),Rr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kg extends Og{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ll extends Uc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new kg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zg extends Uc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const zo="\\[\\]\\.:\\/",Vg=new RegExp("["+zo+"]","g"),Vo="[^"+zo+"]",Hg="[^"+zo.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",Vo),Wg=/(WCOD+)?/.source.replace("WCOD",Hg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),Yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),jg=new RegExp("^"+Gg+Wg+Xg+Yg+"$"),qg=["material","materials","bones","map"];class $g{constructor(t,e,n){const i=n||qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class qt{constructor(t,e,n){this.path=e,this.parsedPath=n||qt.parseTrackName(e),this.node=qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new qt.Composite(t,e,n):new qt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){const e=jg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qt.Composite=$g;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const cl=new Ut;class Kg{constructor(t,e,n=0,i=1/0){this.ray=new Ki(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cl),this}intersectObject(t,e=!0,n=[]){return bo(t,this,n,e),n.sort(hl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)bo(t[i],this,n,e);return n.sort(hl),n}}function hl(s,t){return s.distance-t.distance}function bo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)bo(r[o],t,e,!0)}}class dl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zg extends Xn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xs);class Hi{constructor(t){this.fold=t,this.rootFaceIndex=0,this.spanningTree=[],this.faceAdjacency=[],this.buildGraph(),this.fold.raw&&this.fold.raw._assembly&&typeof this.fold.raw._assembly.rootFaceIndex=="number"?this.rootFaceIndex=this.fold.raw._assembly.rootFaceIndex:this.selectDefaultRoot(),this.buildSpanningTree()}buildGraph(){const t=this.fold.facesVertices.length;this.faceAdjacency=Array.from({length:t},()=>[]);const e=new Map;this.fold.facesVertices.forEach((n,i)=>{const r=n.length;for(let o=0;o<r;o++){const a=n[o],l=n[(o+1)%r],c=`${Math.min(a,l)}-${Math.max(a,l)}`;e.has(c)||e.set(c,[]),e.get(c).push({faceIndex:i,v1:a,v2:l})}}),e.forEach((n,i)=>{if(n.length===2){const r=n[0],o=n[1],a=this.fold.edgeLookup.get(i),l=(this.fold.edgesAssignment[a]||"B").toUpperCase();if(l==="C"||l==="B")return;this.faceAdjacency[r.faceIndex].push({neighborFace:o.faceIndex,edgeIndex:a,parentEdge:[r.v1,r.v2],childEdge:[o.v1,o.v2]}),this.faceAdjacency[o.faceIndex].push({neighborFace:r.faceIndex,edgeIndex:a,parentEdge:[o.v1,o.v2],childEdge:[r.v1,r.v2]})}})}selectDefaultRoot(){let t=-1,e=0;this.faceAdjacency.forEach((n,i)=>{n.length>t&&(t=n.length,e=i)}),this.rootFaceIndex=e}setRootFace(t){t>=0&&t<this.fold.facesVertices.length&&(this.rootFaceIndex=t,this.buildSpanningTree())}buildSpanningTree(){const t=this.fold.facesVertices.length,e=new Array(t).fill(!1);this.spanningTree=[];const n=[this.rootFaceIndex];for(e[this.rootFaceIndex]=!0;n.length>0;){const i=n.shift(),r=this.faceAdjacency[i]||[];for(const o of r){const a=o.neighborFace;if(!e[a]){e[a]=!0;const l=o.edgeIndex,h=(this.fold.edgesFoldAngle[l]||0)*Math.PI/180,d=o.parentEdge[0],u=o.parentEdge[1];this.spanningTree.push({parentFace:i,childFace:a,edgeIndex:l,v1Idx:d,v2Idx:u,foldAngleRad:h}),n.push(a)}}}}evaluateTransforms(t){const e=this.fold.facesVertices.length,n=Array.from({length:e},()=>new Ut);n[this.rootFaceIndex].identity();const i=this.fold.vertices;for(const r of this.spanningTree){const o=n[r.parentFace],a=t*r.foldAngleRad,l=new I(...i[r.v1Idx]),c=new I(...i[r.v2Idx]),h=new I().subVectors(c,l).normalize(),d=new Ut().makeTranslation(-l.x,-l.y,-l.z),u=new Ut().makeRotationAxis(h,a),f=new Ut().makeTranslation(l.x,l.y,l.z),g=new Ut().multiply(f).multiply(u).multiply(d),A=new Ut().multiplyMatrices(o,g);n[r.childFace]=A}return n}}const ul={type:"change"},Ho={type:"start"},Nc={type:"end"},ws=new Ki,fl=new wn,Qg=Math.cos(70*ks.DEG2RAD),ue=new I,Ie=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ir=1e-6;class Jg extends Zg{constructor(t,e=null){super(t,e),this.state=te.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new He,this._lastTargetPosition=new I,this._quat=new He().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dl,this._sphericalDelta=new dl,this._scale=1,this._panOffset=new I,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new I,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=e0.bind(this),this._onPointerDown=t0.bind(this),this._onPointerUp=n0.bind(this),this._onContextMenu=c0.bind(this),this._onMouseWheel=r0.bind(this),this._onKeyDown=o0.bind(this),this._onTouchStart=a0.bind(this),this._onTouchMove=l0.bind(this),this._onMouseDown=i0.bind(this),this._onMouseMove=s0.bind(this),this._interceptControlDown=h0.bind(this),this._interceptControlUp=d0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ul),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;ue.copy(e).sub(this.target),ue.applyQuaternion(this._quat),this._spherical.setFromVector3(ue),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ie:n>Math.PI&&(n-=Ie),i<-Math.PI?i+=Ie:i>Math.PI&&(i-=Ie),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ue.setFromSpherical(this._spherical),ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ue.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ws.origin.copy(this.object.position),ws.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ws.direction))<Qg?this.object.lookAt(this.target):(fl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ws.intersectPlane(fl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ir||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ir||this._lastTargetPosition.distanceToSquared(this.target)>Ir?(this.dispatchEvent(ul),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ie/60*this.autoRotateSpeed*t:Ie/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ue.setFromMatrixColumn(e,0),ue.multiplyScalar(-t),this._panOffset.add(ue)}_panUp(t,e){this.screenSpacePanning===!0?ue.setFromMatrixColumn(e,1):(ue.setFromMatrixColumn(e,0),ue.crossVectors(this.object.up,ue)),ue.multiplyScalar(t),this._panOffset.add(ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ue.copy(i).sub(this.target);let r=ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ie*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ie*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ie*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ie*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ie*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function t0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function e0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function n0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nc),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function i0(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=te.DOLLY;break;case ui.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=te.ROTATE}break;case ui.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Ho)}function s0(s){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function r0(s){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(s.preventDefault(),this.dispatchEvent(Ho),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Nc))}function o0(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function a0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=te.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=te.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(Ho)}function l0(s){switch(this._trackPointer(s),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=te.NONE}}function c0(s){this.enabled!==!1&&s.preventDefault()}function h0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function d0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pl={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Ws{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(t){return new y0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new w0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new C0(t)}),this.register(function(t){return new R0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new I0(t)}),this.register(function(t){return new P0(t)}),this.register(function(t){return new D0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new L0(t)})}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}setTextureUtils(t){return this.textureUtils=t,this}parse(t,e,n,i){const r=new v0,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.setTextureUtils(this.textureUtils),r.writeAsync(t,e,i).catch(n)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,i,r,e)})}}const Vt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Pr="KHR_mesh_quantization",Le={};Le[Ve]=Vt.NEAREST;Le[ic]=Vt.NEAREST_MIPMAP_NEAREST;Le[Li]=Vt.NEAREST_MIPMAP_LINEAR;Le[ke]=Vt.LINEAR;Le[Rs]=Vt.LINEAR_MIPMAP_NEAREST;Le[fn]=Vt.LINEAR_MIPMAP_LINEAR;Le[Tn]=Vt.CLAMP_TO_EDGE;Le[Ns]=Vt.REPEAT;Le[Bs]=Vt.MIRRORED_REPEAT;const ml={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},u0=new Pt,gl=12,f0=1179937895,p0=2,Al=8,m0=1313821514,g0=5130562;function Oi(s,t){return s.length===t.length&&s.every(function(e,n){return e===t[n]})}function A0(s){return new TextEncoder().encode(s).buffer}function _0(s){return Oi(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function x0(s,t,e){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=t;i<t+e;i++)for(let r=0;r<s.itemSize;r++){let o;s.itemSize>4?o=s.array[i*s.itemSize+r]:(r===0?o=s.getX(i):r===1?o=s.getY(i):r===2?o=s.getZ(i):r===3&&(o=s.getW(i)),s.normalized===!0&&(o=ks.normalize(o,s.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function Bc(s){return Math.ceil(s/4)*4}function Dr(s,t=0){const e=Bc(s.byteLength);if(e!==s.byteLength){const n=new Uint8Array(e);if(n.set(new Uint8Array(s)),t!==0)for(let i=s.byteLength;i<e;i++)n[i]=t;return n.buffer}return s}function _l(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function xl(s,t){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,t));let e;return t==="image/jpeg"?e=.92:t==="image/webp"&&(e=.8),s.convertToBlob({type:t,quality:e})}class v0{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Xs}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(t){this.plugins=t}setTextureUtils(t){this.textureUtils=t}async writeAsync(t,e,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(t),await Promise.all(this.pending);const i=this,r=i.buffers,o=i.json;n=i.options;const a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),d=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),d.length>0&&(o.extensionsRequired=d),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const u=new FileReader;u.readAsArrayBuffer(c),u.onloadend=function(){const f=Dr(u.result),g=new DataView(new ArrayBuffer(Al));g.setUint32(0,f.byteLength,!0),g.setUint32(4,g0,!0);const A=Dr(A0(JSON.stringify(o)),32),p=new DataView(new ArrayBuffer(Al));p.setUint32(0,A.byteLength,!0),p.setUint32(4,m0,!0);const m=new ArrayBuffer(gl),y=new DataView(m);y.setUint32(0,f0,!0),y.setUint32(4,p0,!0);const v=gl+p.byteLength+A.byteLength+g.byteLength+f.byteLength;y.setUint32(8,v,!0);const _=new Blob([m,p,A,g,f],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(_),T.onloadend=function(){e(T.result)}}}else if(o.buffers&&o.buffers.length>0){const u=new FileReader;u.readAsDataURL(c),u.onloadend=function(){const f=u.result;o.buffers[0].uri=f,e(o)}}else e(o)}serializeUserData(t,e){if(Object.keys(t.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(t.userData));if(n.includeCustomExtensions&&r.gltfExtensions){e.extensions===void 0&&(e.extensions={});for(const o in r.gltfExtensions)e.extensions[o]=r.gltfExtensions[o],i[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(e.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+t.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(t,e=!1){if(this.uids.has(t)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(t,i)}return this.uids.get(t).get(e)}isNormalizedNormalAttribute(t){if(this.cache.attributesNormalized.has(t))return!1;const n=new I;for(let i=0,r=t.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(t,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(t){const e=this.cache;if(e.attributesNormalized.has(t))return e.attributesNormalized.get(t);const n=t.clone(),i=new I;for(let r=0,o=n.count;r<o;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return e.attributesNormalized.set(t,n),n}applyTextureTransform(t,e){let n=!1;const i={};(e.offset.x!==0||e.offset.y!==0)&&(i.offset=e.offset.toArray(),n=!0),e.rotation!==0&&(i.rotation=e.rotation,n=!0),(e.repeat.x!==1||e.repeat.y!==1)&&(i.scale=e.repeat.toArray(),n=!0),n&&(t.extensions=t.extensions||{},t.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(t,e){if(t===e)return t;function n(f){return f.colorSpace===Ee?function(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}:function(A){return A}}t instanceof Cr&&(t=await this.decompressTextureAsync(t)),e instanceof Cr&&(e=await this.decompressTextureAsync(e));const i=t?t.image:null,r=e?e.image:null,o=Math.max(i?i.width:0,r?r.width:0),a=Math.max(i?i.height:0,r?r.height:0),l=_l();l.width=o,l.height=a;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const h=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);const f=n(t),g=c.getImageData(0,0,o,a).data;for(let A=2;A<g.length;A+=4)h.data[A]=f(g[A]/256)*256}if(r){c.drawImage(r,0,0,o,a);const f=n(e),g=c.getImageData(0,0,o,a).data;for(let A=1;A<g.length;A+=4)h.data[A]=f(g[A]/256)*256}c.putImageData(h,0,0);const u=(t||e).clone();return u.source=new Uo(l),u.colorSpace=un,u.channel=(t||e).channel,t&&e&&t.channel!==e.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async decompressTextureAsync(t,e=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(t,e)}processBuffer(t){const e=this.json,n=this.buffers;return e.buffers||(e.buffers=[{byteLength:0}]),n.push(t),0}processBufferView(t,e,n,i,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(e){case Vt.BYTE:case Vt.UNSIGNED_BYTE:a=1;break;case Vt.SHORT:case Vt.UNSIGNED_SHORT:a=2;break;default:a=4}let l=t.itemSize*a;r===Vt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=Bc(i*l),h=new DataView(new ArrayBuffer(c));let d=0;for(let g=n;g<n+i;g++){for(let A=0;A<t.itemSize;A++){let p;t.itemSize>4?p=t.array[g*t.itemSize+A]:(A===0?p=t.getX(g):A===1?p=t.getY(g):A===2?p=t.getZ(g):A===3&&(p=t.getW(g)),t.normalized===!0&&(p=ks.normalize(p,t.array))),e===Vt.FLOAT?h.setFloat32(d,p,!0):e===Vt.INT?h.setInt32(d,p,!0):e===Vt.UNSIGNED_INT?h.setUint32(d,p,!0):e===Vt.SHORT?h.setInt16(d,p,!0):e===Vt.UNSIGNED_SHORT?h.setUint16(d,p,!0):e===Vt.BYTE?h.setInt8(d,p):e===Vt.UNSIGNED_BYTE&&h.setUint8(d,p),d+=a}d%l!==0&&(d+=l-d%l)}const u={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===Vt.ARRAY_BUFFER&&(u.byteStride=l),this.byteOffset+=c,o.bufferViews.push(u),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(t){const e=this,n=e.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(t),r.onloadend=function(){const o=Dr(r.result),a={buffer:e.processBuffer(o),byteOffset:e.byteOffset,byteLength:o.byteLength};e.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(t,e,n,i){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(t.array.constructor===Float32Array)a=Vt.FLOAT;else if(t.array.constructor===Int32Array)a=Vt.INT;else if(t.array.constructor===Uint32Array)a=Vt.UNSIGNED_INT;else if(t.array.constructor===Int16Array)a=Vt.SHORT;else if(t.array.constructor===Uint16Array)a=Vt.UNSIGNED_SHORT;else if(t.array.constructor===Int8Array)a=Vt.BYTE;else if(t.array.constructor===Uint8Array)a=Vt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+t.array.constructor.name);if(n===void 0&&(n=0),(i===void 0||i===1/0)&&(i=t.count),i===0)return null;const l=x0(t,n,i);let c;e!==void 0&&(c=t===e.index?Vt.ELEMENT_ARRAY_BUFFER:Vt.ARRAY_BUFFER);const h=this.processBufferView(t,a,n,i,c),d={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[t.itemSize]};return t.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(t,e,n,i="image/png"){if(t!==null){const r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(t)||o.images.set(t,{});const h=o.images.get(t),d=i+":flipY/"+n.toString();if(h[d]!==void 0)return h[d];a.images||(a.images=[]);const u={mimeType:i},f=_l();f.width=Math.min(t.width,l.maxTextureSize),f.height=Math.min(t.height,l.maxTextureSize);const g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),t.data!==void 0){e!==ze&&console.error("GLTFExporter: Only RGBAFormat is supported.",e),(t.width>l.maxTextureSize||t.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",t);const p=new Uint8ClampedArray(t.height*t.width*4);for(let m=0;m<p.length;m+=4)p[m+0]=t.data[m+0],p[m+1]=t.data[m+1],p[m+2]=t.data[m+2],p[m+3]=t.data[m+3];g.putImageData(new ImageData(p,t.width,t.height),0,0)}else if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas)g.drawImage(t,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(xl(f,i).then(p=>r.processBufferViewImage(p)).then(p=>{u.bufferView=p})):f.toDataURL!==void 0?u.uri=f.toDataURL(i):c.push(xl(f,i).then(p=>new FileReader().readAsDataURL(p)).then(p=>{u.uri=p}));const A=a.images.push(u)-1;return h[d]=A,A}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(t){const e=this.json;e.samplers||(e.samplers=[]);const n={magFilter:Le[t.magFilter],minFilter:Le[t.minFilter],wrapS:Le[t.wrapS],wrapT:Le[t.wrapT]};return e.samplers.push(n)-1}async processTextureAsync(t){const n=this.options,i=this.cache,r=this.json;if(i.textures.has(t))return i.textures.get(t);r.textures||(r.textures=[]),t instanceof Cr&&(t=await this.decompressTextureAsync(t,n.maxTextureSize));let o=t.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(t),source:this.processImage(t.image,t.format,t.flipY,o)};t.name&&(a.name=t.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(t,a)});const l=r.textures.push(a)-1;return i.textures.set(t,l),l}async processMaterialAsync(t){const e=this.cache,n=this.json;if(e.materials.has(t))return e.materials.get(t);if(t.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};t.isMeshStandardMaterial!==!0&&t.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=t.color.toArray().concat([t.opacity]);if(Oi(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),t.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=t.metalness,i.pbrMetallicRoughness.roughnessFactor=t.roughness):(i.pbrMetallicRoughness.metallicFactor=0,i.pbrMetallicRoughness.roughnessFactor=1),t.metalnessMap||t.roughnessMap){const a=await this.buildMetalRoughTextureAsync(t.metalnessMap,t.roughnessMap),l={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(t.map){const a={index:await this.processTextureAsync(t.map),texCoord:t.map.channel};this.applyTextureTransform(a,t.map),i.pbrMetallicRoughness.baseColorTexture=a}if(t.emissive){const a=t.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=t.emissive.toArray()),t.emissiveMap){const c={index:await this.processTextureAsync(t.emissiveMap),texCoord:t.emissiveMap.channel};this.applyTextureTransform(c,t.emissiveMap),i.emissiveTexture=c}}if(t.normalMap){const a={index:await this.processTextureAsync(t.normalMap),texCoord:t.normalMap.channel};t.normalScale&&t.normalScale.x!==1&&(a.scale=t.normalScale.x),this.applyTextureTransform(a,t.normalMap),i.normalTexture=a}if(t.aoMap){const a={index:await this.processTextureAsync(t.aoMap),texCoord:t.aoMap.channel};t.aoMapIntensity!==1&&(a.strength=t.aoMapIntensity),this.applyTextureTransform(a,t.aoMap),i.occlusionTexture=a}t.transparent?i.alphaMode="BLEND":t.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=t.alphaTest),t.side===Je&&(i.doubleSided=!0),t.name!==""&&(i.name=t.name),this.serializeUserData(t,i),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(t,i)});const o=n.materials.push(i)-1;return e.materials.set(t,o),o}async processMeshAsync(t){const e=this.cache,n=this.json,i=[t.geometry.uuid];if(Array.isArray(t.material))for(let _=0,T=t.material.length;_<T;_++)i.push(t.material[_].uuid);else i.push(t.material.uuid);const r=i.join(":");if(e.meshes.has(r))return e.meshes.get(r);const o=t.geometry;let a;t.isLineSegments?a=Vt.LINES:t.isLineLoop?a=Vt.LINE_LOOP:t.isLine?a=Vt.LINE_STRIP:t.isPoints?a=Vt.POINTS:a=t.material.wireframe?Vt.LINES:Vt.TRIANGLES;const l={},c={},h=[],d=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;const T=o.attributes[_];if(_=u[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),e.attributes.has(this.getUID(T))){c[_]=e.attributes.get(this.getUID(T));continue}g=null;const w=T.array;_==="JOINTS_0"&&!(w instanceof Uint16Array)&&!(w instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=new $t(new Uint16Array(w),T.itemSize,T.normalized)):(w instanceof Uint32Array||w instanceof Int32Array)&&!_.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${_}" converted to type FLOAT.`),g=Ws.Utils.toFloat32BufferAttribute(T));const P=this.processAccessor(g||T,o);P!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,T),c[_]=P,e.attributes.set(this.getUID(T),P))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(t.morphTargetInfluences!==void 0&&t.morphTargetInfluences.length>0){const _=[],T=[],b={};if(t.morphTargetDictionary!==void 0)for(const w in t.morphTargetDictionary)b[t.morphTargetDictionary[w]]=w;for(let w=0;w<t.morphTargetInfluences.length;++w){const P={};let M=!1;for(const x in o.morphAttributes){if(x!=="position"&&x!=="normal"){M||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),M=!0);continue}const R=o.morphAttributes[x][w],O=x.toUpperCase(),N=o.attributes[x];if(e.attributes.has(this.getUID(R,!0))){P[O]=e.attributes.get(this.getUID(R,!0));continue}const G=R.clone();if(!o.morphTargetsRelative)for(let k=0,H=R.count;k<H;k++)for(let z=0;z<R.itemSize;z++)z===0&&G.setX(k,R.getX(k)-N.getX(k)),z===1&&G.setY(k,R.getY(k)-N.getY(k)),z===2&&G.setZ(k,R.getZ(k)-N.getZ(k)),z===3&&G.setW(k,R.getW(k)-N.getW(k));P[O]=this.processAccessor(G,o),e.attributes.set(this.getUID(N,!0),P[O])}d.push(P),_.push(t.morphTargetInfluences[w]),t.morphTargetDictionary!==void 0&&T.push(b[w])}l.weights=_,T.length>0&&(l.extras={},l.extras.targetNames=T)}const A=Array.isArray(t.material);if(A&&o.groups.length===0)return null;let p=!1;if(A&&o.index===null){const _=[];for(let T=0,b=o.attributes.position.count;T<b;T++)_[T]=T;o.setIndex(_),p=!0}const m=A?t.material:[t.material],y=A?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,T=y.length;_<T;_++){const b={mode:a,attributes:c};if(this.serializeUserData(o,b),d.length>0&&(b.targets=d),o.index!==null){let P=this.getUID(o.index);(y[_].start!==void 0||y[_].count!==void 0)&&(P+=":"+y[_].start+":"+y[_].count),e.attributes.has(P)?b.indices=e.attributes.get(P):(b.indices=this.processAccessor(o.index,o,y[_].start,y[_].count),e.attributes.set(P,b.indices)),b.indices===null&&delete b.indices}const w=await this.processMaterialAsync(m[y[_].materialIndex]);w!==null&&(b.material=w),h.push(b)}p===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(_){_.writeMesh&&_.writeMesh(t,l)});const v=n.meshes.push(l)-1;return e.meshes.set(r,v),v}detectMeshQuantization(t,e){if(this.extensionsUsed[Pr])return;let n;switch(e.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}e.normalized&&(n+=" normalized");const i=t.split("_",1)[0];pl[i]&&pl[i].includes(n)&&(this.extensionsUsed[Pr]=!0,this.extensionsRequired[Pr]=!0)}processCamera(t){const e=this.json;e.cameras||(e.cameras=[]);const n=t.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:t.right*2,ymag:t.top*2,zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near}:i.perspective={aspectRatio:t.aspect,yfov:ks.degToRad(t.fov),zfar:t.far<=0?.001:t.far,znear:t.near<0?0:t.near},t.name!==""&&(i.name=t.type),e.cameras.push(i)-1}processAnimation(t,e){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),t=Ws.Utils.mergeMorphTargetTracks(t.clone(),e);const r=t.tracks,o=[],a=[];for(let l=0;l<r.length;++l){const c=r[l],h=qt.parseTrackName(c.name);let d=qt.findNode(e,h.nodeName);const u=ml[h.propertyName];if(h.objectName==="bones"&&(d.isSkinnedMesh===!0?d=d.skeleton.getBoneByName(h.objectIndex):d=void 0),!d||!u){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const f=1;let g=c.values.length/c.times.length;u===ml.morphTargetInfluences&&(g/=d.morphTargetInfluences.length);let A;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(A="CUBICSPLINE",g/=3):c.getInterpolation()===Th?A="STEP":A="LINEAR",a.push({input:this.processAccessor(new $t(c.times,f)),output:this.processAccessor(new $t(c.values,g)),interpolation:A}),o.push({sampler:a.length-1,target:{node:i.get(d),path:u}})}return n.animations.push({name:t.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(t){const e=this.json,n=this.nodeMap,i=e.nodes[n.get(t)],r=t.skeleton;if(r===void 0)return null;const o=t.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(r.bones.length*16),c=new Ut;for(let d=0;d<r.bones.length;++d)a.push(n.get(r.bones[d])),c.copy(r.boneInverses[d]),c.multiply(t.bindMatrix).toArray(l,d*16);return e.skins===void 0&&(e.skins=[]),e.skins.push({inverseBindMatrices:this.processAccessor(new $t(l,16)),joints:a,skeleton:n.get(o)}),i.skin=e.skins.length-1}async processNodeAsync(t){const e=this.json,n=this.options,i=this.nodeMap;e.nodes||(e.nodes=[]);const r={};if(n.trs){const a=t.quaternion.toArray(),l=t.position.toArray(),c=t.scale.toArray();Oi(a,[0,0,0,1])||(r.rotation=a),Oi(l,[0,0,0])||(r.translation=l),Oi(c,[1,1,1])||(r.scale=c)}else t.matrixAutoUpdate&&t.updateMatrix(),_0(t.matrix)===!1&&(r.matrix=t.matrix.elements);if(t.name!==""&&(r.name=String(t.name)),this.serializeUserData(t,r),t.isMesh||t.isLine||t.isPoints){const a=await this.processMeshAsync(t);a!==null&&(r.mesh=a)}else t.isCamera&&(r.camera=this.processCamera(t));if(t.isSkinnedMesh&&this.skins.push(t),t.children.length>0){const a=[];for(let l=0,c=t.children.length;l<c;l++){const h=t.children[l];if(h.visible||n.onlyVisible===!1){const d=await this.processNodeAsync(h);d!==null&&a.push(d)}}a.length>0&&(r.children=a)}await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(t,r)});const o=e.nodes.push(r)-1;return i.set(t,o),o}async processSceneAsync(t){const e=this.json,n=this.options;e.scenes||(e.scenes=[],e.scene=0);const i={};t.name!==""&&(i.name=t.name),e.scenes.push(i);const r=[];for(let o=0,a=t.children.length;o<a;o++){const l=t.children[o];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(t,i)}async processObjectsAsync(t){const e=new yo;e.name="AuxScene";for(let n=0;n<t.length;n++)e.children.push(t[n]);await this.processSceneAsync(e)}async processInputAsync(t){const e=this.options;t=t instanceof Array?t:[t],await this._invokeAllAsync(function(i){i.beforeParse&&i.beforeParse(t)});const n=[];for(let i=0;i<t.length;i++)t[i]instanceof yo?await this.processSceneAsync(t[i]):n.push(t[i]);n.length>0&&await this.processObjectsAsync(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<e.animations.length;++i)this.processAnimation(e.animations[i],t[0]);await this._invokeAllAsync(function(i){i.afterParse&&i.afterParse(t)})}async _invokeAllAsync(t){for(let e=0,n=this.plugins.length;e<n;e++)await t(this.plugins[e])}}class y0{constructor(t){this.writer=t,this.name="KHR_lights_punctual"}writeNode(t,e){if(!t.isLight)return;if(!t.isDirectionalLight&&!t.isPointLight&&!t.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",t);return}const n=this.writer,i=n.json,r=n.extensionsUsed,o={};t.name&&(o.name=t.name),o.color=t.color.toArray(),o.intensity=t.intensity,t.isDirectionalLight?o.type="directional":t.isPointLight?(o.type="point",t.distance>0&&(o.range=t.distance)):t.isSpotLight&&(o.type="spot",t.distance>0&&(o.range=t.distance),o.spot={},o.spot.innerConeAngle=(1-t.penumbra)*t.angle,o.spot.outerConeAngle=t.angle),t.decay!==void 0&&t.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),t.target&&(t.target.parent!==t||t.target.position.x!==0||t.target.position.y!==0||t.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const a=i.extensions[this.name].lights;a.push(o),e.extensions=e.extensions||{},e.extensions[this.name]={light:a.length-1}}}class M0{constructor(t){this.writer=t,this.name="KHR_materials_unlit"}async writeMaterialAsync(t,e){if(!t.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;e.extensions=e.extensions||{},e.extensions[this.name]={},i[this.name]=!0,e.pbrMetallicRoughness.metallicFactor=0,e.pbrMetallicRoughness.roughnessFactor=.9}}class E0{constructor(t){this.writer=t,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=t.clearcoat,t.clearcoatMap){const o={index:await n.processTextureAsync(t.clearcoatMap),texCoord:t.clearcoatMap.channel};n.applyTextureTransform(o,t.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=t.clearcoatRoughness,t.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(t.clearcoatRoughnessMap),texCoord:t.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,t.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(t.clearcoatNormalMap){const o={index:await n.processTextureAsync(t.clearcoatNormalMap),texCoord:t.clearcoatNormalMap.channel};t.clearcoatNormalScale.x!==1&&(o.scale=t.clearcoatNormalScale.x),n.applyTextureTransform(o,t.clearcoatNormalMap),r.clearcoatNormalTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class S0{constructor(t){this.writer=t,this.name="KHR_materials_dispersion"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.dispersion===0)return;const i=this.writer.extensionsUsed,r={};r.dispersion=t.dispersion,e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class b0{constructor(t){this.writer=t,this.name="KHR_materials_iridescence"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=t.iridescence,t.iridescenceMap){const o={index:await n.processTextureAsync(t.iridescenceMap),texCoord:t.iridescenceMap.channel};n.applyTextureTransform(o,t.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=t.iridescenceIOR,r.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1],t.iridescenceThicknessMap){const o={index:await n.processTextureAsync(t.iridescenceThicknessMap),texCoord:t.iridescenceThicknessMap.channel};n.applyTextureTransform(o,t.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class w0{constructor(t){this.writer=t,this.name="KHR_materials_transmission"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=t.transmission,t.transmissionMap){const o={index:await n.processTextureAsync(t.transmissionMap),texCoord:t.transmissionMap.channel};n.applyTextureTransform(o,t.transmissionMap),r.transmissionTexture=o}e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class T0{constructor(t){this.writer=t,this.name="KHR_materials_volume"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=t.thickness,t.thicknessMap){const o={index:await n.processTextureAsync(t.thicknessMap),texCoord:t.thicknessMap.channel};n.applyTextureTransform(o,t.thicknessMap),r.thicknessTexture=o}t.attenuationDistance!==1/0&&(r.attenuationDistance=t.attenuationDistance),r.attenuationColor=t.attenuationColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class C0{constructor(t){this.writer=t,this.name="KHR_materials_ior"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=t.ior,e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class R0{constructor(t){this.writer=t,this.name="KHR_materials_specular"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.specularIntensity===1&&t.specularColor.equals(u0)&&!t.specularIntensityMap&&!t.specularColorMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(t.specularIntensityMap){const o={index:await n.processTextureAsync(t.specularIntensityMap),texCoord:t.specularIntensityMap.channel};n.applyTextureTransform(o,t.specularIntensityMap),r.specularTexture=o}if(t.specularColorMap){const o={index:await n.processTextureAsync(t.specularColorMap),texCoord:t.specularColorMap.channel};n.applyTextureTransform(o,t.specularColorMap),r.specularColorTexture=o}r.specularFactor=t.specularIntensity,r.specularColorFactor=t.specularColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class I0{constructor(t){this.writer=t,this.name="KHR_materials_sheen"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(t.sheenRoughnessMap){const o={index:await n.processTextureAsync(t.sheenRoughnessMap),texCoord:t.sheenRoughnessMap.channel};n.applyTextureTransform(o,t.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(t.sheenColorMap){const o={index:await n.processTextureAsync(t.sheenColorMap),texCoord:t.sheenColorMap.channel};n.applyTextureTransform(o,t.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=t.sheenRoughness,r.sheenColorFactor=t.sheenColor.toArray(),e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class P0{constructor(t){this.writer=t,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(t,e){if(!t.isMeshPhysicalMaterial||t.anisotropy==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(t.anisotropyMap){const o={index:await n.processTextureAsync(t.anisotropyMap)};n.applyTextureTransform(o,t.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=t.anisotropy,r.anisotropyRotation=t.anisotropyRotation,e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class D0{constructor(t){this.writer=t,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=t.emissiveIntensity,e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class F0{constructor(t){this.writer=t,this.name="EXT_materials_bump"}async writeMaterialAsync(t,e){if(!t.isMeshStandardMaterial||t.bumpScale===1&&!t.bumpMap)return;const n=this.writer,i=n.extensionsUsed,r={};if(t.bumpMap){const o={index:await n.processTextureAsync(t.bumpMap),texCoord:t.bumpMap.channel};n.applyTextureTransform(o,t.bumpMap),r.bumpTexture=o}r.bumpFactor=t.bumpScale,e.extensions=e.extensions||{},e.extensions[this.name]=r,i[this.name]=!0}}class L0{constructor(t){this.writer=t,this.name="EXT_mesh_gpu_instancing"}writeNode(t,e){if(!t.isInstancedMesh)return;const n=this.writer,i=t,r=new Float32Array(i.count*3),o=new Float32Array(i.count*4),a=new Float32Array(i.count*3),l=new Ut,c=new I,h=new He,d=new I;for(let f=0;f<i.count;f++)i.getMatrixAt(f,l),l.decompose(c,h,d),c.toArray(r,f*3),h.toArray(o,f*4),d.toArray(a,f*3);const u={TRANSLATION:n.processAccessor(new $t(r,3)),ROTATION:n.processAccessor(new $t(o,4)),SCALE:n.processAccessor(new $t(a,3))};i.instanceColor&&(u._COLOR_0=n.processAccessor(i.instanceColor)),e.extensions=e.extensions||{},e.extensions[this.name]={attributes:u},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Ws.Utils={insertKeyframe:function(s,t){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),o=s.createInterpolant(new s.ValueBufferType(n));let a;if(s.times.length===0){i[0]=t;for(let l=0;l<n;l++)r[l]=0;a=0}else if(t<s.times[0]){if(Math.abs(s.times[0]-t)<.001)return 0;i[0]=t,i.set(s.times,1),r.set(o.evaluate(t),0),r.set(s.values,n),a=0}else if(t>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-t)<.001)return s.times.length-1;i[i.length-1]=t,i.set(s.times,0),r.set(s.values,0),r.set(o.evaluate(t),s.values.length),a=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-t)<.001)return l;if(s.times[l]<t&&s.times[l+1]>t){i.set(s.times.slice(0,l+1),0),i[l+1]=t,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(o.evaluate(t),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return s.times=i,s.values=r,a},mergeMorphTargetTracks:function(s,t){const e=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let o=i[r];const a=qt.parseTrackName(o.name),l=qt.findNode(t,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){e.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Ch)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let d;if(n[l.uuid]===void 0){d=o.clone();const f=new d.ValueBufferType(c*d.times.length);for(let g=0;g<d.times.length;g++)f[g*c+h]=d.values[g];d.name=(a.nodeName||"")+".morphTargetInfluences",d.values=f,n[l.uuid]=d,e.push(d);continue}const u=o.createInterpolant(new o.ValueBufferType(1));d=n[l.uuid];for(let f=0;f<d.times.length;f++)d.values[f*c+h]=u.evaluate(d.times[f]);for(let f=0;f<o.times.length;f++){const g=this.insertKeyframe(d,o.times[f]);d.values[g*c+h]=o.values[f]}}return s.tracks=e,s},toFloat32BufferAttribute:function(s){const t=new $t(new Float32Array(s.count*s.itemSize),s.itemSize,!1);if(!s.normalized&&!s.isInterleavedBufferAttribute)return t.array.set(s.array),t;for(let e=0,n=s.count;e<n;e++)for(let i=0;i<s.itemSize;i++)t.setComponent(e,i,s.getComponent(e,i));return t}};const Fr={highContrast:{name:"High Contrast (Yellow/Cyan)",bg:592656,frontColor:16771584,backColor:61695,valleyColor:3900150,mountainColor:15680580,boundaryColor:16777215,cutColor:16347926,flatColor:6583435,unassignedColor:11032055,gridColor:1976635},cardboard:{name:"Cardboard Craft",bg:987673,frontColor:13935475,backColor:11107408,valleyColor:3900150,mountainColor:15680580,boundaryColor:16096779,cutColor:16347926,flatColor:6583435,unassignedColor:11032055,gridColor:1976635},blueprint:{name:"Blueprint",bg:727340,frontColor:1981066,backColor:1516884,valleyColor:6333946,mountainColor:16281969,boundaryColor:9684477,cutColor:16486972,flatColor:4674921,unassignedColor:12616956,gridColor:1976635},cyber:{name:"Cyber Neon",bg:461075,frontColor:4988309,backColor:3018853,valleyColor:440020,mountainColor:16007006,boundaryColor:11032055,cutColor:16347926,flatColor:4674921,unassignedColor:15235577,gridColor:1973067},paper:{name:"Origami Paper",bg:1579035,frontColor:16317180,backColor:14870768,valleyColor:2450411,mountainColor:14251782,boundaryColor:3359061,cutColor:14753096,flatColor:9741240,unassignedColor:9133302,gridColor:2565930}};class Lr{constructor(t,e={}){this.container=t,this.currentTheme=Fr.highContrast,this.onFaceClick=e.onFaceClick||null,this.scene=new yo,this.scene.background=new Pt(this.currentTheme.bg),this.camera=new Oe(45,t.clientWidth/t.clientHeight,.1,1e4),this.renderer=new pg({antialias:!0,alpha:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ec,t.appendChild(this.renderer.domElement),this.controls=new Jg(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.setupLights(),this.raycaster=new Kg,this.mouse=new Lt,this.pointerDownPos={x:0,y:0},this.renderer.domElement.addEventListener("pointerdown",n=>{this.pointerDownPos={x:n.clientX,y:n.clientY}}),this.renderer.domElement.addEventListener("pointerup",n=>{if(Math.hypot(n.clientX-this.pointerDownPos.x,n.clientY-this.pointerDownPos.y)<6&&this.onFaceClick){const r=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(n.clientX-r.left)/r.width*2-1,this.mouse.y=-((n.clientY-r.top)/r.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const o=this.faceMeshes.flatMap(l=>[l.frontMesh,l.backMesh]),a=this.raycaster.intersectObjects(o,!1);if(a.length>0){const l=a[0].object;if(l.userData&&l.userData.faceIndex!==void 0){const c=l.userData.faceIndex,h=l.userData.partIndex!==void 0?l.userData.partIndex:0,d=new I(0,1,0).applyQuaternion(this.camera.quaternion).normalize();this.onFaceClick(c,h,l.userData,d)}}}}),this.modelGroup=new $e,this.scene.add(this.modelGroup),this.faceMeshes=[],this.creaseLines=null,this.showCreases=e.showCreases!==void 0?e.showCreases:!1,window.addEventListener("resize",()=>this.onWindowResize())}setupLights(){const t=new zg(16777215,.85);this.scene.add(t);const e=new ll(16777215,1);e.position.set(10,20,15),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.bias=-1e-4,this.scene.add(e);const n=new ll(9482495,.4);n.position.set(-10,-10,-10),this.scene.add(n)}setTheme(t){Fr[t]&&(this.currentTheme=Fr[t],this.scene.background.setHex(this.currentTheme.bg),this.gridHelper&&this.gridHelper.material.color.setHex(this.currentTheme.gridColor),this.faceMeshes.forEach(e=>{e.frontMesh.material.color.setHex(this.currentTheme.frontColor),e.backMesh.material.color.setHex(this.currentTheme.backColor)}),this.creaseLines&&this.updateCreaseColors())}triangulateFace(t,e){const n=t.length;if(n===3)return[0,1,2];if(n===4)return[0,1,2,0,2,3];const i=new I(...e[t[0]]),r=new I(...e[t[1]]);let o=new I().subVectors(r,i).normalize(),a=null;for(let u=2;u<n;u++){const f=new I(...e[t[u]]),g=new I().crossVectors(o,new I().subVectors(f,i));if(g.lengthSq()>1e-6){a=g.normalize();break}}a||(a=new I(0,0,1));const l=new I().crossVectors(a,o).normalize(),c=t.map(u=>{const f=new I(...e[u]),g=new I().subVectors(f,i);return new Lt(g.dot(o),g.dot(l))}),h=ko.triangulateShape(c,[]),d=[];return h.forEach(u=>{d.push(u[0],u[1],u[2])}),d.length>0?d:[0,1,2]}buildModel(t,e,n=null){if(n&&n.isAssembly)return this.buildAssembly(n);for(this.assemblyManager=null,this.fold=t,this.kinematics=e,this.partMeshGroups=[];this.modelGroup.children.length>0;){const r=this.modelGroup.children[0];r.geometry&&r.geometry.dispose(),this.modelGroup.remove(r)}this.faceMeshes=[];const i=this.fold.vertices;this.fold.facesVertices.forEach((r,o)=>{const a=this.triangulateFace(r,i),l=new Float32Array(r.length*3);r.forEach((w,P)=>{const M=i[w];l[P*3+0]=M[0],l[P*3+1]=M[1],l[P*3+2]=M[2]});let c=1/0,h=-1/0,d=1/0,u=-1/0;r.forEach(w=>{const P=i[w];P[0]<c&&(c=P[0]),P[0]>h&&(h=P[0]),P[1]<d&&(d=P[1]),P[1]>u&&(u=P[1])});const f=Math.max(h-c,1e-4),g=Math.max(u-d,1e-4),A=new Float32Array(r.length*2);r.forEach((w,P)=>{const M=i[w];A[P*2+0]=(M[0]-c)/f,A[P*2+1]=(M[1]-d)/g});const p=new de;p.setAttribute("position",new $t(l.slice(),3)),p.setAttribute("uv",new $t(A,2)),p.setIndex(a),p.computeVertexNormals();const m=new bs({color:this.currentTheme.frontColor,roughness:.4,metalness:.1,side:tn}),y=new xe(p,m);y.castShadow=!0,y.receiveShadow=!0,y.userData={faceIndex:o,partIndex:0};const v=new de;v.setAttribute("position",new $t(l.slice(),3)),v.setIndex(a),v.computeVertexNormals();const _=new bs({color:this.currentTheme.backColor,roughness:.5,metalness:.05,side:be}),T=new xe(v,_);T.castShadow=!0,T.userData={faceIndex:o,partIndex:0};const b=new $e;b.add(y),b.add(T),this.modelGroup.add(b),this.faceMeshes.push({faceGroup:b,frontMesh:y,backMesh:T,faceVerts:r,geometryFront:p,geometryBack:v,faceIndex:o,partIndex:0,faceBounds:{minX:c,maxX:h,minY:d,maxY:u,width:f,height:g}})}),this.buildCreaseLines(),this.centerModel()}buildAssembly(t){for(this.assemblyManager=t,this.partMeshGroups=[],this.faceMeshes=[];this.modelGroup.children.length>0;){const e=this.modelGroup.children[0];e.geometry&&e.geometry.dispose(),this.modelGroup.remove(e)}t.parts.forEach((e,n)=>{const i=new $e;i.name=`part_${e.id}`,this.modelGroup.add(i);const r=e.foldData,o=r.vertices,a=[];r.facesVertices.forEach((g,A)=>{const p=this.triangulateFace(g,o),m=new Float32Array(g.length*3);g.forEach((z,B)=>{const J=o[z];m[B*3+0]=J[0],m[B*3+1]=J[1],m[B*3+2]=J[2]});let y=1/0,v=-1/0,_=1/0,T=-1/0;g.forEach(z=>{const B=o[z];B[0]<y&&(y=B[0]),B[0]>v&&(v=B[0]),B[1]<_&&(_=B[1]),B[1]>T&&(T=B[1])});const b=Math.max(v-y,1e-4),w=Math.max(T-_,1e-4),P=new Float32Array(g.length*2);g.forEach((z,B)=>{const J=o[z];P[B*2+0]=(J[0]-y)/b,P[B*2+1]=(J[1]-_)/w});const M=new de;M.setAttribute("position",new $t(m.slice(),3)),M.setAttribute("uv",new $t(P,2)),M.setIndex(p),M.computeVertexNormals();const x=new bs({color:this.currentTheme.frontColor,roughness:.4,metalness:.1,side:tn}),R=new xe(M,x);R.castShadow=!0,R.receiveShadow=!0,R.userData={faceIndex:A,partIndex:n};const O=new de;O.setAttribute("position",new $t(m.slice(),3)),O.setIndex(p),O.computeVertexNormals();const N=new bs({color:this.currentTheme.backColor,roughness:.5,metalness:.05,side:be}),G=new xe(O,N);G.castShadow=!0,G.userData={faceIndex:A,partIndex:n};const k=new $e;k.add(R),k.add(G),i.add(k);const H={faceGroup:k,frontMesh:R,backMesh:G,faceVerts:g,partIndex:n,faceIndex:A,faceBounds:{minX:y,maxX:v,minY:_,maxY:T,width:b,height:w}};a.push(H),this.faceMeshes.push(H)});const l=r.edgesVertices.length,c=new Float32Array(l*2*3),h=new Float32Array(l*2*3),d=new de;d.setAttribute("position",new $t(c,3)),d.setAttribute("color",new $t(h,3));const u=new gi({vertexColors:!0,linewidth:2}),f=new Gs(d,u);f.visible=this.showCreases,i.add(f),this.partMeshGroups.push({partIndex:n,part:e,group:i,faceMeshes:a,creaseLines:f,foldData:r,kinematics:e.kinematics})}),this.centerModel()}highlightActivePart(t){}updateFaceArtworks(t,e=0){!this.faceMeshes||this.faceMeshes.length===0||this.faceMeshes.forEach(n=>{var T,b,w,P;const i=n.partIndex!==void 0?n.partIndex:((b=(T=n.frontMesh)==null?void 0:T.userData)==null?void 0:b.partIndex)??0,r=n.faceIndex!==void 0?n.faceIndex:((P=(w=n.frontMesh)==null?void 0:w.userData)==null?void 0:P.faceIndex)??0;let o=[];if(this.assemblyManager&&this.assemblyManager.isAssembly){const M=this.assemblyManager.parts[i];M&&M.faceArtworks?o=M.faceArtworks.get(r)||[]:i===e&&t&&(o=t.get(r)||[])}else t&&(o=t.get(r)||[]);let a=null;if(this.assemblyManager&&this.assemblyManager.isAssembly){const M=this.assemblyManager.parts[i];M&&M.foldData&&(a=M.foldData.vertices)}else this.fold&&(a=this.fold.vertices);const l=n.frontMesh;if(o.length===0){l.material.map&&(l.material.map.dispose(),l.material.map=null),l.material.color.setHex(this.currentTheme.frontColor),l.material.needsUpdate=!0;return}const c=n.faceBounds,d=1024/Math.max(c.width,c.height,1e-4),u=Math.max(32,Math.min(2048,Math.round(c.width*d))),f=Math.max(32,Math.min(2048,Math.round(c.height*d))),g=document.createElement("canvas");g.width=u,g.height=f;const A=g.getContext("2d"),p=o.find(M=>M.type==="face-fill"),m=p?p.fill:"#"+this.currentTheme.frontColor.toString(16).padStart(6,"0");A.fillStyle=m,A.fillRect(0,0,u,f);const y=u/c.width,v=f/c.height;a&&n.faceVerts&&(A.beginPath(),n.faceVerts.forEach((M,x)=>{const R=a[M],O=(R[0]-c.minX)*y,N=(c.maxY-R[1])*v;x===0?A.moveTo(O,N):A.lineTo(O,N)}),A.closePath(),A.clip()),o.forEach(M=>{if(M.type!=="face-fill"){if(A.save(),M.clusterToNet){const x=M.clusterToNet;A.setTransform(x.a*y,-x.b*v,x.c*y,-x.d*v,(x.e-c.minX)*y,(c.maxY-x.f)*v)}this.drawArtworkOnCanvas(A,M,y,v),A.restore()}}),l.material.map&&l.material.map.dispose();const _=new gg(g);_.colorSpace=Ee,_.minFilter=fn,_.magFilter=ke,_.generateMipmaps=!0,_.anisotropy=8,_.needsUpdate=!0,l.material.map=_,l.material.color.setHex(16777215),l.material.needsUpdate=!0})}drawArtworkOnCanvas(t,e,n=512,i=512){const r=e.unitScale||1;if(e.type==="rect"){if(e.fill&&e.fill!=="transparent"&&(t.fillStyle=e.fill,t.fillRect(e.x,e.y,e.width,e.height)),e.text&&e.text.trim().length>0){const o=Math.min(e.width,e.height)*.08,a=Math.max(1e-4,e.width-o*2),l=Math.max(1e-4,e.height-o*2),c=Math.max(1e-4,Math.min(l*.85,a/Math.max(1,e.text.length*.55))),h=e.textAlign||"center";let d=e.x+e.width/2;h==="left"?d=e.x+o:h==="right"&&(d=e.x+e.width-o);const u=e.y+e.height/2;t.save(),t.translate(d,u),t.scale(1,-1),t.fillStyle=e.fontColor||e.fill||"#ffffff",t.font=`bold ${c}px sans-serif`,t.textAlign=h,t.textBaseline="middle",t.fillText(e.text,0,0),t.restore()}}else if(e.type==="circle"){if(t.beginPath(),t.arc(e.cx,e.cy,e.r,0,Math.PI*2),e.fill&&e.fill!=="transparent"&&(t.fillStyle=e.fill,t.fill()),e.text&&e.text.trim().length>0){const o=1.414*e.r,a=o*.08,l=Math.max(1e-4,o-a*2),c=Math.max(1e-4,o-a*2),h=Math.max(1e-4,Math.min(c*.85,l/Math.max(1,e.text.length*.55))),d=e.textAlign||"center";let u=e.cx;d==="left"?u=e.cx-o/2+a:d==="right"&&(u=e.cx+o/2-a);const f=e.cy;t.save(),t.translate(u,f),t.scale(1,-1),t.fillStyle=e.fontColor||e.fill||"#ffffff",t.font=`bold ${h}px sans-serif`,t.textAlign=d,t.textBaseline="middle",t.fillText(e.text,0,0),t.restore()}}else if(e.type==="text"){t.save(),t.translate(e.x,e.y),t.scale(1,-1),t.fillStyle=e.fontColor||e.fill||"#ffffff";const o=e.fontSize||24*r;t.font=`bold ${o}px sans-serif`,t.textAlign=e.textAlign||"left",t.textBaseline="top",t.fillText(e.text||"",0,0),t.restore()}else if(e.type==="stamp"){t.save(),t.translate(e.x,e.y);const o=(e.scale||1)*r;t.scale(o,-o),this.drawStampOnCanvas(t,e),t.restore()}}drawStampOnCanvas(t,e){if(e.stampType==="fragile")t.fillStyle="#ef4444",t.fillRect(0,0,60,40),t.fillStyle="#ffffff",t.font="bold 10px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("FRAGILE",30,20);else if(e.stampType==="up")t.fillStyle="#3b82f6",t.fillRect(0,0,40,50),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(20,8),t.lineTo(10,20),t.lineTo(15,20),t.lineTo(15,38),t.lineTo(25,38),t.lineTo(25,20),t.lineTo(30,20),t.closePath(),t.fill();else if(e.stampType==="recycle")t.fillStyle="#10b981",t.beginPath(),t.arc(25,25,22,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.font="16px sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("♻",25,25);else if(e.stampType==="barcode")t.fillStyle="#ffffff",t.fillRect(0,0,70,40),t.fillStyle="#000000",t.fillRect(5,5,3,30),t.fillRect(12,5,2,30),t.fillRect(18,5,5,30),t.fillRect(28,5,2,30),t.fillRect(35,5,4,30),t.fillRect(44,5,6,30),t.fillRect(55,5,3,30),t.fillRect(62,5,4,30);else{t.fillStyle="#f59e0b",t.beginPath();const r=25,o=25;for(let a=0;a<5;a++){const l=-Math.PI/2+a*2*Math.PI/5;t.lineTo(r+20*Math.cos(l),o+20*Math.sin(l));const c=l+Math.PI/5;t.lineTo(r+8*Math.cos(c),o+8*Math.sin(c))}t.closePath(),t.fill()}}buildCreaseLines(){this.creaseLines&&this.modelGroup.remove(this.creaseLines);const t=this.fold.edgesVertices.length,e=new Float32Array(t*2*3),n=new Float32Array(t*2*3),i=new de;i.setAttribute("position",new $t(e,3)),i.setAttribute("color",new $t(n,3));const r=new gi({vertexColors:!0,linewidth:2});this.creaseLines=new Gs(i,r),this.creaseLines.visible=this.showCreases,this.modelGroup.add(this.creaseLines),this.updateCreaseColors()}updateCreaseColors(){if(!this.creaseLines)return;const t=this.creaseLines.geometry.attributes.color,e=t.array,n=new Pt(this.currentTheme.valleyColor),i=new Pt(this.currentTheme.mountainColor),r=new Pt(this.currentTheme.boundaryColor),o=new Pt(this.currentTheme.cutColor),a=new Pt(this.currentTheme.flatColor),l=new Pt(this.currentTheme.unassignedColor);this.fold.edgesAssignment.forEach((c,h)=>{const d=(c||"B").toUpperCase();let u=r;switch(d){case"V":u=n;break;case"M":u=i;break;case"B":u=r;break;case"C":u=o;break;case"F":u=a;break;case"U":u=l;break;default:u=r;break}const f=h*6;e[f+0]=u.r,e[f+1]=u.g,e[f+2]=u.b,e[f+3]=u.r,e[f+4]=u.g,e[f+5]=u.b}),t.needsUpdate=!0}updateFold(t,e=0){if(this.assemblyManager&&this.assemblyManager.isAssembly){this.partMeshGroups.forEach(i=>{const r=i.kinematics.evaluateTransforms(t),o=i.part.explosionVector||[0,0,0],a=e*t;if(i.part.alignQuaternion&&i.part.alignTranslation){const c=new He().clone().slerp(i.part.alignQuaternion,t);i.group.quaternion.copy(c);const h=i.part.alignTranslation.clone().multiplyScalar(t);i.group.position.set(h.x+o[0]*a,h.y+o[1]*a,h.z+o[2]*a)}else i.group.position.set(o[0]*a,o[1]*a,o[2]*a);if(i.faceMeshes.forEach((l,c)=>{const h=r[c];h&&(l.faceGroup.matrix.copy(h),l.faceGroup.matrixAutoUpdate=!1)}),i.creaseLines&&this.showCreases){const l=i.creaseLines.geometry.attributes.position,c=l.array,h=i.foldData.vertices;i.foldData.edgesVertices.forEach((d,u)=>{const f=d[0],g=d[1],A=new I(...h[f]),p=new I(...h[g]),m=(T,b,w)=>{const P=T.length;for(let M=0;M<P;M++){const x=T[M],R=T[(M+1)%P];if(x===b&&R===w||x===w&&R===b)return!0}return!1},y=i.foldData.facesVertices.findIndex(T=>m(T,f,g)),v=y>=0?r[y]:new Ut;A.applyMatrix4(v),p.applyMatrix4(v);const _=u*6;c[_+0]=A.x,c[_+1]=A.y,c[_+2]=A.z+.002,c[_+3]=p.x,c[_+4]=p.y,c[_+5]=p.z+.002}),l.needsUpdate=!0}});return}if(!this.kinematics||!this.fold)return;const n=this.kinematics.evaluateTransforms(t);if(this.faceMeshes.forEach((i,r)=>{const o=n[r];i.faceGroup.matrix.copy(o),i.faceGroup.matrixAutoUpdate=!1}),this.creaseLines&&this.showCreases){const i=this.creaseLines.geometry.attributes.position,r=i.array,o=this.fold.vertices;this.fold.edgesVertices.forEach((a,l)=>{const c=a[0],h=a[1],d=new I(...o[c]),u=new I(...o[h]),f=(m,y,v)=>{const _=m.length;for(let T=0;T<_;T++){const b=m[T],w=m[(T+1)%_];if(b===y&&w===v||b===v&&w===y)return!0}return!1},g=this.fold.facesVertices.findIndex(m=>f(m,c,h)),A=g>=0?n[g]:new Ut;d.applyMatrix4(A),u.applyMatrix4(A);const p=l*6;r[p+0]=d.x,r[p+1]=d.y,r[p+2]=d.z+.002,r[p+3]=u.x,r[p+4]=u.y,r[p+5]=u.z+.002}),i.needsUpdate=!0}}centerModel(){const t=new In;if(this.assemblyManager&&this.assemblyManager.isAssembly)this.assemblyManager.parts.forEach(r=>{r.bbox&&r.bbox.min&&r.bbox.max?(t.expandByPoint(new I(...r.bbox.min)),t.expandByPoint(new I(...r.bbox.max))):r.foldData.vertices.forEach(o=>{t.expandByPoint(new I(o[0],o[1],o[2]))})});else if(this.fold)this.fold.vertices.forEach(r=>{t.expandByPoint(new I(r[0],r[1],r[2]))});else return;const e=new I;t.getCenter(e);const n=new I;t.getSize(n),this.modelGroup.position.set(-e.x,-e.y,-e.z);const i=Math.max(n.x,n.y,n.z,2);this.camera.far=Math.max(1e4,i*20),this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,i*2.2),this.controls.target.set(0,0,0),this.controls.update()}setView2D(){const t=new In().setFromObject(this.modelGroup),e=new I;t.getSize(e);const n=Math.max(e.x,e.y,4);this.camera.far=Math.max(1e4,n*20),this.camera.updateProjectionMatrix(),this.camera.position.set(0,0,n*2.2),this.controls.target.set(0,0,0),this.controls.update()}setView3D(){const t=new In().setFromObject(this.modelGroup),e=new I;t.getSize(e);const n=Math.max(e.x,e.y,e.z,4);this.camera.far=Math.max(1e4,n*20),this.camera.updateProjectionMatrix(),this.camera.position.set(n*1.5,n*1.5,n*1.8),this.controls.target.set(0,0,0),this.controls.update()}setShowCreases(t){this.showCreases=t,this.creaseLines&&(this.creaseLines.visible=t)}render(){this.controls.update(),this.renderer.render(this.scene,this.camera)}resize(){if(!this.container)return;const t=this.container.clientWidth||300,e=this.container.clientHeight||300;t>0&&e>0&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}onWindowResize(){this.resize()}async exportGLB(t="folded-model"){if(!this.modelGroup||this.modelGroup.children.length===0){alert("No 3D model available to export.");return}const e=new Ws,n={binary:!0,onlyVisible:!0,embedImages:!0};return new Promise((i,r)=>{e.parse(this.modelGroup,o=>{const a=new Blob([o],{type:"model/gltf-binary"}),l=document.createElement("a");l.href=URL.createObjectURL(a),l.download=`${t}.glb`,l.click(),URL.revokeObjectURL(l.href),i()},o=>{console.error("An error occurred exporting GLB:",o),alert(`Error exporting GLB: ${o.message||o}`),r(o)},n)})}}class Oc{constructor(t,e={}){this.container=t,this.options=e,this.parts=[],this.activeIndex=0,this.wrapper=document.createElement("div"),this.wrapper.className="part-thumbnail-strip",this.container.appendChild(this.wrapper)}update(t=[],e=0){this.parts=t,this.activeIndex=e,this.render()}selectPart(t){this.activeIndex=t,this.wrapper.querySelectorAll(".part-card").forEach((n,i)=>{n.classList.toggle("active",i===t);const r=n.querySelector(".part-card-active-tag");if(i===t){if(!r){const o=document.createElement("span");o.className="part-card-active-tag",o.textContent="ACTIVE",n.appendChild(o)}}else r&&r.remove()})}render(){if(this.wrapper.innerHTML="",!this.parts||this.parts.length<=1){this.wrapper.style.display="none";return}this.wrapper.style.display="flex";const t=document.createElement("div");t.className="part-strip-label",t.innerHTML=`<span class="part-strip-icon">📦</span> Assembly Parts (${this.parts.length}):`,this.wrapper.appendChild(t);const e=document.createElement("div");e.className="part-cards-scroll",this.parts.forEach((n,i)=>{const r=n.foldData||n.foldJson||{},a=(r.facesVertices||r.faces_vertices||(n.foldJson?n.foldJson.faces_vertices:[])||[]).length,l=document.createElement("div");l.className=`part-card ${i===this.activeIndex?"active":""}`,l.setAttribute("data-part-index",i),l.title=`Switch to ${n.name} (${a} faces)`;const c=this.generateMiniSVG(n.foldJson||n.foldData),h=document.createElement("div");h.className="part-card-thumb",h.appendChild(c);const d=document.createElement("div");d.className="part-card-info";const u=document.createElement("div");u.className="part-card-title",u.textContent=n.name||`Part ${i+1}`;const f=document.createElement("div");if(f.className="part-card-badge",f.textContent=`${a} Faces`,d.appendChild(u),d.appendChild(f),i===this.activeIndex){const g=document.createElement("span");g.className="part-card-active-tag",g.textContent="ACTIVE",l.appendChild(g)}l.appendChild(h),l.appendChild(d),l.addEventListener("click",()=>{this.options.onSelectPart&&this.options.onSelectPart(i)}),e.appendChild(l)}),this.wrapper.appendChild(e)}generateMiniSVG(t){if(!t){const p=document.createElementNS("http://www.w3.org/2000/svg","svg");return p.setAttribute("viewBox","0 0 100 100"),p}const e=t.vertices_coords||t.vertices||[],n=t.faces_vertices||t.facesVertices||[];if(e.length===0||n.length===0){const p=document.createElementNS("http://www.w3.org/2000/svg","svg");return p.setAttribute("viewBox","0 0 100 100"),p}let i=1/0,r=1/0,o=-1/0,a=-1/0;e.forEach(p=>{const m=p[0]||0,y=p[1]||0;i=Math.min(i,m),o=Math.max(o,m),r=Math.min(r,y),a=Math.max(a,y)});const l=Math.max(o-i,a-r)*.1||5,c=i-l,h=r-l,d=Math.max(o-i+l*2,10),u=Math.max(a-r+l*2,10),f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("viewBox",`${c} ${h} ${d} ${u}`),f.setAttribute("class","part-mini-svg"),n.forEach(p=>{if(p.length<3)return;const m=p.map(v=>{const _=e[v]||[0,0];return`${_[0]},${_[1]}`}).join(" "),y=document.createElementNS("http://www.w3.org/2000/svg","polygon");y.setAttribute("points",m),y.setAttribute("class","part-thumb-poly"),f.appendChild(y)});const g=t.edges_vertices||t.edgesVertices||[],A=t.edges_assignment||t.edgesAssignment||[];return g.forEach((p,m)=>{const y=e[p[0]],v=e[p[1]];if(!y||!v)return;const _=document.createElementNS("http://www.w3.org/2000/svg","line");_.setAttribute("x1",y[0]),_.setAttribute("y1",y[1]),_.setAttribute("x2",v[0]),_.setAttribute("y2",v[1]);const T=A[m]||"B";_.setAttribute("class",`part-thumb-edge edge-${T}`),f.appendChild(_)}),f}}class U0{constructor(t,e){this.container=t,this.onChange=e,this.assemblyManager=null,this.onSelectAssemblyPart=null,this.thumbnailStrip=new Oc(this.container,{onSelectPart:n=>this.selectPart(n)}),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.zoom=60,this.panX=0,this.panY=0,this.isPanning=!1,this.lastMouse={x:0,y:0},this.selectedEdgeIndex=-1,this.hoveredEdgeIndex=-1,this.selectedFaceIndex=-1,this.activeDirective="V",this.foldData=this.createDefaultCubeNet(),this.setupEvents(),this.resizeCanvas(),this.centerView(),this.render()}loadAssembly(t,e=null){if(this.assemblyManager=t,this.onSelectAssemblyPart=e,t&&t.isAssembly){this.thumbnailStrip&&this.thumbnailStrip.update(t.parts,t.activePartIndex);const n=t.getActivePart();n&&this.loadFoldJSON(n.foldJson||n.foldData,!0)}else if(this.thumbnailStrip&&this.thumbnailStrip.update([],0),t){const n=t.getActivePart();n&&this.loadFoldJSON(n.foldJson||n.foldData,!0)}}selectPart(t){if(this.assemblyManager&&this.assemblyManager.parts[t])if(this.onSelectAssemblyPart)this.onSelectAssemblyPart(t);else{this.assemblyManager.setActivePartIndex(t),this.thumbnailStrip&&this.thumbnailStrip.selectPart(t);const e=this.assemblyManager.parts[t];this.loadFoldJSON(e.foldJson||e.foldData,!0)}}createDefaultCubeNet(){const e=[[0,0],[1.5,0],[1.5,1.5],[0,1.5],[3,0],[3,1.5],[-1.5,0],[-1.5,1.5],[0,3],[1.5,3],[0,-1.5],[1.5,-1.5],[0,4.5],[1.5,4.5]],n=[[0,1,2,3],[1,4,5,2],[7,6,0,3],[3,2,9,8],[10,11,1,0],[8,9,13,12]];return this.buildFoldDataFromFaces(e,n)}buildFoldDataFromFaces(t,e,n={}){const i=new Map,r=[];e.forEach(l=>{const c=l.length;for(let h=0;h<c;h++){const d=l[h],u=l[(h+1)%c],f=`${Math.min(d,u)}-${Math.max(d,u)}`;i.has(f)?i.get(f).count+=1:(r.push([Math.min(d,u),Math.max(d,u)]),i.set(f,{count:1}))}});const o=[],a=[];return r.forEach(([l,c])=>{const h=`${l}-${c}`,d=i.get(h).count===1;n[h]?(o.push(n[h].assignment),a.push(n[h].foldAngle)):d?(o.push("B"),a.push(0)):(o.push("V"),a.push(90))}),{file_spec:1.1,file_title:"Net Preparation Model",file_creator:"FOLDNet Net Editor",vertices_coords:t,faces_vertices:e,edges_vertices:r,edges_assignment:o,edges_foldAngle:a}}getFoldJSON(){return JSON.parse(JSON.stringify(this.foldData))}loadFoldJSON(t,e=!1){if(!t||!t.vertices_coords||!t.faces_vertices)return;const n=t.vertices_coords.map(l=>[l[0],l[1]]),i=t.faces_vertices.slice();let r=t.edges_vertices?t.edges_vertices.slice():[],o=t.edges_assignment?t.edges_assignment.slice():[],a=t.edges_foldAngle?t.edges_foldAngle.slice():[];if(r.length===0){const l=this.buildFoldDataFromFaces(n,i);r=l.edges_vertices,o=l.edges_assignment,a=l.edges_foldAngle}this.foldData={file_spec:t.file_spec||1.1,file_title:t.file_title||t.title||"box-net-prepared",file_creator:t.file_creator||"FOLDNet Editor",vertices_coords:n,faces_vertices:i,edges_vertices:r,edges_assignment:o,edges_foldAngle:a,...t._assembly?{_assembly:t._assembly}:{},...t._artworks?{_artworks:t._artworks}:{}},this.selectedEdgeIndex=-1,this.hoveredEdgeIndex=-1,this.centerView(),this.render(),e||this.notifyChange()}notifyChange(){typeof this.onChange=="function"&&this.onChange(this.getFoldJSON())}setupEvents(){window.addEventListener("resize",()=>this.resizeCanvas()),this.canvas.addEventListener("mousedown",t=>{if(t.button===1||t.button===0&&t.shiftKey){this.isPanning=!0,this.lastMouse={x:t.clientX,y:t.clientY};return}if(t.button===0){const e=this.screenToWorld(t.offsetX,t.offsetY),n=this.findNearestEdge(e,20/this.zoom);n>=0?(this.selectedEdgeIndex=n,this.activeDirective&&this.setEdgeAssignment(n,this.activeDirective),this.render()):(this.isPanning=!0,this.lastMouse={x:t.clientX,y:t.clientY},this.selectedEdgeIndex=-1,this.render())}}),this.canvas.addEventListener("mousemove",t=>{if(this.isPanning){const i=t.clientX-this.lastMouse.x,r=t.clientY-this.lastMouse.y;this.panX+=i,this.panY+=r,this.lastMouse={x:t.clientX,y:t.clientY},this.render();return}const e=this.screenToWorld(t.offsetX,t.offsetY),n=this.findNearestEdge(e,20/this.zoom);n!==this.hoveredEdgeIndex&&(this.hoveredEdgeIndex=n,this.canvas.style.cursor=n>=0?"pointer":"default",this.render())}),this.canvas.addEventListener("mouseup",()=>{this.isPanning=!1}),this.canvas.addEventListener("mouseleave",()=>{this.isPanning=!1,this.hoveredEdgeIndex=-1,this.render()}),this.canvas.addEventListener("wheel",t=>{t.preventDefault();const e=t.deltaY<0?1.15:.85,n=this.screenToWorld(t.offsetX,t.offsetY);this.zoom=Math.min(Math.max(this.zoom*e,.05),500);const i=this.screenToWorld(t.offsetX,t.offsetY);this.panX+=(i.x-n.x)*this.zoom,this.panY-=(i.y-n.y)*this.zoom,this.render()},{passive:!1})}resizeCanvas(){const t=this.canvas.width,e=this.canvas.height;this.canvas.width=this.container.clientWidth,this.canvas.height=this.container.clientHeight,(t===0||e===0)&&this.canvas.width>0&&this.canvas.height>0&&this.centerView(),this.render()}centerView(){if(!this.foldData||!this.foldData.vertices_coords||this.foldData.vertices_coords.length===0)return;let t=1/0,e=-1/0,n=1/0,i=-1/0;this.foldData.vertices_coords.forEach(f=>{t=Math.min(t,f[0]),e=Math.max(e,f[0]),n=Math.min(n,f[1]),i=Math.max(i,f[1])});const r=(t+e)/2,o=(n+i)/2,a=Math.max(e-t,.01),l=Math.max(i-n,.01),c=this.canvas.width||this.container.clientWidth||800,h=this.canvas.height||this.container.clientHeight||600,d=c*.75/a,u=h*.75/l;this.zoom=Math.min(d,u),(!Number.isFinite(this.zoom)||this.zoom<=0)&&(this.zoom=60),this.panX=c/2-r*this.zoom,this.panY=h/2+o*this.zoom,this.render()}screenToWorld(t,e){return{x:(t-this.panX)/this.zoom,y:-(e-this.panY)/this.zoom}}worldToScreen(t,e){return{x:this.panX+t*this.zoom,y:this.panY-e*this.zoom}}findNearestEdge(t,e){if(!this.foldData||!this.foldData.edges_vertices)return-1;let n=e,i=-1;return this.foldData.edges_vertices.forEach((r,o)=>{const a=this.foldData.vertices_coords[r[0]],l=this.foldData.vertices_coords[r[1]];if(!a||!l)return;const c=this.pointToSegmentDistance(t.x,t.y,a[0],a[1],l[0],l[1]);c<n&&(n=c,i=o)}),i}pointToSegmentDistance(t,e,n,i,r,o){const a=(r-n)*(r-n)+(o-i)*(o-i);if(a===0)return Math.hypot(t-n,e-i);let l=((t-n)*(r-n)+(e-i)*(o-i))/a;l=Math.max(0,Math.min(1,l));const c=n+l*(r-n),h=i+l*(o-i);return Math.hypot(t-c,e-h)}setEdgeAssignment(t,e,n=null){if(!(t<0||t>=this.foldData.edges_vertices.length)){if(this.foldData.edges_assignment[t]=e,n!==null)this.foldData.edges_foldAngle[t]=n;else switch(e){case"V":this.foldData.edges_foldAngle[t]=90;break;case"M":this.foldData.edges_foldAngle[t]=-90;break;case"B":case"C":case"F":case"U":default:this.foldData.edges_foldAngle[t]=0;break}this.render(),this.notifyChange()}}autoDetectBoundaries(){if(!this.foldData)return;const t=new Array(this.foldData.edges_vertices.length).fill(0);this.foldData.faces_vertices.forEach(e=>{const n=e.length;for(let i=0;i<n;i++){const r=e[i],o=e[(i+1)%n],a=this.findEdgeIndexByVerts(r,o);a>=0&&t[a]++}}),t.forEach((e,n)=>{e===1?(this.foldData.edges_assignment[n]="B",this.foldData.edges_foldAngle[n]=0):e>=2&&this.foldData.edges_assignment[n]==="B"&&(this.foldData.edges_assignment[n]="V",this.foldData.edges_foldAngle[n]=90)}),this.render(),this.notifyChange()}invertFolds(){this.foldData&&(this.foldData.edges_assignment.forEach((t,e)=>{const n=(t||"B").toUpperCase();n==="V"?(this.foldData.edges_assignment[e]="M",this.foldData.edges_foldAngle[e]=-90):n==="M"&&(this.foldData.edges_assignment[e]="V",this.foldData.edges_foldAngle[e]=90)}),this.render(),this.notifyChange())}flipVertically(){if(!this.foldData||!this.foldData.vertices_coords.length)return;let t=1/0,e=-1/0;this.foldData.vertices_coords.forEach(i=>{i[1]<t&&(t=i[1]),i[1]>e&&(e=i[1])});const n=(t+e)/2;this.foldData.vertices_coords.forEach(i=>{i[1]=2*n-i[1]}),this.foldData.faces_vertices&&this.foldData.faces_vertices.forEach(i=>i.reverse()),this.render(),this.notifyChange()}flipHorizontally(){if(!this.foldData||!this.foldData.vertices_coords.length)return;let t=1/0,e=-1/0;this.foldData.vertices_coords.forEach(i=>{i[0]<t&&(t=i[0]),i[0]>e&&(e=i[0])});const n=(t+e)/2;this.foldData.vertices_coords.forEach(i=>{i[0]=2*n-i[0]}),this.foldData.faces_vertices&&this.foldData.faces_vertices.forEach(i=>i.reverse()),this.render(),this.notifyChange()}attachFaceToSelectedEdge(){this.selectedEdgeIndex>=0&&this.attachFaceToEdge(this.selectedEdgeIndex)}attachFaceToEdge(t){if(t<0||t>=this.foldData.edges_vertices.length)return;const e=this.foldData.edges_vertices[t],n=e[0],i=e[1],r=this.foldData.vertices_coords[n],o=this.foldData.vertices_coords[i],a=o[0]-r[0],l=o[1]-r[1];if(Math.hypot(a,l)===0)return;let h=-l,d=a;const u=this.foldData.faces_vertices.find(_=>_.includes(n)&&_.includes(i));if(u){let _=0,T=0;u.forEach(x=>{_+=this.foldData.vertices_coords[x][0],T+=this.foldData.vertices_coords[x][1]}),_/=u.length,T/=u.length;const b=(r[0]+o[0])/2,w=(r[1]+o[1])/2,P=b-_,M=w-T;h*P+d*M<0&&(h=-h,d=-d)}const f=[r[0]+h,r[1]+d],g=[o[0]+h,o[1]+d],A=this.findOrAddVertex(f[0],f[1]),p=this.findOrAddVertex(g[0],g[1]),m=[n,i,p,A];this.foldData.faces_vertices.push(m);const y={};this.foldData.edges_vertices.forEach((_,T)=>{const b=`${Math.min(_[0],_[1])}-${Math.max(_[0],_[1])}`;y[b]={assignment:this.foldData.edges_assignment[T],angle:this.foldData.edges_foldAngle[T]}});const v=`${Math.min(n,i)}-${Math.max(n,i)}`;y[v]={assignment:"V",angle:90},this.foldData=this.buildFoldDataFromFaces(this.foldData.vertices_coords,this.foldData.faces_vertices,y),this.autoDetectBoundaries()}findOrAddVertex(t,e,n=.05){const i=this.foldData.vertices_coords.findIndex(r=>Math.hypot(r[0]-t,r[1]-e)<n);return i>=0?i:(this.foldData.vertices_coords.push([t,e]),this.foldData.vertices_coords.length-1)}findEdgeIndexByVerts(t,e){const n=Math.min(t,e),i=Math.max(t,e);return this.foldData.edges_vertices.findIndex(r=>r[0]===n&&r[1]===i||r[0]===i&&r[1]===n)}render(){const t=this.canvas.width,e=this.canvas.height;this.ctx.fillStyle="#090b10",this.ctx.fillRect(0,0,t,e),this.renderGrid(t,e),this.foldData&&(this.renderFaces(),this.renderEdges(),this.renderVertices())}renderGrid(t,e){this.ctx.strokeStyle="#1e293b",this.ctx.lineWidth=1;const n=this.screenToWorld(0,e),i=this.screenToWorld(t,0),r=1,o=Math.floor(n.x/r)*r,a=Math.ceil(i.x/r)*r,l=Math.floor(n.y/r)*r,c=Math.ceil(i.y/r)*r;this.ctx.beginPath();for(let d=o;d<=a;d+=r){const u=this.worldToScreen(d,l),f=this.worldToScreen(d,c);this.ctx.moveTo(u.x,u.y),this.ctx.lineTo(f.x,f.y)}for(let d=l;d<=c;d+=r){const u=this.worldToScreen(o,d),f=this.worldToScreen(a,d);this.ctx.moveTo(u.x,u.y),this.ctx.lineTo(f.x,f.y)}this.ctx.stroke();const h=this.worldToScreen(0,0);this.ctx.strokeStyle="rgba(255, 255, 255, 0.15)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(h.x-15,h.y),this.ctx.lineTo(h.x+15,h.y),this.ctx.moveTo(h.x,h.y-15),this.ctx.lineTo(h.x,h.y+15),this.ctx.stroke()}renderFaces(){this.foldData.faces_vertices.forEach((t,e)=>{if(t.length<3)return;this.ctx.beginPath(),t.forEach((o,a)=>{const l=this.foldData.vertices_coords[o],c=this.worldToScreen(l[0],l[1]);a===0?this.ctx.moveTo(c.x,c.y):this.ctx.lineTo(c.x,c.y)}),this.ctx.closePath(),this.ctx.fillStyle=e===0?"rgba(255, 234, 0, 0.15)":"rgba(0, 240, 255, 0.08)",this.ctx.fill();let n=0,i=0;t.forEach(o=>{const a=this.foldData.vertices_coords[o];n+=a[0],i+=a[1]}),n/=t.length,i/=t.length;const r=this.worldToScreen(n,i);this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font='11px "JetBrains Mono", monospace',this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(`F${e}${e===0?" (Root)":""}`,r.x,r.y)})}renderEdges(){const t={V:{color:"#3b82f6",dash:[6,4],width:3,label:"Valley (+90°)"},M:{color:"#ef4444",dash:[6,4],width:3,label:"Mountain (-90°)"},B:{color:"#f8fafc",dash:[],width:3,label:"Boundary"},C:{color:"#f97316",dash:[],width:2,label:"Cut"},F:{color:"#64748b",dash:[2,2],width:1.5,label:"Flat"},U:{color:"#a855f7",dash:[4,4],width:2,label:"Unassigned"}};this.foldData.edges_vertices.forEach((e,n)=>{const i=this.foldData.vertices_coords[e[0]],r=this.foldData.vertices_coords[e[1]];if(!i||!r)return;const o=this.worldToScreen(i[0],i[1]),a=this.worldToScreen(r[0],r[1]),l=(this.foldData.edges_assignment[n]||"B").toUpperCase(),c=t[l]||t.B,h=n===this.selectedEdgeIndex,d=n===this.hoveredEdgeIndex;if(this.ctx.save(),this.ctx.beginPath(),this.ctx.setLineDash(c.dash),this.ctx.moveTo(o.x,o.y),this.ctx.lineTo(a.x,a.y),h?(this.ctx.strokeStyle="#eab308",this.ctx.lineWidth=c.width+4,this.ctx.shadowColor="#eab308",this.ctx.shadowBlur=10):d?(this.ctx.strokeStyle="#ffffff",this.ctx.lineWidth=c.width+2):(this.ctx.strokeStyle=c.color,this.ctx.lineWidth=c.width),this.ctx.stroke(),this.ctx.restore(),h||d){const u=(o.x+a.x)/2,f=(o.y+a.y)/2,g=this.foldData.edges_foldAngle[n]??0;this.ctx.fillStyle=h?"#fef08a":"#ffffff",this.ctx.font='bold 12px "Outfit", sans-serif',this.ctx.textAlign="center",this.ctx.textBaseline="bottom",this.ctx.fillText(`E${n}: ${l} (${g}°)`,u,f-6)}})}renderVertices(){this.foldData.vertices_coords.forEach((t,e)=>{const n=this.worldToScreen(t[0],t[1]);this.ctx.fillStyle="#64748b",this.ctx.beginPath(),this.ctx.arc(n.x,n.y,3.5,0,Math.PI*2),this.ctx.fill()})}}const N0=/^[og]\s*(.+)?/,B0=/^mtllib /,O0=/^usemtl /,k0=/^usemap /,vl=/\s+/,yl=new I,Ur=new I,Ml=new I,El=new I,Be=new I,Ts=new Pt;function z0(){const s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,r=this.object.geometry.vertices;r.push(i[t+0],i[t+1],i[t+2]),r.push(i[e+0],i[e+1],i[e+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,r=this.object.geometry.normals;r.push(i[t+0],i[t+1],i[t+2]),r.push(i[e+0],i[e+1],i[e+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,r=this.object.geometry.normals;yl.fromArray(i,t),Ur.fromArray(i,e),Ml.fromArray(i,n),Be.subVectors(Ml,Ur),El.subVectors(yl,Ur),Be.cross(El),Be.normalize(),r.push(Be.x,Be.y,Be.z),r.push(Be.x,Be.y,Be.z),r.push(Be.x,Be.y,Be.z)},addColor:function(t,e,n){const i=this.colors,r=this.object.geometry.colors;i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,r=this.object.geometry.uvs;r.push(i[t+0],i[t+1]),r.push(i[e+0],i[e+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,r,o,a,l,c){const h=this.vertices.length;let d=this.parseVertexIndex(t,h),u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(d,u,f),this.addColor(d,u,f),a!==void 0&&a!==""){const g=this.normals.length;d=this.parseNormalIndex(a,g),u=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(d,u,f)}else this.addFaceNormal(d,u,f);if(i!==void 0&&i!==""){const g=this.uvs.length;d=this.parseUVIndex(i,g),u=this.parseUVIndex(r,g),f=this.parseUVIndex(o,g),this.addUV(d,u,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let r=0,o=t.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,o=e.length;r<o;r++)this.addUVLine(this.parseUVIndex(e[r],i))}};return s.startObject("",!1),s}class V0 extends Zs{constructor(t){super(t),this.materials=null}load(t,e,n,i){const r=this,o=new Lc(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new z0;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const d=c.split(vl);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Ts.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Ee),e.colors.push(Ts.r,Ts.g,Ts.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(h==="f"){const u=c.slice(1).trim().split(vl),f=[];for(let A=0,p=u.length;A<p;A++){const m=u[A];if(m.length>0){const y=m.split("/");f.push(y)}}const g=f[0];for(let A=1,p=f.length-1;A<p;A++){const m=f[A],y=f[A+1];e.addFace(g[0],m[0],y[0],g[1],m[1],y[1],g[2],m[2],y[2])}}else if(h==="l"){const d=c.substring(1).trim().split(" ");let u=[];const f=[];if(c.indexOf("/")===-1)u=d;else for(let g=0,A=d.length;g<A;g++){const p=d[g].split("/");p[0]!==""&&u.push(p[0]),p[1]!==""&&f.push(p[1])}e.addLineGeometry(u,f)}else if(h==="p"){const u=c.slice(1).trim().split(" ");e.addPointGeometry(u)}else if((i=N0.exec(c))!==null){const d=(" "+i[0].slice(1).trim()).slice(1);e.startObject(d)}else if(O0.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(B0.test(c))e.materialLibraries.push(c.substring(7).trim());else if(k0.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const u=i[1].trim().toLowerCase();e.object.smooth=u!=="0"&&u!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const r=new $e;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],h=c.geometry,d=c.materials,u=h.type==="Line",f=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const A=new de;A.setAttribute("position",new _e(h.vertices,3)),h.normals.length>0&&A.setAttribute("normal",new _e(h.normals,3)),h.colors.length>0&&(g=!0,A.setAttribute("color",new _e(h.colors,3))),h.hasUVIndices===!0&&A.setAttribute("uv",new _e(h.uvs,2));const p=[];for(let y=0,v=d.length;y<v;y++){const _=d[y],T=_.name+"_"+_.smooth+"_"+g;let b=e.materials[T];if(this.materials!==null){if(b=this.materials.create(_.name),u&&b&&!(b instanceof gi)){const w=new gi;en.prototype.copy.call(w,b),w.color.copy(b.color),b=w}else if(f&&b&&!(b instanceof Bi)){const w=new Bi({size:10,sizeAttenuation:!1});en.prototype.copy.call(w,b),w.color.copy(b.color),w.map=b.map,b=w}}b===void 0&&(u?b=new gi:f?b=new Bi({size:1,sizeAttenuation:!1}):b=new Lg,b.name=_.name,b.flatShading=!_.smooth,b.vertexColors=g,e.materials[T]=b),p.push(b)}let m;if(p.length>1){for(let y=0,v=d.length;y<v;y++){const _=d[y];A.addGroup(_.groupStart,_.groupCount,y)}u?m=new Gs(A,p):f?m=new Tr(A,p):m=new xe(A,p)}else u?m=new Gs(A,p[0]):f?m=new Tr(A,p[0]):m=new xe(A,p[0]);m.name=c.name,r.add(m)}else if(e.vertices.length>0){const a=new Bi({size:1,sizeAttenuation:!1}),l=new de;l.setAttribute("position",new _e(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new _e(e.colors,3)),a.vertexColors=!0);const c=new Tr(l,a);r.add(c)}return r}}class H0 extends Zs{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Lc(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){function e(c){const h=new DataView(c),d=32/8*3+32/8*3*3+16/8,u=h.getUint32(80,!0);if(80+32/8+u*d===h.byteLength)return!0;const g=[115,111,108,105,100];for(let A=0;A<5;A++)if(n(g,h,A))return!1;return!0}function n(c,h,d){for(let u=0,f=c.length;u<f;u++)if(c[u]!==h.getUint8(d+u))return!1;return!0}function i(c){const h=new DataView(c),d=h.getUint32(80,!0);let u,f,g,A=!1,p,m,y,v,_;for(let R=0;R<70;R++)h.getUint32(R,!1)==1129270351&&h.getUint8(R+4)==82&&h.getUint8(R+5)==61&&(A=!0,p=new Float32Array(d*3*3),m=h.getUint8(R+6)/255,y=h.getUint8(R+7)/255,v=h.getUint8(R+8)/255,_=h.getUint8(R+9)/255);const T=84,b=12*4+2,w=new de,P=new Float32Array(d*3*3),M=new Float32Array(d*3*3),x=new Pt;for(let R=0;R<d;R++){const O=T+R*b,N=h.getFloat32(O,!0),G=h.getFloat32(O+4,!0),k=h.getFloat32(O+8,!0);if(A){const H=h.getUint16(O+48,!0);H&32768?(u=m,f=y,g=v):(u=(H&31)/31,f=(H>>5&31)/31,g=(H>>10&31)/31)}for(let H=1;H<=3;H++){const z=O+H*12,B=R*3*3+(H-1)*3;P[B]=h.getFloat32(z,!0),P[B+1]=h.getFloat32(z+4,!0),P[B+2]=h.getFloat32(z+8,!0),M[B]=N,M[B+1]=G,M[B+2]=k,A&&(x.setRGB(u,f,g,Ee),p[B]=x.r,p[B+1]=x.g,p[B+2]=x.b)}}return w.setAttribute("position",new $t(P,3)),w.setAttribute("normal",new $t(M,3)),A&&(w.setAttribute("color",new $t(p,3)),w.hasColors=!0,w.alpha=_),w}function r(c){const h=new de,d=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let g=0;const A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+A+A+A,"g"),m=new RegExp("normal"+A+A+A,"g"),y=[],v=[],_=[],T=new I;let b,w=0,P=0,M=0;for(;(b=d.exec(c))!==null;){P=M;const x=b[0],R=(b=f.exec(x))!==null?b[1]:"";for(_.push(R);(b=u.exec(x))!==null;){let G=0,k=0;const H=b[0];for(;(b=m.exec(H))!==null;)T.x=parseFloat(b[1]),T.y=parseFloat(b[2]),T.z=parseFloat(b[3]),k++;for(;(b=p.exec(H))!==null;)y.push(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3])),v.push(T.x,T.y,T.z),G++,M++;k!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),G!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const O=P,N=M-P;h.userData.groupNames=_,h.addGroup(O,N,w),w++}return h.setAttribute("position",new _e(y,3)),h.setAttribute("normal",new _e(v,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d)&255;return h.buffer||h}else return c}const l=a(t);return e(l)?i(l):r(o(t))}}class Cs{static async parseCADFile(t,e){const n=e.toLowerCase().replace(".","");if(n==="obj")return this.parseOBJ(typeof t=="string"?t:new TextDecoder().decode(t));if(n==="stl")return this.parseSTL(t);if(n==="step"||n==="stp")return this.parseSTEP(typeof t=="string"?t:new TextDecoder().decode(t));throw new Error(`Unsupported CAD file extension: .${n}`)}static parseOBJ(t){const n=new V0().parse(t);return this.extractFromThreeGroup(n)}static parseSTL(t){const n=new H0().parse(t),i=new xe(n),r=new $e;return r.add(i),this.extractFromThreeGroup(r)}static parseSTEP(t){const e=[...t.matchAll(/#(\d+)\s*=\s*CARTESIAN_POINT\s*\(\s*'[^']*'\s*,\s*\(\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*,\s*([-\d.eE+]+)\s*\)\s*\)/gi)];if(e.length===0)throw new Error("STEP file parsing: No CARTESIAN_POINT entities found in STEP file.");const n=new Map;e.forEach(r=>{const o=parseInt(r[1],10),a=parseFloat(r[2]),l=parseFloat(r[3]),c=parseFloat(r[4]);n.set(o,[a,l,c])});const i=Array.from(n.values());if(i.length<4)throw new Error("STEP file contains insufficient 3D geometry points.");return this.createBoxMeshFromPoints(i)}static createBoxMeshFromPoints(t){let e=1/0,n=-1/0,i=1/0,r=-1/0,o=1/0,a=-1/0;t.forEach(d=>{e=Math.min(e,d[0]),n=Math.max(n,d[0]),i=Math.min(i,d[1]),r=Math.max(r,d[1]),o=Math.min(o,d[2]),a=Math.max(a,d[2])});const l=new bi(n-e,r-i,a-o);l.translate((e+n)/2,(i+r)/2,(o+a)/2);const c=new xe(l),h=new $e;return h.add(c),this.extractFromThreeGroup(h)}static extractFromThreeGroup(t,e=!0){const n=[],i=[],r=new Map,o=(a,l,c,h=1e-4)=>{let d=a,u=l,f=c;e&&(d=a,u=c,f=-l);const g=Math.round(d/h)*h,A=Math.round(u/h)*h,p=Math.round(f/h)*h,m=`${g},${A},${p}`;if(r.has(m))return r.get(m);const y=n.length;return n.push([d,u,f]),r.set(m,y),y};return t.traverse(a=>{if(a.isMesh&&a.geometry){const l=a.geometry.isBufferGeometry?a.geometry:new de().fromGeometry(a.geometry),c=l.attributes.position,h=l.index;a.updateMatrixWorld(!0);const d=a.matrixWorld,u=(f,g,A)=>{const p=new I().fromBufferAttribute(c,f).applyMatrix4(d),m=new I().fromBufferAttribute(c,g).applyMatrix4(d),y=new I().fromBufferAttribute(c,A).applyMatrix4(d),v=o(p.x,p.y,p.z),_=o(m.x,m.y,m.z),T=o(y.x,y.y,y.z);v!==_&&_!==T&&v!==T&&i.push([v,_,T])};if(h)for(let f=0;f<h.count;f+=3)u(h.getX(f),h.getX(f+1),h.getX(f+2));else for(let f=0;f<c.count;f+=3)u(f,f+1,f+2)}}),{vertices:n,triangles:i}}static segmentConnectedTriangleBodies(t){const{vertices:e,triangles:n}=t;if(!n||n.length===0)return[];const i=new Map;n.forEach((l,c)=>{for(let h=0;h<3;h++){const d=Math.min(l[h],l[(h+1)%3]),u=Math.max(l[h],l[(h+1)%3]),f=`${d}-${u}`;i.has(f)||i.set(f,[]),i.get(f).push(c)}});const r=Array.from({length:n.length},()=>[]);i.forEach(l=>{for(let c=0;c<l.length;c++)for(let h=c+1;h<l.length;h++)r[l[c]].push(l[h]),r[l[h]].push(l[c])});const o=new Uint8Array(n.length),a=[];for(let l=0;l<n.length;l++){if(o[l])continue;const c=[],h=[l];for(o[l]=1;h.length>0;){const g=h.shift();c.push(g);for(const A of r[g])o[A]||(o[A]=1,h.push(A))}const d=new Map,u=[],f=[];c.forEach(g=>{const p=n[g].map(m=>{if(d.has(m))return d.get(m);const y=u.length;return u.push(e[m]),d.set(m,y),y});f.push(p)}),a.push({vertices:u,triangles:f})}return a}static extractMultiBodyPlanarFaces(t,e=1e-4){const n=this.segmentConnectedTriangleBodies(t);if(n.length===0)throw new Error("Invalid CAD data: no valid 3D geometry found.");const i=[];if(n.forEach((r,o)=>{try{const a=this.extractSingleBodyPlanarFaces(r,e);if(a.facesVertices.length>0){let l=1/0,c=1/0,h=1/0,d=-1/0,u=-1/0,f=-1/0;a.vertices.forEach(p=>{l=Math.min(l,p[0]),d=Math.max(d,p[0]),c=Math.min(c,p[1]),u=Math.max(u,p[1]),h=Math.min(h,p[2]),f=Math.max(f,p[2])});const g=[(l+d)/2,(c+u)/2,(h+f)/2],A=a.facesVertices.reduce((p,m)=>p+this.computeFaceArea(a.vertices,m),0);i.push({id:`part_${o}`,name:n.length>1?`Component ${o+1}`:"Main Body",vertices:a.vertices,facesVertices:a.facesVertices,bbox:{min:[l,c,h],max:[d,u,f]},center:g,area:A})}}catch(a){console.warn(`[CADParser] Warning extracting body ${o}:`,a.message)}}),i.length===0)throw new Error("Could not extract any valid orthogonal planar faces from the CAD model.");return console.log(`[CADParser] Extracted ${i.length} component(s) from CAD model.`),{isAssembly:i.length>1,components:i}}static extractSingleBodyPlanarFaces(t,e=1e-4){const{vertices:n,triangles:i}=t;if(n.length===0||i.length===0)throw new Error("Invalid CAD data: empty vertices or triangles.");const r=i.map(d=>{const u=new I(...n[d[0]]),f=new I(...n[d[1]]),g=new I(...n[d[2]]),A=new I().subVectors(f,u),p=new I().subVectors(g,u),m=new I().crossVectors(A,p).normalize(),y=Math.abs(m.x),v=Math.abs(m.y),_=Math.abs(m.z),T=Math.abs(y-1)<e&&v<e&&_<e,b=Math.abs(v-1)<e&&y<e&&_<e,w=Math.abs(_-1)<e&&y<e&&v<e;if(!T&&!b&&!w)throw new Error(`Non-orthogonal face detected (Normal: [${m.x.toFixed(3)}, ${m.y.toFixed(3)}, ${m.z.toFixed(3)}]). FOLDNet CAD import requires 3D orthogonal box geometries aligned to principal axes.`);let P=0,M=0,x=0;T&&(P=Math.sign(m.x)||1),b&&(M=Math.sign(m.y)||1),w&&(x=Math.sign(m.z)||1);const R=new I(P,M,x),O=R.dot(u),N=`${P},${M},${x}:${(Math.round(O/e)*e).toFixed(4)}`;return{tri:d,normal:R,dist:O,planeKey:N}}),o=new Map;r.forEach(d=>{o.has(d.planeKey)||o.set(d.planeKey,[]),o.get(d.planeKey).push(d.tri)});const a=[];o.forEach((d,u)=>{const f=new Map;d.forEach(y=>{for(let v=0;v<3;v++){const _=y[v],T=y[(v+1)%3],b=`${_}->${T}`,w=`${T}->${_}`;f.has(w)?f.delete(w):f.set(b,[_,T])}});const g=Array.from(f.values());if(g.length<3)return;const A=new Map;g.forEach(([y,v])=>A.set(y,v));const p=new Set,m=[];g.forEach(([y])=>{if(p.has(y))return;const v=[];let _=y;for(;_!==void 0&&!p.has(_);)p.add(_),v.push(_),_=A.get(_);v.length>=3&&m.push(v)}),m.forEach(y=>a.push(y))});const l=this.filterLargestConnectedComponent(n,a),{vertices:c,facesVertices:h}=this.subdivideNonConvexFaces(n,l);return{vertices:c,facesVertices:h}}static extractOrthogonalPlanarFaces(t,e=1e-4){const n=this.extractMultiBodyPlanarFaces(t,e),i=n.components.reduce((r,o)=>o.area>r.area?o:r,n.components[0]);return{vertices:i.vertices,facesVertices:i.facesVertices}}static computePolygonNormal(t,e){let n=0,i=0,r=0;const o=e.length;for(let l=0;l<o;l++){const c=t[e[l]],h=t[e[(l+1)%o]];n+=(c[1]-h[1])*(c[2]+h[2]),i+=(c[2]-h[2])*(c[0]+h[0]),r+=(c[0]-h[0])*(c[1]+h[1])}const a=Math.hypot(n,i,r);return a>1e-6?new I(n/a,i/a,r/a):new I(0,0,1)}static subdivideNonConvexFaces(t,e){const n=new Set,i=new Set,r=new Set,o=1e-4,a=p=>Math.round(p/o)*o;for(const p of e)for(const m of p){const y=t[m];n.add(a(y[0])),i.add(a(y[1])),r.add(a(y[2]))}const l=[...n].sort((p,m)=>p-m),c=[...i].sort((p,m)=>p-m),h=[...r].sort((p,m)=>p-m),d=t.map(p=>[a(p[0]),a(p[1]),a(p[2])]),u=new Map;d.forEach((p,m)=>{u.set(`${p[0]},${p[1]},${p[2]}`,m)});const f=(p,m,y)=>{const v=a(p),_=a(m),T=a(y),b=`${v},${_},${T}`;if(u.has(b))return u.get(b);const w=d.length;return d.push([v,_,T]),u.set(b,w),w},g=[],A=[l,c,h];for(const p of e){const m=this.computePolygonNormal(t,p),y=Math.abs(m.x),v=Math.abs(m.y),_=Math.abs(m.z);let T,b,w;y>=v&&y>=_?(T=0,b=1,w=2):v>=y&&v>=_?(T=1,b=0,w=2):(T=2,b=0,w=1);const P=a(t[p[0]][T]),M=p.map(z=>{const B=t[z];return[B[b],B[w]]});let x=1/0,R=-1/0,O=1/0,N=-1/0;for(const z of M)z[0]<x&&(x=z[0]),z[0]>R&&(R=z[0]),z[1]<O&&(O=z[1]),z[1]>N&&(N=z[1]);const G=A[b].filter(z=>z>=x-o&&z<=R+o),k=A[w].filter(z=>z>=O-o&&z<=N+o);if(G.length<2||k.length<2){g.push(p);continue}let H=0;for(let z=0;z<G.length-1;z++)for(let B=0;B<k.length-1;B++){const J=G[z],it=G[z+1],ut=k[B],Tt=k[B+1],Ht=(J+it)/2,j=(ut+Tt)/2;if(this.isPointInPolygon2D(Ht,j,M)){const ot=[[J,ut],[it,ut],[it,Tt],[J,Tt]].map(([Gt,D])=>{const ie=[0,0,0];return ie[b]=Gt,ie[w]=D,ie[T]=P,f(ie[0],ie[1],ie[2])}),st=new I(...d[ot[0]]),At=new I(...d[ot[1]]),bt=new I(...d[ot[2]]),tt=new I().subVectors(At,st),ft=new I().subVectors(bt,st);new I().crossVectors(tt,ft).dot(m)<0&&ot.reverse(),g.push(ot),H++}}H===0&&g.push(p)}return console.log(`[CADParser] Grid refinement: ${e.length} faces → ${g.length} rectangular cells, ${d.length} vertices. Grid: X=${l.length} Y=${c.length} Z=${h.length} lines.`),{vertices:d,facesVertices:g}}static isPointInPolygon2D(t,e,n){let i=!1;const r=n.length;for(let o=0,a=r-1;o<r;a=o++){const l=n[o][0],c=n[o][1],h=n[a][0],d=n[a][1];c>e!=d>e&&t<(h-l)*(e-c)/(d-c+1e-9)+l&&(i=!i)}return i}static filterLargestConnectedComponent(t,e){if(e.length<=1)return e;const n=new Map;e.forEach((h,d)=>{const u=h.length;for(let f=0;f<u;f++){const g=h[f],A=h[(f+1)%u],p=`${Math.min(g,A)}-${Math.max(g,A)}`;n.has(p)||n.set(p,[]),n.get(p).push(d)}});const i=e.length,r=Array.from({length:i},()=>new Set);n.forEach(h=>{if(h.length>=2)for(let d=0;d<h.length;d++)for(let u=d+1;u<h.length;u++)r[h[d]].add(h[u]),r[h[u]].add(h[d])});const o=new Array(i).fill(!1),a=[];for(let h=0;h<i;h++){if(o[h])continue;const d=[],u=[h];for(o[h]=!0;u.length>0;){const f=u.shift();d.push(f),r[f].forEach(g=>{o[g]||(o[g]=!0,u.push(g))})}a.push(d)}if(a.length===1)return e;const l=a.map(h=>h.reduce((d,u)=>d+this.computeFaceArea(t,e[u]),0)),c=l.indexOf(Math.max(...l));return console.log(`[CADParser] Found ${a.length} disconnected surface components. Keeping outer surface (${a[c].length} faces, area ≈ ${l[c].toFixed(1)}).`),a[c].map(h=>e[h])}static computeFaceArea(t,e){if(e.length<3)return 0;const n=new I(...t[e[0]]);let i=0;for(let r=1;r<e.length-1;r++){const o=new I(...t[e[r]]),a=new I(...t[e[r+1]]);i+=new I().crossVectors(new I().subVectors(o,n),new I().subVectors(a,n)).length()/2}return i}}class ai{static createPRNG(t){let e=t>>>0||1;return function(){e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}static unfoldToFoldJSON(t,e,n=1,i=500,r={}){if(e.length===0)throw new Error("Unfolder: No 3D faces provided.");const o=typeof n=="function"?n:this.createPRNG(n);console.log(`[NetUnfolder] Unfolding ${e.length} faces, ${t.length} vertices with seed ${typeof n=="number"?n:"custom"}.`);const a=this.buildDualGraph(t,e);console.log(`[NetUnfolder] Dual graph built: ${a.edges.length} edges between ${a.numFaces} faces.`);let l=null;for(let c=0;c<i;c++){const h=this.computeSpanningTree(a.numFaces,a.edges,o),d=c%a.numFaces,u=this.unrollTree2D(t,e,a,h,d);if(u.success){l={...u,rootFace:d},console.log(`[NetUnfolder] Success on attempt ${c+1}. Root face: ${d}`);break}}if(!l)throw new Error(`Unfolder: Could not find a collision-free 2D unrolling after ${i} randomized attempts.`);return this.buildFoldSpecJSON(t,e,a,l,r)}static unfoldAssemblyToFold(t,e=1,n=500){const i=[...t].map((h,d)=>({comp:h,originalIdx:d}));i.sort((h,d)=>h.comp.center[0]-d.comp.center[0]);const r=t.reduce((h,d)=>h+(d.center?d.center[0]:0),0)/(t.length||1),o=[];i.forEach(({comp:h,originalIdx:d})=>{const u=typeof e=="number"?e+d*7919:e,f=this.unfoldToFoldJSON(h.vertices,h.facesVertices,u,n,{componentId:h.id,name:h.name,bbox:h.bbox,center:h.center,area:h.area});f.file_title=h.name;let g=1/0,A=-1/0,p=1/0,m=-1/0;f.vertices_coords.forEach(b=>{b[0]<g&&(g=b[0]),b[0]>A&&(A=b[0]),b[1]<p&&(p=b[1]),b[1]>m&&(m=b[1])});const y=A-g,v=m-p,_=(p+m)/2,T=Math.max(Math.max(y,v)*.1,8);o.push({comp:h,partFold:f,minX:g,maxX:A,minY:p,maxY:m,partW:y,partH:v,partMidY:_,gap:T})});const a=o.reduce((h,d,u)=>h+d.partW+(u<o.length-1?d.gap:0),0);let l=r-a/2;const c=[];return o.forEach(h=>{const d=l-h.minX,u=-h.partMidY;h.partFold.vertices_coords.forEach(f=>{f[0]=Math.round((f[0]+d)*1e3)/1e3,f[1]=Math.round((f[1]+u)*1e3)/1e3}),l+=h.partW+h.gap,c.push({id:h.comp.id,name:h.comp.name,foldData:h.partFold,bbox:h.comp.bbox,center:h.comp.center})}),{isAssembly:c.length>1,title:"Multi-Part CAD Assembly",parts:c}}static buildFoldSpecJSON(t,e,n,i,r={}){const{facePositions2D:o,treeEdges:a}=i,l=[],c=new Map,h=(v,_,T=1e-5)=>{const b=Math.round(v/T)*T,w=Math.round(_/T)*T,P=`${b.toFixed(5)},${w.toFixed(5)}`;if(c.has(P))return c.get(P);const M=l.length;return l.push([b,w]),c.set(P,M),M},d=e.map((v,_)=>o[_].map(b=>h(b[0],b[1]))),u=new Map;a.forEach(v=>{const _=e[v.f0],T=d[v.f0],b=_.indexOf(v.v1),w=_.indexOf(v.v2);if(b>=0&&w>=0){const P=T[b],M=T[w],x=`${Math.min(P,M)}-${Math.max(P,M)}`;u.set(x,v)}});const f=new Map,g=[];d.forEach(v=>{const _=v.length;for(let T=0;T<_;T++){const b=v[T],w=v[(T+1)%_],P=`${Math.min(b,w)}-${Math.max(b,w)}`;f.has(P)?f.get(P).count+=1:(g.push([Math.min(b,w),Math.max(b,w)]),f.set(P,{count:1}))}});const A=[],p=[];g.forEach(v=>{const _=`${v[0]}-${v[1]}`;if(f.get(_).count===1)A.push("B"),p.push(0);else{const b=u.get(_);if(b){const w=b.foldAngleDeg;let P="F";w<0?P="M":w>0&&(P="V"),A.push(P),p.push(w)}else A.push("C"),p.push(0)}});const m=i.rootFace!==void 0?i.rootFace:0,y=(e[m]||[]).map(v=>t[v]);return{file_spec:1.1,file_title:r.name||"Unfolded Box Net",file_creator:"FOLDNet CAD Unfolder",vertices_coords:l,faces_vertices:d,edges_vertices:g,edges_assignment:A,edges_foldAngle:p,_assembly:{componentId:r.componentId||"part_0",name:r.name||"Component",rootFaceIndex:m,target3DOrigin:r.center||[0,0,0],target3DBBox:r.bbox||null,rootFace3DVertices:y}}}static buildDualGraph(t,e){const n=e.length,i=new Map,r=e.map(l=>{let c=0,h=0,d=0;const u=l.length;for(let g=0;g<u;g++){const A=t[l[g]],p=t[l[(g+1)%u]];c+=(A[1]-p[1])*(A[2]+p[2]),h+=(A[2]-p[2])*(A[0]+p[0]),d+=(A[0]-p[0])*(A[1]+p[1])}const f=Math.hypot(c,h,d);return f>1e-6?new I(c/f,h/f,d/f):new I(0,0,1)});e.forEach((l,c)=>{const h=l.length;for(let d=0;d<h;d++){const u=l[d],f=l[(d+1)%h],g=Math.min(u,f),A=Math.max(u,f),p=`${g}-${A}`;i.has(p)||i.set(p,[]),i.get(p).push({faceIndex:c,v1:u,v2:f})}});const o=[],a=Array.from({length:n},()=>[]);return i.forEach((l,c)=>{if(l.length===2){const h=l[0],d=l[1],u=r[h.faceIndex],f=r[d.faceIndex],g=new I(...t[h.v1]),A=new I(...t[h.v2]),p=new I().subVectors(A,g).normalize(),y=new I().crossVectors(u,p).normalize().dot(f);let v=0;y<-1e-4?v=90:y>1e-4&&(v=-90);const _={f0:h.faceIndex,f1:d.faceIndex,v1:h.v1,v2:h.v2,edgeKey:c,foldAngleDeg:v};o.push(_),a[h.faceIndex].push({neighbor:d.faceIndex,edge:_}),a[d.faceIndex].push({neighbor:h.faceIndex,edge:_})}}),{numFaces:n,edges:o,adjacency:a,faceNormals:r}}static computeSpanningTree(t,e,n=Math.random){const i=n||Math.random,r=e.map(c=>{const d=Math.abs(c.foldAngleDeg)<1e-4?i()*.01:.1+i()*.9;return{...c,weight:d}});r.sort((c,h)=>c.weight-h.weight);const o=Array.from({length:t},(c,h)=>h),a=c=>o[c]===c?c:(o[c]=a(o[c]),o[c]),l=[];for(const c of r){const h=a(c.f0),d=a(c.f1);if(h!==d&&(o[h]=d,l.push(c),l.length===t-1))break}return l}static unrollTree2D(t,e,n,i,r=0){const o=n.numFaces,a=Array.from({length:o},()=>[]);i.forEach(u=>{a[u.f0].push({neighbor:u.f1,edge:u}),a[u.f1].push({neighbor:u.f0,edge:u})});const l=Array.from({length:o},()=>null),c=e[r].map(u=>t[u]);l[r]=this.projectFaceToLocal2D(c,n.faceNormals[r]);const h=new Array(o).fill(!1);h[r]=!0;const d=[r];for(;d.length>0;){const u=d.shift(),f=l[u];for(const g of a[u]){const A=g.neighbor;if(!h[A]){h[A]=!0;const p=g.edge,m=e[u],y=e[A],v=f[m.indexOf(p.v1)],_=f[m.indexOf(p.v2)];if(!v||!_)return{success:!1};const T=y.map(x=>t[x]),b=this.projectFaceToLocal2D(T,n.faceNormals[A]),w=b[y.indexOf(p.v1)],P=b[y.indexOf(p.v2)];if(!w||!P)return{success:!1};const M=this.transformPoints2D(b,w,P,v,_);l[A]=M;for(let x=0;x<o;x++)if(h[x]&&x!==A&&l[x]&&this.doFacesOverlap2D(M,l[x]))return{success:!1};d.push(A)}}}return{success:!0,facePositions2D:l,treeEdges:i}}static projectFaceToLocal2D(t,e){const n=new I(...t[0]),i=new I(...t[1]),r=new I().subVectors(i,n).normalize(),o=new I().crossVectors(e,r).normalize();return t.map(a=>{const l=new I(...a),c=new I().subVectors(l,n);return[c.dot(r),c.dot(o)]})}static transformPoints2D(t,e,n,i,r){const o=n[0]-e[0],a=n[1]-e[1],l=r[0]-i[0],c=r[1]-i[1],h=Math.atan2(a,o),u=Math.atan2(c,l)-h,f=Math.cos(u),g=Math.sin(u);return t.map(A=>{const p=(A[0]-e[0])*f-(A[1]-e[1])*g+i[0],m=(A[0]-e[0])*g+(A[1]-e[1])*f+i[1];return[p,m]})}static doFacesOverlap2D(t,e,n=.001){let i=0,r=0,o=0,a=0;if(t.forEach(c=>{i+=c[0],r+=c[1]}),e.forEach(c=>{o+=c[0],a+=c[1]}),Math.hypot(i/t.length-o/e.length,r/t.length-a/e.length)<n)return!0;const l=[t,e];for(let c=0;c<2;c++){const h=l[c],d=h.length;for(let u=0;u<d;u++){const f=h[u],g=h[(u+1)%d],A=[g[0]-f[0],g[1]-f[1]],p=[-A[1],A[0]],m=Math.hypot(p[0],p[1]);if(m<1e-9)continue;const y=p[0]/m,v=p[1]/m;let _=1/0,T=-1/0;t.forEach(P=>{const M=P[0]*y+P[1]*v;M<_&&(_=M),M>T&&(T=M)});let b=1/0,w=-1/0;if(e.forEach(P=>{const M=P[0]*y+P[1]*v;M<b&&(b=M),M>w&&(w=M)}),T<=b+n||w<=_+n)return!1}}return!0}}class ge{static build3DAdjacency(t,e=null,n=null){const i=t.facesVertices.length,r=Array.from({length:i},()=>[]),o=e?e.evaluateTransforms(1):null,a=t.vertices,l=t.facesVertices.map((f,g)=>{const A=o?o[g]:new Ut;return f.map(p=>{const m=a[p],y=new I(m[0],m[1],m[2]||0);return y.applyMatrix4(A),y})}),c=l.map(f=>{if(f.length<3)return new I(0,0,1);const g=f[0],A=f[1],p=f[2],m=new I().subVectors(p,A),y=new I().subVectors(g,A);return m.cross(y),m.lengthSq()>1e-6?m.normalize():m.set(0,0,1),m}),h=[];l.forEach((f,g)=>{const A=f.length;for(let p=0;p<A;p++){const m=f[p],y=f[(p+1)%A],v=new I().addVectors(m,y).multiplyScalar(.5),_=m.distanceTo(y);h.push({faceIndex:g,edgeIndexInFace:p,p1:m,p2:y,mid:v,segLen:_,v1_2D:t.facesVertices[g][p],v2_2D:t.facesVertices[g][(p+1)%A]})}});const d=.01,u=h.length;for(let f=0;f<u;f++){const g=h[f];for(let A=f+1;A<u;A++){const p=h[A];if(g.faceIndex!==p.faceIndex&&g.mid.distanceTo(p.mid)<d&&Math.abs(g.segLen-p.segLen)<d){const m=g.p1.distanceTo(p.p2)+g.p2.distanceTo(p.p1),y=g.p1.distanceTo(p.p1)+g.p2.distanceTo(p.p2);if(m<d*2||y<d*2){const v=m<=y,_=c[g.faceIndex],T=c[p.faceIndex],b=_.dot(T)>.98;r[g.faceIndex].push({neighborFace:p.faceIndex,edgeIndexInFace:g.edgeIndexInFace,v1_2D:g.v1_2D,v2_2D:g.v2_2D,neighborEdgeIndex:p.edgeIndexInFace,isOpposite:v,isCoPlanar:b}),r[p.faceIndex].push({neighborFace:g.faceIndex,edgeIndexInFace:p.edgeIndexInFace,v1_2D:p.v1_2D,v2_2D:p.v2_2D,neighborEdgeIndex:g.edgeIndexInFace,isOpposite:v,isCoPlanar:b})}}}}return r}static buildNeighborCluster(t,e,n,i=1/0,r=null,o=null,a=null){const l=e.vertices,h=e.facesVertices[t].map(x=>l[x]);let d=0,u=0;h.forEach(x=>{d+=x[0],u+=x[1]}),d/=h.length,u/=h.length;let f=0;if(r){const x=r.evaluateTransforms(1),R=x?x[t]||new Ut:new Ut,O=o?new Ut().multiplyMatrices(o,R):R,N=new I(d,u,0).applyMatrix4(O),G=new I(d+1,u,0).applyMatrix4(O).sub(N).normalize(),k=new I(d,u+1,0).applyMatrix4(O).sub(N).normalize(),H=new I().crossVectors(G,k).normalize();let z;a?z=a:Math.abs(H.y)>=.85?z=H.y>0?new I(0,0,-1):new I(0,0,1):z=new I(0,1,0);const B=z.dot(G),J=z.dot(k),it=Math.PI/2-Math.atan2(J,B);f=Math.round(it/(Math.PI/2))*(Math.PI/2)}const g=Math.round(Math.cos(f)),A=Math.round(Math.sin(f)),p=h.map(x=>{const R=x[0]-d,O=x[1]-u;return[Math.round((g*R-A*O)*1e3)/1e3,Math.round((A*R+g*O)*1e3)/1e3]}),m=[],y=[],v=new Map;let _=0;v.set(t,{branchId:-1,depth:0,tier:1}),m.push({faceIndex:t,isFocus:!0,polygon:p,origPolygon2D:h,branchId:-1,depth:0,tier:1,isCoPlanarWithFocus:!0,transformToNet:{tx:d,ty:u,rot:-f,scale:1},clusterToNet:ge.computeRigidAffine(p,h),netToCluster:ge.computeRigidAffine(h,p)});const T=[],b=x=>{T.push(x),T.sort((R,O)=>R.priority-O.priority)},w=e.facesVertices[t],P=w.length,M=n[t]||[];for(let x=0;x<P;x++){const R=M.find(it=>it.edgeIndexInFace===x),O=p[x],N=p[(x+1)%P],G=w[x],k=w[(x+1)%P],H=`${Math.min(G,k)}-${Math.max(G,k)}`,z=e.edgeLookup?e.edgeLookup.get(H):-1,B=z>=0&&e.edgesAssignment[z]||"C",J=B==="V"||B==="M"||B==="F";if(R){const it=R.neighborFace,Tt=e.facesVertices[it].map(ft=>l[ft]),Ht=R.isOpposite!==void 0?R.isOpposite:!0,j=this.alignNeighborFaceToEdge(Tt,R.neighborEdgeIndex,O,N,Ht),Q=this.computeOutwardNormal2D(p,x),ot=!!R.isCoPlanar,st=ot?1:2,At=ot?0+1*.1:100+1*10,bt=_++,tt=ot?null:Q;b({faceIndex:it,localPolygon:j,origPolygon2D:Tt,sharedEdgeIndex:x,entryEdgeIndex:R.neighborEdgeIndex,v1:G,v2:k,p1:O,p2:N,isFoldHinge:J,assignment:B,tier:st,depth:1,branchId:bt,rayDir:tt,priority:At})}else y.push({edgeIndex:x,v1:G,v2:k,p1:O,p2:N,isFoldHinge:J,assignment:B,hasNeighbor:!1,neighborFace:null})}for(;T.length>0;){const x=T.shift();if(v.has(x.faceIndex)||ge.checkPolygonOverlap(x.localPolygon,m)||(v.set(x.faceIndex,{branchId:x.branchId,depth:x.depth,tier:x.tier}),y.push({edgeIndex:x.sharedEdgeIndex,v1:x.v1,v2:x.v2,p1:x.p1,p2:x.p2,isFoldHinge:x.isFoldHinge,assignment:x.assignment,hasNeighbor:!0,neighborFace:x.faceIndex}),m.push({faceIndex:x.faceIndex,isFocus:!1,polygon:x.localPolygon,origPolygon2D:x.origPolygon2D,sharedEdgeIndex:x.sharedEdgeIndex,branchId:x.branchId,depth:x.depth,tier:x.tier,isCoPlanarWithFocus:x.tier===1,isFoldHinge:x.isFoldHinge,clusterToNet:ge.computeRigidAffine(x.localPolygon,x.origPolygon2D),netToCluster:ge.computeRigidAffine(x.origPolygon2D,x.localPolygon)}),x.depth>=i))continue;const R=x.faceIndex,O=e.facesVertices[R],N=O.length,G=n[R]||[];for(let k=0;k<N;k++){if(k===x.entryEdgeIndex)continue;const H=G.find(Ct=>Ct.edgeIndexInFace===k);if(!H)continue;const z=H.neighborFace;if(v.has(z))continue;const B=x.localPolygon[k],J=x.localPolygon[(k+1)%N],ut=e.facesVertices[z].map(Ct=>l[Ct]),Tt=H.isOpposite!==void 0?H.isOpposite:!0,Ht=this.alignNeighborFaceToEdge(ut,H.neighborEdgeIndex,B,J,Tt),j=O[k],Q=O[(k+1)%N],ot=`${Math.min(j,Q)}-${Math.max(j,Q)}`,st=e.edgeLookup?e.edgeLookup.get(ot):-1,At=st>=0&&e.edgesAssignment[st]||"C",bt=At==="V"||At==="M"||At==="F",tt=this.computeOutwardNormal2D(x.localPolygon,k),ft=x.depth+1;let St=3,Gt=200,D=tt,ie=x.branchId;if(H.isCoPlanar)x.tier===1?(St=1,Gt=0+ft*.1,D=null,ie=-1):(St=x.tier,Gt=x.priority+10,D=x.rayDir);else if(x.tier===1)St=2,Gt=100+ft*10,D=tt,ie=_++;else{const Ct=x.rayDir||tt,It=tt[0]*Ct[0]+tt[1]*Ct[1];(It>.4||k===(x.entryEdgeIndex+Math.floor(N/2))%N)&&x.tier===2?(St=2,Gt=100+ft*10+Math.max(0,(1-It)*5),D=x.rayDir):(St=3,Gt=200+ft*10+Math.max(0,(1-It)*20),D=tt)}b({faceIndex:z,localPolygon:Ht,origPolygon2D:ut,sharedEdgeIndex:k,entryEdgeIndex:H.neighborEdgeIndex,v1:j,v2:Q,p1:B,p2:J,isFoldHinge:bt,assignment:At,tier:St,depth:ft,branchId:ie,rayDir:D,priority:Gt})}}return{focusFaceIndex:t,clusterFaces:m,clusterEdges:y,center:[d,u]}}static computeOutwardNormal2D(t,e){const n=t.length,i=t[e],r=t[(e+1)%n],o=r[0]-i[0],a=r[1]-i[1],l=Math.hypot(o,a);if(l<1e-9)return[0,1];let c=0;for(let h=0;h<n;h++){const d=t[h],u=t[(h+1)%n];c+=d[0]*u[1]-u[0]*d[1]}return c>=0?[a/l,-o/l]:[-a/l,o/l]}static alignNeighborFaceToEdge(t,e,n,i,r=!0){const o=t.length,a=t[e],l=t[(e+1)%o],c=r?l:a,h=r?a:l,d=h[0]-c[0],u=h[1]-c[1],f=i[0]-n[0],g=i[1]-n[1],A=Math.atan2(u,d),m=Math.atan2(g,f)-A,y=Math.cos(m),v=Math.sin(m);return t.map(_=>{const T=(_[0]-c[0])*y-(_[1]-c[1])*v+n[0],b=(_[0]-c[0])*v+(_[1]-c[1])*y+n[1];return[T,b]})}static mapClusterPointToFaceUV(t,e){let n=1/0,i=-1/0,r=1/0,o=-1/0;e.forEach(c=>{c[0]<n&&(n=c[0]),c[0]>i&&(i=c[0]),c[1]<r&&(r=c[1]),c[1]>o&&(o=c[1])});const a=(t[0]-n)/(i-n||1),l=(t[1]-r)/(o-r||1);return[a,l]}static computeRigidAffine(t,e){const n=t[0],i=t[1],r=e[0],o=e[1],a=i[0]-n[0],l=i[1]-n[1],c=o[0]-r[0],h=o[1]-r[1],d=Math.hypot(a,l),u=Math.hypot(c,h),f=d>1e-9?u/d:1,g=Math.atan2(l,a),p=Math.atan2(h,c)-g,m=Math.cos(p)*f,y=Math.sin(p)*f;return{a:m,b:y,c:-y,d:m,e:r[0]-m*n[0]+y*n[1],f:r[1]-y*n[0]-m*n[1]}}static composeAffine(t,e){return{a:t.a*e.a+t.c*e.b,b:t.b*e.a+t.d*e.b,c:t.a*e.c+t.c*e.d,d:t.b*e.c+t.d*e.d,e:t.a*e.e+t.c*e.f+t.e,f:t.b*e.e+t.d*e.f+t.f}}static applyAffine(t,e,n){return{x:t.a*e+t.c*n+t.e,y:t.b*e+t.d*n+t.f}}static checkPolygonOverlap(t,e){let n=0,i=0;t.forEach(h=>{n+=h[0],i+=h[1]}),n/=t.length,i/=t.length;let r=1/0,o=-1/0,a=1/0,l=-1/0;t.forEach(h=>{r=Math.min(r,h[0]),o=Math.max(o,h[0]),a=Math.min(a,h[1]),l=Math.max(l,h[1])});const c=1e-4;for(const h of e){const d=h.polygon;let u=1/0,f=-1/0,g=1/0,A=-1/0,p=0,m=0;if(d.forEach(T=>{u=Math.min(u,T[0]),f=Math.max(f,T[0]),g=Math.min(g,T[1]),A=Math.max(A,T[1]),p+=T[0],m+=T[1]}),p/=d.length,m/=d.length,o<=u+c||r>=f-c||l<=g+c||a>=A-c)continue;if(Math.hypot(n-p,i-m)<.05*Math.min(o-r,l-a))return!0;const v=[[n,i]];t.forEach(T=>{v.push([n*.3+T[0]*.7,i*.3+T[1]*.7])});for(const T of v)if(this.isPointInsidePoly(T,d))return!0;const _=[[p,m]];d.forEach(T=>{_.push([p*.3+T[0]*.7,m*.3+T[1]*.7])});for(const T of _)if(this.isPointInsidePoly(T,t))return!0}return!1}static isPointInsidePoly(t,e){let n=!1;const i=e.length;for(let r=0,o=i-1;r<i;o=r++){const a=e[r][0],l=e[r][1],c=e[o][0],h=e[o][1];l>t[1]!=h>t[1]&&t[0]<(c-a)*(t[1]-l)/(h-l||1e-9)+a&&(n=!n)}return n}}class G0{constructor(t,e={}){this.container=t,this.assemblyManager=null,this.onSelectAssemblyPart=null,this.thumbnailStrip=null,this.foldData=null,this.kinematics=null,this.cadDualGraph=null,this.focusFaceIndex=0,this.faceAdjacency3D=[],this.currentCluster=null,this.partArtworksMap=new Map,this.currentPartIndex=0,this.faceArtworks=new Map,this.activeTool="rect",this.selectedElement=null,this.fillColor="#3b82f6",this.fontColor="#ffffff",this.activeColorTab="fill",this.textAlign="center",this.textValue="",this.activeStamp="fragile",this.selectedArtwork=null,this.showGrid=!0,this.snapEnabled=!0,this.overallScale=100,this.gridSize=2,this.standaloneFontSize=10,this.snapDistance=1.2,this.zoom=2,this.panX=0,this.panY=0,this.isPanning=!1,this.panStart={x:0,y:0},this.isDrawing=!1,this.drawStart=null,this.undoStack=[],this.redoStack=[],this.onTextureUpdate=e.onTextureUpdate||null,this.onFocusChange=e.onFocusChange||null,this.buildStudioLayout(),this.bindEvents()}buildStudioLayout(){this.container.innerHTML=`
      <div class="studio-wrapper">
        <!-- Top Toolbar -->
        <header class="studio-top-toolbar">
          <div class="header-left">
            <span class="cluster-badge">Neighbor Cluster Canvas</span>
            <span class="current-face-indicator">Focus Face: <strong id="lbl-focus-face">F0</strong></span>
          </div>

          <div class="header-center">
            <div class="zoom-indicator">
              <button id="btn-studio-zoom-out" class="btn-icon" title="Zoom Out (Scroll Down)">-</button>
              <span id="lbl-studio-zoom">200%</span>
              <button id="btn-studio-zoom-in" class="btn-icon" title="Zoom In (Scroll Up)">+</button>
              <button id="btn-studio-zoom-fit" class="btn-sm btn-secondary" title="Reset View">Fit</button>
            </div>
            <div class="snapping-toolbar-group" style="display: flex; gap: 4px; margin-left: 8px;">
              <button id="btn-studio-toggle-grid" class="btn btn-sm btn-secondary active" title="Toggle Grid (1/50th of assembly scale)"># Grid</button>
              <button id="btn-studio-toggle-snap" class="btn btn-sm btn-secondary active" title="Toggle Snap (Hold Ctrl while drawing to bypass)">🧲 Snap</button>
            </div>
          </div>

          <div class="header-right">
            <button id="btn-studio-toggle-preview" class="btn btn-primary btn-sm" title="Toggle Live 3D Fold Preview">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>3D Preview</span>
            </button>
          </div>
        </header>

        <!-- Studio Main Workspace -->
        <div class="studio-layout">
          <!-- Left Tool Palette Sidebar -->
          <aside class="studio-toolbar">
            <div class="tool-section">
              <span class="tool-section-title">Draw Tools</span>
              <div class="tool-btn-group">
                <button class="tool-btn" data-tool="select" title="Select / Move / Focus Face (V)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3l7 18 3-7 7-3L3 3z"></path>
                    <path d="M13 13l6 6"></path>
                  </svg>
                  <span>Select</span>
                </button>
                <button class="tool-btn" data-tool="fill" title="Face Fill / Paint Bucket (F)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 11L12 17l-7-7 7-7 4 4"></path>
                    <path d="M5 10l-2 2 7 7 2-2"></path>
                    <path d="M22 20a2 2 0 1 1-4 0c0-1.6 2-3 2-3s2 1.4 2 3z" fill="currentColor"></path>
                  </svg>
                  <span>Face Fill</span>
                </button>
                <button class="tool-btn active" data-tool="rect" title="Rectangle (R)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  </svg>
                  <span>Rectangle</span>
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

            <!-- Color Selection Tabs & Swatch Palette -->
            <div class="tool-section color-tabs-section">
              <span class="tool-section-title">Color Palette</span>
              <div class="color-tabs-header">
                <button type="button" class="color-tab-btn active" data-color-tab="fill" id="tab-btn-fill">
                  <span>Fill</span>
                  <div class="tab-swatch-wrapper" title="Click to custom pick Fill color">
                    <span class="tab-color-swatch" id="swatch-indicator-fill" style="background-color: ${this.fillColor};"></span>
                    <input type="color" id="studio-fill-color" class="hidden-color-input" value="${this.fillColor}" />
                  </div>
                </button>
                <button type="button" class="color-tab-btn" data-color-tab="font" id="tab-btn-font">
                  <span>Font</span>
                  <div class="tab-swatch-wrapper" title="Click to custom pick Font color">
                    <span class="tab-color-swatch" id="swatch-indicator-font" style="background-color: ${this.fontColor};"></span>
                    <input type="color" id="studio-font-color" class="hidden-color-input" value="${this.fontColor}" />
                  </div>
                </button>
              </div>

              <!-- Color Palette Container (stays open for active tab) -->
              <div class="color-palette-body">
                <div class="color-palette-grid" id="studio-color-palette"></div>
              </div>
            </div>

            <div class="tool-section text-options">
              <span class="tool-section-title">Text & Alignment</span>
              <input type="text" id="studio-text-input" class="text-input" value="" placeholder="Type text for element..." />
              <div class="text-align-group">
                <button type="button" class="align-btn" data-align="left" title="Align Left">⇤ Left</button>
                <button type="button" class="align-btn active" data-align="center" title="Align Center">↔ Center</button>
                <button type="button" class="align-btn" data-align="right" title="Align Right">⇥ Right</button>
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
              <rect id="studio-grid-rect" width="100%" height="100%" fill="url(#grid-pattern)" />
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
    `,this.svgElement=this.container.querySelector("#studio-svg-canvas"),this.rootGroup=this.container.querySelector("#cluster-root-group"),this.navSvg=this.container.querySelector("#navigator-svg");const t=this.container.querySelector("#studio-part-strip-container");t&&(this.thumbnailStrip=new Oc(t,{onSelectPart:e=>this.selectPart(e)}))}loadAssembly(t,e=null){if(this.assemblyManager=t,this.onSelectAssemblyPart=e,this.undoStack=[],this.redoStack=[],this.selectedArtwork=null,this.partArtworksMap.clear(),t&&Array.isArray(t.parts)&&t.parts.forEach((n,i)=>{if(n.faceArtworks&&n.faceArtworks.size>0)this.partArtworksMap.set(i,n.faceArtworks);else{const r=new Map;this.partArtworksMap.set(i,r),n.faceArtworks=r}}),t&&t.isAssembly){this.thumbnailStrip&&this.thumbnailStrip.update(t.parts,t.activePartIndex);const n=t.getActivePart();n&&this.loadModel(n.foldData,n.kinematics,null,t.activePartIndex)}else if(this.thumbnailStrip&&this.thumbnailStrip.update([],0),t){const n=t.getActivePart();n&&this.loadModel(n.foldData,n.kinematics,null,0)}this.onTextureUpdate&&t&&Array.isArray(t.parts)&&t.parts.forEach((n,i)=>{const r=this.partArtworksMap.get(i)||new Map;this.onTextureUpdate(r,i)})}selectPart(t){if(this.assemblyManager&&this.assemblyManager.parts[t])if(this.onSelectAssemblyPart)this.onSelectAssemblyPart(t);else{this.assemblyManager.setActivePartIndex(t),this.thumbnailStrip&&this.thumbnailStrip.selectPart(t);const e=this.assemblyManager.parts[t];this.loadModel(e.foldData,e.kinematics,null,t)}}bindEvents(){this.container.querySelectorAll(".tool-btn").forEach(g=>{g.addEventListener("click",()=>{this.container.querySelectorAll(".tool-btn").forEach(A=>A.classList.remove("active")),g.classList.add("active"),this.activeTool=g.getAttribute("data-tool"),this.svgElement&&this.svgElement.setAttribute("data-tool",this.activeTool),this.deselectActiveArtwork(),this.container.querySelector(".stamp-options").style.display=this.activeTool==="stamp"?"block":"none"})}),this.svgElement&&this.svgElement.setAttribute("data-tool",this.activeTool);const t=this.container.querySelector("#studio-color-palette"),e=["#ffffff","#f8fafc","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a","#090d16","#000000","#fef3c7","#fde68a","#fcd34d","#451a03","#fbbf24","#f59e0b","#d97706","#b45309","#92400e","#78350f","#854d0e","#592909","#fee2e2","#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d","#f43f5e","#e11d48","#be123c","#ec4899","#db2777","#d946ef","#c026d3","#86198f","#f3e8ff","#c084fc","#a855f7","#9333ea","#7e22ce","#6366f1","#4f46e5","#3730a3","#e0f2fe","#7dd3fc","#38bdf8","#0ea5e9","#0284c7","#3b82f6","#2563eb","#1e3a8a","#ccfbf1","#14b8a6","#0f766e","#10b981","#059669","#22c55e","#16a34a","#84cc16"];t&&(t.innerHTML="",e.forEach(g=>{const A=document.createElement("button");A.type="button",A.className="palette-swatch-btn",A.style.backgroundColor=g,A.setAttribute("data-color",g),A.title=g,g.toLowerCase()===this.fillColor.toLowerCase()&&A.classList.add("active"),A.addEventListener("click",()=>{this.applyColorFromPalette(g)}),t.appendChild(A)}));const n=this.container.querySelectorAll(".color-tab-btn");n.forEach(g=>{g.addEventListener("click",()=>{n.forEach(A=>A.classList.remove("active")),g.classList.add("active"),this.activeColorTab=g.getAttribute("data-color-tab")||"fill",this.updatePaletteHighlight()})});const i=this.container.querySelector("#studio-fill-color");i&&i.addEventListener("input",g=>{this.fillColor=g.target.value;const A=this.container.querySelector("#swatch-indicator-fill");A&&(A.style.backgroundColor=this.fillColor),this.updatePaletteHighlight(),this.selectedArtwork&&(this.selectedArtwork.fill=this.fillColor,this.syncArtworkUpdate(this.selectedArtwork))});const r=this.container.querySelector("#studio-font-color");r&&r.addEventListener("input",g=>{this.fontColor=g.target.value;const A=this.container.querySelector("#swatch-indicator-font");A&&(A.style.backgroundColor=this.fontColor),this.updatePaletteHighlight(),this.selectedArtwork&&(this.selectedArtwork.fontColor=this.fontColor,this.syncArtworkUpdate(this.selectedArtwork))});const o=this.container.querySelector("#studio-text-input");o&&o.addEventListener("input",g=>{this.textValue=g.target.value,this.selectedArtwork&&(this.selectedArtwork.text=this.textValue,this.syncArtworkUpdate(this.selectedArtwork))});const a=this.container.querySelectorAll(".align-btn");a.forEach(g=>{g.addEventListener("click",()=>{a.forEach(A=>A.classList.remove("active")),g.classList.add("active"),this.textAlign=g.getAttribute("data-align")||"center",this.selectedArtwork&&(this.selectedArtwork.textAlign=this.textAlign,this.syncArtworkUpdate(this.selectedArtwork))})});const l=this.container.querySelector("#studio-stamp-select");l&&l.addEventListener("change",g=>{this.activeStamp=g.target.value});const c=this.container.querySelector("#btn-studio-toggle-grid");c&&c.addEventListener("click",()=>{this.showGrid=!this.showGrid,c.classList.toggle("active",this.showGrid);const g=this.container.querySelector("#studio-grid-rect");g&&(g.style.display=this.showGrid?"block":"none")});const h=this.container.querySelector("#btn-studio-toggle-snap");h&&h.addEventListener("click",()=>{this.snapEnabled=!this.snapEnabled,h.classList.toggle("active",this.snapEnabled)});const d=this.container.querySelector("#btn-studio-zoom-in");d&&d.addEventListener("click",()=>this.zoomIn());const u=this.container.querySelector("#btn-studio-zoom-out");u&&u.addEventListener("click",()=>this.zoomOut());const f=this.container.querySelector("#btn-studio-zoom-fit");f&&f.addEventListener("click",()=>this.fitView()),this.container.querySelector("#btn-studio-undo").addEventListener("click",()=>this.undo()),this.container.querySelector("#btn-studio-clear").addEventListener("click",()=>this.clearActiveFace()),this.container.querySelector("#btn-studio-clear-all").addEventListener("click",()=>this.clearAll()),this.svgElement.addEventListener("pointerdown",g=>this.onPointerDown(g)),this.svgElement.addEventListener("pointermove",g=>this.onPointerMove(g)),this.svgElement.addEventListener("pointerup",g=>this.onPointerUp(g)),this.svgElement.addEventListener("pointerleave",()=>this.updateSnapIndicator({isSnapped:!1})),this.svgElement.addEventListener("wheel",g=>this.onWheel(g),{passive:!1}),window.addEventListener("keydown",g=>{if(this.container.closest(".active")||this.container.offsetParent!==null){const A=document.activeElement,p=A&&(A.tagName==="INPUT"||A.tagName==="TEXTAREA");g.key==="z"&&(g.ctrlKey||g.metaKey)?(g.preventDefault(),this.undo()):g.key==="Escape"?this.deselectActiveArtwork():(g.key==="Delete"||g.key==="Backspace")&&!p&&this.selectedArtwork&&(g.preventDefault(),this.deleteSelectedArtwork())}})}applyColorFromPalette(t){if(this.activeColorTab==="font"){this.fontColor=t;const e=this.container.querySelector("#studio-font-color");e&&(e.value=t);const n=this.container.querySelector("#swatch-indicator-font");n&&(n.style.backgroundColor=t),this.selectedArtwork&&(this.selectedArtwork.fontColor=t,this.syncArtworkUpdate(this.selectedArtwork))}else{this.fillColor=t;const e=this.container.querySelector("#studio-fill-color");e&&(e.value=t);const n=this.container.querySelector("#swatch-indicator-fill");n&&(n.style.backgroundColor=t),this.selectedArtwork&&(this.selectedArtwork.fill=t,this.syncArtworkUpdate(this.selectedArtwork))}this.updatePaletteHighlight()}updatePaletteHighlight(){const t=(this.activeColorTab==="font"?this.fontColor:this.fillColor).toLowerCase();this.container.querySelectorAll(".palette-swatch-btn").forEach(n=>{const i=(n.getAttribute("data-color")||"").toLowerCase();n.classList.toggle("active",i===t)})}syncArtworkUpdate(t){if(!t)return;const e=t.id;e&&this.faceArtworks.forEach(n=>{n.forEach(i=>{i.id===e&&(i.text=t.text,i.fill=t.fill,i.fontColor=t.fontColor,i.textAlign=t.textAlign)})}),this.renderClusterSVG(),this.notifyTextureUpdate()}selectActiveArtwork(t){this.selectedArtwork=t;const e=this.container.querySelector("#studio-text-input");if(e&&(e.value=t.text||"",e.focus(),e.select()),t.fill&&t.fill!=="transparent"){this.fillColor=t.fill;const n=this.container.querySelector("#studio-fill-color");n&&(n.value=t.fill);const i=this.container.querySelector("#swatch-indicator-fill");i&&(i.style.backgroundColor=t.fill)}if(t.fontColor){this.fontColor=t.fontColor;const n=this.container.querySelector("#studio-font-color");n&&(n.value=t.fontColor);const i=this.container.querySelector("#swatch-indicator-font");i&&(i.style.backgroundColor=t.fontColor)}this.updatePaletteHighlight(),t.textAlign&&(this.textAlign=t.textAlign,this.container.querySelectorAll(".align-btn").forEach(n=>{n.classList.toggle("active",n.getAttribute("data-align")===t.textAlign)})),this.renderClusterSVG()}deselectActiveArtwork(){if(this.selectedArtwork){this.selectedArtwork=null;const t=this.container.querySelector("#studio-text-input");t&&(t.value=""),this.textValue="",this.renderClusterSVG()}}loadModel(t,e=null,n=null,i=0){this.foldData=t,this.kinematics=e,this.cadDualGraph=n,this.currentPartIndex=i,this.assemblyManager&&this.assemblyManager.parts[i]&&this.assemblyManager.parts[i].faceArtworks&&this.assemblyManager.parts[i].faceArtworks.size>0?this.partArtworksMap.set(i,this.assemblyManager.parts[i].faceArtworks):this.partArtworksMap.has(i)||this.partArtworksMap.set(i,new Map),this.faceArtworks=this.partArtworksMap.get(i),this.assemblyManager&&this.assemblyManager.parts[i]&&(this.assemblyManager.parts[i].faceArtworks=this.faceArtworks),this.faceAdjacency3D=ge.build3DAdjacency(t,e,n),this.focusFaceIndex=0,this.panX=0,this.panY=0,this.autoFitZoom(),this.updateClusterView(),this.updateNavigator()}autoFitZoom(){if(!this.foldData||!this.foldData.vertices||this.foldData.vertices.length===0)return;let t=1/0,e=-1/0,n=1/0,i=-1/0;this.foldData.vertices.forEach(f=>{f[0]<t&&(t=f[0]),f[0]>e&&(e=f[0]),f[1]<n&&(n=f[1]),f[1]>i&&(i=f[1])});const r=Math.max(e-t,.01),o=Math.max(i-n,.01),a=Math.max(r,o);let l=a;if(this.assemblyManager&&this.assemblyManager.globalBBox){const f=this.assemblyManager.globalBBox,g=Math.max(f.max.x-f.min.x,f.max.y-f.min.y,f.max.z-f.min.z);g>0&&isFinite(g)&&(l=g)}(l<=0||!isFinite(l))&&(l=100),this.overallScale=l,this.gridSize=l/50,this.standaloneFontSize=l/10,this.snapDistance=this.gridSize*.6,this.updateGridPattern();const c=this.foldData.facesVertices.length||1,h=Math.max(a/Math.sqrt(c),.01),u=250/h;this.modelUnitScale=h/100,this.zoom=Math.max(.01,Math.min(2e3,u)),this.fitZoom=this.zoom,this.minZoom=this.zoom*.05,this.maxZoom=this.zoom*50,this.updateZoomLabel()}zoomIn(t=1.25){const e=this.maxZoom||1e4;this.zoom=Math.min(e,this.zoom*t),this.updateZoomLabel(),this.updateGridPattern(),this.renderClusterSVG()}zoomOut(t=.8){const e=this.minZoom||.001;this.zoom=Math.max(e,this.zoom*t),this.updateZoomLabel(),this.updateGridPattern(),this.renderClusterSVG()}fitView(){if(this.panX=0,this.panY=0,this.currentCluster&&this.currentCluster.clusterFaces&&this.currentCluster.clusterFaces.length>0){let t=1/0,e=-1/0,n=1/0,i=-1/0;this.currentCluster.clusterFaces.forEach(d=>{d.polygon.forEach(u=>{u[0]<t&&(t=u[0]),u[0]>e&&(e=u[0]),u[1]<n&&(n=u[1]),u[1]>i&&(i=u[1])})});const r=Math.max(e-t,.01),o=Math.max(i-n,.01),a=this.svgElement.getBoundingClientRect(),l=Math.max(a.width-120,200),c=Math.max(a.height-120,200),h=Math.min(l/r,c/o);this.zoom=Math.max(.001,Math.min(5e3,h))}else this.autoFitZoom();this.updateZoomLabel(),this.updateGridPattern(),this.renderClusterSVG()}updateZoomLabel(){const t=this.container.querySelector("#lbl-studio-zoom");if(t){const e=this.fitZoom||1,n=Math.round(this.zoom/e*100);t.textContent=`${n}%`}}updateGridPattern(){const t=this.container.querySelector("#grid-pattern");t&&(t.setAttribute("width",this.gridSize),t.setAttribute("height",this.gridSize),t.innerHTML=`<path d="M ${this.gridSize} 0 L 0 0 0 ${this.gridSize}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="${Math.max(.001,1/(this.zoom||1))}" />`);const e=this.container.querySelector("#studio-grid-rect");e&&(e.style.display=this.showGrid?"block":"none")}getSnappedCoords(t,e=!1){if(e||!this.snapEnabled)return{x:t.x,y:t.y,isSnapped:!1,type:"none"};const n=[],i=(a,l,c,h,d,u)=>{const f=d-c,g=u-h,A=f*f+g*g;if(A<1e-10)return{x:c,y:h,t:0,dist:Math.hypot(a-c,l-h)};const p=Math.max(0,Math.min(1,((a-c)*f+(l-h)*g)/A)),m=c+p*f,y=h+p*g,v=Math.hypot(a-m,l-y);return{x:m,y,t:p,dist:v}};if(this.currentCluster&&this.currentCluster.clusterFaces&&this.currentCluster.clusterFaces.forEach(a=>{const l=a.polygon;l.forEach(c=>{n.push({x:c[0],y:c[1],type:"vertex",priority:1})});for(let c=0;c<l.length;c++){const h=l[c],d=l[(c+1)%l.length],u=i(t.x,t.y,h[0],h[1],d[0],d[1]);u.dist<=this.snapDistance&&(u.t<.05?n.push({x:h[0],y:h[1],type:"vertex",priority:1}):u.t>.95?n.push({x:d[0],y:d[1],type:"vertex",priority:1}):n.push({x:u.x,y:u.y,type:"edge",priority:2}))}}),this.currentCluster&&this.currentCluster.clusterFaces&&this.currentCluster.clusterFaces.forEach(a=>{(this.faceArtworks.get(a.faceIndex)||[]).forEach(c=>{const h=c.clusterToNet?ge.composeAffine(a.netToCluster,c.clusterToNet):{a:1,b:0,c:0,d:1,e:0,f:0};if(c.type==="rect"){const d=ge.applyAffine(h,c.x,c.y),u=ge.applyAffine(h,c.x+c.width,c.y),f=ge.applyAffine(h,c.x+c.width,c.y+c.height),g=ge.applyAffine(h,c.x,c.y+c.height),A=ge.applyAffine(h,c.x+c.width/2,c.y+c.height/2);n.push({x:d.x,y:d.y,type:"element",priority:1}),n.push({x:u.x,y:u.y,type:"element",priority:1}),n.push({x:f.x,y:f.y,type:"element",priority:1}),n.push({x:g.x,y:g.y,type:"element",priority:1}),n.push({x:A.x,y:A.y,type:"element-center",priority:1.5}),[[d,u],[u,f],[f,g],[g,d]].forEach(([m,y])=>{const v=i(t.x,t.y,m.x,m.y,y.x,y.y);v.dist<=this.snapDistance&&v.t>=.05&&v.t<=.95&&n.push({x:v.x,y:v.y,type:"edge",priority:2})})}else if(c.type==="circle"){const d=ge.applyAffine(h,c.cx,c.cy);n.push({x:d.x,y:d.y,type:"element-center",priority:1.5});const u=Math.hypot(t.x-d.x,t.y-d.y);if(u>1e-6){const f=d.x+c.r*(t.x-d.x)/u,g=d.y+c.r*(t.y-d.y)/u;n.push({x:f,y:g,type:"edge",priority:2})}}else if(c.type==="text"){const d=ge.applyAffine(h,c.x,c.y);n.push({x:d.x,y:d.y,type:"element",priority:1})}})}),this.showGrid){const a=Math.round(t.x/this.gridSize)*this.gridSize,l=Math.round(t.y/this.gridSize)*this.gridSize;n.push({x:a,y:l,type:"grid",priority:3})}let r=null,o=this.snapDistance;for(const a of n){const l=Math.hypot(a.x-t.x,a.y-t.y);l<=o&&(r?(a.priority<r.priority||a.priority===r.priority&&l<o)&&(r=a,o=l):(r=a,o=l))}return r?{x:r.x,y:r.y,isSnapped:!0,type:r.type}:{x:t.x,y:t.y,isSnapped:!1,type:"none"}}updateSnapIndicator(t){let e=this.rootGroup?this.rootGroup.querySelector("#studio-snap-indicator"):null;if(!t||!t.isSnapped){e&&e.remove();return}if(!e&&this.rootGroup&&(e=document.createElementNS("http://www.w3.org/2000/svg","g"),e.setAttribute("id","studio-snap-indicator"),this.rootGroup.appendChild(e)),e){const n=Math.max(.01,7/(this.zoom||1)),i=`${Math.max(1,2/(this.zoom||1))}px`;let r="#38bdf8";t.type==="edge"?r="#34d399":t.type==="grid"?r="#a855f7":(t.type==="element"||t.type==="element-center")&&(r="#f59e0b"),e.innerHTML=`
        <circle cx="${t.x}" cy="${t.y}" r="${n}" fill="none" stroke="${r}" stroke-width="${i}" vector-effect="non-scaling-stroke" opacity="0.9" />
        <circle cx="${t.x}" cy="${t.y}" r="${n*.35}" fill="${r}" stroke="none" />
      `}}setFocusFace(t,e=null){this.deselectActiveArtwork(),e&&(this.lastCameraUp=e),t>=0&&t<this.foldData.facesVertices.length&&(this.focusFaceIndex=t,this.updateClusterView(),this.updateNavigator(),this.onFocusChange&&this.onFocusChange(t))}updateClusterView(){if(!this.foldData)return;let t=null;this.assemblyManager&&this.assemblyManager.parts&&this.assemblyManager.parts[this.currentPartIndex]&&(t=this.assemblyManager.parts[this.currentPartIndex].alignMatrix),this.currentCluster=ge.buildNeighborCluster(this.focusFaceIndex,this.foldData,this.faceAdjacency3D,1/0,this.kinematics,t,this.lastCameraUp),this.container.querySelector("#lbl-focus-face").textContent=`F${this.focusFaceIndex}`,this.renderClusterSVG()}renderClusterSVG(){if(!this.currentCluster)return;const t=this.currentCluster,e=this.svgElement.getBoundingClientRect(),n=e.width/2+this.panX,i=e.height/2+this.panY;this.rootGroup.innerHTML="",this.rootGroup.setAttribute("transform",`translate(${n}, ${i}) scale(${this.zoom}, ${-this.zoom})`);const r=document.createElementNS("http://www.w3.org/2000/svg","defs");t.clusterFaces.forEach(o=>{const a=document.createElementNS("http://www.w3.org/2000/svg","clipPath");a.setAttribute("id",`face-clip-${o.faceIndex}`);const l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points",o.polygon.map(c=>`${c[0]},${c[1]}`).join(" ")),a.appendChild(l),r.appendChild(a)}),this.rootGroup.appendChild(r),t.clusterFaces.forEach(o=>{const a=o.polygon.map(p=>`${p[0]},${p[1]}`).join(" "),l=document.createElementNS("http://www.w3.org/2000/svg","polygon");l.setAttribute("points",a);let c="cluster-face neighbor";o.isFocus?c="cluster-face focus":o.isCoPlanarWithFocus&&(c="cluster-face coplanar"),l.setAttribute("class",c),l.setAttribute("data-face",o.faceIndex);const d=(this.faceArtworks.get(o.faceIndex)||[]).find(p=>p.type==="face-fill");d&&d.fill&&(l.style.fill=d.fill),l.addEventListener("click",p=>{if(this.activeTool==="fill"){p.stopPropagation(),this.applyFaceFill(o);return}o.isFocus||(p.stopPropagation(),this.setFocusFace(o.faceIndex))}),this.rootGroup.appendChild(l);let u=0,f=0;o.polygon.forEach(p=>{u+=p[0],f+=p[1]}),u/=o.polygon.length,f/=o.polygon.length;const g=document.createElementNS("http://www.w3.org/2000/svg","text");g.setAttribute("x",u),g.setAttribute("y",-f),g.setAttribute("transform","scale(1, -1)"),g.setAttribute("class","face-id-label");const A=Math.max(.001,14/(this.zoom||1));g.setAttribute("font-size",`${A}px`),g.textContent=o.isFocus?`F${o.faceIndex} (Focus)`:`F${o.faceIndex}`,this.rootGroup.appendChild(g)}),t.clusterFaces.forEach(o=>{const a=this.faceArtworks.get(o.faceIndex)||[];if(a.length===0)return;const l=document.createElementNS("http://www.w3.org/2000/svg","g");l.setAttribute("clip-path",`url(#face-clip-${o.faceIndex})`),l.setAttribute("class",`face-art-layer face-${o.faceIndex}`),a.forEach(c=>{const h=c.clusterToNet?ge.composeAffine(o.netToCluster,c.clusterToNet):{a:1,b:0,c:0,d:1,e:0,f:0},d=document.createElementNS("http://www.w3.org/2000/svg","g");d.setAttribute("transform",`matrix(${h.a} ${h.b} ${h.c} ${h.d} ${h.e} ${h.f})`);const u=this.createSVGElementFromSpec(c,o);u&&(d.appendChild(u),l.appendChild(d))}),this.rootGroup.appendChild(l)}),t.clusterEdges.forEach(o=>{const a=document.createElementNS("http://www.w3.org/2000/svg","line");a.setAttribute("x1",o.p1[0]),a.setAttribute("y1",o.p1[1]),a.setAttribute("x2",o.p2[0]),a.setAttribute("y2",o.p2[1]),a.setAttribute("class",o.isFoldHinge?"cluster-crease fold":"cluster-crease cut-seam"),this.rootGroup.appendChild(a)})}createSVGElementFromSpec(t,e=null){let n=null;this.modelUnitScale;const i=!!(this.selectedArtwork&&t.id===this.selectedArtwork.id);if(t.type==="rect"){const r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("class","artwork-element");const o=document.createElementNS("http://www.w3.org/2000/svg","rect");if(o.setAttribute("x",t.x),o.setAttribute("y",t.y),o.setAttribute("width",t.width),o.setAttribute("height",t.height),o.setAttribute("fill",t.fill||"#3b82f6"),o.setAttribute("stroke","none"),r.appendChild(o),t.text&&t.text.trim().length>0){const a=Math.min(t.width,t.height)*.08,l=Math.max(1e-4,t.width-a*2),c=Math.max(1e-4,t.height-a*2),h=Math.max(1e-4,Math.min(c*.85,l/Math.max(1,t.text.length*.55))),d=t.textAlign||"center";let u=t.x+t.width/2,f="middle";d==="left"?(u=t.x+a,f="start"):d==="right"&&(u=t.x+t.width-a,f="end");const g=-(t.y+t.height/2),A=document.createElementNS("http://www.w3.org/2000/svg","text");A.setAttribute("x",u),A.setAttribute("y",g),A.setAttribute("transform","scale(1, -1)"),A.setAttribute("text-anchor",f),A.setAttribute("dominant-baseline","central"),A.setAttribute("font-size",`${h}px`),A.setAttribute("font-weight","bold"),A.setAttribute("font-family","sans-serif"),A.setAttribute("fill",t.fontColor||"#ffffff"),A.setAttribute("stroke","none"),A.textContent=t.text,r.appendChild(A)}if(i){const a=Math.max(1e-4,1/(this.zoom||1)),l=document.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("x",t.x+a),l.setAttribute("y",t.y+a),l.setAttribute("width",Math.max(1e-4,t.width-a*2)),l.setAttribute("height",Math.max(1e-4,t.height-a*2)),l.setAttribute("fill","none"),l.setAttribute("stroke","#818cf8"),l.setAttribute("stroke-width","2"),l.setAttribute("stroke-dasharray","5 3"),l.setAttribute("vector-effect","non-scaling-stroke"),l.setAttribute("pointer-events","none"),r.appendChild(l)}n=r}else if(t.type==="circle"){const r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("class","artwork-element");const o=document.createElementNS("http://www.w3.org/2000/svg","circle");if(o.setAttribute("cx",t.cx),o.setAttribute("cy",t.cy),o.setAttribute("r",t.r),o.setAttribute("fill",t.fill||"#3b82f6"),o.setAttribute("stroke","none"),r.appendChild(o),t.text&&t.text.trim().length>0){const a=1.414*t.r,l=a*.08,c=Math.max(1e-4,a-l*2),h=Math.max(1e-4,a-l*2),d=Math.max(1e-4,Math.min(h*.85,c/Math.max(1,t.text.length*.55))),u=t.textAlign||"center";let f=t.cx,g="middle";u==="left"?(f=t.cx-a/2+l,g="start"):u==="right"&&(f=t.cx+a/2-l,g="end");const A=-t.cy,p=document.createElementNS("http://www.w3.org/2000/svg","text");p.setAttribute("x",f),p.setAttribute("y",A),p.setAttribute("transform","scale(1, -1)"),p.setAttribute("text-anchor",g),p.setAttribute("dominant-baseline","central"),p.setAttribute("font-size",`${d}px`),p.setAttribute("font-weight","bold"),p.setAttribute("font-family","sans-serif"),p.setAttribute("fill",t.fontColor||"#ffffff"),p.setAttribute("stroke","none"),p.textContent=t.text,r.appendChild(p)}if(i){const a=Math.max(1e-4,1/(this.zoom||1)),l=document.createElementNS("http://www.w3.org/2000/svg","circle");l.setAttribute("cx",t.cx),l.setAttribute("cy",t.cy),l.setAttribute("r",Math.max(1e-4,t.r-a)),l.setAttribute("fill","none"),l.setAttribute("stroke","#818cf8"),l.setAttribute("stroke-width","2"),l.setAttribute("stroke-dasharray","5 3"),l.setAttribute("vector-effect","non-scaling-stroke"),l.setAttribute("pointer-events","none"),r.appendChild(l)}n=r}else if(t.type==="text"){const r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("class","artwork-element");const o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("x",t.x),o.setAttribute("y",-t.y),o.setAttribute("transform","scale(1, -1)"),o.setAttribute("dominant-baseline","hanging"),o.setAttribute("text-anchor",t.textAlign==="center"?"middle":t.textAlign==="right"?"end":"start");const a=t.fontSize||this.standaloneFontSize||10;if(o.setAttribute("font-size",`${a}px`),o.setAttribute("font-weight","bold"),o.setAttribute("font-family","sans-serif"),o.setAttribute("fill",t.fontColor||t.fill||"#ffffff"),o.setAttribute("stroke","none"),o.textContent=t.text,r.appendChild(o),i){const l=(t.text||"").length,c=Math.max(a,l*a*.6),h=a*1.2;let d=t.x;t.textAlign==="center"?d-=c/2:t.textAlign==="right"&&(d-=c);const u=t.y-h*.9,f=document.createElementNS("http://www.w3.org/2000/svg","rect");f.setAttribute("x",d),f.setAttribute("y",u),f.setAttribute("width",c),f.setAttribute("height",h),f.setAttribute("fill","none"),f.setAttribute("stroke","#818cf8"),f.setAttribute("stroke-width","2"),f.setAttribute("stroke-dasharray","5 3"),f.setAttribute("vector-effect","non-scaling-stroke"),f.setAttribute("pointer-events","none"),r.appendChild(f)}n=r}else if(t.type==="stamp"&&(n=this.createStampElement(t),i)){let r=60,o=40;t.stampType==="up"?(r=40,o=50):t.stampType==="recycle"?(r=50,o=50):t.stampType==="barcode"&&(r=70,o=40);const a=document.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("x",0),a.setAttribute("y",0),a.setAttribute("width",r),a.setAttribute("height",o),a.setAttribute("fill","none"),a.setAttribute("stroke","#818cf8"),a.setAttribute("stroke-width","2"),a.setAttribute("stroke-dasharray","5 3"),a.setAttribute("vector-effect","non-scaling-stroke"),a.setAttribute("pointer-events","none"),n.appendChild(a)}return n&&(n.style.cursor="pointer",n.addEventListener("pointerdown",r=>{r.button===0&&(r.stopPropagation(),this.selectActiveArtwork(t))}),n.addEventListener("click",r=>{r.stopPropagation()})),n}createStampElement(t){const e=this.modelUnitScale||1,n=document.createElementNS("http://www.w3.org/2000/svg","g"),i=(t.scale||1)*e;return n.setAttribute("transform",`translate(${t.x}, ${t.y}) scale(${i}, ${-i})`),t.stampType==="fragile"?n.innerHTML=`
        <rect width="60" height="40" rx="4" fill="#ef4444" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <text x="30" y="24" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">FRAGILE</text>
      `:t.stampType==="up"?n.innerHTML=`
        <rect width="40" height="50" rx="4" fill="#3b82f6" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <path d="M20 12 L10 24 L16 24 L16 38 L24 38 L24 24 L30 24 Z" fill="#ffffff" />
      `:t.stampType==="recycle"?n.innerHTML=`
        <circle cx="25" cy="25" r="22" fill="#10b981" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" />
        <text x="25" y="30" fill="#ffffff" font-size="16" text-anchor="middle">♻</text>
      `:t.stampType==="barcode"?n.innerHTML=`
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
      `,n}getCanvasCoords(t){const e=this.svgElement.getBoundingClientRect(),n=e.width/2+this.panX,i=e.height/2+this.panY,r=(t.clientX-e.left-n)/this.zoom,o=-(t.clientY-e.top-i)/this.zoom;return{x:r,y:o}}onPointerDown(t){if(t.button===1||t.shiftKey){this.isPanning=!0,this.panStart={x:t.clientX-this.panX,y:t.clientY-this.panY};return}this.selectedArtwork&&!t.target.closest(".artwork-element")&&this.deselectActiveArtwork();const e=this.getCanvasCoords(t),n=this.getSnappedCoords(e,t.ctrlKey),i={x:n.x,y:n.y},r=this.modelUnitScale||1;if(this.isDrawing=!0,this.drawStart=i,this.activeTool==="select"){this.isDrawing=!1;return}if(this.activeTool==="fill"){if(this.isDrawing=!1,this.currentCluster&&this.currentCluster.clusterFaces){for(const o of this.currentCluster.clusterFaces)if(ge.isPointInsidePoly([e.x,e.y],o.polygon)){this.applyFaceFill(o);return}}return}if(this.activeTool==="stamp"){const o={id:"art_"+Date.now()+"_"+Math.floor(Math.random()*1e4),type:"stamp",stampType:this.activeStamp,x:i.x-30*r,y:i.y-20*r,scale:1,unitScale:r,faceIndex:this.focusFaceIndex};this.addArtwork(o),this.selectActiveArtwork(o),this.isDrawing=!1}else if(this.activeTool==="text"){const o=this.standaloneFontSize||24*r,a={id:"art_"+Date.now()+"_"+Math.floor(Math.random()*1e4),type:"text",text:this.textValue||"TEXT",x:i.x,y:i.y,fontSize:o,unitScale:r,fill:"transparent",fontColor:this.fontColor||"#ffffff",textAlign:this.textAlign||"left",stroke:"none",faceIndex:this.focusFaceIndex};this.addArtwork(a),this.selectActiveArtwork(a),this.isDrawing=!1}}onPointerMove(t){if(this.isPanning){this.panX=t.clientX-this.panStart.x,this.panY=t.clientY-this.panStart.y,this.renderClusterSVG();return}const e=this.getCanvasCoords(t),n=this.getSnappedCoords(e,t.ctrlKey);this.updateSnapIndicator(n);const i={x:n.x,y:n.y};if(!this.isDrawing||!this.drawStart)return;this.modelUnitScale;let r=this.rootGroup.querySelector("#draw-preview");if(r||(r=document.createElementNS("http://www.w3.org/2000/svg",this.activeTool==="circle"?"circle":"rect"),r.setAttribute("id","draw-preview"),r.setAttribute("fill",this.fillColor||"#3b82f6"),r.setAttribute("stroke","none"),r.setAttribute("opacity","0.7"),this.rootGroup.appendChild(r)),this.activeTool==="rect"){const o=Math.min(this.drawStart.x,i.x),a=Math.min(this.drawStart.y,i.y),l=Math.abs(i.x-this.drawStart.x),c=Math.abs(i.y-this.drawStart.y);r.setAttribute("x",o),r.setAttribute("y",a),r.setAttribute("width",l),r.setAttribute("height",c),r.setAttribute("fill",this.fillColor||"#3b82f6")}else if(this.activeTool==="circle"){const o=Math.hypot(i.x-this.drawStart.x,i.y-this.drawStart.y);r.setAttribute("cx",this.drawStart.x),r.setAttribute("cy",this.drawStart.y),r.setAttribute("r",o),r.setAttribute("fill",this.fillColor||"#3b82f6")}}onPointerUp(t){if(this.isPanning){this.isPanning=!1;return}const e=this.getCanvasCoords(t),n=this.getSnappedCoords(e,t.ctrlKey);this.updateSnapIndicator({isSnapped:!1});const i={x:n.x,y:n.y};if(!this.isDrawing||!this.drawStart)return;const r=this.modelUnitScale||1;this.isDrawing=!1;const o=this.rootGroup.querySelector("#draw-preview");if(o&&o.remove(),this.activeTool==="rect"){const a=Math.abs(i.x-this.drawStart.x),l=Math.abs(i.y-this.drawStart.y);if(a>.01*r&&l>.01*r){const c={id:"art_"+Date.now()+"_"+Math.floor(Math.random()*1e4),type:"rect",x:Math.min(this.drawStart.x,i.x),y:Math.min(this.drawStart.y,i.y),width:a,height:l,fill:this.fillColor||"#3b82f6",stroke:"none",text:this.textValue||"",fontColor:this.fontColor||"#ffffff",textAlign:this.textAlign||"center",unitScale:r,faceIndex:this.focusFaceIndex};this.addArtwork(c),this.selectActiveArtwork(c)}}else if(this.activeTool==="circle"){const a=Math.hypot(i.x-this.drawStart.x,i.y-this.drawStart.y);if(a>.01*r){const l={id:"art_"+Date.now()+"_"+Math.floor(Math.random()*1e4),type:"circle",cx:this.drawStart.x,cy:this.drawStart.y,r:a,fill:this.fillColor||"#3b82f6",stroke:"none",text:this.textValue||"",fontColor:this.fontColor||"#ffffff",textAlign:this.textAlign||"center",unitScale:r,faceIndex:this.focusFaceIndex};this.addArtwork(l),this.selectActiveArtwork(l)}}}onWheel(t){t.preventDefault();const e=t.deltaY<0?1.15:.85,n=this.minZoom||.001,i=this.maxZoom||1e4;this.zoom=Math.max(n,Math.min(i,this.zoom*e)),this.updateZoomLabel(),this.updateGridPattern(),this.renderClusterSVG()}getArtworkBBox(t){const e=t.unitScale||this.modelUnitScale||1;if(t.type==="rect")return{minX:t.x,minY:t.y,maxX:t.x+t.width,maxY:t.y+t.height};if(t.type==="circle")return{minX:t.cx-t.r,minY:t.cy-t.r,maxX:t.cx+t.r,maxY:t.cy+t.r};if(t.type==="text"){const n=t.fontSize||this.standaloneFontSize||10,i=(t.text||"").length*n*.6,r=n;return{minX:t.x,minY:t.y-r,maxX:t.x+i,maxY:t.y}}if(t.type==="stamp"){const n={fragile:[60,40],up:[40,50],recycle:[50,50],barcode:[70,40],star:[50,50]},[i,r]=n[t.stampType]||[60,40],o=i*e,a=r*e;return{minX:t.x,minY:t.y-a,maxX:t.x+o,maxY:t.y}}return{minX:-1e9,minY:-1e9,maxX:1e9,maxY:1e9}}getPolygonBBox(t){let e=1/0,n=1/0,i=-1/0,r=-1/0;return t.forEach(o=>{o[0]<e&&(e=o[0]),o[1]<n&&(n=o[1]),o[0]>i&&(i=o[0]),o[1]>r&&(r=o[1])}),{minX:e,minY:n,maxX:i,maxY:r}}bboxOverlap(t,e){return t.minX<=e.maxX&&t.maxX>=e.minX&&t.minY<=e.maxY&&t.maxY>=e.minY}addArtwork(t){if(!this.currentCluster){const i=t.faceIndex;this.faceArtworks.has(i)||this.faceArtworks.set(i,[]),this.faceArtworks.get(i).push(t),this.undoStack.push({action:"add",spec:t,faceIndex:i}),this.redoStack=[],this.renderClusterSVG(),this.notifyTextureUpdate();return}const e=this.getArtworkBBox(t),n=[];for(const i of this.currentCluster.clusterFaces){const r=this.getPolygonBBox(i.polygon);if(this.bboxOverlap(e,r)){const o={...t,faceIndex:i.faceIndex,clusterToNet:i.clusterToNet};this.faceArtworks.has(i.faceIndex)||this.faceArtworks.set(i.faceIndex,[]),this.faceArtworks.get(i.faceIndex).push(o),n.push({faceIndex:i.faceIndex,spec:o})}}if(n.length===0){const i=this.currentCluster.clusterFaces.find(r=>r.isFocus)||this.currentCluster.clusterFaces[0];if(i){const r={...t,faceIndex:i.faceIndex,clusterToNet:i.clusterToNet};this.faceArtworks.has(i.faceIndex)||this.faceArtworks.set(i.faceIndex,[]),this.faceArtworks.get(i.faceIndex).push(r),n.push({faceIndex:i.faceIndex,spec:r})}}n.length>0&&(this.undoStack.push({action:"add_multi",pairs:n}),this.redoStack=[]),this.renderClusterSVG(),this.notifyTextureUpdate()}applyFaceFill(t){const e=t.faceIndex,n={id:"fill_"+Date.now()+"_"+Math.floor(Math.random()*1e4),type:"face-fill",fill:this.fillColor||"#3b82f6",faceIndex:e,clusterToNet:t.clusterToNet};this.faceArtworks.has(e)||this.faceArtworks.set(e,[]);const i=this.faceArtworks.get(e),r=i.findIndex(a=>a.type==="face-fill");let o=null;r>=0&&(o=i[r],i.splice(r,1)),i.unshift(n),this.undoStack.push({action:"face_fill",faceIndex:e,spec:n,prevFill:o}),this.redoStack=[],this.renderClusterSVG(),this.notifyTextureUpdate()}deleteSelectedArtwork(){if(!this.selectedArtwork)return;const t=this.selectedArtwork.id,e=[];this.faceArtworks.forEach((n,i)=>{const r=n.findIndex(o=>o.id===t);if(r>=0){const o=n.splice(r,1)[0];e.push({faceIndex:i,spec:o})}}),e.length>0&&(this.undoStack.push({action:"delete_multi",pairs:e}),this.redoStack=[]),this.deselectActiveArtwork(),this.renderClusterSVG(),this.notifyTextureUpdate()}undo(){if(this.undoStack.length===0)return;const t=this.undoStack.pop();if(t.action==="face_fill"){const e=this.faceArtworks.get(t.faceIndex)||[],n=e.indexOf(t.spec);n>=0&&e.splice(n,1),t.prevFill&&e.unshift(t.prevFill),this.redoStack.push(t)}else if(t.action==="add"){const e=this.faceArtworks.get(t.faceIndex)||[],n=e.indexOf(t.spec);n>=0&&e.splice(n,1),this.redoStack.push(t)}else t.action==="add_multi"?(t.pairs.forEach(e=>{const n=this.faceArtworks.get(e.faceIndex)||[],i=n.indexOf(e.spec);i>=0&&n.splice(i,1)}),this.redoStack.push(t)):t.action==="delete_multi"&&(t.pairs.forEach(e=>{this.faceArtworks.has(e.faceIndex)||this.faceArtworks.set(e.faceIndex,[]),this.faceArtworks.get(e.faceIndex).push(e.spec)}),this.redoStack.push(t));this.renderClusterSVG(),this.notifyTextureUpdate()}clearActiveFace(){this.faceArtworks.set(this.focusFaceIndex,[]),this.renderClusterSVG(),this.notifyTextureUpdate()}clearAll(){this.faceArtworks.clear(),this.renderClusterSVG(),this.notifyTextureUpdate()}notifyTextureUpdate(){this.assemblyManager&&this.assemblyManager.parts[this.currentPartIndex]&&(this.assemblyManager.parts[this.currentPartIndex].faceArtworks=this.faceArtworks),this.onTextureUpdate&&this.onTextureUpdate(this.faceArtworks,this.currentPartIndex)}updateNavigator(){if(!this.foldData||!this.navSvg)return;this.navSvg.innerHTML="";const t=this.foldData.vertices;let e=1/0,n=-1/0,i=1/0,r=-1/0;t.forEach(h=>{h[0]<e&&(e=h[0]),h[0]>n&&(n=h[0]),h[1]<i&&(i=h[1]),h[1]>r&&(r=h[1])});const o=n-e||100,a=r-i||100,l=Math.min(140/o,100/a),c=document.createElementNS("http://www.w3.org/2000/svg","g");c.setAttribute("transform",`translate(${10+(140-o*l)/2}, ${10+(100+a*l)/2}) scale(${l}, ${-l}) translate(${-e}, ${-i})`),this.foldData.facesVertices.forEach((h,d)=>{const u=h.map(g=>`${t[g][0]},${t[g][1]}`).join(" "),f=document.createElementNS("http://www.w3.org/2000/svg","polygon");f.setAttribute("points",u),f.setAttribute("class",d===this.focusFaceIndex?"nav-face focus":"nav-face"),f.addEventListener("click",()=>this.setFocusFace(d)),c.appendChild(f)}),this.navSvg.appendChild(c)}}class W0{constructor(t=null,e={}){this.parts=[],this.activePartIndex=0,this.title="Assembly",this.isAssembly=!1,this.foldProgress=0,this.explodedProgress=0,this.listeners={partSelected:[],assemblyUpdated:[],progressChanged:[]},t&&this.loadAssembly(t)}on(t,e){this.listeners[t]&&this.listeners[t].push(e)}emit(t,e){this.listeners[t]&&this.listeners[t].forEach(n=>{try{n(e)}catch(i){console.error(`Error in ${t} listener:`,i)}})}loadAssembly(t){if(this.parts=[],this.activePartIndex=0,t&&t.isAssembly&&Array.isArray(t.parts))this.isAssembly=!0,this.title=t.title||"Multi-Part Assembly",t.parts.forEach((e,n)=>{const i=e.foldData||e,r=ki(i),o=new Hi(r),a=e.bbox||(i._assembly?i._assembly.target3DBBox:null)||this.computeBBoxFromFold(r),l=e.center||(i._assembly?i._assembly.target3DOrigin:null)||[(a.min[0]+a.max[0])/2,(a.min[1]+a.max[1])/2,(a.min[2]+a.max[2])/2],c=this.computePartAlignmentTransform(i,r);let h=new Map;if(i._artworks)for(const[d,u]of Object.entries(i._artworks))h.set(parseInt(d,10),u);this.parts.push({id:e.id||`part_${n}`,name:e.name||i.file_title||`Component ${n+1}`,foldJson:i,foldData:r,kinematics:o,bbox:a,center:l,isVisible:!0,faceArtworks:h,alignMatrix:c.matrix,alignTranslation:c.translation,alignQuaternion:c.quaternion,explosionVector:[0,0,0]})});else if(t){this.isAssembly=!1;const e=ki(t),n=new Hi(e),i=this.computeBBoxFromFold(e),r=[(i.min[0]+i.max[0])/2,(i.min[1]+i.max[1])/2,(i.min[2]+i.max[2])/2],o=this.computePartAlignmentTransform(t,e);let a=new Map;if(t._artworks)for(const[l,c]of Object.entries(t._artworks))a.set(parseInt(l,10),c);this.parts.push({id:"part_0",name:t.file_title||"Main Body",foldJson:t,foldData:e,kinematics:n,bbox:i,center:r,isVisible:!0,faceArtworks:a,alignMatrix:o.matrix,alignTranslation:o.translation,alignQuaternion:o.quaternion,explosionVector:[0,0,0]})}this.computeAssemblyCentroidAndExplosion(),this.emit("assemblyUpdated",this),this.parts.length>0&&this.emit("partSelected",this.getActivePart())}computePartAlignmentTransform(t,e){const n=t._assembly;if(!n||!n.rootFace3DVertices||n.rootFace3DVertices.length<3)return{matrix:new Ut,translation:new I(0,0,0),quaternion:new He};const i=n.rootFaceIndex!==void 0?n.rootFaceIndex:0,r=e.facesVertices[i];if(!r||r.length<3)return{matrix:new Ut,translation:new I(0,0,0),quaternion:new He};const o=r.map(N=>e.vertices[N]),a=n.rootFace3DVertices,l=new I(o[0][0],o[0][1],0),c=new I(o[1][0],o[1][1],0),h=new I().subVectors(c,l).normalize(),d=new I(0,0,1),u=new I().crossVectors(d,h).normalize(),f=new I(...a[0]),g=new I(...a[1]),A=new I().subVectors(g,f).normalize();let p=0,m=0,y=0;const v=a.length;for(let N=0;N<v;N++){const G=a[N],k=a[(N+1)%v];p+=(G[1]-k[1])*(G[2]+k[2]),m+=(G[2]-k[2])*(G[0]+k[0]),y+=(G[0]-k[0])*(G[1]+k[1])}const _=Math.hypot(p,m,y),T=_>1e-6?new I(p/_,m/_,y/_):new I(0,0,1),b=new I().crossVectors(T,A).normalize(),w=new Ut().makeBasis(h,u,d).setPosition(l),P=new Ut().makeBasis(A,b,T).setPosition(f),M=new Ut().multiplyMatrices(P,w.clone().invert()),x=new I,R=new He,O=new I;return M.decompose(x,R,O),{matrix:M,translation:x,quaternion:R}}computeBBoxFromFold(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;return(t.vertices_coords||[]).forEach(c=>{const h=c[0]||0,d=c[1]||0,u=c[2]||0;e=Math.min(e,h),r=Math.max(r,h),n=Math.min(n,d),o=Math.max(o,d),i=Math.min(i,u),a=Math.max(a,u)}),e===1/0?{min:[-50,-50,-50],max:[50,50,50]}:{min:[e,n,i],max:[r,o,a]}}computeAssemblyCentroidAndExplosion(){if(this.parts.length===0)return;let t=0,e=0,n=0,i=[1/0,1/0,1/0],r=[-1/0,-1/0,-1/0];this.parts.forEach(d=>{t+=d.center[0],e+=d.center[1],n+=d.center[2];for(let u=0;u<3;u++)i[u]=Math.min(i[u],d.bbox.min[u]),r[u]=Math.max(r[u],d.bbox.max[u])});const o=this.parts.length;this.globalCentroid=[t/o,e/o,n/o],this.globalBBox={min:i,max:r};const a=r[0]-i[0],l=r[1]-i[1],c=r[2]-i[2],h=Math.max(a,l,c,50);this.parts.forEach((d,u)=>{const f=d.center[0]-this.globalCentroid[0],g=d.center[1]-this.globalCentroid[1],A=d.center[2]-this.globalCentroid[2],p=Math.hypot(f,g,A);if(p>1e-4)d.explosionVector=[f/p*h*.8,g/p*h*.8,A/p*h*.8];else{const m=u%3;d.explosionVector=[m===0?h*.6*(u%2===0?1:-1):0,m===1?h*.6*(u%2===0?1:-1):0,m===2?h*.6*(u%2===0?1:-1):0]}})}getActivePart(){return this.parts[this.activePartIndex]||null}setActivePartIndex(t){t>=0&&t<this.parts.length&&t!==this.activePartIndex&&(this.activePartIndex=t,this.emit("partSelected",this.getActivePart()))}updateFoldProgress(t){this.foldProgress=Math.max(0,Math.min(1,t)),this.emit("progressChanged",{fold:this.foldProgress,exploded:this.explodedProgress})}updateExplodedProgress(t){this.explodedProgress=Math.max(0,Math.min(1,t)),this.emit("progressChanged",{fold:this.foldProgress,exploded:this.explodedProgress})}updateActivePartFoldJSON(t){const e=this.getActivePart();if(!e)return;e.foldJson&&e.foldJson._assembly&&!t._assembly&&(t._assembly=e.foldJson._assembly),e.foldData&&e.foldData._assembly&&!t._assembly&&(t._assembly=e.foldData._assembly),e.foldJson=t,e.foldData=ki(t),e.kinematics=new Hi(e.foldData);const n=this.computePartAlignmentTransform(t,e.foldData);e.alignMatrix=n.matrix,e.alignTranslation=n.translation,e.alignQuaternion=n.quaternion,this.emit("assemblyUpdated",this)}getAssemblyJSON(){if(!this.isAssembly&&this.parts.length<=1){const e=this.parts[0];if(!e)return null;const n={...e.foldJson||e.foldData};return n._assembly||(e.foldData&&e.foldData._assembly?n._assembly=e.foldData._assembly:e.foldJson&&e.foldJson._assembly&&(n._assembly=e.foldJson._assembly)),e.faceArtworks&&e.faceArtworks.size>0&&(n._artworks={},e.faceArtworks.forEach((i,r)=>{i&&i.length>0&&(n._artworks[r]=i)})),n}const t=this.parts.map((e,n)=>{const i={...e.foldJson||e.foldData};return i._assembly||(e.foldData&&e.foldData._assembly?i._assembly=e.foldData._assembly:e.foldJson&&e.foldJson._assembly&&(i._assembly=e.foldJson._assembly)),e.faceArtworks&&e.faceArtworks.size>0&&(i._artworks={},e.faceArtworks.forEach((r,o)=>{r&&r.length>0&&(i._artworks[o]=r)})),{id:e.id||`part_${n}`,name:e.name||`Component ${n+1}`,bbox:e.bbox,center:e.center,foldData:i}});return{file_spec:1.1,file_creator:"FoldNet Assembly",file_title:this.title||"Multi-Part Assembly",file_classes:["multiModel"],isAssembly:!0,parts:t}}}class X0{constructor(){this.container=document.getElementById("canvas-container"),this.renderer=new Lr(this.container,{onFaceClick:(t,e,n,i)=>{this.assemblyManager&&this.assemblyManager.isAssembly&&e!==void 0&&e!==this.assemblyManager.activePartIndex&&(this.onSelectAssemblyPart(e),this.graphicStudio&&this.graphicStudio.thumbnailStrip&&this.graphicStudio.thumbnailStrip.selectPart(e),this.netEditor&&this.netEditor.thumbnailStrip&&this.netEditor.thumbnailStrip.selectPart(e)),this.graphicStudio&&this.graphicStudio.setFocusFace(t,i)}}),this.assemblyManager=new W0,this.foldData=null,this.kinematics=null,this.explodedProgress=0,this.isPlaying=!1,this.animSpeed=1,this.direction=1,this.netEditor=null,this.previewRenderer=null,this.previewKinematics=null,this.previewFoldData=null,this.isPreviewPlaying=!1,this.previewDirection=1,this.graphicStudio=null,this.studioPreviewRenderer=null,this.isStudioPreviewPlaying=!1,this.studioPreviewDirection=1,this.currentCadPlanarData=null,this.currentCadSeed=1,this.initNetEditor(),this.initGraphicStudio(),this.discoverModels(),this.bindUIEvents(),this.loadDefaultModel(),this.startAnimationLoop()}initGraphicStudio(){const t=document.getElementById("studio-workspace");if(!t)return;this.graphicStudio=new G0(t,{onTextureUpdate:(n,i)=>{this.assemblyManager&&this.assemblyManager.parts&&this.assemblyManager.parts[i]&&(this.assemblyManager.parts[i].faceArtworks=n),this.renderer&&this.renderer.updateFaceArtworks(n,i),this.previewRenderer&&this.previewRenderer.updateFaceArtworks(n,i),this.studioPreviewRenderer&&this.studioPreviewRenderer.updateFaceArtworks(n,i)}});const e=document.getElementById("studio-preview-canvas-container");if(e){this.studioPreviewRenderer=new Lr(e,{showCreases:!0,onFaceClick:(i,r,o,a)=>{this.assemblyManager&&this.assemblyManager.isAssembly&&r!==void 0&&r!==this.assemblyManager.activePartIndex&&(this.onSelectAssemblyPart(r),this.graphicStudio&&this.graphicStudio.thumbnailStrip&&this.graphicStudio.thumbnailStrip.selectPart(r),this.netEditor&&this.netEditor.thumbnailStrip&&this.netEditor.thumbnailStrip.selectPart(r)),this.graphicStudio&&this.graphicStudio.setFocusFace(i,a)}});const n=document.getElementById("theme-select");n&&this.studioPreviewRenderer.setTheme(n.value)}}discoverModels(){const t=document.getElementById("model-select");if(t)try{const e=Object.assign({"../models/lid-cube.json":Gc,"../models/notched-cube.json":Xc,"../models/subdivided-notched-cube.json":jc}),n=Object.assign({"../models/box-shell.stl":$c,"../models/nested3.stl":Zc}),i=[],r=[];for(const l in e){const c=l.split("/").pop(),h=e[l],d=h.default||h;if(d&&typeof d=="object"){const u=d.file_title||d.title||c.replace(".json",""),f=Array.isArray(d.faces_vertices)?d.faces_vertices.length:null;i.push({url:`models/${c}`,filename:c,title:u,facesCount:f})}}for(const l in n){const c=l.split("/").pop(),h=n[l],d=h.default||h;r.push({url:d,filename:c,title:"3D CAD Model",facesCount:null})}i.sort((l,c)=>l.filename.localeCompare(c.filename)),r.sort((l,c)=>l.filename.localeCompare(c.filename)),t.innerHTML="";let o="models/subdivided-notched-cube.json";if(i.length>0){const l=document.createElement("optgroup");l.label="Sample FOLD Nets",i.forEach(c=>{const h=document.createElement("option");h.value=c.url;const d=c.facesCount?` (${c.facesCount} Faces)`:"",u=c.filename.replace(/\.[^/.]+$/,""),f=c.title.toLowerCase().replace(/[^a-z0-9]+/g,""),g=u.toLowerCase().replace(/[^a-z0-9]+/g,"");f===g?h.textContent=`${c.filename}${d}`:h.textContent=`${c.filename} — ${c.title}${d}`,(c.filename==="subdivided-notched-cube.json"||c.filename.includes("subdivided-notched"))&&(h.selected=!0,o=c.url),l.appendChild(h)}),t.appendChild(l)}if(r.length>0){const l=document.createElement("optgroup");l.label="Sample CAD Models",r.forEach(c=>{const h=document.createElement("option");h.value=c.url,h.textContent=c.filename,l.appendChild(h)}),t.appendChild(l)}const a=document.createElement("option");a.value="custom",a.textContent="Custom File...",t.appendChild(a),this.defaultModelUrl=o}catch(e){console.warn("Error discovering models:",e)}}async loadDefaultModel(){const t=this.defaultModelUrl||"models/subdivided-notched-cube.json";await this.loadModelFromUrl(t)}onWindowResize(){this.renderer&&this.renderer.resize(),this.netEditor&&this.netEditor.resizeCanvas(),this.previewRenderer&&this.previewRenderer.resize(),this.studioPreviewRenderer&&this.studioPreviewRenderer.resize()}async loadModelFromUrl(t){try{const e=t.split(".").pop().split("?")[0].toLowerCase();if(["obj","stl","step","stp"].includes(e)){const n=await fetch(t);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=e==="stl"?await n.arrayBuffer():await n.text(),r=await Cs.parseCADFile(i,e),o=Cs.extractMultiBodyPlanarFaces(r);this.currentCadSeed=1;const l=t.split("/").pop().split("?")[0].replace(/\.[^/.]+$/,"");if(this.currentCadPlanarData={...o,title:l},o.isAssembly){const c=ai.unfoldAssemblyToFold(o.components,this.currentCadSeed);this.assemblyManager.loadAssembly(c),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}else{const c=o.components[0],h=ai.unfoldToFoldJSON(c.vertices,c.facesVertices,this.currentCadSeed,500,{componentId:c.id,bbox:c.bbox,center:c.center,name:l});h.file_title=l,this.assemblyManager.loadAssembly(h),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}}else{const n=await fetch(t);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const i=await n.json();this.currentCadPlanarData=null,this.currentCadSeed=1,this.updateRegenButtonUI(!1),this.initFoldModel(i)}}catch(e){console.error("Failed to load model:",e),alert(`Could not load model: ${e.message}`)}}initFoldModel(t){this.assemblyManager.loadAssembly(t),this.initAssemblyModel(this.assemblyManager)}initAssemblyModel(t){try{this.assemblyManager=t;const e=t.getActivePart();if(!e)return;this.foldData=e.foldData,this.kinematics=e.kinematics,this.renderer.buildModel(this.foldData,this.kinematics,this.assemblyManager),this.previewRenderer&&(this.previewFoldData=this.foldData,this.previewKinematics=this.kinematics,this.previewRenderer.buildModel(this.foldData,this.kinematics),this.updatePreviewFoldProgress()),this.studioPreviewRenderer&&(this.studioPreviewRenderer.buildModel(this.foldData,this.kinematics,this.assemblyManager),this.updateStudioPreviewFoldProgress());const n=document.getElementById("exploded-slider-group");if(n){n.style.display=t.isAssembly?"flex":"none";const i=document.getElementById("exploded-slider");i&&(i.value=0),this.explodedProgress=0;const r=document.getElementById("exploded-slider-value");r&&(r.textContent="0%")}this.updateInspectorUI(),this.resetSlider(),this.updateFoldProgress(),this.netEditor&&this.netEditor.loadAssembly(this.assemblyManager,i=>{this.onSelectAssemblyPart(i)}),this.graphicStudio&&this.graphicStudio.loadAssembly(this.assemblyManager,i=>{this.onSelectAssemblyPart(i)})}catch(e){console.error("Error initializing Assembly model:",e),alert(`Error initializing Assembly: ${e.message}`)}}onSelectAssemblyPart(t){if(!this.assemblyManager)return;this.assemblyManager.setActivePartIndex(t),this.renderer.highlightActivePart(t),this.studioPreviewRenderer&&this.studioPreviewRenderer.highlightActivePart(t);const e=this.assemblyManager.getActivePart();e&&(this.foldData=e.foldData,this.kinematics=e.kinematics,this.netEditor&&(this.netEditor.thumbnailStrip&&this.netEditor.thumbnailStrip.selectPart(t),this.netEditor.loadFoldJSON(e.foldJson||e.foldData,!0)),this.graphicStudio&&(this.graphicStudio.thumbnailStrip&&this.graphicStudio.thumbnailStrip.selectPart(t),this.graphicStudio.loadModel(e.foldData,e.kinematics,null,t)),this.previewRenderer&&(this.previewFoldData=e.foldData,this.previewKinematics=e.kinematics,this.previewRenderer.buildModel(this.foldData,this.kinematics),this.updatePreviewFoldProgress()),this.updateInspectorUI())}updateStudioPreviewFoldProgress(){if(!this.studioPreviewRenderer)return;const t=document.getElementById("studio-preview-fold-slider"),e=document.getElementById("studio-preview-slider-value");if(!t)return;const n=parseFloat(t.value),i=n/100;this.studioPreviewRenderer.updateFold(i),e&&(e.textContent=`${Math.round(n)}%`)}initNetEditor(){const t=document.getElementById("editor-canvas-container");if(!t)return;this.netEditor=new U0(t,n=>{this.onNetEditorChange(n)});const e=document.getElementById("preview-canvas-container");if(e){this.previewRenderer=new Lr(e,{showCreases:!0});const n=document.getElementById("theme-select");n&&this.previewRenderer.setTheme(n.value)}}onNetEditorChange(t){if(this.previewRenderer)try{this.previewFoldData=ki(t),this.previewKinematics=new Hi(this.previewFoldData),this.previewRenderer.buildModel(this.previewFoldData,this.previewKinematics),this.updatePreviewFoldProgress()}catch(n){console.warn("Preview fold kinematics warning:",n.message)}try{this.assemblyManager&&this.assemblyManager.updateActivePartFoldJSON(t),this.foldData=ki(t),this.kinematics=new Hi(this.foldData),this.renderer&&(this.renderer.buildModel(this.foldData,this.kinematics,this.assemblyManager),this.updateFoldProgress()),this.studioPreviewRenderer&&(this.studioPreviewRenderer.buildModel(this.foldData,this.kinematics,this.assemblyManager),this.updateStudioPreviewFoldProgress()),this.graphicStudio&&this.graphicStudio.loadAssembly(this.assemblyManager,n=>{this.onSelectAssemblyPart(n)}),this.updateInspectorUI()}catch(n){console.warn("Live fold sync warning:",n.message)}const e=document.getElementById("json-code-textarea");e&&document.activeElement!==e&&(e.value=JSON.stringify(t,null,2))}resetSlider(){const t=document.getElementById("fold-slider");t.value=0,this.updateFoldProgress()}updateFoldProgress(){const t=document.getElementById("fold-slider"),e=parseFloat(t.value),n=e/100;this.renderer.updateFold(n,this.explodedProgress||0);const i=document.getElementById("slider-value");i&&(i.textContent=`${Math.round(e)}%`);const r=document.getElementById("slider-progress");r&&(r.style.width=`${e}%`);const o=document.getElementById("state-text");if(o){const l=this.assemblyManager&&this.assemblyManager.isAssembly?` [${this.assemblyManager.parts.length} PARTS]`:"";e===0?o.textContent=`FLAT 2D NET${l}`:e===100?o.textContent=`3D ASSEMBLED${l}`:o.textContent=`FOLDING (${Math.round(e)}%)${l}`}}updatePreviewFoldProgress(){const t=document.getElementById("preview-fold-slider");if(!t||!this.previewRenderer)return;const e=parseFloat(t.value),n=e/100;this.previewRenderer.updateFold(n);const i=document.getElementById("preview-slider-value");i&&(i.textContent=`${Math.round(e)}%`)}bindUIEvents(){const t=document.getElementById("btn-mode-3d"),e=document.getElementById("btn-mode-editor"),n=document.getElementById("btn-mode-studio"),i=document.getElementById("viewer-workspace"),r=document.getElementById("editor-workspace"),o=document.getElementById("studio-workspace"),a=(tt,ft)=>{[t,e,n].forEach(St=>{St&&St.classList.toggle("active",St===tt)}),[i,r,o].forEach(St=>{St&&St.classList.toggle("active",St===ft)}),this.onWindowResize()};t.addEventListener("click",()=>a(t,i)),e.addEventListener("click",()=>{a(e,r),this.netEditor&&(this.netEditor.resizeCanvas(),this.netEditor.centerView()),this.previewRenderer&&this.previewRenderer.resize()}),n&&n.addEventListener("click",()=>{a(n,o),this.graphicStudio&&(this.graphicStudio.updateClusterView(),this.graphicStudio.updateNavigator())}),document.getElementById("fold-slider").addEventListener("input",()=>{this.isPlaying&&this.pauseAnimation(),this.updateFoldProgress()});const c=document.getElementById("exploded-slider");c&&c.addEventListener("input",tt=>{this.explodedProgress=parseFloat(tt.target.value)/100;const ft=document.getElementById("exploded-slider-value");ft&&(ft.textContent=`${Math.round(this.explodedProgress*100)}%`),this.updateFoldProgress()}),document.getElementById("model-select").addEventListener("change",tt=>{const ft=tt.target.value;ft==="custom"?document.getElementById("file-input").click():this.loadModelFromUrl(ft)}),document.getElementById("file-input").addEventListener("change",tt=>{const ft=tt.target.files[0];ft&&this.readFoldFile(ft)});const u=document.getElementById("cad-file-input");u&&u.addEventListener("change",tt=>{const ft=tt.target.files[0];ft&&this.readFoldFile(ft)});const f=document.getElementById("drop-zone"),g=document.querySelector(".viewport-container");g.addEventListener("dragover",tt=>{tt.preventDefault(),f.classList.add("active")}),g.addEventListener("dragleave",tt=>{(tt.target===f||!g.contains(tt.relatedTarget))&&f.classList.remove("active")}),g.addEventListener("drop",tt=>{tt.preventDefault(),f.classList.remove("active"),tt.dataTransfer.files&&tt.dataTransfer.files.length>0&&this.readFoldFile(tt.dataTransfer.files[0])}),document.getElementById("theme-select").addEventListener("change",tt=>{const ft=tt.target.value;this.renderer&&this.renderer.setTheme(ft),this.previewRenderer&&this.previewRenderer.setTheme(ft),this.studioPreviewRenderer&&this.studioPreviewRenderer.setTheme(ft),this.graphicStudio&&this.graphicStudio.faceArtworks&&(this.renderer&&this.renderer.updateFaceArtworks(this.graphicStudio.faceArtworks),this.previewRenderer&&this.previewRenderer.updateFaceArtworks(this.graphicStudio.faceArtworks),this.studioPreviewRenderer&&this.studioPreviewRenderer.updateFaceArtworks(this.graphicStudio.faceArtworks))}),document.getElementById("btn-play-pause").addEventListener("click",()=>{this.toggleAnimation()}),document.getElementById("speed-select").addEventListener("change",tt=>{this.animSpeed=parseFloat(tt.target.value)});const y=document.getElementById("btn-view-2d");y&&y.addEventListener("click",()=>this.renderer.setView2D());const v=document.getElementById("btn-view-3d");v&&v.addEventListener("click",()=>this.renderer.setView3D());const _=document.getElementById("btn-reset-cam");_&&_.addEventListener("click",()=>this.renderer.centerModel());const T=document.getElementById("inspector-panel"),b=document.getElementById("btn-toggle-inspector"),w=document.getElementById("btn-close-inspector");b.addEventListener("click",()=>{T.classList.toggle("open"),b.classList.toggle("active")}),w.addEventListener("click",()=>{T.classList.remove("open"),b.classList.remove("active")}),document.getElementById("root-face-select").addEventListener("change",tt=>{const ft=parseInt(tt.target.value,10);this.kinematics&&(this.kinematics.setRootFace(ft),this.updateFoldProgress())}),document.getElementById("show-creases-check").addEventListener("change",tt=>{this.renderer.setShowCreases(tt.target.checked),this.previewRenderer&&this.previewRenderer.setShowCreases(tt.target.checked),this.updateFoldProgress()});const x=document.querySelectorAll(".palette-btn");x.forEach(tt=>{tt.addEventListener("click",()=>{x.forEach(St=>St.classList.remove("active")),tt.classList.add("active");const ft=tt.dataset.directive;this.netEditor&&(this.netEditor.activeDirective=ft,this.netEditor.selectedEdgeIndex>=0&&this.netEditor.setEdgeAssignment(this.netEditor.selectedEdgeIndex,ft))})}),document.getElementById("btn-attach-face").addEventListener("click",()=>{this.netEditor&&(this.netEditor.selectedEdgeIndex<0?alert("Please click to select an edge first on the 2D Net Editor canvas!"):this.netEditor.attachFaceToSelectedEdge())}),document.getElementById("btn-auto-boundary").addEventListener("click",()=>{this.netEditor&&this.netEditor.autoDetectBoundaries()}),document.getElementById("btn-invert-folds").addEventListener("click",()=>{this.netEditor&&this.netEditor.invertFolds()});const R=document.getElementById("btn-flip-v");R&&R.addEventListener("click",()=>{this.netEditor&&this.netEditor.flipVertically()});const O=document.getElementById("btn-flip-h");O&&O.addEventListener("click",()=>{this.netEditor&&this.netEditor.flipHorizontally()}),document.getElementById("btn-center-net").addEventListener("click",()=>{this.netEditor&&this.netEditor.centerView()});const N=document.getElementById("btn-regen-cad");N&&N.addEventListener("click",()=>this.regenerateCadNet());const G=document.getElementById("btn-editor-regen-cad");G&&G.addEventListener("click",()=>this.regenerateCadNet()),window.addEventListener("resize",()=>this.onWindowResize());const k=document.getElementById("preview-sidebar"),H=document.getElementById("btn-toggle-preview"),z=document.getElementById("btn-close-preview");H.addEventListener("click",()=>{k.classList.toggle("open"),H.classList.toggle("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),z.addEventListener("click",()=>{k.classList.remove("open"),H.classList.remove("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),document.getElementById("preview-fold-slider").addEventListener("input",()=>{this.isPreviewPlaying&&this.pausePreviewAnimation(),this.updatePreviewFoldProgress()}),document.getElementById("btn-preview-play").addEventListener("click",()=>{this.togglePreviewAnimation()});const it=document.getElementById("studio-preview-sidebar"),ut=document.getElementById("btn-studio-toggle-preview"),Tt=document.getElementById("btn-studio-close-preview");ut&&it&&ut.addEventListener("click",()=>{it.classList.toggle("open"),ut.classList.toggle("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),Tt&&it&&Tt.addEventListener("click",()=>{it.classList.remove("open"),ut&&ut.classList.remove("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)});const Ht=document.getElementById("studio-preview-fold-slider");Ht&&Ht.addEventListener("input",()=>{this.isStudioPreviewPlaying&&this.pauseStudioPreviewAnimation(),this.updateStudioPreviewFoldProgress()});const j=document.getElementById("btn-studio-preview-play");j&&j.addEventListener("click",()=>{this.toggleStudioPreviewAnimation()});const Q=document.getElementById("code-panel"),ot=document.getElementById("btn-toggle-code"),st=document.getElementById("btn-close-code"),At=document.getElementById("btn-apply-json");ot.addEventListener("click",()=>{Q.classList.toggle("open"),ot.classList.toggle("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),st.addEventListener("click",()=>{Q.classList.remove("open"),ot.classList.remove("active"),setTimeout(()=>this.onWindowResize(),50),setTimeout(()=>this.onWindowResize(),260)}),At.addEventListener("click",()=>{const tt=document.getElementById("json-code-textarea");try{const ft=JSON.parse(tt.value);this.netEditor&&this.netEditor.loadFoldJSON(ft)}catch(ft){alert(`Invalid JSON format: ${ft.message}`)}});const bt=document.getElementById("btn-export-glb");bt&&bt.addEventListener("click",async()=>{const ft=(this.foldData&&this.foldData.title?this.foldData.title:"folded-box").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"folded-box";this.renderer&&await this.renderer.exportGLB(ft)}),document.getElementById("btn-export-fold").addEventListener("click",async()=>{if(this.netEditor)try{const It=this.netEditor.getFoldJSON();this.assemblyManager.updateActivePartFoldJSON(It)}catch(It){console.warn("Net Editor sync warning before export:",It)}const tt=this.assemblyManager.getAssemblyJSON();if(!tt)return;const ft=JSON.stringify(tt,null,2);let Gt=(tt.file_title||(this.foldData&&this.foldData.title?this.foldData.title:this.assemblyManager.isAssembly?"assembly-model":"box-net")).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");(!Gt||Gt==="untitled")&&(Gt=this.assemblyManager.isAssembly?"assembly-model-prepared":"box-net-prepared");const D=`${Gt}.json`;if("showSaveFilePicker"in window)try{const Et=await(await window.showSaveFilePicker({suggestedName:D,types:[{description:"FOLD 1.1 Model File (*.json, *.fold)",accept:{"application/json":[".json",".fold"]}}]})).createWritable();await Et.write(ft),await Et.close();return}catch(It){if(It.name==="AbortError")return;console.warn("Native save picker fallback:",It)}const ie="data:application/json;charset=utf-8,"+encodeURIComponent(ft),Ct=document.createElement("a");Ct.setAttribute("href",ie),Ct.setAttribute("download",D),Ct.style.display="none",document.body.appendChild(Ct),Ct.click(),setTimeout(()=>{Ct.parentNode&&document.body.removeChild(Ct)},300)})}async readFoldFile(t){const e=t.name.split(".").pop().toLowerCase(),n=document.getElementById("model-select");if(e==="json"||e==="fold"){const i=new FileReader;i.onload=r=>{try{const o=JSON.parse(r.target.result);this.currentCadPlanarData=null,this.currentCadSeed=1,this.updateRegenButtonUI(!1),n&&(n.value="custom"),this.initFoldModel(o)}catch{alert(`Failed to parse file "${t.name}": Invalid JSON.`)}},i.readAsText(t)}else if(["obj","stl","step","stp"].includes(e)){const i=new FileReader;i.onload=async r=>{try{const o=r.target.result,a=await Cs.parseCADFile(o,e),l=Cs.extractMultiBodyPlanarFaces(a);this.currentCadSeed=1;const c=t.name.replace(/\.[^/.]+$/,"");if(this.currentCadPlanarData={...l,title:c},n&&(n.value="custom"),l.isAssembly){const d=ai.unfoldAssemblyToFold(l.components,this.currentCadSeed);this.assemblyManager.loadAssembly(d),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}else{const d=l.components[0],u=ai.unfoldToFoldJSON(d.vertices,d.facesVertices,this.currentCadSeed,500,{componentId:d.id,bbox:d.bbox,center:d.center,name:c});u.file_title=c,this.assemblyManager.loadAssembly(u),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}const h=document.getElementById("btn-mode-editor");h&&h.click()}catch(o){console.error("CAD Import Error:",o),alert(`CAD Import Failed: ${o.message}`)}},e==="stl"?i.readAsArrayBuffer(t):i.readAsText(t)}else alert(`Unsupported file format: .${e}`)}regenerateCadNet(){if(this.currentCadPlanarData){this.currentCadSeed++,console.log(`[App] Regenerating CAD net with seed #${this.currentCadSeed}...`);try{if(this.currentCadPlanarData.isAssembly){const t=ai.unfoldAssemblyToFold(this.currentCadPlanarData.components,this.currentCadSeed);this.assemblyManager.loadAssembly(t),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}else{const t=this.currentCadPlanarData.components?this.currentCadPlanarData.components[0]:this.currentCadPlanarData,e=ai.unfoldToFoldJSON(t.vertices,t.facesVertices,this.currentCadSeed,500,{componentId:t.id||"part_0",bbox:t.bbox,center:t.center,name:this.currentCadPlanarData.title});e.file_title=this.currentCadPlanarData.title,this.assemblyManager.loadAssembly(e),this.updateRegenButtonUI(!0),this.initAssemblyModel(this.assemblyManager)}}catch(t){console.error("Regeneration error:",t),alert(`Could not generate net with seed #${this.currentCadSeed}: ${t.message}`)}}}updateRegenButtonUI(t){const e=document.getElementById("editor-cad-section"),n=document.getElementById("btn-editor-regen-cad"),i=document.getElementById("btn-editor-regen-label"),r=t?"flex":"none";e&&(e.style.display=r),n&&(n.style.display=t?"inline-flex":"none"),i&&(i.textContent=`🎲 Re-gen (Seed #${this.currentCadSeed})`)}toggleAnimation(){this.isPlaying?this.pauseAnimation():this.startAnimation()}startAnimation(){this.isPlaying=!0,document.getElementById("play-icon").style.display="none",document.getElementById("pause-icon").style.display="block"}pauseAnimation(){this.isPlaying=!1,document.getElementById("play-icon").style.display="block",document.getElementById("pause-icon").style.display="none"}togglePreviewAnimation(){this.isPreviewPlaying?this.pausePreviewAnimation():this.startPreviewAnimation()}startPreviewAnimation(){this.isPreviewPlaying=!0,document.getElementById("preview-play-icon").style.display="none",document.getElementById("preview-pause-icon").style.display="block"}pausePreviewAnimation(){this.isPreviewPlaying=!1,document.getElementById("preview-play-icon").style.display="block",document.getElementById("preview-pause-icon").style.display="none"}toggleStudioPreviewAnimation(){this.isStudioPreviewPlaying?this.pauseStudioPreviewAnimation():this.startStudioPreviewAnimation()}startStudioPreviewAnimation(){this.isStudioPreviewPlaying=!0;const t=document.getElementById("studio-preview-play-icon"),e=document.getElementById("studio-preview-pause-icon");t&&(t.style.display="none"),e&&(e.style.display="block")}pauseStudioPreviewAnimation(){this.isStudioPreviewPlaying=!1;const t=document.getElementById("studio-preview-play-icon"),e=document.getElementById("studio-preview-pause-icon");t&&(t.style.display="block"),e&&(e.style.display="none")}updateInspectorUI(){if(!this.foldData)return;this.foldData.title&&(document.getElementById("meta-title").textContent=this.foldData.title),this.foldData.creator&&(document.getElementById("meta-creator").textContent=this.foldData.creator),this.foldData.spec&&(document.getElementById("meta-spec").textContent=`v${this.foldData.spec}`),this.foldData.counts&&(document.getElementById("stat-vertices").textContent=this.foldData.counts.vertices??0,document.getElementById("stat-edges").textContent=this.foldData.counts.edges??0,document.getElementById("stat-faces").textContent=this.foldData.counts.faces??0,document.getElementById("stat-boundary").textContent=this.foldData.counts.boundary??0,document.getElementById("stat-valley").textContent=this.foldData.counts.valley??0,document.getElementById("stat-mountain").textContent=this.foldData.counts.mountain??0,document.getElementById("stat-cut").textContent=this.foldData.counts.cut??0,document.getElementById("stat-flat").textContent=this.foldData.counts.flat??0,document.getElementById("stat-unassigned").textContent=this.foldData.counts.unassigned??0);const t=document.getElementById("root-face-select");if(t){t.innerHTML="";const e=this.foldData.facesVertices||this.foldData.faces_vertices||[],n=this.kinematics?this.kinematics.rootFaceIndex:0;e.forEach((i,r)=>{const o=document.createElement("option");o.value=r,o.textContent=`Face #${r} ${r===n?"(Root Base)":""}`,r===n&&(o.selected=!0),t.appendChild(o)})}}startAnimationLoop(){let t=performance.now();const e=n=>{requestAnimationFrame(e);const i=(n-t)/1e3;if(t=n,this.isPlaying){const r=document.getElementById("fold-slider");let o=parseFloat(r.value);o+=this.direction*(100/3)*this.animSpeed*i,o>=100?(o=100,this.direction=-1):o<=0&&(o=0,this.direction=1),r.value=o,this.updateFoldProgress()}if(this.renderer.render(),this.previewRenderer){if(this.isPreviewPlaying){const r=document.getElementById("preview-fold-slider");let o=parseFloat(r.value);o+=this.previewDirection*(100/3)*this.animSpeed*i,o>=100?(o=100,this.previewDirection=-1):o<=0&&(o=0,this.previewDirection=1),r.value=o,this.updatePreviewFoldProgress()}this.previewRenderer.render()}if(this.studioPreviewRenderer){if(this.isStudioPreviewPlaying){const r=document.getElementById("studio-preview-fold-slider");if(r){let o=parseFloat(r.value);o+=this.studioPreviewDirection*(100/3)*this.animSpeed*i,o>=100?(o=100,this.studioPreviewDirection=-1):o<=0&&(o=0,this.studioPreviewDirection=1),r.value=o,this.updateStudioPreviewFoldProgress()}}this.studioPreviewRenderer.render()}};requestAnimationFrame(e)}}window.addEventListener("DOMContentLoaded",()=>{new X0});
