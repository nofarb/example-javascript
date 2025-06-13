import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['app/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporters: ['text', 'json', 'html', 'lcov'],
      reportDir: 'coverage'
    },
    reporters: [
      'default',
      ['junit', { outputFile: 'junit.xml' }]
    ]
  }
})
