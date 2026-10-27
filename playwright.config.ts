import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:5719",
    trace: "retain-on-failure",
    ...devices["Desktop Chrome"],
  },
  webServer: {
    command: "cross-env TMPDIR=/tmp/reason-portfolio-1a36032f PORT=5719 npm run dev",
    url: "http://127.0.0.1:5719",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
