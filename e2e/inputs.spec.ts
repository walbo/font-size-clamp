/**
 * External dependencies
 */
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test.describe('Inputs', () => {
	test('should be allowed to use arrows to change number', async ({
		page,
	}) => {
		await page.locator('#min-width').fill('600');
		await page.locator('#min-width').press('ArrowUp');
		const value = await page.locator('#min-width').inputValue();
		await expect(value).toBe('601');
	});
});
