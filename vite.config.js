import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['app/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporters: ['lcov', 'text', 'json', 'html'],
      reportDir: 'coverage'
    }
  }
})
