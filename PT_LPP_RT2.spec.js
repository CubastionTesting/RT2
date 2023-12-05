import { test } from '@playwright/test';

const { chromium } = require('@playwright/test');

test('record demo', async () => {
  test.setTimeout(1500000);
  const browser = await chromium.launch({

    headless: true

  });
  const context = await browser.newContext();

  const page = await context.newPage();
  // const pageApp3 = await context3.newPage();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');
  await page.locator('[id="userid"]').fill('D8FDFO23');
   await page.click('#next-btn');
   await page.locator('[id="password"]').fill('Snakamura@1');
   await page.locator('[id="loginSubmitButton"]').click();
   await page.waitForLoadState();
   await page.waitForTimeout(3000);
   
   const randomNum = Math.random() * 9000
   const token = Math.floor(1000 + randomNum)
   console.log(token)
 
   await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+LPP+Registration+My+List+View');
   await page.waitForLoadState();
   await page.waitForTimeout(3000);

   const validation = page.locator('[id="Close_dialog_btn_close"]');

   await page.getByRole('button', { name: 'LPP Registration List Applet:New' }).click(); //Plus button 
   if (await validation.isVisible() == true){
    console.log('error in plus button in LPP registration');
  }
  await page.getByRole('textbox', { name: '#000000001 Supplier # Selection Field' }).click(); //Supplier# column
  await page.getByRole('textbox', { name: '#000000001 Supplier # Selection Field' }).fill('0000002810');
  await page.getByRole('textbox', { name: '#000000001 Supplier # Selection Field' }).press('Control+s');
  await page.locator('[class="drilldown"]').first().click(); //LPP Registration column
  var registration = await page.locator('[aria-label="Registration #"]').inputValue();
  console.log('registration is:',registration);
  
  await page.getByRole('button', { name: 'Local Procurement List Applet:New' }).click(); //Plus button
  if (await validation.isVisible() == true){
    console.log('error in plus button in LPP registration');
  }
  // await page.getByRole('textbox', { name: 'Parts # (Optional specify)' }).fill('token');
  await page.locator('[id="\\31 _s_3_l_MF_Part_Name"]').click();
  await page.getByRole('textbox', { name: 'Part Name' }).fill('test'+token);
  await page.getByRole('textbox', { name: 'Part Name' }).press('Control+s');

  await page.locator('[id="\\31 _s_3_l_MF_List_Price__At_Registration_"]').click();
  await page.getByRole('textbox', { name: 'List Price(At registration) Calculator Field' }).fill('1005');
  await page.locator('[id="\\31 _s_3_l_MF_D_N_Price__At_Registration_"]').click();
  await page.getByRole('textbox', { name: 'D/N Price(At registration) Calculator Field' }).fill('800');
  await page.getByRole('gridcell', { name: 'Selection Field' }).click();
  await page.locator('#s_3_2_27_0_icon').click();
  await page.locator('html').click(); 
  await page.getByRole('button', { name: 'Pick Product List Applet:OK' }).click();
  await page.getByRole('textbox', { name: 'Hinmoku Code Selection Field' }).press('Control+s');

  console.log("Local Procurement line item has been added");

  await page.getByRole('button', { name: 'LPP Registration Form Applet:Register' }).click(); //Register button
  if (await validation.isVisible() == true){
    console.log('error in register button in LPP registration');
  }

  console.log("Register button clicked successfully");

  await page.getByRole('button', { name: 'Local Procurement List Applet:Add Register Product' }).click(); //Add Register Product button
  if (await validation.isVisible() == true){
    console.log('error in Add register product button in LPP registration');
  }

  console.log("Add Register button clicked successfully in ");

  //await page.getByRole('[aria-label="Pick Product List Applet:OK"]').click();
  await page.getByRole('button', { name: 'Pick Product List Applet:OK' }).click();
  // await page.locator('[id="\\32 _s_3_l_MF_Parts____Optional_Specify_"]').click();
  // await page.getByRole('button', { name: 'Local Procurement List Applet:Add Register Product' }).click();
  // await page.locator('[id="\\34 _s_5_l_MF_Original_Part_"]').click();
  // await page.getByRole('button', { name: 'Pick Product List Applet:OK' }).click();
  await page.getByRole('button', { name: 'Local Procurement List Applet:Create Quote' }).click(); //Create Quote button
  if (await validation.isVisible() == true){
    console.log('error in Create Quote button in LPP registration');
  }

  console.log("Quote button clicked successfully");

  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+LPP+Registration+New+View');

  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+LPP+Registration+New+View');
  await page.getByRole('button', { name: 'Local Procurement List Applet:Create PO' }).click();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Line+Items+Detail+View+(PO)');

  // ---------------------
  await context.close();
  await browser.close();
})