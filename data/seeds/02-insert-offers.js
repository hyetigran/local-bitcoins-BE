const faker = require("faker");
const createFakeOffers = (value) => {
  return {
    buyBCH: faker.random.boolean(),
    country: faker.address.country(),
    city: faker.address.city(),
    payment_method: "Cash in person",
    currency_type: faker.finance.currencyCode(),
    currency_symbol: faker.finance.currencySymbol(),
    dynamic_pricing: true,
    margin: parseInt(Math.random() * 10) + 1,
    margin_above: faker.random.boolean(),
    verified_only: faker.random.boolean(),
    maker_id: value,
    market_exchange: "Coinbase",
    headline: faker.lorem.words(),
    trade_terms: faker.lorem.sentence(),
  };
};
exports.seed = function (knex) {
  let fakeOffers = [];
  for (let i = 1; i < 21; i++) {
    fakeOffers.push(createFakeOffers(i));
  }

  return knex("offers").insert(fakeOffers);
};
