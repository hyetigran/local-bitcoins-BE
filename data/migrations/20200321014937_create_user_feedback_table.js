exports.up = function(knex) {
  return knex.schema.createTable("user-feedback", user => {
    user.increments();
    user.string("description");
    user.integer("rating").notNullable();
    user
      .integer("maker_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    user
      .integer("taker_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    user
      .integer("order_id")
      .unsigned()
      .references("id")
      .inTable("orders")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    user.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user-feedback");
};
