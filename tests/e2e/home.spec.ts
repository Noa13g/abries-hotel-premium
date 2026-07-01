import { expect, test } from "@playwright/test";

test("home page renders the premium hotel experience", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "L’âme d’un chalet, le confort d’un hôtel.",
    }),
  ).toBeVisible();
  await expect(page.getByText("Réserver mon séjour").first()).toBeVisible();
  await expect(
    page.locator("#table").getByText("Restaurant Le Refuge"),
  ).toBeVisible();
});
