(this["webpackJsonphotel-app"]=this["webpackJsonphotel-app"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"The Sagamore Hotel South Beach","img":"img1.webp","price":23234,"beds":3,"baths":2,"reviews":{"star":4,"reviewsCount":50}},{"title":"Modern home in city center","img":"img2.webp","price":12321,"beds":5,"baths":1,"reviews":{"star":5,"reviewsCount":30}},{"title":"Latitude 26 Waterfront Boutique Resort - Fort Myers Beach","img":"img3.webp","price":43223,"beds":3,"baths":2,"reviews":{"star":4,"reviewsCount":67}},{"title":"The Sagamore Hotel South Beach","img":"img4.webp","price":34325,"beds":2,"baths":2,"reviews":{"star":2,"reviewsCount":44}},{"title":"Americas Best Value Inn & Suites Lake George","img":"img5.webp","price":13135,"beds":4,"baths":3,"reviews":{"star":3,"reviewsCount":20}},{"title":"Surf Motel and Gardens","img":"img6.webp","price":1223,"beds":1,"baths":1,"reviews":{"star":4,"reviewsCount":100}},{"title":"Comfort Inn Conference Center Bowie","img":"img7.webp","price":56434,"beds":5,"baths":2,"reviews":{"star":5,"reviewsCount":90}},{"title":"Comfort Inn & Suites Troutville - Roanoke","img":"img8.webp","price":24246,"beds":3,"baths":1,"reviews":{"star":5,"reviewsCount":67}},{"title":"Red Roof Inn & Suites Hazleton","img":"img9.webp","price":34352,"beds":4,"baths":1,"reviews":{"star":2,"reviewsCount":30}},{"title":"Giles Hotel Inn and Suites","img":"img10.jpg","price":23356,"beds":3,"baths":1,"reviews":{"star":4,"reviewsCount":70}}]')},16:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(17),r=c.n(i),l=c(7),a=c(2),o=c(8),j=(c(23),c(0)),h=function(e){var t=e.closeFilter,c=Object(s.useRef)(),n=Object(s.useRef)(),i=Object(s.useRef)(),r=Object(s.useState)(!1),l=Object(o.a)(r,2),a=l[0],h=l[1],d=Object(s.useState)(0),b=Object(o.a)(d,2),x=b[0],p=b[1],u=function(){h(!1),null!=document.querySelector(".range")&&(document.querySelector(".range").style="cursor: default")};return Object(s.useEffect)((function(){document.addEventListener("mouseup",u)}),[]),Object(j.jsx)("div",{className:"filter",children:Object(j.jsxs)("div",{className:"filter-container",children:[Object(j.jsxs)("div",{className:"brand",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),Object(j.jsx)("span",{children:"Hotelfy"})]}),Object(j.jsxs)("div",{className:"filter-controllers",children:[Object(j.jsx)("div",{className:"close-filter-btn",children:Object(j.jsx)("button",{onClick:t,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})})})}),Object(j.jsxs)("div",{className:"filter-price-range",children:[Object(j.jsxs)("span",{children:["Price ",Object(j.jsxs)("span",{style:{fontSize:"15px"},children:["( ",Math.floor(x)+"K/mo"," )"]})]}),Object(j.jsxs)("div",{className:"range",ref:c,onMouseUp:u,onMouseMove:function(e){var t=c.current.clientWidth,s=e.pageX;a&&s<t&&(c.current.style="cursor: pointer",n.current.style="width: ".concat(s,"px"),i.current.style="left: ".concat(s-10,"px"),p(s))},children:[Object(j.jsx)("button",{onTouchMove:function(e){var t=c.current.clientWidth,s=e.changedTouches[0].pageX;s<t&&s>15&&(n.current.style="width: ".concat(s,"px"),i.current.style="left: ".concat(s-10,"px"),p(s))},onMouseUp:u,onMouseDown:function(){h(!0),c.current.style="cursor: pointer"},ref:i}),Object(j.jsx)("span",{ref:n})]})]}),Object(j.jsxs)("div",{className:"filter-options-container",children:[Object(j.jsxs)("div",{className:"filter-option",children:[Object(j.jsx)("label",{children:"Roms"}),Object(j.jsxs)("select",{children:[Object(j.jsx)("option",{children:"1"}),Object(j.jsx)("option",{children:"2"}),Object(j.jsx)("option",{children:"3"}),Object(j.jsx)("option",{children:"4"}),Object(j.jsx)("option",{children:"5"})]})]}),Object(j.jsxs)("div",{className:"filter-option",children:[Object(j.jsx)("label",{children:"Bathroms"}),Object(j.jsxs)("select",{children:[Object(j.jsx)("option",{children:"1"}),Object(j.jsx)("option",{children:"2"}),Object(j.jsx)("option",{children:"3"}),Object(j.jsx)("option",{children:"4"}),Object(j.jsx)("option",{children:"5"})]})]})]}),Object(j.jsxs)("div",{className:"filter-checkboxs-radios",children:[Object(j.jsx)("span",{children:"Amentities"}),Object(j.jsxs)("div",{className:"filter-checkboxs",children:[Object(j.jsxs)("div",{className:"filter-checkbox",children:[Object(j.jsx)("label",{for:"air",children:"Air conditioning"}),Object(j.jsx)("input",{type:"checkbox",id:"air"})]}),Object(j.jsxs)("div",{className:"filter-checkbox",children:[Object(j.jsx)("label",{for:"pool",children:"Pool"}),Object(j.jsx)("input",{type:"checkbox",id:"pool"})]}),Object(j.jsxs)("div",{className:"filter-checkbox",children:[Object(j.jsx)("label",{for:"beach",children:"Beach"}),Object(j.jsx)("input",{type:"checkbox",id:"beach"})]}),Object(j.jsxs)("div",{className:"filter-checkbox",children:[Object(j.jsx)("label",{for:"petFriendly",children:"Pet friendly"}),Object(j.jsx)("input",{type:"checkbox",id:"petFriendly"})]}),Object(j.jsxs)("div",{className:"filter-checkbox",children:[Object(j.jsx)("label",{for:"balcony",children:"Balcony"}),Object(j.jsx)("input",{type:"checkbox",id:"balcony"})]})]}),Object(j.jsx)("span",{children:"Property Type"}),Object(j.jsxs)("div",{className:"filter-radios",children:[Object(j.jsxs)("div",{className:"filter-radio",children:[Object(j.jsx)("label",{for:"apartement",children:"Apartement"}),Object(j.jsx)("input",{type:"radio",id:"apartement"})]}),Object(j.jsxs)("div",{className:"filter-radio",children:[Object(j.jsx)("label",{for:"house",children:"House"}),Object(j.jsx)("input",{type:"radio",id:"house"})]}),Object(j.jsxs)("div",{className:"filter-radio",children:[Object(j.jsx)("label",{for:"loft",children:"Loft"}),Object(j.jsx)("input",{type:"radio",id:"loft"})]}),Object(j.jsxs)("div",{className:"filter-radio",children:[Object(j.jsx)("label",{for:"townhouse",children:"Townhouse"}),Object(j.jsx)("input",{type:"radio",id:"townhouse"})]})]})]}),Object(j.jsx)("div",{className:"filter-update",children:Object(j.jsx)("button",{children:"Update"})})]})]})})},d=(c(25),function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsxs)("div",{className:"brand-menuBtn-container",children:[Object(j.jsxs)("div",{className:"brand",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),Object(j.jsx)("span",{children:"Hotelfy"})]}),Object(j.jsx)("button",{className:"menu-btn",onClick:function(){return n(!c)},children:c?Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})}):Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})})})]}),Object(j.jsxs)("div",{className:"navbar-container ".concat(c?"":"hidden"),children:[Object(j.jsxs)("div",{className:"nav-search",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(j.jsx)("input",{type:"text",placeholder:"Search"})]}),Object(j.jsxs)("ul",{className:"nav-items-list",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{exact:!0,to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{to:"/about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{to:"/contact",children:"Contact"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.c,{to:"/price",children:"Price"})})]})]})]})}),b=c(11),x=function(){var e=function(e){return Array.apply(null,{length:5-e}).map((function(e){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"start",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e)}))};return Object(j.jsx)(j.Fragment,{children:b.slice(0,8).map((function(t,c){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.b,{to:"/hotel/".concat(t.title.replace(/ /g,"-")),className:"hotel-card",children:[Object(j.jsx)("div",{className:"hotel-img",children:Object(j.jsx)("img",{src:"/images/"+t.img})}),Object(j.jsxs)("div",{className:"hotel-details-container",children:[Object(j.jsxs)("div",{className:"hotel-details",children:[Object(j.jsxs)("span",{children:[t.beds," BEDS"]}),Object(j.jsx)("span",{children:"\u2219"}),Object(j.jsxs)("span",{children:[t.baths," BATHS"]})]}),Object(j.jsx)("h1",{children:t.title}),Object(j.jsxs)("span",{className:"hotel-price",children:["$",t.price.toLocaleString()," /mo"]}),Object(j.jsxs)("div",{className:"hotel-reviews",children:[Object(j.jsxs)("div",{className:"hotel-reviews-container",children:[(s=t.reviews.star,Array.apply(null,{length:s}).map((function(e){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e)}))),e(t.reviews.star)]}),Object(j.jsxs)("span",{children:[t.reviews.reviewsCount," Reviews"]})]})]})]},c)});var s}))})},p=(c(34),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{margin:"2em 2em -2em 2em"},children:[Object(j.jsx)("h1",{style:{fontSize:"25px",color:"#2D3748"},children:"Hootels"}),Object(j.jsx)("p",{style:{fontSize:"15px",color:"#2D3748",marginTop:"5px"},children:"Chose beautiful and comfortable hotel with perfect price"})]}),Object(j.jsx)("div",{className:"hotel-cards-container",children:Object(j.jsx)(x,{})})]})}),u=(c(35),c(16),function(){var e=function(e){return Array.apply(null,{length:5-e}).map((function(e){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"start",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e)}))};return Object(j.jsx)(j.Fragment,{children:b.slice(5,b.length).map((function(t){return Object(j.jsxs)(l.b,{to:"/hotel/".concat(t.title.replace(/ /g,"-")),className:"popular-hotel-container",children:[Object(j.jsx)("div",{className:"popular-hotel-img",children:Object(j.jsx)("img",{src:"/images/"+t.img})}),Object(j.jsxs)("div",{className:"hotel-details-container",children:[Object(j.jsxs)("div",{className:"hotel-details",children:[Object(j.jsxs)("span",{children:[t.beds," BEDS"]}),Object(j.jsx)("span",{children:"\u2219"}),Object(j.jsxs)("span",{children:[t.baths," BATHS"]})]}),Object(j.jsx)("h1",{children:t.title}),Object(j.jsxs)("span",{className:"hotel-price",children:["$",t.price.toLocaleString()," /mo"]}),Object(j.jsxs)("div",{className:"hotel-reviews",children:[Object(j.jsxs)("div",{className:"hotel-reviews-container",children:[(c=t.reviews.star,Array.apply(null,{length:c}).map((function(e){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},e)}))),e(t.reviews.star)]}),Object(j.jsxs)("span",{children:[t.reviews.reviewsCount," Reviews"]})]})]})]});var c}))})}),m=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{margin:"2em 2em -2em 2em"},children:[Object(j.jsx)("h1",{style:{fontSize:"25px",color:"#2D3748"},children:"Popular Hootels"}),Object(j.jsx)("p",{style:{fontSize:"15px",color:"#2D3748",marginTop:"5px"},children:"Here are the popular hotels"})]}),Object(j.jsx)("div",{className:"popular-hotel",children:Object(j.jsx)(u,{})})]})},O=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)("main",{className:"home",children:[Object(j.jsx)("div",{className:c?"":"filter-cover",onClick:function(){return n(!1)},style:{position:"fixed",top:0,zIndex:2,width:"100%",height:"100vh",background:"rgb(0 0 0 / 32%)"}}),Object(j.jsxs)("div",{className:"home-container",children:[Object(j.jsx)("div",{className:"home-filter ".concat(c?"show-filter":""),children:Object(j.jsx)(h,{closeFilter:function(){return n(!1)}})}),Object(j.jsxs)("div",{className:"home-content",children:[Object(j.jsx)(d,{}),Object(j.jsxs)("button",{className:"filter-btn",onClick:function(){return n(!c)},children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"})}),Object(j.jsx)("span",{children:"Filter"})]}),Object(j.jsx)(m,{}),Object(j.jsx)(p,{})]})]})]})},v=(c(36),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(d,{})})});c(37);var f=function(){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(a.a,{exact:!0,path:"/",component:O}),Object(j.jsx)(a.a,{path:"/hotel/:title",component:v})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.431ea4b7.chunk.js.map