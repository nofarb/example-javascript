import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',  // Use V8 as the coverage provider
      reporters: ['text', 'json', 'html', 'lcov'],  // Include 'html' and 'lcov' for HTML and LCOV reports
      reportDir: 'coverage',  // Optional: specify the directory for coverage reports
    },
  },
})
