import { Router, type Router as ExpressRouter } from "express";
import { z } from "zod";

export const ordersRouter: ExpressRouter = Router();

export interface ServerOrder {
  id: string;
  orderNumber: string;
  items: Array<{
    productId: string;
    name: string;
    size: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  shipping: number;
  total: number;
  shippingName: string;
  shippingAddress: string;
  shippingCity: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: string;
}

const memoryOrders: ServerOrder[] = [
  {
    id: "ord-1",
    orderNumber: "ORD-94812",
    items: [{ productId: "product-001", name: "The Wool Overcoat", size: "M", quantity: 1, price: 285 }],
    subtotal: 285,
    shipping: 0,
    total: 285,
    shippingName: "Mara T.",
    shippingAddress: "Birger Jarlsgatan 124",
    shippingCity: "Stockholm",
    status: "processing",
    createdAt: new Date().toISOString(),
  },
];

const orderSchema = z.object({
  orderNumber: z.string().optional(),
  items: z.array(
    z.object({
      productId: z.string(),
      name: z.string(),
      size: z.string(),
      quantity: z.number().int().positive(),
      price: z.number().nonnegative(),
    }),
  ).min(1),
  subtotal: z.number().nonnegative(),
  shipping: z.number().nonnegative(),
  total: z.number().nonnegative(),
  shippingName: z.string().min(1),
  shippingAddress: z.string().min(1),
  shippingCity: z.string().min(1),
});

ordersRouter.post("/", (req, res) => {
  const parsed = orderSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: { code: "INVALID_ORDER", message: "Order data is incomplete or invalid." } });
    return;
  }

  const { items, subtotal, shipping, total, shippingName, shippingAddress, shippingCity } = parsed.data;
  const orderNumber = parsed.data.orderNumber || `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  const newOrder: ServerOrder = {
    id: `ord-${Date.now()}`,
    orderNumber,
    items,
    subtotal,
    shipping,
    total,
    shippingName,
    shippingAddress,
    shippingCity,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  memoryOrders.unshift(newOrder);
  res.status(201).json({ order: newOrder });
});

ordersRouter.get("/", (_req, res) => {
  res.status(200).json({ items: memoryOrders, total: memoryOrders.length });
});

ordersRouter.get("/:orderId", (req, res) => {
  const param = req.params.orderId.toLowerCase();
  const order = memoryOrders.find(
    (o) => o.id.toLowerCase() === param || o.orderNumber.toLowerCase() === param,
  );
  if (!order) {
    res.status(404).json({ error: { code: "NOT_FOUND", message: "Order not found." } });
    return;
  }
  res.status(200).json({ order });
});
