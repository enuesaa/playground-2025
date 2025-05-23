from playwright.sync_api import sync_playwright


def main():
    print("Hello from uv-playwright-try!")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("https://playwright.dev")
        print(page.title())
        browser.close()


if __name__ == "__main__":
    main()
