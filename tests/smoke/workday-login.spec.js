const { test, expect } = require('@playwright/test');

test('Workday Login Page Validation', async ({ page }) => {

  const workdayUrl =
    process.env.WORKDAY_URL ||
    'https://impl.workday.com';

  await page.goto(workdayUrl);

  await page.waitForLoadState('networkidle');

  const title = await page.title();

  console.log(`Page Title: ${title}`);

  await expect(page).toHaveURL(/workday/i);

});