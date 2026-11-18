import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().min(1024).max(65535).default(4000),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  throw new Error(`Invalid server environment: ${result.error.message}`);
}

export const env = {
  port: result.data.PORT,
  corsOrigins: result.data.CORS_ORIGIN.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
};
