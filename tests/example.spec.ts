import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Vite/);
});

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  const body = page.locator('body');
  await expect(body).toBeVisible();
});