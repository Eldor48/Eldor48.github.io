"use strict";(self.webpackChunkcodespaces_web_client=self.webpackChunkcodespaces_web_client||[]).push([[499],{40118:(e,t,r)=>{function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,l=void 0;try{for(var u,o=e[Symbol.iterator]();!(n=(u=o.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){i=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw l}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var l=void 0!==/a/g.flags,u=function(e){var t=[];return e.forEach((function(e){return t.push(e)})),t},o=function(e){var t=[];return e.forEach((function(e,r){return t.push([r,e])})),t},f=Object.is?Object.is:r(83822),a=Object.getOwnPropertySymbols?Object.getOwnPropertySymbols:function(){return[]},c=Number.isNaN?Number.isNaN:r(74866);function s(e){return e.call.bind(e)}var y=s(Object.prototype.hasOwnProperty),p=s(Object.prototype.propertyIsEnumerable),g=s(Object.prototype.toString),b=r(71323).types,h=b.isAnyArrayBuffer,v=b.isArrayBufferView,O=b.isDate,j=b.isMap,m=b.isRegExp,d=b.isSet,w=b.isNativeError,S=b.isBoxedPrimitive,A=b.isNumberObject,E=b.isStringObject,k=b.isBooleanObject,N=b.isBigIntObject,B=b.isSymbolObject,L=b.isFloat32Array,z=b.isFloat64Array;function x(e){if(0===e.length||e.length>10)return!0;for(var t=0;t<e.length;t++){var r=e.charCodeAt(t);if(r<48||r>57)return!0}return 10===e.length&&e>=Math.pow(2,32)}function I(e){return Object.keys(e).filter(x).concat(a(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))}function P(e,t){if(e===t)return 0;for(var r=e.length,n=t.length,i=0,l=Math.min(r,n);i<l;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0}function D(e,t,r,n){if(e===t)return 0!==e||(!r||f(e,t));if(r){if("object"!==i(e))return"number"==typeof e&&c(e)&&c(t);if("object"!==i(t)||null===e||null===t)return!1;if(Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1}else{if(null===e||"object"!==i(e))return(null===t||"object"!==i(t))&&e==t;if(null===t||"object"!==i(t))return!1}var u,o,a,s,y=g(e);if(y!==g(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;var p=I(e),b=I(t);return p.length===b.length&&U(e,t,r,n,1,p)}if("[object Object]"===y&&(!j(e)&&j(t)||!d(e)&&d(t)))return!1;if(O(e)){if(!O(t)||Date.prototype.getTime.call(e)!==Date.prototype.getTime.call(t))return!1}else if(m(e)){if(!m(t)||(a=e,s=t,!(l?a.source===s.source&&a.flags===s.flags:RegExp.prototype.toString.call(a)===RegExp.prototype.toString.call(s))))return!1}else if(w(e)||e instanceof Error){if(e.message!==t.message||e.name!==t.name)return!1}else{if(v(e)){if(r||!L(e)&&!z(e)){if(!function(e,t){return e.byteLength===t.byteLength&&0===P(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}(e,t))return!1}else if(!function(e,t){if(e.byteLength!==t.byteLength)return!1;for(var r=0;r<e.byteLength;r++)if(e[r]!==t[r])return!1;return!0}(e,t))return!1;var x=I(e),D=I(t);return x.length===D.length&&U(e,t,r,n,0,x)}if(d(e))return!(!d(t)||e.size!==t.size)&&U(e,t,r,n,2);if(j(e))return!(!j(t)||e.size!==t.size)&&U(e,t,r,n,3);if(h(e)){if(o=t,(u=e).byteLength!==o.byteLength||0!==P(new Uint8Array(u),new Uint8Array(o)))return!1}else if(S(e)&&!function(e,t){return A(e)?A(t)&&f(Number.prototype.valueOf.call(e),Number.prototype.valueOf.call(t)):E(e)?E(t)&&String.prototype.valueOf.call(e)===String.prototype.valueOf.call(t):k(e)?k(t)&&Boolean.prototype.valueOf.call(e)===Boolean.prototype.valueOf.call(t):N(e)?N(t)&&BigInt.prototype.valueOf.call(e)===BigInt.prototype.valueOf.call(t):B(t)&&Symbol.prototype.valueOf.call(e)===Symbol.prototype.valueOf.call(t)}(e,t))return!1}return U(e,t,r,n,0)}function M(e,t){return t.filter((function(t){return p(e,t)}))}function U(e,t,r,n,i,l){if(5===arguments.length){l=Object.keys(e);var u=Object.keys(t);if(l.length!==u.length)return!1}for(var o=0;o<l.length;o++)if(!y(t,l[o]))return!1;if(r&&5===arguments.length){var f=a(e);if(0!==f.length){var c=0;for(o=0;o<f.length;o++){var s=f[o];if(p(e,s)){if(!p(t,s))return!1;l.push(s),c++}else if(p(t,s))return!1}var g=a(t);if(f.length!==g.length&&M(t,g).length!==c)return!1}else{var b=a(t);if(0!==b.length&&0!==M(t,b).length)return!1}}if(0===l.length&&(0===i||1===i&&0===e.length||0===e.size))return!0;if(void 0===n)n={val1:new Map,val2:new Map,position:0};else{var h=n.val1.get(e);if(void 0!==h){var v=n.val2.get(t);if(void 0!==v)return h===v}n.position++}n.val1.set(e,n.position),n.val2.set(t,n.position);var O=F(e,t,r,l,n,i);return n.val1.delete(e),n.val2.delete(t),O}function _(e,t,r,n){for(var i=u(e),l=0;l<i.length;l++){var o=i[l];if(D(t,o,r,n))return e.delete(o),!0}return!1}function C(e){switch(i(e)){case"undefined":return null;case"object":return;case"symbol":return!1;case"string":e=+e;case"number":if(c(e))return!1}return!0}function R(e,t,r){var n=C(r);return null!=n?n:t.has(n)&&!e.has(n)}function T(e,t,r,n,i){var l=C(r);if(null!=l)return l;var u=t.get(l);return!(void 0===u&&!t.has(l)||!D(n,u,!1,i))&&(!e.has(l)&&D(n,u,!1,i))}function q(e,t,r,n,i,l){for(var o=u(e),f=0;f<o.length;f++){var a=o[f];if(D(r,a,i,l)&&D(n,t.get(a),i,l))return e.delete(a),!0}return!1}function F(e,t,r,l,f,a){var c=0;if(2===a){if(!function(e,t,r,n){for(var l=null,o=u(e),f=0;f<o.length;f++){var a=o[f];if("object"===i(a)&&null!==a)null===l&&(l=new Set),l.add(a);else if(!t.has(a)){if(r)return!1;if(!R(e,t,a))return!1;null===l&&(l=new Set),l.add(a)}}if(null!==l){for(var c=u(t),s=0;s<c.length;s++){var y=c[s];if("object"===i(y)&&null!==y){if(!_(l,y,r,n))return!1}else if(!r&&!e.has(y)&&!_(l,y,r,n))return!1}return 0===l.size}return!0}(e,t,r,f))return!1}else if(3===a){if(!function(e,t,r,l){for(var u=null,f=o(e),a=0;a<f.length;a++){var c=n(f[a],2),s=c[0],y=c[1];if("object"===i(s)&&null!==s)null===u&&(u=new Set),u.add(s);else{var p=t.get(s);if(void 0===p&&!t.has(s)||!D(y,p,r,l)){if(r)return!1;if(!T(e,t,s,y,l))return!1;null===u&&(u=new Set),u.add(s)}}}if(null!==u){for(var g=o(t),b=0;b<g.length;b++){var h=n(g[b],2),v=(s=h[0],h[1]);if("object"===i(s)&&null!==s){if(!q(u,e,s,v,r,l))return!1}else if(!(r||e.has(s)&&D(e.get(s),v,!1,l)||q(u,e,s,v,!1,l)))return!1}return 0===u.size}return!0}(e,t,r,f))return!1}else if(1===a)for(;c<e.length;c++){if(!y(e,c)){if(y(t,c))return!1;for(var s=Object.keys(e);c<s.length;c++){var p=s[c];if(!y(t,p)||!D(e[p],t[p],r,f))return!1}return s.length===Object.keys(t).length}if(!y(t,c)||!D(e[c],t[c],r,f))return!1}for(c=0;c<l.length;c++){var g=l[c];if(!D(e[g],t[g],r,f))return!1}return!0}e.exports={isDeepEqual:function(e,t){return D(e,t,false)},isDeepStrictEqual:function(e,t){return D(e,t,true)}}}}]);