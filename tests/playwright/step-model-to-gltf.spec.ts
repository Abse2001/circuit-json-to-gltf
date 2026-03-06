import { expect, test } from "@playwright/test"

test("StepModelToGltf fixture converts and renders without UI errors", async ({
  page,
}) => {
  const fixtureId = encodeURIComponent(
    JSON.stringify({ path: "StepModelToGltf.fixture.tsx" }),
  )

  await page.goto(`/renderer.html?fixtureId=${fixtureId}&locked=true`)

  await expect(
    page.getByRole("heading", { name: "Circuit JSON to GLTF Converter" }),
  ).toBeVisible()

  const errorPanel = page.getByText("Error:", { exact: false })
  await expect(errorPanel).toHaveCount(0)

  await expect(
    page.getByRole("link", {
      name: /Download GLTF/i,
    }),
  ).toBeVisible({ timeout: 90_000 })

  await expect(page.locator("model-viewer")).toHaveCount(1)
})
