(this.webpackJsonpdogs=this.webpackJsonpdogs||[]).push([[0],{37:function(e,n,t){e.exports=t.p+"static/media/logo.741bcd81.svg"},45:function(e,n,t){e.exports=t(58)},50:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(24),c=t.n(i),o=(t(50),t(1)),u=t(2),l=t(37),s=t.n(l);function d(){var e=Object(o.a)(["\n    max-width: 100%;\n    height: auto;\n"]);return d=function(){return e},e}function f(){var e=Object(o.a)(["\n    display: block;\n    margin: 0 auto;\n    max-width: 140px;\n    margin-bottom: 20px;\n"]);return f=function(){return e},e}var p=u.b.picture(f()),m=u.b.img(d()),b=function(){return a.a.createElement(p,null,a.a.createElement(m,{src:s.a}))},v=t(16);function h(){var e=Object(o.a)(["\n    text-decoration: none;\n    padding-bottom: 10px;\n    width: 100%;\n    border-bottom: 1px solid black;\n    margin-bottom: 10px;\n    color: black;\n    font-size: 18px;\n    transtion-duration: 0.3s;\n\n    &:hover {\n        border-color: #75b2e2;\n        color: #75b2e2;\n    }\n\n    &:last-child {\n        margin-bottom: 0;\n    }\n"]);return h=function(){return e},e}function g(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 35px 0 20px 0;\n"]);return g=function(){return e},e}var x=u.b.nav(g()),w=Object(u.b)(v.b)(h()),E=function(){return a.a.createElement(x,null,a.a.createElement(w,{to:"/dogs"},"Home"),a.a.createElement(w,{to:"/breeds-list"},"Breeds list"),a.a.createElement(w,{to:"/reviews"},"Reviews"))};function j(){var e=Object(o.a)(["\n    padding: 20px;\n    height: 100%;\n    width: 25%;\n    background-color: #d6d6d6;\n"]);return j=function(){return e},e}var O=u.b.div(j()),y=function(){return a.a.createElement(O,null,a.a.createElement(b,null),a.a.createElement(E,null))};function k(){var e=Object(o.a)(["\n    padding: 50px 40px;\n    height: 100%;\n    width: 80%;\n    background-color: #f7f7f7;\n"]);return k=function(){return e},e}var I=u.b.div(k()),T=function(e){var n=e.children;return a.a.createElement(I,null,n)},S=t(18),L=t(8),R=t(9),D=t(12),V=t(10),_=t(13),C=t(4),F=t.n(C),A=t(11);function N(){var e=Object(o.a)(["\n    max-height: 250px;\n    object-fit: contain;\n    margin-bottom: 20px;\n"]);return N=function(){return e},e}var z=u.b.img(N()),B=function(e){var n=e.className,t=e.source;return a.a.createElement(z,{className:n,src:t})};function M(){var e=Object(o.a)(["\n            background-color: silver;\n            pointer-events: none;\n            color: black;\n        "]);return M=function(){return e},e}function G(){var e=Object(o.a)(["\n                    background-color: black;\n                    color: white;\n                "]);return G=function(){return e},e}function U(){var e=Object(o.a)(["\n                    background-color: #3c74ad;\n                    color: white;\n                "]);return U=function(){return e},e}function W(){var e=Object(o.a)(["\n    height: 40px;\n    border: none;\n    border-radius: 3px;\n    padding: 0 10px;\n    display: flex;\n    align-items: center;\n    width: fit-content;\n    pointer-events: initial;\n    transition: all 0.3s;\n\n    &:hover {\n        cursor: pointer;\n    }\n    ","\n\n    ","\n"]);return W=function(){return e},e}var H=u.b.button(W(),(function(e){switch(e.theme){case"primary":return Object(u.a)(U());default:return Object(u.a)(G())}}),(function(e){return!e.enable&&Object(u.a)(M())})),K=function(e){var n=e.className,t=e.children,r=e.theme,i=e.onClick,c=e.enable,o=void 0===c||c;return a.a.createElement(H,{className:n,theme:r,onClick:i,enable:o},t)},J=t(22),X=t.n(J),Y=(t(56),function(e){return{type:"SET_LOADING",payload:e}});function Z(){var e=Object(o.a)(["\n    max-width: 400px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px 5px;\n"]);return Z=function(){return e},e}var q=u.b.div(Z()),P=function(e){function n(){var e,t;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(D.a)(this,(e=Object(V.a)(n)).call.apply(e,[this].concat(a)))).state={linkImage:""},t}return Object(_.a)(n,e),Object(R.a)(n,[{key:"componentDidMount",value:function(){this.props.getUrlImage()}},{key:"render",value:function(){var e=this.props,n=e.linkImage,t=e.getUrlImage;return a.a.createElement(q,null,a.a.createElement(B,{source:n}),a.a.createElement(K,{onClick:function(){return t()}},"get random image"))}}]),n}(a.a.Component);P.propsTypes={linkImage:F.a.string,getUrlImage:F.a.func};var Q=Object(A.b)((function(e){return{linkImage:e.linkImage}}),(function(e){return{getUrlImage:function(){return e((function(e){fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return e.json()})).then((function(n){e({type:"SET_IMAGE",payload:n.message})})).catch((function(e){return console.log(e)}))}))}}}))(P);function $(){var e=Object(o.a)(["\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 38px;\n    max-width: 600px;\n"]);return $=function(){return e},e}var ee=u.b.h2($()),ne=function(e){var n=e.children;return a.a.createElement(ee,null,n)},te=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(ne,null,"The internet's biggest collection of"," ",a.a.createElement("strong",null,"open source dog pictures.")),a.a.createElement(Q,null))};function re(){var e=Object(o.a)(["\n    width: fit-content;\n    height: 30px;\n    font-size: 16px;\n    color: black;\n    display: flex;\n    align-items: center;\n    border-radius: 10px;\n    padding: 0 10px;\n    background-color: #a0a0a0;\n    color: white;\n"]);return re=function(){return e},e}var ae=u.b.div(re()),ie=function(e){var n=e.className,t=e.children;return a.a.createElement(ae,{className:n},t)};function ce(){var e=Object(o.a)(["\n    margin: 0 10px 10px 10px;\n    text-transform: capitalize;\n"]);return ce=function(){return e},e}function oe(){var e=Object(o.a)(["\n    display: flex;\n    flex-wrap: wrap;\n"]);return oe=function(){return e},e}var ue=u.b.div(oe()),le=Object(u.b)(ie)(ce()),se=function(e){var n=e.lists;return a.a.createElement(ue,null,n.map((function(e,n){return a.a.createElement(v.b,{key:n,to:"/photo/".concat(e)},a.a.createElement(le,null,e))})))};function de(){var e=Object(o.a)(["\n    height: 40px;\n    border: none;\n    border-radius: 4px;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n    padding: 5px 10px;\n    font-size: 16px;\n    color: black;\n    &:focus {\n        outline: none;\n    }\n"]);return de=function(){return e},e}var fe=u.b.input(de()),pe=function(e){var n=e.className,t=e.value,r=e.placeholder,i=e.onChange;return a.a.createElement(fe,{className:n,value:t,placeholder:r,onChange:i})};function me(){var e=Object(o.a)(["\n    margin-bottom: 20px;\n"]);return me=function(){return e},e}var be=Object(u.b)(pe)(me()),ve=function(e){function n(){var e,t;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(D.a)(this,(e=Object(V.a)(n)).call.apply(e,[this].concat(a)))).state={search:""},t.searchBreeds=function(e){var n=e.target,r=t.props,a=r.breedsList,i=r.filterBreeds,c=a.filter((function(e){return e.includes(n.value)}));t.setState({search:n.value}),i(c)},t}return Object(_.a)(n,e),Object(R.a)(n,[{key:"componentDidMount",value:function(){this.props.getBreedsList()}},{key:"render",value:function(){var e=this.state.search,n=this.props.showList;return a.a.createElement(r.Fragment,null,a.a.createElement(ne,null,"All breeds list"),a.a.createElement(be,{value:e,placeholder:"Search",onChange:this.searchBreeds}),n.length>0?a.a.createElement(se,{lists:n}):a.a.createElement("div",null,"no results"))}}]),n}(a.a.Component),he=Object(A.b)((function(e){return{breedsList:e.breedsList,showList:e.showList}}),(function(e){return{getBreedsList:function(){return e((function(e){fetch("https://dog.ceo/api/breeds/list/all").then((function(e){return e.json()})).then((function(n){var t=Object.keys(n.message);e({type:"SET_BREEDS",payload:t})}))}))},filterBreeds:function(n){return e({type:"SET_FILTER_SHOW_LIST",payload:n})}}}))(ve);function ge(){var e=Object(o.a)(["\n    width: calc((100% / 4) - 15px);\n    margin-right: 15px;\n    margin-bottom: 15px;\n"]);return ge=function(){return e},e}function xe(){var e=Object(o.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n"]);return xe=function(){return e},e}var we=u.b.div(xe()),Ee=Object(u.b)(B)(ge()),je=function(e){function n(e){var t;return Object(L.a)(this,n),(t=Object(D.a)(this,Object(V.a)(n).call(this,e))).name=t.props.match.params.name,t.state={arrayImage:[]},t}return Object(_.a)(n,e),Object(R.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dog.ceo/api/breed/".concat(this.name,"/images")).then((function(e){return e.json()})).then((function(n){var t=n.message;e.setState({arrayImage:t})}))}},{key:"render",value:function(){var e=this.state.arrayImage;return a.a.createElement(r.Fragment,null,a.a.createElement(ne,null,"Photo of the breed: \xa0",a.a.createElement("strong",null,this.name)),a.a.createElement(we,null,e.map((function(e,n){return a.a.createElement(Ee,{source:e,key:n})}))))}}]),n}(r.Component),Oe=Object(S.g)(je);function ye(){var e=Object(o.a)(["\n    resize: none;\n    width: 100%;\n    height: 100px;\n    border-radius: 4px;\n    border: none;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);\n    padding: 5px;\n    color: black;\n    font-size: 14px;\n    margin: 10px 0;\n"]);return ye=function(){return e},e}function ke(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    max-width: 300px;\n    width: 100%;\n    margin-bottom: 20px;\n"]);return ke=function(){return e},e}var Ie=u.b.div(ke()),Te=u.b.textarea(ye()),Se=function(e){function n(){var e,t;Object(L.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(D.a)(this,(e=Object(V.a)(n)).call.apply(e,[this].concat(a)))).state={review:"",reviewText:"",reviewValid:!1,reviewTextValid:!1,formValid:!1},t.changeReview=function(e){var n=e.target;t.setState({review:n.value},(function(){t.validateReviewField()}))},t.changeReviewText=function(e){var n=e.target;t.setState({reviewText:n.value},(function(){t.validateReviewText()}))},t.validateReviewField=function(){var e=t.state.review;t.setState({reviewValid:t.validateMinLength(e)},(function(){t.validateForm()}))},t.validateReviewText=function(){var e=t.state.reviewText;t.setState({reviewTextValid:t.validateMinLength(e,10)},(function(){t.validateForm()}))},t.validateMinLength=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e.length>n},t.validateForm=function(){var e=t.state,n=e.reviewValid,r=e.reviewTextValid;t.setState({formValid:r&&n})},t.sendReview=function(){var e=new Date,n={name:t.state.review,text:t.state.reviewText,date:"".concat(e.getDay(),".").concat(e.getMonth()+1,".").concat(e.getFullYear())};t.props.test(n),t.setState({review:"",reviewText:"",reviewValid:!1,reviewTextValid:!1,formValid:!1})},t}return Object(_.a)(n,e),Object(R.a)(n,[{key:"render",value:function(){var e=this.state,n=e.review,t=e.reviewText,i=e.formValid;return a.a.createElement(r.Fragment,null,a.a.createElement(ne,null,"Reviews"),a.a.createElement(Ie,null,a.a.createElement(pe,{value:n,placeholder:"Your name",onChange:this.changeReview}),a.a.createElement(Te,{placeholder:"Text review",value:t,onChange:this.changeReviewText}),a.a.createElement(K,{enable:i,onClick:this.sendReview},"Add review")))}}]),n}(r.Component),Le=Object(A.b)(null,(function(e){return{test:function(n){var t;e((t=n,function(e){X.a.database().ref("reviews/").push(t).then((function(){e(function(e){return{type:"ADD_REVIEW",payload:e}}(t))}))}))}}}))(Se);function Re(){var e=Object(o.a)(["\n    margin-top: 10px;\n    padding: 10px;\n    background-color: white;\n    border-radius: 3px;\n    color: black;\n    font-size: 18px;\n"]);return Re=function(){return e},e}function De(){var e=Object(o.a)(["\n    font-size: 18px;\n    line-height: 18px;\n    display: flex;\n    align-items: center;\n    width: fit-content;\n    padding: 3px;\n    border-radius: 3px;\n    background-color: white;\n    color: black;\n"]);return De=function(){return e},e}function Ve(){var e=Object(o.a)(["\n    margin: 0;\n    font-size: 26px;\n    font-weight: 700;\n"]);return Ve=function(){return e},e}function _e(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding-bottom: 10px;\n    border-bottom: 1px solid white;\n"]);return _e=function(){return e},e}function Ce(){var e=Object(o.a)(["\n    padding: 10px;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n    background-color: silver;\n    border-radius: 5px;\n"]);return Ce=function(){return e},e}var Fe=u.b.div(Ce()),Ae=u.b.div(_e()),Ne=u.b.h2(Ve()),ze=u.b.span(De()),Be=u.b.div(Re()),Me=function(e){var n=e.className,t=e.review;return a.a.createElement(Fe,{className:n},a.a.createElement(Ae,null,a.a.createElement(Ne,null,t.name),a.a.createElement(ze,null,t.date)),a.a.createElement(Be,null,t.text))};function Ge(){var e=Object(o.a)(["\n    margin-bottom: 20px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n"]);return Ge=function(){return e},e}function Ue(){var e=Object(o.a)(["\n    margin: 10px 0;\n"]);return Ue=function(){return e},e}var We=u.b.div(Ue()),He=Object(u.b)(Me)(Ge()),Ke=function(e){var n=e.list;return a.a.createElement(r.Fragment,null,n.length>0?a.a.createElement(We,null,n.map((function(e,n){return a.a.createElement(He,{review:e,key:n})}))):a.a.createElement("h2",null,"No reviews"))},Je=function(e){function n(){return Object(L.a)(this,n),Object(D.a)(this,Object(V.a)(n).apply(this,arguments))}return Object(_.a)(n,e),Object(R.a)(n,[{key:"componentDidMount",value:function(){this.props.getReview()}},{key:"render",value:function(){var e=this.props.loading;return a.a.createElement(r.Fragment,null,a.a.createElement(Le,null),e?a.a.createElement("span",null,"loading review"):a.a.createElement(Ke,{list:this.props.review}))}}]),n}(r.Component),Xe=Object(A.b)((function(e){return{review:e.review,loading:e.loading}}),(function(e){return{getReview:function(n){return e((function(e){e(Y(!0));var n=[];X.a.database().ref("reviews/").once("value",(function(t){t.forEach((function(e){n.unshift(e.val())})),e({type:"GET_REVIEW",payload:n}),e(Y(!1))}))}))}}}))(Je),Ye=function(){return a.a.createElement(S.d,null,a.a.createElement(S.b,{path:"/dogs",component:te}),a.a.createElement(S.b,{path:"/breeds-list",component:he}),a.a.createElement(S.b,{path:"/photo/:name",component:Oe}),a.a.createElement(S.b,{path:"/reviews",component:Xe}),a.a.createElement(S.b,{exact:!0,path:"/"},a.a.createElement(S.a,{to:"/dogs"})))};function Ze(){var e=Object(o.a)(["\n    display: flex;\n    height: 100%;\n"]);return Ze=function(){return e},e}var qe=u.b.div(Ze()),Pe=function(){return a.a.createElement(qe,null,a.a.createElement(y,null),a.a.createElement(T,null,a.a.createElement(Ye,null)))},Qe=function(){return a.a.createElement(Pe,null)},$e=t(31),en=t(19),nn={linkImage:"",breedsList:[],showList:[],review:[],loading:!1},tn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nn,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"ADD_REVIEW":var a=e.review;return Object(en.a)({},e,{review:[r].concat(Object($e.a)(a))});case"GET_REVIEW":return Object(en.a)({},e,{review:Object($e.a)(r)});case"SET_LOADING":return Object(en.a)({},e,{loading:r});case"SET_IMAGE":return Object(en.a)({},e,{linkImage:r});case"SET_BREEDS":return Object(en.a)({},e,{breedsList:r,showList:r});case"SET_FILTER_SHOW_LIST":return Object(en.a)({},e,{showList:r});default:return e}},rn=t(21),an=t(43),cn=Object(rn.c)(tn,Object(rn.a)(an.a));X.a.initializeApp({apiKey:"AIzaSyDOr8HZnj1KKOCMHtXgEiiUqZwKKuGFXww",authDomain:"dogs-7a680.firebaseapp.com",databaseURL:"https://dogs-7a680.firebaseio.com",projectId:"dogs-7a680",storageBucket:"dogs-7a680.appspot.com",messagingSenderId:"192632594523",appId:"1:192632594523:web:8ae1699ed8fc4f787a1f7e"});var on=a.a.createElement(A.a,{store:cn},a.a.createElement(v.a,null,a.a.createElement(Qe,null)));c.a.render(on,document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bc556fb2.chunk.js.map