
module.exports = {
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    "^.+\\.svg$": "<rootDir>/svgMock.js"
}
}
