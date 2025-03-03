import { IOrder } from "../models/Order";
import { IUser } from "../models/User";
import { OrdersRepository } from "../repositories/ordesRepository";

export class OrdersService {
  private ordersRepository = new OrdersRepository();

  async createOrders(data: IUser): Promise<IOrder> {
    return this.ordersRepository.createOrder(data);
  }

  async getAllOrders(): Promise<IOrder[]> {
    return this.ordersRepository.getAllOrders();
  }

  async getOrderById(id: string): Promise<IOrder | null> {
    return this.ordersRepository.getOrderById(id);
  }

  async getTotalRevenueByCategory(category: string): Promise<any> {
    return this.ordersRepository.getTotalRevenueByCategory(category);
  }
}
