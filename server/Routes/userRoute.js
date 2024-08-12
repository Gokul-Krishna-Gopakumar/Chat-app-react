const express = require("express");
const {
  registerUser,
  userLogin,
  findUser,
  getUsers,
} = require("../Controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/find/:userId", findUser);
router.get("/", getUsers);

module.exports = router;
