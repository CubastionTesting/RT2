import { test, expect } from '@playwright/test';
import { ADDRGETNETWORKPARAMS } from 'dns';
const { chromium } = require('@playwright/test');
const fs = require('fs');

test('record demo 1', async () => {
  test.setTimeout(900000);
    const browser = await chromium.launch({
        headless: false
    });
    const characters = '0123456789';

    function generateString(length) {
        let result = 'TEST-';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    console.log(generateString(4));

    const context = await browser.newContext();
    const context2 = await browser.newContext();
    // const context3 = await browser.newContext();
    const context4 = await browser.newContext();
    const context5 = await browser.newContext();
    const contextX = await browser.newContext();
    const context6 = await browser.newContext();
    const context7 = await browser.newContext();
    const context8 = await browser.newContext();
    const page = await context.newPage();
    const pageappvr = await context2.newPage();


    const myPage = await context4.newPage();
    const myPage1 = await context5.newPage();
    const pageQuote=await context6.newPage();
    const pageActivity=await context7.newPage();
    const pageBB=await context8.newPage();
    await page.waitForLoadState('networkidle');
    
    //  D8fOf

    //login process starting
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
    await page.pause();
    await page.getByLabel('User ID').click();
    await page.getByLabel('User ID').fill('D8FOFD22');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Password').fill('Snakamura@1');
    await page.getByRole('button', { name: 'Log on' }).click();
    //login process starting
    await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });

    await pageappvr.getByLabel('User ID').click();
    await pageappvr.getByLabel('User ID').fill('D8FDFO22');
    await pageappvr.getByRole('button', { name: 'Next' }).click();
    await pageappvr.getByLabel('Password').fill('Snakamura@1');
    await pageappvr.getByRole('button', { name: 'Log on' }).click();
    await pageappvr.pause();

    //login process starting
    await myPage.bringToFront();
    await myPage.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
    // await myPage.pause();
    await myPage.getByLabel('User ID').click();
    await myPage.getByLabel('User ID').fill('D8FDFO25');
    await myPage.getByRole('button', { name: 'Next' }).click();
    await myPage.getByLabel('Password').fill('Snakamura@1');
    await myPage.getByRole('button', { name: 'Log on' }).click();
    await myPage.pause();

    await myPage1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
    await myPage1.pause();
    await myPage1.getByLabel('User ID').click();
    await myPage1.getByLabel('User ID').fill('D8FFOR19');
    await myPage1.getByRole('button', { name: 'Next' }).click();
    await myPage1.getByLabel('Password').fill('Snakamura@1');
    await myPage1.getByRole('button', { name: 'Log on' }).click();

    await pageQuote.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
    await pageQuote.pause();
    await pageQuote.getByLabel('User ID').click();
    await pageQuote.getByLabel('User ID').fill('D8FFOR24');
    await pageQuote.getByRole('button', { name: 'Next' }).click();
    await pageQuote.getByLabel('Password').fill('Snakamura@1');
    await pageQuote.getByRole('button', { name: 'Log on' }).click();

    await pageActivity.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
    await pageActivity.pause();
    await pageActivity.getByLabel('User ID').click();
    await pageActivity.getByLabel('User ID').fill('D8FDFO24');
    await pageActivity.getByRole('button', { name: 'Next' }).click();
    await pageActivity.getByLabel('Password').fill('Snakamura@1');
    await pageActivity.getByRole('button', { name: 'Log on' }).click();

    await pageBB.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
    await pageBB.pause();
    await pageBB.getByLabel('User ID').click();
    await pageBB.getByLabel('User ID').fill('D8FDPF17');
    await pageBB.getByRole('button', { name: 'Next' }).click();
    await pageBB.getByLabel('Password').fill('Snakamura@1');
    await pageBB.getByRole('button', { name: 'Log on' }).click();

    await page.bringToFront();
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+UV+Opportunity');
    await page.pause();
    await page.locator('div').filter({ hasText: 'File Auto Application Call List [Alt+I] Call Report [Alt+P] Create Bookmark... S' }).nth(3).click();
  await page.getByLabel('Opportunities List Applet:New').click();
  await page.locator('[id="\\31 _s_1_l_MF_Sales_Type"]').click();
  await page.locator('#s_1_2_26_0_icon').click();
  await page.locator('#ui-id-108').click();
  await page.locator('#s_1_l_scroll [id="\\31 "]').getByRole('gridcell', { name: 'Selection Field', exact: true }).click();
  await page.getByRole('textbox', { name: 'Customer Name Selection Field' }).click();
  await page.locator('#s_1_2_13_0_icon').click();
  await page.locator('#s_3_1_27_0_icon').click();
  await page.locator('#ui-id-142').click();
  await page.getByLabel('Starting with').click();
  await page.getByLabel('Starting with').fill('0000001341');
  await page.getByRole('button', { name: 'Pick Account List Applet:Go' }).click();
  
  await page.locator('[id="1_s_1_l_Expected_Delivery_Date"]').click();
  await page.getByRole('textbox', { name: 'Expected Delivery Date Date Field' }).fill('2023/10/15');
  await page.locator('#s_1_l_scroll [id="\\31 "]').getByRole('gridcell', { name: 'Calculator Field' }).first().click();
  await page.getByRole('textbox', { name: 'Expected Model Year Calculator Field' }).fill('2022');
  await page.locator('[id="\\31 _s_1_l_MF_Sales_Price"]').click();
  await page.getByRole('textbox', { name: 'Expected Sales Price Calculator Field' }).fill('1500000');
  await page.getByPlaceholder('Vehicle Type').click();
  await page.getByPlaceholder('Vehicle Type').fill('Forklift');
  await page.getByPlaceholder('Vehicle Type').press('Enter');

await page.getByPlaceholder('Maker', { exact: true }).click();
await page.getByPlaceholder('Maker', { exact: true }).fill('FUSO');
await page.getByPlaceholder('Maker', { exact: true }).press('Enter');
  await page.getByPlaceholder('Body Building Type').click();
  await page.getByPlaceholder('Body Building Type').fill('Other');
  await page.getByPlaceholder('Body Building Type').press('Enter');

  await page.locator('[name="Opportunity #"]').nth(0).click();
  
  await page.locator('[aria-label="Vehicle Search List Applet:New"]').click();
  await page.locator('[aria-label="Vehicle Search List Applet:OK"]').click();
  await page.getByLabel('Opportunity Form Applet:Create Quote').click();
  await page.locator('[name="Quote Number"]').click();
  
  await page.getByRole('cell', { name: 'Expected Order Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  await page.getByLabel('October2023').press('Enter');
  await page.getByRole('cell', { name: 'Expected Sales Posting Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  await page.getByLabel('October2023').press('Enter');
  await page.getByRole('cell', { name: 'Requested Registration Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  await page.getByLabel('October2023').press('Enter');
  await page.getByPlaceholder('Delivery Destination').click();
  await page.getByPlaceholder('Delivery Destination').fill('Osaka');
  await page.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').click();
 
  
  await page.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').click();
  await page.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').fill('90000');
  await page.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').press('Control+s');

  
  await page.pause();
  await page.locator('[aria-label="Registration Classification"]').dblclick();
  await page.locator('[aria-label="Registration Classification"]').fill('Registered');
  await page.locator('[aria-label="Usage Type"]').fill('Private');
  
  await page.getByRole('cell', { name: 'Registration Location Press F2 for Selection Field' }).getByLabel('Press F2 for Selection Field').click();
  await page.getByLabel('Pick Location List Applet:OK').click();
  await page.getByPlaceholder('Registration Location').press('Control+s');
  await page.getByLabel('UV Quotes Form Applet:Generate Approvals').click();
  await page.pause();
  
  await page.getByRole('link', { name: 'Approval History' }).click();
  
    await page.locator('[aria-label="MD Classification"]').click();
    await page.locator('[aria-label="MD Classification"]').press('Control+Alt+k');
    var rowid3 = await page.locator('[aria-label="Row #"]').textContent();
  // await page.getByLabel('Row #').press('Control+c');
  await page.pause();

    //for reject and revise
  await pageappvr.bringToFront();
  await pageappvr.getByRole('link', { name: 'Inbox' }).click();
  await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid3);
  await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
  
  await pageappvr.locator('[name="Action"]').fill('Rejected');
  await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr.waitForLoadState('networkidle');

  await page.bringToFront();
  await page.reload('domcontentloaded');
  await page.pause();

  //click on revise
  await page.getByLabel('UV Quotes Form Applet:Revise').click();
  //Add body after revision on quote
  
  await page.getByRole('link', { name: 'Body' }).click();
  await page.getByLabel('New', { exact: true }).click();
  await page.getByLabel('Create Sub Quote').click();
  await page.getByRole('link', { name: 'Sub Quote' }).click();
  await page.getByRole('grid', { name: 'Related Quote', exact: true }).locator('div').click();
//   await page.getByLabel('1-1K1H1D', { exact: true }).fill('asdf');
//   await page.getByLabel('UV Quotes Form Applet:Generate Approvals').click();
//   await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('[id="\\31 _s_1_l_MF_BB_Name"]').click();
  await page.locator('#s_1_2_38_0_icon').click();
  await page.locator('#s_6_1_101_0_icon').click();
//   await page.locator('#ui-id-338').click();
  await page.locator('#ui-id-205').click();
  await page.getByRole('textbox', { name: 'Starting with' }).click();
  await page.getByRole('textbox', { name: 'Starting with' }).fill('0000001341');
  await page.getByRole('button', { name: 'Pick Account List Applet:Go' }).click();
//   await page.getByLabel('List Price', { exact: true }).fill('7');
  await page.locator('[id="\\31 _s_1_l_MF_IBOS_List_Price"]').click();
  await page.getByLabel('List Price', { exact: true }).fill('6000');
  await page.getByLabel('Related Quote in UV Quotes').getByRole('gridcell', { name: 'Calculator Field', exact: true }).click();
  await page.getByLabel('Cost', { exact: true }).fill('5000');
  await page.getByLabel('Cost', { exact: true }).press('Control+s');
  await page.getByText('In Progress').click();
  await page.getByRole('combobox', { name: 'Status Combobox Field' }).fill('Estimated');
  await page.getByRole('combobox', { name: 'Status Combobox Field' }).press('Enter');
  await page.getByLabel('Related Quote List Applet:Update Customer Quote').click();

  //--------------------------
  // add parts after revision
  await page.getByLabel('Related Quote List Applet:New').click();
  await page.getByText('In Progress').click();
  await page.getByRole('combobox', { name: 'Status Combobox Field' }).fill('Request for Quotation');
  await page.getByRole('combobox', { name: 'Status Combobox Field' }).press('Enter');
  await page.getByRole('combobox', { name: 'Status Combobox Field' }).press('Control+s');
   
  await page.getByLabel('Related Quote List Applet:Query').click();
  await page.locator('[id="\\31 _s_1_l_MF_Quote_Display_Type"]').click();
  await page.getByPlaceholder('<Case Sensitive>').fill('Parts');
  await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  // await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  await page.locator('[aria-roledescription="Name"]').click();
  var quoteno = await page.locator('[name="Name"]').inputValue();

  await pageQuote.bringToFront();
  await pageQuote.getByRole('link', { name: 'Parts Quotes' }).click();
  await pageQuote.getByLabel('Quotes List Applet:Query').click();
  await pageQuote.getByLabel('Quote#', { exact: true }).fill(quoteno);
  await pageQuote.getByLabel('Quote#', { exact: true }).press('Enter');
  // await pageQuote.getByRole('link', { name: '1-1K2Q4X' }).click();
  await pageQuote.locator('[name="Quote Name"]').click();
  await pageQuote.getByLabel('Line Items List Applet:New').click();
  await pageQuote.getByLabel('Parts #', { exact: true }).fill('#10TESTRS002');
  await pageQuote.getByLabel('Parts #', { exact: true }).press('Control+S');
  await pageQuote.getByLabel('Quote Form Applet:Estimated').click();

  // ---------------------

  await page.bringToFront();
  await page.reload('domcontentloaded');
  await page.getByLabel('Related Quote List Applet:Update Customer Quote').click();
  await page.pause();
  
  // await page.getByRole('link', { name: 'Activities' }).click();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+UV+Quote+Activities+View')
  await page.getByLabel('Activities List Applet:Create Activity').click();
  await page.getByTitle('Open', { exact: true }).click();
  await page.locator('[name="Status"]').fill('Request for Quotation');
  await page.getByLabel('', { exact: true }).nth(4).click();
  await page.getByLabel('Job Card Type', { exact: true }).fill('26: UV Repair(Transfer)');
  await page.getByLabel('Job Card Type', { exact: true }).press('Control+s');
  await page.locator('[aria-roledescription="Activity #"]').click();
  var myAct = await page.locator('[name="Activity_UID"]').inputValue();
  await page.pause();
  // console.log(myAct);
  await pageActivity.bringToFront();


  await pageActivity.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Service+Actual+Expense+Items+List+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Service+Actual+Expense+Items+List+Applet&SWERowId0=1-AP8FW');
  await pageActivity.getByRole('link', { name: 'Internal Work Request' }).click();
  await pageActivity.getByLabel('Internal Work Request List Applet:Query').click();
  await pageActivity.getByPlaceholder('<Case Sensitive>').fill(myAct);
  await pageActivity.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageActivity.getByTitle('Visibility').selectOption('My Branch Internal Work Request');
  await pageActivity.getByLabel('Internal Work Request List Applet:Create Job Card').click();
  await pageActivity.getByRole('link', { name: 'Work Order', exact: true }).click();
  await pageActivity.getByLabel('Work Orders List Applet:New').click();
  // await page.getByRole('link', { name: '1-1K49U4' }).click();
  await pageActivity.locator('[name="Activity UID"]').click();
  await pageActivity.getByLabel('Labor List Applet:New').click();
  await pageActivity.locator('[id="\\31 _s_1_l_MF_Labor_Code"]').click();
  await pageActivity.locator('#s_1_2_64_0_icon').click();
  await pageActivity.getByLabel('Pick Labor Code List Applet:OK').click();
  await pageActivity.getByText('0', { exact: true }).click();
  await pageActivity.getByLabel('Net Operation Time', { exact: true }).fill('1');
  await pageActivity.getByLabel('Net Operation Time', { exact: true }).press('Control+s');
  await pageActivity.getByRole('link', { name: 'Lubrication' }).click();
  await pageActivity.getByLabel('Lubrication List Applet:New').click();
  await pageActivity.getByRole('gridcell', { name: 'Selection Field' }).first().click();
  await pageActivity.locator('#s_1_2_69_0_icon').click();
  await pageActivity.getByLabel('Pick Product List Applet:OK').click();
  await pageActivity.getByLabel('Parts #', { exact: true }).press('Control+s');
  await pageActivity.getByLabel('Work Order Form Applet:Create/Sync Quote').click();
  // await page.getByRole('link', { name: '1-1K49UK' }).click();
  await pageActivity.locator('[name="Name"]').click();
  await pageActivity.getByLabel('Quote Form Applet:Update Sale Quote').click();
  await pageActivity.pause();

  // ---------------------

  await page.bringToFront();
  await page.reload('domcontentloaded');

  await page.getByRole('link', { name: 'Sub Quote' }).click();
  await page.getByLabel('Related Quote List Applet:Query').click();
  await page.locator('[id="\\31 _s_1_l_MF_Quote_Display_Type"]').click();
  await page.getByPlaceholder('<Case Sensitive>').fill('Service Quote');
  await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  // await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  await page.getByLabel('Related Quote List Applet:Update Customer Quote').click();

  await page.reload('domcontentloaded');

  await page.getByLabel('UV Quotes Form Applet:Generate Approvals').click();
  await page.getByRole('link', { name: 'Approval History' }).click();
  
  await page.locator('[aria-label="MD Classification"]').click();
  await page.locator('[aria-label="MD Classification"]').press('Alt+Control+k');
  var rowid11=await page.locator('[aria-label="Row #"]').textContent();
    // await page.bringToFront();
  
  await pageappvr.getByRole('link', { name: 'Inbox' }).nth(0).click();
  await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid11);
  await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr.pause();
  
  await pageappvr.locator('[aria-roledescription="Action"]').click();
  await pageappvr.locator('[name="Action"]').fill('Approved');
  await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr.waitForLoadState('networkidle');

    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.pause();

    await myPage.bringToFront();
    await myPage.getByRole('link', { name: 'Inbox' }).nth(0).click();
  await myPage.getByLabel('Inbox Items List Applet:Query').click();
  await myPage.getByRole('gridcell', { name: 'Link' }).click();
  await myPage.getByPlaceholder('<Case Sensitive>').fill(rowid11);
  await myPage.getByPlaceholder('<Case Sensitive>').press('Enter');
  await myPage.pause();
  await myPage.locator('[aria-roledescription="Action"]').click();
  await myPage.locator('[name="Action"]').fill('Approved');
  await myPage.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await myPage.getByLabel('Action', { exact: true }).press('Control+s');
  await myPage.waitForLoadState('networkidle');
    
    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.pause();
    //3rd level appr
    

    await pageappvr.bringToFront();
    await pageappvr.getByRole('link', { name: 'Inbox' }).nth(0).click();
  await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid11);
  await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr.pause();
  await pageappvr.locator('[aria-roledescription="Action"]').click();
  await pageappvr.locator('[name="Action"]').fill('Approved');
  await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr.waitForLoadState('networkidle');
    
    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.pause();

    //myPage1
    await myPage1.bringToFront();
    await myPage1.getByRole('link', { name: 'Inbox' }).nth(0).click();
  await myPage1.getByLabel('Inbox Items List Applet:Query').click();
  await myPage1.getByRole('gridcell', { name: 'Link' }).click();
  await myPage1.getByPlaceholder('<Case Sensitive>').fill(rowid11);
  await myPage1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await myPage1.pause();
  await myPage1.locator('[aria-roledescription="Action"]').click();
  await myPage1.locator('[name="Action"]').fill('Approved');
  await myPage1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await myPage1.getByLabel('Action', { exact: true }).press('Control+s');
  await myPage1.waitForLoadState('networkidle');

    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.pause();
    

  //   await page.locator('tr:nth-child(44) > td:nth-child(6)').click();
  //   await page.getByText('Pending for Approval').click();
  //   await page.locator('[aria-label="MD Classification"]').click();
  //   await page.locator('[aria-label="MD Classification"]').press('Control+Alt+k');
  //   var rowid4 = await page.locator('[aria-label="Row #"]').textContent();

  //   await myPage.bringToFront();
  //   await myPage.getByRole('link', { name: 'Inbox' }).click();
  //   await myPage.getByLabel('Inbox Items List Applet:Query').click();
  //   await myPage.getByRole('gridcell', { name: 'Link' }).click();
  //   await myPage.getByPlaceholder('<Case Sensitive>').fill(rowid4);
  //   await myPage.getByPlaceholder('<Case Sensitive>').press('Enter');
  //   await myPage.getByRole('gridcell', { name: 'Combobox Field' }).click();
  //   await myPage.locator('#s_2_2_24_0_icon').click();
  //   await myPage.locator('#ui-id-149').click();
  //   await myPage.getByLabel('Action', { exact: true }).press('Control+s');
  //   await myPage.waitForLoadState('networkidle');

  //   await page.bringToFront();
  //   await page.reload('domcontentloaded');
  //   await page.pause();

  //   //3rd level approval
  //   await page.locator('[aria-describedby="s_2_2_24_0_icon"]').click();
  //   await page.locator('[aria-label="MD Classification"]').click();
  //   await page.locator('[aria-label="MD Classification"]').press('Control+Alt+k');
  //   var rowid21 = await page.locator('[aria-label="Row #"]').textContent();
  // await page.pause();
  // await pageappvr.bringToFront();
  // await pageappvr.getByRole('link', { name: 'Inbox' }).click();
  // await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
  // await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
  // await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid21);
  // await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
  // await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
  // await pageappvr.locator('[name="Action"]').fill('Approved');
  // await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
  // await pageappvr.waitForLoadState('networkidle');

  // await page.bringToFront();
  // await page.reload('domcontentloaded');
  // await page.pause();


    await page.getByLabel('UV Quotes Form Applet:Create Order').click();
    await page.getByRole('cell', { name: 'Last Contract Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
    await page.getByLabel('October2023').press('Enter');
    await page.getByLabel('Sales Flag').check();
    await page.getByLabel('Sales Flag').press('Control+s');
    await page.getByLabel('Sales Order Form Applet:Generate Approvals').click();
    await page.getByRole('link', { name: 'Approval History' }).click();
    await page.getByRole('link', { name: 'Approval History' }).click();
    await page.pause();
    
    //1st approver
    await page.locator('[aria-label="MD Classification"]').click();
    await page.locator('[aria-label="MD Classification"]').press('Control+Alt+k');
    var rowid5 = await page.locator('[aria-label="Row #"]').textContent();

    await page.pause();
  await pageappvr.bringToFront();
  await pageappvr.pause();
  await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid5);
  await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageappvr.locator('#s_2_2_24_0_icon').click();
  await pageappvr.locator('[name="Action"]').fill('Approved');
  await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr.waitForLoadState('networkidle');

    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.pause();

    //2nd approver
    await page.locator('tr:nth-child(27) > td:nth-child(7)').click();
    await page.getByText('Pending for Approval').click();
    await page.locator('[aria-label="Ownership Change Completed Date"]').click();
    await page.locator('[aria-label="MD Classification"]').press('Control+Alt+k');
    var rowid6 = await page.locator('[aria-label="Row #"]').textContent();

    await myPage.bringToFront();
    //await myPage.getByRole('link', { name: 'Inbox' }).click();
    await myPage.getByLabel('Inbox Items List Applet:Query').click();
    await myPage.getByRole('gridcell', { name: 'Link' }).click();
    await myPage.getByPlaceholder('<Case Sensitive>').fill(rowid6);
    await myPage.getByPlaceholder('<Case Sensitive>').press('Enter');
    await myPage.getByRole('gridcell', { name: 'Combobox Field' }).click();
    // await myPage.locator('#s_2_2_24_0_icon').click();
    // await myPage.locator('#ui-id-149').click();
    await myPage.locator('[name="Action"]').fill('Approved');
    await myPage.getByLabel('Action', { exact: true }).press('Control+s');
    await myPage.waitForLoadState('networkidle');

    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.pause();

    //PO mapping and Invoice

    await page.getByRole('link', { name: 'Purchase Order' }).click();
    await page.getByLabel('Purchase Order List Applet:Map').click();
    await page.getByLabel('Purchase Orders List Applet:OK').click();
    // await page.getByLabel('Purchase Order List Applet:Map').click();
    // await page.getByLabel('Purchase Orders List Applet:OK').click();
    
  await page.getByRole('link', { name: 'Line Items' }).click();
  await page.getByRole('link', { name: 'Body' }).click();
  
  await page.getByLabel('Body List Applet:Create Purchase Order').click();
  await page.getByRole('link', { name: 'Parts & Internal Work' }).click();
  
  await page.getByLabel('Parts Internal Line Items List Applet:Query').click();
  await page.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await page.getByPlaceholder('<Case Sensitive>').fill('Parts');
  await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  // await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  await page.getByLabel('Parts Internal Line Items List Applet:Create Purchase Order').click();
  await page.getByLabel('Parts Internal Line Items List Applet:Query').click();
  await page.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await page.getByPlaceholder('<Case Sensitive>').fill('Labor');
  // await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  await page.getByLabel('Parts Internal Line Items List Applet:Create Activity').click();
  await page.getByRole('link', { name: 'Purchase Order' }).click();


  //Body PO process
  await page.pause();
  await page.getByLabel('Purchase Order List Applet:Query').click();
  await page.getByRole('gridcell', { name: 'Combobox Field' }).nth(1).click();
  await page.getByPlaceholder('<Case Sensitive>').fill('UV Body Building Order');
  await page.getByPlaceholder('<Case Sensitive>').press('Enter');
  var bodyPO = await page.locator('[name="Order_Number"]').textContent();
  await pageBB.bringToFront();

  await pageBB.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+UV+Body+Building+Order+View');
  await pageBB.getByLabel('UV Body Building Order List Applet:Query').click();
  await pageBB.getByPlaceholder('<Case Sensitive>').fill(bodyPO);
  await pageBB.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageBB.getByRole('gridcell', { name: 'Other' }).click();
  // await page.getByRole('link', { name: 'F000012446' }).click();
  await pageBB.locator('[name="Order Number"]').click();
  await pageBB.locator('[id="\\31 _s_1_l_Body_Building_Name_PO_"]').click();
  await pageBB.getByLabel('AdditionalBody', { exact: true }).fill('ABCD');
  await pageBB.getByLabel('Body Building Order Form Applet:Generate Approvals').click();
  await pageBB.getByRole('link', { name: 'Approvals' }).click();
  await pageBB.getByPlaceholder('Requested Registration Date').click();
  await pageBB.getByPlaceholder('Requested Registration Date').press('Alt+Control+K');
  var rowid12 = await pageBB.locator('[aria-label="Row #"]').textContent();

  await pageappvr.bringToFront();
  // await pageappvr.pause();
  await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid12);
  await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageappvr.locator('#s_2_2_24_0_icon').click();
  await pageappvr.locator('[name="Action"]').fill('Approved');
  await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr.waitForLoadState('networkidle');

  await pageBB.bringToFront();
  await pageBB.reload('domcontentloaded');
  // await pageappvr.bringToFront();
  await pageappvr.pause();
  await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid12);
  await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageappvr.locator('#s_2_2_24_0_icon').click();
  await pageappvr.locator('[name="Action"]').fill('Approved');
  await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr.waitForLoadState('networkidle');

  await pageBB.bringToFront();
  await pageBB.reload('domcontentloaded');

  await pageBB.getByPlaceholder('Purchase Order Body Building Order status').click();
  await pageBB.locator('#s_2_1_158_0_icon').click();
  await pageBB.locator('#ui-id-102').click();
  await pageBB.getByPlaceholder('Purchase Order Body Building Order status').press('Control+s');
  await pageBB.reload('domcontentloaded');
  
  await page.bringToFront();
  await page.reload('domcontentloaded');



  //Body PO End===================================================================

    await page.getByLabel('Sales Order Form Applet:Auto Invoice').click();
    // await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=FS+Invoice+Line+Item+Details+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=FS+Invoice+Entry+Applet+w/Total+(new)&SWERowId0=1-1G4J6L&SWEApplet1=FS+Invoice+Line+Items+List+Applet&SWERowId1=1-1G4J6O');
    await page.locator('[id="\\35 "]').getByRole('gridcell', { name: 'Currency Calculator Field' }).click();
    await page.getByLabel('Amount', { exact: true }).fill('¥01000');
    await page.getByLabel('Amount', { exact: true }).press('Control+s');
    await page.locator('[id="\\34 "]').getByRole('gridcell', { name: 'Currency Calculator Field' }).click();
    await page.getByRole('textbox', { name: 'Amount Currency Calculator Field' }).fill('¥01000');
    await page.locator('[id="\\33 "]').getByRole('gridcell', { name: 'Currency Calculator Field' }).click();
    await page.getByRole('textbox', { name: 'Amount Currency Calculator Field' }).fill('¥01000');
    await page.getByLabel('Details in Line Items').locator('[id="\\32 "]').getByRole('gridcell', { name: 'Currency Calculator Field' }).click();
    await page.getByRole('textbox', { name: 'Amount Currency Calculator Field' }).fill('¥01000');
    await page.getByLabel('Details in Line Items').getByRole('gridcell', { name: 'Currency Calculator Field', exact: true }).click();
    await page.getByRole('textbox', { name: 'Amount Currency Calculator Field' }).fill('¥01000');
    await page.getByRole('cell', { name: 'Expense Payment Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
    await page.getByLabel('October2023').press('Enter');
    // await page.locator('#s_2_1_35_0_icon').click();
    // await page.locator('#ui-id-198').click();
    await page.locator('[aria-label="Expense Payment Method"]').fill('AR Bank Transfer');
    await page.getByPlaceholder('Expense Payment Method').press('Control+s');
    await page.getByLabel('Invoices Form Applet:Group').click();
    await page.getByLabel('Invoices Form Applet:Generate Approvals').click();
    await page.getByRole('link', { name: 'Approvals' }).click();
    await page.pause();
    
    await page.pause();
    await page.locator('[aria-label="Payment Term Type"]').click();
    await page.locator('[aria-label="Payment Term Type"]').press('Control+Alt+k');
    var rowid8 = await page.locator('[aria-label="Row #"]').textContent();
     console.log(rowid8);
    await page.pause();
    await pageappvr.bringToFront();
    await pageappvr.reload('domcontentloaded');
    
    //
    await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
    await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
    await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid8);
    await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
    //  name="Action"
    // await pageappvr.locator('[name="Action"]').click();
    await pageappvr.locator('[aria-roledescription="Action"]').click();
    await pageappvr.locator('[name="Action"]').fill('Approved');
    await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
    await pageappvr.waitForLoadState('networkidle');
    
    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.getByRole('link', { name: 'Invoice Details' }).click();
    await page.locator('[aria-label="Order #"]').click();
    var order = await page.locator('[aria-label="Order #"]').inputValue();
    await page.pause();

    // await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+UV+Sales+Order+Line+Items+Detail+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+UV+Sales+Order+Form+Applet&SWERowId0=1-1G4JP6&SWEApplet1=MF+UV+Order+Entry+-+Line+Item+List+Applet+(Sales)&SWERowId1=1-1G4JPH');
    await goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView');
    await page.getByLabel('Sales Orders List Applet:Query').click();
    await page.getByPlaceholder('<Case Sensitive>').fill(order);
    await page.getByPlaceholder('<Case Sensitive>').press('Enter');
    // await page.getByRole('gridcell', { name: 'Combobox Field' }).click();
    // await page.getByRole('link', { name: 'E000010267' }).click();
    await page.locator('[name="Order Number"]').click();

    // await page.getByRole('link', { name: 'Registration Request' }).click();
    // await page.getByLabel('Registration Request List Applet:Create Registration Request').click();
    await page.getByRole('link', { name: 'Registration Request' }).click();
    await page.getByLabel('Registration Request List Applet:Create Registration Request').click();
    // await page.getByPlaceholder('Chassis #').click({
    //   clickCount: 5
    // });
    await page.locator('[aria-label="Chassis #"]').click();
    // await page.getByPlaceholder('aria-label="Chassis #').press('Control+c');
    var rowid9 = await page.locator('[aria-label="Chassis #"]').inputValue();
    console.log(rowid9);
    await myPage1.bringToFront();
    await myPage1.getByRole('link', { name: 'Vehicles' }).click();
  //await page.getByLabel('Vehicles List Applet:Query').click();
    await myPage1.getByRole('link', { name: 'Auto Vehicle List' }).click();
    await myPage1.getByLabel('Vehicles List Applet:Query').click();
    await myPage1.getByRole('gridcell', { name: 'Link' }).click();
    await myPage1.getByRole('textbox', { name: 'Chassis # Link' }).fill(rowid9);
    await myPage1.getByRole('textbox', { name: 'Chassis # Link' }).press('Enter');
    await myPage1.getByText('AA273KANR4').click();
    // await myPage1.getByRole('link', { name: 'TEST-8752' }).click();
    await myPage1.locator('[name="Serial Number"]').click();
    await myPage1.getByRole('cell', { name: 'Registration No. Land Name Area Name Press F2 for Selection Field' }).getByLabel('Press F2 for Selection Field').click();
    await myPage1.getByLabel('Pick Location List Applet:OK').click();
    await myPage1.getByLabel('Registration No Class No').click();
    await myPage1.getByLabel('Registration No Class No').fill('12345');
    await myPage1.getByLabel('Registration No Japanese Kana').click();
    await myPage1.getByLabel('Registration No Japanese Kana').fill('12345');
    await myPage1.getByLabel('Registration No Sequence No').click();
    await myPage1.getByLabel('Registration No Sequence No').fill('12345');
    await myPage1.getByLabel('Serial #').click();
    await myPage1.getByLabel('Full Model Code2').click();
    await myPage1.getByLabel('Full Model Code2').fill('12345');
    await myPage1.getByLabel('Full Model Code2').press('Control+s');

    // await myPage1.bringToFront();
    await page.bringToFront();
    
    await page.locator('[name="Type"]').click();
    await page.locator('[data-display="Request"]').click();
    await page.locator('[data-display="Complete"]').click();
    
    await page.pause();
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView');
    await page.getByLabel('Sales Orders List Applet:Query').click();
    await page.getByPlaceholder('<Case Sensitive>').fill(order);
    await page.getByPlaceholder('<Case Sensitive>').press('Enter');
    await page.locator('[name="Order Number"]').click();
    //delivery
    await page.getByRole('link', { name: 'Delivery Request' }).click();
    await page.getByLabel('Delivery Request List Applet:Create Delivery Request').click();
    // await page.getByRole('link', { name: '1-1GUW6E' }).click();
    await page.locator('[name="MF Request Number"]').nth(0).click();
    // await page.locator('#s_1_1_49_0_icon').click();
    // await page.locator('#ui-id-603').click();
    await page.pause();
    await page.locator('[aria-label="Status"]').dblclick();
    await page.locator('[aria-label="Status"]').fill('Pending Delivery');
    await page.getByRole('cell', { name: 'Delivery Completed Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
    await page.getByLabel('October2023').press('Enter');
    // await page.locator('#s_1_1_49_0_icon').click();
    // await page.locator('#ui-id-607').click();
    await page.locator('[aria-label="Status"]').dblclick();
    await page.locator('[aria-label="Status"]').fill('Completed');
    await page.getByPlaceholder('Status', { exact: true }).press('Control+s');
    //await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+UV+Sales+Order+Line+Items+Detail+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+UV+Sales+Order+Form+Applet&SWERowId0=1-1G4JP6&SWEApplet1=MF+UV+Order+Entry+-+Line+Item+List+Applet+(Sales)&SWERowId1=1-1G4JPH');
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView');
    await page.getByLabel('Sales Orders List Applet:Query').click();
    await page.getByPlaceholder('<Case Sensitive>').fill(order);
    await page.getByPlaceholder('<Case Sensitive>').press('Enter');
    await page.locator('[name="Order Number"]').click();
    //approval
    await page.getByRole('link', { name: 'Approval History' }).click();
    await page.getByText('Pending for Approval').click();
    // await page.getByPlaceholder('MD Classification').click();
    await page.locator('[aria-label="MD Classification"]').click();
    await page.locator('[aria-label="MD Classification"]').press('Control+Alt+k');
    var rowid10 = await page.locator('[aria-label="Row #"]').textContent();

    await pageappvr.bringToFront();
    await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
    await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
    await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid10);
    await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
    await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
    await pageappvr.locator('#s_2_2_24_0_icon').click();
    await pageappvr.locator('[name="Action"]').fill('Approved');
    await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
    await pageappvr.waitForLoadState('networkidle');

    await page.bringToFront();
    await page.pause();
    await page.close();
    await pageappvr.close();
    await myPage.close();

})
