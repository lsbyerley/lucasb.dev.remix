import { expect, test } from '#tests/playwright-utils.ts'

test('Test home page loads properly', async ({ page }) => {
	const pageUrl = '/'
	const res = await page.goto(pageUrl)

	expect(res?.status()).toBe(200)
	await expect(page).toHaveScreenshot({ fullPage: true });
	// await expect(page.getByText(/Lucas Byerley/i)).toBeVisible()
})