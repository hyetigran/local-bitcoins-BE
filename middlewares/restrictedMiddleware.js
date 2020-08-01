require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "default";

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    return res.status(400).json({
      errorMessage: "Not allowed to access this route",
    });
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, secret);
  } catch (err) {
    return res.status(401).json({
      errorMessage: "Not allowed to access this route",
      err,
    });
  }

  req.userId = decodedToken.userId;
  return next();
};
