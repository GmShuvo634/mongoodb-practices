import mongoose from "mongoose";
import User, { IUser } from "../models/User";
import Database from "../config/database";

export class UserRepository {
    private dbConnection: mongoose.Connection;

    constructor() {
        this.dbConnection = Database.getConnection()!;
    }

    async createUser(data: IUser): Promise<IUser> {
        return await User.create(data);
    }

    async getAllUsers(): Promise<IUser[]> {
        return await User.find();
    }

    async getUserById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    }

    async updateBalance(
        id: string,
        amount: number,
        session: mongoose.ClientSession

    ): Promise<IUser | null> {
        return await User.findOneAndUpdate(
            { _id: id },
            { $inc: { balance: amount } },
            { new: true, session }
        );
    }

}

