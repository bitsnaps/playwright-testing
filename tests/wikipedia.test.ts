import { test, expect } from '@playwright/test'

// only() allows to execute only this test
test.describe/*.only*/('Wikipedia', () => {

    test.beforeEach(async ({ page }) => {
        // Go to https://www.wikipedia.org/
        await page.goto('https://www.wikipedia.org/')
        await page.locator('strong:has-text("Français")').click()
    })

    test.only('Find TypeScript page in french', async ({ page }) => {
        await page.locator('[placeholder="Rechercher sur Wikipédia"]').click()
        await page.keyboard.type('typescript')
        await expect(page.locator('#cdx-typeahead-search-menu-0')).toBeVisible()
        await page.keyboard.press('Enter')
        // await page.pause()
        await expect(page.locator('h1').first()).toHaveText(/TypeScript/)    
  })

})
