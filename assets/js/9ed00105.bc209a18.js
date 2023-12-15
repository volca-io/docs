"use strict";(self.webpackChunkvolca_docs=self.webpackChunkvolca_docs||[]).push([[4],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?i.createElement(h,a(a({ref:n},s),{},{components:t})):i.createElement(h,a({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const o={sidebar_position:6,slug:"/configuration"},a="Configuration",c={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"All configuration parameters for a Volca app reside in the app.config.ts file at the root of the repository. Here is an example of how such a file could look like:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/configuration"},sidebar:"tutorialSidebar",previous:{title:"8. Configure Storage",permalink:"/docs/configure-storage"},next:{title:"Environment variables",permalink:"/docs/environment-variables"}},l={},p=[],s={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"All configuration parameters for a Volca app reside in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config.ts")," file at the root of the repository. Here is an example of how such a file could look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.config.ts"',title:'"app.config.ts"'},'import { Config, Environments, PlanId } from "./types/types";\n\nconst coreConfig: Omit<Config, "environments"> = {\n  name: "my-app",\n  github: {\n    organization: "my-github-organization",\n    repository: "my-github-repository",\n  },\n  domain: "my-domain.com",\n  fromEmail: "admin@mail.my-domain.com",\n  aws: {\n    account: "012345678901",\n    region: "us-east-1",\n  },\n};\n\nconst environments: Environments = {\n  local: {\n    authentication: {\n      // Add identity providers and login domain section to use "real" authentication with AWS Cognito locally\n      // This requires that you have deployed your infrastructure stacks.\n      // identityProviders: {\n      //   google: {},\n      //   facebook: {},\n      //   apple: {},\n      // },\n      // loginDomain: `login.staging.${coreConfig.domain}`,\n\n      // Specifying a mock user in the config will bypass AWS Cognito and let you run the app locally.\n      // To use actual authentication, you can deploy your infrastructure to aws and specify a login domain\n      // instead of a mock user.\n      mockUser: {\n        sub: "c8a03b26-970d-463d-a256-feb0dbb51574",\n        firstName: "John",\n        lastName: "Doe",\n        email: `john.doe@${coreConfig.domain}`,\n      },\n    },\n    plans: [\n      {\n        id: PlanId.BASIC,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n      {\n        id: PlanId.PLUS,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n      {\n        id: PlanId.PREMIUM,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n    ],\n    freeTrialDays: 7,\n    testCardEnabled: true,\n  },\n  staging: {\n    authentication: {\n      identityProviders: {\n        google: {\n          clientId: "google-app-client-id",\n          // Create a client with Google and add the secret to AWS SSM. Then reference that secret here to enable Google auth.\n          clientSecretSsmPath: `/${coreConfig.name}/AWS_COGNITO_GOOGLE_CLIENT_SECRET`,\n        },\n        facebook: {\n          clientId: "facebook-app-client-id",\n          // Create a client with Facebook and add the secret to AWS SSM. Then reference that secret here to enable Google auth.\n          clientSecretSsmPath: `/${coreConfig.name}/AWS_COGNITO_FACEBOOK_CLIENT_SECRET`,\n        },\n        apple: {\n          clientId: "apple-app-client-id",\n          teamId: "apple-team-id",\n          keyId: "apple-key-id",\n          // Create a client with Apple and add the secret to AWS SSM. Then reference that secret here to enable Google auth.\n          privateKeySsmPath: `/${coreConfig.name}/AWS_COGNITO_APPLE_PRIVATE_KEY`,\n        },\n      },\n\n      // This will whitelist the localhost domain for you to use real authentication locally\n      allowLocalhost: true,\n    },\n    deploymentConfig: {\n      // Specify on what subdomain to deploy this environment. The app will be available on app.<subdomain>.<your-domain>.\n      subdomain: "staging",\n\n      // A public database will make your databse accessible over the internet.\n      // This will reduce the cost of deployment and can be good for easy debugging, but is not recommended for production use.\n      publicDatabase: true,\n    },\n    plans: [\n      {\n        id: PlanId.BASIC,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n      {\n        id: PlanId.PLUS,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n      {\n        id: PlanId.PREMIUM,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n    ],\n    freeTrialDays: 7,\n    testCardEnabled: true,\n\n    // Optional, get your dsn from senty.io for error tracking\n    // sentry: {\n    //   webappDsn: \'\',\n    //   apiDsn: \'\',\n    // },\n  },\n  production: {\n    authentication: {\n      identityProviders: {\n        google: {\n          clientId: "google-app-client-id",\n          // Create a client with Google and add the secret to AWS SSM. Then reference that secret here to enable Google auth.\n          clientSecretSsmPath: `/${coreConfig.name}/AWS_COGNITO_GOOGLE_CLIENT_SECRET`,\n        },\n        facebook: {\n          clientId: "facebook-app-client-id",\n          // Create a client with Facebook and add the secret to AWS SSM. Then reference that secret here to enable Google auth.\n          clientSecretSsmPath: `/${coreConfig.name}/AWS_COGNITO_FACEBOOK_CLIENT_SECRET`,\n        },\n        apple: {\n          clientId: "apple-app-client-id",\n          teamId: "apple-team-id",\n          keyId: "apple-key-id",\n          // Create a client with Apple and add the secret to AWS SSM. Then reference that secret here to enable Google auth.\n          privateKeySsmPath: `/${coreConfig.name}/AWS_COGNITO_APPLE_PRIVATE_KEY`,\n        },\n      },\n    },\n    deploymentConfig: {\n      publicDatabase: false,\n    },\n    plans: [\n      {\n        id: PlanId.BASIC,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n      {\n        id: PlanId.PLUS,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n      {\n        id: PlanId.PREMIUM,\n        // Create a product in Stripe and add the price id here to enable subscriptions to this plan.\n        stripePriceId: "price-id",\n      },\n    ],\n    freeTrialDays: 7,\n    testCardEnabled: false,\n\n    // Optional, get your dsn from senty.io for error tracking\n    // sentry: {\n    //   webappDsn: \'\',\n    //   apiDsn: \'\',\n    // },\n  },\n};\n\nexport const config: Config = {\n  ...coreConfig,\n  environments,\n};\n')),(0,r.kt)("p",null,"Here we define"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name of your project which is used to name AWS resources belonging to your project"),(0,r.kt)("li",{parentName:"ul"},"The GitHub repository that you will be using for your project"),(0,r.kt)("li",{parentName:"ul"},"The domain you will be using for your project"),(0,r.kt)("li",{parentName:"ul"},"The e-mail address you will be using for your project"),(0,r.kt)("li",{parentName:"ul"},"AWS account configuration"),(0,r.kt)("li",{parentName:"ul"},"Authentication information for what identity providers you want to use.")))}d.isMDXComponent=!0}}]);