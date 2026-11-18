import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";

describe("Orders API", () => {
  it("creates a new order with valid payload", async () => {
    const payload = {
      items: [
        {
          productId: "product-001",
          name: "The Wool Overcoat",
          size: "M",
          quantity: 1,
          price: 285,
        },
      ],
      subtotal: 285,
      shipping: 0,
      total: 285,
      shippingName: "Jane Doe",
      shippingAddress: "123 Main St",
      shippingCity: "New York",
    };

    const res = await request(app).post("/api/orders").send(payload);
    expect(res.status).toBe(201);
    expect(res.body.order).toMatchObject({
      shippingName: "Jane Doe",
      subtotal: 285,
      total: 285,
      status: "pending",
    });
    expect(res.body.order.orderNumber).toMatch(/^ORD-/);
  });

  it("rejects order with invalid or missing items", async () => {
    const res = await request(app).post("/api/orders").send({
      items: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
      shippingName: "",
      shippingAddress: "",
      shippingCity: "",
    });
    expect(res.status).toBe(400);
    expect(res.body.error).toEqual({
      code: "INVALID_ORDER",
      message: "Order data is incomplete or invalid.",
    });
  });

  it("lists all orders for admin", async () => {
    const res = await request(app).get("/api/orders");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body.total).toBeGreaterThanOrEqual(1);
  });

  it("finds order by order number", async () => {
    const res = await request(app).get("/api/orders/ORD-94812");
    expect(res.status).toBe(200);
    expect(res.body.order.orderNumber).toBe("ORD-94812");
  });

  it("returns 404 for unknown order", async () => {
    const res = await request(app).get("/api/orders/non-existent");
    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe("NOT_FOUND");
  });
});
