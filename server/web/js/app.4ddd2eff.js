(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0355":function(t,e,n){},"0972":function(t,e,n){},"1a21":function(t,e,n){t.exports=n.p+"img/videoAvatar.d5774ace.png"},"1bee":function(t,e,n){},"1eb0":function(t,e,n){t.exports=n.p+"img/h4.b4558806.jpeg"},2038:function(t,e,n){"use strict";var i=n("38c8"),s=n.n(i);s.a},"2e78":function(t,e,n){},"38c8":function(t,e,n){},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.b3b3bca8.png"},5044:function(t,e,n){},"550a":function(t,e,n){"use strict";var i=n("5d65"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("5c0b"),n("2877")),o={},c=Object(r["a"])(o,s,a,!1,null,null,null),l=c.exports,u=(n("be35"),n("944d"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-bar"),n("div",{staticClass:"nav bg-a-active-y d-flex jc-around"},[n("div",{staticClass:"nav-item active"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/"}},[t._v("攻略中心")])],1),n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/"}},[t._v("赛事中心")])],1)]),n("router-view")],1)},f=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"topbar bg-black d-flex ai-center px-3"},[i("img",{staticClass:"logo",attrs:{src:n("4ffd")}}),i("div",{staticClass:"logo_info flex-1"},[i("p",{staticClass:"text-white text-left logo_t"},[t._v("王者荣耀")]),i("p",{staticClass:"logo_i text-t-info text-left"},[t._v("团队成就更多")])]),i("div",{staticClass:"download"},[i("a",{staticClass:"bg-a-active-y text-black",attrs:{href:"#"}},[t._v("立即下载")])])])])}],m={name:"TopBar"},h=m,_=(n("e454"),Object(r["a"])(h,p,v,!1,null,null,null)),b=_.exports,g={name:"Main",components:{TopBar:b}},C=g,w=(n("a006"),Object(r["a"])(C,d,f,!1,null,null,null)),x=w.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("home-swiper"),n("home-nav"),n("home-news"),n("home-hero"),n("home-video"),n("card",{attrs:{title:"新闻资讯",icon:"icon-cc-menu-circle"}}),n("card",{attrs:{title:"新闻资讯",icon:"icon-cc-menu-circle"}}),n("card",{attrs:{title:"新闻资讯",icon:"icon-cc-menu-circle"}})],1)},k=[],j=(n("96cf"),n("1da1")),O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("swiper",{staticClass:"swiper",attrs:{options:t.swiperOptions}},[i("swiper-slide",[i("img",{attrs:{src:n("93e5"),alt:""}})]),i("swiper-slide",[i("img",{attrs:{src:n("d09e"),alt:""}})]),i("swiper-slide",[i("img",{attrs:{src:n("1eb0"),alt:""}})]),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},$=[],H=n("ade3"),E={name:"HomeSwiper",data:function(){var t;return{swiperOptions:(t={autoplay:!0,loop:!0},Object(H["a"])(t,"autoplay",{delay:2e3,disableOnInteraction:!1}),Object(H["a"])(t,"pagination",{el:".swiper-pagination",type:"bullets"}),t)}}},L=E,R=(n("b27e"),Object(r["a"])(L,O,$,!1,null,null,null)),S=R.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav-icon d-flex"},t._l(10,(function(e){return n("div",{key:e,staticClass:"nav-item"},[n("i",{staticClass:"sprite sprite-news"}),n("p",[t._v("爆料站")])])})),0)])},T=[],P={name:"HomeNav"},I=P,M=(n("550a"),Object(r["a"])(I,A,T,!1,null,null,null)),N=M.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("card",{staticClass:"home-new",attrs:{title:"新闻资讯",icon:"icon-cc-menu-circle",categories:t.newsCats},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.category;return t._l(i.newsList,(function(e,i){return n("router-link",{key:i,staticClass:"new-con",attrs:{tag:"div",to:"/articles/"+e._id}},[n("span",{staticClass:"new-name"},[t._v("["+t._s(e.categoryName)+"]")]),n("span",{staticClass:"px-1"},[t._v(" | ")]),n("span",{staticClass:"new-title text-ellipsis"},[t._v(t._s(e.title))]),n("span",{staticClass:"new-date"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])})],1)},q=[],B=n("5a0c"),D=n.n(B),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header d-flex jc-between"},[n("i",{staticClass:"iconfont",class:""+t.icon}),n("div",[t._v(t._s(t.title))]),n("i",{staticClass:"iconfont icon-more"})]),n("div",{staticClass:"card-body"},[n("div",{staticClass:"nav d-flex jc-between"},t._l(t.categories,(function(e,i){return n("div",{key:i,staticClass:"nav-item",class:{active:t.currentIndex===i},on:{click:function(e){return t.$refs.list.swiper.slideTo(i)}}},[n("router-link",{attrs:{to:"/"}},[t._v(t._s(e.name))])],1)})),0),n("div",{staticClass:"swiper"},[n("swiper",{ref:"list",attrs:{options:t.swiperOptions},on:{"slide-change":function(e){return t.slideChange()}}},t._l(t.categories,(function(e,i){return n("swiper-slide",{key:i},[t._t("item",null,{category:e})],2)})),1)],1)])])},J=[],z={name:"Card",props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,require:!0}},data:function(){return{currentIndex:0,swiperOptions:{autoHeight:!0,loop:!0,pagination:{el:".swiper-pagination",type:"bullets"}}}},methods:{slideChange:function(){this.currentIndex=this.$refs.list.swiper.realIndex}}},F=z,G=(n("a3d3"),Object(r["a"])(F,U,J,!1,null,"0452bdd9",null)),K=G.exports,Q={name:"HomeNews",components:{Card:K},data:function(){return{newsCats:[]}},methods:{fetchNewsCats:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:n=e.sent,t.newsCats=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchNewsCats()},filters:{date:function(t){return D()(t).format("MM/DD")}}},W=Q,X=(n("ca91"),Object(r["a"])(W,V,q,!1,null,"4ef9b692",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("card",{staticClass:"home-hero",attrs:{title:"英雄列表",icon:"icon-head",categories:t.heroList},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.category;return[n("div",{staticClass:"d-flex flex-wrap "},t._l(i.heroList,(function(e,i){return n("router-link",{key:i,staticClass:"hero-con",attrs:{tag:"div",to:"/heroes/"+e._id}},[n("img",{staticClass:"hero-avatar",attrs:{src:""+e.avatar}}),n("div",{staticClass:"hero-name"},[t._v(t._s(e.name))])])})),1)]}}])})],1)},tt=[],et={name:"HomeHero",components:{Card:K},data:function(){return{heroList:[]}},methods:{fetchHeroList:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:n=e.sent,t.heroList=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchHeroList()}},nt=et,it=(n("b8d0"),Object(r["a"])(nt,Z,tt,!1,null,"25dcfebb",null)),st=it.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("card",{staticClass:"home-video",attrs:{title:"精彩视频",icon:"icon-head",categories:t.videoList},scopedSlots:t._u([{key:"item",fn:function(e){var i=e.category;return[n("div",{staticClass:"d-flex flex-wrap"},t._l(i.videoList,(function(e,i){return n("router-link",{key:i,staticClass:"video-con",attrs:{tag:"div",to:"/videos/"+e._id}},[n("img",{staticClass:"video-avatar",attrs:{src:""+e.cover}}),n("div",{staticClass:"video-title px-1"},[t._v(t._s(e.title))]),n("div",{staticClass:"video-info d-flex jc-between px-1"},[n("div",{staticClass:"video-play"},[n("i",{staticClass:"iconfont icon-head"}),n("span",[t._v(t._s(e.play))])]),n("div",{staticClass:"video-date"},[n("span",[t._v(t._s(t._f("date")(e.updatedAt)))])])])])})),1)]}}])})],1)},rt=[],ot={name:"HomeVideo",components:{Card:K},data:function(){return{videoList:[]}},methods:{fetchVideoList:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("videos/list");case 2:n=e.sent,t.videoList=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchVideoList()},filters:{date:function(t){return D()(t).format("MM-DD")}}},ct=ot,lt=(n("adf7"),Object(r["a"])(ct,at,rt,!1,null,"d3da07f2",null)),ut=lt.exports,dt={name:"Home",components:{HomeSwiper:S,HomeNav:N,HomeNews:Y,HomeHero:st,HomeVideo:ut,Card:K},data:function(){return{heroList:[]}},methods:{fetchHeroList:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:n=e.sent,t.heroList=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchHeroList()}},ft=dt,pt=Object(r["a"])(ft,y,k,!1,null,null,null),vt=pt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[t.model?n("div",{staticClass:"article-title d-flex"},[n("a",{staticClass:"iconfont icon-back",attrs:{href:"javascript:window.history.back();"}}),n("span",{staticClass:"title flex-1 text-left text-ellipsis"},[t._v(t._s(t.model.title))]),n("span",{staticClass:"date"},[t._v("2020-3-6")])]):t._e(),t.model?n("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.model.body)}}):t._e(),n("div",{staticClass:"article-more"},[t._m(0),t.model.related?n("div",{staticClass:"more-content"},t._l(t.model.related,(function(e){return n("router-link",{key:e._id,staticClass:"text-ellipsis",attrs:{tag:"p",to:"/articles/"+e._id}},[t._v(" "+t._s(e.title)+" ")])})),1):t._e()])])},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"more-title"},[n("i",{staticClass:"iconfont icon-more"}),n("span",[t._v("相关资讯")])])}],_t={name:"Article",props:{id:{required:!0}},data:function(){return{model:{}}},methods:{fetchArticle:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:n=e.sent,t.model=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchArticle()},watch:{id:function(){this.fetchArticle()}}},bt=_t,gt=(n("67ed"),Object(r["a"])(bt,mt,ht,!1,null,null,null)),Ct=gt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.model?n("div",[n("hero-top-bar"),n("hero-top",{attrs:{model:t.model}}),n("hero-skill",{attrs:{model:t.model}})],1):t._e()},xt=[],yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"topbar bg-black d-flex ai-center px-3"},[i("img",{staticClass:"logo",attrs:{src:n("4ffd")}}),i("p",{staticClass:"text-white text-left logo_t"},[t._v("王者荣耀")]),i("p",{staticClass:"logo_i text-t-info text-left flex-1 pl-1"},[t._v("攻略站")]),i("router-link",{staticClass:"hero-more",attrs:{to:"/",tag:"div"}},[t._v("更多英雄 >")])],1)])},kt=[],jt={name:"HeroTopBar"},Ot=jt,$t=(n("2038"),Object(r["a"])(Ot,yt,kt,!1,null,"cad17a94",null)),Ht=$t.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.model.categories?n("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[n("div",{staticClass:"hero-attribute"},[n("div",[t._v(t._s(t.model.title))]),n("h2",{staticClass:"hero-name"},[t._v(t._s(t.model.name))]),n("div",[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),n("div",{staticClass:"hero-score"},[n("span",[t._v("难度")]),n("span",[t._v(t._s(t.model.scores.difficult))]),n("span",[t._v("技能")]),n("span",[t._v(t._s(t.model.scores.skills))]),n("span",[t._v("攻击")]),n("span",[t._v(t._s(t.model.scores.attack))]),n("span",[t._v("生存")]),n("span",[t._v(t._s(t.model.scores.survive))])])])]):t._e()},Lt=[],Rt={name:"HeroTop",props:{model:{type:Object}}},St=Rt,At=(n("62c4"),Object(r["a"])(St,Et,Lt,!1,null,"2c20aa7c",null)),Tt=At.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-skills"},[t._m(0),n("div",{staticClass:"hero-skills-icon d-flex jc-around px-2 mt-2"},t._l(t.model.skills,(function(e,i){return n("img",{key:i,staticClass:"nav-item",class:{active:t.currentIndex===i},attrs:{src:""+t.model.skills[i].icon},on:{click:function(e){return t.$refs.list.swiper.slideTo(i)}}})})),0),n("div",{staticClass:"hero-skills-info"},[n("div",{staticClass:"swiper"},[n("swiper",{ref:"list",attrs:{options:t.swiperOptions},on:{"slide-change":function(e){return t.slideChange()}}},t._l(t.model.skills,(function(e,i){return n("swiper-slide",{key:i},[n("h2",[t._v(t._s(t.model.skills[i].name))]),n("div",[t._v(t._s(t.model.skills[i].description))])])})),1)],1)])])},It=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-skills-button d-flex jc-between"},[n("div",{staticClass:"hero-skills-video"},[n("i",{staticClass:"iconfont icon-video"}),n("span",[t._v("英雄介绍视频")])]),n("div",{staticClass:"hero-skills-img"},[n("i",{staticClass:"iconfont icon-video"}),n("span",[t._v("一图识英雄")])])])}],Mt={name:"HeroSkill",props:{model:{type:Object}},methods:{slideChange:function(){this.currentIndex=this.$refs.list.swiper.realIndex}},data:function(){return{currentIndex:0,swiperOptions:{autoHeight:!0,loop:!0,pagination:{el:".swiper-pagination",type:"bullets"}}}}},Nt=Mt,Vt=(n("932b"),Object(r["a"])(Nt,Pt,It,!1,null,"b6ac1c42",null)),qt=Vt.exports,Bt={name:"Hero",components:{HeroTopBar:Ht,HeroTop:Tt,HeroSkill:qt},props:{id:{required:!0}},data:function(){return{model:{}}},methods:{fetchHero:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:n=e.sent,t.model=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchHero()}},Dt=Bt,Ut=Object(r["a"])(Dt,wt,xt,!1,null,"a146d4a0",null),Jt=Ut.exports,zt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"video-play"},[i("video",{attrs:{src:t.model.video,width:"100%",controls:""}})]),i("div",{staticClass:"video-info d-flex"},[i("img",{staticClass:"video-info-avatar",attrs:{src:n("1a21")}}),i("div",{staticClass:"video-info-content"},[i("div",{staticClass:"video-info-content-title"},[t._v(t._s(t.model.title))]),t._m(0),i("div",{staticClass:"video-info-content-sign"},[t._v(" 个性签名: 这个人很懒, 什么都没有留下(〜￣△￣)〜 ")])])])])},Ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"public"},[n("span",{staticClass:"video-info-content-public"},[t._v("投稿：25")]),n("span",{staticClass:"video-info-content-fans"},[t._v("粉丝：165")])])}],Gt={name:"Video",data:function(){return{model:{}}},props:{id:{required:!0}},methods:{fetchArticle:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("videos/".concat(t.id));case 2:n=e.sent,t.model=n.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchArticle()}},Kt=Gt,Qt=(n("fd5c"),Object(r["a"])(Kt,zt,Ft,!1,null,"4f4ce28a",null)),Wt=Qt.exports;i["a"].use(u["a"]);var Xt=[{path:"/",component:x,children:[{path:"/",name:vt,component:vt},{path:"/articles/:id",name:"article",component:Ct,props:!0},{path:"/videos/:id",name:"video",component:Wt,props:!0}]},{path:"/heroes/:id",name:"hero",component:Jt,props:!0}],Yt=new u["a"]({routes:Xt}),Zt=Yt,te=n("7212"),ee=n.n(te),ne=(n("bbe3"),n("bc3a")),ie=n.n(ne);i["a"].config.productionTip=!1,i["a"].use(ee.a),i["a"].prototype.$http=ie.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),new i["a"]({router:Zt,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"5d65":function(t,e,n){},"62c4":function(t,e,n){"use strict";var i=n("b7aa"),s=n.n(i);s.a},"67ed":function(t,e,n){"use strict";var i=n("2e78"),s=n.n(i);s.a},"932b":function(t,e,n){"use strict";var i=n("e34b"),s=n.n(i);s.a},"93e5":function(t,e,n){t.exports=n.p+"img/h1.13f1b09c.jpeg"},"944d":function(t,e,n){},"9add":function(t,e,n){},"9c0c":function(t,e,n){},a006:function(t,e,n){"use strict";var i=n("0972"),s=n.n(i);s.a},a3d3:function(t,e,n){"use strict";var i=n("bed9"),s=n.n(i);s.a},a69d:function(t,e,n){},adf7:function(t,e,n){"use strict";var i=n("1bee"),s=n.n(i);s.a},b27e:function(t,e,n){"use strict";var i=n("9add"),s=n.n(i);s.a},b7aa:function(t,e,n){},b8d0:function(t,e,n){"use strict";var i=n("5044"),s=n.n(i);s.a},be35:function(t,e,n){},bed9:function(t,e,n){},ca91:function(t,e,n){"use strict";var i=n("a69d"),s=n.n(i);s.a},d09e:function(t,e,n){t.exports=n.p+"img/h2.1152bf8b.jpeg"},e00c:function(t,e,n){},e34b:function(t,e,n){},e454:function(t,e,n){"use strict";var i=n("e00c"),s=n.n(i);s.a},fd5c:function(t,e,n){"use strict";var i=n("0355"),s=n.n(i);s.a}});
//# sourceMappingURL=app.4ddd2eff.js.map