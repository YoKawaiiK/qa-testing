module.exports = {
  verbose: true,
  bail: true,
  preset: "jest-playwright-preset",
  testMatch: ["<rootDir>/playwright/tests/**/**+(spec|test).+(ts|js)",
  //  "**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"
  ],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  testTimeout: 20000,
  maxConcurrency: 2,
  maxWorkers: 2,
  
};
