---
slug: /deploy-to-aws
---

# 4. Deploy to AWS

Learn how to deploy your project to AWS.

## Prerequisites

To complete this guide, you need:

- An [AWS account](/configure-aws) with configured credentials in your CLI
- A domain name where you have access to control DNS settings
- An e-mail address belonging to your domain name which will be used as the sender for any e-mails sent by your project

## Configure

The file `app.config.ts` in the root directory holds the configuration for your AWS environment. Configure your account details under the `aws` section in `coreConfig` in this file before you proceed.

## Setup infrastructure

To enable GitHub Actions to deploy any new changes pushed to your repository, a number of resources need to exist in your account. These resources are:

- An OpenID Connect (OIDC) identity provider that allows GitHub to identity itself
- IAM roles that allow GitHub Actions to deploy resources in your AWS account
- A Route53 hosted zone to manage your domain
- A verified Amazon SES e-mail

To create these resources in your account, run the following command:

`yarn setup:aws`

:::note
If you configured an AWS profile for your account, remember to add it when running the command: `AWS_PROFILE=<your-profile> yarn setup:aws`
:::

Once the script has finished, it will output a list name servers that you need to point your domain to, for example:

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

You will also receive an e-mail from AWS that prompts you to verify your e-mail address. Click the link to get your address verified and ready to send e-mails.

## Validating e-mail identity

Volca will setup a verified domain in AWS SES to allow you to send emails from your service. The domain is validated through DKIM (Domain Keys Identified Mail). For this to function, you will need to point a subdomain of your application to the name servers described in the previous section. This will automatically verify your domain.

| Hostname        | Type | Data                    |
| --------------- | ---- | ----------------------- |
| mail.my-app.com | NS   | ns-1126.awsdns-12.org   |
|                 |      | ns-642.awsdns-16.net    |
|                 |      | ns-220.awsdns-27.com    |
|                 |      | ns-1943.awsdns-50.co.uk |

## DNS records for authentication

Volca will also set up a subdomain for user authentication that will be hosed on the `login` subdomain of your app. So make sure to route the subdomain `login.<my-app>.com` to the name servers previously specified.

| Hostname         | Type | Data                    |
| ---------------- | ---- | ----------------------- |
| login.my-app.com | NS   | ns-1126.awsdns-12.org   |
|                  |      | ns-642.awsdns-16.net    |
|                  |      | ns-220.awsdns-27.com    |
|                  |      | ns-1943.awsdns-50.co.uk |

## Push your code

:::note
Wait until the name servers have propagated to proceed with this step. We recommend waiting for ~30 minutes. If your name servers have not yet propagated, the GitHub Action mentioned below will time out. If this happens, wait a few more minutes and retry the Action in the GitHub interface.
:::

Next, GitHub Actions will take over the deployment. To trigger GitHub Actions, commit your changes and push them to the `main` branch. Then head over to your repository in GitHub to see the progress. If any action would fail, check the logs in the Actions tab in your repository and refer to the documentation if something goes wrong.

Once it has finished, your environment is deployed and new changes that you push to main will be automatically deployed.

## Done!

Your project should now be available at `https://app.your-domain.com`.
