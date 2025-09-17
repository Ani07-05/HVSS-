from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Navigate to the page
    page.goto("http://localhost:3000/hvss-analysis", wait_until="networkidle")

    # Check that the NEW chart is visible
    new_chart_title = page.get_by_text("HVSS vs. CVSS: A Baseline Comparison", exact=True)
    expect(new_chart_title).to_be_visible()

    # Check that the OLD charts are NOT visible
    old_chart_title = page.get_by_text("Interactive Comparison Charts", exact=True)
    expect(old_chart_title).not_to_be_visible()

    # Check that the summary text is visible
    summary_title = page.get_by_text("Chart Baselines & Specifications", exact=True)
    expect(summary_title).to_be_visible()

    # Take a screenshot of the entire page to show the new layout
    page.screenshot(path="jules-scratch/verification/final_page_screenshot.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
