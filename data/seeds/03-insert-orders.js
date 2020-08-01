const createFakeOrders = (value) => {
  let boolVal = value <= 3 ? true : false;
  return {
    complete: boolVal,
    cancelled: value >= 7 ? boolVal : !boolVal,
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
  for (let i = 1; i < 11; i++) {
    fakeOrders.push(createFakeOrders(i));
  }

  return knex("orders").insert(fakeOrders);
};
