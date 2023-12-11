import { test, expect, firefox } from '@playwright/test';
const { chromium } = require('@playwright/test');
const fs = require('fs');
test('record demo 1', async () => {
    test.setTimeout(1500000);

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();
    const context2 = await browser.newContext();
    const page = await context.newPage();
    const pageappvr = await context2.newPage();
  //  await page.waitForLoadState('networkidle');

    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu',{ waitUntil: 'networkidle' });
    // await page.waitForLoadState('load');
    await page.locator('[id="userid"]').fill('D8FOFD18');
    await page.locator('[id="next-btn"]').click();
    await page.locator('[id="password"]').fill('Snakamura@1');
    await page.locator('[id="loginSubmitButton"]').click();
    await page.waitForLoadState('domcontentloaded');

 //login for approver *****************
 await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu',{ waitUntil: 'networkidle' });
 await pageappvr.locator('[id="userid"]').fill('D8FDFO18');
 await pageappvr.locator('[id="next-btn"]').click();
 await pageappvr.locator('[id="password"]').fill('Snakamura@1');
 await pageappvr.locator('[id="loginSubmitButton"]').click();
 await pageappvr.waitForLoadState('domcontentloaded');

 // ***************

    await page.click('[aria-label="First Level View Bar"]');
    await page.keyboard.press('i');
    await page.keyboard.press('i');
    await page.keyboard.press('i');
    await page.keyboard.press('Enter');


    // Insurance PPR Approval

    await page.getByRole('link', { name: 'Voluntary' }).click();
    await page.getByRole('button', { name: 'Orders List Applet:New' }).click();
    await page.locator('[id="\\31 _s_2_l_MF_Policy_Number"]').click();
    await page.getByRole('gridcell', { name: 'Policy #' }).getByRole('textbox', { name: 'Policy #' }).fill(Math.random().toString(36).slice(2));
    await page.locator('#s_1_1_7_0_icon').click();
    await page.getByRole('gridcell', { name: '18' }).getByRole('link', { name: '18' }).click();
    await page.getByPlaceholder('Application Year').click();
    await page.getByPlaceholder('Application Year').fill('2002');
    await page.locator('#s_1_1_27_0_icon').click();
    await page.getByRole('gridcell', { name: '18' }).getByRole('link', { name: '18' }).click();
    await page.locator('#s_1_1_1_0_icon').click();
    await page.getByRole('gridcell', { name: '東京海上日動火災保険株式会社' }).click();
    await page.getByRole('button', { name: 'Pick Insurance Company List Applet:OK' }).click();
    await page.locator('#s_1_1_42_0_icon').click();
    await page.getByRole('button', { name: 'Pick Account List Applet:OK' }).click();
    await page.locator('#s_1_1_2_0_icon').click();
    await page.getByRole('button', { name: 'Pick Account List Applet:OK' }).click();
    await page.locator('#s_1_1_4_0_icon').click();
   await page.click('#ui-datepicker-day-27 > a');
    await page.getByPlaceholder('Application Month').click();
    await page.getByPlaceholder('Application Month').fill('2');
    await page.locator('#s_1_1_44_0_icon').click();
    await page.getByRole('row', { name: '岡山ふそう 26SC000000000O Combobox Field' }).getByRole('gridcell', { name: 'Combobox Field' }).click();
    await page.getByRole('button', { name: 'Pick Insurance Agency List Applet:OK' }).click();
    await page.getByRole('cell', { name: 'Insurance Premium Press F2 for Calculator Field' }).getByPlaceholder('Insurance Premium').click();
    await page.getByRole('cell', { name: 'Insurance Premium Press F2 for Calculator Field' }).getByPlaceholder('Insurance Premium').fill('199');
    await page.locator('[class="drilldown"]').first().click();

    const salesOrder = await page.locator('[aria-label="Sales Order #"]').inputValue();
    console.log('Sales Order #' + salesOrder);


    await page.getByRole('link', { name: 'Premium Payment' }).click();
    await page.getByRole('button', { name: 'Premium Payment List Applet:New' }).click();
    await page.locator('#s_1_2_21_0_icon').click();
    await page.getByRole('link', { name: '18' }).click();
    await page.locator('[id="\\31 _s_1_l_MF_Number_Of_Times_Paid"]').click();
    await page.getByRole('textbox', { name: 'Number Of Times Paid Calculator Field' }).fill('12');
    await page.locator('[id="\\31 _s_1_l_MF_Application_Year"]').click();
    await page.getByRole('gridcell', { name: 'Application Year' }).getByRole('textbox', { name: 'Application Year' }).fill('2002');
    await page.locator('[id="\\31 _s_1_l_MF_Application_Month"]').click();
    await page.getByRole('gridcell', { name: 'Application Month' }).getByRole('textbox', { name: 'Application Month' }).fill('2');
    await page.locator('[id="\\31 _s_1_l_MF_PPR_Gross_Premium"]').click();
    await page.getByRole('textbox', { name: 'Gross Premium PPR Calculator Field' }).fill('199');
    await page.getByPlaceholder('Sales Order #').dblclick();
    await page.getByPlaceholder('Sales Order #').press('Control+c');
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Insurance+Liability+Spreadsheet+List+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Insurance+Liability+Spreadsheet+List+Applet');
    const spNumber = await page.locator('[aria-label="Spreadsheet Number"]').inputValue();
    console.log('Spreadsheet Number :' + spNumber);

    await page.getByRole('link', { name: 'Premium Payment' }).click();
    await page.getByRole('button', { name: 'Premium Payment List Applet:Query' }).click();
    await page.getByRole('textbox', { name: 'Sales Order # Link Selection Field' }).click();
    await page.getByRole('textbox', { name: 'Sales Order # Link Selection Field' }).press('Control+v');
    await page.getByRole('textbox', { name: 'Sales Order # Link Selection Field' }).press('Enter');
    await page.getByRole('button', { name: 'Premium Payment List Applet:PPR Generation Number' }).click();
   // await page.pause();
  await page.getByPlaceholder('Bank Transfer Date').click();
  await page.getByLabel('Press F2 for Date Field').click();
  await page.getByRole('button', { name: 'Next Month' }).click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByPlaceholder('Bank Transfer Date').press('Control+s');

    await page.locator('#s_2_1_6_0_icon').click();
  await page.getByRole('button', { name: 'Insurance Company Code(10 Digit) List Applet:OK' }).click();
 //   await page.locator('#ui-id-150').click();
    // await page.getByRole('button', { name: 'Insurance Company Code(10 Digit) List Applet:OK' }).click();
    await page.getByRole('button', { name: 'Insurance PPR Approval Form:Generate Approval' }).click();
    await page.getByRole('link', { name: 'PPR Approval History' }).click();

    const validApprovers = ["SCHQ-Sales-Ins-Mgr"];
    const verfyappvr = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff = new verfyappvr.appnew(page);
    for (let n = 0; n < validApprovers.length; n++) {
      const isApproverValid = await SalesGPStaff.isValidApprover(validApprovers[n],n);
    }
    
    //await page.pause();
    await page.click('#s_S_A1_div > form > div > span > div.siebui-applet-content.siebui-collapsible.siebui-collapsible-applet-content > div > div > table > tbody > tr:nth-child(3) > td:nth-child(5) > div > input');
    await page.click('#_sweappmenu > div > div.applicationMenu > a');
    await page.getByRole('menuitem', { name: 'Help' }).click();
    await page.getByRole('menuitem', { name: 'About Record... [Ctrl+Alt+K]' }).click();
    var rowID = await page.locator('[aria-label="Row #"]').textContent();
    console.log(rowID);
  //  await page.pause();


    // approver process start********

    await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View');

    await pageappvr.bringToFront();
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageappvr.locator('[id="1_s_1_l_Name"]').click();
    await pageappvr.locator('[id="1_Name"]').fill(rowID);
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await pageappvr.locator('[id="1_s_1_l_Action"]').click();
    await pageappvr.locator('[id="1_Action"]').fill('Approved');
    await pageappvr.locator('[id="1_Action"]').press('Control+s');
    await pageappvr.waitForLoadState('networkidle');


    // approver process end***********


    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.close();

})