import { Browser, BrowserContext, chromium, firefox, Page } from "playwright";

describe("Drag and drop", () => {
  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });

    ctx = await browser.newContext();
    page = await ctx.newPage();
  });

  afterAll(async () => {
    await page.close();
    await ctx.close();
    await browser.close();
  });

  test("Case 1: move first element to second element center", async () => {
    await page.goto("https://letcode.in/dropable");
    const draggable = await page.$("#draggable");
    const droppable = await page.$("#droppable");

    // if (!draggable && !droppable) expect("Error");
    // expect(draggable && droppable).not.toEqual(false);
    if (!draggable && !droppable) throw new Error("No elements");

    const draggableBound = await draggable?.boundingBox();
    const droppableBound = await droppable?.boundingBox();

    // expect(draggableBound && droppableBound).not.toEqual(false);
    if (!draggableBound && !droppableBound) throw new Error("No Bounds");

    await page.mouse.move(
      draggableBound!.x + draggableBound!.width / 2,
      draggableBound!.y + draggableBound!.height / 2
    );
    await page.mouse.down();

    await page.mouse.move(
      droppableBound!.x + droppableBound!.width / 2,
      droppableBound!.y + droppableBound!.height / 2
    );
    await page.mouse.down();
  });

  test("Case: frames", async () => {
    await page.goto("https://jqueryui.com/droppable/");

    const demoFrame = page.frame({
      url: "https://jqueryui.com/resources/demos/droppable/default.html",
    });

    if (!demoFrame) throw new Error("Page doesn't have such the frame");

    const draggable = await demoFrame?.$("#draggable");
    const droppable = await demoFrame?.$("#droppable");

    if (!draggable && !droppable) throw new Error("No elements");

    const draggableBound = await draggable?.boundingBox();
    const droppableBound = await droppable?.boundingBox();

    if (!draggableBound && !droppableBound)
      throw new Error("No Bounds to element");

    // drag and drop
    await page.mouse.move(
      draggableBound!.x + draggableBound!.width / 2,
      draggableBound!.y + draggableBound!.height / 2
    );
    await page.mouse.down();

    await page.mouse.move(
      droppableBound!.x + droppableBound!.width / 2,
      droppableBound!.y + droppableBound!.height / 2
    );
    await page.mouse.down();
  });
});
