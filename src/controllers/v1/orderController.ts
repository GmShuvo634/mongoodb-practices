import { Request, Response } from "express";
import { UserService } from "../../services/userService";
import { OrdersService } from "../../services/ordersService";

const ordersService = new OrdersService();


export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const users = await ordersService.getAllOrders();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await ordersService.getOrderById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await ordersService.createOrders(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

export const getTotalRevenueByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const totalRevenue = await ordersService.getTotalRevenueByCategory(category);
    res.status(200).json(totalRevenue);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch total revenue" });
  }
};

export const orderedByEachCustomer = async (_req: Request, res: Response) => {
  try {
    const order = await ordersService.orderedByEachCustomer();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
}

export const ordersWithCustomer = async (_req: Request, res: Response) => {
  try {
    const order = await ordersService.ordersWithCustomer();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch order" });
  }
}
