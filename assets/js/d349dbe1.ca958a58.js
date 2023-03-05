"use strict";(self.webpackChunkvolca_docs=self.webpackChunkvolca_docs||[]).push([[469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,slug:"/project-structure"},i="Project structure",s={unversionedId:"overview/project-structure",id:"overview/project-structure",title:"Project structure",description:"Learn about how a Volca project is structured.",source:"@site/docs/overview/project-structure.md",sourceDirName:"overview",slug:"/project-structure",permalink:"/docs/project-structure",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/project-structure"},sidebar:"tutorialSidebar",previous:{title:"Tech stack",permalink:"/docs/tech-stack"},next:{title:"Project setup",permalink:"/docs/category/project-setup"}},c={},l=[{value:"Call Stack",id:"call-stack",level:2},{value:"Monorepo",id:"monorepo",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project-structure"},"Project structure"),(0,a.kt)("p",null,"Learn about how a Volca project is structured."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"my-volca-project/\n\u251c\u2500 clients/\n\u2502  \u251c\u2500 web/\n\u2502  \u2502  \u251c\u2500 src/\n\u2502  \u2502  \u2502  \u251c\u2500 components/ (contains UI components such as buttons and forms)\n\u2502  \u2502  \u2502  \u251c\u2500 hooks/ (contains hooks used to manipulate state, call APIs etc)\n\u2502  \u2502  \u2502  \u251c\u2500 layouts/ (contains layout components)\n\u2502  \u2502  \u2502  \u251c\u2500 pages/ (contains pages that correspond to a route in the app)\n\u2502  \u2502  \u2502  \u251c\u2500 routing/ (components for routing)\n\u2502  \u2502  \u2502  \u251c\u2500 state/ (state management)\n\u2502  \u2502  \u2502  \u251c\u2500 theme/ (theme and styling configuration)\n\u251c\u2500 services/\n\u2502  \u251c\u2500 api/\n\u2502  \u2502  \u251c\u2500 src/\n\u2502  \u2502  \u2502  \u251c\u2500 actions/ (contains functions that are called from routes)\n\u2502  \u2502  \u2502  \u251c\u2500 email-templates/ (templates for emails sent from the app)\n\u2502  \u2502  \u2502  \u251c\u2500 entities/ (entities used for interacting with the database)\n\u2502  \u2502  \u2502  \u251c\u2500 errors/ (definitions of all errors that can be thrown by the service)\n\u2502  \u2502  \u2502  \u251c\u2500 lambda-handlers/ (defines the Lambda functions that runs the service)\n\u2502  \u2502  \u2502  \u251c\u2500 middlewares/ (middlewares for the API endpoints)\n\u2502  \u2502  \u2502  \u251c\u2500 services/ (classes that manipulate data and hold application logic)\n\u2502  \u2502  \u2502  \u251c\u2500 utils/ (generic utilities)\n")),(0,a.kt)("h2",{id:"call-stack"},"Call Stack"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Call Stack",src:n(4087).Z,title:"Volca Call Stack",width:"1293",height:"205"})),(0,a.kt)("h2",{id:"monorepo"},"Monorepo"),(0,a.kt)("p",null,"Volca is structured as a monorepo. This means the code for both backend and frontend is in the same repository. The reasons for choosing to build Volca as a monorepo are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One repository to pull every time you want to build a new feature"),(0,a.kt)("li",{parentName:"ul"},"A Pull Request can include changes in both the frontend and the backend"),(0,a.kt)("li",{parentName:"ul"},"Configuration files for code formatting, linting etc. can be kept in sync easier"),(0,a.kt)("li",{parentName:"ul"},"Automated jobs can be configured and triggered in a single place")),(0,a.kt)("p",null,"This structure is made possible by using ",(0,a.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/workspaces"},"Yarn Workspaces")),(0,a.kt)("h3",{id:"frontend"},"Frontend"),(0,a.kt)("p",null,"All frontend apps reside in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/clients")," folder. When you download Volca for the first time, there will be a single app - ",(0,a.kt)("inlineCode",{parentName:"p"},"web"),". This is the default customer dashboard that you get with Volca which includes authentication, payments, project management and user settings. If you would like to add a separate application, for example an internal dashboard, you simply create a new React app in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/clients")," folder."),(0,a.kt)("h3",{id:"backend"},"Backend"),(0,a.kt)("p",null,"All backend services reside in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/services")," folder. When you download Volca for the first time, there will be a single service - ",(0,a.kt)("inlineCode",{parentName:"p"},"api"),". This is the default API that powers the customer dashboard. If you want to create a new service, simply create another one in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/services")," folder."))}u.isMDXComponent=!0},4087:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/call-stack-f6858a4f3455a3bf650bbf3bec4e0218.png"}}]);