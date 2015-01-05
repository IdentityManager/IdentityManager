///#source 1 1 /Assets/Scripts/Libs/jquery-2.1.0.min.js
/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

///#source 1 1 /Assets/Scripts/Libs/bootstrap.min.js
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
///#source 1 1 /Assets/Scripts/Libs/angular.min.js
/*
 AngularJS v1.3.0-rc.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,Y,s){'use strict';function Q(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.0-rc.0/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function eb(b){if(null==b||Sa(b))return!1;var a=b.length;return 1===b.nodeType&&
a?!0:D(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d);else if(H(b)||eb(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function bc(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function ld(b,a,c){for(var d=bc(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function cc(b){return function(a,c){b(c,a)}}function md(){return++fb}function dc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function B(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});dc(b,a);return b}function V(b){return parseInt(b,10)}function ec(b,a){return B(new (B(function(){},{prototype:b})),a)}function y(){}function Fa(b){return b}function fa(b){return function(){return b}}function F(b){return"undefined"===
typeof b}function G(b){return"undefined"!==typeof b}function S(b){return null!==b&&"object"===typeof b}function D(b){return"string"===typeof b}function Ga(b){return"number"===typeof b}function ia(b){return"[object Date]"===Ha.call(b)}function E(b){return"function"===typeof b}function gb(b){return"[object RegExp]"===Ha.call(b)}function Sa(b){return b&&b.window===b}function Ta(b){return b&&b.$evalAsync&&b.$watch}function nd(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function od(b){var a=
{};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function pa(b){return K(b.nodeName||b[0].nodeName)}function pd(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ca(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ia(b,a){var c=Ca(b,a);0<=c&&b.splice(c,1);return a}function Ja(b,a,c,d){if(Sa(b)||Ta(b))throw Ua("cpws");if(a){if(b===a)throw Ua("cpi");c=c||[];d=d||[];if(S(b)){var e=Ca(c,b);if(-1!==e)return d[e];
c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Ja(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(c,b){delete a[b]});for(f in b)b.hasOwnProperty(f)&&(e=Ja(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);dc(a,g)}}else if(a=b)H(b)?a=Ja(b,[],c,d):ia(b)?a=new Date(b.getTime()):gb(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):S(b)&&(e=Object.create(Object.getPrototypeOf(b)),
a=Ja(b,e,c,d));return a}function qa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(S(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ra(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ra(b[d],a[d]))return!1;return!0}}else{if(ia(b))return ia(a)?ra(b.getTime(),a.getTime()):!1;if(gb(b)&&
gb(a))return b.toString()==a.toString();if(Ta(b)||Ta(a)||Sa(b)||Sa(a)||H(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!E(b[d])){if(!ra(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!E(a[d]))return!1;return!0}return!1}function hb(b,a,c){return b.concat(Va.call(a,c))}function fc(b,a){var c=2<arguments.length?Va.call(arguments,2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Va.call(arguments,0))):
a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function qd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Sa(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Ta(a)&&(c="$SCOPE");return c}function sa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,qd,a?"  ":null)}function gc(b){return D(b)?JSON.parse(b):b}function ta(b){b=x(b).clone();try{b.empty()}catch(a){}var c=x("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,c){return"<"+K(c)})}catch(d){return K(c)}}function hc(b){try{return decodeURIComponent(b)}catch(a){}}function ic(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=hc(c[0]),G(d)&&(b=G(c[1])?hc(c[1]):!0,Fb.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Gb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}
function ib(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function rd(b,a){var c,d,e=jb.length;b=x(b);for(d=0;d<e;++d)if(c=jb[d]+a,D(c=b.attr(c)))return c;return null}function sd(b,a){var c,d,e={};r(jb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});
r(jb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==rd(c,"strict-di"),a(c,d?[d]:[],e))}function jc(b,a,c){S(c)||(c={});c=B({strictDi:!1},c);var d=function(){b=x(b);if(b.injector()){var d=b[0]===Y?"document":ta(b);throw Ua("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
a.unshift("ng");d=Hb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;P&&e.test(P.name)&&(c.debugInfoEnabled=!0,P.name=P.name.replace(e,""));if(P&&!f.test(P.name))return d();P.name=P.name.replace(f,"");xa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});d()}}function td(){P.name="NG_ENABLE_DEBUG_INFO!"+P.name;P.location.reload()}function ud(b){return xa.element(b).injector().get("$$testability")}
function Wa(b,a){a=a||"_";return b.replace(vd,function(b,d){return(d?a:"")+b.toLowerCase()})}function wd(){var b;kc||((ua=P.jQuery)&&ua.fn.on?(x=ua,B(ua.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ua.cleanData,ua.cleanData=function(a){if(Ib)Ib=!1;else for(var c=0,d;null!=(d=a[c]);c++)ua(d).triggerHandler("$destroy");b(a)}):x=U,xa.element=x,kc=!0)}function Jb(b,a,c){if(!b)throw Ua("areq",a||"?",c||"required");return b}
function kb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Jb(E(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ua("badname",a);}function lc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?fc(e,b):b}function lb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return x(c)}function xd(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=Q("$injector"),d=Q("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||Q;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return q}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],l=a("$injector","invoke","push",d),q={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:l,run:function(a){e.push(a);return this}};h&&l(h);return q})}})}function yd(b){B(b,{bootstrap:jc,copy:Ja,extend:B,equals:ra,element:x,forEach:r,injector:Hb,noop:y,bind:fc,toJson:sa,
fromJson:gc,identity:Fa,isUndefined:F,isDefined:G,isString:D,isFunction:E,isObject:S,isNumber:Ga,isElement:nd,isArray:H,version:zd,isDate:ia,lowercase:K,uppercase:mb,callbacks:{counter:0},getTestability:ud,$$minErr:Q,$$csp:Xa,reloadWithDebugInfo:td});Ya=xd(P);try{Ya("ngLocale")}catch(a){Ya("ngLocale",[]).provider("$locale",Ad)}Ya("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Bd});a.provider("$compile",mc).directive({a:Cd,input:nc,textarea:nc,form:Dd,script:Ed,select:Fd,style:Gd,
option:Hd,ngBind:Id,ngBindHtml:Jd,ngBindTemplate:Kd,ngClass:Ld,ngClassEven:Md,ngClassOdd:Nd,ngCloak:Od,ngController:Pd,ngForm:Qd,ngHide:Rd,ngIf:Sd,ngInclude:Td,ngInit:Ud,ngNonBindable:Vd,ngPluralize:Wd,ngRepeat:Xd,ngShow:Yd,ngStyle:Zd,ngSwitch:$d,ngSwitchWhen:ae,ngSwitchDefault:be,ngOptions:ce,ngTransclude:de,ngModel:ee,ngList:fe,ngChange:ge,pattern:oc,ngPattern:oc,required:pc,ngRequired:pc,minlength:qc,ngMinlength:qc,maxlength:rc,ngMaxlength:rc,ngValue:he,ngModelOptions:ie}).directive({ngInclude:je}).directive(nb).directive(sc);
a.provider({$anchorScroll:ke,$animate:le,$browser:me,$cacheFactory:ne,$controller:oe,$document:pe,$exceptionHandler:qe,$filter:tc,$interpolate:re,$interval:se,$http:te,$httpBackend:ue,$location:ve,$log:we,$parse:xe,$rootScope:ye,$q:ze,$$q:Ae,$sce:Be,$sceDelegate:Ce,$sniffer:De,$templateCache:Ee,$templateRequest:Fe,$$testability:Ge,$timeout:He,$window:Ie,$$rAF:Je,$$asyncCallback:Ke})}])}function Za(b){return b.replace(Le,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Me,"Moz$1")}function uc(b){b=
b.nodeType;return 1===b||!b||9===b}function Ne(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Kb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Oe.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(Pe,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=hb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function U(b){if(b instanceof U)return b;var a;
D(b)&&(b=da(b),a=!0);if(!(this instanceof U)){if(a&&"<"!=b.charAt(0))throw Lb("nosel");return new U(b)}if(a){a=Y;var c;b=(c=Qe.exec(b))?[a.createElement(c[1])]:(c=Ne(b,a))?c.childNodes:[]}vc(this,b)}function Mb(b){return b.cloneNode(!0)}function ob(b,a){a||pb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)pb(c[d])}function wc(b,a,c,d){if(G(d))throw Lb("offargs");var e=(d=qb(b))&&d.events;if(d&&d.handle)if(a)r(a.split(" "),function(a){F(c)?(b.removeEventListener(a,
e[a],!1),delete e[a]):Ia(e[a]||[],c)});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,e[a],!1),delete e[a]}function pb(b,a){var c=b.ng339,d=c&&rb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),wc(b)),delete rb[c],b.ng339=s))}function qb(b,a){var c=b.ng339,c=c&&rb[c];a&&!c&&(b.ng339=c=++Re,c=rb[c]={events:{},data:{},handle:s});return c}function Nb(b,a,c){if(uc(b)){var d=G(c),e=!d&&a&&!S(a),f=!a;b=(b=qb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&
b[a];B(b,a)}}}function Ob(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Pb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",da((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+da(a)+" "," ")))})}function Qb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=da(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});
b.setAttribute("class",da(c))}}function vc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function xc(b,a){return sb(b,"$"+(a||"ngController")+"Controller")}function sb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=x.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}function yc(b){for(ob(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
function zc(b,a){a||ob(b);var c=b.parentNode;c&&c.removeChild(b)}function Ac(b,a){var c=tb[a.toLowerCase()];return c&&Bc[pa(b)]&&c}function Se(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Cc[a]}function Te(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){1<g&&(f=qa(f));for(var h=0;h<g;h++)f[h].call(b,c)}};c.elem=b;return c}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),
c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||md)():c+":"+b}function $a(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function Ue(b){return(b=b.toString().replace(Dc,"").match(Ec))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Rb(b,a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw D(c)&&c||(c=b.name||Ue(b)),Na("strictdi",c);a=b.toString().replace(Dc,"");a=a.match(Ec);r(a[1].split(Ve),
function(a){a.replace(We,function(a,b,c){d.push(c)})})}b.$inject=d}}else H(b)?(a=b.length-1,kb(b[a],"fn"),d=b.slice(0,a)):kb(b,"fn",!0);return d}function Hb(b,a){function c(a){return function(b,c){if(S(b))r(b,cc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(E(b)||H(b))b=p.instantiate(b);if(!b.$get)throw Na("pget",a);return n[a+"Provider"]=b}function e(a,b){return d(a,{$get:b})}function f(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);
f[e[1]].apply(f,e[2])}}if(!k.get(a)){k.put(a,!0);try{D(a)?(c=Ya(a),b=b.concat(f(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(p.invoke(a)):H(a)?b.push(p.invoke(a)):kb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Na("modulerr",a,e.stack||e.message||e);}}});return b}function g(b,c){function d(a){if(b.hasOwnProperty(a)){if(b[a]===h)throw Na("cdep",a+" <- "+m.join(" <- "));return b[a]}try{return m.unshift(a),
b[a]=h,b[a]=c(a)}catch(e){throw b[a]===h&&delete b[a],e;}finally{m.shift()}}function e(b,c,f,h){"string"===typeof f&&(h=f,f=null);var g=[];h=Rb(b,a,h);var m,l,k;l=0;for(m=h.length;l<m;l++){k=h[l];if("string"!==typeof k)throw Na("itkn",k);g.push(f&&f.hasOwnProperty(k)?f[k]:d(k))}H(b)&&(b=b[m]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=function(){};d.prototype=(H(a)?a[a.length-1]:a).prototype;d=new d;a=e(a,d,b,c);return S(a)||E(a)?a:d},get:d,annotate:Rb,has:function(a){return n.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var h={},m=[],k=new $a([],!0),n={$provide:{provider:c(d),factory:c(e),service:c(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return e(a,fa(b))}),constant:c(function(a,b){La(a,"constant");n[a]=b;l[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=q.invoke(d,c);return q.invoke(b,null,{$delegate:a})}}}},p=n.$injector=g(n,function(){throw Na("unpr",m.join(" <- "));
}),l={},q=l.$injector=g(l,function(a){var b=p.get(a+"Provider");return q.invoke(b.$get,b,s,a)});r(f(b),function(a){q.invoke(a||y)});return q}function ke(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;r(a,function(a){b||"a"!==pa(a)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,
0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function Ke(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Xe(b,a,c,d){function e(a){try{a.apply(null,Va.call(arguments,1))}finally{if(t--,0===t)for(;v.length;)try{v.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ea(){r(w,function(a){a()});A=b(ea,a)})()}function g(){W=null;O!=h.url()&&(O=h.url(),r(C,function(a){a(h.url())}))}
var h=this,m=a[0],k=b.location,n=b.history,p=b.setTimeout,l=b.clearTimeout,q={};h.isMock=!1;var t=0,v=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){t++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===t?a():v.push(a)};var w=[],A;h.addPollFn=function(a){F(A)&&f(100,p);w.push(a);return a};var O=k.href,z=a.find("base"),W=null;h.url=function(a,c){k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){if(O!=a)return O=a,d.history?c?n.replaceState(null,
"",a):(n.pushState(null,"",a),z.attr("href",z.attr("href"))):(W=a,c?k.replace(a):k.href=a),h}else return W||k.href.replace(/%27/g,"'")};var C=[],Z=!1;h.onUrlChange=function(a){if(!Z){if(d.history)x(b).on("popstate",g);if(d.hashchange)x(b).on("hashchange",g);else h.addPollFn(g);Z=!0}C.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=z.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},L="",T=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=
encodeURIComponent(a)+"=;path="+T+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+T).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==L)for(L=m.cookie,d=L.split("; "),N={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=decodeURIComponent(e.substring(0,h)),N[a]===s&&(N[a]=decodeURIComponent(e.substring(h+1))));return N}};h.defer=function(a,
b){var c;t++;c=p(function(){delete q[c];e(a)},b||0);q[c]=!0;return c};h.defer.cancel=function(a){return q[a]?(delete q[a],l(a),e(y),!0):!1}}function me(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Xe(b,d,a,c)}]}function ne(){this.$get=function(){function b(b,d){function e(a){a!=p&&(l?l==a&&(l=a.n):l=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw Q("$cacheFactory")("iid",b);var g=0,h=B({},d,{id:b}),m={},k=d&&d.capacity||
Number.MAX_VALUE,n={},p=null,l=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!F(b))return a in m||g++,m[a]=b,g>k&&this.remove(l.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==l&&(l=b.n);f(b.n,b.p);delete n[a]}delete m[a];g--},removeAll:function(){m={};g=0;n={};p=l=null},destroy:function(){n=h=m=null;delete a[b]},info:function(){return B({},
h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ee(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function mc(b,a){var c={},d=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,e=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,f=od("ngSrc,ngSrcset,src,srcset"),g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,d){La(a,"directive");D(a)?(Jb(d,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+"Directive",
["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var h=b.invoke(c);E(h)?h={compile:fa(h)}:!h.compile&&h.link&&(h.compile=fa(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";e.push(h)}catch(g){d(g)}});return e}])),c[a].push(d)):r(a,cc(k));return this};this.aHrefSanitizationWhitelist=function(b){return G(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(b){return G(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var h=!0;this.debugInfoEnabled=function(a){return G(a)?(h=a,this):h};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,p,l,q,t,v,w,A,O,z){function W(a,b){try{a.addClass(b)}catch(c){}}function C(a,b,c,d,e){a instanceof x||(a=x(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&
(a[c]=x(b).wrap("<span></span>").parent()[0])});var f=Z(a,b,a,c,d,e);C.$$addScopeClass(a);var h=null,g=a,l;return function(b,c,d,e,k){Jb(b,"scope");h||(h=(k=k&&k[0])?"foreignobject"!==pa(k)&&k.toString().match(/SVG/)?"svg":"html":"html");"html"!==h&&a[0]!==l&&(g=x(U(h,x("<div>").append(a).html())));l=a[0];k=c?Ka.clone.call(g):g;if(d)for(var p in d)k.data("$"+p+"Controller",d[p].instance);C.$$addScopeInfo(k,b);c&&c(k,b);f&&f(b,k,k,e);return k}}function Z(a,b,c,d,e,f){function h(a,c,d,e){var f,l,k,
p,n,q,O;if(v)for(O=Array(c.length),p=0;p<g.length;p+=3)f=g[p],O[f]=c[f];else O=c;p=0;for(n=g.length;p<n;)l=O[g[p++]],c=g[p++],f=g[p++],c?(c.scope?(k=a.$new(),C.$$addScopeInfo(x(l),k)):k=a,q=c.transcludeOnThisElement?N(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?N(a,b):null,c(f,k,l,d,q)):f&&f(a,l.childNodes,s,e)}for(var g=[],l,k,p,n,v,q=0;q<a.length;q++){l=new Sb;k=L(a[q],[],l,0===q?d:s,e);(f=k.length?u(k,a[q],l,b,c,null,[],[],f):null)&&f.scope&&C.$$addScopeClass(l.$$element);
l=f&&f.terminal||!(p=a[q].childNodes)||!p.length?null:Z(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)g.push(q,f,l),n=!0,v=v||f;f=null}return n?h:null}function N(a,b,c,d){return function(e,f,h,g){var l=!1;e||(e=a.$new(),l=e.$$transcluded=!0);f=b(e,f,h,c,g);if(l&&!d)f.on("$destroy",function(){e.$destroy()});return f}}function L(b,f,h,g,l){var p=h.$attr,n;switch(b.nodeType){case 1:ea(f,va(pa(b)),"E",g,l);for(var v,q,O,t=b.attributes,A=0,z=t&&t.length;A<z;A++){var w=
!1,N=!1;v=t[A];if(!aa||8<=aa||v.specified){n=v.name;v=da(v.value);q=va(n);if(O=J.test(q))n=Wa(q.substr(6),"-");var W=q.replace(/(Start|End)$/,""),C;a:{var r=W;if(c.hasOwnProperty(r)){C=void 0;for(var r=a.get(r+"Directive"),u=0,T=r.length;u<T;u++)if(C=r[u],C.multiElement){C=!0;break a}}C=!1}C&&q===W+"Start"&&(w=n,N=n.substr(0,n.length-5)+"end",n=n.substr(0,n.length-6));q=va(n.toLowerCase());p[q]=n;if(O||!h.hasOwnProperty(q))h[q]=v,Ac(b,q)&&(h[q]=!0);ya(b,f,v,q,O);ea(f,q,"A",g,l,w,N)}}b=b.className;
if(D(b)&&""!==b)for(;n=e.exec(b);)q=va(n[2]),ea(f,q,"C",g,l)&&(h[q]=da(n[3])),b=b.substr(n.index+n[0].length);break;case 3:P(f,b.nodeValue);break;case 8:try{if(n=d.exec(b.nodeValue))q=va(n[1]),ea(f,q,"M",g,l)&&(h[q]=da(n[2]))}catch($){}}f.sort(F);return f}function T(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ka("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function R(a,
b,c){return function(d,e,f,h,g){e=T(e[0],b,c);return a(d,e,f,h,g)}}function u(a,c,d,e,f,h,g,l,k){function v(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=I.require;a.directiveName=ha;if(u===I||I.$$isolateScope)a=ga(a,{isolateScope:!0});g.push(a)}if(b){c&&(b=R(b,c,d));b.require=I.require;b.directiveName=ha;if(u===I||I.$$isolateScope)b=ga(b,{isolateScope:!0});l.push(b)}}function O(a,b,c,d){var e,f="data",h=!1;if(D(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),h=h||"?"==
e;e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||c[f]("$"+b+"Controller");if(!e&&!h)throw ka("ctreq",b,a);}else H(b)&&(e=[],r(b,function(b){e.push(O(a,b,c,d))}));return e}function A(a,e,f,h,k){function p(a,b,c){var d;Ta(a)||(c=b,b=a,a=s);B&&(d=T);c||(c=B?R.parent():R);return k(a,b,d,c)}var v,z,w,ma,T,$,R,M;c===f?(M=d,R=d.$$element):(R=x(f),M=new Sb(R,d));u&&(ma=e.$new(!0));$=k&&p;N&&(W={},T={},r(N,function(a){var b={$scope:a===u||a.$$isolateScope?ma:e,$element:R,$attrs:M,$transclude:$};w=a.controller;
"@"==w&&(w=M[a.name]);b=t(w,b,!0,a.controllerAs);T[a.name]=b;B||R.data("$"+a.name+"Controller",b.instance);W[a.name]=b}));if(u){var ea=/^\s*([@=&])(\??)\s*(\w*)\s*$/;C.$$addScopeInfo(R,ma,!0,!(Z&&(Z===u||Z===u.$$originalDirective)));C.$$addScopeClass(R,!0);h=W&&W[u.name];var L=ma;h&&h.identifier&&!0===u.bindToController&&(L=h.instance);r(u.scope,function(a,c){var d=a.match(ea)||[],f=d[3]||c,h="?"==d[2],d=d[1],g,l,k,p;ma.$$isolateBindings[c]=d+f;switch(d){case "@":M.$observe(f,function(a){ma[c]=a});
M.$$observers[f].$$scope=e;M[f]&&(L[c]=b(M[f])(e));break;case "=":if(h&&!M[f])break;l=q(M[f]);p=l.literal?ra:function(a,b){return a===b||a!==a&&b!==b};k=l.assign||function(){g=L[c]=l(e);throw ka("nonassign",M[f],u.name);};g=L[c]=l(e);h=e.$watch(q(M[f],function(a){p(a,L[c])||(p(a,g)?k(e,a=L[c]):L[c]=a);return g=a}),null,l.literal);ma.$on("$destroy",h);break;case "&":l=q(M[f]);L[c]=function(a){return l(e,a)};break;default:throw ka("iscp",u.name,c,a);}})}W&&(r(W,function(a){a()}),W=null);h=0;for(v=g.length;h<
v;h++)z=g[h],Fc(z,z.isolateScope?ma:e,R,M,z.require&&O(z.directiveName,z.require,R,T),$);h=e;u&&(u.template||null===u.templateUrl)&&(h=ma);a&&a(h,f.childNodes,s,k);for(h=l.length-1;0<=h;h--)z=l[h],Fc(z,z.isolateScope?ma:e,R,M,z.require&&O(z.directiveName,z.require,R,T),$)}k=k||{};for(var z=-Number.MAX_VALUE,w,N=k.controllerDirectives,W,u=k.newIsolateScopeDirective,Z=k.templateDirective,ea=k.nonTlbTranscludeDirective,y=!1,F=!1,B=k.hasElementTranscludeDirective,ca=d.$$element=x(c),I,ha,J,P=e,za,K=0,
ya=a.length;K<ya;K++){I=a[K];var ub=I.$$start,V=I.$$end;ub&&(ca=T(c,ub,V));J=s;if(z>I.priority)break;if(J=I.scope)I.templateUrl||(S(J)?(Q("new/isolated scope",u||w,I,ca),u=I):Q("new/isolated scope",u,I,ca)),w=w||I;ha=I.name;!I.templateUrl&&I.controller&&(J=I.controller,N=N||{},Q("'"+ha+"' controller",N[ha],I,ca),N[ha]=I);if(J=I.transclude)y=!0,I.$$tlb||(Q("transclusion",ea,I,ca),ea=I),"element"==J?(B=!0,z=I.priority,J=ca,ca=d.$$element=x(Y.createComment(" "+ha+": "+d[ha]+" ")),c=ca[0],M(f,Va.call(J,
0),c),P=C(J,e,z,h&&h.name,{nonTlbTranscludeDirective:ea})):(J=x(Mb(c)).contents(),ca.empty(),P=C(J,e));if(I.template)if(F=!0,Q("template",Z,I,ca),Z=I,J=E(I.template)?I.template(ca,d):I.template,J=X(J),I.replace){h=I;J=Kb.test(J)?x(U(I.templateNamespace,da(J))):[];c=J[0];if(1!=J.length||1!==c.nodeType)throw ka("tplrt",ha,"");M(f,ca,c);ya={$attr:{}};J=L(c,[],ya);var aa=a.splice(K+1,a.length-(K+1));u&&$(J);a=a.concat(J).concat(aa);G(d,ya);ya=a.length}else ca.html(J);if(I.templateUrl)F=!0,Q("template",
Z,I,ca),Z=I,I.replace&&(h=I),A=Ye(a.splice(K,a.length-K),ca,d,f,y&&P,g,l,{controllerDirectives:N,newIsolateScopeDirective:u,templateDirective:Z,nonTlbTranscludeDirective:ea}),ya=a.length;else if(I.compile)try{za=I.compile(ca,d,P),E(za)?v(null,za,ub,V):za&&v(za.pre,za.post,ub,V)}catch(ba){p(ba,ta(ca))}I.terminal&&(A.terminal=!0,z=Math.max(z,I.priority))}A.scope=w&&!0===w.scope;A.transcludeOnThisElement=y;A.elementTranscludeOnThisElement=B;A.templateOnThisElement=F;A.transclude=P;k.hasElementTranscludeDirective=
B;return A}function $(a){for(var b=0,c=a.length;b<c;b++)a[b]=ec(a[b],{$$isolateScope:!0})}function ea(b,d,e,f,h,g,l){if(d===h)return null;h=null;if(c.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var v=0,q=d.length;v<q;v++)try{n=d[v],(f===s||f>n.priority)&&-1!=n.restrict.indexOf(e)&&(g&&(n=ec(n,{$$start:g,$$end:l})),b.push(n),h=n)}catch(O){p(O)}}return h}function G(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),
a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(W(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Ye(a,b,c,d,e,f,h,g){var k=[],p,n,v=b[0],q=a.shift(),O=B({},q,{templateUrl:null,transclude:null,replace:null,$$originalDirective:q}),t=E(q.templateUrl)?q.templateUrl(b,c):q.templateUrl,z=q.templateNamespace;b.empty();l(A.getTrustedResourceUrl(t)).then(function(l){var A,
w;l=X(l);if(q.replace){l=Kb.test(l)?x(U(z,da(l))):[];A=l[0];if(1!=l.length||1!==A.nodeType)throw ka("tplrt",q.name,t);l={$attr:{}};M(d,b,A);var C=L(A,[],l);S(q.scope)&&$(C);a=C.concat(a);G(c,l)}else A=v,b.html(l);a.unshift(O);p=u(a,A,c,e,b,q,f,h,g);r(d,function(a,c){a==A&&(d[c]=b[0])});for(n=Z(b[0].childNodes,e);k.length;){l=k.shift();w=k.shift();var R=k.shift(),T=k.shift(),C=b[0];if(w!==v){var ea=w.className;g.hasElementTranscludeDirective&&q.replace||(C=Mb(A));M(R,x(w),C);W(x(C),ea)}w=p.transcludeOnThisElement?
N(l,p.transclude,T):T;p(n,l,C,d,w)}k=null});return function(a,b,c,d,e){a=e;k?(k.push(b),k.push(c),k.push(d),k.push(a)):(p.transcludeOnThisElement&&(a=N(b,p.transclude,e)),p(n,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Q(a,b,c,d){if(b)throw ka("multidir",b.name,c.name,a,ta(d));}function P(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&C.$$addBindingClass(a);return function(a,
c){var e=c.parent();b||C.$$addBindingClass(e);C.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function U(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function za(a,b){if("srcdoc"==b)return A.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return A.RESOURCE_URL}function ya(a,c,d,e,h){var l=b(d,!0);
if(l){if("multiple"===e&&"select"===pa(a))throw ka("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ka("nodomevents");if(l=b(k[e],!0,za(a,e),f[e]||h))k[e]=l(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(l,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function M(a,b,c){var d=b[0],e=b.length,f=d.parentNode,h,g;if(a)for(h=0,g=a.length;h<g;h++)if(a[h]==
d){a[h++]=c;g=h+e-1;for(var l=a.length;h<l;h++,g++)g<l?a[h]=a[g]:delete a[h];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);x(c).data(x(d).data());ua?(Ib=!0,ua.cleanData([d])):delete x.cache[d[x.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],x(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function ga(a,b){return B(function(){return a.apply(null,arguments)},a,b)}function Fc(a,b,c,d,e,f){try{a(b,c,d,e,f)}catch(h){p(h,ta(c))}}
var Sb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Sb.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Gc(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=Gc(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,c,d){var e=this.$$element[0],f=Ac(e,a),
h=Se(e,a),e=a;f?(this.$$element.prop(a,b),d=f):h&&(this[h]=b,e=h);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=Wa(a,"-"));f=pa(this.$$element);if("a"===f&&"href"===a||"img"===f&&"src"===a)this[a]=b=z(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(a=this.$$observers)&&r(a[e],function(a){try{a(b)}catch(c){p(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);v.$evalAsync(function(){e.$$inter||
b(c[a])});return function(){Ia(e,b)}}};var ha=b.startSymbol(),V=b.endSymbol(),X="{{"==ha||"}}"==V?Fa:function(a){return a.replace(/\{\{/g,ha).replace(/}}/g,V)},J=/^ngAttr[A-Z]/;C.$$addBindingInfo=h?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:y;C.$$addBindingClass=h?function(a){W(a,"ng-binding")}:y;C.$$addScopeInfo=h?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:y;C.$$addScopeClass=h?function(a,b){W(a,b?"ng-isolate-scope":
"ng-scope")}:y;return C}]}function va(b){return Za(b.replace(Ze,""))}function Gc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function oe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,"controller");S(a)?B(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!S(a.$scope))throw Q("$controller")("noscp",
d,b);a.$scope[b]=c}return function(g,h,m,k){var n,p,l;m=!0===m;k&&D(k)&&(l=k);D(g)&&(k=g.match(c),p=k[1],l=l||k[3],g=b.hasOwnProperty(p)?b[p]:lc(h.$scope,p,!0)||(a?lc(e,p,!0):s),kb(g,p,!0));if(m)return m=function(){},m.prototype=(H(g)?g[g.length-1]:g).prototype,n=new m,l&&f(h,l,n,p||g.name),B(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:l});n=d.instantiate(g,h,p);l&&f(h,l,n,p||g.name);return n}}]}function pe(){this.$get=["$window",function(b){return x(b.document)}]}function qe(){this.$get=
["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Hc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(da(b.substr(0,e)));d=da(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Ic(b){var a=S(b)?b:s;return function(c){a||(a=Hc(b));return c?a[K(c)]||null:a}}function Jc(b,a,c){if(E(c))return c(b,a);r(c,function(c){b=c(b,a)});return b}function te(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},
e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=gc(d)));return d}],transformRequest:[function(a){return S(a)&&"[object File]"!==Ha.call(a)&&"[object Blob]"!==Ha.call(a)?sa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:qa(d),put:qa(d),patch:qa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=!1;this.useApplyAsync=function(a){return G(a)?(f=!!a,this):f};var g=this.interceptors=[];this.$get=["$httpBackend","$browser",
"$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,p,l){function q(a){function b(a){var d=B({},a,{data:Jc(a.data,a.headers,c.transformResponse)});a=a.status;return 200<=a&&300>a?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=B({},a.headers),d,f,b=B({},b.common,b[K(a.method)]);a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){E(c)&&(b=c(),null!=
b?a[d]=b:delete a[d])})})(c);return c}(a);B(c,a);c.headers=d;c.method=mb(c.method);var f=[function(a){d=a.headers;var c=Jc(a.data,Ic(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===K(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],h=p.when(c);for(r(A,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=
f.shift();var g=f.shift(),h=h.then(a,g)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,c)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,c)});return h};return h}function t(c,g,l){function k(a,b,c,e){function h(){A(b,a,c,e)}R&&(200<=a&&300>a?R.put($,[a,b,Hc(c),e]):R.remove($));f?d.$applyAsync(h):(h(),d.$$phase||d.$apply())}function A(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?r.resolve:r.reject)({data:a,status:b,headers:Ic(d),config:c,statusText:e})}
function t(){var a=Ca(q.pendingRequests,c);-1!==a&&q.pendingRequests.splice(a,1)}var r=p.defer(),T=r.promise,R,u,$=v(c.url,c.params);q.pendingRequests.push(c);T.then(t,t);!c.cache&&!e.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=S(c.cache)?c.cache:S(e.cache)?e.cache:w);if(R)if(u=R.get($),G(u)){if(u&&E(u.then))return u.then(t,t),u;H(u)?A(u[1],u[0],qa(u[2]),u[3]):A(u,200,{},"OK")}else R.put($,T);F(u)&&((u=Kc(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(l[c.xsrfHeaderName||
e.xsrfHeaderName]=u),a(c.method,$,g,k,l,c.timeout,c.withCredentials,c.responseType));return T}function v(a,b){if(!b)return a;var c=[];ld(b,function(a,b){null===a||F(a)||(H(a)||(a=[a]),r(a,function(a){S(a)&&(ia(a)?a=a.toISOString():S(a)&&(a=sa(a)));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),A=[];r(g,function(a){A.unshift(D(a)?l.get(a):l.invoke(a))});q.pendingRequests=[];(function(a){r(arguments,function(a){q[a]=function(b,c){return q(B(c||
{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){q[a]=function(b,c,d){return q(B(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");q.defaults=e;return q}]}function $e(b){if(8>=aa&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw Q("$httpBackend")("noxhr");}function ue(){this.$get=["$browser","$window","$document",function(b,
a,c){return af(b,$e,b.defer,a.angular.callbacks,c[0])}]}function af(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,q="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),q=a.type,g="error"===a.type?404:200);c&&c(g,q)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);
return n}return function(e,h,m,k,n,p,l,q){function t(){w=-1;O&&O();z&&z.abort()}function v(a,d,e,f,g){C&&c.cancel(C);O=z=null;0===d&&(d=e?200:"file"==Aa(h).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(y)}var w;b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==K(e)){var A="_"+(d.counter++).toString(36);d[A]=function(a){d[A].data=a;d[A].called=!0};var O=f(h.replace("JSON_CALLBACK","angular.callbacks."+A),A,function(a,b){v(k,a,d[A].data,"",b);d[A]=y})}else{var z=
a(e);z.open(e,h,!0);r(n,function(a,b){G(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null,c="";-1!==w&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);-1===w&&10>aa||(c=z.statusText);v(k,w||z.status,b,a,c)}};l&&(z.withCredentials=!0);if(q)try{z.responseType=q}catch(W){if("json"!==q)throw W;}z.send(m||null)}if(0<p)var C=c(t,p);else p&&E(p.then)&&p.then(t)}}function re(){var b="{{",a="}}";this.startSymbol=function(a){return a?
(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,q,t){function v(c){return c.replace(k,b).replace(n,a)}function w(a){try{var b;var c=q?e.getTrusted(q,a):e.valueOf(a);if(null==c)b="";else{switch(typeof c){case "string":break;case "number":c=""+c;break;default:c=sa(c)}b=c}return b}catch(h){a=Tb("interr",f,h.toString()),d(a)}}t=!!t;for(var A,O,z=0,r=[],C=[],Z=f.length,N=[],L=[];z<
Z;)if(-1!=(A=f.indexOf(b,z))&&-1!=(O=f.indexOf(a,A+h)))z!==A&&N.push(v(f.substring(z,A))),z=f.substring(A+h,O),r.push(z),C.push(c(z,w)),z=O+m,L.push(N.length),N.push("");else{z!==Z&&N.push(v(f.substring(z)));break}if(q&&1<N.length)throw Tb("noconcat",f);if(!g||r.length){var T=function(a){for(var b=0,c=r.length;b<c;b++){if(t&&F(a[b]))return;N[L[b]]=a[b]}return N.join("")};return B(function(a){var b=0,c=r.length,e=Array(c);try{for(;b<c;b++)e[b]=C[b](a);return T(e)}catch(h){a=Tb("interr",f,h.toString()),
d(a)}},{exp:f,expressions:r,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(C,function(c,e){var f=T(c);E(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,m=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function se(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,m,k){var n=a.setInterval,p=a.clearInterval,l=0,q=G(k)&&!k,t=(q?d:c).defer(),
v=t.promise;m=G(m)?m:0;v.then(null,null,e);v.$$intervalId=n(function(){t.notify(l++);0<m&&l>=m&&(t.resolve(l),p(v.$$intervalId),delete f[v.$$intervalId]);q||b.$apply()},h);f[v.$$intervalId]=t;return v}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,
maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),
AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a",short:"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Ub(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ib(b[a]);return b.join("/")}function Lc(b,a,c){b=Aa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=V(b.port)||bf[b.protocol]||null}function Mc(b,a,c){var d="/"!==b.charAt(0);d&&(b=
"/"+b);b=Aa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ic(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function ab(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Vb(b){return b.substr(0,ab(b).lastIndexOf("/")+1)}function Nc(b,a){this.$$html5=!0;a=a||"";var c=Vb(b);Lc(b,this,b);this.$$parse=function(a){var e=
wa(c,a);if(!D(e))throw vb("ipthprfx",a,c);Mc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Gb(this.$$search),b=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==s?(g=f,g=(f=wa(a,f))!==s?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Wb(b,
a){var c=Vb(b);Lc(b,this,b);this.$$parse=function(d){var e=wa(b,d)||wa(c,d),e="#"==e.charAt(0)?wa(a,e):this.$$html5?e:"";if(!D(e))throw vb("ihshprfx",d,a);Mc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Gb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=
function(a,c){return ab(b)==ab(a)?(this.$$parse(a),!0):!1}}function Oc(b,a){this.$$html5=!0;Wb.apply(this,arguments);var c=Vb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==ab(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Gb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Ub(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function wb(b){return function(){return this[b]}}
function Pc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ve(){var b="",a=!1;this.hashPrefix=function(a){return G(a)?(b=a,this):b};this.html5Mode=function(b){return G(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();if(a){if(!m)throw vb("nobase");m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/");
e=e.history?Nc:Oc}else m=ab(k),e=Wb;h=new e(m,"#"+b);h.$$parseLinkUrl(k,k);var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=x(a.target);"a"!==pa(b[0]);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");S(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Aa(e.animVal).href);n.test(e)||!e||b.attr("target")||a.isDefaultPrevented()||!h.$$parseLinkUrl(e,g)||(a.preventDefault(),h.absUrl()!=d.url()&&
(c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),b=h.$$replace;p&&a==h.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),
b),g(a))}));h.$$replace=!1;return p});return h}]}function we(){var b=!0,a=this;this.debugEnabled=function(a){return G(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function na(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw oa("isecfld",a);return b}function Oa(b,a){if(b){if(b.constructor===b)throw oa("isecfn",a);if(b.window===b)throw oa("isecwindow",a);if(b.children&&(b.nodeName||
b.prop&&b.attr&&b.find))throw oa("isecdom",a);if(b===Object)throw oa("isecobj",a);}return b}function xb(b,a,c,d){a=a.split(".");for(var e,f=0;1<a.length;f++){e=na(a.shift(),d);var g=b[e];g||(g={},b[e]=g);b=g}e=na(a.shift(),d);Oa(b,d);Oa(b[e],d);return b[e]=c}function Qc(b,a,c,d,e,f){na(b,f);na(a,f);na(c,f);na(d,f);na(e,f);return function(f,h){var m=h&&h.hasOwnProperty(b)?h:f;if(null==m)return m;m=m[b];if(!a)return m;if(null==m)return s;m=m[a];if(!c)return m;if(null==m)return s;m=m[c];if(!d)return m;
if(null==m)return s;m=m[d];return e?null==m?s:m=m[e]:m}}function Rc(b,a,c){var d=Sc[b];if(d)return d;var e=b.split("."),f=e.length;if(a.csp)d=6>f?Qc(e[0],e[1],e[2],e[3],e[4],c):function(a,b){var d=0,g;do g=Qc(e[d++],e[d++],e[d++],e[d++],e[d++],c)(a,b),b=s,a=g;while(d<f);return g};else{var g="";r(e,function(a,b){na(a,c);g+="if(s == null) return undefined;\ns="+(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a+";\n"});g+="return s;";a=new Function("s","l",g);a.toString=fa(g);d=a}return Sc[b]=d}function xe(){var b=
Object.create(null),a={csp:!1};this.$get=["$filter","$sniffer",function(c,d){function e(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);G(a)&&d.$$postDigest(function(){G(f)&&e()})},c)}function f(a,b,c,d){function e(a){var b=!0;r(a,function(a){G(a)||(b=!1)});return b}var f;return f=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(a)&&f()})},c)}function g(a,b,c,d){var e;return e=
a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function h(a,b){if(!b)return a;var c=function(c,d){var e=a(c,d),f=b(e,c,d);return G(e)?f:e};c.$$watchDelegate=a.$$watchDelegate;return c}a.csp=d.csp;return function(d,k){var n,p,l;switch(typeof d){case "string":return l=d=d.trim(),n=b[l],n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(p=!0,d=d.substring(2)),n=new Xb(a),n=(new bb(n,c,a)).parse(d),n.constant?n.$$watchDelegate=g:p&&(n.$$watchDelegate=n.literal?f:e),b[l]=
n),h(n,k);case "function":return h(d,k);default:return h(y,k)}}}]}function ze(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Tc(function(a){b.$evalAsync(a)},a)}]}function Ae(){this.$get=["$browser","$exceptionHandler",function(b,a){return Tc(function(a){b.defer(a)},a)}]}function Tc(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=s;for(var f=0,h=e.length;f<h;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(g){d.reject(g),a(g)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=Q("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(S(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(h){e[1](h),a(h)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,h=d.length;f<h;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?
b(c):c)}catch(g){a(g)}}})}};var m=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return m(e,!1)}return d&&E(d.then)?d.then(function(){return m(a,b)},function(a){return m(a,!1)}):m(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function q(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof q))return new q(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function Je(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||
b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function ye(){var b=10,a=Q("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(e,f,g,h){function m(){this.$id=++fb;this.$$phase=this.$parent=this.$$watchers=
this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={};this.$$applyAsyncQueue=[]}function k(b){if(t.$$phase)throw a("inprog",t.$$phase);t.$$phase=b}function n(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}function l(){for(var a=t.$$applyAsyncQueue;a.length;)try{a.shift()()}catch(b){f(b)}d=
null}function q(){null===d&&(d=h.defer(function(){t.$apply(l)}))}m.prototype={constructor:m,$new:function(a){a?(a=new m,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++fb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),a=new this.$$ChildScope);a["this"]=a;a.$parent=
this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;E(b)||(h.fn=y);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Ia(f,h);c=null}},$watchGroup:function(a,b){function c(){g=!1;k?(k=!1,b(e,e,h)):b(e,d,h)}var d=Array(a.length),e=Array(a.length),
f=[],h=this,g=!1,k=!0;if(!a.length){var l=!0;h.$evalAsync(function(){l&&b(e,e,h)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=h.$watch(a,function(a,f){e[b]=a;d[b]=f;g||(g=!0,h.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,k=0,l=g(a,function(a){d=a;var b,c,f,h;if(S(d))if(eb(d))for(e!==m&&(e=m,q=e.length=0,k++),a=d.length,
q!==a&&(k++,e.length=q=a),b=0;b<a;b++)h=e[b],f=d[b],c=h!==h&&f!==f,c||h===f||(k++,e[b]=f);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,f=d[b],h=e[b],b in e?(c=h!==h&&f!==f,c||h===f||(k++,e[b]=f)):(q++,e[b]=f,k++));if(q>a)for(b in k++,e)d.hasOwnProperty(b)||(q--,delete e[b])}else e!==d&&(e=d,k++);return k}),m=[],n={},p=!0,q=0;return this.$watch(l,function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(S(d))if(eb(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f=
{},d)Fb.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var e,g,m,n,q=this.$$asyncQueue,r=this.$$postDigestQueue,C,s,N=b,L,T=[],R,u,$;k("$digest");h.$$checkUrlChange();this===t&&null!==d&&(h.defer.cancel(d),l());c=null;do{s=!1;for(L=this;q.length;){try{$=q.shift(),$.scope.$eval($.expression)}catch(G){f(G)}c=null}a:do{if(n=L.$$watchers)for(C=n.length;C--;)try{if(e=n[C])if((g=e.get(L))!==(m=e.last)&&!(e.eq?ra(g,m):"number"===typeof g&&"number"===typeof m&&isNaN(g)&&isNaN(m)))s=!0,c=e,e.last=e.eq?
Ja(g,null):g,e.fn(g,m===p?g:m,L),5>N&&(R=4-N,T[R]||(T[R]=[]),u=E(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,u+="; newVal: "+sa(g)+"; oldVal: "+sa(m),T[R].push(u));else if(e===c){s=!1;break a}}catch(x){f(x)}if(!(n=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(n=L.$$nextSibling);)L=L.$parent}while(L=n);if((s||q.length)&&!N--)throw t.$$phase=null,a("infdig",b,sa(T));}while(s||q.length);for(t.$$phase=null;r.length;)try{r.shift()()}catch(y){f(y)}},$destroy:function(){if(!this.$$destroyed){var a=
this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==t){for(var b in this.$$listenerCount)n(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null;
this.$$listeners={};this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[];this.$destroy=this.$digest=this.$apply=y;this.$on=this.$watch=this.$watchGroup=function(){return y}}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){t.$$phase||t.$$asyncQueue.length||h.defer(function(){t.$$asyncQueue.length&&t.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{t.$$phase=
null;try{t.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.$$applyAsyncQueue.push(b);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Ca(c,b)]=null;n(e,1,a)}},$emit:function(a,b){var c=[],d,e=this,h=!1,g={name:a,targetScope:e,stopPropagation:function(){h=!0},preventDefault:function(){g.defaultPrevented=
!0},defaultPrevented:!1},k=hb([g],arguments,1),l,m;do{d=e.$$listeners[a]||c;g.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(h)return g.currentScope=null,g;e=e.$parent}while(e);g.currentScope=null;return g},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var h=hb([e],arguments,1),g,k;c=d;){e.currentScope=
c;d=c.$$listeners[a]||[];g=0;for(k=d.length;g<k;g++)if(d[g])try{d[g].apply(null,h)}catch(l){f(l)}else d.splice(g,1),g--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var t=new m;return t}]}function Bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return G(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=
function(b){return G(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!aa||8<=aa)if(f=Aa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function cf(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(gb(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function Uc(b){var a=
[];G(b)&&r(b,function(b){a.push(cf(b))});return a}function Ce(){this.SCE_CONTEXTS=la;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Uc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Uc(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Kc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};
b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===
e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===la.RESOURCE_URL){var g=Aa(e.toString()),p,l,q=!1;p=0;for(l=b.length;p<l;p++)if(d(b[p],g)){q=!0;break}if(q)for(p=0,l=a.length;p<l;p++)if(d(a[p],g)){q=!1;break}if(q)return e;throw Ba("insecurl",e.toString());}if(c===la.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Be(){var b=!0;this.enabled=function(a){arguments.length&&
(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw Ba("iequirks");var e=qa(la);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Fa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:a(c,function(a){return e.getTrusted(b,a)})};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(la,function(a,b){var c=K(b);e[Za("parse_as_"+
c)]=function(b){return f(a,b)};e[Za("get_trusted_"+c)]=function(b){return g(a,b)};e[Za("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function De(){this.$get=["$window","$document",function(b,a){var c={},d=V((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,n=!1,p=!1;if(k){for(var l in k)if(n=m.exec(l)){h=n[0];h=h.substr(0,1).toUpperCase()+h.substr(1);
break}h||(h="WebkitOpacity"in k&&"webkit");n=!!("transition"in k||h+"Transition"in k);p=!!("animation"in k||h+"Animation"in k);!d||n&&p||(n=D(f.body.style.webkitTransition),p=D(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==aa)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Xa(),vendorPrefix:h,transitions:n,animations:p,android:d,msie:aa,msieDocumentMode:g}}]}
function Fe(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){function g(){h.totalPendingRequests--;if(!f)throw ka("tpload",e);return c.reject()}var h=d;h.totalPendingRequests++;return a.get(e,{cache:b}).then(function(a){a=a.data;if(!a||0===a.length)return g();h.totalPendingRequests--;b.put(e,a);return a},g)}d.totalPendingRequests=0;return d}]}function Ge(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");
var g=[];r(a,function(a){var d=xa.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+b+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var m=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(m.length)return m}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}
function He(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,m,k){var n=G(k)&&!k,p=(n?d:c).defer(),l=p.promise;m=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},m);l.$$timeoutId=m;g[m]=p;return l}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b,a){var c=b;
aa&&(X.setAttribute("href",c),c=X.href);X.setAttribute("href",c);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function Kc(b){b=D(b)?Aa(b):b;return b.protocol===Vc.protocol&&b.host===Vc.host}function Ie(){this.$get=fa(P)}function tc(b){function a(c,d){if(S(c)){var e={};r(c,function(b,
c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",Wc);a("date",Xc);a("filter",df);a("json",ef);a("limitTo",ff);a("lowercase",gf);a("number",Yc);a("orderBy",Zc);a("uppercase",hf)}function df(){return function(b,a,c){if(!H(b))return b;var d=typeof c,e=[];e.check=function(a,b){for(var c=0;c<e.length;c++)if(!e[c](a,b))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return xa.equals(a,
b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;
case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h,g)&&d.push(h)}return d}}function Wc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return null==
b?b:$c(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Yc(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:$c(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function $c(b,a,c,d,e){if(!isFinite(b)||S(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?(g="0",b=0):(h=g,k=!0)}if(k)0<e&&-1<b&&1>b&&(h=b.toFixed(e));else{g=(g.split(ad)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,
g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);b=(""+b).split(ad);g=b[0];b=b[1]||"";var n=0,p=a.lgSize,l=a.gSize;if(g.length>=p+l)for(n=g.length-p,k=0;k<n;k++)0===(n-k)%l&&0!==k&&(h+=c),h+=g.charAt(k);for(k=n;k<g.length;k++)0===(g.length-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function yb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<
a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function ba(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return yb(e,a,d)}}function zb(b,a){return function(c,d){var e=c["get"+b](),f=mb(a?"SHORT"+b:b);return d[f][e]}}function bd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function cd(b){return function(a){var c=bd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);
return yb(a,b)}}function Xc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=V(b[9]+b[10]),g=V(b[9]+b[11]));h.call(a,V(b[1]),V(b[2])-1,V(b[3]));f=V(b[4]||0)-f;g=V(b[5]||0)-g;h=V(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],
m,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=jf.test(c)?V(c):a(c));Ga(c)&&(c=new Date(c));if(!ia(c))return c;for(;e;)(k=kf.exec(e))?(h=hb(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){m=lf[a];g+=m?m(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ef(){return function(b){return sa(b,!0)}}function ff(){return function(b,a){if(!H(b)&&!D(b))return b;a=Infinity===
Math.abs(Number(a))?Number(a):V(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Zc(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(ia(a)&&ia(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}
if(!H(a)||!c)return a;c=H(c)?c:[c];c=pd(c,function(a){var c=!1,d=a||Fa;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var h=d();return e(function(a,b){return f(a[h],b[h])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ea(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return fa(b)}
function dd(b,a,c,d){function e(a,c){c=c?"-"+Wa(c,"-"):"";d.removeClass(b,(a?Pa:Qa)+c);d.addClass(b,(a?Qa:Pa)+c)}var f=this,g=b.parent().controller("form")||Ab,h=0,m=0,k=[],n=f.$error={};f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;g.$addControl(f);b.addClass(Ra);e(!0);f.$rollbackViewValue=function(){r(k,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(k,function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");
k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];f.$$clearControlValidity(a);Ia(k,a)};f.$$clearControlValidity=function(a){function b(c,d){f.$setValidity(d,!0,a)}r(f.$pending,b);r(n,b);g.$$clearControlValidity(f)};f.$$setPending=function(a,b){var c=f.$pending&&f.$pending[a];c&&-1!=Ca(c,b)||(m++,f.$valid=f.$invalid=s,f.$pending=f.$pending||{},c||(c=f.$pending[a]=[]),c.push(b),g.$$setPending(a,f))};f.$setValidity=function(a,b,c){var d=n[a],k,
r=f.$pending&&f.$pending[a];r&&(k=0<=Ca(r,c))&&(Ia(r,c),m--,0===r.length&&delete f.$pending[a]);if(r=f.$pending&&0===m)f.$pending=s;if(b){if(d||k)(d&&Ia(d,c),d&&d.length)||(n[a]&&h--,h?r&&(e(!1),f.$valid=!1,f.$invalid=!0):f.$pending||(e(b),f.$valid=!0,f.$invalid=!1),n[a]=!1,e(!0,a),g.$setValidity(a,!0,f))}else{f.$pending||(f.$valid=!1,f.$invalid=!0);h||e(b);if(d){if(-1!=Ca(d,c))return}else n[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c)}};f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,
Bb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Bb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(k,function(a){a.$setPristine()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;g.$setSubmitted()}}function Yb(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function cb(b,a,c,d,e,f){var g=a.prop("validity"),h=a[0].placeholder,m={},k=K(a[0].type);d.$$validityState=g;if(!e.android){var n=!1;a.on("compositionstart",
function(a){n=!0});a.on("compositionend",function(){n=!1;p()})}var p=function(e){if(!n){var f=a.val(),l=e&&e.type;if(aa&&"input"===(e||m).type&&a[0].placeholder!==h)h=a[0].placeholder;else{"password"===k||c.ngTrim&&"false"===c.ngTrim||(f=da(f));var p=g&&d.$$hasNativeValidators;if(d.$viewValue!==f||""===f&&p)b.$$phase?d.$setViewValue(f,l,p):b.$apply(function(){d.$setViewValue(f,l,p)})}}};if(e.hasEvent("input"))a.on("input",p);else{var l,q=function(a){l||(l=f.defer(function(){p(a);l=null}))};a.on("keydown",
function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||q(a)});if(e.hasEvent("paste"))a.on("paste cut",q)}a.on("change",p);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Cb(b,a){return function(c){var d;return ia(c)?c:D(c)&&(b.lastIndex=0,c=b.exec(c))?(c.shift(),d={yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0},r(c,function(b,c){c<a.length&&(d[a[c]]=+b)}),new Date(d.yyyy,d.MM-1,d.dd,d.HH,d.mm,d.ss||0)):NaN}}function db(b,a,c,d){return function(e,f,g,h,m,k,n){Db(e,f,g,h);
cb(e,f,g,h,m,k);var p=h&&h.$options&&h.$options.timezone;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b),"UTC"===p&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):s});h.$formatters.push(function(a){return ia(a)?n("date")(a,d,p):""});g.min&&(h.$validators.min=function(a){return h.$isEmpty(a)||F(g.min)||c(a)>=c(g.min)});g.max&&(h.$validators.max=function(a){return h.$isEmpty(a)||F(g.max)||c(a)<=c(g.max)})}}function Db(b,a,c,d){(d.$$hasNativeValidators=
S(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput||c.typeMismatch?s:b})}function ed(b,a,c,d,e){if(G(d)){b=b(d);if(!b.constant)throw Q("ngModel")("constexpr",c,d);return b(a)}return e}function Zb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(D(a))return a.split(" ");if(S(a)){var b=[];r(a,function(a,c){a&&
(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var l=e(b||[]);if(!n){var k=m(l,1);h.$addClass(k)}else if(!ra(b,n)){var r=e(n),k=d(l,r),l=d(r,l),k=m(k,1),l=m(l,-1);k&&k.length&&c.addClass(g,k);l&&l.length&&c.removeClass(g,l)}}n=qa(b)}var n;f.$watch(h[b],
k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}var mf=/^\/(.+)\/([a-z]*)$/,K=function(b){return D(b)?b.toLowerCase():b},Fb=Object.prototype.hasOwnProperty,mb=function(b){return D(b)?b.toUpperCase():b},aa,x,ua,Va=[].slice,nf=[].push,Ha=Object.prototype.toString,Ua=Q("ng"),xa=P.angular||(P.angular={}),Ya,fb=0;aa=V((/msie (\d+)/.exec(K(navigator.userAgent))||
[])[1]);isNaN(aa)&&(aa=V((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));y.$inject=[];Fa.$inject=[];var H=Array.isArray,da=function(b){return D(b)?b.trim():b},Xa=function(){if(G(Xa.isActive_))return Xa.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Xa.isActive_=b},jb=["ng-","data-ng-","ng:","x-ng-"],vd=/[A-Z]/g,kc=!1,Ib,zd={full:"1.3.0-rc.0",major:1,minor:3,dot:0,codeName:"sonic-boltification"};U.expando=
"ng339";var rb=U.cache={},Re=1;U._data=function(b){return this.cache[b[this.expando]]||{}};var Le=/([\:\-\_]+(.))/g,Me=/^moz([A-Z])/,of={mouseleave:"mouseout",mouseenter:"mouseover"},Lb=Q("jqLite"),Qe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Kb=/<|&#?\w+;/,Oe=/<([\w:]+)/,Pe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=U.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),U(P).on("load",a),this.on("DOMContentLoaded",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?x(this[b]):x(this[this.length+b])},
length:0,push:nf,sort:[].sort,splice:[].splice},tb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){tb[K(b)]=b});var Bc={};r("input select option textarea button form details".split(" "),function(b){Bc[b]=!0});var Cc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngPattern:"pattern"};r({data:Nb,removeData:pb},function(b,a){U[a]=b});r({data:Nb,inheritedData:sb,scope:function(b){return x.data(b,"$scope")||sb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return x.data(b,
"$isolateScope")||x.data(b,"$isolateScopeNoTemplate")},controller:xc,injector:function(b){return sb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ob,css:function(b,a,c){a=Za(a);if(G(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=K(a);if(tb[d])if(G(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:s;else if(G(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,
2),null===b?s:b},prop:function(b,a,c){if(G(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(F(b)){var d=a.nodeType;return 1===d||3===d?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(F(a)){if(b.multiple&&"select"===pa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;ob(b,!0);b.innerHTML=a},empty:yc},function(b,a){U.prototype[a]=function(a,
d){var e,f,g=this.length;if(b!==yc&&(2==b.length&&b!==Ob&&b!==xc?a:d)===s){if(S(a)){for(e=0;e<g;e++)if(b===Nb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:pb,on:function a(c,d,e,f){if(G(f))throw Lb("onargs");if(uc(c)){var g=qb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Te(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],m=g.length;m--;){d=
g[m];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,of[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:wc,one:function(a,c,d){a=x(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;ob(a);r(new U(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&
c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(1===d||11===d){c=new U(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;r(new U(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=x(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:zc,detach:function(a){zc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=
new U(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Qb,removeClass:Pb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Ob(a,c));(f?Qb:Pb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Mb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=qb(a);if(g=(g=g&&g.events)&&
g[e])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:y,type:e,target:a},c.type&&(e=B(e,c)),c=qa(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)})}},function(a,c){U.prototype[c]=function(c,e,f){for(var g,h=0,m=this.length;h<m;h++)F(g)?(g=a(this[h],c,e,f),G(g)&&(g=x(g))):vc(g,a(this[h],c,e,f));return G(g)?g:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});$a.prototype={put:function(a,
c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Ec=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ve=/,/,We=/^\s*(_?)(\S+?)\1\s*$/,Dc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Na=Q("$injector");Hb.$$annotate=Rb;var pf=Q("$animate"),le=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw pf("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback",function(a,d){function e(){f||(f=a.defer(),d(function(){f.resolve();f=null}));return f.promise}var f;return{enter:function(a,c,d){d?d.after(a):c.prepend(a);return e()},leave:function(a){a.remove();return e()},move:function(a,c,d){return this.enter(a,c,d)},addClass:function(a,c){c=D(c)?c:H(c)?c.join(" "):"";r(a,
function(a){Qb(a,c)});return e()},removeClass:function(a,c){c=D(c)?c:H(c)?c.join(" "):"";r(a,function(a){Pb(a,c)});return e()},setClass:function(a,c,d){this.addClass(a,c);this.removeClass(a,d);return e()},enabled:y,cancel:y}}]}],ka=Q("$compile");mc.$inject=["$provide","$$sanitizeUriProvider"];var Ze=/^(x[\:\-_]|data[\:\-_])/i,Tb=Q("$interpolate"),qf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,bf={http:80,https:443,ftp:21},vb=Q("$location");Oc.prototype=Wb.prototype=Nc.prototype={$$html5:!1,$$replace:!1,absUrl:wb("$$absUrl"),
url:function(a,c){if(F(a))return this.$$url;var d=qf.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:wb("$$protocol"),host:wb("$$host"),port:wb("$$port"),path:Pc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=ic(a);else if(S(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw vb("isrcharg");
break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Pc("$$hash",Fa),replace:function(){this.$$replace=!0;return this}};var oa=Q("$parse"),rf=Function.prototype.call,sf=Function.prototype.apply,tf=Function.prototype.bind,Eb=B(Object.create(null),{"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:y,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return G(d)?G(e)?d+e:d:G(e)?e:s},"-":function(a,c,d,e){d=d(a,
c);e=e(a,c);return(G(d)?d:0)-(G(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":y,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}}),uf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Xb=function(a){this.options=a};Xb.prototype={constructor:Xb,lex:function(a){this.text=a;this.index=0;this.ch=s;for(this.tokens=[];this.index<this.text.length;)if(this.ch=
this.text.charAt(this.index),this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch))this.index++;else{a=this.ch+this.peek();var c=a+this.peek(2),d=Eb[this.ch],e=Eb[a],f=Eb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,
text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=G(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw oa("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&
e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}e&&"."===c[c.length-
1]&&(this.index--,c=c.slice(0,-1),e=c.lastIndexOf("."),-1===e&&(e=s));if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(f=Eb[c])d.fn=f,d.constant=!0;else{var m=Rc(c,this.options,this.text);d.fn=B(function(a,c){return m(a,c)},{assign:function(d,e){return xb(d,c,e,a.text)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+
1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=uf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,constant:!0,fn:function(){return d}});return}d+=
g}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=B(function(){return 0},{constant:!0});bb.prototype={constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=
this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.constant&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw oa("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===
this.tokens.length)throw oa("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return B(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,
c,d){return B(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return B(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=
this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){var a=this.expect(),c=this.$filter(a.text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());return fa(function(a,g,h){if(e){e[0]=h;for(h=d.length;h--;)e[h+1]=d[h](a,g);return c.apply(s,e)}return c(h)})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,
d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=
this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),
c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Rc(d,this.options,this.text);return B(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return xb(h,d,g,c.text)}})},objectIndex:function(a){var c=
this,d=this.expression();this.consume("]");return B(function(e,f){var g=a(e,f),h=d(e,f);na(h,c.text);return g?Oa(g[h],c.text):s},{assign:function(e,f,g){var h=na(d(e,g),c.text);(g=Oa(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var m=c?c(g,h):g,k=a(g,h,m)||y;if(f)for(var n=d.length;n--;)f[n]=d[n](g,
h);Oa(m,e);if(k){if(k.constructor===k)throw oa("isecfn",e);if(k===rf||k===sf||k===tf)throw oa("isecff",e);}m=k.apply?k.apply(m,f):k(f[0],f[1],f[2],f[3],f[4]);return Oa(m,e)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return B(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=
[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return B(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Sc=Object.create(null),Ba=Q("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ka=Q("$compile"),X=Y.createElement("a"),
Vc=Aa(P.location.href,!0);tc.$inject=["$provide"];Wc.$inject=["$locale"];Yc.$inject=["$locale"];var ad=".",lf={yyyy:ba("FullYear",4),yy:ba("FullYear",2,0,!0),y:ba("FullYear",1),MMMM:zb("Month"),MMM:zb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:zb("Day"),EEE:zb("Day",!0),a:function(a,c){return 12>
a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(yb(Math[0<a?"floor":"ceil"](a/60),2)+yb(Math.abs(a%60),2))},ww:cd(2),w:cd(1)},kf=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,jf=/^\-?\d+$/;Xc.$inject=["$locale"];var gf=fa(K),hf=fa(mb);Zc.$inject=["$parse"];var Cd=fa({restrict:"E",compile:function(a,c){8>=aa&&(c.href||c.name||c.$set("href",""),a.append(Y.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,
c){var f="[object SVGAnimatedString]"===Ha.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),nb={};r(tb,function(a,c){if("multiple"!=a){var d=va("ng-"+c);nb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(Cc,function(a,c){nb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(mf))){f.$set("ngPattern",new RegExp(e[1],
e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=va("ng-"+a);nb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ha.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),aa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ab={$addControl:y,$removeControl:y,$setValidity:y,$$setPending:y,$setDirty:y,$setPristine:y,$setSubmitted:y,
$$clearControlValidity:y};dd.$inject=["$element","$attrs","$scope","$animate"];var fd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:dd,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(c){a.$apply(function(){g.$commitViewValue();g.$setSubmitted()});c.preventDefault?c.preventDefault():c.returnValue=!1};e[0].addEventListener("submit",h,!1);e.on("$destroy",function(){c(function(){e[0].removeEventListener("submit",h,!1)},0,!1)})}var m=
e.parent().controller("form"),k=f.name||f.ngForm;k&&xb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&xb(a,k,s,k);B(g,Ab)})}}}}}]},Dd=fd(),Qd=fd(!0),vf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,wf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,xf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,gd=/^(\d{4})-(\d{2})-(\d{2})$/,hd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d))?$/,$b=/^(\d{4})-W(\d\d)$/,
id=/^(\d{4})-(\d\d)$/,jd=/^(\d\d):(\d\d)(?::(\d\d))?$/,yf=/(\s+|^)default(\s+|$)/,ac=new Q("ngModel"),kd={text:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);Yb(e)},date:db("date",gd,Cb(gd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":db("datetimelocal",hd,Cb(hd,"yyyy MM dd HH mm ss".split(" ")),"yyyy-MM-ddTHH:mm:ss"),time:db("time",jd,Cb(jd,["HH","mm","ss"]),"HH:mm:ss"),week:db("week",$b,function(a){if(ia(a))return a;if(D(a)){$b.lastIndex=0;var c=$b.exec(a);if(c){a=+c[1];var d=+c[2],c=bd(a),d=7*(d-1);
return new Date(a,0,c.getDate()+d)}}return NaN},"yyyy-Www"),month:db("month",id,Cb(id,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:xf.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Ga(a))throw ac("numfmt",a);a=a.toString()}return a});d.min&&(e.$validators.min=function(a){return e.$isEmpty(a)||F(d.min)||a>=parseFloat(d.min)});d.max&&(e.$validators.max=
function(a){return e.$isEmpty(a)||F(d.max)||a<=parseFloat(d.max)})},url:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);Yb(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||vf.test(d)}},email:function(a,c,d,e,f,g){Db(a,c,d,e);cb(a,c,d,e,f,g);Yb(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||wf.test(d)}},radio:function(a,c,d,e){F(d.name)&&c.attr("name",++fb);c.on("click",function(f){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value,
f&&f.type)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,m){var k=ed(m,a,"ngTrueValue",d.ngTrueValue,!0),n=ed(m,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(d){a.$apply(function(){e.$setViewValue(c[0].checked,d&&d.type)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==k};e.$formatters.push(function(a){return ra(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:y,
button:y,submit:y,reset:y,file:y},nc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:function(f,g,h,m){m[0]&&(kd[K(h.type)]||kd.text)(f,g,h,m[0],c,a,d,e)}}}],Qa="ng-valid",Pa="ng-invalid",Ra="ng-pristine",Bb="ng-dirty",zf=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout",function(a,c,d,e,f,g,h){function m(a,c){c=c?"-"+Wa(c,"-"):"";g.removeClass(e,(a?Pa:Qa)+c);g.addClass(e,(a?Qa:Pa)+c)}this.$modelValue=this.$viewValue=
Number.NaN;this.$validators={};this.$asyncValidators={};this.$validators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var k=f(d.ngModel),n=k.assign,p=null,l=this;this.$$setOptions=function(a){l.$options=a;if(!(n||a&&a.getterSetter))throw ac("nonassign",d.ngModel,ta(e));};this.$render=y;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var q=e.inheritedData("$formController")||
Ab,t=0,v=0,w=this.$error={};e.addClass(Ra).addClass("ng-untouched");m(!0);this.$$clearValidity=function(){g.removeClass(e,"ng-pending");r(l.$error,function(a,c){var d=Wa(c,"-");g.removeClass(e,Qa+d);g.removeClass(e,Pa+d)});l.$pending&&l.$$clearPending();t=0;w=l.$error={};q.$$clearControlValidity(l)};this.$$clearPending=function(){v=0;l.$pending=s;g.removeClass(e,"ng-pending")};this.$$setPending=function(a,c,d){function f(c){return function(){var e=l.$viewValue||"";l.$pending&&l.$pending[a]&&d===e&&
(v--,delete l.$pending[a],l.$setValidity(a,c),0===v&&(l.$$clearPending(),l.$$updateValidModelValue(e),l.$$writeModelToScope()))}}l.$pending=l.$pending||{};xa.isUndefined(l.$pending[a])&&(l.$pending[a]=!0,v++);l.$valid=l.$invalid=s;q.$$setPending(a,l);g.addClass(e,"ng-pending");g.removeClass(e,Pa);g.removeClass(e,Qa);d=d||"";c.then(f(!0),f(!1))};this.$setValidity=function(a,c){if(l.$pending||w[a]!==!c)c?(w[a]&&t--,t||v||(m(!0),l.$valid=!0,l.$invalid=!1)):w[a]||(t++,v||(m(!1),l.$invalid=!0,l.$valid=
!1)),w[a]=!c,m(c,a),q.$setValidity(a,c,l)};this.$setPristine=function(){l.$dirty=!1;l.$pristine=!0;g.removeClass(e,Bb);g.addClass(e,Ra)};this.$setUntouched=function(){l.$touched=!1;l.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){l.$touched=!0;l.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(p);l.$viewValue=l.$$lastCommittedViewValue;l.$render()};this.$validate=function(){if(l.$modelValue===l.$modelValue){var a=
l.$modelValue;l.$$runValidators(l.$$invalidModelValue||l.$modelValue,l.$viewValue);a!==l.$modelValue&&l.$$writeModelToScope()}};this.$$runValidators=function(a,c){function d(e,f){var h=!0;r(e,function(d,e){var g=d(a,c);f(e,g);h=h&&g});return h}l.$pending&&l.$$clearPending();d(l.$validators,function(a,c){l.$setValidity(a,c)})&&d(l.$asyncValidators,function(c,d){if(!d||!E(d.then))throw ac("$asyncValidators",d);l.$$setPending(c,d,a)});l.$$updateValidModelValue(a)};this.$$updateValidModelValue=function(a){l.$modelValue=
l.$valid?a:s;l.$$invalidModelValue=l.$valid?s:a};this.$commitViewValue=function(a){var c=l.$viewValue;h.cancel(p);if(a||l.$$lastCommittedViewValue!==c){l.$$lastCommittedViewValue=c;l.$pristine&&(l.$dirty=!0,l.$pristine=!1,g.removeClass(e,Ra),g.addClass(e,Bb),q.$setDirty());var d;a=c;for(var f=0;f<l.$parsers.length;f++)if(a=l.$parsers[f](a),F(a)){d=!0;break}f=l.$$parserName||"parse";d?(l.$$invalidModelValue=l.$modelValue=s,l.$$clearValidity(),l.$setValidity(f,!1),l.$$writeModelToScope()):l.$modelValue===
a||!F(l.$$invalidModelValue)&&l.$$invalidModelValue==a||(l.$setValidity(f,!0),l.$$runValidators(a,c),l.$$writeModelToScope())}};this.$$writeModelToScope=function(){var d;l.$options&&l.$options.getterSetter&&E(d=k(a))?d(l.$modelValue):n(a,l.$modelValue);r(l.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c,d){l.$viewValue=a;l.$options&&!l.$options.updateOnDefault||l.$$debounceViewValueCommit(c,d)};this.$$debounceViewValueCommit=function(a,c){var d=0,e=l.$options;
e&&G(e.debounce)&&(e=e.debounce,Ga(e)?d=e:Ga(e[a])?d=e[a]:Ga(e["default"])&&(d=e["default"]));h.cancel(p);d?p=h(function(){l.$commitViewValue(c)},d):l.$commitViewValue(c)};a.$watch(function(){var c=k(a);l.$options&&l.$options.getterSetter&&E(c)&&(c=c());if(l.$modelValue!==c&&(F(l.$$invalidModelValue)||l.$$invalidModelValue!=c)){for(var d=l.$formatters,e=d.length,f=c;e--;)f=d[e](f);l.$$runValidators(c,f);l.$viewValue!==f&&(l.$viewValue=l.$$lastCommittedViewValue=f,l.$render())}return c})}],ee=function(){return{restrict:"A",
require:["ngModel","^?form","^?ngModelOptions"],controller:zf,link:{pre:function(a,c,d,e){var f=e[0],g=e[1]||Ab;f.$$setOptions(e[2]&&e[2].$options);g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})},post:function(a,c,d,e){var f=e[0];if(f.$options&&f.$options.updateOn)c.on(f.$options.updateOn,function(c){a.$apply(function(){f.$$debounceViewValueCommit(c&&c.type)})});c.on("blur",function(c){f.$touched||a.$apply(function(){f.$setTouched()})})}}}},ge=fa({restrict:"A",require:"ngModel",
link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){D(a)&&0<a.length&&(a=new RegExp(a));if(a&&!a.test)throw Q("ngPattern")("noregexp",
g,a,ta(c));f=a||s;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||F(f)||f.test(a)}}}}},rc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("maxlength",function(a){f=V(a)||0;e.$validate()});e.$validators.maxlength=function(a,c){return e.$isEmpty(c)||c.length<=f}}}}},qc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=V(a)||0;e.$validate()});e.$validators.minlength=
function(a,c){return e.$isEmpty(c)||c.length>=f}}}}},fe=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?da(f):f;e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?da(a):a)});return c}});e.$formatters.push(function(a){return H(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},Af=/^(true|false|\d+)$/,he=function(){return{restrict:"A",priority:100,compile:function(a,
c){return Af.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ie=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=da(this.$options.updateOn.replace(yf,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Id=["$compile",
function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);c.$watch(f.ngBind,function(a){e.text(a==s?"":a)})}}}}],Kd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);g.$observe("ngBindTemplate",function(a){f.text(a)})}}}}],Jd=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,
f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ld=Zb("",!0),Nd=Zb("Odd",0),Md=Zb("Even",1),Od=Ea({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),Pd=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],sc={},Bf={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=va("ng-"+a);sc[c]=["$parse",function(d){return{restrict:"A",compile:function(e,f){var g=d(f[c]);return function(c,d){var e=K(a);d.on(e,function(a){var d=function(){g(c,{$event:a})};Bf[e]&&c.$$phase?c.$evalAsync(d):c.$apply(d)})}}}}]});var Sd=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(c){c?m||g(function(c,f){m=f;c[c.length++]=Y.createComment(" end ngIf: "+
e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),h&&(k=lb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],Td=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:xa.noop,compile:function(f,g){var h=g.ngInclude||g.src,m=g.onload||"",k=g.autoscroll;return function(f,g,l,q,r){var v=0,s,A,x,z=function(){A&&(A.remove(),A=null);s&&(s.$destroy(),
s=null);x&&(d.leave(x).then(function(){A=null}),A=x,x=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!G(k)||k&&!f.$eval(k)||c()},l=++v;e?(a(e,!0).then(function(a){if(l===v){var c=f.$new();q.template=a;a=r(c,function(a){z();d.enter(a,null,g).then(h)});s=c;x=a;s.$emit("$includeContentLoaded");f.$eval(m)}},function(){l===v&&(z(),f.$emit("$includeContentError"))}),f.$emit("$includeContentRequested")):(z(),q.template=null)})}}}}],je=["$compile",function(a){return{restrict:"ECA",priority:-400,
require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],Ud=Ea({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Vd=Ea({terminal:!0,priority:1E3}),Wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,n=e.$eval(m)||{},p={},l=c.startSymbol(),q=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(n[K(c.replace("when","").replace("Minus",
"-"))]=f.attr(g.$attr[c]))});r(n,function(a,e){p[e]=c(a.replace(d,l+h+"-"+k+q))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in n||(c=a.pluralCat(c-k));return p[c](e)},function(a){f.text(a)})}}}],Xd=["$parse","$animate",function(a,c){var d=Q("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,
$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,m=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],l=k[3],q=k[4],k=n.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!k)throw d("iidexp",n);var t=k[3]||k[1],v=k[2];if(l&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(l)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(l)))throw d("badident",
l);var w,A,G,z,y={$id:Ma};q?w=a(q):(G=function(a,c){return Ma(c)},z=function(a){return a});return function(a,f,g,k,n){w&&(A=function(c,d,e){v&&(y[v]=c);y[t]=d;y.$index=e;return w(a,y)});var q=Object.create(null);a.$watchCollection(p,function(g){var k,p,N=f[0],y,w=Object.create(null),L,F,B,D,H,M,ga;l&&(a[l]=g);if(eb(g))H=g,p=A||G;else{p=A||z;H=[];for(ga in g)g.hasOwnProperty(ga)&&"$"!=ga.charAt(0)&&H.push(ga);H.sort()}L=H.length;ga=Array(L);for(k=0;k<L;k++)if(F=g===H?k:H[k],B=g[F],D=p(F,B,k),q[D])M=
q[D],delete q[D],w[D]=M,ga[k]=M;else{if(w[D])throw r(ga,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",h,D,sa(B));ga[k]={id:D,scope:s,clone:s};w[D]=!0}for(y in q){M=q[y];D=lb(M.clone);c.leave(D);if(D[0].parent)for(k=0,p=D.length;k<p;k++)D[k].$$NG_REMOVED=!0;M.scope.$destroy()}for(k=0;k<L;k++)if(F=g===H?k:H[k],B=g[F],M=ga[k],M.scope){y=N;do y=y.nextSibling;while(y&&y.$$NG_REMOVED);M.clone[0]!=y&&c.move(lb(M.clone),null,x(N));N=M.clone[M.clone.length-1];e(M.scope,k,t,B,v,F,L)}else n(function(a,d){M.scope=
d;var f=m.cloneNode();a[a.length++]=f;c.enter(a,null,x(N));N=f;M.clone=a;w[M.id]=M;e(M.scope,k,t,B,v,F,L)});q=w})}}}}],Yd=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide")})}}}],Rd=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide")})}}}],Zd=Ea(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&
a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),$d=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],m=[],k=[];c.$watch(e.ngSwitch||e.on,function(d){var p,l;p=0;for(l=m.length;p<l;++p)a.cancel(m[p]);p=m.length=0;for(l=k.length;p<l;++p){var q=lb(h[p].clone);k[p].$destroy();(m[p]=a.leave(q)).then(function(){m.splice(p,1)})}h.length=0;k.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),
r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],ae=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),be=Ea({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=
e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),de=Ea({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw Q("ngTransclude")("orphan",ta(c));f(function(a){c.empty();c.append(a)})}}),Ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Cf=Q("ngOptions"),ce=fa({restrict:"A",terminal:!0}),Fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:y};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},n=e,p;m.databound=d.ngModel;m.init=function(a,c,d){n=a;p=d};m.addOption=function(c,d){La(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d[0].hasAttribute("selected")&&(d[0].selected=!0)};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c=
"? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=y})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(B.parent()&&B.remove(),c.val(a),""===a&&y.prop("selected",!0)):F(a)&&y?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){B.parent()&&B.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;
d.$render=function(){var a=new $a(d.$viewValue);r(c.find("option"),function(c){c.selected=G(a.get(c.value))})};a.$watch(function(){ra(e,d.$viewValue)||(e=qa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(){A=!1;var a={"":[]},c=[""],d,k,s,t,w;s=g.$modelValue;t=y(e)||[];var C=n?bc(t):t,F,J,u;J={};u=!1;if(q)if(k=g.$modelValue,x&&H(k))for(u=new $a([]),d=
{},w=0;w<k.length;w++)d[m]=k[w],u.put(x(e,d),k[w]);else u=new $a(k);w=u;var E,K;for(u=0;F=C.length,u<F;u++){k=u;if(n){k=C[u];if("$"===k.charAt(0))continue;J[n]=k}J[m]=t[k];d=p(e,J)||"";(k=a[d])||(k=a[d]=[],c.push(d));q?d=G(w.remove(x?x(e,J):r(e,J))):(x?(d={},d[m]=s,d=x(e,d)===x(e,J)):d=s===r(e,J),w=w||d);E=l(e,J);E=G(E)?E:"";k.push({id:x?x(e,J):n?C[u]:u,label:E,selected:d})}q||(v||null===s?a[""].unshift({id:"",label:"",selected:!w}):w||a[""].unshift({id:"?",label:"",selected:!0}));J=0;for(C=c.length;J<
C;J++){d=c[J];k=a[d];B.length<=J?(s={element:z.clone().attr("label",d),label:k.label},t=[s],B.push(t),f.append(s.element)):(t=B[J],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;u=0;for(F=k.length;u<F;u++)d=k[u],(w=t[u+1])?(E=w.element,w.label!==d.label&&E.text(w.label=d.label),w.id!==d.id&&E.val(w.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",w.selected=d.selected),aa&&E.prop("selected",w.selected))):(""===d.id&&v?K=v:(K=D.clone()).val(d.id).prop("selected",d.selected).attr("selected",
d.selected).text(d.label),t.push({element:K,label:d.label,id:d.id,selected:d.selected}),E?E.after(K):s.element.append(K),E=K);for(u++;t.length>u;)t.pop().element.remove()}for(;B.length>J;)B.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Cf("iexp",t,ta(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),r=c(k[2]?k[1]:m),y=c(k[7]),x=k[8]?c(k[8]):null,B=[[{element:f,label:""}]];v&&(a(v)(e),v.removeClass("ng-scope"),v.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,
c=y(e)||[],d={},k,l,p,t,v,w,u;if(q)for(l=[],t=0,w=B.length;t<w;t++)for(a=B[t],p=1,v=a.length;p<v;p++){if((k=a[p].element)[0].selected){k=k.val();n&&(d[n]=k);if(x)for(u=0;u<c.length&&(d[m]=c[u],x(e,d)!=k);u++);else d[m]=c[k];l.push(r(e,d))}}else if(k=f.val(),"?"==k)l=s;else if(""===k)l=null;else if(x)for(u=0;u<c.length;u++){if(d[m]=c[u],x(e,d)==k){l=r(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=r(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(y,function(){A||(e.$$postDigest(h),A=!0)});
q&&e.$watchCollection(function(){return g.$modelValue},function(){A||(e.$$postDigest(h),A=!0)})}if(m[1]){var l=m[0];m=m[1];var q=h.multiple,t=h.ngOptions,v=!1,y,A=!1,D=x(Y.createElement("option")),z=x(Y.createElement("optgroup")),B=D.clone();h=0;for(var C=g.children(),E=C.length;h<E;h++)if(""===C[h].value){y=v=C.eq(h);break}l.init(m,v,B);q&&(m.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,m):q?n(e,g,m):k(e,g,m,l)}}}}],Hd=["$interpolate",function(a){var c={addOption:y,removeOption:y};return{restrict:"E",
priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound?d.prop("selected",!1):n=c;f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Gd=fa({restrict:"E",terminal:!1});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):
(wd(),yd(xa),x(Y).ready(function(){sd(Y,jc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');

///#source 1 1 /Assets/Scripts/Libs/angular-route.min.js
/*
 AngularJS v1.3.0-rc.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(r,d,z){'use strict';function v(s,h,f){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,e,b,g,u){function w(){k&&(k.remove(),k=null);l&&(l.$destroy(),l=null);n&&(f.leave(n).then(function(){k=null}),k=n,n=null)}function t(){var c=s.current&&s.current.locals;if(d.isDefined(c&&c.$template)){var c=a.$new(),m=s.current;n=u(c,function(c){f.enter(c,null,n||e).then(function(){!d.isDefined(p)||p&&!a.$eval(p)||h()});w()});l=m.scope=c;l.$emit("$viewContentLoaded");
l.$eval(q)}else w()}var l,n,k,p=b.autoscroll,q=b.onload||"";a.$on("$routeChangeSuccess",t);t()}}}function x(d,h,f){return{restrict:"ECA",priority:-400,link:function(a,e){var b=f.current,g=b.locals;e.html(g.$template);var u=d(e.contents());b.controller&&(g.$scope=a,g=h(b.controller,g),b.controllerAs&&(a[b.controllerAs]=g),e.data("$ngControllerController",g),e.children().data("$ngControllerController",g));u(a)}}}r=d.module("ngRoute",["ng"]).provider("$route",function(){function s(a,e){return d.extend(new (d.extend(function(){},
{prototype:a})),e)}function h(a,d){var b=d.caseInsensitiveMatch,g={originalPath:a,regexp:a},f=g.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,e,b){a="?"===b?b:null;b="*"===b?b:null;f.push({name:e,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(b&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");g.regexp=new RegExp("^"+a+"$",b?"i":"");return g}var f={};this.when=function(a,e){f[a]=d.extend({reloadOnSearch:!0},e,a&&h(a,e));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";f[b]=d.extend({redirectTo:a},h(b,e))}return this};this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,e,b,g,h,r,t){function l(){var c=n(),m=q.current;if(c&&m&&c.$$route===m.$$route&&d.equals(c.pathParams,m.pathParams)&&!c.reloadOnSearch&&!p)m.params=c.params,d.copy(m.params,b),a.$broadcast("$routeUpdate",
m);else if(c||m)p=!1,a.$broadcast("$routeChangeStart",c,m),(q.current=c)&&c.redirectTo&&(d.isString(c.redirectTo)?e.path(k(c.redirectTo,c.params)).search(c.params).replace():e.url(c.redirectTo(c.pathParams,e.path(),e.search())).replace()),g.when(c).then(function(){if(c){var a=d.extend({},c.resolve),e,b;d.forEach(a,function(c,b){a[b]=d.isString(c)?h.get(c):h.invoke(c,null,null,b)});d.isDefined(e=c.template)?d.isFunction(e)&&(e=e(c.params)):d.isDefined(b=c.templateUrl)&&(d.isFunction(b)&&(b=b(c.params)),
b=t.getTrustedResourceUrl(b),d.isDefined(b)&&(c.loadedTemplateUrl=b,e=r(b)));d.isDefined(e)&&(a.$template=e);return g.all(a)}}).then(function(e){c==q.current&&(c&&(c.locals=e,d.copy(c.params,b)),a.$broadcast("$routeChangeSuccess",c,m))},function(d){c==q.current&&a.$broadcast("$routeChangeError",c,m,d)})}function n(){var c,a;d.forEach(f,function(b,g){var f;if(f=!a){var h=e.path();f=b.keys;var l={};if(b.regexp)if(h=b.regexp.exec(h)){for(var k=1,n=h.length;k<n;++k){var p=f[k-1],q=h[k];p&&q&&(l[p.name]=
q)}f=l}else f=null;else f=null;f=c=f}f&&(a=s(b,{params:d.extend({},e.search(),c),pathParams:c}),a.$$route=b)});return a||f[null]&&s(f[null],{params:{},pathParams:{}})}function k(a,b){var e=[];d.forEach((a||"").split(":"),function(a,c){if(0===c)e.push(a);else{var d=a.match(/(\w+)(.*)/),f=d[1];e.push(b[f]);e.push(d[2]||"");delete b[f]}});return e.join("")}var p=!1,q={routes:f,reload:function(){p=!0;a.$evalAsync(l)},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),
function(d){f.current.pathParams[d]||(b[d]=a[d])});a=d.extend({},this.current.params,a);e.path(k(this.current.$$route.originalPath,a));e.search(d.extend({},e.search(),b))}else throw y("norout");}};a.$on("$locationChangeSuccess",l);return q}]});var y=d.$$minErr("ngRoute");r.provider("$routeParams",function(){this.$get=function(){return{}}});r.directive("ngView",v);r.directive("ngView",x);v.$inject=["$route","$anchorScroll","$animate"];x.$inject=["$compile","$controller","$route"]})(window,window.angular);

///#source 1 1 /Assets/Scripts/App/oidc.js
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

///#source 1 1 /Assets/Scripts/App/ttIdm.js
/// <reference path="../Libs/angular.min.js" />

(function (angular) {
    var app = angular.module("ttIdm", []);

    function config($httpProvider, OAuthConfig) {
        if (OAuthConfig) {
            function intercept($q, idmTokenManager) {
                return {
                    'request': function (config) {
                        if (idmTokenManager.access_token) {
                            config.headers['Authorization'] = 'Bearer ' + idmTokenManager.access_token;
                        }
                        return config;
                    },
                    'responseError': function (response) {
                        if (response.status === 401) {
                            idmTokenManager.removeToken();
                        }
                        if (response.status === 403) {
                            idmTokenManager.removeToken();
                        }
                        return $q.reject(response);
                    }
                };
            };
            intercept.$inject = ["$q", "idmTokenManager"];
            $httpProvider.interceptors.push(intercept);
        }
    };
    config.$inject = ["$httpProvider", "OAuthConfig"];
    app.config(config);

    function idmTokenManager(TokenManager, OAuthConfig, PathBase, $window, $rootScope) {
        if (OAuthConfig) {
            OAuthConfig.redirect_uri = $window.location.protocol + "//" + $window.location.host + PathBase + "/#/callback/";
            var svc = new TokenManager(OAuthConfig);

            Object.defineProperty(svc, "isTokenNeeded", {
                get: function () {
                    return !!(OAuthConfig && svc.expired);
                }
            });
            Object.defineProperty(svc, "isLogoutAllowed", {
                get: function () {
                    return !!(OAuthConfig && !svc.expired);
                }
            });
            var applyFuncs = [
                "_callTokenRemoved", "_callTokenExpiring",
                "_callTokenExpired", "_callTokenObtained",
                "_callSilentTokenRenewFailed"
            ];
            applyFuncs.forEach(function (name) {
                var tmp = svc[name].bind(svc);
                svc[name] = function () {
                    $rootScope.$applyAsync(function () {
                        tmp();
                    });
                }
            });

            return svc;
        }

        var nopSvc = {};
        for (var key in TokenManager.prototype) {
            nopSvc[key] = function () { };
        }
        return nopSvc;
    }
    idmTokenManager.$inject = ["TokenManager", "OAuthConfig", "PathBase", "$window", "$rootScope"];
    app.factory("idmTokenManager", idmTokenManager);

    function idmApi(idmTokenManager, $http, $q, PathBase) {
        var cache = null;

        idmTokenManager.addOnTokenRemoved(function () {
            cache = null;
        });

        return {
            get: function () {

                if (cache) {
                    var d = $q.defer();
                    d.resolve(cache);
                    return d.promise;
                }

                return $http.get(PathBase + "/api").then(function (resp) {
                    cache = resp.data;
                    return cache;
                }, function (resp) {
                    cache = null;
                    if (resp.status === 401) {
                        throw 'You are not authorized to use this service.';
                    }
                    else {
                        throw 'Failed to load API.';
                    }
                });
            }
        };
    }
    idmApi.$inject = ["idmTokenManager", "$http", "$q", "PathBase"];
    app.factory("idmApi", idmApi);

    function idmUsers($http, idmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        var svc = idmApi.get().then(function (api) {
            svc.getUsers = function (filter, start, count) {
                return $http.get(api.links.users, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Users"));
            };

            svc.getUser = function (subject) {
                return $http.get(api.links.users + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting User"));
            };

            if (api.links.createUser) {
                svc.createUser = function (properties) {
                    return $http.post(api.links.createUser.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating User"));
                };
            }

            svc.deleteUser = function (user) {
                return $http.delete(user.links.delete)
                    .then(nop, errorHandler("Error Deleting User"));
            };

            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };

            svc.addClaim = function (claims, claim) {
                return $http.post(claims.links.create, claim)
                    .then(nop, errorHandler("Error Adding Claim"));
            };
            svc.removeClaim = function (claim) {
                return $http.delete(claim.links.delete)
                    .then(nop, errorHandler("Error Removing Claim"));
            };

            svc.addRole = function (role) {
                return $http.post(role.links.add)
                    .then(nop, errorHandler("Error Adding Role"));
            };

            svc.removeRole = function (role) {
                return $http.delete(role.links.remove)
                    .then(nop, errorHandler("Error Removing Role"));
            };
        });

        return svc;
    }
    idmUsers.$inject = ["$http", "idmApi", "$log"];
    app.factory("idmUsers", idmUsers);

    function idmRoles($http, idmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        var svc = idmApi.get().then(function (api) {
            svc.getRoles = function (filter, start, count) {
                return $http.get(api.links.roles, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Roles"));
            };

            svc.getRole = function (subject) {
                return $http.get(api.links.roles + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting Role"));
            };

            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };

            if (api.links.createRole) {
                svc.createRole = function (properties) {
                    return $http.post(api.links.createRole.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating Role"));
                };
            }

            svc.deleteRole = function (role) {
                return $http.delete(role.links.delete)
                    .then(nop, errorHandler("Error Deleting Role"));
            };
        });

        return svc;
    }
    idmRoles.$inject = ["$http", "idmApi", "$log"];
    app.factory("idmRoles", idmRoles);
})(angular);

(function (angular) {
    var model = document.getElementById("model").textContent.trim();
    model = JSON.parse(model);
    for (var key in model) {
        angular.module("ttIdm").constant(key, model[key]);
    }
    angular.module("ttIdm").constant("TokenManager", TokenManager);
})(angular);

///#source 1 1 /Assets/Scripts/App/ttIdmUI.js
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {
    var app = angular.module("ttIdmUI", []);

    app.factory("ttFeedback", function () {
        function Feedback() {
            var self = this;
            var _errors;
            var _message;

            self.clear = function () {
                _errors = null;
                _message = null;
            };

            Object.defineProperty(this, "message", {
                get: function () {
                    return _message;
                },
                set: function (value) {
                    self.clear();
                    _message = value;
                }
            });
            Object.defineProperty(this, "errors", {
                get: function () {
                    return _errors;
                },
                set: function (value) {
                    self.clear();
                    if (value instanceof Array) {
                        _errors = value;
                    }
                    else {
                        _errors = [value];
                    }
                }
            });

            self.messageHandler = function (message) {
                self.message = message;
            };
            self.errorHandler = function (errors) {
                self.errors = errors;
            };
            self.createMessageHandler = function (msg) {
                return function () {
                    self.message = msg;
                };
            };
            self.createErrorHandler = function (msg) {
                return function (errors) {
                    self.errors = errors || msg;
                };
            };
        }
        return Feedback;
    });

    function ttFocus() {
        return {
            link: function (scope, elem) {
                scope.$on("$routeChangeSuccess", function () {
                    scope.$applyAsync(function(){
                        elem.find("input:visible:first").focus();
                    });
                });
            }
        }
    }
    ttFocus.$inject = [];
    app.directive("ttFocus", ttFocus);

    function ttMatch() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                function check() {
                    if (ctrl.$dirty) {
                        var thisVal = elem.val();
                        var otherVal = scope.$eval(attrs.ttMatch);
                        if (!thisVal || thisVal === otherVal) {
                            ctrl.$setValidity('ttMatch', true);
                        }
                        else {
                            ctrl.$setValidity('ttMatch', false);
                        }
                    }
                }
                elem.on("input", function () {
                    scope.$apply(check);
                });
                scope.$watch(attrs.ttMatch, function (val) {
                    check();
                });
            }
        }
    }
    ttMatch.$inject = [];
    app.directive("ttMatch", ttMatch);

    function ttPropertyEditor(PathBase){
        return {
            restrict:'E',
            templateUrl: PathBase + '/assets/Templates.editor.property.html',
            replace: true,
            scope: {
                property: '=',
                setProperty: '=setProperty'
            },
            link: function (scope, elem, attrs, ctrl) {
            }
        };
    }
    ttPropertyEditor.$inject = ["PathBase"];
    app.directive("ttPropertyEditor", ttPropertyEditor);

    function ttPrompt(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.modal.html',
            replace: true,
            transclude: true,
            scope: {
                id: '@',
                action: '@'
            },
            link: function (scope, elem, attrs, ctrl) {
                elem.id = scope.id.trim();
                elem.find(".btn-primary.confirm").on("click", function () {
                    elem.trigger("confirm");
                });
            }
        }
    }
    ttPrompt.$inject = ["PathBase"];
    app.directive("ttPrompt", ttPrompt);

    function ttPagerButtons(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.buttons.html',
            scope: {
                pager: '=',
                path: "@"
            }
        }
    }
    ttPagerButtons.$inject = ["PathBase"];
    app.directive("ttPagerButtons", ttPagerButtons);

    function ttPagerSummary(PathBase) {
        return {
            restrict: 'E',
            templateUrl: PathBase + '/assets/Templates.pager.summary.html',
            scope: {
                pager: '='
            }
        }
    }
    ttPagerSummary.$inject = ["PathBase"];
    app.directive("ttPagerSummary", ttPagerSummary);

    function idmPager($sce) {
        function Pager(result, pageSize) {
            function PagerButton(text, page, enabled, current) {
                this.text = $sce.trustAsHtml(text + "");
                this.page = page;
                this.enabled = enabled;
                this.current = current;
            }

            this.start = result.start;
            this.count = result.count;
            this.total = result.total;
            this.pageSize = pageSize;
            this.filter = result.filter;

            this.totalPages = Math.ceil(this.total / pageSize);
            this.currentPage = (this.start / pageSize) + 1;
            this.canPrev = this.currentPage > 1;
            this.canNext = this.currentPage < this.totalPages;

            this.buttons = [];

            var totalButtons = 7; // ensure this is odd
            var pageSkip = 10;
            var startButton = 1;
            if (this.currentPage > Math.floor(totalButtons / 2)) startButton = this.currentPage - Math.floor(totalButtons / 2);

            var endButton = startButton + totalButtons - 1;
            if (endButton >= this.totalPages) endButton = this.totalPages;
            if (this.totalPages > totalButtons &&
                (endButton - startButton + 1) < totalButtons) {
                startButton = endButton - totalButtons + 1;
            }

            var prevPage = this.currentPage - pageSkip;
            if (prevPage < 1) prevPage = 1;

            var nextPage = this.currentPage + pageSkip;
            if (nextPage > this.totalPages) nextPage = this.totalPages;

            this.buttons.push(new PagerButton("<strong>&lt;&lt;</strong>", 1, endButton > totalButtons));
            this.buttons.push(new PagerButton("<strong>&lt;</strong>", prevPage, endButton > totalButtons));

            for (var i = startButton; i <= endButton; i++) {
                this.buttons.push(new PagerButton(i, i, true, i === this.currentPage));
            }

            this.buttons.push(new PagerButton("<strong>&gt;</strong>", nextPage, endButton < this.totalPages));
            this.buttons.push(new PagerButton("<strong>&gt;&gt;</strong>", this.totalPages, endButton < this.totalPages));
        }
        return Pager;
    }
    idmPager.$inject = ["$sce"];
    app.service("idmPager", idmPager);

    function ttConfirmClick() {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                var prevent = true;
                var cb = null;
                elem.on("click", function (e) {
                    if (prevent) {
                        e.preventDefault();
                        $(attrs.ttConfirmClick).modal('show');
                        if (!cb) {
                            cb = function () {
                                $(this).off("confirm");
                                prevent = false;
                                elem.trigger("click");
                            };
                            $(attrs.ttConfirmClick).on("confirm", cb);
                        }
                    }
                });
            }
        }
    }
    ttConfirmClick.$inject = [];
    app.directive("ttConfirmClick", ttConfirmClick);

    function idmMessage(PathBase) {
        return {
            restrict: 'E',
            scope: {
                model: "=message"
            },
            templateUrl: PathBase + '/assets/Templates.message.html',
            link: function (scope, elem, attrs) {
                scope.$watch("model.message", function(){
                    scope.message = scope.model.message;
                });
                scope.$watch("model.errors", function(){
                    scope.errors = scope.model.errors;
                });
            }
        };
    }
    idmMessage.$inject = ["PathBase"];
    app.directive("idmMessage", idmMessage);

    function idmPreventDefault() {
        return {
            link: function (scope, elem) {
                elem.on("click", function (e) {
                    e.preventDefault();
                });
            }
        }
    }
    idmPreventDefault.$inject = [];
    app.directive("idmPreventDefault", idmPreventDefault);
})(angular);

///#source 1 1 /Assets/Scripts/App/ttIdmUsers.js
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttIdmUsers", ['ngRoute', 'ttIdm', 'ttIdmUI']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/users/list/:filter?/:page?", {
                controller: 'ListUsersCtrl',
                resolve: { users: "idmUsers" },
                templateUrl: PathBase + '/assets/Templates.users.list.html'
            })
            .when("/users/create", {
                controller: 'NewUserCtrl',
                resolve: {
                    api: function (idmApi) {
                        return idmApi.get();
                    }
                },
                templateUrl: PathBase + '/assets/Templates.users.new.html'
            })
            .when("/users/edit/:subject", {
                controller: 'EditUserCtrl',
                resolve: { users: "idmUsers" },
                templateUrl: PathBase + '/assets/Templates.users.edit.html'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ListUsersCtrl($scope, idmUsers, idmPager, $routeParams, $location) {
        var model = {
            message : null,
            users : null,
            pager : null,
            waiting : true,
            filter : $routeParams.filter,
            page : $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/users/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idmUsers.getUsers(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.users = result.data.items;
            if (result.data.items && result.data.items.length) {
                $scope.model.pager = new idmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListUsersCtrl.$inject = ["$scope", "idmUsers", "idmPager", "$routeParams", "$location"];
    app.controller("ListUsersCtrl", ListUsersCtrl);

    function NewUserCtrl($scope, idmUsers, api, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;
        if (!api.links.createUser) {
            feedback.errors = "Create Not Supported";
            return;
        }
        else {
            var properties = api.links.createUser.meta
                .map(function (item) {
                    return {
                        meta : item,
                        data : item.dataType === 5 ? false : undefined
                    };
                });
            $scope.properties = properties;
            $scope.create = function (properties) {
                var props = properties.map(function (item) {
                    return {
                        type: item.meta.type,
                        value: item.data
                    };
                });
                idmUsers.createUser(props)
                    .then(function (result) {
                        $scope.last = result;
                        feedback.message = "Create Success";
                    }, feedback.errorHandler);
            };
        }
    }
    NewUserCtrl.$inject = ["$scope", "idmUsers", "api", "ttFeedback"];
    app.controller("NewUserCtrl", NewUserCtrl);

    function EditUserCtrl($scope, idmUsers, $routeParams, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;

        function loadUser() {
            return idmUsers.getUser($routeParams.subject)
                .then(function (result) {
                    $scope.user = result;

                    if (!result.data.properties) {
                        $scope.tab = 1;

                        if (!result.data.roles) {
                            $scope.tab = 2;
                        }
                    }

                }, feedback.errorHandler);
        };
        loadUser();

        $scope.setProperty = function (property) {
            idmUsers.setProperty(property)
                .then(function () {
                    if (property.meta.dataType !== 1) {
                        feedback.message = property.meta.name + " Changed to: " + property.data;
                    }
                    else {
                        feedback.message = property.meta.name + " Changed";
                    }
                    loadUser();
                }, feedback.errorHandler);
        };

        $scope.addClaim = function (claims, claim) {
            idmUsers.addClaim(claims, claim)
                .then(function () {
                    feedback.message = "Claim Added : " + claim.type + ", " + claim.value;
                    loadUser();
                }, feedback.errorHandler);
        };

        $scope.removeClaim = function (claim) {
            idmUsers.removeClaim(claim)
                .then(function () {
                    feedback.message = "Claim Removed : " + claim.data.type + ", " + claim.data.value;
                    loadUser().then(function () {
                        $scope.claim = claim.data;
                    });
                }, feedback.errorHandler);
        };

        $scope.deleteUser = function (user) {
            idmUsers.deleteUser(user)
                .then(function () {
                    feedback.message = "User Deleted";
                    $scope.user = null;
                }, feedback.errorHandler);
        };

        $scope.setRole = function (role) {
            if (role.data) {
                idmUsers.addRole(role)
                    .then(function () {
                        feedback.message = "Role Added : " + role.meta.type;
                        loadUser();
                    }, feedback.errorHandler);
            }
            else {
                idmUsers.removeRole(role)
                    .then(function () {
                        feedback.message = "Role Removed : " + role.meta.type;
                        loadUser();
                    }, feedback.errorHandler);
            }
        };
    }
    EditUserCtrl.$inject = ["$scope", "idmUsers", "$routeParams", "ttFeedback"];
    app.controller("EditUserCtrl", EditUserCtrl);

})(angular);

///#source 1 1 /Assets/Scripts/App/ttIdmRoles.js
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttIdmRoles", ['ngRoute', 'ttIdm', 'ttIdmUI']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/roles/list/:filter?/:page?", {
                controller: 'ListRolesCtrl',
                resolve: { roles: "idmRoles" },
                templateUrl: PathBase + '/assets/Templates.roles.list.html'
            })
            .when("/roles/create", {
                controller: 'NewRoleCtrl',
                resolve: {
                    api: function (idmApi) {
                        return idmApi.get();
                    }
                },
                templateUrl: PathBase + '/assets/Templates.roles.new.html'
            })
            .when("/roles/edit/:subject", {
                controller: 'EditRoleCtrl',
                resolve: { roles: "idmRoles" },
                templateUrl: PathBase + '/assets/Templates.roles.edit.html'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ListRolesCtrl($scope, idmRoles, idmPager, $routeParams, $location) {
        var model = {
            message : null,
            roles : null,
            pager : null,
            waiting : true,
            filter : $routeParams.filter,
            page : $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/roles/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idmRoles.getRoles(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.roles = result.data.items;
            if (result.data.items && result.data.items.length) {
                $scope.model.pager = new idmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListRolesCtrl.$inject = ["$scope", "idmRoles", "idmPager", "$routeParams", "$location"];
    app.controller("ListRolesCtrl", ListRolesCtrl);

    function NewRoleCtrl($scope, idmRoles, api, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;
        if (!api.links.createRole) {
            feedback.errors = "Create Not Supported";
            return;
        }
        else {
            var properties = api.links.createRole.meta
                .map(function (item) {
                    return {
                        meta : item,
                        data : item.dataType === 5 ? false : undefined
                    };
                });
            $scope.properties = properties;
            $scope.create = function (properties) {
                var props = properties.map(function (item) {
                    return {
                        type: item.meta.type,
                        value: item.data
                    };
                });
                idmRoles.createRole(props)
                    .then(function (result) {
                        $scope.last = result;
                        feedback.message = "Create Success";
                    }, feedback.errorHandler);
            };
        }
    }
    NewRoleCtrl.$inject = ["$scope", "idmRoles", "api", "ttFeedback"];
    app.controller("NewRoleCtrl", NewRoleCtrl);

    function EditRoleCtrl($scope, idmRoles, $routeParams, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;

        function loadRole() {
            return idmRoles.getRole($routeParams.subject)
                .then(function (result) {
                    $scope.role = result;
                    if (!result.data.properties) {
                        $scope.tab = 1;
                    }
                }, feedback.errorHandler);
        };
        loadRole();

        $scope.setProperty = function (property) {
            idmRoles.setProperty(property)
                .then(function () {
                    if (property.meta.dataType !== 1) {
                        feedback.message = property.meta.name + " Changed to: " + property.data;
                    }
                    else {
                        feedback.message = property.meta.name + " Changed";
                    }
                    loadRole();
                }, feedback.errorHandler);
        };

        $scope.deleteRole = function (role) {
            idmRoles.deleteRole(role)
                .then(function () {
                    feedback.message = "Role Deleted";
                    $scope.role = null;
                }, feedback.errorHandler);
        };
    }
    EditRoleCtrl.$inject = ["$scope", "idmRoles", "$routeParams", "ttFeedback"];
    app.controller("EditRoleCtrl", EditRoleCtrl);

})(angular);

///#source 1 1 /Assets/Scripts/App/ttIdmApp.js
/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttIdmApp", ['ngRoute', 'ttIdm', 'ttIdmUI', 'ttIdmUsers', 'ttIdmRoles']);
    function config(PathBase, $routeProvider) {
        $routeProvider
            .when("/", {
                controller: 'HomeCtrl',
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/callback/:response", {
                templateUrl: PathBase + '/assets/Templates.message.html',
                controller: 'CallbackCtrl'
            })
            .when("/logout", {
                template: "<h2>Logging out...</h2>",
                controller: "LogoutCtrl"
            })
            .when("/error", {
                templateUrl: PathBase + '/assets/Templates.message.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    config.$inject = ["PathBase", "$routeProvider"];
    app.config(config);

    function LayoutCtrl($rootScope, $scope, idmApi, $location, idmTokenManager) {
        $scope.layout = {};

        function removed() {
            $scope.layout.username = null;
            $scope.layout.links = null;
            $scope.layout.showLogout = idmTokenManager.isLogoutAllowed;
            $scope.layout.showLogin = idmTokenManager.isTokenNeeded;
        }

        function load() {
            removed();

            idmApi.get().then(function (api) {
                $scope.layout.username = api.data.currentUser.username;
                $scope.layout.links = api.links;
            });
        }

        idmTokenManager.addOnTokenObtained(load);
        idmTokenManager.addOnTokenRemoved(removed);
        load();

        if (idmTokenManager.isTokenNeeded &&
            $location.path() !== "/" &&
            $location.path().indexOf("/callback/") !== 0 && 
            $location.path() !== "/error" &&
            $location.path() !== "/logout") {
                $location.path("/");
        }

        idmTokenManager.addOnTokenExpired(function () {
            $location.url("/error");
            $rootScope.errors = ["Your session has expired."];
        });

        $scope.login = function () {
            idmTokenManager.redirectForToken();
        }
    }
    LayoutCtrl.$inject = ["$rootScope", "$scope", "idmApi", "$location", "idmTokenManager"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl() {
    }
    HomeCtrl.$inject = [];
    app.controller("HomeCtrl", HomeCtrl);

    function CallbackCtrl(idmTokenManager, $location, $rootScope, $routeParams) {
        idmTokenManager.processTokenCallbackAsync($routeParams.response).then(function() {
            $location.url("/");
        }, function (error) {
            $rootScope.errors = [error];
        });
    }
    CallbackCtrl.$inject = ["idmTokenManager", "$location", "$rootScope", "$routeParams"];
    app.controller("CallbackCtrl", CallbackCtrl);

    function LogoutCtrl(idmTokenManager, $location) {
        idmTokenManager.removeToken();
        $location.url("/");
    }
    LogoutCtrl.$inject = ["idmTokenManager", "$location"];
    app.controller("LogoutCtrl", LogoutCtrl);

})(angular);

