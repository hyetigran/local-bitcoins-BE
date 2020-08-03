exports.up = function (knex) {
  return knex.schema.createTable("chat", (chat) => {
    chat.increments();
    chat
      .integer("order_id")
      .unsigned()
      .references("id")
      .inTable("orders")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    chat.string("text").notNullable();
    chat
      .integer("author_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    chat.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("chat");
};
