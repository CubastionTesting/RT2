import { test ,expect} from '@playwright/test';

const { chromium } = require('@playwright/test');




test('record demo', async () => {
  test.setTimeout(1500000);
  const browser = await chromium.launch({

    headless: true

  });
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');
  await page.locator('[id="userid"]').fill('D8FDFO23');
   await page.click('#next-btn');
   await page.locator('[id="password"]').fill('Snakamura@1');
   await page.locator('[id="loginSubmitButton"]').click();
   await page.waitForLoadState();
  //  await page.waitForTimeout(3000);
  const checkpage = expect.configure({timeout:20000});
    if(await checkpage(page.locator('[id="_sweappmenu"]'),"page Browser not opened").toBeVisible());

    else{
    console.log("page Browser Opened");}

    //parts quote creation
   await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+All+Quote+List+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Quote+Branch+List+Applet');
   await page.waitForLoadState();
   await page.waitForTimeout(3000);

   const validation = page.locator('[id="Close_dialog_btn_close"]');

   await page.locator('[id="s_2_1_7_0_Ctrl"]').click(); //Plus button
   if (await validation.isVisible() == true){
    console.log('error in plus button in Part Quote');
  }
   console.log("Quote created Successfully");
   await page.locator('[id="1_Quote_Name"]').press('Control+s');
   console.log("Quote Saved");
   await page.locator('[id="1_s_2_l_Quote_Number"]').click();
   //await page.pause();
   await page.locator('[placeholder="Customer Code"]').click(); //Customer Code column
   await page.locator('[placeholder="Customer Code"]').fill('0000002810');
   await page.locator('[placeholder="Customer Code"]').press('Control+s');
   await page.locator('[name="s_4_1_18_0"]').click(); //Plus button
   if (await validation.isVisible() == true){
    console.log('error in plus button in Part Quote');
  }
   await page.locator('[id="1_Product"]').fill('QC000001'); //Parts# column
   await page.locator('[id="1_Product"]').press('Control+s');
   console.log("Parts added in line itenm Successfully");
   await page.locator('[name="s_3_1_24_0"]').click();
   console.log("Generate Approvals button clicked successfully"); //Generate Approval buton
   if (await validation.isVisible() == true){
    console.log('error in Generate Approval button in Part Quote');
  }
   //await page.pause();
   
   //Pop up for cash flag validation
   const elementExists =   await page.getByText('If you are using the Cash only Customer code, Customer Receiver is a required fi').isVisible();

   console.log(elementExists);
  if (elementExists != false) {
    await page.locator('[id="Close_dialog_btn_close"]').click();
    await page.locator('[name="s_3_1_17_0"]').fill('OK');
    await page.locator('[name="s_3_1_24_0"]').click();
    }
    
    //Revise Quote
    await page.locator('[id="s_3_1_183_0_Ctrl"]').click(); //Revise button
    if (await validation.isVisible() == true){
      console.log('error in Revise button in Part Quote');
    }
    console.log("Revise button clicked successfully");
    await page.waitForTimeout(2000);
    console.log("Quote Revised successfully");
    await page.locator('[id="1_s_4_l_Discount_Percent"]').click();
    await page.locator('[id="1_Discount_Percent"]').fill('2.5');
    await page.locator('[id="1_Discount_Percent"]').press('Control+s');
    console.log("Manual discount added successfully on Line items");
    await page.locator('[name="s_3_1_24_0"]').click(); //Generate Approval button
    if (await validation.isVisible() == true){
      console.log('error in Generate Approval button in Part Quote');
    }
    console.log("Generate Approvals button clicked successfully");



    //Copy Quote
    await page.locator('[name="s_3_1_59_0"]').click(); //Copy button
    if (await validation.isVisible() == true){
      console.log('error in Copy button in Part Quote');
    }
    console.log("Copy button clicked successfully");
    await page.waitForTimeout(2000);
    console.log("Quote Copied successfully");

    //Cancel Quote
    await page.locator('[name="s_3_1_106_0"]').click(); //Cancel button
    if (await validation.isVisible() == true){
      console.log('error in Cancel button in Part Quote');
    }
    console.log("Cancel button clicked successfully");


    
    await context.close();
    await browser.close();
    console.log("Quote Cancelled successfully");
  })







