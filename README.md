# Node.js boilerplate using Fastify & TypeScript

![ci badge](https://github.com/yonathan06/fastify-typescript-boilerplate/workflows/CI/badge.svg)
[![Sync Vulnerabilities Status](https://app.snyk.io/test/github/yonathan06/fastify-typescript-boilerplate/badge.svg)](https://snyk.io/test/github/yonathan06/fastify-typescript-boilerplate)

Feel free to clone this repo, and use it for your own needs
I tried to keep it as lean as possible (you can notice there is no DB connection here)

## Included in the boilerplate

- TypeScript (with module alias)
- Development environment
- Tests (using Jest)
- Fastify
- File based routing (using fastify-now)
- Env vars config
- CI with github actions
- Docker image
- Linting

**BYODB - Bring your owns database** meaning no database connection included

## Set Up

- Install the dependencies.
  ​

```bash
npm install
```

- Start the server in development mode.
  ​

```bash
npm run dev
```

## File Based Routing

Using [fastify-now](https://github.com/yonathan06/fastify-now) for file based routing

## Env vars

Put your env vars on `{process.env.NODE_ENV}.env`
e.g. for development env vars use `development.env`, for production use `production.env`, and so on
Using `process.env.NODE_ENV` value for loading the env file

## Backend API Development

There are a number of handy commands you can run to help with development.
​
|Command | Action |
|---|---|
|`npm run dev` | Run the server in dev mode, automatically restarts on file change |
|`npm run build`| Compile TypeScript to JavaScript |
|`npm run start`| Start JavaScript from 'build' directory |
|`npm test`| Run unit tests |
|`npm run test:watch`| Run backend tests in watch mode, running on changed test files |
|`npm run lint`| Run eslint |
|`npm run lint:fix`| Run eslint in fix mode |

## CI

Run tests on push/PR to master
Check `.github/workflows/CI.yml`

## Docker

Build docker image AFTER executing `npm run build`
The docker image copies the `build` directory, so it has to be present

## Recommended Vscode Extensions

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Inspiration

This boilerplate is inspired by NearForm [COVID tracker backend](https://github.com/HSEIreland/covid-tracker-backend-api), built for Ireland Health Service.
