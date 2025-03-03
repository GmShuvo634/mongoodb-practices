import mongoose from "mongoose";

class Database {
  private static instance: Database;
  private dbConnection: mongoose.Connection | null = null;

  private constructor() { }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  async connect(): Promise<void> {
    if (this.dbConnection) {
      console.log("⚡ Using existing database connection.");
      return;
    }

    try {
      const conn = await mongoose.connect(process.env.MONGO_URI as string, {
        minPoolSize: 5, // Minimum 5 connections in the pool
        maxPoolSize: 20, // Maximum 20 connections in the pool
      });

      this.dbConnection = conn.connection;
      console.log("✅ MongoDB Connected Successfully.");
    } catch (error) {
      console.error("❌ MongoDB Connection Error:", error);
      process.exit(1);
    }
  }

  getConnection(): mongoose.Connection | null {
    return this.dbConnection;
  }
}

export default Database.getInstance();
