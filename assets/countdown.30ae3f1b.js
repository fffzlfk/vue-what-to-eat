import{d as F,r as x,a as l,b as w,o as k,c as h,e,t as y,n as g}from"./index.beee2893.js";const D={flex:"~","flex-col":"","items-center":"","justify-center":"","space-y-5":""},C={flex:"","flex-row":"","items-center":"","justify-center":"","space-x-5":""},z={"font-bold":"","text-xl":""},B={flex:"","flex-col":"","space-y-2":""},S={"inline-block":"",relative:""},I=["r","cx","cy"],M=["r","cx","cy","stroke-dasharray","stroke-dashoffset"],A=F({setup($){const o=window.innerHeight*.5,r=20;let s=x(100),t=x(10),i;const u=l(()=>o/2-r/2),a=l(()=>o/2),c=l(()=>2*Math.PI*u.value),m=l(()=>c.value-c.value*s.value/100),b=l(()=>Math.floor(t.value*s.value/100));function v(){i=setInterval(()=>{s.value-=1/10,s.value<=0&&(s.value=100)},t.value*1e3/1e3)}w(()=>{v()});function d(){clearInterval(i),s.value=100,v()}function f(_){_===0?t.value+=1:t.value-=1,(t.value<=0||t.value>99)&&(alert("\u8D85\u51FA\u8303\u56F4: [1, 99]"),t.value=10),d()}return(_,n)=>(k(),h("div",D,[e("div",C,[e("h3",z," \u5F53\u524D\u65F6\u95F4: "+y(t.value)+" \u79D2\u949F ",1),e("div",B,[e("button",{btn:"",onClick:n[0]||(n[0]=p=>f(0))}," +1\u79D2 "),e("button",{btn:"",onClick:n[1]||(n[1]=p=>f(1))}," -1\u79D2 ")])]),e("div",S,[(k(),h("svg",{width:o,height:o},[e("circle",{fill:"transparent","stroke-width":r,stroke:"#AFB0E4",r:u.value,cx:a.value,cy:a.value},null,8,I),e("circle",{class:"circle",fill:"transparent","stroke-width":r,stroke:"#9F6FC8",r:u.value,cx:a.value,cy:a.value,"stroke-dasharray":c.value,"stroke-dashoffset":m.value,"stroke-linecap":"round"},null,8,M)])),e("span",{style:g({fontSize:.5*o+"px"})},y(b.value),5)]),e("button",{btn:"","z-10":"",onClick:n[2]||(n[2]=p=>d())}," reset ")]))}});export{A as default};
