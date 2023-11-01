import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');
const fs = require('fs');

test('record demo 1', async () => {
   test.setTimeout(1200000);
    const browser = await chromium.launch({
        headless: false
    });
    const characters ='0123456789';

function generateString(length) {
    let result = 'TEST-';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

//console.log(generateString(4));

    const context = await browser.newContext();
    const context2 = await browser.newContext();
    const context3 = await browser.newContext();
    const page = await context.newPage();
    const pageappvr = await context2.newPage();
    const pageAppvr = await context3.newPage();
    await page.waitForLoadState('networkidle');




    //login process starting
    await page.pause();
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu',{ waitUntil: 'networkidle' });
    await page.locator('[name="userid"]').fill('D8FFOR20');
    await page.locator('[id="next-btn"]').click();
    await page.locator('[name="password"]').fill('Snakamura@1');
    await page.locator('[type="submit"]').click();
    // await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(4000);
    await page.waitForLoadState();
    // await page.pause();

    //login for approver *****************
    await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu',{ waitUntil: 'networkidle' });
    await pageappvr.locator('[name="userid"]').fill('D8FDFO22');
    await pageappvr.locator('[id="next-btn"]').click();
    await pageappvr.locator('[name="password"]').fill('Snakamura@1');
    await pageappvr.locator('[type="submit"]').click();
    //await pageappvr.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(4000);
    await page.waitForLoadState();
    // await page.pause();

    // Login with Another Approver

    await pageAppvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu',{ waitUntil: 'networkidle' });
    await pageAppvr.locator('[name="userid"]').fill('D8FFOR19');
    await pageAppvr.locator('[id="next-btn"]').click();
    await pageAppvr.locator('[name="password"]').fill('Snakamura@1');
    await pageAppvr.locator('[type="submit"]').click();
    //await pageAppvr.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(4000);
    await page.waitForLoadState();
    // await page.pause();


    //  await page.pause();
    //Assessment Request process starting ************
    await page.getByRole('link', { name: 'Assessment Request' }).click();
    await page.getByRole('button', { name: 'Assessment Request List Applet:New' }).click();

    await page.locator('[aria-labelledby="1_s_1_l_MF_Assessment_Number s_1_l_MF_Assessment_Method s_1_l_altCombo"]').fill('Document Assessment');
    await page.locator('[id="\\31 _s_1_l_MF_Int_Ext_Assessment"]').click();
    await page.getByRole('combobox', { name: 'Int/Ext Assessment Combobox Field' }).fill('In');
    await page.getByRole('combobox', { name: 'Int/Ext Assessment Combobox Field' }).press('Enter');
    await page.locator('[id="\\31 _s_1_l_MF_Assessment_Purpose"]').click();
    await page.getByRole('combobox', { name: 'Assessment Purpose Combobox Field' }).fill('User');
    await page.getByRole('combobox', { name: 'Assessment Purpose Combobox Field' }).press('Enter');
    await page.locator('[id="\\31 _s_1_l_MF_Vehicle_Body_Building_Type_Detail"]').click();
    await page.getByRole('combobox', { name: 'Body Building Type Combobox Field' }).fill('Other');
    await page.getByRole('combobox', { name: 'Body Building Type Combobox Field' }).press('Enter');
     await page.locator('[id="1_s_1_l_MF_Account_Code"]').click();
     await page.locator('[aria-labelledby="s_1_l_MF_Account_Code s_1_l_altpick"]').fill('0000001341');



  
    
    await page.locator('#s_1_l_scroll [id="\\31 "]').getByRole('gridcell', { name: 'Selection Field' }).nth(2).click();
    await page.locator('#s_1_2_23_0_icon').click();
    await page.getByRole('button', { name: 'Add Vehicles List Applet:New' }).click();
    await page.getByPlaceholder('VIN #').fill(generateString(4));
    await page.getByRole('row', { name: 'Maker Required Maker  Cabin Cabin ' }).getByPlaceholder('Maker').click();
    await page.getByRole('row', { name: 'Maker Required Maker  Cabin Cabin ' }).getByPlaceholder('Maker').fill('FUSO');
    await page.getByRole('row', { name: 'Vehicle Type Required Vehicle Type  Horse Power(PS) Horse Power(PS) Press F2 for Calculator Field' }).getByPlaceholder('Vehicle Type').click();
    await page.getByRole('row', { name: 'Vehicle Type Required Vehicle Type  Horse Power(PS) Horse Power(PS) Press F2 for Calculator Field' }).getByPlaceholder('Vehicle Type').fill('Forklift');
    await page.getByRole('row', { name: 'Wheelbase Wheelbase  Product Class Required Product Class ' }).getByPlaceholder('Product Class').click();
    await page.getByRole('row', { name: 'Wheelbase Wheelbase  Product Class Required Product Class ' }).getByPlaceholder('Product Class').fill('LDT');
   
    // await page.locator('#s_3_2_40_0_icon').click();
    // await page.getByLabel('Add Vehicles', { exact: true }).getByLabel('Press F2 for Date Field').click();
  // await page.getByLabel('September2023').press('Enter');
  await page.getByLabel('Add Vehicles', { exact: true }).getByLabel('Press F2 for Date Field').click();
  // await page.getByLabel('October2023').press('Enter');
  await page.getByPlaceholder('First Registration Date').click();
  await page.getByLabel('Add Vehicles', { exact: true }).getByLabel('Press F2 for Date Field').click();
  await page.getByRole('button', { name: 'Now' }).click();
  await page.getByRole('button', { name: 'Done' }).click();

  await page.getByRole('row', { name: 'Model Code Required Model Code Press F2 for Selection Field High Floor Specification High Floor Specification ' }).getByLabel('Press F2 for Selection Field').click();
  await page.getByLabel('Pick Product List Applet:OK').click();
  await page.getByLabel('Add Vehicles List Applet:OK').click();
    // await page.getByRole('button', { name: 'Pick Product List Applet:OK' }).click();
   
    // await page.locator('#s_3_2_43_0_icon').click();
    // await page.getByRole('button', { name: 'Now' }).click();
    // await page.getByRole('button', { name: 'Done' }).click();
   
    // await page.getByRole('button', { name: 'Add Vehicles List Applet:OK' }).click();
    await page.locator('[id="1_s_1_l_MF_Planned_Arrival_Date"]').click();
    await page.locator('[id="1_MF_Planned_Arrival_Date"]').fill('2023/01/30');
    await page.getByPlaceholder('Mileage').click();
    await page.getByPlaceholder('Mileage').fill('60');
    await page.getByPlaceholder('Maximum Pay Load').click();
    await page.getByPlaceholder('Maximum Pay Load').fill('7899');

   await page.locator('[placeholder="Mission"]').fill('MT');

   // await page.locator('#s_S_A2_div > form > div > span > div.siebui-applet-content.siebui-collapsible.siebui-collapsible-applet-content > div > div > table > tbody > tr:nth-child(11) > td:nth-child(3) > div > input').fill('MT');
    // await page.locator('#s_2_1_63_0_icon').click();
    // await page.locator('#ui-id-451').click();
    await page.locator('#s_2_1_57_0_icon').click();
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    // await page.locator('#s_2_1_64_0_icon').click();
    // await page.locator('#ui-id-458').click();
    await page.locator('#s_S_A2_div > form > div > span > div.siebui-applet-content.siebui-collapsible.siebui-collapsible-applet-content > div > div > table > tbody > tr:nth-child(11) > td:nth-child(5) > div > input').fill('With Vehicle Inspection');
    await page.getByPlaceholder('Assessment Price(Min)').click();
    await page.getByPlaceholder('Assessment Price(Min)').fill('90000');
    await page.locator('#s_2_1_72_0_icon').click();
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByText('Assessment Price Entry Date').click();
    await page.locator('[class="drilldown"]').first().click();
    const yuv = await page.locator('[placeholder="Assessment #"]').inputValue();
    console.log(yuv);


    await page.getByPlaceholder('Capacity').click();
    await page.getByPlaceholder('Capacity').fill('8989');
    await page.getByRole('button', { name: 'Assessment Request Form Applet:Generate Approvals' }).click();
    await page.getByRole('link', { name: 'Approval History' }).click();
    await page.getByPlaceholder('Assessment #').click();
    await page.getByPlaceholder('Assessment #').press('Control+Alt+k');
    var rowid = await page.locator('[aria-label="Row #"]').textContent();
    console.log(rowid);
    const myChasis = await page.locator('[aria-label="Chassis #"]').inputValue();
    console.log('Chassis :-> ' + myChasis);

    //approver process start


    await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await pageappvr.bringToFront();
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageappvr.locator('[id="1_s_1_l_Name"]').click();
    await pageappvr.locator('[id="1_Name"]').fill(rowid);
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await pageappvr.locator('[id="1_s_1_l_Action"]').click();
    await pageappvr.locator('[id="1_Action"]').fill('Approved');
    await pageappvr.locator('[id="1_Action"]').press('Control+s');
    await pageappvr.waitForLoadState('networkidle');

    await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await pageappvr.bringToFront();
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageappvr.locator('[id="1_s_1_l_Name"]').click();
    await pageappvr.locator('[id="1_Name"]').fill(rowid);
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await pageappvr.locator('[id="1_s_1_l_Action"]').click();
    await pageappvr.locator('[id="1_Action"]').fill('Approved');
    await pageappvr.locator('[id="1_Action"]').press('Control+s');
    await pageappvr.waitForLoadState('networkidle');

    await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await pageappvr.bringToFront();
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageappvr.locator('[id="1_s_1_l_Name"]').click();
    await pageappvr.locator('[id="1_Name"]').fill(rowid);
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await pageappvr.locator('[id="1_s_1_l_Action"]').click();
    await pageappvr.locator('[id="1_Action"]').fill('Approved');
    await pageappvr.locator('[id="1_Action"]').press('Control+s');
    await pageappvr.waitForLoadState('networkidle');

    // approving process completed ************



    //Create purchase Contract process start ******



    await page.bringToFront();
     await page.reload('domcontententloaded');
     await page.waitForTimeout(3000);

    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Assessment+Purchase+Quote+View',{ waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    //await page.waitForNavigation('domcontentloaded');
    await page.locator('[aria-label="Assessment #"]').press('Alt+Enter');
    await page.click('#s_1_1_25_0_Ctrl > span');
    await page.locator('[class="drilldown"]').first().click();
    const mySaleQuote = await page.locator('[aria-label="Quote #"]').inputValue();
    console.log('Purchase-Quote ' + mySaleQuote);
    await page.locator('#s_2_1_15_0_icon').click();
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.locator('body').press('Alt+Enter');
    await page.getByRole('button', { name: 'Purchase Quote Form Applet:Generate Approvals' }).click();
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+UV+Purchase+Quote+Approval+View',{ waitUntil: 'networkidle' });
   // await page.waitForNavigation('domcontentloaded');
    await page.locator('[aria-label="Assessment #"]').click();
    await page.locator('[aria-label="Assessment #"]').press('Control+Alt+k');
    var rowid1 = await page.locator('[aria-label="Row #"]').textContent();
    console.log(rowid1);


    // Second time approve start ******


    await pageappvr.bringToFront();
    await pageappvr.reload('domcontententloaded');
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageappvr.locator('[id="1_s_1_l_Name"]').click();
    await pageappvr.locator('[id="1_Name"]').fill(rowid1);
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await pageappvr.locator('[id="1_s_1_l_Action"]').click();
    await pageappvr.locator('[id="1_Action"]').fill('Approved');
    await pageappvr.locator('[id="1_Action"]').press('Control+s');
    await pageappvr.waitForLoadState('networkidle');
    // await pageappvr.pause();

    //end  2nd approver process *********

    await page.bringToFront();
    await page.reload('domcontentloaded');


     // start 2nd approver process in Temporary Resale Price


     await pageAppvr.bringToFront();
     await pageAppvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
     //await page.waitForNavigation('domcontentloaded');

     await pageAppvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
     await pageAppvr.locator('[id="1_s_1_l_Name"]').click();
     await pageAppvr.locator('[id="1_Name"]').fill(rowid1);
     await pageAppvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
     await pageAppvr.locator('[id="1_s_1_l_Action"]').click();
     await pageAppvr.locator('[id="1_Action"]').fill('Approved');
     await pageAppvr.locator('[id="1_Action"]').press('Control+s');
     await pageAppvr.waitForLoadState('networkidle');

     await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
     await pageappvr.bringToFront();
     await pageappvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
     await pageappvr.locator('[id="1_s_1_l_Name"]').click();
     await pageappvr.locator('[id="1_Name"]').fill(rowid1);
     await pageappvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
     await pageappvr.locator('[id="1_s_1_l_Action"]').click();
     await pageappvr.locator('[id="1_Action"]').fill('Approved');
     await pageappvr.locator('[id="1_Action"]').press('Control+s');
     await pageappvr.waitForLoadState('networkidle');
 
 // End
     
// Stock In Verification Start *****


    await page.bringToFront();
    await page.reload('domcontentloaded');
    await page.getByRole('button', { name: 'Purchase Quote Form Applet:Create Purchase Contract' }).click();
    await page.locator('[class="drilldown"]').first().click();
    const myPurchaseContract = await page.locator('[aria-label="Purchase Contract #"]').inputValue();
    console.log('Purchase Contract :-> ' + myPurchaseContract);

    await page.getByRole('gridcell', { name: 'Date Field' }).click();
    await page.locator('#s_2_2_18_0_icon').click();
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('textbox', { name: 'Purchase Contract Received Date Date Field' }).press('Control+s');
    await page.locator('[class="drilldown"]').first().click();
    const myPurchaseOrder = await page.locator('[aria-label="Purchase Order #"]').inputValue();
    console.log('Purchase Order :-> ' + myPurchaseOrder);

  //  await page.getByRole('link', { name: 'F001196119' }).click();
    await page.getByRole('link', { name: 'Stock In Verification' }).click();
    await page.getByRole('button', { name: 'Stock In Verification List Applet:Create Verification Request' }).click();
    await page.getByRole('gridcell', { name: 'Date Time Field' }).click();
    await page.locator('#s_1_2_27_0_icon').click();
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.locator('[class="drilldown"]').first().click();
    const requestId = await page.locator('[aria-label="Request #"]').inputValue();
    console.log('RequestId :-> ' + requestId);
    await page.getByRole('button', { name: 'Stock In Verification Form Applet:Generate Approvals' }).click();
    await page.getByRole('link', { name: 'Approval History' }).click();
    await page.locator('[aria-label="Assessment #"]').click();
    await page.locator('[aria-label="Assessment #"]').press('Control+Alt+k');
    var rowid3 = await page.locator('[aria-label="Row #"]').textContent();
    console.log(rowid3);



    // Approval Generate for Stock In  Verification  ******


   
 
 // Approver Process Start ******
    
   await pageappvr.bringToFront();
   await pageappvr.reload('domcontentloaded');
   await pageappvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
   await pageappvr.locator('[id="1_s_1_l_Name"]').click();
   await pageappvr.locator('[id="1_Name"]').fill(rowid3);
   await pageappvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
   await pageappvr.locator('[id="1_s_1_l_Action"]').click();
   await pageappvr.locator('[id="1_Action"]').fill('Approved');
   await pageappvr.locator('[id="1_Action"]').press('Control+s');
   await pageappvr.waitForLoadState('networkidle');

   //Approver Process end *****

   await page.bringToFront();
  // await page.reload('domcontentloaded');
   await page.click('#s_3_1_79_0_Ctrl > span');


    // Create Temporary Resale Price Request**********
  //  await page.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+All+Purchase+Order+List+View');
    await page.locator('[aria-label="Assessment #"]').dblclick();
    await page.locator('[aria-label="Assessment #"]').press('Control+c');
    // await page.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+All+Inventory+List+View');
    //await page.waitForNavigation('domcontentloaded');

    await page.getByRole('link', { name: 'Vehicles' }).click();
    // await page.locator('[aria-label="UV Inventory List Applet:Query"]').click();
    await page.getByRole('link', { name: 'UV Inventory' }).click();
    // await page.pause();

  

    await page.locator('[aria-label="UV Inventory List Applet:Query"]').click();
    await page.getByPlaceholder('<Case Sensitive>').click();
    await page.locator('[aria-labelledby="s_1_l_MF_Assessment_Number"]').fill(yuv);
    await page.getByPlaceholder('<Case Sensitive>').press('Enter');
    await page.locator('[class="drilldown"]').first().click();
    await page.getByRole('link', { name: 'Temporary Resale Price' }).click();
    await page.getByRole('button', { name: 'Temporary Resale Price List Applet:Create Temporary Resale Price Request' }).click();
    await page.locator('[id="1_s_3_l_MF_Dealer_Resale_Price"]').click()
    await page.locator('[id="1_MF_Dealer_Resale_Price"]').fill('90000');
    await page.locator('[id="\\31 _s_3_l_MF_Direct_Resale_Price"]').click();
    await page.getByRole('textbox', { name: 'Direct Resales Suggest Price Calculator Field' }).fill('90000');
    await page.getByRole('textbox', { name: 'Direct Resales Suggest Price Calculator Field' }).press('Control+s');
    await page.getByRole('button', { name: 'Temporary Resale Price List Applet:Generate Approvals' }).click();
    await page.getByText('Temporary Resale PriceDeleteQueryGoCancelMenu 1 - 1 of 1').click();
    await page.getByRole('region').filter({ hasText: 'Temporary Resale PriceDeleteQueryGoCancelMenu 1 - 1 of 1Create Temporary Resale ' }).press('Alt+Control+k');
    // await page.locator('#\31 _s_3_l_MF_Status').click()
    // await page.locator('[id="1_MF_Dealer_Resale_Price"]').press('Control+Alt+k');
    var rowid4 = await page.locator('[aria-label="Row #"]').textContent();
    console.log(rowid4);


    //Temporary Resale request process End *********



    //Temporary Resale request Approver Start ******

    await pageappvr.bringToFront();
    await pageappvr.reload('domcontentloaded');

    await pageappvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageappvr.locator('[id="1_s_1_l_Name"]').click();
    await pageappvr.locator('[id="1_Name"]').fill(rowid4);
    await pageappvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await pageappvr.locator('[id="1_s_1_l_Action"]').click();
    await pageappvr.locator('[id="1_Action"]').fill('Approved');
    await pageappvr.locator('[id="1_Action"]').press('Control+s');
    await pageappvr.waitForLoadState('networkidle');

    //end 3rd Approver ******

    await page.bringToFront();
    await page.reload('domcontentloaded');

    // start approver process ******

    await pageAppvr.bringToFront();
    await pageAppvr.reload('domcontentloaded');
    await pageAppvr.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageAppvr.locator('[id="1_s_1_l_Name"]').click();
    await pageAppvr.locator('[id="1_Name"]').fill(rowid4);
    await pageAppvr.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await pageAppvr.locator('[id="1_s_1_l_Action"]').click();
    await pageAppvr.locator('[id="1_Action"]').fill('Approved');
    await pageAppvr.locator('[id="1_Action"]').press('Control+s');
    await pageAppvr.waitForLoadState('networkidle');


    //approver process End *********

    await page.bringToFront();
    await page.reload('domcontentloaded');
    // await page.pause();
    console.log('Assesment Completed With Assesment No. ' + yuv);
    await page.close();
    await pageappvr.close();
    await pageAppvr.close();

})