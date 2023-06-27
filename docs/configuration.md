---
sidebar_position: 6
slug: /configuration
---

# Configuration

All configuration parameters for a Volca app reside in the `app.config.ts` file at the root of the repository. Here is an example of how such a file could look like:

```ts title="app.config.ts" 
import { Config, Environments, PlanId } from './config/types';
import { DEFAULT_ENVIRONMENT_VARIABLES, getEnvVar } from './config/utils';

const coreConfig: Omit<Config, 'environments'> = {
  name: 'my-app',
  github: {
    organization: 'my-github-organization',
    repository: 'my-github-repo',
  },
  domain: 'example.com',
  fromEmail: 'admin@example.com',
  aws: {
    account: '000000000000',
    region: 'us-east-1',
  },
};

const environments: Environments = {
  local: {
    authentication: {
      // Add identity providers and login domain section to use authentication with AWS cognito locally
      // This requires that you have deployed your infrastructure stacks.
      // identityProviders: {
      //   google: {},
      //   facebook: {},
      //   apple: {},
      // },
      // loginDomain: 'login.staging.my-app.io',

      // Specifying a mock user in the config will bypass AWS Cognito and let you run the app locally
      // To use proper authentication, you can deploy your infrastructure to aws and specify a login domain
      // instead of a mock user.
      mockUser: {
        sub: 'c8a03b26-970d-463d-a256-feb0dbb51574',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@volca.io',
      },
    },
    plans: [
      {
        id: PlanId.BASIC,
        stripePriceId: 'price-id',
      },
      {
        id: PlanId.PLUS,
        stripePriceId: 'price-id',
      },
      {
        id: PlanId.PREMIUM,
        stripePriceId: 'price-id',
      },
    ],
    environmentVariables: {
      ...DEFAULT_ENVIRONMENT_VARIABLES,
      APP_DOMAIN: getEnvVar('APP_DOMAIN', 'http://localhost:3000'),
      DB_PASSWORD: getEnvVar('PASSWORD', 'postgres'),
      DB_USERNAME: getEnvVar('DB_USERNAME', 'postgres'),
      ENVIRONMENT: 'local',
      FROM_EMAIL: getEnvVar('FROM_EMAIL', 'noreply@example.com'),
      LOG_LEVEL: getEnvVar('LOG_LEVEL', 'debug'),
      SIGNING_KEY: getEnvVar('SIGNING_KEY', 'signing-key'),
      STRIPE_KEY: getEnvVar('STRIPE_KEY', 'stripe-key'),
      STRIPE_WEBHOOK_SECRET: getEnvVar('STRIPE_WEBHOOK_SECRET', 'stripe-webhook-secret'),
      TEST_CARD_ENABLED: getEnvVar('TEST_CARD_ENABLED', '1'),

      // Set this values when using cognito as authentication
      // AWS_COGNITO_USERPOOL_ID: 'userpool-id',
      // AWS_COGNITO_APP_CLIENT_ID: 'app-client-id',
    },
  },
  staging: {
    authentication: {
      identityProviders: {
        google: {
          clientId: 'google-app-client-id',
          // Replace this value with the path after you have uploaded the secret to SSM
          clientSecretSsmPath: '/app/environment/AWS_COGNITO_GOOGLE_CLIENT_SECRET',
        },
        facebook: {
          clientId: 'facebook-app-client-id',
          // Replace this value with the path after you have uploaded the secret to SSM
          clientSecretSsmPath: '/app/environment/AWS_COGNITO_FACEBOOK_CLIENT_SECRET',
        },
        apple: {
          clientId: 'apple-app-client-id',
          teamId: 'apple-team-id',
          keyId: 'apple-key-id',
          // Replace this value with the path after you have uploaded the secret to SSM
          privateKeySsmPath: '/app/environment/AWS_COGNITO_APPLE_PRIVATE_KEY',
        },
      },
      allowLocalhost: true,
    },
    deploymentConfig: {
      subdomain: 'staging',
      publicDatabase: true,
    },
    plans: [
      {
        id: PlanId.BASIC,
        stripePriceId: 'stripe-price-id',
      },
    ],
    environmentVariables: {
      ...DEFAULT_ENVIRONMENT_VARIABLES,
      APP_DOMAIN: '${ssm:/my-app/staging/APP_DOMAIN}',
      DB_HOST: '${ssm:/my-app/staging/DB_HOST}',
      DB_PASSWORD: '${ssm:/my-app/staging/DB_PASSWORD}',
      DB_USERNAME: 'app',
      ENVIRONMENT: 'staging',
      FROM_EMAIL: coreConfig.fromEmail,
      LOG_LEVEL: 'info',
      REGION: coreConfig.aws.region,
      SIGNING_KEY: '${ssm:/my-app/staging/SIGNING_KEY}',
      STRIPE_KEY: '${ssm:/my-app/staging/STRIPE_KEY}',
      STRIPE_WEBHOOK_SECRET: '${ssm:/my-app/staging/STRIPE_WEBHOOK_SECRET}',
      TEST_CARD_ENABLED: '1',
      AWS_COGNITO_USERPOOL_ID: '${ssm:/my-app/staging/AWS_COGNITO_USERPOOL_ID',
      AWS_COGNITO_APP_CLIENT_ID: '${ssm:/my-app/staging/AWS_COGNITO_APP_CLIENT_ID',
    },
  },
  production: {
    authentication: {
      identityProviders: {
        google: {
          clientId: 'google-app-client-id',
          // Replace this value with the path after you have uploaded the secret to SSM
          clientSecretSsmPath: '/app/environment/AWS_COGNITO_GOOGLE_CLIENT_SECRET',
        },
        facebook: {
          clientId: 'facebook-app-client-id',
          // Replace this value with the path after you have uploaded the secret to SSM
          clientSecretSsmPath: '/app/environment/AWS_COGNITO_FACEBOOK_CLIENT_SECRET',
        },
        apple: {
          clientId: 'apple-app-client-id',
          teamId: 'apple-team-id',
          keyId: 'apple-key-id',
          // Replace this value with the path after you have uploaded the secret to SSM
          privateKeySsmPath: '/app/environment/AWS_COGNITO_APPLE_PRIVATE_KEY',
        },
      },
    },
    deploymentConfig: {
      publicDatabase: true,
    },
    plans: [
      {
        id: PlanId.BASIC,
        stripePriceId: 'price-id',
      },
    ],
    environmentVariables: {
      ...DEFAULT_ENVIRONMENT_VARIABLES,
      APP_DOMAIN: '${ssm:/my-app/production/APP_DOMAIN}',
      DB_PASSWORD: '${ssm:/volca/production/DB_PASSWORD}',
      DB_USERNAME: 'postgres',
      DB_HOST: '${ssm:/volca/production/DB_HOST}',
      ENVIRONMENT: 'production',
      FROM_EMAIL: coreConfig.fromEmail,
      LOG_LEVEL: 'info',
      REGION: coreConfig.aws.region,
      SIGNING_KEY: '${ssm:/volca/production/SIGNING_KEY}',
      STRIPE_KEY: '${ssm:/volca/production/STRIPE_KEY}',
      STRIPE_WEBHOOK_SECRET: '${ssm:/volca/production/STRIPE_WEBHOOK_SECRET}',
      TEST_CARD_ENABLED: '1',
      AWS_COGNITO_USERPOOL_ID: '${ssm:/volca/production/AWS_COGNITO_USERPOOL_ID}',
      AWS_COGNITO_APP_CLIENT_ID: '${ssm:/volca/production/AWS_COGNITO_APP_CLIENT_ID}',
    },
  },
};

export const config: Config = {
  ...coreConfig,
  environments,
};

```

