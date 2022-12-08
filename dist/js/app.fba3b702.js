(function(){"use strict";var e={3320:function(e,t,r){var n={};r.r(n),r.d(n,{reqAddOrUpdateShopCart:function(){return z},reqAddressInfo:function(){return te},reqCartList:function(){return K},reqCategoryList:function(){return F},reqDeleteCartById:function(){return Y},reqGetBannerList:function(){return D},reqGetCode:function(){return J},reqGetFloorList:function(){return B},reqGetSearchInfo:function(){return H},reqGoodsInfo:function(){return M},reqMyOrderList:function(){return se},reqOrderInfo:function(){return re},reqPayInfo:function(){return ae},reqPayStatus:function(){return oe},reqSubmitOrder:function(){return ne},reqUpdateCheckedByid:function(){return V},reqUserInfo:function(){return X},reqUserLogin:function(){return W},reqUserRegister:function(){return Q},reqlogout:function(){return ee}});var a=r(6769),o=r.n(a),s=r(6426),i=r.n(s),u=r(144),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("router-view"),r("Footer",{directives:[{name:"show",rawName:"v-show",value:e.$route.meta.show,expression:"$route.meta.show"}]})],1)},l=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"top"},[n("div",{staticClass:"container"},[n("div",{staticClass:"loginList"},[n("p",[e._v("尚品汇欢迎您！")]),e.userName?n("p",[n("a",[e._v(e._s(e.userName))]),n("a",{on:{click:e.logOut}},[e._v("退出登录")])]):n("p",[n("span",[e._v("请")]),n("router-link",{attrs:{to:"/login"}},[e._v("登录")]),n("router-link",{staticClass:"register",attrs:{to:"/Register"}},[e._v("免费注册")])],1)]),n("div",{staticClass:"typeList"},[n("router-link",{attrs:{to:"/center/myorder"}},[e._v("我的订单")]),n("router-link",{attrs:{to:"/shopcart"}},[e._v("我的购物车")]),n("a",{attrs:{href:"###"}},[e._v("我的尚品汇")]),n("a",{attrs:{href:"###"}},[e._v("尚品汇会员")]),n("a",{attrs:{href:"###"}},[e._v("企业采购")]),n("a",{attrs:{href:"###"}},[e._v("关注尚品汇")]),n("a",{attrs:{href:"###"}},[e._v("合作招商")]),n("a",{attrs:{href:"###"}},[e._v("商家后台")])],1)])]),n("div",{staticClass:"bottom"},[n("h1",{staticClass:"logoArea"},[n("router-link",{staticClass:"logo",attrs:{to:"/home",title:"尚品汇"}},[n("img",{attrs:{src:r(6226),alt:""}})])],1),n("div",{staticClass:"searchArea"},[n("form",{staticClass:"searchForm",attrs:{action:"###"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),n("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:e.goSearch}},[e._v(" 搜索 ")])])])])])},f=[],m=r(3019),p=r(629),g={name:"Header",data:function(){return{keyword:""}},methods:{goSearch:function(){if(this.$route.query){var e={name:"soso",params:{keyword:this.keyword||void 0}};e.query=this.$route.query,this.$router.push(e)}},logOut:function(){try{this.$store.dispatch("logout"),this.$router.push("/home")}catch(e){console.log(e.message)}}},computed:(0,m.Z)({},(0,p.rn)({userName:function(e){return e.user.userInfo.name}})),mounted:function(){var e=this;this.$bus.$on("clearkeyword",(function(){e.keyword=""}))}},h=g,v=r(1001),b=(0,v.Z)(h,d,f,!1,null,"2d3e07f8",null),w=b.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-container"},[n("div",{staticClass:"footerList"},[n("div",{staticClass:"footerItem"},[n("h4",[e._v("购物指南")]),n("ul",{staticClass:"footerItemCon"},[n("li",[e._v("购物流程")]),n("li",[e._v("会员介绍")]),n("li",[e._v("生活旅行/团购")]),n("li",[e._v("常见问题")]),n("li",[e._v("购物指南")])])]),n("div",{staticClass:"footerItem"},[n("h4",[e._v("配送方式")]),n("ul",{staticClass:"footerItemCon"},[n("li",[e._v("上门自提")]),n("li",[e._v("211限时达")]),n("li",[e._v("配送服务查询")]),n("li",[e._v("配送费收取标准")]),n("li",[e._v("海外配送")])])]),n("div",{staticClass:"footerItem"},[n("h4",[e._v("支付方式")]),n("ul",{staticClass:"footerItemCon"},[n("li",[e._v("货到付款")]),n("li",[e._v("在线支付")]),n("li",[e._v("分期付款")]),n("li",[e._v("邮局汇款")]),n("li",[e._v("公司转账")])])]),n("div",{staticClass:"footerItem"},[n("h4",[e._v("售后服务")]),n("ul",{staticClass:"footerItemCon"},[n("li",[e._v("售后政策")]),n("li",[e._v("价格保护")]),n("li",[e._v("退款说明")]),n("li",[e._v("返修/退换货")]),n("li",[e._v("取消订单")])])]),n("div",{staticClass:"footerItem"},[n("h4",[e._v("特色服务")]),n("ul",{staticClass:"footerItemCon"},[n("li",[e._v("夺宝岛")]),n("li",[e._v("DIY装机")]),n("li",[e._v("延保服务")]),n("li",[e._v("尚品汇E卡")]),n("li",[e._v("尚品汇通信")])])]),n("div",{staticClass:"footerItem"},[n("h4",[e._v("帮助中心")]),n("img",{attrs:{src:r(4371)}})])]),n("div",{staticClass:"copyright"},[n("ul",{staticClass:"helpLink"},[n("li",[e._v(" 关于我们 "),n("span",{staticClass:"space"})]),n("li",[e._v(" 联系我们 "),n("span",{staticClass:"space"})]),n("li",[e._v(" 关于我们 "),n("span",{staticClass:"space"})]),n("li",[e._v(" 商家入驻 "),n("span",{staticClass:"space"})]),n("li",[e._v(" 营销中心 "),n("span",{staticClass:"space"})]),n("li",[e._v(" 友情链接 "),n("span",{staticClass:"space"})]),n("li",[e._v(" 关于我们 "),n("span",{staticClass:"space"})]),n("li",[e._v(" 营销中心 "),n("span",{staticClass:"space"})]),n("li",[e._v(" 友情链接 "),n("span",{staticClass:"space"})]),n("li",[e._v("关于我们")])]),n("p",[e._v("地址：北京市昌平区宏福科技园综合楼6层")]),n("p",[e._v("京ICP备19006430号")])])])])}],_={name:"Footer"},C=_,I=(0,v.Z)(C,y,k,!1,null,"0d0f8fe3",null),x=I.exports,N={name:"App",components:{Header:w,Footer:x}},E=N,L=(0,v.Z)(E,c,l,!1,null,null,null),R=L.exports,S=r(8345),O=r(6198),T=[{path:"/center",component:function(){return r.e(210).then(r.bind(r,1210))},children:[{path:"myorder",component:function(){return r.e(625).then(r.bind(r,9625))}},{path:"groupbuy",component:function(){return r.e(270).then(r.bind(r,2270))}},{path:"",redirect:"myorder"}],meta:{show:!0}},{path:"/paySuccess",component:function(){return r.e(785).then(r.bind(r,1785))},meta:{show:!0}},{path:"/pay",component:function(){return r.e(896).then(r.bind(r,5896))},meta:{show:!0},beforeEnter:function(e,t,r){"/trade"==t.path?r():r(!1)}},{path:"/trade",component:function(){return r.e(667).then(r.bind(r,7667))},meta:{show:!0},beforeEnter:function(e,t,r){"/shopcart"==t.path?r():r(!1)}},{path:"/shopcart",component:function(){return r.e(929).then(r.bind(r,1929))},name:"ShopCart",meta:{show:!0}},{path:"/addCartsuccess",component:function(){return r.e(260).then(r.bind(r,1260))},name:"addcartsuccess",meta:{show:!0}},{path:"*",redirect:"/Home"},{path:"/detail/:skuId",component:function(){return Promise.all([r.e(462),r.e(668)]).then(r.bind(r,9668))},meta:{show:!0}},{path:"/login",component:function(){return r.e(540).then(r.bind(r,3540))},meta:{show:!0}},{path:"/home",component:function(){return Promise.all([r.e(462),r.e(432)]).then(r.bind(r,4432))}},{path:"/register",component:function(){return r.e(498).then(r.bind(r,6498))}},{path:"/search/:keyword?",name:"soso",component:function(){return r.e(854).then(r.bind(r,2854))},meta:{show:!0},props:function(e){return{keyword:e.params.keyword,k:e.query.k}}}],A=(r(1703),r(9669)),P=r.n(A),Z=r(4865),U=r.n(Z),$=P().create({baseURL:"/api",timeout:5e3});$.interceptors.request.use((function(e){return De.state.detail.uuid_token&&(e.headers.userTempId=De.state.detail.uuid_token),De.state.user.token&&(e.headers.token=De.state.user.token),U().start(),e})),$.interceptors.response.use((function(e){return U().done(),e.data}),(function(e){return Promise.reject(new Error("faile"))}));var q=$,G=P().create({baseURL:"/mock",timeout:5e3});G.interceptors.request.use((function(e){return U().start(),e})),G.interceptors.response.use((function(e){return U().done(),e.data}),(function(e){return Promise.reject(new Error("faile"))}));var j=G,F=function(){return q.get("/product/getBaseCategoryList")},D=function(){return j.get("/banner")},B=function(){return j.get("/floor")},H=function(e){return q({url:"/list",method:"post",data:e})},M=function(e){return q({url:"/item/".concat(e),method:"get"})},z=function(e,t){return q({url:"/cart/addToCart/".concat(e,"/").concat(t),method:"post"})},K=function(){return q({url:"/cart/cartList",method:"get"})},Y=function(e){return q({url:"/cart/deleteCart/".concat(e),method:"delete"})},V=function(e,t){return q({url:"/cart/checkCart/".concat(e,"/").concat(t),method:"get"})},J=function(e){return q({url:"/user/passport/sendCode/".concat(e),method:"get"})},Q=function(e){return q({url:"/user/passport/register",data:e,method:"post"})},W=function(e){return q({url:"/user/passport/login",data:e,method:"post"})},X=function(){return q({url:"/user/passport/auth/getUserInfo",method:"get"})},ee=function(){return q({url:"/user/passport/logout",method:"get"})},te=function(){return q({url:"/user/userAddress/auth/findUserAddressList/",method:"get"})},re=function(){return q({url:"/order/auth/trade",method:"get"})},ne=function(e,t){return q({url:"/order/auth/submitOrder?tradeNo=".concat(e),data:t,method:"post"})},ae=function(e){return q({url:"/payment/weixin/createNative/".concat(e),method:"get"})},oe=function(e){return q({url:"/payment/weixin/queryPayStatus/".concat(e),method:"get"})},se=function(e,t){return q({url:"/order/auth/".concat(e,"/").concat(t),method:"get"})},ie={categoryList:[],bannerList:[],floorList:[]},ue={CATEGORYYLIST:function(e,t){e.categoryList=t,e.categoryList.length=16},GETBANNERLIST:function(e,t){e.bannerList=t},GETFlOORLIST:function(e,t){e.floorList=t}},ce={categoryList:function(e){return(0,O.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,F();case 3:n=t.sent,200==n.code&&r("CATEGORYYLIST",n.data);case 5:case"end":return t.stop()}}),t)})))()},getBannerList:function(e){return(0,O.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,D();case 3:n=t.sent,200==n.code&&r("GETBANNERLIST",n.data);case 5:case"end":return t.stop()}}),t)})))()},getFloorList:function(e){return(0,O.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,B();case 3:n=t.sent,200==n.code&&r("GETFlOORLIST",n.data);case 5:case"end":return t.stop()}}),t)})))()}},le={},de={state:ie,mutations:ue,actions:ce,getters:le},fe={searchList:{}},me={GETSEARCHLIST:function(e,t){e.searchList=t}},pe={getSearchList:function(e){var t=arguments;return(0,O.Z)(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.length>1&&void 0!==t[1]?t[1]:{},r.next=4,H(a);case 4:o=r.sent,(o.code=200)&&n("GETSEARCHLIST",o.data);case 6:case"end":return r.stop()}}),r)})))()}},ge={goodsList:function(e){return e.searchList.goodsList||[]},attrsList:function(e){return e.searchList.attrsList||[]},trademarkList:function(e){return e.searchList.trademarkList||[]}},he={state:fe,mutations:me,actions:pe,getters:ge},ve=r(5934),be=function(){var e=localStorage.getItem("UUIDTOKEN");return e||(e=(0,ve.Z)(),localStorage.setItem("UUIDTOKEN",e)),e},we={goodIofo:{},uuid_token:be()},ye={GETGOODIOFO:function(e,t){e.goodIofo=t}},ke={getGoodIofo:function(e,t){return(0,O.Z)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,M(t);case 3:a=r.sent,200==a.code&&n("GETGOODIOFO",a.data);case 5:case"end":return r.stop()}}),r)})))()},addOrUpdateShopCart:function(e,t){return(0,O.Z)(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit,n=t.skuId,a=t.skuNum,r.next=4,z(n,a);case 4:if(o=r.sent,200!=o.code){r.next=9;break}return r.abrupt("return","ok");case 9:return r.abrupt("return",Promise.reject(new Error("faile")));case 10:case"end":return r.stop()}}),r)})))()}},_e={categoryView:function(e){return e.goodIofo.categoryView||{}},skuInfo:function(e){return e.goodIofo.skuInfo||{}},spuSaleAttrList:function(e){return e.goodIofo.spuSaleAttrList||[]}},Ce={state:we,mutations:ye,actions:ke,getters:_e},Ie={carList:[]},xe={GETCARTLIST:function(e,t){e.carList=t}},Ne={getCartList:function(e){return(0,O.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,K();case 3:n=t.sent,200==n.code&&r("GETCARTLIST",n.data);case 5:case"end":return t.stop()}}),t)})))()},deleteCartListBySkuId:function(e,t){return(0,O.Z)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit,r.next=3,Y(t);case 3:if(n=r.sent,200!=n.code){r.next=8;break}return r.abrupt("return","ok");case 8:return r.abrupt("return",Promise.reject(new Error("faile")));case 9:case"end":return r.stop()}}),r)})))()},updateCheckedById:function(e,t){return(0,O.Z)(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit,n=t.skuId,a=t.isChecked,r.next=4,V(n,a);case 4:if(o=r.sent,200!=o.code){r.next=9;break}return r.abrupt("return","ok");case 9:return r.abrupt("return",Promise.reject(new Error("faile")));case 10:case"end":return r.stop()}}),r)})))()},deleteAllCheckedCart:function(e){var t=e.dispatch,r=e.getters,n=[];return r.carList.cartInfoList.forEach((function(e){var r=1==e.isChecked?t("deleteCartListBySkuId",e.skuId):"";n.push(r)})),Promise.all(n)},updateAllCartChecked:function(e,t){var r=e.dispatch,n=e.state,a=[];return n.carList[0].cartInfoList.forEach((function(e){var n=r("updateCheckedById",{skuId:e.skuId,isChecked:t});a.push(n)})),Promise.all(a)}},Ee={carList:function(e){return e.carList[0]||{}}},Le={state:Ie,mutations:xe,actions:Ne,getters:Ee},Re=function(e){localStorage.setItem("Token",e)},Se=function(){return localStorage.getItem("Token")},Oe=function(){return localStorage.removeItem("Token")},Te={code:"",token:Se(),userInfo:{}},Ae={getCode:function(e,t){return(0,O.Z)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,J(t);case 3:a=r.sent,200==a.code&&n("GETCODE",a.data);case 5:case"end":return r.stop()}}),r)})))()},userRegister:function(e,t){return(0,O.Z)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit,r.next=3,Q(t);case 3:if(n=r.sent,200!=n.code){r.next=8;break}return r.abrupt("return","ok");case 8:return r.abrupt("return",Promise.reject(new Error("faile")));case 9:case"end":return r.stop()}}),r)})))()},reqUserLogin:function(e,t){return(0,O.Z)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,W(t);case 3:a=r.sent,200===a.code&&(n("USERLOGIN",a.data.token),Re(a.data.token));case 5:case"end":return r.stop()}}),r)})))()},getUserInfo:function(e){return(0,O.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,X();case 3:if(n=t.sent,200!=n.code){t.next=9;break}return r("USERINFO",n.data),t.abrupt("return","ok");case 9:return t.abrupt("return",Promise.reject(new Error("fail")));case 10:case"end":return t.stop()}}),t)})))()},logout:function(e){return(0,O.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,ee();case 3:if(n=t.sent,200!=n.code){t.next=8;break}r("CLEAR",n.data),t.next=9;break;case 8:return t.abrupt("return",Promise.reject(new Error("falie")));case 9:case"end":return t.stop()}}),t)})))()}},Pe={GETCODE:function(e,t){e.code=t},USERLOGIN:function(e,t){e.token=t},USERINFO:function(e,t){e.userInfo=t},CLEAR:function(e){e.userInfo={},e.token="",Oe()}},Ze={},Ue={state:Te,actions:Ae,mutations:Pe,getters:Ze},$e={getUserAddress:function(e){return(0,O.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,te();case 3:n=t.sent,200==n.code&&r("GETUSERADDRESS",n.data);case 5:case"end":return t.stop()}}),t)})))()},getOrderInfo:function(e){return(0,O.Z)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,re();case 3:n=t.sent,200==n.code&&r("GETORDERINFO",n.data);case 5:case"end":return t.stop()}}),t)})))()}},qe={GETUSERADDRESS:function(e,t){e.address=t},GETORDERINFO:function(e,t){e.orderInfo=t}},Ge={address:[],orderInfo:{}},je={},Fe={actions:$e,mutations:qe,state:Ge,getters:je};u["default"].use(p.ZP);var De=new p.ZP.Store({modules:{home:de,search:he,detail:Ce,shopcart:Le,user:Ue,trade:Fe}}),Be=void 0,He=S.Z.prototype.push,Me=S.Z.prototype.push;S.Z.prototype.push=function(e,t,r){t&&r?He.call(this,e,t,r):He.call(this,e,(function(){}),(function(){}))},S.Z.prototype.replace=function(e,t,r){t&&r?Me.call(this,e,t,r):Me.call(this,e,(function(){}),(function(){}))};var ze=new S.Z({routes:T,scrollBehavior:function(e,t,r){return{y:0}}});ze.beforeEach(function(){var e=(0,O.Z)(regeneratorRuntime.mark((function e(t,r,n){var a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=De.state.user.token,o=De.state.user.userInfo.name,!a){e.next=24;break}if("/login"!=t.path&&"/register"!=t.path){e.next=7;break}n("/home"),e.next=22;break;case 7:if(!o){e.next=11;break}n(),e.next=22;break;case 11:return e.prev=11,e.next=14,De.dispatch("getUserInfo");case 14:n(),e.next=22;break;case 17:return e.prev=17,e.t0=e["catch"](11),e.next=21,De.dispatch("logout");case 21:Be.$router.push("/login");case 22:e.next=26;break;case 24:s=t.path,s.includes("/trade")||s.includes("/pay")||s.includes("/center")?n("/login?redirect="+s):n();case 26:case"end":return e.stop()}}),e,null,[[11,17]])})));return function(t,r,n){return e.apply(this,arguments)}}());var Ke=ze,Ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"type-nav"},[r("div",{staticClass:"container"},[r("div",{on:{mouseleave:e.leaveIndex,mouseenter:e.enterShow}},[r("h2",{staticClass:"all"},[e._v("全部商品分类")]),r("transition",{attrs:{name:"sort"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"sort"},[r("div",{staticClass:"all-sort-list2",on:{click:e.goSearch}},e._l(e.categoryList,(function(t,n){return r("div",{key:t.categoryId,staticClass:"item bo",class:{dapigu:e.currentIndex==n}},[r("h3",{on:{mouseenter:function(t){return e.changeIndex(n)}}},[r("a",{attrs:{"data-categoryName":t.categoryName,"data-categoryId1":t.categoryId}},[e._v(e._s(t.categoryName))])]),r("div",{staticClass:"item-list clearfix",style:{display:e.currentIndex==n?"block":"none"}},e._l(t.categoryChild,(function(t){return r("div",{key:t.categoryId,staticClass:"subitem"},[r("dl",{staticClass:"fore"},[r("dt",[r("a",{attrs:{"data-categoryName":t.categoryName,"data-categoryId2":t.categoryId}},[e._v(e._s(t.categoryName))])]),r("dd",e._l(t.categoryChild,(function(t){return r("em",{key:t.categoryId},[r("a",{attrs:{"data-categoryName":t.categoryName,"data-categoryId3":t.categoryId}},[e._v(e._s(t.categoryName))])])})),0)])])})),0)])})),0)])])],1),e._m(0)])])},Ve=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"nav"},[r("a",{attrs:{href:"###"}},[e._v("服装城")]),r("a",{attrs:{href:"###"}},[e._v("美妆馆")]),r("a",{attrs:{href:"###"}},[e._v("尚品汇超市")]),r("a",{attrs:{href:"###"}},[e._v("全球购")]),r("a",{attrs:{href:"###"}},[e._v("闪购")]),r("a",{attrs:{href:"###"}},[e._v("团购")]),r("a",{attrs:{href:"###"}},[e._v("有趣")]),r("a",{attrs:{href:"###"}},[e._v("秒杀")])])}],Je=r(3493),Qe=r.n(Je),We={name:"TypeNav",data:function(){return{currentIndex:-1,show:!0}},mounted:function(){this.$store.dispatch("categoryList"),"/home"!=this.$route.path&&(this.show=!1)},computed:(0,m.Z)({},(0,p.rn)({categoryList:function(e){return e.home.categoryList}})),methods:{leaveIndex:function(){this.currentIndex=-1,"/home"!=this.$route.path&&(this.show=!1)},changeIndex:Qe()((function(e){this.currentIndex=e}),50),goSearch:function(e){var t=e.target,r=t.dataset,n=r.categoryname,a=r.categoryid1,o=r.categoryid2,s=r.categoryid3;if(n){var i={name:"soso"},u={categoryName:n};a?u.categoryId1=a:o?u.categoryId2=o:u.categoryId3=s,this.$route.params&&(i.params=this.$route.params,i.query=u,this.$router.push(i))}},enterShow:function(){"/home"!=this.$route.path&&(this.show=!0)}}},Xe=We,et=(0,v.Z)(Xe,Ye,Ve,!1,null,"638318c2",null),tt=et.exports,rt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pagination"},[r("button",{attrs:{disabled:1==e.pageNo},on:{click:function(t){return e.$emit("getPageNo",e.pageNo-1)}}},[e._v(" 上一页 ")]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.startNumAndEndNumber.start>1,expression:"startNumAndEndNumber.start > 1"}],class:{active:1==e.pageNo},on:{click:function(t){return e.$emit("getPageNo",1)}}},[e._v(" 1 ")]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.startNumAndEndNumber.start>2,expression:"startNumAndEndNumber.start > 2"}]},[e._v("···")]),e._l(e.startNumAndEndNumber.end,(function(t,n){return r("button",{directives:[{name:"show",rawName:"v-show",value:t>=e.startNumAndEndNumber.start,expression:"page >= startNumAndEndNumber.start"}],key:n,class:{active:e.pageNo==t},on:{click:function(r){return e.$emit("getPageNo",t)}}},[e._v(" "+e._s(t)+" ")])})),r("button",{directives:[{name:"show",rawName:"v-show",value:e.startNumAndEndNumber.end<e.totalPage-1,expression:"startNumAndEndNumber.end < totalPage - 1"}]},[e._v("···")]),r("button",{directives:[{name:"show",rawName:"v-show",value:e.startNumAndEndNumber.end<e.totalPage,expression:"startNumAndEndNumber.end < totalPage"}],class:{active:e.pageNo==e.totalPage},on:{click:function(t){return e.$emit("getPageNo",e.totalPage)}}},[e._v(" "+e._s(e.totalPage)+" ")]),r("button",{attrs:{disabled:e.pageNo==e.totalPage},on:{click:function(t){return e.$emit("getPageNo",e.pageNo+1)}}},[e._v("下一页")]),r("button",{staticStyle:{"margin-left":"30px"}},[e._v("共 "+e._s(e.total)+" 条")])],2)},nt=[],at={name:"Pagination",props:["pageSize","pageNo","total","continues"],computed:{totalPage:function(){return Math.ceil(this.total/this.pageSize)},startNumAndEndNumber:function(){var e=this.totalPage,t=this.pageNo,r=this.total,n=this.continues,a=0,o=0;return n>r?(a=1,o=e):(a=t-parseInt(n/2),o=t+parseInt(n/2)),a<1&&(a=1,o=n),o>e&&(a=e-n+1,o=e),{start:a,end:o}}}},ot=at,st=(0,v.Z)(ot,rt,nt,!1,null,"151e2801",null),it=st.exports,ut=r(5623),ct=r.n(ut),lt=JSON.parse('[{"id":"1","imgUrl":"/images/banner1.jpg"},{"id":"2","imgUrl":"/images/banner2.jpg"},{"id":"3","imgUrl":"/images/banner3.jpg"},{"id":"4","imgUrl":"/images/banner4.jpg"}]'),dt=JSON.parse('[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴2","4K电视2","空气净化器2","IH电饭煲2","滚筒洗衣机2","电热水器2"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门2"},{"url":"#","text":"大家电2"},{"url":"#","text":"生活电器2"},{"url":"#","text":"厨房电器2"},{"url":"#","text":"应季电器2"},{"url":"#","text":"空气/净水2"},{"url":"#","text":"高端电器2"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]');ct().mock("/mock/banner",{code:200,data:lt}),ct().mock("/mock/floor",{code:200,data:dt});var ft=r(4371),mt=r(7751),pt=r(2954),gt=r(4051),ht=r.n(gt);u["default"].use(pt.ZP),pt.ZP.Validator.localize("zh_CN",{messages:(0,m.Z)((0,m.Z)({},ht().messages),{},{is:function(e){return"".concat(e,"必须与密码相同")}}),attributes:{phone:"手机号",code:"验证码",password:"密码",password1:"确认密码",agree:"协议"}}),pt.ZP.Validator.extend("tongyi",{validate:function(e){return e},getMessage:function(e){return e+"必须同意"}}),u["default"].component(tt.name,tt),u["default"].component(it.name,it),u["default"].component(i().name,i()),u["default"].use(S.Z),u["default"].prototype.$msgbox=o(),u["default"].prototype.$alert=o().alert,u["default"].use(mt.Z,{preLoad:1.3,error:"dist/error.png",loading:ft,attempt:1}),u["default"].config.productionTip=!1,new u["default"]({el:"#app",beforeCreate:function(){u["default"].prototype.$bus=this,u["default"].prototype.$API=n},render:function(e){return e(R)},router:Ke,store:De})},6226:function(e,t,r){e.exports=r.p+"img/logo.d600ca2b.png"},4371:function(e,t,r){e.exports=r.p+"img/wx_cz.f036c823.jpg"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<s&&(s=o));if(i){e.splice(l--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{210:"5da49749",260:"313e9b51",270:"33ae0f6b",432:"e30cbdba",462:"00875db5",498:"2292c081",540:"44ffe013",625:"ed3dd7ce",667:"e03ab662",668:"578488db",785:"5e0979cc",854:"8102055f",896:"f6b10f7c",929:"7dd16d96"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{210:"607fda9e",260:"502f663d",432:"3d4585d6",498:"8dbefc87",540:"fc63ce57",667:"05e7dea5",668:"e7803bc6",785:"318f65b5",854:"c1b02ef3",896:"e82bba7b",929:"79070168"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue_test:";r.l=function(n,a,o,s){if(e[n])e[n].push(a);else{var i,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[a];var f=function(t,r){i.onerror=i.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,a.parentNode.removeChild(a),n(u)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){a=s[n],o=a.getAttribute("data-href");if(o===e||o===t)return a}},n=function(n){return new Promise((function(a,o){var s=r.miniCssF(n),i=r.p+s;if(t(s,i))return a();e(n,i,a,o)}))},a={143:0};r.f.miniCss=function(e,t){var r={210:1,260:1,432:1,498:1,540:1,667:1,668:1,785:1,854:1,896:1,929:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(r,n){a=e[t]=[r,n]}));n.push(a[2]=o);var s=r.p+r.u(t),i=new Error,u=function(n){if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};r.l(s,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,s=n[0],i=n[1],u=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(u)var l=u(r)}for(t&&t(n);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3320)}));n=r.O(n)})();
//# sourceMappingURL=app.fba3b702.js.map