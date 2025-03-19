module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Set the output directory for coverage reports
  coverageReporters: ['json', 'lcov', 'text', 'html'], // Specify formats for coverage reports
};
