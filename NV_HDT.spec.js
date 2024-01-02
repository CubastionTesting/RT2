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
  await page38.getByRole('combobox', { name: 'Product Class Combobox Field' }).fill('HDT');
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

  await page38.getByRole('cell', { name: 'RWD Press F2 for Date Field' }).getByLabel('Press F2 for Date Field').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();
  await page38.getByRole('link', { name: 'Chassis', exact: true }).click();
  await page38.getByLabel('Chassis List Applet:New').click();
  await page38.getByLabel('Product Name', { exact: true }).click();
  await page38.getByLabel('Product Name', { exact: true }).fill('FP74GGR2XCVA');
  await page38.getByLabel('Product Name', { exact: true }).press('Enter');
  await page38.getByLabel('Pick Product List Applet:Query').click();
  await page38.getByPlaceholder('<Case Sensitive>').fill('FP74GGR2XCVA');
  await page38.getByPlaceholder('<Case Sensitive>').press('Enter');
  await page38.getByLabel('Pick Product List Applet:OK').click();
  await page38.getByLabel('Product Name', { exact: true }).press('Control+s');
  await page38.getByRole('link', { name: 'Line Details' }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).click();
  await page38.getByPlaceholder('Sales Price', { exact: true }).fill('15000000');
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

  await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRQuoteID);
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
  await pageApp2.locator('[id="1_Name"]').fill(JSRQuoteID);
  await pageApp2.locator('[aria-label="Inbox Items List Applet:Go"]').click();
  await pageApp2.locator('[id="1_s_1_l_Action"]').click();
  await pageApp2.locator('[id="1_Action"]').fill('Approved');
  await pageApp2.locator('[id="1_Action"]').press('Control+s');
  await pageApp2.waitForLoadState('networkidle');

  await page38.bringToFront();
  await page38.reload();
  await page38.waitForTimeout(3000);
  await page38.getByRole('button', { name: 'Quote Form Applet:Auto Order' }).click();
  await page38.waitForTimeout(3000);
  await page38.getByRole('link', { name: 'Order Sheet' }).click();
  await page38.locator('[aria-label="Last Contract Date"]').fill(' ');
  await page38.waitForTimeout(2000);
  await page38.locator('[aria-label="Last Contract Date"]').press('Enter');

  const AKMOrder = await page38.locator('[aria-label="Order #"]').inputValue();
  console.log('Order # :' + AKMOrder);

  await page38.pause()
  await page38.getByPlaceholder('Last Contract Date').press('Control+s');
  await page38.getByRole('link', { name: 'Line Items' }).click();
  await page38.waitForTimeout(3000);
  await page38.getByRole('button', { name: 'Sales Order Form Applet:Generate Approvals' }).click();

  const AKMOrderId = await page38.locator('[aria-label="Sales Order #"]').inputValue();
  console.log('Sales Order #: ' + AKMOrderId);

  await page38.getByPlaceholder('Required Qty').click();
  await page38.getByPlaceholder('Required Qty').press('Alt+Control+k');

  var JSRrowid1 = await page38.locator('[aria-label="Row #"]').textContent();
  console.log('Sales order screen ki ID :-> ' + JSRrowid1);

  await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRrowid1);
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
  await pageApp2.locator('[id="1_Name"]').fill(JSRrowid1);
  await pageApp2.locator('[aria-label="Inbox Items List Applet:Go"]').click();
  await pageApp2.locator('[id="1_s_1_l_Action"]').click();
  await pageApp2.locator('[id="1_Action"]').fill('Approved');
  await pageApp2.locator('[id="1_Action"]').press('Control+s');
  await pageApp2.waitForLoadState('networkidle');

  await page38.bringToFront();
  await page38.reload();
  await page38.getByRole('link', { name: 'Purchase Order' }).click();
  await page38.getByLabel('Purchase Order List Applet:Map').click();
  await page38.getByLabel('Purchase Orders List Applet:Query').click();
  await page38.locator('[id="\\31 _s_4_l_MF_Status"]').click();
  await page38.getByPlaceholder('<Case Sensitive>').fill('Shipment Instructed');
  await page38.getByPlaceholder('<Case Sensitive>').press('Enter');
  await page38.getByRole('textbox', { name: 'Starting with' }).click();
  await page38.getByRole('textbox', { name: 'Starting with' }).fill('B000010098');
  await page38.getByRole('textbox', { name: 'Starting with' }).press('Enter');
  await page38.getByLabel('Purchase Orders List Applet:OK').click();
  await page38.waitForTimeout(3000);

  await page38.getByRole('link', { name: 'Line Items', exact: true }).click();
  await page38.getByLabel('Sales Order Form Applet:Auto Invoice').click();
  await page38.getByRole('cell', { name: 'Expense Payment Date Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  await page38.getByRole('button', { name: 'Now' }).click();
  await page38.getByRole('button', { name: 'Done' }).click();
  await page38.getByPlaceholder('Expense Payment Method').click();
  await page38.getByPlaceholder('Expense Payment Method').fill('Cash');
  await page38.getByPlaceholder('Expense Payment Method').press('Control+s');
  await page38.getByLabel('Invoices Form Applet:Group').click();
  await page38.getByLabel('Invoices Form Applet:Generate Approvals').click();
  await page38.getByRole('link', { name: 'Approvals' }).click();
  await page38.getByPlaceholder('Bill Cycle').click();
  await page38.getByPlaceholder('Bill Cycle').press('Alt+Control+k');

  var JSRInvoiceID = await page38.locator('[aria-label="Row #"]').textContent();
  console.log("Invoice Id id : " + JSRInvoiceID);

  await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRInvoiceID);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Approved');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');

  await page38.bringToFront();
  await page38.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Registration+%26+Delivery+Request+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Order+Entry+-+Order+Form+Applet+Dashboard+(Sales)', {waitUntil: 'networkidle'});
  await page38.waitForTimeout(3000);
  await page38.getByLabel('Registration & Delivery Request List Applet:Create Registration Request').click();
  await page38.waitForTimeout(5000);
  await page38.getByPlaceholder('Registration #', { exact: true }).click();
  await page38.getByPlaceholder('Chassis', { exact: true }).click();
  const JSRVin = await page38.locator('[aria-label="Chassis"]').inputValue();
  console.log("VIN Number is : " + JSRVin);
  await page38.locator('[class="drilldown"]').click();
  await page38.waitForTimeout(2000);
  await page38.getByLabel('Registration and Delivery Request Form:Request').click();

  await pageVehicleStaff.bringToFront();
