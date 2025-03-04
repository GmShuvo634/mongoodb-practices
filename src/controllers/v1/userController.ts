import { Request, Response } from "express";
import { UserService } from "../../services/userService";

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const transferAmount = async (req: Request, res: Response) => {
  try {
    const { senderId, receiverId, amount } = req.body;
    const response = await userService.updateBalance(senderId, receiverId, amount);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to transfer amount" });
  }
}
