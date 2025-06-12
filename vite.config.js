import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporters: ['text', 'json', 'html', 'lcov'],
      reportDir: 'coverage',
    },
    reporters: [
      'default',
      ['junit', { outputFile: 'junit.xml' }]
    ]
  },
})
