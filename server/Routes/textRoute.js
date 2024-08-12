const express = require("express");
const {
  createText,
  getText,
  deleteText,
} = require("../Controllers/textController");

const router = express.Router();

router.post("/", createText);
router.get("/:chatId", getText);

module.exports = router;
