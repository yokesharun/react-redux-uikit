(this["webpackJsonpreact-redux-uikit"]=this["webpackJsonpreact-redux-uikit"]||[]).push([[0],{29:function(t,e,c){},30:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),s=c(9),a=c.n(s),i=c(5),d=c(1),l=function(){return Object(d.jsx)("nav",{class:"navbar navbar-light bg-light",children:Object(d.jsx)("div",{class:"container-fluid",children:Object(d.jsx)("a",{class:"navbar-brand",href:"/",children:"React Redux Shop"})})})},j=c(11),u=c(7),o=c.n(u),b=c(2),O="SET_PRODUCTS",h="SELECTED_PRODUCT",p="RESET_PRODUCT",x=function(){var t=Object(b.f)(),e=Object(i.b)(),c=Object(i.c)((function(t){return t.allProducts})),r=function(){var t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fakestoreapi.com/products").then((function(t){return t.json()})).then((function(t){return e({type:O,payload:t})}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){r()}),[]);return Object(d.jsx)(d.Fragment,{children:0===c.length?Object(d.jsx)("div",{class:"spinner-border",role:"status",children:Object(d.jsx)("span",{class:"visually-hidden",children:"Loading..."})}):c.products.map((function(e){return Object(d.jsx)("div",{className:"col-md-3 main-column",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:e.image,className:"card-img-top product-image",alt:e.title}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("p",{children:Object(d.jsx)("span",{class:"badge bg-secondary",children:e.category})}),Object(d.jsx)("h6",{className:"card-title",children:e.title}),Object(d.jsxs)("button",{type:"button",className:"btn btn-dark",onClick:function(c){return n=e.id,void t("/react-redux-uikit/product/"+n);var n},children:["Buy now at $",e.price]})]})]})})}))})},f=function(){var t=Object(b.g)(),e=Object(b.f)(),c=Object(i.b)(),r=Object(i.c)((function(t){return t.product})),s=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/"+t.productId).then((function(t){return t.json()})).then((function(t){return c({type:h,payload:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return s(),function(){c({type:p})}}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){return e("/react-redux-uikit/")},children:"Back"})}),0===Object.keys(r).length?Object(d.jsx)("div",{class:"spinner-border",role:"status",children:Object(d.jsx)("span",{class:"visually-hidden",children:"Loading..."})}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{class:"col-md-6 main-column",children:Object(d.jsx)("div",{class:"card",children:Object(d.jsx)("img",{src:r.image,class:"card-img-top product-single-image",alt:r.title})})}),Object(d.jsx)("div",{class:"col-md-6 main-column",children:Object(d.jsx)("div",{class:"card",children:Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h5",{class:"card-title",children:r.title}),Object(d.jsx)("p",{class:"card-text",children:r.description}),Object(d.jsxs)("h4",{children:["$",r.price]}),Object(d.jsx)("button",{type:"button",class:"btn btn-dark",children:"Buy now"})]})})})]})]})},m=c(10);c(29);var v=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(l,{}),Object(d.jsx)("div",{class:"container",children:Object(d.jsx)("div",{class:"row main-column",children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/react-redux-uikit/",exact:!0,element:Object(d.jsx)(x,{})}),Object(d.jsx)(b.a,{path:"/react-redux-uikit/product/:productId",element:Object(d.jsx)(f,{})})]})})})]})})},g=c(12),y=c(8),k=Object(g.a)({allProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;return c===O?Object(y.a)(Object(y.a)({},t),{},{products:n}):t},product:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload;switch(c){case h:return Object(y.a)(Object(y.a)({},t),n);case p:return{};default:return t}}}),E=k,_=Object(g.b)(E,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(i.a,{store:_,children:Object(d.jsx)(v,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c57c42a3.chunk.js.map