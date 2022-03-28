// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export async function scrollBottom(page) {
   await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
}
