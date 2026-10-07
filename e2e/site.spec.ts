import { expect, test } from '@playwright/test';

test('opens the home page and the article archive', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toContainText('EVGENY');
  await expect(page.getByRole('link', { name: 'Evgeny Staroverov' })).toBeVisible();

  await page.goto('/articles');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Статьи о frontend-разработке' }),
  ).toBeVisible();
  await expect(page.getByText('Показано 4 из 5 статей')).toBeVisible();
});
