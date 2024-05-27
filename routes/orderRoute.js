import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
  cancelPayment,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/list", authMiddleware, listOrders);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/status", updateStatus);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/cancelpayment", cancelPayment);

export default orderRouter;
