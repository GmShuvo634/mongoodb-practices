import { UserRepository } from "../repositories/userRepository";
import { IUser } from "../models/User";

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
}
