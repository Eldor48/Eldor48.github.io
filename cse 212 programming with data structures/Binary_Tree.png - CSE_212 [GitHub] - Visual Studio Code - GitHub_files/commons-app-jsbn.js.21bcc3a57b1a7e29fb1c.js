(self.webpackChunkcodespaces_web_client=self.webpackChunkcodespaces_web_client||[]).push([[302],{88359:(t,i,r)=>{var o=r(30816).Buffer,s=r(32337),e=r(80222)._;function h(t,i){null!=t&&("number"==typeof t?this.fromNumber(t,i):o.isBuffer(t)?this.fromBuffer(t):null==i&&"string"!=typeof t?this.fromByteArray(t):this.fromString(t,i))}function n(){return new h(null)}h.prototype.am=function(t,i,r,o,s,e){for(var h=16383&i,n=i>>14;--e>=0;){var u=16383&this[t],f=this[t++]>>14,p=n*u+f*h;s=((u=h*u+((16383&p)<<14)+r[o]+s)>>28)+(p>>14)+n*f,r[o++]=268435455&u}return s},h.prototype.DB=28,h.prototype.DM=268435455,h.prototype.DV=1<<28;h.prototype.FV=Math.pow(2,52),h.prototype.F1=24,h.prototype.F2=4;var u,f,p=new Array;for(u="0".charCodeAt(0),f=0;f<=9;++f)p[u++]=f;for(u="a".charCodeAt(0),f=10;f<36;++f)p[u++]=f;for(u="A".charCodeAt(0),f=10;f<36;++f)p[u++]=f;function a(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}function c(t,i){var r=p[t.charCodeAt(i)];return null==r?-1:r}function m(t){var i=n();return i.fromInt(t),i}function l(t){var i,r=1;return 0!=(i=t>>>16)&&(t=i,r+=16),0!=(i=t>>8)&&(t=i,r+=8),0!=(i=t>>4)&&(t=i,r+=4),0!=(i=t>>2)&&(t=i,r+=2),0!=(i=t>>1)&&(t=i,r+=1),r}function T(t){this.m=t}function v(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function y(t,i){return t&i}function d(t,i){return t|i}function b(t,i){return t^i}function D(t,i){return t&~i}function B(t){if(0===t)return-1;var i=0;return 0==(65535&t)&&(t>>=16,i+=16),0==(255&t)&&(t>>=8,i+=8),0==(15&t)&&(t>>=4,i+=4),0==(3&t)&&(t>>=2,i+=2),0==(1&t)&&++i,i}function g(t){for(var i=0;0!=t;)t&=t-1,++i;return i}function S(){}function w(t){return t}function M(t){this.r2=n(),this.q3=n(),h.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}T.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},T.prototype.revert=function(t){return t},T.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},T.prototype.mulTo=function(t,i,r){t.multiplyTo(i,r),this.reduce(r)},T.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)},v.prototype.convert=function(t){var i=n();return t.abs().dlShiftTo(this.m.t,i),i.divRemTo(this.m,null,i),t.s<0&&i.compareTo(h.ZERO)>0&&this.m.subTo(i,i),i},v.prototype.revert=function(t){var i=n();return t.copyTo(i),this.reduce(i),i},v.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var r=32767&t[i],o=r*this.mpl+((r*this.mph+(t[i]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=i+this.m.t]+=this.m.am(0,o,t,i,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},v.prototype.mulTo=function(t,i,r){t.multiplyTo(i,r),this.reduce(r)},v.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)},S.prototype.convert=w,S.prototype.revert=w,S.prototype.mulTo=function(t,i,r){t.multiplyTo(i,r)},S.prototype.sqrTo=function(t,i){t.squareTo(i)},M.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var i=n();return t.copyTo(i),this.reduce(i),i},M.prototype.revert=function(t){return t},M.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},M.prototype.mulTo=function(t,i,r){t.multiplyTo(i,r),this.reduce(r)},M.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)};var E=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],R=(1<<26)/E[E.length-1];h.prototype.copyTo=function(t){for(var i=this.t-1;i>=0;--i)t[i]=this[i];t.t=this.t,t.s=this.s},h.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+DV:this.t=0},h.prototype.fromString=function(t,i,r){var o;switch(i){case 2:o=1;break;case 4:o=2;break;case 8:o=3;break;case 16:o=4;break;case 32:o=5;break;case 256:o=8;break;default:return void this.fromRadix(t,i)}this.t=0,this.s=0;for(var s=t.length,e=!1,n=0;--s>=0;){var u=8==o?255&t[s]:c(t,s);u<0?"-"==t.charAt(s)&&(e=!0):(e=!1,0===n?this[this.t++]=u:n+o>this.DB?(this[this.t-1]|=(u&(1<<this.DB-n)-1)<<n,this[this.t++]=u>>this.DB-n):this[this.t-1]|=u<<n,(n+=o)>=this.DB&&(n-=this.DB))}r||8!=o||0==(128&t[0])||(this.s=-1,n>0&&(this[this.t-1]|=(1<<this.DB-n)-1<<n)),this.clamp(),e&&h.ZERO.subTo(this,this)},h.prototype.fromByteArray=function(t,i){this.fromString(t,256,i)},h.prototype.fromBuffer=function(t){this.fromString(t,256,!0)},h.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},h.prototype.dlShiftTo=function(t,i){var r;for(r=this.t-1;r>=0;--r)i[r+t]=this[r];for(r=t-1;r>=0;--r)i[r]=0;i.t=this.t+t,i.s=this.s},h.prototype.drShiftTo=function(t,i){for(var r=t;r<this.t;++r)i[r-t]=this[r];i.t=Math.max(this.t-t,0),i.s=this.s},h.prototype.lShiftTo=function(t,i){var r,o=t%this.DB,s=this.DB-o,e=(1<<s)-1,h=Math.floor(t/this.DB),n=this.s<<o&this.DM;for(r=this.t-1;r>=0;--r)i[r+h+1]=this[r]>>s|n,n=(this[r]&e)<<o;for(r=h-1;r>=0;--r)i[r]=0;i[h]=n,i.t=this.t+h+1,i.s=this.s,i.clamp()},h.prototype.rShiftTo=function(t,i){i.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)i.t=0;else{var o=t%this.DB,s=this.DB-o,e=(1<<o)-1;i[0]=this[r]>>o;for(var h=r+1;h<this.t;++h)i[h-r-1]|=(this[h]&e)<<s,i[h-r]=this[h]>>o;o>0&&(i[this.t-r-1]|=(this.s&e)<<s),i.t=this.t-r,i.clamp()}},h.prototype.subTo=function(t,i){for(var r=0,o=0,s=Math.min(t.t,this.t);r<s;)o+=this[r]-t[r],i[r++]=o&this.DM,o>>=this.DB;if(t.t<this.t){for(o-=t.s;r<this.t;)o+=this[r],i[r++]=o&this.DM,o>>=this.DB;o+=this.s}else{for(o+=this.s;r<t.t;)o-=t[r],i[r++]=o&this.DM,o>>=this.DB;o-=t.s}i.s=o<0?-1:0,o<-1?i[r++]=this.DV+o:o>0&&(i[r++]=o),i.t=r,i.clamp()},h.prototype.multiplyTo=function(t,i){var r=this.abs(),o=t.abs(),s=r.t;for(i.t=s+o.t;--s>=0;)i[s]=0;for(s=0;s<o.t;++s)i[s+r.t]=r.am(0,o[s],i,s,0,r.t);i.s=0,i.clamp(),this.s!=t.s&&h.ZERO.subTo(i,i)},h.prototype.squareTo=function(t){for(var i=this.abs(),r=t.t=2*i.t;--r>=0;)t[r]=0;for(r=0;r<i.t-1;++r){var o=i.am(r,i[r],t,2*r,0,1);(t[r+i.t]+=i.am(r+1,2*i[r],t,2*r+1,o,i.t-r-1))>=i.DV&&(t[r+i.t]-=i.DV,t[r+i.t+1]=1)}t.t>0&&(t[t.t-1]+=i.am(r,i[r],t,2*r,0,1)),t.s=0,t.clamp()},h.prototype.divRemTo=function(t,i,r){var o=t.abs();if(!(o.t<=0)){var s=this.abs();if(s.t<o.t)return null!=i&&i.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=n());var e=n(),u=this.s,f=t.s,p=this.DB-l(o[o.t-1]);p>0?(o.lShiftTo(p,e),s.lShiftTo(p,r)):(o.copyTo(e),s.copyTo(r));var a=e.t,c=e[a-1];if(0!==c){var m=c*(1<<this.F1)+(a>1?e[a-2]>>this.F2:0),T=this.FV/m,v=(1<<this.F1)/m,y=1<<this.F2,d=r.t,b=d-a,D=null==i?n():i;for(e.dlShiftTo(b,D),r.compareTo(D)>=0&&(r[r.t++]=1,r.subTo(D,r)),h.ONE.dlShiftTo(a,D),D.subTo(e,e);e.t<a;)e[e.t++]=0;for(;--b>=0;){var B=r[--d]==c?this.DM:Math.floor(r[d]*T+(r[d-1]+y)*v);if((r[d]+=e.am(0,B,r,b,0,a))<B)for(e.dlShiftTo(b,D),r.subTo(D,r);r[d]<--B;)r.subTo(D,r)}null!=i&&(r.drShiftTo(a,i),u!=f&&h.ZERO.subTo(i,i)),r.t=a,r.clamp(),p>0&&r.rShiftTo(p,r),u<0&&h.ZERO.subTo(r,r)}}},h.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var i=3&t;return(i=(i=(i=(i=i*(2-(15&t)*i)&15)*(2-(255&t)*i)&255)*(2-((65535&t)*i&65535))&65535)*(2-t*i%this.DV)%this.DV)>0?this.DV-i:-i},h.prototype.isEven=function(){return 0===(this.t>0?1&this[0]:this.s)},h.prototype.exp=function(t,i){if(t>4294967295||t<1)return h.ONE;var r=n(),o=n(),s=i.convert(this),e=l(t)-1;for(s.copyTo(r);--e>=0;)if(i.sqrTo(r,o),(t&1<<e)>0)i.mulTo(o,s,r);else{var u=r;r=o,o=u}return i.revert(r)},h.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},h.prototype.toRadix=function(t){if(null==t&&(t=10),0===this.signum()||t<2||t>36)return"0";var i=this.chunkSize(t),r=Math.pow(t,i),o=m(r),s=n(),e=n(),h="";for(this.divRemTo(o,s,e);s.signum()>0;)h=(r+e.intValue()).toString(t).substr(1)+h,s.divRemTo(o,s,e);return e.intValue().toString(t)+h},h.prototype.fromRadix=function(t,i){this.fromInt(0),null==i&&(i=10);for(var r=this.chunkSize(i),o=Math.pow(i,r),s=!1,e=0,n=0,u=0;u<t.length;++u){var f=c(t,u);f<0?"-"==t.charAt(u)&&0===this.signum()&&(s=!0):(n=i*n+f,++e>=r&&(this.dMultiply(o),this.dAddOffset(n,0),e=0,n=0))}e>0&&(this.dMultiply(Math.pow(i,e)),this.dAddOffset(n,0)),s&&h.ZERO.subTo(this,this)},h.prototype.fromNumber=function(t,i){if("number"==typeof i)if(t<2)this.fromInt(1);else for(this.fromNumber(t),this.testBit(t-1)||this.bitwiseTo(h.ONE.shiftLeft(t-1),d,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(i);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(h.ONE.shiftLeft(t-1),this);else{var r=s.randomBytes(1+(t>>3)),o=7&t;o>0?r[0]&=(1<<o)-1:r[0]=0,this.fromByteArray(r)}},h.prototype.bitwiseTo=function(t,i,r){var o,s,e=Math.min(t.t,this.t);for(o=0;o<e;++o)r[o]=i(this[o],t[o]);if(t.t<this.t){for(s=t.s&this.DM,o=e;o<this.t;++o)r[o]=i(this[o],s);r.t=this.t}else{for(s=this.s&this.DM,o=e;o<t.t;++o)r[o]=i(s,t[o]);r.t=t.t}r.s=i(this.s,t.s),r.clamp()},h.prototype.changeBit=function(t,i){var r=h.ONE.shiftLeft(t);return this.bitwiseTo(r,i,r),r},h.prototype.addTo=function(t,i){for(var r=0,o=0,s=Math.min(t.t,this.t);r<s;)o+=this[r]+t[r],i[r++]=o&this.DM,o>>=this.DB;if(t.t<this.t){for(o+=t.s;r<this.t;)o+=this[r],i[r++]=o&this.DM,o>>=this.DB;o+=this.s}else{for(o+=this.s;r<t.t;)o+=t[r],i[r++]=o&this.DM,o>>=this.DB;o+=t.s}i.s=o<0?-1:0,o>0?i[r++]=o:o<-1&&(i[r++]=this.DV+o),i.t=r,i.clamp()},h.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},h.prototype.dAddOffset=function(t,i){if(0!==t){for(;this.t<=i;)this[this.t++]=0;for(this[i]+=t;this[i]>=this.DV;)this[i]-=this.DV,++i>=this.t&&(this[this.t++]=0),++this[i]}},h.prototype.multiplyLowerTo=function(t,i,r){var o,s=Math.min(this.t+t.t,i);for(r.s=0,r.t=s;s>0;)r[--s]=0;for(o=r.t-this.t;s<o;++s)r[s+this.t]=this.am(0,t[s],r,s,0,this.t);for(o=Math.min(t.t,i);s<o;++s)this.am(0,t[s],r,s,0,i-s);r.clamp()},h.prototype.multiplyUpperTo=function(t,i,r){--i;var o=r.t=this.t+t.t-i;for(r.s=0;--o>=0;)r[o]=0;for(o=Math.max(i-this.t,0);o<t.t;++o)r[this.t+o-i]=this.am(i-o,t[o],r,0,0,this.t+o-i);r.clamp(),r.drShiftTo(1,r)},h.prototype.modInt=function(t){if(t<=0)return 0;var i=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0===i)r=this[0]%t;else for(var o=this.t-1;o>=0;--o)r=(i*r+this[o])%t;return r},h.prototype.millerRabin=function(t){var i=this.subtract(h.ONE),r=i.getLowestSetBit();if(r<=0)return!1;var o=i.shiftRight(r);(t=t+1>>1)>E.length&&(t=E.length);for(var s=n(),e=0;e<t;++e){s.fromInt(E[Math.floor(Math.random()*E.length)]);var u=s.modPow(o,this);if(0!=u.compareTo(h.ONE)&&0!=u.compareTo(i)){for(var f=1;f++<r&&0!=u.compareTo(i);)if(0===(u=u.modPowInt(2,this)).compareTo(h.ONE))return!1;if(0!=u.compareTo(i))return!1}}return!0},h.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return this.toRadix(t);i=2}var r,o=(1<<i)-1,s=!1,e="",h=this.t,n=this.DB-h*this.DB%i;if(h-- >0)for(n<this.DB&&(r=this[h]>>n)>0&&(s=!0,e=a(r));h>=0;)n<i?(r=(this[h]&(1<<n)-1)<<i-n,r|=this[--h]>>(n+=this.DB-i)):(r=this[h]>>(n-=i)&o,n<=0&&(n+=this.DB,--h)),r>0&&(s=!0),s&&(e+=a(r));return s?e:"0"},h.prototype.negate=function(){var t=n();return h.ZERO.subTo(this,t),t},h.prototype.abs=function(){return this.s<0?this.negate():this},h.prototype.compareTo=function(t){var i=this.s-t.s;if(0!=i)return i;var r=this.t;if(0!=(i=r-t.t))return this.s<0?-i:i;for(;--r>=0;)if(0!=(i=this[r]-t[r]))return i;return 0},h.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+l(this[this.t-1]^this.s&this.DM)},h.prototype.mod=function(t){var i=n();return this.abs().divRemTo(t,null,i),this.s<0&&i.compareTo(h.ZERO)>0&&t.subTo(i,i),i},h.prototype.modPowInt=function(t,i){var r;return r=t<256||i.isEven()?new T(i):new v(i),this.exp(t,r)},h.prototype.clone=function(){var t=n();return this.copyTo(t),t},h.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0===this.t)return-1}else{if(1==this.t)return this[0];if(0===this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},h.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},h.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},h.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},h.prototype.toByteArray=function(){var t=this.t,i=new Array;i[0]=this.s;var r,o=this.DB-t*this.DB%8,s=0;if(t-- >0)for(o<this.DB&&(r=this[t]>>o)!=(this.s&this.DM)>>o&&(i[s++]=r|this.s<<this.DB-o);t>=0;)o<8?(r=(this[t]&(1<<o)-1)<<8-o,r|=this[--t]>>(o+=this.DB-8)):(r=this[t]>>(o-=8)&255,o<=0&&(o+=this.DB,--t)),0!=(128&r)&&(r|=-256),0===s&&(128&this.s)!=(128&r)&&++s,(s>0||r!=this.s)&&(i[s++]=r);return i},h.prototype.toBuffer=function(t){var i=o.from(this.toByteArray());if(!0===t&&0===i[0])i=i.slice(1);else if(e.isNumber(t)){if(i.length>t){for(var r=0;r<i.length-t;r++)if(0!==i[r])return null;return i.slice(i.length-t)}if(i.length<t){var s=o.alloc(t);return s.fill(0,0,t-i.length),i.copy(s,t-i.length),s}}return i},h.prototype.equals=function(t){return 0==this.compareTo(t)},h.prototype.min=function(t){return this.compareTo(t)<0?this:t},h.prototype.max=function(t){return this.compareTo(t)>0?this:t},h.prototype.and=function(t){var i=n();return this.bitwiseTo(t,y,i),i},h.prototype.or=function(t){var i=n();return this.bitwiseTo(t,d,i),i},h.prototype.xor=function(t){var i=n();return this.bitwiseTo(t,b,i),i},h.prototype.andNot=function(t){var i=n();return this.bitwiseTo(t,D,i),i},h.prototype.not=function(){for(var t=n(),i=0;i<this.t;++i)t[i]=this.DM&~this[i];return t.t=this.t,t.s=~this.s,t},h.prototype.shiftLeft=function(t){var i=n();return t<0?this.rShiftTo(-t,i):this.lShiftTo(t,i),i},h.prototype.shiftRight=function(t){var i=n();return t<0?this.lShiftTo(-t,i):this.rShiftTo(t,i),i},h.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+B(this[t]);return this.s<0?this.t*this.DB:-1},h.prototype.bitCount=function(){for(var t=0,i=this.s&this.DM,r=0;r<this.t;++r)t+=g(this[r]^i);return t},h.prototype.testBit=function(t){var i=Math.floor(t/this.DB);return i>=this.t?0!=this.s:0!=(this[i]&1<<t%this.DB)},h.prototype.setBit=function(t){return this.changeBit(t,d)},h.prototype.clearBit=function(t){return this.changeBit(t,D)},h.prototype.flipBit=function(t){return this.changeBit(t,b)},h.prototype.add=function(t){var i=n();return this.addTo(t,i),i},h.prototype.subtract=function(t){var i=n();return this.subTo(t,i),i},h.prototype.multiply=function(t){var i=n();return this.multiplyTo(t,i),i},h.prototype.divide=function(t){var i=n();return this.divRemTo(t,i,null),i},h.prototype.remainder=function(t){var i=n();return this.divRemTo(t,null,i),i},h.prototype.divideAndRemainder=function(t){var i=n(),r=n();return this.divRemTo(t,i,r),new Array(i,r)},h.prototype.modPow=function(t,i){var r,o,s=t.bitLength(),e=m(1);if(s<=0)return e;r=s<18?1:s<48?3:s<144?4:s<768?5:6,o=s<8?new T(i):i.isEven()?new M(i):new v(i);var h=new Array,u=3,f=r-1,p=(1<<r)-1;if(h[1]=o.convert(this),r>1){var a=n();for(o.sqrTo(h[1],a);u<=p;)h[u]=n(),o.mulTo(a,h[u-2],h[u]),u+=2}var c,y,d=t.t-1,b=!0,D=n();for(s=l(t[d])-1;d>=0;){for(s>=f?c=t[d]>>s-f&p:(c=(t[d]&(1<<s+1)-1)<<f-s,d>0&&(c|=t[d-1]>>this.DB+s-f)),u=r;0==(1&c);)c>>=1,--u;if((s-=u)<0&&(s+=this.DB,--d),b)h[c].copyTo(e),b=!1;else{for(;u>1;)o.sqrTo(e,D),o.sqrTo(D,e),u-=2;u>0?o.sqrTo(e,D):(y=e,e=D,D=y),o.mulTo(D,h[c],e)}for(;d>=0&&0==(t[d]&1<<s);)o.sqrTo(e,D),y=e,e=D,D=y,--s<0&&(s=this.DB-1,--d)}return o.revert(e)},h.prototype.modInverse=function(t){var i=t.isEven();if(this.isEven()&&i||0===t.signum())return h.ZERO;for(var r=t.clone(),o=this.clone(),s=m(1),e=m(0),n=m(0),u=m(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),i?(s.isEven()&&e.isEven()||(s.addTo(this,s),e.subTo(t,e)),s.rShiftTo(1,s)):e.isEven()||e.subTo(t,e),e.rShiftTo(1,e);for(;o.isEven();)o.rShiftTo(1,o),i?(n.isEven()&&u.isEven()||(n.addTo(this,n),u.subTo(t,u)),n.rShiftTo(1,n)):u.isEven()||u.subTo(t,u),u.rShiftTo(1,u);r.compareTo(o)>=0?(r.subTo(o,r),i&&s.subTo(n,s),e.subTo(u,e)):(o.subTo(r,o),i&&n.subTo(s,n),u.subTo(e,u))}return 0!=o.compareTo(h.ONE)?h.ZERO:u.compareTo(t)>=0?u.subtract(t):u.signum()<0?(u.addTo(t,u),u.signum()<0?u.add(t):u):u},h.prototype.pow=function(t){return this.exp(t,new S)},h.prototype.gcd=function(t){var i=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(i.compareTo(r)<0){var o=i;i=r,r=o}var s=i.getLowestSetBit(),e=r.getLowestSetBit();if(e<0)return i;for(s<e&&(e=s),e>0&&(i.rShiftTo(e,i),r.rShiftTo(e,r));i.signum()>0;)(s=i.getLowestSetBit())>0&&i.rShiftTo(s,i),(s=r.getLowestSetBit())>0&&r.rShiftTo(s,r),i.compareTo(r)>=0?(i.subTo(r,i),i.rShiftTo(1,i)):(r.subTo(i,r),r.rShiftTo(1,r));return e>0&&r.lShiftTo(e,r),r},h.prototype.isProbablePrime=function(t){var i,r=this.abs();if(1==r.t&&r[0]<=E[E.length-1]){for(i=0;i<E.length;++i)if(r[0]==E[i])return!0;return!1}if(r.isEven())return!1;for(i=1;i<E.length;){for(var o=E[i],s=i+1;s<E.length&&o<R;)o*=E[s++];for(o=r.modInt(o);i<s;)if(o%E[i++]==0)return!1}return r.millerRabin(t)},h.int2char=a,h.ZERO=m(0),h.ONE=m(1),h.prototype.square=function(){var t=n();return this.squareTo(t),t},t.exports=h}}]);