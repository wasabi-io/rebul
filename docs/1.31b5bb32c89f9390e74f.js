webpackJsonp([1],{31:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(402),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getNavigations=function(){return[{text:"Container",path:"container",module:"Container.tsx"}]},e.prototype.getModuleName=function(){return"layout"},e}(r.default);e.default=u},402:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),u=n(27),a=n(77),i=n(76),c=n(10),p=n(75),l=n(54),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){for(var t=this,e=this.props.match,n=l.default.getPaths(),o=[],c=[],s=0,f=this.getNavigations();s<f.length;s++){var h=f[s];!function(i){var l=e.url+"/"+i.path,s=i.module;o.push(r.createElement(a.Tab,{key:i.path,isActive:n[1]===i.path},r.createElement(u.Link,{style:{borderBottomWidth:3},to:l},i.text)));var f=p.default(function(){return t.getModule(s).then(function(t){return t.default})});c.push(r.createElement(u.Route,{key:l,path:l,component:f}))}(h)}return r.createElement(i.Container,null,r.createElement(i.Container,null,r.createElement(a.Tabs,null,o)),c)},e.prototype.getModule=function(t){return n(78)("./"+this.getModuleName()+"/"+t)},e}(c.default);e.default=s}});