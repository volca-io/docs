"use strict";(self.webpackChunkvolca_docs=self.webpackChunkvolca_docs||[]).push([[62],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),y=o,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/configure-sentry"},i="7. Configure Sentry",p={unversionedId:"project-setup/configure-sentry",id:"project-setup/configure-sentry",title:"7. Configure Sentry",description:"Volca comes packaged with Sentry to provide issue tracking. Any uncaught errors in the API or in the Webapp will be sent to your Sentry project so you can track errors in your live environments.",source:"@site/docs/project-setup/07-configure-sentry.md",sourceDirName:"project-setup",slug:"/configure-sentry",permalink:"/configure-sentry",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{slug:"/configure-sentry"},sidebar:"tutorialSidebar",previous:{title:"6. Configure Stripe",permalink:"/configure-stripe"},next:{title:"8. Configure Storage",permalink:"/configure-storage"}},c={},l=[{value:"Create a Sentry account",id:"create-a-sentry-account",level:2},{value:"Create projects",id:"create-projects",level:2},{value:"Create a webapp project",id:"create-a-webapp-project",level:3},{value:"Create an API project",id:"create-an-api-project",level:3},{value:"Update app.config.ts",id:"update-appconfigts",level:2},{value:"Done",id:"done",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"7-configure-sentry"},"7. Configure Sentry"),(0,o.kt)("p",null,"Volca comes packaged with Sentry to provide issue tracking. Any uncaught errors in the API or in the Webapp will be sent to your Sentry project so you can track errors in your live environments."),(0,o.kt)("h2",{id:"create-a-sentry-account"},"Create a Sentry account"),(0,o.kt)("p",null,"Head on over to ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.io/"},"Sentry")," and create an account if you don't already have one."),(0,o.kt)("h2",{id:"create-projects"},"Create projects"),(0,o.kt)("p",null,"First you need to create a new organisation, or you can use an existing one. Once you have created your organisation you can navigate over to ",(0,o.kt)("inlineCode",{parentName:"p"},"Projects")," and select to create a new project. You will need to create two projects, one for the webapp and one for the API."),(0,o.kt)("h3",{id:"create-a-webapp-project"},"Create a webapp project"),(0,o.kt)("p",null,"For the webapp you can select ",(0,o.kt)("inlineCode",{parentName:"p"},"React")," as your platform and name it something like ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-app>-webapp"),". On the getting started page, take note of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dsn")," value. It should look something like ",(0,o.kt)("inlineCode",{parentName:"p"},'https://<id>.ingest.sentry.io/<id>"'),"."),(0,o.kt)("h3",{id:"create-an-api-project"},"Create an API project"),(0,o.kt)("p",null,"For the webapp you can select ",(0,o.kt)("inlineCode",{parentName:"p"},"node.js")," as your platform and name it something like ",(0,o.kt)("inlineCode",{parentName:"p"},"<your-app>-api"),". It should look something like ",(0,o.kt)("inlineCode",{parentName:"p"},'https://<id>.ingest.sentry.io/<id>"'),"."),(0,o.kt)("h2",{id:"update-appconfigts"},"Update app.config.ts"),(0,o.kt)("p",null,"When you have your DSN values you can update the ",(0,o.kt)("inlineCode",{parentName:"p"},"sentry")," block in your environment config by uncommenting the block in your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.ts")," file and filling in the DSN values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"    sentry: {\n      webappDsn: 'https://<id>.ingest.sentry.io/<id>',\n      apiDsn: 'https://<id>.ingest.sentry.io/<id>',\n    },\n")),(0,o.kt)("h2",{id:"done"},"Done"),(0,o.kt)("p",null,"You are now done! You can test to throw an error somewhere in your api or webapp and see them show up in Sentry."))}u.isMDXComponent=!0}}]);