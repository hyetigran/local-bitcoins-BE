exports.up = function (knex) {
  return knex.schema.createTable("orders", (orders) => {
    orders.increments();
    orders.boolean("complete").notNullable().defaultTo(false);
    orders.boolean("cancelled").notNullable().defaultTo(false);
    orders.boolean("is_maker_buying").notNullable();
    orders
      .integer("maker_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    orders
      .integer("taker_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    orders
      .integer("offer_id")
      .unsigned()
      .references("id")
      .inTable("offers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    orders.string("price_bch").notNullable();
    orders.string("bch_amount").notNullable();
    orders.string("fiat_amount").notNullable();
    orders.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("orders");
};
