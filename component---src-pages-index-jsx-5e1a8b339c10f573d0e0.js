webpackJsonp([0xc23565d713b7],{14:function(e,t){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,u,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var i in n)o.call(n,i)&&(s[i]=n[i]);if(a){u=a(n);for(var d=0;d<u.length;d++)l.call(n,u[d])&&(s[u[d]]=n[u[d]])}}return s}},372:function(e,t,r){e.exports=r.p+"static/logo.b0139841.png"},373:function(e,t,r){e.exports=r.p+"static/team.63bb306c.gif"},136:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=r(1),o=n(a),l=r(2),u=n(l),s=r(193),c=n(s),i=function(){function e(e){return o.default.createElement("a",{href:e.href},o.default.createElement("button",{type:"button",className:c.default.Button},e.name))}return e}();i.propTypes={name:u.default.string.isRequired,href:u.default.string.isRequired},t.default=i,e.exports=t.default},193:function(e,t){e.exports={Button:"src-components----Button-module---Button---3_NDl"}},137:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=r(1),s=n(u),c=r(2),i=n(c),d=function(e){function t(){a(this,t);var r=o(this,e.call(this));return r.state={currentWordIndex:0,currentColorIndex:0},r}return l(t,e),t.cycleIndex=function(){function e(e,t){return(e+1)%t.length}return e}(),t.prototype.componentWillMount=function(){function e(){var e=this;setInterval(function(){e.setState({currentWordIndex:t.cycleIndex(e.state.currentWordIndex,e.props.words),currentColorIndex:t.cycleIndex(e.state.currentColorIndex,e.props.colors)})},this.props.delay)}return e}(),t.prototype.render=function(){function e(){return s.default.createElement("span",{style:{color:this.props.colors[this.state.currentColorIndex]}},this.props.words[this.state.currentWordIndex])}return e}(),t}(s.default.Component);d.propTypes={words:i.default.arrayOf(i.default.string).isRequired,colors:i.default.arrayOf(i.default.string).isRequired,delay:i.default.number.isRequired},t.default=d,e.exports=t.default},140:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=r(1),o=n(a),l=r(137),u=n(l),s=r(195),c=n(s),i=r(372),d=n(i),f=r(373),p=n(f),m=r(136),h=n(m),g=function(){function e(e){var t=e.data;return o.default.createElement("div",null,o.default.createElement("header",{className:c.default.hero},o.default.createElement("a",{href:"https://slohacks.com/",className:c.default.logoLink},o.default.createElement("img",{src:d.default,alt:"Logo",className:c.default.logo})),o.default.createElement("h1",{className:c.default.h1},"SLO Hacks"),o.default.createElement("h2",{className:c.default.recruitingText},"We’re ",o.default.createElement("br",null),"recruiting ",o.default.createElement("br",null),o.default.createElement(u.default,{words:t.site.siteMetadata.adjectives.split(", "),colors:["#0F96F5","#05D26E","#FFC819"],delay:1e3})),o.default.createElement("img",{src:p.default,alt:"SLO Hacks Team",className:c.default.animatedTeam})),o.default.createElement("div",{className:c.default.window}),o.default.createElement("section",{className:c.default.content},o.default.createElement("div",{className:c.default.text},o.default.createElement("h2",null,"Who are we?"),o.default.createElement("p",null,"The SLO Hacks team is dedicated to spreading a culture of tech and innovation throughout Cal Poly. Aside from our flagship event, we host multiple hackathons each year. Our team is composed of five groups: Design, Hacker Experience, Marketing, Sponsorship, and Tech."),o.default.createElement("h2",null,"Why should you join?"),o.default.createElement("p",null,"As a hackathon organizer, you’ll gain valuable experience by working on amazing events. Our team members work in a variety of areas, they interact with great sponsors from companies like Viasat, Google, and Intuit, create open source tools to empower our events, plan logistics for events comprising hundreds of people, and much much more."))),o.default.createElement("section",{className:c.default.apply},o.default.createElement("h2",null,"Want to join our team?"),o.default.createElement(h.default,{name:"Apply",href:"https://goo.gl/forms/E6MNzlmCNYI6R5Lo1"})))}return e}();t.query="** extracted graphql fragment **";t.default=g},195:function(e,t){e.exports={hero:"src-pages----index-module---hero---2Osae",logoLink:"src-pages----index-module---logoLink---3BG2U",logo:"src-pages----index-module---logo---3tl-x",h1:"src-pages----index-module---h1---7S1Yx",recruitingText:"src-pages----index-module---recruitingText---1aOmg",adjective:"src-pages----index-module---adjective---1euUU",animatedTeam:"src-pages----index-module---animatedTeam---ir8Fc",window:"src-pages----index-module---window---2Tdek",content:"src-pages----index-module---content---30-nr",text:"src-pages----index-module---text---24Z4b",apply:"src-pages----index-module---apply---1BKMg"}}});
//# sourceMappingURL=component---src-pages-index-jsx-5e1a8b339c10f573d0e0.js.map