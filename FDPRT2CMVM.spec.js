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
    const page = await context.newPage();




    //login process starting
    await page.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/jpn?SWECmd=Login&SWEPL=1&SRN=&SWETS', { waitUntil: 'networkidle' });

    await page.getByLabel('User ID').click();
    await page.getByLabel('User ID').fill('D8FOFD22');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByLabel('Password').fill('Snakamura@1');
    await page.getByRole('button', { name: 'Log on' }).click();
    await page.getByRole('link', { name: '取引先' }).click();
    await page.getByRole('button', { name: '取引先 リストアプレット:新規' }).click();

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
    await page.getByRole('button', { name: '住所を選択 リストアプレット:OK' }).click();
    await page.getByRole('button', { name: '取引先詳細 フォームアプレット:登録' }).click();
    await page.getByRole('navigation', { name: '第 4 レベルのビューバー' }).getByRole('link', { name: '基本情報' }).click();
    await page.getByRole('button', { name: '基本情報 リストアプレット:基本情報更新' }).click();
    await page.getByRole('button', { name: '次へ' }).click();
    await page.getByRole('button', { name: '送信' }).click();
    await page.getByRole('button', { name: '基本情報 リストアプレット:取引先情報作成' }).click();
    await page.getByRole('radio', { name: '業者 (買掛先)' }).check();
    await page.getByRole('button', { name: '次へ' }).click();
    await page.getByPlaceholder('敬称（様）').click();
    await page.getByPlaceholder('敬称（様）').fill('御中');

    await page.getByRole('button', { name: '次へ' }).click();
    await page.getByRole('button', { name: '次へ' }).click();

    await page.getByPlaceholder('支払条件（締切タイプ）').click();
    await page.getByPlaceholder('支払条件（締切タイプ）').fill('納車後');
    await page.getByPlaceholder('支払条件（据置期間種類）').click();
    await page.getByPlaceholder('支払条件（据置期間種類）').fill('日');
    await page.getByPlaceholder('支払条件（据置期間）').click();
    await page.getByPlaceholder('支払条件（据置期間）').fill('01');
    await page.getByPlaceholder('支払条件（支払方法）').click();
    await page.getByPlaceholder('支払条件（支払方法）').fill('自動引落');
    await page.getByPlaceholder('支払条件（休日フラグ）').click();
    await page.getByPlaceholder('支払条件（休日フラグ）').fill('休日時前日');
    await page.getByRole('button', { name: '次へ' }).click();
    await page.getByRole('combobox', { name: '検索' }).click();
    await page.getByRole('combobox', { name: '検索' }).fill('コメント');
    await page.getByRole('button', { name: '添付書類 リストアプレット:添付確定' }).click();
    await page.getByRole('button', { name: '送信' }).click();
    await page.getByRole('link', { name: 'サービスリクエスト' }).click();
    await page.getByRole('button', { name: 'サービスリクエスト リストアプレット:承認依頼' }).click();
    await page.locator('[id="\\32 _s_1_l_Request_infoSales_approver"]').click();
    await page.getByRole('button', { name: 'サービスリクエスト リストアプレット:承認依頼' }).click();
    await page.reload();
    await page.waitForTimeout(3000);
    await page.close();



})