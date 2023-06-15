const express = require("express");
const router = express.Router();
const MenuItemController = require("../controllers/MenuItemController");

router.get("/", MenuItemController.getAll);

module.exports = router;
