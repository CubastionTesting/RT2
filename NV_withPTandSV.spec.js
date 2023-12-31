import { test, expect } from '@playwright/test';
import { Console } from 'console';
const { chromium } = require('@playwright/test');
const fs = require('fs');

//initializing the tests

test('record demo 1', async () => {
  test.setTimeout(1000000);


  const browser = await chromium.launch({
    headless: true
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

  //console.log(generateString(4));

  const context = await browser.newContext();
  const context2 = await browser.newContext();
  const context3 = await browser.newContext();
  const context4 = await browser.newContext();
  const context5 = await browser.newContext();
  const context9 = await browser.newContext();

  const context6 = await browser.newContext();
  const context7 = await browser.newContext();
  const context8 = await browser.newContext();


  const page = await context.newPage();
  const part = await context2.newPage();
  const pageActivity = await context3.newPage();
  const approver1 = await context4.newPage();
  const approver2 = await context5.newPage();
  const myVecPage = await context6.newPage();
  const approver3 = await context7.newPage();
  const approverX = await context8.newPage();
  const approverY = await context9.newPage();


  await page.waitForLoadState('networkidle');

  //login process starting
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });

  await page.getByLabel('User ID').click();
  await page.getByLabel('User ID').fill('D8FDPF22');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Password').fill('Snakamura@1');
  await page.getByRole('button', { name: 'Log on' }).click();

  //login process starting
  await part.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });

  await part.getByLabel('User ID').click();
  await part.getByLabel('User ID').fill('D8FORF24');
  await part.getByRole('button', { name: 'Next' }).click();
  await part.getByLabel('Password').fill('Snakamura@1');
  await part.getByRole('button', { name: 'Log on' }).click();

  //login process starting
  await pageActivity.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });

  await pageActivity.getByLabel('User ID').click();
  await pageActivity.getByLabel('User ID').fill('D8FDFO24');
  await pageActivity.getByRole('button', { name: 'Next' }).click();
  await pageActivity.getByLabel('Password').fill('Snakamura@1');
  await pageActivity.getByRole('button', { name: 'Log on' }).click();

  //login process starting
  await approver1.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });

  await approver1.getByLabel('User ID').click( );
  await approver1.getByLabel('User ID').fill('D8FDFO22');
  await approver1.getByRole('button', { name: 'Next' }).click();
  await approver1.getByLabel('Password').fill('Snakamura@1');
  await approver1.getByRole('button', { name: 'Log on' }).click();


  await approver2.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });

  await approver2.getByLabel('User ID').click();
  await approver2.getByLabel('User ID').fill('D8FORF22');
  await approver2.getByRole('button', { name: 'Next' }).click();
  await approver2.getByLabel('Password').fill('Snakamura@1');
  await approver2.getByRole('button', { name: 'Log on' }).click();



  await approverX.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await approverX.getByLabel('User ID').click();
  await approverX.getByLabel('User ID').fill('D8FDFO25');
  await approverX.getByRole('button', { name: 'Next' }).click();
  await approverX.getByLabel('Password').fill('Snakamura@1');
  await approverX.getByRole('button', { name: 'Log on' }).click();


  await approverY.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await approverY.getByLabel('User ID').click();
  await approverY.getByLabel('User ID').fill('D8FFDP13');
  await approverY.getByRole('button', { name: 'Next' }).click();
  await approverY.getByLabel('Password').fill('Snakamura@1');
  await approverY.getByRole('button', { name: 'Log on' }).click();





  await myVecPage.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS');

  await myVecPage.getByLabel('User ID').click();
  await myVecPage.getByLabel('User ID').fill('D8FDFO17');
  await myVecPage.getByRole('button', { name: 'Next' }).click();
  await myVecPage.getByLabel('Password').fill('Snakamura@1');
  await myVecPage.getByRole('button', { name: 'Log on' }).click();
  await approver3.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
  await approver3.getByLabel('User ID').click();
  await approver3.getByLabel('User ID').fill('D8FFOR18');
  await approver3.getByRole('button', { name: 'Next' }).click();
  await approver3.getByLabel('Password').fill('Snakamura@1');
  await approver3.getByRole('button', { name: 'Log on' }).click();
  await page.waitForTimeout(5000);
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=Opportunity+List+View');
  await page.getByRole('button', { name: '商談 リストアプレット:新規' }).click();
  await page.waitForTimeout(5000);
  await page.locator('[aria-roledescription="商談先名"]').nth(0).click();
  await page.locator('#s_1_2_79_0_icon').click();
  await page.getByRole('button', { name: '取引先を選択 リストアプレット:クエリー' }).click();
  await page.keyboard.press('Tab');
  await page.getByRole('textbox', { name: '請求先コード' }).fill('0000001341');
  await page.getByRole('textbox', { name: '請求先コード' }).press('Enter');
  await page.getByRole('button', { name: '取引先を選択 リストアプレット:OK' }).click();
  await page.locator('[id="1_s_1_l_MF_Expected_Delivery_Date"]').click();
  await page.locator('#s_1_2_37_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.locator('[id="1_s_1_l_MF_Product_Class"]').click();
  await page.getByRole('combobox', { name: 'クラス コンボボックスフィールド' }).fill('Fork');
  await page.getByRole('combobox', { name: 'クラス コンボボックスフィールド' }).press('Enter');
  await page.locator('[id="1_s_1_l_MF_Body_Type"]').click();
  await page.getByRole('combobox', { name: 'ボディタイプ コンボボックスフィールド' }).fill('その他');
  await page.locator('[class="drilldown"]').first().click();
  await page.locator('#s_1_1_9_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.locator('#s_2_1_120_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.getByRole('button', { name: '商談 フォームアプレット:自動見積り' }).click();
  await page.locator('[aria-roledescription="正価"]').nth(0).click();
  await page.getByRole('textbox', { name: ' プール原価 - 陸送 正価 計算機フィールド' }).fill('45001');
  await page.getByRole('row', { name: ' Generic Trailer & Forklift Trailer & Forklift Generic Trailer & Forklift 計算機フィールド 選択フィールド' }).getByRole('gridcell', { name: '計算機フィールド' }).nth(1).click();
  await page.getByRole('textbox', { name: ' Generic Trailer & Forklift 正価 計算機フィールド' }).fill('45001');
  await page.getByRole('textbox', { name: ' Generic Trailer & Forklift 正価 計算機フィールド' }).press('Control+s');
  await page.getByRole('cell', { name: '販売価格 Press F2 for 計算機フィールド' }).getByPlaceholder('販売価格').fill('45000');
  await page.getByRole('cell', { name: '販売価格 Press F2 for 計算機フィールド' }).getByPlaceholder('販売価格').press('Control+s');
  await page.locator('[aria-label="販売価格"]').fill('45000');
  await page.locator('#s_2_1_96_0_icon').click();
  await page.getByRole('button', { name: '場所を選択 リストアプレット:OK' }).click();
  //await page.waitForTimeout(5000);
  await page.getByPlaceholder('販売価格', { exact: true }).click();
  await page.getByPlaceholder('販売価格', { exact: true }).fill('45000');
  await page.getByPlaceholder('販売価格', { exact: true }).press('Control+s');
  await page.getByRole('link', { name: '税・諸費用' }).click();
  await page.locator('#s_1_1_39_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.getByPlaceholder('用途区分').click();
  await page.getByPlaceholder('用途区分').fill('自家用');
  await page.getByRole('button', { name: '税・諸費用 リストアプレット:税・諸費用追加' }).click();
  await page.goBack();
  await page.waitForTimeout(4000);
  await page.getByRole('link', { name: '関連見積' }).click();
  await page.getByRole('button', { name: '関連する見積り リストアプレット:新規' }).click();
  await page.locator('[id="\\31 _s_1_l_Description"] div').click();
  await page.getByRole('textbox', { name: '説明' }).fill('ABCDE');
  await page.getByRole('textbox', { name: '説明' }).press('Control+s');
  await page.locator('[id="1_s_1_l_Status"]').click();
  await page.getByRole('combobox', { name: 'ステータス コンボボックスフィールド' }).fill('見積依頼中');//見積依頼中
  await page.getByRole('combobox', { name: 'ステータス コンボボックスフィールド' }).press('Control+s');
  await page.locator('[id="1_s_1_l_Name"]').click();
  const quotationRequestID = await page.locator('[id="1_Name"]').inputValue();
  console.log('QuotationRequestID : ' + quotationRequestID);
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Quote+Activities+View');
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: '活動 リストアプレット:新規' }).click();
  await page.locator('[aria-roledescription="タイプ"]').click();
  await page.locator('[name="Type"]').fill('見積依頼');
  await page.locator('[id="1_s_1_l_Status"]').click();
  await page.locator('[id="1_Status"]').fill('見積依頼');
  await page.locator('[aria-roledescription="ジョブカードタイプ"]').click();
  await page.locator('[name="MF_Job_Card_Type"]').fill('22: 新車整備(振替)');
  await page.locator('[name="MF_Job_Card_Type"]').press('Enter');
  await page.locator('[name="MF_Job_Card_Type"]').press('Control+s');
  await page.locator('[id="1_s_1_l_Activity_UID"]').click();
  const activityID = await page.locator('[id="1_Activity_UID"]').inputValue();
  console.log('Activity: ' + activityID);
  await part.bringToFront();
  // await page.waitForTimeout(5000);
  await part.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+PA+All+FDP+Quotes+View');
  await part.getByRole('button', { name: '見積 リストアプレット:クエリー' }).click();
  await part.getByRole('textbox', { name: '見積番号 リンク' }).click();
  await part.getByRole('textbox', { name: '見積番号 リンク' }).fill(quotationRequestID);
  await part.getByRole('textbox', { name: '見積番号 リンク' }).click();
  await part.getByRole('textbox', { name: '見積番号 リンク' }).press('Enter');
  await part.locator('[class="drilldown"]').first().click();
  await part.getByRole('button', { name: '明細項目 リストアプレット:新規' }).click();
  await part.getByRole('textbox', { name: '部品番号 選択フィールド' }).click();
  await part.getByRole('textbox', { name: '部品番号 選択フィールド' }).fill('#10TESTRS002');
  await part.getByRole('textbox', { name: '部品番号 選択フィールド' }).press('Enter');
  await part.getByLabel('見積り フォームアプレット:回答').click();
  await page.bringToFront();
  await page.reload();
  await page.waitForTimeout(4000);
  await page.getByRole('link', { name: '関連見積' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: '関連する見積り リストアプレット:顧客見積更新' }).click()
  await pageActivity.bringToFront();
  await pageActivity.waitForTimeout(5000);
  await pageActivity.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Internal+Work+Request+Branch+View');
  await pageActivity.getByRole('button', { name: '内部作業要求 リストアプレット:クエリー' }).click();
  await pageActivity.getByPlaceholder('<大文字と小文字を区別する>').fill(activityID);
  await pageActivity.getByPlaceholder('<大文字と小文字を区別する>').click();
  await pageActivity.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
  await pageActivity.getByRole('button', { name: '内部作業要求 リストアプレット:ジョブカードの作成' }).click();
  await pageActivity.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Job+Card+Detail+View');
  await pageActivity.getByRole('button', { name: 'ワークオーダー リストアプレット:新規' }).click();
  await pageActivity.locator('[class="drilldown"]').first().click();
  await pageActivity.getByRole('button', { name: '作業 リストアプレット:新規' }).click();
  await pageActivity.locator('[id="1_s_1_l_MF_Labor_Code"]').click();
  await pageActivity.locator('#s_1_2_64_0_icon').click();
  await pageActivity.getByRole('button', { name: 'ピック労働コード リストアプレット:OK' }).click();
  await pageActivity.locator('[id="1_s_1_l_MF_Net_Operation_Time"]').click();
  await pageActivity.getByRole('textbox', { name: '純作業時間 計算機フィールド' }).fill('1');
  await pageActivity.getByRole('textbox', { name: '純作業時間 計算機フィールド' }).press('Control+s');
  await pageActivity.getByRole('button', { name: 'ワークオーダー フォームアプレット:見積作成/同期' }).click();
  await pageActivity.locator('[class="drilldown"]').first().click();
  await pageActivity.getByRole('button', { name: '見積り フォームアプレット:更新見積もり' }).click();
  await page.bringToFront();
  await page.reload();
  await page.getByRole('gridcell', { name: 'コンボボックスフィールド' }).filter({ hasText: '進行中' }).click();
  await page.getByRole('button', { name: '関連する見積り リストアプレット:顧客見積更新' }).click();
  await page.getByRole('cell', { name: '販売価格 Press F2 for 計算機フィールド' }).getByPlaceholder('販売価格').click();
  await page.getByRole('cell', { name: '販売価格 Press F2 for 計算機フィールド' }).getByPlaceholder('販売価格').fill('10000');
  await page.getByRole('cell', { name: '販売価格 Press F2 for 計算機フィールド' }).getByPlaceholder('販売価格').press('Control+s');
  await page.getByRole('link', { name: '税・諸費用' }).click();
  await page.getByLabel('税・諸費用 (税・諸費用 内)').locator('[id="\\31 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('修正金額', { exact: true }).fill('28991');
  await page.getByLabel('税・諸費用 (税・諸費用 内)').locator('[id="\\32 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('修正金額', { exact: true }).fill('¥023773');
  await page.getByLabel('税・諸費用 (税・諸費用 内)').locator('[id="\\33 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('修正金額', { exact: true }).fill('¥012442');
  await page.getByLabel('税・諸費用 (税・諸費用 内)').locator('[id="\\34 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.locator('[id="\\36 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('リサイクル 料金', { exact: true }).fill('124221');
  await page.getByLabel('税・諸費用 (税・諸費用 内)').locator('[id="\\33 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('修正金額', { exact: true }).fill('0');
  await page.getByLabel('税・諸費用 (税・諸費用 内)').locator('[id="\\32 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('修正金額', { exact: true }).fill('0');
  await page.getByRole('cell', { name: '', exact: true }).locator('span').click();
  await page.locator('[id="\\36 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('自動車税（種別割）', { exact: true }).fill('¥01355');
  await page.locator('[id="\\37 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('自動車重量税', { exact: true }).fill('¥056889');
  await page.locator('[id="\\38 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('修正金額', { exact: true }).fill('1233');
  await page.locator('[id="\\39 "]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByLabel('修正金額', { exact: true }).fill('¥01500');
  await page.locator('[id="\\31 0"]').getByRole('gridcell', { name: '計算機フィールド' }).click();
  await page.getByRole('link', { name: '明細' }).click();

  //end new code
  await page.getByRole('button', { name: '見積り フォームアプレット:承認依頼' }).click();
  await page.getByRole('link', { name: '承認履歴' }).click();
  const validApprovers = ["Branch-Sales-Mgr", "Branch-Head","SCHQ-BizMgmt-SnrMgr"];
  const NVApproveruser = [approver1,approverX,approver2]
    const verfyappvr = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff = new verfyappvr.appnew(page);
    for (let n = 0; n < validApprovers.length; n++) {
      const isApproverValid = await SalesGPStaff.isValidApproverJPN(validApprovers[n],n);
    }
  await page.getByPlaceholder('見積名').click();
  await page.getByPlaceholder('見積名').press('Alt+Control+k');
  var rowid = await page.locator('[aria-label="ロウ番号"]').textContent();
  console.log('My sale Quote ID is :-> ' + rowid);
  for(let n=0;n<validApprovers.length;n++){
    if(NVApproveruser[n] == approver1 || NVApproveruser[n] == approverX || NVApproveruser[n] == approver2  ){
  const UVApprover = new verfyappvr.appnew(NVApproveruser[n]);
    await NVApproveruser[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
  await NVApproveruser[n].bringToFront();
  await UVApprover.correctApprover(rowid);

    }
  }
  await page.bringToFront()
  await page.reload();
  await page.getByRole('button', { name: '見積り フォームアプレット:自動オーダー' }).click();
  const fullText = await page.locator('[name="s_1_1_106_0"]').textContent();
  const salesOrder = fullText.split(': ')[1].trim();
  console.log('Sales Order : ' + salesOrder);
  await page.getByRole('link', { name: '注文書' }).click();
  await page.locator('#s_1_1_38_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.getByRole('link', { name: '明細項目' }).click();
  await page.getByRole('button', { name: '販売オーダー フォームアプレット:承認依頼' }).click();
  await page.getByRole('link', { name: '承認', exact: true }).click();
  const validApprovers1 = ["Branch-Sales-Mgr", "Branch-Head"];
  const NVApproveruser1 = [approver1,approverX]
  const verfyappvr1 = require('./approverfunction');
  //initiating the constructor
  const SalesGPStaff1 = new verfyappvr1.appnew(page);
  for (let n = 0; n < validApprovers1.length; n++) {
    const isApproverValid = await SalesGPStaff1.isValidApproverJPN(validApprovers1[n],n);
  }
  await page.getByPlaceholder('商談台数').click();
  await page.getByPlaceholder('商談台数').press('Alt+Control+k');
  var rowid1 = await page.locator('[aria-label="ロウ番号"]').textContent();
  console.log('My Row ID is :-> ' + rowid1);
  for(let n=0;n<validApprovers.length;n++){
    if(NVApproveruser1[n] == approver1 || NVApproveruser1[n] == approverX ){
  const UVApprover = new verfyappvr.appnew(NVApproveruser1[n]);
    await NVApproveruser1[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
  await NVApproveruser1[n].bringToFront();
  await UVApprover.correctApprover(rowid1);
    }
  }
  await page.waitForTimeout(3000);
  await page.reload()
  await page.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: '購入オーダー' }).click();
  await page.getByRole('button', { name: '購入オーダー リストアプレット:部品注文の追加' }).click();
  await page.getByRole('button', { name: '購入オーダー リストアプレット:クエリー' }).click();
  await page.locator('[aria-roledescription="タイプ"]').click();
  await page.locator('[id="1_Order_Type"]').fill('Trailer & Forklift');
  await page.locator('[id="1_Order_Type"]').press('Enter');
  const bbo = await page.locator('[name="Order Number"]').textContent();
  console.log('Body Building Order : ' + bbo);
  await page.getByRole('button', { name: '購入オーダー リストアプレット:クエリー' }).click();
  await page.locator('[aria-roledescription="タイプ"]').click();
  await page.locator('[id="1_Order_Type"]').fill('Parts Internal Order');
  await page.locator('[id="1_Order_Type"]').press('Enter');
 
  await page.locator('[class="drilldown"]').first().click();
  const partInternalOrder = await page.locator('[placeholder="オーダー番号"]').inputValue();
  console.log('Part Internal Order ID : ' + partInternalOrder);
  await part.bringToFront();
  await part.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+FDP+Orders+View+(Internal)&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Order+Entry+-+Order+List+Applet+(Internal)');
  await part.waitForTimeout(3000);
  await part.getByRole('button', { name: 'オーダー リストアプレット:クエリー' }).click();
  await part.getByRole('textbox', { name: 'オーダー番号 リンク' }).fill(partInternalOrder);
  await part.getByRole('textbox', { name: 'オーダー番号 リンク' }).click();
  await part.getByRole('textbox', { name: 'オーダー番号 リンク' }).press('Enter');
  await part.getByRole('gridcell', { name: '日付タイムゾーンフィールド' }).click();
  await part.locator('[class="drilldown"]').first().click();
  await part.getByRole('button', { name: '明細項目 リストアプレット:新規' }).click();
  await part.waitForTimeout(2000)
  await part.getByRole('textbox', { name: '部品番号 選択フィールド' }).fill('#M134');
  await part.getByRole('textbox', { name: '部品番号 選択フィールド' }).press('Enter');
  await page.reload()
  await page.waitForTimeout(2000)
  await page.locator('[name="s_1_1_7_0"]').click();
  await page.waitForTimeout(2000)
  await page.locator('[name="s_1_1_7_0"]').click();
  await page.waitForTimeout(2000)
  await page.locator('[name="s_1_1_7_0"]').click();
  await page.waitForTimeout(2000)
  await page.locator('[name="s_1_1_7_0"]').click();
  await part.reload()
  await part.locator('[name="s_4_1_10_0"]').click();
  await part.waitForTimeout(3000)
  await part.locator('[id="s_4_1_17_0_Ctrl"]').click();
  await part.waitForLoadState('domcontentloaded')
  await part.locator('[name="s_4_1_10_0"]').click();
  await part.waitForTimeout(3000)
  await part.locator('[id="s_4_1_17_0_Ctrl"]').click();
  await part.waitForLoadState('domcontentloaded')

  await part.locator('[name="s_4_1_10_0"]').click();
  await part.waitForTimeout(3000)
  await part.locator('[id="s_4_1_17_0_Ctrl"]').click();
  await part.waitForLoadState('domcontentloaded')

  await part.locator('[name="s_4_1_10_0"]').click();
  await part.waitForTimeout(3000)
  await part.locator('[id="s_4_1_17_0_Ctrl"]').click();

  await part.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Internal)')
  await part.locator('[id="s_2_1_21_0_Ctrl"]').click();
  await part.locator('[id="1_Order_Number"]').fill(partInternalOrder);
  await part.locator('[id="1_Order_Number"]').press('Enter');
  await part.locator('[aria-labelledby="s_2_l_Order_Number"]').press('Tab');
  await part.locator('[class="drilldown"]').click();
  await part.waitForLoadState('domcontentloaded')

  // await part.locator('[name="s_4_1_10_0"]').click();
  // await part.waitForTimeout(3000)
  // await part.locator('[name="s_4_1_16_0"]').click();
  // await part.waitForLoadState('domcontentloaded');

  // await page.reload()
  // await page.locator('[name="s_1_1_7_0"]').click();

  await part.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Purchase+Order+View(Internal)")
  await part.waitForLoadState('domcontentloaded')
  await part.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Line+Detail+View+(Internal)")
  await part.waitForLoadState('domcontentloaded')
  await part.reload()
  await part.locator('[name="s_3_1_3_0"]').click();
  await part.reload()

  await page.bringToFront();
  await page.reload();
  // await page.getByRole('button', { name: '明細項目 リストアプレット:出荷依頼' }).click();
  // await part.bringToFront();
  // await part.locator('[aria-roledescription="部品問合せ"]').click();
  // await part.locator('[aria-label="明細項目 リストアプレット:再計算"]').click();
  // await part.locator('[aria-label="明細項目 リストアプレット:引当(全件)"]').click();
  // await part.locator('[aria-label="オーダー フォームアプレット:発注"]').click();
  // await part.reload();
  // await part.getByRole('link', { name: '出荷', exact: true }).click();
  // await part.locator('[aria-label="出荷 選択済み"]').click();
  // await part.locator('[data-display="出荷済"]').click();
  
  await myVecPage.waitForTimeout(5000);
  await myVecPage.bringToFront();
  await myVecPage.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Chassis+Order+View');
  await myVecPage.waitForTimeout(4000);
  await myVecPage.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+All+Body+Building+Order+across+HQ+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Body+Building+Order+List+Applet');
  await myVecPage.waitForTimeout(3000);
  await myVecPage.getByRole('button', { name: '架装発注-ヘッダー リストアプレット:クエリー' }).click();
  await myVecPage.getByRole('textbox', { name: '発注番号 リンク' }).click();
  await myVecPage.getByRole('textbox', { name: '発注番号 リンク' }).fill(bbo);
  await myVecPage.getByRole('textbox', { name: '発注番号 リンク' }).click();
  await myVecPage.getByRole('textbox', { name: '発注番号 リンク' }).press('Enter');
  await myVecPage.locator('[id="\\31 _s_1_l_Body_Building_Type"]').click();
  await myVecPage.locator('[class="drilldown"]').first().click();
  await myVecPage.locator('#s_1_1_43_0_icon').click();
  await myVecPage.getByRole('button', { name: '取引先を選択 リストアプレット:クエリー' }).click();
  await myVecPage.locator('[id="\\31 _s_4_l_Location"]').click();
  await myVecPage.getByRole('textbox', { name: '顧客コード' }).fill('0000001341');
  await myVecPage.getByRole('textbox', { name: '顧客コード' }).press('Enter');
  await myVecPage.getByRole('button', { name: '取引先を選択 リストアプレット:OK' }).click();
  await myVecPage.locator('#s_1_1_108_0_icon').click();
  await myVecPage.getByRole('button', { name: '口座番号を選択 リストアプレット:OK' }).click();
  await myVecPage.locator('[aria-roledescription="架装名称（発注書）"]').click();
  await myVecPage.locator('[id="1_Body_Building_Name_PO_"]').fill('AKM01');
  await myVecPage.locator('[id="1_Body_Building_Name_PO_"]').press('Control+s');
  await myVecPage.locator('[aria-roledescription="架装単価"]').click();
  await myVecPage.locator('[id="1_s_2_l_Item_Price"]').click();
  await myVecPage.getByRole('textbox', { name: '架装単価 通貨計算機フィールド' }).fill('4567');
  await myVecPage.getByRole('textbox', { name: '架装単価 通貨計算機フィールド' }).press('Control+s');
  await myVecPage.getByRole('button', { name: '架装発注-ヘッダー フォームアプレット:承認依頼' }).click();
  await myVecPage.getByRole('link', { name: '承認', exact: true }).click();

const validApprovers2 = ["SCHQ-Sales-Vehicle-Mgr"];
const NVApproveruser2 = [approver3]
  const verfyappvr2 = require('./approverfunction');
  //initiating the constructor
  const SalesGPStaff2 = new verfyappvr2.appnew(myVecPage);
  for (let n = 0; n < validApprovers2.length; n++) {
    const isApproverValid = await SalesGPStaff2.isValidApproverJPN(validApprovers2[n],n);
  }
  await myVecPage.getByPlaceholder('発注番号').click();
  await myVecPage.locator('[aria-label="発注番号"]').press('Control+Alt+k');
  var bb_rowid =  await myVecPage.locator('[aria-label="ロウ番号"]').textContent();
  console.log(bb_rowid);
  for(let n=0;n<validApprovers.length;n++){
    if(NVApproveruser2[n] == approver3 ){
  const UVApprover = new verfyappvr.appnew(NVApproveruser2[n]);
    await NVApproveruser2[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
  await NVApproveruser2[n].bringToFront();
  await UVApprover.correctApprover(bb_rowid);
    }
  }
  await approver3.bringToFront();

  await myVecPage.bringToFront();
  await myVecPage.waitForTimeout(2000)
  await myVecPage.locator('[aria-label="発注番号"]').press('Alt+Enter')
  await myVecPage.waitForTimeout(2000)
  await myVecPage.getByRole('link', { name: '架装発注-検収依頼' }).click();
  await myVecPage.getByRole('button', { name: '架装発注-検収依頼 リストアプレット:新規' }).click();
  await myVecPage.locator('[id="\\31 _s_1_l_Verification_Name"]').click();
  await myVecPage.locator('[aria-roledescription="ステータス"]').click();
  await myVecPage.locator('[aria-roledescription="検収名"]').click();
  await myVecPage.locator('[name="Verification_Name"]').fill('車両受入検収');
  await myVecPage.locator('[title="作成中"]').click();
  await myVecPage.locator('[name="Status"]').fill('承認中');
  await myVecPage.locator('[name="Status"]').fill('完了');
  await myVecPage.locator('[name="Status"]').press('Control+s');
  
  await page.bringToFront();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+All+Sales+Order+across+HQ+List+View');
  await page.waitForTimeout(2000)
  await page.getByRole('button', { name: '販売オーダー リストアプレット:クエリー' }).click();
  await page.getByRole('textbox', { name: 'オーダー番号 リンク' }).click();
  await page.getByRole('textbox', { name: 'オーダー番号 リンク' }).fill(salesOrder);
  await page.getByRole('textbox', { name: 'オーダー番号 リンク' }).click();
  await page.getByRole('textbox', { name: 'オーダー番号 リンク' }).press('Enter');
  await page.getByRole('gridcell', { name: 'コンボボックスフィールド' }).filter({ hasText: 'Sales Order' }).click();
  await page.locator('[class="drilldown"]').first().click();
  await page.waitForTimeout(2000)
  await page.getByRole('link', { name: '明細項目' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('link', { name: 'パーツ & 内部作業' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('gridcell', { name: 'コンボボックスフィールド' }).filter({ hasText: '工賃' }).click();
  await page.getByRole('button', { name: '部品・社内作業 リストアプレット:活動を作成' }).click();
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=Sales+Order+Activities+View');
  await page.waitForTimeout(2000)
  await page.getByText('作成中').click();
  await page.getByRole('combobox', { name: '状況 コンボボックスフィールド' }).fill('予約要求');
  await page.getByRole('combobox', { name: '状況 コンボボックスフィールド' }).click();
  await page.getByRole('combobox', { name: '状況 コンボボックスフィールド' }).press('Control+s');
  await page.waitForTimeout(2000)
  await page.locator('[id="1_s_2_l_Activity_UID"]').click();
  const myNaughtyActivity = await page.locator('[id="1_Activity_UID"]').inputValue();
  console.log('Activity :' + myNaughtyActivity);
  await pageActivity.bringToFront();
  await pageActivity.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+Internal+Work+Request+Branch+View');
  await pageActivity.getByRole('button', { name: '内部作業要求 リストアプレット:クエリー' }).click();
  await pageActivity.getByPlaceholder('<大文字と小文字を区別する>').fill(myNaughtyActivity);
  await pageActivity.getByPlaceholder('<大文字と小文字を区別する>').click();
  await pageActivity.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
  await pageActivity.getByRole('button', { name: '内部作業要求 リストアプレット:ジョブカードを更新する' }).click();
  await pageActivity.locator('[class="drilldown"]').first().click();
  await pageActivity.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: '見積' }).click();
  await pageActivity.locator('[id="1_s_1_l_MF_Approved_By"]').click();
  await pageActivity.locator('#s_1_2_31_0_icon').click();
  await pageActivity.locator('[aria-label="担当者を選択 リストアプレット:クエリー"]').click();
  await pageActivity.locator('[aria-roledescription="名前 (姓)"]').click();
  await pageActivity.locator('[placeholder="<大文字と小文字を区別する>"]').press('Enter');
  await pageActivity.getByRole('button', { name: '担当者を選択 リストアプレット:OK' }).click();
  await pageActivity.locator('[aria-roledescription="見積状況"]').click();
  await pageActivity.getByRole('gridcell', { name: '見積状況 コンボボックスフィールド' }).click();
  await pageActivity.getByRole('combobox', { name: '見積状況 コンボボックスフィールド' }).fill('お客様了解');
  await pageActivity.getByRole('combobox', { name: '見積状況 コンボボックスフィールド' }).click();
  await pageActivity.getByRole('combobox', { name: '見積状況 コンボボックスフィールド' }).press('Control+s');
  await pageActivity.locator('#s_2_1_153_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.locator('#s_2_1_66_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.locator('#s_2_1_20_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.locator('#s_2_1_154_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.locator('#s_2_1_67_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.locator('#s_2_1_126_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.locator('#s_2_1_119_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.locator('#s_2_1_68_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.locator('#s_2_1_35_0_icon').click();
  await pageActivity.getByRole('button', { name: '現在' }).click();
  await pageActivity.getByRole('button', { name: '完了' }).click();
  await pageActivity.getByPlaceholder('受領日(納車)日').press('Control+s');
  await pageActivity.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: '見積' }).click();
  await pageActivity.getByPlaceholder('JC状況').click();
  await pageActivity.getByPlaceholder('JC状況').fill('入庫');
  await pageActivity.waitForTimeout(3000);
  await pageActivity.getByPlaceholder('JC状況').click();
  await pageActivity.getByPlaceholder('JC状況').press('Control+s');
  await pageActivity.reload();
  await pageActivity.getByPlaceholder('JC状況').click();
  await pageActivity.getByPlaceholder('JC状況').fill('メンテナンス開始');
  await pageActivity.waitForTimeout(3000);
  await pageActivity.getByPlaceholder('JC状況').click();
  await pageActivity.getByPlaceholder('JC状況').press('Control+s');
  await pageActivity.getByPlaceholder('JC状況').click();
  await pageActivity.getByPlaceholder('JC状況').fill('メンテナンス完了');
  await pageActivity.waitForTimeout(3000);
  await pageActivity.getByPlaceholder('JC状況').press('Control+s');
  await pageActivity.getByRole('navigation', { name: '第 3 レベルのビューバー' }).getByRole('link', { name: 'ワークオーダー' }).click();
  await pageActivity.getByPlaceholder('JC状況').click();
  await pageActivity.getByPlaceholder('JC状況').fill('入庫');
  await pageActivity.locator('[class="drilldown"]').first().click();
  await pageActivity.getByRole('button', { name: 'ワークオーダー フォームアプレット:開始' }).click();
  await pageActivity.getByRole('button', { name: 'ワークオーダー フォームアプレット:終了' }).click();
  await pageActivity.getByRole('button', { name: 'ワークオーダー フォームアプレット:検収完了' }).click();
  await pageActivity.waitForTimeout(4000);
  await pageActivity.goBack();
  await pageActivity.getByRole('cell', { name: '見込顧客名(取引先) Press F2 for 選択フィールド' }).getByLabel('Press F2 for 選択フィールド').click();
  await pageActivity.getByLabel('取引先を選択 リストアプレット:選択').click();
  await pageActivity.getByPlaceholder('見込顧客名(取引先)').press('Control+s');
  await pageActivity.locator('[name="s_2_1_253_0"]').fill('メンテナンス開始');
  await pageActivity.locator('[name="s_2_1_253_0"]').press('Control+s');
  await pageActivity.waitForTimeout(4000);
  await pageActivity.locator('[name="s_2_1_253_0"]').fill('メンテナンス完了');
  await pageActivity.locator('[name="s_2_1_253_0"]').press('Control+s');
  await pageActivity.waitForTimeout(4000);
  await pageActivity.locator('[name="s_2_1_253_0"]').fill('引渡完了');
  await pageActivity.locator('[name="s_2_1_253_0"]').press('Control+s');
  await pageActivity.waitForTimeout(4000);
  await pageActivity.locator('[name="s_2_1_253_0"]').press('Alt+Enter');
  await pageActivity.getByRole('button', { name: 'ジョブカード フォームアプレット:承認依頼' }).click();
  await page.bringToFront();
  await page.getByRole('button', { name: '販売オーダー フォームアプレット:自動請求' }).click();
  await page.locator('#s_2_1_41_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.getByPlaceholder('諸費用支払方法').click();
  await page.getByPlaceholder('諸費用支払方法').fill('現 金');
  await page.getByRole('button', { name: '請求 フォームアプレット:合計を更新' }).click();
  await page.getByRole('button', { name: '請求 フォームアプレット:請求振分' }).click();
  await page.getByRole('button', { name: '請求 フォームアプレット:承認依頼' }).click();
  await page.getByRole('link', { name: '承認' }).click();

  const validApprovers3 = ["Branch-Sales-Mgr"];
  const NVApproveruser3 = [approver1]
  const verfyappvr3 = require('./approverfunction');
  //initiating the constructor
  const SalesGPStaff3 = new verfyappvr3.appnew(page);
  for (let n = 0; n < validApprovers3.length; n++) {
    const isApproverValid = await SalesGPStaff3.isValidApproverJPN(validApprovers3[n],n);
  }
  await page.getByPlaceholder('請求番号').click();
  await page.getByPlaceholder('請求番号').press('Alt+Control+k');
  var rowidH = await page.locator('[aria-label="ロウ番号"]').textContent();
  console.log('My Row ID is :-> ' + rowidH);
  for(let n=0;n<validApprovers.length;n++){
    if(NVApproveruser3[n] == approver1 ){
  const UVApprover = new verfyappvr.appnew(NVApproveruser3[n]);
    await NVApproveruser3[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
  await NVApproveruser3[n].bringToFront();
  await UVApprover.correctApprover(rowidH);

    }
  }
  await page.bringToFront();
  await page.reload();
  await page.waitForTimeout(6000);
  await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=MF+All+Sales+Order+across+HQ+List+View');
  await page.getByRole('button', { name: '販売オーダー リストアプレット:クエリー' }).click();
  await page.getByRole('textbox', { name: 'オーダー番号 リンク' }).click();
  await page.getByRole('textbox', { name: 'オーダー番号 リンク' }).fill(salesOrder);
  await page.getByRole('textbox', { name: 'オーダー番号 リンク' }).click();
  await page.getByRole('textbox', { name: 'オーダー番号 リンク' }).press('Enter');
  await page.getByRole('gridcell', { name: 'コンボボックスフィールド' }).filter({ hasText: 'Sales Order' }).click();
  await page.locator('[class="drilldown"]').first().click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: '登録/配達' }).click();
  await page.getByRole('button', { name: '登録と配達依頼 リストアプレット:登録依頼作成' }).click();
  await page.getByRole('link', { name: '登録依頼' }).click();
  await page.getByRole('button', { name: '登録配達依頼 フォームアプレット:依頼' }).click();
  await myVecPage.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=Auto+All+Vehicles+across+Organizations+View&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+My+Org+Vehicle+List+Applet');
  await myVecPage.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS=');
  await myVecPage.getByRole('link', { name: '車両', exact: true }).click();
  await myVecPage.getByRole('link', { name: '車両リスト', exact: true }).click();
  await myVecPage.getByLabel('車両 リストアプレット:クエリー').click();
  await myVecPage.getByRole('gridcell', { name: 'リンク' }).click();
  await myVecPage.locator('[name="Serial_Number"]').fill(bbo);
  await myVecPage.locator('[name="Serial_Number"]').press('Enter');
  await myVecPage.getByLabel('売上', { exact: true }).press('Tab');
  await myVecPage.locator('[class="drilldown"]').first().click();
  await myVecPage.locator('[name="s_2_1_33_0"]').fill('Forklift');
await myVecPage.getByRole('cell', { name: '登録No.-陸事名_地域名 Press F2 for 選択フィールド' }).getByLabel('Press F2 for 選択フィールド').click();
await myVecPage.getByLabel('場所を選択 リストアプレット:OK').click();
await myVecPage.getByLabel('登録No.-分類番号').click();
await myVecPage.getByLabel('登録No.-分類番号').fill('123');
await myVecPage.getByLabel('登録No.-ｶﾅ').click();
await myVecPage.getByLabel('登録No.-ｶﾅ').fill('123');
await myVecPage.getByLabel('登録No.-連番').click();
await myVecPage.getByLabel('登録No.-連番').fill('123');
await myVecPage.getByRole('cell', { name: 'フル型式 Press F2 for 選択フィールド' }).getByLabel('Press F2 for 選択フィールド').click();
await myVecPage.getByLabel('OK').click();
await myVecPage.getByLabel('フル型式2').click();
await myVecPage.getByLabel('フル型式2').fill('123');
await myVecPage.getByRole('cell', { name: '陸事名 Press F2 for 選択フィールド' }).getByLabel('Press F2 for 選択フィールド').click();
await myVecPage.getByRole('button', { name: '場所を選択 リストアプレット:キャンセル' }).click();
await myVecPage.locator('input[name="s_2_1_34_0"]').click();
await myVecPage.locator('input[name="s_2_1_34_0"]').fill('123');
await myVecPage.getByRole('link', { name: '車両リスト' }).click();
await myVecPage.locator('[class="drilldown"]').click();
  await myVecPage.locator('[aria-label="登録No.-ｶﾅ"]').fill('345678');
  await myVecPage.locator('[aria-label="登録No.-ｶﾅ"]').press('Control+s');
  await myVecPage.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=Order+Entry+-+My+Orders+View+(Sales)'); 
  await myVecPage.locator('[aria-label="販売オーダー リストアプレット:クエリー"]').click();
  await myVecPage.locator('[aria-roledescription="オーダー番号"]').click();
  await myVecPage.locator('[placeholder="<大文字と小文字を区別する>"]').nth(0).fill(salesOrder);
  await myVecPage.locator('[placeholder="<大文字と小文字を区別する>"]').nth(0).press('Enter');
  await myVecPage.locator('[name="s_vis_div"]').selectOption('販売オーダー (全件)');
  await myVecPage.locator('[name="Order Number"]').click();
  await myVecPage.getByRole('link', { name: '登録/配達' }).click();
  await myVecPage.locator('[class="drilldown"]').click();
  await myVecPage.locator('[aria-label="登録配達依頼 フォームアプレット:完了"]').click();
  await myVecPage.locator('xpath=//*[@id="siebui-threadbar"]/li[2]/span/a').click();
 await page.bringToFront();
  await page.goBack('domcontentloaded');
  await page.waitForTimeout(4000);
  await page.getByRole('link', { name: '登録/配達' }).click();
  await page.getByRole('button', { name: '登録と配達依頼 リストアプレット:納車依頼作成' }).click();
  await page.locator('#s_1_1_100_0_icon').click();
  await page.getByRole('button', { name: '現在' }).click();
  await page.getByRole('button', { name: '完了' }).click();
  await page.getByPlaceholder('納車実績日').press('Control+s');
  await page.getByRole('link', { name: '納入依頼' }).click();
  await page.getByRole('button', { name: '登録配達依頼 フォームアプレット:依頼' }).click();
  await page.getByRole('button', { name: '登録配達依頼 フォームアプレット:完了' }).click();
  await page.getByRole('link', { name: '登録/配達:' }).click();
  await page.getByRole('button', { name: '販売オーダー フォームアプレット:承認依頼' }).click();
  await page.getByRole('link', { name: '承認', exact: true }).click();

  const validApprovers4 = ["Branch-Sales-Mgr"];
  const NVApproveruser4 = [approver1]
  const verfyappvr4 = require('./approverfunction');
  //initiating the constructor
  const SalesGPStaff4 = new verfyappvr4.appnew(page);
  for (let n = 0; n < validApprovers4.length; n++) {
    const isApproverValid = await SalesGPStaff4.isValidApproverJPN(validApprovers4[n],n);
  }
  await page.locator('input[name="s_1_1_119_0"]').click();
  await page.locator('input[name="s_1_1_119_0"]').press('Alt+Control+k');
  var rowid5 = await page.locator('[aria-label="ロウ番号"]').textContent();
  console.log(rowid5);
  for(let n=0;n<validApprovers.length;n++){
    if(NVApproveruser4[n] == approver1 ){
  const UVApprover = new verfyappvr.appnew(NVApproveruser4[n]);
    await NVApproveruser4[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
  await NVApproveruser4[n].bringToFront();
  await UVApprover.correctApprover(rowid5);
    }
  }
  await page.bringToFront();
 
})