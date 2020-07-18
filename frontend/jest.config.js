module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'jest.tsconfig.json',
      babelConfig: true
    }
  }
};