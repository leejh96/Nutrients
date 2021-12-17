const express = require("express");
const router = express();
const {
  getAll,
  getOne,
  create,
  update,
} = require("../../controller/boardController");

router.get("/", getAll);
router.post("/", create);

module.exports = router;
