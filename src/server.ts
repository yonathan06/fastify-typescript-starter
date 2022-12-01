import path from "node:path";
import { URL } from "node:url";
import fastify from 'fastify';
import config from './plugins/config.js';
import now from 'fastify-now';

const server = fastify({
  ajv: {
    customOptions: {
      removeAdditional: "all",
      coerceTypes: true,
      useDefaults: true,
    }
  },
  logger: {
    level: process.env.LOG_LEVEL,
  },
});

await server.register(config);
await server.register(now, {
  routesFolder: new URL(path.join(import.meta.url, "../routes")).pathname,
});
await server.ready();

export default server;
