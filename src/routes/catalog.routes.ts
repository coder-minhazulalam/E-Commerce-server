import { Router, type Router as ExpressRouter } from "express";
import { z } from "zod";
import { collections, products, type Product } from "../catalog.js";

// ── Products router ──────────────────────────────────────────────────────────
export const productsRouter: ExpressRouter = Router();

const querySchema = z.object({
  category: z.string().trim().min(1).max(80).optional(),
  q: z.string().trim().min(1).max(120).optional(),
  sort: z.enum(["featured", "price-asc", "price-desc", "name-asc"]).default("featured"),
  featured: z.enum(["true"]).optional(),
  page: z
    .string()
    .regex(/^[1-9]\d*$/)
    .optional()
    .transform((v) => (v === undefined ? 1 : Number(v)))
    .pipe(z.number().int().min(1).max(100)),
  pageSize: z
    .string()
    .regex(/^[1-9]\d*$/)
    .optional()
    .transform((v) => (v === undefined ? 9 : Number(v)))
    .pipe(z.number().int().min(1).max(24)),
}).strict();

function badQuery(res: Parameters<Parameters<typeof productsRouter.get>[1]>[1]) {
  res.status(400).json({ error: { code: "INVALID_QUERY", message: "Query parameters are invalid." } });
}

productsRouter.get("/", (req, res) => {
  const parsed = querySchema.safeParse(req.query);
  if (!parsed.success) { badQuery(res); return; }

  const { category, q, sort, featured, page, pageSize } = parsed.data;
  let filtered = products.filter((p) =>
    (!category || p.category.toLowerCase() === category.toLowerCase()) &&
    (!q || `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q.toLowerCase())) &&
    (!featured || p.featured === true),
  );

  const byName = (a: Product, b: Product) => a.name.localeCompare(b.name) || a.id.localeCompare(b.id);
  if (sort === "price-asc") filtered = filtered.sort((a, b) => a.price - b.price || byName(a, b));
  else if (sort === "price-desc") filtered = filtered.sort((a, b) => b.price - a.price || byName(a, b));
  else if (sort === "name-asc") filtered = filtered.sort(byName);

  const total = filtered.length;
  const start = (page - 1) * pageSize;
  res.status(200).json({ items: filtered.slice(start, start + pageSize), page, pageSize, total });
});

productsRouter.get("/:productId", (req, res) => {
  const item = products.find(({ id, slug }) =>
    id === req.params.productId || slug === req.params.productId,
  );
  if (!item) {
    res.status(404).json({ error: { code: "NOT_FOUND", message: "Product not found." } });
    return;
  }
  res.status(200).json({ item });
});

// ── Collections router ───────────────────────────────────────────────────────
export const collectionsRouter: ExpressRouter = Router();

collectionsRouter.get("/", (_req, res) => {
  res.status(200).json({ items: collections, total: collections.length });
});

collectionsRouter.get("/:slug", (req, res) => {
  const param = req.params.slug.toLowerCase();
  const collection = collections.find(
    ({ id, slug, number }) =>
      id.toLowerCase() === param ||
      slug.toLowerCase() === param ||
      String(number) === param,
  );
  if (!collection) {
    res.status(404).json({ error: { code: "NOT_FOUND", message: "Collection not found." } });
    return;
  }
  const collectionProducts = products.filter((p) => collection.productIds.includes(p.id));
  res.status(200).json({ collection, products: collectionProducts });
});

// Legacy alias: /api/looks → /api/collections (backward compat)
export const looksRouter: ExpressRouter = Router();
looksRouter.get("/", (_req, res) => res.redirect("/api/collections"));
looksRouter.get("/:id", (req, res) => res.redirect(`/api/collections/${req.params.id}`));

// Legacy alias: /api/products (catalogRouter was the old name)
export const catalogRouter = productsRouter;
