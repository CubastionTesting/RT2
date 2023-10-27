const { test, Page } = require("@playwright/test");
//const { Console } = require("console");
const {FusoLogin} =  require("./FusoLogin");
var fs = require("fs");

test.describe.serial("Siebel Page Test", () => {
    let page;
 
//Inventory Transition
test("Inventory Transition", async ({ browser }) => {
  page = await browser.newPage({ ignoreHTTPSErrors: true });
  await page.goto(
    "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
  );
  const Loginuser = new FusoLogin(page);
  await Loginuser.loginFDP("D8FFOR24", "Snakamura@1");
  await page.waitForLoadState("domcontentloaded");
 await page.waitForTimeout(2000)
 await page.goto(
  "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=FS+Inventory+Transactions+View"
);
await page.locator('[id="s_2_1_0_0_Ctrl"]').click();
await page.locator('[id="1_s_2_l_Part__"]').click();
await page.locator('[id="1_Part__"]').click();
await page.locator('[id="1_Part__"]').fill("##0464");
await page.locator('[id="1_s_2_l_Quantity"]').click();
await page.locator('[id="1_Quantity"]').click();
await page.locator('[id="1_Quantity"]').fill('20');
await page.locator('[id="1_s_2_l_Source_Inventory"]').click();
await page.locator('[id="1_Source_Inventory"]').click();
await page.locator('[id="s_2_2_39_0_icon"]').click();
await page.locator('[id="s_3_1_52_0_Ctrl"]').click();
await page.locator('[id="1_s_2_l_Destination_Inventory"]').click();
await page.locator('[id="s_2_2_42_0_icon"]').click();
await page.locator('[id="s_4_1_13_0_Ctrl"]').click();
await page.locator('[id="1_s_4_l_MF_4_Digit_Branch_Code"]').click();
await page.locator('[id="1_MF_4_Digit_Branch_Code"]').fill('10');
await page.locator('[id="1_MF_4_Digit_Branch_Code"]').press('Enter');
await page.locator('[id="s_4_1_52_0_Ctrl"]').click();
await page.locator('[id="1_s_2_l_Transaction_Type"]').click();
await page.locator('[id="1_Transaction_Type"]').fill('Adjustment');
await page.locator('[id="1_Transaction_Type"]').press('Enter');
await page.locator('[aria-labelledby="SrcAvailability_Label_1"]').click();
await page.locator('[aria-labelledby="SrcAvailability_Label_1"]').fill('On Hand');
await page.locator('[aria-labelledby="SrcAvailability_Label_1"]').press('Enter');

await page.locator('[aria-labelledby="SrcStatus_Label_1"]').click();
await page.locator('[aria-labelledby="SrcStatus_Label_1"]').fill('Good');
//await page.pause();
//await page.locator('[aria-labelledby="SrcStatus_Label_1"]').press('Enter');
await page.getByPlaceholder('Source Status').press('Enter');
//await page.pause();
await page.locator('[aria-labelledby="DestAvailability_Label_1"]').click();
await page.locator('[aria-labelledby="DestAvailability_Label_1"]').fill('On Hand');
await page.locator('[aria-labelledby="DestAvailability_Label_1"]').press('Enter');

await page.locator('[aria-labelledby="DestStatus_Label_1"]').click();
await page.locator('[aria-labelledby="DestStatus_Label_1"]').fill('Good');
await page.locator('[aria-labelledby="DestStatus_Label_1"]').press('Enter');

await page.locator('[aria-labelledby="Commit_Label_1"]').click();
await page.locator('[aria-labelledby="Commit_Label_1"]').press('Control+s');
 })

});