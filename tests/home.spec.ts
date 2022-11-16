import { test, expect } from "@playwright/test"

test("Should navigate to Home", async ({ page }) => {
	await page.goto("http://localhost:3000/")

	await expect(page).toHaveTitle(/Create Next App/gi)

	const textBanner = await page.locator("#welcome").textContent()
	expect(textBanner).toBe("Welcome to Next.js!")
})
