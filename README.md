<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Todo API (NestJS + Postgres)

Simple CRUD backend for a To‑Do app exposing APIs only (no frontend). Includes pagination, filters, and Swagger docs.

### Tech
- NestJS 11
- TypeORM + Postgres
- Swagger

### Run locally (one command)
1) Create a `.env` from the example:
```bash
cp .env.example .env
```
2) Install deps and start DB + API in watch mode:
```bash
npm install
npm run dev
```

Services started:
- API: `http://localhost:3000`
- Swagger UI: `http://localhost:3000/api`
- Postgres (Docker): `localhost:5433`

To stop the DB container:
```bash
npm run db:down
```

### Environment
See `.env.example`. Defaults match `docker-compose.yml`.

### Swagger
Open `http://localhost:3000/api` to explore and test all endpoints.

### Endpoints
- POST `/tasks` – Create task
- GET `/tasks` – List tasks with pagination and filters (`page`, `limit`, `status`, `priority`, `search`, `isActive`)
- GET `/tasks/:id` – Fetch one task
- PATCH `/tasks/:id` – Update task (status, priority, details, etc.)
- DELETE `/tasks/:id` – Delete task

### Status and Priority Options
- Status: `Pending`, `Done`, `In Progress`, `Paused`
- Priority: `Red` (High), `Yellow` (Medium), `Blue` (Normal)

### Notes
- CORS is enabled for easy testing from any frontend client.
- TypeORM `synchronize` is enabled for assignment/demo convenience.
