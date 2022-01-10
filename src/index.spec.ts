import { createServer } from './index';
import tap from 'tap';

tap.only('Server', (t) => {
  t.plan(1);
  t.test('Should return server instance', async (t) => {
    const server = await createServer();
    t.match(typeof server, 'object');
    await server.close();
  });
});
