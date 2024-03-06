import { test, expect } from "@playwright/test";

test("Simple run through of the booking flow", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByLabel("Friday, 8 March").click();
  await page.getByLabel("Next step").click();
  await page.getByLabel("Adults increase ticket count").click();
  await page.getByLabel("Adults increase ticket count").click();
  await page.getByLabel("Children increase ticket count").click();
  await page.getByLabel("Family discount").check();
  await page.getByLabel("Next step").click();
  await page.getByLabel("Add activity Burger Workshop").click();
  await page.getByLabel("Add activity Burger Emporium").click();
  await page.getByLabel("Next step").click();

  expect(page.getByLabel("Price")).toHaveText("3257.1,-");
  expect(page.getByLabel("Booking date March 08")).toBeVisible();

  await page.getByLabel("Price").click();
  await page.getByLabel("Next step").click();

  expect(page.getByLabel("Processing your payment!")).toBeVisible();
  await page.waitForTimeout(5000);
  expect(page.getByLabel("Thank you for your purchase!")).toBeVisible();
});
