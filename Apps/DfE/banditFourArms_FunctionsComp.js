console.log("VALUABLE RESEARCH NEEDS VALUABLE DATA. PLEASE DON'T CHEAT! \nIf you do please answer in the questionnaire honestly that you did so\nthat we can make sure to not use your data.\nThank you!");Shiny.addCustomMessageHandler("envBanditFourArms",function(a){a=JSON.parse(JSON.stringify(a));enOne=a.enOne;enTwo=a.enTwo;enThree=a.enThree;enFour=a.enFour;nTrials=a.nTrials;gameNr=[a.game];nDigits=[a.nDigits]});
function endGame(a,b,d,e,f,g){Shiny.onInputChange("selection",a);Shiny.onInputChange("outcome",b);Shiny.onInputChange("outcomeCum",d);Shiny.onInputChange("respTime",e);Shiny.onInputChange("trial",f);Shiny.onInputChange("gameNr",g)}function myRound(a,b){var d=Math.pow(10,b);return Math.round(a*d)/d}function newGame(){ind=[];selection=[];outcome=[];outcomeCum=[];t=[Date.now()];respTime=[];trial=[];clickEnabled=[1]}function add(a,b){return a+b}
function updateBanditFourArms(a,b,d,e,f,g,k,r,z,A,c,v,u,l,m,n,p,w,x,h,q,y){c.length<n&&1===q[q.length-1]&&(r=Date.now(),q.push(0),w.push((r-h[h.length-1])/1E3),h.push(r),a=document.getElementById(a),b=document.getElementById(b),d=document.getElementById(d),e=document.getElementById(e),f=document.getElementById(f),h=document.getElementById(g),g=0===k[c.length]?"#BEBEBE":0>k[c.length]?"#FF6A6A":"#00CD00",a.innerHTML=k[c.length],a.style.color=g,m[m.lenth]!=v&&(b.innerHTML=" ",d.innerHTML=" ",e.innerHTML=
" "),m.push(v),u.push(k[c.length]),x.push(c.length+1),h.innerHTML=n-(c.length+1),l.push(u.reduce(add,0)),c.push(1),p.length<n&&p.push(p[0]),f.innerHTML=myRound(l[l.length-1],y),c.length===n&&endGame(m,u,l,w,x,p),setTimeout(function(){q.push(1)},500))};