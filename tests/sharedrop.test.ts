import { expect, test } from '@playwright/test'
import { readFileSync } from 'fs'

test.describe.only('Sharedrop.io', () => {

    test('Should share a file', async ({ page, browser }) => {
        const page2 = await browser.newPage()

        await page2.goto('https://www.sharedrop.io/rooms/playwright-testing')
        await page.goto('https://www.sharedrop.io/rooms/playwright-testing')
        await page.bringToFront()


        await expect(page.locator('.user.you .avatar')).toBeVisible()
        // await page.pause()

        const avatar = page.locator('.user.others .avatar')

        const [filechooser] = await Promise.all([
            page.waitForEvent('filechooser'),
            avatar.click()
        ])

        filechooser.setFiles('demo.md')
        await page.locator('.user.others button', { hasText: 'Send' }).click()

        const [download] = await Promise.all([
            page2.waitForEvent('download'),
            page2.locator('.user.others button', { hasText: 'Save'}).click()
        ])

        expect(readFileSync(await download.path(), { encoding: 'utf8'})).toContain('hi')

    })
})