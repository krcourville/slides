import{S as Y,i as Z,s as ee,J as oe,l as te,K as re,f as q,d as m,k as I,e as g,t as A,n as C,c as v,a as w,g as M,b,L as $,H as c,M as F,h as se,I as ne,N as ce,O as de,A as ae,P as ue,Q as fe,R as he,j as pe,m as me,o as _e,T as be,x as ge,u as ve,v as we}from"../chunks/vendor-aed985a0.js";function le(i,n,t){const e=i.slice();return e[9]=n[t],e}function ie(i){let n,t=i[9].innerHTML+"",e;return{c(){n=new oe,e=te(),this.h()},l(l){n=re(l),e=te(),this.h()},h(){n.a=e},m(l,s){n.m(t,l,s),q(l,e,s)},p(l,s){s&4&&t!==(t=l[9].innerHTML+"")&&n.p(t)},d(l){l&&m(e),l&&n.d()}}}function ke(i){var Q,z;let n,t,e,l,s,a,r,d,k,_,T,p,N=((z=(Q=i[0])==null?void 0:Q.length)!=null?z:0)+"",P,j,L,S,R,U,O,B,K,J,D=i[2],u=[];for(let o=0;o<D.length;o+=1)u[o]=ie(le(i,D,o));return{c(){n=I(),t=g("div"),e=g("nav"),l=g("ul"),s=g("li"),a=g("button"),r=A("Previous"),d=I(),k=g("li"),_=g("div"),T=A(i[1]),p=A(" of "),P=A(N),j=I(),L=g("li"),S=g("button"),R=A("Next"),U=I(),O=g("div"),B=I();for(let o=0;o<u.length;o+=1)u[o].c();this.h()},l(o){n=C(o),t=v(o,"DIV",{class:!0});var f=w(t);e=v(f,"NAV",{"aria-label":!0,class:!0});var E=w(e);l=v(E,"UL",{class:!0});var y=w(l);s=v(y,"LI",{class:!0});var h=w(s);a=v(h,"BUTTON",{class:!0,tabindex:!0,"aria-disabled":!0});var H=w(a);r=M(H,"Previous"),H.forEach(m),h.forEach(m),d=C(y),k=v(y,"LI",{class:!0});var G=w(k);_=v(G,"DIV",{class:!0});var V=w(_);T=M(V,i[1]),p=M(V," of "),P=M(V,N),V.forEach(m),G.forEach(m),j=C(y),L=v(y,"LI",{class:!0});var W=w(L);S=v(W,"BUTTON",{class:!0});var X=w(S);R=M(X,"Next"),X.forEach(m),W.forEach(m),y.forEach(m),E.forEach(m),U=C(f),O=v(f,"DIV",{}),w(O).forEach(m),B=C(f);for(let x=0;x<u.length;x+=1)u[x].l(f);f.forEach(m),this.h()},h(){b(a,"class","btn btn-light"),b(a,"tabindex","-1"),b(a,"aria-disabled","true"),b(s,"class","page-item border rounded-start"),$(s,"disabled",i[3]),b(_,"class","mx-3 mx-1"),b(k,"class","page-item d-flex justify-content-around align-items-center border-top border-bottom"),b(S,"class","btn btn-light"),b(L,"class","page-item border rounded-end"),$(L,"disabled",i[4]),b(l,"class","pagination justify-content-center"),b(e,"aria-label","Page navigation example"),b(e,"class","mt-3"),b(t,"class","slideshow")},m(o,f){q(o,n,f),q(o,t,f),c(t,e),c(e,l),c(l,s),c(s,a),c(a,r),c(l,d),c(l,k),c(k,_),c(_,T),c(_,p),c(_,P),c(l,j),c(l,L),c(L,S),c(S,R),c(t,U),c(t,O),c(t,B);for(let E=0;E<u.length;E+=1)u[E].m(t,null);K||(J=[F(document.body,"keyup",i[7]),F(a,"click",i[5]),F(S,"click",i[6])],K=!0)},p(o,[f]){var E,y;if(f&8&&$(s,"disabled",o[3]),f&2&&se(T,o[1]),f&1&&N!==(N=((y=(E=o[0])==null?void 0:E.length)!=null?y:0)+"")&&se(P,N),f&16&&$(L,"disabled",o[4]),f&4){D=o[2];let h;for(h=0;h<D.length;h+=1){const H=le(o,D,h);u[h]?u[h].p(H,f):(u[h]=ie(H),u[h].c(),u[h].m(t,null))}for(;h<u.length;h+=1)u[h].d(1);u.length=D.length}},i:ne,o:ne,d(o){o&&m(n),o&&m(t),ce(u,o),K=!1,de(J)}}}function Ee(i,n,t){let{presentation:e=[]}=n,l=[],s=1,a=!0,r=!0;ae(()=>{d()});function d(p=0){p<1?p=1:p>e.length&&(p=e.length),t(1,s=p)}function k(){d(s-1)}function _(){d(s+1)}function T(p){const{key:N}=p;switch(N){case" ":{_();break}case"ArrowLeft":{k();break}case"ArrowRight":{_();break}}}return i.$$set=p=>{"presentation"in p&&t(0,e=p.presentation)},i.$$.update=()=>{i.$$.dirty&3&&(t(3,a=s===1),t(4,r=s===e.length)),i.$$.dirty&3&&t(2,l=e.slice(s-1,s))},[e,s,l,a,r,k,_,T]}class ye extends Y{constructor(n){super();Z(this,n,Ee,ke,ee,{presentation:0})}}const Le=["H1","H2"];function Ne(i){const n=new ue.Converter,t=new DOMParser,e=n.makeHtml(i),l=t.parseFromString(e,"text/html"),s=Array.from(l.body.childNodes).filter(d=>d.nodeType===d.ELEMENT_NODE),a=[];let r;return s.forEach(d=>{Le.includes(d.tagName)&&(r&&a.push(r),r=l.createElement("div"),r.classList.add("slide")),r&&r.appendChild(d)}),a.push(r),a}function Se(i){let n,t,e;function l(a){i[1](a)}let s={};return i[0]!==void 0&&(s.presentation=i[0]),n=new ye({props:s}),fe.push(()=>he(n,"presentation",l)),{c(){pe(n.$$.fragment)},l(a){me(n.$$.fragment,a)},m(a,r){_e(n,a,r),e=!0},p(a,[r]){const d={};!t&&r&1&&(t=!0,d.presentation=a[0],be(()=>t=!1)),n.$set(d)},i(a){e||(ge(n.$$.fragment,a),e=!0)},o(a){ve(n.$$.fragment,a),e=!1},d(a){we(n,a)}}}function Te(i,n,t){let e=[];ae(async()=>{fetch("presentations/runbooks.md").then(s=>s.text()).then(s=>{const a=Ne(s);t(0,e=a)})});function l(s){e=s,t(0,e)}return[e,l]}class He extends Y{constructor(n){super();Z(this,n,Te,Se,ee,{})}}export{He as default};