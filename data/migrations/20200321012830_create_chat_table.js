exports.up = function(knex) {
  return knex.schema.createTable("chat", chat => {
    chat.increments();
    chat
      .integer("maker_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    chat
      .integer("taker_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    chat
      .integer("orders_id")
      .unsigned()
      .references("id")
      .inTable("orders")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    chat.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("chat");
};
