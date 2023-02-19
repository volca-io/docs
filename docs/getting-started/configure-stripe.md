---
sidebar_position: 4
slug: /configure-stripe
---

# Configure Stripe

Follow the below steps to configure Stripe for you application and start accepting payments.

### Create a Stripe account

Head on over to [Stripe](https://stripe.com/) and create an account if you don't already have one.

### Test mode

We recommend setting everything up in "Test mode" first by switching on the "Test mode" toggle in the Stripe dashboard. Once you are ready for production, follow the below steps while in production mode.

### Create a product and a price

Once you have your Stripe account set up, it's time to create a product. Go to Products -> Add product and add your product details. Since Volca is a SaaS boilerplate, pick the _recurring_ billing method.

When you are done, save the product, scroll down to the "Pricing" heading and copy the ID of the price you just configured.

### Set the STRIPE_KEY and STRIPE_PRICE_ID locally

To get subscriptions running locally, open `.env` and add:

`STRIPE_KEY=` The Stripe secret key found in the "Developers" tab in the Stripe dashboard

And then add your `STRIPE_PRICE_ID` to the `app.config.ts` file.

Start the app and try subscribing!

### Set the STRIPE_KEY parameter in AWS

This step requires you to have deployed your app to AWS at least once by following the [deploy infrastructure guide](/docs/category/deploying-to-aws).

1. Open the AWS console
2. Open Services -> Systems Manager -> Parameter Store
3. Find the existing parameter called `/<environment>/STRIPE_KEY`
4. Update the parameter with your Stripe key and save
5. For the updated parameter to be updated in your app, you need to re-deploy it either by running `yarn deploy:<environment>` from the `api` folder or by pushing a new commit to the GitHub repository and let GitHub Actions do the heavy lifting

Now you should be able to accept payments in your deployed application!
