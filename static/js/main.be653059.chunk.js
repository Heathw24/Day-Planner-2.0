(this.webpackJsonpdayplanner=this.webpackJsonpdayplanner||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(7),c=n.n(o),r=(n(13),n(14),n(2)),s=n(3),l=n(5),d=n(4),u=n(0),m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=(new Date).toLocaleString();console.log(e);var t=(new Date).toLocaleTimeString();return console.log(t),Object(u.jsxs)("p",{children:[e," "]})}}]),n}(i.a.Component);var p=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{className:"jumbotron",children:[Object(u.jsx)("h1",{className:"display-3",children:"Work Day Scheduler"}),Object(u.jsx)("p",{className:"lead",children:"A simple calendar app for scheduling your work day"}),Object(u.jsx)("div",{id:"currentDay",className:"lead",children:Object(u.jsx)(m,{})})]}),Object(u.jsx)("div",{className:"container",id:"timeBlocks"})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))},h=["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm"],b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={note:"",id:""},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state.id,a=e.state.note;localStorage.setItem(n,a)},e.handleInputChange=function(t){var n=t.target.value,a=t.target.id;e.setState({note:n,id:a})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){for(var e=0;e<8;e++){var t=localStorage.getItem(e);t&&this.props.id===e&&this.setState({note:t,id:e})}console.log("Look Here")}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"input-group note",children:[Object(u.jsx)("span",{className:"input-group-text",children:h[this.props.id]}),Object(u.jsx)("textarea",{className:"form-control",value:this.state.note,id:this.props.id,"aria-label":"With textarea",onChange:this.handleInputChange}),Object(u.jsx)("button",{type:"button",className:"btn btn-color",onClick:this.handleFormSubmit,children:Object(u.jsx)("i",{className:"fa fa-folder"})})]})},this.props.id)}}]),n}(a.Component),O=n(8);c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),c.a.render(Object(u.jsx)(i.a.StrictMode,{children:O.map((function(e){return Object(u.jsx)(b,{id:e.id,note:e.note},e.id)}))}),document.getElementById("timeBlocks")),j()},8:function(e){e.exports=JSON.parse('[{"id":0,"time":9,"note":""},{"id":1,"time":10,"note":""},{"id":2,"time":11,"note":""},{"id":3,"time":12,"note":""},{"id":4,"time":1,"note":""},{"id":5,"time":2,"note":""},{"id":6,"time":3,"note":""},{"id":7,"time":4,"note":""},{"id":8,"time":5,"note":""}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.be653059.chunk.js.map