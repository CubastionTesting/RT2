import { test, expect, firefox } from '@playwright/test';
const { chromium } = require('@playwright/test');
const fs = require('fs');
test('record demo 1', async () => {
    test.setTimeout(1500000);

    const browser = await chromium.launch({
        headless: true
    });

    const context = await browser.newContext();
    const context2 = await browser.newContext();
    const page = await context.newPage();
    const pageappvr = await context2.newPage();
  //  await page.waitForLoadState('networkidle');

    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu',{ waitUntil: 'networkidle' });
     await page.waitForLoadState('load');
     await page.locator('[id="userid"]').fill('D8FDFO18');
     await page.locator('[id="next-btn"]').click();
     await page.locator('[id="password"]').fill('Snakamura@1');
     await page.locator('[id="loginSubmitButton"]').click();
     await page.waitForLoadState('domcontentloaded');
     const checkpage = expect.configure({timeout:20000});
    if(await checkpage(page.locator('[id="_sweappmenu"]'),"page Browser not opened").toBeVisible());

    else{
    console.log("page Browser Opened");}

 //login for approver *****************
 await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu',{ waitUntil: 'networkidle' });
 await pageappvr.locator('[id="userid"]').fill('D8FOFD18');
 await pageappvr.locator('[id="next-btn"]').click();
 await pageappvr.locator('[id="password"]').fill('Snakamura@1');
 await pageappvr.locator('[id="loginSubmitButton"]').click();
 await pageappvr.waitForLoadState('domcontentloaded');
 await page.bringToFront();
 const checkpage1 = expect.configure({timeout:20000});
    if(await checkpage1(page.locator('[id="_sweappmenu"]'),"page Browser not opened").toBeVisible());

    else{
    console.log("page Browser Opened");}


    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Insurance+Opportunity+List+View');
    await page.locator('[name="s_vis_div"]').click();
    await page.keyboard.press('m');
    await page.keyboard.press('Enter');

    await page.locator('[name="s_2_1_5_0"]').click();
    const insOpp = await page.locator('[name="MF_Opportunity_Name"]').inputValue();
    console.log('Insurance Opportunity' + insOpp);
    await page.locator('[id="1_s_2_l_MF_Insurance_Accuracy"]').click();
    await page.locator('[id="1_MF_Insurance_Accuracy"]').fill('A');
    await page.locator('[id="1_s_2_l_MF_Insurance_Opportunity_Type"]').click();
    await page.locator('[id="1_MF_Insurance_Opportunity_Type"]').fill('New');
    await page.keyboard.press('Enter');
    await page.locator('[id="1_s_2_l_MF_Contractant_Name"]').click();
    await page.locator('[id="1_MF_Contractant_Name"]').fill('房野　操');
    await page.keyboard.press('Enter');

    await page.locator('[id="1_s_2_l_MF_Chassis_Number"]').click();
    await page.locator('[id="1_MF_Chassis_Number"]').fill('FY54JY-540054');
    await page.keyboard.press('Enter');

    await page.locator('[id="1_s_2_l_MF_Insurance_Other_Policy_Number"]').click();
    await page.locator('[id="1_MF_Insurance_Other_Policy_Number"]').fill('Policy21');
    await page.keyboard.press('Enter');

    await page.locator('[id="1_s_2_l_MF_Insurance_Other_Premium"]').click();
    await page.locator('[id="1_MF_Insurance_Other_Premium"]').fill('400000');
    await page.keyboard.press('Enter');

    await page.locator('[id="1_s_2_l_MF_Insurance_Other_End_Date"]').click();
    await page.locator('[id="1_MF_Insurance_Other_End_Date"]').fill('2023/11/21');
    await page.keyboard.press('Enter');

    await page.locator('[name="s_1_1_32_0"]').click();

    await page.locator('[id="1_s_2_l_MF_Insurance_Company_Name"]').click();
    await page.locator('[id="1_MF_Insurance_Company_Name"]').fill('09');
    await page.keyboard.press('Enter');

    await page.getByRole('gridcell', { name: '09' }).click();
    await page.getByLabel('Pick Insurance Company List Applet:OK').click();
    await page.locator('[name="MF Quote Number"]').click();
    await page.locator('#s_2_1_12_0_icon').click();
    await page.locator('#ui-id-272').click();
    await page.locator('#s_2_1_14_0_icon').click();
    await page.getByRole('cell', { name: 'Insurance Period Press F2 for Calculator Field' }).getByLabel('Press F2 for Calculator Field').click();
    await page.getByPlaceholder('Insurance Start Date').click();
    await page.getByPlaceholder('Insurance Period').click();
    await page.getByPlaceholder('Insurance Period').fill('2');
    await page.getByPlaceholder('Insurance Period').press('Control+s');
    await page.getByPlaceholder('Insurance Start Date').click();
    await page.getByRole('cell', { name: 'Insurance Start Date Press F2 for Date Field' }).getByLabel('Press F2 for Date Field').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByLabel('Quote List Applet:Calculate Liability Insurance Premium').click();
  await page.getByLabel('Quote List Applet:Create Order').click();
  await page.locator('[id="\\31 _s_2_l_MF_Insurance_Liability_Policy_Number"]').click();
  await page.locator('[id="1_s_2_l_MF_Insurance_Liability_Policy_Number"]').click();
    await page.locator('[id="1_MF_Insurance_Liability_Policy_Number"]').fill('PolicyTest22');
    await page.keyboard.press('Control+s');


  await page.locator('#s_1_1_11_0_icon').click();
  await page.locator('#ui-id-363').click();
  await page.getByTitle('Visibility').selectOption('My Branch');
  await page.getByRole('cell', { name: 'Agency Name Press F2 for Selection Field' }).getByLabel('Press F2 for Selection Field').click();
  await page.getByLabel('Pick Insurance Agency List Applet:OK').click();
  await page.getByLabel('Orders List Applet:Create SpreadSheet').click();
  await page.locator('[aria-label="Bank Transfer Fee"]').click();
  await page.locator('[aria-label="Bank Transfer Fee"]').fill('2000');
  await page.getByPlaceholder('Bank Transfer Fee').press('Control+s');



  // await page.getByPlaceholder('Bank Transfer Date').click();
  // await page.getByRole('cell', { name: 'Bank Transfer Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  // await page.getByRole('link', { name: '30' }).click();
  // await page.getByRole('button', { name: 'Done' }).click();

  await page.getByPlaceholder('Bank Transfer Date').click();
  await page.getByRole('cell', { name: 'Bank Transfer Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  await page.getByRole('button', { name: 'Next Month' }).click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByPlaceholder('Bank Transfer Date').press('Control+s');

  await page.getByRole('cell', { name: 'Insurance Account Code Press F2 for Selection Field' }).getByLabel('Press F2 for Selection Field').click();
  await page.getByLabel('Insurance Company Code(10 Digit) List Applet:OK').click();


  await page.getByLabel('Liability Spreadsheet Form Applet:Generate Approvals').click();
  await page.locator('[class="drilldown"]').click();
  
  await page.locator('[name="s_1_1_10_0"]').press("Control+Alt+k");
  var SRrowid = await page.locator('[aria-label="Row #"]').textContent();
  console.log(SRrowid);
  await page.locator('[aria-label="Row #"]').press("Control+c");

  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View')
  await page.locator('[id="s_2_1_10_0_Ctrl"]').click();
  await page.locator('[id="1_s_2_l_Name"]').click();
  await page.locator('[id="1_Name"]').fill(SRrowid);
  await page.locator('[id="1_Name"]').press('Enter');
  await page.locator('[id="1_s_2_l_Action"]').click();
  await page.locator('[id="1_Action"]').fill("Approved");
  await page.locator('[id="1_Action"]').press('Enter');
})