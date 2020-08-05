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

function findOrderIdUserId(userId, orderId) {
  return db("orders")
    .select(
      "orders.*",
      { usermaker: "u1.username" },
      { usertaker: "u2.username" }
    )
    .leftJoin({ u1: "users" }, "orders.maker_id", "=", "u1.id")
    .leftJoin({ u2: "users" }, "orders.taker_id", "=", "u2.id")
    .where(function () {
      this.where("orders.id", orderId);
    })
    .andWhere(function () {
      this.where("orders.taker_id", userId).orWhere("orders.maker_id", userId);
    });
}
async function updateOrderById(order) {
  const [updatedOrder] = await db("orders")
    .where({ id: order.id })
    .update(order, "*");

  return findById(updatedOrder.id);
}

module.exports = {
  findById,
  saveOrder,
  findMyOrders,
  findOrderIdUserId,
  updateOrderById,
};
