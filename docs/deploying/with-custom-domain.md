---
sidebar_position: 2
---

# With custom domain

In AWS, domains are managed by a service called Route 53 through an entity called a Hosted Zone. The Hosted Zone lets you configure DNS settings for domains registered both insie and outside AWS.

Volca will help you deploy a Hosted Zone for a domain that you have configured outside AWS. Once the Hosted Zone is created, you point your domain to the name servers tied to the Hosted Zone.

Follow the steps below to deploy your application with you custom domain!

## Add the custom domain to the Volca config

First, add the custom domain to the environments configuration in `volca.config.ts`. Like this:

```ts title="volca.config.ts"
export const config: VolcaConfig = {
  name: "my-app", // Your app name
  environments: {
    staging: {
      domain: "staging.my-app.com", // Your domain
      aws: {
        account: "123456789000", // Your AWS account number
        region: "eu-central-1", // Your AWS region
      },
    },
  },
};
```

## Deploy the routing stack

To deploy the routing stack, replace the values in the command and execute it.

```sh
yarn infra:deploy -s <environment> --stacks <app-name>-<environment>-routing-stack
```

## Point your domain to the hosted zones name servers

After the stack has been deployed, a list of name servers for your Hosted Zone will be displayed. For example:

```
Outputs:
volca-sandbox-routing-stack.ExportsOutputRefHostedZone = Z1037258BDSKJWOZ6R2D
volca-sandbox-routing-stack.NameServers = ns-1126.awsdns-12.org, ns-642.awsdns-16.net, ns-220.awsdns-27.com, ns-1943.awsdns-50.co.uk
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

## Make a full deployment

Once the DNS change has propagated, you can make a full deployment. Make sure to give the DNS changes some time to propagate.

```sh
yarn infra:deploy -s <environment>
```

Done! Make sure to push the updated files to the `main` branch of your GitHub repository.