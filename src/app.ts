import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middleware/error-handler.js";
import { collectionsRouter, looksRouter, productsRouter } from "./routes/catalog.routes.js";
import { healthRouter } from "./routes/health.routes.js";

export const app: Express = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.corsOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(null, false);
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: "100kb" }));

app.use("/api/health", healthRouter);
app.use("/api/products", productsRouter);
app.use("/api/collections", collectionsRouter);
app.use("/api/looks", looksRouter); // backward compat redirect
app.use(notFoundHandler);
app.use(errorHandler);
