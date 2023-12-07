import { test, expect } from '@playwright/test';

const { chromium } = require('@playwright/test');







test('record demo', async () => {
  test.setTimeout(1500000);
  const browser = await chromium.launch({

    headless: false

  });
  const context = await browser.newContext();
  const context1 = await browser.newContext();

  const page = await context.newPage();

  // const pageApp3 = await context3.newpage();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?');
  await page.locator('#userid').fill('D8FDFO24');
  await page.click('#next-btn');
  await page.locator('#password').fill('Snakamura@1');
  await page.click('#loginSubmitButton');
  await page.waitForLoadState();
  // await page.waitForTimeout(3000);
  const checkpage = expect.configure({timeout:20000});
    if(await checkpage(page.locator('[id="_sweappmenu"]'),"page Browser not opened").toBeVisible());

    else{
    console.log("page Browser Opened");}

  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=eAuto+All+Vehicle+View');
  await page.waitForLoadState();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: '車両 リストアプレット:クエリー' }).click();
  await page.locator('[aria-roledescription="車台番号"]').click();
  await page.getByRole('textbox', { name: '車台番号 リンク' }).fill('FY54JY-540054');
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: '車両 リストアプレット:ジャンプ' }).click();
  await page.getByText('FUSO-Gen').click();
  await page.getByRole('link', { name: 'FY54JY-540054' }).click();

  // ---------------------

  //await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();



  await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();
  // click on create job card
  await page.getByRole('button', { name: 'ジョブカード リストアプレット:ジョブカード作成' }).click();

  //await pageApp.locator('[name="Action"]').press('Control+s');
  page.on('dialog', dialog => dialog.accept());

  await page.locator('[id="\\31 _s_1_l_INS_Product"]').click();

  await page.locator('[id="1_INS_Product"]').click();

  //fill job card type

  await page.locator('[id="1_INS_Product"]').fill('16：3ヵ月点検');
  await page.locator('[id="1_INS_Product"]').press('Control+s');
  await page.waitForTimeout(3000);
  await page.locator('[name="SR Number"]').nth(0).click();

  await page.getByPlaceholder('取引先コード').click();

  await page.getByPlaceholder('取引先コード').fill('0000002810');

  const jcurl = page.url();


  await page.getByRole('cell', { name: '整備担当者コード' }).filter({ hasText: '整備担当者コード' }).locator('div').click();

  await page.getByPlaceholder('請求先コード').click();

  await page.getByPlaceholder('請求先コード').fill('0000002810');

  await page.locator('tr:nth-child(17) > td:nth-child(10)').click();
  // work order creation
  await page.getByRole('button', { name: 'ワークオーダー リストアプレット:新規' }).click();

  await page.locator('[class="drilldown"]').click();

  await page.getByRole('button', { name: '作業 リストアプレット:新規' }).click();

  await page.locator('[id="\\31 _s_1_l_MF_Labor_Code"]').click();

  await page.locator('[id="s_1_2_64_0_icon"]').click();

  await page.getByRole('button', { name: 'ピック労働コード リストアプレット:OK' }).click();

  await page.getByRole('gridcell', { name: '計算機フィールド' }).first().click();

  await page.locator('[aria-roledescription="数量"]').click();
  await page.locator('[name="Recommended_Quantity"]').fill('100');

  await page.locator('[aria-roledescription="純作業時間"]').click();
  await page.locator('[name="MF_Net_Operation_Time"]').fill('300');
  await page.locator('[name="MF_Net_Operation_Time"]').press('Control+s');

  await page.getByRole('link', { name: 'パーツ' }).click();
  await page.getByRole('button', { name: 'パーツ リストアプレット:新規' }).click();
  await page.locator('[id="1_s_2_l_Product_Name"]').click();
  await page.locator('[name="Product_Name"]').fill('QC000002');
  await page.locator('[name="Product_Name"]').press('Control+s');
  await page.getByRole('button', { name: 'パーツ リストアプレット:部品オーダー' }).click();



  await page.locator('[class="drilldown"]').first().click();


  const myInternalOrder1 = await page.locator('[aria-labelledby="OrderNumber_Label_1"]').inputValue();
  console.log('Internal Order create and Internal order id is :->' + myInternalOrder1);

  await page.goBack();
  await page.waitForTimeout(3000);

  // Quote Creation
