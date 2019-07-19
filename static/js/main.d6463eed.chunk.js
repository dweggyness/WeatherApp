(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},21:function(e,t,n){e.exports=n(33)},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(14),o=n.n(i),u=n(3),c=n(4),l=n(6),s=n(5),p=n(7),d=n(15),h=n(1),m=n(2);n(13);function y(){var e=Object(h.a)(["\n    font-size: 1.5em;\n    width: 41%;\n"]);return y=function(){return e},e}function f(){var e=Object(h.a)(["\n    margin-left: 3%;\n    width: 42%;\n"]);return f=function(){return e},e}function b(){var e=Object(h.a)(["\n    display: flex;\n    animation: ",' 1.75s ease-out;\n    list-style: none;\n    padding: 0;\n    margin: 5px auto;\n    height: 40px;\n    width: 90%;\n    background-color: rgba(230,230,230, 0.4);\n    border-radius: 7px;\n    align-items: center;\n    font-size: 1.25em;\n    font-family: "Open Sans";\n']);return b=function(){return e},e}function g(){var e=Object(h.a)(["\n    0% { \n        opacity: 0;\n        transform: translateY(200px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0px);\n    }\n"]);return g=function(){return e},e}var v=Object(m.c)(g()),j=m.b.li(b(),v),O=m.b.span(f()),w=m.b.i(y()),E=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(j,null,a.a.createElement(O,null,this.props.day),a.a.createElement(w,{className:this.props.icon}),a.a.createElement("span",null,Math.round(this.props.temperature),"\xb0C"))}}]),t}(a.a.Component);function k(){var e=Object(h.a)(["\n    background-color: rgba(255,255,255, 0);\n    height: 450px;\n    text-align: left;\n    padding: 0;\n"]);return k=function(){return e},e}var x=m.b.ul(k()),C=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderCells",value:function(){if(""===this.props.daily[0].icon)return a.a.createElement("div",null,"Waiting");for(var e=[],t=1;t<8;t++)e.push(a.a.createElement(E,{key:t,day:this.props.days[t],temperature:this.props.daily[t].temperature,icon:this.props.daily[t].icon}));return e}},{key:"render",value:function(){return a.a.createElement(x,null,this.renderCells())}}]),t}(a.a.Component),T=n(18);function _(){var e=Object(h.a)(["\n    color: black;\n    text-decoration: none;\n    transition: 0.3s;\n    border-radius: 7px;\n    align-items: center;\n    &:hover {\n        cursor: pointer;\n        transform: scale(1.1);\n        background: rgba(255,255,255, 0.1);\n    }\n"]);return _=function(){return e},e}function z(){var e=Object(h.a)(["\n    display: flex;\n    width: 100%;\n    margin-bottom: 35px;\n    justify-content: space-around;\n    align-items: center;\n"]);return z=function(){return e},e}var D=m.b.div(z()),M=m.b.a(_()),S=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(D,null,a.a.createElement(M,{href:"https://darksky.net/poweredby/"},"Powered by DarkSky"),a.a.createElement("span",null,a.a.createElement(M,{href:"https://www.google.com"},a.a.createElement(T.a,null)," Github")))}}]),t}(a.a.Component);function G(){var e=Object(h.a)(['\n    display: flex;\n    flex: 0 0 auto;\n    height: 40px;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.75em;\n    font-family: "Lato";\n\n    width: ',";\n    background: ",";\n"]);return G=function(){return e},e}var I=m.b.div(G(),function(e){return e.width+"px"},function(e){switch(e.icon){case"clear-day":return"rgba(148, 189, 255, 0.8)";case"rain":case"snow":return"rgba(115, 115, 115, 0.8)";case"partly-cloudy-day":case"partly-cloudy-night":return"rgba(160, 160, 160, 0.8)";default:return"rgba(230,230,230, 0.8)"}}),W=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"_getWidth",value:function(e){return Math.round(24*e)}},{key:"_getContent",value:function(e){switch(e){case"clear-day":return"Clear";case"rain":return"Rain";case"snow":return"Snow";case"partly-cloudy-day":case"partly-cloudy-night":return"Cloudy";default:return"Mostly Cloudy"}}},{key:"render",value:function(){var e=this._getWidth(this.props.count),t="";return this.props.count>=3&&(t=this._getContent(this.props.icon)),a.a.createElement(I,{width:e,icon:this.props.icon},t)}}]),t}(a.a.Component);function H(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    font-size: 0.6em;\n"]);return H=function(){return e},e}function L(){var e=Object(h.a)(["\n    height: 5px;\n    width: 23px;\n    border-left: 1px solid rgb(45,45,45);\n"]);return L=function(){return e},e}var N=m.b.div(L()),Y=m.b.span(H()),A=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(Y,null,a.a.createElement(N,null),a.a.createElement("span",null,this.props.content),a.a.createElement("span",null,this.props.temperature))}}]),t}(a.a.Component);function J(){var e=Object(h.a)(["\n    display: flex;\n"]);return J=function(){return e},e}function B(){var e=Object(h.a)(["\n    margin: 0 12px;\n    display: flex;\n    flex-wrap: wrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    &:scrolling-wrapper {\n        -webkit-overflow-scrolling: touch;\n      }\n"]);return B=function(){return e},e}var F=m.b.div(B()),P=m.b.div(J()),R=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"renderCells",value:function(){if(""===this.props.hourly[0].icon)return a.a.createElement("div",null);for(var e=[],t=[],n=0,r=0;r<=24;r++){var i=this.props.hourly[r].icon;t.push(i),n++,0!==r&&(i!==t[r-1]&&(e.push(a.a.createElement(W,{key:r,icon:t[r-1],count:n-1})),n=0),24===r&&n>0&&e.push(a.a.createElement(W,{key:r,icon:i,count:n})))}return e}},{key:"renderTemp",value:function(e){if(0===this.props.hourly[0].temperature)return a.a.createElement("div",null);for(var t=[],n=0;n<24;n++){var r=Math.round(this.props.hourly[n].temperature)+"\xb0C",i="";e>24&&(e-=24),i=e>12?e-12+"pm":e+"am",e++,0!==n?n%2===0?t.push(a.a.createElement(A,{key:n,content:i,temperature:r})):t.push(a.a.createElement(A,{key:n,content:"",temperature:""})):t.push(a.a.createElement(A,{key:n,content:"Now",temperature:r}))}return t}},{key:"render",value:function(){var e=new Date(1e3*this.props.date).getHours();return a.a.createElement(F,null,a.a.createElement(P,null,this.renderCells()),a.a.createElement(P,null,this.renderTemp(e)))}}]),t}(a.a.Component);function q(){var e=Object(h.a)(["\n    font-size: 1.5em;\n"]);return q=function(){return e},e}function K(){var e=Object(h.a)(["\n    font-size: 0.5em;\n    margin: 0 5% % 5%;\n"]);return K=function(){return e},e}function Q(){var e=Object(h.a)(["\n    display: flex;\n    text-align: center;\n    margin: 4% 0;\n    flex-direction: column\n    font-size: 3em;\n"]);return Q=function(){return e},e}function U(){var e=Object(h.a)(["\n    background-color: rgba(230,230,230, 0.4);\n    width: 95%;\n    max-width: 600px;\n    margin: 2% auto;\n    text-align: center;\n    border-radius: 35px;\n    display: flex;\n    flex-direction: column;\n"]);return U=function(){return e},e}function V(){var e=Object(h.a)([' \n    html, body {\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    color: rgb(35,35,35);\n    overflow-x: hidden;\n    font-family: "Lato";\n    background: ',";\n    background: ",";\n}\n"]);return V=function(){return e},e}var X=Object(m.a)(V(),function(e){return e.day?"rgb(0,220,255)":"rgb(25,34,93);"},function(e){return e.day?"linear-gradient(0deg, rgba(0,220,255,1) 0%, rgba(0,134,255,1) 100%)":"linear-gradient(0deg, rgba(25,34,93,1) 0%, rgba(0,27,51,1) 100%);"}),Z=m.b.div(U()),$=m.b.div(Q()),ee=m.b.span(K()),te=m.b.span(q()),ne=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"_getDays",value:function(e){for(var t=[],n=0;n<8;n++)7===e&&(e=0),t.push(this.weekdays[e]),e+=1;return t}},{key:"render",value:function(){var e=this._getDays(new Date(1e3*this.props.date).getDay()),t=this.props.sunTime[1]>this.props.date>this.props.sunTime[0];return a.a.createElement(Z,null,a.a.createElement(X,{day:t}),a.a.createElement($,null,a.a.createElement(ee,null," ",e[0]," "),a.a.createElement(te,{className:this.props.daily[0].icon}),Math.round(this.props.daily[0].temperature),"\xb0C",a.a.createElement(ee,{style:{fontSize:"0.4em"}},this.props.summary)),a.a.createElement(R,{hourly:this.props.hourly,date:this.props.date}),a.a.createElement(C,{daily:this.props.daily,days:e}),a.a.createElement(S,null))}}]),t}(a.a.Component),re=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(l.a)(this,Object(s.a)(t).call(this))).state={summary:"",daily:[{temperature:0,icon:""}],hourly:[{temperature:0,icon:""}],date:"0",sunTime:[0,0]},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/48d4a66fa6056feaac3a6a1775d401e4/";t+=this.props.latitude+","+this.props.longitude+"?units=auto",fetch(t).then(function(e){return e.json()}).then(function(t){var n=t.daily.data.map(function(t){return{temperature:(t.temperatureHigh+t.temperatureLow)/2,icon:e._getIcon(t.icon)}}),r=t.hourly.data.map(function(e){return{temperature:e.temperature,icon:e.icon}});n[0].temperature=t.currently.temperature,n[0].icon=e._getIcon(t.currently.icon),e.setState({daily:n,hourly:r,summary:t.hourly.summary,date:t.currently.time,sunTime:[t.daily.data[0].sunriseTime,t.daily.data[0].sunsetTime]})})}},{key:"_getIcon",value:function(e){switch(e){case"clear-day":return"wi wi-day-sunny";case"rain":return"wi wi-rain";case"snow":return"wi wi-snow";case"partly-cloudy-day":return"wi wi-day-sunny-overcast";case"partly-cloudy-night":return"wi wi-night-partly-cloudy";default:return"wi wi-cloud"}}},{key:"render",value:function(){return a.a.createElement(ne,{daily:this.state.daily,hourly:this.state.hourly,summary:this.state.summary,date:this.state.date,sunTime:this.state.sunTime})}}]),t}(a.a.Component),ae=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?a.a.createElement(re,{latitude:this.props.coords.latitude,longitude:this.props.coords.longitude}):a.a.createElement("div",null,"Getting the location data\u2026 "):a.a.createElement("div",null,"Geolocation is not enabled"):a.a.createElement("div",null,"Your browser does not support Geolocation")}}]),t}(a.a.Component),ie=Object(d.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(ae);n(32);o.a.render(a.a.createElement(ie,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d6463eed.chunk.js.map