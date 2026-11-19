# Architecture

The repository is split into independently evolvable frontend, API, database,
integration, and deployment areas.

## Request flow

The React application calls the FastAPI API through `VITE_API_BASE_URL`. API
routes validate transport-level input and delegate business operations to
services. Services own domain behavior and call database or integration adapters.
Provider credentials belong in environment configuration, not in frontend code.

## Extension points

- Use `backend/app/routes/` for HTTP endpoints.
- Use `backend/app/schemas/` for API payloads.
- Use `backend/app/services/` for business rules.
- Use `backend/app/models/` and `database/migrations/` for persisted data.
- Keep provider-specific API details under `integrations/`.
