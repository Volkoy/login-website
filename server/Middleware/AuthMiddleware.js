const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(400).json({ message: " No token found ", ok: false });
  }
  jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
    if (err) {
      return res
        .status(400)
        .json({ message: " Failed to verify token ", ok: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        req.userEmail = user.email;
        return next();
      } else
        return res
          .status(400)
          .json({ message: " User not authorized ", ok: false });
    }
  });
};
