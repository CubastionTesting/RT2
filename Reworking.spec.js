import { test } from '@playwright/test';

const { chromium } = require('@playwright/test');







test('record demo', async () => {
  test.setTimeout(12000000);
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
  await page.waitForTimeout(3000);

  const context2 = await browser.newContext();
  const pageApp1 = await context2.newPage();

  await pageApp1.waitForLoadState('networkidle');
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});
  await pageApp1.getByLabel('User ID').click();
  await pageApp1.getByLabel('User ID').fill('D8FORF25');
  await pageApp1.getByRole('button', { name: 'Next' }).click();
  await pageApp1.getByLabel('Password').fill('Snakamura@1');
  await pageApp1.getByRole('button', { name: 'Log on' }).click();
  await pageApp1.waitForTimeout(3000);
  await pageApp1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});

  
  const context3 = await browser.newContext();
  const pageApp3 = await context3.newPage();

  await pageApp3.waitForLoadState('networkidle');
  await pageApp3.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});
  await pageApp3.getByLabel('User ID').click();
  await pageApp3.getByLabel('User ID').fill('D8FDFO25');
  await pageApp3.getByRole('button', { name: 'Next' }).click();
  await pageApp3.getByLabel('Password').fill('Snakamura@1');
  await pageApp3.getByRole('button', { name: 'Log on' }).click();
  await pageApp3.waitForTimeout(3000);
  await pageApp3.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});

  const context4 = await browser.newContext();
  const pageApp4 = await context4.newPage();4
  await pageApp4.waitForLoadState('networkidle');
  await pageApp4.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});
  await pageApp4.getByLabel('User ID').click();
  await pageApp4.getByLabel('User ID').fill('D8FFDP20');
  await pageApp4.getByRole('button', { name: 'Next' }).click();
  await pageApp4.getByLabel('Password').fill('Snakamura@1');
  await pageApp4.getByRole('button', { name: 'Log on' }).click();
  await pageApp4.waitForTimeout(3000);
  await pageApp4.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});
 
  const context5 = await browser.newContext();
  const pageApp5 = await context5.newPage();

  await pageApp5.waitForLoadState('networkidle');
  await pageApp5.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});
  await pageApp5.getByLabel('User ID').click();
  await pageApp5.getByLabel('User ID').fill('D8FDPF20');
  await pageApp5.getByRole('button', { name: 'Next' }).click();
  await pageApp5.getByLabel('Password').fill('Snakamura@1');
  await pageApp5.getByRole('button', { name: 'Log on' }).click();
  await pageApp5.waitForTimeout(3000);
  
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=eAuto+All+Vehicle+View');
  await page.waitForLoadState();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: '車両 リストアプレット:クエリー' }).click();
  await page.locator('[aria-roledescription="車台番号"]').click();
  await page.getByRole('textbox', { name: '車台番号 リンク' }).fill('FY54JY-540054');
  await page.waitForTimeout(3000);
 // await page.pause();


  await page.getByRole('button', { name: '車両 リストアプレット:ジャンプ' }).click();
  await page.getByText('FUSO-Gen').click();
  await page.getByRole('link', { name: 'FY54JY-540054' }).click();

  // ---------------------

  //await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();



  await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();

  await page.getByRole('button', { name: 'ジョブカード リストアプレット:ジョブカード作成' }).click();
  
  //await pageApp.locator('[name="Action"]').press('Control+s');
  page.on('dialog', dialog => dialog.accept());


await page.locator('[id="1_s_1_l_Internal_Branch_Name"]').click();
await page.getByLabel('経費負担場所', { exact: true }).click();
  await page.locator('#s_1_2_41_0_icon').click();
  await page.getByLabel('部門 リストアプレット:OK').click();
  await page.locator('[id="\\31 _s_1_l_Internal_Work_Staff_Name"]').click();
  await page.locator('#s_1_2_43_0_icon').click();
  await page.getByLabel('依頼者を選択 リストアプレット:OK').click();


  await page.locator('[id="\\31 _s_1_l_INS_Product"]').click();
  await page.locator('[id="1_INS_Product"]').click();
  await page.locator('[id="1_INS_Product"]').fill('45：仕損じ再作業');
  await page.locator('[id="1_INS_Product"]').press('Control+s');
  await page.waitForTimeout(3000);
  await page.locator('[class="drilldown"]').first().click();
  await page.pause();
  
  //await page.pause();
  await page.getByPlaceholder('取引先コード').click();

  await page.getByPlaceholder('取引先コード').fill('0000002810');

  const jcurl = page.url();

  await page.getByRole('cell', { name: '整備担当者コード' }).filter({ hasText: '整備担当者コード' }).locator('div').click();

  await page.getByPlaceholder('請求先コード').click();

  await page.getByPlaceholder('請求先コード').fill('0000002810');

  await page.locator('tr:nth-child(17) > td:nth-child(10)').click();

  await page.getByRole('button', { name: 'ワークオーダー リストアプレット:新規' }).click();

  await page.locator('[class="drilldown"]').click();

  await page.getByRole('button', { name: '作業 リストアプレット:新規' }).click();

  await page.locator('[id="\\31 _s_1_l_MF_Labor_Code"]').click();

  await page.locator('[id="s_1_2_64_0_icon"]').click();

  await page.getByRole('button', { name: 'ピック労働コード リストアプレット:OK' }).click();

  await page.getByRole('gridcell', { name: '計算機フィールド' }).first().click();
  //await page.pause();

  await page.locator('[aria-roledescription="数量"]').click();
  await page.locator('[name="Recommended_Quantity"]').fill('1');

  await page.locator('[aria-roledescription="純作業時間"]').click();
  await page.locator('[name="MF_Net_Operation_Time"]').fill('8');
  await page.locator('[name="MF_Net_Operation_Time"]').press('Control+s');

  //await page.pause();
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
  
 // await page.pause();

