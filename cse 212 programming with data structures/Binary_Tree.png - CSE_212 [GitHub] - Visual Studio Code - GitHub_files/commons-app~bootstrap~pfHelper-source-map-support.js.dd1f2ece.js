(self.webpackChunkcodespaces_web_client=self.webpackChunkcodespaces_web_client||[]).push([[260],{11890:(e,n,r)=>{e=r.nmd(e);var t,i=r(27061),o=r(45517).SourceMapConsumer,u=r(67425);try{(t=r(42782)).existsSync&&t.readFileSync||(t=null)}catch(e){}var a=r(91613);function s(e,n){return e.require(n)}var c=!1,l=!1,f=!1,p="auto",v={},m={},h=/^data:application\/json[^,]+base64,/,g=[],d=[];function y(){return"browser"===p||"node"!==p&&("undefined"!=typeof window&&"function"==typeof XMLHttpRequest&&!(window.require&&window.module&&window.process&&"renderer"===window.process.type))}function w(e){return function(n){for(var r=0;r<e.length;r++){var t=e[r](n);if(t)return t}return null}}var S=w(g);function x(e,n){if(!e)return n;var r=u.dirname(e),t=/^\w+:\/\/[^\/]*/.exec(r),i=t?t[0]:"",o=r.slice(i.length);return i&&/^\/\w\:/.test(o)?(i+="/")+u.resolve(r.slice(i.length),n).replace(/\\/g,"/"):i+u.resolve(r.slice(i.length),n)}g.push((function(e){if(e=e.trim(),/^file:/.test(e)&&(e=e.replace(/file:\/\/\/(\w:)?/,(function(e,n){return n?"":"/"}))),e in v)return v[e];var n="";try{if(t)t.existsSync(e)&&(n=t.readFileSync(e,"utf8"));else{var r=new XMLHttpRequest;r.open("GET",e,!1),r.send(null),4===r.readyState&&200===r.status&&(n=r.responseText)}}catch(e){}return v[e]=n}));var b=w(d);function N(e){var n=m[e.source];if(!n){var r=b(e.source);r?(n=m[e.source]={url:r.url,map:new o(r.map)}).map.sourcesContent&&n.map.sources.forEach((function(e,r){var t=n.map.sourcesContent[r];if(t){var i=x(n.url,e);v[i]=t}})):n=m[e.source]={url:null,map:null}}if(n&&n.map&&"function"==typeof n.map.originalPositionFor){var t=n.map.originalPositionFor(e);if(null!==t.source)return t.source=x(n.url,t.source),t}return e}function E(e){var n=/^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(e);if(n){var r=N({source:n[2],line:+n[3],column:n[4]-1});return"eval at "+n[1]+" ("+r.source+":"+r.line+":"+(r.column+1)+")"}return(n=/^eval at ([^(]+) \((.+)\)$/.exec(e))?"eval at "+n[1]+" ("+E(n[2])+")":e}function O(){var e,n="";if(this.isNative())n="native";else{!(e=this.getScriptNameOrSourceURL())&&this.isEval()&&(n=this.getEvalOrigin(),n+=", "),n+=e||"<anonymous>";var r=this.getLineNumber();if(null!=r){n+=":"+r;var t=this.getColumnNumber();t&&(n+=":"+t)}}var i="",o=this.getFunctionName(),u=!0,a=this.isConstructor();if(!(this.isToplevel()||a)){var s=this.getTypeName();"[object Object]"===s&&(s="null");var c=this.getMethodName();o?(s&&0!=o.indexOf(s)&&(i+=s+"."),i+=o,c&&o.indexOf("."+c)!=o.length-c.length-1&&(i+=" [as "+c+"]")):i+=s+"."+(c||"<anonymous>")}else a?i+="new "+(o||"<anonymous>"):o?i+=o:(i+=n,u=!1);return u&&(i+=" ("+n+")"),i}function P(e){var n={};return Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(r){n[r]=/^(?:is|get)/.test(r)?function(){return e[r].call(e)}:e[r]})),n.toString=O,n}function M(e,n){if(void 0===n&&(n={nextPosition:null,curPosition:null}),e.isNative())return n.curPosition=null,e;var r=e.getFileName()||e.getScriptNameOrSourceURL();if(r){var t=e.getLineNumber(),o=e.getColumnNumber()-1,u=/^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/.test("object"==typeof i&&null!==i?i.version:"")?0:62;1===t&&o>u&&!y()&&!e.isEval()&&(o-=u);var a=N({source:r,line:t,column:o});n.curPosition=a;var s=(e=P(e)).getFunctionName;return e.getFunctionName=function(){return null==n.nextPosition?s():n.nextPosition.name||s()},e.getFileName=function(){return a.source},e.getLineNumber=function(){return a.line},e.getColumnNumber=function(){return a.column+1},e.getScriptNameOrSourceURL=function(){return a.source},e}var c=e.isEval()&&e.getEvalOrigin();return c?(c=E(c),(e=P(e)).getEvalOrigin=function(){return c},e):e}function _(e,n){f&&(v={},m={});for(var r=(e.name||"Error")+": "+(e.message||""),t={nextPosition:null,curPosition:null},i=[],o=n.length-1;o>=0;o--)i.push("\n    at "+M(n[o],t)),t.nextPosition=t.curPosition;return t.curPosition=t.nextPosition=null,r+i.reverse().join("")}function R(e){var n=/\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(e.stack);if(n){var r=n[1],i=+n[2],o=+n[3],u=v[r];if(!u&&t&&t.existsSync(r))try{u=t.readFileSync(r,"utf8")}catch(e){u=""}if(u){var a=u.split(/(?:\r\n|\r|\n)/)[i-1];if(a)return r+":"+i+"\n"+a+"\n"+new Array(o).join(" ")+"^"}}return null}function k(e){var n=R(e),r=function(){if("object"==typeof i&&null!==i)return i.stderr}();r&&r._handle&&r._handle.setBlocking&&r._handle.setBlocking(!0),n&&(console.error(),console.error(n)),console.error(e.stack),function(e){if("object"==typeof i&&null!==i&&"function"==typeof i.exit)i.exit(e)}(1)}d.push((function(e){var n,r=function(e){var n;if(y())try{var r=new XMLHttpRequest;r.open("GET",e,!1),r.send(null),n=4===r.readyState?r.responseText:null;var t=r.getResponseHeader("SourceMap")||r.getResponseHeader("X-SourceMap");if(t)return t}catch(e){}n=S(e);for(var i,o,u=/(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/gm;o=u.exec(n);)i=o;return i?i[1]:null}(e);if(!r)return null;if(h.test(r)){var t=r.slice(r.indexOf(",")+1);n=a(t,"base64").toString(),r=e}else r=x(e,r),n=S(r);return n?{url:r,map:n}:null}));var F=g.slice(0),C=d.slice(0);n.wrapCallSite=M,n.getErrorSource=R,n.mapSourcePosition=N,n.retrieveSourceMap=b,n.install=function(n){if((n=n||{}).environment&&(p=n.environment,-1===["node","browser","auto"].indexOf(p)))throw new Error("environment "+p+" was unknown. Available options are {auto, browser, node}");if(n.retrieveFile&&(n.overrideRetrieveFile&&(g.length=0),g.unshift(n.retrieveFile)),n.retrieveSourceMap&&(n.overrideRetrieveSourceMap&&(d.length=0),d.unshift(n.retrieveSourceMap)),n.hookRequire&&!y()){var r=s(e,"module"),t=r.prototype._compile;t.__sourceMapSupport||(r.prototype._compile=function(e,n){return v[n]=e,m[n]=void 0,t.call(this,e,n)},r.prototype._compile.__sourceMapSupport=!0)}if(f||(f="emptyCacheBetweenOperations"in n&&n.emptyCacheBetweenOperations),c||(c=!0,Error.prepareStackTrace=_),!l){var o=!("handleUncaughtExceptions"in n)||n.handleUncaughtExceptions;try{!1===s(e,"worker_threads").isMainThread&&(o=!1)}catch(e){}o&&"object"==typeof i&&null!==i&&"function"==typeof i.on&&(l=!0,u=i.emit,i.emit=function(e){if("uncaughtException"===e){var n=arguments[1]&&arguments[1].stack,r=this.listeners(e).length>0;if(n&&!r)return k(arguments[1])}return u.apply(this,arguments)})}var u},n.resetRetrieveHandlers=function(){g.length=0,d.length=0,g=F.slice(0),d=C.slice(0),b=w(d),S=w(g)}}}]);