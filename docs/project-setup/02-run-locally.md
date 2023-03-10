---
slug: /run-locally
---

# 2. Run locally

Learn how to run a Volca project locally.

## Install tooling

This section guides your through how to install the tooling required to run Volca.

### 1. Install [asdf](https://asdf-vm.com/guide/getting-started.html)

This package is used to manage versions of tools and ensures that you are running versions compatible with Volca. It will also allow you to run a specific version of tools in Volca while not interfering with your other projects.

Once installed, make sure it works from your CLI by running:

`asdf --version`

Which should output the version of your asdf installation.

### 2. Install `Node.js`

Node.js is the runtime that allows your backend and frontend to run.

Run the following commands to install

```bash
  asdf plugin add nodejs
  asdf install nodejs 16.17.0
```

Once installed, make sure it works from your CLI by running:

`node --version`

Which should output `v16.17.0`

### 3. Install `yarn`

Yarn is the package manager used in Volca and supports our [monorepo project structure](/project-structure).

```bash
  asdf plugin add yarn
  asdf install yarn 1.22.18
```

Once installed, make sure it works from your CLI by running:

`yarn --version`

Which should output `v1.22.18`

### 4. [Install Docker](https://docs.docker.com/get-docker/)

Docker is used to run the Postgres database server locally.

Once installed, make sure it works from your CLI by running:

`docker --version`

:::note
Docker must always be running when you run your project locally
:::

Which should output the version of your Docker installation.

### 5. [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

AWS CLI is used to deploy your application to AWS.

Once installed, make sure it works from your CLI by running:

`aws --version`

Which should output the version of your AWS CLI installation.

## Install dependencies

After the tools has been installed, we can proceed to install the repositories dependencies.

```bash
yarn install
```

## Create a .env file

Create a file with the name `.env` and place it in the root folder. The file should contain the following:

```
STRIPE_KEY=<stripe-key>
```

:::note

Signing up for a subscription will not work locally until you have created your Stripe test key and added it to this `.env` file. Starting the project will work however. Once you have added your Stripe test key, you can activate a subscription locally by opening the checkout page and pressing the back button as Stripe cannot communicate with your local environment. Read more about how to set up Stripe in the [Configure Stripe](/docs/configure-stripe) section.

:::

## Run!

Run

```bash
yarn start
```

This command will make the Volca web app available on `http://127.0.0.1:3000` and the backend API available on `http://localhost:4000`.

Congrats, now you can start building features using your favorite IDE!
