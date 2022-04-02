import server from './index.js';
import tap from 'tap';

tap.only('Server', (t) => {
  t.plan(1);
  t.test('Should return server instance', async (t) => {
    t.match(typeof server, 'object');
    await server.close();
  });
});
