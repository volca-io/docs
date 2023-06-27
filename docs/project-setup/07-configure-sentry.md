---
slug: /configure-sentry
---

# 7. Configure Sentry

Volca comes packaged with Sentry to provide issue tracking. Any uncaught errors in the API or in the Webapp will be sent to your Sentry project so you can track errors in your live environments.

## Create a Sentry account

Head on over to [Sentry](https://sentry.io/) and create an account if you don't already have one.

## Create projects

First you need to create a new organisation, or you can use an existing one. Once you have created your organisation you can navigate over to `Projects` and select to create a new project. You will need to create two projects, one for the webapp and one for the API.

### Create a webapp project

For the webapp you can select `React` as your platform and name it something like `<your-app>-webapp`. On the getting started page, take note of the `dsn` value. It should look something like `https://<id>.ingest.sentry.io/<id>"`.

### Create a api project

For the webapp you can select `node.js` as your platform and name it something like `<your-app>-api`. It should look something like `https://<id>.ingest.sentry.io/<id>"`.

## Update app.config.ts

When you have your DSN values you can update the sentry block in your environment config by uncommenting the block in your `app.config.ts` file and filling in the DSN values.

```ts
    sentry: {
      webappDsn: 'https://<id>.ingest.sentry.io/<id>',
      apiDsn: 'https://<id>.ingest.sentry.io/<id>',
    },
```


## Done

You are now done! You can test to throw an error somewhere in your api or webapp and see them show up in Sentry.