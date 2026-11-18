import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";
import { products } from "../src/catalog.js";

const getProducts = (query = "") => request(app).get(`/api/products${query}`);

describe("GET /api/products", () => {
  it("returns the default featured page and exact pagination envelope", async () => {
    const response = await getProducts();
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ items: products.slice(0, 9), page: 1, pageSize: 9, total: 9 });
  });

  it("filters category without case sensitivity", async () => {
    const response = await getProducts("?category=clothing");
    expect(response.body.items.map((item: { category: string }) => item.category)).toEqual(["Clothing", "Clothing", "Clothing"]);
    expect(response.body.total).toBe(3);
  });

  it("searches case-insensitively across product text", async () => {
    const response = await getProducts("?q=STRIPED");
    expect(response.body.items.map((item: { slug: string }) => item.slug)).toEqual(["striped-tshirt"]);
  });

  it.each([
    ["price-asc", ["canvas-tote", "striped-tshirt", "cotton-scarf"]],
    ["price-desc", ["table-lamp", "throw-blanket", "cotton-trousers"]],
    ["name-asc", ["canvas-tote", "ceramic-vase", "cotton-scarf"]],
  ])("sorts deterministically using %s", async (sort, expected) => {
    const response = await getProducts(`?sort=${sort}&pageSize=3`);
    expect(response.body.items.map((item: { slug: string }) => item.slug)).toEqual(expected);
  });

  it("paginates after filtering and sorting", async () => {
    const response = await getProducts("?category=Home&sort=price-asc&page=2&pageSize=1");
    expect(response.body).toMatchObject({ page: 2, pageSize: 1, total: 3 });
    expect(response.body.items.map((item: { slug: string }) => item.slug)).toEqual(["throw-blanket"]);
  });

  it.each(["?page=0", "?page=101", "?page=1.5", "?pageSize=25", "?pageSize=0", "?sort=random", "?q=", `?q=${"x".repeat(121)}`, `?category=${"x".repeat(81)}`, "?unknown=yes"])("rejects invalid query %s with stable JSON", async (query) => {
    const response = await getProducts(query);
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: { code: "INVALID_QUERY", message: "Query parameters are invalid." } });
  });
});

describe("product detail", () => {
  it.each(["product-001", "linen-shirt"])("looks up by id or slug: %s", async (id) => {
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

describe("look detail", () => {
  it("returns a matching look", async () => {
    const response = await request(app).get("/api/looks/weekend-edit");
    expect(response.status).toBe(200);
    expect(response.body.look).toMatchObject({ id: "weekend-edit", productIds: ["product-001", "product-002", "product-005"] });
  });

  it("returns the required not-found error shape", async () => {
    const response = await request(app).get("/api/looks/missing");
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
