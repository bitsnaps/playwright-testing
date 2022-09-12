import { test, expect } from '@playwright/test'

test.describe.only('Wikipedia', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://grafikart.fr/tutoriels/cypress-993')
    })

    test('Show 1 comment', async ({ page }) => {
        // Mock a request server
        await page.route('**/api/comments*', route => route.fulfill({
            status: 200,
            body: '[{"id":46546,"username":"betaWeb","content":"Vraiment sympa cet outil","createdAt":1521116837,"parent":0,"userId":47855}]'
        }))
        await page.evaluate( () => window.scrollTo(0, document.body.scrollHeight))
        await expect(page.locator('.comments__title').first()).toHaveText(/1 commentaire/)
  })

})
