(function(){'use strict';
var e="object"===typeof __ScalaJSEnv&&__ScalaJSEnv?__ScalaJSEnv:{},h="object"===typeof e.global&&e.global?e.global:"object"===typeof global&&global&&global.Object===Object?global:this;e.global=h;e.exportsNamespace="object"===typeof e.exportsNamespace&&e.exportsNamespace?e.exportsNamespace:h;h.Object.freeze(e);var m={envInfo:e,semantics:{asInstanceOfs:2,arrayIndexOutOfBounds:2,moduleInit:2,strictFloats:!1,productionMode:!0},assumingES6:!1,linkerVersion:"0.6.26",globalThis:this};h.Object.freeze(m);
h.Object.freeze(m.semantics);var n=h.Math.imul||function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0},p=h.Math.clz32||function(a){if(0===a)return 32;var b=1;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);return b+(a>>31)},q=0,r=h.WeakMap?new h.WeakMap:null;function u(a){return function(b,c){return!(!b||!b.$classData||b.$classData.l!==c||b.$classData.j!==a)}}
function aa(a){for(var b in a)return b}function v(a,b,c){var d=new a.z(b[c]);if(c<b.length-1){a=a.m;c+=1;for(var f=d.C,g=0;g<f.length;g++)f[g]=v(a,b,c)}return d}function ba(a){switch(typeof a){case "string":return w(x);case "number":var b=a|0;return b===a?y(b)?w(z):ca(b)?w(da):w(ea):"number"===typeof a?w(fa):w(ga);case "boolean":return w(ha);case "undefined":return w(ia);default:return null===a?a.ca():a&&a.$classData&&a.$classData.g.B?w(ja):a&&a.$classData?w(a.$classData):null}}
function ka(a){switch(typeof a){case "string":la||(la=(new A).b());for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+n(65535&(a.charCodeAt(d)|0),c)|0,c=n(31,c),d=-1+d|0;return b;case "number":B||(B=(new C).b());b=B;c=a|0;if(c===a&&-Infinity!==1/a)b=c;else{if(b.h)b.G[0]=a,b=D(b.t[b.I]|0,b.t[b.H]|0);else{if(a!==a)b=!1,a=2047,c=+h.Math.pow(2,51);else if(Infinity===a||-Infinity===a)b=0>a,a=2047,c=0;else if(0===a)b=-Infinity===1/a,c=a=0;else if(d=(b=0>a)?-a:a,d>=+h.Math.pow(2,-1022)){a=+h.Math.pow(2,52);var c=
+h.Math.log(d)/.6931471805599453,c=+h.Math.floor(c)|0,c=1023>c?c:1023,f=+h.Math.pow(2,c);f>d&&(c=-1+c|0,f/=2);f=d/f*a;d=+h.Math.floor(f);f-=d;d=.5>f?d:.5<f?1+d:0!==d%2?1+d:d;2<=d/a&&(c=1+c|0,d=1);1023<c?(c=2047,d=0):(c=1023+c|0,d-=a);a=c;c=d}else a=d/+h.Math.pow(2,-1074),c=+h.Math.floor(a),d=a-c,a=0,c=.5>d?c:.5<d?1+c:0!==c%2?1+c:c;c=+c;b=D(c|0,(b?-2147483648:0)|(a|0)<<20|c/4294967296|0)}b=b.u^b.s}return b;case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||
null===a?a.A():null===r?42:na(a)}}function oa(a,b){var c=h.Object.getPrototypeOf,d=h.Object.getOwnPropertyDescriptor;for(a=c(a);null!==a;){var f=d(a,b);if(void 0!==f)return f;a=c(a)}}function pa(a,b,c){a=oa(a,c);if(void 0!==a)return c=a.get,void 0!==c?c.call(b):a.value}function qa(a,b,c,d){a=oa(a,c);if(void 0!==a&&(a=a.set,void 0!==a)){a.call(b,d);return}throw new h.TypeError("super has no setter '"+c+"'.");}
var na=null!==r?function(a){switch(typeof a){case "string":case "number":case "boolean":case "undefined":return ka(a);default:if(null===a)return 0;var b=r.get(a);void 0===b&&(q=b=q+1|0,r.set(a,b));return b}}:function(a){if(a&&a.$classData){var b=a.$idHashCode$0;if(void 0!==b)return b;if(h.Object.isSealed(a))return 42;q=b=q+1|0;return a.$idHashCode$0=b}return null===a?0:ka(a)};function y(a){return"number"===typeof a&&a<<24>>24===a&&1/a!==1/-0}
function ca(a){return"number"===typeof a&&a<<16>>16===a&&1/a!==1/-0}function E(){this.v=this.z=void 0;this.j=this.m=this.g=null;this.l=0;this.D=null;this.r="";this.c=this.p=this.q=void 0;this.name="";this.isRawJSType=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}function F(a,b,c){var d=new E;d.g={};d.m=null;d.D=a;d.r=b;d.c=function(){return!1};d.name=c;d.isPrimitive=!0;d.isInstance=function(){return!1};return d}
function G(a,b,c,d,f,g,l){var k=new E,t=aa(a);g=g||function(a){return!!(a&&a.$classData&&a.$classData.g[t])};l=l||function(a,b){return!!(a&&a.$classData&&a.$classData.l===b&&a.$classData.j.g[t])};k.v=f;k.g=c;k.r="L"+b+";";k.c=l;k.name=b;k.isInterface=!1;k.isRawJSType=!!d;k.isInstance=g;return k}
function ra(a){function b(a){if("number"===typeof a){this.C=Array(a);for(var b=0;b<a;b++)this.C[b]=f}else this.C=a}var c=new E,d=a.D,f="longZero"==d?H().x:d;b.prototype=new I;b.prototype.constructor=b;b.prototype.$classData=c;var d="["+a.r,g=a.j||a,l=a.l+1;c.z=b;c.v=sa;c.g={a:1,ea:1,d:1};c.m=a;c.j=g;c.l=l;c.D=null;c.r=d;c.q=void 0;c.p=void 0;c.c=void 0;c.name=d;c.isPrimitive=!1;c.isInterface=!1;c.isArrayClass=!0;c.isInstance=function(a){return g.c(a,l)};return c}
function w(a){if(!a.q){var b=new J;b.n=a;a.q=b}return a.q}function ta(a){a.p||(a.p=ra(a));return a.p}E.prototype.getFakeInstance=function(){return this===x?"some string":this===ha?!1:this===z||this===da||this===ea||this===fa||this===ga?0:this===ja?H().x:this===ia?void 0:{$classData:this}};E.prototype.getSuperclass=function(){return this.v?w(this.v):null};E.prototype.getComponentType=function(){return this.m?w(this.m):null};
E.prototype.newArrayOfThisClass=function(a){for(var b=this,c=0;c<a.length;c++)b=ta(b);return v(b,a,0)};var ua=F(!1,"Z","boolean"),va=F(0,"C","char"),wa=F(0,"B","byte"),xa=F(0,"S","short"),ya=F(0,"I","int"),za=F("longZero","J","long"),Aa=F(0,"F","float"),Ba=F(0,"D","double");ua.c=u(ua);va.c=u(va);wa.c=u(wa);xa.c=u(xa);ya.c=u(ya);za.c=u(za);Aa.c=u(Aa);Ba.c=u(Ba);function K(){}function I(){}I.prototype=K.prototype;K.prototype.b=function(){return this};K.prototype.w=function(){var a=ba(this).n.name,b=(+(this.A()>>>0)).toString(16);return a+"@"+b};K.prototype.A=function(){return na(this)};K.prototype.toString=function(){return this.w()};var sa=G({a:0},"java.lang.Object",{a:1},void 0,void 0,function(a){return null!==a},function(a,b){if(a=a&&a.$classData){var c=a.l||0;return!(c<b)&&(c>b||!a.j.isPrimitive)}return!1});K.prototype.$classData=sa;function L(){}
L.prototype=new I;L.prototype.constructor=L;L.prototype.b=function(){return this};function Ca(){var a=M();(0,N().o)("body").append("\x3cp\x3eHello Scala JS yay!!!/p\x3e");(0,N().o)("#click-me-button").click(Ea(N(),Fa(function(){return function(){M();var a=O().body,c=O().createElement("p"),d=O().createTextNode("You clicked the button!");c.appendChild(d);a.appendChild(c)}}(a))))}L.prototype.$classData=G({K:0},"TimerApp$",{K:1,a:1});var P=void 0;function M(){P||(P=(new L).b());return P}
function Q(){this.o=null}Q.prototype=new I;Q.prototype.constructor=Q;Q.prototype.b=function(){R=this;this.o=h.$;return this};function Ea(a,b){return function(a){return function(){return(0,a.F)()}}(b)}Q.prototype.$classData=G({L:0},"org.querki.jquery.package$",{L:1,a:1});var R=void 0;function N(){R||(R=(new Q).b());return R}function S(){this.E=this.J=null;this.e=0}S.prototype=new I;S.prototype.constructor=S;S.prototype.b=function(){return this};
function O(){var a;T||(T=(new S).b());a=T;0===(268435456&a.e)&&0===(268435456&a.e)&&(0===(134217728&a.e)&&0===(134217728&a.e)&&(a.J=h.window,a.e|=134217728),a.E=a.J.document,a.e|=268435456);return a.E}S.prototype.$classData=G({M:0},"org.scalajs.dom.package$",{M:1,a:1});var T=void 0;function J(){this.n=null}J.prototype=new I;J.prototype.constructor=J;J.prototype.w=function(){return(this.n.isInterface?"interface ":this.n.isPrimitive?"":"class ")+this.n.name};
J.prototype.$classData=G({Q:0},"java.lang.Class",{Q:1,a:1});function C(){this.h=!1;this.G=this.t=this.k=null;this.y=!1;this.I=this.H=0}C.prototype=new I;C.prototype.constructor=C;
C.prototype.b=function(){B=this;this.k=(this.h=!!(h.ArrayBuffer&&h.Int32Array&&h.Float32Array&&h.Float64Array))?new h.ArrayBuffer(8):null;this.t=this.h?new h.Int32Array(this.k,0,2):null;this.h&&new h.Float32Array(this.k,0,2);this.G=this.h?new h.Float64Array(this.k,0,1):null;if(this.h)this.t[0]=16909060,a=1===((new h.Int8Array(this.k,0,8))[0]|0);else var a=!0;this.H=(this.y=a)?0:1;this.I=this.y?1:0;return this};C.prototype.$classData=G({X:0},"scala.scalajs.runtime.Bits$",{X:1,a:1});var B=void 0;
function A(){this.e=!1}A.prototype=new I;A.prototype.constructor=A;A.prototype.b=function(){return this};A.prototype.$classData=G({Z:0},"scala.scalajs.runtime.RuntimeString$",{Z:1,a:1});var la=void 0;function U(){}U.prototype=new I;U.prototype.constructor=U;function Ga(){}Ga.prototype=U.prototype;function V(){}V.prototype=new I;V.prototype.constructor=V;function Ha(){}Ha.prototype=V.prototype;V.prototype.w=function(){return"\x3cfunction0\x3e"};
var ia=G({aa:0},"scala.runtime.BoxedUnit",{aa:1,a:1,d:1},void 0,void 0,function(a){return void 0===a}),ha=G({O:0},"java.lang.Boolean",{O:1,a:1,d:1,f:1},void 0,void 0,function(a){return"boolean"===typeof a});function W(){this.F=null}W.prototype=new Ha;W.prototype.constructor=W;function Fa(a){var b=new W;b.F=a;return b}W.prototype.$classData=G({W:0},"scala.scalajs.runtime.AnonFunction0",{W:1,ga:1,a:1,ba:1});function X(){this.x=null}X.prototype=new I;X.prototype.constructor=X;
X.prototype.b=function(){Y=this;this.x=D(0,0);return this};
function Ia(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+p(1E9)|0)-(0!==b?p(b):32+p(a)|0)|0,d=c,f=0===(32&d)?1E9<<d:0,d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d,g=a,l=b;for(a=b=0;0<=c&&0!==(-2097152&l);){var k=g,t=l,Da=f,ma=d;if(t===ma?(-2147483648^k)>=(-2147483648^Da):(-2147483648^t)>=(-2147483648^ma))k=l,t=d,l=g-f|0,k=(-2147483648^l)>(-2147483648^g)?-1+(k-t|0)|0:k-t|0,g=l,l=k,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;k=d>>>1|0;f=f>>>1|0|d<<31;d=k}c=l;if(0===c?-1147483648<=(-2147483648^
g):-2147483648<=(-2147483648^c))c=4294967296*l+ +(g>>>0),g=c/1E9,f=g/4294967296|0,d=b,b=g=d+(g|0)|0,a=(-2147483648^g)<(-2147483648^d)?1+(a+f|0)|0:a+f|0,g=c%1E9|0;c=""+g;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}X.prototype.$classData=G({Y:0},"scala.scalajs.runtime.RuntimeLong$",{Y:1,a:1,fa:1,d:1});var Y=void 0;function H(){Y||(Y=(new X).b());return Y}
var x=G({N:0},"java.lang.String",{N:1,a:1,d:1,da:1,f:1},void 0,void 0,function(a){return"string"===typeof a}),z=G({P:0},"java.lang.Byte",{P:1,i:1,a:1,d:1,f:1},void 0,void 0,function(a){return y(a)}),ga=G({R:0},"java.lang.Double",{R:1,i:1,a:1,d:1,f:1},void 0,void 0,function(a){return"number"===typeof a}),fa=G({S:0},"java.lang.Float",{S:1,i:1,a:1,d:1,f:1},void 0,void 0,function(a){return"number"===typeof a}),ea=G({T:0},"java.lang.Integer",{T:1,i:1,a:1,d:1,f:1},void 0,void 0,function(a){return"number"===
typeof a&&(a|0)===a&&1/a!==1/-0}),ja=G({U:0},"java.lang.Long",{U:1,i:1,a:1,d:1,f:1},void 0,void 0,function(a){return!!(a&&a.$classData&&a.$classData.g.B)}),da=G({V:0},"java.lang.Short",{V:1,i:1,a:1,d:1,f:1},void 0,void 0,function(a){return ca(a)});function Z(){this.s=this.u=0}Z.prototype=new Ga;Z.prototype.constructor=Z;Z.prototype.w=function(){H();var a=this.u,b=this.s;return b===a>>31?""+a:0>b?"-"+Ia(-a|0,0!==a?~b:-b|0):Ia(a,b)};function D(a,b){var c=new Z;c.u=a;c.s=b;return c}
Z.prototype.A=function(){return this.u^this.s};Z.prototype.$classData=G({B:0},"scala.scalajs.runtime.RuntimeLong",{B:1,i:1,a:1,d:1,f:1});var Ja=M(),Ka;Ka=new (ta(x).z)([]);(function(a){(0,N().o)(function(){return function(){Ca()}}(a))})(Ja,Ka);
}).call(this);
//# sourceMappingURL=the-timer-opt.js.map
