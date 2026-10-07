import { expect, test } from '@playwright/test';

test('opens a project and switches the complete case study language', async ({ page }) => {
  await page.goto('/projects');
  await page.getByRole('link', { name: 'Разбор проекта', exact: true }).first().click();

  await expect(page).toHaveURL(/\/projects\/image-converter$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Image Converter' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Подготовка изображений на компьютере' }),
  ).toBeVisible();
  await expect(page).toHaveTitle(/Image Converter/);

  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('evscoder-language')))
    .toBe('ru');

  await page.getByRole('button', { name: 'Выбрать язык' }).click();
  await expect(page.getByRole('button', { name: 'Выбрать язык' })).toHaveAttribute(
    'aria-expanded',
    'true',
  );
  await page.getByRole('menuitemradio', { name: 'United States' }).click();

  const article = page.locator('article[aria-labelledby="project-title"]');
  await expect(article).toHaveAttribute('lang', 'en');
  await expect(
    article.getByRole('heading', { name: 'Preparing images on your computer' }),
  ).toBeVisible();
  await expect(
    article.getByRole('link', { name: '04 Technical decisions', exact: true }),
  ).toHaveAttribute('href', '#decisions');
  await expect(
    article.getByText('Workspace: files, preview, and conversion settings.'),
  ).toBeVisible();
  await expect(article.getByRole('link', { name: 'Source code on GitHub' })).toBeVisible();
  await expect(article).not.toContainText('Технические решения');

  await page.reload();
  await expect(article).toHaveAttribute('lang', 'en');
  await expect(
    article.getByRole('heading', { name: 'Preparing images on your computer' }),
  ).toBeVisible();

  await page.getByRole('button', { name: 'Choose language' }).click();
  await page.getByRole('menuitemradio', { name: 'Россия' }).click();
  await expect(article).toHaveAttribute('lang', 'ru');
  await expect(
    article.getByRole('heading', { name: 'Подготовка изображений на компьютере' }),
  ).toBeVisible();
});

test('returns 404 for an unknown project', async ({ page }) => {
  const response = await page.goto('/projects/unknown-project');

  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Image Converter' })).toHaveCount(0);
});

test('lists Fe Starter Bricks second without featuring it on the home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Fe Starter Bricks', exact: true })).toHaveCount(0);

  await page.goto('/projects');
  const projects = page.locator('article');
  await expect(projects.nth(1).getByRole('heading', { name: 'Fe Starter Bricks' })).toBeVisible();
  await projects.nth(1).getByRole('link', { name: 'Разбор проекта', exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/fe-starter-bricks$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Fe Starter Bricks' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Исходный код на GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/evscoder/fe-starter-bricks',
  );
  await page.getByRole('button', { name: 'Выбрать язык' }).click();
  await page.getByRole('menuitemradio', { name: 'United States' }).click();
  await expect(
    page.getByRole('heading', { name: 'A quick start for template-based websites' }),
  ).toBeVisible();
  for (const image of await page.locator('article img').all()) {
    await expect
      .poll(() => image.evaluate((element: HTMLImageElement) => element.naturalWidth))
      .toBeGreaterThan(0);
  }
});
