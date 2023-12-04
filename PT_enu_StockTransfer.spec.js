const { test, Page, chromium } = require("@playwright/test");
const { Console } = require("console");
const {FusoLogin} =  require("./FusoLogin");
var fs = require("fs");

test.describe.serial("Siebel Page Test", () => {
    let page023;
    let page027;

test.only("Purchase Order (PO to StockTransfer)", async() =>
  {const browser = await chromium.launch({

    headless: true
  
  });

    page023 = await browser.newPage({ ignoreHTTPSErrors: true });
    await page023.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
    );
    const Loginuser023 = new FusoLogin(page023);
    await Loginuser023.loginFDP("D8FDFO23", "Snakamura@1");
    await page023.waitForLoadState("domcontentloaded");
    await page023.waitForTimeout(2000);

    //PO link
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(PO)");
    
    //New PO added
    await page023.locator('[aria-label="Purchase Order List Applet:New"]').click();//Plus button
    console.log("New Purchase Order Created Successfully");

    //Select Po type as PO to Stock Transfer
    await page023.locator('[id="1_s_2_l_MF_Parts_PO_Reference"]').click();// PO Type column
    await page023.locator('[id="1_MF_Parts_PO_Reference"]').fill('Stock Transfer');
    await page023.locator('[id="1_MF_Parts_PO_Reference"]').press('Control+s');
    
    //Open PO
    await page023.locator('[class="drilldown"]').first().click();

    //Copy PO number
    // await page023.locator('[aria-labelledby="OrderNumber_Label_1"]').dblclick();
    var wPonumber =await page023.locator('[id="s_1_1_183_0_Label"]').textContent();
    var wnum = wPonumber.substr(18);
    console.log('po to stock transfer',wnum);

    //Add Supplier Name
    await page023.locator('[placeholder="Supplier #"]').click(); //Supplier# column
    await page023.locator('[placeholder="Supplier #"]').fill('0000002976');

    //Fill other WH
    await page023.locator('[aria-labelledby="MF_Main_WH_Label_1"]').click(); //Other WH column
    await page023.locator('[aria-labelledby="MF_Main_WH_Label_1"]').fill("50")

    //Add line item
    await page023.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
    console.log("Line Item added");

    //Part added
    await page023.locator('[aria-labelledby="s_2_l_Product s_2_l_altpick"]').fill('##00020');
    console.log("Part added on Line Item"); //Part# column
    await page023.locator('[aria-labelledby="s_2_l_Product s_2_l_altpick"]').press('Enter');

    await page023.locator('[name="s_4_1_14_0"]').click();
    await page023.locator('[id="1_s_4_l_Name"]').click();
    await page023.locator('[id="s_4_1_246_0_Ctrl"]').click();



    //Generate Approval
    await page023.locator('[aria-label="Purchase Order Form Applet:Generate Approval"]').click(); //Generate Approval button
    console.log("Clicked on Generate Approval button ");

    //ship from different inventory 20
    page027 = await browser.newPage({ ignoreHTTPSErrors: true });
    await page027.goto(
      "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
    );
    const Loginuser027 = new FusoLogin(page027);
    await Loginuser027.loginFDP("D8FDFO27", "Snakamura@1");
    await page027.waitForLoadState("domcontentloaded");
    await page027.waitForTimeout(2000);
    await page027.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+FDP+Orders+View+(PO)")
    //search order
    await page027.locator('[id="s_2_1_21_0_Ctrl"]').click();
    await page027.locator('[aria-labelledby="s_2_l_altLink"]').click();
    await page027.locator('[id="1_Order_Number"]').fill(wnum);
    await page027.locator('[id="s_2_1_3_0_Ctrl"]').click();
    await page027.locator('[id="1_Order_Number"]').press('Tab');
    await page027.locator('[class="drilldown"]').click();
  //open order, fulfill all  
    //await page027.pause()
    await page023.waitForTimeout(3000);
    console.log("Clicked on Fullfill All button");
    await page027.locator('[id="s_2_1_15_0_Ctrl"]').click(); //Fullfill All buton
    //status update
    await page027.locator('[placeholder="Status"]').click();
    await page027.locator('[placeholder="Status"]').press('Alt+Enter');

    //shipped
    await page027.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Line+Detail+View+(PO)");
    await page027.locator('[aria-label="Shipments List Applet:Shipped"]').click(); //Shipped button
    console.log("Clicked on Shipped button");
    //await page023.pause();
    await page023.waitForTimeout(3000);

    //back to 23 user

    /// ///Click Print button
    await page023.locator('[aria-label="Purchase Order Form Applet:Print"]').click();


    //Receiving
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Stock+Transfer+Shipment+List+View+-+My+Branch+Pending");
    //Search for PO
    await page023.waitForTimeout(3000);
    await page023.reload();
    //await page023.waitForLoadState("domcontentloaded");
   // await page023.waitForTimeout(3000);

    await page023.locator('[aria-label="Shipments List Applet:Query"]').click();
    // Copy PO number
    await page023.locator('[id="1_s_1_l_MF_Order_Number"]').click();
    await page023.locator('[id="1_MF_Order_Number"]').fill(wnum);
    await page023.locator('[id="1_MF_Order_Number"]').press('Enter');
    //Click on receive
    await page023.locator('[aria-label="Shipments List Applet:Receive"]').click(); //recive button
    console.log("Shipmment received Successfully");
    await page023.waitForTimeout(3000);
    console.log("Purchase Order Completed Successfully");
    
    //Return Order
       //search order
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(PO)");
    await page023.waitForLoadState("domcontentloaded");
    await page023.locator('[aria-label="Purchase Order List Applet:Query"]').click();
    await page023.locator('[aria-labelledby="s_2_l_altLink"]').click();
    await page023.locator('[id="1_Order_Number"]').fill(wnum);
    //open order
    await page023.locator('[aria-label="Purchase Order List Applet:Go"]').click();
    await page023.locator('[id="1_Order_Number"]').press('Tab');
   // await page023.waitForTimeout(3000);
    //await page023.pause()
    await page023.locator('[class="drilldown"]').click();
    //Return reason
    await page023.waitForTimeout(3000);
    await page023.locator('[id="1_s_2_l_MF_Return_Reason"]').click(); //Return Reason column
    await page023.locator('[id="1_MF_Return_Reason"]').fill("Broken parts");
    //return qty
    await page023.locator('[aria-roledescription="Return Good Qty"]').click(); //Return Qty column
    await page023.locator('[aria-labelledby="s_2_l_MF_Return_Good_Qty"]').fill("1");
    //click return order
    await page023.locator('[aria-label="Purchase Order Form Applet:Return Order"]').click(); //Return Oreder button
    console.log("Clicked on Return Order Button");
    //go to return order
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Return+Order+View+(PO)");
    console.log("Return Order Created Successfully");
    //open return order
    await page023.locator('[class="drilldown"]').click();
    //generate approval
    await page023.locator('[aria-label="Orders Form Applet:Generate Approval"]').click(); //Generate approval button
    console.log("Clicked on Generate Approval button");
    //copy order number
    var rposu=await page023.locator('[id="s_1_1_50_0"]').textContent()
    var retposu=rposu.substr(17);
    console.log('return po to supplier',retposu);
    //shipment
    await page023.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Purchase+Shipment+Lines+View(RO)");
      //accepted qty
    await page023.locator('[id="1_s_2_l_MF_Accepted_Qty"]').click(); //Accepted Qty column
    await page023.locator('[id="1_MF_Accepted_Qty"]').fill("1");
    await page023.locator('[id="1_MF_Accepted_Qty"]').press("Control+s");
    //shipped
    await page023.locator('[id="s_3_1_1_0_Ctrl"]').click(); //Shipped button
    console.log("Clicked on Shiped button");
    //again receive from 20 inventory
    await page027.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Stock+Transfer+Shipment+List+View+-+My+Branch+Pending");
    //click on receive
    await page027.locator('[id="s_1_1_1_0_Ctrl"]').click();//Receive button
    console.log("Clicked on Recive button");
    console.log("Purchase Return Order Completed Successfully");
  });
});