//Quotation process start

  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:見積作成/同期' }).click();
  await page.locator('[name="Name"]').nth(0).click();
  await page.locator('#s_2_1_130_0_icon').click();
  await page.getByRole('button', { name: '担当者を選択 リストアプレット:OK' }).click();
  //await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Service+Quote+Line+Items+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Service+Quote+Form+Applet&');
  await page.getByRole('button', { name: '見積り フォームアプレット:承認依頼' }).click();

  //await page.getByPlaceholder('見積状況').click();
  //await page.getByPlaceholder('見積状況').press('Ctrl+Alt+k');
  await page.pause();
  await page.locator('[aria-label="見積有効期限"]').click();
  await page.locator('[aria-label="見積有効期限"]').press('Control+Alt+k');
  var quotid = await page.locator('[aria-label="ロウ番号"]').textContent();
  console.log(quotid);
  console.log('Expense Row id is'+quotid);
  await page.locator('[data-display="OK"]').click();



  //Approver process starts
  await pageApp1.bringToFront();
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.locator('[id="1_s_2_l_Name"]').click();
  await pageApp1.locator('[name="Name"]').fill(quotid);
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Go"]').click();
  await pageApp1.locator('[aria-roledescription="Action"]').click();
  await pageApp1.locator('[id="1_Action"]').fill('Approved');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');


 await pageApp3.bringToFront();
  await pageApp3.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp3.locator('[id="1_s_2_l_Name"]').click();
  await pageApp3.locator('[name="Name"]').fill(quotid);
  await pageApp3.locator('[aria-label="Inbox Items List Applet:Go"]').click();
  await pageApp3.locator('[aria-roledescription="Action"]').click();
  await pageApp3.locator('[id="1_Action"]').fill('Approved');
  await pageApp3.locator('[id="1_Action"]').press('Control+s');

await pageApp4.bringToFront();
await pageApp4.locator('[aria-label="Inbox Items List Applet:Query"]').click();
await pageApp4.locator('[id="1_s_2_l_Name"]').click();
await pageApp4.locator('[name="Name"]').fill(quotid);
await pageApp4.locator('[aria-label="Inbox Items List Applet:Go"]').click();
await pageApp4.locator('[aria-roledescription="Action"]').click();
await pageApp4.locator('[id="1_Action"]').fill('Approved');
await pageApp4.locator('[id="1_Action"]').press('Control+s');

