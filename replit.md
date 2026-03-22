# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── ev-showroom/        # React + Vite EV showroom frontend
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Application: EV Showroom (Siva Motors)

A full-stack EV showroom website for **Siva Motors** — a real electric vehicle dealership in Vinukonda, Andhra Pradesh. Showcases electric scooters from **Eko Tejas** and **Venumotors** with INR (₹) pricing, real showroom photos, bike detail pages, and a contact/test-ride booking form.

- **Home page** (`/`) — Hero banner, featured bikes, categories, selling points
- **Catalog page** (`/catalog`) — All bikes with brand filter + price range filter
- **Bike detail page** (`/bikes/:id`) — Full specs, gallery, features, description for each model
- **Contact page** (`/contact`) — Test ride booking / inquiry form (saves to DB)

### Current Models (11 total)

**Eko Tejas (category_id=4):**
- Axel (ID=9), Axel Pro (ID=10), Jatayu (ID=15), Shero Neo (ID=16), Priv Mini (ID=17), Astra (ID=18), Max (ID=19)

**Venumotors (category_id=5):**
- Spot (ID=11), Thunder (ID=12), Icon (ID=13), E-Fly (ID=14)

### Reseed data

```bash
pnpm --filter @workspace/scripts run seed
```

### Run codegen (after OpenAPI spec changes)

```bash
pnpm --filter @workspace/api-spec run codegen
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/ev-showroom` (`@workspace/ev-showroom`)

React + Vite frontend. Pages: Home, Catalog, Bike Detail, Contact. Uses generated React Query hooks from `@workspace/api-client-react`.

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes:
  - `GET /api/healthz` — Health check
  - `GET /api/categories` — List all bike categories
  - `GET /api/bikes` — List bikes (filters: categoryId, minPrice, maxPrice, featured)
  - `GET /api/bikes/:id` — Get a single bike
  - `POST /api/inquiries` — Create a contact/test-ride inquiry
- Depends on: `@workspace/db`, `@workspace/api-zod`

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/schema/categories.ts` — Categories table
- `src/schema/bikes.ts` — Bikes table (FK to categories)
- `src/schema/inquiries.ts` — Inquiries table (FK to bikes, optional)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec. Used by `api-server` for response/request validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec.

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`.

- `seed.ts` — Seeds categories and 11 Siva Motors EV scooter models into the database
