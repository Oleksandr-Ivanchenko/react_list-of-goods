(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(5),o=s.n(n),c=s(3),i=s(1),r=s(6),a=s(7),b=s(9),u=s(8),l=s(2),h=s.n(l),j=s(0),g=function(t){var e=t.goods;return Object(j.jsx)("div",{children:e.map((function(t){return Object(j.jsx)("li",{children:t},t)}))})},d=(s(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),O=function(t){Object(b.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={show:!1,revers:!1,sort:"",goods:[].concat(d)},t.toggleList=function(){t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{show:!t.show})}))},t.revers=function(){t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{goods:Object(c.a)(t.goods).reverse()})}))},t.sortAlpgabet=function(){t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{goods:Object(c.a)(t.goods).sort()})}))},t.sortLength=function(){t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{goods:Object(c.a)(t.goods).sort((function(t,e){return t.length-e.length}))})}))},t.reset=function(){t.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{goods:[].concat(d)})}))},t}return Object(a.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title is-1",children:"Goods"}),this.state.show&&Object(j.jsx)(g,{goods:this.state.goods}),Object(j.jsx)("button",{type:"button",onClick:this.toggleList,className:"button is-success is-light",children:"Start"}),Object(j.jsx)("button",{type:"button",onClick:this.revers,className:"button is-info is-light",children:"Reverse"}),Object(j.jsx)("button",{type:"button",onClick:this.sortAlpgabet,className:"button is-info is-light",children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",onClick:this.sortLength,className:"button is-info is-light",children:"Sort by length"}),Object(j.jsx)("button",{type:"button",onClick:this.reset,className:"button is-danger is-light",children:"Reset"})]})}}]),s}(h.a.Component),f=O;o.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b69fce9f.chunk.js.map