import { expect, test } from '@playwright/test'

test('first test', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    
    // stop for debugging
    // await page.pause()

    await expect(page).toHaveTitle(/Playwright/)

    // create a locator (CSS selector or text-based for more generic testing)
    const getStarted = page.locator('text=Get started').first()
    // test if the element has a specific attribute
    await expect(getStarted).toHaveAttribute('href', '/docs/intro')
    // it'll pause until the click event
    await getStarted.click()
    await expect(page.locator('text=Installation').first()).toBeVisible()

})