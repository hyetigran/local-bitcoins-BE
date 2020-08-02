const db = require("../data/dbConfig");

async function saveMessage(newMessage) {
  return db("chat").insert(newMessage);
}

async function findAllByOrderId(id) {
  return db("chat")
    .join("users", "author", "=", "users.id")
    .select("chat.*", "users.username")
    .where()
    .orderBy("created_at");
}

module.exports = {
  findAllByOrderId,
  saveMessage,
};
