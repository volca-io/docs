---
slug: /deploy-to-aws
---

# 4. Deploy to AWS

Learn how to deploy your project to AWS.

## Prerequisites

To complete this guide, you need:

- An [AWS account](/docs/configure-aws) with configured credentials in your CLI
- A domain name where you have access to control DNS settings
- An e-mail address belonging to your domain name which will be used as the sender for any e-mails sent by your project

## Configure

The file `app.config.ts` in the root directory holds the configuration for your AWS environment. Running the script `yarn configure` will generate the file for you based on your inputs.

## Deploy CoreStack

To enable GitHub Actions to deploy any new changes pushed to your repository, a `CoreStack` needs to exist in your account. The `CoreStack` contains the following:

- An OpenID Connect (OIDC) identity provider that allows GitHub to identity itself
- IAM roles that allow GitHub Actions to deploy resources in your AWS account
- A Route53 hosted zone to manage your domain
- A verified Amazon SES e-mail

To deploy the `CoreStack`, run the following command:

`yarn deploy-core` TODO: Decide name

Once the `CoreStack` has been deployed, it will output a list name servers that you need to point your domain to, for example:

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

## Verify name servers

Wait until the name servers have propagated to proceed with the next step. You can verify this by running `nslookup -type=ns <your-domain>`. If the name servers that the `yarn deploy-core` command are shown, you can proceed.

## Push your code

Next, GitHub Actions will take over the deployment. To trigger GitHub Actions, commit your changes and push them to the `main` branch. Then head over to your repository in GitHub to see the progress. If any action would fail, check the logs in the Actions tab in your repository and refer to the documentation if something goes wrong.

Note that this step can take a long time the first time it is run since it creates certificates that take a while to validate through DNS.

Once it has finished, your environment is deployed and new changes that you push to main will be automatically deployed.
