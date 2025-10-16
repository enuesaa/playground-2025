# Hacker News — Click 3rd Story: Test Plan

## Executive summary
This document describes a minimal, reliable test to verify that the third news item on Hacker News (https://news.ycombinator.com/) can be clicked. The goal is simple: from a clean browser state, open Hacker News, identify the third story in the top list, click its link, and assert that the click resulted in either a navigation in the same tab or an opened popup/new tab.

Assumptions
- Tests run from a fresh browser session (clean profile). 
- Network access to https://news.ycombinator.com/ is available.
- The page layout uses story rows (`tr.athing`) and a clickable title link inside each row (selectors used: `a.storylink`, `a.titlelink`, or `td.title a`).
- The test is independent and can be run in any order.

Success criteria
- The test passes if the third story's link is visible and clicking it either navigates the page or opens a popup/tab.
- The test fails if there are fewer than 3 stories, the link is not visible/clickable, or the click doesn't trigger navigation/popup within a reasonable time.

Failure conditions
- Network error or blocked access to Hacker News.
- Page structure changes such that the selectors no longer match (maintenance required).

## Test scenarios

### Scenario 1 — Happy path: click the 3rd story

Starting state (seed)
1. Browser launched with a fresh profile (no cookies, local storage).
2. No specific user account required.

Steps (numbered)
1. Navigate to `https://news.ycombinator.com/`.
2. Wait for the main stories to be visible.
3. Locate all story rows using the selector `tr.athing`.
4. Assert there are at least 3 story rows. (If not, fail the test.)
5. Within the third story row (index 2, 0-based), locate the clickable title link using `a.storylink`, `a.titlelink`, or `td.title a`.
6. Assert the link is visible and enabled for interaction.
7. Click the link while waiting for either navigation to occur or a popup/tab to open.
8. Verify that either:
   - A new page (popup) opened and loaded, or
   - The current page navigated away from the Hacker News listing.

Expected result
- The click succeeded and produced a visible navigation or popup.

Notes and edge handling
- Some links point to Hacker News item pages (comments) which will keep the domain the same; the assertion accepts that as a successful navigation.
- Some links may open in a new tab (target="_blank"). The test captures the popup event when that happens.
- If the layout/selector changes (site redesign), update the selectors accordingly.

### Scenario 2 — Edge case: link opens external site in new tab

Steps
1–6: same as Scenario 1.
7. Click the link and detect the popup event.
8. Assert the popup opened and finished loading.
9. Optionally, assert the popup URL is not the Hacker News list URL.

Expected result
- Popup opened and loaded.

### Scenario 3 — Negative: less than 3 stories

Starting state
- Hacker News returns fewer than 3 story rows (rare; possibly due to network issue or site change).

Steps
1. Navigate to site and count `tr.athing` rows.
2. If count < 3, the test should fail with a clear message: "Not enough stories on the page (found X, need >=3)".

Expected result
- Test fails with informative error.

## Playwright test snippet (paste into `tests/hackernews.spec.ts`)

Replace the content of `tests/hackernews.spec.ts` with the following test. It is intentionally defensive about selectors and handles navigation vs popup flows.

```typescript
import { test, expect } from '@playwright/test';

test('click third hacker news story', async ({ page }) => {
  await page.goto('https://news.ycombinator.com/');

  // Locate story rows
  const stories = page.locator('tr.athing');
  const count = await stories.count();
  expect(count, `Not enough stories on the page (found ${count}, need >=3)`).toBeGreaterThanOrEqual(3);

  const third = stories.nth(2);
  const link = third.locator('a.storylink, a.titlelink, td.title a').first();
  await expect(link).toBeVisible({ timeout: 5000 });

  // Click and wait for either a popup or navigation
  const [maybePopup] = await Promise.all([
    page.waitForEvent('popup').catch(() => null),
    link.click(),
  ]);

  if (maybePopup) {
    // A new tab opened
    await maybePopup.waitForLoadState('load');
    expect(await maybePopup.url()).not.toBe('');
  } else {
    // No popup: wait for navigation in the same page
    await page.waitForLoadState('load');
    // Consider navigation successful if URL changed or we're on an item page
    const current = page.url();
    expect(current).not.toBe('https://news.ycombinator.com/');
  }
});
```

## How to run

Install Playwright (if you haven't already):

```bash
# using npm
npm install -D @playwright/test
npx playwright install

# or using pnpm
pnpm add -D @playwright/test
npx playwright install
```

Run the single test:

```bash
npx playwright test tests/hackernews.spec.ts
```

## Maintenance notes
- If the test begins flaking, increase timeouts or re-evaluate selectors.
- Consider pinning Playwright version in `package.json` to avoid sudden matcher/expect changes.

---

Created by automated test planner — paste the Playwright test snippet into `tests/hackernews.spec.ts` to execute the check described above.
