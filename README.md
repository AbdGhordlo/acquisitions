# Acquisitions API

<p align="center">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
</p>

## Overview

Acquisitions is a Node.js API built to practice DevOps and modern backend development workflows. It demonstrates:

- Version control using Git and GitHub
- CI/CD pipeline automation with GitHub Actions
- Containerization with Docker and Docker Compose
- Multi-stage Docker image builds for development and production
- Application scaffolding using Express, JWT auth, logging, validation, and ORM
- Testing, linting, and formatting for quality assurance

> The repository is container-ready and suitable for further Kubernetes and Infrastructure-as-Code (IaC) practice.

## Technologies Used

- Git & GitHub
- GitHub Actions
- Docker
- Docker Compose
- Node.js 18
- Express.js
- Drizzle ORM
- Neon / PostgreSQL
- JWT authentication
- Helmet, CORS, Morgan, Winston
- ESLint, Prettier
- Jest, Supertest
- dotenv
- bcrypt
- Zod

## Project Structure

- `src/` — application source code
  - `config/` — configuration modules
  - `controllers/` — request handlers
  - `middleware/` — Express middleware
  - `models/` — database models
  - `routes/` — API routes
  - `services/` — business logic
  - `utils/` — helper utilities
  - `validations/` — request schema validation
- `.github/workflows/` — CI/CD workflows
- `Dockerfile` — multi-stage Docker image build
- `docker-compose.dev.yml` — local development compose setup
- `docker-compose.prod.yml` — production compose configuration
- `package.json` — scripts and dependencies

## Getting Started

### Prerequisites

- Docker
- Docker Compose
- Node.js 18 or newer (for local development)
- Git

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The API listens on port `3000` by default.

## Docker Development

Use the development compose setup to run the API with live code mounting and Neon Local support:

```bash
docker compose -f docker-compose.dev.yml up --build
```

This launches:

- `acquisitions-neon-local` for local Neon/PostgreSQL support
- `acquisitions-app-dev` for the application with hot reload

## Docker Production

Build and run the production container:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

The production stack is configured for:

- optimized image build
- resource limits
- container health checks
- logs mounted to `./logs`

## CI/CD Workflows

The repository includes GitHub Actions workflows for:

- `lint-and-format.yml` — checks ESLint and Prettier
- `tests.yml` — runs unit/integration tests via Jest
- `docker-build-and-push.yml` — builds and pushes Docker images to Docker Hub

## Scripts

Key NPM scripts:

- `npm run dev` — start local development server
- `npm start` — run production server
- `npm run lint` — lint codebase
- `npm run lint:fix` — fix lint issues
- `npm run format` — format code
- `npm run format:check` — verify formatting
- `npm run test` — run Jest tests
- `npm run db:migrate` — run database migrations
- `npm run db:studio` — open Drizzle Studio
- `npm run dev:docker` — start development Docker setup
- `npm run prod:docker` — start production Docker setup

## Notes

- The current repository uses Docker and GitHub Actions as the main DevOps automation tools.
- Kubernetes and IaC are part of the intended learning scope and can be added on top of this containerized workflow.

## License

This project is available under the ISC License.
