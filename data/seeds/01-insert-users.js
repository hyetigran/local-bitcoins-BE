const bcrypt = require("bcryptjs");
const faker = require("faker");

const createFakeUser = () => {
  //const hashedPassword = await ;
  return {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: bcrypt.hashSync("Pass1234", 12),
    push_notification: false,
  };
};

exports.seed = function (knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 20;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(fakeUsers);
    });
};
