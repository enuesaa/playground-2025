import { test, expect } from '@playwright/test';

test('click third hacker news story', async ({ page }) => {
  // 1. Open Hacker News
  await page.goto('https://news.ycombinator.com/', { waitUntil: 'domcontentloaded' });

  // 2. Wait for story rows to appear
  const stories = page.locator('tr.athing');
  await expect(stories.first()).toBeVisible({ timeout: 10000 });

  // 3. Ensure at least 3 stories
  const count = await stories.count();
  expect(count, `Not enough stories on the page (found ${count}, need >=3)`).toBeGreaterThanOrEqual(3);

  // 4. Find the 3rd story's clickable link
  const third = stories.nth(2);
  const link = third.locator('a.storylink, a.titlelink, td.title a').first();
  await expect(link).toBeVisible({ timeout: 5000 });

  // 5. Click and wait for either popup or navigation
  const [popup] = await Promise.all([
    page.waitForEvent('popup').catch(() => null),
    link.click(),
  ]);

  if (popup) {
    // Link opened a new tab/window
    await popup.waitForLoadState('load', { timeout: 15000 }).catch(() => null);
    const popupUrl = await popup.url();
    console.log('Popup opened with URL:', popupUrl);
    expect(popupUrl).not.toBe('');
  } else {
    // Click navigated in same page
    await page.waitForLoadState('load', { timeout: 15000 }).catch(() => null);
    const current = page.url();
    console.log('Current page URL after click:', current);
    // Accept navigation to item page or external as success (should not remain the list URL)
    expect(current).not.toBe('https://news.ycombinator.com/');
  }
});