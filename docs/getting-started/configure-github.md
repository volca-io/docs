---
sidebar_position: 2
---

# Configure GitHub

To get your version control up and running as well as the GitHub Actions that automatically deploy your application, follow the below steps.

## Create a GitHub repository

Create a GitHub repository either under your personal GitHub account or a GitHub organization by following the [official GitHub documentation](https://docs.github.com/en/get-started/quickstart/create-a-repo).

## Update your Volca config

Navigate to the project folder containing your Volca application and update the file `volca.config.ts` with the following values

```ts title="volca.config.ts"
...
github: {
    organization: 'my-github-org', // Your GitHub organization or username
    repository: 'my-github-repo', // Your GitHub repository name
},
...
```

## Push Volca to your new repository

Run the below command in your preferred terminal to push the code to your newly created repository.

Replace `GITHUB_ORGANIZATION` with either your GitHub username if you created the repository under your user or your organization if you created it under an organization.

Replace `GITHUB_REPOSITORY_NAME` with your repository name.

```sh
git init --initial-branch=main
git remote add origin git@github.com:<GITHUB_ORGANIZATION>/<GITHUB_REPOSITORY_NAME>.git
git push -u origin main
```

Done! Note that some GitHub Actions may fail the first time you push your code. These will start working once we have provisioned the required infrastructure in your AWS account. We will go through the AWS setup in the next section.
