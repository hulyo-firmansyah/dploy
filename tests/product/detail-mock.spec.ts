import test, { expect } from "@playwright/test"

test("Product list on home should showing", async ({ page }) => {
	await page.goto("/")

	const products = page.locator("data-testid=productCard")
	const count = await products.count()

	expect(count).toBeCloseTo(6)

	for (let i = 0; i < count; i++) {
		await products.nth(i).locator(".title>a").click()
		// const textContent = (await products.nth(i).innerText()).trim().split("\n")
		// for (const text of textContent) {
		// 	expect(text.length).toBeGreaterThanOrEqual(1)
		// }
	}
})
