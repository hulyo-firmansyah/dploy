import type { PlaywrightTestConfig } from "@playwright/test"
const config: PlaywrightTestConfig = {
	testDir: "./tests",
	fullyParallel: false,
	retries: process.env.CI ? 1 : 0,
	workers: process.env.CI ? 1 : 2,
	webServer: {
		command: "npm run start",
		port: 3000,
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI
	},
	use: {
		baseURL: "http://localhost:3000"
	}
}

export default config
