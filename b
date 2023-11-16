import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');
const fs = require('fs');

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

    //console.log(generateString(4));

    const context = await browser.newContext();
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    const context3 = await browser.newContext();
    const context4 = await browser.newContext();




    const page = await context.newPage();
    const pageApp1 = await context1.newPage();
    const pageApp2 = await context2.newPage();
    const pageApp3 = await context3.newPage();
    const pageApp4 = await context4.newPage();






    //login process starting
    await page.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });

    await page.getByLabel('User ID').click();
    await page.getByLabel('User ID').fill('D8FOFD22');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Password').fill('Snakamura@1');
    await page.getByRole('button', { name: 'Log on' }).click();

    await pageApp1.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });
    await pageApp1.getByLabel('User ID').click( );
    await pageApp1.getByLabel('User ID').fill('D8FDFO22');
    await pageApp1.getByRole('button', { name: 'Next' }).click();
    await pageApp1.getByLabel('Password').fill('Snakamura@1');
    await pageApp1.getByRole('button', { name: 'Log on' }).click();

    await pageApp2.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?', { waitUntil: 'networkidle' });
    await pageApp2.getByLabel('User ID').click( );
    await pageApp2.getByLabel('User ID').fill('D8FORF22');
    await pageApp2.getByRole('button', { name: 'Next' }).click();
    await pageApp2.getByLabel('Password').fill('Snakamura@1');
    await pageApp2.getByRole('button', { name: 'Log on' }).click();

    await pageApp3.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?', { waitUntil: 'networkidle' });
    await pageApp3.getByLabel('User ID').click( );
    await pageApp3.getByLabel('User ID').fill('D8FFDP13');
    await pageApp3.getByRole('button', { name: 'Next' }).click();
    await pageApp3.getByLabel('Password').fill('Snakamura@1');
    await pageApp3.getByRole('button', { name: 'Log on' }).click();

    await pageApp4.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?', { waitUntil: 'networkidle' });
    await pageApp4.getByLabel('User ID').click( );
    await pageApp4.getByLabel('User ID').fill('D8FDFO19');
    await pageApp4.getByRole('button', { name: 'Next' }).click();
    await pageApp4.getByLabel('Password').fill('Snakamura@1');
    await pageApp4.getByRole('button', { name: 'Log on' }).click();

    await page.bringToFront();
    await page.getByRole('link', { name: '取引先' }).click();
    await page.getByRole('button', { name: '取引先 リストアプレット:新規' }).click();
    await page.locator('[id="1_s_1_l_Name"]').click();

    await page.getByRole('gridcell', { name: '顧客名 リンク' }).click();
    await page.getByRole('textbox', { name: '顧客名 リンク' }).fill('ラヴィ');
    await page.locator('[id="\\31 _s_1_l_MF_Company_Name_KANA"]').click();

    await page.getByRole('textbox', { name: '顧客名-ｶﾅ' }).fill('TESTDATA');
    await page.locator('[id="\\31 _s_1_l_Main_Phone_Number"]').click();
    await page.getByRole('textbox', { name: '電話番号' }).fill('9414141410');
    await page.getByRole('textbox', { name: '電話番号' }).press('Control+s');
    await page.getByRole('gridcell', { name: '顧客名-ｶﾅ' }).click();
    await page.locator('[name="Name"]').first().click();
    await page.getByRole('link', { name: '顧客住所' }).click();
    await page.getByRole('button', { name: '住所 フォームアプレット:新規' }).click();
    await page.getByRole('combobox', { name: '都道府県名' }).click();
    await page.getByRole('combobox', { name: '都道府県名' }).fill('山形県');
    await page.getByRole('combobox', { name: '市区郡町村名' }).click();
    await page.getByRole('combobox', { name: '市区郡町村名' }).fill('寒河江市');
    await page.locator('#s_1_1_10_0_icon').click();
    await page.pause()
    await page.getByRole('button', { name: '住所を選択 リストアプレット:OK' }).click();
    await page.getByRole('button', { name: '取引先詳細 フォームアプレット:登録' }).click();
    await page.getByRole('navigation', { name: '第 4 レベルのビューバー' }).getByRole('link', { name: '基本情報' }).click();
    await page.locator('[aria-label="基本情報 リストアプレット:取引先情報作成"]').click();
    await page.locator('[aria-label="両方"]').click();
    await page.getByRole('button', { name: '次へ' }).click();
    
    // await page.getByRole('button', { name: '送信' }).click();
    await page.locator('[placeholder="敬称（様）"]').fill("御中");
    await page.locator('[placeholder="リスクランク"]').fill("A:通常顧客");
    await page.locator('[placeholder="請求発行分類"]').fill("経理送付");
    await page.locator('[aria-label="次へ"]').click();

    await page.locator('[aria-label="次へ"]').click();

    await page.locator('[aria-label="次へ"]').click();

    // await page.getByRole('button', { name: '基本情報 リストアプレット:取引先情報作成' }).click();
    // await page.getByRole('radio', { name: '業者 (買掛先)' }).check();
    // await page.getByRole('button', { name: '次へ' }).click();
    // await page.getByPlaceholder('敬称（様）').click();
    // await page.getByPlaceholder('敬称（様）').fill('御中');

    // await page.getByRole('button', { name: '次へ' }).click();
    // await page.getByRole('button', { name: '次へ' }).click();

    await page.getByPlaceholder('回収条件（締切タイプ）部整').fill('納車後');
    await page.getByPlaceholder('回収条件（据置期間種類）部整').fill('日');
    await page.getByPlaceholder('回収条件（据置期間）部整').fill('01');
    await page.getByPlaceholder('回収条件（回収方法）部整').fill('自動引落');
    await page.getByPlaceholder('回収条件（休日フラグ）部整').fill('休日時前日');
    // await page.getByPlaceholder('回収条件（締切タイプ）車両').fill('納車後');
    // await page.getByPlaceholder('回収条件（据置期間種類）車両').fill('日');
    // await page.getByPlaceholder('回収条件（据置期間）車両').fill('01');
    // await page.getByPlaceholder('回収条件（回収方法）車両').fill('自動 引落');
    // await page.getByPlaceholder('回収条件（休日フラグ）車両').fill('休日時前日');

    await page.getByRole('button', { name: '次へ' }).click();
    await page.getByRole('button', { name: '次へ' }).click();
    await page.getByRole('button', { name: '次へ' }).click();

    await page.getByPlaceholder('支払条件（締切タイプ）').fill('納車後');
    await page.getByPlaceholder('支払条件（据置期間種類）').fill('日');
    await page.getByPlaceholder('支払条件（据置期間）').fill('01');
    await page.getByPlaceholder('支払条件（支払方法）').fill('自動引落');
    await page.getByPlaceholder('支払条件（休日フラグ）').fill('休日時前日');
    // await page.getByPlaceholder('回収条件（休日フラグ）車両').fill('休日時前日');
    // await page.getByPlaceholder('回収条件（休日フラグ）車両').fill('休日時前日');
    // await page.getByPlaceholder('回収条件（休日フラグ）車両').fill('休日時前日');
    await page.getByRole('button', { name: '次へ' }).click();

    await page.getByRole('combobox', { name: '検索' }).click();
    await page.getByRole('combobox', { name: '検索' }).fill('コメント');
    await page.getByRole('button', { name: '添付書類 リストアプレット:添付確定' }).click();
    await page.getByRole('button', { name: '送信' }).click();
    await page.pause()

    await page.getByRole('link', { name: 'サービスリクエスト' }).click();
    await page.getByRole('button', { name: 'サービスリクエスト リストアプレット:承認依頼' }).click();
    // await page.locator('[id="\\32 _s_1_l_Request_infoSales_approver"]').click();
    // await page.getByRole('button', { name: 'サービスリクエスト リストアプレット:承認依頼' }).click();
    // await page.reload();
    // await page.waitForTimeout(3000);
    //copy row id
    await page.locator('[id="1_s_1_l_SR_Number"]').press("Control+Alt+k");
    var rowid = await page.locator('[aria-label="ロウ番号"]').textContent();
    console.log(rowid);
    await page.locator('[aria-label="ロウ番号"]').press("Control+c");

    await pageApp1.bringToFront();
    await pageApp1.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp1.waitForLoadState('domcontentloaded');
    await pageApp1.getByRole('button', { name: '受信箱の項目 リストアプレット:クエリー' }).click();
    await pageApp1.getByRole('gridcell', { name: 'リンク' }).click();
    await pageApp1.getByPlaceholder('<大文字と小文字を区別する>').fill(rowid);
    await pageApp1.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
    //await pageApp1.getByRole('gridcell', { name: 'コンボボックスフィールド' }).click();
    await pageApp1.locator('[id="1_s_1_l_Action"]').click();
    await pageApp1.locator('[id="1_Action"]').fill('承認');
    await pageApp1.locator('[id="1_Action"]').press('Control+s');
    await pageApp1.waitForLoadState('networkidle');
    await pageApp1.waitForTimeout(5000);

    await page.reload();
