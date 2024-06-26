import { expect, test } from '#tests/playwright-utils.ts'

test('Test home page loads properly', async ({ page }) => {
	const pageUrl = '/'
	const res = await page.goto(pageUrl)

	expect(res?.status()).toBe(200);

	// TODO: screenshot differs in pipeline
	// await expect(page).toHaveScreenshot({ fullPage: true });
})