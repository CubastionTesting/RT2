import { test, expect } from '@playwright/test';

import { chromium } from '@playwright/test';
test.setTimeout(12000000);

test.only('Sales-Staff for MDT', async () => {

  const browser = await chromium.launch({
    headless: false
  });

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
  await page38.pause()
  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=Opportunity+List+View');
  await page38.getByRole('button', { name: 'Opportunities List Applet:New' }).click();
  await page38.locator('[aria-roledescription="Account"]').nth(0).click();
  await page38.locator('[id="s_1_2_79_0_icon"]').click();
  await page38.pause()
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
  await page38.getByRole('combobox', { name: 'Product Class Combobox Field' }).fill('MDT');
  await page38.getByRole('combobox', { name: 'Product Class Combobox Field' }).press('Enter');
  await page38.locator('[id="1_s_1_l_MF_Body_Type"]').click();
  await page38.getByRole('combobox', { name: 'Body Type Combobox Field' }).fill('Others');
  await page38.getByRole('combobox', { name: 'Body Type Combobox Field' }).press('Enter');
  await page38.getByPlaceholder('Body Type*').click();
  await page38.locator('#s_2_1_109_0_icon').click();
  await page38.getByPlaceholder('Body Type*').click();
  await page38.getByPlaceholder('Body Type*').fill('Others');
  await page38.getByPlaceholder('Body Type*').press('Enter');
  await page38.locator('[class="drilldown"]').first().click();

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

  const oppnum = await page38.locator('[aria-label="Opportunity #"]').inputValue();
  console.log('Opportunity # :' + oppnum);

  await page38.getByRole('button', { name: 'Opportunity Form Applet:Auto Quote' }).click();
  await page38.waitForTimeout(5000);

  const Quote = await page38.locator('[aria-label="Quote#"]').inputValue();
  console.log('Quote : ' + Quote);

  await page38.pause();
  await page38.getByRole('cell', { name: 'RWD Press F2 for Date Field' }).getByLabel('Press F2 for Date Field').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();
  await page38.locator('[name="s_2_1_21_0"]').press("Control+s");
  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Quote+Catalog+Tree+View');
  await page38.waitForLoadState('domcontentloaded');
  await page38.locator('[name="1.5"]').click();
  await page38.locator('[id="ti_1.5_anchor"]').click();
  await page38.locator('[name="s_12_1_4_0"]').click();
  await page38.getByRole('link', { name: 'Line Items' }).click();
  await page38.waitForLoadState('domcontentloaded');
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('8354000');
  await page38.pause()
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
  //await page38.pause()
  await page38.waitForTimeout(4000);
  await page38.getByPlaceholder('Quote Name').click();
  await page38.getByPlaceholder('Quote Name').press('Alt+Control+k');

  const QuoteID = await page38.locator('[aria-label="Row #"]').textContent();
  console.log('Quote id for taking approval is : ' + QuoteID);
  await page38.getByLabel('About Record Form Applet:OK').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  console.log('\n********* From Sales-Staff - MDT (Branch Limit >= -600,000  ) *****  Expected - Branch-Sales-Mgr, Branch-Head***********\n')
    
    const jsonData = require('../RT2/sales_quotation_approval.json');
    const validApprovers = jsonData.MDT[0]['Branch-limit']['Branch-Sales-Staf'];
    const verfyappvr = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff = new verfyappvr.appnew(page38);
    for (let n = 0; n < validApprovers.length; n++) {
      const isApproverValid = await SalesGPStaff.isValidApprover(validApprovers[n],n);
    }
    //const NVApproveruser1 = [pageApp1,pageApp2]
    /*for(let n=0;n<validApprovers.length;n++){
      if(NVApproveruser1[n] == pageApp1 || NVApproveruser1[n] == pageApp2 ){
    const NVApprover1 = new verfyappvr.appnew(NVApproveruser1[n]);
      await NVApproveruser1[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await NVApproveruser1[n].bringToFront();
    await NVApprover1.correctApprover(QuoteID);
  
      } 
  
      //inbox function end
    }*/


  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=Quote+List+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Quote+List+Applet')
  await page38.waitForLoadState('domcontentloaded');
  await page38.getByLabel('Quotes List Applet:Query').click();
  await page38.getByLabel('Name', { exact: true }).fill(Quote);
  await page38.getByLabel('Name', { exact: true }).press('Enter');
  await page38.getByLabel('Quotes List Applet:Copy Quote').click();
  
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('¥3,354,000');
  await page38.pause()
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
  await page38.getByLabel('Quote Form Applet:Generate').click();
  const copyQuote = await page38.locator('[aria-label="Quote#"]').inputValue();
  console.log('Quote Copy 1 : ' + copyQuote);
  await page38.getByPlaceholder('Sales Commission Ratio').click()
  await page38.getByPlaceholder('Sales Commission Ratio').press('Alt+Control+k');
  const copyQuoteID = await page38.locator('[aria-label="Row #"]').textContent();
  console.log('Quote id for taking approval is : ' + copyQuoteID);
  await page38.getByLabel('About Record Form Applet:OK').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  console.log('\n********* From Sales-Staff - MDT (Management Limit < -600,000 & < -400,000 ) *****  Expected - "Branch-Sales-Mgr",	"Branch-Head",	"SCHQ-BizMgmt-SnrMgr",	"SCHQ-Sales-NV-Mgr", "SCHQ-SC-Head"**********\n')
    
    const validApprovers1 = jsonData.MDT[2]['managemant Limit']['Branch-Sales-Staf'];
    const NVApproveruser02 = [pageApp1,pageApp2,pageApp2,pageApp2,pageApp2]
    //const verfyappvr1 = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff1 = new verfyappvr.appnew(page38);
    for (let n = 0; n < validApprovers1.length; n++) {
      const isApproverValid1 = await SalesGPStaff1.isValidApprover(validApprovers1[n],n);
    }

    /*for(let n=0;n<validApprovers1.length;n++){
      if(NVApproveruser02[n] == pageApp1 || NVApproveruser02[n] == pageApp2){
    const NVApprover2 = new verfyappvr.appnew(NVApproveruser20[n]);
    await NVApproveruser02[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await NVApproveruser02[n].bringToFront();
    await NVApprover2.correctApprover(copyQuoteID);
  
      } 
  
      //inbox function end
    }*/
  await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(copyQuoteID);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Rejected');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');
  await page38.bringToFront();
  await page38.reload()
  await page38.pause()

  // change in  Quote for If  Operating Profit Goes Up or same

  await page38.getByLabel('Quote Form Applet: Change In').click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('8354000');
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
  await page38.getByLabel('Quote Form Applet:Generate').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  await pageApp1.bringToFront();
  console.log('\n********* From Sales-Staff - MDT (If  Operating Profit Goes Up or same) for change in progress quote case*****  Expected - "Branch-Sales-Mgr","Branch-Head"************\n')
  const validApprovers2 = jsonData.MDT[2]['managemant Limit']['Branch-Sales-Staf'];
    const NVApproveruser2 = [pageApp1,pageApp2,pageApp2,pageApp2,pageApp2]
  const SalesGPStaff2 = new verfyappvr.appnew(page38);
  for (let n = 0; n < validApprovers2.length; n++) {
    const isApproverValid2 = await SalesGPStaff2.isValidApprover(validApprovers2[n],n);
  }
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(copyQuoteID);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Rejected');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');
  await page38.bringToFront();
  await page38.reload()
  await page38.pause()
