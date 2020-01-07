module.exports = {
  verbose: true,
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/components/*/*.test.js', '<rootDir>/components/*/*/*.test.js', '<rootDir>/pages/*/*.test.js', '<rootDir>/__tests__/*.test.js'],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/public/']
};
