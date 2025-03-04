import express from "express";
import { getAllUsers, transferAmount } from "../../controllers/v1/userController";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/transfer", transferAmount);

export default router;
