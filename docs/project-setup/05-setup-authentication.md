---
slug: /configure-stripe
---

# 6. Setup Authentication with AWS Cognito

When you first setup Volca it will run with a mock user and without authentication. This is beneficial to quickly get up and running locally, but when you keep developing your project you need to setup the proper authentication solution.

### Setting up identity providers

Volca currently supports the following login methods:

- Facebook
- Google
- Apple
- Email / Password

By default email/password will always be enabled, but you can select what social login providers you want to use, if any.

To configure your login providers, you can add information about them in your app config file. Here is an example of how this might look for your staging environment. To get the client-ids and secrets you will need to set them up at Facebook, Google and Apple. We recommend you to [follow this guide from AWS](https://docs.aws.amazon.com/cognito/latest/developerguide/external-identity-providers.html).

For staging, we also add the config `allowLocalhost: true` to allow localhost as an allowed domain to sign in from. This is not recommended for your production environment.

```ts
staging: {
    ...,
    authentication: {
      identityProviders: {
        google: {
          clientId: 'client-id',
          clientSecretSsmPath: '/my-app/staging/AWS_COGNITO_GOOGLE_CLIENT_SECRET',
        },
        facebook: {
          clientId: 'client-id',
          clientSecretSsmPath: '/my-app/staging/AWS_COGNITO_FACEBOOK_CLIENT_SECRET',
        },
        apple: {
          clientId: 'client-id',
          teamId: 'team-id',
          keyId: 'key-id',
          privateKeySsmPath: '/my-app/staging/AWS_COGNITO_APPLE_PRIVATE_KEY',
        },
      },
      allowLocalhost: true,
    },
    ...
}
```

Once the config has been added, you can deploy your infrastructure to AWS as described in the previous section.

## Using AWS Cognito for local development

Once your infrastructure has been deployed to staging, we can leverage those resources for our local development. You can do this by adding the following config to the local block in `app.config.ts`.

Here we add empty objects as the value for the identity providers we use to enable them and we also add the login domain we want to use. In the example we specify the login domain of our staging environment as the one we want to use to sign in.

```ts
    authentication: {
      identityProviders: {
        google: {},
        facebook: {},
        apple: {},
      },
      loginDomain: 'login.staging.my-app.com', // Replace my-app with your application name
    },
```
