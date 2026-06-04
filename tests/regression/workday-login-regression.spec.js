const { test, expect } = require('@playwright/test');

test('Workday Login Regression Validation', async ({ page }) => {

  await page.goto(process.env.WORKDAY_URL);

  const usernameField = page.locator('input[type="text"]').first();

  await expect(usernameField).toBeVisible();

  await usernameField.fill('RegressionUser');

  await expect(usernameField).toHaveValue('RegressionUser');

  console.log('Regression Validation Successful');

});