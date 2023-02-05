---
sidebar_position: 3
---

# Without custom domain

If you don't have a domain yet, you can still deploy your application. You will then have to use the automatically generated domains from CloudFront and API Gateway.

1. Make sure no domain is configured in `volca.config.ts`, .e.g.

```ts title="volca.config.ts"
export const config: VolcaConfig = {
  ...
  environments: {
    staging: {
      ...
      domain: "", // Leave this empty
      ...
    },
  },
};

```

2. Then run the following command

```sh
yarn infra:deploy -s <environment>
```

3. Once the deployment is complete, locate the domain name of your API. You can find it by signing in to the AWS console, navigating to the API Gateway service, clicking your API and selecting `Dashboard`. Your domain name will be listed at the top of the page.

4. Update the location of the API for the webapp with the value you just copied:

```ts clients/web/environment.ts
import { config } from '../../volca.config';

export enum Environment {
  LOCAL = 'local',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

type EnvironmentConfig = {
  [env in Environment]: Record<string, string>;
};

export const environments: EnvironmentConfig = {
  local: {
    HOST: '127.0.0.1',
    PORT: '3000',
    REACT_APP_API_URL: 'http://127.0.0.1:4000/',
  },
  staging: {
    REACT_APP_API_URL: "<REPLACE WITH GENERATED DOMAIN>"
  },
  production: {
    REACT_APP_API_URL: "<REPLACE WITH GENERATED DOMAIN>",
  },
};

```
