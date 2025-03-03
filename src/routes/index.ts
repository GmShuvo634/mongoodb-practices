import express from "express";
import ordersRoutesV1 from "./v1/orderRoutes";
import usersRoutesV1 from "./v1/userRoutes";

const router = express.Router();

router.use("/v1/users", usersRoutesV1);
router.use("/v1/orders", ordersRoutesV1);

export default router;
