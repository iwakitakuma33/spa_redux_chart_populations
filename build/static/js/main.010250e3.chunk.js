(this["webpackJsonpreact-highcharts"]=this["webpackJsonpreact-highcharts"]||[]).push([[0],{33:function(e,t,r){},54:function(e,t,r){"use strict";r.r(t);var a,n=r(0),c=r.n(n),i=r(7),o=r.n(i),p=r(3),s=(r(33),{endpoints:{population:{composition:{onePrefPerYear:"/population/composition/perYear?prefCode=:prefCode"}},prefectures:{all:"/prefectures"}}}),l=r(22),d=r.n(l).a.create({headers:{"X-API-KEY":"sGrH40HrQVbae9f333nwmuyxDNG0faqnoQD6W3pZ"}});!function(e){e.GET="GET",e.POST="POST",e.PATCH="PATCH",e.PUT="PUT",e.DELETE="DELETE"}(a||(a={}));var u=function(e){return f(e,a.GET)};function f(e,t){return d({url:"".concat("https://opendata.resas-portal.go.jp/api/v1").concat(e),method:t})}var h="PREFS_ACTIONS/FETCH_PREFS",b="POPLATION_ACTIONS/FETCH_POPULATION",j="POPLATION_ACTIONS/DELETE_POPULATION",g="GRAPH_ACTIONS/FETCHE_GRAPHDATA",O="GRAPH_ACTIONS/DELETE_GRAPHDATA",x=r(1),m={checkcardList:{display:"flex",flexWrap:"wrap",padding:"10px",justifyContent:"flex-start",justifySelf:"auto"},text:{display:"contents",marginLeft:"1em",cursor:"pointer"},checkcard:{borderBottom:"solid 1px",textAlign:"center",padding:"4px",margin:"0.5rem"},label:{fontSize:"20px",padding:"0.5rem 2rem",borderBottom:"2px solid #000",marginLeft:"15pt",marginRight:"15pt"}},y=function(e){var t=e.label,r=e.prefectures,a=Object(p.b)(),n=function(e,t,r){var n=s.endpoints.population.composition.onePrefPerYear.replace(":prefCode",String(t));r?u(n).then((function(r){var n;a((n={prefName:e,prefCode:t,data:r.data.result.data[0].data},{type:b,payload:n})),a(function(e){return{type:g,payload:e}}({prefName:e,prefCode:t,data:r.data.result.data[0].data}))})):(a(function(e){return{type:j,payload:e}}(t)),a(function(e){return{type:O,payload:e}}(t)))},c=function(e){var t=4-e.length;return"\u3000".repeat(t)+e};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{style:m.label,children:t}),Object(x.jsx)("div",{style:m.checkcardList,children:r.result.map((function(e){return Object(x.jsxs)("div",{style:m.checkcard,children:[Object(x.jsx)("input",{type:"checkbox",name:"Prefecture name",onChange:function(t){return n(e.prefName,e.prefCode,t.target.checked)},id:"checkbox"+e.prefCode}),Object(x.jsx)("label",{style:m.text,htmlFor:"checkbox"+e.prefCode,children:c(e.prefName)})]},e.prefName)}))})]})},v=r(23),P=r.n(v),T=r(24),C=r.n(T),A={title:"\u7dcf\u4eba\u53e3\u63a8\u79fb",xLabel:"\u5e74\u5ea6",yLabel:"\u4eba\u53e3\u6570"},E={graph:{padding:"12px"},label:{fontSize:"20px",padding:"0.5rem 2rem",borderBottom:"2px solid #000",marginLeft:"15pt",marginRight:"15pt"}},L=function(e){var t=e.label,r=e.graph,a={title:{text:A.title},xAxis:{title:{text:A.xLabel},categories:0==r.length?[]:r[0].categories},yAxis:{title:{text:A.yLabel}},series:r.map((function(e){return e.series[0]}))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{style:E.label,children:t}),Object(x.jsx)("div",{style:E.graph,children:Object(x.jsx)(C.a,{highcharts:P.a,options:a})})]})},N=function(e){return e.prefs},S="\u90fd\u9053\u5e9c\u770c\u5225\u306e\u7dcf\u4eba\u53e3\u63a8\u79fb\u30b0\u30e9\u30d5",F={prefs:"\u90fd\u9053\u5e9c\u770c",populations:"\u30b0\u30e9\u30d5"},I=function(e){return e.graph},H=function(){var e=Object(p.b)(),t=Object(p.c)(N),r=Object(p.c)(I);return Object(n.useEffect)((function(){var t=s.endpoints.prefectures.all;u(t).then((function(t){var r;e((r=t.data,{type:h,payload:r}))}))}),[]),Object(x.jsxs)("main",{children:[t&&y({label:F.prefs,prefectures:t}),L({label:F.populations,graph:r})]})},k=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("header",{style:{textAlign:"center"},children:Object(x.jsx)("h1",{children:S})}),Object(x.jsx)(H,{})]})},_=r(11),D=r(4),G={message:"prefs init",result:[]},R=r(5),w=r(25),B=[],U=[],Y=Object(_.a)({prefs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;if(t.type===h){var r=t,a=r.payload;return a?G===e?(console.log("init"),Object(D.a)({},a)):Object(D.a)(Object(D.a)({},e),a):e}return e},populations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var r=t,a=r.payload;return a?[].concat(Object(R.a)(e),[a]):Object(R.a)(e);case j:var n=t,c=n.payload;return c?e.filter((function(e){return e.prefCode!==c})):Object(R.a)(e);default:return e}},graph:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var r=t,a=r.payload;if(a){var n,c,i={prefParam:{prefCode:a.prefCode,prefName:a.prefName},series:[],categories:[]},o=[],p=Object(w.a)(a.data);try{for(p.s();!(c=p.n()).done;){var s=c.value;i.categories.push(String(s.year)),o.push(s.value)}}catch(f){p.e(f)}finally{p.f()}var l={type:"line",name:a.prefName,data:o};return null===(n=i.series)||void 0===n||n.push(l),e.push(i),Object(R.a)(e)}return e;case O:var d=t,u=d.payload;return e.filter((function(e){return e.prefParam.prefCode!=u}));default:return e}}}),z=Object(_.b)(Y),J=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,56)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),c(e),i(e)}))};o.a.render(Object(x.jsx)(p.a,{store:z,children:Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})})}),document.getElementById("root")),J()}},[[54,1,2]]]);
//# sourceMappingURL=main.010250e3.chunk.js.map