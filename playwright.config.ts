import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 20000,
    projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
      ],
}

export default config
