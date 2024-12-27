const { test, expect } = require('@playwright/test');

test('My first tm run', async ({ page }) => {
  await page.goto('https://testmanager.cscglobal.com/');
  await page.getByLabel('User Name:').click();
  await page.getByLabel('User Name:').fill('sreadmin');
  await page.getByLabel('User Name:').press('ControlOrMeta+c');
  await page.getByLabel('User Name:').click();
  await page.getByLabel('User Name:').press('ControlOrMeta+c');
  await page.getByLabel('User Name:').click();
  await page.getByLabel('User Name:').press('ControlOrMeta+a');
  await page.getByLabel('User Name:').press('ControlOrMeta+c');
  await page.getByLabel('Password:').click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByLabel('Password:').fill('sreadmin');
  await page.getByRole('button', { name: ' Authenticate' }).click();
  await page.getByRole('row', { name: 'Administrator' }).locator('div').nth(2).click();
  await page.getByRole('row', { name: 'Srini' }).locator('div').nth(3).click();
  await page.getByText('FileUpload').click();
  await page.getByRole('button', { name: ' Execute Test' }).click();
  await page.locator('#combo-1522-trigger-picker').click();
  await page.getByRole('option', { name: 'Selenium' }).click();
  await page.locator('#tagfield-1523-trigger-picker').click();
  await page.getByRole('option', { name: 'Local Selenium - Chrome' }).click();
  await page.locator('#combo-1522-trigger-picker').click();
  await page.getByRole('option', { name: 'Playwright' }).click();
  await page.locator('#splitbutton-1540').click();
  await page.getByRole('tab', { name: ' Team Dashboard removable' }).click();
  await page.getByRole('button', { name: ' Refresh' }).click();
  await page.getByRole('gridcell', { name: '(Test) FileUpload User:' }).click();
});