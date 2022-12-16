(()=>{var e,t={35929:(e,t,r)=>{var o;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Net=void 0,t.Net={Socket:function(){}}}.apply(t,[r,t]),void 0===o||(e.exports=o)},77306:(e,t,r)=>{var o;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodespacesPendingOperationError=t.DisconnectedError=t.ConnectedError=t.ControlFlowError=void 0;class r extends Error{constructor(){super(...arguments),this.errorType="ControlFlowError"}}t.ControlFlowError=r;t.ConnectedError=class extends r{constructor(){super(...arguments),this.errorType="ConnectedError"}};t.DisconnectedError=class extends r{constructor(){super(...arguments),this.errorType="DisconnectedError"}};t.CodespacesPendingOperationError=class extends r{constructor(){super(...arguments),this.errorType="CodespacesPendingOperationError"}}}.apply(t,[r,t]),void 0===o||(e.exports=o)},27593:(e,t,r)=>{var o,n;o=[r,t,r(11627)],n=function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WorkbenchMountedTwiceError=t.NetworkError=t.ThrottlingApiError=t.JupyterError=t.SubdomainMismatchError=t.VSCodeCommitNotFound=t.RateLimitingError=t.FatalPlatformRedirectionError=t.CodespaceNotAvailableError=t.SshChannelError=t.OutdatedCodespaceStateError=t.CodespacesPolicyViolationError=t.CancellationError=t.AssertionError=t.HttpError=t.AuthenticationFatalError=t.AuthenticationError=t.GitHubRepoAccessError=t.GitHubNeedsAuthenticationError=t.GitHubError=void 0;class o{constructor(){this.errorType="GitHubError"}}t.GitHubError=o;t.GitHubNeedsAuthenticationError=class extends o{constructor(){super(...arguments),this.errorType="GitHubNeedsAuthenticationError"}};t.GitHubRepoAccessError=class extends o{constructor(){super(...arguments),this.errorType="GitHubRepoAccessError"}};class n extends r.BaseError{constructor(){super(...arguments),this.errorType="AuthenticationError"}}t.AuthenticationError=n;t.AuthenticationFatalError=class extends n{constructor(){super(...arguments),this.errorType="AuthenticationFatalError"}};class i extends r.BaseError{constructor(e,t){super(`${e} ${t}`),this.statusCode=e,this.statusText=t,this.errorType="HttpError"}}t.HttpError=i;t.AssertionError=class{constructor(){this.errorType="AssertionError"}};t.CancellationError=class{constructor(){this.errorType="CancellationError"}};class s extends Error{constructor(){super(...arguments),this.errorType="CodespacesPolicyViolationError"}}t.CodespacesPolicyViolationError=s;class a extends Error{constructor(e,t){super(e),this.state=t,this.errorType="OutdatedCodespaceStateError"}}t.OutdatedCodespaceStateError=a;class c extends Error{constructor(){super(...arguments),this.errorType="SshChannelError"}}t.SshChannelError=c;class d extends Error{constructor(){super(...arguments),this.errorType="CodespaceNotAvailableError"}}t.CodespaceNotAvailableError=d;t.FatalPlatformRedirectionError=class extends n{constructor(){super(...arguments),this.errorType="FatalPlatformRedirectionError"}};class u extends Error{constructor(){super(...arguments),this.errorType="RateLimitingError"}}t.RateLimitingError=u;class l extends Error{constructor(){super(...arguments),this.errorType="VSCodeCommitNotFound"}}t.VSCodeCommitNotFound=l;class p extends Error{constructor(){super(...arguments),this.errorType="SubdomainMismatchError"}}t.SubdomainMismatchError=p;class h extends Error{constructor(){super(...arguments),this.errorType="JupyterError"}}t.JupyterError=h;class E extends Error{constructor(){super(...arguments),this.errorType="ThrottlingApiError"}}t.ThrottlingApiError=E;class y extends Error{constructor(){super(...arguments),this.errorType="NetworkError"}}t.NetworkError=y;class C extends Error{constructor(){super(...arguments),this.errorType="WorkbenchMountedTwiceError"}}t.WorkbenchMountedTwiceError=C}.apply(t,o),void 0===n||(e.exports=n)},50162:(e,t,r)=>{var o;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodespaceErrorCodes=t.BillableOwnerType=t.CodespaceStateInfo=void 0,function(e){e.Deleted="Deleted",e.Available="Available",e.Unavailable="Unavailable",e.Shutdown="Shutdown",e.ShuttingDown="ShuttingDown",e.Failed="Failed",e.Starting="Starting",e.Provisioning="Provisioning",e.Queued="Queued",e.Rebuilding="Rebuilding",e.Updating="Updating"}(t.CodespaceStateInfo||(t.CodespaceStateInfo={})),function(e){e.User="User",e.Organization="Organization"}(t.BillableOwnerType||(t.BillableOwnerType={})),function(e){e[e.unknown=0]="unknown",e[e.exceededQuota=1]="exceededQuota",e[e.codespaceNameAlreadyExists=2]="codespaceNameAlreadyExists",e[e.codespaceDoesNotExist=3]="codespaceDoesNotExist",e[e.shutdownStaticCodespace=4]="shutdownStaticCodespace",e[e.startStaticCodespace=5]="startStaticCodespace",e[e.codespaceNotAvailable=6]="codespaceNotAvailable",e[e.codespaceNotShutdown=7]="codespaceNotShutdown",e[e.unableToAllocateResources=8]="unableToAllocateResources",e[e.unableToAllocateResourcesWhileStarting=9]="unableToAllocateResourcesWhileStarting",e[e.requestedAutoShutdownDelayMinutesIsInvalid=10]="requestedAutoShutdownDelayMinutesIsInvalid",e[e.unableToUpdateSku=11]="unableToUpdateSku",e[e.requestedSkuIsInvalid=12]="requestedSkuIsInvalid",e[e.heartbeatUnhealthy=13]="heartbeatUnhealthy",e[e.customContainersCreationFailed=14]="customContainersCreationFailed",e[e.shutdownFailed=1001]="shutdownFailed",e[e.cMBMutexFailure=1002]="cMBMutexFailure",e[e.cMBGeneralError=1003]="cMBGeneralError",e[e.startCodespaceHandlerFailedToStartContainer=1004]="startCodespaceHandlerFailedToStartContainer",e[e.startCodespaceHandlerRequiredParameterMissing=1005]="startCodespaceHandlerRequiredParameterMissing",e[e.startCodespaceHandlerKitchensinkMissing=1006]="startCodespaceHandlerKitchensinkMissing",e[e.startCodespaceHandlerLiveshareLoginFailed=1007]="startCodespaceHandlerLiveshareLoginFailed",e[e.startCodespaceHandlerMoreThanOneContainerFoundOnRestart=1008]="startCodespaceHandlerMoreThanOneContainerFoundOnRestart",e[e.customContainersGeneralError=1100]="customContainersGeneralError",e[e.customContainersKitchensinkCreationFailed=1121]="customContainersKitchensinkCreationFailed",e[e.customContainersKitchensinkStartFailed=1122]="customContainersKitchensinkStartFailed",e[e.customContainersCloneFailed=1151]="customContainersCloneFailed",e[e.customContainersPrivateClonetimeout=1152]="customContainersPrivateClonetimeout",e[e.customContainersCouldNotPullImage=1153]="customContainersCouldNotPullImage",e[e.customContainersCouldNotBuildUserImage=1154]="customContainersCouldNotBuildUserImage",e[e.customContainersCouldNotCreateUserContainer=1155]="customContainersCouldNotCreateUserContainer",e[e.customContainersCouldNotRunUserContainer=1156]="customContainersCouldNotRunUserContainer",e[e.customContainersCLICopyFailed=1157]="customContainersCLICopyFailed",e[e.customContainersDependenciesFailed=1158]="customContainersDependenciesFailed",e[e.customContainersCLIStartFailed=1158]="customContainersCLIStartFailed",e[e.customContainersIncorrectUserID=1159]="customContainersIncorrectUserID",e[e.customContainersComposeGeneralError=1200]="customContainersComposeGeneralError",e[e.customContainersComposeValidationError=1201]="customContainersComposeValidationError",e[e.customContainersComposeConfigError=1202]="customContainersComposeConfigError",e[e.customContainersWrongServiceError=1203]="customContainersWrongServiceError",e[e.customContainersComposeUpError=1204]="customContainersComposeUpError"}(t.CodespaceErrorCodes||(t.CodespaceErrorCodes={}))}.apply(t,[r,t]),void 0===o||(e.exports=o)},6074:function(e,t,r){var o,n,i=r(48764).Buffer,s=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};o=[r,t,r(48459),r(33746)],n=function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decryptCipherRecord=void 0;t.decryptCipherRecord=(e,t)=>s(void 0,void 0,void 0,(function*(){try{const n=i.from(e.iv,"base64"),s=new o.WebCipher(!1,t.method,t.methodMode,8*t.key.length,8*n.length);yield s.init(t.key,n);const a=i.from(e.payload,"base64"),c=yield s.transform(a),d=c.slice(0,4),u=(0,r.bufferToInt)(d),l=c.slice(4).slice(0,u);return l.toString("utf8")}catch(e){throw e}}))}.apply(t,o),void 0===n||(e.exports=n)},42006:function(e,t,r){var o,n,i=r(48764).Buffer,s=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return a(t,e),t},d=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};o=[r,t,r(52830),r(20593),r(33746)],n=function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.encryptCipherPayload=void 0,r=c(r);t.encryptCipherPayload=(e,t)=>d(void 0,void 0,void 0,(function*(){try{const s=r.default(16),a=new n.WebCipher(!0,t.method,t.methodMode,8*t.key.length,8*s.length),c=i.from(e,"utf8");yield a.init(t.key,s);const d=(0,o.intToBytes)(c.length),u=i.concat([d,c]);let l=a.blockLength-u.length%a.blockLength;for(;l<8;)l+=a.blockLength;const p=i.concat([u,r.default(l)]),h=yield a.transform(p);return{payload:h.toString("base64"),iv:s.toString("base64")}}catch(e){throw e}}))}.apply(t,o),void 0===n||(e.exports=n)},72736:(e,t,r)=>{var o,n=r(48764).Buffer;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enhanceEncryptionKeys=void 0;t.enhanceEncryptionKeys=e=>e.map((e=>({id:e.id,key:n.from(e.key,"base64"),expiresOn:parseInt(`${e.expiresOn}`,10),method:"AES",methodMode:"CBC"})))}.apply(t,[r,t]),void 0===o||(e.exports=o)},8957:function(e,t,r){var o,n,i=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};o=[r,t,r(47035),r(6074),r(42006),r(21398),r(98099)],n=function(e,t,r,o,n,s,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.localStorageKeychain=t.LocalStorageKeychain=t.trace=void 0,t.trace=a.mainTrace.createChild("LocalStorageKeychain");class c{get keys(){return(0,s.getKeychainKeys)().sort(((e,t)=>t.expiresOn-e.expiresOn))}readBookKeepingKeys(){try{const e=localStorage.getItem(r.ENTRIES_STORED_KEY);if(!e)return{};return JSON.parse(e)||{}}catch(e){return{}}}writeBookKeeingKeys(e){try{localStorage.setItem(r.ENTRIES_STORED_KEY,JSON.stringify(e))}catch(e){}}bookkeepKey(e){const t=this.readBookKeepingKeys();t[e]=!0,this.writeBookKeeingKeys(t)}removeBookkeepKey(e){const t=this.readBookKeepingKeys();delete t[e],this.writeBookKeeingKeys(t)}getCipherRecord(e){try{const t=localStorage.getItem(e);if(!t)return;return JSON.parse(t)}catch(e){t.trace.error("Failed to get cipher record",e)}}get(e){return i(this,void 0,void 0,(function*(){try{const t=this.getCipherRecord(e);if(!t)return;const r=this.getKeyToDecrypt(t.keyId);if(!r)return;const n=yield(0,o.decryptCipherRecord)(t,r);if(!n)return;return n}catch(e){t.trace.error(e)}}))}set(e,r){return i(this,void 0,void 0,(function*(){try{const t=this.getKeyToEncrypt();if(!t)return;const o=yield(0,n.encryptCipherPayload)(r,t);if(!o)return;const i=Object.assign(Object.assign({},o),{keyId:t.id}),s=JSON.stringify(i);localStorage.setItem(e,s),this.bookkeepKey(e)}catch(e){t.trace.error(e)}}))}delete(e){return i(this,void 0,void 0,(function*(){try{localStorage.removeItem(e),this.removeBookkeepKey(e)}catch(e){t.trace.error(e)}}))}getKeyToDecrypt(e){return this.keys.find((t=>t.id===e))}getKeyToEncrypt(){if(this.isValidAesKey(this.keys[0]))return this.keys[0];throw new Error("No valid keys found.")}isValidAesKey(e){if(!e)return!1;return new Date(e.expiresOn).getTime()-Date.now()>0}getAllKeys(){const e=this.readBookKeepingKeys();return e?Object.keys(e):[]}deleteAll(){return i(this,void 0,void 0,(function*(){const e=this.readBookKeepingKeys(),t=Object.keys(e);for(let e of t)yield this.delete(e)}))}has(e){return!!this.readBookKeepingKeys()[e]}}t.LocalStorageKeychain=c,t.localStorageKeychain=new c}.apply(t,o),void 0===n||(e.exports=n)},21398:function(e,t,r){var o,n,i=r(48764).Buffer,s=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&s(t,e,r);return a(t,e),t};o=[r,t,r(52830)],n=function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isExpiredKey=t.addRandomKey=t.getRandomKey=t.setKeychainKeys=t.getKeychainKeys=t.defaultKey=t.invalidateGitHubKey=t.removeKey=t.addDefaultGithubKey=void 0,r=c(r);const o="vso-random-keychain-key",n={id:"github-keychain-key",key:new i("ABCDEF0123456789"),expiresOn:Date.now()+26784e5,method:"AES",methodMode:"CBC"};t.addDefaultGithubKey=()=>{(0,t.removeKey)(n.id),u.push(n)};const s=e=>u.find((t=>t.id===e));t.removeKey=e=>{u=u.filter((t=>t.id!==e))};const a=()=>Date.now()-864e5,d=e=>{const r=s(e);r&&(r&&(0,t.removeKey)(e),u.push({id:e,key:r.key,expiresOn:a(),method:"AES",methodMode:"CBC"}))};t.invalidateGitHubKey=()=>d(n.id),t.defaultKey={id:"012345827ccb0eea8a706c4c34a16891f84e7c",key:new i("0123456789ABCDEF"),expiresOn:a(),method:"AES",methodMode:"CBC"};let u=[];t.getKeychainKeys=()=>[Object.assign({},t.defaultKey),...u];t.setKeychainKeys=e=>{const t=s(o);return u=[...e],t&&u.push(Object.assign({},t)),d(o),u};t.getRandomKey=()=>{const e=s(o);if(!e)throw new Error("Random key has to be present.");return e};t.addRandomKey=e=>{const n=s(o);let i=n?n.key:r.default(16);e&&(i=e),n&&(0,t.removeKey)(o),u.push({id:o,key:i,expiresOn:Date.now()+864e5,method:"AES",methodMode:"CBC"})};t.isExpiredKey=e=>{const t=u.find((t=>t.id===e));return!t||t.expiresOn<=Date.now()}}.apply(t,o),void 0===n||(e.exports=n)},33746:function(e,t,r){var o,n=r(48764).Buffer,i=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebCipher=void 0;t.WebCipher=class{constructor(e,t,r,o,n){if(this.isEncryption=e,this.algorithmName=t,this.cipherMode=r,this.keySizeInBits=o,this.blockSizeInBits=n,"AES"===this.algorithmName&&"CTR"===this.cipherMode)this.transform=this.aesCtr.bind(this,e);else{if("AES"!==this.algorithmName||"CBC"!==this.cipherMode)throw new Error(`Unsupported encryption algorithm: ${this.algorithmName}-${this.cipherMode}`);this.transform=this.aesCbc.bind(this,e)}}get blockLength(){return this.blockSizeInBits/8}init(e,t){return i(this,void 0,void 0,(function*(){try{const t=`${this.algorithmName}-${this.cipherMode}`;this.key=yield crypto.subtle.importKey("raw",e,{name:t,length:this.keySizeInBits},!1,this.isEncryption?["encrypt"]:["decrypt"])}catch(e){throw new Error("Failed to initialize AES: "+e)}this.iv=n.from(t)}))}aesCtr(e,t){return i(this,void 0,void 0,(function*(){if(t.length%this.blockLength!=0){const e=`Encrypt/decrypt input has invalid length ${t.length}, not a multiple of block size ${this.blockLength}.`;throw new Error(e)}let r;if(r=e?n.from(yield crypto.subtle.encrypt({name:"AES-CTR",counter:this.iv,length:this.blockSizeInBits},this.key,t)):n.from(yield crypto.subtle.decrypt({name:"AES-CTR",counter:this.iv,length:this.blockSizeInBits},this.key,t)),r.length!==t.length){const e=`Result from encrypt/decrypt has invalid length ${r.length}, expected ${t.length}.`;throw new Error(e)}const o=t.length/this.blockLength;for(let e=0;e<o;e++)for(let e=this.iv.length-1;e>=0&&(this.iv[e]=this.iv[e]+1,!this.iv[e]);e--);return r}))}aesCbc(e,t){return i(this,void 0,void 0,(function*(){if(e){return n.from(yield crypto.subtle.encrypt({name:"AES-CBC",iv:this.iv},this.key,t))}{const e=yield crypto.subtle.decrypt({name:"AES-CBC",iv:this.iv},this.key,t);return n.from(e)}}))}}}.apply(t,[r,t]),void 0===o||(e.exports=o)},76625:function(e,t,r){var o,n,i=this&&this.__awaiter||function(e,t,r,o){return new(r||(r=Promise))((function(n,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};o=[r,t,r(72736),r(8957),r(21398),r(47035),r(22801)],n=function(e,t,r,o,n,s,a){"use strict";function c(){var e;return i(this,void 0,void 0,(function*(){const t=window.location.search;if("/pf-signin"!==window.location.pathname)return;const r=new URLSearchParams(t),o=r.get("port"),n=r.get("visibility"),s=yield function(){return i(this,void 0,void 0,(function*(){const e=new Headers;e.append("cache-control","no-store");return yield fetch("/keychain-keys",{method:"GET",credentials:"include",headers:e})}))}();if(s.ok){const e=yield d(s);if(!e)throw new Error("Could not get partner info");const t=JSON.parse(e),r=t.credentials.find((e=>"github.com"==e.host)),c=t.featureFlags,l=t.name;if(!r||!l)throw new Error("Partner info could not be parsed correctly");const p=yield u(r.token,l,o,n);if(!p.ok)throw new Error("Could not get cascade token");const h=yield p.json();yield function(e,t,r){var o,n,s,c;return i(this,void 0,void 0,(function*(){const i=e.token,d=window.location.search;null===(o=document.getElementById("cascadeToken"))||void 0===o||o.setAttribute("value",i),null===(n=document.getElementById("featureFlags"))||void 0===n||n.setAttribute("value",t);const u=(0,a.getPortForwardingActionUrl)(window.location.host);null===(s=document.getElementById("tokenForm"))||void 0===s||s.setAttribute("action",`https://${u}/authenticate-codespace/${r}${d}`),null===(c=document.forms[0])||void 0===c||c.submit()}))}(h,c,l)}else{const t=null===(e=document.querySelector('meta[name="authUrl"]'))||void 0===e?void 0:e.getAttribute("content");if(t){const e=new URL(t),r=new URLSearchParams(window.location.search);for(const[t,o]of r.entries())e.searchParams.append(t,o);window.location.href=e.toString()}}}))}function d(e){return i(this,void 0,void 0,(function*(){const t=yield e.json(),i=(0,r.enhanceEncryptionKeys)([t]);(0,n.setKeychainKeys)(i);return yield o.localStorageKeychain.get(s.PARTNER_INFO_KEYCHAIN_KEY)}))}function u(e,t,r,o){return i(this,void 0,void 0,(function*(){const n=`/codespaces_internal/${t}/ports/token`;return yield fetch(`https://api.github.com${n}`,{method:"POST",headers:{Authorization:`bearer ${e}`},redirect:"follow",body:JSON.stringify({port:r,token_type:"cascade",visibility:o})})}))}Object.defineProperty(t,"__esModule",{value:!0}),t.getCascadeToken=t.getPartnerInfo=t.portForwardingHelper=void 0,t.portForwardingHelper=c,t.getPartnerInfo=d,t.getCascadeToken=u,c().catch((e=>{console.error(JSON.stringify(e,void 0,2)),console.error(e);document.getElementById("circle").remove();document.getElementById("text").innerText="Error forwarding port"}))}.apply(t,o),void 0===n||(e.exports=n)},98099:(e,t,r)=>{var o,n;o=[r,t,r(11627),r(93816)],n=function(e,t,r,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mainTrace=void 0;const n=(0,r.randomString)(2);t.mainTrace=r.globalTrace.createChild(`web-client:${n}`),t.mainTrace.addTraceListener(new o.BrowserConsoleTraceListener(globalThis.console))}.apply(t,o),void 0===n||(e.exports=n)},95456:(e,t,r)=>{var o;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodespaceWorkspaceState=void 0,function(e){e.Error="Error",e.Unknown="Unknown",e.Connected="Connected"}(t.CodespaceWorkspaceState||(t.CodespaceWorkspaceState={}))}.apply(t,[r,t]),void 0===o||(e.exports=o)},48459:(e,t,r)=>{var o;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bufferToInt=void 0;t.bufferToInt=e=>{let t=0;const r=e.length-1;for(let o=r;o>=0;o--)t+=e[r-o]<<8*o;return t}}.apply(t,[r,t]),void 0===o||(e.exports=o)},47035:(e,t,r)=>{var o,n;o=[r,t,r(11627),r(77306),r(27593),r(50162),r(95456)],n=function(e,t,r,o,n,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HANDLED_WEB_ERROR_TYPES=t.MAX_POLL_ATTEMPTS=t.MS_AUTH_EXTENSION_ID=t.GH_AUTH_EXTENSION_ID=t.MS_ACCOUNT_KEY=t.GH_ACCOUNT_KEY=t.PROVIDER_NAME=t.AUTH_FAILED_SCREEN_BUTTON_MESSAGE=t.AUTH_FAILED_SCREEN_MESSAGE=t.LOADING_ENVIRONMENT_STAGE=t.tipEntries=t.CODESPACES_EMBEDDER_NAME=t.PORT_FORWARDING_PRIVACY_PRIVATE_ORG=t.PORT_FORWARDING_PRIVACY_PUBLIC=t.PORT_FORWARDING_PRIVACY_PRIVATE=t.GITHUB_DARK_THEME_CSS_CLASS=t.vscodeRemoteResourcePathComponent=t.assetsPathComponent=t.FALLBACK_REDIRECT_URL=t.CODESPACES_EXTENSION_AUTHORITY=t.VSCODE_RECONNECTION_TIMEOUT=t.VSCODE_INITIAL_CONNECTION_TIMEOUT=t.WORKBENCH_REACT_ROOT_ELEMENT_ID=t.STATES_TO_RENDER_WORKBENCH=t.CODESPACE_IN_PROGRESS_STATES=t.CS_FEATURESET_LOCALSTORAGE_KEY=t.GITHUB_PAYLOAD_DARK_THEME_NAME=t.SEARCH_PARAMS_KEY=t.WORKBENCH_TYPE_KEY=t.AUTH_ATTEMPTS_COUNT_LOCALSTORAGE_KEY=t.PARTNER_INFO_KEYCHAIN_KEY=t.ENTRIES_STORED_KEY=t.TRUSTED_DOMAINS=t.PRIVACY_STATEMENT_URL=t.LICENSE_URL=t.DOCUMENTATION_URL=t.REMOTE_HUB_EXTENSION_NAME=t.AUTH_REDIRECT_FALLBACK_URL=t.EMBEDDER_NAME=t.CODESPACES_BUILT_IN_EXTENSIONS=t.WEB_EDITOR_BUILT_IN_EXTENSIONS=t.ENABLED_EXTENSIONS=t.FeatureSet=void 0,function(e){e.Stable="stable",e.Insider="insider"}(t.FeatureSet||(t.FeatureSet={}));const a="github.codespaces";t.EMBEDDER_NAME="github.dev";const c="github.remotehub";t.REMOTE_HUB_EXTENSION_NAME=c;t.AUTH_REDIRECT_FALLBACK_URL="https://github.com/auth/github_editor";t.DOCUMENTATION_URL="https://github.co/codespaces-editor-help",t.ENABLED_EXTENSIONS=[a],t.WEB_EDITOR_BUILT_IN_EXTENSIONS=[c,a,"ms-vscode.anycode"],t.CODESPACES_BUILT_IN_EXTENSIONS=t.ENABLED_EXTENSIONS,t.LICENSE_URL="https://github.co/codespaces-terms",t.PRIVACY_STATEMENT_URL="https://github.co/codespaces-privacy",t.TRUSTED_DOMAINS=["https://github.co"],t.ENTRIES_STORED_KEY="vsonline.keychain.keys",t.PARTNER_INFO_KEYCHAIN_KEY="cs-partner-info",t.AUTH_ATTEMPTS_COUNT_LOCALSTORAGE_KEY="cs-oauth-flow-attempt-count",t.WORKBENCH_TYPE_KEY="cs-workbench-type",t.SEARCH_PARAMS_KEY="cs-search-params",t.GITHUB_PAYLOAD_DARK_THEME_NAME="GitHub Dark Default",t.CS_FEATURESET_LOCALSTORAGE_KEY="cs-featureset",t.CODESPACE_IN_PROGRESS_STATES=[i.CodespaceStateInfo.Queued,i.CodespaceStateInfo.Starting,i.CodespaceStateInfo.Provisioning,i.CodespaceStateInfo.ShuttingDown,i.CodespaceStateInfo.Rebuilding,i.CodespaceStateInfo.Updating,s.CodespaceWorkspaceState.Unknown],t.STATES_TO_RENDER_WORKBENCH=[i.CodespaceStateInfo.Starting,i.CodespaceStateInfo.Available,s.CodespaceWorkspaceState.Connected],t.WORKBENCH_REACT_ROOT_ELEMENT_ID="js-vscode-workbench-placeholder",t.VSCODE_INITIAL_CONNECTION_TIMEOUT=2*r.TIME_MINUTE_MS,t.VSCODE_RECONNECTION_TIMEOUT=15*r.TIME_SECOND_MS,t.CODESPACES_EXTENSION_AUTHORITY="codespaces",t.FALLBACK_REDIRECT_URL="https://github.com/codespaces/",t.assetsPathComponent="assets",t.vscodeRemoteResourcePathComponent="vscode-remote-resource",t.GITHUB_DARK_THEME_CSS_CLASS="github-dark",t.PORT_FORWARDING_PRIVACY_PRIVATE="Private",t.PORT_FORWARDING_PRIVACY_PUBLIC="Public",t.PORT_FORWARDING_PRIVACY_PRIVATE_ORG="Private to Organization",t.CODESPACES_EMBEDDER_NAME="codespaces",t.tipEntries=[{text:"Customize your codespace using a devcontainer.json file.",url:"https://aka.ms/codespaces-customize"},{text:"Use the command palette to search and select commands in Visual Studio Code.",url:"https://aka.ms/codespaces-command-palette"},{text:"See your application running with port forwarding.",url:"https://aka.ms/codespaces-forwarding-ports"},{text:"Keep your sensitive information safe with native secret support.",url:"https://aka.ms/codespaces-managing-secrets"}],t.LOADING_ENVIRONMENT_STAGE="loading...",t.AUTH_FAILED_SCREEN_MESSAGE="We were unable to authenticate your session.",t.AUTH_FAILED_SCREEN_BUTTON_MESSAGE="Try again.",t.PROVIDER_NAME="Partner Info",t.GH_ACCOUNT_KEY="github.auth",t.MS_ACCOUNT_KEY="microsoft.login",t.GH_AUTH_EXTENSION_ID="vscode.github-authentication",t.MS_AUTH_EXTENSION_ID="vscode.microsoft-authentication",t.MAX_POLL_ATTEMPTS=1500,t.HANDLED_WEB_ERROR_TYPES=[o.ConnectedError,o.DisconnectedError,n.ThrottlingApiError,n.CodespacesPolicyViolationError,n.OutdatedCodespaceStateError,n.WorkbenchMountedTwiceError,o.CodespacesPendingOperationError]}.apply(t,o),void 0===n||(e.exports=n)},22801:(e,t,r)=>{var o;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPortForwardingActionUrl=void 0;const r="github.dev";t.getPortForwardingActionUrl=e=>{if(e.endsWith("localhost:3000"))return"auth.dev.preview.app.github.dev";if(e.endsWith(r)){return(e=>{switch(e){case"dev":case"latest-dev":return"auth.dev.preview.app.github.dev";case"ppe":case"latest-ppe":return"auth.ppe.preview.app.github.dev";default:return"auth.preview.app.github.dev"}})(e.replace(r,"").split(".").filter((e=>e)).reverse()[0])}}}.apply(t,[r,t]),void 0===o||(e.exports=o)},20593:(e,t,r)=>{var o,n=r(48764).Buffer;o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.intToBytes=void 0;t.intToBytes=(e,t=4)=>{const r=new n(t);for(let o=t-1;o>=0;o--)r[o]=e>>8*o&255;return r.reverse()}}.apply(t,[r,t]),void 0===o||(e.exports=o)},45545:()=>{},46047:()=>{},78028:()=>{},50695:()=>{},50471:()=>{},71632:()=>{},42782:()=>{}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=t,o.amdO={"client/app":!0},e=[],o.O=(t,r,n,i)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={971:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[s,a,c]=r,d=0;if(s.some((t=>0!==e[t]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(c)var u=c(o)}for(t&&t(r);d<s.length;d++)i=s[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},r=self.webpackChunkcodespaces_web_client=self.webpackChunkcodespaces_web_client||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[962,69,718,46,415,63,750,700,784,408,636,260,836,203],(()=>o(76625)));n=o.O(n)})();