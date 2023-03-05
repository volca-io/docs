"use strict";(self.webpackChunkvolca_docs=self.webpackChunkvolca_docs||[]).push([[215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:7,slug:"/cicd"},a="CI/CD",l={unversionedId:"ci-cd",id:"ci-cd",title:"CI/CD",description:'Volca was created with the mindset "automate everything". To achieve a fully automated workflow, we use GitHub Actions for running...',source:"@site/docs/ci-cd.md",sourceDirName:".",slug:"/cicd",permalink:"/docs/cicd",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/cicd"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Migrations",permalink:"/docs/migrations"}},c={},u=[{value:"On Pull Requests",id:"on-pull-requests",level:2},{value:"On merges",id:"on-merges",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cicd"},"CI/CD"),(0,o.kt)("p",null,'Volca was created with the mindset "automate everything". To achieve a fully automated workflow, we use GitHub Actions for running...'),(0,o.kt)("h2",{id:"on-pull-requests"},"On Pull Requests"),(0,o.kt)("p",null,"When a Pull Request is created or updated, the following actions will run:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Running tests"),(0,o.kt)("li",{parentName:"ul"},"Running code quality checks such as linting, typechecks and spelling checks")),(0,o.kt)("h2",{id:"on-merges"},"On merges"),(0,o.kt)("p",null,"On merges to the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch, the following actions will run:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tests"),(0,o.kt)("li",{parentName:"ul"},"Database migrations for staging"),(0,o.kt)("li",{parentName:"ul"},"Deploy to staging"),(0,o.kt)("li",{parentName:"ul"},"Database migrations for production"),(0,o.kt)("li",{parentName:"ul"},"Deploy to production (if deploy to staging succeeds)")))}p.isMDXComponent=!0}}]);