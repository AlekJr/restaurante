const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

router.post("/", OrderController.create);
router.get("/user/:userId", OrderController.getByUser);
router.put("/:orderId/status", OrderController.updateStatus);

module.exports = router;
