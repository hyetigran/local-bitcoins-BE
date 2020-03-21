exports.up = function(knex) {
  return knex.schema.table("users", users => {
    users.string("blurb", 255);
    users.string("country", 255);
    users.string("city", 255);
    users.boolean("email_verification").defaultTo(false);
    users.boolean("phone_verification").defaultTo(false);
    users.boolean("merchant").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.table("users", users => {
    users.dropColumn("merchant");
    users.dropColumn("phone_verification");
    users.dropColumn("email_verification");
    users.dropColumn("city");
    users.dropColumn("country");
    users.dropColumn("blurb");
  });
};
