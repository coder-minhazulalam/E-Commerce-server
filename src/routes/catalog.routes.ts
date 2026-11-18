import { Router, type Router as ExpressRouter } from "express";
import { z } from "zod";
import { looks, products, type Product } from "../catalog.js";

export const catalogRouter: ExpressRouter = Router();

const querySchema = z.object({
  category: z.string().trim().min(1).max(80).optional(),
  q: z.string().trim().min(1).max(120).optional(),
  sort: z.enum(["featured", "price-asc", "price-desc", "name-asc"]).default("featured"),
  page: z.string().regex(/^[1-9]\d*$/).optional().transform((value) => value === undefined ? 1 : Number(value)).pipe(z.number().int().min(1).max(100)),
  pageSize: z.string().regex(/^[1-9]\d*$/).optional().transform((value) => value === undefined ? 9 : Number(value)).pipe(z.number().int().min(1).max(24)),
}).strict();

function badQuery(response: Parameters<Parameters<typeof catalogRouter.get>[1]>[1]) {
  response.status(400).json({ error: { code: "INVALID_QUERY", message: "Query parameters are invalid." } });
}

catalogRouter.get("/products", (request, response) => {
  const parsed = querySchema.safeParse(request.query);
  if (!parsed.success) {
    badQuery(response);
    return;
  }
  const { category, q, sort, page, pageSize } = parsed.data;
  let filtered = products.filter((product) =>
    (!category || product.category.toLowerCase() === category.toLowerCase()) &&
    (!q || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(q.toLowerCase())),
  );
  const byName = (a: Product, b: Product) => a.name.localeCompare(b.name) || a.id.localeCompare(b.id);
  if (sort === "price-asc") filtered = filtered.sort((a, b) => a.price - b.price || byName(a, b));
  else if (sort === "price-desc") filtered = filtered.sort((a, b) => b.price - a.price || byName(a, b));
  else if (sort === "name-asc") filtered = filtered.sort(byName);
  const total = filtered.length;
  const start = (page - 1) * pageSize;
  response.status(200).json({ items: filtered.slice(start, start + pageSize), page, pageSize, total });
});

catalogRouter.get("/products/:productId", (request, response) => {
  const item = products.find(({ id, slug }) => id === request.params.productId || slug === request.params.productId);
  if (!item) {
    response.status(404).json({ error: { code: "NOT_FOUND", message: "Product not found." } });
    return;
  }
  response.status(200).json({ item });
});

export const looksRouter: ExpressRouter = Router();
looksRouter.get("/:lookId", (request, response) => {
  const look = looks.find(({ id }) => id === request.params.lookId);
  if (!look) {
    response.status(404).json({ error: { code: "NOT_FOUND", message: "Look not found." } });
    return;
  }
  response.status(200).json({ look });
});
