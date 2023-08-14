"use strict";(self.webpackChunkvolca_docs=self.webpackChunkvolca_docs||[]).push([[4],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:6,slug:"/configuration"},r="Configuration",l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"All configuration parameters for a Volca app reside in the app.config.ts file at the root of the repository. Here is an example of how such a file could look like:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/configuration"},sidebar:"tutorialSidebar",previous:{title:"8. Configure Storage",permalink:"/docs/configure-storage"},next:{title:"CI/CD",permalink:"/docs/cicd"}},p={},s=[{value:"Environment variables",id:"environment-variables",level:2},{value:"Secrets",id:"secrets",level:3},{value:"Local environment variables",id:"local-environment-variables",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"All configuration parameters for a Volca app reside in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.ts")," file at the root of the repository. Here is an example of how such a file could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.config.ts"',title:'"app.config.ts"'},"import { Config, Environments, PlanId } from './config/types';\nimport { DEFAULT_ENVIRONMENT_VARIABLES, getEnvVar } from './config/utils';\n\nconst coreConfig: Omit<Config, 'environments'> = {\n  name: 'my-app',\n  github: {\n    organization: 'my-github-organization',\n    repository: 'my-github-repo',\n  },\n  domain: 'example.com',\n  fromEmail: 'admin@example.com',\n  aws: {\n    account: '000000000000',\n    region: 'us-east-1',\n  },\n};\n\nconst environments: Environments = {\n  local: {\n    authentication: {\n      // Add identity providers and login domain section to use authentication with AWS cognito locally\n      // This requires that you have deployed your infrastructure stacks.\n      // identityProviders: {\n      //   google: {},\n      //   facebook: {},\n      //   apple: {},\n      // },\n      // loginDomain: 'login.staging.my-app.io',\n\n      // Specifying a mock user in the config will bypass AWS Cognito and let you run the app locally\n      // To use proper authentication, you can deploy your infrastructure to aws and specify a login domain\n      // instead of a mock user.\n      mockUser: {\n        sub: 'c8a03b26-970d-463d-a256-feb0dbb51574',\n        firstName: 'John',\n        lastName: 'Doe',\n        email: 'john.doe@volca.io',\n      },\n    },\n    plans: [\n      {\n        id: PlanId.BASIC,\n        stripePriceId: 'price-id',\n      },\n      {\n        id: PlanId.PLUS,\n        stripePriceId: 'price-id',\n      },\n      {\n        id: PlanId.PREMIUM,\n        stripePriceId: 'price-id',\n      },\n    ],\n    environmentVariables: {\n      ...DEFAULT_ENVIRONMENT_VARIABLES,\n      APP_DOMAIN: getEnvVar('APP_DOMAIN', 'http://localhost:3000'),\n      DB_PASSWORD: getEnvVar('PASSWORD', 'postgres'),\n      DB_USERNAME: getEnvVar('DB_USERNAME', 'postgres'),\n      ENVIRONMENT: 'local',\n      FROM_EMAIL: getEnvVar('FROM_EMAIL', 'noreply@example.com'),\n      LOG_LEVEL: getEnvVar('LOG_LEVEL', 'debug'),\n      SIGNING_KEY: getEnvVar('SIGNING_KEY', 'signing-key'),\n      STRIPE_KEY: getEnvVar('STRIPE_KEY', 'stripe-key'),\n      STRIPE_WEBHOOK_SECRET: getEnvVar('STRIPE_WEBHOOK_SECRET', 'stripe-webhook-secret'),\n      TEST_CARD_ENABLED: getEnvVar('TEST_CARD_ENABLED', '1'),\n\n      // Set this values when using cognito as authentication\n      // AWS_COGNITO_USERPOOL_ID: 'userpool-id',\n      // AWS_COGNITO_APP_CLIENT_ID: 'app-client-id',\n    },\n  },\n  staging: {\n    authentication: {\n      identityProviders: {\n        google: {\n          clientId: 'google-app-client-id',\n          // Replace this value with the path after you have uploaded the secret to SSM\n          clientSecretSsmPath: '/app/environment/AWS_COGNITO_GOOGLE_CLIENT_SECRET',\n        },\n        facebook: {\n          clientId: 'facebook-app-client-id',\n          // Replace this value with the path after you have uploaded the secret to SSM\n          clientSecretSsmPath: '/app/environment/AWS_COGNITO_FACEBOOK_CLIENT_SECRET',\n        },\n        apple: {\n          clientId: 'apple-app-client-id',\n          teamId: 'apple-team-id',\n          keyId: 'apple-key-id',\n          // Replace this value with the path after you have uploaded the secret to SSM\n          privateKeySsmPath: '/app/environment/AWS_COGNITO_APPLE_PRIVATE_KEY',\n        },\n      },\n      allowLocalhost: true,\n    },\n    deploymentConfig: {\n      subdomain: 'staging',\n      publicDatabase: true,\n    },\n    plans: [\n      {\n        id: PlanId.BASIC,\n        stripePriceId: 'stripe-price-id',\n      },\n    ],\n    environmentVariables: {\n      ...DEFAULT_ENVIRONMENT_VARIABLES,\n      APP_DOMAIN: '${ssm:/my-app/staging/APP_DOMAIN}',\n      DB_HOST: '${ssm:/my-app/staging/DB_HOST}',\n      DB_PASSWORD: '${ssm:/my-app/staging/DB_PASSWORD}',\n      DB_USERNAME: 'app',\n      ENVIRONMENT: 'staging',\n      FROM_EMAIL: coreConfig.fromEmail,\n      LOG_LEVEL: 'info',\n      REGION: coreConfig.aws.region,\n      SIGNING_KEY: '${ssm:/my-app/staging/SIGNING_KEY}',\n      STRIPE_KEY: '${ssm:/my-app/staging/STRIPE_KEY}',\n      STRIPE_WEBHOOK_SECRET: '${ssm:/my-app/staging/STRIPE_WEBHOOK_SECRET}',\n      TEST_CARD_ENABLED: '1',\n      AWS_COGNITO_USERPOOL_ID: '${ssm:/my-app/staging/AWS_COGNITO_USERPOOL_ID',\n      AWS_COGNITO_APP_CLIENT_ID: '${ssm:/my-app/staging/AWS_COGNITO_APP_CLIENT_ID',\n    },\n  },\n  production: {\n    authentication: {\n      identityProviders: {\n        google: {\n          clientId: 'google-app-client-id',\n          // Replace this value with the path after you have uploaded the secret to SSM\n          clientSecretSsmPath: '/app/environment/AWS_COGNITO_GOOGLE_CLIENT_SECRET',\n        },\n        facebook: {\n          clientId: 'facebook-app-client-id',\n          // Replace this value with the path after you have uploaded the secret to SSM\n          clientSecretSsmPath: '/app/environment/AWS_COGNITO_FACEBOOK_CLIENT_SECRET',\n        },\n        apple: {\n          clientId: 'apple-app-client-id',\n          teamId: 'apple-team-id',\n          keyId: 'apple-key-id',\n          // Replace this value with the path after you have uploaded the secret to SSM\n          privateKeySsmPath: '/app/environment/AWS_COGNITO_APPLE_PRIVATE_KEY',\n        },\n      },\n    },\n    deploymentConfig: {\n      publicDatabase: true,\n    },\n    plans: [\n      {\n        id: PlanId.BASIC,\n        stripePriceId: 'price-id',\n      },\n    ],\n    environmentVariables: {\n      ...DEFAULT_ENVIRONMENT_VARIABLES,\n      APP_DOMAIN: '${ssm:/my-app/production/APP_DOMAIN}',\n      DB_PASSWORD: '${ssm:/volca/production/DB_PASSWORD}',\n      DB_USERNAME: 'postgres',\n      DB_HOST: '${ssm:/volca/production/DB_HOST}',\n      ENVIRONMENT: 'production',\n      FROM_EMAIL: coreConfig.fromEmail,\n      LOG_LEVEL: 'info',\n      REGION: coreConfig.aws.region,\n      SIGNING_KEY: '${ssm:/volca/production/SIGNING_KEY}',\n      STRIPE_KEY: '${ssm:/volca/production/STRIPE_KEY}',\n      STRIPE_WEBHOOK_SECRET: '${ssm:/volca/production/STRIPE_WEBHOOK_SECRET}',\n      TEST_CARD_ENABLED: '1',\n      AWS_COGNITO_USERPOOL_ID: '${ssm:/volca/production/AWS_COGNITO_USERPOOL_ID}',\n      AWS_COGNITO_APP_CLIENT_ID: '${ssm:/volca/production/AWS_COGNITO_APP_CLIENT_ID}',\n    },\n  },\n};\n\nexport const config: Config = {\n  ...coreConfig,\n  environments,\n};\n\n")),(0,o.kt)("p",null,"Here we define"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of your project which is used to name AWS resources belonging to your project"),(0,o.kt)("li",{parentName:"ul"},"The GitHub repository that you will be using for your project"),(0,o.kt)("li",{parentName:"ul"},"The domain you will be using for your project"),(0,o.kt)("li",{parentName:"ul"},"The e-mail address you will be using for your project"),(0,o.kt)("li",{parentName:"ul"},"AWS account configuration"),(0,o.kt)("li",{parentName:"ul"},"Environment variables for each environment"),(0,o.kt)("li",{parentName:"ul"},"Authentication information for what identity providers you want to use.")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn configure")," script will guide you through the initial creation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.ts")," file. Read more in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/deploy-to-aws"},"Deploy to AWS")," guide."),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"To add a new environment variable, first add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"EnvironmentVariable")," type in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/types.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="config/types.ts"',title:'"config/types.ts"'},"export enum EnvironmentVariable {\n  ...\n  MY_VARIABLE = 'MY_VARIABLE',\n  ...\n}\n")),(0,o.kt)("p",null,"And then you can proceed with adding it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.ts")," file. If your variable can be stored as plain text and pushed to GitHub, proceed reading below. If not, proceed to the ",(0,o.kt)("a",{parentName:"p",href:"#secrets"},"secrets")," section."),(0,o.kt)("p",null,"The environment variable can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.ts")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.config.ts"',title:'"app.config.ts"'},"export const config: Config = {\n  ...\n  environments: {\n    ...\n    production: {\n      ...\n      environmentVariables: {\n        MY_VARIABLE: '${ssm:/staging/MY_VARIABLE}',\n      },\n    },\n   ...\n  },\n};\n\n")),(0,o.kt)("p",null,"Since the environment variables are typed, you will need to provide values for all your environments to make sure you don't forget one."),(0,o.kt)("h3",{id:"secrets"},"Secrets"),(0,o.kt)("p",null,"The environment variables that you do not want to keep in your source code such as passwords, API keys and other credentials can be stored as encrypted parameters in AWS. To reference a secret in SSM, use the syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"${ssm:/staging/MY_SECRET}")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.config.ts"',title:'"app.config.ts"'},"export const config: Config = {\n  ...\n  environments: {\n    ...\n    production: {\n      ...\n      environmentVariables: {\n        MY_SECRET: '${ssm:/staging/MY_SECRET}',\n      },\n    },\n   ...\n  },\n};\n\n")),(0,o.kt)("p",null,"Any secrets you add here must be added to AWS parameter store by:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Going to Services -> Systems Manager -> Parameter Store -> Create parameter"),(0,o.kt)("li",{parentName:"ol"},"Enter a name following the pattern ",(0,o.kt)("inlineCode",{parentName:"li"},"/<environment>/MY_SECRET")),(0,o.kt)("li",{parentName:"ol"},"Picking ",(0,o.kt)("inlineCode",{parentName:"li"},"SecureString")," as the type"),(0,o.kt)("li",{parentName:"ol"},"Entering the value"),(0,o.kt)("li",{parentName:"ol"},"Clicking Create parameter")),(0,o.kt)("p",null,"The same method can also be used to reference any parameter stored in SSM, such as dynamic values from a CloudFormation stack."),(0,o.kt)("h3",{id:"local-environment-variables"},"Local environment variables"),(0,o.kt)("p",null,"The default ",(0,o.kt)("inlineCode",{parentName:"p"},"app.config.ts")," files picks local environment variables from a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file if you have one. If you don't, simply create one at the root of the repository and you can override any environment variable like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MY_VARIABLE=my-value\n")))}u.isMDXComponent=!0}}]);