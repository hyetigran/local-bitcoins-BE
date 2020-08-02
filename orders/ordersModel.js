const db = require("../data/dbConfig");

function findById(id) {
  return db("orders").where({ id }).first();
}

async function saveOrder(newOrder) {
  const [savedOrder] = await db("orders").insert(newOrder, "*");
  return findById(savedOrder.id);
}

function findMyOrders(id) {
  return db("orders")
    .select("orders.*", "u1.usermaker", "u2.usertaker")
    .leftJoin({ u1: "users" }, "orders.maker_id", "=", "users.id")
    .leftJoin({ u2: "users" }, "orders.taker_id", "=", "users.id")
    .where(function () {
      this.where("orders.taker_id", id).orWhere("orders.maker_id", id);
    });
}

module.exports = {
  findById,
  saveOrder,
  findMyOrders,
};
