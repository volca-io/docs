---
sidebar_position: 8
---

# Migrations

Migrations are a way to version control your database schema. A migration might create a table, add a column, remove a column or rename a column. Migrations in Volca are handled by [Knex](https://knexjs.org/guide/migrations.html) under the hood. For defining a new migration, please refer to the Knex docs.

## How to create a migration

All migrations reside in the file `services/api/src/lib/db/migrations.ts`. Each migration is inside an array and looks like this:

```ts title="services/api/src/lib/db/migrations.ts"
...
{
    name: '02_create_users_table',
    up: (knex: Knex) => {
        return knex.schema.createTable('users', (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
        table.string('email').unique().notNullable();
        table.string('password').nullable();
        table.string('first_name').nullable();
        table.string('last_name').nullable();
        });
    },
    down: (knex: Knex) => {
        return knex.schema.dropTable('users');
    },
},
...
```

The `up` function runs when you apply your migration and the `down` function runs when you roll back your migration.

## How to run migrations

Migrations can be run for your local environment as well as your environments that are deployed to AWS as long as you can access the database from your local machine.

### Locally

To run migrations locally, start your project using `yarn start` from the root folder. Then navigate to `services/api` and run `yarn migrate:latest:local`. This will run all migrations that have not yet been applied.

### In AWS environments

Migrations are run automatically when you push new changes to the `main` branch.

To run migrations for AWS environments manually, navigate to `services/api` and run `yarn migrate:latest:<environment>` with the correct AWS profile set in your CLI.

### All migration commands

- `yarn migrate:latest:<environment>` Runs all migrations that have not yet been applied
- `yarn migrate:up:<environment>` Runs the next chronological migration that has not yet been run
- `yarn migrate:down:<environment>` Will undo the last migration that was run
