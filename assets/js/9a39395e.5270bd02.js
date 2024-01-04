"use strict";(self.webpackChunkvolca_docs=self.webpackChunkvolca_docs||[]).push([[77],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),h=o,m=s["".concat(p,".").concat(h)]||s[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/configure-stripe"},i="6. Configure Stripe",l={unversionedId:"project-setup/configure-stripe",id:"project-setup/configure-stripe",title:"6. Configure Stripe",description:"Follow the below steps to configure Stripe for you application and start accepting payments.",source:"@site/docs/project-setup/06-configure-stripe.md",sourceDirName:"project-setup",slug:"/configure-stripe",permalink:"/configure-stripe",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"/configure-stripe"},sidebar:"tutorialSidebar",previous:{title:"5. Configure authentication",permalink:"/configure-authentication"},next:{title:"7. Configure Sentry",permalink:"/configure-sentry"}},p={},c=[{value:"Create a Stripe account",id:"create-a-stripe-account",level:2},{value:"Test mode",id:"test-mode",level:2},{value:"Create products and prices",id:"create-products-and-prices",level:2},{value:"Configure plans",id:"configure-plans",level:2},{value:"Set the STRIPE_KEY locally",id:"set-the-stripe_key-locally",level:2},{value:"Set the STRIPE_KEY parameter in AWS",id:"set-the-stripe_key-parameter-in-aws",level:2},{value:"Webhooks",id:"webhooks",level:2},{value:"Free trial",id:"free-trial",level:2},{value:"Test card",id:"test-card",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"6-configure-stripe"},"6. Configure Stripe"),(0,o.kt)("p",null,"Follow the below steps to configure Stripe for you application and start accepting payments."),(0,o.kt)("h2",{id:"create-a-stripe-account"},"Create a Stripe account"),(0,o.kt)("p",null,"Head on over to ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/"},"Stripe")," and create an account if you don't already have one."),(0,o.kt)("h2",{id:"test-mode"},"Test mode"),(0,o.kt)("p",null,'We recommend setting everything up in "Test mode" first by switching on the "Test mode" toggle in the Stripe dashboard. Once you are ready for production, follow the below steps while in production mode.'),(0,o.kt)("h2",{id:"create-products-and-prices"},"Create products and prices"),(0,o.kt)("p",null,"Once you have your Stripe account set up, it's time to create your products. You can configure any number of products you want - for example you might want one product for a cheaper plan and one product for a more expensive premium plan. For each product you want to create, repeat the below steps:"),(0,o.kt)("p",null,"Go to Products -> Add product and add your product details. Since Volca was created for SaaS products, pick the ",(0,o.kt)("em",{parentName:"p"},"recurring")," billing method."),(0,o.kt)("p",null,'When you are done, save the product, scroll down to the "Pricing" heading and copy the ID of the price you just configured.'),(0,o.kt)("h2",{id:"configure-plans"},"Configure plans"),(0,o.kt)("p",null,"To configure your products in Volca, follow the below steps for each product you created and for each environment:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("inlineCode",{parentName:"li"},"PlanId")," for your product in the file ",(0,o.kt)("inlineCode",{parentName:"li"},"config/types.ts"),". By default there are three plans configured - ",(0,o.kt)("inlineCode",{parentName:"li"},"BASIC"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"PLUS")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"PREMIUM"),". Feel free to remove them or rename them as you prefer."),(0,o.kt)("li",{parentName:"ol"},"Add your plans to the ",(0,o.kt)("inlineCode",{parentName:"li"},"plans")," configuration for each environment in ",(0,o.kt)("inlineCode",{parentName:"li"},"app.config.ts"),". A new plan can be added like this: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"plans: [\n   ...\n   {\n      id: PlanId.MY_NEW_PLAN,\n      stripePriceId: 'stripe-price-id', // Your price ID from Stripe\n   }\n   ...\n]\n")),(0,o.kt)("p",null,"Finally, in ",(0,o.kt)("inlineCode",{parentName:"p"},"clients/web/src/pages/onboarding.tsx")," add your plan to the ",(0,o.kt)("inlineCode",{parentName:"p"},"plans")," array like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const plans = {\n   ...\n   MY_NEW_PLAN: {\n      title: 'My New Plan',\n      description: 'A plan that is mine and new.',\n      price: 19,\n      features: ['Feature A', 'Feature B'],\n   }\n   ...\n}\n")),(0,o.kt)("h2",{id:"set-the-stripe_key-locally"},"Set the STRIPE_KEY locally"),(0,o.kt)("p",null,"To get subscriptions running locally, open the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the root folder and add:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"STRIPE_KEY="),' The Stripe secret key found in the "Developers" tab in the Stripe dashboard'),(0,o.kt)("p",null,"And then add your ",(0,o.kt)("inlineCode",{parentName:"p"},"STRIPE_PRICE_ID")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.ts")," file."),(0,o.kt)("p",null,"Now you can start your project locally and try subscribing!"),(0,o.kt)("h2",{id:"set-the-stripe_key-parameter-in-aws"},"Set the STRIPE_KEY parameter in AWS"),(0,o.kt)("p",null,"This step requires you to have deployed your app to AWS at least once by following the ",(0,o.kt)("a",{parentName:"p",href:"/deploy-to-aws"},"deploy infrastructure guide"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the AWS console"),(0,o.kt)("li",{parentName:"ol"},"Open Services -> Systems Manager -> Parameter Store"),(0,o.kt)("li",{parentName:"ol"},"Find the existing parameter called ",(0,o.kt)("inlineCode",{parentName:"li"},"/<name>/<environment>/STRIPE_KEY")),(0,o.kt)("li",{parentName:"ol"},"Update the parameter with your Stripe key and save"),(0,o.kt)("li",{parentName:"ol"},"For the updated parameter to be updated in your app, you need to re-deploy it by triggering the GitHub action ",(0,o.kt)("inlineCode",{parentName:"li"},"deploy-api-service")," either from the GitHub UI or by pushing a commit to the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," branch.")),(0,o.kt)("p",null,"Now you should be able to accept payments in your deployed application!"),(0,o.kt)("h2",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"Whenever a customer makes a purchase through your Stripe checkout flow, the database needs to be updated to add a subscription for the user who made the purchase. This is done using webhooks. You will need to set up a webhook for each environment that your project runs in."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign in to the Stripe dashboard"),(0,o.kt)("li",{parentName:"ol"},"Go to the Developers tab"),(0,o.kt)("li",{parentName:"ol"},"Go to Webhooks"),(0,o.kt)("li",{parentName:"ol"},"Click Add endpoint"),(0,o.kt)("li",{parentName:"ol"},"Enter the following values\nEndpoint URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"<your-api-url>/stripe/webhook"),"\nEvents: ",(0,o.kt)("inlineCode",{parentName:"li"},"customer.subscription.created"),"and ",(0,o.kt)("inlineCode",{parentName:"li"},"customer.subscription.deleted")),(0,o.kt)("li",{parentName:"ol"},"Leave the rest as default and click Add endpoint")),(0,o.kt)("p",null,"Next, we need to add the webhook secret to our configuration."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the webhook you created in the Stripe dashboard"),(0,o.kt)("li",{parentName:"ol"},"Click Signing secret -> Reveal"),(0,o.kt)("li",{parentName:"ol"},"Copy the secret"),(0,o.kt)("li",{parentName:"ol"},"Go into AWS -> Systems Manager -> Parameter Store"),(0,o.kt)("li",{parentName:"ol"},"Find the STRIPE_WEBHOOK_SECRET parameter and update it with the value from Stripe"),(0,o.kt)("li",{parentName:"ol"},"Re-deploy your project")),(0,o.kt)("p",null,"Now you are done! Stripe will alert you if your webhook would fail."),(0,o.kt)("h2",{id:"free-trial"},"Free trial"),(0,o.kt)("p",null,"The free trial length can be configured by setting the ",(0,o.kt)("a",{parentName:"p",href:"/configuration#environment-variables"},"environment variable")," ",(0,o.kt)("inlineCode",{parentName:"p"},"FREE_TRIAL_DAYS")," to the number of days you want to offer a free trial."),(0,o.kt)("h2",{id:"test-card"},"Test card"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"/configuration#environment-variables"},"environment variable")," ",(0,o.kt)("inlineCode",{parentName:"p"},"TEST_CARD_ENABLED")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),", a test card will automatically be created when a checkout session is started. This is useful when you want to test the checkout flow."))}s.isMDXComponent=!0}}]);