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
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password456",
    },
    {
      name: "Sam Green",
      email: "sam@example.com",
      password: "password789",
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
