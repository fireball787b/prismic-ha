/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: "jest-environment-jsdom",

    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },

    transformIgnorePatterns: ["/node_modules/"],

    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1", // 👈 updated to match /src structure
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js",
    },

    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    testMatch: ["**/*.test.(ts|tsx)"],
};
