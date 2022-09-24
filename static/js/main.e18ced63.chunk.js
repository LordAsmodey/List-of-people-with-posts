(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var r=s(0),c=s.n(r),n=s(26),a=s.n(n),o=s(14),i=s(9),u=s(4),l=s(27),d=s(10),j="users",b=Object(l.a)({reducerPath:"users",baseQuery:Object(d.d)({baseUrl:"https://jsonplaceholder.typicode.com/"}),endpoints:function(e){return{getUsersFromServer:e.query({query:function(e){return e}})}}}),O=b.useGetUsersFromServerQuery,h=Object(l.a)({reducerPath:"postsByUserId",baseQuery:Object(d.d)({baseUrl:"https://jsonplaceholder.typicode.com/users/"}),endpoints:function(e){return{getPostsByUserId:e.query({query:function(e){return"".concat(e,"/posts")}})}}}),m=h.useGetPostsByUserIdQuery,p=Object(u.a)({reducer:{users:b.reducer,postsByUserId:h.reducer},middleware:function(e){return e().concat(b.middleware).concat(h.middleware)}}),x=(s(45),s(5)),f=(s(46),s(3)),_=(s(47),s(48),s(21)),v=s.n(_),y=s(2),N=c.a.memo((function(e){var t=e.user,s=e.setUserId,r=e.userId;return Object(y.jsxs)("div",{className:v()("user-card",{"user-card--active":r}),children:[Object(y.jsx)("h3",{className:"user-card__text",children:t.name}),Object(y.jsx)("a",{href:"mailto:".concat(t.email),className:"user-card__text",children:t.email}),Object(y.jsx)("a",{href:"tel:".concat(t.phone),className:"user-card__text",children:t.phone}),Object(y.jsx)("a",{href:"https://".concat(t.website),className:"user-card__text",children:t.website}),Object(y.jsx)("button",{className:v()("user-card__button",{"user-card__button--active":r}),type:"button",onClick:function(){return s(t.id)},children:"Show posts"})]})})),g=(s(50),s(51),c.a.memo((function(e){var t=e.title,s=e.body;return Object(y.jsxs)("div",{className:"user-post",children:[Object(y.jsx)("h3",{className:"user-post__title",children:t}),Object(y.jsx)("p",{className:"user-post__text",children:s}),Object(y.jsx)("div",{className:"user-post__line"})]})}))),I=(s(52),function(){return Object(y.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(y.jsx)("div",{className:"Loader__content"})})}),w=c.a.memo((function(e){var t=e.userId,s=e.closeList,r=m(t),c=r.data,n=r.isFetching,a=r.isError;return Object(y.jsxs)("section",{className:v()("user-posts-list",{"user-posts-list--active":t}),children:[Object(y.jsx)("button",{type:"button",className:"user-posts-list__btn-close",onClick:function(){return s(null)},children:"X"}),n&&Object(y.jsx)(I,{}),a&&Object(y.jsx)("p",{className:"users-list__error",children:"Something went wrong. Try again!"}),!n&&c&&c.map((function(e){return Object(y.jsx)(g,{title:e.title,body:e.body},e.id)}))]})})),S=function(e){var t=e.isSorted,s=Object(r.useState)(null),c=Object(x.a)(s,2),n=c[0],a=c[1],i=O(j),u=i.data,l=i.isLoading,d=i.isError,b=Object(f.n)().pageId,h=Object(o.d)("query"),m=Object(x.a)(h,1)[0].get("query")||"",p=Object(f.l)(),_=Object(r.useMemo)((function(){return[0,1,2,3].map((function(e){return b&&+b>1?e+4*(+b-1):e}))}),[b]),v=Object(r.useMemo)((function(){!t&&b&&1!==+b&&p("/page/1");var e=null===u||void 0===u?void 0:u.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));return"asc"===t?null===e||void 0===e?void 0:e.sort((function(e,t){return e.name.localeCompare(t.name)})):"desc"===t?null===e||void 0===e?void 0:e.sort((function(e,t){return t.name.localeCompare(e.name)})):e}),[u,m,t]);return Object(y.jsxs)("div",{className:"wrapper",children:[Object(y.jsxs)("section",{className:"users-list",children:[l&&Object(y.jsx)(I,{}),d&&Object(y.jsx)("p",{className:"users-list__error",children:"Something went wrong. Try again!"}),v&&!l&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"users-list__wrapper",children:[v[_[0]]&&Object(y.jsx)(N,{user:v[_[0]],userId:n,setUserId:a}),v[_[1]]&&Object(y.jsx)(N,{user:v[_[1]],userId:n,setUserId:a})]}),Object(y.jsxs)("div",{className:"users-list__wrapper",children:[v[_[2]]&&Object(y.jsx)(N,{user:v[_[2]],userId:n,setUserId:a}),v[_[3]]&&Object(y.jsx)(N,{user:v[_[3]],userId:n,setUserId:a})]})]})]}),Object(y.jsx)(w,{userId:n,closeList:a})]})},k=(s(54),function(e){var t=e.setIsSorted,s=Object(r.useState)(1),c=Object(x.a)(s,2),n=c[0],a=c[1],i=O(j).data,u=Object(r.useMemo)((function(){return(null===i||void 0===i?void 0:i.length)?Math.ceil(i.length/4):0}),[]),l=function(e){"back"===e&&a((function(e){return 1===e?e:e-1})),"forward"===e&&a((function(e){return e===u?e:e+1}))};return Object(y.jsxs)("div",{className:"control-buttons",children:[Object(y.jsxs)(o.b,{className:"control-buttons__link",to:"page/".concat(n-1||1),onClick:function(){return l("back")},children:[Object(y.jsx)("span",{className:"control-buttons__item",children:" < "}),"Previous"]}),Object(y.jsx)("button",{type:"button",className:"control-buttons__sort-btn",onClick:function(){t("asc")},children:"Sort ASC"}),Object(y.jsx)("button",{type:"button",className:"control-buttons__sort-btn",onClick:function(){t("desc")},children:"Sort DESC"}),Object(y.jsxs)(o.b,{className:"control-buttons__link",to:"page/".concat(n+1>u?3:n+1),onClick:function(){return l("forward")},children:["Next",Object(y.jsx)("span",{className:"control-buttons__item",children:" > "})]})]})}),U=(s(55),function(){var e=Object(o.d)("query"),t=Object(x.a)(e,2),s=t[0],r=t[1],c=s.get("query")||"";return Object(y.jsxs)("header",{className:"header",children:[Object(y.jsx)("h1",{className:"header__title",children:"Users post"}),Object(y.jsx)("div",{className:"header__search-block",children:Object(y.jsx)("input",{className:"header__search-input",type:"search",placeholder:"Search",value:c,onChange:function(e){return r(Object(o.c)({query:e.target.value}))}})})]})}),C=function(){var e=Object(r.useState)(null),t=Object(x.a)(e,2),s=t[0],c=t[1];return Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(U,{}),Object(y.jsxs)(f.c,{children:[Object(y.jsx)(f.a,{path:"/",element:Object(y.jsx)(S,{isSorted:s})}),Object(y.jsxs)(f.a,{path:"page",children:[Object(y.jsx)(f.a,{index:!0,element:Object(y.jsx)(S,{isSorted:s})}),Object(y.jsx)(f.a,{path:":pageId",element:Object(y.jsx)(S,{isSorted:s})})]}),Object(y.jsx)(f.a,{path:"*",element:Object(y.jsx)("h1",{children:"Page not found!"})})]}),Object(y.jsx)(k,{setIsSorted:c})]})};a.a.render(Object(y.jsx)(i.a,{store:p,children:Object(y.jsx)(o.a,{children:Object(y.jsx)(C,{})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.e18ced63.chunk.js.map