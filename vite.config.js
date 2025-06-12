import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporters: ['text', 'json', 'html', 'lcov'],
      reportDir: 'coverage',
    },
    reporters: [
      'default',
      ['vitest-junit-reporter', { outputFile: 'junit.xml' }]
    ]
  },
})
