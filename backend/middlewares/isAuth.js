const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    const verifyToken = jwt.verify(token, "masynctechKey");
    if (verifyToken) {
      req.user = verifyToken.id;
      next();
    }
  } catch (error) {
    next(new Error("Invalid token")); // Changed from "Token expired" message
  }
};

module.exports = isAuthenticated;
