import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: "./src/tests",
  snapshotDir: "./snapshots",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: 2,
  reporter: [
    ["dot"],
    ["html"],
    // [
    //   "json",
    //   { outputFile: "./playwright-report/test-result.json" },
    // ],
  ],

  use: {
    // launchOptions: {
    //   slowMo: 500,
    // },
    actionTimeout: 0,
    trace: "on-first-retry",
    video: "retain-on-failure",
    channel: "chrome",
    screenshot: "only-on-failure",
  },
  // testMatch: ["test", "spec"],

  projects: [
    {
      name: "chromium",
      use: {
        headless: false,
        ...devices["Desktop Chrome"],
      },
    },

    // {
    //   name: "firefox",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },

    // {
    //   name: "webkit",
    //   use: {
    //     ...devices["Desktop Safari"],
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: "./test-results/",

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;
