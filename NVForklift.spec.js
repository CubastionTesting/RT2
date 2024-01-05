import { test, expect } from '@playwright/test';

const { chromium } = require('@playwright/test');

test('record demo 1', async () => {
    test.setTimeout(12000000);

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

  //  console.log(generateString(4));
    const context = await browser.newContext();
    //const context1 = await browser.newContext();
    //const context2 = await browser.newContext();
    const context3 = await browser.newContext();
    const context4 = await browser.newContext();
    const context5 = await browser.newContext();
    const context6 = await browser.newContext();



    const SaleStaffPage = await context.newPage();
    //const part23 = await context1.newPage();
    //const pageActivity = await context2.newPage();
    const pageApp1 = await context3.newPage();
    const myVec = await context4.newPage();
    const pageApp2 = await context5.newPage();
    const pageApp3 = await context6.newPage();


    await SaleStaffPage.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu');
    await SaleStaffPage.waitForLoadState('load');
    await SaleStaffPage.locator('#s_swepi_1').fill('D8FOFD22');
    await SaleStaffPage.locator('#s_swepi_2').fill('cubfuso123');
    await SaleStaffPage.locator('#s_swepi_22').click();
    await SaleStaffPage.waitForLoadState('domcontentloaded');

    // Sales Staff - quote, SO, PO till salesposting


    /*await part23.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu');
    await part23.waitForLoadState('load');
    //
    await part23.locator('#s_swepi_1').fill('D8FFDP23');
    await part23.locator('#s_swepi_2').fill('cubfuso123');
    await part23.locator('#s_swepi_22').click();
    await part23.waitForLoadState('domcontentloaded');*/

    /*await pageActivity.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu');
    await pageActivity.waitForLoadState('load');
    await pageActivity.locator('#s_swepi_1').fill('D8FDFO24');
    await pageActivity.locator('#s_swepi_2').fill('cubfuso123');
    await pageActivity.locator('#s_swepi_22').click();
    await pageActivity.waitForLoadState('domcontentloaded');*/

    await pageApp1.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu');
    await pageApp1.waitForLoadState('load');
    await pageApp1.locator('#s_swepi_1').fill('D8FDFO22');
    await pageApp1.locator('#s_swepi_2').fill('cubfuso123');
    await pageApp1.locator('#s_swepi_22').click();
    await pageApp1.waitForLoadState('domcontentloaded');

    await myVec.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu');
    await myVec.waitForLoadState('load');
    await myVec.locator('#s_swepi_1').fill('D8FOFD17');
    await myVec.locator('#s_swepi_2').fill('cubfuso123');
    await myVec.locator('#s_swepi_22').click();
    await myVec.waitForLoadState('domcontentloaded');


    await pageApp2.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu');
    await pageApp2.waitForLoadState('load');
    await pageApp2.locator('#s_swepi_1').fill('D8FORF22');
    await pageApp2.locator('#s_swepi_2').fill('cubfuso123');
    await pageApp2.locator('#s_swepi_22').click();
    await pageApp2.waitForLoadState('domcontentloaded');

    await pageApp3.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu');
    await pageApp3.waitForLoadState('load');
    await pageApp3.locator('#s_swepi_1').fill('D8FDFO22');
    await pageApp3.locator('#s_swepi_2').fill('cubfuso123');
    await pageApp3.locator('#s_swepi_22').click();
    await pageApp3.waitForLoadState('domcontentloaded');


    await SaleStaffPage.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=Opportunity+List+View');
    await SaleStaffPage.getByRole('button', { name: 'Opportunities List Applet:New' }).click();
    await SaleStaffPage.getByRole('row', { name: 'Opportunity Name Link Selection Field Combobox Field Multiple Selection Field Date Field In Progress' }).getByRole('gridcell', { name: 'Selection Field' }).first().click();
    await SaleStaffPage.locator('#s_1_2_79_0_icon').click();
    await SaleStaffPage.getByRole('button', { name: 'Pick Account List Applet:Query' }).click();
    await SaleStaffPage.locator('[id="\\31 _s_3_l_MF_Siebel_Account_Code"]').click();
   
    await SaleStaffPage.getByRole('textbox', { name: 'Account Code' }).fill('0000001341');
    await SaleStaffPage.getByRole('textbox', { name: 'Account Code' }).press('Enter');
    await SaleStaffPage.getByRole('button', { name: 'Pick Account List Applet:OK' }).click();
    await SaleStaffPage.locator('[id="1_s_1_l_MF_Expected_Delivery_Date"]').click();
    await SaleStaffPage.locator('#s_1_2_37_0_icon').click();
    await SaleStaffPage.getByRole('button', { name: 'Now' }).click();
    await SaleStaffPage.getByRole('button', { name: 'Done' }).click();
    await SaleStaffPage.locator('[id="\\31 _s_1_l_MF_Product_Class"]').click();
    await SaleStaffPage.getByRole('combobox', { name: 'Product Class Combobox Field' }).fill('Fork');
    await SaleStaffPage.getByRole('combobox', { name: 'Product Class Combobox Field' }).press('Enter');
    await SaleStaffPage.locator('[id="1_s_1_l_MF_Body_Type"]').click();
  //  await SaleStaffPage.getByRole('row', { name: 'Opportunity Name Link 1-3IRG43 Account Selection Field Combobox Field Multiple Selection Field Requested Delivery Date Date Field In Progress Product Class ' }).getByRole('gridcell', { name: 'Combobox Field' }).nth(3).click();
    await SaleStaffPage.getByRole('combobox', { name: 'Body Type Combobox Field' }).fill('Other');
    await SaleStaffPage.getByRole('combobox', { name: 'Body Type Combobox Field' }).press('Enter');
    await SaleStaffPage.getByPlaceholder('Body Type*').click();
    await SaleStaffPage.locator('#s_2_1_121_0_icon').click();
    await SaleStaffPage.getByRole('button', { name: 'Now' }).click();
    await SaleStaffPage.getByRole('button', { name: 'Done' }).click();
    await SaleStaffPage.locator('[class="drilldown"]').first().click();

   // await SaleStaffPage.getByRole('link', { name: '1-3IRG43' }).click();
    await SaleStaffPage.locator('#s_1_1_9_0_icon').click();
    await SaleStaffPage.getByRole('button', { name: 'Now' }).click();
    await SaleStaffPage.getByRole('button', { name: 'Done' }).click();
    await SaleStaffPage.locator('#s_2_1_120_0_icon').click();
    await SaleStaffPage.getByRole('button', { name: 'Now' }).click();
    await SaleStaffPage.getByRole('button', { name: 'Done' }).click();
    await SaleStaffPage.getByRole('button', { name: 'Opportunity Form Applet:Auto Quote' }).click();

    await SaleStaffPage.pause();
   // await SaleStaffPage.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=Quote+Item+Detail+View+Actual+Cost&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=Quote+Form+Applet&SWERowId0=1-3IRG4A&SWEApplet1=MF+NV+Quote+Item+List+Applet+-+Actual+Cost&SWERowId1=1-3IRG4D');

   const AKMQuote = await SaleStaffPage.locator('[aria-label="Quote#"]').inputValue();
   console.log('Quote : ' + AKMQuote);
   
    await SaleStaffPage.getByRole('row', { name: ' プール原価 - 陸送 Pool Cost - Plan YN8A Calculator Field ¥0 ¥0 Selection Field' }).getByRole('gridcell', { name: 'Calculator Field' }).nth(1).click();
    await SaleStaffPage.getByRole('textbox', { name: ' プール原価 - 陸送 Net Price Calculator Field' }).fill('90000');
    await SaleStaffPage.getByRole('textbox', { name: ' プール原価 - 陸送 Net Price Calculator Field' }).press('Control+s');
    await SaleStaffPage.getByRole('row', { name: ' Generic Trailer & Forklift Trailer & Forklift Generic Trailer & Forklift Calculator Field Selection Field' }).getByRole('gridcell', { name: 'Calculator Field' }).nth(1).click();
    await SaleStaffPage.getByRole('textbox', { name: ' Generic Trailer & Forklift Net Price Calculator Field' }).fill('90000');
    await SaleStaffPage.getByRole('textbox', { name: ' Generic Trailer & Forklift Net Price Calculator Field' }).press('Control+s');
    await SaleStaffPage.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').fill('90000');
    await SaleStaffPage.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').click();
    await SaleStaffPage.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').fill('90000');
    await SaleStaffPage.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').press('Control+s');

    await SaleStaffPage.getByPlaceholder('Sales Type').click();
    await SaleStaffPage.getByPlaceholder('Sales Type').fill('Dire');
    await SaleStaffPage.getByPlaceholder('Sales Type').press('Enter');
    await SaleStaffPage.getByPlaceholder('Lease Type').click();
  
    await SaleStaffPage.getByPlaceholder('Lease Type').fill('Fin');
    await SaleStaffPage.getByPlaceholder('Lease Type').press('Enter');
  
    await SaleStaffPage.getByPlaceholder('Planned Delivery Date').click();
    await SaleStaffPage.locator('[id="s_2_1_103_0_icon"]').click();
    await SaleStaffPage.getByRole('button', { name: 'Now' }).click();
    await SaleStaffPage.getByRole('button', { name: 'Done' }).click();
    await SaleStaffPage.locator('[id="s_2_1_96_0_icon"]').click();
    await SaleStaffPage.getByRole('button', { name: 'Pick Location List Applet:OK' }).click();
    await SaleStaffPage.getByPlaceholder('Delivery Destination').fill('Tokyo');
    await SaleStaffPage.getByPlaceholder('Delivery Destination').press('Control+s');

    await SaleStaffPage.getByRole('link', { name: 'Taxes and Expenses' }).click();
    await SaleStaffPage.locator('[id="s_1_1_39_0_icon"]').click();
    await SaleStaffPage.getByRole('button', { name: 'Now' }).click();
    await SaleStaffPage.getByRole('button', { name: 'Done' }).click();
    await SaleStaffPage.locator('[name="s_1_1_34_0"]').click();
    await SaleStaffPage.locator('[name="s_1_1_34_0"]').fill('Private');
    await SaleStaffPage.locator('[name="s_1_1_34_0"]').press('Control+s');
    await SaleStaffPage.getByRole('button', { name: 'Taxes and Expenses List Applet:Add Taxes & Expenses' }).click();
    await SaleStaffPage.getByRole('link', { name: 'Line Items' }).click();

    await SaleStaffPage.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
    await SaleStaffPage.waitForTimeout(4000);
    await SaleStaffPage.getByPlaceholder('Quote Name').click();
    await SaleStaffPage.getByPlaceholder('Quote Name').press('Alt+Control+k');
  
    const JSRQuoteID = await SaleStaffPage.locator('[aria-label="Row #"]').textContent();
    console.log('Quote id for taking approval is : ' + JSRQuoteID);

    await SaleStaffPage.getByLabel('About Record Form Applet:OK').click();
    await SaleStaffPage.getByRole('link', { name: 'Approval History' }).click();

    const jsonData = require('./Change Sales Quotation.json')
    const validApprovers = jsonData.Others[0]['Branch-limit']['Branch-Sales-Staf'];
      //const NVApproveruser1 = [pageApp1,pageApp2]
      const verfyappvr = require('./approverfunction');
      //initiating the constructor
      const SalesGPStaff = new verfyappvr.appnew(SaleStaffPage);
      for (let n = 0; n < validApprovers.length; n++) {
        const isApproverValid = await SalesGPStaff.isValidApprover(validApprovers[n],n);
      }
    
      await pageApp1.bringToFront();
      await pageApp1.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Inbox+Item+List+View', { waitUntil: 'networkidle' });
      await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
      await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
      await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRQuoteID);
      await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
      await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
      await pageApp1.locator('[id="1_Action"]').fill('Rejected');
      await pageApp1.locator('[id="1_Action"]').press('Enter');
      await pageApp1.locator('[id="1_Action"]').press('Control+s');
      await pageApp1.waitForLoadState('networkidle');

      await SaleStaffPage.bringToFront();
      await SaleStaffPage.reload();
      await SaleStaffPage.locator('[name="s_2_1_127_0"]').click();
      await SaleStaffPage.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
      await SaleStaffPage.waitForTimeout(4000);

      console.log('From Sales-Staff-Others(Branch Limit >=0)');
  console.log('Expected - Branch-Sales-Mgr, Branch-Head');
  //const jsonData = require('./sales_quotation_approval.json')
  const validApprovers2 = jsonData.Others[0]['Branch-limit']['Branch-Sales-Staf'];
    //const NVApproveruser1 = [pageApp1,pageApp2]
    const verfyappvr2 = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff2 = new verfyappvr2.appnew(SaleStaffPage);
    for (let n = 0; n < validApprovers2.length; n++) {
      const isApproverValid = await SalesGPStaff2.isValidApprover(validApprovers2[n],n);
    }
    
  console.log('Actual coming - Branch-Sales-Mgr, Branch-Head');
  await pageApp1.bringToFront();
  await pageApp1.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Inbox+Item+List+View', { waitUntil: 'networkidle' });
  await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
  await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
  await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRQuoteID);
  await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
  await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
  await pageApp1.locator('[id="1_Action"]').fill('Rejected');
  await pageApp1.locator('[id="1_Action"]').press('Enter');
  await pageApp1.locator('[id="1_Action"]').press('Control+s');
  await pageApp1.waitForLoadState('networkidle');

  await SaleStaffPage.bringToFront();
  await SaleStaffPage.reload();
  await SaleStaffPage.locator('[name="s_2_1_127_0"]').click();
  await SaleStaffPage.getByRole('link', { name: 'Line Items' }).click();
  await SaleStaffPage.locator('[id="9_s_1_l_Cost"]').click();
  await SaleStaffPage.locator('[name="Cost"]').click();
  await SaleStaffPage.locator('[name="Cost"]').fill('80000');
  await SaleStaffPage.locator('[name="Cost"]').press('Control+s');
  await SaleStaffPage.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').click();
  await SaleStaffPage.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').fill('80000');
  await SaleStaffPage.getByRole('cell', { name: 'Sales Price Press F2 for Calculator Field' }).getByPlaceholder('Sales Price').press('Control+s');
  await SaleStaffPage.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
  await SaleStaffPage.waitForTimeout(4000);
  //await SaleStaffPage.getByLabel('About Record Form Applet:OK').click();
  await SaleStaffPage.getByRole('link', { name: 'Approval History' }).click();

  console.log('From Sales-Staff-Others(Branch Limit=0)');
  console.log('Expected - Branch-Sales-Mgr, Branch-Head');
  //const jsonData = require('./sales_quotation_approval.json')
  const validApprovers5 = jsonData.Others[0]['Branch-limit']['Branch-Sales-Staf'];
    //const NVApproveruser1 = [pageApp1,pageApp2]
    const verfyappvr5 = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff5 = new verfyappvr2.appnew(SaleStaffPage);
    for (let n = 0; n < validApprovers5.length; n++) {
      const isApproverValid = await SalesGPStaff5.isValidApprover(validApprovers5[n],n);
    }

    console.log('Actual coming - Branch-Sales-Mgr, Branch-Head');

    await pageApp1.bringToFront();
    await pageApp1.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
    await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRQuoteID);
    await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
    await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
    await pageApp1.locator('[id="1_Action"]').fill('Rejected');
    await pageApp1.locator('[id="1_Action"]').press('Enter');
    await pageApp1.locator('[id="1_Action"]').press('Control+s');
    await pageApp1.waitForLoadState('networkidle');

    await SaleStaffPage.bringToFront();
    await SaleStaffPage.reload();
    await SaleStaffPage.locator('[name="s_2_1_127_0"]').click();
    await SaleStaffPage.getByRole('link', { name: 'Line Items' }).click();
    //await SaleStaffPage.getByLabel('About Record Form Applet:OK').click();
    //await SaleStaffPage.locator('[name="s_2_1_127_0"]').click();
    await SaleStaffPage.getByPlaceholder('Sales Price', { exact: true }).dblclick();
    await SaleStaffPage.getByPlaceholder('Sales Price', { exact: true }).fill('20000');
    await SaleStaffPage.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
    await SaleStaffPage.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
    await SaleStaffPage.waitForTimeout(4000);
    await SaleStaffPage.getByRole('link', { name: 'Approval History' }).click();

    
    const validApprovers3 = jsonData.Others[1]['HQ-limit']['Branch-Sales-Staf'];
    const NVApproveruser3= [pageApp1,pageApp2,pageApp2]
    const verfyappvr3 = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff3 = new verfyappvr3.appnew(SaleStaffPage);
    for (let n = 0; n < validApprovers3.length; n++) {
      const isApproverValid1 = await SalesGPStaff3.isValidApprover(validApprovers3[n],n);
    }

    await pageApp1.bringToFront();
    await pageApp1.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Inbox+Item+List+View', { waitUntil: 'networkidle' });
    await pageApp1.locator('[aria-label="Inbox Items List Applet:Query"]').click();
    await pageApp1.getByRole('gridcell', { name: 'Link' }).click();
    await pageApp1.getByPlaceholder('<Case Sensitive>').fill(JSRQuoteID);
    await pageApp1.getByPlaceholder('<Case Sensitive>').press('Enter');
    await pageApp1.getByRole('gridcell', { name: 'Combobox Field' }).click();
    await pageApp1.locator('[id="1_Action"]').fill('Rejected');
    await pageApp1.locator('[id="1_Action"]').press('Enter');
    await pageApp1.locator('[id="1_Action"]').press('Control+s');
    await pageApp1.waitForLoadState('networkidle');

    await SaleStaffPage.goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+All+Quotes+across+HQ+List+View');
    const kcurl = SaleStaffPage.url();
    await SaleStaffPage.locator('[name="s_2_1_16_0"]').click();
    await SaleStaffPage.locator('[aria-roledescription="Name"]').click();
    await SaleStaffPage.locator('[name="Name"]').click();
    await SaleStaffPage.locator('[name="Name"]').fill(AKMQuote);
    await SaleStaffPage.locator('[name="Name"]').press('Enter');
    await SaleStaffPage.locator('[name="s_2_1_0_0"]').click();
    await SaleStaffPage.getByPlaceholder('Sales Price', { exact: true }).dblclick();
    await SaleStaffPage.getByPlaceholder('Sales Price', { exact: true }).fill('20000');
    await SaleStaffPage.getByPlaceholder('Sales Price', { exact: true }).press('Control+s');
    await SaleStaffPage.getByRole('button', { name: 'Quote Form Applet:Generate Approvals' }).click();
    await SaleStaffPage.waitForTimeout(4000);
    await SaleStaffPage.getByPlaceholder('Quote Name').click();
    await SaleStaffPage.getByPlaceholder('Quote Name').press('Alt+Control+k');

    const CopyQuote = await SaleStaffPage.locator('[aria-label="Quote#"]').inputValue();
    console.log('Quote : ' + CopyQuote);
  
    const JSRQuoteID1 = await SaleStaffPage.locator('[aria-label="Row #"]').textContent();
    console.log('Quote id1 for taking approval is : ' + JSRQuoteID1);
  
    await SaleStaffPage.getByLabel('About Record Form Applet:OK').click();
    await SaleStaffPage.getByRole('link', { name: 'Approval History' }).click();

    console.log('From Sales-Staff-Others(Management Limit<0)');
    console.log('Expected -["Branch-Sales-Mgr","Branch-Head","SCHQ-BizMgmt-SnrMgr"]');
    //const jsonData = require('../RT2/sales_quotation_approval.json');
    const validApprovers1 = jsonData.Others[1]['HQ-limit']['Branch-Sales-Staf'];
      const NVApproveruser2= [pageApp1,pageApp2,pageApp1]
      const verfyappvr1 = require('./approverfunction');
      //initiating the constructor
      const SalesGPStaff1 = new verfyappvr1.appnew(SaleStaffPage);
      for (let n = 0; n < validApprovers1.length; n++) {
        const isApproverValid1 = await SalesGPStaff1.isValidApprover(validApprovers1[n],n);
      }
   
      for(let n=0;n<validApprovers1.length;n++){
        if(NVApproveruser2[n] == pageApp1 || NVApproveruser2[n] == pageApp2 ){
      const NVApprover1 = new verfyappvr1.appnew(NVApproveruser2[n]);
      await NVApproveruser2[n].goto('https://forcefdp-uat1.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
      await NVApproveruser2[n].bringToFront();
      await NVApprover1.correctApprover(JSRQuoteID1);
   
        }
   
        //inbox function end
      }
  
      console.log('Actual Coming -["Branch-Sales-Mgr","Branch-Head","SCHQ-BizMgmt-SnrMgr"]');

})