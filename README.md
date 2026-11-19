# Business Platform

A reusable starter monorepo for a web-based business platform, with a Vite/React
frontend, a FastAPI backend, a relational database schema, integration adapters,
and deployment examples.

## Project layout

- `frontend/` — React + TypeScript web application.
- `backend/` — FastAPI application, configuration, database utilities, and tests.
- `database/` — SQL schema, migration, and seed-data locations.
- `integrations/` — Provider adapter boundaries for payments, delivery, and notifications.
- `storage/` — Local development storage locations; uploaded files are ignored by Git.
- `deployment/` — Dockerfiles, Nginx configuration, and helper scripts.
- `docs/` — Architecture and extension notes.
- `.vscode/extensions.json` — Recommended Microsoft extensions for this workspace.

## Local development

1. Copy `.env.example` to `.env` and set values appropriate for your environment.
   Never commit credentials.
2. Start the API:

   ```sh
   cd backend
   python -m venv .venv
   . .venv/bin/activate
   pip install -r requirements.txt
   uvicorn app.main:app --reload
   ```

3. In another terminal, start the frontend:

   ```sh
   cd frontend
   npm install
   npm run dev
   ```

The API is available at `http://localhost:8000`; its interactive API documentation
is at `/docs`. The frontend runs at `http://localhost:5173`.

## Docker

From this directory, run `docker compose up --build`. The compose setup starts the
API and frontend. It uses SQLite for a simple local start; configure `DATABASE_URL`
and add a database service when deploying with a server database.

## Extending the starter

- Add feature-specific API modules under `backend/app/routes/` and register them
  from `backend/app/main.py`.
- Keep request/response validation in `backend/app/schemas/` and business logic
  in `backend/app/services/`.
- Implement provider-specific behavior behind the interfaces in `integrations/`.
- Add schema changes as ordered files under `database/migrations/`.
- Keep secrets in environment variables or a deployment secret manager, never in
  source control.
