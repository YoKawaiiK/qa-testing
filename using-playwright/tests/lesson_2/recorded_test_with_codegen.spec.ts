import "@playwright/test";

import { chromium } from "playwright";

describe("Recorded test with codegen", () => {
  test("test", async () => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://letcode.in/forms");
    // await page.goto('https://example.com');

    // Click #firstname
    await page.locator("#firstname").click();

    // Fill #firstname
    await page.locator("#firstname").fill("Danil");

    // Fill #lasttname
    await page.locator("#lasttname").fill("Shubin");

    // Fill [placeholder="Email input"]
    await page
      .locator('[placeholder="Email input"]')
      .fill("yokawaiik@gmail.com");

    // Select 7
    await page
      .locator(
        "text=Country codeUSA (+1)UK (+44)Other CountriesAlgeria (+213)Andorra (+376)Angola (+ >> select"
      )
      .selectOption("7");

    // Fill [placeholder="Phone Number"]
    await page.locator('[placeholder="Phone Number"]').fill("9233461800");

    // Fill [placeholder="Address Line-1"]
    await page
      .locator('[placeholder="Address Line-1"]')
      .fill("Russia, Krasnoyarski krai");
    // Fill [placeholder="Address Line-2"]
    await page
      .locator('[placeholder="Address Line-2"]')
      .fill("Russia, Krasnoyarski krai");

    // Fill [placeholder="State"]
    await page.locator('[placeholder="State"]').fill("city Divnogorsk");

    // Fill [placeholder="Postal-Code"]
    await page.locator('[placeholder="Postal-Code"]').fill("6630xx");

    // Select Russian Federation
    await page
      .locator(
        "text=CountryAfghanistanÅland IslandsAlbaniaAlgeriaAmerican SamoaAndorraAngolaAnguilla >> select"
      )
      .selectOption("Russian Federation");

    // Fill input[name="dob"]
    await page.locator('input[name="dob"]').fill("1998-11-02");

    // Check input[type="checkbox"]
    await page.locator('input[type="checkbox"]').check();

    // Click text=Male >> nth=0
    await page.locator("text=Male").first().click();

    // Click input[type="submit"]
    await page.locator('input[type="submit"]').click();

    await page.close();
    await context.close();
    await browser.close();
  });
});