//change in  Quote for If  Operating Profit Goes Up down

  await page38.getByLabel('Quote Form Applet: Change In').click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('¥3,354,000');
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
  await page38.getByLabel('Quote Form Applet:Generate').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  await pageApp1.bringToFront();
  console.log('\n********* From Sales-Staff - MDT (< -600,000 & < -400,000) for change in progress quote case*****  Expected - "Branch-Sales-Mgr",	"Branch-Head",	"SCHQ-BizMgmt-SnrMgr",	"SCHQ-Sales-NV-Mgr", "SCHQ-SC-Head"**********\n')
  const validApprovers3 = jsonData.MDT[2]['managemant Limit']['Branch-Sales-Staf'];
  const NVApproveruser3 = [pageApp1,pageApp2,pageApp2,pageApp2,pageApp2]
//const verfyappvr1 = require('./approverfunction');
//initiating the constructor
const SalesGPStaff3 = new verfyappvr.appnew(page38);
for (let n = 0; n < validApprovers3.length; n++) {
  const isApproverValid3 = await SalesGPStaff3.isValidApprover(validApprovers3[n],n);
}

for(let n=0;n<validApprovers3.length;n++){
  if(NVApproveruser3[n] == pageApp1 || NVApproveruser3[n] == pageApp2){
const NVApprover3 = new verfyappvr.appnew(NVApproveruser3[n]);
await NVApproveruser3[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
await NVApproveruser3[n].bringToFront();
await NVApprover3.correctApprover(copyQuoteID);

  } 

  //inbox function end
}

await page38.pause()


})
test('MGR for MDT', async () => {

  const browser = await chromium.launch({
    headless: false
  });

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
  await page38.getByLabel('User ID').fill('D8FDFO22');
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
  await page38.pause()
  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=Opportunity+List+View');
  await page38.getByRole('button', { name: 'Opportunities List Applet:New' }).click();
  await page38.locator('[aria-roledescription="Account"]').nth(0).click();
  await page38.locator('[id="s_1_2_79_0_icon"]').click();
  await page38.pause()
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
  await page38.getByRole('combobox', { name: 'Product Class Combobox Field' }).fill('MDT');
  await page38.getByRole('combobox', { name: 'Product Class Combobox Field' }).press('Enter');
  await page38.locator('[id="1_s_1_l_MF_Body_Type"]').click();
  await page38.getByRole('combobox', { name: 'Body Type Combobox Field' }).fill('Others');
  await page38.getByRole('combobox', { name: 'Body Type Combobox Field' }).press('Enter');
  await page38.getByPlaceholder('Body Type*').click();
  await page38.locator('#s_2_1_109_0_icon').click();
  await page38.getByPlaceholder('Body Type*').click();
  await page38.getByPlaceholder('Body Type*').fill('Others');
  await page38.getByPlaceholder('Body Type*').press('Enter');
  await page38.locator('[class="drilldown"]').first().click();

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

  const oppnum = await page38.locator('[aria-label="Opportunity #"]').inputValue();
  console.log('Opportunity # :' + oppnum);

  await page38.getByRole('button', { name: 'Opportunity Form Applet:Auto Quote' }).click();
  await page38.waitForTimeout(5000);

  const Quote = await page38.locator('[aria-label="Quote#"]').inputValue();
  console.log('Quote : ' + Quote);

  await page38.pause();
  await page38.getByRole('cell', { name: 'RWD Press F2 for Date Field' }).getByLabel('Press F2 for Date Field').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();
  await page38.locator('[name="s_2_1_21_0"]').press("Control+s");
  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Quote+Catalog+Tree+View');
  await page38.waitForLoadState('domcontentloaded');
  await page38.locator('[name="1.5"]').click();
  await page38.locator('[id="ti_1.5_anchor"]').click();
  await page38.locator('[name="s_12_1_4_0"]').click();
  await page38.getByRole('link', { name: 'Line Items' }).click();
  await page38.waitForLoadState('domcontentloaded');
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('8354000');
  await page38.pause()
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
  //await page38.pause()
  await page38.waitForTimeout(4000);
  await page38.getByPlaceholder('Quote Name').click();
  await page38.getByPlaceholder('Quote Name').press('Alt+Control+k');

  const QuoteID = await page38.locator('[aria-label="Row #"]').textContent();
  console.log('Quote id for taking approval is : ' + QuoteID);
  await page38.getByLabel('About Record Form Applet:OK').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  console.log('\n********* From Sales-Staff - MDT (Branch Limit >= -600,000  ) *****  Expected - Branch-Sales-Mgr, Branch-Head***********\n')
    
    const jsonData = require('../RT2/sales_quotation_approval.json');
    const validApprovers = jsonData.MDT[0]['Branch-limit']['Branch-Sales-Mgr'];
    const verfyappvr = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff = new verfyappvr.appnew(page38);
    for (let n = 0; n < validApprovers.length; n++) {
      const isApproverValid = await SalesGPStaff.isValidApprover(validApprovers[n],n);
    }
    //const NVApproveruser1 = [pageApp1,pageApp2]
    /*for(let n=0;n<validApprovers.length;n++){
      if(NVApproveruser1[n] == pageApp1 || NVApproveruser1[n] == pageApp2 ){
    const NVApprover1 = new verfyappvr.appnew(NVApproveruser1[n]);
      await NVApproveruser1[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await NVApproveruser1[n].bringToFront();
    await NVApprover1.correctApprover(QuoteID);
  
      } 
  
      //inbox function end
    }*/


  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=Quote+List+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Quote+List+Applet')
  await page38.waitForLoadState('domcontentloaded');
  await page38.getByLabel('Quotes List Applet:Query').click();
  await page38.getByLabel('Name', { exact: true }).fill(Quote);
  await page38.getByLabel('Name', { exact: true }).press('Enter');
  await page38.getByLabel('Quotes List Applet:Copy Quote').click();
  
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('¥3,354,000');
  await page38.pause()
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
  await page38.getByLabel('Quote Form Applet:Generate').click();
  const copyQuote = await page38.locator('[aria-label="Quote#"]').inputValue();
  console.log('Quote Copy 1 : ' + copyQuote);
  await page38.getByPlaceholder('Sales Commission Ratio').click()
  await page38.getByPlaceholder('Sales Commission Ratio').press('Alt+Control+k');
  const copyQuoteID = await page38.locator('[aria-label="Row #"]').textContent();
  console.log('Quote id for taking approval is : ' + copyQuoteID);
  await page38.getByLabel('About Record Form Applet:OK').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  console.log('\n********* From Sales-Staff - MDT (Management Limit < -600,000 & < -400,000 ) *****  Expected - "Branch-Sales-Mgr",	"Branch-Head",	"SCHQ-BizMgmt-SnrMgr",	"SCHQ-Sales-NV-Mgr", "SCHQ-SC-Head"**********\n')
    
    const validApprovers1 = jsonData.MDT[2]['managemant Limit']['Branch-Sales-Mgr'];
    const NVApproveruser02 = [pageApp1,pageApp2,pageApp2,pageApp2,pageApp2]
    //const verfyappvr1 = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff1 = new verfyappvr.appnew(page38);
    for (let n = 0; n < validApprovers1.length; n++) {
      const isApproverValid1 = await SalesGPStaff1.isValidApprover(validApprovers1[n],n);
    }

    /*for(let n=0;n<validApprovers1.length;n++){
      if(NVApproveruser02[n] == pageApp1 || NVApproveruser02[n] == pageApp2){
    const NVApprover2 = new verfyappvr.appnew(NVApproveruser20[n]);
    await NVApproveruser02[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await NVApproveruser02[n].bringToFront();
    await NVApprover2.correctApprover(copyQuoteID);
  
      } 
  
      //inbox function end
    }*/
  await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(copyQuoteID);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Rejected');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');
  await page38.bringToFront();
  await page38.reload()
  await page38.pause()

  // change in  Quote for If  Operating Profit Goes Up or same

  await page38.getByLabel('Quote Form Applet: Change In').click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('8354000');
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
  await page38.getByLabel('Quote Form Applet:Generate').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  await pageApp1.bringToFront();
  console.log('\n********* From Sales-Staff - MDT (If  Operating Profit Goes Up or same) for change in progress quote case*****  Expected - "Branch-Sales-Mgr","Branch-Head"************\n')
  const validApprovers2 = jsonData.MDT[2]['managemant Limit']['Branch-Sales-Mgr'];
    const NVApproveruser2 = [pageApp1,pageApp2,pageApp2,pageApp2,pageApp2]
  const SalesGPStaff2 = new verfyappvr.appnew(page38);
  for (let n = 0; n < validApprovers2.length; n++) {
    const isApproverValid2 = await SalesGPStaff2.isValidApprover(validApprovers2[n],n);
  }
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(copyQuoteID);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Rejected');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');
  await page38.bringToFront();
  await page38.reload()
  await page38.pause()
