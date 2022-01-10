import tap from 'tap';
import loadConfig from './config';

tap.test('Config', (t) => {
  loadConfig();
  t.end();
});
