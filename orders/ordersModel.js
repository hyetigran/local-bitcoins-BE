const db = require("../data/dbConfig");

function findById(id) {
  return db("orders").where({ id }).first();
}

async function saveOrder(newOrder) {
  const [savedOrder] = await db("orders").insert(newOrder, "*");
  return findById(savedOffer.id);
}

module.exports = {
  findById,
  saveOrder,
};
