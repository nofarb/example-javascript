module.exports = {
  collectCoverage: true, // Enable coverage collection
  coverageReporters: ['lcov', 'json', 'html'], // Generate LCOV, JSON, and HTML reports
  coverageDirectory: 'coverage', // Directory where the coverage reports will be saved
  testEnvironment: 'node', // Or 'jsdom' depending on your needs
};