await pageApp2.pause()
    await pageApp2.bringToFront();
    await pageApp2.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp2.waitForLoadState('domcontentloaded');
    await pageApp2.getByRole('button', { name: '受信箱の項目 リストアプレット:クエリー' }).click();
    await pageApp2.getByRole('gridcell', { name: 'リンク' }).click();
    await pageApp2.getByPlaceholder('<大文字と小文字を区別する>').fill(rowid);
    await pageApp2.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
    //await pageApp2.getByRole('gridcell', { name: 'コンボボックスフィールド' }).click();
    await pageApp2.locator('[id="1_s_1_l_Action"]').click();
    await pageApp2.locator('[id="1_Action"]').fill('承認');
    await pageApp2.locator('[id="1_Action"]').press('Control+s');
    await pageApp2.waitForLoadState('networkidle');
    await pageApp2.waitForTimeout(5000);

    await page.reload();
await pageApp3.pause()
    await pageApp3.bringToFront();
    await pageApp3.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp3.waitForLoadState('domcontentloaded');
    await pageApp3.getByRole('button', { name: '受信箱の項目 リストアプレット:クエリー' }).click();
    await pageApp3.getByRole('gridcell', { name: 'リンク' }).click();
    await pageApp3.getByPlaceholder('<大文字と小文字を区別する>').fill(rowid);
    await pageApp3.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
    //await pageApp3.getByRole('gridcell', { name: 'コンボボックスフィールド' }).click();
    await pageApp3.locator('[id="1_s_1_l_Action"]').click();
    await pageApp3.locator('[id="1_Action"]').fill('承認');
    await pageApp3.locator('[id="1_Action"]').press('Control+s');
    await pageApp3.waitForLoadState('networkidle');
    await pageApp3.waitForTimeout(5000);

    await page.reload();
    await pageApp4.pause
    await pageApp4.bringToFront();
    await pageApp4.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp4.waitForLoadState('domcontentloaded');
    await pageApp4.getByRole('button', { name: '受信箱の項目 リストアプレット:クエリー' }).click();
    await pageApp4.getByRole('gridcell', { name: 'リンク' }).click();
    await pageApp4.getByPlaceholder('<大文字と小文字を区別する>').fill(rowid);
    await pageApp4.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
    //await pageApp4.getByRole('gridcell', { name: 'コンボボックスフィールド' }).click();
    await pageApp4.locator('[id="1_s_1_l_Action"]').click();
    await pageApp4.locator('[id="1_Action"]').fill('承認');
    await pageApp4.locator('[id="1_Action"]').press('Control+s');
    await pageApp4.waitForLoadState('networkidle');
    await pageApp4.waitForTimeout(5000);
    await page.reload();






    //copy row id
    await page.locator('[aria-labelledby="s_1_l_MF_SR_Id"]').nth(1).press("Control+Alt+k");
    var rowid2 = await page.locator('[aria-label="ロウ番号"]').textContent();
    console.log(rowid2);
    await page.locator('[aria-label="ロウ番号"]').press("Control+c");

    await pageApp1.bringToFront();
    await pageApp1.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp1.waitForLoadState('domcontentloaded');
    await pageApp1.getByRole('button', { name: '受信箱の項目 リストアプレット:クエリー' }).click();
    await pageApp1.getByRole('gridcell', { name: 'リンク' }).click();
    await pageApp1.getByPlaceholder('<大文字と小文字を区別する>').fill(rowid2);
    await pageApp1.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
    //await pageApp1.getByRole('gridcell', { name: 'コンボボックスフィールド' }).click();
    await pageApp1.locator('[id="1_s_1_l_Action"]').click();
    await pageApp1.locator('[id="1_Action"]').fill('承認');
    await pageApp1.locator('[id="1_Action"]').press('Control+s');
    await pageApp1.waitForLoadState('networkidle');
    await pageApp1.waitForTimeout(5000);

    await page.reload();

    await pageApp2.bringToFront();
    await pageApp2.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp2.waitForLoadState('domcontentloaded');
    await pageApp2.getByRole('button', { name: '受信箱の項目 リストアプレット:クエリー' }).click();
    await pageApp2.getByRole('gridcell', { name: 'リンク' }).click();
    await pageApp2.getByPlaceholder('<大文字と小文字を区別する>').fill(rowid);
    await pageApp2.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
    //await pageApp2.getByRole('gridcell', { name: 'コンボボックスフィールド' }).click();
    await pageApp2.locator('[id="1_s_1_l_Action"]').click();
    await pageApp2.locator('[id="1_Action"]').fill('承認');
    await pageApp2.locator('[id="1_Action"]').press('Control+s');
    await pageApp2.waitForLoadState('networkidle');
    await pageApp2.waitForTimeout(5000);

    await page.reload();


    await pageApp3.bringToFront();
    await pageApp3.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp3.waitForLoadState('domcontentloaded');
    await pageApp3.getByRole('button', { name: '受信箱の項目 リストアプレット:クエリー' }).click();
    await pageApp3.getByRole('gridcell', { name: 'リンク' }).click();
    await pageApp3.getByPlaceholder('<大文字と小文字を区別する>').fill(rowid);
    await pageApp3.getByPlaceholder('<大文字と小文字を区別する>').press('Enter');
    //await pageApp3.getByRole('gridcell', { name: 'コンボボックスフィールド' }).click();
    await pageApp3.locator('[id="1_s_1_l_Action"]').click();
    await pageApp3.locator('[id="1_Action"]').fill('承認');
    await pageApp3.locator('[id="1_Action"]').press('Control+s');
    await pageApp3.waitForLoadState('networkidle');
    await pageApp3.waitForTimeout(5000);


})