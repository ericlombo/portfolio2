import { expect, test } from "@playwright/test";

test("the interview room loads with accessible folders and interviewers", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: /Welcome to the conversation/ })).toBeVisible();
  await expect(page.getByRole("group", { name: "Open a portfolio file" }).getByRole("button")).toHaveCount(4);
  await expect(page.getByRole("button", { name: /Interviewer 1/ })).toBeVisible();
});

test("an interviewer opens its matching folder and pages turn", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Interviewer 3/ }).click();
  const book = page.getByRole("dialog", { name: "My work" });
  await expect(book.getByRole("heading", { name: "FlourFlow" })).toBeVisible();
  await book.getByRole("button", { name: "Next" }).click();
  await expect(book.getByRole("heading", { name: "TrustRail" })).toBeVisible();
  await expect(book.getByText("Page 2 of 6")).toBeVisible();
});

test("the phone shows each supplied contact destination", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Pick up the phone/ }).click();
  const phone = page.getByRole("dialog", { name: "Let’s connect" });
  await expect(phone.getByRole("link", { name: "Call" })).toHaveAttribute("href", "tel:+254715660909");
  await expect(phone.getByRole("link", { name: "Message" })).toHaveAttribute("href", "sms:+254715660909");
  await expect(phone.getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:ericlombo1999@gmail.com");
  await expect(phone.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://linkedin.com/in/ericlombo");
  await expect(phone.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/ericlombo");
  await expect(phone.getByRole("link", { name: "Get A Keja" })).toHaveAttribute("href", "https://getakeja.co.ke");
});

test("Escape closes the phone overlay", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Pick up the phone/ }).click();
  await expect(page.getByRole("dialog", { name: "Let’s connect" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Let’s connect" })).toHaveCount(0);
});

test("classic view renders the same portfolio content", async ({ page }) => {
  await page.goto("/classic");
  await expect(page.getByRole("heading", { name: /Ideas into working software/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "FlourFlow" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Junior Full-Stack Engineer" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Return to the interview room/ })).toHaveAttribute("href", "/");
});

test.describe("touch devices", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("a first tap previews a folder and a second tap opens it", async ({ page }) => {
    await page.goto("/");
    const about = page.getByRole("button", { name: "Open About me folder" });
    await about.tap();
    await expect(page.getByText("“Tell us about yourself”")).toBeVisible();
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await about.tap();
    await expect(page.getByRole("dialog", { name: "About me" })).toBeVisible();
  });
});

test("reduced-motion visitors are directed to the 2D fallback", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page).toHaveURL(/\/classic$/);
  await expect(page.getByRole("heading", { name: /Ideas into working software/ })).toBeVisible();
});
