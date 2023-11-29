const { test,Page, chromium } = require("@playwright/test");
//const { Console } = require("console");
const {FusoLogin} =  require("./FusoLogin");
var fs = require("fs");

test.describe.serial("Siebel Page Test", () => {
    let pageF23;
    let page023;

test("Sales Order with PO", async () => {const browser = await chromium.launch({

  headless: true

});
    page023 = await browser.newPage({ ignoreHTTPSErrors: true });
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
    );
    const Loginuser023 = new FusoLogin(page023);
    await Loginuser023.loginFDP("D8FDFO23", "Snakamura@1");
    await page023.waitForLoadState("domcontentloaded");
   await page023.waitForTimeout(2000)
    // Click text=Parts Quotes
    //const user023 = new Parts(page023);
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+All+Quote+List+View"
    );
    await page023.waitForLoadState("domcontentloaded");
  
    // Quotes\:New
    await page023.locator('[aria-label="Quotes List Applet:New"]').click();
    
    // Press s with modifiers
    await page023.locator('input[role="textbox"]').press("Control+s");
    await page023.locator('input[role="textbox"]').press("Tab");
    await page023.waitForLoadState("networkidle");
    await page023.waitForTimeout(3000);
    console.log("Quote Created Successfully");
    await page023.locator('[aria-labelledby="s_2_l_altLink"]').first().click();
  
    // Add Line Items
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    await page023.waitForLoadState("domcontentloaded");
    console.log("Line item added Successfully");
  
    //Add Part
    await page023.locator('input[role="textbox"]').fill("#10PARTS764");
    console.log("Part added Successfully");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##096512470");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##033500");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##0454");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##0460");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##0467");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##0468");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##0293414130");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##0296320070");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##0891486");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##1111180095");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##1111110003");
  
    // // Add Line Items
    // await page023.locator('[aria-label="Line Items List Applet:New"]').click();
    // await page023.waitForLoadState("domcontentloaded");
  
    // //Add Part
    // await page023.locator('input[role="textbox"]').fill("##1111180126");
  
    // Press s with modifiers
    await page023.locator('input[role="textbox"]').press("Control+s");
    //Add Customer Code
    await page023.reload()

    await page023.locator('[placeholder="Customer Code"]').click();
  
    // Fill [placeholder="Customer Code"]
    await page023.locator('[placeholder="Customer Code"]').fill("0000002810");
  
    // Press s with modifiers
    await page023.locator('[placeholder="Customer Code"]').press("Control+s");
  
    // Click [aria-label="Quote\:Generate Approvals"]
    await page023
      .locator('[aria-label="Quote Form Applet:Generate Approvals"]')
      .click();
      console.log("Clicked on Generate Approval Button");
  
    // Accept/Process
    await page023
      .locator('[aria-label="Quote Form Applet:Accepted"]')
      .click();
      console.log("Clicked on Accepted button");
    await page023.waitForLoadState("load");
    //Sales order generated
    await page023.waitForLoadState("networkidle");
    console.log("Sales Order Created Successfully");
  
    //Recalculate the line item
    await page023.locator('[id="s_2_1_8_0_Ctrl"]').click();

    //po qty 0
    await page023.locator('[id="1_s_2_l_MF_MFTBC_Ordered_Qty"]').click();
    await page023.locator('[id="1_MF_MFTBC_Ordered_Qty"]').fill("1");

    //own branch stock 0
    await page023.locator('[id="1_s_2_l_MF_Own_Branch_Requested_Qty"]').click();
    await page023.locator('[id="1_MF_Own_Branch_Requested_Qty"]').fill("0");
    await page023.locator('[id="1_MF_Own_Branch_Requested_Qty"]').press("Control+s");

    await page023.waitForTimeout(2000);
  
    //Generate PO
    await page023.locator('[data-display="Generate PO"]').click();
    console.log("Clicked on Generate PO button");

    await page023.waitForTimeout(4000);
    console.log("Purchase Order Created Successfully");
  
    //Copy sales order number
    var Wsonumber =await page023.title();
    var Wsnum = Wsonumber.substr(22);
    console.log('sales with po',Wsnum);
    fs.writeFileSync("Sales.json",'{"SORD_N"' + ' : "' + Wsnum + '"}',
    function (err) {
      if (err) throw err;
    })
    // Go to Purchase order
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Purchase+Order+View(Sales)"
    );
    await page023.locator('[class="drilldown"]').click();
    //order purchase order
    await page023
      .locator('[aria-label="Purchase Order Form Applet:Ordered"]')
      .click();
      console.log("Clicked on Orderd button");
  
    //copy POnumber
    var PO_Number = await page023.title();
    var PO_Order = PO_Number.substr(15);
    console.log("sales with po, PO :  ",PO_Order);
    fs.writeFileSync("PurchaseOrderNUMBER.json",'{"Purchase_Order"' + ' : "' + PO_Order + '"}',
      function (err) {
        if (err) throw err;
      }
    );
  
    //receive generated PO
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Shipment+List+View+-+My+Branch+Pending"
    );
    await page023.waitForLoadState("domcontentloaded");
  
    //Search for PO
    await page023.locator('[aria-label="Shipments List Applet:Query"]').click();
  
    //Paste PO Number
    await page023.locator('[id="1_s_3_l_MF_Order_Number"]').click();
    const Purchase = JSON.parse(JSON.stringify(require("../PurchaseOrderNUMBER.json")));
  
    await page023.locator('[id="1_MF_Order_Number"]').fill(Purchase.Purchase_Order);
    await page023.locator('[id="s_3_1_6_0_Ctrl"]').click();
  
    //Click on receive button
    await page023.locator('[id="s_3_1_1_0_Ctrl"]').click();
    console.log("Shipment Recived Successfully and Purchase Ordere Completed");
  
    //Back to sales order after receiving
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Sales)"
    );
    //Search for Sales Order
    await page023.locator('[id="s_1_1_21_0_Ctrl"]').click();
  
    const SalesNum = JSON.parse(JSON.stringify(require("../Sales.json")));
  
    //Paste Order number 
    await page023.locator('[id="1_Order_Number"]').fill(SalesNum.SORD_N);
    await page023.locator('[id="s_1_1_3_0_Ctrl"]').click();
    await page023.waitForLoadState("domcontentloaded");
    await page023.locator('[aria-labelledby="s_1_l_Order_Number"]').press('Tab');
    await page023.locator('[class="drilldown"]').click();
  
    //Shipment shipped
     await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Lines+View(Sales)"
    );console.log("Clicked on Shipped");
    await page023.reload();
    await page023.locator('[id="s_2_1_3_0_Ctrl"]').click();
    console.log("Sales Order Completed Successfully");
  
    //Status as Completed
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
    await page023.locator('[id="1_MF_Order_Number"]').fill(Wsnum);
  
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
    console.log("Clicked on Change Order Button");
  
    // Copy Change order number
    var wconumber =await page023.locator('[id="s_2_1_188_0"]').textContent();
    var wcnum = wconumber.substr(14);
    console.log("Change Order Created Successfully");
    console.log('change order of sales with po',wcnum);
  
    //Generate approval
    await page023.locator('[aria-label="Order Form Applet:Generate Approvals"]').click();
    console.log("Clicked on Generate Approval button");
  
    //go to  approval
    pageF23 = await browser.newPage({ ignoreHTTPSErrors: true });
    await pageF23.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View"
    );
    const Loginuser021 = new FusoLogin(pageF23);
    await Loginuser021.loginFDP("D8FFOR21", "Snakamura@1");
    await pageF23.waitForLoadState("domcontentloaded");
   await pageF23.waitForTimeout(2000)
  
  
    //take approval
    await pageF23.locator('[id="1_s_2_l_Action"]').click();
    await pageF23.locator('[id="1_Action"]').click();
    await pageF23.locator('[id="1_Action"]').fill("Approved");
    await pageF23.locator('[id="1_Action"]').press('Control+s');
    console.log("Change Order Approved Successfully");
  
  
  
    //////RETURN ORDER/////
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Sales)");
      
    //Search for order number
    await page023.locator('[aria-label="Sales Orders List Applet:Query"]').click();
    await page023.locator('[aria-labelledby="s_1_l_Order_Number"]').fill(Wsnum);
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
    //click return order button
    await page023.locator('[aria-label="Shipments List Applet:Return Order"]').click();
    console.log("Clicked on Return Ordeer button");
    //go to sales return order
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Return+Order+View(Sales)");
    console.log("Return Order Created Successfully");
    //click on return order
    await page023.locator('[class="drilldown"]').click();
    //click on generate approval
    await page023.locator('[aria-label="Orders Form Applet:Generate Approval"]').click();
    console.log("Clicked on Generate Approval button");
    //copy sales return order
    var wretnum = await page023.locator('[name="s_2_1_52_0"]').textContent();
    var wrnum = wretnum.substr(16);
    console.log("Sales return order with PO : ",wrnum)
    //receiving
    await page023.locator('[aria-label="Orders Form Applet:Receiving"]').click();
    //receive button
    await page023.locator('[aria-label="Shipments List Applet:Receive"]').click();
    console.log("Return Order Completed Successfully");
  })
});