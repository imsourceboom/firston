!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){(function(e){var n,o,r,i;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */i=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===a(e)&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,a=o.length;i<a;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var o=n(3),r=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(o.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var o=n(5);function r(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,o,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,o,i)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return l(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),s=n(1),u=n.n(s),d=n(2),p=n.n(d),f="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),m(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=p()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return y("action",e)}},{key:"defaultTarget",value:function(e){var t=y("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return y("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(u.a);function y(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=h}]).default},"object"===a(t)&&"object"===a(e)?e.exports=i():(o=[],void 0===(r="function"==typeof(n=i)?n.apply(t,o):n)||(e.exports=r))}).call(this,n(8)(e))},function(e,t,n){(function(n){var o,r;
/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-e)),i=window.setTimeout((function(){t(o+r)}),r);return e=o+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,i="",a=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===a?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},a=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(i)}};return function(l,c){var s,u,d,p,f={cancelScroll:function(e){cancelAnimationFrame(p),p=null,e||a("scrollCancel",s)},animateScroll:function(o,l,c){f.cancelScroll();var u=n(s||t,c||{}),m="[object Number]"===Object.prototype.toString.call(o),h=m||!o.tagName?null:o;if(m||h){var y=e.pageYOffset;u.header&&!d&&(d=document.querySelector(u.header));var g,v,b,x,w,S,E,k,A=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(d),L=m?o:function(t,n,o,i){var a=0;if(t.offsetParent)for(;a+=t.offsetTop,t=t.offsetParent;);return a=Math.max(a-n-o,0),i&&(a=Math.min(a,r()-e.innerHeight)),a}(h,A,parseInt("function"==typeof u.offset?u.offset(o,l):u.offset,10),u.clip),C=L-y,T=r(),O=0,q=(g=C,b=(v=u).speedAsDuration?v.speed:Math.abs(g/1e3*v.speed),v.durationMax&&b>v.durationMax?v.durationMax:v.durationMin&&b<v.durationMin?v.durationMin:parseInt(b,10));0===e.pageYOffset&&e.scrollTo(0,0),E=o,k=u,m||history.pushState&&k.updateURL&&history.pushState({smoothScroll:JSON.stringify(k),anchor:E.id},document.title,E===document.documentElement?"#top":"#"+E.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?i(o,Math.floor(L),!1):(a("scrollStart",u,o,l),f.cancelScroll(!0),e.requestAnimationFrame((function t(n){var r,c,s;x||(x=n),O+=n-x,S=y+C*(c=w=1<(w=0===q?0:O/q)?1:w,"easeInQuad"===(r=u).easing&&(s=c*c),"easeOutQuad"===r.easing&&(s=c*(2-c)),"easeInOutQuad"===r.easing&&(s=c<.5?2*c*c:(4-2*c)*c-1),"easeInCubic"===r.easing&&(s=c*c*c),"easeOutCubic"===r.easing&&(s=--c*c*c+1),"easeInOutCubic"===r.easing&&(s=c<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1),"easeInQuart"===r.easing&&(s=c*c*c*c),"easeOutQuart"===r.easing&&(s=1- --c*c*c*c),"easeInOutQuart"===r.easing&&(s=c<.5?8*c*c*c*c:1-8*--c*c*c*c),"easeInQuint"===r.easing&&(s=c*c*c*c*c),"easeOutQuint"===r.easing&&(s=1+--c*c*c*c*c),"easeInOutQuint"===r.easing&&(s=c<.5?16*c*c*c*c*c:1+16*--c*c*c*c*c),r.customEasing&&(s=r.customEasing(c)),s||c),e.scrollTo(0,Math.floor(S)),function(t,n){var r=e.pageYOffset;if(t==n||r==n||(y<n&&e.innerHeight+r)>=T)return f.cancelScroll(!0),i(o,n,m),a("scrollStop",u,o,l),!(p=x=null)}(S,L)||(p=e.requestAnimationFrame(t),x=n)})))}}},m=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(l))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var n,r;try{n=o(decodeURIComponent(u.hash))}catch(t){n=o(u.hash)}if("#"===n){if(!s.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(n);(r=r||"#top"!==n?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(s),f.animateScroll(r,u))}},h=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){s&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",h,!1),f.cancelScroll(),p=d=u=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),s=n(t,c||{}),d=s.header?document.querySelector(s.header):null,document.addEventListener("click",m,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",h,!1)}(),f}}(r)}.apply(t,[]))||(e.exports=o)}).call(this,n(7))},function(e,t){var n,o,r,i;Array.from||(Array.from=(n=Object.prototype.toString,o=function(e){return"function"==typeof e||"[object Function]"===n.call(e)},r=Math.pow(2,53)-1,i=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),r)},function(e){var t=this,n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var r,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!o(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(r=arguments[2])}for(var l,c=i(n.length),s=o(t)?Object(new t(c)):new Array(c),u=0;u<c;)l=n[u],s[u]=a?void 0===r?a(l,u):a.call(r,l,u):l,u+=1;return s.length=c,s}))},function(e,t){[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}))},function(e,t){var n;(n=window.Node||window.Element)&&n.prototype&&null==n.prototype.children&&Object.defineProperty(n.prototype,"children",{get:function(){for(var e,t=0,n=this.childNodes,o=[];e=n[t++];)1===e.nodeType&&o.push(e);return o}})},function(e,t){[Element.prototype,CharacterData.prototype].forEach((function(e){e.hasOwnProperty("previousElementSibling")||Object.defineProperty(e,"previousElementSibling",{configurable:!0,enumerable:!0,get:function(){for(var e=this;e=e.previousSibling;)if(1===e.nodeType)return e;return null},set:void 0})}))},function(e,t){switch(document.querySelector("main > section").getAttribute("id")){case"inspection":case"loading":document.body.classList.add("load-and-inspect");break;default:document.body.classList.remove("load-and-inspect")}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n=Array.from(document.querySelectorAll(".nano"));null!==n&&n.map((function(e){var t=e.textContent;t=t.replace(/,|\./gi,""),t=parseFloat(t);var n=(t=(t=(t/=1e9).toFixed(9)).toString()).split(".");n[0]=parseFloat(n[0]).toLocaleString();var o="".concat(n[0],".").concat(n[1]);e.innerText=o}))},function(e,t){var n=Array.from(document.querySelectorAll(".withdraw-possible"));null!==n&&n.map((function(e){var t=e.textContent;if(t=t.replace(/,|\./gi,""),(t=(t=((t=parseFloat(t))-2e7)/1e9).toFixed(9))<=.020000001)e.textContent="0.000000000";else{var n=(t=t.toString()).split(".");n[0]=parseFloat(n[0]).toLocaleString();var o="".concat(n[0],".").concat(n[1]);e.textContent=o}}))},function(e,t){var n=Array.from(document.querySelectorAll(".agree-wrap"));null!==n&&n.map((function(e){e.addEventListener("click",(function(){e.children[0].checked?(e.nextElementSibling.classList.add("active"),e.nextElementSibling.removeAttribute("disabled")):(e.nextElementSibling.classList.remove("active"),e.nextElementSibling.setAttribute("disabled",""))}))}))},function(e,t){var n=document.querySelector("#loading");if(null!==n){var o=document.querySelector("#loading .text"),r={create:"지갑을 생성 중입니다.",active:"지갑을 활성화 중입니다."};switch(n.getAttribute("class")){case"create-wallet":o.textContent=r.create;break;case"active-wallet":o.textContent=r.active}}},function(e,t){if(null!==document.getElementById("cookie-guide")){var n=Array.from(document.querySelectorAll("ul.os-tab > li")),o=Array.from(document.querySelectorAll("ul.os-box > li")),r=Array.from(document.querySelectorAll("nav.browser-tab figure")),i=Array.from(document.querySelectorAll("article.contents"));n.map((function(e,t){e.addEventListener("click",(function(){n.map((function(t,n){e===t?t.classList.add("active"):t.classList.remove("active")})),0===t&&(r[0].classList.add("on"),r[1].classList.remove("on"),i[0].classList.add("on"),i[1].classList.remove("on")),1===t&&(r[2].classList.add("on"),r[3].classList.remove("on"),i[2].classList.add("on"),i[3].classList.remove("on")),2===t&&(r[4].classList.add("on"),r[5].classList.remove("on"),i[4].classList.add("on"),i[5].classList.remove("on")),o.map((function(e,n){t===n?e.classList.add("active"):e.classList.remove("active")}))}))})),r.map((function(e,t){e.addEventListener("click",(function(){r.map((function(t,n){e===t?t.classList.add("on"):t.classList.remove("on")})),i.map((function(e,n){t===n?e.classList.add("on"):e.classList.remove("on")}))}))}))}},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5);var o,r=(o=navigator.userAgent.toLocaleLowerCase()).indexOf("msie 7")>=0||o.indexOf("msie 8")>=0||o.indexOf("msie 9")>=0?"ie":o.indexOf("msie 10")>=0?(o.indexOf("Touch"),"ie"):o.indexOf("rv:11.0")>=0?"ie":o.indexOf("edge/12.0")>=0?"edge":o.indexOf("chrome")>=0?"chrome":o.indexOf("safari")>=0?"safari":o.indexOf("firefox")>=0?"firefox":o.indexOf("opera")>=0?"opera":o;document.addEventListener("DOMContentLoaded",(function(){if("ie"==r){var e=[{name:"Chrome",url:"https://www.google.com/intl/ko_ALL/chrome/",image:"https://www.google.com/chrome/static/images/chrome-logo.svg"},{name:"FireFox",url:"https://www.mozilla.org/ko/firefox/",image:"https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png"},{name:"Whale",url:"https://whale.naver.com/ko/",image:"https://upload.wikimedia.org/wikipedia/ko/7/7a/Naver_whale_logo.png"},{name:"Opera",url:"https://www.opera.com/ko/computer/",image:"https://www-static.operacdn.com/static-heap/6e/6eeaecd153e69883e2429e4755f5361048cfac89/opera-mobile-apps.png"}],t=function(e,t){var n=document.createElement(e);return n.setAttribute("class",t),n},n=function(e,t,n){var o=document.createElement("li"),r=document.createElement("a"),i=document.createElement("img"),a=document.createElement("div");return o.appendChild(r),r.appendChild(i),r.appendChild(a),r.setAttribute("href",t),r.setAttribute("target","_blank"),i.setAttribute("src",n),a.textContent=e,o.addEventListener("mouseover",(function(){o.style.opacity=1})),o.addEventListener("mouseout",(function(){o.style.opacity=.7})),o.style.cssText="\n      width: 25%;\n      float: left;\n      text-align: center;\n      opacity: .7;\n      -webkit-transition: .3s;\n      -ms-transition: .3s;\n      transition: .3s;\n    ",i.style.cssText="\n      width: 50px;\n      height: 50px;\n      display: inline-block;\n    ",o},o=t("div","ie-container"),i=t("figure","logo-wrap"),a=t("img","logo"),l=t("div","warpper"),c=t("div","notice"),s=t("div","suggest"),u=t("div","other"),d=t("ul","box");body.innerHTML="",body.appendChild(o),o.appendChild(i),o.appendChild(l),i.appendChild(a),l.appendChild(c),l.appendChild(s),l.appendChild(u),u.appendChild(d);for(var p=0;p<e.length;p++){var f=n(e[p].name,e[p].url,e[p].image);d.appendChild(f)}a.setAttribute("src","/assets/images/icons/apple-icon.png"),c.textContent="\n    Firston 서비스는\n    Internet Explorer 브라우저에서 원활하게\n    동작하지 않습니다.\n  ",s.textContent="아래 브라우저들을 이용해주세요.",o.style.cssText="\n    position: fixed;\n    top: 0;\n    left: 50%;\n    transform: translate(-50%, 0);\n    width: 100vw;\n    max-width: 1680px;\n    height: 100vh;\n  ",i.style.cssText="\n    position: absolute;\n    top: 30px;\n    left: 40px;\n    // height: 70px;\n    // padding: 0 50px;\n    display: flex;\n    align-items: center;\n  ",a.style.cssText="\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n  ",l.style.cssText="\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    // width: 100%;\n    // max-width: 500px;\n  ",c.style.cssText="\n    font-weight: 700;\n    white-space: nowrap;\n    margin-bottom: 20px;\n  ",s.style.cssText="\n    text-align: center;\n  ",u.style.cssText="\n    margin-top: 50px;\n  "}}));var i=function(e,t){var n=document.createElement(e);return n.setAttribute("class","popup-".concat(t)),n},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=!1;return function(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];n||(n=!!setTimeout((function(){e.apply(void 0,r),n=!1}),t))}},l=document.querySelector(".top-btn");null!==l&&window.addEventListener("scroll",a((function(){var e=window.pageYOffset;l.style.display=e>0?"block":"none"})));var c,s,u=document.querySelector("main > #home");c="mainpopup",s=null,document.cookie.split(";").some((function(e){var t=(e=e.replace(" ","")).split("=");if(c===t[0])return s=t[1],!0}));if(null!==u){!function(){var e=i("div","container"),t=i("div","wrapper"),n=i("div","box"),o=i("div","header"),r=i("div","title"),a=i("button","close"),l=i("div","body"),c=i("div","content"),s=i("div","footer"),u=(i("div","check-group"),i("input","check-input"),i("label","check-label")),d=i("div","check-label-bundle"),p=i("span","check-image"),f=i("p","check-comment");document.body.appendChild(e),e.appendChild(t),t.appendChild(n),n.appendChild(o),n.appendChild(l),n.appendChild(s),o.appendChild(r),o.appendChild(a),l.appendChild(c),r.textContent="서비스 종료 안내",c.innerHTML='\n      <p>\n        <h3 style="display: inline-block; color: #e74c3c; text-decoration: underline; margin-right: 5px;">\n          Firston Wallet\n        </h3>\n        <span>\n          서비스가 종료됩니다.\n        </span>\n      </p>\n      <br/>\n      <p style="">\n        먼저 Firston Wallet 이용자 여러분께 진심으로 감사의 말씀을 드리며,\n        Firston Wallet 서비스를 종료하게 되었음을 안내해드립니다.\n      </p>\n      <br/>\n      <p>\n        안정적인 서비스 제공을 위해 <span style="color: blue;">KiloX Wallet</span> 서비스에 집중하기로 결정하게 되었습니다.\n      </p>\n      <br/>\n      <p>\n        현재 버전 차이로 인한 출금 사고를 미연에 방지하고자 Firston Wallet 출금 기능을 중지한 상태이며\n        잔여 수량이 남으신 고객님께서는 아래 텔레그램 KiloX 고객센터로 연락을 주시면 원하시는 TON 주소로 송금 처리해 드리도록 하겠습니다.\n      </p>\n      <p style="font-size: 0.84em; color: red; margin-top: 6px;">\n        * 잔여 수량이 ≈ 0.1 이하이신 고객님께서는 톤 블록체인의 송금 수수료로 인한 잔액 부족으로 송금이 불가할 수 있음을 미리 말씀드립니다.\n      </p>\n      <br/>\n      <a style="display: flex; align-content: center; cursor: pointer;" href="https://t.me/kilox_cs" target="blank">\n          <img style="width: 24px; height: 24px;" src="https://t1.daumcdn.net/cfile/tistory/99D3C63B5E8207CC10"/>\n          <span style="color: rgba(76,183,227,1); margin-left: 6px; font-weight: bold;">KiloX 고객센터</span>\n      </a>\n      <br/>\n      \x3c!--\n      <ul>\n        <li>\n          <b style="font-weight: bold; color: #d35400; margin-right: 30px;">종료 일자</b>\n          <span><b style="font-weight: bold;">2021</b>년 <b style="font-weight: bold;">2</b>월 <b style="font-weight: bold;">5</b>일</span>\n        </li>\n      </ul>\n      <br/>\n      <p>\n        전용 애플리케이션을 설치하시고 Firston Wallet에 있는 자산을 KiloX Wallet으로 옮기셔서 이용해 주시기 바랍니다.\n      </p>\n      --\x3e\n      <p>\n        감사합니다.\n      </p>\n      <br/>\n      <br/>\n      <div style="display: flex; align-items: center; justify-content: center;">\n        <a href="https://play.google.com/store/apps/details?id=com.kilox.app&hl=ko" style="" target="_blank">\n          <img style="width: 4em; border-radius: 14.6%; box-shadow: 1px 1px 5px rgba(0,0,0,0.6);" src="https://play-lh.googleusercontent.com/1siCbYovOktLBtxL86r0u7LLksSuYBMhJeBOZvdCFdBNWu3mx_BL3B-V1ckfhHTuHA=s180-rw" />\n          \x3c!-- <img style="width: 4em; border-radius: 14.6%; box-shadow: 1px 1px 5px rgba(0,0,0,0.6);" src="data:image/webp;base64,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" /> --\x3e\n        </a>\n        <span style="margin: 0 2em;">for</span>\n        <img style="width: 13em; height: auto;" src="https://cdn.worldvectorlogo.com/logos/google-play-4.svg" />\n      </div>\n      <br/>\n      <div style="display: flex; align-items: center; justify-content: center;">\n        <a href="https://apps.apple.com/us/app/kilox-wallet/id1535086604" style="" target="_blank">\n          <img style="width: 4em; border-radius: 14.6%; box-shadow: 1px 1px 5px rgba(0,0,0,0.6);" src="https://play-lh.googleusercontent.com/1siCbYovOktLBtxL86r0u7LLksSuYBMhJeBOZvdCFdBNWu3mx_BL3B-V1ckfhHTuHA=s180-rw" />\n        </a>\n        <span style="margin: 0 2em;">for</span>\n        <img style="width: 13em; height: auto;" src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg" />\n      </div>\n      \x3c!--\n      <p style="font-size: 0.85em; margin-top: 0.8em; text-align: center; color: #1e90ff; ">🚀 iOS용 정식 버전 출시하였습니다</p>\n      --\x3e\n    ',f.textContent="7일 동안 보이지 않기",e.style.cssText="\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 99999999;\n    width: 100vw;\n    height: 100vh;\n    overflow-y: scroll;\n    background-color: rgba(0,0,0,.7);\n  ",matchMedia("screen and (min-width: 768px)").matches?(t.style.cssText="\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate3d(-50%, -50%, 0);\n    ",n.style.cssText="\n      background-color: #fff;\n      width: 90vw;\n      max-width: 500px;\n      border-radius: 5px;\n      padding: 5px 0;\n    ",o.style.cssText="\n      position: relative;\n      padding: 22px 0;\n      text-align: center;\n    "):(t.style.cssText="\n      position: absolute;\n      width: 100%;\n      min-height: 100vh;\n      top: 0;\n      left: 0;\n    ",n.style.cssText="\n      background-color: #fff;\n      width: 100vw;\n      min-height: 100vh;\n      border-radius: 5px;\n      padding: 5px 0;\n    ",o.style.cssText="\n      position: relative;\n      padding: 32px 0;\n      text-align: center;\n    "),r.style.cssText="\n    font-weight: bold;\n    font-size: 1.2em;\n  ",a.style.cssText="\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    width: 26px;\n    height: 26px;\n    transform: translate3d(0, -50%, 0);\n    background-image: url('https://icongr.am/clarity/close.svg?size=26&color=000000');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    cursor: pointer;\n  ",l.style.cssText="\n    padding: 30px 20px;\n  ",c.style.cssText="\n    line-height: 1.8;\n\n    // text-align: center;\n  ",s.style.cssText="\n    padding: 20px;\n  ",u.style.cssText="\n    display: inline-block;\n    cursor: pointer;\n  ",d.style.cssText="\n    display: flex;\n    align-items: center;\n  ",p.style.cssText='\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    // background-image: url("/assets/images/symbols/check.svg");\n    background-size: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n  ',f.style.cssText="\n    display: inline-block;\n    color: #78918f;\n    font-size: 0.95em;\n    margin-left: 5px;\n  "}();var d=document.querySelector(".popup-container"),p=document.querySelector(".popup-close");document.querySelector(".popup-check-input"),document.querySelector(".popup-check-label"),document.querySelector(".popup-check-image");p.addEventListener("click",(function(e){d.parentElement.removeChild(d)}))}n(6);var f=n(1);new(n.n(f).a)('a[href*="#"]',{speed:300,speedAsDuration:!0});window.addEventListener("resize",a((function(){if(null!==document.querySelector("section#wallet")){var e=document.querySelector("body > header"),t=document.querySelector("section#wallet > .top-container"),n=document.querySelector("section#wallet > ul.tab"),o=document.querySelector("section#wallet > .transaction-list"),r=getComputedStyle(t).marginTop,i=parseInt(r.substring(0,r.length-2)),a=window.innerHeight-(e.clientHeight+t.clientHeight+i+n.clientHeight);o.style.minHeight="".concat(a,"px")}}),10));var m=n(0),h=n.n(m),y=document.querySelector("#address"),g=document.querySelector(".copy-icon");if(null!==y){var v=new h.a(y),b=new h.a(g),x=function(){g.classList.add("modal"),setTimeout((function(){g.classList.remove("modal")}),1300)};v.on("success",x),b.on("success",x)}n(9),n(10);function w(e){for(var t=new RegExp(/(-?\d+)(\d{3})/),n=e.indexOf(".",0),o=e.split(".");t.test(o[0]);)o[0]=o[0].replace(t,"$1,$2");return n>-1?(o[1]=o[1].substring(0,9),e=o[0]+"."+o[1]):e=o[0],e}function S(e){var t,n=e.indexOf(".",0),o=e.split(".");return o[0]=(t=(t=""+(t=o[0]).replace(/,/gi,"")).replace(/(^\s*)|(\s*$)/g,""),new Number(t)),n>-1?o[0]+Number("".concat(0,".")+"".concat(o[1])):o[0]}var E=Array.from(document.querySelectorAll(".withdraw-possible")),k=Array.from(document.querySelectorAll(".max-input")),A=Array.from(document.querySelectorAll(".total-plus-fee dd"));null!==k&&k.map((function(e,t){var n,o,r,i,a;E.map((function(e,n){t==n&&(r=e.textContent,i=parseFloat(r.replace(/,/gi,"")))})),e.addEventListener("keyup",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=null;return function(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,r)}),t)}}((function(e){var l,c;8!=(c=(l=(l=e)||window.event).which?l.which:l.keyCode)&&46!=c&&37!=c&&39!=c&&(l.target.value=l.target.value.replace(/[^\.0-9]/g,"")),e.target.value=w(e.target.value),n=e.target.value,console.log(n),o=S(n),a=o+.02,o>i&&(e.target.value=r,a=i+.02),""==n&&(a="0.0"),a=w(a=a.toString()),A.map((function(e,n){if(t==n){var o=e.nextElementSibling;e.textContent=a,o.value=S(a)}}))})))}));var L,C,T=Array.from(document.querySelectorAll(".amount-max")),O=Array.from(document.querySelectorAll(".withdraw-possible")),q=Array.from(document.querySelectorAll(".max-input")),M=Array.from(document.querySelectorAll(".total-plus-fee dd"));null!==T&&T.map((function(e,t){e.addEventListener("click",(function(){O.map((function(e,n){t==n&&(L=e.textContent)})),q.map((function(e,n){t==n&&(e.value=L)})),C=S(L),C=w(C=(C+=.02).toString()),M.map((function(e,n){t==n&&(e.textContent=C,e.nextElementSibling.value=S(C))}))}))}));n(11),n(12);!function(){var e=document.querySelector("body > header"),t=document.querySelector(".hamburger"),n=document.querySelector(".mobile-nav-back"),o=document.querySelector(".mobile-nav"),r=document.querySelector(".mobile-nav .close"),i=Array.from(document.querySelectorAll(".mobile-nav ul a"));if(null!==e){var a=function(e){o.classList.toggle("active"),n.classList.toggle("active")};t.addEventListener("click",a),r.addEventListener("click",a),i.map((function(e){e.addEventListener("click",a)}))}}();n(13)}]);
//# sourceMappingURL=app.js.map