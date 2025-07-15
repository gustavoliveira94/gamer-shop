const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/src/configs/tests/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^nuqs/server$': '<rootDir>/__mocks__/nuqs.ts',
  },
}

module.exports = createJestConfig(customJestConfig)