//   await pageVehicleStaff.goto(' ', { waitUntil: 'networkidle' });
  await pageVehicleStaff.getByRole('link', { name: 'Vehicles' }).click();
  await pageVehicleStaff.getByRole('link', { name: 'Auto Vehicle List' }).click();
  await pageVehicleStaff.getByLabel('Vehicles List Applet:Query').click();
  await pageVehicleStaff.getByRole('gridcell', { name: 'Link' }).click();
  await pageVehicleStaff.getByRole('textbox', { name: 'Chassis # Link' }).fill(JSRVin);
  await pageVehicleStaff.getByRole('textbox', { name: 'Chassis # Link' }).press('Enter');
  await pageVehicleStaff.getByPlaceholder('Registered Model Code').click();
  await pageVehicleStaff.locator('[name="Serial Number"]').click();
  await pageVehicleStaff.locator('input[name="s_2_1_34_0"]').click();
  await pageVehicleStaff.locator('input[name="s_2_1_34_0"]').fill('123');
  await pageVehicleStaff.getByLabel('Registration No. Land Name Area Name').click();
  await pageVehicleStaff.getByLabel('Registration No. Land Name Area Name').fill('akm');
  await pageVehicleStaff.getByLabel('Registration No. Land Name Area Name').press('Enter');
  await pageVehicleStaff.getByLabel('Pick Location List Applet:OK').click();
  await pageVehicleStaff.getByLabel('Registration No Class No').click();
  await pageVehicleStaff.getByLabel('Registration No Class No').fill('123');
  await pageVehicleStaff.getByLabel('Registration No Japanese Kana').click();
  await pageVehicleStaff.getByLabel('Registration No Japanese Kana').fill('123');
  await pageVehicleStaff.getByLabel('Registration No Sequence No').click();
  await pageVehicleStaff.getByLabel('Registration No Sequence No').fill('123');
  await pageVehicleStaff.getByLabel('Full Model Code2').click();
  await pageVehicleStaff.getByLabel('Full Model Code2').fill('123');
