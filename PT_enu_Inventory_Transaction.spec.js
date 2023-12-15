const { test, Page, chromium } = require("@playwright/test");
//const { Console } = require("console");
const {FusoLogin} =  require("./FusoLogin");
var fs = require("fs");

test.describe.serial("Siebel Page Test", () => {
  test.setTimeout(1000000);

    let page;
 
//Inventory Transition
test("Inventory Transition", async () => { const browser = await chromium.launch({

  headless: true

});
  page = await browser.newPage({ ignoreHTTPSErrors: true });
  await page.goto(
    "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
  );
  const Loginuser = new FusoLogin(page);
  await Loginuser.loginFDP("D8FFOR24", "Snakamura@1");
  await page.waitForLoadState("domcontentloaded");
 await page.waitForTimeout(2000)


const validation = page.locator('[id="Close_dialog_btn_close"]');



await page.pause()
const parts = ['##0464','#10JCT001','#10JCT002','#10JCT003','#10JCT004','#10JCT005','#10JCT006','#10JCT007','#10JCT008','#10JCT009','#10JCT010','#10JCT011','#10JCT012','#10JCT013','#10JCT014','#10JCT015']
for(let n=0;n<parts.length;n++){
  await page.goto(
    "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=FS+Inventory+Transactions+View"
  );
  await page.locator('[id="s_2_1_0_0_Ctrl"]').click(); //Plus button
if (await validation.isVisible() == true){
  console.log('error in plus button in inventory Transactions');
}
console.log("Inventory transaction created successfully");
  await page.locator('[id="1_s_2_l_Part__"]').click();
await page.locator('[id="1_Part__"]').click();
await page.locator('[id="1_Part__"]').fill(parts[n]); //Part# column
await page.locator('[id="1_s_2_l_Quantity"]').click();
await page.locator('[id="1_Quantity"]').click();
await page.locator('[id="1_Quantity"]').fill('3'); //Qty column
await page.locator('[id="1_s_2_l_Source_Inventory"]').click();
await page.locator('[id="1_Source_Inventory"]').click();
await page.locator('[id="s_2_2_39_0_icon"]').click(); //Source Location column
await page.locator('[id="s_3_1_52_0_Ctrl"]').click();
await page.locator('[id="1_s_2_l_Destination_Inventory"]').click();
await page.locator('[id="s_2_2_42_0_icon"]').click(); //Destination Location column
await page.locator('[id="s_4_1_13_0_Ctrl"]').click();
await page.locator('[id="1_s_4_l_MF_4_Digit_Branch_Code"]').click();
await page.locator('[id="1_MF_4_Digit_Branch_Code"]').fill('10');
await page.locator('[id="1_MF_4_Digit_Branch_Code"]').press('Enter');
await page.locator('[id="s_4_1_52_0_Ctrl"]').click();
await page.locator('[id="1_s_2_l_Transaction_Type"]').click(); //Type column
await page.locator('[id="1_Transaction_Type"]').fill('Adjustment');
await page.locator('[id="1_Transaction_Type"]').press('Enter');
await page.locator('[aria-labelledby="SrcAvailability_Label_1"]').click(); //Source Availability column
await page.locator('[aria-labelledby="SrcAvailability_Label_1"]').fill('On Hand');
await page.locator('[aria-labelledby="SrcAvailability_Label_1"]').press('Enter');

await page.locator('[aria-labelledby="SrcStatus_Label_1"]').click(); //Source Status column
await page.locator('[aria-labelledby="SrcStatus_Label_1"]').fill('Good');
//await page.locator('[aria-labelledby="SrcStatus_Label_1"]').press('Enter');
await page.getByPlaceholder('Source Status').press('Enter');
await page.locator('[aria-labelledby="DestAvailability_Label_1"]').click(); //Destination Availability column
await page.locator('[aria-labelledby="DestAvailability_Label_1"]').fill('On Hand');
await page.locator('[aria-labelledby="DestAvailability_Label_1"]').press('Enter');

await page.locator('[aria-labelledby="DestStatus_Label_1"]').click(); //Destination Status column
await page.locator('[aria-labelledby="DestStatus_Label_1"]').fill('Good');
await page.locator('[aria-labelledby="DestStatus_Label_1"]').press('Enter');

await page.locator('[aria-labelledby="Commit_Label_1"]').click(); //Commit flag
console.log("Successfully clicked on Commit");
await page.locator('[aria-labelledby="Commit_Label_1"]').press('Control+s');
console.log("Inventory Transaction Completed successfully");

}

 })

});