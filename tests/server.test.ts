import { describe, expect, test } from 'vitest';
import server from '../src/server.js';

describe('Server', () => {
	test('Should return server instance', async () => {
		expect(typeof server).eq('object');
		await server.close();
	});
});
