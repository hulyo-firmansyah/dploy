import test, { expect } from "@playwright/test"

test("Product list on home should showing", async ({ page }) => {
	await page.goto("/")

	const products = page.locator("data-testid=productCard")
	const count = await products.count()

	expect(count).toBeCloseTo(6)

	for (let i = 0; i < count; i++) {
		await page.goto("/")

		const titleHandle = page.locator(".product-title").nth(i)
		const priceHandle = page.locator(".product-price").nth(i)
		const ratingHandle = page.locator(".product-rating").nth(i)
		const ratingCountHandle = page.locator(".product-rating-count").nth(i)

		const title = await titleHandle.textContent()
		const price = await priceHandle.textContent()
		const rating = await ratingHandle.textContent()
		const ratingCount = await ratingCountHandle.textContent()

		console.group(title + "|home")
		console.log("title:", title, " | lenght: ", title?.length)
		console.log("price:", price, " | lenght: ", price?.length)
		console.log("rating:", rating, " | lenght: ", rating?.length)
		console.log("ratingCount:", ratingCount, " | lenght: ", ratingCount?.length)
		console.groupEnd()

		expect(title).not.toBeNull()
		expect(price).not.toBeNull()
		expect(rating).not.toBeNull()
		expect(ratingCount).not.toBeNull()
		expect(title?.length).toBeGreaterThanOrEqual(1)
		expect(price?.length).toBeGreaterThanOrEqual(1)
		expect(rating?.length).toBeGreaterThanOrEqual(1)
		expect(ratingCount?.length).toBeGreaterThanOrEqual(1)

		await titleHandle.locator("a").click()

		const dtlTitle = await page.locator(".title").textContent()
		const dtlPrice = await page.locator(".price").textContent()
		const dtlRating = await page.locator(".rating").textContent()
		const dtlRatingCount = await page.locator(".rating-count").textContent()
		const dtlDesc = await page.locator(".description").textContent()

		expect(dtlTitle).toMatch(title ?? "")
		expect(dtlPrice).toMatch(price ?? "")
		expect(dtlRating).toMatch(rating ?? "")
		expect(dtlRatingCount).toMatch(ratingCount ?? "")
		expect(dtlDesc).not.toBeNull()
		expect(dtlDesc?.length).toBeGreaterThan(1)
	}
})
