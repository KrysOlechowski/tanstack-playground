import { expect, test } from '@playwright/test'

test('shows DevCat heading on the devcat page', async ({ page }) => {
  await page.goto('/devcat')

  await expect(page.getByRole('heading', { name: 'DevCat' })).toBeVisible()
})
