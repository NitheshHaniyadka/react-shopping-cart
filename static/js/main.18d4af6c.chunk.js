(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{193:function(e,t,a){},507:function(e,t,a){},609:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),c=a(24),r=a.n(c),i=(a(193),a(185)),o=a(20),l=a.n(o),d=a(37),j=a(11),u=a(12),h=a(2),m=a(14),b=a(13),p=(a(611),a(1));s.Component,a(489),a(507);function g(e){return"\u20b9"+Number(e.toFixed(1)).toLocaleString()+" "}s.Component;var x=function(){return Object(p.jsx)(s.Fragment,{children:Object(p.jsx)("div",{children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"nav-item text-dark",children:Object(p.jsx)("span",{children:Object(p.jsx)("i",{className:"fa fa-bars bars",style:{marginLeft:"-14rem"},"aria-hidden":"true"})})}),Object(p.jsx)("li",{className:"nav-item text-dark",children:Object(p.jsx)("span",{children:Object(p.jsx)("i",{className:"fa ad","aria-hidden":"true"})})}),Object(p.jsx)("li",{className:"nav-item text-dark",children:Object(p.jsx)("span",{children:Object(p.jsx)("i",{className:"fa fa-search fees",style:{marginTop:"12px"},"aria-hidden":"true"})})}),Object(p.jsx)("li",{className:"nav-item text-dark",children:Object(p.jsx)("span",{children:Object(p.jsx)("i",{className:"fa fa-shopping-basket trans",style:{marginTop:"12px"},"aria-hidden":"true"})})})]})})})})},O=function(e){var t=e.posts;e.loading;return Object(p.jsx)("div",{children:Object(p.jsx)("ul",{className:"products",children:t.map((function(e){return Object(p.jsx)("div",{className:"col-md-6 border p-4",children:Object(p.jsxs)("li",{children:[Object(p.jsx)("div",{className:"product",children:Object(p.jsx)("img",{src:e.skuImageUrl,alt:e.categoryName})}),Object(p.jsx)("div",{className:"name",children:Object(p.jsx)("a",{href:"!#"+e.deepLinkUrl,children:Object(p.jsx)("p",{children:e.skuName})})}),Object(p.jsx)("div",{className:"product-price",children:Object(p.jsx)("p",{className:"price",children:g(e.defaultPrice)})})]})},e.skuId)}))})})},f=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-3"}),Object(p.jsxs)("div",{className:"col-md-9 align-center",children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"L'oreal Paris - ",this.props.count," products"]}),Object(p.jsx)("div",{className:"col-md-3"})]})}}]),a}(s.Component),v=function(e){var t=e.handleClose,a=e.show,s=e.children,n=a?"modal d-block":"modal d-none";return Object(p.jsx)("div",{className:n,children:Object(p.jsxs)("div",{className:"modal-container",children:[s,Object(p.jsx)("button",{className:"modal-close",onClick:t,children:"X"})]})})},N=(a(610),function(e){var t=e.modalClose_Filter,a=e.show,s=e.children,n=e.categoryshow,c=(e.getProductData,e.itemInformation,a?"modal d-block":"modal d-none");return Object(p.jsx)("div",{className:c,children:Object(p.jsxs)("div",{className:"modal-container category",children:[s,Object(p.jsx)("button",{className:"modal-close fa-close",onClick:t,children:"X"}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)("ul",{className:"list-group",children:n.map((function(e,t){return Object(p.jsx)("li",{className:"list-group-item  border p-4 text-warning ",children:e.name},t)}))})})})]})})}),C=function(e){for(var t=e.postsPerPage,a=e.totalPost,s=e.paginate,n=[],c=1;c<=Math.ceil(a/t);c++)n.push(c);return Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsx)("nav",{children:Object(p.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(p.jsx)("li",{className:"page-item",children:Object(p.jsx)("button",{onClick:function(){return s(e)},className:"page-link",children:e})},e)}))})})})})},k=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).getProductData=function(t){console.log("yes"),e.setState({itemInformation:e.state.filterproducts.aggregations})},e.onChangePage=function(t){console.log("active page is ".concat(t)),e.setState({startIndex:t})},e.getHealthandGlow=Object(d.a)(l.a.mark((function t(){var a,s,n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.startIndex,s=e.state.endIndex,t.next=4,fetch("https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=".concat(a,":").concat(s));case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,e.setState({productlist:c.data.products,paginationdata:c.data.products});case 9:case"end":return t.stop()}}),t)}))),e.getHealthandGlowFilter=Object(d.a)(l.a.mark((function t(){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20&category=lipstick&shade=Maroon");case 2:return a=t.sent,t.next=5,a.json();case 5:s=t.sent,e.setState({filterproducts:s.data.aggregations});case 7:case"end":return t.stop()}}),t)}))),e.handleChangeSort=function(t){var a=t.target.value;e.setState((function(t){return{sort:a,productlist:e.state.productlist.slice().sort((function(e,t){return"lowest"===a?e.defaultPrice>t.defaultPrice?1:-1:"highest"===a?e.defaultPrice<t.defaultPrice?1:-1:e.skuId>t.skuId?1:-1}))}})),e.modalClose()},e.handleChangeCategory=function(t){var a=t.target.value;e.setState((function(t){return{sort:a,productlist:e.state.productlist.slice().sort((function(e,t){return"lowest"===a?e.defaultPrice>t.defaultPrice?1:-1:"highest"===a?e.defaultPrice<t.defaultPrice?1:-1:e.skuId>t.skuId?1:-1}))}})),e.modalClose()},e.state={modal:!1,modal_category:!1,productlist:[],filterproducts:[],sort:"",startIndex:1,endIndex:167,postsPerPage:20,paginationdata:[],indexOfLastPost:"",indexOfFirsttPost:"",currentPosts:"",pageOfItems:[],itemInformation:[]},e.onChangePage=e.onChangePage.bind(Object(h.a)(e)),e.getProductData=e.getProductData.bind(Object(h.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getHealthandGlow(),this.getHealthandGlowFilter()}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,s=t.value;this.setState(Object(i.a)({},a,s))}},{key:"handleSubmit",value:function(e){this.setState({name:this.state.modalInputName}),this.modalClose()}},{key:"modalClose",value:function(){this.setState({modalInputName:"",modal:!1})}},{key:"modalClose_Filter",value:function(){this.setState({modalInputName:"",modal_category:!1})}},{key:"modalOpen",value:function(){this.setState({modal:!0})}},{key:"modalOpen_category",value:function(){this.setState({modal_category:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.productlist,s=t.filterproducts,n=t.startIndex,c=t.postsPerPage;console.log(s);var r=n*c,i=r-c,o=a.slice(i,r);return Object(p.jsxs)("div",{className:"grid-container",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)(x,{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-3"}),Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)(f,{size:this.state.size,sort:this.state.sort,handleChangeCategory:this.handleChangeCategory,handleChangeSort:this.handleChangeSort,count:this.state.productlist.length})})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-1"}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"btn btn-block btn-warning btn-lg buttonColor",onClick:function(t){return e.modalOpen(t)},children:"SortByDiscount"})]}),Object(p.jsxs)("div",{className:"col-md-4",children:[Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"btn btn-block btn-warning btn-lg buttonColor",onClick:function(t){return e.modalOpen_category(t)},children:"FILTER BY CATEGORY"})]})]}),Object(p.jsx)("div",{className:"col-md-1"})]}),Object(p.jsx)("div",{children:Object(p.jsx)("main",{children:Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)(C,{startIndex:this.state.startIndex,postsPerPage:20,totalPost:this.state.productlist.length,paginate:this.onChangePage}),Object(p.jsx)(O,{posts:o}),Object(p.jsx)(v,{show:this.state.modal,handleClose:function(t){return e.modalClose(t)},children:Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(t){return e.handleChangeSort(t)},type:"button",children:"Discount"})})}),Object(p.jsx)(N,{itemInformation:this.state.itemInformation,categoryshow:this.state.filterproducts,show:this.state.modal_category,modalClose_Filter:function(t){return e.modalClose_Filter(t)},getProductData:function(t){return e.getProductData(t)},children:Object(p.jsx)("div",{className:"form-group",children:Object(p.jsx)("button",{className:"btn btn-primary align-left",onClick:function(t){return e.handleChangeCategory(t)},type:"button",children:"FILTER ALL"})})})]})})})})]})}}]),a}(n.a.Component);a(607),a(608);r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[609,1,2]]]);
//# sourceMappingURL=main.18d4af6c.chunk.js.map