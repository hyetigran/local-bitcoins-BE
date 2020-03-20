const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const usersRoutes = require("./users/usersRoutes");

server.use(helmet());
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/auth", usersRoutes);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Local Bitcoin Clone API" });
});

server.all("*", (req, res) => {
  res.status(404).send({
    error: "The resource you are looking for does not exist"
  });
});

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  server.listen(port, console.log(`Listening on Port ${port}`));
}
module.exports = server;
