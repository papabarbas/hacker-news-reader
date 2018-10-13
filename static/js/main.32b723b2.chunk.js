(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(n,t,e){n.exports=e(79)},79:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(29),i=e.n(a),c=e(11),u=e(9),s=e(10),l=e(32),d=e.n(l),f=Object({NODE_ENV:"production",PUBLIC_URL:"/hacer-news-clone"}).URL||"http://localhost:3000/",h=2e4,p={"Content-Type":"application/json",Accept:"application/json"},S=new(function(){function n(t){var e=t.baseURL,r=void 0===e?f:e,o=t.timeout,a=void 0===o?h:o,i=t.headers,c=void 0===i?p:i,s=t.auth;Object(u.a)(this,n);var l=d.a.create({baseURL:r,timeout:a,headers:c,auth:s});l.interceptors.response.use(this.handleSuccess,this.handleError),this.client=l}return Object(s.a)(n,[{key:"handleSuccess",value:function(n){return n}},{key:"handleError",value:function(n){return Promise.reject(n)}},{key:"get",value:function(n){return this.client.get(n).then(function(n){return n.data})}},{key:"post",value:function(n,t){return this.client.post(n,t).then(function(n){return n.data})}},{key:"put",value:function(n,t){return this.client.put(n,t).then(function(n){return n.data})}},{key:"patch",value:function(n,t){return this.client.patch(n,t).then(function(n){return n.data})}},{key:"delete",value:function(n){return this.client.delete(n).then(function(n){return n.data})}}]),n}())({baseURL:"https://hacker-news.firebaseio.com/v0/"}),E={};E.getTopStoryIds=function(){return S.get("/topstories".concat(".json?print=pretty"))},E.getStory=function(n){return S.get("/item/".concat(n).concat(".json?print=pretty"))},E.getStoriesByPage=function(n,t){var e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:t*n,end:(t+1)*n}}(20,t),r=function(n){var t=n.begin,e=n.end;return n.items.slice(t,e)}({begin:e.begin,end:e.end,items:n}).map(function(n){return E.getStory(n)});return Promise.all(r)};var g=E,m="@hnClone/story",b={FETCH_STORY_IDS_REQUEST:"".concat(m,"/FETCH_STORY_IDS_REQUEST"),FETCH_STORY_IDS_SUCCESS:"".concat(m,"/FETCH_STORY_IDS_SUCCESS"),FETCH_STORY_IDS_FAILURE:"".concat(m,"/FETCH_STORY_IDS_FAILURE"),FETCH_STORIES_REQUEST:"".concat(m,"/FETCH_STORIES_REQUEST"),FETCH_STORIES_SUCCESS:"".concat(m,"/FETCH_STORIES_SUCCESS"),FETCH_STORIES_FAILURE:"".concat(m,"/FETCH_STORIES_FAILURE")},y=function(n,t){return{type:n,payload:t}},v={fetchStoryIds:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return t(y(b.FETCH_STORY_IDS_REQUEST),n),g.getTopStoryIds().then(function(n){return t(y(b.FETCH_STORY_IDS_SUCCESS,{storyIds:n})),t(v.fetchStories({storyIds:n,page:0})),n}).catch(function(n){return t(y(b.FETCH_STORY_IDS_FAILURE,n))})}},fetchStories:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){t(y(b.FETCH_STORIES_REQUEST,n));var e=n.storyIds,r=n.page;return g.getStoriesByPage(e,r).then(function(n){return t(y(b.FETCH_STORIES_SUCCESS,{stories:n}))}).catch(function(n){return t(y(b.FETCH_STORIES_FAILURE,n))})}}},T=v,_=e(43),O=e(33),I=e(44),C=e(2),x=e(37),R=e.n(x),w={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"},j=e(38),F=e.n(j),k=e(39),H=e.n(k),U=function(n){var t="";return n&&(n.includes("//")||(n="http://".concat(n)),t=H.a.parse(n).hostname),t.includes("www.")&&(t=t.split("www.")[1]),t},D="https://news.ycombinator.com",L="".concat(D,"/item?id="),Y="".concat(D,"/user?id="),A=function(n){var t=n.url,e=n.id,r="".concat(L).concat(e);return t||r},Q=e(3);function M(){var n=Object(Q.a)(["\n  color: ",";\n  &:visited {\n    color: ",";\n  }\n"]);return M=function(){return n},n}function P(){var n=Object(Q.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return P=function(){return n},n}function z(){var n=Object(Q.a)(["\n  color: ",";\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"]);return z=function(){return n},n}function B(){var n=Object(Q.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return B=function(){return n},n}function N(){var n=Object(Q.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n"]);return N=function(){return n},n}function J(){var n=Object(Q.a)(["\n  border-bottom: 1px solid ",";\n  padding: 14px 24px;\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return J=function(){return n},n}var W=C.b.li(J(),function(n){return n.theme.border}),V=C.b.h3(N(),function(n){return n.theme.text}),$=C.b.span(B(),function(n){return n.theme.textSecondary}),q=C.b.a(z(),function(n){return n.theme.text}),G=C.b.div(P(),function(n){return n.theme.textSecondary}),K=C.b.a(M(),function(n){return n.theme.textSecondary},function(n){return n.theme.textSecondary}),X=F()(),Z="noopener noreferer nofollow",nn=function(n){var t=n.by,e=n.kids,r=void 0===e?[]:e,a=n.title,i=n.id,c=n.url,u=n.score,s=(n.type,n.time),l=U(c)||"news.ycombinator.com",d=A({url:c,id:i}),f="".concat(L).concat(i),h="".concat(Y).concat(t);return o.a.createElement(W,null,o.a.createElement(q,{href:d,rel:Z,target:"_blank"},o.a.createElement(V,null,a," ",o.a.createElement($,null,"(",l))),o.a.createElement(G,null,u," points by"," ",o.a.createElement(K,{href:h,rel:Z,target:"_blank"},t," | "),X.format(new Date(1e3*s).toISOString())," "," | ",o.a.createElement(K,{href:f,rel:Z,target:"_blank"},r.length," comments")))};function tn(){var n=Object(Q.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return tn=function(){return n},n}var en=C.b.ul(tn(),function(n){return n.theme.backgroundSecondary}),rn=function(n){var t=n.stories;return o.a.createElement(en,null,t.map(function(n){return o.a.createElement(nn,Object.assign({},n,{key:n.id}))}))};function on(){var n=Object(Q.a)(["\n  text-align: center;\n\n  span {\n    color: ",";\n    display: inline-block;\n    line-height: 0.1;\n    margin-left: 4px;\n    margin-right: 4px;\n    font-size: 80px;\n    animation-name: ",";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-fill-mode: both;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n\n  span:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(Q.a)(["\n  0% {\n    opacity: .2;\n  }\n\n  20% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: .2\n  }\n"]);return an=function(){return n},n}var cn=Object(C.d)(an()),un=C.b.div(on(),function(n){return n.theme.textSecondary},cn),sn=function(){return o.a.createElement(un,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))};function ln(){var n=Object(Q.a)(["\n  color: ",";\n  font-size: 20px;\n  margin-top: 20px;\n  margin-bottom: 26px;\n"]);return ln=function(){return n},n}function dn(){var n=Object(Q.a)(["\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 200px;\n\n  "," {\n    width: 96%;\n  }\n"]);return dn=function(){return n},n}var fn=C.b.div(dn(),"@media only screen and (max-width: 768px)"),hn=C.b.h1(ln(),function(n){return n.theme.textSecondary}),pn=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(_.a)(this,(n=Object(O.a)(t)).call.apply(n,[this].concat(o)))).fetchStories=function(){var n=e.props,t=n.storyIds,r=n.page,o=n.fetchStories;n.isFetching||o({storyIds:t,page:r})},e}return Object(I.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStoriesFirstPage()}},{key:"render",value:function(){var n=this.props,t=n.stories,e=n.hasMoreStories;return o.a.createElement(C.a,{theme:w},o.a.createElement(fn,null,o.a.createElement(hn,null,"Hacker News Clone"),o.a.createElement(R.a,{dataLength:t.length,next:this.fetchStories,hasMore:e,loader:o.a.createElement(sn,null),style:{height:"100%",overflow:"visible"}},o.a.createElement(rn,{stories:t}))))}}]),t}(r.Component),Sn=e(40),En=Object(Sn.a)(function(n){return n.story.storyIds},function(n){return n.story.stories},function(n,t){return n.length>t.length}),gn=Object(c.b)(function(n){return{stories:n.story.stories,page:n.story.page,storyIds:n.story.storyIds,isfetching:n.story.isfetching,hasMoreStories:En(n)}},function(n){return{fetchStoriesFirstPage:function(){return n(T.fetchStoryIds())},fetchStories:function(t){var e=t.storyIds,r=t.page;return n(T.fetchStories({storyIds:e,page:r}))}}})(pn);function mn(){var n=Object(Q.a)(["\n    * {\n      box-sizing: border-box;\n    }\n    html, body {\n      font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;\n      width: 100vw;\n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n      background-color: ","\n    }\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n    a {\n      text-decoration: none;\n      &:visited {\n        color: inherit;\n      }\n    }\n  "]);return mn=function(){return n},n}var bn=function(){return Object(C.c)(mn(),w.background)},yn=e(5),vn=e(6),Tn={SET_THEME:"".concat("@hnClone/app","/SET_THEME")},_n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"dark"},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case Tn.SET_THEME:return Object(vn.a)({},n,r);default:return n}},On=e(17),In=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case b.FETCH_STORY_IDS_REQUEST:case b.FETCH_STORY_REQUEST:return Object(vn.a)({},n,{isFetching:!0});case b.FETCH_STORY_IDS_SUCCESS:return Object(vn.a)({},n,r);case b.FETCH_STORIES_SUCCESS:return Object(vn.a)({},n,{stories:Object(On.a)(n.stories).concat(Object(On.a)(r.stories)),page:n.page+1,isFetching:!1});default:return n}},Cn=Object(yn.c)({app:_n,story:In}),xn=e(41),Rn=(e(42),[]);Rn.push(xn.a);var wn=Object(yn.d)(yn.a.apply(void 0,Rn)),jn=function(n){return Object(yn.e)(Cn,n,wn)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));bn(),g.getTopStoryIds().then(function(n){return console.log(n)});!function(){var n=jn({});n.dispatch({type:"@hnClone/@@INIT"}),i.a.render(o.a.createElement(c.a,{store:n},o.a.createElement(gn,null)),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[45,2,1]]]);
//# sourceMappingURL=main.32b723b2.chunk.js.map