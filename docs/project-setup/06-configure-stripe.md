---
slug: /configure-stripe
---

# 6. Configure Stripe

Follow the below steps to configure Stripe for you application and start accepting payments.

## Create a Stripe account

Head on over to [Stripe](https://stripe.com/) and create an account if you don't already have one.

## Test mode

We recommend setting everything up in "Test mode" first by switching on the "Test mode" toggle in the Stripe dashboard. Once you are ready for production, follow the below steps while in production mode.

## Create products and prices

Once you have your Stripe account set up, it's time to create your products. You can configure any number of products you want - for example you might want one product for a cheaper plan and one product for a more expensive premium plan. For each product you want to create, repeat the below steps:

Go to Products -> Add product and add your product details. Since Volca was created for SaaS products, pick the _recurring_ billing method.

When you are done, save the product, scroll down to the "Pricing" heading and copy the ID of the price you just configured.

## Configure plans

To configure your products in Volca, follow the below steps for each product you created and for each environment:

1. Add a `PlanId` for your product in the file `config/types.ts`. By default there are three plans configured - `BASIC`, `PLUS` and `PREMIUM`. Feel free to remove them or rename them as you prefer.
2. Add your plans to the `plans` configuration for each environment in `app.config.ts`. A new plan can be added like this: 

```
plans: [
   ...
   {
      id: PlanId.MY_NEW_PLAN,
      stripePriceId: 'stripe-price-id', // Your price ID from Stripe
   }
   ...
]
```

Finally, in `clients/web/src/pages/onboarding.tsx` add your plan to the `plans` array like this:

```
const plans = {
   ...
   MY_NEW_PLAN: {
      title: 'My New Plan',
      description: 'A plan that is mine and new.',
      price: 19,
      features: ['Feature A', 'Feature B'],
   }
   ...
}
```

## Set the STRIPE_KEY locally

To get subscriptions running locally, open the `.env` file in the root folder and add:

`STRIPE_KEY=` The Stripe secret key found in the "Developers" tab in the Stripe dashboard

And then add your `STRIPE_PRICE_ID` to the `app.config.ts` file.

Now you can start your project locally and try subscribing!

## Set the STRIPE_KEY parameter in AWS

This step requires you to have deployed your app to AWS at least once by following the [deploy infrastructure guide](/deploy-to-aws).

1. Open the AWS console
2. Open Services -> Systems Manager -> Parameter Store
3. Find the existing parameter called `/<name>/<environment>/STRIPE_KEY`
4. Update the parameter with your Stripe key and save
5. For the updated parameter to be updated in your app, you need to re-deploy it by triggering the GitHub action `deploy-api-service` either from the GitHub UI or by pushing a commit to the `main` branch.

Now you should be able to accept payments in your deployed application!

## Webhooks

Whenever a customer makes a purchase through your Stripe checkout flow, the database needs to be updated to add a subscription for the user who made the purchase. This is done using webhooks. You will need to set up a webhook for each environment that your project runs in.

1. Sign in to the Stripe dashboard
2. Go to the Developers tab
3. Go to Webhooks
4. Click Add endpoint
5. Enter the following values
   Endpoint URL: `<your-api-url>/stripe/webhook`
   Events: `customer.subscription.created`and `customer.subscription.deleted`
6. Leave the rest as default and click Add endpoint

Next, we need to add the webhook secret to our configuration.

1. Click the webhook you created in the Stripe dashboard
2. Click Signing secret -> Reveal
3. Copy the secret
4. Go into AWS -> Systems Manager -> Parameter Store
5. Find the STRIPE_WEBHOOK_SECRET parameter and update it with the value from Stripe
6. Re-deploy your project

Now you are done! Stripe will alert you if your webhook would fail.

## Free trial

The free trial length can be configured by setting the [environment variable](/configuration#environment-variables) `FREE_TRIAL_DAYS` to the number of days you want to offer a free trial.

## Test card

If the [environment variable](/configuration#environment-variables) `TEST_CARD_ENABLED` is set to `1`, a test card will automatically be created when a checkout session is started. This is useful when you want to test the checkout flow.