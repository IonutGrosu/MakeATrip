(function(e){function t(t){for(var n,c,o=t[0],s=t[1],p=t[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,p||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==i[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},i={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/MakeATrip/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2448:function(e,t,r){"use strict";r("f90e")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),i=function(e){return Object(n["j"])("data-v-2ff59856"),e=e(),Object(n["i"])(),e},a={style:{backgroundcolor:"red"}},c={class:"grid"},o={class:"col-10 col-offset-1",style:{"margin-top":"2rem"}},s=i((function(){return Object(n["e"])("h1",null,"Horsens → Aarhus",-1)})),p={class:"col-10 col-offset-1",style:{"margin-top":"2rem"}},u=i((function(){return Object(n["e"])("h1",null,"Aarhus → Horsens",-1)}));function l(e,t,r,i,l,d){var f=Object(n["m"])("Trip");return Object(n["h"])(),Object(n["d"])("div",a,[Object(n["e"])("div",c,[Object(n["e"])("div",o,[s,Object(n["f"])(f,{class:"tripCard",time:l.morningTrips[0].time,track:l.morningTrips[0].track},null,8,["time","track"]),Object(n["f"])(f,{class:"tripCard",time:l.morningTrips[1].time,track:l.morningTrips[1].track},null,8,["time","track"])]),Object(n["e"])("div",p,[u,Object(n["f"])(f,{class:"tripCard",time:l.eveningTrips[0].time,track:l.eveningTrips[0].track},null,8,["time","track"]),Object(n["f"])(f,{class:"tripCard",time:l.eveningTrips[1].time,track:l.eveningTrips[1].track},null,8,["time","track"])])])])}var d=r("bc3a"),f=r.n(d);function g(e,t,r,i,a,c){var o=Object(n["m"])("Card");return Object(n["h"])(),Object(n["b"])(o,null,{content:Object(n["o"])((function(){return[Object(n["e"])("p",null,"Time: "+Object(n["n"])(r.time),1),Object(n["e"])("p",null,"Track: "+Object(n["n"])(r.track),1)]})),_:1})}var m=r("9899"),b={name:"Trip",components:{Card:m["a"]},props:{time:String,track:String}},T=r("6b0d"),O=r.n(T);const v=O()(b,[["render",g]]);var j=v,k={name:"App",data:function(){return{morningTrips:[{time:"-",track:"-"},{time:"-",track:"-"}],eveningTrips:[{time:"-",track:"-"},{time:"-",track:"-"}]}},components:{Trip:j},created:function(){var e=this;document.body.style.backgroundColor="#fff393",console.log("created"),f.a.get("https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originId=008600066&destId=008600053&format=json").then((function(t){console.log(t.data),e.morningTrips[0].time=t.data.TripList.Trip[0].Leg.Origin.time,e.morningTrips[0].track=t.data.TripList.Trip[0].Leg.Origin.rtTrack,e.morningTrips[1].time=t.data.TripList.Trip[1].Leg.Origin.time,e.morningTrips[1].track=t.data.TripList.Trip[1].Leg.Origin.rtTrack})),f.a.get("https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originId=008600053&destId=008600066&format=json").then((function(t){console.log(t.data),e.eveningTrips[0].time=t.data.TripList.Trip[0].Leg.Origin.time,e.eveningTrips[0].track=t.data.TripList.Trip[0].Leg.Origin.rtTrack,e.eveningTrips[1].time=t.data.TripList.Trip[1].Leg.Origin.time,e.eveningTrips[1].track=t.data.TripList.Trip[1].Leg.Origin.rtTrack}))}};r("2448");const h=O()(k,[["render",l],["__scopeId","data-v-2ff59856"]]);var y=h,L=r("9319"),w=(r("098b"),r("e1ae"),r("4121"),r("bddf"),r("130e")),x=Object(n["a"])(y);x.use(L["a"]),x.use(w["a"],f.a),x.mount("#app")},f90e:function(e,t,r){}});
//# sourceMappingURL=app.1331d73c.js.map