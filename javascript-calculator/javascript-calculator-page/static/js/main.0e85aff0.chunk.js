(this["webpackJsonpjavascript-calculator-src"]=this["webpackJsonpjavascript-calculator-src"]||[]).push([[0],{14:function(e,t,a){},9:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(5),i=a(1),c=a(8),l=a(7),r=a(2),d=a.n(r),u=a(6),o=a.n(u),h=(a(14),a(0)),p={clear:"AC",divide:"/",multiply:"X",subtract:"-",seven:"7",eight:"8",nine:"9",add:"+",four:"4",five:"5",six:"6",one:"1",two:"2",three:"3",equals:"=",zero:"0",decimal:"."},k=/(\d+\.\d+|\d+)/g,y=/(\+|-|X|\/)+/g,f=function(e){var t=e.match(k).map((function(e){return Number(e)})),a=e.match(y);return a?t.reduce((function(e,t,n){var s=a[n-1];switch(s.length>1&&("-"===s[s.length-1]?(t=-t,s=s[s.length-2]):s=s[s.length-1]),s){case"/":return e/t;case"X":return e*t;case"+":return e+t;case"-":return e-t;default:return 1/0}})):e},b=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).keyPress=function(e){if("Enter"===e.key)s.handleClick("=");else if("*"===e.key)s.handleClick("X");else if("Delete"===e.key)s.handleClick("AC");else if("Backspace"===e.key)s.handleClick(e.key);else{if(!/(\d|\+|-|\/|=|\.)/.test(e.key))return;s.handleClick(e.key)}},s.handleClick=function(e){if(/(\+|-|X|\/)/.test(e))s.hasDecimal=!1;else if("."===e){if(s.hasDecimal)return;s.hasDecimal=!0}"AC"===e?(s.hasDecimal=!1,s.setState({display:"0"})):"Backspace"===e?s.setState({display:s.state.display.slice(0,-1)}):"="===e?s.setState({display:f(s.state.display)}):"0"!==s.state.display[s.state.display.length-1]||"."===e||1!==s.state.display.length&&!isNaN(s.state.display[s.state.display.length-2])?s.setState({display:s.state.display+e}):s.setState({display:s.state.display.slice(0,-1)+e})},s.exp=[],s.hasDecimal=!1,s.state={display:"0"},s.keyPress=s.keyPress.bind(Object(i.a)(s)),s.handleClick=s.handleClick.bind(Object(i.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown")}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)("div",{id:"display",children:this.state.display}),Object.keys(p).map((function(t){return Object(h.jsx)("button",{className:"button",id:t,onClick:function(t){return e.handleClick(p[t.target.id])},children:p[t]},t)})),Object(h.jsx)("button",{className:"button",id:"Backspace",onClick:function(t){return e.handleClick("Backspace")},children:Object(h.jsx)("i",{className:"fas fa-backspace"})})]})}}]),a}(d.a.Component);o.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.0e85aff0.chunk.js.map