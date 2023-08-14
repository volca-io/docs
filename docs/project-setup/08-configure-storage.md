---
slug: /configure-storage
---

# 8. Configure Storage

A common use case when setting up your project is storing files. Volca includes functionality for storing files in a secure manner with AWS S3 and AWS Cognito.

## Enabling storage

Enabling storage is as simple as enabling it in your `app.config.ts` file.

```ts
production: {
    ...
    storage: {
      enabled: true,
    },
    ...
  },
```

### Enable for local development

To enable storage when developing locally you first need to deploy some assets to AWS. We recommend deploying a staging environment and then using it for your local development.

Once the stack is deployed, you can find the name of the bucket in the outputs of the api stack in your terminal. You can then add that value as an environment variable in your local config.

```ts
local: {
  ...
  environmentVariables: {
    ...
    AWS_S3_ASSETS_BUCKET: '<your-s3-bucket-name>',
  },
}
```

## Storage levels

Volca comes bundled with three different storage level and replicates the behaviour by AWS Amplify. The following storage levels are supported:

- `Public`: Files accessible by anyone
- `Protected`: Files accessible by authenticated users
- `Private`: Files accessible by the user that uploaded them

## Uploading files

Files can be uploaded by using the component `FileInput.tsx`. It can be hooked up to `react-hook-form` like this:

```ts
<FormControl isInvalid={!!errors.key}>
  <FormLabel>File</FormLabel>
  <Controller
    control={control}
    name="key"
    render={({ field: { onChange } }) => (
      <FileInput
        description="Your file will be uploaded to the cloud"
        level="public"
        onUpload={({ key }) => {
          onChange(key);
          handleSubmit(_onSubmit)();
        }}
      />
    )}
  />
  <FormErrorMessage>{errors.key?.message}</FormErrorMessage>
</FormControl>
```

When a file is selected it will be automatically uploaded to aws s3 with the correct storage level and the key will be returned in the `onUpload` callback. The key can then be stored in your database and later be fetched.

### Note on protected and private files

When uploading with the storage level `protected` or `private` you will also need to keep track of the users identityId, since it will be needed when fetching the file. This is due to how the storage and IAM policies works in AWS.

Here is an example on how you can upload a file by fetching the current user and project.

```ts
const { selectedProject: project } = useProjectsContext();
const { user } = useAuthContext();

const createNewAsset = ({ key, level }: { key: string }) => {
  executeApiAction({
    action: async ({ client }) => {
      await client
        .post(`projects/${project?.id}/assets`, {
          json: { key, level, cognitoIdentityId: user.cognitoIdentityId },
        })
        .json();
    },
  });
};
```

## Fetching files

To fetch files, we can use the AWS Amplify SDK storage module. Plug in the key you received on upload, the storage level and the identity id if fetching files from the `protected` or `private` levels. For more information on how to fetch files, check the [AWS Amplify documentation](https://docs.amplify.aws/lib/storage/download/q/platform/js/)

```ts
const res = await Storage.get(key, {
  level: "protected",
  identityId: "identityId",
});
```
