(function(e){function t(t){for(var n,c,l=t[0],i=t[1],s=t[2],u=0,b=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==o[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},r=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"dff4190b"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var s=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,a[1](s)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1491:function(e,t,a){},"34e1":function(e,t,a){},"3a33":function(e,t,a){"use strict";a("8dae")},"40cc":function(e,t,a){"use strict";a("1491")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),o={id:"nav"},r=Object(n["g"])("Home"),c=Object(n["g"])(" | "),l=Object(n["g"])("About"),i=Object(n["h"])("img",{alt:"Schweigen logo",src:"https://uploads-ssl.webflow.com/6007b4af01b37638d431e8f4/600f38e565837a5fd9994f85_Primary.svg"},null,-1),s={class:"section"},u={class:"container"},d={class:"wrapper-m"},b={class:"w-layout-grid grid-long-content-2 s-x-48"},v={class:"page-content"},f={key:1},p=Object(n["h"])("div",{class:"s-p-48"},"Loading...",-1);function h(e,t,a,h,j,O){var g=Object(n["x"])("router-link"),m=Object(n["x"])("router-view"),w=Object(n["x"])("Sidebar"),y=Object(n["x"])("DownloadsTable");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])("div",o,[Object(n["h"])(g,{to:"/"},{default:Object(n["C"])((function(){return[r]})),_:1}),c,Object(n["h"])(g,{to:"/about"},{default:Object(n["C"])((function(){return[l]})),_:1}),Object(n["g"])(" "+Object(n["z"])(j.counter),1)]),Object(n["h"])(m),i,Object(n["h"])("div",s,[Object(n["h"])("div",u,[Object(n["h"])("div",d,[Object(n["h"])("div",b,[Object(n["h"])(w)]),Object(n["h"])("div",v,[j.loading?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])(y,{key:0,downloads:j.downloads},null,8,["downloads"])),j.loading?(Object(n["q"])(),Object(n["d"])("div",f,[p])):Object(n["e"])("",!0)])])])])],64)}a("d3b7");var j=Object(n["D"])("data-v-707df328"),O=j((function(e,t,a,o,r,c){return Object(n["q"])(),Object(n["d"])("h2",null,"This is the sidebar")})),g={name:"Sidebar",data:function(){return{}}};g.render=O,g.__scopeId="data-v-707df328";var m=g,w=Object(n["h"])("h2",null,"Downloads",-1),y=Object(n["h"])("hr",null,null,-1),_={class:"table"},k=Object(n["f"])('<div class="table-head"><div class="table-col"> Name </div><div class="table-col"> Size </div><div class="table-col"> Type </div><div class="table-col"> Download </div></div>',1),x={class:"table-body"},z={class:"table-row"},S={class:"table-col"},B={class:"table-col"},T={class:"table-col"},D={class:"table-col"};function q(e,t,a,o,r,c){var l=Object(n["x"])("FileType"),i=Object(n["x"])("Button");return Object(n["q"])(),Object(n["d"])(n["a"],null,[w,y,Object(n["h"])("div",_,[k,Object(n["h"])("div",x,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(a.downloads,(function(e){return Object(n["q"])(),Object(n["d"])("div",z,[Object(n["h"])("div",S,[Object(n["h"])("span",null,Object(n["z"])(e.fields["display-name"]),1)]),Object(n["h"])("div",B,Object(n["z"])(e.fields.filesize),1),Object(n["h"])("div",T,[Object(n["h"])(l,{url:e.fields["computed-download-url"]},null,8,["url"])]),Object(n["h"])("div",D,[Object(n["h"])(i,{href:e.fields["computed-download-url"],size:"small"},null,8,["href"])])])})),256))])])],64)}var C=Object(n["D"])("data-v-86ad9c0e");Object(n["t"])("data-v-86ad9c0e");var P={class:"button-text"};Object(n["r"])();var M=C((function(e,t,a,o,r,c){return Object(n["q"])(),Object(n["d"])("a",{class:[a.size,"button secondary w-inline-block"],href:a.href},[Object(n["h"])("div",P,Object(n["z"])(a.text),1)],10,["href"])})),F={name:"Button",data:function(){return{class:"button small secondary w-inline-block"}},props:{href:{type:String,required:!0,default:"#"},size:{type:String,default:"large"},text:{default:"Download"}}};F.render=M,F.__scopeId="data-v-86ad9c0e";var I=F,E=Object(n["D"])("data-v-7de4bb07"),A=E((function(e,t,a,o,r,c){return Object(n["z"])(r.humanReadableFileSize)})),H=(a("ac1f"),a("b680"),{name:"FileSize",props:{size:String,url:String},data:function(){return{type:"none",iconClass:"none",humanReadableFileSize:"nah"}},beforeMount:function(){var e=/(?:\.([^.]+))?$/,t=e.exec(this.url)[1];function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=t?1e3:1024;if(Math.abs(e)<n)return e+" B";var o=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],r=-1,c=Math.pow(10,a);do{e/=n,++r}while(Math.round(Math.abs(e)*c)/c>=n&&r<o.length-1);return e.toFixed(a)+" "+o[r]}this.iconClass="icon-"+t+"-file-format",this.type=t;var n=a(this.size);this.humanReadableFileSize=n}});H.render=A,H.__scopeId="data-v-7de4bb07";var L=H,R=Object(n["D"])("data-v-279c1c8d"),W=R((function(e,t,a,o,r,c){return Object(n["q"])(),Object(n["d"])("span",{class:r.iconClass},Object(n["z"])(r.type),3)})),N={name:"FileType",props:{url:String},data:function(){return{type:"none",iconClass:"none"}},beforeMount:function(){var e=/(?:\.([^.]+))?$/,t=e.exec(this.url)[1];this.iconClass="icon-"+t+"-file-format",this.type=t}};N.render=W,N.__scopeId="data-v-279c1c8d";var Y=N,G=Object(n["D"])("data-v-6baf8370");Object(n["t"])("data-v-6baf8370");var J={class:"table-col"};Object(n["r"])();var V=G((function(e,t,a,o,r,c){return Object(n["q"])(),Object(n["d"])("a",J,"Not even a link")})),Z={name:"slug",props:["data","index","column"],data:function(){return{}}};Z.render=V,Z.__scopeId="data-v-6baf8370";var $=Z,K={name:"DownloadsTable",data:function(){return{columns:["display-name","type","filesize","file.url"],tableData:this.downloads,options:{}}},props:{downloads:Object},components:{Button:I,FileSize:L,FileType:Y,slug:$}};a("40cc");K.render=q;var U=K,Q={name:"App",components:{Sidebar:m,DownloadsTable:U},methods:{},data:function(){return{counter:0,downloads:null,offset:null,loading:!1}},mounted:function(){var e=this,t=this.axios.create({baseURL:"https://timdaff.api.stdlib.com/sd977-frontend-api@0.1.2/airtable/",headers:{"Content-Type":"application/json"}});t.get("/getAllRecords?table=Downloads").then((function(t){e.downloads=t.data.records,e.counter=t.data.count,e.loading=!1,console.log(t.data),t.offset?e.offset=t.offset:e.offset=null}))["catch"]((function(t){console.log(t),e.error=t,e.errored=!0}))["finally"]((function(){return e.loading=!1}))}};a("f44d");Q.render=h;var X=Q,ee=a("bc3a"),te=a.n(ee),ae=a("2106"),ne=a.n(ae),oe=(a("3ca3"),a("ddb0"),a("6c02")),re=a("cf05"),ce=a.n(re),le={class:"home"},ie=Object(n["h"])("img",{alt:"Vue logo",src:ce.a},null,-1);function se(e,t,a,o,r,c){var l=Object(n["x"])("HelloWorld");return Object(n["q"])(),Object(n["d"])("div",le,[ie,Object(n["h"])(l,{msg:"Welcome to Your Vue.js App"})])}var ue=Object(n["D"])("data-v-1505c045");Object(n["t"])("data-v-1505c045");var de={class:"hello"},be=Object(n["f"])('<p data-v-1505c045> For a guide and recipes on how to configure / customize this project,<br data-v-1505c045> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1505c045>vue-cli documentation</a>. </p><h3 data-v-1505c045>Installed CLI Plugins</h3><ul data-v-1505c045><li data-v-1505c045><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1505c045>babel</a></li><li data-v-1505c045><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1505c045>router</a></li><li data-v-1505c045><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-1505c045>vuex</a></li><li data-v-1505c045><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-1505c045>eslint</a></li></ul><h3 data-v-1505c045>Essential Links</h3><ul data-v-1505c045><li data-v-1505c045><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1505c045>Core Docs</a></li><li data-v-1505c045><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1505c045>Forum</a></li><li data-v-1505c045><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1505c045>Community Chat</a></li><li data-v-1505c045><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1505c045>Twitter</a></li><li data-v-1505c045><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1505c045>News</a></li></ul><h3 data-v-1505c045>Ecosystem</h3><ul data-v-1505c045><li data-v-1505c045><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1505c045>vue-router</a></li><li data-v-1505c045><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1505c045>vuex</a></li><li data-v-1505c045><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1505c045>vue-devtools</a></li><li data-v-1505c045><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1505c045>vue-loader</a></li><li data-v-1505c045><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1505c045>awesome-vue</a></li></ul>',7);Object(n["r"])();var ve=ue((function(e,t,a,o,r,c){return Object(n["q"])(),Object(n["d"])("div",de,[Object(n["h"])("h1",null,Object(n["z"])(a.msg),1),be])})),fe={name:"HelloWorld",props:{msg:String}};a("3a33");fe.render=ve,fe.__scopeId="data-v-1505c045";var pe=fe,he={name:"Home",components:{HelloWorld:pe}};he.render=se;var je=he,Oe=[{path:"/",name:"Home",component:je},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ge=Object(oe["a"])({history:Object(oe["b"])(),routes:Oe}),me=ge,we=a("5502"),ye=Object(we["a"])({state:{},mutations:{},actions:{},modules:{}});a("70ce");Object(n["c"])(X).use(ye).use(me).use(ne.a,te.a).mount("#app")},"70ce":function(e,t,a){},"8dae":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f44d:function(e,t,a){"use strict";a("34e1")}});
//# sourceMappingURL=app.11513bd5.js.map