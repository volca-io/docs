"use strict";(self.webpackChunkvolca_docs=self.webpackChunkvolca_docs||[]).push([[672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},891:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:4,slug:"/configure-stripe"},a="Configure Stripe",p={unversionedId:"getting-started/configure-stripe",id:"getting-started/configure-stripe",title:"Configure Stripe",description:"Follow the below steps to configure Stripe for you application and start accepting payments.",source:"@site/docs/getting-started/configure-stripe.md",sourceDirName:"getting-started",slug:"/configure-stripe",permalink:"/docs/configure-stripe",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/configure-stripe"},sidebar:"tutorialSidebar",previous:{title:"Configure AWS",permalink:"/docs/configure-aws"},next:{title:"Deploying to AWS",permalink:"/docs/category/deploying-to-aws"}},c={},l=[{value:"Create a Stripe account",id:"create-a-stripe-account",level:3},{value:"Test mode",id:"test-mode",level:3},{value:"Create a product and a price",id:"create-a-product-and-a-price",level:3},{value:"Set the STRIPE_KEY and STRIPE_PRICE_ID locally",id:"set-the-stripe_key-and-stripe_price_id-locally",level:3},{value:"Set the STRIPE_KEY and STRIPE_PRICE_ID in AWS",id:"set-the-stripe_key-and-stripe_price_id-in-aws",level:3}],s={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-stripe"},"Configure Stripe"),(0,o.kt)("p",null,"Follow the below steps to configure Stripe for you application and start accepting payments."),(0,o.kt)("h3",{id:"create-a-stripe-account"},"Create a Stripe account"),(0,o.kt)("p",null,"Head on over to ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/"},"Stripe")," and create an account if you don't already have one."),(0,o.kt)("h3",{id:"test-mode"},"Test mode"),(0,o.kt)("p",null,'We recommend setting everything up in "Test mode" first by switching on the "Test mode" toggle in the Stripe dashboard. Once you are ready for production, follow the below steps while in production mode.'),(0,o.kt)("h3",{id:"create-a-product-and-a-price"},"Create a product and a price"),(0,o.kt)("p",null,"Once you have your Stripe account set up, it's time to create a product. Go to Products -> Add product and add your product details. Since Volca is a SaaS boilerplate, pick the ",(0,o.kt)("em",{parentName:"p"},"recurring")," billing method."),(0,o.kt)("p",null,'When you are done, save the product, scroll down to the "Pricing" heading and copy the ID of the price you just configured.'),(0,o.kt)("h3",{id:"set-the-stripe_key-and-stripe_price_id-locally"},"Set the STRIPE_KEY and STRIPE_PRICE_ID locally"),(0,o.kt)("p",null,"To get subscriptions running locally, open ",(0,o.kt)("inlineCode",{parentName:"p"},"services/api/env/.env.local")," and add:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"STRIPE_PRICE_ID=")," The ID of the price that you previously created\n",(0,o.kt)("inlineCode",{parentName:"p"},"STRIPE_KEY="),' The Stripe secret key found in the "Developers" tab in the Stripe dashboard'),(0,o.kt)("p",null,"Start the app and try subscribing!"),(0,o.kt)("h3",{id:"set-the-stripe_key-and-stripe_price_id-in-aws"},"Set the STRIPE_KEY and STRIPE_PRICE_ID in AWS"),(0,o.kt)("p",null,"This step requires you to have deployed your app to AWS at least once by following the ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/deploying-to-aws"},"deploy infrastructure guide"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the AWS console"),(0,o.kt)("li",{parentName:"ol"},"Open Services -> Secrets Manager"),(0,o.kt)("li",{parentName:"ol"},"Find the existing secret for your app, .e.g ",(0,o.kt)("inlineCode",{parentName:"li"},"volca-<environment>-api-credentials"),' and press "Retrieve secret value"'),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"stripeKey")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"stripePricingId")," into the secret and save")),(0,o.kt)("p",null,"Now you should be able to accept payments in your deployed application!"))}d.isMDXComponent=!0}}]);