import { expect, Locator, test } from '@playwright/test';

test('autoclick', async ({ page }) =>
{
    await page.goto('/');

    const button: Locator = page.getByAltText('prohibited icon');

    const numClicks: number = 50;

    for (let i = 0; i < numClicks; i++)
    {
        await button.click({ force: true });
    }

    await expect(page.locator('body')).toContainText(`${numClicks} denials`);
});