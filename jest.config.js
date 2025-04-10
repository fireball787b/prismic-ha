/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  // Use jsdom environment for React components
  testEnvironment: "jest-environment-jsdom",

  // Instruct Jest how to handle .ts/.tsx files
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // Optionally ignore transformations in node_modules except specific packages
  transformIgnorePatterns: ["/node_modules/"],

  // If needed, mock out CSS or image imports so they don't break tests
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
  },

  // Automatically run this setup file after Jest environment is set up
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },

  // Where to look for tests. By default, Jest runs .test or .spec files
  testMatch: ["**/*.test.(ts|tsx)"],
};
