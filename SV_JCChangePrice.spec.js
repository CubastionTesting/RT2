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

  const page = await context.newPage();

  // const pageApp3 = await context3.newpage();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?');
  await page.locator('#userid').fill('D8FDFO24');
  await page.click('#next-btn');
  await page.locator('#password').fill('Snakamura@1');
  await page.click('#loginSubmitButton');
  await page.waitForLoadState();
  await page.waitForTimeout(3000);

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
<<<<<<< HEAD

  // ---------------------

  //await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();

  const validation = page.locator('[id="Close_dialog_btn_close"]');

  await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();

  await page.getByRole('button', { name: 'ジョブカード リストアプレット:ジョブカード作成' }).click(); //Create Job Card button
  if (await validation.isVisible() == true){
    console.log('error in Create Job Card button in Vehicle');
  }
  
  //await pageApp.locator('[name="Action"]').press('Control+s');
=======
//job card creation
  await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();

  await page.getByRole('button', { name: 'ジョブカード リストアプレット:ジョブカード作成' }).click();

>>>>>>> 859738c3109be59a39c57ca9ef702218f821e9a0
  page.on('dialog', dialog => dialog.accept());

  await page.locator('[id="\\31 _s_1_l_INS_Product"]').click();

<<<<<<< HEAD
  await page.locator('[id="1_INS_Product"]').click(); //received Detail column

=======
  await page.locator('[id="1_INS_Product"]').click();
//job card type 
>>>>>>> 859738c3109be59a39c57ca9ef702218f821e9a0
  await page.locator('[id="1_INS_Product"]').fill('11：一般整備');
  await page.locator('[id="1_INS_Product"]').press('Control+s');
  await page.waitForTimeout(3000);
  console.log("Job Card created successfully");
  await page.locator('[name="SR Number"]').nth(0).click(); //Job Card Number column
  await page.getByPlaceholder('取引先コード').click(); //Customer code column

  await page.getByPlaceholder('取引先コード').fill('0000002810');

  const jcurl = page.url();

  await page.getByRole('cell', { name: '整備担当者コード' }).filter({ hasText: '整備担当者コード' }).locator('div').click();

  await page.getByPlaceholder('請求先コード').click(); //Bill to Basic Account Code column

  await page.getByPlaceholder('請求先コード').fill('0000002810');
//work order creation
  await page.locator('tr:nth-child(17) > td:nth-child(10)').click();

  await page.getByRole('button', { name: 'ワークオーダー リストアプレット:新規' }).click(); //Plus button
  if (await validation.isVisible() == true){
    console.log('error in Plus button in Job Card');
  }

  await page.locator('[class="drilldown"]').click();
  console.log("Work Order created successfully");

  await page.getByRole('button', { name: '作業 リストアプレット:新規' }).click(); //Plus button
  if (await validation.isVisible() == true){
    console.log('error in Plus button in Work Order');
  }

  await page.locator('[id="\\31 _s_1_l_MF_Labor_Code"]').click(); //Labor Code column

  await page.locator('[id="s_1_2_64_0_icon"]').click();

  await page.getByRole('button', { name: 'ピック労働コード リストアプレット:OK' }).click();

  await page.getByRole('gridcell', { name: '計算機フィールド' }).first().click();

  await page.locator('[aria-roledescription="数量"]').click(); //Labor Quantity
  await page.locator('[name="Recommended_Quantity"]').fill('1');

  await page.locator('[aria-roledescription="純作業時間"]').click(); //Net Operation Time
  await page.locator('[name="MF_Net_Operation_Time"]').fill('8');
  await page.locator('[name="MF_Net_Operation_Time"]').press('Control+s');
  console.log("Labor added successfully");

  await page.getByRole('link', { name: 'パーツ' }).click(); //Parts tab
  await page.getByRole('button', { name: 'パーツ リストアプレット:新規' }).click(); //Plus button
  if (await validation.isVisible() == true){
    console.log('error in Plus button in Work Order');
  }
  await page.locator('[id="1_s_2_l_Product_Name"]').click(); //Parts# column
  await page.locator('[name="Product_Name"]').fill('QC000002');
  await page.locator('[name="Product_Name"]').press('Control+s');
  await page.getByRole('button', { name: 'パーツ リストアプレット:部品オーダー' }).click(); //Parts Order button
  if (await validation.isVisible() == true){
    console.log('error in Parts Order button in Work Order');
  }
  console.log("Parts Internal Order created successfully");



