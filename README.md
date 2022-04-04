# Node.js boilerplate using Fastify & TypeScript

![ci badge](https://github.com/yonathan06/fastify-typescript-boilerplate/workflows/CI/badge.svg)
[![Sync Vulnerabilities Status](https://app.snyk.io/test/github/yonathan06/fastify-typescript-boilerplate/badge.svg)](https://snyk.io/test/github/yonathan06/fastify-typescript-boilerplate)

Feel free to clone this repo, and use it for your own needs
I tried to keep it as lean as possible (you can notice there is no DB connection here)

## Included in the boilerplate

- TypeScript (using esbuild for fast compilation)
- Env vars
- Tests (using Tap)
- Fastify
- File based routing (using fastify-now)
- CI with github actions
- Docker image
- Linting

**BYODB - Bring your owns database** meaning no database connection included

## Set Up

- Install the dependencies.

```bash
pnpm install
```

or npm/yarn

- Start the server in development mode.

```bash
pnpm dev
```

or npm/yarn

## File Based Routing

Using [fastify-now](https://github.com/yonathan06/fastify-now) for file based routing

## Env vars

Loaded from `.env` file, with schema validation

## Backend API Development

There are a number of handy commands you can run to help with development.

|Command | Action |
|---|---|
|`pnpm run dev` | Run the server in dev mode, automatically restarts on file change |
|`pnpm build`| Compile TypeScript to JavaScript |
|`pnpm start`| Start JavaScript from 'build' directory |
|`pnpm test`| Run unit tests |
|`pnpm test:watch`| Run backend tests in watch mode, running on changed test files |
|`pnpm lint`| Run eslint |
|`pnpm lint:fix`| Run eslint in fix mode |

## CI

Run tests on push/PR to master
Check `.github/workflows/CI.yml`

## Docker

Build docker image AFTER executing `npm run build`
The docker image copies the `build` directory, so it has to be present

## Recommended Vscode Extensions

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
