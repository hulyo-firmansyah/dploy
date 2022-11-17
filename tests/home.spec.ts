import { test, expect } from "@playwright/test"

test("Should Have Title", async ({ page }) => {
	await page.goto("/")

	await expect(page).toHaveTitle(/Landing/g)
})

test("Should show banner text", async ({ page }) => {
	await page.goto("/")

	const innerText = page.locator("[data-testid=banner-text]")
	await expect(innerText).toContainText(/(Deploy|DPloy)/g)
})

test("Check server running mesasge", async ({ page }) => {
	await page.goto("/")

	await expect(page.locator("text=Server Running on")).toContainText(
		/production/g
	)
})

test("Click get started button redirect properly", async ({ page }) => {
	await page.goto("/")

	await page.locator("text=Get Started").click()

	expect(page.url()).toContain("/docs")

	await page.locator("data-testid=logo-link").click()

	expect(page.url()).toContain("/")
})

test("Click find out button redirect properly", async ({ page }) => {
	await page.goto("/")

	await page.locator("text=Find Out").click()

	expect(page.url()).toContain("/docs")

	await page.locator("data-testid=logo-link").click()

	expect(page.url()).toContain("/")
})

test("Click Docs button", async ({ page }) => {
	await page.goto("/")

	await page.locator("text=Docs").click()

	expect(page.url()).toContain("/docs")

	await page.locator("data-testid=logo-link").click()

	expect(page.url()).toContain("/")
})

test("Click Blog button", async ({ page }) => {
	await page.goto("/")

	await page.locator("text=Blog").click()

	expect(page.url()).toContain("/blog")

	const text = await page.locator("body").innerText()
	expect(text).toMatch(/404/gim)
})