await pageApp5.bringToFront();
await pageApp5.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});
  await pageApp5.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp5.locator('[id="1_s_2_l_Name"]').click();
  await pageApp5.locator('[name="Name"]').fill(quotid);
  await pageApp5.locator('[aria-label="Inbox Items List Applet:Go"]').click();
  await pageApp5.locator('[aria-roledescription="Action"]').click();
  await pageApp5.locator('[id="1_Action"]').fill('Approved');
  await pageApp5.locator('[id="1_Action"]').press('Control+s');


  //Approver process ends you damn
  await page.locator('[aria-label="見積有効期限"]').press('Alt+Enter');
  await page.getByPlaceholder('見積状況').fill('お客様了解');
  await page.getByPlaceholder('見積状況').press('Control+s');
  console.log('Quote Approved');
  await page.pause();

  //const value = await page.locator('[placeholder="JC番号"]').inputValue();
  await page.goto(jcurl);
  await page.waitForTimeout(3000);
  await page.getByPlaceholder('引取開始予定日時').click();
  await page.locator('#s_2_1_153_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.locator('#s_2_1_66_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.locator('#s_2_1_20_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.locator('#s_2_1_154_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.locator('#s_2_1_67_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.locator('#s_2_1_126_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.locator('#s_2_1_119_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.pause();



  await page.locator('#s_2_1_68_0_icon').click();
  await page.getByPlaceholder('工事完了予定日時').press('Control+s');
  await page.locator('[class="drilldown"]').first().click();

  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:開始' }).click();

  //await page.pause();



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
  //await pa1ge.pause();
  await Part1.locator('[name="Order Number"]').click();
  await Part1.getByRole('button', { name: 'Line Items List Applet:Fulfill All' }).click();
  await Part1.getByRole('navigation', { name: 'Third Level View Bar' }).getByRole('link', { name: 'Shipment' }).click();
  await Part1.getByRole('button', { name: 'Shipments List Applet:Shipped' }).click();
  await Part1.getByPlaceholder('Status', { exact: true }).click();
  await Part1.getByPlaceholder('Status', { exact: true }).press('Alt+Enter');





  await page.bringToFront()


  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:終了' }).click();
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:検収完了' }).click();
  await page.goto(jcurl);
  

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
  await page.pause();

  await page.getByPlaceholder('JC作成者').click();
  await page.getByPlaceholder('JC作成者').click();
  await page.getByPlaceholder('JC作成者').press('Alt+Control+k'); 

   var JCkaKuchhHai = await page.locator('[name="s_3_1_363_0"]').textContent();
   console.log('Sales order screen ki ID :-> ' + JCkaKuchhHai);

   await pageApp1.bringToFront();
   await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
   await pageApp1.locator('[id="1_s_2_l_Name"]').click();
   await pageApp1.locator('[name="Name"]').fill(JCkaKuchhHai);
   await pageApp1.locator('[aria-label="Inbox Items List Applet:Go"]').click();
   await pageApp1.locator('[aria-roledescription="Action"]').click();
   await pageApp1.locator('[id="1_Action"]').fill('Approved');
   await pageApp1.locator('[id="1_Action"]').press('Control+s');

   await pageApp3.bringToFront();
   await pageApp3.locator('[aria-label="Inbox Items List Applet:Query"]').click();
   await pageApp3.locator('[id="1_s_2_l_Name"]').click();
   await pageApp3.locator('[name="Name"]').fill(JCkaKuchhHai);
   await pageApp3.locator('[aria-label="Inbox Items List Applet:Go"]').click();
   await pageApp3.locator('[aria-roledescription="Action"]').click();
   await pageApp3.locator('[id="1_Action"]').fill('Approved');
   await pageApp3.locator('[id="1_Action"]').press('Control+s');
 
 await pageApp4.bringToFront();
 await pageApp4.locator('[aria-label="Inbox Items List Applet:Query"]').click();
 await pageApp4.locator('[id="1_s_2_l_Name"]').click();
 await pageApp4.locator('[name="Name"]').fill(JCkaKuchhHai);
 await pageApp4.locator('[aria-label="Inbox Items List Applet:Go"]').click();
 await pageApp4.locator('[aria-roledescription="Action"]').click();
 await pageApp4.locator('[id="1_Action"]').fill('Approved');
 await pageApp4.locator('[id="1_Action"]').press('Control+s');



 
   await pageApp5.bringToFront();
   await pageApp5.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View', { waitUntil: 'networkidle'});
   await pageApp5.locator('[aria-label="Inbox Items List Applet:Query"]').click();
   await pageApp5.locator('[id="1_s_2_l_Name"]').click();
   await pageApp5.locator('[name="Name"]').fill(JCkaKuchhHai);
   await pageApp5.locator('[aria-label="Inbox Items List Applet:Go"]').click();
   await pageApp5.locator('[aria-roledescription="Action"]').click();
   await pageApp5.locator('[id="1_Action"]').fill('Approved');
   await pageApp5.locator('[id="1_Action"]').press('Control+s');

//   await page.pause();
//   await page.getByRole('link', { name:"s_3_1_364_0" }).click();
//   await page.getByRole('button', { name: '整備履歴 リストアプレット:ジョブカードをコピーする' }).click();
//   await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Job+Card+Detail+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Job+Card+Detail+Applet&SWERowId0=1-1I4JKP&SWEApplet1=MF+Job+Card+Work+Orders+List+Applet&SWERowId1=1-1I4JL0');
//   await page.locator('[class="drilldown"]').click();

//   await page.reload()
//   await page.getByRole('link', { name: 'パーツ' }).click();

//   //await page.getByRole('button', { name: 'パーツ リストアプレット:部品オーダー' }).click();

  

//   await page.locator('[class="drilldown"]').first().click();
  
  
//   const myInternalOrder = await page.locator('[aria-labelledby="OrderNumber_Label_1"]').inputValue();
//   console.log('Internal Order create and Internal order id is :->' + myInternalOrder);

//   await page.goBack();
//   await page.waitForTimeout(3000);
  
//  // await page.pause();


//   await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:見積作成/同期' }).click();
//   await page.locator('[name="Name"]').nth(0).click();
//   //await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Service+Quote+Line+Items+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Service+Quote+Form+Applet&');
//   await page.getByRole('button', { name: '見積り フォームアプレット:承認依頼' }).click();
//   await page.locator('#s_2_1_130_0_icon').click();
//   await page.locator('[name="s_4_1_266_0"]').click();

//   await page.locator('[name="Last_Name"]').press('Alt+Q');
//   await page.locator('[name="Last_Name"]').press('Enter');

//   await page.getByRole('button', { name: '担当者を選択 リストアプレット:OK' }).click();
//   await page.getByPlaceholder('見積状況').click();
//   await page.getByPlaceholder('見積状況').press('Alt+Enter');

//   await page.getByPlaceholder('見積状況').fill('お客様了解');
//   await page.getByPlaceholder('見積状況').press('Control+s');
  

//   //const value = await page.locator('[placeholder="JC番号"]').inputValue();
//   await page.goto(jcurl);
//   await page.waitForTimeout(3000);
//   await page.getByPlaceholder('引取開始予定日時').click();
//   await page.locator('#s_2_1_153_0_icon').click();
//   await page.getByRole('button', { name: '現在' }).click();
//   await page.getByRole('button', { name: '完了' }).click();
//   await page.locator('#s_2_1_66_0_icon').click();
//   await page.getByRole('button', { name: '現在' }).click();
//   await page.getByRole('button', { name: '完了' }).click();
//   await page.locator('#s_2_1_20_0_icon').click();
//   await page.getByRole('button', { name: '現在' }).click();
//   await page.getByRole('button', { name: '完了' }).click();
//   await page.locator('#s_2_1_154_0_icon').click();
//   await page.getByRole('button', { name: '現在' }).click();
//   await page.getByRole('button', { name: '完了' }).click();
//   await page.locator('#s_2_1_67_0_icon').click();
//   await page.getByRole('button', { name: '現在' }).click();
//   await page.getByRole('button', { name: '完了' }).click();
//   await page.locator('#s_2_1_126_0_icon').click();
//   await page.getByRole('button', { name: '現在' }).click();
//   await page.getByRole('button', { name: '完了' }).click();
//   await page.locator('#s_2_1_119_0_icon').click();
//   await page.getByRole('button', { name: '現在' }).click();
//   await page.getByRole('button', { name: '完了' }).click();

//   await page.locator('#s_2_1_68_0_icon').click();
//   await page.getByPlaceholder('工事完了予定日時').press('Control+s');
//   await page.locator('[class="drilldown"]').first().click();

//   await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:開始' }).click();

//   //await page.pause();



//   //Part Staff Process
//   const Part = await context1.newPage();
//   await Part.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');
//   await Part.locator('[id="userid"]').fill('D8FDPF23');
//   await Part.locator('[id="next-btn"]').click();
//   await Part.locator('[name="password"]').click();
//   await Part.locator('[name="password"]').fill('Snakamura@1');
//   await Part.locator('[id="loginSubmitButton"]').click();
//   await Part.waitForTimeout(3000);


//   await Part.getByRole('link', { name: 'Parts Internal Order' }).click();
//   await Part.getByRole('button', { name: 'Orders List Applet:Query' }).click();
//   await Part.locator('[name="Order_Number"]').fill(myInternalOrder);
//   await Part.locator('[aria-roledescription="Status"]').click();
  
//   await Part.getByRole('button', { name: 'Orders List Applet:Go' }).click();
//   //await page.pause();
//   await Part.locator('[name="Order Number"]').click();
//   await Part.getByRole('button', { name: 'Line Items List Applet:Fulfill All' }).click();
//   await Part.getByRole('navigation', { name: 'Third Level View Bar' }).getByRole('link', { name: 'Shipment' }).click();
//   await Part.getByRole('button', { name: 'Shipments List Applet:Shipped' }).click();
//   await Part.getByPlaceholder('Status', { exact: true }).click();
//   await Part.getByPlaceholder('Status', { exact: true }).press('Alt+Enter');





//   await page.bringToFront()


//   await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:終了' }).click();
//   await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:検収完了' }).click();
//   await page.goto(jcurl);
  

//   await page.locator('#s_2_1_35_0_icon').click();
//   await page.getByRole('button', { name: '現在' }).click();
//   await page.getByRole('button', { name: '完了' }).click();
//   await page.getByPlaceholder('受領日(納車)日').press('Control+s');

//   await page.getByPlaceholder('JC状況').click();
//   await page.getByPlaceholder('JC状況').fill('引渡完了');
//   await page.getByPlaceholder('JC状況').press('Control+s');
//   await page.getByRole('button', { name: 'ジョブカード フォームアプレット:承認依頼' }).click();
//     await page.pause();
})