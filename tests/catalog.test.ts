import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";
import { collections, products } from "../src/catalog.js";

const getProducts = (query = "") => request(app).get(`/api/products${query}`);

describe("GET /api/products", () => {
  it("returns the default featured page and exact pagination envelope", async () => {
    const response = await getProducts();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ items: products.slice(0, 9), page: 1, pageSize: 9, total: 9 });
  });

  it("filters category without case sensitivity", async () => {
    const response = await getProducts("?category=sherwani");
    expect(response.body.items.map((item: { category: string }) => item.category)).toEqual([
      "Sherwani",
    ]);
    expect(response.body.total).toBe(1);
  });

  it("searches case-insensitively across product text", async () => {
    const response = await getProducts("?q=SHERWANI");
    expect(response.body.items.map((item: { slug: string }) => item.slug)).toEqual(["royal-zardozi-sherwani"]);
  });

  it.each([
    ["price-asc", ["tussar-handloom-panjabi", "raw-silk-nehru-vest", "chanderi-silk-kurta"]],
    ["price-desc", ["royal-zardozi-sherwani", "embroidered-silk-lehenga", "banarasi-silk-saree"]],
    ["name-asc", ["banarasi-silk-saree", "embroidered-silk-lehenga", "tussar-handloom-panjabi"]],
  ])("sorts deterministically using %s", async (sort, expected) => {
    const response = await getProducts(`?sort=${sort}&pageSize=3`);
    expect(response.body.items.map((item: { slug: string }) => item.slug)).toEqual(expected);
  });

  it("paginates after filtering and sorting", async () => {
    const response = await getProducts("?sort=price-asc&page=2&pageSize=2");
    expect(response.body).toMatchObject({ page: 2, pageSize: 2, total: 9 });
    expect(response.body.items.map((item: { slug: string }) => item.slug)).toEqual([
      "chanderi-silk-kurta",
      "kashmiri-pashmina-shawl",
    ]);
  });

  it.each([
    "?page=0",
    "?page=101",
    "?page=1.5",
    "?pageSize=25",
    "?pageSize=0",
    "?sort=random",
    "?q=",
    `?q=${"x".repeat(121)}`,
    `?category=${"x".repeat(81)}`,
    "?unknown=yes",
  ])("rejects invalid query %s with stable JSON", async (query) => {
    const response = await getProducts(query);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: { code: "INVALID_QUERY", message: "Query parameters are invalid." } });
  });
});

describe("product detail", () => {
  it.each(["product-001", "royal-zardozi-sherwani"])("looks up by id or slug: %s", async (id) => {
    const response = await request(app).get(`/api/products/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.item).toEqual(products[0]);
  });

  it("returns the required not-found error shape", async () => {
    const response = await request(app).get("/api/products/missing");
    expect(response.status).toBe(404);
    expect(response.body.error).toMatchObject({ code: "NOT_FOUND", message: expect.any(String) });
  });
});

describe("GET /api/collections", () => {
  it("returns all nine editorial collections", async () => {
    const response = await request(app).get("/api/collections");
    expect(response.status).toBe(200);
    expect(response.body.items).toHaveLength(9);
    expect(response.body.total).toBe(9);
    expect(response.body.items[0]).toMatchObject({ id: "morning-edit", slug: "morning-edit", number: 1 });
    expect(response.body.items[8]).toMatchObject({ id: "clean-lines", slug: "clean-lines", number: 9 });
  });
});

describe("collection detail", () => {
  it("returns a matching collection by id or slug with populated products", async () => {
    const responseById = await request(app).get("/api/collections/morning-edit");
    expect(responseById.status).toBe(200);
    expect(responseById.body.collection).toMatchObject({
      id: "morning-edit",
      productIds: ["product-001", "product-003", "product-004"],
    });
    expect(responseById.body.products).toHaveLength(3);
    expect(responseById.body.collection.itemDots).toHaveLength(3);

    const responseByNum = await request(app).get("/api/collections/1");
    expect(responseByNum.status).toBe(200);
    expect(responseByNum.body.collection.id).toBe("morning-edit");
  });

  it("returns the required not-found error shape", async () => {
    const response = await request(app).get("/api/collections/missing");
    expect(response.status).toBe(404);
    expect(response.body.error).toMatchObject({ code: "NOT_FOUND", message: expect.any(String) });
  });
});

describe("unknown API routes", () => {
  it("preserves the existing not-found response", async () => {
    const response = await request(app).get("/api/unknown");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: { code: "not_found", message: "Route not found." } });
  });
});
