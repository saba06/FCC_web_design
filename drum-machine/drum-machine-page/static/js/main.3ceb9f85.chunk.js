(this["webpackJsonpdrum-machine-src"]=this["webpackJsonpdrum-machine-src"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(4),c=a(5),n=a(6),s=a(1),d=a(9),i=a(8),o=a(2),l=a.n(o),m=a(7),p=a.n(m),u=(a(15),a(0)),h=[{id:"Heater-1",letter:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{id:"Heater-2",letter:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:"Heater-3",letter:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:"Heater-4",letter:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{id:"Clap",letter:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:"Open-HH",letter:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:"Kick n' Hat",letter:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{id:"Kick",letter:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:"Closed-HH",letter:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],b=[],j=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).keyDown=function(e){var t=document.getElementById(e.key.toUpperCase());t&&(t.play(),t.currenTime=0)},n.handleDisplay=function(e){n.setState({display:e})},n.handleClick=function(e){var t=e.target.firstChild;t.play(),t.currenTime=0,n.handleDisplay(e.target.id),n.state.recording&&b.push(t)},n.record=function(){return n.setState(Object(r.a)(Object(r.a)({},n.state),{},{recording:!n.state.recording}))},n.playRecord=function(){var e=0,t=setInterval((function(){b[e]&&(b[e].play(),b[e].currenTime=0,console.log(b[e])),++e>=b.length&&clearInterval(t)}),500)},n.resetRecord=function(){return b=[]},n.state={display:" ",recording:!1},n.keyDown=n.keyDown.bind(Object(s.a)(n)),n.handleDisplay=n.handleDisplay.bind(Object(s.a)(n)),n.handleClick=n.handleClick.bind(Object(s.a)(n)),n.record=n.record.bind(Object(s.a)(n)),n.playRecord=n.playRecord.bind(Object(s.a)(n)),n.resetRecord=n.resetRecord.bind(Object(s.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown")}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{id:"drum-machine",children:[Object(u.jsx)("div",{id:"display",children:Object(u.jsx)("p",{children:this.state.display})}),h.map((function(t){return Object(u.jsxs)("button",{className:"drum-pad",id:t.id,letter:t.letter,onClick:function(t){return e.handleClick(t)},children:[Object(u.jsx)("audio",{className:"clip",id:t.letter,src:t.src}),t.letter," "]},t.id)})),Object(u.jsx)("button",{id:"Record",className:"drum-pad",onClick:this.record,children:this.state.recording?Object(u.jsx)("i",{className:"fa fa-stop-circle","aria-hidden":"true"}):Object(u.jsx)("i",{className:"fa fa-circle","aria-hidden":"true"})}),Object(u.jsx)("button",{id:"play",className:"drum-pad",onClick:this.playRecord,children:Object(u.jsx)("i",{className:"fa fa-play","aria-hidden":"true"})}),Object(u.jsx)("button",{id:"reset",className:"drum-pad",onClick:this.resetRecord,children:"Reset"})]})}}]),a}(l.a.Component);p.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))},15:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.3ceb9f85.chunk.js.map