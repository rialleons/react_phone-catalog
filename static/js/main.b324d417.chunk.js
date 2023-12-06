(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{19:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(30),s=c.n(a),n=c(13),r=c(42),i=c(10),o=c(14),l=c(5),d=c(15),j=c(39),u=c(43),b=c.n(u),m=c(25),_=c(44),O=Object(_.a)({reducerPath:"productsApi",baseQuery:Object(d.d)({baseUrl:"https://mate-academy.github.io/react_phone-catalog/_new"}),endpoints:function(e){return{getProducts:e.query({query:function(){return"/products.json"}}),getProductDetails:e.query({query:function(e){return"/products/".concat(e,".json")}})}}}),h=O.useGetProductsQuery,f=O.useGetProductDetailsQuery,p=Object(l.e)({name:"favorites",initialState:{favorites:[]},reducers:{addToFavorites:function(e,t){e.favorites.push(t.payload)},removeFromFavorites:function(e,t){e.favorites=e.favorites.filter((function(e){return e.phoneId!==t.payload}))}}}),x=p.actions,g=x.addToFavorites,N=x.removeFromFavorites,v=p.reducer,P=Object(l.e)({name:"cart",initialState:{cart:[]},reducers:{addToCart:function(e,t){e.cart.push({phoneId:t.payload.phoneId,quantity:1,product:t.payload})},removeFromCart:function(e,t){e.cart=e.cart.filter((function(e){return e.phoneId!==t.payload}))},decreaseAmount:function(e,t){var c=e.cart.findIndex((function(e){return e.phoneId===t.payload}));e.cart[c].quantity-=1},increaseAmount:function(e,t){var c=e.cart.findIndex((function(e){return e.phoneId===t.payload}));e.cart[c].quantity+=1}}}),y=P.actions,C=y.addToCart,I=y.removeFromCart,k=y.decreaseAmount,L=y.increaseAmount,w=P.reducer,D={key:"root",storage:b.a,whitelist:["favorites","cart"]},S=Object(o.b)(Object(i.a)({favorites:v,cart:w},O.reducerPath,O.reducer)),B=Object(j.a)(D,S),F=Object(l.b)({reducer:B,middleware:[m.a,O.middleware]}),A=Object(j.b)(F);Object(d.e)(F.dispatch);var E=c(7),q=c(4),H=(c(58),c(3)),T=c(1),M=c(9),R=c.n(M),$=(c(59),function(){return Object(n.d)()}),Q=n.e,V=function(e){return e.reduce((function(e,t){return e+t.quantity}),0)},G=function(e){return e.reduce((function(e,t){return e+t.quantity*t.product.price}),0)},U=(c(60),c(0)),z=function(e){var t=e.isActive;return R()("Nav__link",{"Nav__link--is-active":t})},J=function(){return Object(U.jsxs)("nav",{className:"Nav",children:[Object(U.jsx)(E.c,{to:"/",className:z,children:"Home"}),Object(U.jsx)(E.c,{to:"/phones",className:z,children:"Phones"}),Object(U.jsx)(E.c,{to:"/tablets",className:z,children:"Tablets"}),Object(U.jsx)(E.c,{to:"/accessories",className:z,children:"Accessories"})]})},Y=c(45),W=c.n(Y),K=(c(63),function(){var e=Object(T.useState)(""),t=Object(H.a)(e,2),c=t[0],a=t[1],s=Object(E.d)(),n=Object(H.a)(s,2),r=n[0],i=n[1],o=r.get("query")||"",l=Object(q.n)().pathname.replace("/","");Object(T.useEffect)((function(){a(o)}),[l]);var d=function(){a(""),r.delete("query"),i(r)},j=Object(T.useCallback)(W()((function(e){r.set("query",e),""===e&&d(),i(r)}),1e3),[l]);return Object(U.jsxs)("div",{className:"Search",children:[Object(U.jsx)("input",{type:"text",className:"Search__input",placeholder:"Search in ".concat(l,"..."),value:c,onChange:function(e){a(e.target.value),j(e.target.value)}}),Object(U.jsx)("button",{"data-cy":"searchDelete",type:"button",className:R()("Search__button",{"Search__button--delete":!!o}),onClick:d,disabled:!o})]})}),X=function(e){var t=e.isActive;return R()("Header__link",{"Header__link--is-active":t})},Z=function(){var e=Q((function(e){return e.favorites})).favorites,t=Q((function(e){return e.cart})).cart,c=Object(T.useState)(!1),a=Object(H.a)(c,2),s=a[0],n=a[1],r=Object(q.n)().pathname;Object(T.useEffect)((function(){n("/phones"===r||"/tablets"===r||"/accessories"===r||"/favorites"===r)}),[r]);return Object(U.jsxs)("header",{className:"Header",children:[Object(U.jsxs)("div",{className:"Header__left",children:[Object(U.jsx)(E.b,{to:"/",className:"Header__logo",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}),"/cart"!==r&&Object(U.jsx)(J,{})]}),Object(U.jsxs)("div",{className:"Header__right",children:[s&&Object(U.jsx)(K,{}),"/cart"!==r&&Object(U.jsx)("div",{className:"Header__link-wrapper",children:Object(U.jsx)(E.c,{to:"/favorites",className:X,children:!!e.length&&Object(U.jsx)("p",{className:"Header__count",children:e.length})})}),Object(U.jsx)("div",{className:"Header__link-wrapper Header__link-wrapper--cart",children:Object(U.jsx)(E.c,{to:"/cart",className:X,children:!!t.length&&Object(U.jsx)("p",{className:"Header__count",children:V(t)})})})]})]})},ee=(c(64),function(){var e=function(){window.scrollTo({top:0,behavior:"smooth"})};return Object(U.jsx)("footer",{className:"Footer",children:Object(U.jsxs)("div",{className:"Footer__content",children:[Object(U.jsx)(E.b,{to:"/",className:"Footer__logo",onClick:e}),Object(U.jsxs)("div",{className:"Footer__links",children:[Object(U.jsx)(E.b,{to:"https://github.com/rialleons/react_phone-catalog/",className:"Footer__link",target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(U.jsx)(E.b,{to:"/",className:"Footer__link",onClick:e,children:"Contacts"}),Object(U.jsx)(E.b,{to:"/",className:"Footer__link",onClick:e,children:"Rights"})]}),Object(U.jsxs)("div",{className:"Footer__to-top",children:[Object(U.jsx)("p",{className:"Footer__to-top-text",children:"Back to top"}),Object(U.jsx)("button",{type:"button",className:"Footer__to-top-link",onClick:e})]})]})})}),te=function(){return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(Z,{}),Object(U.jsxs)("div",{className:"App__container",children:[Object(U.jsx)(q.a,{}),Object(U.jsx)(ee,{})]})]})},ce=(c(19),c(12)),ae=c(46),se=c.n(ae),ne=function(e){return e.fullPrice-e.price},re=function(e){return e.fullPrice>e.price},ie=(c(65),c(66),function(e){return e.charAt(0).toUpperCase()+e.slice(1,e.length)}),oe=(c(67),function(e){var t=e.product,c=$(),a=Q((function(e){return e.favorites})).favorites,s=Q((function(e){return e.cart})).cart,n=function(){return a.some((function(e){return e.phoneId===t.phoneId}))},r=function(){return s.some((function(e){return e.phoneId===t.phoneId}))};return Object(U.jsxs)("div",{className:"ProductAdd",children:[Object(U.jsx)("button",{type:"button",className:R()("ProductAdd__cart",{"ProductAdd__cart--selected":r()}),onClick:function(){var e=r();c(e?I(t.phoneId):C(t))},children:r()?Object(U.jsx)("p",{children:"Added to cart"}):Object(U.jsx)("p",{children:"Add to cart"})}),Object(U.jsx)("button",{"data-cy":"addToFavorite",type:"button",className:R()("ProductAdd__favorites",{"ProductAdd__favorites--selected":n()}),onClick:function(){var e=n();c(e?N(t.phoneId):g(t))}})]})}),le=function(e){var t=e.product,c=t.phoneId,a=t.image,s=t.name,n=t.price,r=t.fullPrice,i={screen:t.screen,capacity:t.capacity,ram:t.ram};return Object(U.jsxs)("div",{className:"ProductCard","data-cy":"cardsContainer",children:[Object(U.jsxs)(E.b,{to:"/product/".concat(c),className:"ProductCard__content",children:[Object(U.jsx)("img",{src:a,alt:s,className:"ProductCard__image"}),Object(U.jsx)("p",{className:"ProductCard__name",children:s}),Object(U.jsxs)("div",{className:"ProductCard__prices",children:[re(t)&&Object(U.jsx)("p",{className:"ProductCard__price",children:"$".concat(n)}),Object(U.jsx)("p",{className:R()("ProductCard__price",{"ProductCard__price--discount":re(t)}),children:"$".concat(r)})]}),Object(U.jsx)("div",{className:"ProductCard__divider"}),Object(U.jsx)("div",{className:"ProductCard__info",children:Object.entries(i).map((function(e){var t=Object(H.a)(e,2),c=t[0],a=t[1];return Object(U.jsxs)("div",{className:"ProductCard__field",children:[Object(U.jsx)("p",{className:"ProductCard__field-key",children:ie(c)}),Object(U.jsx)("p",{className:"ProductCard__field-value",children:a||"-"})]},c)}))})]}),Object(U.jsx)(oe,{product:t})]})},de=1148,je=function(e){var t=e.products,c=Object(T.useState)(!0),a=Object(H.a)(c,2),s=a[0],n=a[1],r=Object(T.useState)(!1),i=Object(H.a)(r,2),o=i[0],l=i[1],d=Object(T.useRef)(null),j=d.current;Object(T.useEffect)((function(){j&&(j.scrollLeft=0)}),[j]);return Object(U.jsxs)("div",{className:"ProductsSlider",children:[Object(U.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(U.jsx)("button",{type:"button",className:R()("ProductsSlider__button ProductsSlider__button--left",{"ProductsSlider__button--disabled":s}),onClick:function(){l(!1),j&&(j.scrollLeft-=de,j.scrollLeft-de<=0&&n(!0))},disabled:s}),Object(U.jsx)("button",{type:"button",className:R()("ProductsSlider__button",{"ProductsSlider__button--disabled":o}),onClick:function(){if(n(!1),j){j.scrollLeft+=de;var e=t.length/4*de;j.scrollLeft+3444>e&&l(!0)}},disabled:o})]}),Object(U.jsx)("ul",{className:"ProductsSlider__cards",ref:d,children:t.map((function(e){return Object(U.jsx)("li",{className:"ProductsSlider__item",children:Object(U.jsx)(le,{product:e})},e.id)}))})]})},ue=(c(68),["img/banners/banner-phones.png","img/banners/banner-tablets.png","img/banners/banner-accessories.png"]),be=ue.length-1,me=1040,_e=function(){var e=Object(T.useState)(0),t=Object(H.a)(e,2),c=t[0],a=t[1],s=Object(T.useRef)(null),n=s.current,r=0;Object(T.useEffect)((function(){n&&(n.scrollLeft=0,a(0))}),[n]);var i=function(){n&&(n.scrollLeft>=me*be?(n.scrollLeft-=me*be,a(0)):(n.scrollLeft+=me,a(c+1)))};Object(T.useEffect)((function(){return r=window.setInterval((function(){i()}),5e3),function(){return clearInterval(r)}}));return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("div",{className:"Banners",children:[Object(U.jsx)("button",{type:"button",className:"Banners__button Banners__button--left",onClick:function(){clearInterval(r),n&&(n.scrollLeft<me?(n.scrollLeft+=me*be,a(be)):(n.scrollLeft-=me,a(c-1)))}}),Object(U.jsx)("div",{className:"Banners__container",ref:s,children:ue.map((function(e,t){return Object(U.jsx)("img",{src:e,alt:"Banner ".concat(t+1),className:"Banners__banner"},e)}))}),Object(U.jsx)("button",{type:"button",className:"Banners__button",onClick:function(){clearInterval(r),i()}}),Object(U.jsx)("div",{className:"Banners__indicators",children:ue.map((function(e,t){return Object(U.jsx)("button",{type:"button",className:"Banners__link",onClick:function(){return a(t)},children:Object(U.jsx)("div",{className:R()("Banners__indicator",{"Banners__indicator--active":c===t})})},e)}))})]})})},Oe=(c(69),c(70),function(e){var t=e.name,c=e.title,a=e.amount;return Object(U.jsxs)(E.b,{to:"/".concat(t),className:"CategoryItem",children:[Object(U.jsx)("img",{src:"img/categories/category-".concat(t,".png"),alt:"Category ".concat(t),className:"CategoryItem__image"}),Object(U.jsxs)("div",{className:"CategoryItem__info",children:[Object(U.jsx)("h3",{className:"CategoryItem__title",children:c}),Object(U.jsx)("p",{className:"CategoryItem__count",children:"".concat(a," models")})]})]})}),he=function(e){var t=e.products,c=function(e){return t.filter((function(t){return t.category===e})).length};return Object(U.jsxs)("ul",{"data-cy":"categoryLinksContainer",className:"CategoriesList",children:[Object(U.jsx)("li",{className:"CategoriesList__item",children:Object(U.jsx)(Oe,{name:"phones",title:"Mobile phones",amount:c("phones")})}),Object(U.jsx)("li",{className:"CategoriesList__item",children:Object(U.jsx)(Oe,{name:"tablets",title:"Tablets",amount:c("tablets")})}),Object(U.jsx)("li",{className:"CategoriesList__item",children:Object(U.jsx)(Oe,{name:"accessories",title:"Accessories",amount:c("accessories")})})]})},fe=(c(71),function(){return Object(U.jsx)("div",{"data-cy":"loader",className:"Loader",children:Object(U.jsx)("div",{className:"Loader__content"})})}),pe=function(){var e=h(),t=e.data,c=e.isLoading,a=Object(T.useState)([]),s=Object(H.a)(a,2),n=s[0],r=s[1],i=Object(T.useState)([]),o=Object(H.a)(i,2),l=o[0],d=o[1];return Object(T.useEffect)((function(){t&&(r(function(e){return e.filter((function(e){return re(e)})).sort((function(e,t){return ne(t)-ne(e)})).slice(0,8)}(t)),d(function(e){return Object(ce.a)(e).sort((function(e,t){return t.year-e.year})).slice(0,8)}(t)))}),[t]),Object(U.jsxs)("div",{className:"Page Page--gap--wider Page--padding--top--wider",children:[Object(U.jsx)(_e,{}),Object(U.jsxs)("section",{className:"Page__section hot-prices",children:[Object(U.jsx)("h1",{className:"Page__title",children:"Hot prices"}),c?Object(U.jsx)(fe,{}):Object(U.jsx)(je,{products:n})]}),Object(U.jsxs)("section",{className:"Page__section shop-by-category",children:[Object(U.jsx)("h1",{className:"Page__title",children:"Shop by category"}),!!t&&Object(U.jsx)(he,{products:t})]}),Object(U.jsxs)("section",{className:"Page__section brand-new",children:[Object(U.jsx)("h1",{className:"Page__title",children:"Brand new models"}),c?Object(U.jsx)(fe,{}):Object(U.jsx)(je,{products:l})]})]})};c(72),c(73);var xe=function(e){var t=e.totalItems,c=e.onPage,a=Object(E.d)(),s=Object(H.a)(a,2),n=s[0],r=s[1],i=n.get("page"),o=Math.ceil(t/c)||1,l=Number(i)||1,d=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,o),j=1===l,u=l===o;return Object(U.jsxs)("ul",{"data-cy":"pagination",className:"Pagination",children:[Object(U.jsx)("li",{className:"Pagination__item",children:Object(U.jsx)("button",{"data-cy":"paginationLeft",type:"button",className:R()("Pagination__arrow Pagination__arrow--left",{"Pagination__arrow--disabled":j}),onClick:function(){j||(n.set("page",(l-1).toString()),r(n))},disabled:j})}),d.map((function(e){return Object(U.jsx)("li",{className:"Pagination__item",children:Object(U.jsx)("button",{type:"button",className:R()("Pagination__link",{"Pagination__link--active":e===l}),onClick:function(){return t=e,n.set("page",t.toString()),void r(n);var t},children:e})},e)})),Object(U.jsx)("li",{className:"Pagination__item",children:Object(U.jsx)("button",{"data-cy":"paginationRight",type:"button",className:R()("Pagination__arrow",{"Pagination__arrow--disabled":u}),onClick:function(){u||(n.set("page",(l+1).toString()),r(n))},disabled:u})})]})},ge=(c(74),c.p+"static/media/icon_vector_disabled.2a072ff1.svg"),Ne=function(e){var t=e.parameterOptions,c=e.currentOptionName,a=e.onChange,s=Object(T.useState)(!1),n=Object(H.a)(s,2),r=n[0],i=n[1];Object(T.useEffect)((function(){if(r){var e=function(){i(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}}),[r]);return Object(U.jsxs)("div",{className:"Dropdown",children:[Object(U.jsxs)("button",{type:"button",className:R()("Dropdown__button",{"Dropdown__button--active":r}),onClick:function(){i(!r)},children:[Object(U.jsx)("span",{className:"Dropdown__text",children:function(e){var c=t.find((function(t){return t.name===e}));return null===c||void 0===c?void 0:c.alias}(c)}),Object(U.jsx)("img",{src:ge,alt:"Vector Icon",className:R()("Dropdown__arrow",{"Dropdown__arrow--active":r})})]}),r&&Object(U.jsx)("div",{className:"Dropdown__content",children:t.map((function(e){return Object(U.jsx)("button",{type:"button",className:"Dropdown__item",onClick:function(){return t=e.name,a(t),void i(!1);var t},children:e.alias},e.name)}))})]})},ve=(c(75),function(){return Object(U.jsx)("p",{className:"NoSearchResults",children:"Sorry, no matching results"})}),Pe=[{name:"age",alias:"Newest"},{name:"name",alias:"Alphabetically"},{name:"price",alias:"Cheapest"}],ye=[{name:"all",alias:"All"},{name:"4",alias:"4"},{name:"8",alias:"8"},{name:"16",alias:"16"}],Ce=function(e){var t=e.products,c=Object(T.useState)([]),a=Object(H.a)(c,2),s=a[0],n=a[1],r=Object(q.n)().pathname,i=Object(E.d)(),o=Object(H.a)(i,2),l=o[0],d=o[1],j=l.get("sort")||"age",u=l.get("query")||"",b=l.get("page")||"1",m=l.get("perPage")||"8",_=Object(T.useMemo)((function(){return function(e,t,c){var a=Object(ce.a)(e);if(c){var s=c.toLowerCase();a=a.filter((function(e){return e.name.toLowerCase().includes(s)}))}switch(t){case"age":a.sort((function(e,t){return t.year-e.year}));break;case"price":a.sort((function(e,t){return e.price-t.price}));break;case"name":a.sort((function(e,t){return e.name.localeCompare(t.name)}));break;default:throw new Error("Unknown sort parameter!")}return a}(t,j,u)}),[t,j,u]),O=_.length;Object(T.useEffect)((function(){if("all"!==m){var e=(+b-1)*+m+1,t=Math.min(+b*+m,O);n(_.slice(e-1,t))}else n(Object(ce.a)(_))}),[_,b,m]);return Object(U.jsxs)("div",{className:"ProductsList",children:["/favorites"!==r&&O>1&&Object(U.jsxs)("div",{className:"ProductsList__selections",children:[Object(U.jsxs)("div",{className:"ProductsList__select",children:[Object(U.jsx)("p",{className:"ProductsList__label",children:"Sort by"}),Object(U.jsx)(Ne,{parameterOptions:Pe,currentOptionName:j,onChange:function(e){l.set("sort",e),d(l)}})]}),O>4&&Object(U.jsxs)("div",{className:"ProductsList__select ProductsList__select--narrow",children:[Object(U.jsx)("p",{className:"ProductsList__label",children:"Items on page"}),Object(U.jsx)(Ne,{parameterOptions:ye,currentOptionName:m,onChange:function(e){l.set("perPage",e),l.set("page","1"),d(l)}})]})]}),!!u&&!!O&&Object(U.jsx)("p",{className:"ProductsList__search-count",children:"".concat(O," result").concat(O>1?"s":"")}),!O&&Object(U.jsx)(ve,{}),Object(U.jsx)("ul",{className:"ProductsList__content","data-cy":"productList",children:s.map((function(e){return Object(U.jsx)("li",{className:"ProductsList__item",children:Object(U.jsx)(le,{product:e})},e.id)}))}),"all"!==m&&O>+m&&Object(U.jsx)("div",{className:"ProductsList__pagination",children:Object(U.jsx)(xe,{totalItems:O,onPage:+m})})]})},Ie=(c(76),function(e){var t=e.categoryName;return Object(U.jsx)("p",{className:"NoResults",children:"".concat(t," not found")})}),ke=(c(77),c.p+"static/media/icon_home.d4c29e4f.svg"),Le=function(){var e=Object(T.useState)(""),t=Object(H.a)(e,2),c=t[0],a=t[1],s=Object(T.useState)(),n=Object(H.a)(s,2),r=n[0],i=n[1],o=Object(q.n)(),l=Object(q.r)().productId,d=h().data;return Object(T.useEffect)((function(){d&&l&&i(d.find((function(e){return e.phoneId===l})))}),[l,d]),Object(T.useEffect)((function(){l?r&&a(r.category):a(o.pathname.slice(1,o.pathname.length))}),[o.pathname,r]),Object(U.jsxs)("div",{"data-cy":"breadCrumbs",className:"Breadcrumbs",children:[Object(U.jsx)(E.b,{to:"/",className:"Breadcrumbs__link",children:Object(U.jsx)("img",{src:ke,alt:"Home Icon"})}),Object(U.jsx)("img",{src:ge,alt:"Vector Icon"}),l?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(E.b,{to:"/".concat(c),className:"Breadcrumbs__link",children:Object(U.jsx)("p",{className:"Breadcrumbs__folder",children:ie(c)})}),Object(U.jsx)("img",{src:ge,alt:"Vector Icon"}),Object(U.jsx)("p",{className:"Breadcrumbs__folder",children:null===r||void 0===r?void 0:r.name})]}):Object(U.jsx)("p",{className:"Breadcrumbs__folder",children:ie(c)})]})},we=function(){var e=h(),t=e.data,c=e.isLoading,a=Object(T.useState)([]),s=Object(H.a)(a,2),n=s[0],r=s[1],i=Object(E.d)(),o=Object(H.a)(i,1)[0].get("query")||"";return Object(T.useEffect)((function(){t&&r(t.filter((function(e){return"phones"===e.category})))}),[t]),Object(U.jsxs)("div",{className:"Page",children:[!o&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Le,{}),Object(U.jsxs)("div",{className:"Page__top",children:[Object(U.jsx)("h1",{className:"Page__title",children:"Mobile Phones"}),Object(U.jsx)("p",{className:"Page__amount",children:"".concat(n.length," models")})]})]}),c&&Object(U.jsx)(fe,{}),c||n.length?Object(U.jsx)(Ce,{products:n}):Object(U.jsx)(Ie,{categoryName:"Mobile phones"})]})},De=function(){var e=h(),t=e.data,c=e.isLoading,a=Object(T.useState)([]),s=Object(H.a)(a,2),n=s[0],r=s[1],i=Object(E.d)(),o=Object(H.a)(i,1)[0].get("query")||"";return Object(T.useEffect)((function(){t&&r(t.filter((function(e){return"tablets"===e.category})))}),[t]),Object(U.jsxs)("div",{className:"Page",children:[!o&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Le,{}),Object(U.jsxs)("div",{className:"Page__top",children:[Object(U.jsx)("h1",{className:"Page__title",children:"Tablets"}),Object(U.jsx)("p",{className:"Page__amount",children:"".concat(n.length," models")})]})]}),c&&Object(U.jsx)(fe,{}),c||n.length?Object(U.jsx)(Ce,{products:n}):Object(U.jsx)(Ie,{categoryName:"Tablets"})]})},Se=function(){var e=h(),t=e.data,c=e.isLoading,a=Object(T.useState)([]),s=Object(H.a)(a,2),n=s[0],r=s[1],i=Object(E.d)(),o=Object(H.a)(i,1)[0].get("query")||"";return Object(T.useEffect)((function(){t&&r(t.filter((function(e){return"accessories"===e.category})))}),[t]),Object(U.jsxs)("div",{className:"Page",children:[!o&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Le,{}),Object(U.jsxs)("div",{className:"Page__top",children:[Object(U.jsx)("h1",{className:"Page__title",children:"Accessories"}),Object(U.jsx)("p",{className:"Page__amount",children:"".concat(n.length," models")})]})]}),c&&Object(U.jsx)(fe,{}),c||n.length?Object(U.jsx)(Ce,{products:n}):Object(U.jsx)(Ie,{categoryName:"Accessories"})]})},Be=function(){var e=Q((function(e){return e.favorites})).favorites,t=Object(E.d)(),c=Object(H.a)(t,1)[0].get("query")||"";return Object(U.jsxs)("div",{className:"Page",children:[!c&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(Le,{}),Object(U.jsxs)("div",{className:"Page__top",children:[Object(U.jsx)("h1",{className:"Page__title",children:"Favorites"}),Object(U.jsx)("p",{className:"Page__amount",children:"".concat(e.length," models")})]})]}),e.length?Object(U.jsx)(Ce,{products:e}):Object(U.jsx)(Ie,{categoryName:"Favorites"})]})},Fe=(c(78),c.p+"static/media/icon_vector.a8e610bf.svg"),Ae=function(){var e=Object(q.p)();return Object(U.jsxs)("div",{className:"BackButton",children:[Object(U.jsx)("img",{src:Fe,alt:"Vector Icon",className:"BackButton__vector"}),Object(U.jsx)("button",{"data-cy":"backButton",type:"button",className:"BackButton__button",onClick:function(){return e(-1)},children:"Back"})]})},Ee=(c(79),c(80),function(e){var t=e.cartItem,c=$(),a=t.quantity,s=t.product;return Object(U.jsxs)("div",{className:"CartItemCard",children:[Object(U.jsxs)("div",{className:"CartItemCard__left",children:[Object(U.jsx)("button",{"data-cy":"cartDeleteButton",type:"button",className:"CartItemCard__delete",onClick:function(){c(I(s.phoneId))}}),Object(U.jsx)("img",{src:s.image,alt:s.name,className:"CartItemCard__image"}),Object(U.jsx)("p",{className:"CartItemCard__description",children:s.name})]}),Object(U.jsxs)("div",{className:"CartItemCard__right",children:[Object(U.jsxs)("div",{className:"CartItemCard__counter",children:[Object(U.jsx)("button",{type:"button",className:R()("CartItemCard__button CartItemCard__button--subtract",{"CartItemCard__button--subtract--disabled":a<=1}),onClick:function(){c(k(s.phoneId))},disabled:a<=1}),Object(U.jsx)("p",{className:"CartItemCard__quantity",children:a}),Object(U.jsx)("button",{type:"button",className:"CartItemCard__button CartItemCard__button--add",onClick:function(){c(L(s.phoneId))}})]}),Object(U.jsx)("p",{className:"CartItemCard__price",children:"$".concat(s.price*a)})]})]})}),qe=function(e){var t=e.cart,c=Object(T.useState)(!1),a=Object(H.a)(c,2),s=a[0],n=a[1];return Object(U.jsxs)("div",{className:"CartItemsList",children:[Object(U.jsx)("div",{className:"CartItemsList__items",children:t.map((function(e){return Object(U.jsx)(Ee,{cartItem:e},e.phoneId)}))}),Object(U.jsxs)("div",{className:"CartItemsList__output",children:[Object(U.jsxs)("div",{className:"CartItemsList__info",children:[Object(U.jsx)("p",{className:"CartItemsList__price",children:"$".concat(G(t))}),Object(U.jsx)("p",{"data-cy":"productQauntity",className:"CartItemsList__amount",children:"Total for ".concat(V(t)," items")})]}),Object(U.jsx)("div",{className:"CartItemsList__divider"}),Object(U.jsx)("button",{type:"button",className:"CartItemsList__checkout",onClick:function(){n(!0),setTimeout((function(){return n(!1)}),3e3)},children:"Checkout"}),s&&Object(U.jsx)("p",{className:"CartItemsList__not-implemented",children:"We are sorry, but this feature is not implemented yet"})]})]})},He=function(){var e=Q((function(e){return e.cart})).cart;return Object(U.jsxs)("div",{className:"Page Page--gap--narrower Page--padding--top--wider",children:[Object(U.jsxs)("div",{className:"Page__top Page__top--gap--wider",children:[Object(U.jsx)(Ae,{}),Object(U.jsx)("h1",{className:"Page__title",children:"Cart"})]}),e.length?Object(U.jsx)(qe,{cart:e}):Object(U.jsx)("p",{className:"Page__amount",children:"Your cart is empty"})]})},Te=c(23),Me=(c(81),function(e){var t=e.productInfo,c=Object(T.useState)(""),a=Object(H.a)(c,2),s=a[0],n=a[1],r=Object(T.useState)(),i=Object(H.a)(r,2),o=i[0],l=i[1],d=h().data,j=t.id,u=t.images,b=t.screen,m=t.resolution,_=t.processor,O=t.ram,f=t.description,p=t.capacity,x=t.camera,g=t.zoom,N=t.cell,v={screen:b,resolution:m,processor:_,ram:O},P=Object(Te.a)(Object(Te.a)({},v),{},{"built in memory":p,camera:x,zoom:g,cell:N.join(", ")});Object(T.useEffect)((function(){n(u[0])}),[t]),Object(T.useEffect)((function(){d&&l(d.find((function(e){return e.phoneId===j})))}),[d,j]);return Object(U.jsxs)("div",{className:"ProductDetails",children:[Object(U.jsxs)("div",{className:"ProductDetails__image-container",children:[Object(U.jsx)("div",{className:"ProductDetails__images",children:u.map((function(e){return Object(U.jsx)("button",{type:"button",className:R()("ProductDetails__image-link",{"ProductDetails__image-link--active":s===e}),onClick:function(){n(e)},children:Object(U.jsx)("img",{src:e,alt:e,className:"ProductDetails__image"})},e)}))}),Object(U.jsx)("img",{src:s,alt:s,className:"ProductDetails__image ProductDetails__image--big"})]}),Object(U.jsxs)("div",{className:"ProductDetails__interactive",children:[o&&Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"ProductDetails__prices",children:[re(o)&&Object(U.jsx)("p",{className:"ProductDetails__price",children:"$".concat(o.price)}),Object(U.jsx)("p",{className:R()("ProductDetails__price",{"ProductDetails__price--discount":re(o)}),children:"$".concat(o.fullPrice)})]}),Object(U.jsx)("div",{className:"ProductDetails__add",children:Object(U.jsx)(oe,{product:o})})]}),Object(U.jsx)("div",{className:"ProductDetails__info",children:Object.entries(v).map((function(e){var t=Object(H.a)(e,2),c=t[0],a=t[1];return Object(U.jsxs)("div",{className:"ProductDetails__field",children:[Object(U.jsx)("p",{className:"ProductDetails__field-key",children:ie(c)}),Object(U.jsx)("p",{className:"ProductDetails__field-value",children:a||"-"})]},c)}))})]}),Object(U.jsxs)("section",{"data-cy":"productDescription",className:"ProductDetails__about",children:[Object(U.jsx)("h2",{className:"ProductDetails__title",children:"About"}),Object(U.jsx)("div",{className:"ProductDetails__divider"}),Object(U.jsx)("div",{className:"ProductDetails__chapters",children:f.map((function(e){return Object(U.jsxs)("div",{className:"ProductDetails__chapter",children:[Object(U.jsx)("h3",{className:"ProductDetails__subheader",children:e.title}),e.text.map((function(e){return Object(U.jsx)("p",{className:"ProductDetails__description",children:e},e)}))]},e.title)}))})]}),Object(U.jsxs)("section",{className:"ProductDetails__specs",children:[Object(U.jsx)("h2",{className:"ProductDetails__title",children:"Tech specs"}),Object(U.jsx)("div",{className:"ProductDetails__divider"}),Object(U.jsx)("div",{className:" ProductDetails__info ProductDetails__info--text--bigger ",children:Object.entries(P).map((function(e){var t=Object(H.a)(e,2),c=t[0],a=t[1];return Object(U.jsxs)("div",{className:"ProductDetails__field",children:[Object(U.jsx)("p",{className:"ProductDetails__field-key",children:ie(c)}),Object(U.jsx)("p",{className:"ProductDetails__field-value",children:a||"-"})]},c)}))})]})]})}),Re=function(){var e=Object(T.useState)([]),t=Object(H.a)(e,2),c=t[0],a=t[1],s=Object(q.r)().productId,n=f(s||""),r=n.data,i=n.isLoading,o=n.isError,l=h(),d=l.data,j=l.isLoading;return Object(T.useEffect)((function(){d&&s&&a(function(e,t){var c=e.filter((function(e){return e.phoneId!==t}));return se()(c,8)}(d,s))}),[d,s]),Object(U.jsxs)("div",{className:"Page",children:[Object(U.jsx)(Le,{}),Object(U.jsxs)("div",{className:"Page__top Page__top--gap--wider",children:[Object(U.jsx)(Ae,{}),!o&&Object(U.jsx)("h1",{className:"Page__title",children:null===r||void 0===r?void 0:r.name})]}),o&&Object(U.jsx)(Ie,{categoryName:"Current product"}),!i&&!o&&r&&Object(U.jsx)(Me,{productInfo:r}),Object(U.jsxs)("section",{className:" Page__section Page__section--padding-top suggested ",children:[Object(U.jsx)("h1",{className:"Page__title",children:"You may also like"}),j?Object(U.jsx)(fe,{}):Object(U.jsx)(je,{products:c})]})]})},$e=function(){return Object(U.jsx)("div",{className:"Page",children:Object(U.jsx)("h1",{className:"Page__title",children:"Page not found"})})},Qe=function(){return Object(U.jsx)(E.a,{children:Object(U.jsx)(q.d,{children:Object(U.jsxs)(q.b,{path:"/",element:Object(U.jsx)(te,{}),children:[Object(U.jsx)(q.b,{index:!0,element:Object(U.jsx)(pe,{})}),Object(U.jsx)(q.b,{path:"/phones",element:Object(U.jsx)(we,{})}),Object(U.jsx)(q.b,{path:"/tablets",element:Object(U.jsx)(De,{})}),Object(U.jsx)(q.b,{path:"/accessories",element:Object(U.jsx)(Se,{})}),Object(U.jsx)(q.b,{path:"/favorites",element:Object(U.jsx)(Be,{})}),Object(U.jsx)(q.b,{path:"/cart",element:Object(U.jsx)(He,{})}),Object(U.jsx)(q.b,{path:"/product/:productId",element:Object(U.jsx)(Re,{})}),Object(U.jsx)(q.b,{path:"*",element:Object(U.jsx)($e,{})})]})})})};s.a.render(Object(U.jsx)(n.a,{store:F,children:Object(U.jsx)(r.a,{loading:null,persistor:A,children:Object(U.jsx)(Qe,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.b324d417.chunk.js.map