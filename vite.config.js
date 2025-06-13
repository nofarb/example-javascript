import { defineConfig } from 'vitest/config';  // Import Vitest config

export default defineConfig({
  test: {
    include: ['app/**/*.test.js'],  // Path to test files
    coverage: {
      provider: 'v8',               // Using v8 coverage provider for modern JavaScript
      reporters: ['lcov', 'text', 'json', 'html', 'cobertura'], // Output coverage formats
      reportDir: 'coverage/lcov-report',  // Directory for coverage reports
    },
  }
});
