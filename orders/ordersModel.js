const db = require("../data/dbConfig");

function findById(id) {
  return db("orders").where({ id }).first();
}

async function saveOrder(newOrder) {
  const [savedOrder] = await db("orders").insert(newOrder, "*");
  return findById(savedOffer.id);
}

function findMyOrders(id) {
  return db("orders")
    .select("orders.*", "users.username")
    .join("users", "orders.maker_id", "=", "users.id")
    .where("orders.taker_id", id);
}

module.exports = {
  findById,
  saveOrder,
  findMyOrders,
};
