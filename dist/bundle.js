(()=>{"use strict";function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const n=function(e,t,n){e.addEventListener(t,n)};var r,o=document.querySelector("html"),a=-20,l=document.querySelector(".popup-content"),c=document.querySelector(".popup"),i=function e(){c.style.display="block",l.style.display="block",a<38&&o.clientWidth>=768||a<20&&o.clientWidth<768?(a+=2,l.style.left="".concat(a,"%"),r=requestAnimationFrame(e)):cancelAnimationFrame(r)},u=function e(){a>=38&&a<100&&o.clientWidth>768?(r=requestAnimationFrame(e),a+=2,l.style.left="".concat(a,"%")):a>20&&a<100&&o.clientWidth<=768?(a+=2,l.style.left="".concat(a,"%"),r=requestAnimationFrame(i)):(cancelAnimationFrame(e),c.style.display="none",l.style.display="none",a=-20)};function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,d,f,h,p,y,g,b,S,A,E,q,L,I,_;(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",r=document.querySelectorAll(t);function o(e){var t=e.keyCode,r=n,o=r.replace(/\D/g,""),a=this.value.replace(/\D/g,""),l=0,c=r.replace(/[_\d]/g,(function(e){return l<a.length?a.charAt(l++)||o.charAt(l):e}));-1!==(l=c.indexOf("_"))&&(c=c.slice(0,l));var i=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(i=new RegExp("^"+i+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=c),"blur"===e.type&&this.value.length<5&&(this.value="")}var a,l=e(r);try{for(l.s();!(a=l.n()).done;){var c=a.value;c.addEventListener("input",o),c.addEventListener("focus",o),c.addEventListener("blur",o)}}catch(e){l.e(e)}finally{l.f()}})(".form-phone"),I=document.querySelector("menu"),_=function(){I.classList.remove("active-menu")},n(document,"click",(function(e){var t=e.target;if(!t.closest("menu")&&!t.closest(".menu")||t.closest("li>a")||t.closest(".close-btn")){if(t.closest("li>a")){e.preventDefault();var n=t.href.match(/#([^ ]*)/)[1];document.getElementById("".concat(n)).scrollIntoView({block:"start",behavior:"smooth"}),_()}_()}else t.closest(".menu")&&I.classList.add("active-menu")})),n(document,"click",(function(e){var t=e.target;t.matches(".popup-btn")&&requestAnimationFrame(i),t.matches(".popup-close")?requestAnimationFrame(u):t.closest(".popup-content")||requestAnimationFrame(u)})),q=document.querySelector("a>img"),L=document.getElementById("service-block"),n(q,"click",(function(e){e.preventDefault(),L.scrollIntoView({block:"start",behavior:"smooth"})})),S=document.querySelector(".service-header"),A=document.querySelectorAll(".service-header-tab"),E=document.querySelectorAll(".service-tab"),n(S,"click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&A.forEach((function(e,n){e===t&&function(e){for(var t=0;t<E.length;t++)e===t?(A[t].classList.add("active"),E[t].classList.remove("d-none")):(A[t].classList.remove("active"),E[t].classList.add("d-none"))}(n)}))})),b=document.getElementById("command"),n(b,"mouseover",(function(e){var t=e.target;t.closest(".command__photo")&&(g=t.src,t.src=t.dataset.img)})),n(b,"mouseout",(function(e){var t=e.target;t.closest(".command__photo")&&(t.src=g)})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelectorAll(".calc-item[type=number]");t.forEach((function(e){n(e,"input",(function(){e.value=e.value.replace(/\D/g,"")}))}));var r,o=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),c=document.querySelector(".calc-day"),i=document.querySelector(".calc-count"),u=document.getElementById("total"),s=0,v=function e(){if(s===r)u.textContent=r;else if(s<r){var t=r-s;t>100&&t<1e3?s+=100:t>1e3&&t<1e4?s+=1e3:t>1e4?s+=1e4:t<1e3&&t>10?s+=10:s++,u.textContent=s.toString(),setTimeout(e,1)}else if(s>r){var n=s-r;n>100&&n<1e3?s-=100:n>1e3&&n<1e4?s-=1e3:n>1e4?s-=1e4:n<100&&n>10?s-=10:s--,u.textContent=s.toString(),setTimeout(e,1)}},m=function(){r=0;var n=1,o=1,s=a.options[a.selectedIndex].dataset.value,m=a.options[a.selectedIndex].value,d=+l.value;"0"===m&&(t.forEach((function(e){e.value=""})),u.value=0),i.value>1&&(n+=(i.value-1)/10),c.value&&c.value<5?o*=2:c.value&&c.value<10&&(o*=1.5),d&&s&&(r=Math.floor(r=e*s*d*n*o)),v()};n(o,"change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&m()}))}(100),m=document.querySelectorAll(".form-phone"),d=document.querySelectorAll(".form-email"),f=document.querySelectorAll(".form-name"),h=document.querySelectorAll("input"),p=document.getElementById("form2-message"),y=function(e,t,n){return t?(e.classList.add("valid"),e.classList.remove("invalid"),!0):(e.classList.add("invalid"),e.classList.remove("valid"),e.value="",e.placeholder=n,!1)},h.forEach((function(e){n(e,"blur",(function(t){!function(e){e.value=e.value.replace(/^-*/g,"").replace(/-*$/g,"").replace(/(-)\1+/g,"-")}(e),t.target.matches(".form-name")?y(e,e.value.length>1,"Введите не менее 2 символов"):t.target.matches(".form-email")?y(e,e.value.length>5&&e.value.match(/.{2,}@(.{2,})\..{2,}/),"e-mail в формате kkk@mail.ru"):t.target.matches(".form-phone")?y(e,0===e.value.length||18===e.value.length,"Телефон должен содержать 11 цифр"):t.target.matches("#form2-message")&&y(e,e.value.length>5||0===e.value.length,"Сообщение не должно быть  короче 5 символов");var n=e.value.split(" ").filter((function(e){if(""!==e.trim())return!0}));e.value=n.join(" ")})),n(e,"input",(function(t){var n;t.target.matches(".form-name")?f.forEach((function(e){var t;(t=e).value=t.value.replace(/[^\sа-яё]+/gi,""),""!==e.value&&(e.value=e.value[0].toUpperCase()+e.value.substring(1,e.value.length))})):t.target.matches("#form2-message")?(""!==e.value&&(e.value=e.value[0].toUpperCase()+e.value.substring(1,e.value.length)),(n=p).value=n.value.replace(/[^а-яё0-9\s.,;:?!\-"'()]+/gi,"")):t.target.matches(".form-email")?d.forEach((function(e){!function(e){e.value=e.value.replace(/[^a-z0-9\-@_.]+/gi,"")}(e)})):t.target.matches(".form-phone")&&m.forEach((function(e){!function(e){e.value=e.value.replace(/[^-+()\d]/g,"")}(e)})),e.value.toString().match(/[а-яёa-z0-9]/gi)||(e.value="")}))})),function(){var e=document.getElementById("form2-message"),t=document.getElementById("form1"),n=document.getElementById("form2"),r=document.getElementById("form3"),o=document.createElement("div");o.style.cssText="font-size: 2rem; min-height: 30px; margin: 30px 0; color:#ffffff;";var a=function(t,n){var r=n.querySelectorAll("input");t.preventDefault(),n.appendChild(o),o.innerHTML='<div class="ldio-preload">\n                <div></div><div></div><div></div><div></div><div></div>\n                <div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n                </div>';var a,l={},c=s(new FormData(n).entries());try{for(c.s();!(a=c.n()).done;){var i=a.value;l[i[0]]=i[1]}}catch(e){c.e(e)}finally{c.f()}(function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(l).then((function(e){if(200!==e.status)throw new Error("Status network not correct");o.textContent="Спасибо!Мы скоро с вами свяжемся!"})).then((function(){setTimeout((function(){o.textContent="",u()}),1e3)})).catch((function(e){o.textContent="Что-то пошло не так",console.error(e)})),function(){var t,n=s(r);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.value="",e.value="",o.classList.remove("invalid"),o.classList.remove("valid")}}catch(e){n.e(e)}finally{n.f()}}()};t.addEventListener("submit",(function(e){a(e,t)})),n.addEventListener("submit",(function(e){a(e,n)})),r.addEventListener("submit",(function(e){a(e,r)}))}()})();