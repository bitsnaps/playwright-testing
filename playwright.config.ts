import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 20 * 1000,
    retries: 1,
    use: {
      trace: 'on-first-retry' // trace only when a test fail
      // trace: 'retain-on-failure' // can be heavy
    },
    webServer: {
      command: 'http-server -p 5000 ./',
      url: 'http://127.0.0.1:5000/',
      reuseExistingServer: true,
      timeout: 2_000
    },
    projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
      ],
}

export default config
