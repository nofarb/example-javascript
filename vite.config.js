import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',  // Use the V8 coverage provider
      reporters: ['text', 'json', 'html', 'lcov'],  // Added 'html' and 'lcov' for HTML report
      reportDir: 'coverage',  // Specify the output directory for coverage reports
    },
  },
})
