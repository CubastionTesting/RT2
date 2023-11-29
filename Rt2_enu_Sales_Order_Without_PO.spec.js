const { test } = require("@playwright/test");
const { Console } = require("console");
const {FusoLogin} =  require("./FusoLogin");
var fs = require("fs");

test.describe.serial("Siebel Page Test", () => {
    let pageF23;
    let page023;
    
test("Sales Order without PO", async ({ browser }) => {
    page023 = await browser.newPage({ ignoreHTTPSErrors: true });
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
    );
    const Loginuser023 = new FusoLogin(page023);
    await Loginuser023.loginFDP("D8FORF24", "Snakamura@1");
    await page023.waitForLoadState("domcontentloaded");
    await page023.waitForTimeout(2000);
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+All+Quote+List+View");
    await page023.waitForLoadState("domcontentloaded");
    // "Quotes\:New"
    await page023.locator('[aria-label="Quotes List Applet:New"]').click();
  
    // Press s with modifiers
    await page023.locator('input[role="textbox"]').press("Control+s");
    await page023.locator('input[role="textbox"]').press("Tab");
    await page023.waitForLoadState("networkidle");
    await page023.waitForTimeout(3000);
    await page023.locator('[aria-labelledby="s_2_l_altLink"]').first().click();
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("##0464");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT001");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT002");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT003");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT004");
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT005");
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT006");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT007");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT008");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT009");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT010");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT011");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT012");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT013");
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10JCT014");
  
    // Press s with modifiers
    await page023.locator('input[role="textbox"]').press("Control+s");
  
    //Add Customer Code
    await page023.locator('[placeholder="Customer Code"]').click();
  
    // Fill [placeholder="Customer Code"]
    await page023.locator('[placeholder="Customer Code"]').fill("0000007463");
  
    // Press s with modifiers
    await page023.locator('[placeholder="Customer Code"]').press("Control+s");
  
    await page023.waitForLoadState("load")
    // Click [aria-label="Quote\:Generate Approvals"]
    await page023
      .locator('[aria-label="Quote Form Applet:Generate Approvals"]')
      .click();
      await page023.waitForLoadState("load")
  
      /// /// ///Print Button
      await page023.locator('[aria-label="Quote Form Applet:Print Quote"]').click();
      var quote = await page023.locator('[name="s_3_1_224_0"]').textContent();
    var qnum = quote.substr(10);
    await page023.waitForLoadState("domcontentloaded");
    console.log('print button of quote ',qnum);
  
    // Click [aria-label="Quote\:Accepted"]
    await page023.locator('[aria-label="Quote Form Applet:Accepted"]').click();
    await page023.waitForLoadState("load");
    await page023.waitForLoadState("domcontentloaded");
    await page023.waitForTimeout(3000);
  
    /// /// ///Order Sheet Print Button
    await page023.locator('[aria-label="Sales Order Form Applet:Order Sheet Print"]').click();
  
    console.log("Order Sheet Print Button Of Sales Order Clicked")
    
  /// /// ///Reserve Button
  await page023.locator('[aria-label="Line Items List Applet:Reserve"]').click();
  
  /// /// ///Reserve Print Button
  await page023.locator('[aria-label="Sales Order Form Applet:Reserve Slip Print"]').click();
  
  console.log("Reserve Print Button Of Sales Order Clicked")
  
    //Copy Sales Order
    await page023.waitForLoadState("domcontentloaded");
    var Sonumber = await page023.title();
    var snum = Sonumber.substr(21);
    await page023.waitForLoadState("domcontentloaded");
    console.log('sales without po',snum);
  
    //Recalculate the line item
    await page023
      .locator('[aria-label="Line Items List Applet:Recalculate"]')
      .click();
  
    //Fulfill All
    await page023
      .locator('[aria-label="Line Items List Applet:Fulfill All"]')
      .click();
  
    // Shipment
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Lines+View(Sales)"
    );
  
    // Shipments\:Shipped
    await page023
      .locator('[aria-label="Shipments List Applet:Shipped"]')
      .click();
    await page023.waitForLoadState("networkidle");
  
    // Updated "Status"
    await page023.locator('[placeholder="Status"]').click();
    await page023.locator('[placeholder="Status"]').press("Alt+Enter");
  
    //CHANGE ORDER/////
  
    //Select my branch
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Branch+Shipment+View");
  
    //Search order
    await page023.locator('[aria-label="Shipments List Applet:Query"]').click();
  
    //click order
    await page023.locator('[id="1_s_2_l_MF_Order_Number"]').click();
    await page023.locator('[id="1_s_2_l_MF_Order_Number"]').click();
    
    //paste order
    await page023.locator('[id="1_MF_Order_Number"]').fill(snum);
  
    //click on go
    await page023.locator('[aria-label="Shipments List Applet:Go"]').click();
  
    //Change reason
    await page023.locator('[id="1_s_2_l_MF_Change_Reason"]').click();
    await page023.locator('[id="1_MF_Change_Reason"]').fill("Price Change");
  
    //Select flag
    await page023.locator('[id="1_s_1_l_MF_Selected_Flag"]').click();
    await page023.locator('[id="1_MF_Selected_Flag"]').click();
    await page023.locator('[id="1_MF_Selected_Flag"]').press('Control+s');
  
    //Change order button enabled
    await page023.locator('[aria-label="Shipments List Applet:Parts Change Order"]').click();
  
    // Copy Change order number
    var conumber =await page023.locator('[id="s_2_1_188_0"]').textContent();
    var cnum = conumber.substr(13);
    console.log('change of sales without po',cnum);
  
    //Generate approval
    await page023.locator('[aria-label="Order Form Applet:Generate Approvals"]').click();
    await page023.reload()
  
    //go to  approval
    pageF23 = await browser.newPage({ ignoreHTTPSErrors: true });
    await pageF23.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View"
    );
    const Loginuser021 = new FusoLogin(pageF23);
    await Loginuser021.loginFDP("D8FFOR21", "Snakamura@1");
    await pageF23.waitForLoadState("domcontentloaded");
    //take approval
    await pageF23.locator('[id="1_s_2_l_Action"]').click();
    await pageF23.locator('[id="1_Action"]').click();
    await pageF23.locator('[id="1_Action"]').fill("Approved");
    await pageF23.locator('[id="1_s_2_l_Action"]').press('Control+s');

    //update status
    await page023.waitForTimeout(2000);
    await page023.locator('[placeholder="Status"]').press('Alt+Enter');

    /// /// ///Print button 
    await page023.locator('[aria-label="Order Form Applet:Print"]').click();
    
    console.log("Print Button Of Sales Change Order Clicked")
  
  
  
  
  
    //////RETURN ORDER/////
      await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Sales)");
      
      //Search for order number
      await page023.locator('[aria-label="Sales Orders List Applet:Query"]').click();
      await page023.locator('[aria-labelledby="s_1_l_Order_Number"]').fill(snum);
      await page023.locator('[aria-label="Sales Orders List Applet:Go"]').click();
        //order found
      await page023.locator('[aria-labelledby="s_1_l_Order_Number"]').press("Tab");
      await page023.waitForTimeout(2000);
      //open order number
      await page023.locator('[class="drilldown"]').click();
      
      //shipment line
      await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Lines+View(Sales)");
      //return order qty
      await page023.locator('[id="1_s_1_l_MF_Return_Qty"]').click();
      await page023.locator('[id="1_MF_Return_Qty"]').click();
      await page023.locator('[id="1_MF_Return_Qty"]').fill('1');
      //return reason
      await page023.locator('[id="1_s_1_l_MF_Customer_Return_Reason"]').click();
      await page023.locator('[id="1_MF_Customer_Return_Reason"]').click();
      await page023.locator('[id="1_MF_Customer_Return_Reason"]').fill("Shipment mistake");
      await page023.locator('[id="1_MF_Customer_Return_Reason"]').click('Control+s');
      //click return order button
      await page023.locator('[aria-label="Shipments List Applet:Return Order"]').click();
      //go to sales return order
      await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Return+Order+View(Sales)");
  
      //click on return order
      await page023.locator('[class="drilldown"]').click();
      //click on generate approval
      await page023.locator('[aria-label="Orders Form Applet:Generate Approval"]').click();
  
      /// /// ///Print Button
      await page023.locator('[aria-label="Orders Form Applet:Print"]').click();
      console.log("Print Button Of Sales Return Order Clicked");
      //copy sales return order
      var retnum = await page023.locator('[name="s_2_1_52_0"]').textContent();
      var rnum = retnum.substr(16);
      console.log("Sales return order without PO",rnum)
      //receiving
      await page023.locator('[aria-label="Orders Form Applet:Receiving"]').click();
      //receive button
      await page023.locator('[aria-label="Shipments List Applet:Receive"]').click();
      
  })
});  