const { test, expect } = require('@playwright/test');

test('Workday Login Regression Validation', async ({ page }) => {

  const workdayUrl =
  process.env.WORKDAY_URL ||
  'https://impl.workday.com';

await page.goto(workdayUrl);

  await page.getByLabel(/user name|username/i)
    .fill(process.env.WORKDAY_USERNAME);

  await page.getByLabel(/password/i)
    .fill(process.env.WORKDAY_PASSWORD);

  await page.getByRole('button', { name: /sign in|login/i })
    .click();

  await expect(page).toHaveURL(/workday/i);

  console.log('Workday Login Successful');

});