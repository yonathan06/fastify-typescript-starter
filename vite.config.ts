import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      // reportsDirectory: './tests/coverage',
      provider: 'c8',
      // reporter: ['text', 'json', 'html'],
    },
  },
})
