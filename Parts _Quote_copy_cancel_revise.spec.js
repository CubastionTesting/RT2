import { test } from '@playwright/test';

const { chromium } = require('@playwright/test');




test('record demo', async () => {
  test.setTimeout(12000000);
  const browser = await chromium.launch({

    headless: false

  });
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');
  await page.locator('[id="userid"]').fill('D8FDFO23');
   await page.click('#next-btn');
   await page.locator('[id="password"]').fill('Snakamura@1');
   await page.locator('[id="loginSubmitButton"]').click();
   await page.waitForLoadState();
   await page.waitForTimeout(3000);

    //parts quote creation
   await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+All+Quote+List+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Quote+Branch+List+Applet');
   await page.waitForLoadState();
   await page.waitForTimeout(3000);
   await page.locator('[id="s_2_1_7_0_Ctrl"]').click();
   await page.locator('[id="1_Quote_Name"]').press('Control+s');
   await page.locator('[id="1_s_2_l_Quote_Number"]').click();
   //await page.pause();
   await page.locator('[placeholder="Customer Code"]').click();
   await page.locator('[placeholder="Customer Code"]').fill('0000002810');
   await page.locator('[placeholder="Customer Code"]').press('Control+s');
   await page.locator('[name="s_4_1_18_0"]').click();
   await page.locator('[id="1_Product"]').fill('QC000001');
   await page.locator('[id="1_Product"]').press('Control+s');
   await page.locator('[name="s_3_1_24_0"]').click();
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
    await page.locator('[id="s_3_1_183_0_Ctrl"]').click();
    await page.waitForTimeout(2000);
    await page.locator('[id="1_s_4_l_Discount_Percent"]').click();
    await page.locator('[id="1_Discount_Percent"]').fill('2.5');
    await page.locator('[id="1_Discount_Percent"]').press('Control+s');
    await page.locator('[name="s_3_1_24_0"]').click();



    //Copy Quote
    await page.locator('[name="s_3_1_59_0"]').click();
    await page.waitForTimeout(2000);

    //Cancel Quote
    await page.locator('[name="s_3_1_106_0"]').click();


    
    await context.close();
    await browser.close();
  })







