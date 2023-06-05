const { Login, Logout, Profile } = require("../Controllers/AuthController");
const { userVerification } = require("../Middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/login", Login);
router.post("/profile", userVerification, Profile);
router.post("/logout", userVerification, Logout);

module.exports = router;
