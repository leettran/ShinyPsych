console.log("VALUABLE RESEARCH NEEDS VALUABLE DATA. PLEASE DON'T CHEAT! \nIf you do please answer in the questionnaire honestly that you did so\nthat we can make sure to not use your data.\nThank you!");Shiny.addCustomMessageHandler("envDfeThreeOpts",function(a){a=JSON.parse(JSON.stringify(a));enOne=a.enOne;enTwo=a.enTwo;enThree=a.enThree;gambleNr=[a.gambleNr];signalColors=[a.signalColors]});
function endDfeGame(a,d,b,c,l,q,e){Shiny.onInputChange("selected",a);Shiny.onInputChange("samples",d);Shiny.onInputChange("finalOutcome",e);Shiny.onInputChange("outcome",b);Shiny.onInputChange("respTime",c);Shiny.onInputChange("trial",l);Shiny.onInputChange("gambleNr",q)}function newDfeGame(){ind=[];selected=[];finalOutcome=[];samples=[];outcome=[];t=[Date.now()];respTime=[];trial=[];clickEnabled=[1];makeDecision=[!1]}function add(a,d){return a+d}
function enableDecisionThreeOpt(a,d,b,c){Shiny.onInputChange("toggleButton",2);d=document.getElementById(d);b=document.getElementById(b);c=document.getElementById(c);d.innerHTML=" ";b.innerHTML=" ";c.innerHTML=" ";a.push(!0)}
function updateDfeThreeOpts(a,d,b,c,l,q,e,m,r,g,n,u,h,p,f,y,v,w,x){if(1!=v[v.length-1]){if(1===f[f.length-1]){l=Date.now();f.push(0);u.push((l-p[p.length-1])/1E3);p.push(l);var k=document.getElementById(a);a=document.getElementById(d);b=document.getElementById(b);var z=1===y?0===c[e.length]?"#BEBEBE":0>c[e.length]?"#FF6A6A":"#00CD00":"#000000";k.innerHTML=" ";setTimeout(function(){k.innerHTML=c[e.length];k.style.color=z},100);g[g.lenth]!=m&&(a.innerHTML=" ",b.innerHTML=" ");g.push(m);r.push(c[e.length]);
h.push(e.length+1);e.push(1);1<h[h.length-1]&&n.push(n[0]);if(1===h[h.length-1])Shiny.onInputChange("toggleButton",1);setTimeout(function(){f.push(1)},500)}}else 1===f[f.length-1]&&(f.push(0),k=document.getElementById(a),a=document.getElementById(d),b=document.getElementById(b),k.innerHTML=" ",k.style.backgroundColor="#A9A9A9",g[g.lenth]!=m&&(a.innerHTML=" ",b.innerHTML=" "),w.push(m),x.push(c[e.length]),e.push(1),setTimeout(function(){endDfeGame(w,g,r,u,h,n,x)},700))};