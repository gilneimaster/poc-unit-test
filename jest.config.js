const { pathsToModuleNameMapper } = require('ts-jest');
const { paths } = require('./tsconfig.json').compilerOptions;

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'jest-preset-angular',
  verbose: true,
  globalSetup: 'jest-preset-angular/global-setup',
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-jest.ts'
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
    tslib: 'tslib/tslib.es6.js',
  },
  transform: { '^.+.(ts|mjs|js|html)$': 'jest-preset-angular' },
  transformIgnorePatterns: [
    '/node_modules/(?!(lodash-es|tslib/tslib\.es6\.js|jest-preset-angular|ngx-drag-scroll|dayjs))'
  ],
  moduleFileExtensions: ["mjs", "js", "jsx", "ts", "tsx", "json", "node"],
  roots: [
    "<rootDir>",
  ],
  modulePaths: [
    "<rootDir>",
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  reporters: [
    "default",
    ["jest-junit", { outputFile: 'testresults/junit/unit-test-result.xml' }]
  ],
  coverageReporters: [
    'html',
    ['cobertura', { file: 'code-coverage.xml' }],
    ['lcovonly', { subdir: '.' }]
  ]
};