<<<<<<< HEAD
  await page.locator('[class="drilldown"]').first().click(); //Parts Order# column
  
  
=======
  await page.locator('[class="drilldown"]').first().click();


>>>>>>> 859738c3109be59a39c57ca9ef702218f821e9a0
  const myInternalOrder1 = await page.locator('[aria-labelledby="OrderNumber_Label_1"]').inputValue();
  console.log('Internal Order create and Internal order id is :->' + myInternalOrder1);

  await page.goBack();
  await page.waitForTimeout(3000);

<<<<<<< HEAD
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:見積作成/同期' }).click(); //Create/Sync Quote button
  if (await validation.isVisible() == true){
    console.log('error in Create/Sync Quote button in Work Order');
  }
  console.log("Service Quote created successfully");
  await page.locator('[name="Name"]').nth(0).click(); //Name Column 
=======
// Quote creation
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:見積作成/同期' }).click();
  await page.locator('[name="Name"]').nth(0).click();
>>>>>>> 859738c3109be59a39c57ca9ef702218f821e9a0
  //await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Service+Quote+Line+Items+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Service+Quote+Form+Applet&');
  await page.getByRole('button', { name: '見積り フォームアプレット:承認依頼' }).click(); //Generatr Approval button
  if (await validation.isVisible() == true){
    console.log('error in Generate Approval button in Service Quote');
  }
  console.log("Generate Approval button clicked successfully on Service Quotes screen");
  await page.locator('#s_2_1_130_0_icon').click(); //Approved Person ofCustomer column
  await page.getByRole('button', { name: '担当者を選択 リストアプレット:OK' }).click();
  await page.getByPlaceholder('見積状況').click(); //Quotation Status column

  await page.getByPlaceholder('見積状況').fill('お客様了解');
  await page.getByPlaceholder('見積状況').press('Control+s');
<<<<<<< HEAD
  console.log("Quatation status successfully Changed to Customer Approved");
=======
  //Quote Approval done
>>>>>>> 859738c3109be59a39c57ca9ef702218f821e9a0

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
  console.log("Job Card Status successfully changed to Vehicle Arrived")
  await page.locator('[class="drilldown"]').first().click(); //Work Order# column

  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:開始' }).click(); //Start button
  if (await validation.isVisible() == true){
    console.log('error in Start button in Work Order');
  }
  console.log("Work Started successfully");



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
  await Part1.getByRole('button', { name: 'Line Items List Applet:Fulfill All' }).click(); //Fullfill All buton
  if (await validation.isVisible() == true){
    console.log('error in Fullfuill All button in Parts internal Order');
  }
  await Part1.getByRole('navigation', { name: 'Third Level View Bar' }).getByRole('link', { name: 'Shipment' }).click();
  await Part1.getByRole('button', { name: 'Shipments List Applet:Shipped' }).click(); //Shipped button
  if (await validation.isVisible() == true){
    console.log('error in Shipped button in Parts internal Order');
  }
  await Part1.getByPlaceholder('Status', { exact: true }).click();
  await Part1.getByPlaceholder('Status', { exact: true }).press('Alt+Enter');
  console.log("Parts Internal Order completed successfully");





  await page.bringToFront()

