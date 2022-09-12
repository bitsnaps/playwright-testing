import { test, expect } from '@playwright/test'

test.describe/*.only*/('Snapshot on localhost', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://127.0.0.1:5000/')
    })

    test('Find a button', async ({ page }) => {
        // await expect(page.locator('button')).toHaveText('Save')
        expect(await page.screenshot()).toMatchSnapshot('button.png')
  })

})
