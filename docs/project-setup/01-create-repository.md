---
slug: /create-github-repository
---

# 1. Create GitHub repository

Create a GitHub repository for your project.

Once you have purchased a Volca license, you will receive an invite to a private GitHub repository called `volca-io/volca`. Accept the invitation and make sure you see the repository in GitHub before you proceed.

:::caution
There is a bug in the GitHub UI that might leave the button disabled when selecting Volca as a template to create your repository from. This can be bypassed by using inspect element in your browser and remove the disabled class from the button. You are then able to click it.
:::

1. Create a new repository in GitHub by following the [official GitHub documentation](https://docs.github.com/en/get-started/quickstart/create-a-repo). Make sure to pick `volca-io/volca` in the `Repository template` dropdown.
2. Pick your preferred settings and click `Create repository`
3. Clone your new repository to your computer
4. Done!

:::note
Note that some GitHub Actions may fail the first time you push your code. These will start working once we have provisioned the required infrastructure in your AWS account. We will go through the AWS setup in the next section.
:::
