const db = require("../data/dbConfig");

function findById(id) {
  return db("offers")
    .where("offers.id", "=", id)
    .join("users", "maker_id", "=", "users.id")
    .select("offers.*", "users.username");
}

async function saveMessage() {
  return db("offers").where("maker_id");
}

async function findAllByOrderId() {
  return db("offers")
    .join("users", "maker_id", "=", "users.id")
    .select("offers.*", "users.username")
    .orderBy("updated_at", "desc");
}

module.exports = {
  findAllByOrderId,
  saveMessage,
};
