import mongoose, { Schema, Document } from "mongoose";

interface IProduct {
  productId: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

interface IPayment {
  method: string;
  status: string;
}

interface IShipping {
  address: string;
  status: string;
}

interface ICustomer {
  customerId: number;
  name: string;
  email: string;
  location: string;
}

export interface IOrder extends Document {
  orderId: string;
  customer: ICustomer;
  products: IProduct[];
  totalAmount: number;
  payment: IPayment;
  shipping: IShipping;
  orderDate: Date;
  deliveryDate: Date | null;
}

const productSchema = new Schema<IProduct>({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const paymentSchema = new Schema<IPayment>({
  method: { type: String, required: true },
  status: { type: String, required: true },
});

const shippingSchema = new Schema<IShipping>({
  address: { type: String, required: true },
  status: { type: String, required: true },
});

const customerSchema = new Schema<ICustomer>({
  customerId: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
});

const orderSchema = new Schema<IOrder>({
  orderId: { type: String, required: true },
  customer: { type: customerSchema, required: true },
  products: { type: [productSchema], required: true },
  totalAmount: { type: Number, required: true },
  payment: { type: paymentSchema, required: true },
  shipping: { type: shippingSchema, required: true },
  orderDate: { type: Date, required: true },
  deliveryDate: { type: Date, default: null },
});

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;
