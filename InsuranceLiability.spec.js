import { test, expect, firefox } from '@playwright/test';
const { chromium } = require('@playwright/test');
const fs = require('fs');
test('record demo 1', async () => {
    test.setTimeout(1200000);

    const browser = await chromium.launch({
        headless: false
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

 //login for approver *****************
 await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu',{ waitUntil: 'networkidle' });
 await pageappvr.locator('[id="userid"]').fill('D8FOFD18');
 await pageappvr.locator('[id="next-btn"]').click();
 await pageappvr.locator('[id="password"]').fill('Snakamura@1');
 await pageappvr.locator('[id="loginSubmitButton"]').click();
 await pageappvr.waitForLoadState('domcontentloaded');
 await pageappvr.pause();
 await page.bringToFront();


 // ***************
    // await page.pause();
    // await page.click('[aria-label="First Level View Bar"]');
    // await page.keyboard.press('i');
    // await page.keyboard.press('Enter');

    // await page.click('[aria-label="Insurance Opportunities List Applet:New"]');
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Insurance+Opportunity+List+View');
    await page.locator('[name="s_vis_div"]').click();
    await page.keyboard.press('m');
    await page.keyboard.press('Enter');

    await page.locator('[name="s_2_1_5_0"]').click();
    const insOpp = await page.locator('[name="MF_Opportunity_Name"]').inputValue();
    console.log('Insurance Opportunity' + insOpp);
    //await page.locator('[id="1_MF_Insurance_Accuracy"]').click();
    await page.locator('[id="1_s_2_l_MF_Insurance_Accuracy"]').click();
    await page.locator('[id="1_MF_Insurance_Accuracy"]').fill('A');
   // await page.keyboard.press('A');
    //await page.keyboard.press('Enter');
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
    await page.pause();

    await page.getByRole('gridcell', { name: '09' }).click();
    await page.getByLabel('Pick Insurance Company List Applet:OK').click();
    //await page.getByRole('link', { name: 'MF Quote Number' }).click();
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
    //await page.getByRole('cell', { name: 'Insurance Start Date Press F2 for Date Field' }).getByLabel('Press F2 for Date Field').click();
    //await page.getByRole('link', { name: '1', exact: true }).click();
    //await page.getByRole('cell', { name: 'Insurance End Date Press F2 for Date Field' }).getByLabel('Press F2 for Date Field').click();
    //await page.pause();
    //await page.getByLabel('Quote List Applet:Calculate Liability Insurance Premium').click();
    await page.pause();
    await page.getByRole('cell', { name: 'Insurance Start Date Press F2 for Date Field' }).getByLabel('Press F2 for Date Field').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByLabel('Quote List Applet:Calculate Liability Insurance Premium').click();
  await page.getByLabel('Quote List Applet:Create Order').click();
  await page.locator('[id="\\31 _s_2_l_MF_Insurance_Liability_Policy_Number"]').click();
  //await page.getByLabel('Q000015720', { exact: true }).fill('PolicyTest2023');
    //await page.getByLabel('Q000015720', { exact: true }).press('Enter');

    await page.locator('[id="1_s_2_l_MF_Insurance_Liability_Policy_Number"]').click();
    await page.locator('[id="1_MF_Insurance_Liability_Policy_Number"]').fill('PolicyTest22');
    await page.keyboard.press('Control+s');
    await page.pause();


  await page.locator('#s_1_1_11_0_icon').click();
  await page.locator('#ui-id-363').click();
  await page.getByTitle('Visibility').selectOption('My Branch');
  await page.getByLabel('Orders List Applet:Create SpreadSheet').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('cell', { name: 'Agency Name Press F2 for Selection Field' }).getByLabel('Press F2 for Selection Field').click();
  await page.getByLabel('Pick Insurance Agency List Applet:OK').click();
  await page.getByLabel('Orders List Applet:Create SpreadSheet').click();
  await page.pause();
  //await page.getByRole('cell', { name: 'Bank Transfer Fee Press F2 for Calculator Field' }).getByLabel('Press F2 for Calculator Field').click();
  await page.locator('[aria-label="Bank Transfer Fee"]').click();
  await page.locator('[aria-label="Bank Transfer Fee"]').fill('2000');
  await page.getByPlaceholder('Bank Transfer Fee').press('Control+s');



  await page.getByPlaceholder('Bank Transfer Date').click();
  await page.getByRole('cell', { name: 'Bank Transfer Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  await page.getByRole('link', { name: '30' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('cell', { name: 'Insurance Account Code Press F2 for Selection Field' }).getByLabel('Press F2 for Selection Field').click();
  await page.getByLabel('Insurance Company Code(10 Digit) List Applet:OK').click();


  await page.getByLabel('Liability Spreadsheet Form Applet:Generate Approvals').click();
    await page.locator('[class="drilldown"]').click();
  //await page.getByRole('link', { name: '1-96592897' }).click();

  await page.pause();
  await page.getByRole('link', { name: 'Approval History' }).click();
  //await page.getByLabel('Site Map').locator('span').first().click();
  //await page.locator('#sitemapFilterInput').click();
  //await page.locator('#sitemapFilterInput').fill('inbox');
  await page.pause();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=UInbox+Item+Task+List+Applet&SWERowId0=1-1LIDE4&SWEApplet1=MF+Approval+Entity+Values+List+Applet&SWERowId1=1-1LIDEH')
  //await page.getByRole('link', { name: 'Inbox', exact: true }).click();
  await page.locator('#s_2_l_scroll [id="\\31 "]').getByRole('gridcell', { name: 'Combobox Field' }).click();
  await page.locator('#s_2_2_24_0_icon').click();
   await page.keyboard.press('a');
   await page.keyboard.press("Enter"); 


  //await page.locator('#ui-id-558').click();
  await page.getByLabel('Action', { exact: true }).press('Control+s');
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Insurance+Liability+Spreadsheet+Order+Detail+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Insurance+Liability+Spreadsheet+Form+Applet&SWERowId0=1-1LIBK1&SWEApplet1=MF+Insurance+Liability+Spreadsheet+Order+List+Applet&SWERowId1=1-1LIBK4');

    
    
    
    
    
    
    // approver process end***********


    //await page.bringToFront();
    //await page.reload('domcontentloaded');
    //await page.close();

})