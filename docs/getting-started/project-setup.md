---
sidebar_position: 1
slug: /project-setup
---

# Setting up the project

## Download

Once you have purchased Volca, you will receive a link to a zip archive containing the Volca source code. Unzip the archive and place the folder where you would normally keep your software projects. All CLI commands described below should be run from the root of this folder.

## Setup

- [Install Node](https://nodejs.org/en/download/)
  - Node is the runtime for Volca backend servies
- [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
  - Yarn is used to manage dependencies and the [monorepo project structure](/docs/overview) of Volca
- [Install asdf](https://asdf-vm.com/guide/getting-started.html)
  - asdf is a utility to manage versions of the tools used to run Volca
- [Install Docker](https://docs.docker.com/get-docker/)
  - Docker is used to run the Postgres database server locally
- [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
  - AWS CLI is used to deploy your application to AWS

## Install dependencies

To install all depedencies that Volca uses, run the following command:

```bash
yarn install
```

## Create a .env file

To control environment variables when running locally, we use a `.env` file.

Create a placeholder file `services/api/env/.env.local` and fill it with the placeholder values below:

```text title="services/api/env/.env.local"
STAGE=local
STRIPE_KEY=<STRIPE_KEY>
STRIPE_PRICE_ID=<STRIPE_PRICE_ID>
SIGNING_KEY=local-signing-key
```

The Stripe keys are not required to get up and running at this stage. As you continue configuring your Volca app, you can update this file with new values.

## Run Locally

Run

```bash
yarn start
```

This command will make the Volca web app available on `http://127.0.0.1:3000` and the backend API available on `http://localhost:4000`.

Congrats, now you can start hacking using your favorite IDE!

In the next section we will go over how to configure your GitHub account to setup version control and enable the CI/CD workflow.
