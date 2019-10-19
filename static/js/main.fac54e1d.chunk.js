(window["webpackJsonpimage-finder-with-redux"]=window["webpackJsonpimage-finder-with-redux"]||[]).push([[0],{11:function(e,t,a){e.exports={photoCard:"PhotoCard_photoCard__1Qipl",fullscreenButton:"PhotoCard_fullscreenButton__1nwRI",galleryItem:"PhotoCard_galleryItem__3Drat"}},17:function(e,t,a){e.exports={overlay:"Modal_overlay__MVhyL",modal:"Modal_modal__8wmHy"}},18:function(e,t,a){e.exports={app:"App_app__1NbOX",button:"App_button__3pXg4"}},30:function(e,t,a){e.exports={gallery:"Gallery_gallery__2z_5Z"}},31:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__1BOQQ"}},35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),l=a.n(o),c=(a(40),a(3)),u=a(4),i=a(7),p=a(5),s=a(8),d=a(6),y=function(e){return{type:"ADD_QUERY",payload:{query:e}}},f=function(e){return{type:"FETCH_IS_LOADING",payload:e}},m=a(29),g=a.n(m),h=function(e){return function(t){t(f(!0)),function(e){return g.a.get(e)}(e).then(function(e){t(f(!1)),t(function(e){return{type:"FETCH_IS_SUCCSES",payload:e}}(e.data.hits))}).catch(function(){return t({type:"FETCH_IS_ERROR",payload:!0})})}},b=a(11),O=a.n(b),v=function(e){var t=e.largeImageURL,a=e.webformatURL,r=e.openModal;return n.a.createElement("div",{className:O.a.photoCard},n.a.createElement("img",{src:a,alt:""}),n.a.createElement("button",{type:"button",className:O.a.fullscreenButton,onClick:function(){return r(t)}},n.a.createElement("i",{className:"material-icons"},"zoom_out_map")))},_=a(17),E=a.n(_),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},a.modalRef=Object(r.createRef)(),a.handlePress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleClickBeckdrop=function(e){var t=a.modalRef.current;t&&e.target!==t||a.props.onClose()},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlePress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlePress)}},{key:"render",value:function(){var e=this.props.largeIMG;return console.log(e),n.a.createElement("div",{className:E.a.overlay,ref:this.modalRef,onClick:this.handleClickBeckdrop,onKeyDown:function(){}},n.a.createElement("div",{className:E.a.modal},n.a.createElement("img",{src:e,alt:""})))}}]),t}(r.Component),w=a(30),C=a.n(w),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={},a.handleOpenModal=function(e){var t=a.props,r=t.modal,n=t.largeIMG;a.props.openModal(r,n)},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.pictures;e.pictures!==t&&window.scrollTo(0,window.pageYOffset+500)}},{key:"render",value:function(){var e=this.props,t=e.pictures,a=e.modal,r=e.largeIMG,o=e.closeModal,l=e.openModal;return n.a.createElement(n.a.Fragment,null,a&&n.a.createElement(j,{largeIMG:r,onClose:function(){return o()}}),n.a.createElement("ul",{className:C.a.gallery},t.map(function(e){return n.a.createElement("li",{key:e.id,className:O.a.galleryItem},n.a.createElement(v,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,openModal:function(){return l(e.largeImageURL)}}))})))}}]),t}(r.Component),A=Object(d.b)(function(e){return{pictures:e.galleryArray,isLoading:e.isLoading,isError:e.isError,modal:e.modal,largeIMG:e.largeIMG}},function(e){return{openModal:function(t){return e({type:"OPEN_MODAL",payload:t})},closeModal:function(){return e({type:"CLOSE_MODA",payload:!1})}}})(D),M=a(31),k=a.n(M),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={query:""},a.handleSubmit=function(e){e.preventDefault(),a.props.addQuery(a.state.query),a.setState({query:""})},a.handleCange=function(e){a.setState({query:e.target.value})},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.query;return n.a.createElement("form",{className:k.a.searchForm,onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",value:e,autoComplete:"off",placeholder:"Search images...",onChange:this.handleCange}))}}]),t}(r.Component),L=Object(d.b)(null,function(e){return{addQuery:function(t){return e(y(t))}}})(I),S=function(e,t){return"".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("10567453-efb51e377e8530461eabbaf35")},P=a(18),R=a.n(P),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleClick=function(){var e=a.props,t=e.page,r=e.value;a.props.addPage(t+1,function(){a.props.fetchData(S(r,t))})},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.value,a=e.page;this.props.fetchData(S(t,a))}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.value,r=t.page;e.value===a&&e.page===r||this.props.fetchData(S(a,r))}},{key:"render",value:function(){var e=this.props,t=e.galleryArray,a=e.isLoading;return n.a.createElement("div",{className:R.a.app},n.a.createElement(L,null),a&&n.a.createElement("h1",null,"Loading..."),t.length>0&&n.a.createElement(A,{pictures:t}),n.a.createElement("button",{type:"button",className:R.a.button,onClick:this.handleClick},"Load more"))}}]),t}(r.Component),U=Object(d.b)(function(e){return{galleryArray:e.galleryArray,page:Number(e.page),value:e.value,isLoading:e.isLoading,isError:e.isError}},function(e){return{addPage:function(t){return e(function(e){return{type:"ADD_PAGE",payload:{page:e}}}(t))},fetchData:function(t){return e(h(t))},addQuery:function(t){return e(y(t))}}})(N),G=a(10),F=a(32),x=a(33),q=a(13),Q=a(34);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(Q.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var H={galleryArray:[],isLoading:!0,isError:!1,page:1,value:"",modal:!1,largeIMG:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_QUERY":return B({},e,{value:t.payload.query,galleryArray:e.value!==t.payload?[]:[e.galleryArray]});case"ADD_PAGE":return B({},e,{page:t.payload.page});case"FETCH_IS_LOADING":return B({},e,{isLoading:t.payload});case"FETCH_IS_ERROR":return B({},e,{isError:t.payload});case"FETCH_IS_SUCCSES":return B({},e,{galleryArray:""===e.value&&1===e.page?Object(q.a)(t.payload):[].concat(Object(q.a)(e.galleryArray),Object(q.a)(t.payload))});case"OPEN_MODAL":return B({},e,{modal:!0,largeIMG:t.payload});case"CLOSE_MODA":return B({},e,{modal:!1});default:return e}},Y=Object(G.createStore)(z,Object(F.composeWithDevTools)(Object(G.applyMiddleware)(x.a)));l.a.render(n.a.createElement(d.a,{store:Y},n.a.createElement(U,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fac54e1d.chunk.js.map