<<<<<<< HEAD

  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:終了' }).click(); //Stop button
  if (await validation.isVisible() == true){
    console.log('error in Stop button in Work Order');
  }
  console.log("Work Order Status changed to Work Completed");
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:検収完了' }).click(); //set Acceptance Inspection button
  if (await validation.isVisible() == true){
    console.log('error in Set Acceptance Inspection button in Work Order');
  }
  await page.goto(jcurl);
  console.log("Work Order Status Successfully changed to Set Acceptance Inspection Completed");
  
=======
  //work order 'Stop' button
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:終了' }).click();

  //work order 'set acceptance' button
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:検収完了' }).click();
  await page.goto(jcurl);
>>>>>>> 859738c3109be59a39c57ca9ef702218f821e9a0

  //Delivery date/time
  await page.locator('#s_2_1_35_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click(); //Delivery date/time column
  await page.getByRole('button', { name: '完了' }).click();
  await page.getByPlaceholder('受領日(納車)日').press('Control+s');

  await page.getByPlaceholder('JC状況').click(); //JC Status column
  await page.getByPlaceholder('JC状況').fill('引渡完了');
  await page.getByPlaceholder('JC状況').press('Control+s');
  console.log("JC Status Successfully changed to Delivery Completed");

  await page.getByRole('button', { name: 'ジョブカード フォームアプレット:承認依頼' }).click(); //Generate Approval buton
  if (await validation.isVisible() == true){
    console.log('error in Generate Approval button in Job Card');
  }
  console.log("Successfully clicked on Generate Approval button");
  await page.getByPlaceholder('拠点名', { exact: true }).click();
  await page.getByPlaceholder('拠点名', { exact: true }).click();
  console.log("JC Closed");
  await page.getByPlaceholder('拠点名', { exact: true }).press('Alt+Enter');
<<<<<<< HEAD
  await page.getByRole('link', { name: '関連オーダー' }).click(); //Related Orders tab
   
=======
  await page.getByRole('link', { name: '関連オーダー' }).click();

>>>>>>> 859738c3109be59a39c57ca9ef702218f821e9a0
  await page.getByRole('button', { name: '関連オーダー リストアプレット:クエリー' }).click();
  await page.getByRole('gridcell', { name: 'コンボボックスフィールド' }).first().click();
  await page.getByPlaceholder('<大文字と小文字を区別する>').fill('Job Card Order');
  await page.getByRole('button', { name: '関連オーダー リストアプレット:ジャンプ' }).click();
  await page.locator('[class="drilldown"]').click();
<<<<<<< HEAD
  const Changeurl = page.url();
  
  await page.getByPlaceholder('変更理由').click(); //Change Reson column
=======
  //change order with price change
  await page.getByPlaceholder('変更理由').click();
>>>>>>> 859738c3109be59a39c57ca9ef702218f821e9a0
  await page.locator('[aria-label="変更理由"]').click();
  await page.locator('[aria-label="変更理由"]').fill('価格の変更');
  await page.locator('[aria-label="変更理由"]').press('Control+s');
  await page.getByRole('button', { name: 'ジョブカードの注文 フォームアプレット:受注変更' }).click(); //Change Order button
  if (await validation.isVisible() == true){
    console.log('error in Change Order button in Job Card Order');
  }
  console.log("JC Change Order Created");
  await page.getByRole('link', { name: '見積り' }).click();
  await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: '受注変更' }).click();
  await page.locator('[class="drilldown"]').click();
  await page.locator('[id="\\31 _s_2_l_Changed_Sales_Price"]').click(); //Changed Sales Price column
  await page.getByRole('textbox', { name: '変更後売上 計算機フィールド' }).fill('59244');
  await page.getByRole('textbox', { name: '変更後売上 計算機フィールド' }).press('Control+s');
  await page.locator('[id="\\32 _s_2_l_Changed_Sales_Price"]').click(); //Changed Sales Price column
  await page.getByRole('textbox', { name: '変更後売上 計算機フィールド' }).fill('201322');
  await page.getByRole('textbox', { name: '変更後売上 計算機フィールド' }).press('Control+s');
  await page.getByRole('button', { name: '受注変更 フォームアプレット:承認依頼' }).click(); //Generate Approval buton
  if (await validation.isVisible() == true){
    console.log('error in Generate Approval button in Job Card Order');
  }

  const Changeurl = page.url();

  //Change order Approval flow start

  await page.locator('[aria-label="整備契約商品"]').click();

  await page.locator('[aria-label="整備契約商品"]').press('Control+Alt+k');

  var rowid3 = await page.locator('[aria-label="ロウ番号"]').textContent();

  await page.locator('[aria-label="ロウ番号"]').press("Control+c");

  console.log(rowid3);

  console.log('Change order Row id is : ' + rowid3);

  //Approval 1.................
  const approval = await context2.newPage();

  await approval.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');

  await approval.locator('[id="userid"]').click();

  await approval.locator('[id="userid"]').fill('D8FORF25');

  await approval.locator('[id="next-btn"]').click();

  await approval.locator('[name="password"]').click();

  await approval.locator('[name="password"]').fill('Snakamura@1');

  await approval.locator('[id="loginSubmitButton"]').click();

  await approval.waitForTimeout(3000);

  await approval.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View');

  await approval.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await approval.locator('[id="1_s_2_l_Name"]').click();

  await approval.locator('[name="Name"]').fill(rowid3);

  await approval.locator('[aria-label="Inbox Items List Applet:Go"]').click();

  await approval.locator('[aria-roledescription="Action"]').click();

  await approval.locator('[id="1_Action"]').fill('Approved');

  await approval.locator('[id="1_Action"]').press('Control+s');


  //Approval 2.................
  const approva = await context3.newPage();

  await approva.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');

  await approva.locator('[id="userid"]').click();

  await approva.locator('[id="userid"]').fill('D8FFDP20');

  await approva.locator('[id="next-btn"]').click();

  await approva.locator('[name="password"]').click();

  await approva.locator('[name="password"]').fill('Snakamura@1');

  await approva.locator('[id="loginSubmitButton"]').click();

  await approva.waitForTimeout(3000);

  await approva.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View');



  await approva.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await approva.locator('[id="1_s_2_l_Name"]').click();

  await approva.locator('[name="Name"]').fill(rowid3);

  await approva.locator('[aria-label="Inbox Items List Applet:Go"]').click();

  await approva.locator('[aria-roledescription="Action"]').click();

  await approva.locator('[id="1_Action"]').fill('Approved');

  await approva.locator('[id="1_Action"]').press('Control+s');

  await page.goto(Changeurl);
  //await page.bringToFront()

  //Approval 3..............
  const approv = await context4.newPage();

  await approv.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?');
  await approv.locator('[id="userid"]').click();
  await approv.locator('[id="userid"]').fill('D8FDPF20');
  await approv.locator('[id="next-btn"]').click();
  await approv.locator('[name="password"]').click();
  await approv.locator('[name="password"]').fill('Snakamura@1');
  await approv.locator('[id="loginSubmitButton"]').click();
  await approv.waitForTimeout(3000);
  await approv.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View');

  await approv.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await approv.locator('[id="1_s_2_l_Name"]').click();
  await approv.locator('[name="Name"]').fill(rowid3);
  await approv.locator('[aria-label="Inbox Items List Applet:Go"]').click();
  await approv.locator('[aria-roledescription="Action"]').click();

  await approv.locator('[id="1_Action"]').fill('Approved');

  await approv.locator('[id="1_Action"]').press('Control+s');
  console.log("JC Change Order Approved");

  await page.goto(Changeurl);

  const myChangeOrder1 = await page.locator('[name="s_3_1_143_0"]').inputValue();
  console.log('Change Order Approved for Price change and order id is :->' + myChangeOrder1);
  await page.bringToFront()
  await page.goto(jcurl);
  
  const Jobcardno = await page.locator('[aria-labelledby="SRNumber_Label_2"]').inputValue();
  console.log('Change order with price change created and Job card no. :->' + Jobcardno);

})