await page.pause();
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:見積作成/同期' }).click();
  await page.locator('[name="Name"]').nth(0).click();
  //await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Service+Quote+Line+Items+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Service+Quote+Form+Applet&');
  await page.getByRole('button', { name: '見積り フォームアプレット:承認依頼' }).click();

  //Quote 1nd Approval start

  await page.locator('[aria-label="印刷状況"]').click();
  await page.locator('[aria-label="印刷状況"]').press('Control+Alt+k');
  var rowid = await page.locator('[aria-label="ロウ番号"]').textContent();
  
  const context3 = await browser.newContext();
  const pageappvr = await context3.newPage();
  await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await pageappvr.getByLabel('User ID').click();
  await pageappvr.getByLabel('User ID').fill('D8FORF25');
  await pageappvr.getByRole('button', { name: 'Next' }).click();
  await pageappvr.getByLabel('Password').fill('Snakamura@1');
  await pageappvr.getByRole('button', { name: 'Log on' }).click();
  await pageappvr.waitForLoadState('domcontentloaded');
  // await pageappvr.pause()
  await pageappvr.waitForTimeout(3000);
  await pageappvr.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle' });
  await pageappvr.waitForTimeout(3000);
  await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid);
  await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();
  
  await pageappvr.locator('[name="Action"]').fill('Approved');
  await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr.waitForLoadState('networkidle');
  
  await page.bringToFront();
  await page.reload('domcontentloaded');
  
  
  //Quote  2nd Approval 
  
  const context4 = await browser.newContext();
  const pageappvr2 = await context4.newPage();
  await pageappvr2.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await pageappvr2.getByLabel('User ID').click();
  await pageappvr2.getByLabel('User ID').fill('D8FDFO25');
  await pageappvr2.getByRole('button', { name: 'Next' }).click();
  await pageappvr2.getByLabel('Password').fill('Snakamura@1');
  await pageappvr2.getByRole('button', { name: 'Log on' }).click();
  await pageappvr2.waitForLoadState('domcontentloaded');
  // await pageappvr.pause()
  await pageappvr2.waitForTimeout(3000);
  await pageappvr2.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle' });
  await pageappvr2.waitForTimeout(3000);
  await pageappvr2.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr2.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr2.getByPlaceholder('<Case Sensitive>').fill(rowid);
  await pageappvr2.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr2.getByRole('gridcell', { name: 'Combobox Field' }).click();
  
  await pageappvr2.locator('[name="Action"]').fill('Approved');
  await pageappvr2.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr2.waitForLoadState('networkidle');2
  await page.bringToFront();
  await page.reload('domcontentloaded');
  
  //3rd Approval of Quote
  
  const context5 = await browser.newContext();
  const pageappvr3 = await context5.newPage();
  await pageappvr3.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await pageappvr3.getByLabel('User ID').click();
  await pageappvr3.getByLabel('User ID').fill('D8FFDP20');
  await pageappvr3.getByRole('button', { name: 'Next' }).click();
  await pageappvr3.getByLabel('Password').fill('Snakamura@1');
  await pageappvr3.getByRole('button', { name: 'Log on' }).click();
  await pageappvr3.waitForLoadState('domcontentloaded');
  // await pageappvr.pause()
  await pageappvr3.waitForTimeout(3000);
  await pageappvr3.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle' });
  await pageappvr3.waitForTimeout(3000);
  await pageappvr3.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr3.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr3.getByPlaceholder('<Case Sensitive>').fill(rowid);
  await pageappvr3.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr3.getByRole('gridcell', { name: 'Combobox Field' }).click();2
  await pageappvr3.locator('[name="Action"]').fill('Approved');
  await pageappvr3.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr3.waitForLoadState('networkidle');2
  await page.bringToFront();
  await page.reload('domcontentloaded');
  
  // 4th Approval of Quote 
  
  const context6 = await browser.newContext();
  const pageappvr4 = await context6.newPage();
  await pageappvr4.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await pageappvr4.getByLabel('User ID').click();
  await pageappvr4.getByLabel('User ID').fill('D8FDPF20');
  await pageappvr4.getByRole('button', { name: 'Next' }).click();
  await pageappvr4.getByLabel('Password').fill('Snakamura@1');
  await pageappvr4.getByRole('button', { name: 'Log on' }).click();
  await pageappvr4.waitForLoadState('domcontentloaded');
  // await pageappvr.pause()
  await pageappvr4.waitForTimeout(3000);
  await pageappvr4.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle' });
  await pageappvr4.waitForTimeout(3000);
  await pageappvr4.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr4.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr4.getByPlaceholder('<Case Sensitive>').fill(rowid);
  await pageappvr4.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr4.getByRole('gridcell', { name: 'Combobox Field' }).click();2
  await pageappvr4.locator('[name="Action"]').fill('Approved');
  await pageappvr4.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr4.waitForLoadState('networkidle');2
  await page.bringToFront();
  await page.reload('domcontentloaded');
  
  // 5th Approval of Quote
  const context7 = await browser.newContext();
  const pageappvr5 = await context7.newPage();
  await pageappvr5.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await pageappvr5.getByLabel('User ID').click();
  await pageappvr5.getByLabel('User ID').fill('D8FDFO19');
  await pageappvr5.getByRole('button', { name: 'Next' }).click();
  await pageappvr5.getByLabel('Password').fill('Snakamura@1');
  await pageappvr5.getByRole('button', { name: 'Log on' }).click();
  await pageappvr5.waitForLoadState('domcontentloaded');
  await pageappvr5.waitForTimeout(3000);
  await pageappvr5.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle' });
  await pageappvr5.waitForTimeout(3000);
  await pageappvr5.getByLabel('Inbox Items List Applet:Query').click();
  await pageappvr5.getByRole('gridcell', { name: 'Link' }).click();
  await pageappvr5.getByPlaceholder('<Case Sensitive>').fill(rowid);
  await pageappvr5.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageappvr5.getByRole('gridcell', { name: 'Combobox Field' }).click();2
  await pageappvr5.locator('[name="Action"]').fill('Approved');
  await pageappvr5.getByLabel('Action', { exact: true }).press('Control+s');
  await pageappvr5.waitForLoadState('networkidle');2
  await page.bringToFront();
  await page.reload('domcontentloaded');
