const db = require("../data/dbConfig");

async function saveMessage(newMessage) {
  return db("chat").insert(newMessage, "*");
}

async function findAllByOrderId(id) {
  return db("chat")
    .join("users", "author_id", "=", "users.id")
    .select("chat.*", "users.username")
    .where("order_id", id)
    .orderBy("created_at");
}

module.exports = {
  findAllByOrderId,
  saveMessage,
};
