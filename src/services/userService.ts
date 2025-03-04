import { UserRepository } from "../repositories/userRepository";
import { IUser } from "../models/User";
import mongoose from "mongoose";

export class UserService {
  private userRepository = new UserRepository();

  async createUser(data: IUser): Promise<IUser> {
    return this.userRepository.createUser(data);
  }

  async getAllUsers(): Promise<IUser[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<IUser | null> {
    return this.userRepository.getUserById(id);
  }

  async updateBalance(senderId: string, receiverId: string, amount: number): Promise<any> {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const sender = await this.userRepository.getUserById(senderId);
      const receiver = await this.userRepository.getUserById(receiverId);

      if (!sender || !receiver) {
        throw new Error("User not found");
      }

      if (sender.balance < amount) {
        throw new Error("Insufficient balance");
      }

      const updateSenderBalance = await this.userRepository.updateBalance(senderId, -amount, session);
      if (!updateSenderBalance) {
        throw new Error("Failed to update sender balance");
      }
      
      const updateReceiverBalance = await this.userRepository.updateBalance(receiverId, amount, session);
      if (!updateReceiverBalance) {
        throw new Error("Failed to update receiver balance");
      }

      await session.commitTransaction();

      session.endSession();

      return {
        success: true,
        message: `Transferred $${amount} from ${senderId} to ${receiverId}`,
        senderBalance: updateSenderBalance.balance,
        receiverBalance: updateReceiverBalance.balance,
      };

    }
    catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  }
}
