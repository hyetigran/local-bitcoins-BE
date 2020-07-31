const faker = require("faker");

const createFakeOrders = (value) => {
  return {
    complete: faker.random.boolean(),
    cancelled: faker.random.boolean(),
    maker_id: value,
    taker_id: 21,
    offer_id: value + 20,
    price_bch: "250",
    bch_amount: "2",
    fiat_amount: "500",
  };
};
exports.seed = function (knex) {
  let fakeOrders = [];
  for (let i = 1; i < 21; i++) {
    fakeOrders.push(createFakeOrders(i));
  }

  return knex("orders").insert(fakeOrders);
};