//change in  Quote for If  Operating Profit Goes Up down

  await page38.getByLabel('Quote Form Applet: Change In').click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('¥3,354,000');
  await page38.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
  await page38.getByLabel('Quote Form Applet:Generate').click();
  await page38.getByRole('link', { name: 'Approval History' }).click();
  await pageApp1.bringToFront();
  console.log('\n********* From Sales-Staff - MDT (< -600,000 & < -400,000) for change in progress quote case*****  Expected - "Branch-Sales-Mgr",	"Branch-Head",	"SCHQ-BizMgmt-SnrMgr",	"SCHQ-Sales-NV-Mgr", "SCHQ-SC-Head"**********\n')
  const validApprovers3 = jsonData.MDT[2]['managemant Limit']['Branch-Sales-Mgr'];
  const NVApproveruser3 = [pageApp1,pageApp2,pageApp2,pageApp2,pageApp2]
//const verfyappvr1 = require('./approverfunction');
//initiating the constructor
const SalesGPStaff3 = new verfyappvr.appnew(page38);
for (let n = 0; n < validApprovers3.length; n++) {
  const isApproverValid3 = await SalesGPStaff3.isValidApprover(validApprovers3[n],n);
}

for(let n=0;n<validApprovers3.length;n++){
  if(NVApproveruser3[n] == pageApp1 || NVApproveruser3[n] == pageApp2){
const NVApprover3 = new verfyappvr.appnew(NVApproveruser3[n]);
await NVApproveruser3[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
await NVApproveruser3[n].bringToFront();
await NVApprover3.correctApprover(copyQuoteID);

  } 

  //inbox function end
}

await page38.pause()


})