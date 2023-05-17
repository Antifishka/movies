"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[451],{451:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r,a,c,i,s,o=t(5861),u=t(885),p=t(4687),f=t.n(p),h=t(2791),l=t(7689),d=t(4390),v=t(3524),x=t(168),g=t(7691),m=g.ZP.li(r||(r=(0,x.Z)(["\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), \n   0 1px 1px 0 rgb(0 0 0 / 14%),\n   0 2px 1px -1px rgb(0 0 0 / 12%);\n"]))),w=g.ZP.img(a||(a=(0,x.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),b=g.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 4px;\n  text-align: center;\n  font-size: 12px;\n"]))),y=g.ZP.p(i||(i=(0,x.Z)(["\n  margin-top: auto;\n"]))),Z=t(184),k=function(e){var n=e.imagePath,t=e.name,r=e.character;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(w,{src:n,alt:t,width:"100"}),(0,Z.jsxs)(b,{children:[(0,Z.jsx)("h4",{children:t}),(0,Z.jsxs)(y,{children:["Character:",(0,Z.jsx)("br",{}),r]})]})]})},j=g.ZP.ul(s||(s=(0,x.Z)(["\n  padding: 16px 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 16px;\n"]))),P=function(){var e=(0,l.UO)().movieId,n=(0,h.useState)([]),t=(0,u.Z)(n,2),r=t[0],a=t[1];return(0,h.useEffect)((function(){function n(){return(n=(0,o.Z)(f().mark((function n(){var t,r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.Z.fetchMovieCredits(e);case 3:t=n.sent,r=t.length>16?t.slice(0,16):t,console.log(r),a(r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),r?(0,Z.jsx)(j,{children:r.map((function(e){var n=e.id,t=e.profile_path,r=e.original_name,a=e.character;return(0,Z.jsx)(k,{imagePath:t?v.MH+t:v.si,name:r,character:a},n)}))}):null}},3524:function(e,n,t){t.d(n,{AG:function(){return c},MH:function(){return r},si:function(){return a}});var r="https://image.tmdb.org/t/p/w500",a="https://via.placeholder.com/100x150",c="https://placehold.jp/200x300.png"},4390:function(e,n,t){var r=t(5861),a=t(4687),c=t.n(a),i=t(1044).ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e09f06c48afcb3ebfd8a25b0b6965d1e",language:"en-US"}});function s(){return(s=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/day?page=".concat(n));case 2:if(t=e.sent,(r=t.data).results.length){e.next=6;break}throw new Error("Sorry, there are no movies.");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie?query=".concat(n,"&page=").concat(t));case 2:if(r=e.sent,(a=r.data).results.length){e.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/credits"));case 2:if(t=e.sent,(r=t.data.cast).length){e.next=6;break}throw new Error("Not found cast...");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h={fetchTrendingMovies:function(e){return s.apply(this,arguments)},fetchMovieById:function(e){return o.apply(this,arguments)},fetchSearchMovies:function(e,n){return u.apply(this,arguments)},fetchMovieCredits:function(e){return p.apply(this,arguments)},fetchMovieReviews:function(e){return f.apply(this,arguments)}};n.Z=h}}]);
//# sourceMappingURL=451.9c7c2ab8.chunk.js.map