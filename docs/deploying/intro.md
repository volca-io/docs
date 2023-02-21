---
sidebar_position: 1
slug: /deploy
---

# Introduction

The first step to get your environment up and running is to follow this guide for each AWS account that you want to deploy your project to. Once you have completed this guide, GitHub Actions will automatically deploy any new changes that you push to your repository.

## Prerequisites

To complete this guide, you need:

- An [AWS account](https://portal.aws.amazon.com/billing/signup)
- A domain name where you have access to control DNS settings
- An updated `app.config.ts` file configured with your AWS account number and your domain

## Bootstrap

Each AWS account that you want to deploy needs a few resources so that your project can be deployed from GitHub Actions:

- An OpenID Connect (OIDC) identity provider that allows GitHub to identity itself
- IAM roles that allow GitHub Actions to deploy resources in your AWS account
- A Route53 hosted zone to manage your domain
- An ACM certificate to enable accessing your project over HTTPS

To deploy these resources, run the following command from the root directory of your project.

`yarn bootstrap-infra`

After this account has been run, it will output the name servers that you need to point your domain to, for example:

```
Name servers
ns-1126.awsdns-12.org
ns-642.awsdns-16.net
ns-220.awsdns-27.com
ns-1943.awsdns-50.co.uk
```

Take the list of name servers and add them to your domain registration as NS records. For example:

| Hostname           | Type | Data                    |
| ------------------ | ---- | ----------------------- |
| staging.my-app.com | NS   | ns-1126.awsdns-12.org   |
|                    |      | ns-642.awsdns-16.net    |
|                    |      | ns-220.awsdns-27.com    |
|                    |      | ns-1943.awsdns-50.co.uk |

:::caution

Some DNS providers will display the list of hostnames differently. You might have to enter `staging.my-app.com` or just `staging` as the hostname. Have a look at the existing entries to understand how it should be entered. For example, if there is only a `www` entry instead of `www.my-app.com`, then you should only enter `staging`.

:::

If you are unsure about how to do this for your domain provider, don't hesitate to reach out to us for support.

## Certificate validation

Once your name servers have propagated, the certificate that was created when you ran `yarn bootstrap-infra` will automatically be validated. Note that this might up to a few hours depending on your domain provider.

To check the verification status of your certificate run:

```
yarn check-certificate
```

This will output either `VALIDATED` or `NOT VALIDATED`. Wait until the status is `VALIDATED` to proceeed to the next step.

## Push your code

Now it's time for GitHub actions to take over the rest of the deployment to AWS.

Simply push your code to the `main` branch and head over to your repository in GitHub to see the progress. If any action would fail, check the logs in the Actions tab in your repository and refer to the documentation if something goes wrong.
