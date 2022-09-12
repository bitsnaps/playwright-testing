import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 20_000,
    retries: 1,
    use: {
      trace: 'on-first-retry' // trace only when a test fail
      // trace: 'retain-on-failure' // can be heavy
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
