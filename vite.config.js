import { defineConfig } from 'vitest/config';  // Import Vitest config

export default defineConfig({
  test: {
    include: ['app/**/*.test.js'], 
    coverage: {
      provider: 'v8',               
      reporters: ['lcov', 'json', 'html'], 
      reportDir: 'coverage',
    },
  }
});