//bring to Quote page for customer Approve
  await page.locator('#s_2_1_130_0_icon').click();
  await page.getByRole('button', { name: '担当者を選択 リストアプレット:OK' }).click();
  await page.getByPlaceholder('見積状況').click();

  await page.getByPlaceholder('見積状況').fill('お客様了解');
  await page.getByPlaceholder('見積状況').press('Control+s');

  //Approver function start
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Service+Quote+Approval+View');
  await page.locator('[aria-label="承認 選択済み"]').click();
  const validApprovers1 = ["Branch-Service-Mgr,Branch-Head,SCHQ-CS-Service-Mgr,SCHQ-CS-Snr-Mgr,HQ-Finance-GMgr"];
  const verfyappvr1 = require('./approverfunction');
  //initiating the constructor
  const SVStaff1 = new verfyappvr1.appnew(page);
  for (let n = 0; n < validApprovers1.length; n++) {
    const isApproverValid = await SVStaff1.isValidApproverJPN(validApprovers1[n], n);
  }
  console.log('Approver is correct for Quote');
  //Approver function end


  // Quote Approved
  //const value = await page.locator('[placeholder="JC番号"]').inputValue();
  await page.goto(jcurl);
  await page.waitForTimeout(3000);
  await page.reload();
  await page.getByPlaceholder('引取開始予定日時').click();
  //Planned Pickup Start Date/Time
  await page.locator('#s_2_1_153_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();

  // Planned Arrival Date/Time
  await page.locator('#s_2_1_66_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  //Arrival Date/Time
  await page.locator('#s_2_1_20_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  // Planned Delivery Start Date/Tim
  await page.locator('#s_2_1_154_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  // Planned Delivery Date/Time
  await page.locator('#s_2_1_67_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();

  //Planned Work Start Date
  await page.locator('#s_2_1_126_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  //Planned Courtesy Vehicle Date
  await page.locator('#s_2_1_119_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  // Planned Work Completion Date/Time
  await page.locator('#s_2_1_68_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();

  await page.getByPlaceholder('工事完了予定日時').press('Control+s');
  await page.locator('[class="drilldown"]').first().click();
  //work order Start
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:開始' }).click();


  //Part Staff Process
  const Part1 = await context1.newPage();
  await Part1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');
  await Part1.locator('[id="userid"]').fill('D8FDPF23');
  await Part1.locator('[id="next-btn"]').click();
  await Part1.locator('[name="password"]').click();
  await Part1.locator('[name="password"]').fill('Snakamura@1');
  await Part1.locator('[id="loginSubmitButton"]').click();
  // await Part1.waitForTimeout(3000);
  const checkpage1 = expect.configure({timeout:20000});
    if(await checkpage(Part1.locator('[id="_sweappmenu"]'),"Part1 Browser not opened").toBeVisible());

    else{
    console.log("Part1 Browser Opened");}


  await Part1.getByRole('link', { name: 'Parts Internal Order' }).click();
  await Part1.getByRole('button', { name: 'Orders List Applet:Query' }).click();
  await Part1.locator('[name="Order_Number"]').fill(myInternalOrder1);
  await Part1.locator('[aria-roledescription="Status"]').click();

  await Part1.getByRole('button', { name: 'Orders List Applet:Go' }).click();
  await Part1.locator('[name="Order Number"]').click();
  await Part1.getByRole('button', { name: 'Line Items List Applet:Fulfill All' }).click();
  await Part1.getByRole('navigation', { name: 'Third Level View Bar' }).getByRole('link', { name: 'Shipment' }).click();
  await Part1.getByRole('button', { name: 'Shipments List Applet:Shipped' }).click();
  await Part1.getByPlaceholder('Status', { exact: true }).click();
  await Part1.getByPlaceholder('Status', { exact: true }).press('Alt+Enter');





  await page.bringToFront()

  // work order stop button
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:終了' }).click();

  //work order 'set acceptance' button
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:検収完了' }).click();
  await page.goto(jcurl);

  //Delivery date/time
  await page.locator('#s_2_1_35_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.getByPlaceholder('受領日(納車)日').press('Control+s');

  await page.getByPlaceholder('JC状況').click();
  await page.getByPlaceholder('JC状況').fill('引渡完了');
  await page.getByPlaceholder('JC状況').press('Control+s');
  //generate Approval button for job card 
  await page.getByRole('button', { name: 'ジョブカード フォームアプレット:承認依頼' }).click();

  //job card Approval start

  await page.locator('[aria-label="印刷状況"]').click();
  await page.locator('[aria-label="印刷状況"]').press('Control+Alt+k');
  var rowid1 = await page.locator('[aria-label="ロウ番号"]').textContent();
  console.log(rowid1);
  console.log('Expense Row id is' + rowid1);

await pageappvr.bringToFront();
await pageappvr.getByLabel('Inbox Items List Applet:Query').click();
await pageappvr.getByRole('gridcell', { name: 'Link' }).click();
await pageappvr.getByPlaceholder('<Case Sensitive>').fill(rowid1);
await pageappvr.getByPlaceholder('<Case Sensitive>').press('Enter');
await pageappvr.getByRole('gridcell', { name: 'Combobox Field' }).click();

await pageappvr.locator('[name="Action"]').fill('Approved');
await pageappvr.getByLabel('Action', { exact: true }).press('Control+s');
await pageappvr.waitForLoadState('networkidle');

await page.bringToFront();
await page.reload('domcontentloaded');


//JC  2nd Approval 
await pageappvr2.bringToFront();
await pageappvr2.getByLabel('Inbox Items List Applet:Query').click();
await pageappvr2.getByRole('gridcell', { name: 'Link' }).click();
await pageappvr2.getByPlaceholder('<Case Sensitive>').fill(rowid1);
await pageappvr2.getByPlaceholder('<Case Sensitive>').press('Enter');
await pageappvr2.getByRole('gridcell', { name: 'Combobox Field' }).click();

await pageappvr2.locator('[name="Action"]').fill('Approved');
await pageappvr2.getByLabel('Action', { exact: true }).press('Control+s');
await pageappvr2.waitForLoadState('networkidle');2
await page.bringToFront();
await page.reload('domcontentloaded');

//3rd Approval of JC

await pageappvr3.bringToFront();
await pageappvr3.getByLabel('Inbox Items List Applet:Query').click();
await pageappvr3.getByRole('gridcell', { name: 'Link' }).click();
await pageappvr3.getByPlaceholder('<Case Sensitive>').fill(rowid1);
await pageappvr3.getByPlaceholder('<Case Sensitive>').press('Enter');
await pageappvr3.getByRole('gridcell', { name: 'Combobox Field' }).click();2
await pageappvr3.locator('[name="Action"]').fill('Approved');
await pageappvr3.getByLabel('Action', { exact: true }).press('Control+s');
await pageappvr3.waitForLoadState('networkidle');2
await page.bringToFront();
await page.reload('domcontentloaded');

// 4th Approval of JC 

await pageappvr4.bringToFront();
await pageappvr4.getByLabel('Inbox Items List Applet:Query').click();
await pageappvr4.getByRole('gridcell', { name: 'Link' }).click();
await pageappvr4.getByPlaceholder('<Case Sensitive>').fill(rowid1);
await pageappvr4.getByPlaceholder('<Case Sensitive>').press('Enter');
await pageappvr4.getByRole('gridcell', { name: 'Combobox Field' }).click();2
await pageappvr4.locator('[name="Action"]').fill('Approved');
await pageappvr4.getByLabel('Action', { exact: true }).press('Control+s');
await pageappvr4.waitForLoadState('networkidle');2
await page.bringToFront();
await page.reload('domcontentloaded');

// 5th Approval of JC
await pageappvr5.bringToFront();
await pageappvr5.getByLabel('Inbox Items List Applet:Query').click();
await pageappvr5.getByRole('gridcell', { name: 'Link' }).click();
await pageappvr5.getByPlaceholder('<Case Sensitive>').fill(rowid1);
await pageappvr5.getByPlaceholder('<Case Sensitive>').press('Enter');
await pageappvr5.getByRole('gridcell', { name: 'Combobox Field' }).click();
await pageappvr5.locator('[name="Action"]').fill('Approved');
await pageappvr5.getByLabel('Action', { exact: true }).press('Control+s');
await pageappvr5.waitForLoadState('networkidle');2
await page.bringToFront();
await page.reload('domcontentloaded');
// bring to JC page

  await page.getByPlaceholder('拠点名', { exact: true }).click();
  await page.getByPlaceholder('拠点名', { exact: true }).click();
  await page.getByPlaceholder('拠点名', { exact: true }).press('Alt+Enter');

  //Approver Function 
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Job+Card+Approval+View');
  await page.locator('[aria-label="承認 選択済み"]').click();
  const validApprovers = ["Branch-Service-Mgr,Branch-Head,SCHQ-CS-Service-Mgr,SCHQ-CS-Snr-Mgr,HQ-Finance-GMgr"];
  const verfyappvr = require('./approverfunction');
  //initiating the constructor
  const SVStaff = new verfyappvr.appnew(page);
  for (let n = 0; n < validApprovers.length; n++) {
    const isApproverValid = await SVStaff.isValidApproverJPN(validApprovers[n], n);
  }
  console.log('Approver is correct for Job card');
  //Approver function end

  const Jobcardno = await page.locator('[aria-labelledby="SRNumber_Label_2"]').inputValue();
  console.log('3-Month inspec Job card created and Job card no. :->' + Jobcardno);

})