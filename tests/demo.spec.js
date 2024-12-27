const { test, expect } = require("@playwright/test");

test("Demo login", async ({ page }) => {
  await page.goto("https://testmanager.cscglobal.com/");
  await page.getByLabel("User Name:").click();
  await page.getByLabel("User Name:").fill("sreadmin");
  await page.getByLabel("User Name:").press("ControlOrMeta+a");
  await page.getByLabel("User Name:").press("ControlOrMeta+c");
  await page.getByLabel("Password:").click();
  await page.getByLabel("Password:").fill("sreadmin");
  await page.getByRole("button", { name: " Authenticate" }).click();
});

test("Demo Logout", async ({ page }) => {
  await page.goto("https://testmanager.cscglobal.com/");
  await page.getByLabel("User Name:").fill("sreadmin");
  await page.getByLabel("Password:").click();
  await page.getByLabel("Password:").fill("sreadmin");
  await page.getByRole("button", { name: " Authenticate" }).click();
  await page.pause();
  await page.getByRole("button", { name: "" }).click();
  await page.getByRole("menuitem", { name: "Logout " }).click();

  await expect(page).toHaveTitle(/Test Manager/);
});
