import mongoose from "mongoose";
import User, { IUser } from "../models/User";
import Database from "../config/database";
import dotenv from "dotenv";

dotenv.config();

const seedUsers = async () => {

  await Database.connect();

  const users = [
    {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      balance: 3000,
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password456",
      balance: 7000,
    },
    {
      name: "Sam Green",
      email: "sam@example.com",
      password: "password789",
      balance: 4000,
    },
  ];

  try {
    await User.insertMany(users);
    console.log("✅ Users seeded successfully");
  } catch (error) {
    console.error("❌ Error seeding users:", error);
  } finally {
    mongoose.connection.close();  // Close the connection after seeding
  }
};

seedUsers();
