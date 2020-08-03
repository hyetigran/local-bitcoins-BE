const db = require("../data/dbConfig");

function findById(id) {
  return db("orders").where({ id }).first();
}

async function saveOrder(newOrder) {
  const [savedOrder] = await db("orders").insert(newOrder, "*");
  return findById(savedOrder.id);
}

function findMyOrders(id) {
  console.log("bad");
  return db("orders")
    .select(
      "orders.*",
      { usermaker: "u1.username" },
      { usertaker: "u2.username" }
    )
    .leftJoin({ u1: "users" }, "orders.maker_id", "=", "u1.id")
    .leftJoin({ u2: "users" }, "orders.taker_id", "=", "u2.id")
    .where(function () {
      this.where("orders.taker_id", id).orWhere("orders.maker_id", id);
    });
}

module.exports = {
  findById,
  saveOrder,
  findMyOrders,
};

// SELECT orders.*, u1.username as usermaker, u2.username as usertaker
// FROM orders
// LEFT JOIN users u1
// ON orders.maker_id = u1.id
// LEFT JOIN users u2
// ON orders.taker_id = u2.id
// WHERE orders.maker_id = 21 OR orders.taker_id = 21;
