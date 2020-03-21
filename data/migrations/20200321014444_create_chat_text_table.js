exports.up = function(knex) {
  return knex.schema.createTable("chat-text", chat => {
    chat.increments();
    chat.string("text").notNullable();
    chat
      .integer("chat_room")
      .unsigned()
      .references("id")
      .inTable("chat")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    chat
      .integer("author")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    chat.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("chat-text");
};
