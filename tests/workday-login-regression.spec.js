import { test, expect } from '@playwright/test';

test('Workday Login Regression Validation', async ({ page }) => {

  const workdayUrl =
    process.env.WORKDAY_URL ||
    'https://your-workday-tenant.workday.com';

  await page.goto(workdayUrl);

  await expect(page).toHaveTitle(/Workday/i);

  const usernameField = page.locator('input[type="text"]').first();

  await expect(usernameField).toBeVisible();

  await usernameField.fill('RegressionUser');

  await expect(usernameField).toHaveValue('RegressionUser');

  console.log('Workday Login Page Loaded Successfully');
  console.log('Regression Validation Successful');

});