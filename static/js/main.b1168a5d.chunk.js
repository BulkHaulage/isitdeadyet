(this.webpackJsonpisitdeadyet=this.webpackJsonpisitdeadyet||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),c=n(8),i=n.n(c),o=(n(14),n(2)),u=n(4),d=n(5),h=n(7),l=n(6),j=(n.p,n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsxs)("p",{children:["Edit ",Object(a.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(a.jsx)(m,{})]})})}}]),n}(s.Component)),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({username:e.target.value}),a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout((function(){!function(e,t){console.log(e);var n=new XMLHttpRequest;n.addEventListener("load",(function(){var e=n.response;e.search("was not found")>0?t.setState({userData:"is not in the hiscores"}):e.search("dead hover")>0?t.setState({userData:"is dead"}):(console.log("RESULT:"+e.search("dead hover")),t.setState({userData:"is alive"}))})),n.open("GET","http://secure.runescape.com/m=hiscore_hardcore_ironman/ranking?table=0&category_type=0&time_filter=0&date=1610390322195&user="+e,!0),n.send()}(a.state.username,Object(o.a)(a))}),500)},a.state={username:"",userData:"Press Enter"},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("label",{htmlFor:"username",children:"HCIM "}),Object(a.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),this.state.userData,Object(a.jsxs)("h3",{children:["Your username is: ",this.state.username]})]})}}]),n}(r.a.Component);var b=j,p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.b1168a5d.chunk.js.map