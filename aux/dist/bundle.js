!function(t){var e={};function n(c){if(e[c])return e[c].exports;var r=e[c]={i:c,l:!1,exports:{}};return t[c].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,c){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(c,r,function(e){return t[e]}.bind(null,r));return c},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12)},function(t,e,n){},function(t,e,n){t.exports=n.p+".src/static/16.png"},function(t,e,n){t.exports=n.p+".src/static/32.png"},function(t,e,n){t.exports=n.p+".src/static/cardC1.jpg"},function(t,e,n){t.exports=n.p+".src/static/cardC2.jpg"},function(t,e,n){t.exports=n.p+".src/static/cardC3.jpg"},function(t,e,n){t.exports=n.p+".src/static/img1.jpg"},function(t,e,n){t.exports=n.p+".src/static/img2.jpeg"},function(t,e,n){t.exports=n.p+".src/static/log.png"},function(t,e,n){t.exports=n.p+".src/static/wivoy.png"},function(t,e){document.getElementById("btn_click").addEventListener("click",function(){!1===flagPlay?(n.play(),document.getElementById("btn_click").classList.add("change"),flagPlay=!0):(n.pause(),document.getElementById("btn_click").classList.remove("change"),flagPlay=!1)});let n=document.getElementById("videoWi");flagPlay=!1;document.getElementsByClassName("fa-angle-left")[0].addEventListener("click",function(){c.scrollLeft-=630}),document.getElementsByClassName("fa-angle-right")[0].addEventListener("click",function(){c.scrollLeft+=630});let c=document.getElementsByClassName("cartasScroll")[0]},function(t,e){console.log("Hola")}]);