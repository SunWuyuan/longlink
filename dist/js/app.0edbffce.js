(function(){"use strict";var t={4333:function(t,e,n){var r=n(144),i=n(998),o=n(5716),a=n(8762),l=n(9582),s=n(4886),u=n(433),c=n(9202),f=n(5125),d=n(4324),v=n(3059),h=n(3687),p=n(2033),b=n(1783),k=n(7953),m=function(){var t=this,e=t._self._c;return e(i.Z,[e(o.Z,{attrs:{app:"",color:"primary",dark:""}},[e(k.qW,[t._v("元长-长长长长长长长长长长长长长长长长长长长")]),e(h.Z),e(a.Z,{attrs:{href:"https://github.com/SUNWUYUAN/longlink",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("在GitHub上贡献")]),e(d.Z,[t._v("mdi-open-in-new")])],1)],1),e(v.Z,[[[e(u.Z,{attrs:{"fill-height":"prop"}},[e(l.Z,{staticClass:"mx-auto",attrs:{"max-width":"344",elevation:"20"}},[e(s.ZB,[e("div",[t._v("长长长长长长长长长长长长")]),e("p",{staticClass:"text-h4 text--primary"},[t._v(" 元长 ")]),e("p",[t._v("来自未来的长链接")])]),e(s.h7,[e(f.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(p.Z,{attrs:{label:"待缩长的网址",placeholder:"输入网址",outlined:"",prefix:"https://",rules:t.emailRules},model:{value:t.linkinput,callback:function(e){t.linkinput=e},expression:"linkinput"}}),e(c.Z,{attrs:{transition:"scroll-y-reverse-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:n,attrs:r}){return[e(a.Z,t._g(t._b({staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},"v-btn",r,!1),n),[t._v(" 长")])]}},{key:"default",fn:function(n){return[e(l.Z,[e(b.Z,{staticClass:"text-h5",attrs:{color:"primary",dark:""}},[t._v("生成完成！")]),e(s.ZB,[e("br"),e("h2",[t._v("您的长链是：")]),e("h4",[t._v(" "+t._s(t.base64ok)+" ")])]),e(s.h7,{staticClass:"justify-end"},[e(a.Z,{attrs:{text:""},on:{click:function(t){n.value=!1}}},[t._v("完成")])],1)],1)]}}])}),e(a.Z,{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" 重置 ")])],1)],1)],1)],1)]]],2)],1)},y=[],Z={data:()=>({checkCode:"",valid:!1,linkinput:"",base64ok:"",emailRules:[t=>!!t||"请输入网址",t=>/.+..+/.test(t)||"请输入网址"]}),methods:{validate(){this.$refs.form.validate();var t=n(9575).Base64;this.createCode(),this.base64ok="https://longlink.wuyuan.dev/ohhbilibiliyyds/go.html?bilibili_wuyuan_yyds="+t.encode("https://"+this.linkinput)+"#"+this.checkCode,console.log(this.base64ok)},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()},createCode(){let t="";const e=100,n=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];for(let r=0;r<e;r++){let e=Math.floor(62*Math.random());t+=n[e]}this.checkCode=t}}},_=Z,g=n(1001),x=(0,g.Z)(_,m,y,!1,null,null,null),w=x.exports,C=n(8864);r.ZP.use(C.Z);var O=new C.Z({}),j=n(2268),P=n.n(j);const S=n(9575).Base64;r.ZP.use(P()),r.ZP.config.productionTip=!1,new r.ZP({vuetify:O,Base64:S,render:t=>t(w)}).$mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(c=0;c<t.length;c++){r=t[c][0],i=t[c][1],o=t[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(l=!1,o<a&&(a=o));if(l){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],l=r[1],s=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var c=s(n)}for(e&&e(r);u<a.length;u++)o=a[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},r=self["webpackChunklonglink"]=self["webpackChunklonglink"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4333)}));r=n.O(r)})();
//# sourceMappingURL=app.0edbffce.js.map