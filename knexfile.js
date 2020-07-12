// Update with your config settings.
require("dotenv").config(); // load .env variables

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_DEV,
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations",
    },
    seeds: { directory: "./data/seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  testing: {
    client: "pg",
    connection: process.env.DATABASE_TEST,
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