//   await pageVehicleStaff.getByLabel('User', { exact: true }).click();
//   await pageVehicleStaff.getByLabel('User', { exact: true }).fill('akm');
//   await pageVehicleStaff.getByLabel('User', { exact: true }).press('Enter');
//   await pageVehicleStaff.getByLabel('Pick Account List Applet:OK').click();
//   await pageVehicleStaff.getByLabel('Owner', { exact: true }).click();
//   await pageVehicleStaff.getByLabel('Owner', { exact: true }).fill('akm');
//   await pageVehicleStaff.getByLabel('Owner', { exact: true }).press('Enter');
//   await pageVehicleStaff.getByLabel('Pick Account List Applet:OK').click();
  await pageVehicleStaff.locator('input[name="s_1_1_18_0"]').click();
  await pageVehicleStaff.locator('input[name="s_1_1_18_0"]').click();
  await pageVehicleStaff.locator('input[name="s_1_1_18_0"]').fill('LDT');
  await pageVehicleStaff.locator('input[name="s_1_1_18_0"]').press('Enter');
  await pageVehicleStaff.locator('input[name="s_1_1_18_0"]').press('Control+s');
  await pageVehicleStaff.waitForTimeout(2000);

  await pageVehicleStaff.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+All+Sales+Order+across+HQ+List+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Order+Entry+-+Order+List+Applet+(Sales)', {waitUntil: 'networkidle'});
  await pageVehicleStaff.waitForTimeout(3000);
  await pageVehicleStaff.getByLabel('Sales Orders List Applet:Query', { exact: true }).click();
  await pageVehicleStaff.getByLabel('Order #', { exact: true }).fill(AKMOrderId);
  await pageVehicleStaff.getByLabel('Order #', { exact: true }).press('Enter');
  await pageVehicleStaff.getByPlaceholder('Quote #').click();
  await pageVehicleStaff.locator('[name="Order Number"]').click();
  await pageVehicleStaff.waitForTimeout(3000);
//   await pageVehicleStaff.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Registration+%26+Delivery+Request+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Order+Entry+-+Order+Form+Applet+Dashboard+(Sales)', {waitUntil: 'networkidle'});
//   await pageVehicleStaff.waitForTimeout(3000);
  await pageVehicleStaff.getByRole('link', { name: 'Registration/Delivery' }).click();
  await pageVehicleStaff.waitForTimeout(3000);
  await pageVehicleStaff.getByRole('link', { name: 'Registration Request' }).click();
  await pageVehicleStaff.waitForTimeout(2000);
  await pageVehicleStaff.getByLabel('Registration and Delivery Request Form:Complete').click();
  await pageVehicleStaff.getByRole('link', { name: 'Registration & Delivery Request:' }).click();
  await pageVehicleStaff.waitForTimeout(2000);
  await pageVehicleStaff.getByRole('cell', { name: 'Actual Delivery Day Press F2 for Date Field' }).getByLabel('Press F2 for Date Field').click();
  await pageVehicleStaff.getByRole('button', { name: 'Now' }).click();
  await pageVehicleStaff.getByRole('button', { name: 'Done' }).click();
  await pageVehicleStaff.getByLabel('Registration & Delivery Request List Applet:Create Delivery Request').click();
  await pageVehicleStaff.getByRole('link', { name: 'Delivery Request' }).click();
  await pageVehicleStaff.waitForTimeout(2000);
  await pageVehicleStaff.getByLabel('Registration and Delivery Request Form:Request').click();
  await pageVehicleStaff.getByLabel('Registration and Delivery Request Form:Complete').click();

})