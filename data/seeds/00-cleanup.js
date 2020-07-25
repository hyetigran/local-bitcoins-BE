const cleaner = require("knex-cleaner");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return cleaner.clean(knex, {
    ignoreTables: ["dbmigrations", "dbmigrations_lock"],
  });
};
