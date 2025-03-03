import mongoose from "mongoose";
import Order from "../models/Order";
import Database from "../config/database";
import dotenv from "dotenv";

dotenv.config();

const seedOrders = async () => {
  await Database.connect();

  const orders = [
    {
      orderId: "ORD001",
      customer: {
        customerId: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
        location: "New York, USA",
      },
      products: [
        { productId: "P001", name: "Laptop", category: "Electronics", price: 1200, quantity: 1 },
        { productId: "P002", name: "Mouse", category: "Electronics", price: 30, quantity: 2 },
      ],
      totalAmount: 1260,
      payment: { method: "Credit Card", status: "Paid" },
      shipping: { address: "123 Main St, NY", status: "Delivered" },
      orderDate: new Date("2024-02-15T10:00:00Z"),
      deliveryDate: new Date("2024-02-18T15:30:00Z"),
    },
    {
      orderId: "ORD002",
      customer: {
        customerId: 102,
        name: "John Doe",
        email: "john@example.com",
        location: "Los Angeles, USA",
      },
      products: [
        { productId: "P003", name: "Headphones", category: "Electronics", price: 100, quantity: 1 },
        { productId: "P004", name: "Backpack", category: "Fashion", price: 80, quantity: 1 },
      ],
      totalAmount: 180,
      payment: { method: "PayPal", status: "Paid" },
      shipping: { address: "456 Sunset Blvd, LA", status: "Shipped" },
      orderDate: new Date("2024-02-16T12:45:00Z"),
      deliveryDate: null,
    },
    {
      orderId: "XXXXXX",
      customer: {
        customerId: 103,
        name: "Emily Brown",
        email: "emily@example.com",
        location: "Chicago, USA",
      },
      products: [
        { productId: "XXXX", name: "Smartphone", category: "Electronics", price: 800, quantity: 1 },
        { productId: "XXXX", name: "Tablet", category: "Electronics", price: 400, quantity: 1 },
      ],
      totalAmount: 1200,
      payment: { method: "Credit Card", status: "Paid" },
      shipping: { address: "789 Oak St, Chicago", status: "In Transit" },
      orderDate: new Date("2024-02-17T09:30:00Z"),
      deliveryDate: null,
    },
  ];

  try {
    await Order.insertMany(orders);
    console.log("✅ Orders seeded successfully");
  } catch (error) {
    console.error("❌ Error seeding orders:", error);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
  }
};

seedOrders();
