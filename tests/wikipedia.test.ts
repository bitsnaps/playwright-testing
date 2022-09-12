import { test, expect } from '@playwright/test'

// only() allows to execute only this test
test.describe/*.only*/('Wikipedia', () => {

    test.beforeEach(async ({ page }) => {
        // Go to https://www.wikipedia.org/
        await page.goto('https://www.wikipedia.org/')
        await page.locator('strong:has-text("Français")').click()
    })

    test/*.only*/('Find TypeScript page in french', async ({ page }) => {
        test.slow() // Easy way to triple the default timeout
        await page.locator('[placeholder="Rechercher sur Wikipédia"]').click()
        await page.keyboard.type('typescript')
        await expect(page.locator('#cdx-typeahead-search-menu-0')).toBeVisible()
        // await expect(page.locator('#cdx-menu-item-23')).toBeVisible()
        await page.keyboard.press('Enter')
        // await page.pause() // used with: npx playwright test --headed
        await expect(page.locator('h1').first()).toHaveText(/TypeScript/)    
  })

})
