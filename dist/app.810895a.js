webpackJsonp([0],{127:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_USERS="GET_USERS"},128:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}r(129);var u=r(64),o=n(u),a=r(334),i=n(a),s=r(340),c=n(s),f=r(343),l=n(f);r(347),r(348);var d=r(349),v=n(d),p=r(355),_=n(p),m=r(356),y=n(m);o.default.use(l.default),o.default.use(_.default),o.default.use(y.default);var h=new y.default({routes:i.default,mode:"history"});new o.default({router:h,store:v.default,render:function(e){return e(c.default)}}).$mount("#app")},334:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(335),u=function(e){return e&&e.__esModule?e:{default:e}}(n),o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(u.default));t.default=o},335:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(336),u=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=[{path:"/home/myHome",component:u.default,alias:"/"}]},336:function(e,t,r){function n(e){r(337)}var u=r(125)(r(338),r(339),n,null,null);e.exports=u.exports},337:function(e,t){},338:function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,o){try{var a=t[u](o),i=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(126);t.default={data:function(){return{}},computed:u({},(0,o.mapGetters)(["users"])),created:function(){this.load()},methods:{load:function(){var e=this;return n(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getUsers",[1,10]);case 2:r=t.sent,console.log(r);case 4:case"end":return t.stop()}},t,e)}))()}}}},339:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},e._l(e.users,function(t){return r("div",{staticClass:"list"},[r("div",{staticClass:"item"},[r("label",{staticClass:"item-label arrow",attrs:{id:"item-"+t.id}},[e._v(e._s(t.name))])])])}))},staticRenderFns:[]}},340:function(e,t,r){var n=r(125)(r(341),r(342),null,null,null);e.exports=n.exports},341:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={created:function(){}}},342:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]}},347:function(e,t){},348:function(e,t){},349:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(64),o=n(u),a=r(126),i=n(a),s=r(350),c=n(s),f=r(354);n(f);o.default.use(i.default),t.default=new i.default.Store({modules:{home:c.default},strict:!1,plugins:[]})},350:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var u=r(127),o=n(u),a=r(351),i=n(a),s=r(352),c=n(s),f={users:[]},l=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},o.GET_USERS,function(e,t){e.users=t.result?t.result:[]});t.default={state:f,mutations:l,actions:c,getters:i}},351:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.users=function(e){return e.users}},352:function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(u,o){try{var a=t[u](o),i=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=void 0;var u=function(){function e(e,t){var r=[],n=!0,u=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){u=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(u)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=(t.getUsers=function(){var e=n(regeneratorRuntime.mark(function e(t,r){var n,o,i=t.commit,c=u(r,2),f=c[0],l=c[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.default.userList({_start:f,_limit:l});case 2:return n=e.sent,o=n.json()||{},i(s.GET_USERS,o),e.abrupt("return",o);case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),r(353)),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=r(127),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(i)},353:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(64),u=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return u.default.http.get("/mock/userList",{params:e})}}}},[128]);
//# sourceMappingURL=app.810895a.js.map