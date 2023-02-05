"use strict";(self.webpackChunkvolca_docs=self.webpackChunkvolca_docs||[]).push([[682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},i="With custom domain",l={unversionedId:"deploying/with-custom-domain",id:"deploying/with-custom-domain",title:"With custom domain",description:"In AWS, domains are managed by a service called Route 53 through an entity called a Hosted Zone. The Hosted Zone lets you configure DNS settings for domains registered both insie and outside AWS.",source:"@site/docs/deploying/with-custom-domain.md",sourceDirName:"deploying",slug:"/deploying/with-custom-domain",permalink:"/docs/deploying/with-custom-domain",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/deploying/intro"},next:{title:"Without custom domain",permalink:"/docs/deploying/without-custom-domain"}},s={},d=[{value:"Add the custom domain to the Volca config",id:"add-the-custom-domain-to-the-volca-config",level:2},{value:"Deploy the routing stack",id:"deploy-the-routing-stack",level:2},{value:"Point your domain to the hosted zones name servers",id:"point-your-domain-to-the-hosted-zones-name-servers",level:2},{value:"Make a full deployment",id:"make-a-full-deployment",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"with-custom-domain"},"With custom domain"),(0,a.kt)("p",null,"In AWS, domains are managed by a service called Route 53 through an entity called a Hosted Zone. The Hosted Zone lets you configure DNS settings for domains registered both insie and outside AWS."),(0,a.kt)("p",null,"Volca will help you deploy a Hosted Zone for a domain that you have configured outside AWS. Once the Hosted Zone is created, you point your domain to the name servers tied to the Hosted Zone."),(0,a.kt)("p",null,"Follow the steps below to deploy your application with you custom domain!"),(0,a.kt)("h2",{id:"add-the-custom-domain-to-the-volca-config"},"Add the custom domain to the Volca config"),(0,a.kt)("p",null,"First, add the custom domain to the environments configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"volca.config.ts"),". Like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="volca.config.ts"',title:'"volca.config.ts"'},'export const config: VolcaConfig = {\n  name: "my-app", // Your app name\n  environments: {\n    staging: {\n      domain: "staging.my-app.com", // Your domain\n      aws: {\n        account: "123456789000", // Your AWS account number\n        region: "eu-central-1", // Your AWS region\n      },\n    },\n  },\n};\n')),(0,a.kt)("h2",{id:"deploy-the-routing-stack"},"Deploy the routing stack"),(0,a.kt)("p",null,"To deploy the routing stack, replace the values in the command and execute it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn infra:deploy -s <environment> --stacks <app-name>-<environment>-routing-stack\n")),(0,a.kt)("h2",{id:"point-your-domain-to-the-hosted-zones-name-servers"},"Point your domain to the hosted zones name servers"),(0,a.kt)("p",null,"After the stack has been deployed, a list of name servers for your Hosted Zone will be displayed. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Outputs:\nvolca-sandbox-routing-stack.ExportsOutputRefHostedZone = Z1037258BDSKJWOZ6R2D\nvolca-sandbox-routing-stack.NameServers = ns-1126.awsdns-12.org, ns-642.awsdns-16.net, ns-220.awsdns-27.com, ns-1943.awsdns-50.co.uk\n")),(0,a.kt)("p",null,"Take the list of name servers and add them to your domain registration as NS records. For example:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Hostname"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Data"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"staging.my-app.com"),(0,a.kt)("td",{parentName:"tr",align:null},"NS"),(0,a.kt)("td",{parentName:"tr",align:null},"ns-1126.awsdns-12.org")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"ns-642.awsdns-16.net")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"ns-220.awsdns-27.com")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"ns-1943.awsdns-50.co.uk")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Some DNS providers will display the list of hostnames differently. You might have to enter ",(0,a.kt)("inlineCode",{parentName:"p"},"staging.my-app.com")," or just ",(0,a.kt)("inlineCode",{parentName:"p"},"staging")," as the hostname. Have a look at the existing entries to understand how it should be entered. For example, if there is only a ",(0,a.kt)("inlineCode",{parentName:"p"},"www")," entry instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"www.my-app.com"),", then you should only enter ",(0,a.kt)("inlineCode",{parentName:"p"},"staging"),".")),(0,a.kt)("p",null,"If you are unsure about how to do this for your domain provider, don't hesitate to reach out to us for support."),(0,a.kt)("h2",{id:"make-a-full-deployment"},"Make a full deployment"),(0,a.kt)("p",null,"Once the DNS change has propagated, you can make a full deployment. Make sure to give the DNS changes some time to propagate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn infra:deploy -s <environment>\n")),(0,a.kt)("p",null,"Done! Make sure to push the updated files to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch of your GitHub repository."))}u.isMDXComponent=!0}}]);