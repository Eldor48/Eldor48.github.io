"use strict";(self.webpackChunkcodespaces_web_client=self.webpackChunkcodespaces_web_client||[]).push([[865],{42135:(e,n,t)=>{t.d(n,{Z:()=>_});var i=t(49577),a=t(9895),o=t(14270),r=t(96739),u=t(68886),c=t(8823),s=t(96933),l=t(28185),f=t(23558),d=t(55028),v=t(63143),h=t(70872),m=t(51281),p=t(98761),y=t(96247),g=t(99322),b=t(92633),x="eventsDiscarded";const _=function(e){function n(){var t,i=e.call(this)||this;i.identifier="PostChannel",i.priority=1011,i.version="3.2.4";var v,_,C,M,O,T,E,K=!1,w=[],A=null,R=!1,k=0,P=500,L=0,z=1e4,S={},U=h.ow,I=null,N=null,j=0,q=0,D={},H=-1,F=!0,Q=!1,B=6,J=2;return(0,a.Z)(n,i,(function(e,n){function i(e){"beforeunload"!==(e||(0,l.Jj)().event).type&&(Q=!0,_.setUnloading(Q)),ee(2,2)}function a(e){Q=!1,_.setUnloading(Q)}function G(e,n){if(e.sendAttempt||(e.sendAttempt=0),e.latency||(e.latency=1),e.ext&&e.ext[y.zC]&&delete e.ext[y.zC],e.ext&&e.ext[y.IY]&&e.ext[y.IY].id&&delete e.ext[y.IY].id,F&&(c.if,e.ext=(0,s.Ax)(e.ext),e.baseData&&(e.baseData=(0,s.Ax)(e.baseData)),e.data&&(e.data=(0,s.Ax)(e.data))),e.sync)if(j||R)e.latency=3,e.sync=!1;else if(_)return F&&(e=(0,s.Ax)(e)),void _.sendSynchronousBatch(m.l.create(e.iKey,[e]),!0===e.sync?1:e.sync,3);var t=e.latency,i=L,a=z;4===t&&(i=k,a=P);var o=!1;if(i<a)o=!ie(e,n);else{var r=1,u=20;4===t&&(r=4,u=1),o=!0,function(e,n,t,i){for(;t<=n;){var a=ne(e,n,!0);if(a&&a.count()>0){var o=a.split(0,i),r=o.count();if(r>0)return 4===t?k-=r:L-=r,de(x,[o],f.h.QueueFull),!0}t++}return ae(),!1}(e.iKey,e.latency,r,u)&&(o=!ie(e,n))}o&&fe(x,[e],f.h.QueueFull)}function Y(e,n,t){var i=oe(e,n,t);return _.sendQueuedRequests(n,t),i}function W(){return L>0}function X(){if(H>=0&&oe(H,0,O)&&_.sendQueuedRequests(0,O),k>0&&!N&&!R){var e=S[U][2];e>=0&&(N=V((function(){N=null,Y(4,0,1),X()}),e))}var n=S[U][1];!I&&!A&&n>=0&&!R&&(W()?I=V((function(){I=null,Y(0===q?3:1,0,1),q++,q%=2,X()}),n):q=0)}function Z(){t=null,K=!1,w=[],A=null,R=!1,k=0,P=500,L=0,z=1e4,S={},U=h.ow,I=null,N=null,j=0,q=0,v=null,D={},C=void 0,M=0,H=-1,O=null,F=!0,Q=!1,B=6,J=2,T=null,E=(0,b.zG)(),_=new p.x(500,2,1,{requeue:se,send:ve,sent:he,drop:me,rspFail:pe,oth:ye},E),ce(),D[4]={batches:[],iKeyMap:{}},D[3]={batches:[],iKeyMap:{}},D[2]={batches:[],iKeyMap:{}},D[1]={batches:[],iKeyMap:{}},ge()}function V(e,n){0===n&&j&&(n=1);var t=1e3;return j&&(t=(0,g.e)(j-1)),E.set(e,n*t)}function $(){return null!==I&&(E.clear(I),I=null,q=0,!0)}function ee(e,n){$(),A&&(E.clear(A),A=null),R||Y(1,e,n)}function ne(e,n,t){var i=D[n];i||(i=D[n=1]);var a=i.iKeyMap[e];return!a&&t&&(a=m.l.create(e),i.batches.push(a),i.iKeyMap[e]=a),a}function te(n,t){_.canSendRequest()&&!j&&(C>0&&L>C&&(t=!0),t&&null==A&&e.flush(n,null,20))}function ie(e,n){F&&(e=(0,s.Ax)(e));var t=e.latency,i=ne(e.iKey,t,!0);return!!i.addEvent(e)&&(4!==t?(L++,n&&0===e.sendAttempt&&te(!e.sync,M>0&&i.count()>=M)):k++,!0)}function ae(){for(var e=0,n=0,t=function(t){var i=D[t];i&&i.batches&&(0,s.tO)(i.batches,(function(i){4===t?e+=i.count():n+=i.count()}))},i=1;i<=4;i++)t(i);L=n,k=e}function oe(n,t,i){var a=!1,r=0===t;return!r||_.canSendRequest()?(0,o.Lm)(e.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var e=[],t=4;t>=n;){var i=D[t];i&&i.batches&&i.batches.length>0&&((0,s.tO)(i.batches,(function(n){_.addBatch(n)?a=a||n&&n.count()>0:e=e.concat(n.events()),4===t?k-=n.count():L-=n.count()})),i.batches=[],i.iKeyMap={}),t--}e.length>0&&fe(x,e,f.h.KillSwitch),a&&H>=n&&(H=-1,O=0)}),(function(){return{latency:n,sendType:t,sendReason:i}}),!r):(H=H>=0?Math.min(H,n):n,O=Math.max(O,i)),a}function re(e,n){Y(1,0,n),ae(),ue((function(){e&&e(),w.length>0?A=V((function(){A=null,re(w.shift(),n)}),0):(A=null,X())}))}function ue(e){_.isCompletelyIdle()?e():A=V((function(){A=null,ue(e)}),.25)}function ce(){(S={})[h.ow]=[2,1,0],S[h.je]=[6,3,0],S[h.e2]=[18,9,0]}function se(n,t){var i=[],a=B;Q&&(a=J),(0,s.tO)(n,(function(n){n&&n.count()>0&&(0,s.tO)(n.events(),(function(n){n&&(n.sync&&(n.latency=4,n.sync=!1),n.sendAttempt<a?((0,c.if)(n,e.identifier),G(n,!1)):i.push(n))}))})),i.length>0&&fe(x,i,f.h.NonRetryableStatus),Q&&ee(2,2)}function le(n,t){var i=e._notificationManager||{},a=i[n];if(a)try{a.apply(i,t)}catch(t){(0,d.kP)(e.diagLog(),1,74,n+" notification failed: "+t)}}function fe(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&le(e,[n].concat(t))}function de(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&(0,s.tO)(n,(function(n){n&&n.count()>0&&le(e,[n.events()].concat(t))}))}function ve(e,n,t){e&&e.length>0&&le("eventsSendRequest",[n>=1e3&&n<=1999?n-1e3:0,!0!==t])}function he(e,n){de("eventsSent",e,n),X()}function me(e,n){de(x,e,n>=8e3&&n<=8999?n-8e3:f.h.Unknown)}function pe(e){de(x,e,f.h.NonRetryableStatus),X()}function ye(e,n){de(x,e,f.h.Unknown),X()}function ge(){M=t&&t.disableAutoBatchFlushLimit?0:Math.max(1500,z/6)}Z(),e._getDbgPlgTargets=function(){return[_]},e.initialize=function(l,f,d){(0,o.Lm)(f,(function(){return"PostChannel:initialize"}),(function(){var o=f;n.initialize(l,f,d);try{f.addUnloadCb;T=(0,r.jU)((0,u.J)(e.identifier),f.evtNamespace&&f.evtNamespace());var h=e._getTelCtx();l.extensionConfig[e.identifier]=l.extensionConfig[e.identifier]||{},t=h.getExtCfg(e.identifier),E=(0,b.zG)(t.setTimeoutOverride,t.clearTimeoutOverride),F=!t.disableOptimizeObj&&(0,c.mJ)(),function(e){var n=e.getWParam;e.getWParam=function(){var e=0;return t.ignoreMc1Ms0CookieProcessing&&(e|=2),e|n()}}(o),t.eventsLimitInMem>0&&(z=t.eventsLimitInMem),t.immediateEventLimit>0&&(P=t.immediateEventLimit),t.autoFlushEventsLimit>0&&(C=t.autoFlushEventsLimit),(0,s.hj)(t.maxEventRetryAttempts)&&(B=t.maxEventRetryAttempts),(0,s.hj)(t.maxUnloadEventRetryAttempts)&&(J=t.maxUnloadEventRetryAttempts),ge(),t.httpXHROverride&&t.httpXHROverride.sendPOST&&(v=t.httpXHROverride),(0,c.Sn)(l.anonCookieName)&&_.addQueryStringParameter("anoncknm",l.anonCookieName),_.sendHook=t.payloadPreprocessor,_.sendListener=t.payloadListener;var m=t.overrideEndpointUrl?t.overrideEndpointUrl:l.endpointUrl;e._notificationManager=l.extensionConfig.NotificationManager,_.initialize(m,e.core,e,v,t);var p=l.disablePageUnloadEvents||[];(0,r.c9)(i,p,T),(0,r.TJ)(i,p,T),(0,r.nD)(a,l.disablePageShowEvents,T)}catch(n){throw e.setInitialized(!1),n}}),(function(){return{coreConfig:l,core:f,extensions:d}}))},e.processTelemetry=function(n,i){(0,c.if)(n,e.identifier);var a=(i=e._getTelCtx(i)).getExtCfg(e.identifier),o=!!t.disableTelemetry;a&&(o=o||!!a.disableTelemetry);var r=n;o||K||(t.overrideInstrumentationKey&&(r.iKey=t.overrideInstrumentationKey),a&&a.overrideInstrumentationKey&&(r.iKey=a.overrideInstrumentationKey),G(r,!0),Q?ee(2,2):X()),e.processNext(r,i)},e._doTeardown=function(e,n){ee(2,2),K=!0,_.teardown(),(0,r.JA)(null,T),(0,r.C9)(null,T),(0,r.Yl)(null,T),Z()},e.setEventQueueLimits=function(e,n){z=e>0?e:1e4,C=n>0?n:0,ge();var t=L>e;if(!t&&M>0)for(var i=1;!t&&i<=3;i++){var a=D[i];a&&a.batches&&(0,s.tO)(a.batches,(function(e){e&&e.count()>=M&&(t=!0)}))}te(!0,t)},e.pause=function(){$(),R=!0,_.pause()},e.resume=function(){R=!1,_.resume(),X()},e.addResponseHandler=function(e){_._responseHandlers.push(e)},e._loadTransmitProfiles=function(e){$(),ce(),U=h.ow,X(),(0,s.rW)(e,(function(e,n){var t=n.length;if(t>=2){var i=t>2?n[2]:0;if(n.splice(0,t-2),n[1]<0&&(n[0]=-1),n[1]>0&&n[0]>0){var a=n[0]/n[1];n[0]=Math.ceil(a)*n[1]}i>=0&&n[1]>=0&&i>n[1]&&(i=n[1]),n.push(i),S[e]=n}}))},e.flush=function(e,n,t){if(void 0===e&&(e=!0),!R)if(t=t||1,e)null==A?($(),oe(1,0,t),A=V((function(){A=null,re(n,t)}),0)):w.push(n);else{var i=$();Y(1,1,t),null!=n&&n(),i&&X()}},e.setMsaAuthTicket=function(e){_.addHeader(y.j9,e)},e.hasEvents=W,e._setTransmitProfile=function(e){U!==e&&void 0!==S[e]&&($(),U=e,X())},e._backOffTransmission=function(){j<4&&(j++,$(),X())},e._clearBackOff=function(){j&&(j=0,$(),X())},(0,s.l_)(e,"_setTimeoutOverride",(function(){return E.set}),(function(e){E=(0,b.zG)(e,E.clear)})),(0,s.l_)(e,"_clearTimeoutOverride",(function(){return E.clear}),(function(e){E=(0,b.zG)(E.set,e)}))})),i}return(0,i.ne)(n,e),n.__ieDyn=1,n}(v.i)}}]);