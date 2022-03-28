
## The Stack and Tools

1. Web server: [Node & Express](https://expressjs.com/)
2. Development database: [PostgreSQL 14](https://www.postgresql.org/download/)
3. Dev database Graphical-User Interface tool: [pgAdmin 4](https://www.pgadmin.org/download/)
4. Dev database Command-Line Interface tool: [psql](https://www.postgresql.org/docs/14/app-psql.html)

**Note:** **pgAdmin 4** and **psql** should be bundled with the PostgreSQL installer, but they might not be the latest versions.

5. Production cloud service: [Heroku](https://id.heroku.com/login)
6. Prod database: [Heroku Postgres Addon](https://devcenter.heroku.com/articles/heroku-postgresql)
7. Prod Command-Line Interface tool: [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Scripts

- **start** Runs the app with Node.
- **server** Runs the app with Nodemon.
- **migrate:dev** Migrates the local development db to the latest.
- **rollback:dev** Rolls back migrations in the local dev db.
- **seed:dev** Truncates all tables in the local dev db.
- **deploy** Deploys the main branch to Heroku. Must login to the Heroku CLI and add Heroku as a remote.
- **test** Runs tests.

**The following scripts NEED TO BE EDITED before using: replace `YOUR_HEROKU_APP_NAME`**

- **migrate:prod** Migrates the Heroku database to the latest.
- **rollback:prod** Rolls back migrations in the Heroku database.
- **databaseh** Interacts with the Heroku database from the command line using psql.
- **seed:prod** Runs all seeds in the Heroku database.

## Tips

- Figure out deployment before writing any additional code.

- If you need to make changes to a migration file that has already been released to Heroku, follow this sequence:

  1. Roll back migrations in the Heroku database
  2. Deploy the latest code to Heroku
  3. Migrate the Heroku database to the latest

- PostgreSQL comes with [fantastic built-in functions](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql) for hammering rows into whatever JSON shape.

- If you want to edit a migration that has already been released but don't want to lose all the data, make a new migration instead. This is a more realistic flow for production apps: prod databases are never migrated down. We can migrate Heroku down freely only because there's no valuable data from customers in it. In this sense, Heroku is acting more like a staging environment than production.

- If your fronted devs are interested in running the API locally, help them set up PostgreSQL & pgAdmin on their machines, and teach them how to run migrations in their local. This empowers them to (1) help you troubleshoot bugs, (2) obtain the latest code by simply doing a `git pull` and (3) work with their own data, without it being wiped every time you roll back the Heroku db. Collaboration is more fun and direct, and you don't need to deploy as often.

## Video Demonstration

The following demo explains how to set up a project using PostgreSQL and Heroku.

[![Setting up PostgreSQL for Build Week](https://tk-assets.lambdaschool.com/e43c6d1e-5ae8-4142-937b-b865d71925fb_unit-4-build-week-project-scaffolding.png)](https://bloomtech-1.wistia.com/medias/2625bl7sei)
