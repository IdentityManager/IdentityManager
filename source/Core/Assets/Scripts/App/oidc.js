///#source 1 1 iife-start.js
(function () {

    // globals
    var _promiseFactory;
    var _httpRequest;
///#source 1 1 crypto.min.js
var CryptoJS=CryptoJS||function(n,t){var u={},f=u.lib={},i=f.Base=function(){function n(){}return{extend:function(t){n.prototype=this;var i=new n;return t&&i.mixIn(t),i.hasOwnProperty("init")||(i.init=function(){i.$super.init.apply(this,arguments)}),i.init.prototype=i,i.$super=this,i},create:function(){var n=this.extend();return n.init.apply(n,arguments),n},init:function(){},mixIn:function(n){for(var t in n)n.hasOwnProperty(t)&&(this[t]=n[t]);n.hasOwnProperty("toString")&&(this.toString=n.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),r=f.WordArray=i.extend({init:function(n,i){n=this.words=n||[];this.sigBytes=i!=t?i:n.length*4},toString:function(n){return(n||h).stringify(this)},concat:function(n){var i=this.words,r=n.words,u=this.sigBytes,f=n.sigBytes,e,t;if(this.clamp(),u%4)for(t=0;t<f;t++)e=r[t>>>2]>>>24-t%4*8&255,i[u+t>>>2]|=e<<24-(u+t)%4*8;else if(r.length>65535)for(t=0;t<f;t+=4)i[u+t>>>2]=r[t>>>2];else i.push.apply(i,r);return this.sigBytes+=f,this},clamp:function(){var i=this.words,t=this.sigBytes;i[t>>>2]&=4294967295<<32-t%4*8;i.length=n.ceil(t/4)},clone:function(){var n=i.clone.call(this);return n.words=this.words.slice(0),n},random:function(t){for(var i=[],u=0;u<t;u+=4)i.push(n.random()*4294967296|0);return new r.init(i,t)}}),e=u.enc={},h=e.Hex={stringify:function(n){for(var r,u=n.words,f=n.sigBytes,i=[],t=0;t<f;t++)r=u[t>>>2]>>>24-t%4*8&255,i.push((r>>>4).toString(16)),i.push((r&15).toString(16));return i.join("")},parse:function(n){for(var i=n.length,u=[],t=0;t<i;t+=2)u[t>>>3]|=parseInt(n.substr(t,2),16)<<24-t%8*4;return new r.init(u,i/2)}},o=e.Latin1={stringify:function(n){for(var r,u=n.words,f=n.sigBytes,i=[],t=0;t<f;t++)r=u[t>>>2]>>>24-t%4*8&255,i.push(String.fromCharCode(r));return i.join("")},parse:function(n){for(var i=n.length,u=[],t=0;t<i;t++)u[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new r.init(u,i)}},c=e.Utf8={stringify:function(n){try{return decodeURIComponent(escape(o.stringify(n)))}catch(t){throw new Error("Malformed UTF-8 data");}},parse:function(n){return o.parse(unescape(encodeURIComponent(n)))}},s=f.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(n){typeof n=="string"&&(n=c.parse(n));this._data.concat(n);this._nDataBytes+=n.sigBytes},_process:function(t){var e=this._data,h=e.words,c=e.sigBytes,o=this.blockSize,a=o*4,u=c/a,i,s,f,l;if(u=t?n.ceil(u):n.max((u|0)-this._minBufferSize,0),i=u*o,s=n.min(i*4,c),i){for(f=0;f<i;f+=o)this._doProcessBlock(h,f);l=h.splice(0,i);e.sigBytes-=s}return new r.init(l,s)},clone:function(){var n=i.clone.call(this);return n._data=this._data.clone(),n},_minBufferSize:0}),a=f.Hasher=s.extend({cfg:i.extend(),init:function(n){this.cfg=this.cfg.extend(n);this.reset()},reset:function(){s.reset.call(this);this._doReset()},update:function(n){return this._append(n),this._process(),this},finalize:function(n){n&&this._append(n);return this._doFinalize()},blockSize:16,_createHelper:function(n){return function(t,i){return new n.init(i).finalize(t)}},_createHmacHelper:function(n){return function(t,i){return new l.HMAC.init(n,i).finalize(t)}}}),l=u.algo={};return u}(Math);(function(){var t=CryptoJS,r=t.lib,f=r.WordArray,i=r.Hasher,e=t.algo,n=[],u=e.SHA1=i.extend({_doReset:function(){this._hash=new f.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,i){for(var c,l,r=this._hash.words,s=r[0],f=r[1],e=r[2],o=r[3],h=r[4],u=0;u<80;u++)u<16?n[u]=t[i+u]|0:(c=n[u-3]^n[u-8]^n[u-14]^n[u-16],n[u]=c<<1|c>>>31),l=(s<<5|s>>>27)+h+n[u],l+=u<20?(f&e|~f&o)+1518500249:u<40?(f^e^o)+1859775393:u<60?(f&e|f&o|e&o)-1894007588:(f^e^o)-899497514,h=o,o=e,e=f<<30|f>>>2,f=s,s=l;r[0]=r[0]+s|0;r[1]=r[1]+f|0;r[2]=r[2]+e|0;r[3]=r[3]+o|0;r[4]=r[4]+h|0},_doFinalize:function(){var i=this._data,n=i.words,r=this._nDataBytes*8,t=i.sigBytes*8;return n[t>>>5]|=128<<24-t%32,n[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),n[(t+64>>>9<<4)+15]=r,i.sigBytes=n.length*4,this._process(),this._hash},clone:function(){var n=i.clone.call(this);return n._hash=this._hash.clone(),n}});t.SHA1=i._createHelper(u);t.HmacSHA1=i._createHmacHelper(u)})(),function(n){var i=CryptoJS,f=i.lib,s=f.WordArray,r=f.Hasher,h=i.algo,e=[],o=[],t,u;(function(){function u(t){for(var r=n.sqrt(t),i=2;i<=r;i++)if(!(t%i))return!1;return!0}function r(n){return(n-(n|0))*4294967296|0}for(var i=2,t=0;t<64;)u(i)&&(t<8&&(e[t]=r(n.pow(i,1/2))),o[t]=r(n.pow(i,1/3)),t++),i++})();t=[];u=h.SHA256=r.extend({_doReset:function(){this._hash=new s.init(e.slice(0))},_doProcessBlock:function(n,i){for(var r=this._hash.words,f=r[0],s=r[1],h=r[2],y=r[3],e=r[4],a=r[5],v=r[6],p=r[7],u=0;u<64;u++){if(u<16)t[u]=n[i+u]|0;else{var c=t[u-15],b=(c<<25|c>>>7)^(c<<14|c>>>18)^c>>>3,l=t[u-2],k=(l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10;t[u]=b+t[u-7]+k+t[u-16]}var d=e&a^~e&v,g=f&s^f&h^s&h,nt=(f<<30|f>>>2)^(f<<19|f>>>13)^(f<<10|f>>>22),tt=(e<<26|e>>>6)^(e<<21|e>>>11)^(e<<7|e>>>25),w=p+tt+d+o[u]+t[u],it=nt+g;p=v;v=a;a=e;e=y+w|0;y=h;h=s;s=f;f=w+it|0}r[0]=r[0]+f|0;r[1]=r[1]+s|0;r[2]=r[2]+h|0;r[3]=r[3]+y|0;r[4]=r[4]+e|0;r[5]=r[5]+a|0;r[6]=r[6]+v|0;r[7]=r[7]+p|0},_doFinalize:function(){var r=this._data,t=r.words,u=this._nDataBytes*8,i=r.sigBytes*8;return t[i>>>5]|=128<<24-i%32,t[(i+64>>>9<<4)+14]=n.floor(u/4294967296),t[(i+64>>>9<<4)+15]=u,r.sigBytes=t.length*4,this._process(),this._hash},clone:function(){var n=r.clone.call(this);return n._hash=this._hash.clone(),n}});i.SHA256=r._createHelper(u);i.HmacSHA256=r._createHmacHelper(u)}(Math),function(n){var i=CryptoJS,r=i.lib,t=r.Base,f=r.WordArray,u=i.x64={},e=u.Word=t.extend({init:function(n,t){this.high=n;this.low=t}}),o=u.WordArray=t.extend({init:function(t,i){t=this.words=t||[];this.sigBytes=i!=n?i:t.length*8},toX32:function(){for(var i,r=this.words,u=r.length,n=[],t=0;t<u;t++)i=r[t],n.push(i.high),n.push(i.low);return f.create(n,this.sigBytes)},clone:function(){for(var r=t.clone.call(this),i=r.words=this.words.slice(0),u=i.length,n=0;n<u;n++)i[n]=i[n].clone();return r}})}(),function(){function n(){return t.create.apply(t,arguments)}var r=CryptoJS,o=r.lib,u=o.Hasher,e=r.x64,t=e.Word,s=e.WordArray,h=r.algo,c=[n(1116352408,3609767458),n(1899447441,602891725),n(3049323471,3964484399),n(3921009573,2173295548),n(961987163,4081628472),n(1508970993,3053834265),n(2453635748,2937671579),n(2870763221,3664609560),n(3624381080,2734883394),n(310598401,1164996542),n(607225278,1323610764),n(1426881987,3590304994),n(1925078388,4068182383),n(2162078206,991336113),n(2614888103,633803317),n(3248222580,3479774868),n(3835390401,2666613458),n(4022224774,944711139),n(264347078,2341262773),n(604807628,2007800933),n(770255983,1495990901),n(1249150122,1856431235),n(1555081692,3175218132),n(1996064986,2198950837),n(2554220882,3999719339),n(2821834349,766784016),n(2952996808,2566594879),n(3210313671,3203337956),n(3336571891,1034457026),n(3584528711,2466948901),n(113926993,3758326383),n(338241895,168717936),n(666307205,1188179964),n(773529912,1546045734),n(1294757372,1522805485),n(1396182291,2643833823),n(1695183700,2343527390),n(1986661051,1014477480),n(2177026350,1206759142),n(2456956037,344077627),n(2730485921,1290863460),n(2820302411,3158454273),n(3259730800,3505952657),n(3345764771,106217008),n(3516065817,3606008344),n(3600352804,1432725776),n(4094571909,1467031594),n(275423344,851169720),n(430227734,3100823752),n(506948616,1363258195),n(659060556,3750685593),n(883997877,3785050280),n(958139571,3318307427),n(1322822218,3812723403),n(1537002063,2003034995),n(1747873779,3602036899),n(1955562222,1575990012),n(2024104815,1125592928),n(2227730452,2716904306),n(2361852424,442776044),n(2428436474,593698344),n(2756734187,3733110249),n(3204031479,2999351573),n(3329325298,3815920427),n(3391569614,3928383900),n(3515267271,566280711),n(3940187606,3454069534),n(4118630271,4000239992),n(116418474,1914138554),n(174292421,2731055270),n(289380356,3203993006),n(460393269,320620315),n(685471733,587496836),n(852142971,1086792851),n(1017036298,365543100),n(1126000580,2618297676),n(1288033470,3409855158),n(1501505948,4234509866),n(1607167915,987167468),n(1816402316,1246189591)],i=[],f;(function(){for(var t=0;t<80;t++)i[t]=n()})();f=h.SHA512=u.extend({_doReset:function(){this._hash=new s.init([new t.init(1779033703,4089235720),new t.init(3144134277,2227873595),new t.init(1013904242,4271175723),new t.init(2773480762,1595750129),new t.init(1359893119,2917565137),new t.init(2600822924,725511199),new t.init(528734635,4215389547),new t.init(1541459225,327033209)])},_doProcessBlock:function(n,t){for(var tt,it,h,l=this._hash.words,et=l[0],ot=l[1],st=l[2],ht=l[3],ct=l[4],lt=l[5],at=l[6],vt=l[7],fi=et.high,yt=et.low,ei=ot.high,pt=ot.low,oi=st.high,wt=st.low,si=ht.high,bt=ht.low,hi=ct.high,kt=ct.low,ci=lt.high,dt=lt.low,li=at.high,gt=at.low,ai=vt.high,ni=vt.low,f=fi,r=yt,w=ei,a=pt,b=oi,v=wt,ri=si,k=bt,e=hi,u=kt,ti=ci,d=dt,ii=li,g=gt,ui=ai,nt=ni,o=0;o<80;o++){if(tt=i[o],o<16)it=tt.high=n[t+o*2]|0,h=tt.low=n[t+o*2+1]|0;else{var vi=i[o-15],y=vi.high,rt=vi.low,ur=(y>>>1|rt<<31)^(y>>>8|rt<<24)^y>>>7,yi=(rt>>>1|y<<31)^(rt>>>8|y<<24)^(rt>>>7|y<<25),pi=i[o-2],p=pi.high,ut=pi.low,fr=(p>>>19|ut<<13)^(p<<3|ut>>>29)^p>>>6,wi=(ut>>>19|p<<13)^(ut<<3|p>>>29)^(ut>>>6|p<<26),bi=i[o-7],er=bi.high,or=bi.low,ki=i[o-16],sr=ki.high,di=ki.low,h=yi+or,it=ur+er+(h>>>0<yi>>>0?1:0),h=h+wi,it=it+fr+(h>>>0<wi>>>0?1:0),h=h+di,it=it+sr+(h>>>0<di>>>0?1:0);tt.high=it;tt.low=h}var hr=e&ti^~e&ii,gi=u&d^~u&g,cr=f&w^f&b^w&b,lr=r&a^r&v^a&v,ar=(f>>>28|r<<4)^(f<<30|r>>>2)^(f<<25|r>>>7),nr=(r>>>28|f<<4)^(r<<30|f>>>2)^(r<<25|f>>>7),vr=(e>>>14|u<<18)^(e>>>18|u<<14)^(e<<23|u>>>9),yr=(u>>>14|e<<18)^(u>>>18|e<<14)^(u<<23|e>>>9),tr=c[o],pr=tr.high,ir=tr.low,s=nt+yr,ft=ui+vr+(s>>>0<nt>>>0?1:0),s=s+gi,ft=ft+hr+(s>>>0<gi>>>0?1:0),s=s+ir,ft=ft+pr+(s>>>0<ir>>>0?1:0),s=s+h,ft=ft+it+(s>>>0<h>>>0?1:0),rr=nr+lr,wr=ar+cr+(rr>>>0<nr>>>0?1:0);ui=ii;nt=g;ii=ti;g=d;ti=e;d=u;u=k+s|0;e=ri+ft+(u>>>0<k>>>0?1:0)|0;ri=b;k=v;b=w;v=a;w=f;a=r;r=s+rr|0;f=ft+wr+(r>>>0<s>>>0?1:0)|0}yt=et.low=yt+r;et.high=fi+f+(yt>>>0<r>>>0?1:0);pt=ot.low=pt+a;ot.high=ei+w+(pt>>>0<a>>>0?1:0);wt=st.low=wt+v;st.high=oi+b+(wt>>>0<v>>>0?1:0);bt=ht.low=bt+k;ht.high=si+ri+(bt>>>0<k>>>0?1:0);kt=ct.low=kt+u;ct.high=hi+e+(kt>>>0<u>>>0?1:0);dt=lt.low=dt+d;lt.high=ci+ti+(dt>>>0<d>>>0?1:0);gt=at.low=gt+g;at.high=li+ii+(gt>>>0<g>>>0?1:0);ni=vt.low=ni+nt;vt.high=ai+ui+(ni>>>0<nt>>>0?1:0)},_doFinalize:function(){var i=this._data,n=i.words,r=this._nDataBytes*8,t=i.sigBytes*8;return n[t>>>5]|=128<<24-t%32,n[(t+128>>>10<<5)+30]=Math.floor(r/4294967296),n[(t+128>>>10<<5)+31]=r,i.sigBytes=n.length*4,this._process(),this._hash.toX32()},clone:function(){var n=u.clone.call(this);return n._hash=this._hash.clone(),n},blockSize:32});r.SHA512=u._createHelper(f);r.HmacSHA512=u._createHmacHelper(f)}();
///#source 1 1 rsa.min.js
function hex2b64(n){for(var i,r="",t=0;t+3<=n.length;t+=3)i=parseInt(n.substring(t,t+3),16),r+=b64map.charAt(i>>6)+b64map.charAt(i&63);if(t+1==n.length?(i=parseInt(n.substring(t,t+1),16),r+=b64map.charAt(i<<2)):t+2==n.length&&(i=parseInt(n.substring(t,t+2),16),r+=b64map.charAt(i>>2)+b64map.charAt((i&3)<<4)),b64pad)while((r.length&3)>0)r+=b64pad;return r}function b64tohex(n){for(var i="",r=0,u,t,f=0;f<n.length;++f){if(n.charAt(f)==b64pad)break;(t=b64map.indexOf(n.charAt(f)),t<0)||(r==0?(i+=int2char(t>>2),u=t&3,r=1):r==1?(i+=int2char(u<<2|t>>4),u=t&15,r=2):r==2?(i+=int2char(u),i+=int2char(t>>2),u=t&3,r=3):(i+=int2char(u<<2|t>>4),i+=int2char(t&15),r=0))}return r==1&&(i+=int2char(u<<2)),i}function b64toBA(n){for(var i=b64tohex(n),r=[],t=0;2*t<i.length;++t)r[t]=parseInt(i.substring(2*t,2*t+2),16);return r}function BigInteger(n,t,i){n!=null&&("number"==typeof n?this.fromNumber(n,t,i):t==null&&"string"!=typeof n?this.fromString(n,256):this.fromString(n,t))}function nbi(){return new BigInteger(null)}function am1(n,t,i,r,u,f){while(--f>=0){var e=t*this[n++]+i[r]+u;u=Math.floor(e/67108864);i[r++]=e&67108863}return u}function am2(n,t,i,r,u,f){for(var o=t&32767,s=t>>15;--f>=0;){var e=this[n]&32767,h=this[n++]>>15,c=s*e+h*o;e=o*e+((c&32767)<<15)+i[r]+(u&1073741823);u=(e>>>30)+(c>>>15)+s*h+(u>>>30);i[r++]=e&1073741823}return u}function am3(n,t,i,r,u,f){for(var o=t&16383,s=t>>14;--f>=0;){var e=this[n]&16383,h=this[n++]>>14,c=s*e+h*o;e=o*e+((c&16383)<<14)+i[r]+u;u=(e>>28)+(c>>14)+s*h;i[r++]=e&268435455}return u}function int2char(n){return BI_RM.charAt(n)}function intAt(n,t){var i=BI_RC[n.charCodeAt(t)];return i==null?-1:i}function bnpCopyTo(n){for(var t=this.t-1;t>=0;--t)n[t]=this[t];n.t=this.t;n.s=this.s}function bnpFromInt(n){this.t=1;this.s=n<0?-1:0;n>0?this[0]=n:n<-1?this[0]=n+this.DV:this.t=0}function nbv(n){var t=nbi();return t.fromInt(n),t}function bnpFromString(n,t){var r,u;if(t==16)r=4;else if(t==8)r=3;else if(t==256)r=8;else if(t==2)r=1;else if(t==32)r=5;else if(t==4)r=2;else{this.fromRadix(n,t);return}this.t=0;this.s=0;for(var f=n.length,e=!1,i=0;--f>=0;){if(u=r==8?n[f]&255:intAt(n,f),u<0){n.charAt(f)=="-"&&(e=!0);continue}e=!1;i==0?this[this.t++]=u:i+r>this.DB?(this[this.t-1]|=(u&(1<<this.DB-i)-1)<<i,this[this.t++]=u>>this.DB-i):this[this.t-1]|=u<<i;i+=r;i>=this.DB&&(i-=this.DB)}r==8&&(n[0]&128)!=0&&(this.s=-1,i>0&&(this[this.t-1]|=(1<<this.DB-i)-1<<i));this.clamp();e&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var n=this.s&this.DM;this.t>0&&this[this.t-1]==n;)--this.t}function bnToString(n){var t;if(this.s<0)return"-"+this.negate().toString(n);if(n==16)t=4;else if(n==8)t=3;else if(n==2)t=1;else if(n==32)t=5;else if(n==4)t=2;else return this.toRadix(n);var o=(1<<t)-1,u,f=!1,e="",r=this.t,i=this.DB-r*this.DB%t;if(r-->0)for(i<this.DB&&(u=this[r]>>i)>0&&(f=!0,e=int2char(u));r>=0;)i<t?u=(this[r]&(1<<i)-1)<<t-i|this[--r]>>(i+=this.DB-t):(u=this[r]>>(i-=t)&o,i<=0&&(i+=this.DB,--r)),u>0&&(f=!0),f&&(e+=int2char(u));return f?e:"0"}function bnNegate(){var n=nbi();return BigInteger.ZERO.subTo(this,n),n}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(n){var t=this.s-n.s,i;if(t!=0)return t;if(i=this.t,t=i-n.t,t!=0)return this.s<0?-t:t;while(--i>=0)if((t=this[i]-n[i])!=0)return t;return 0}function nbits(n){var i=1,t;return(t=n>>>16)!=0&&(n=t,i+=16),(t=n>>8)!=0&&(n=t,i+=8),(t=n>>4)!=0&&(n=t,i+=4),(t=n>>2)!=0&&(n=t,i+=2),(t=n>>1)!=0&&(n=t,i+=1),i}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(n,t){for(var i=this.t-1;i>=0;--i)t[i+n]=this[i];for(i=n-1;i>=0;--i)t[i]=0;t.t=this.t+n;t.s=this.s}function bnpDRShiftTo(n,t){for(var i=n;i<this.t;++i)t[i-n]=this[i];t.t=Math.max(this.t-n,0);t.s=this.s}function bnpLShiftTo(n,t){for(var u=n%this.DB,e=this.DB-u,o=(1<<e)-1,r=Math.floor(n/this.DB),f=this.s<<u&this.DM,i=this.t-1;i>=0;--i)t[i+r+1]=this[i]>>e|f,f=(this[i]&o)<<u;for(i=r-1;i>=0;--i)t[i]=0;t[r]=f;t.t=this.t+r+1;t.s=this.s;t.clamp()}function bnpRShiftTo(n,t){var i,r;if(t.s=this.s,i=Math.floor(n/this.DB),i>=this.t){t.t=0;return}var u=n%this.DB,f=this.DB-u,e=(1<<u)-1;for(t[0]=this[i]>>u,r=i+1;r<this.t;++r)t[r-i-1]|=(this[r]&e)<<f,t[r-i]=this[r]>>u;u>0&&(t[this.t-i-1]|=(this.s&e)<<f);t.t=this.t-i;t.clamp()}function bnpSubTo(n,t){for(var r=0,i=0,u=Math.min(n.t,this.t);r<u;)i+=this[r]-n[r],t[r++]=i&this.DM,i>>=this.DB;if(n.t<this.t){for(i-=n.s;r<this.t;)i+=this[r],t[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<n.t;)i-=n[r],t[r++]=i&this.DM,i>>=this.DB;i-=n.s}t.s=i<0?-1:0;i<-1?t[r++]=this.DV+i:i>0&&(t[r++]=i);t.t=r;t.clamp()}function bnpMultiplyTo(n,t){var r=this.abs(),u=n.abs(),i=r.t;for(t.t=i+u.t;--i>=0;)t[i]=0;for(i=0;i<u.t;++i)t[i+r.t]=r.am(0,u[i],t,i,0,r.t);t.s=0;t.clamp();this.s!=n.s&&BigInteger.ZERO.subTo(t,t)}function bnpSquareTo(n){for(var i=this.abs(),t=n.t=2*i.t,r;--t>=0;)n[t]=0;for(t=0;t<i.t-1;++t)r=i.am(t,i[t],n,2*t,0,1),(n[t+i.t]+=i.am(t+1,2*i[t],n,2*t+1,r,i.t-t-1))>=i.DV&&(n[t+i.t]-=i.DV,n[t+i.t+1]=1);n.t>0&&(n[n.t-1]+=i.am(t,i[t],n,2*t,0,1));n.s=0;n.clamp()}function bnpDivRemTo(n,t,i){var e=n.abs(),h,u,c,a;if(!(e.t<=0)){if(h=this.abs(),h.t<e.t){t!=null&&t.fromInt(0);i!=null&&this.copyTo(i);return}i==null&&(i=nbi());var r=nbi(),v=this.s,p=n.s,s=this.DB-nbits(e[e.t-1]);if(s>0?(e.lShiftTo(s,r),h.lShiftTo(s,i)):(e.copyTo(r),h.copyTo(i)),u=r.t,c=r[u-1],c!=0){var y=c*(1<<this.F1)+(u>1?r[u-2]>>this.F2:0),w=this.FV/y,b=(1<<this.F1)/y,k=1<<this.F2,o=i.t,l=o-u,f=t==null?nbi():t;for(r.dlShiftTo(l,f),i.compareTo(f)>=0&&(i[i.t++]=1,i.subTo(f,i)),BigInteger.ONE.dlShiftTo(u,f),f.subTo(r,r);r.t<u;)r[r.t++]=0;while(--l>=0)if(a=i[--o]==c?this.DM:Math.floor(i[o]*w+(i[o-1]+k)*b),(i[o]+=r.am(0,a,i,l,0,u))<a)for(r.dlShiftTo(l,f),i.subTo(f,i);i[o]<--a;)i.subTo(f,i);t!=null&&(i.drShiftTo(u,t),v!=p&&BigInteger.ZERO.subTo(t,t));i.t=u;i.clamp();s>0&&i.rShiftTo(s,i);v<0&&BigInteger.ZERO.subTo(i,i)}}}function bnMod(n){var t=nbi();return this.abs().divRemTo(n,null,t),this.s<0&&t.compareTo(BigInteger.ZERO)>0&&n.subTo(t,t),t}function Classic(n){this.m=n}function cConvert(n){return n.s<0||n.compareTo(this.m)>=0?n.mod(this.m):n}function cRevert(n){return n}function cReduce(n){n.divRemTo(this.m,null,n)}function cMulTo(n,t,i){n.multiplyTo(t,i);this.reduce(i)}function cSqrTo(n,t){n.squareTo(t);this.reduce(t)}function bnpInvDigit(){var t,n;return this.t<1?0:(t=this[0],(t&1)==0)?0:(n=t&3,n=n*(2-(t&15)*n)&15,n=n*(2-(t&255)*n)&255,n=n*(2-((t&65535)*n&65535))&65535,n=n*(2-t*n%this.DV)%this.DV,n>0?this.DV-n:-n)}function Montgomery(n){this.m=n;this.mp=n.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<n.DB-15)-1;this.mt2=2*n.t}function montConvert(n){var t=nbi();return n.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),n.s<0&&t.compareTo(BigInteger.ZERO)>0&&this.m.subTo(t,t),t}function montRevert(n){var t=nbi();return n.copyTo(t),this.reduce(t),t}function montReduce(n){for(var i,t,r;n.t<=this.mt2;)n[n.t++]=0;for(i=0;i<this.m.t;++i)for(t=n[i]&32767,r=t*this.mpl+((t*this.mph+(n[i]>>15)*this.mpl&this.um)<<15)&n.DM,t=i+this.m.t,n[t]+=this.m.am(0,r,n,i,0,this.m.t);n[t]>=n.DV;)n[t]-=n.DV,n[++t]++;n.clamp();n.drShiftTo(this.m.t,n);n.compareTo(this.m)>=0&&n.subTo(this.m,n)}function montSqrTo(n,t){n.squareTo(t);this.reduce(t)}function montMulTo(n,t,i){n.multiplyTo(t,i);this.reduce(i)}function bnpIsEven(){return(this.t>0?this[0]&1:this.s)==0}function bnpExp(n,t){var e;if(n>4294967295||n<1)return BigInteger.ONE;var i=nbi(),r=nbi(),u=t.convert(this),f=nbits(n)-1;for(u.copyTo(i);--f>=0;)t.sqrTo(i,r),(n&1<<f)>0?t.mulTo(r,u,i):(e=i,i=r,r=e);return t.revert(i)}function bnModPowInt(n,t){var i;return i=n<256||t.isEven()?new Classic(t):new Montgomery(t),this.exp(n,i)}function bnClone(){var n=nbi();return this.copyTo(n),n}function bnIntValue(){if(this.s<0){if(this.t==1)return this[0]-this.DV;if(this.t==0)return-1}else{if(this.t==1)return this[0];if(this.t==0)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return this.t==0?this.s:this[0]<<24>>24}function bnShortValue(){return this.t==0?this.s:this[0]<<16>>16}function bnpChunkSize(n){return Math.floor(Math.LN2*this.DB/Math.log(n))}function bnSigNum(){return this.s<0?-1:this.t<=0||this.t==1&&this[0]<=0?0:1}function bnpToRadix(n){if(n==null&&(n=10),this.signum()==0||n<2||n>36)return"0";var e=this.chunkSize(n),u=Math.pow(n,e),f=nbv(u),t=nbi(),i=nbi(),r="";for(this.divRemTo(f,t,i);t.signum()>0;)r=(u+i.intValue()).toString(n).substr(1)+r,t.divRemTo(f,t,i);return i.intValue().toString(n)+r}function bnpFromRadix(n,t){var r,f;this.fromInt(0);t==null&&(t=10);var e=this.chunkSize(t),s=Math.pow(t,e),o=!1,u=0,i=0;for(r=0;r<n.length;++r){if(f=intAt(n,r),f<0){n.charAt(r)=="-"&&this.signum()==0&&(o=!0);continue}i=t*i+f;++u>=e&&(this.dMultiply(s),this.dAddOffset(i,0),u=0,i=0)}u>0&&(this.dMultiply(Math.pow(t,u)),this.dAddOffset(i,0));o&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(n,t,i){if("number"==typeof t)if(n<2)this.fromInt(1);else for(this.fromNumber(n,i),this.testBit(n-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(n-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(t);)this.dAddOffset(2,0),this.bitLength()>n&&this.subTo(BigInteger.ONE.shiftLeft(n-1),this);else{var r=[],u=n&7;r.length=(n>>3)+1;t.nextBytes(r);u>0?r[0]&=(1<<u)-1:r[0]=0;this.fromString(r,256)}}function bnToByteArray(){var i=this.t,u=[],n,t,r;if(u[0]=this.s,n=this.DB-i*this.DB%8,r=0,i-->0)for(n<this.DB&&(t=this[i]>>n)!=(this.s&this.DM)>>n&&(u[r++]=t|this.s<<this.DB-n);i>=0;)n<8?t=(this[i]&(1<<n)-1)<<8-n|this[--i]>>(n+=this.DB-8):(t=this[i]>>(n-=8)&255,n<=0&&(n+=this.DB,--i)),(t&128)!=0&&(t|=-256),r==0&&(this.s&128)!=(t&128)&&++r,(r>0||t!=this.s)&&(u[r++]=t);return u}function bnEquals(n){return this.compareTo(n)==0}function bnMin(n){return this.compareTo(n)<0?this:n}function bnMax(n){return this.compareTo(n)>0?this:n}function bnpBitwiseTo(n,t,i){for(var u,f=Math.min(n.t,this.t),r=0;r<f;++r)i[r]=t(this[r],n[r]);if(n.t<this.t){for(u=n.s&this.DM,r=f;r<this.t;++r)i[r]=t(this[r],u);i.t=this.t}else{for(u=this.s&this.DM,r=f;r<n.t;++r)i[r]=t(u,n[r]);i.t=n.t}i.s=t(this.s,n.s);i.clamp()}function op_and(n,t){return n&t}function bnAnd(n){var t=nbi();return this.bitwiseTo(n,op_and,t),t}function op_or(n,t){return n|t}function bnOr(n){var t=nbi();return this.bitwiseTo(n,op_or,t),t}function op_xor(n,t){return n^t}function bnXor(n){var t=nbi();return this.bitwiseTo(n,op_xor,t),t}function op_andnot(n,t){return n&~t}function bnAndNot(n){var t=nbi();return this.bitwiseTo(n,op_andnot,t),t}function bnNot(){for(var n=nbi(),t=0;t<this.t;++t)n[t]=this.DM&~this[t];return n.t=this.t,n.s=~this.s,n}function bnShiftLeft(n){var t=nbi();return n<0?this.rShiftTo(-n,t):this.lShiftTo(n,t),t}function bnShiftRight(n){var t=nbi();return n<0?this.lShiftTo(-n,t):this.rShiftTo(n,t),t}function lbit(n){if(n==0)return-1;var t=0;return(n&65535)==0&&(n>>=16,t+=16),(n&255)==0&&(n>>=8,t+=8),(n&15)==0&&(n>>=4,t+=4),(n&3)==0&&(n>>=2,t+=2),(n&1)==0&&++t,t}function bnGetLowestSetBit(){for(var n=0;n<this.t;++n)if(this[n]!=0)return n*this.DB+lbit(this[n]);return this.s<0?this.t*this.DB:-1}function cbit(n){for(var t=0;n!=0;)n&=n-1,++t;return t}function bnBitCount(){for(var t=0,i=this.s&this.DM,n=0;n<this.t;++n)t+=cbit(this[n]^i);return t}function bnTestBit(n){var t=Math.floor(n/this.DB);return t>=this.t?this.s!=0:(this[t]&1<<n%this.DB)!=0}function bnpChangeBit(n,t){var i=BigInteger.ONE.shiftLeft(n);return this.bitwiseTo(i,t,i),i}function bnSetBit(n){return this.changeBit(n,op_or)}function bnClearBit(n){return this.changeBit(n,op_andnot)}function bnFlipBit(n){return this.changeBit(n,op_xor)}function bnpAddTo(n,t){for(var r=0,i=0,u=Math.min(n.t,this.t);r<u;)i+=this[r]+n[r],t[r++]=i&this.DM,i>>=this.DB;if(n.t<this.t){for(i+=n.s;r<this.t;)i+=this[r],t[r++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;r<n.t;)i+=n[r],t[r++]=i&this.DM,i>>=this.DB;i+=n.s}t.s=i<0?-1:0;i>0?t[r++]=i:i<-1&&(t[r++]=this.DV+i);t.t=r;t.clamp()}function bnAdd(n){var t=nbi();return this.addTo(n,t),t}function bnSubtract(n){var t=nbi();return this.subTo(n,t),t}function bnMultiply(n){var t=nbi();return this.multiplyTo(n,t),t}function bnSquare(){var n=nbi();return this.squareTo(n),n}function bnDivide(n){var t=nbi();return this.divRemTo(n,t,null),t}function bnRemainder(n){var t=nbi();return this.divRemTo(n,null,t),t}function bnDivideAndRemainder(n){var t=nbi(),i=nbi();return this.divRemTo(n,t,i),[t,i]}function bnpDMultiply(n){this[this.t]=this.am(0,n-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(n,t){if(n!=0){while(this.t<=t)this[this.t++]=0;for(this[t]+=n;this[t]>=this.DV;)this[t]-=this.DV,++t>=this.t&&(this[this.t++]=0),++this[t]}}function NullExp(){}function nNop(n){return n}function nMulTo(n,t,i){n.multiplyTo(t,i)}function nSqrTo(n,t){n.squareTo(t)}function bnPow(n){return this.exp(n,new NullExp)}function bnpMultiplyLowerTo(n,t,i){var r=Math.min(this.t+n.t,t),u;for(i.s=0,i.t=r;r>0;)i[--r]=0;for(u=i.t-this.t;r<u;++r)i[r+this.t]=this.am(0,n[r],i,r,0,this.t);for(u=Math.min(n.t,t);r<u;++r)this.am(0,n[r],i,r,0,t-r);i.clamp()}function bnpMultiplyUpperTo(n,t,i){--t;var r=i.t=this.t+n.t-t;for(i.s=0;--r>=0;)i[r]=0;for(r=Math.max(t-this.t,0);r<n.t;++r)i[this.t+r-t]=this.am(t-r,n[r],i,0,0,this.t+r-t);i.clamp();i.drShiftTo(1,i)}function Barrett(n){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*n.t,this.r2);this.mu=this.r2.divide(n);this.m=n}function barrettConvert(n){if(n.s<0||n.t>2*this.m.t)return n.mod(this.m);if(n.compareTo(this.m)<0)return n;var t=nbi();return n.copyTo(t),this.reduce(t),t}function barrettRevert(n){return n}function barrettReduce(n){for(n.drShiftTo(this.m.t-1,this.r2),n.t>this.m.t+1&&(n.t=this.m.t+1,n.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);n.compareTo(this.r2)<0;)n.dAddOffset(1,this.m.t+1);for(n.subTo(this.r2,n);n.compareTo(this.m)>=0;)n.subTo(this.m,n)}function barrettSqrTo(n,t){n.squareTo(t);this.reduce(t)}function barrettMulTo(n,t,i){n.multiplyTo(t,i);this.reduce(i)}function bnModPow(n,t){var i=n.bitLength(),c,r=nbv(1),f,v;if(i<=0)return r;c=i<18?1:i<48?3:i<144?4:i<768?5:6;f=i<8?new Classic(t):t.isEven()?new Barrett(t):new Montgomery(t);var s=[],u=3,l=c-1,y=(1<<c)-1;if(s[1]=f.convert(this),c>1)for(v=nbi(),f.sqrTo(s[1],v);u<=y;)s[u]=nbi(),f.mulTo(v,s[u-2],s[u]),u+=2;var e=n.t-1,h,p=!0,o=nbi(),a;for(i=nbits(n[e])-1;e>=0;){for(i>=l?h=n[e]>>i-l&y:(h=(n[e]&(1<<i+1)-1)<<l-i,e>0&&(h|=n[e-1]>>this.DB+i-l)),u=c;(h&1)==0;)h>>=1,--u;if((i-=u)<0&&(i+=this.DB,--e),p)s[h].copyTo(r),p=!1;else{while(u>1)f.sqrTo(r,o),f.sqrTo(o,r),u-=2;u>0?f.sqrTo(r,o):(a=r,r=o,o=a);f.mulTo(o,s[h],r)}while(e>=0&&(n[e]&1<<i)==0)f.sqrTo(r,o),a=r,r=o,o=a,--i<0&&(i=this.DB-1,--e)}return f.revert(r)}function bnGCD(n){var i=this.s<0?this.negate():this.clone(),t=n.s<0?n.negate():n.clone(),f,u,r;if(i.compareTo(t)<0&&(f=i,i=t,t=f),u=i.getLowestSetBit(),r=t.getLowestSetBit(),r<0)return i;for(u<r&&(r=u),r>0&&(i.rShiftTo(r,i),t.rShiftTo(r,t));i.signum()>0;)(u=i.getLowestSetBit())>0&&i.rShiftTo(u,i),(u=t.getLowestSetBit())>0&&t.rShiftTo(u,t),i.compareTo(t)>=0?(i.subTo(t,i),i.rShiftTo(1,i)):(t.subTo(i,t),t.rShiftTo(1,t));return r>0&&t.lShiftTo(r,t),t}function bnpModInt(n){var r,t,i;if(n<=0)return 0;if(r=this.DV%n,t=this.s<0?n-1:0,this.t>0)if(r==0)t=this[0]%n;else for(i=this.t-1;i>=0;--i)t=(r*t+this[i])%n;return t}function bnModInverse(n){var o=n.isEven();if(this.isEven()&&o||n.signum()==0)return BigInteger.ZERO;for(var r=n.clone(),u=this.clone(),f=nbv(1),i=nbv(0),e=nbv(0),t=nbv(1);r.signum()!=0;){while(r.isEven())r.rShiftTo(1,r),o?(f.isEven()&&i.isEven()||(f.addTo(this,f),i.subTo(n,i)),f.rShiftTo(1,f)):i.isEven()||i.subTo(n,i),i.rShiftTo(1,i);while(u.isEven())u.rShiftTo(1,u),o?(e.isEven()&&t.isEven()||(e.addTo(this,e),t.subTo(n,t)),e.rShiftTo(1,e)):t.isEven()||t.subTo(n,t),t.rShiftTo(1,t);r.compareTo(u)>=0?(r.subTo(u,r),o&&f.subTo(e,f),i.subTo(t,i)):(u.subTo(r,u),o&&e.subTo(f,e),t.subTo(i,t))}if(u.compareTo(BigInteger.ONE)!=0)return BigInteger.ZERO;if(t.compareTo(n)>=0)return t.subtract(n);if(t.signum()<0)t.addTo(n,t);else return t;return t.signum()<0?t.add(n):t}function bnIsProbablePrime(n){var t,i=this.abs(),r,u;if(i.t==1&&i[0]<=lowprimes[lowprimes.length-1]){for(t=0;t<lowprimes.length;++t)if(i[0]==lowprimes[t])return!0;return!1}if(i.isEven())return!1;for(t=1;t<lowprimes.length;){for(r=lowprimes[t],u=t+1;u<lowprimes.length&&r<lplim;)r*=lowprimes[u++];for(r=i.modInt(r);t<u;)if(r%lowprimes[t++]==0)return!1}return i.millerRabin(n)}function bnpMillerRabin(n){var i=this.subtract(BigInteger.ONE),r=i.getLowestSetBit(),e,u,f,t,o;if(r<=0)return!1;for(e=i.shiftRight(r),n=n+1>>1,n>lowprimes.length&&(n=lowprimes.length),u=nbi(),f=0;f<n;++f)if(u.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]),t=u.modPow(e,this),t.compareTo(BigInteger.ONE)!=0&&t.compareTo(i)!=0){for(o=1;o++<r&&t.compareTo(i)!=0;)if(t=t.modPowInt(2,this),t.compareTo(BigInteger.ONE)==0)return!1;if(t.compareTo(i)!=0)return!1}return!0}function parseBigInt(n,t){return new BigInteger(n,t)}function linebrk(n,t){for(var r="",i=0;i+t<n.length;)r+=n.substring(i,i+t)+"\n",i+=t;return r+n.substring(i,n.length)}function byte2Hex(n){return n<16?"0"+n.toString(16):n.toString(16)}function pkcs1pad2(n,t){var i,f,r,e,u;if(t<n.length+11)return alert("Message too long for RSA"),null;for(i=[],f=n.length-1;f>=0&&t>0;)r=n.charCodeAt(f--),r<128?i[--t]=r:r>127&&r<2048?(i[--t]=r&63|128,i[--t]=r>>6|192):(i[--t]=r&63|128,i[--t]=r>>6&63|128,i[--t]=r>>12|224);for(i[--t]=0,e=new SecureRandom,u=[];t>2;){for(u[0]=0;u[0]==0;)e.nextBytes(u);i[--t]=u[0]}return i[--t]=2,i[--t]=0,new BigInteger(i)}function oaep_mgf1_arr(n,t,i){for(var u="",r=0;u.length<t;)u+=i(String.fromCharCode.apply(String,n.concat([(r&4278190080)>>24,(r&16711680)>>16,(r&65280)>>8,r&255]))),r+=1;return u}function oaep_pad(n,t,i){var o,r,f,u,h,e,c,s;if(n.length+2*SHA1_SIZE+2>t)throw"Message too long for RSA";for(o="",r=0;r<t-n.length-2*SHA1_SIZE-2;r+=1)o+="\x00";for(f=rstr_sha1("")+o+"\x01"+n,u=new Array(SHA1_SIZE),(new SecureRandom).nextBytes(u),h=oaep_mgf1_arr(u,f.length,i||rstr_sha1),e=[],r=0;r<f.length;r+=1)e[r]=f.charCodeAt(r)^h.charCodeAt(r);for(c=oaep_mgf1_arr(e,u.length,rstr_sha1),s=[0],r=0;r<u.length;r+=1)s[r+1]=u[r]^c.charCodeAt(r);return new BigInteger(s.concat(e))}function RSAKey(){this.n=null;this.e=0;this.d=null;this.p=null;this.q=null;this.dmp1=null;this.dmq1=null;this.coeff=null}function RSASetPublic(n,t){this.isPublic=!0;typeof n!="string"?(this.n=n,this.e=t):n!=null&&t!=null&&n.length>0&&t.length>0?(this.n=parseBigInt(n,16),this.e=parseInt(t,16)):alert("Invalid RSA public key")}function RSADoPublic(n){return n.modPowInt(this.e,this.n)}function RSAEncrypt(n){var r=pkcs1pad2(n,this.n.bitLength()+7>>3),i,t;return r==null?null:(i=this.doPublic(r),i==null)?null:(t=i.toString(16),(t.length&1)==0?t:"0"+t)}function RSAEncryptOAEP(n,t){var u=oaep_pad(n,this.n.bitLength()+7>>3,t),r,i;return u==null?null:(r=this.doPublic(u),r==null)?null:(i=r.toString(16),(i.length&1)==0?i:"0"+i)}function pkcs1unpad2(n,t){for(var r=n.toByteArray(),i=0,f,u;i<r.length&&r[i]==0;)++i;if(r.length-i!=t-1||r[i]!=2)return null;for(++i;r[i]!=0;)if(++i>=r.length)return null;for(f="";++i<r.length;)u=r[i]&255,u<128?f+=String.fromCharCode(u):u>191&&u<224?(f+=String.fromCharCode((u&31)<<6|r[i+1]&63),++i):(f+=String.fromCharCode((u&15)<<12|(r[i+1]&63)<<6|r[i+2]&63),i+=2);return f}function oaep_mgf1_str(n,t,i){for(var u="",r=0;u.length<t;)u+=i(n+String.fromCharCode.apply(String,[(r&4278190080)>>24,(r&16711680)>>16,(r&65280)>>8,r&255])),r+=1;return u}function oaep_unpad(n,t,i){var r,h,u,f,c;for(n=n.toByteArray(),r=0;r<n.length;r+=1)n[r]&=255;while(n.length<t)n.unshift(0);if(n=String.fromCharCode.apply(String,n),n.length<2*SHA1_SIZE+2)throw"Cipher too short";for(var o=n.substr(1,SHA1_SIZE),e=n.substr(SHA1_SIZE+1),l=oaep_mgf1_str(e,SHA1_SIZE,i||rstr_sha1),s=[],r=0;r<o.length;r+=1)s[r]=o.charCodeAt(r)^l.charCodeAt(r);for(h=oaep_mgf1_str(String.fromCharCode.apply(String,s),n.length-SHA1_SIZE,rstr_sha1),u=[],r=0;r<e.length;r+=1)u[r]=e.charCodeAt(r)^h.charCodeAt(r);if(u=String.fromCharCode.apply(String,u),u.substr(0,SHA1_SIZE)!==rstr_sha1(""))throw"Hash mismatch";if(u=u.substr(SHA1_SIZE),f=u.indexOf("\x01"),c=f!=-1?u.substr(0,f).lastIndexOf("\x00"):-1,c+1!=f)throw"Malformed data";return u.substr(f+1)}function RSASetPrivate(n,t,i){this.isPrivate=!0;typeof n!="string"?(this.n=n,this.e=t,this.d=i):n!=null&&t!=null&&n.length>0&&t.length>0?(this.n=parseBigInt(n,16),this.e=parseInt(t,16),this.d=parseBigInt(i,16)):alert("Invalid RSA private key")}function RSASetPrivateEx(n,t,i,r,u,f,e,o){if(this.isPrivate=!0,n==null)throw"RSASetPrivateEx N == null";if(t==null)throw"RSASetPrivateEx E == null";if(n.length==0)throw"RSASetPrivateEx N.length == 0";if(t.length==0)throw"RSASetPrivateEx E.length == 0";n!=null&&t!=null&&n.length>0&&t.length>0?(this.n=parseBigInt(n,16),this.e=parseInt(t,16),this.d=parseBigInt(i,16),this.p=parseBigInt(r,16),this.q=parseBigInt(u,16),this.dmp1=parseBigInt(f,16),this.dmq1=parseBigInt(e,16),this.coeff=parseBigInt(o,16)):alert("Invalid RSA private key in RSASetPrivateEx")}function RSAGenerate(n,t){var r=new SecureRandom,u=n>>1,i,f;for(this.e=parseInt(t,16),i=new BigInteger(t,16);;){for(;;)if(this.p=new BigInteger(n-u,1,r),this.p.subtract(BigInteger.ONE).gcd(i).compareTo(BigInteger.ONE)==0&&this.p.isProbablePrime(10))break;for(;;)if(this.q=new BigInteger(u,1,r),this.q.subtract(BigInteger.ONE).gcd(i).compareTo(BigInteger.ONE)==0&&this.q.isProbablePrime(10))break;this.p.compareTo(this.q)<=0&&(f=this.p,this.p=this.q,this.q=f);var e=this.p.subtract(BigInteger.ONE),o=this.q.subtract(BigInteger.ONE),s=e.multiply(o);if(s.gcd(i).compareTo(BigInteger.ONE)==0){this.n=this.p.multiply(this.q);this.d=i.modInverse(s);this.dmp1=this.d.mod(e);this.dmq1=this.d.mod(o);this.coeff=this.q.modInverse(this.p);break}}this.isPrivate=!0}function RSADoPrivate(n){if(this.p==null||this.q==null)return n.modPow(this.d,this.n);for(var t=n.mod(this.p).modPow(this.dmp1,this.p),i=n.mod(this.q).modPow(this.dmq1,this.q);t.compareTo(i)<0;)t=t.add(this.p);return t.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)}function RSADecrypt(n){var i=parseBigInt(n,16),t=this.doPrivate(i);return t==null?null:pkcs1unpad2(t,this.n.bitLength()+7>>3)}function RSADecryptOAEP(n,t){var r=parseBigInt(n,16),i=this.doPrivate(r);return i==null?null:oaep_unpad(i,this.n.bitLength()+7>>3,t)}function _rsapem_pemToBase64(n){var t=n;return t=t.replace("-----BEGIN RSA PRIVATE KEY-----",""),t=t.replace("-----END RSA PRIVATE KEY-----",""),t.replace(/[ \n]+/g,"")}function _rsapem_getPosArrayOfChildrenFromHex(n){var t=[],i=ASN1HEX.getStartPosOfV_AtObj(n,0),r=ASN1HEX.getPosOfNextSibling_AtObj(n,i),u=ASN1HEX.getPosOfNextSibling_AtObj(n,r),f=ASN1HEX.getPosOfNextSibling_AtObj(n,u),e=ASN1HEX.getPosOfNextSibling_AtObj(n,f),o=ASN1HEX.getPosOfNextSibling_AtObj(n,e),s=ASN1HEX.getPosOfNextSibling_AtObj(n,o),h=ASN1HEX.getPosOfNextSibling_AtObj(n,s),c=ASN1HEX.getPosOfNextSibling_AtObj(n,h);return t.push(i,r,u,f,e,o,s,h,c),t}function _rsapem_getHexValueArrayOfChildrenFromHex(n){var t=_rsapem_getPosArrayOfChildrenFromHex(n),r=ASN1HEX.getHexOfV_AtObj(n,t[0]),u=ASN1HEX.getHexOfV_AtObj(n,t[1]),f=ASN1HEX.getHexOfV_AtObj(n,t[2]),e=ASN1HEX.getHexOfV_AtObj(n,t[3]),o=ASN1HEX.getHexOfV_AtObj(n,t[4]),s=ASN1HEX.getHexOfV_AtObj(n,t[5]),h=ASN1HEX.getHexOfV_AtObj(n,t[6]),c=ASN1HEX.getHexOfV_AtObj(n,t[7]),l=ASN1HEX.getHexOfV_AtObj(n,t[8]),i=[];return i.push(r,u,f,e,o,s,h,c,l),i}function _rsapem_readPrivateKeyFromASN1HexString(n){var t=_rsapem_getHexValueArrayOfChildrenFromHex(n);this.setPrivateEx(t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function _rsapem_readPrivateKeyFromPEMString(n){var i=_rsapem_pemToBase64(n),r=b64tohex(i),t=_rsapem_getHexValueArrayOfChildrenFromHex(r);this.setPrivateEx(t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function _rsasign_getHexPaddedDigestInfoForString(n,t,i){var r=function(n){return KJUR.crypto.Util.hashString(n,i)},u=r(n);return KJUR.crypto.Util.getPaddedDigestInfoHex(u,i,t)}function _zeroPaddingOfSignature(n,t){for(var i="",u=t/4-n.length,r=0;r<u;r++)i=i+"0";return i+n}function _rsasign_signString(n,t){var i=function(n){return KJUR.crypto.Util.hashString(n,t)},r=i(n);return this.signWithMessageHash(r,t)}function _rsasign_signWithMessageHash(n,t){var i=KJUR.crypto.Util.getPaddedDigestInfoHex(n,t,this.n.bitLength()),r=parseBigInt(i,16),u=this.doPrivate(r),f=u.toString(16);return _zeroPaddingOfSignature(f,this.n.bitLength())}function _rsasign_signStringWithSHA1(n){return _rsasign_signString.call(this,n,"sha1")}function _rsasign_signStringWithSHA256(n){return _rsasign_signString.call(this,n,"sha256")}function pss_mgf1_str(n,t,i){for(var u="",r=0;u.length<t;)u+=hextorstr(i(rstrtohex(n+String.fromCharCode.apply(String,[(r&4278190080)>>24,(r&16711680)>>16,(r&65280)>>8,r&255])))),r+=1;return u}function _rsasign_signStringPSS(n,t,i){var r=function(n){return KJUR.crypto.Util.hashHex(n,t)},u=r(rstrtohex(n));return i===undefined&&(i=-1),this.signWithMessageHashPSS(u,t,i)}function _rsasign_signWithMessageHashPSS(n,t,i){var l=hextorstr(n),f=l.length,a=this.n.bitLength()-1,o=Math.ceil(a/8),r,v=function(n){return KJUR.crypto.Util.hashHex(n,t)},u,s,h,y;if(i===-1||i===undefined)i=f;else if(i===-2)i=o-f-2;else if(i<-2)throw"invalid salt length";if(o<f+i+2)throw"data too long";for(u="",i>0&&(u=new Array(i),(new SecureRandom).nextBytes(u),u=String.fromCharCode.apply(String,u)),s=hextorstr(v(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+l+u))),h=[],r=0;r<o-i-f-2;r+=1)h[r]=0;var c=String.fromCharCode.apply(String,h)+"\x01"+u,p=pss_mgf1_str(s,c.length,v),e=[];for(r=0;r<c.length;r+=1)e[r]=c.charCodeAt(r)^p.charCodeAt(r);for(y=65280>>8*o-a&255,e[0]&=~y,r=0;r<f;r++)e.push(s.charCodeAt(r));return e.push(188),_zeroPaddingOfSignature(this.doPrivate(new BigInteger(e)).toString(16),this.n.bitLength())}function _rsasign_getDecryptSignatureBI(n,t,i){var r=new RSAKey;return r.setPublic(t,i),r.doPublic(n)}function _rsasign_getHexDigestInfoFromSig(n,t,i){var r=_rsasign_getDecryptSignatureBI(n,t,i);return r.toString(16).replace(/^1f+00/,"")}function _rsasign_getAlgNameAndHashFromHexDisgestInfo(n){var t,i,r;for(t in KJUR.crypto.Util.DIGESTINFOHEAD)if(i=KJUR.crypto.Util.DIGESTINFOHEAD[t],r=i.length,n.substring(0,r)==i)return[t,n.substring(r)];return[]}function _rsasign_verifySignatureWithArgs(n,t,i,r){var f=_rsasign_getHexDigestInfoFromSig(t,i,r),u=_rsasign_getAlgNameAndHashFromHexDisgestInfo(f);if(u.length==0)return!1;var e=u[0],o=u[1],s=function(n){return KJUR.crypto.Util.hashString(n,e)},h=s(n);return o==h}function _rsasign_verifyHexSignatureForMessage(n,t){var i=parseBigInt(n,16);return _rsasign_verifySignatureWithArgs(t,i,this.n.toString(16),this.e.toString(16))}function _rsasign_verifyString(n,t){var i;if(t=t.replace(_RE_HEXDECONLY,""),t=t.replace(/[ \n]+/g,""),i=parseBigInt(t,16),i.bitLength()>this.n.bitLength())return 0;var u=this.doPublic(i),f=u.toString(16).replace(/^1f+00/,""),r=_rsasign_getAlgNameAndHashFromHexDisgestInfo(f);if(r.length==0)return!1;var e=r[0],o=r[1],s=function(n){return KJUR.crypto.Util.hashString(n,e)},h=s(n);return o==h}function _rsasign_verifyWithMessageHash(n,t){var i,o,u;if(t=t.replace(_RE_HEXDECONLY,""),t=t.replace(/[ \n]+/g,""),i=parseBigInt(t,16),i.bitLength()>this.n.bitLength())return 0;var f=this.doPublic(i),e=f.toString(16).replace(/^1f+00/,""),r=_rsasign_getAlgNameAndHashFromHexDisgestInfo(e);return r.length==0?!1:(o=r[0],u=r[1],u==n)}function _rsasign_verifyStringPSS(n,t,i,r){var u=function(n){return KJUR.crypto.Util.hashHex(n,i)},f=u(rstrtohex(n));return r===undefined&&(r=-1),this.verifyWithMessageHashPSS(f,t,i,r)}function _rsasign_verifyWithMessageHashPSS(n,t,i,r){var l=new BigInteger(t,16),f,b,s,c;if(l.bitLength()>this.n.bitLength())return!1;var a=function(n){return KJUR.crypto.Util.hashHex(n,i)},v=hextorstr(n),o=v.length,y=this.n.bitLength()-1,e=Math.ceil(y/8),u;if(r===-1||r===undefined)r=o;else if(r===-2)r=e-o-2;else if(r<-2)throw"invalid salt length";if(e<o+r+2)throw"data too long";for(f=this.doPublic(l).toByteArray(),u=0;u<f.length;u+=1)f[u]&=255;while(f.length<e)f.unshift(0);if(f[e-1]!==188)throw"encoded message does not end in 0xbc";f=String.fromCharCode.apply(String,f);var h=f.substr(0,e-o-1),p=f.substr(h.length,o),w=65280>>8*e-y&255;if((h.charCodeAt(0)&w)!=0)throw"bits beyond keysize not zero";for(b=pss_mgf1_str(p,h.length,a),s=[],u=0;u<h.length;u+=1)s[u]=h.charCodeAt(u)^b.charCodeAt(u);for(s[0]&=~w,c=e-o-r-2,u=0;u<c;u+=1)if(s[u]!==0)throw"leftmost octets not zero";if(s[c]!==1)throw"0x01 marker not found";return p===hextorstr(a(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+v+String.fromCharCode.apply(String,s.slice(-r)))))}function X509(){this.subjectPublicKeyRSA=null;this.subjectPublicKeyRSA_hN=null;this.subjectPublicKeyRSA_hE=null;this.hex=null;this.getSerialNumberHex=function(){return ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,1])};this.getIssuerHex=function(){return ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,3])};this.getIssuerString=function(){return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,3]))};this.getSubjectHex=function(){return ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,5])};this.getSubjectString=function(){return X509.hex2dn(ASN1HEX.getDecendantHexTLVByNthList(this.hex,0,[0,5]))};this.getNotBefore=function(){var n=ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,4,0]);return n=n.replace(/(..)/g,"%$1"),decodeURIComponent(n)};this.getNotAfter=function(){var n=ASN1HEX.getDecendantHexVByNthList(this.hex,0,[0,4,1]);return n=n.replace(/(..)/g,"%$1"),decodeURIComponent(n)};this.readCertPEM=function(n){var i=X509.pemToHex(n),t=X509.getPublicKeyHexArrayFromCertHex(i),r=new RSAKey;r.setPublic(t[0],t[1]);this.subjectPublicKeyRSA=r;this.subjectPublicKeyRSA_hN=t[0];this.subjectPublicKeyRSA_hE=t[1];this.hex=i};this.readCertPEMWithoutRSAInit=function(n){var i=X509.pemToHex(n),t=X509.getPublicKeyHexArrayFromCertHex(i);this.subjectPublicKeyRSA.setPublic(t[0],t[1]);this.subjectPublicKeyRSA_hN=t[0];this.subjectPublicKeyRSA_hE=t[1];this.hex=i}}function Base64x(){}function stoBA(n){for(var i=[],t=0;t<n.length;t++)i[t]=n.charCodeAt(t);return i}function BAtos(n){for(var t="",i=0;i<n.length;i++)t=t+String.fromCharCode(n[i]);return t}function BAtohex(n){for(var t,i="",r=0;r<n.length;r++)t=n[r].toString(16),t.length==1&&(t="0"+t),i=i+t;return i}function stohex(n){return BAtohex(stoBA(n))}function stob64(n){return hex2b64(stohex(n))}function stob64u(n){return b64tob64u(hex2b64(stohex(n)))}function b64utos(n){return BAtos(b64toBA(b64utob64(n)))}function b64tob64u(n){return n=n.replace(/\=/g,""),n=n.replace(/\+/g,"-"),n.replace(/\//g,"_")}function b64utob64(n){return n.length%4==2?n=n+"==":n.length%4==3&&(n=n+"="),n=n.replace(/-/g,"+"),n.replace(/_/g,"/")}function hextob64u(n){return b64tob64u(hex2b64(n))}function b64utohex(n){return b64tohex(b64utob64(n))}function utf8tob64(n){return hex2b64(uricmptohex(encodeURIComponentAll(n)))}function b64toutf8(n){return decodeURIComponent(hextouricmp(b64tohex(n)))}function utf8tohex(n){return uricmptohex(encodeURIComponentAll(n))}function hextoutf8(n){return decodeURIComponent(hextouricmp(n))}function hextorstr(n){for(var i="",t=0;t<n.length-1;t+=2)i+=String.fromCharCode(parseInt(n.substr(t,2),16));return i}function rstrtohex(n){for(var i="",t=0;t<n.length;t++)i+=("0"+n.charCodeAt(t).toString(16)).slice(-2);return i}function hextob64(n){return hex2b64(n)}function hextob64nl(n){var t=hextob64(n),i=t.replace(/(.{64})/g,"$1\r\n");return i.replace(/\r\n$/,"")}function b64nltohex(n){var t=n.replace(/[^0-9A-Za-z\/+=]*/g,"");return b64tohex(t)}function uricmptohex(n){return n.replace(/%/g,"")}function hextouricmp(n){return n.replace(/(..)/g,"%$1")}function encodeURIComponentAll(n){for(var r=encodeURIComponent(n),i="",t=0;t<r.length;t++)r[t]=="%"?(i=i+r.substr(t,3),t=t+2):i=i+"%"+stohex(r[t]);return i}function newline_toUnix(n){return n.replace(/\r\n/mg,"\n")}function newline_toDos(n){return n=n.replace(/\r\n/mg,"\n"),n.replace(/\n/mg,"\r\n")}var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64pad="=",dbits,canary=0xdeadbeefcafe,j_lm=(canary&16777215)==15715070,BI_FP,BI_RM,BI_RC,rr,vv,lowprimes,lplim,SHA1_SIZE,_RE_HEXDECONLY,ASN1HEX,utf8tob64u,b64utoutf8;for(j_lm&&navigator.appName=="Microsoft Internet Explorer"?(BigInteger.prototype.am=am2,dbits=30):j_lm&&navigator.appName!="Netscape"?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits,BI_FP=52,BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP,BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=[],rr="0".charCodeAt(0),vv=0;vv<=9;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;vv<36;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;vv<36;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];lplim=67108864/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize;BigInteger.prototype.toRadix=bnpToRadix;BigInteger.prototype.fromRadix=bnpFromRadix;BigInteger.prototype.fromNumber=bnpFromNumber;BigInteger.prototype.bitwiseTo=bnpBitwiseTo;BigInteger.prototype.changeBit=bnpChangeBit;BigInteger.prototype.addTo=bnpAddTo;BigInteger.prototype.dMultiply=bnpDMultiply;BigInteger.prototype.dAddOffset=bnpDAddOffset;BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo;BigInteger.prototype.modInt=bnpModInt;BigInteger.prototype.millerRabin=bnpMillerRabin;BigInteger.prototype.clone=bnClone;BigInteger.prototype.intValue=bnIntValue;BigInteger.prototype.byteValue=bnByteValue;BigInteger.prototype.shortValue=bnShortValue;BigInteger.prototype.signum=bnSigNum;BigInteger.prototype.toByteArray=bnToByteArray;BigInteger.prototype.equals=bnEquals;BigInteger.prototype.min=bnMin;BigInteger.prototype.max=bnMax;BigInteger.prototype.and=bnAnd;BigInteger.prototype.or=bnOr;BigInteger.prototype.xor=bnXor;BigInteger.prototype.andNot=bnAndNot;BigInteger.prototype.not=bnNot;BigInteger.prototype.shiftLeft=bnShiftLeft;BigInteger.prototype.shiftRight=bnShiftRight;BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit;BigInteger.prototype.bitCount=bnBitCount;BigInteger.prototype.testBit=bnTestBit;BigInteger.prototype.setBit=bnSetBit;BigInteger.prototype.clearBit=bnClearBit;BigInteger.prototype.flipBit=bnFlipBit;BigInteger.prototype.add=bnAdd;BigInteger.prototype.subtract=bnSubtract;BigInteger.prototype.multiply=bnMultiply;BigInteger.prototype.divide=bnDivide;BigInteger.prototype.remainder=bnRemainder;BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder;BigInteger.prototype.modPow=bnModPow;BigInteger.prototype.modInverse=bnModInverse;BigInteger.prototype.pow=bnPow;BigInteger.prototype.gcd=bnGCD;BigInteger.prototype.isProbablePrime=bnIsProbablePrime;BigInteger.prototype.square=bnSquare;SHA1_SIZE=20;RSAKey.prototype.doPublic=RSADoPublic;RSAKey.prototype.setPublic=RSASetPublic;RSAKey.prototype.encrypt=RSAEncrypt;RSAKey.prototype.encryptOAEP=RSAEncryptOAEP;RSAKey.prototype.type="RSA";SHA1_SIZE=20;RSAKey.prototype.doPrivate=RSADoPrivate;RSAKey.prototype.setPrivate=RSASetPrivate;RSAKey.prototype.setPrivateEx=RSASetPrivateEx;RSAKey.prototype.generate=RSAGenerate;RSAKey.prototype.decrypt=RSADecrypt;RSAKey.prototype.decryptOAEP=RSADecryptOAEP;RSAKey.prototype.readPrivateKeyFromPEMString=_rsapem_readPrivateKeyFromPEMString;RSAKey.prototype.readPrivateKeyFromASN1HexString=_rsapem_readPrivateKeyFromASN1HexString;_RE_HEXDECONLY=new RegExp("");_RE_HEXDECONLY.compile("[^0-9a-f]","gi");RSAKey.prototype.signWithMessageHash=_rsasign_signWithMessageHash;RSAKey.prototype.signString=_rsasign_signString;RSAKey.prototype.signStringWithSHA1=_rsasign_signStringWithSHA1;RSAKey.prototype.signStringWithSHA256=_rsasign_signStringWithSHA256;RSAKey.prototype.sign=_rsasign_signString;RSAKey.prototype.signWithSHA1=_rsasign_signStringWithSHA1;RSAKey.prototype.signWithSHA256=_rsasign_signStringWithSHA256;RSAKey.prototype.signWithMessageHashPSS=_rsasign_signWithMessageHashPSS;RSAKey.prototype.signStringPSS=_rsasign_signStringPSS;RSAKey.prototype.signPSS=_rsasign_signStringPSS;RSAKey.SALT_LEN_HLEN=-1;RSAKey.SALT_LEN_MAX=-2;RSAKey.prototype.verifyWithMessageHash=_rsasign_verifyWithMessageHash;RSAKey.prototype.verifyString=_rsasign_verifyString;RSAKey.prototype.verifyHexSignatureForMessage=_rsasign_verifyHexSignatureForMessage;RSAKey.prototype.verify=_rsasign_verifyString;RSAKey.prototype.verifyHexSignatureForByteArrayMessage=_rsasign_verifyHexSignatureForMessage;RSAKey.prototype.verifyWithMessageHashPSS=_rsasign_verifyWithMessageHashPSS;RSAKey.prototype.verifyStringPSS=_rsasign_verifyStringPSS;RSAKey.prototype.verifyPSS=_rsasign_verifyStringPSS;RSAKey.SALT_LEN_RECOVER=-2;ASN1HEX=new function(){this.getByteLengthOfL_AtObj=function(n,t){if(n.substring(t+2,t+3)!="8")return 1;var i=parseInt(n.substring(t+3,t+4));return i==0?-1:0<i&&i<10?i+1:-2};this.getHexOfL_AtObj=function(n,t){var i=this.getByteLengthOfL_AtObj(n,t);return i<1?"":n.substring(t+2,t+2+i*2)};this.getIntOfL_AtObj=function(n,t){var i=this.getHexOfL_AtObj(n,t),r;return i==""?-1:(r=parseInt(i.substring(0,1))<8?new BigInteger(i,16):new BigInteger(i.substring(2),16),r.intValue())};this.getStartPosOfV_AtObj=function(n,t){var i=this.getByteLengthOfL_AtObj(n,t);return i<0?i:t+(i+1)*2};this.getHexOfV_AtObj=function(n,t){var i=this.getStartPosOfV_AtObj(n,t),r=this.getIntOfL_AtObj(n,t);return n.substring(i,i+r*2)};this.getHexOfTLV_AtObj=function(n,t){var i=n.substr(t,2),r=this.getHexOfL_AtObj(n,t),u=this.getHexOfV_AtObj(n,t);return i+r+u};this.getPosOfNextSibling_AtObj=function(n,t){var i=this.getStartPosOfV_AtObj(n,t),r=this.getIntOfL_AtObj(n,t);return i+r*2};this.getPosArrayOfChildren_AtObj=function(n,t){var r=[],u=this.getStartPosOfV_AtObj(n,t),i;r.push(u);for(var o=this.getIntOfL_AtObj(n,t),f=u,e=0;;){if(i=this.getPosOfNextSibling_AtObj(n,f),i==null||i-u>=o*2)break;if(e>=200)break;r.push(i);f=i;e++}return r};this.getNthChildIndex_AtObj=function(n,t,i){var r=this.getPosArrayOfChildren_AtObj(n,t);return r[i]};this.getDecendantIndexByNthList=function(n,t,i){if(i.length==0)return t;var r=i.shift(),u=this.getPosArrayOfChildren_AtObj(n,t);return this.getDecendantIndexByNthList(n,u[r],i)};this.getDecendantHexTLVByNthList=function(n,t,i){var r=this.getDecendantIndexByNthList(n,t,i);return this.getHexOfTLV_AtObj(n,r)};this.getDecendantHexVByNthList=function(n,t,i){var r=this.getDecendantIndexByNthList(n,t,i);return this.getHexOfV_AtObj(n,r)}};ASN1HEX.getVbyList=function(n,t,i,r){var u=this.getDecendantIndexByNthList(n,t,i);if(u===undefined)throw"can't find nthList object";if(r!==undefined&&n.substr(u,2)!=r)throw"checking tag doesn't match: "+n.substr(u,2)+"!="+r;return this.getHexOfV_AtObj(n,u)};ASN1HEX.hextooidstr=function(n){var s=function(n,t){return n.length>=t?n:new Array(t-n.length+1).join("0")+n},e=[],c=n.substr(0,2),h=parseInt(c,16),o,r,u,i,t,f;for(e[0]=new String(Math.floor(h/40)),e[1]=new String(h%40),o=n.substr(2),r=[],t=0;t<o.length/2;t++)r.push(parseInt(o.substr(t*2,2),16));for(u=[],i="",t=0;t<r.length;t++)r[t]&128?i=i+s((r[t]&127).toString(2),7):(i=i+s((r[t]&127).toString(2),7),u.push(new String(parseInt(i,2))),i="");return f=e.join("."),u.length>0&&(f=f+"."+u.join(".")),f};X509.pemToBase64=function(n){var t=n;return t=t.replace("-----BEGIN CERTIFICATE-----",""),t=t.replace("-----END CERTIFICATE-----",""),t.replace(/[ \n]+/g,"")};X509.pemToHex=function(n){var t=X509.pemToBase64(n);return b64tohex(t)};X509.getSubjectPublicKeyPosFromCertHex=function(n){var u=X509.getSubjectPublicKeyInfoPosFromCertHex(n),r,t,i;return u==-1?-1:(r=ASN1HEX.getPosArrayOfChildren_AtObj(n,u),r.length!=2)?-1:(t=r[1],n.substring(t,t+2)!="03")?-1:(i=ASN1HEX.getStartPosOfV_AtObj(n,t),n.substring(i,i+2)!="00")?-1:i+2};X509.getSubjectPublicKeyInfoPosFromCertHex=function(n){var i=ASN1HEX.getStartPosOfV_AtObj(n,0),t=ASN1HEX.getPosArrayOfChildren_AtObj(n,i);return t.length<1?-1:n.substring(t[0],t[0]+10)=="a003020102"?t.length<6?-1:t[6]:t.length<5?-1:t[5]};X509.getPublicKeyHexArrayFromCertHex=function(n){var u=X509.getSubjectPublicKeyPosFromCertHex(n),t=ASN1HEX.getPosArrayOfChildren_AtObj(n,u),i,r;return t.length!=2?[]:(i=ASN1HEX.getHexOfV_AtObj(n,t[0]),r=ASN1HEX.getHexOfV_AtObj(n,t[1]),i!=null&&r!=null?[i,r]:[])};X509.getHexTbsCertificateFromCert=function(n){return ASN1HEX.getStartPosOfV_AtObj(n,0)};X509.getPublicKeyHexArrayFromCertPEM=function(n){var t=X509.pemToHex(n);return X509.getPublicKeyHexArrayFromCertHex(t)};X509.hex2dn=function(n){for(var u,t="",r=ASN1HEX.getPosArrayOfChildren_AtObj(n,0),i=0;i<r.length;i++)u=ASN1HEX.getHexOfTLV_AtObj(n,r[i]),t=t+"/"+X509.hex2rdn(u);return t};X509.hex2rdn=function(n){var r=ASN1HEX.getDecendantHexTLVByNthList(n,0,[0,0]),t=ASN1HEX.getDecendantHexVByNthList(n,0,[0,1]),i="",u;try{i=X509.DN_ATTRHEX[r]}catch(f){i=r}return t=t.replace(/(..)/g,"%$1"),u=decodeURIComponent(t),i+"="+u};X509.DN_ATTRHEX={"0603550406":"C","060355040a":"O","060355040b":"OU","0603550403":"CN","0603550405":"SN","0603550408":"ST","0603550407":"L"};X509.getPublicKeyFromCertPEM=function(n){var t=X509.getPublicKeyInfoPropOfCertPEM(n),r,f,i;if(t.algoid=="2a864886f70d010101")return r=KEYUTIL.parsePublicRawRSAKeyHex(t.keyhex),i=new RSAKey,i.setPublic(r.n,r.e),i;if(t.algoid=="2a8648ce3d0201")return f=KJUR.crypto.OID.oidhex2name[t.algparam],i=new KJUR.crypto.ECDSA({curve:f,info:t.keyhex}),i.setPublicKeyHex(t.keyhex),i;if(t.algoid=="2a8648ce380401"){var e=ASN1HEX.getVbyList(t.algparam,0,[0],"02"),o=ASN1HEX.getVbyList(t.algparam,0,[1],"02"),s=ASN1HEX.getVbyList(t.algparam,0,[2],"02"),u=ASN1HEX.getHexOfV_AtObj(t.keyhex,0);return u=u.substr(2),i=new KJUR.crypto.DSA,i.setPublic(new BigInteger(e,16),new BigInteger(o,16),new BigInteger(s,16),new BigInteger(u,16)),i}throw"unsupported key";};X509.getPublicKeyInfoPropOfCertPEM=function(n){var r={},t,f,e,u,i,o;if(r.algparam=null,t=X509.pemToHex(n),f=ASN1HEX.getPosArrayOfChildren_AtObj(t,0),f.length!=3)throw"malformed X.509 certificate PEM (code:001)";if(t.substr(f[0],2)!="30")throw"malformed X.509 certificate PEM (code:002)";if(e=ASN1HEX.getPosArrayOfChildren_AtObj(t,f[0]),e.length<7)throw"malformed X.509 certificate PEM (code:003)";if(u=ASN1HEX.getPosArrayOfChildren_AtObj(t,e[6]),u.length!=2)throw"malformed X.509 certificate PEM (code:004)";if(i=ASN1HEX.getPosArrayOfChildren_AtObj(t,u[0]),i.length!=2)throw"malformed X.509 certificate PEM (code:005)";if(r.algoid=ASN1HEX.getHexOfV_AtObj(t,i[0]),t.substr(i[1],2)=="06"?r.algparam=ASN1HEX.getHexOfV_AtObj(t,i[1]):t.substr(i[1],2)=="30"&&(r.algparam=ASN1HEX.getHexOfTLV_AtObj(t,i[1])),t.substr(u[1],2)!="03")throw"malformed X.509 certificate PEM (code:006)";return o=ASN1HEX.getHexOfV_AtObj(t,u[1]),r.keyhex=o.substr(2),r};typeof KJUR!="undefined"&&KJUR||(KJUR={});typeof KJUR.crypto!="undefined"&&KJUR.crypto||(KJUR.crypto={});KJUR.crypto.Util=new function(){this.DIGESTINFOHEAD={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414"};this.DEFAULTPROVIDER={md5:"cryptojs",sha1:"cryptojs",sha224:"cryptojs",sha256:"cryptojs",sha384:"cryptojs",sha512:"cryptojs",ripemd160:"cryptojs",hmacmd5:"cryptojs",hmacsha1:"cryptojs",hmacsha224:"cryptojs",hmacsha256:"cryptojs",hmacsha384:"cryptojs",hmacsha512:"cryptojs",hmacripemd160:"cryptojs",MD5withRSA:"cryptojs/jsrsa",SHA1withRSA:"cryptojs/jsrsa",SHA224withRSA:"cryptojs/jsrsa",SHA256withRSA:"cryptojs/jsrsa",SHA384withRSA:"cryptojs/jsrsa",SHA512withRSA:"cryptojs/jsrsa",RIPEMD160withRSA:"cryptojs/jsrsa",MD5withECDSA:"cryptojs/jsrsa",SHA1withECDSA:"cryptojs/jsrsa",SHA224withECDSA:"cryptojs/jsrsa",SHA256withECDSA:"cryptojs/jsrsa",SHA384withECDSA:"cryptojs/jsrsa",SHA512withECDSA:"cryptojs/jsrsa",RIPEMD160withECDSA:"cryptojs/jsrsa",SHA1withDSA:"cryptojs/jsrsa",SHA224withDSA:"cryptojs/jsrsa",SHA256withDSA:"cryptojs/jsrsa",MD5withRSAandMGF1:"cryptojs/jsrsa",SHA1withRSAandMGF1:"cryptojs/jsrsa",SHA224withRSAandMGF1:"cryptojs/jsrsa",SHA256withRSAandMGF1:"cryptojs/jsrsa",SHA384withRSAandMGF1:"cryptojs/jsrsa",SHA512withRSAandMGF1:"cryptojs/jsrsa",RIPEMD160withRSAandMGF1:"cryptojs/jsrsa"};this.CRYPTOJSMESSAGEDIGESTNAME={md5:"CryptoJS.algo.MD5",sha1:"CryptoJS.algo.SHA1",sha224:"CryptoJS.algo.SHA224",sha256:"CryptoJS.algo.SHA256",sha384:"CryptoJS.algo.SHA384",sha512:"CryptoJS.algo.SHA512",ripemd160:"CryptoJS.algo.RIPEMD160"};this.getDigestInfoHex=function(n,t){if(typeof this.DIGESTINFOHEAD[t]=="undefined")throw"alg not supported in Util.DIGESTINFOHEAD: "+t;return this.DIGESTINFOHEAD[t]+n};this.getPaddedDigestInfoHex=function(n,t,i){var u=this.getDigestInfoHex(n,t),f=i/4,r;if(u.length+22>f)throw"key is too short for SigAlg: keylen="+i+","+t;var e="0001",o="00"+u,s="",h=f-e.length-o.length;for(r=0;r<h;r+=2)s+="ff";return e+s+o};this.hashString=function(n,t){var i=new KJUR.crypto.MessageDigest({alg:t});return i.digestString(n)};this.hashHex=function(n,t){var i=new KJUR.crypto.MessageDigest({alg:t});return i.digestHex(n)};this.sha1=function(n){var t=new KJUR.crypto.MessageDigest({alg:"sha1",prov:"cryptojs"});return t.digestString(n)};this.sha256=function(n){var t=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return t.digestString(n)};this.sha256Hex=function(n){var t=new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"});return t.digestHex(n)};this.sha512=function(n){var t=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return t.digestString(n)};this.sha512Hex=function(n){var t=new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"});return t.digestHex(n)};this.md5=function(n){var t=new KJUR.crypto.MessageDigest({alg:"md5",prov:"cryptojs"});return t.digestString(n)};this.ripemd160=function(n){var t=new KJUR.crypto.MessageDigest({alg:"ripemd160",prov:"cryptojs"});return t.digestString(n)};this.getCryptoJSMDByName=function(){}};KJUR.crypto.MessageDigest=function(n){this.setAlgAndProvider=function(alg,prov){if(alg!=null&&prov===undefined&&(prov=KJUR.crypto.Util.DEFAULTPROVIDER[alg]),":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(alg)!=-1&&prov=="cryptojs"){try{this.md=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[alg]).create()}catch(ex){throw"setAlgAndProvider hash alg set fail alg="+alg+"/"+ex;}this.updateString=function(n){this.md.update(n)};this.updateHex=function(n){var t=CryptoJS.enc.Hex.parse(n);this.md.update(t)};this.digest=function(){var n=this.md.finalize();return n.toString(CryptoJS.enc.Hex)};this.digestString=function(n){return this.updateString(n),this.digest()};this.digestHex=function(n){return this.updateHex(n),this.digest()}}if(":sha256:".indexOf(alg)!=-1&&prov=="sjcl"){try{this.md=new sjcl.hash.sha256}catch(ex){throw"setAlgAndProvider hash alg set fail alg="+alg+"/"+ex;}this.updateString=function(n){this.md.update(n)};this.updateHex=function(n){var t=sjcl.codec.hex.toBits(n);this.md.update(t)};this.digest=function(){var n=this.md.finalize();return sjcl.codec.hex.fromBits(n)};this.digestString=function(n){return this.updateString(n),this.digest()};this.digestHex=function(n){return this.updateHex(n),this.digest()}}};this.updateString=function(){throw"updateString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName;};this.updateHex=function(){throw"updateHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName;};this.digest=function(){throw"digest() not supported for this alg/prov: "+this.algName+"/"+this.provName;};this.digestString=function(){throw"digestString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName;};this.digestHex=function(){throw"digestHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName;};n!==undefined&&n.alg!==undefined&&(this.algName=n.alg,n.prov===undefined&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName))};KJUR.crypto.Mac=function(n){this.setAlgAndProvider=function(alg,prov){var hashAlg,mdObj;if(alg==null&&(alg="hmacsha1"),alg=alg.toLowerCase(),alg.substr(0,4)!="hmac")throw"setAlgAndProvider unsupported HMAC alg: "+alg;if(prov===undefined&&(prov=KJUR.crypto.Util.DEFAULTPROVIDER[alg]),this.algProv=alg+"/"+prov,hashAlg=alg.substr(4),":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(hashAlg)!=-1&&prov=="cryptojs"){try{mdObj=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[hashAlg]);this.mac=CryptoJS.algo.HMAC.create(mdObj,this.pass)}catch(ex){throw"setAlgAndProvider hash alg set fail hashAlg="+hashAlg+"/"+ex;}this.updateString=function(n){this.mac.update(n)};this.updateHex=function(n){var t=CryptoJS.enc.Hex.parse(n);this.mac.update(t)};this.doFinal=function(){var n=this.mac.finalize();return n.toString(CryptoJS.enc.Hex)};this.doFinalString=function(n){return this.updateString(n),this.doFinal()};this.doFinalHex=function(n){return this.updateHex(n),this.doFinal()}}};this.updateString=function(){throw"updateString(str) not supported for this alg/prov: "+this.algProv;};this.updateHex=function(){throw"updateHex(hex) not supported for this alg/prov: "+this.algProv;};this.doFinal=function(){throw"digest() not supported for this alg/prov: "+this.algProv;};this.doFinalString=function(){throw"digestString(str) not supported for this alg/prov: "+this.algProv;};this.doFinalHex=function(){throw"digestHex(hex) not supported for this alg/prov: "+this.algProv;};n!==undefined&&(n.pass!==undefined&&(this.pass=n.pass),n.alg!==undefined&&(this.algName=n.alg,n.prov===undefined&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName)))};KJUR.crypto.Signature=function(n){var t=null;if(this._setAlgNames=function(){this.algName.match(/^(.+)with(.+)$/)&&(this.mdAlgName=RegExp.$1.toLowerCase(),this.pubkeyAlgName=RegExp.$2.toLowerCase())},this._zeroPaddingOfSignature=function(n,t){for(var i="",u=t/4-n.length,r=0;r<u;r++)i=i+"0";return i+n},this.setAlgAndProvider=function(n,t){if(this._setAlgNames(),t!="cryptojs/jsrsa")throw"provider not supported: "+t;if(":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)!=-1){try{this.md=new KJUR.crypto.MessageDigest({alg:this.mdAlgName})}catch(i){throw"setAlgAndProvider hash alg set fail alg="+this.mdAlgName+"/"+i;}this.init=function(n,t){var i=null;try{i=t===undefined?KEYUTIL.getKey(n):KEYUTIL.getKey(n,t)}catch(r){throw"init failed:"+r;}if(i.isPrivate===!0)this.prvKey=i,this.state="SIGN";else if(i.isPublic===!0)this.pubKey=i,this.state="VERIFY";else throw"init failed.:"+i;};this.initSign=function(n){typeof n.ecprvhex=="string"&&typeof n.eccurvename=="string"?(this.ecprvhex=n.ecprvhex,this.eccurvename=n.eccurvename):this.prvKey=n;this.state="SIGN"};this.initVerifyByPublicKey=function(n){typeof n.ecpubhex=="string"&&typeof n.eccurvename=="string"?(this.ecpubhex=n.ecpubhex,this.eccurvename=n.eccurvename):n instanceof KJUR.crypto.ECDSA?this.pubKey=n:n instanceof RSAKey&&(this.pubKey=n);this.state="VERIFY"};this.initVerifyByCertificatePEM=function(n){var t=new X509;t.readCertPEM(n);this.pubKey=t.subjectPublicKeyRSA;this.state="VERIFY"};this.updateString=function(n){this.md.updateString(n)};this.updateHex=function(n){this.md.updateHex(n)};this.sign=function(){if(this.sHashHex=this.md.digest(),typeof this.ecprvhex!="undefined"&&typeof this.eccurvename!="undefined"){var n=new KJUR.crypto.ECDSA({curve:this.eccurvename});this.hSign=n.signHex(this.sHashHex,this.ecprvhex)}else if(this.pubkeyAlgName=="rsaandmgf1")this.hSign=this.prvKey.signWithMessageHashPSS(this.sHashHex,this.mdAlgName,this.pssSaltLen);else if(this.pubkeyAlgName=="rsa")this.hSign=this.prvKey.signWithMessageHash(this.sHashHex,this.mdAlgName);else if(this.prvKey instanceof KJUR.crypto.ECDSA)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex);else if(this.prvKey instanceof KJUR.crypto.DSA)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex);else throw"Signature: unsupported public key alg: "+this.pubkeyAlgName;return this.hSign};this.signString=function(n){return this.updateString(n),this.sign()};this.signHex=function(n){return this.updateHex(n),this.sign()};this.verify=function(n){if(this.sHashHex=this.md.digest(),typeof this.ecpubhex!="undefined"&&typeof this.eccurvename!="undefined"){var t=new KJUR.crypto.ECDSA({curve:this.eccurvename});return t.verifyHex(this.sHashHex,n,this.ecpubhex)}if(this.pubkeyAlgName=="rsaandmgf1")return this.pubKey.verifyWithMessageHashPSS(this.sHashHex,n,this.mdAlgName,this.pssSaltLen);if(this.pubkeyAlgName=="rsa"||this.pubKey instanceof KJUR.crypto.ECDSA||this.pubKey instanceof KJUR.crypto.DSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,n);throw"Signature: unsupported public key alg: "+this.pubkeyAlgName;}}},this.init=function(){throw"init(key, pass) not supported for this alg:prov="+this.algProvName;},this.initVerifyByPublicKey=function(){throw"initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov="+this.algProvName;},this.initVerifyByCertificatePEM=function(){throw"initVerifyByCertificatePEM(certPEM) not supported for this alg:prov="+this.algProvName;},this.initSign=function(){throw"initSign(prvKey) not supported for this alg:prov="+this.algProvName;},this.updateString=function(){throw"updateString(str) not supported for this alg:prov="+this.algProvName;},this.updateHex=function(){throw"updateHex(hex) not supported for this alg:prov="+this.algProvName;},this.sign=function(){throw"sign() not supported for this alg:prov="+this.algProvName;},this.signString=function(){throw"digestString(str) not supported for this alg:prov="+this.algProvName;},this.signHex=function(){throw"digestHex(hex) not supported for this alg:prov="+this.algProvName;},this.verify=function(){throw"verify(hSigVal) not supported for this alg:prov="+this.algProvName;},this.initParams=n,n!==undefined&&(n.alg!==undefined&&(this.algName=n.alg,this.provName=n.prov===undefined?KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]:n.prov,this.algProvName=this.algName+":"+this.provName,this.setAlgAndProvider(this.algName,this.provName),this._setAlgNames()),n.psssaltlen!==undefined&&(this.pssSaltLen=n.psssaltlen),n.prvkeypem!==undefined))if(n.prvkeypas!==undefined)throw"both prvkeypem and prvkeypas parameters not supported";else try{t=new RSAKey;t.readPrivateKeyFromPEMString(n.prvkeypem);this.initSign(t)}catch(i){throw"fatal error to load pem private key: "+i;}};KJUR.crypto.OID=new function(){this.oidhex2name={"2a864886f70d010101":"rsaEncryption","2a8648ce3d0201":"ecPublicKey","2a8648ce380401":"dsa","2a8648ce3d030107":"secp256r1","2b8104001f":"secp192k1","2b81040021":"secp224r1","2b8104000a":"secp256k1","2b81040023":"secp521r1","2b81040022":"secp384r1","2a8648ce380403":"SHA1withDSA","608648016503040301":"SHA224withDSA","608648016503040302":"SHA256withDSA"}};typeof Buffer=="function"?(utf8tob64u=function(n){return b64tob64u(new Buffer(n,"utf8").toString("base64"))},b64utoutf8=function(n){return new Buffer(b64utob64(n),"base64").toString("utf8")}):(utf8tob64u=function(n){return hextob64u(uricmptohex(encodeURIComponentAll(n)))},b64utoutf8=function(n){return decodeURIComponent(hextouricmp(b64utohex(n)))});
///#source 1 1 json-sans-eval.min.js
var jsonParse=function(){function r(n,t,r){return t?i[t]:String.fromCharCode(parseInt(r,16))}var n=new RegExp('(?:false|true|null|[\\{\\}\\[\\]]|(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)|(?:"(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))*"))',"g"),t=new RegExp("\\\\(?:([^u])|u(.{4}))","g"),i={'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},u=new String(""),f="\\",o={"{":Object,"[":Array},e=Object.hasOwnProperty;return function(i,o){var y=i.match(n),a,l=y[0],p=!1,h,c,v,b,s,w;for("{"===l?a={}:"["===l?a=[]:(a=[],p=!0),c=[a],v=1-p,b=y.length;v<b;++v){l=y[v];switch(l.charCodeAt(0)){default:s=c[0];s[h||s.length]=+l;h=void 0;break;case 34:if(l=l.substring(1,l.length-1),l.indexOf(f)!==-1&&(l=l.replace(t,r)),s=c[0],!h)if(s instanceof Array)h=s.length;else{h=l||u;break}s[h]=l;h=void 0;break;case 91:s=c[0];c.unshift(s[h||s.length]=[]);h=void 0;break;case 93:c.shift();break;case 102:s=c[0];s[h||s.length]=!1;h=void 0;break;case 110:s=c[0];s[h||s.length]=null;h=void 0;break;case 116:s=c[0];s[h||s.length]=!0;h=void 0;break;case 123:s=c[0];c.unshift(s[h||s.length]={});h=void 0;break;case 125:c.shift()}}if(p){if(c.length!==1)throw new Error;a=a[0]}else if(c.length)throw new Error;return o&&(w=function(n,t){var i=n[t],r,u,f,s;if(i&&typeof i=="object"){r=null;for(u in i)e.call(i,u)&&i!==n&&(f=w(i,u),f!==void 0?i[u]=f:(r||(r=[]),r.push(u)));if(r)for(s=r.length;--s>=0;)delete i[r[s]]}return o.call(n,t,i)},a=w({"":a},"")),a}}();
///#source 1 1 jws-3.0.min.js
typeof KJUR!="undefined"&&KJUR||(KJUR={});typeof KJUR.jws!="undefined"&&KJUR.jws||(KJUR.jws={});KJUR.jws.JWS=function(){function n(n,t){return utf8tob64u(n)+"."+utf8tob64u(t)}function t(n){var t=n.alg,i="";if(t!="RS256"&&t!="RS512"&&t!="PS256"&&t!="PS512")throw"JWS signature algorithm not supported: "+t;return t.substr(2)=="256"&&(i="sha256"),t.substr(2)=="512"&&(i="sha512"),i}function i(n){return t(jsonParse(n))}function r(n,t,r,u,f,e){var o=new RSAKey,s,h;return o.setPrivate(u,f,e),s=i(n),h=o.signString(r,s),h}function u(n,r,u,f,e){var o=null,s;return o=typeof e=="undefined"?i(n):t(e),s=e.alg.substr(0,2)=="PS",f.hashAndSign?b64tob64u(f.hashAndSign(o,u,"binary","base64",s)):s?hextob64u(f.signStringPSS(u,o)):hextob64u(f.signString(u,o))}function f(n,t,r,u){var f=new RSAKey,e,o;return f.readPrivateKeyFromPEMString(u),e=i(n),o=f.signString(r,e),o}this.parseJWS=function(n,t){var f,o,i,s;if(this.parsedJWS===undefined||!t&&this.parsedJWS.sigvalH===undefined){if(n.match(/^([^.]+)\.([^.]+)\.([^.]+)$/)==null)throw"JWS signature is not a form of 'Head.Payload.SigValue'.";var r=RegExp.$1,u=RegExp.$2,e=RegExp.$3,h=r+"."+u;if(this.parsedJWS={},this.parsedJWS.headB64U=r,this.parsedJWS.payloadB64U=u,this.parsedJWS.sigvalB64U=e,this.parsedJWS.si=h,t||(f=b64utohex(e),o=parseBigInt(f,16),this.parsedJWS.sigvalH=f,this.parsedJWS.sigvalBI=o),i=b64utoutf8(r),s=b64utoutf8(u),this.parsedJWS.headS=i,this.parsedJWS.payloadS=s,!KJUR.jws.JWS.isSafeJSONString(i,this.parsedJWS,"headP"))throw"malformed JSON string for JWS Head: "+i;}};this.verifyJWSByNE=function(n,t,i){return this.parseJWS(n),_rsasign_verifySignatureWithArgs(this.parsedJWS.si,this.parsedJWS.sigvalBI,t,i)};this.verifyJWSByKey=function(n,i){this.parseJWS(n);var r=t(this.parsedJWS.headP),u=this.parsedJWS.headP.alg.substr(0,2)=="PS";return i.hashAndVerify?i.hashAndVerify(r,new Buffer(this.parsedJWS.si,"utf8").toString("base64"),b64utob64(this.parsedJWS.sigvalB64U),"base64",u):u?i.verifyStringPSS(this.parsedJWS.si,this.parsedJWS.sigvalH,r):i.verifyString(this.parsedJWS.si,this.parsedJWS.sigvalH)};this.verifyJWSByPemX509Cert=function(n,t){this.parseJWS(n);var i=new X509;return i.readCertPEM(t),i.subjectPublicKeyRSA.verifyString(this.parsedJWS.si,this.parsedJWS.sigvalH)};this.generateJWSByNED=function(t,i,u,f,e){if(!KJUR.jws.JWS.isSafeJSONString(t))throw"JWS Head is not safe JSON string: "+t;var o=n(t,i),h=r(t,i,o,u,f,e),s=hextob64u(h);return this.parsedJWS={},this.parsedJWS.headB64U=o.split(".")[0],this.parsedJWS.payloadB64U=o.split(".")[1],this.parsedJWS.sigvalB64U=s,o+"."+s};this.generateJWSByKey=function(t,i,r){var o={},f,e;if(!KJUR.jws.JWS.isSafeJSONString(t,o,"headP"))throw"JWS Head is not safe JSON string: "+t;return f=n(t,i),e=u(t,i,f,r,o.headP),this.parsedJWS={},this.parsedJWS.headB64U=f.split(".")[0],this.parsedJWS.payloadB64U=f.split(".")[1],this.parsedJWS.sigvalB64U=e,f+"."+e};this.generateJWSByP1PrvKey=function(t,i,r){if(!KJUR.jws.JWS.isSafeJSONString(t))throw"JWS Head is not safe JSON string: "+t;var u=n(t,i),o=f(t,i,u,r),e=hextob64u(o);return this.parsedJWS={},this.parsedJWS.headB64U=u.split(".")[0],this.parsedJWS.payloadB64U=u.split(".")[1],this.parsedJWS.sigvalB64U=e,u+"."+e}};KJUR.jws.JWS.sign=function(n,t,i,r,u){var s=KJUR.jws.JWS,o,f,l,e,a;if(!s.isSafeJSONString(t))throw"JWS Head is not safe JSON string: "+sHead;if(o=s.readSafeJSONString(t),(n==""||n==null)&&o.alg!==undefined&&(n=o.alg),n!=""&&n!=null&&o.alg===undefined&&(o.alg=n,t=JSON.stringify(o)),f=null,s.jwsalg2sigalg[n]===undefined)throw"unsupported alg name: "+n;else f=s.jwsalg2sigalg[n];var v=utf8tob64u(t),y=utf8tob64u(i),h=v+"."+y,c="";if(f.substr(0,4)=="Hmac"){if(r===undefined)throw"hexadecimal key shall be specified for HMAC";l=new KJUR.crypto.Mac({alg:f,pass:hextorstr(r)});l.updateString(h);c=l.doFinal()}else f.indexOf("withECDSA")!=-1?(e=new KJUR.crypto.Signature({alg:f}),e.init(r,u),e.updateString(h),hASN1Sig=e.sign(),c=KJUR.crypto.ECDSA.asn1SigToConcatSig(hASN1Sig)):f!="none"&&(e=new KJUR.crypto.Signature({alg:f}),e.init(r,u),e.updateString(h),c=e.sign());return a=hextob64u(c),h+"."+a};KJUR.jws.JWS.verify=function(n,t){var f=KJUR.jws.JWS,u=n.split("."),a=u[0],v=u[1],e=a+"."+v,o=b64utohex(u[2]),s=f.readSafeJSONString(b64utoutf8(u[0])),h=null,i,c,l,r;if(s.alg===undefined)throw"algorithm not specified in header";else h=s.alg;if(i=null,f.jwsalg2sigalg[s.alg]===undefined)throw"unsupported alg name: "+h;else i=f.jwsalg2sigalg[h];if(i=="none")return!0;if(i.substr(0,4)=="Hmac"){if(t===undefined)throw"hexadecimal key shall be specified for HMAC";return c=new KJUR.crypto.Mac({alg:i,pass:hextorstr(t)}),c.updateString(e),hSig2=c.doFinal(),o==hSig2}if(i.indexOf("withECDSA")!=-1){l=null;try{l=KJUR.crypto.ECDSA.concatSigToASN1Sig(o)}catch(y){return!1}return r=new KJUR.crypto.Signature({alg:i}),r.init(t),r.updateString(e),r.verify(l)}return r=new KJUR.crypto.Signature({alg:i}),r.init(t),r.updateString(e),r.verify(o)};KJUR.jws.JWS.jwsalg2sigalg={HS256:"HmacSHA256",HS512:"HmacSHA512",RS256:"SHA256withRSA",RS384:"SHA384withRSA",RS512:"SHA512withRSA",ES256:"SHA256withECDSA",ES384:"SHA384withECDSA",PS256:"SHA256withRSAandMGF1",PS384:"SHA384withRSAandMGF1",PS512:"SHA512withRSAandMGF1",none:"none"};KJUR.jws.JWS.isSafeJSONString=function(n,t,i){var r=null;try{return(r=jsonParse(n),typeof r!="object")?0:r.constructor===Array?0:(t&&(t[i]=r),1)}catch(u){return 0}};KJUR.jws.JWS.readSafeJSONString=function(n){var t=null;try{return(t=jsonParse(n),typeof t!="object")?null:t.constructor===Array?null:t}catch(i){return null}};KJUR.jws.JWS.getEncodedSignatureValueFromJWS=function(n){if(n.match(/^[^.]+\.[^.]+\.([^.]+)$/)==null)throw"JWS signature is not a form of 'Head.Payload.SigValue'.";return RegExp.$1};KJUR.jws.IntDate=function(){};KJUR.jws.IntDate.get=function(n){if(n=="now")return KJUR.jws.IntDate.getNow();if(n=="now + 1hour")return KJUR.jws.IntDate.getNow()+3600;if(n=="now + 1day")return KJUR.jws.IntDate.getNow()+86400;if(n=="now + 1month")return KJUR.jws.IntDate.getNow()+2592e3;if(n=="now + 1year")return KJUR.jws.IntDate.getNow()+31536e3;if(n.match(/Z$/))return KJUR.jws.IntDate.getZulu(n);if(n.match(/^[0-9]+$/))return parseInt(n);throw"unsupported format: "+n;};KJUR.jws.IntDate.getZulu=function(n){if(a=n.match(/(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z/)){var t=parseInt(RegExp.$1),i=parseInt(RegExp.$2)-1,r=parseInt(RegExp.$3),u=parseInt(RegExp.$4),f=parseInt(RegExp.$5),e=parseInt(RegExp.$6),o=new Date(Date.UTC(t,i,r,u,f,e));return~~(o/1e3)}throw"unsupported format: "+n;};KJUR.jws.IntDate.getNow=function(){return~~(new Date/1e3)};KJUR.jws.IntDate.intDate2UTCString=function(n){var t=new Date(n*1e3);return t.toUTCString()};KJUR.jws.IntDate.intDate2Zulu=function(n){var t=new Date(n*1e3),i=("0000"+t.getUTCFullYear()).slice(-4),r=("00"+(t.getUTCMonth()+1)).slice(-2),u=("00"+t.getUTCDate()).slice(-2),f=("00"+t.getUTCHours()).slice(-2),e=("00"+t.getUTCMinutes()).slice(-2),o=("00"+t.getUTCSeconds()).slice(-2);return i+r+u+f+e+o+"Z"};
///#source 1 1 es6-promise-2.0.0.min.js
(function(){"use strict";function ht(n){return typeof n=="function"||typeof n=="object"&&n!==null}function a(n){return typeof n=="function"}function ct(n){return typeof n=="object"&&n!==null}function tt(){}function vt(){return function(){process.nextTick(v)}}function yt(){var n=0,i=new rt(v),t=document.createTextNode("");return i.observe(t,{characterData:!0}),function(){t.data=n=++n%2}}function pt(){var n=new MessageChannel;return n.port1.onmessage=v,function(){n.port2.postMessage(0)}}function wt(){return function(){setTimeout(v,1)}}function v(){for(var t,i,n=0;n<s;n+=2)t=f[n],i=f[n+1],t(i),f[n]=undefined,f[n+1]=undefined;s=0}function h(){}function bt(){return new TypeError("You cannot resolve a promise with itself")}function kt(){return new TypeError("A promises callback cannot return that same promise.")}function dt(n){try{return n.then}catch(t){return y.error=t,y}}function gt(n,t,i,r){try{n.call(t,i,r)}catch(u){return u}}function ni(i,r,u){l(function(i){var f=!1,e=gt(u,r,function(n){f||(f=!0,r!==n?c(i,n):t(i,n))},function(t){f||(f=!0,n(i,t))},"Settle: "+(i._label||" unknown promise"));!f&&e&&(f=!0,n(i,e))},i)}function ti(i,u){u._state===r?t(i,u._result):i._state===o?n(i,u._result):p(u,undefined,function(n){c(i,n)},function(t){n(i,t)})}function ii(i,r){if(r.constructor===i.constructor)ti(i,r);else{var u=dt(r);u===y?n(i,y.error):u===undefined?t(i,r):a(u)?ni(i,r,u):t(i,r)}}function c(i,r){i===r?n(i,bt()):ht(r)?ii(i,r):t(i,r)}function ri(n){n._onerror&&n._onerror(n._result);d(n)}function t(n,t){n._state===e&&(n._result=t,n._state=r,n._subscribers.length===0||l(d,n))}function n(n,t){n._state===e&&(n._state=o,n._result=t,l(ri,n))}function p(n,t,i,u){var f=n._subscribers,e=f.length;n._onerror=null;f[e]=t;f[e+r]=i;f[e+o]=u;e===0&&n._state&&l(d,n)}function d(n){var i=n._subscribers,e=n._state,r,u,f,t;if(i.length!==0){for(f=n._result,t=0;t<i.length;t+=3)r=i[t],u=i[t+e],r?et(e,r,u,f):u(f);n._subscribers.length=0}}function ft(){this.error=null}function ui(n,t){try{return n(t)}catch(i){return w.error=i,w}}function et(i,u,f,s){var v=a(f),h,y,l,p;if(v){if(h=ui(f,s),h===w?(p=!0,y=h.error,h=null):l=!0,u===h){n(u,kt());return}}else h=s,l=!0;u._state!==e||(v&&l?c(u,h):p?n(u,y):i===r?t(u,h):i===o&&n(u,h))}function fi(t,i){try{i(function(n){c(t,n)},function(i){n(t,i)})}catch(r){n(t,r)}}function i(i,r,u,f){this._instanceConstructor=i;this.promise=new i(h,f);this._abortOnReject=u;this._validateInput(r)?(this._input=r,this.length=r.length,this._remaining=r.length,this._init(),this.length===0?t(this.promise,this._result):(this.length=this.length||0,this._enumerate(),this._remaining===0&&t(this.promise,this._result))):n(this.promise,this._validationError())}function li(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");}function ai(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");}function u(n,t){this._id=ci++;this._label=t;this._state=undefined;this._result=undefined;this._subscribers=[];h!==n&&(a(n)||li(),this instanceof u||ai(),fi(this,n))}var nt,k,lt,f,ut,w,ot,g,st,b;nt=Array.isArray?Array.isArray:function(n){return Object.prototype.toString.call(n)==="[object Array]"};k=nt;lt=Date.now||function(){return(new Date).getTime()};var vi=Object.create||function(n){if(arguments.length>1)throw new Error("Second argument not supported");if(typeof n!="object")throw new TypeError("Argument must be an object");return tt.prototype=n,new tt},s=0,l=function(n,t){f[s]=n;f[s+1]=t;s+=2;s===2&&ut()},it=typeof window!="undefined"?window:{},rt=it.MutationObserver||it.WebKitMutationObserver,at=typeof Uint8ClampedArray!="undefined"&&typeof importScripts!="undefined"&&typeof MessageChannel!="undefined";f=new Array(1e3);ut=typeof process!="undefined"&&{}.toString.call(process)==="[object process]"?vt():rt?yt():at?pt():wt();var e=void 0,r=1,o=2,y=new ft;w=new ft;i.prototype._validateInput=function(n){return k(n)};i.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")};i.prototype._init=function(){this._result=new Array(this.length)};ot=i;i.prototype._enumerate=function(){for(var t=this.length,i=this.promise,r=this._input,n=0;i._state===e&&n<t;n++)this._eachEntry(r[n],n)};i.prototype._eachEntry=function(n,t){var i=this._instanceConstructor;ct(n)?n.constructor===i&&n._state!==e?(n._onerror=null,this._settledAt(n._state,t,n._result)):this._willSettleAt(i.resolve(n),t):(this._remaining--,this._result[t]=this._makeResult(r,t,n))};i.prototype._settledAt=function(i,r,u){var f=this.promise;f._state===e&&(this._remaining--,this._abortOnReject&&i===o?n(f,u):this._result[r]=this._makeResult(i,r,u));this._remaining===0&&t(f,this._result)};i.prototype._makeResult=function(n,t,i){return i};i.prototype._willSettleAt=function(n,t){var i=this;p(n,undefined,function(n){i._settledAt(r,t,n)},function(n){i._settledAt(o,t,n)})};var ei=function(n,t){return new ot(this,n,!0,t).promise},oi=function(t,i){function s(n){c(r,n)}function l(t){n(r,t)}var f=this,r=new f(h,i),o,u;if(!k(t))return n(r,new TypeError("You must pass an array to race.")),r;for(o=t.length,u=0;r._state===e&&u<o;u++)p(f.resolve(t[u]),undefined,s,l);return r},si=function(n,t){var r=this,i;return n&&typeof n=="object"&&n.constructor===r?n:(i=new r(h,t),c(i,n),i)},hi=function(t,i){var u=this,r=new u(h,i);return n(r,t),r},ci=0;g=u;u.all=ei;u.race=oi;u.resolve=si;u.reject=hi;u.prototype={constructor:u,then:function(n,t,i){var f=this,u=f._state,e,s,c;return u===r&&!n||u===o&&!t?this:(f._onerror=null,e=new this.constructor(h,i),s=f._result,u?(c=arguments[u-1],l(function(){et(u,e,c,s)})):p(f,e,n,t),e)},"catch":function(n,t){return this.then(null,n,t)}};st=function(){var n,t;n=typeof global!="undefined"?global:typeof window!="undefined"&&window.document?window:self;t="Promise"in n&&"resolve"in n.Promise&&"reject"in n.Promise&&"all"in n.Promise&&"race"in n.Promise&&function(){var t;return new n.Promise(function(n){t=n}),a(t)}();t||(n.Promise=g)};b={Promise:g,polyfill:st};typeof define=="function"&&define.amd?define(function(){return b}):typeof module!="undefined"&&module.exports?module.exports=b:typeof this!="undefined"&&(this.ES6Promise=b);window.Promise=window.Promise||this.ES6Promise.Promise}).call(this);
///#source 1 1 defaultHttpRequest.js
/**
 * @constructor
 */
function DefaultHttpRequest() {

    /**
     * @name _promiseFactory
     * @type DefaultPromiseFactory
     */

    /**
     * @param {XMLHttpRequest} xhr
     * @param {object.<string, string>} headers
     */
    function setHeaders(xhr, headers) {
        var keys = Object.keys(headers);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = headers[key];

            xhr.setRequestHeader(key, value);
        }
    }

    /**
     * @param {string} url
     * @param {{ headers: object.<string, string> }} [config]
     * @returns {Promise}
     */
    this.getJSON = function (url, config) {
        return _promiseFactory.create(function (resolve, reject) {

            try {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.responseType = "json";

                if (config) {
                    if (config.headers) {
                        setHeaders(xhr, config.headers);
                    }
                }

                xhr.onload = function () {
                    try {
                        if (xhr.status === 200) {
                            var response = xhr.response;
                            if (typeof response === "string") {
                                response = JSON.parse(response);
                            }
                            resolve(response);
                        }
                        else {
                            reject(Error(xhr.statusText + "(" + xhr.status + ")"));
                        }
                    }
                    catch (err) {
                        reject(err);
                    }
                };

                xhr.onerror = function () {
                    reject(Error("Network error"));
                };

                xhr.send();
            }
            catch (err) {
                return reject(err);
            }
        });
    };
}

_httpRequest = new DefaultHttpRequest();

///#source 1 1 defaultPromiseFactory.js
/**
 * @constructor
 * @param {Promise} promise
 */
function DefaultPromise(promise) {

    /**
     * @param {function(*):*} successCallback
     * @param {function(*):*} errorCallback
     * @returns {DefaultPromise}
     */
    this.then = function (successCallback, errorCallback) {
        var childPromise = promise.then(successCallback, errorCallback);

        return new DefaultPromise(childPromise);
    };

    /**
     *
     * @param {function(*):*} errorCallback
     * @returns {DefaultPromise}
     */
    this.catch = function (errorCallback) {
        var childPromise = promise.catch(errorCallback);

        return new DefaultPromise(childPromise);
    };
}

/**
 * @constructor
 */
function DefaultPromiseFactory() {

    this.resolve = function (value) {
        return new DefaultPromise(Promise.resolve(value));
    };

    this.reject = function (reason) {
        return new DefaultPromise(Promise.reject(reason));
    };

    /**
     * @param {function(resolve:function, reject:function)} callback
     * @returns {DefaultPromise}
     */
    this.create = function (callback) {
        return new DefaultPromise(new Promise(callback));
    };
}

_promiseFactory = new DefaultPromiseFactory();
///#source 1 1 oidcclient.js
/// <reference path="es6-promise-2.0.0.js" />
/*
 * Copyright 2014 Dominick Baier, Brock Allen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function log() {
    //var param = [].join.call(arguments);
    //console.log(param);
}

function copy(obj, target) {
    target = target || {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            target[key] = obj[key];
        }
    }
    return target;
}

function rand() {
    return ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
}

function error(message) {
    return _promiseFactory.reject(Error(message));
}

function parseOidcResult(queryString) {
    log("parseOidcResult");

    queryString = queryString || location.hash;

    var idx = queryString.lastIndexOf("#");
    if (idx >= 0) {
        queryString = queryString.substr(idx + 1);
    }

    var params = {},
        regex = /([^&=]+)=([^&]*)/g,
        m;

    var counter = 0;
    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        if (counter++ > 50) {
            return {
                error: "Response exceeded expected number of parameters"
            };
        }
    }

    for (var prop in params) {
        return params;
    }
}

/**
 * @param {string} url
 * @param {string|undefined} token
 * @returns {Promise}
 */
function getJson(url, token) {
    log("getJson", url);

    var config = {};

    if (token) {
        config.headers = {"Authorization": "Bearer " + token};
    }

    return _httpRequest.getJSON(url, config);
}

var requestDataKey = "OidcClient.requestDataKey";

function OidcClient(settings) {
    this._settings = settings || {};

    if (typeof this._settings.load_user_profile === 'undefined') {
        this._settings.load_user_profile = true;
    }

    if (this._settings.authority && this._settings.authority.indexOf('.well-known/openid-configuration') < 0) {
        if (this._settings.authority[this._settings.authority.length - 1] != '/') {
            this._settings.authority += '/';
        }
        this._settings.authority += '.well-known/openid-configuration';
    }

    if (!this._settings.response_type) {
        this._settings.response_type = "id_token token";
    }

    if (!this._settings.store) {
        this._settings.store = window.localStorage;
    }

    Object.defineProperty(this, "isOidc", {
        get: function () {
            if (this._settings.response_type) {
                var result = this._settings.response_type.split(/\s+/g).filter(function (item) {
                    return item === "id_token";
                });
                return !!(result[0]);
            }
            return false;
        }
    });

    Object.defineProperty(this, "isOAuth", {
        get: function () {
            if (this._settings.response_type) {
                var result = this._settings.response_type.split(/\s+/g).filter(function (item) {
                    return item === "token";
                });
                return !!(result[0]);
            }
            return false;
        }
    });
}

OidcClient.prototype.redirectForToken = function () {
    log("OidcClient.redirectForToken");

    this.createTokenRequestAsync().then(function (request) {
        window.location = request.url;
    }, function (err) {
        console.error(err);
    });
}

OidcClient.prototype.redirectForLogout = function (id_token_hint) {
    log("OidcClient.redirectForLogout");

    var settings = this._settings;
    this.loadMetadataAsync().then(function (metadata) {
        if (!metadata.end_session_endpoint) {
            console.error("No end_session_endpoint in metadata");
        }
        var url = metadata.end_session_endpoint;
        if (id_token_hint && settings.post_logout_redirect_uri) {
            url += "?post_logout_redirect_uri=" + settings.post_logout_redirect_uri;
            url += "&id_token_hint=" + id_token_hint;
        }
        window.location = url;
    }, function (err) {
        console.error(err);
    });
}

OidcClient.prototype.loadAuthorizationEndpoint = function () {
    log("OidcClient.loadAuthorizationEndpoint");

    if (this._settings.authorization_endpoint) {
        return _promiseFactory.resolve(this._settings.authorization_endpoint);
    }

    if (!this._settings.authority) {
        return error("No authorization_endpoint configured");
    }

    return this.loadMetadataAsync().then(function (metadata) {
        if (!metadata.authorization_endpoint) {
            return error("Metadata does not contain authorization_endpoint");
        }

        return metadata.authorization_endpoint;
    });
};

OidcClient.prototype.createTokenRequestAsync = function () {
    log("OidcClient.createTokenRequestAsync");

    var client = this;
    var settings = client._settings;

    return client.loadAuthorizationEndpoint().then(function (authorization_endpoint) {
        var state = rand();

        var url =
            authorization_endpoint + "?state=" + encodeURIComponent(state);

        if (client.isOidc) {
            var nonce = rand();
            url += "&nonce=" + encodeURIComponent(nonce);
        }

        var required = ["client_id", "redirect_uri", "response_type", "scope"];
        required.forEach(function (key) {
            var value = settings[key];
            if (value) {
                url += "&" + key + "=" + encodeURIComponent(value);
            }
        });

        var optional = ["prompt", "display", "max_age", "ui_locales", "id_token_hint", "login_hint", "acr_values"];
        optional.forEach(function (key) {
            var value = settings[key];
            if (value) {
                url += "&" + key + "=" + encodeURIComponent(value);
            }
        });

        var data = {
            oidc: client.isOidc,
            oauth: client.isOAuth,
            state: state
        };

        if (nonce) {
            data["nonce"] = nonce;
        }

        settings.store.setItem(requestDataKey, JSON.stringify(data));

        return {
            data: data,
            url: url
        };
    });
}

OidcClient.prototype.loadMetadataAsync = function () {
    log("OidcClient.loadMetadataAsync");

    var settings = this._settings;

    if (settings.metadata) {
        return _promiseFactory.resolve(settings.metadata);
    }

    if (!settings.authority) {
        return error("No authority configured");
    }

    return getJson(settings.authority)
        .then(function (metadata) {
            settings.metadata = metadata;
            return metadata;
        }, function (err) {
            return error("Failed to load metadata (" + err.message + ")");
        });
};

OidcClient.prototype.loadX509SigningKeyAsync = function () {
    log("OidcClient.loadX509SigningKeyAsync");

    var settings = this._settings;

    function getKeyAsync(jwks) {
        if (!jwks.keys || !jwks.keys.length) {
            return error("Signing keys empty");
        }

        var key = jwks.keys[0];
        if (key.kty != "RSA") {
            return error("Signing key not RSA");
        }

        if (!key.x5c || !key.x5c.length) {
            return error("RSA keys empty");
        }

        return _promiseFactory.resolve(key.x5c[0]);
    }

    if (settings.jwks) {
        return getKeyAsync(settings.jwks);
    }

    return this.loadMetadataAsync().then(function (metadata) {
        if (!metadata.jwks_uri) {
            return error("Metadata does not contain jwks_uri");
        }

        return getJson(metadata.jwks_uri).then(function (jwks) {
            settings.jwks = jwks;
            return getKeyAsync(jwks);
        }, function (err) {
            return error("Failed to load signing keys (" + err.message + ")");
        });
    });
};

OidcClient.prototype.validateIdTokenAsync = function (jwt, nonce, access_token) {
    log("OidcClient.validateIdTokenAsync");

    var client = this;
    var settings = client._settings;

    return client.loadX509SigningKeyAsync().then(function (cert) {

        var jws = new KJUR.jws.JWS();
        if (jws.verifyJWSByPemX509Cert(jwt, cert)) {
            var id_token = JSON.parse(jws.parsedJWS.payloadS);

            if (nonce !== id_token.nonce) {
                return error("Invalid nonce");
            }

            return client.loadMetadataAsync().then(function (metadata) {

                if (id_token.iss !== metadata.issuer) {
                    return error("Invalid issuer");
                }

                if (id_token.aud !== settings.client_id) {
                    return error("Invalid audience");
                }

                var now = parseInt(Date.now() / 1000);

                // accept tokens issues up to 5 mins ago
                var diff = now - id_token.iat;
                if (diff > (5 * 60)) {
                    return error("Token issued too long ago");
                }

                if (id_token.exp < now) {
                    return error("Token expired");
                }

                if (access_token && settings.load_user_profile) {
                    // if we have an access token, then call user info endpoint
                    return client.loadUserProfile(access_token, id_token).then(function (id_token) {
                        return id_token;
                    });
                }
                else {
                    // no access token, so we have all our claims
                    return id_token;
                }

            });
        }
        else {
            return error("JWT failed to validate");
        }

    });

};

OidcClient.prototype.validateAccessTokenAsync = function (id_token, access_token) {
    log("OidcClient.validateAccessTokenAsync");

    if (!id_token.at_hash) {
        return error("No at_hash in id_token");
    }

    var hash = KJUR.crypto.Util.sha256(access_token);
    var left = hash.substr(0, hash.length / 2);
    var left_b64u = hextob64u(left);

    if (left_b64u !== id_token.at_hash) {
        return error("at_hash failed to validate");
    }

    return _promiseFactory.resolve();
};

OidcClient.prototype.loadUserProfile = function (access_token, id_token) {
    log("OidcClient.loadUserProfile");

    return this.loadMetadataAsync().then(function (metadata) {

        if (!metadata.userinfo_endpoint) {
            return _promiseFactory.reject(Error("Metadata does not contain userinfo_endpoint"));
        }

        return getJson(metadata.userinfo_endpoint, access_token).then(function (response) {

            return copy(response, id_token);

        });
    });
}

OidcClient.prototype.validateIdTokenAndAccessTokenAsync = function (id_token_jwt, nonce, access_token) {
    log("OidcClient.validateIdTokenAndAccessTokenAsync");

    var client = this;

    return client.validateIdTokenAsync(id_token_jwt, nonce, access_token).then(function (id_token) {

        return client.validateAccessTokenAsync(id_token, access_token).then(function () {

            return id_token;

        });

    });
}

OidcClient.prototype.readResponseAsync = function (queryString) {
    log("OidcClient.readResponseAsync");

    var client = this;
    var settings = client._settings;

    var data = settings.store.getItem(requestDataKey);
    settings.store.removeItem(requestDataKey);

    if (!data) {
        return error("No request state loaded");
    }

    data = JSON.parse(data);
    if (!data) {
        return error("No request state loaded");
    }

    if (!data.state) {
        return error("No state loaded");
    }

    var result = parseOidcResult(queryString);
    if (!result) {
        return error("No OIDC response");
    }

    if (result.error) {
        return error(result.error);
    }

    if (result.state !== data.state) {
        return error("Invalid state");
    }

    if (data.oidc) {
        if (!result.id_token) {
            return error("No identity token");
        }

        if (!data.nonce) {
            return error("No nonce loaded");
        }
    }

    if (data.oauth) {
        if (!result.access_token) {
            return error("No access token");
        }

        if (result.token_type !== "Bearer") {
            return error("Invalid token type");
        }

        if (!result.expires_in) {
            return error("No token expiration");
        }
    }

    var promise = _promiseFactory.resolve();
    if (data.oidc && data.oauth) {
        promise = client.validateIdTokenAndAccessTokenAsync(result.id_token, data.nonce, result.access_token);
    }
    else if (data.oidc) {
        promise = client.validateIdTokenAsync(result.id_token, data.nonce);
    }

    return promise.then(function (id_token) {
        return {
            id_token: id_token,
            id_token_jwt: result.id_token,
            access_token: result.access_token,
            expires_in: result.expires_in,
            scope: result.scope
        };
    });
}

/**
 * @name _httpRequest
 * @type DefaultHttpRequest
 */

///#source 1 1 token-manager.js
/// <reference path="es6-promise-2.0.0.js" />
/// <reference path="oidcclient.js" />
/*
* Copyright 2014 Dominick Baier, Brock Allen
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @type {DefaultHttpRequest}
 * @private
 */
var _httpRequest = new DefaultHttpRequest();

/**
 * @type {DefaultPromiseFactory}
 * @private
 */
var _promiseFactory = new DefaultPromiseFactory();

function Token(id_token, id_token_jwt, access_token, expires_at, scope) {
    this.id_token = id_token;
    this.id_token_jwt = id_token_jwt;
    this.access_token = access_token;
    if (access_token) {
        this.expires_at = parseInt(expires_at);
    }
    else if (id_token) {
        this.expires_at = id_token.exp;
    }
    else {
        throw Error("Either access_token or id_token required.");
    }

    Object.defineProperty(this, "expired", {
        get: function () {
            var now = parseInt(Date.now() / 1000);
            return this.expires_at < now;
        }
    });

    Object.defineProperty(this, "expires_in", {
        get: function () {
            var now = parseInt(Date.now() / 1000);
            return this.expires_at - now;
        }
    });

    this.scopes = (scope || "").split(" ");
}

Token.fromResponse = function (response) {
    if (response.access_token) {
        var now = parseInt(Date.now() / 1000);
        var expires_at = now + parseInt(response.expires_in);
    }
    return new Token(response.id_token, response.id_token_jwt, response.access_token, expires_at, response.scope);
}

Token.fromJSON = function (json) {
    if (json) {
        try {
            var obj = JSON.parse(json);
            return new Token(obj.id_token, obj.id_token_jwt, obj.access_token, obj.expires_at, obj.scope);
        }
        catch (e) {
        }
    }
    return new Token(null, 0, null);
}

Token.prototype.toJSON = function () {
    return JSON.stringify({
        id_token: this.id_token,
        id_token_jwt: this.id_token_jwt,
        access_token: this.access_token,
        expires_at: this.expires_at,
        scope: this.scopes.join(" ")
    });
}

function FrameLoader(url) {
    this.url = url;
}

FrameLoader.prototype.loadAsync = function (url) {
    url = url || this.url;

    if (!url) {
        return _promiseFactory.reject("No url provided");
    }

    return _promiseFactory.create(function (resolve, reject) {
        var frameHtml = '<iframe style="display:none"></iframe>';
        var frame = $(frameHtml).appendTo("body");

        function cleanup() {
            window.removeEventListener("message", message, false);
            if (handle) {
                window.clearTimeout(handle);
            }
            handle = null;
            frame.remove();
        }

        function cancel(e) {
            cleanup();
            reject();
        }

        function message(e) {
            if (handle && e.origin === location.protocol + "//" + location.host) {
                cleanup();
                resolve(e.data);
            }
        }

        var handle = window.setTimeout(cancel, 5000);
        window.addEventListener("message", message, false);
        frame.attr("src", url);
    });
}

function loadToken(mgr) {
    if (mgr._settings.persist) {
        var tokenJson = mgr._settings.store.getItem(mgr._settings.persistKey);
        if (tokenJson) {
            var token = Token.fromJSON(tokenJson);
            if (!token.expired) {
                mgr._token = token;
            }
        }
    }
}

function configureTokenExpiring(mgr) {

    function callback() {
        handle = null;
        mgr._callTokenExpiring();
    }

    var handle = null;

    function cancel() {
        if (handle) {
            window.clearTimeout(handle);
            handle = null;
        }
    }

    function setup(duration) {
        handle = window.setTimeout(callback, duration * 1000);
    }

    function configure() {
        cancel();

        if (!mgr.expired) {
            var duration = mgr.expires_in;
            if (duration > 60) {
                setup(duration - 60);
            }
            else {
                callback();
            }
        }
    }

    configure();

    mgr.addOnTokenObtained(configure);
    mgr.addOnTokenRemoved(cancel);
}

function configureAutoRenewToken(mgr) {

    if (mgr._settings.silent_redirect_uri && mgr._settings.silent_renew) {

        mgr.addOnTokenExpiring(function () {
            mgr.renewTokenSilentAsync().catch(function (e) {
                mgr._callSilentTokenRenewFailed();
                console.error(e.message || e);
            });
        });

    }
}

function configureTokenExpired(mgr) {

    function callback() {
        handle = null;

        if (mgr._token) {
            mgr.saveToken(null);
        }

        mgr._callTokenExpired();
    }

    var handle = null;

    function cancel() {
        if (handle) {
            window.clearTimeout(handle);
            handle = null;
        }
    }

    function setup(duration) {
        handle = window.setTimeout(callback, duration * 1000);
    }

    function configure() {
        cancel();
        if (mgr.expires_in > 0) {
            // register 1 second beyond expiration so we don't get into edge conditions for expiration
            setup(mgr.expires_in + 1);
        }
    }

    configure();

    mgr.addOnTokenObtained(configure);
    mgr.addOnTokenRemoved(cancel);
}

function TokenManager(settings) {
    this._settings = settings || {};

    this._settings.persist = this._settings.persist || true;
    this._settings.store = this._settings.store || window.localStorage;
    this._settings.persistKey = this._settings.persistKey || "TokenManager.token";

    this._callbacks = {
        tokenRemovedCallbacks: [],
        tokenExpiringCallbacks: [],
        tokenExpiredCallbacks: [],
        tokenObtainedCallbacks: [],
        silentTokenRenewFailedCallbacks: []
    };

    Object.defineProperty(this, "id_token", {
        get: function () {
            if (this._token) {
                return this._token.id_token;
            }
        }
    });
    Object.defineProperty(this, "id_token_jwt", {
        get: function () {
            if (this._token) {
                return this._token.id_token_jwt;
            }
        }
    });
    Object.defineProperty(this, "access_token", {
        get: function () {
            if (this._token && !this._token.expired) {
                return this._token.access_token;
            }
        }
    });
    Object.defineProperty(this, "expired", {
        get: function () {
            if (this._token) {
                return this._token.expired;
            }
            return true;
        }
    });
    Object.defineProperty(this, "expires_in", {
        get: function () {
            if (this._token) {
                return this._token.expires_in;
            }
            return 0;
        }
    });
    Object.defineProperty(this, "expires_at", {
        get: function () {
            if (this._token) {
                return this._token.expires_at;
            }
            return 0;
        }
    });
    Object.defineProperty(this, "scopes", {
        get: function () {
            if (this._token) {
                return [].concat(this._token.scopes);
            }
            return [];
        }
    });

    var mgr = this;
    loadToken(mgr);
    window.addEventListener("storage", function (e) {
        if (e.key === mgr._settings.persistKey) {
            loadToken(mgr);
            if (mgr._token) {
                mgr._callTokenObtained();
            }
            else {
                mgr._callTokenRemoved();
            }
        }
    });
    configureTokenExpired(mgr);
    configureAutoRenewToken(mgr);

    // delay this so consuming apps can register for callbacks first
    window.setTimeout(function () {
        configureTokenExpiring(mgr);
    }, 0);
}

/**
 * @param {{ create:function(successCallback:function(), errorCallback:function()):Promise, resolve:function(value:*):Promise, reject:function():Promise}} promiseFactory
 */
TokenManager.setPromiseFactory = function (promiseFactory) {
    _promiseFactory = promiseFactory;
};

/**
 * @param {{getJSON:function(url:string, config:{ headers: object.<string, string> })}} httpRequest
 */
TokenManager.setHttpRequest = function (httpRequest) {
    if ((typeof httpRequest !== 'object') || (typeof httpRequest.getJSON !== 'function')) {
        throw Error('The provided value is not a valid http request.');
    }

    _httpRequest = httpRequest;
};

TokenManager.prototype._callTokenRemoved = function() {
    this._callbacks.tokenRemovedCallbacks.forEach(function (cb) {
        cb();
    });
}

TokenManager.prototype._callTokenExpiring = function() {
    this._callbacks.tokenExpiringCallbacks.forEach(function (cb) {
        cb();
    });
}

TokenManager.prototype._callTokenExpired = function() {
    this._callbacks.tokenExpiredCallbacks.forEach(function (cb) {
        cb();
    });
}

TokenManager.prototype._callTokenObtained = function() {
    this._callbacks.tokenObtainedCallbacks.forEach(function (cb) {
        cb();
    });
}

TokenManager.prototype._callSilentTokenRenewFailed = function () {
    this._callbacks.silentTokenRenewFailedCallbacks.forEach(function (cb) {
        cb();
    });
}

TokenManager.prototype.saveToken = function (token) {
    if (token && !(token instanceof Token)) {
        token = Token.fromResponse(token);
    }

    this._token = token;

    if (this._settings.persist && !this.expired) {
        this._settings.store.setItem(this._settings.persistKey, token.toJSON());
    }
    else {
        this._settings.store.removeItem(this._settings.persistKey);
    }

    if (token) {
        this._callTokenObtained();
    }
    else {
        this._callTokenRemoved();
    }
}

TokenManager.prototype.addOnTokenRemoved = function (cb) {
    this._callbacks.tokenRemovedCallbacks.push(cb);
}

TokenManager.prototype.addOnTokenObtained = function (cb) {
    this._callbacks.tokenObtainedCallbacks.push(cb);
}

TokenManager.prototype.addOnTokenExpiring = function (cb) {
    this._callbacks.tokenExpiringCallbacks.push(cb);
}

TokenManager.prototype.addOnTokenExpired = function (cb) {
    this._callbacks.tokenExpiredCallbacks.push(cb);
}

TokenManager.prototype.addOnSilentTokenRenewFailed = function(cb) {
    this._callbacks.silentTokenRenewFailedCallbacks.push(cb);
}

TokenManager.prototype.removeToken = function () {
    this.saveToken(null);
}

TokenManager.prototype.redirectForToken = function () {
    var oidc = new OidcClient(this._settings);
    oidc.redirectForToken();
}

TokenManager.prototype.redirectForLogout = function () {
    var oidc = new OidcClient(this._settings);
    var id_token_jwt = this.id_token_jwt;
    this.removeToken();
    oidc.redirectForLogout(id_token_jwt);
}

TokenManager.prototype.createTokenRequestAsync = function () {
    var oidc = new OidcClient(this._settings);
    return oidc.createTokenRequestAsync();
}

TokenManager.prototype.processTokenCallbackAsync = function (queryString) {
    var mgr = this;
    var oidc = new OidcClient(mgr._settings);
    return oidc.readResponseAsync(queryString).then(function (token) {
        mgr.saveToken(token);
    });
}

TokenManager.prototype.renewTokenSilentAsync = function () {
    var mgr = this;

    if (!mgr._settings.silent_redirect_uri) {
        return _promiseFactory.reject("silent_redirect_uri not configured");
    }

    var settings = copy(mgr._settings);
    settings.redirect_uri = settings.silent_redirect_uri;
    settings.prompt = "none";

    var oidc = new OidcClient(settings);
    return oidc.createTokenRequestAsync().then(function (request) {
        var frame = new FrameLoader(request.url);
        return frame.loadAsync().then(function (hash) {
            return oidc.readResponseAsync(hash).then(function (token) {
                mgr.saveToken(token);
            });
        });
    });
}

TokenManager.prototype.processTokenCallbackSilent = function () {
    if (window.top && window !== window.top) {
        var hash = window.location.hash;
        if (hash) {
            window.top.postMessage(hash, location.protocol + "//" + location.host);
        }
    }
    ;
}

///#source 1 1 iife-end.js
    // exports
    window.TokenManager = TokenManager;

})();
