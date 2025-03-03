import express from "express";
import { createOrder, getAllOrders, getOrderById, getTotalRevenueByCategory } from "../../controllers/v1/orderController";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.post("/", createOrder);
router.get("/total-revenue/:category", getTotalRevenueByCategory);

export default router;
