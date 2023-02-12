---
sidebar_position: 1
slug: /project-setup
---

# Setting up the project

## Download

Once you have purchased Volca, you will receive a link to a zip archive containing the Volca source code. Unzip the archive and place the folder where you would normally keep your software projects. All CLI commands described below should be run from the root of this folder.

## Setup

### 1. Install [asdf](https://asdf-vm.com/guide/getting-started.html)

This package is used to manage versions of tools and ensures that you are running versions compatible with Volca. It will also allow you to run a specific version of tools in Volca while not interfering with your other projects.

### 2. Install `node.js`

Node.js is the runtime that allows your backend and frontend to run. 

Run the following commands to install
```bash
  asdf plugin add nodejs
  asdf install nodejs 16.17.0
```

### 3. Install `yarn`

Yarn is the package manager used in Volca and supports our [monorepo project structure](/project-structure). 

```bash
  asdf plugin add yarn
  asdf install yarn 1.22.18
```

### 4. [Install Docker](https://docs.docker.com/get-docker/)

Docker is used to run the Postgres database server locally 

### 5. [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

AWS CLI is used to deploy your application to AWS


## Initialise a new git repository

Run the following command in the root of the project.

```bash
git init
```

## Install dependencies

After the tools has been installed, we can proceed to install the repositories dependencies.

```bash
yarn install
```

## Bootstrap

Once dependencies are installed, we can run the bootstrap script to set up the project configuration.

```bash
yarn bootstrap
```

The bootstrap script will guide you through the setup and create the configuration files for you. To see what files has been created, check the repo status with git.

```bash
git status
```

You can now commit your changes and push it to the main branch of your GitHub repository.
```bash
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin <your-origin> #Insert your GitHub origin address
git push -u origin main
```

## Run Locally

Run

```bash
yarn start
```

This command will make the Volca web app available on `http://127.0.0.1:3000` and the backend API available on `http://localhost:4000`.

Congrats, now you can start hacking using your favorite IDE!

In the next section we will go over how to configure your GitHub account to setup version control and enable the CI/CD workflow.
