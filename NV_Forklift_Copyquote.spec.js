import { test, expect } from '@playwright/test';

import { chromium } from '@playwright/test';
test.setTimeout(12000000);

test('record demo 1', async () => {

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

  //  console.log(generateString(4));
  const context = await browser.newContext();
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();
  const context3 = await browser.newContext();

  const page38 = await context.newPage();
  const pageApp1 = await context1.newPage();
  const pageApp2 = await context2.newPage();
  const pageVehicleStaff = await context3.newPage();

  await page38.waitForLoadState('networkidle');
  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await page38.getByLabel('User ID').click();
  await page38.getByLabel('User ID').fill('D8FOFD22');
  await page38.getByRole('button', { name: 'Next' }).click();
  await page38.getByLabel('Password').fill('Snakamura@1');
  await page38.getByRole('button', { name: 'Log on' }).click();

  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await pageApp1.getByLabel('User ID').click();
  await pageApp1.getByLabel('User ID').fill('D8FDFO22');
  await pageApp1.getByRole('button', { name: 'Next' }).click();
  await pageApp1.getByLabel('Password').fill('Snakamura@1');
  await pageApp1.getByRole('button', { name: 'Log on' }).click();

  await pageApp2.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await pageApp2.getByLabel('User ID').click();
  await pageApp2.getByLabel('User ID').fill('D8FDFO22');
  await pageApp2.getByRole('button', { name: 'Next' }).click();
  await pageApp2.getByLabel('Password').fill('Snakamura@1');
  await pageApp2.getByRole('button', { name: 'Log on' }).click();

  await pageVehicleStaff.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await pageVehicleStaff.getByLabel('User ID').click();
  await pageVehicleStaff.getByLabel('User ID').fill('D8FDFO17');
  await pageVehicleStaff.getByRole('button', { name: 'Next' }).click();
  await pageVehicleStaff.getByLabel('Password').fill('Snakamura@1');
  await pageVehicleStaff.getByRole('button', { name: 'Log on' }).click();

  await page38.bringToFront();

  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=Opportunity+List+View');
  await page38.getByRole('button', { name: 'Opportunities List Applet:New' }).click();
  await page38.locator('[aria-roledescription="Account"]').nth(0).click();
  await page38.locator('[id="s_1_2_79_0_icon"]').click();
  await page38.getByRole('combobox', { name: 'Find' }).click();
  await page38.getByRole('combobox', { name: 'Find' }).fill('Account Code');
  await page38.getByRole('combobox', { name: 'Find' }).press('Enter');
  await page38.getByRole('textbox', { name: 'Starting with' }).click();
  await page38.getByRole('textbox', { name: 'Starting with' }).fill('0000001341');
  await page38.getByRole('button', { name: 'Pick Account List Applet:Go' }).click();
  await page38.locator('[id="1_s_1_l_MF_Expected_Delivery_Date"]').click();
  //await page38.locator('[]')
  await page38.locator('#s_1_2_37_0_icon').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();
  await page38.locator('[id="\\31 _s_1_l_MF_Product_Class"]').click();
  await page38.getByRole('combobox', { name: 'Product Class Combobox Field' }).fill('Forklift');
  await page38.getByRole('combobox', { name: 'Product Class Combobox Field' }).press('Enter');
  await page38.locator('[id="1_s_1_l_MF_Body_Type"]').click();
  // await page38.getByRole('row', { name: 'Opportunity Name Link 1-23P7U3V Account Selection Field Combobox Field Multiple Selection Field Requested Delivery Date Date Field In Progress Product Class ' }).getByRole('gridcell', { name: 'Combobox Field' }).nth(3).click();
  await page38.getByRole('combobox', { name: 'Body Type Combobox Field' }).fill('Others');
  await page38.getByRole('combobox', { name: 'Body Type Combobox Field' }).press('Enter');
  await page38.getByPlaceholder('Body Type*').click();
  await page38.locator('#s_2_1_109_0_icon').click();
  await page38.getByPlaceholder('Body Type*').click();
  await page38.getByPlaceholder('Body Type*').fill('Others');
  await page38.getByPlaceholder('Body Type*').press('Enter');
  await page38.locator('[class="drilldown"]').first().click();

  await page38.pause()
  await page38.locator('#s_2_1_120_0_icon').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();

  await page38.locator('#s_1_1_9_0_icon').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();
  await page38.getByPlaceholder('Usage Type').click();
  await page38.getByPlaceholder('Usage Type').fill('Bu');
  await page38.getByPlaceholder('Usage Type').press('Enter');
  await page38.locator('#s_2_1_121_0_icon').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();

  const AKMOpportunity = await page38.locator('[aria-label="Opportunity #"]').inputValue();
  console.log('Opportunity # :' + AKMOpportunity);

  await page38.getByRole('button', { name: 'Opportunity Form Applet:Auto Quote' }).click();
  await page38.waitForTimeout(5000);

  const AKMQuote = await page38.locator('[aria-label="Quote#"]').inputValue();
  console.log('Quote : ' + AKMQuote);

  await page38.locator('[id="2_s_1_l_Net_Price"]').click();
  await page38.locator('[name="Net_Price"]').click();
  await page38.locator('[name="Net_Price"]').fill('90000');
  await page38.locator('[name="Net_Price"]').press('Control+s');
  await page38.locator('[id="2_s_1_l_Cost"]').click();
  await page38.locator('[name="Cost"]').click();
  await page38.locator('[name="Cost"]').fill('80000');
  await page38.locator('[name="Cost"]').press('Control+s');
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('90000');
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');

  await page38.getByPlaceholder('Sales Type').click();
  await page38.getByPlaceholder('Sales Type').fill('Dire');
  await page38.getByPlaceholder('Sales Type').press('Enter');
  await page38.getByPlaceholder('Lease Type').click();

  await page38.getByPlaceholder('Lease Type').fill('Fin');
  await page38.getByPlaceholder('Lease Type').press('Enter');

  await page38.locator('#s_2_1_21_0_icon').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();
  await page38.locator('#s_2_1_96_0_icon').click();
  await page38.getByRole('button', { name: 'Pick Location List Applet:OK' }).click();
  await page38.getByPlaceholder('Delivery Destination').fill('Tokyo');
  await page38.getByPlaceholder('Delivery Destination').press('Control+s');

  await page38.getByRole('link', { name: 'Taxes and Expenses' }).click();
  await page38.locator('#s_1_1_39_0_icon').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();

  await page38.getByRole('button', { name: 'Taxes and Expenses List Applet:Add Taxes & Expenses' }).click();
  await page38.getByRole('link', { name: 'Finance' }).click();
  await page38.getByPlaceholder('Principal Amount').click();
  await page38.getByPlaceholder('Baseline Type').click();
  await page38.getByPlaceholder('Baseline Type').fill('Closing');
  await page38.getByPlaceholder('Baseline Type').press('Enter');
  await page38.getByPlaceholder('Baseline Type').press('Control+s');
  await page38.getByPlaceholder('Closing Date').click();
  await page38.getByPlaceholder('Closing Date').fill('30');
  await page38.getByPlaceholder('Closing Date').press('Enter');
  await page38.getByPlaceholder('Closing Date').press('Control+s');
  await page38.getByRole('link', { name: 'Line Items' }).click();

  await page38.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
  await page38.waitForTimeout(4000);
  await page38.getByPlaceholder('Quote Name').click();
  await page38.getByPlaceholder('Quote Name').press('Alt+Control+k');

  const JSRQuoteID = await page38.locator('[aria-label="Row #"]').textContent();
  console.log('Quote id for taking approval is : ' + JSRQuoteID);

  await page38.getByLabel('About Record Form Applet:OK').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();

  const jsonData = require('./sales_quotation_approval.json')
  const validApprovers = jsonData.Others[0]['Branch-limit']['Branch-Sales-Staf'];
    //const NVApproveruser1 = [pageApp1,pageApp2]
    const verfyappvr = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff = new verfyappvr.appnew(page38);
    for (let n = 0; n < validApprovers.length; n++) {
      const isApproverValid = await SalesGPStaff.isValidApprover(validApprovers[n],n);
    }

  await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRQuoteID);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Rejected');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');

  await page38.bringToFront();
  await page38.reload();
  //await page38.getByLabel('About Record Form Applet:OK').click();
  await page38.locator('[name="s_2_1_127_0"]').click();
  await page38.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
  await page38.waitForTimeout(4000);
  //await page38.getByPlaceholder('Quote Name').click();
  //await page38.getByPlaceholder('Quote Name').press('Alt+Control+k');
  console.log('From Sales-Staff-Others(Branch Limit >=0)');
  console.log('Expected - Branch-Sales-Mgr, Branch-Head');
  
  //const jsonData = require('./sales_quotation_approval.json')
  const validApprovers2 = jsonData.Others[0]['Branch-limit']['Branch-Sales-Staf'];
    //const NVApproveruser1 = [pageApp1,pageApp2]
    const verfyappvr2 = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff2 = new verfyappvr2.appnew(page38);
    for (let n = 0; n < validApprovers2.length; n++) {
      const isApproverValid = await SalesGPStaff2.isValidApprover(validApprovers2[n],n);
    }

  console.log('Actual coming - Branch-Sales-Mgr, Branch-Head');
  await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRQuoteID);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Rejected');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');

  await page38.bringToFront();
  await page38.reload();
  //await page38.getByLabel('About Record Form Applet:OK').click();
  await page38.locator('[name="s_2_1_127_0"]').click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).dblclick();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('20000');
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
  await page38.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
  await page38.waitForTimeout(4000);

    //const jsonData = require('../RT2/sales_quotation_approval.json');
    const validApprovers3 = jsonData.Others[1]['HQ Limit']['Branch-Sales-Staf'];
    const NVApproveruser3= [pageApp1,pageApp2,pageApp2]
    const verfyappvr3 = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff3 = new verfyappvr3.appnew(page38);
    for (let n = 0; n < validApprovers3.length; n++) {
      const isApproverValid1 = await SalesGPStaff3.isValidApprover(validApprovers3[n],n);
    }
 
    for(let n=0;n<validApprovers3.length;n++){
      if(NVApproveruser3[n] == pageApp1 || NVApproveruser3[n] == pageApp2 ){
    const NVApprover2 = new verfyappvr3.appnew(NVApproveruser3[n]);
    await NVApproveruser3[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await NVApproveruser3[n].bringToFront();
    await NVApprover2.correctApprover(JSRQuoteID);
 
      }
 
      //inbox function end
    }

  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+All+Quotes+across+HQ+List+View');
  const kcurl = page38.url();
  await page38.locator('[name="s_2_1_16_0"]').click();
  await page38.locator('[aria-roledescription="Name"]').click();
  await page38.locator('[name="Name"]').click();
  await page38.locator('[name="Name"]').fill(AKMQuote);
  await page38.locator('[name="Name"]').press('Enter');
  await page38.locator('[name="s_2_1_0_0"]').click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).dblclick();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('20000');
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
  await page38.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
  await page38.waitForTimeout(4000);
  await page38.getByPlaceholder('Quote Name').click();
  await page38.getByPlaceholder('Quote Name').press('Alt+Control+k');

  const CopyQuote = await page38.locator('[aria-label="Quote#"]').inputValue();
  console.log('Quote : ' + CopyQuote);

  const JSRQuoteID1 = await page38.locator('[aria-label="Row #"]').textContent();
  console.log('Quote id1 for taking approval is : ' + JSRQuoteID1);

  await page38.getByLabel('About Record Form Applet:OK').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  
  console.log('From Sales-Staff-Others(Management Limit<0)');
  console.log('Expected -["Branch-Sales-Mgr","Branch-Head","SCHQ-BizMgmt-SnrMgr"]');
  //const jsonData = require('../RT2/sales_quotation_approval.json');
  const validApprovers1 = jsonData.Others[1]['HQ Limit']['Branch-Sales-Staf'];
    const NVApproveruser2= [pageApp1,pageApp2,pageApp2]
    const verfyappvr1 = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff1 = new verfyappvr1.appnew(page38);
    for (let n = 0; n < validApprovers1.length; n++) {
      const isApproverValid1 = await SalesGPStaff1.isValidApprover(validApprovers1[n],n);
    }
 
    for(let n=0;n<validApprovers1.length;n++){
      if(NVApproveruser2[n] == pageApp1 || NVApproveruser2[n] == pageApp2 ){
    const NVApprover1 = new verfyappvr1.appnew(NVApproveruser2[n]);
    await NVApproveruser2[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await NVApproveruser2[n].bringToFront();
    await NVApprover1.correctApprover(JSRQuoteID1);
 
      }
 
      //inbox function end
    }

    console.log('Actual Coming -["Branch-Sales-Mgr","Branch-Head","SCHQ-BizMgmt-SnrMgr"]');
  /*await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRQuoteID1);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Approved');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');


  await pageApp2.bringToFront();
  await pageApp2.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp2.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp2.locator('[id="1_s_1_l_Name"]').click();
  await pageApp2.locator('[id="1_Name"]').fill(JSRQuoteID1);
  await pageApp2.locator('[aria-label="Inbox Items List Applet:Go"]').click();
  await pageApp2.locator('[id="1_s_1_l_Action"]').click();
  await pageApp2.locator('[id="1_Action"]').fill('Approved');
  await pageApp2.locator('[id="1_Action"]').press('Control+s');
  //await pageApp2.waitForLoadState('networkidle');
  await pageApp2.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp2.locator('[id="1_s_1_l_Name"]').click();
  await pageApp2.locator('[id="1_Name"]').fill(JSRQuoteID1);
  await pageApp2.locator('[aria-label="Inbox Items List Applet:Go"]').click();
  await pageApp2.locator('[id="1_s_1_l_Action"]').click();
  await pageApp2.locator('[id="1_Action"]').fill('Approved');
  await pageApp2.locator('[id="1_Action"]').press('Control+s');
  await pageApp2.waitForLoadState('networkidle');*/

})