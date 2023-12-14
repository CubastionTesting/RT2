import { test } from '@playwright/test';

const { chromium } = require('@playwright/test');







test('record demo', async () => {
  test.setTimeout(1500000);
  const browser = await chromium.launch({

    headless: false

  });
  const context = await browser.newContext();
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();
  const context3 = await browser.newContext();
  const context4 = await browser.newContext();
  const context5 = await browser.newContext();
  const context6 = await browser.newContext();

  const page = await context.newPage();
  const app1 = await context2.newPage();
  const app2 = await context3.newPage();
  const app3 = await context4.newPage();
  const app4 = await context5.newPage();
  const app5 = await context6.newPage();






  // const pageApp3 = await context3.newpage();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?');
 await page.locator('#userid').fill('D8FDFO24');
  await page.click('#next-btn');
  await page.locator('#password').fill('Snakamura@1');
  await page.click('#loginSubmitButton');
  await page.waitForLoadState();
  await page.waitForTimeout(3000);

  await app1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?');
  await app1.locator('#userid').fill('D8FORF25');
  await app1.click('#next-btn');
  await app1.locator('#password').fill('Snakamura@1');
  await app1.click('#loginSubmitButton');
  await app1.waitForLoadState();
  await app1.waitForTimeout(3000);

  await app2.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?');
  await app2.locator('#userid').fill('D8FDFO25');
  await app2.click('#next-btn');
  await app2.locator('#password').fill('Snakamura@1');
  await app2.click('#loginSubmitButton');
  await app2.waitForLoadState();
  await app2.waitForTimeout(3000);

  await app3.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?');
  await app3.locator('#userid').fill('D8FFDP20');
  await app3.click('#next-btn');
  await app3.locator('#password').fill('Snakamura@1');
  await app3.click('#loginSubmitButton');
  await app3.waitForLoadState();
  await app3.waitForTimeout(3000);

  await app4.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?');
  await app4.locator('#userid').fill('D8FDPF20');
  await app4.click('#next-btn');
  await app4.locator('#password').fill('Snakamura@1');
  await app4.click('#loginSubmitButton');
  await app4.waitForLoadState();
  await app4.waitForTimeout(3000);

  await app5.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?');
  await app5.locator('#userid').fill('D8FDFO19');
  await app5.click('#next-btn');
  await app5.locator('#password').fill('Snakamura@1');
  await app5.click('#loginSubmitButton');
  await app5.waitForLoadState();
  await app5.waitForTimeout(3000);

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
//Create job card
  await page.getByRole('button', { name: 'ジョブカード リストアプレット:ジョブカード作成' }).click();
  
  //await pageApp.locator('[name="Action"]').press('Control+s');
  page.on('dialog', dialog => dialog.accept());

  await page.locator('[id="\\31 _s_1_l_INS_Product"]').click();

  await page.locator('[id="1_INS_Product"]').click();
//fill job card type
  await page.locator('[id="1_INS_Product"]').fill('11：一般整備');
  await page.locator('[id="1_INS_Product"]').press('Control+s');
  await page.waitForTimeout(3000);
  await page.locator('[name="SR Number"]').nth(0).click();
  await page.getByPlaceholder('取引先コード').click();

  await page.getByPlaceholder('取引先コード').fill('0000002810');
  const jcurl = page.url();

  await page.getByRole('cell', { name: '整備担当者コード' }).filter({ hasText: '整備担当者コード' }).locator('div').click();

  await page.getByPlaceholder('請求先コード').click();

  await page.getByPlaceholder('請求先コード').fill('0000002810');
//work Order creation
  await page.locator('tr:nth-child(17) > td:nth-child(10)').click();

  await page.getByRole('button', { name: 'ワークオーダー リストアプレット:新規' }).click();

  await page.locator('[class="drilldown"]').click();

  await page.getByRole('button', { name: '作業 リストアプレット:新規' }).click();

  await page.locator('[id="\\31 _s_1_l_MF_Labor_Code"]').click();

  await page.locator('[id="s_1_2_64_0_icon"]').click();

  await page.getByRole('button', { name: 'ピック労働コード リストアプレット:OK' }).click();
  await page.pause()
  await page.getByRole('gridcell', { name: '計算機フィールド' }).first().click();
  await page.locator('[aria-roledescription="数量"]').click();
  await page.locator('[name="Recommended_Quantity"]').fill('100');

  await page.locator('[aria-roledescription="純作業時間"]').click();
  await page.locator('[name="MF_Net_Operation_Time"]').fill('200');
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
// Quote created
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:見積作成/同期' }).click();
  await page.locator('[name="Name"]').nth(0).click();
  //await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Service+Quote+Line+Items+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Service+Quote+Form+Applet&');
  await page.getByRole('button', { name: '見積り フォームアプレット:承認依頼' }).click();
  await page.getByRole('link', { name: '承認', exact: true }).click();
  await page.waitForTimeout(2000);
  await page.getByPlaceholder('見積番号').click();
  await page.getByPlaceholder('見積番号').press('Alt+Control+k');
  await page.getByLabel('ロウ番号').click();
  const rowid1 = await page.getByLabel('ロウ番号').textContent();
  console.log(rowid1)
  await page.getByLabel('レコード情報 フォームアプレット:OK').click();
//Verify Approval started
  const validApprovers = ["Branch-Service-Mgr", "Branch-Head", "SCHQ-CS-Service-Mgr", "SCHQ-CS-Snr-Mgr", "HQ-Finance-GMgr"];
  const verfyappvr = require('./approverfunction');
    //initiating the constructor
  const SalesGPStaff = new verfyappvr.appnew(page);
  for (let n = 0; n < validApprovers.length; n++) {
      const isApproverValid = await SalesGPStaff.isValidApprover(validApprovers[n],n);
  }
  //Verify Approval end

  //Approval started
    await app1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await app1.bringToFront();
    await app1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await app1.locator('[id="1_s_1_l_Name"]').click();
    await app1.locator('[id="1_Name"]').fill(rowid1);
    await app1.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await app1.locator('[id="1_s_1_l_Action"]').click();
    await app1.locator('[id="1_Action"]').fill('Approved');
    await app1.locator('[id="1_Action"]').press('Control+s');
    await app1.waitForLoadState('networkidle');

    await app2.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await app2.bringToFront();
    await app2.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await app2.locator('[id="1_s_1_l_Name"]').click();
    await app2.locator('[id="1_Name"]').fill(rowid1);
    await app2.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await app2.locator('[id="1_s_1_l_Action"]').click();
    await app2.locator('[id="1_Action"]').fill('Approved');
    await app2.locator('[id="1_Action"]').press('Control+s');
    await app2.waitForLoadState('networkidle');

    await app3.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await app3.bringToFront();
    await app3.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await app3.locator('[id="1_s_1_l_Name"]').click();
    await app3.locator('[id="1_Name"]').fill(rowid1);
    await app3.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await app3.locator('[id="1_s_1_l_Action"]').click();
    await app3.locator('[id="1_Action"]').fill('Approved');
    await app3.locator('[id="1_Action"]').press('Control+s');
    await app3.waitForLoadState('networkidle');

    await app4.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await app4.bringToFront();
    await app4.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await app4.locator('[id="1_s_1_l_Name"]').click();
    await app4.locator('[id="1_Name"]').fill(rowid1);
    await app4.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await app4.locator('[id="1_s_1_l_Action"]').click();
    await app4.locator('[id="1_Action"]').fill('Approved');
    await app4.locator('[id="1_Action"]').press('Control+s');
    await app4.waitForLoadState('networkidle');

    await app5.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await app5.bringToFront();
    await app5.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await app5.locator('[id="1_s_1_l_Name"]').click();
    await app5.locator('[id="1_Name"]').fill(rowid1);
    await app5.locator('[aria-label="Inbox Items List Applet:Go"]').click();
    await app5.locator('[id="1_s_1_l_Action"]').click();
    await app5.locator('[id="1_Action"]').fill('Approved');
    await app5.locator('[id="1_Action"]').press('Control+s');
    await app5.waitForLoadState('networkidle');

  await page.locator('#s_2_1_130_0_icon').click(); 
  await page.getByRole('button', { name: '担当者を選択 リストアプレット:OK' }).click();
  await page.getByPlaceholder('見積状況').click();

  await page.getByPlaceholder('見積状況').fill('お客様了解');
  await page.getByPlaceholder('見積状況').press('Control+s');
//Quote Approval done
  //const value = await page.locator('[placeholder="JC番号"]').inputValue();
  await page.goto(jcurl);
  await page.waitForTimeout(3000);
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

  await page.locator('#s_2_1_68_0_icon').click();
  await page.getByPlaceholder('工事完了予定日時').press('Control+s');
  await page.locator('[class="drilldown"]').first().click();

  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:開始' }).click();


  //Part Staff Process
  const Part1 = await context1.newPage();
  await Part1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');
  await Part1.locator('[id="userid"]').fill('D8FDPF23');
  await Part1.locator('[id="next-btn"]').click();
  await Part1.locator('[name="password"]').click();
  await Part1.locator('[name="password"]').fill('Snakamura@1');
  await Part1.locator('[id="loginSubmitButton"]').click();
  await Part1.waitForTimeout(3000);


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

 //work order 'Stop' button
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
  await page.getByRole('button', { name: 'ジョブカード フォームアプレット:承認依頼' }).click();
  await page.getByPlaceholder('拠点名', { exact: true }).click();
  await page.getByPlaceholder('拠点名', { exact: true }).click();
  await page.getByPlaceholder('拠点名', { exact: true }).press('Alt+Enter');

  const Jobcardno = await page.locator('[aria-labelledby="SRNumber_Label_2"]').inputValue();
  console.log('Chargeble Job card created and Job card no. :->' + Jobcardno);
  })