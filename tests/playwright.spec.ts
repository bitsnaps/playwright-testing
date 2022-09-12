import { expect, test } from '@playwright/test'

test('first test', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    
    // await page.pause()

    await expect(page).toHaveTitle(/Playwright/)
})