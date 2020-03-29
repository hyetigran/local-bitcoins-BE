const db = require("../data/dbConfig");

function findById(id) {
  return db("offers")
    .where({ id })
    .first();
}

async function createOffer(newOffer) {
  db("offers")
    .insert(newOffer)
    .then(ids => {
      return findById(ids[0]);
    });
}

module.exports = {
  createOffer,
  findById
};
