import express from "express";
import { getAllUsers } from "../../controllers/v1/userController";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
