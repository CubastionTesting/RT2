const { test, Page } = require("@playwright/test");
const { Console } = require("console");
const {FusoLogin} =  require("./FusoLogin");
var fs = require("fs");

test.describe.serial("Siebel Page Test", () => {
    let page023;
    let pagePF23;
  
    test("Purchase Order (PO to Supplier)", async({browser}) =>
  {

    page023 = await browser.newPage({ ignoreHTTPSErrors: true });
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
    );
    const Loginuser023 = new FusoLogin(page023);
    await Loginuser023.loginFDP("D8FFOR24", "Snakamura@1");
    await page023.waitForLoadState("domcontentloaded");
await page023.waitForTimeout(2000)
    //PO link
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(PO)");
    await page023.pause()
    //New PO added
    await page023.locator('[aria-label="Purchase Order List Applet:New"]').click();

    //Select Po type as PO to Supplier
    await page023.locator('[id="1_s_2_l_MF_Parts_PO_Reference"]').click();
    await page023.locator('[id="1_MF_Parts_PO_Reference"]').fill('PO to Supplier');
    await page023.locator('[id="1_MF_Parts_PO_Reference"]').press('Enter');
    
    //Open PO
    await page023.locator('[class="drilldown"]').first().click();
    //Copy PO number
    // await page023.locator('[aria-labelledby="OrderNumber_Label_1"]').dblclick();
    var Ponumber =await page023.locator('[id="s_1_1_183_0"]').textContent();
    var num = Ponumber.substr(19);
    console.log('po to supplier',num);

    //Add Supplier Name
    await page023.locator('[aria-labelledby="MF_Supplier_Code_Label_1"]').click();
    await page023.locator('[aria-labelledby="MF_Supplier_Code_Label_1"]').fill('0000140457');

    //Add line item
    await page023.locator('[aria-label="Line Items List Applet:New"]').click();

    //Part added
    await page023.locator('[aria-labelledby="s_2_l_Product s_2_l_altpick"]').fill('##0135500330');
    await page023.locator('[aria-labelledby="s_2_l_Product s_2_l_altpick"]').press('Control+s');

    //Generate Approval
    await page023.locator('[aria-label="Purchase Order Form Applet:Generate Approval"]').click();
    await page023.pause()

    //Order PO
    await page023.locator('[aria-label="Purchase Order Form Applet:Ordered"]').click();

    /// ///Click Print button
    await page023.locator('[aria-label="Purchase Order Form Applet:Print"]').click();
    console.log("Print button clicked of Purchase order")

    //Receiving
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Shipment+List+View+-+My+Branch+Pending");
    
    //Search for PO
    await page023.locator('[aria-label="Shipments List Applet:Query"]').click();

    // Copy PO number
    await page023.locator('[id="1_s_3_l_MF_Order_Number"]').click();
    await page023.locator('[id="1_MF_Order_Number"]').fill(num);
    await page023.locator('[id="1_MF_Order_Number"]').press('Enter');
    

    //Click on receive
    await page023.locator('[aria-label="Shipments List Applet:Receive"]').click();
 
    
    ////Return Order
      //search order
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(PO)");
    await page023.locator('[aria-label="Purchase Order List Applet:Query"]').click();
    await page023.locator('[aria-labelledby="s_2_l_altLink"]').click();
    await page023.locator('[id="1_Order_Number"]').fill(num);
    //open order
    await page023.locator('[aria-label="Purchase Order List Applet:Go"]').click();
    await page023.locator('[id="1_Order_Number"]').press('Tab');
    await page023.locator('[class="drilldown"]').click();
    //Return reason
    await page023.locator('[id="1_s_2_l_MF_Return_Reason"]').click();
    await page023.locator('[id="1_MF_Return_Reason"]').fill("Broken parts");
    //return qty
    await page023.locator('[aria-roledescription="Return Good Qty"]').click();
    await page023.locator('[aria-labelledby="s_2_l_MF_Return_Good_Qty"]').fill("1");
    //click return order
    await page023.locator('[aria-label="Purchase Order Form Applet:Return Order"]').click();
    //go to return order
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Return+Order+View+(PO)");
    //open return order
    await page023.locator('[class="drilldown"]').click();
    //generate approval
    await page023.locator('[aria-label="Orders Form Applet:Generate Approval"]').click();
    //go to approval
    pagePF23 = await browser.newPage({ ignoreHTTPSErrors: true });
    await pagePF23.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View"
    );
    const LoginuserF23 = new FusoLogin(pagePF23);
    await LoginuserF23.loginFDP("D8FDPF23", "Snakamura@1");
    await pagePF23.waitForLoadState("domcontentloaded");
    //take approval
    await pagePF23.locator('[id="1_s_2_l_Action"]').click();
    await pagePF23.locator('[id="1_Action"]').click();
    await pagePF23.locator('[id="1_Action"]').fill("Approved");
    await pagePF23.locator('[id="1_Action"]').press('Control+s');
    //order PO
    await page023.locator('[placeholder="Status"]').press('Alt+Enter');
    await page023.locator('[aria-label="Orders Form Applet:Ordered"]').click();

    ///Print Button
    await page023.locator('[aria-label="Orders Form Applet:Print"]').click();
    console.log("Print button clicked of po return order")

    //copy order number
    var rposu=await page023.locator('[id="s_1_1_50_0"]').textContent()
    var retposu=rposu.substr(17);
    console.log('return po to supplier',retposu);
    //shipment
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Purchase+Shipment+Lines+View(RO)")
      //accepted qty
    await page023.locator('[id="1_s_2_l_MF_Accepted_Qty"]').click();
    await page023.locator('[id="1_MF_Accepted_Qty"]').fill("1");
    await page023.locator('[id="1_MF_Accepted_Qty"]').press("Control+s");
    //shipment
    await page023.locator('[id="s_3_1_1_0_Ctrl"]').click();
  });
});