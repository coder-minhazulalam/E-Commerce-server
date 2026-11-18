import { app } from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.port, "0.0.0.0", () => {
  console.info(`E-commerce API listening on port ${env.port}`);
});

function shutdown(signal: string) {
  console.info(`${signal} received; closing API server.`);
  server.close((error) => {
    if (error) {
      console.error("Error while closing the API server.", error);
      process.exitCode = 1;
    }
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
