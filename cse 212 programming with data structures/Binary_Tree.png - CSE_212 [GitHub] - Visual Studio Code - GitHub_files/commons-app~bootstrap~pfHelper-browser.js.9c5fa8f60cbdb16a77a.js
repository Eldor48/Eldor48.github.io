(self.webpackChunkcodespaces_web_client=self.webpackChunkcodespaces_web_client||[]).push([[750],{98901:(e,r,t)=>{var n=t(13615),i=t(82576),o=t(74923);r.createCipher=r.Cipher=n.createCipher,r.createCipheriv=r.Cipheriv=n.createCipheriv,r.createDecipher=r.Decipher=i.createDecipher,r.createDecipheriv=r.Decipheriv=i.createDecipheriv,r.listCiphers=r.getCiphers=function(){return Object.keys(o)}},11240:(e,r,t)=>{var n=t(35681),i=t(98901),o=t(33834),u=t(71035),a=t(55883);function s(e,r,t){if(e=e.toLowerCase(),o[e])return i.createCipheriv(e,r,t);if(u[e])return new n({key:r,iv:t,mode:e});throw new TypeError("invalid suite type")}function c(e,r,t){if(e=e.toLowerCase(),o[e])return i.createDecipheriv(e,r,t);if(u[e])return new n({key:r,iv:t,mode:e,decrypt:!0});throw new TypeError("invalid suite type")}r.createCipher=r.Cipher=function(e,r){var t,n;if(e=e.toLowerCase(),o[e])t=o[e].key,n=o[e].iv;else{if(!u[e])throw new TypeError("invalid suite type");t=8*u[e].key,n=u[e].iv}var i=a(r,!1,t,n);return s(e,i.key,i.iv)},r.createCipheriv=r.Cipheriv=s,r.createDecipher=r.Decipher=function(e,r){var t,n;if(e=e.toLowerCase(),o[e])t=o[e].key,n=o[e].iv;else{if(!u[e])throw new TypeError("invalid suite type");t=8*u[e].key,n=u[e].iv}var i=a(r,!1,t,n);return c(e,i.key,i.iv)},r.createDecipheriv=r.Decipheriv=c,r.listCiphers=r.getCiphers=function(){return Object.keys(u).concat(i.getCiphers())}},45081:(e,r,t)=>{var n=t(30816).Buffer,i=t(29749),o=t(63785);e.exports=function(e){return new a(e)};var u={secp256k1:{name:"secp256k1",byteLength:32},secp224r1:{name:"p224",byteLength:28},prime256v1:{name:"p256",byteLength:32},prime192v1:{name:"p192",byteLength:24},ed25519:{name:"ed25519",byteLength:32},secp384r1:{name:"p384",byteLength:48},secp521r1:{name:"p521",byteLength:66}};function a(e){this.curveType=u[e],this.curveType||(this.curveType={name:e}),this.curve=new i.ec(this.curveType.name),this.keys=void 0}function s(e,r,t){Array.isArray(e)||(e=e.toArray());var i=new n(e);if(t&&i.length<t){var o=new n(t-i.length);o.fill(0),i=n.concat([o,i])}return r?i.toString(r):i}u.p224=u.secp224r1,u.p256=u.secp256r1=u.prime256v1,u.p192=u.secp192r1=u.prime192v1,u.p384=u.secp384r1,u.p521=u.secp521r1,a.prototype.generateKeys=function(e,r){return this.keys=this.curve.genKeyPair(),this.getPublicKey(e,r)},a.prototype.computeSecret=function(e,r,t){return r=r||"utf8",n.isBuffer(e)||(e=new n(e,r)),s(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(),t,this.curveType.byteLength)},a.prototype.getPublicKey=function(e,r){var t=this.keys.getPublic("compressed"===r,!0);return"hybrid"===r&&(t[t.length-1]%2?t[0]=7:t[0]=6),s(t,e)},a.prototype.getPrivateKey=function(e){return s(this.keys.getPrivate(),e)},a.prototype.setPublicKey=function(e,r){return r=r||"utf8",n.isBuffer(e)||(e=new n(e,r)),this.keys._importPublic(e),this},a.prototype.setPrivateKey=function(e,r){r=r||"utf8",n.isBuffer(e)||(e=new n(e,r));var t=new o(e);return t=t.toString(16),this.keys=this.curve.genKeyPair(),this.keys._importPrivate(t),this}},57266:(e,r,t)=>{"use strict";var n=t(70087),i=t(79500),o=t(86558),u=t(54458),a=t(73081);function s(e){a.call(this,"digest"),this._hash=e}n(s,a),s.prototype._update=function(e){this._hash.update(e)},s.prototype._final=function(){return this._hash.digest()},e.exports=function(e){return"md5"===(e=e.toLowerCase())?new i:"rmd160"===e||"ripemd160"===e?new o:new s(u(e))}},12873:(e,r,t)=>{"use strict";var n=t(70087),i=t(83042),o=t(73081),u=t(27172).Buffer,a=t(37401),s=t(86558),c=t(54458),f=u.alloc(128);function p(e,r){o.call(this,"digest"),"string"==typeof r&&(r=u.from(r));var t="sha512"===e||"sha384"===e?128:64;(this._alg=e,this._key=r,r.length>t)?r=("rmd160"===e?new s:c(e)).update(r).digest():r.length<t&&(r=u.concat([r,f],t));for(var n=this._ipad=u.allocUnsafe(t),i=this._opad=u.allocUnsafe(t),a=0;a<t;a++)n[a]=54^r[a],i[a]=92^r[a];this._hash="rmd160"===e?new s:c(e),this._hash.update(n)}n(p,o),p.prototype._update=function(e){this._hash.update(e)},p.prototype._final=function(){var e=this._hash.digest();return("rmd160"===this._alg?new s:c(this._alg)).update(this._opad).update(e).digest()},e.exports=function(e,r){return"rmd160"===(e=e.toLowerCase())||"ripemd160"===e?new p("rmd160",r):"md5"===e?new i(a,r):new p(e,r)}},96292:(e,r,t)=>{var n=t(27061);r.formatArgs=function(r){if(r[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+r[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const t="color: "+this.color;r.splice(1,0,t,"color: inherit");let n=0,i=0;r[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(n++,"%c"===e&&(i=n))})),r.splice(i,0,t)},r.save=function(e){try{e?r.storage.setItem("debug",e):r.storage.removeItem("debug")}catch(e){}},r.load=function(){let e;try{e=r.storage.getItem("debug")}catch(e){}!e&&void 0!==n&&"env"in n&&(e=n.env.DEBUG);return e},r.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},r.storage=function(){try{return localStorage}catch(e){}}(),r.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),r.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],r.log=console.debug||console.log||(()=>{}),e.exports=t(29374)(r);const{formatters:i}=e.exports;i.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},82834:(e,r,t)=>{var n=t(30816).Buffer,i=t(55174),o=t(87064),u=t(11554);var a={binary:!0,hex:!0,base64:!0};r.DiffieHellmanGroup=r.createDiffieHellmanGroup=r.getDiffieHellman=function(e){var r=new n(o[e].prime,"hex"),t=new n(o[e].gen,"hex");return new u(r,t)},r.createDiffieHellman=r.DiffieHellman=function e(r,t,o,s){return n.isBuffer(t)||void 0===a[t]?e(r,"binary",t,o):(t=t||"binary",s=s||"binary",o=o||new n([2]),n.isBuffer(o)||(o=new n(o,s)),"number"==typeof r?new u(i(r,o),o,!0):(n.isBuffer(r)||(r=new n(r,t)),new u(r,o,!0)))}},54167:(e,r)=>{r.endianness=function(){return"LE"},r.hostname=function(){return"undefined"!=typeof location?location.hostname:""},r.loadavg=function(){return[]},r.uptime=function(){return 0},r.freemem=function(){return Number.MAX_VALUE},r.totalmem=function(){return Number.MAX_VALUE},r.cpus=function(){return[]},r.type=function(){return"Browser"},r.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},r.networkInterfaces=r.getNetworkInterfaces=function(){return{}},r.arch=function(){return"javascript"},r.platform=function(){return"browser"},r.tmpdir=r.tmpDir=function(){return"/tmp"},r.EOL="\n",r.homedir=function(){return"/"}},50041:(e,r,t)=>{r.pbkdf2=t(96394),r.pbkdf2Sync=t(54355)},27061:e=>{var r,t,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{t="function"==typeof clearTimeout?clearTimeout:o}catch(e){t=o}}();var a,s=[],c=!1,f=-1;function p(){c&&a&&(c=!1,a.length?s=a.concat(s):f=-1,s.length&&h())}function h(){if(!c){var e=u(p);c=!0;for(var r=s.length;r;){for(a=s,s=[];++f<r;)a&&a[f].run();f=-1,r=s.length}a=null,c=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function l(e,r){this.fun=e,this.array=r}function C(){}n.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];s.push(new l(e,r)),1!==s.length||c||u(h)},l.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=C,n.addListener=C,n.once=C,n.off=C,n.removeListener=C,n.removeAllListeners=C,n.emit=C,n.prependListener=C,n.prependOnceListener=C,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},79639:(e,r,t)=>{r.publicEncrypt=t(89881),r.privateDecrypt=t(42619),r.privateEncrypt=function(e,t){return r.publicEncrypt(e,t,!0)},r.publicDecrypt=function(e,t){return r.privateDecrypt(e,t,!0)}},52830:(e,r,t)=>{"use strict";var n=t(27061),i=65536,o=4294967295;var u=t(27172).Buffer,a=t.g.crypto||t.g.msCrypto;a&&a.getRandomValues?e.exports=function(e,r){if(e>o)throw new RangeError("requested too many random bytes");var t=u.allocUnsafe(e);if(e>0)if(e>i)for(var s=0;s<e;s+=i)a.getRandomValues(t.slice(s,s+i));else a.getRandomValues(t);if("function"==typeof r)return n.nextTick((function(){r(null,t)}));return t}:e.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}},68519:(e,r,t)=>{"use strict";var n=t(27061);function i(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}var o=t(27172),u=t(52830),a=o.Buffer,s=o.kMaxLength,c=t.g.crypto||t.g.msCrypto,f=Math.pow(2,32)-1;function p(e,r){if("number"!=typeof e||e!=e)throw new TypeError("offset must be a number");if(e>f||e<0)throw new TypeError("offset must be a uint32");if(e>s||e>r)throw new RangeError("offset out of range")}function h(e,r,t){if("number"!=typeof e||e!=e)throw new TypeError("size must be a number");if(e>f||e<0)throw new TypeError("size must be a uint32");if(e+r>t||e>s)throw new RangeError("buffer too small")}function l(e,r,t,i){if(n.browser){var o=e.buffer,a=new Uint8Array(o,r,t);return c.getRandomValues(a),i?void n.nextTick((function(){i(null,e)})):e}if(!i)return u(t).copy(e,r),e;u(t,(function(t,n){if(t)return i(t);n.copy(e,r),i(null,e)}))}c&&c.getRandomValues||!n.browser?(r.randomFill=function(e,r,n,i){if(!(a.isBuffer(e)||e instanceof t.g.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');if("function"==typeof r)i=r,r=0,n=e.length;else if("function"==typeof n)i=n,n=e.length-r;else if("function"!=typeof i)throw new TypeError('"cb" argument must be a function');return p(r,e.length),h(n,r,e.length),l(e,r,n,i)},r.randomFillSync=function(e,r,n){void 0===r&&(r=0);if(!(a.isBuffer(e)||e instanceof t.g.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');p(r,e.length),void 0===n&&(n=e.length-r);return h(n,r,e.length),l(e,r,n)}):(r.randomFill=i,r.randomFillSync=i)},17451:(e,r,t)=>{function n(e){try{if(!t.g.localStorage)return!1}catch(e){return!1}var r=t.g.localStorage[e];return null!=r&&"true"===String(r).toLowerCase()}e.exports=function(e,r){if(n("noDeprecation"))return e;var t=!1;return function(){if(!t){if(n("throwDeprecation"))throw new Error(r);n("traceDeprecation")?console.trace(r):console.warn(r),t=!0}return e.apply(this,arguments)}}}}]);