import { expect, test } from "@playwright/test";

test("home page renders the audit kickoff", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /refuge contemporain du queyras/i,
    }),
  ).toBeVisible();
  await expect(page.getByText(/audit autonome/i)).toBeVisible();
});
