import { expect, test } from "@playwright/test";

test("home page renders the premium hotel experience", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "Un refuge contemporain au cœur du Queyras",
    }),
  ).toBeVisible();
  await expect(page.getByText("Réserver mon séjour").first()).toBeVisible();
  await expect(
    page.locator("#restaurant").getByText("Restaurant Le Refuge"),
  ).toBeVisible();
});
