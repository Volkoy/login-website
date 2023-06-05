const User = require("../Models/UserModel");
const { createSecretToken } = require("../utils/JWTutil");
const bcrypt = require("bcrypt");

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", ok: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Incorrect password or email", ok: false });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res
        .status(401)
        .json({ message: "Incorrect password or email", ok: false });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({
      message: "User logged in successfully",
      email: user.email,
      ok: true,
    });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Logout = async (req, res, next) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "Logged out successfully", ok: true });

  next();
};

module.exports.Profile = async (req, res, next) => {
  res.json({ email: req.userEmail, ok: true });
  next();
};
