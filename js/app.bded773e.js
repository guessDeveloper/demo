(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about",index:"index"}[t]||t)+"."+{about:"e07cf539",index:"f80909d8"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,index:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about",index:"index"}[t]||t)+"."+{about:"645376b5",index:"7a9f69bc"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"146e":function(t,e,n){},"1bdb":function(t,e,n){},2395:function(t,e,n){},3068:function(t,e,n){},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.81d231a0.png"},5698:function(t,e,n){"use strict";var a=n("1bdb"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("fixRight")],1)},o=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cuser-box"},[n("span",{staticClass:"iconfont iconkefu"}),n("div",{staticClass:"name"},[t._v("在线客服")])])}],c={data:function(){return{}}},u=c,l=(n("c62f"),n("2877")),f=Object(l["a"])(u,s,i,!1,null,"1b515cd0",null),d=f.exports,p={name:"app",components:{fixRight:d}},v=p,h=(n("7c55"),Object(l["a"])(v,r,o,!1,null,null,null)),m=h.exports,b=(n("d3b7"),n("8c4f")),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("navBar"),n("navBottom"),n("router-view"),n("footerBar")],1)},g=[],C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav "},[n("div",{staticClass:"nav-box clear"},[n("div",{staticClass:"tip"},[n("span",{staticClass:"iconfont iconguangbo"}),t._v("优乐兑APP上线了，帮助商家解决客户流量问题")]),n("div",{staticClass:"nav-right"},[n("a",{staticClass:"login-btn",attrs:{href:""}},[t._v("请先登录")]),n("a",{attrs:{href:""}},[t._v("免费注册")]),n("a",{staticClass:"help",attrs:{href:""}},[t._v("帮助中心")])]),n("a",{staticClass:"regester",attrs:{href:""}},[t._v("注册")]),n("a",{staticClass:"login"},[t._v("登录")])])])}],x={data:function(){return{}}},w=x,E=(n("6fb8"),Object(l["a"])(w,C,y,!1,null,"e2e14194",null)),j=E.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar-box"},[n("div",{staticClass:"box clear"},[t._m(0),t._m(1),t._m(2),n("div",{staticClass:"nav-box"},t._l(t.navList,(function(e,a){return n("router-link",{key:a,class:{active:t.nowPath==e.path},attrs:{to:e.path,tag:"a"},nativeOn:{click:function(n){return t.goRouter(e.path)}}},[t._v(t._s(e.name))])})),1),t._m(3)])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"logo",attrs:{href:""}},[a("img",{attrs:{src:n("4ffd"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"sao",attrs:{href:""}},[n("span",{staticClass:"iconfont iconyd_saoyisao"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"menu",attrs:{href:""}},[n("span",{staticClass:"iconfont iconyd_gengduo"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("div",{staticClass:"input-box"},[n("div",{staticClass:"select"},[t._v(" 拼多多"),n("span",{staticClass:"iconfont iconxiasanjiao"})]),n("input",{attrs:{type:"text",placeholder:"输入商品关键词"}})]),n("a",{staticClass:"btn",attrs:{href:""}},[n("span",{staticClass:"iconfont iconsousuo"}),n("span",{staticClass:"name"},[t._v("搜索")])])])}],$={data:function(){return{nowPath:"/",navList:[{name:"首页",path:"/"},{name:"淘宝",path:"/taobao"},{name:"京东",path:"/jiongdong"},{name:"商城返利",path:"/store"},{name:"逛街购物",path:"/shop"},{name:"美食广场",path:"/food"}]}},mounted:function(){this.nowPath=this.$route.path},methods:{goRouter:function(t){this.nowPath=t}}},k=$,S=(n("5698"),Object(l["a"])(k,O,P,!1,null,"3eb81a43",null)),T=S.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-top"},[n("div",{staticClass:"link-box"},[n("div",{staticClass:"top"},[n("a",{attrs:{href:""}},[t._v("关于我们")]),n("span",[t._v("|")]),n("a",{attrs:{href:""}},[t._v("帮助中心")]),n("span",[t._v("|")]),n("a",{attrs:{href:""}},[t._v("售后服务")]),n("span",[t._v("|")]),n("a",{attrs:{href:""}},[t._v("配送与验收")]),n("span",{staticClass:"last"},[t._v("|")])]),n("div",{staticClass:"bottom"},[n("a",{attrs:{href:""}},[t._v("商务合作")]),n("span",[t._v("|")]),n("a",{attrs:{href:""}},[t._v("企业采购")]),n("span",[t._v("|")]),n("a",{attrs:{href:""}},[t._v("开放平台")]),n("span",[t._v("|")]),n("a",{attrs:{href:""}},[t._v("搜索推荐")]),n("span",[t._v("|")]),n("a",{attrs:{href:""}},[t._v("友情链接")])])])]),n("div",{staticClass:"footer-bottom"},[n("div",{staticClass:"box"},[n("a",[t._v("CopyRight © 消费乐2015")])])])])}],L={},N=L,R=(n("9d61"),Object(l["a"])(N,A,B,!1,null,"2c3741ff",null)),H=R.exports,M={name:"Home",data:function(){return{classActive:1,classNav:[{title:"服装",active:1,type:1},{title:"厨具",active:0,type:2},{title:"配件",active:0,type:3},{title:"家居",active:0,type:4}]}},mounted:function(){},components:{navBar:j,navBottom:T,footerBar:H}},q=M,D=(n("b17c"),Object(l["a"])(q,_,g,!1,null,"cd0118ce",null)),J=D.exports;a["default"].use(b["a"]);var F=[{path:"/",name:"Home",component:J,children:[{path:"/",name:"index",component:function(){return n.e("index").then(n.bind(null,"7abe"))}},{path:"/food",name:"food",component:function(){return n.e("index").then(n.bind(null,"2bec"))}}]},{path:"*",name:"Home",component:J},{path:"/sao",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],I=new b["a"]({mode:"hash",base:"",routes:F});I.beforeEach((function(t,e,n){t.meta.title&&(document.title=t.meta.title),document.body.scrollTop=0,document.documentElement.scrollTop=0,n()}));var K=I,U=n("2f62");a["default"].use(U["a"]);var z=new U["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=(n("186a"),n("450d"),n("301f")),Q=n.n(G),V=(n("96dc"),n("9cea")),W=n.n(V);a["default"].use(W.a),a["default"].use(Q.a),a["default"].config.productionTip=!1,new a["default"]({router:K,store:z,render:function(t){return t(m)}}).$mount("#app")},"6fb8":function(t,e,n){"use strict";var a=n("146e"),r=n.n(a);r.a},"74d7":function(t,e,n){},"7c55":function(t,e,n){"use strict";var a=n("2395"),r=n.n(a);r.a},"9d61":function(t,e,n){"use strict";var a=n("74d7"),r=n.n(a);r.a},b17c:function(t,e,n){"use strict";var a=n("fe9a"),r=n.n(a);r.a},c62f:function(t,e,n){"use strict";var a=n("3068"),r=n.n(a);r.a},fe9a:function(t,e,n){}});
//# sourceMappingURL=app.bded773e.js.map