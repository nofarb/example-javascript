import { defineConfig } from 'vitest/config'
import { defineConfig } from "vite";


export default defineConfig({
  test: {
    include: ['app/**/*.test.js'],
    coverage: {
      provider: 'v8',
      reporters: ['lcov', 'text', 'json', 'html', 'cobertura'],
      reportDir: 'coverage'
    }
  }
})

