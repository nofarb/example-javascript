import { defineConfig } from 'vitest/config';  // Import Vitest config

export default defineConfig({
  test: {
    include: ['app/**/*.test.js'],  // Path to test files
    coverage: {
      provider: 'v8',               // Using v8 coverage provider for modern JavaScript
      reporters: ['lcov', 'json', 'html'], // Output coverage formats
      reportDir: 'coverage',  // Directory for coverage reports
    },
  }
});
