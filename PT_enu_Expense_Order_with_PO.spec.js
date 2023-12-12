const { test, Page, chromium } = require("@playwright/test");
//const { Console } = require("console");
const {FusoLogin} =  require("./FusoLogin");
var fs = require("fs");

test.describe.serial("Siebel Page Test", () => {
    let page;
    let pageF23;
   
test.only("Parts Expense Order with PO" , async() => {const browser = await chromium.launch({

  headless: true

});
    page = await browser.newPage({ ignoreHTTPSErrors: true });
    pageF23 = await browser.newPage({ ignoreHTTPSErrors: true });
await page.waitForLoadState()
    await page.goto(
        "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
      );
      await pageF23.goto(
        "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
      );
    const Loginuser = new FusoLogin(page);
    await Loginuser.loginFDP("D8FFDP23", "Snakamura@1");

    await page.waitForTimeout(3000);
    await page.goto(
        "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Expense)  "
      );
    const LoginuserF23 = new FusoLogin(pageF23);
    await LoginuserF23.loginFDP("D8FDPF23", "Snakamura@1");
    await pageF23.waitForTimeout(2000);
    await pageF23.waitForLoadState("domcontentloaded");

    const validation = pageF23.locator('[id="Close_dialog_btn_close"]');

    //New Expense Order Created
    await page.locator('[id="s_1_1_22_0_Ctrl"]').click(); //Plus Button
    if (await validation.isVisible() == true){
      console.log('error in plus button in Part Expence order');
    }
    await page.waitForLoadState("domcontentloaded");
    console.log("Expense Order created successfully");
    await page.waitForTimeout(2000)
    //Adding expense order
    await page.locator('[id="1_s_1_l_MF_Internal_Expense_Type"]').click();

    //expense type
    await page
      .locator('[id="1_MF_Internal_Expense_Type"]')
      .fill("Company Car");
    await page
      .locator('[id="1_MF_Internal_Expense_Type"]')
      .press("Control+s");

    //Open expense order
    await page.locator('[class="drilldown"]').first().click();

    //Adding line item

    await page.locator('[aria-label="Line Items List Applet:New"]').click(); //plus button on Line Items
    if (await validation.isVisible() == true){
      console.log('error in plus button in Part Expense order');
    }
    console.log("Line Items added successfully");

    //Add Part
    await page
      .getByRole("textbox", { name: "Parts # Selection Field" })
      .click();
    await page
      .getByRole("textbox", { name: "Parts # Selection Field" })
      .fill("#10PARTS764");
    await page
      .getByRole("textbox", { name: "Parts # Selection Field" })
      .press("Enter"); //Parts added

    //increase po qty
    await page.waitForLoadState("domcontentloaded")
    await page.locator('[id="1_s_4_l_MF_Own_Branch_Requested_Qty"]').click();
    await page.locator('[id="1_MF_Own_Branch_Requested_Qty"]').press('Backspace');
    await page.locator('[id="1_MF_Own_Branch_Requested_Qty"]').fill('0');
    await page.locator('[id="1_MF_Own_Branch_Requested_Qty"]').press('Control+s');

    await page.waitForLoadState("networkidle");
    await page.locator('[id="1_s_4_l_MF_MFTBC_Ordered_Qty"]').click();
    await page.locator('[id="1_MF_MFTBC_Ordered_Qty"]').press('Backspace');
    await page.locator('[id="1_MF_MFTBC_Ordered_Qty"]').fill('1');
    await page.locator('[id="1_MF_MFTBC_Ordered_Qty"]').press('Control+s');


    //select order department
    await page.locator('[id="s_3_1_47_0_icon"]').click();
    await page
      .locator('[placeholder="Order Department"]')
      .fill("New Vehicle"); //Order Department
      await page.locator('[id="s_3_1_47_0_icon"]').press('Control+s');
    //Copy Expense Order
    var Exp_Order = await page.locator('[id="s_3_1_149_0_Label"]').textContent();
    var Expense_order = Exp_Order.substr(16);
    console.log("expense order with po" , Expense_order);
    fs.writeFileSync("Expense.json",'{"Exp_Num"' + ' : "' + Expense_order + '"}',
      function (err) {
        if (err) throw err;
        console.log("Exp_Order");
      }
    );

    await page.waitForLoadState("domcontentloaded");

    //generate approval
    await page
      .locator('[aria-label="Orders Form Applet:Generate Approvals"]').click(); //generate Approval button
      if (await validation.isVisible() == true){
        console.log('error in Generate Approval button in Part Expense Order');
      }
      console.log("Generate Approvals button clicked successfully");
      await page.waitForTimeout(2000);
    
    //copy row id
    await page.locator('[placeholder="Order #"]').press("Control+Alt+k");
    await page.locator('[aria-label="Row #"]').click();
    var rowid = await page.locator('[aria-label="Row #"]').textContent();
    await page.locator('[aria-label="Row #"]').press("Control+c");

    
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Approval+Flow+History+View+(Expense)');
    const validApprovers = ["Branch-Parts-Mgr"];
    const ExpApproveruser = [pageF23]
    const verfyappvr = require('./approverfunction');
    //initiating the constructor
    const SalesGPStaff = new verfyappvr.appnew(page);
    for (let n = 0; n < validApprovers.length; n++) {
      const isApproverValid = await SalesGPStaff.isValidApprover(validApprovers[n],n);
    }

    for(let n=0;n<validApprovers.length;n++){
      if(ExpApproveruser[n] == pageF23){
    const ExpApprover = new verfyappvr.appnew(ExpApproveruser[n]);
      await ExpApproveruser[n].goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
    await ExpApproveruser[n].bringToFront();
    await ExpApprover.correctApprover(rowid);

      }
    }

    //back to 56 and check status should be changed
    await page.bringToFront();
    await page.reload();
    await page.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Expense)&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Order+Entry+-+Order+Branch+List+Applet+(Expense)&SWERowId0="+rowid
    );
    console.log("Expense Order Approved successfully");

    //drilldown to order number
    await page.locator('[class="drilldown"]').click();

    // //Recalculate the line item
    // await page.locator('[id="s_4_1_8_0_Ctrl"]').click();

    //generate PO button
    await page
      .locator('[aria-label="Orders Form Applet:Generate PO"]').click(); //Generate PO button
      if (await validation.isVisible() == true){
        console.log('error in Generate PO button in Part Expense Order');
      }
      console.log("Generate PO button clicked successfully");
    await pageF23.waitForLoadState("domcontentloaded");
    await page.waitForLoadState("domcontentloaded");

    //Go on Purchase Order tab
    await page.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Purchase+Order+View(Expense)"
    );
    await pageF23.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(2000);
    console.log("Purchase Order Created successfully");
    //PO generated
    await page.locator('[class="drilldown"]').first().click(); //Purchasae Order#
    await page.waitForLoadState("domcontentloaded");

    //Order PO
    await page.locator('[aria-label="Purchase Order Form Applet:Ordered"]').click(); //Orderd button
    if (await validation.isVisible() == true){
      console.log('error in Orderd button in Part Purchase Order');
    }
    console.log("Ordered button clicked successfully");

        //copy purchase order
    await page.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Line+Items+Detail+View+(PO)"
    );
    // await page.locator('[aria-labelledby="OrderNumber_Label_1"]').click();
    // await page.locator('[aria-labelledby="OrderNumber_Label_1"]').dblclick();

    var PNM = await page.locator('[id="s_1_1_183_0_Label"]').textContent();
    var PO_NUM = PNM.substr(18);
    console.log("expense po", PO_NUM);
    fs.writeFileSync("PONUMBER.json",'{"ORD_N"' + ' : "' + PO_NUM + '"}',
      function (err) {
        if (err) throw err;
      }
    );

    //receive generated PO
    await page.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Shipment+List+View+-+My+Branch+Pending"
    );
    await page.waitForLoadState("domcontentloaded");
    await page.reload();

    //Search for PO
    await page.reload();
    await page.locator('[aria-label="Shipments List Applet:Query"]').click();

    await page.reload();
    await page.locator('[aria-label="Shipments List Applet:Query"]').click();

    //Paste PO Number
    await page.locator('[id="1_s_3_l_MF_Order_Number"]').click();

    const PONumber = JSON.parse(JSON.stringify(require("../PONUMBER.json")));

    await page.locator('[id="1_MF_Order_Number"]').fill(PONumber.ORD_N);
    await page.locator('[id="s_3_1_6_0_Ctrl"]').click();
    await page.waitForLoadState("domcontentloaded");
    //Click on receive button
    await page.locator('[id="s_3_1_1_0_Ctrl"]').click(); //Receive button
    if (await validation.isVisible() == true){
      console.log('error in Receive button in Receve');
    }
    console.log("Shipment Received successfully");

    //Back to expense order after receiving
    await page.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Expense)"
    );

    //Search for Expense Order
    await page.locator('[id="s_1_1_21_0_Ctrl"]').click();

    const ExpNum = JSON.parse(JSON.stringify(require("../Expense.json")));

    //Paste Order number
    await page.locator('[id="1_Order_Number"]').fill(ExpNum.Exp_Num);
    await page.locator('[id="s_1_1_3_0_Ctrl"]').click();
    await page.waitForLoadState("domcontentloaded");
    await page.locator('[id="1_s_1_l_Status"]').click();
    await page.locator('[class="drilldown"]').click();
    console.log("Shipped button clicked successfully");

    //Shipment shipped
    //force2u2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Line+Detail+View+(Expense)&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Order+Entry+-+Order+Form+Applet+Dashboard+(Expense)&SWERowId0=1-XA78CB&SWEApplet1=MF+Order+Entry+-+Shipment+List+Applet+(Sales)&SWERowId1=1-XQD07F
     await page.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Line+Detail+View+(Expense)"
    );
    await page.reload();
    await page.locator('[id="s_2_1_3_0_Ctrl"]').click(); //Shiped
   

    //Status as Completed
    await page.locator('[placeholder="Status"]').click();
    await page.locator('[placeholder="Status"]').press("Alt+Enter");
    console.log("Expence Order Completed successfully");

   //////RETURN ORDER///////
    //Return quantity
    await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Line+Detail+View+(Expense)&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Order+Entry+-+Order+Form+Applet+Dashboard+(Expense)');
    await page.locator('[id="1_s_1_l_MF_Return_Qty"]').click();
    await page.locator('[id="1_MF_Return_Qty"]').click();
    await page.locator('[id="1_MF_Return_Qty"]').fill("1"); //Return Quantity
    //Return reason
    await page.locator('[aria-labelledby="s_1_l_altCombo"]').click();
    await page.locator('[id="1_MF_Customer_Return_Reason"]').click(); //Customer Return Reason
    await page.locator('[id="1_MF_Customer_Return_Reason"]').fill('Incorrect product');
    await page.waitForLoadState("domcontentloaded");

   await page.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Line+Items+Detail+View+(Expense)")

    //return qty
    await page.locator('[id="1_s_4_l_MF_Return_Qty"]').click();
    await page.locator('[id="1_MF_Return_Qty"]').click();
    await page.locator('[id="1_MF_Return_Qty"]').fill("1");
    //return reason
    await page.locator('[id="1_s_4_l_MF_Customer_Return_Reason"]').click();
    await page.locator('[id="1_MF_Customer_Return_Reason"]').click();
    await page.locator('[id="1_MF_Customer_Return_Reason"]').fill("Incorrect product");

    await page.locator('[id="1_MF_Customer_Return_Reason"]').press('Control+s');
    //click return order
    await page.locator('[aria-label="Orders Form Applet:Create Return Order"]').click(); //Return Order button
    if (await validation.isVisible() == true){
      console.log('error in Return Order button in Part Expense Order');
    }
    console.log("Create Return Order button clicked successfully");
    await page.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Return+Order+(Expense)");
    await page.locator('[class="drilldown"]').click();
    console.log("Return Order Created successfully");

    //Copy expense number
    var reexpense = await page.locator('[id="s_1_1_48_0"]').textContent();
    var reexnum = reexpense.substr(15);
    console.log('return expense with po',reexnum);
    //Receiving
    await page.locator('[id="s_1_1_19_0_Ctrl"]').click(); //Receiving button
    if (await validation.isVisible() == true){
      console.log('error in Receive button in Receve');
    }
    await page.locator('[name="s_1_1_1_0"]').click();
    console.log("Return Order Completed successfully");

});


});