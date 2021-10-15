(this.webpackJsonpweather_app_react=this.webpackJsonpweather_app_react||[]).push([[0],{35:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c,r=n(6),a=n.n(r),i=n(37),s=n.n(i),j=(n(35),n(30)),h=n(63),d=n(38),l=n(61),b=Object(l.a)(c||(c=Object(d.a)(["\n  query getCityByName($name: String!) {\n    getCityByName(name: $name) {\n      name\n      country\n      weather {\n        summary {\n          title\n          description\n          icon\n        }\n        temperature {\n          actual\n          feelsLike\n          min\n          max\n        }\n        wind {\n          speed\n          deg\n        }\n        clouds {\n          all\n          visibility\n          humidity\n        }\n        timestamp\n      }\n    }\n  }\n"]))),o=n(3);var m=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(h.a)(b,{variables:{name:n}}),i=Object(j.a)(a,2),s=i[0],d=i[1],l=d.data;return d.error?Object(o.jsx)("h1",{children:"Error Found"}):(l&&console.log(l),Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("h1",{children:"Search for Weather"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("input",{type:"text",placeholder:"Enter City Name here...",onChange:function(e){c(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){return s()},children:" Search "})]}),Object(o.jsx)("div",{className:"weather",children:l&&Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"City Name"}),Object(o.jsx)("th",{children:"Temperature"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Wind Speed"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:l.getCityByName.name}),Object(o.jsx)("td",{children:l.getCityByName.weather.temperature.actual}),Object(o.jsx)("td",{children:l.getCityByName.weather.summary.description}),Object(o.jsx)("td",{children:l.getCityByName.weather.wind.speed})]})})]})})})]}))},u=n(60),O=n(62),p=n(59);var x=function(){var e=new u.a({cache:new O.a,uri:"https://graphql-weather-api.herokuapp.com/"});return Object(o.jsxs)(p.a,{client:e,children:["  ",Object(o.jsx)(m,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),y()}},[[49,1,2]]]);
//# sourceMappingURL=main.fd842b60.chunk.js.map