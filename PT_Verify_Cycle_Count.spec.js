import { test } from '@playwright/test';

const { chromium } = require('@playwright/test');


test('record demo', async () => {
  test.setTimeout(12000000);
  const browser = await chromium.launch({

    headless: false

  });
  
  //Log in
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');
  
   await page.locator('[id="userid"]').fill('D8FDFO23');
   await page.click('#next-btn');
   await page.locator('[id="password"]').fill('Snakamura@1');
   await page.locator('[id="loginSubmitButton"]').click();
   await page.waitForLoadState();
   await page.waitForTimeout(3000);
   

//Cycle count
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+FS+Branch+Cycle+Counts+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Cycle+Counting+Branch+List+Applet');
  await page.getByLabel('Cycle Counts List Applet:New').click();
  await page.locator('#s_1_2_33_0_icon').click();
  await page.getByRole('button', { name: 'Now' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('textbox', { name: '岡山東支店 Due Date Time Zone Field' }).press('Control+s');
  await page.locator('[class="drilldown"]').first().click();
  await page.getByLabel('Part List:New').click();
  await page.getByLabel('Part #', { exact: true }).fill('QC000001');
  await page.getByLabel('Part #', { exact: true }).press('Control+S');
  await page.locator('[id="s_3_1_59_0_Ctrl"]').click();
  await page.getByLabel('Part #', { exact: true }).press('Control+S');
  await page.getByLabel('Part List:New').click();
  await page.locator('[id="1_Part__"]').click();
  await page.locator('[id="1_Part__"]').fill('QC000002');
  await page.locator('[id="1_Part__"]').press('Control+S');
  await page.locator('[name="s_2_1_14_0"]').click();
  await page.locator('[id="s_2_1_14_0_icon"]').click();
  await page.getByRole('button', { name: 'Now' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByPlaceholder('Start').press('Control+S');
  
  //Counted button
  await page.getByLabel('Part List:Counted').click();
  
  //Modify Button
  await page.getByLabel('Part List:Modify').click();
  await page.locator('[id="\\31 "]').getByRole('gridcell', { name: 'Calculator Field' }).nth(1).click();
  await page.getByLabel('Count', { exact: true }).fill('185');
  await page.getByLabel('Count', { exact: true }).press('Control+S');
  await page.locator('[id="2_s_1_l_Part__"]').click();
  await page.getByLabel('Part List:Counted').click();
  
  //Delta Calculation Button
  await page.getByLabel('Cycle Count Form Applet:Delta Calculation').click();
  await page.getByRole('cell', { name: 'End Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  await page.getByRole('button', { name: 'Now' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByPlaceholder('End').press('Control+S');

  //Recounting Button
  await page.getByLabel('Cycle Count Form Applet:Recounting').click();
  await page.getByLabel('Part List:Modify').click();
  await page.locator('[id="1_s_1_l_Actual_Count"]').click();
  await page.locator('[id="1_Actual_Count"]').fill('185');
  await page.locator('[id="1_Actual_Count"]').press('Control+S');
  await page.getByLabel('Cycle Count Form Applet:Delta Calculation').click();
  await page.getByRole('cell', { name: 'End Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click();
  await page.getByRole('button', { name: 'Now' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByPlaceholder('End').press('Control+S');
  // ---------------------
  await context.close();
  await browser.close();
})