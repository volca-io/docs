---
sidebar_position: 7
slug: /environment-variables
---

# Environment variables

Environment variables will be managed in different ways when developing locally and when running your application live. Here is how it works.

## Adding a new variable

You can add a new environment variable by defining it in the environment variables file located at `services/api/src/types/environment-variables.ts`. This will cause the service to try and load it when the server is created. If the environment variable is not available it will throw an error.

### Adding locally

To add the new environment variable in your local environment, simply add it in the `.env` file in the root of your project.

### Adding live

When adding the environment live, you will have to add it to the SSM Parameter store in AWS. All parameters that are placed under the path `/<app-name>/<environment>/api/` will be picked up by the api service.

#### Adding Secrets

If the variable is a sensitive value, it should be added as a `SecureString` type in SSM. This has to be done manually since AWS does not support creating `SecureString` values through AWS CDK.

To add the variable, you can run this command from your shell:

```shell
aws ssm put-parameter \
    --name "/<app-name>/<environment>/api/ENVIRONMENT_VARIABLE_NAME" \
    --value "value of the parameter" \
    --type "SecureString"
```

When the parameter is added, it will be automatically picked up by the service within 5 minutes.

#### Adding non secrets

Values that are not considered secrets can be managed by AWS CDK. You can simply add the parameter in your infrastructure code in the api stack.

Navigate to the `api-stack.ts` file and add your new environment variable to the `ApiEnvironmentVariables` construct.