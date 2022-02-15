/**
 * External dependencies
 */
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: './e2e',
	timeout: 30 * 1000,
	expect: {
		timeout: 5000,
	},
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	use: {
		actionTimeout: 0,
		baseURL: 'http://localhost:3000',
		screenshot: 'only-on-failure',
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
			},
		},

		{
			name: 'firefox',
			use: {
				...devices['Desktop Firefox'],
			},
		},

		{
			name: 'webkit',
			use: {
				...devices['Desktop Safari'],
			},
		},
		{
			name: 'Mobile Chrome',
			use: {
				...devices['Pixel 5'],
			},
		},
		{
			name: 'Mobile Safari',
			use: {
				...devices['iPhone 12'],
			},
		},
	],
	webServer: {
		command: 'npm run start:static',
		port: 3000,
	},
};

export default config;
