(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap);"]),i.push([e.id,"/* reset stylesheet */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* end stylesheet reset */\n\n:root {\n    --gray-bg: #e5e7eb;\n    --primary-font: 'DM Serif Display', serif;\n}\n\n/* Container */\n\nbody {\n    /* font-family: 'Roboto', sans-serif; */\n    font-family: var(--primary-font);\n}\n\n.container {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    grid-template-columns: 30vw 70vw;\n}\n\n/* end container */\n\n/* sidebar */\n\n.side-bar {\n    background-color: var(--gray-bg);\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding-left: 20px;\n}\n\n.side-bar > h1 {\n    padding-top: 3rem;\n    font-size: 4rem;\n}\n\n.side-header{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 20px;\n}\n\n.side-header > img {\n    width: 4rem;\n}\n\n.side-header > h2 {\n    font-size: 2rem;\n}\n\n.project-list {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n.project-list > li {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 40px;\n    font-size: 25px;\n}\n\n.project-list > button {\n    width: 60%;\n}\n\n.add-project {\n    display: flex;\n    gap: 10px;\n    border: none;\n    font-family: var(--primary-font);\n    font-size: 25px;\n    background-color: var(--gray-bg);\n}\n\n/* Project Display */\n\n.project-items {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 175px;\n}\n\n.project-details{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding-left: 1rem;\n    padding-bottom: 1rem;\n    border-bottom: 2px solid var(--gray-bg);\n    background: rgb(149,15,167);\n    background: linear-gradient(90deg, rgb(141, 21, 156) 20%, rgb(129, 69, 219) 75%);\n    color: #eeeeee;\n}\n\n.project-details > h1 {\n    font-size: 6rem;\n}\n\n.project-details > h3 {\n    font-size: 3rem;\n}\n\n.project-tasks {\n    width: 100%;\n}\n\n.add-task {\n    border:none;\n    background-color: #fff;\n    font-family: var(--primary-font);\n    gap: 10px;\n}\n\n.add-task,\n.project-tasks > li {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    font-size: 1.5rem;\n    padding: 10px 40px;\n    width: 100%;\n    height: 60px;\n}\n\n.project-tasks > li {\n    border-bottom: 1px solid gray;\n}\n\n",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=r(f,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".project-tasks"),y=document.querySelector(".add-task"),g=document.querySelector(".modal-task"),v=document.querySelector(".close-btn-task"),b=document.querySelector(".confirm-btn-task"),x=document.querySelector("#task-input"),k=document.querySelector(".project-details");function j(){g.close(),x.value="",g.setAttribute("style","display: none;")}function w(){k.textContent="",console.log("cleared"),h.textContent="",C(),q(),z.tasks.forEach((e=>{const n=document.createElement("li");n.textContent=e,h.appendChild(n)}))}function C(){const e=document.createElement("h1");e.classList.add("project-name"),e.textContent=z.name,k.appendChild(e)}function q(){console.log(z.getDueDate());const e=document.createElement("h3");e.classList.add("project-dd"),""===z.getDueDate()?(e.textContent="Due date not set",k.appendChild(e)):(e.textContent=""+z.getDueDate(),k.appendChild(e))}y.addEventListener("click",(()=>{g.showModal(),g.setAttribute("style","display: flex; flex-direction: column; justify-content: space-evenly; width: 400px; height: 100px;")})),v.addEventListener("click",(()=>{j()})),b.addEventListener("click",(()=>{""!=x.value?(function(){z.tasks.push(x.value),console.log(z);const e=document.createElement("li");e.textContent=x.value,h.appendChild(e)}(),j()):j()}));const E=document.querySelector(".modal-project"),S=document.querySelector(".add-project"),D=document.querySelector(".close-btn"),L=document.querySelector(".confirm-btn"),M=document.querySelector("#project-name-input"),T=document.querySelector("#project-dd");let A,z,I=[],N=!1;class P{constructor(e,n=[],t){this.name=e,this.tasks=n,this.dueDate=t,I.push(this),console.log(I)}getName(){return this.name}getDueDate(){return this.dueDate}}function Z(){E.close(),M.value="",E.setAttribute("style","display: none;")}!function(){const e=new P("Default Project",["First Task"],"2024-11-26");z=e,C(),q();const n=document.querySelector(".project-list"),t=document.createElement("li");t.addEventListener("click",(()=>{console.log("project list item clicked"),z=e,console.log(e),w()})),t.textContent=e.name,n.appendChild(t);const o=document.querySelector(".project-tasks");e.tasks.forEach((e=>{const n=document.createElement("li");n.textContent=e,o.appendChild(n)}))}(),S.addEventListener("click",(()=>{E.showModal(),E.setAttribute("style","display: flex; flex-direction: column; justify-content: space-evenly; width: 400px; height: 100px;")})),D.addEventListener("click",(()=>{Z()})),L.addEventListener("click",(()=>{N=!0,A=M.value,Z(),function(){if(!0===N&&""!==A){const e=document.querySelector(".project-list"),n=document.createElement("li"),t=new P(A,[],T.value);n.addEventListener("click",(()=>{z=t,w()})),n.textContent=t.getName(),e.appendChild(n)}}()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(j(),Z())}))})()})();