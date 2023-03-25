---
sidebar_position: 6
slug: /configuration
---

# Configuration

All configuration parameters for a Volca app reside in the `app.config.ts` file at the root of the repository. Here is an example of how such a file could look like:

```ts title="app.config.ts" 
import { Config, Environments } from './config/types';
import { DEFAULT_ENVIRONMENT_VARIABLES, getEnvVar } from './config/utils';

const coreConfig: Omit<Config, 'environments'> = {
  name: 'my-project',
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
    plans: [],
    environmentVariables: {
      ...DEFAULT_ENVIRONMENT_VARIABLES,
      APP_DOMAIN: getEnvVar('APP_DOMAIN', '127.0.0.1:3000'),
      DB_PASSWORD: getEnvVar('PASSWORD', 'postgres'),
      DB_USERNAME: getEnvVar('USERNAME', 'postgres'),
      ENVIRONMENT: 'local',
      FROM_EMAIL: getEnvVar('FROM_EMAIL', 'noreply@example.com'),
      LOG_LEVEL: getEnvVar('LOG_LEVEL', 'debug'),
      SIGNING_KEY: getEnvVar('SIGNING_KEY', 'signing-key'),
      STRIPE_KEY: getEnvVar('STRIPE_KEY', 'stripe-key'),
      STRIPE_WEBHOOK_SECRET: getEnvVar('STRIPE_WEBHOOK_SECRET', 'stripe-webhook-secret'),
      TEST_CARD_ENABLED: getEnvVar('TEST_CARD_ENABLED', '1'),
    },
  },
  staging: {
    deploymentConfig: {
      subdomain: 'staging',
      publicDatabase: true,
    },
    plans: [],
    environmentVariables: {
      ...DEFAULT_ENVIRONMENT_VARIABLES,
      APP_DOMAIN: '${ssm:/my-project/staging/APP_DOMAIN}',
      DB_HOST: '${ssm:/my-project/staging/DB_HOST}',
      DB_PASSWORD: '${ssm:/my-project/staging/DB_PASSWORD}',
      DB_USERNAME: 'app',
      ENVIRONMENT: 'staging',
      FROM_EMAIL: coreConfig.fromEmail,
      LOG_LEVEL: 'info',
      REGION: coreConfig.aws.region,
      SIGNING_KEY: '${ssm:/my-project/staging/SIGNING_KEY}',
      STRIPE_KEY: '${ssm:/my-project/staging/STRIPE_KEY}',
      STRIPE_WEBHOOK_SECRET: '${ssm:/my-project/staging/STRIPE_WEBHOOK_SECRET}',
      TEST_CARD_ENABLED: '1',
    },
  },
  production: {
    deploymentConfig: {
      publicDatabase: true,
    },
    plans: [],
    environmentVariables: {
      ...DEFAULT_ENVIRONMENT_VARIABLES,
      APP_DOMAIN: '${ssm:/my-project/production/APP_DOMAIN}',
      DB_HOST: '${ssm:/my-project/production/DB_HOST}',
      DB_PASSWORD: '${ssm:/my-project/production/DB_PASSWORD}',
      DB_USERNAME: 'app',
      ENVIRONMENT: 'production',
      FROM_EMAIL: coreConfig.fromEmail,
      LOG_LEVEL: 'info',
      REGION: coreConfig.aws.region,
      SIGNING_KEY: '${ssm:/my-project/production/SIGNING_KEY}',
      STRIPE_WEBHOOK_SECRET: '${ssm:/my-project/production/STRIPE_WEBHOOK_SECRET}',
      TEST_CARD_ENABLED: '1',
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