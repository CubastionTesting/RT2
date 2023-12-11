import { test } from '@playwright/test';

const { chromium } = require('@playwright/test');


test('record demo', async () => {
  test.setTimeout(1500000);
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

   const validation = page.locator('[id="Close_dialog_btn_close"]');
   

//Cycle count
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+FS+Branch+Cycle+Counts+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Cycle+Counting+Branch+List+Applet');
   //Plus button
await page.pause()
await page.waitForTimeout(4000);
  const loc = '[id="s_1_1_2_0_Ctrl"]'
  // Wait for the locator to appear on the page
  await page.waitForSelector(loc);
  // Wait for the locator to be disabled for up to 30 seconds
  const isLocatorEnabled = await page.evaluate((loc) => {
    const element = document.querySelector(loc);
    return element ? !element.disabled : false;
  }, loc);

  if (isLocatorEnabled) {
    console.log('Locator is enabled.');
    await page.getByLabel('Cycle Counts List Applet:New').click();
    if (await validation.isVisible() == true){
      console.log('error in plus button in Cycle Counts');
    }
    console.log("new Cycle Count creatd successfully");
    await page.locator('#s_1_2_33_0_icon').click(); //Due column
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('textbox', { name: '岡山東支店 Due Date Time Zone Field' }).press('Control+s');
    await page.locator('[class="drilldown"]').first().click();
    await page.getByLabel('Part List:New').click(); //Plus button
    if (await validation.isVisible() == true){
      console.log('error in plus button in Cycle Counts');
    }
    console.log("Part List added successfully");
    await page.getByLabel('Part #', { exact: true }).fill('QC000001'); //Part# column
    await page.getByLabel('Part #', { exact: true }).press('Control+S');
    await page.locator('[id="s_3_1_59_0_Ctrl"]').click();
    await page.getByLabel('Part #', { exact: true }).press('Control+S');
    await page.getByLabel('Part List:New').click(); //Plus button 
    await page.locator('[id="1_Part__"]').click();
    await page.locator('[id="1_Part__"]').fill('QC000002'); //Part# column
    await page.locator('[id="1_Part__"]').press('Control+S');
    await page.locator('[name="s_2_1_14_0"]').click(); //Start column
    await page.locator('[id="s_2_1_14_0_icon"]').click();
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByPlaceholder('Start').press('Control+S');
    
    //Counted button
    await page.getByLabel('Part List:Counted').click(); //Counted button
    if (await validation.isVisible() == true){
      console.log('error in Counted button in Cycle Counts');
    }
    console.log("Counted button clicked successfully");
    
    //Modify Button
    await page.getByLabel('Part List:Modify').click(); //Modify button
    if (await validation.isVisible() == true){
      console.log('error in Modify button in Cycle Counts');
    }
  
    console.log("Modify button clicked successfully");
    await page.locator('[id="\\31 "]').getByRole('gridcell', { name: 'Calculator Field' }).nth(1).click();
    await page.getByLabel('Count', { exact: true }).fill('185');
    await page.getByLabel('Count', { exact: true }).press('Control+S');
    await page.locator('[id="2_s_1_l_Part__"]').click();
    await page.getByLabel('Part List:Counted').click(); //Counted button
    if (await validation.isVisible() == true){
      console.log('error in Counted button in Cycle Counts');
    }
    console.log("Counted button clicked successfully");
    
    //Delta Calculation Button
    await page.getByLabel('Cycle Count Form Applet:Delta Calculation').click(); //Delta Calculation button
    if (await validation.isVisible() == true){
      console.log('error in Delta Calculation button in Cycle Counts');
    }
    console.log("Delta Calculation button clicked successfully");
    await page.getByRole('cell', { name: 'End Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click(); //End column
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByPlaceholder('End').press('Control+S');
  
    //Recounting Button
    await page.getByLabel('Cycle Count Form Applet:Recounting').click(); //Recounting button
    if (await validation.isVisible() == true){
      console.log('error in Recounting buton in Cycle Counts');
    }
    console.log("Recounting button clicked successfully");
    await page.getByLabel('Part List:Modify').click(); //Modify button
    if (await validation.isVisible() == true){
      console.log('error in Modify button in Cycle Counts');
    }
    await page.locator('[id="1_s_1_l_Actual_Count"]').click();
    await page.locator('[id="1_Actual_Count"]').fill('185');
    await page.locator('[id="1_Actual_Count"]').press('Control+S');
    await page.getByLabel('Cycle Count Form Applet:Delta Calculation').click(); //Delta Calculation button
    if (await validation.isVisible() == true){
      console.log('error in Delta Calculation button in Cycle Counts');
    }
    console.log("Successfully counted");
    await page.getByRole('cell', { name: 'End Press F2 for Date Time Field' }).getByLabel('Press F2 for Date Time Field').click(); //End column
    await page.getByRole('button', { name: 'Now' }).click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByPlaceholder('End').press('Control+S');
    await page.waitForTimeout(3000);
    await page.locator('[aria-label="Inventory Location"]').press("Control+Alt+k");
    await page.waitForTimeout(3000);
    await page.locator('[aria-label="Row #"]').click();
    var cycleCountID = await page.locator('[aria-label="Row #"]').textContent();
    await page.locator('[aria-label="Row #"]').press("Control+c");
    console.log('cycleCountID is',cycleCountID);

  } else {
    console.log('Locator is disabled.');
    await browser.close();
  }
  
})