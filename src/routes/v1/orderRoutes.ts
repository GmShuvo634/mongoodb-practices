import express from "express";
import { createOrder, getAllOrders, getOrderById, getTotalRevenueByCategory, orderedByEachCustomer, ordersWithCustomer } from "../../controllers/v1/orderController";

const router = express.Router();
router.get("/", getAllOrders);
router.post("/", createOrder);
router.get("/orders-by-customer", orderedByEachCustomer);
router.get("/orders-with-customer", ordersWithCustomer);
// router.get("/:id", getOrderById);
router.get("/total-revenue/:category", getTotalRevenueByCategory);

export default router;
