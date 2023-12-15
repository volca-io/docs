---
sidebar_position: 8
slug: /cicd
---

# CI/CD

Volca was created with the mindset "automate everything". To achieve a fully automated workflow, we use GitHub Actions for running...

## On Pull Requests

When a Pull Request is created or updated, the following actions will run:

- Running tests
- Running code quality checks such as linting, typechecks and spelling checks

## On merges

On merges to the `main` branch, the following actions will run:

- Tests
- Database migrations for staging
- Deploy to staging
- Database migrations for production
- Deploy to production (if deploy to staging succeeds)