import { FastifyInstance } from 'fastify';
import { createServer } from '../index';
import tap from 'tap';

let server: FastifyInstance;
tap.test('GET /', (t) => {
  t.before(async () => {
    server = await createServer();
  });
  t.teardown(async () => {
    await server.close();
  });
  t.plan(1);
  t.test('Should return hello world', async (t) => {
    const response = await server.inject({
      method: 'GET',
      path: '/',
    });
    t.match(response.statusCode, 200);
    t.match(response.json(), { hello: 'world' });
  });
});
