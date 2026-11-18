# E-commerce API

Node.js + Express + TypeScript API foundation. The app factory is kept separate from the server listener so routes can be tested without opening a port.

## Local development

```bash
corepack enable
pnpm install
cp .env.example .env
pnpm dev
```

The health route is `GET http://localhost:4000/api/health`. Run checks with `pnpm typecheck`, `pnpm test`, and `pnpm build`.

## Current structure

- `src/app.ts` — Express application, security middleware, CORS, and route mounting.
- `src/server.ts` — listener and graceful shutdown.
- `src/config/env.ts` — validated runtime settings.
- `src/routes/health.routes.ts` — readiness route.
- `src/middleware/error-handler.ts` — JSON not-found and safe error responses.
- `tests/health.test.ts` — API contract checks.

Supabase is not connected in this foundation step. Do not put real credentials in `.env.example`, source files, or commits. See the local-only `DESIGN.md` in the parent workspace for the intended architecture; it is intentionally ignored by Git.