Here we define

- The name of your project which is used to name AWS resources belonging to your project
- The GitHub repository that you will be using for your project
- The domain you will be using for your project
- The e-mail address you will be using for your project
- AWS account configuration
- Environment variables for each environment
- Authentication information for what identity providers you want to use.

Note that the `yarn configure` script will guide you through the initial creation of the `app.config.ts` file. Read more in the [Deploy to AWS](/docs/deploy-to-aws) guide.

## Environment variables

To add a new environment variable, first add it to the `EnvironmentVariable` type in `config/types.ts`

```ts title="config/types.ts"
export enum EnvironmentVariable {
  ...
  MY_VARIABLE = 'MY_VARIABLE',
  ...
}
```

And then you can proceed with adding it to the `app.config.ts` file. If your variable can be stored as plain text and pushed to GitHub, proceed reading below. If not, proceed to the [secrets](#secrets) section.

The environment variable can be added to `app.config.ts` like this:

```ts title="app.config.ts" 
export const config: Config = {
  ...
  environments: {
    ...
    production: {
      ...
      environmentVariables: {
        MY_VARIABLE: '${ssm:/staging/MY_VARIABLE}',
      },
    },
   ...
  },
};

```

Since the environment variables are typed, you will need to provide values for all your environments to make sure you don't forget one.


### Secrets

The environment variables that you do not want to keep in your source code such as passwords, API keys and other credentials can be stored as encrypted parameters in AWS. To reference a secret in SSM, use the syntax `${ssm:/staging/MY_SECRET}` in `app.config.ts`.

```ts title="app.config.ts" 
export const config: Config = {
  ...
  environments: {
    ...
    production: {
      ...
      environmentVariables: {
        MY_SECRET: '${ssm:/staging/MY_SECRET}',
      },
    },
   ...
  },
};

```

Any secrets you add here must be added to AWS parameter store by:

1. Going to Services -> Systems Manager -> Parameter Store -> Create parameter
2. Enter a name following the pattern `/<environment>/MY_SECRET`
3. Picking `SecureString` as the type
4. Entering the value
5. Clicking Create parameter

The same method can also be used to reference any parameter stored in SSM, such as dynamic values from a CloudFormation stack.

### Local environment variables

The default `app.config.ts` files picks local environment variables from a `.env` file if you have one. If you don't, simply create one at the root of the repository and you can override any environment variable like this:

```
MY_VARIABLE=my-value
```