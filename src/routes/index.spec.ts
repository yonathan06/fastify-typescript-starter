import { FastifyInstance } from 'fastify';
import { createServer } from '../index';

describe('GET /', () => {
  let server: FastifyInstance;
  beforeAll(async () => {
    server = await createServer();
  });

  afterAll(async () => {
    await server.close();
  });

  it('Should return hello world', async () => {
    const response = await server.inject({
      method: 'GET',
      path: '/',
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ hello: 'world' });
  });
});
