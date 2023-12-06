import { test } from '@playwright/test';

const { chromium } = require('@playwright/test');







test('record demo', async () => {
  test.setTimeout(1500000);
  const browser = await chromium.launch({

    headless: true

  });
  const context = await browser.newContext();
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();

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

  // ---------------------

  //await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();

  const validation = page.locator('[id="Close_dialog_btn_close"]');

  await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ジョブカード' }).click();

  await page.getByRole('button', { name: 'ジョブカード リストアプレット:ジョブカード作成' }).click(); //Create Job Card button
  if (await validation.isVisible() == true){
    console.log('error in Create Job Card button in Vehicle');
  }
  
  //await pageApp.locator('[name="Action"]').press('Control+s');
  page.on('dialog', dialog => dialog.accept());

  await page.locator('[id="\\31 _s_1_l_INS_Product"]').click();

  await page.locator('[id="1_INS_Product"]').click(); //received Detail column

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

  await page.getByRole('button', { name: 'ワークオーダー リストアプレット:新規' }).click(); //Plus button
  if (await validation.isVisible() == true){
    console.log('error in Plus button in Job Card');
  }
  await page.getByText('自社メカ').click();
  await page.locator('#s_1_2_36_0_icon').click(); //internal/External classification column
  await page.locator('#ui-id-215').click();
  await page.locator('[id="\\31 _s_1_l_Mechanic_name"]').click();
  await page.locator('[id="\\31 _s_1_l_Description"] div').click();
  await page.locator('[id="\\31 _s_1_l_MF_Supplier_BillTo_Finance_Code"]').click(); //Supplier Finance Code column
  await page.locator('#s_1_2_52_0_icon').click();
  await page.getByRole('button', { name: '取引先を選択 リストアプレット:OK' }).click();
  await page.locator('[id="\\31 _s_1_l_MF_Reason_For_Supplier"]').click(); //The Reason for Supplier
  await page.locator('#s_1_2_48_0_icon').click();
  await page.locator('#ui-id-261').click();
  await page.getByRole('gridcell', { name: '日時フィールド' }).click(); //Planned Decision Date for Undecided items column
  await page.locator('#s_1_2_89_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.getByRole('textbox', { name: '未定事項の内容を定める期日 日時フィールド' }).press('Control+s');
  await page.locator('[class="drilldown"]').click();
  console.log("Work Order created successfully");



  //External mechanic
 

  //await page.locator('[class="drilldown"]').click();

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

  

  await page.locator('[class="drilldown"]').first().click(); //Parts Order# column
  
  
  const myInternalOrder1 = await page.locator('[aria-labelledby="OrderNumber_Label_1"]').inputValue();
  console.log('Internal Order create and Internal order id is :->' + myInternalOrder1);

  await page.goBack();
  await page.waitForTimeout(3000);
  
 await page.getByPlaceholder('トータルPOコストマニュアル').click(); //Total PO Cost Manual
 await page.getByPlaceholder('トータルPOコストマニュアル').fill('0');
 await page.getByPlaceholder('トータルPOコストマニュアル').press('Control+s');




  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:見積作成/同期' }).click(); //Create/Sync Quote button
  if (await validation.isVisible() == true){
    console.log('error in Create/Sync Quote button in Work Order');
  }
  console.log("Service Quote created successfully");
  await page.locator('[name="Name"]').nth(0).click(); //Name Column 
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
  console.log("Quatation status successfully Changed to Customer Approved");

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

  await page.locator('#s_2_1_68_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  console.log("Job Card Status successfully changed to Vehicle Arrived");
  
  await page.getByPlaceholder('工事完了予定日時').press('Alt+Enter');

  await page.getByRole('button', { name: 'ワークオーダー リストアプレット:POの作成/同期' }).click(); //Create/Sync PO button
  if (await validation.isVisible() == true){
    console.log('error in Create/Sync PO button in Job Card');
  }
  console.log("Service Purchase Order created successfully");

  //page.on('dialog', dialog => dialog.accept());
  //await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Job+Card+Order+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Job+Card+Detail+Applet');
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: '関連オーダー リストアプレット:クエリー' }).click();
  await page.getByRole('gridcell', { name: 'コンボボックスフィールド' }).first().click();


  //await page.getByRole('button', { name: '関連オーダー リストアプレット:クエリー' }).click();
  //await page.getByRole('gridcell', { name: 'コンボボックスフィールド' }).first().click();

  
  await page.getByPlaceholder('<大文字と小文字を区別する>').fill('Service Purchase Order');

  await page.locator('[aria-label="関連オーダー リストアプレット:ジャンプ"]').click();


  
  await page.locator('[class="drilldown"]').first().click(); //Work Order# column

  await page.getByRole('button', { name: 'サービスオーダー詳細 フォームアプレット:承認依頼' }).click(); //Generate Approval button
  if (await validation.isVisible() == true){
    console.log('error in Generate Approval button in Service Purchase Order');
  }
  await page.getByRole('button', { name: 'サービスオーダー詳細 フォームアプレット:外注発注完了' }).click(); //Purchase Orderd button
  if (await validation.isVisible() == true){
    console.log('error in Purchase Orderd button in Service Purchase Order');
  }
  await page.getByRole('button', { name: 'サービスオーダー詳細 フォームアプレット:作業完了' }).click(); //Work Completed button
  if (await validation.isVisible() == true){
    console.log('error in Work Completed button in Service Purchase Order');
  }

  await page.getByRole('button', { name: 'サービスオーダー詳細 フォームアプレット:発注書印刷' }).click(); //SPO Print button
  if (await validation.isVisible() == true){
    console.log('error in SPO Print button in Service Purchase Order');
  }
  await page.getByRole('button', { name: 'サービスオーダー詳細 フォームアプレット:納品書印刷' }).click(); //PO D/S Print button
  if (await validation.isVisible() == true){
    console.log('error in PO D/S Print button in Service Purchase Order');
  }
  await page.getByRole('button', { name: 'サービスオーダー詳細 フォームアプレット:請求書印刷' }).click(); //PO I/S Print button
  if (await validation.isVisible() == true){
    console.log('error in Work Completed button in Service Purchase Order');
  }

  const mySPO = await page.locator('[aria-label="オーダー番号"]').inputValue();
  console.log('SPO order id is :->' + mySPO);


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
  await page.goto(jcurl);
  await page.locator('[class="drilldown"]').click();

  //await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:終了' }).click();
  await page.getByRole('button', { name: 'ワークオーダー フォームアプレット:検収完了' }).click(); //set Acceptance Inspection button
  if (await validation.isVisible() == true){
    console.log('error in Set Acceptance Inspection button in Work Order');
  }
  await page.goto(jcurl);
  console.log("Work Order Status Successfully changed to Set Acceptance Inspection Completed");

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
})