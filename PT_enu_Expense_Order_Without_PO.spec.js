const { test, Page, chromium } = require("@playwright/test");
const { Console } = require("console");
const {FusoLogin} =  require("./FusoLogin");
var fs = require("fs");

test.describe.serial("Siebel Page Test", () => {
    let page;
    let pageF23;
   
    test("parts expense order without PO", async () => { const browser = await chromium.launch({

      headless: true
    
    });
        page = await browser.newPage({ ignoreHTTPSErrors: true });
        pageF23 = await browser.newPage({ ignoreHTTPSErrors: true });
        await page.goto(
          "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
        );
        await pageF23.goto(
          "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?"
        );
        const Loginuser023 = new FusoLogin(page); 
        await Loginuser023.loginFDP("D8FFOR24", "Snakamura@1");
        await page.waitForLoadState("domcontentloaded");
        
        const LoginuserF23 = new FusoLogin(pageF23);
        await LoginuserF23.loginFDP("D8FDPF23", "Snakamura@1");
        await pageF23.waitForLoadState("domcontentloaded");
      
        await page.waitForTimeout(2000);
        //Expense Order link:
        await page.goto(
          "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Expense)"
        );
      
        const validation = pageF23.locator('[id="Close_dialog_btn_close"]');


        //New Expense Order Created
        await page.locator('[aria-label="Orders List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expence order');
        }
        await page.waitForLoadState("domcontentloaded");
      
        //Adding expense order
        await page.locator('[id="1_s_1_l_MF_Internal_Expense_Type"]').click(); //Internal Expense Type
      
        //expense type
        await page
          .locator('[id="1_MF_Internal_Expense_Type"]')
          .fill("Company Car");
        await page
          .locator('[id="1_MF_Internal_Expense_Type"]')
          .press("Control+s");
      
        //Open expense order
        await page.locator('[class="drilldown"]').first().click(); //Order#
        console.log("Expence Order Created successfully");
      
        //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
        console.log("Line item added successfully");
        await page.waitForLoadState("domcontentloaded")
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT001"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");

          /// ///Making reservation 
          await page.locator('[id="1_s_4_l_MF_Parts_Status"]').click();
          await page.locator('[id="1_MF_Parts_Status"]').fill("Inquiry");
          await page.locator('[id="1_s_4_l_MF_Parts_Status"]').press("Enter");

          await page.locator('[id="1_s_4_l_MF_Parts_Status"]').click();
          await page.locator('[id="1_MF_Parts_Status"]').fill("Inquiry Answered");
          await page.locator('[id="1_s_4_l_MF_Parts_Status"]').press("Enter");

          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT002"); //Part#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT003"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT004"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT005");
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT006"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT007"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT008"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT009"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT010"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT011"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT012"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT013"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT014"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
          //Adding line item
        await page.locator('[aria-label="Line Items List Applet:New"]').click(); //Plus button
        if (await validation.isVisible() == true){
          console.log('error in plus button in Part Expense order');
        }
      
        //Add Part
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .click();
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .fill("#10JCT015"); //Parts#
        await page
          .getByRole("textbox", { name: "Parts # Selection Field" })
          .press("Enter");
      
        //select order department
        await page.locator('[id="s_3_1_47_0_icon"]').click(); //Order department
        await page
          .locator('[placeholder="Order Department"]')
          .fill("New Vehicle");
      
        //generate approval
        await page
          .locator('[aria-label="Orders Form Applet:Generate Approvals"]').click(); //Generate Approvals
          if (await validation.isVisible() == true){
            console.log('error in Generate Approval button in Part Expence order');
          }
          console.log("Generate Approval button clicked successfully");
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);
        //copy row id
        await page.locator('[placeholder="Order #"]').press("Control+Alt+k");
        var wporowid = await page.locator('[aria-label="Row #"]').textContent();
        // console.log(wporowid);
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
    await ExpApprover.correctApprover(wporowid);

      }
    }

    
      
        // //approval user link
        // await pageF23.goto(
        //   "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+Approval+Inbox+Item+Entity+Details+View"
        // );
        // await pageF23.waitForLoadState("domcontentloaded");
      
        // //search for order number
        // await pageF23.locator('[id="s_2_1_10_0_Ctrl"]').click();
      
        // //paste order number
        // await pageF23.locator('[id="1_s_2_l_Name"]').click();
        // await pageF23.locator('[id="1_Name"]').fill(wporowid);
        // await pageF23.locator('[id="1_Name"]').press("Enter");
      
        // //approve the approval
        // await pageF23.locator('[id="1_s_2_l_Action"]').click();
        // await pageF23.locator('[id="1_Action"]').fill("Approved");
        // await pageF23.locator('[id="1_Action"]').press("Control+s");
      
        // await page.bringToFront();
        await page.goto(
          "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+All+Orders+View+(Expense)&SWERF=1&SWEHo=&SWEBU=1&SWEApplet0=MF+Order+Entry+-+Order+Branch+List+Applet+(Expense)&SWERowId0="+wporowid
        );
        console.log("Expence Order Approved successfully");
     
        //drilldown to order number
        await page.locator('[class="drilldown"]').click();
      /// ///Making reservation 
          await page.locator('[id="1_s_4_l_MF_Parts_Status"]').first().click();
          await page.locator('[id="1_MF_Parts_Status"]').fill("Reservation Request");
          await page.locator('[id="1_s_4_l_MF_Parts_Status"]').press("Enter");

          //Recalculate the line item
          await page.locator('[id="s_4_1_8_0_Ctrl"]').click(); //Recalculate button

        //console.log(stack);

        //click reserve button
          await page.locator('[aria-label="Line Items List Applet:Reserve"]').first().click(); //Reserve button
          if (await validation.isVisible() == true){
            console.log('error in Reserve button in Part Expense order');
          }

          //Reserve Slip Print
          await page.locator('[aria-label="Orders Form Applet:Reserve Slip Print"]').click(); //Reserve Slip print button
          if (await validation.isVisible() == true){
            console.log('error in reserve slip print button in Part Expense order');
          }
          console.log("Reservation made of expense order")

          //shipment request
          await page.locator('[id="1_s_4_l_MF_Parts_Status"]').first().click();
          await page.locator('[id="1_MF_Parts_Status"]').fill("Shipment Request");
          await page.locator('[id="1_s_4_l_MF_Parts_Status"]').press("Enter");

          //Recalculate the line item
        await page.locator('[id="s_4_1_8_0_Ctrl"]').click(); //Recalculate button
        if (await validation.isVisible() == true){
          console.log('error in recalculate button in Part Expense order');
        }

        //FullFill All
        await page.locator('[id="s_4_1_15_0_Ctrl"]').click(); //Fullfill All button
        if (await validation.isVisible() == true){
          console.log('error in Fullfill All button in Part Expence order');
        }
        console.log("Full fill All button Clicked successfully");
        //Shipment shipped
        await page.goto(
          "https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Shipment+Line+Detail+View+(Expense)"
        );
        await page.locator('[id="s_2_1_3_0_Ctrl"]').click(); //Shipped button
        if (await validation.isVisible() == true){
          console.log('error in Shipped button in Part Expence order');
        }
        console.log("Shipped button clicked successfully");
      
        //Copy expense number
        var expense = await page.locator('[id="s_3_1_149_0"]').textContent();
        var exnum = expense.substr(15);
        console.log('expense without po',exnum);
      
      
        //Status as Completed
        await page.waitForLoadState("domcontentloaded");
        await page.locator('[placeholder="Status"]').click();
        await page.locator('[placeholder="Status"]').press("Alt+Enter");
        console.log("Expence Order Completed successfully");
      
        ////RETURN ORDER///////
        // Return quantity
        await page.locator('[id="1_s_1_l_MF_Return_Qty"]').click();
        await page.locator('[id="1_MF_Return_Qty"]').click();
        await page.locator('[id="1_MF_Return_Qty"]').fill("1");
        //Return reason
        await page.locator('[id="1_s_1_l_MF_Customer_Return_Reason"]').click();
        await page.locator('[id="1_MF_Customer_Return_Reason"]').click();
        await page.locator('[id="1_MF_Customer_Return_Reason"]').fill('Incorrect product');
        await page.waitForLoadState("domcontentloaded");
      
       await page.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Line+Items+Detail+View+(Expense)")
      
       await page.locator('[placeholder="Status"]').click();
        await page.locator('[placeholder="Status"]').press("Alt+Enter");
      
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
        await page.locator('[aria-label="Orders Form Applet:Create Return Order"]').click(); //Create Return Order button
        if (await validation.isVisible() == true){
          console.log('error in Create Return Order button in Part Expence order');
        }
        console.log("Create Return Order button clicked successfully");
        await page.goto("https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=MF+PA+Order+Entry+-+Return+Order+(Expense)");
        await page.locator('[class="drilldown"]').click(); //Return order#
        console.log("Return Order Created successfully");
          //Copy expense number
          var rexpense = await page.locator('[name="s_1_1_48_0"]').textContent();
          var rexnum = rexpense.substr(15);
          console.log('return expense without po',rexnum);

          /// ///Print button
          await page.locator('[aria-label="Orders Form Applet:Print"]').click(); //Print button
          if (await validation.isVisible() == true){
            console.log('error in print button in Part Expence order');
          }
          console.log('Expense return print button clicked')


          //Receiving
          await page.locator('[aria-label="Orders Form Applet:Receiving"]').click(); //Receiving button
          if (await validation.isVisible() == true){
            console.log('error in Receiving button in Parts Expense Return Order');
          }
          console.log("Reciving button clicked  successfully");
          //receive button
          await page.locator('[aria-label="Shipments List Applet:Receive"]').click(); //Receive button
          if (await validation.isVisible() == true){
            console.log('error in Receive button in Receive');
          }
          console.log("Clicked on Reciving button and Return Order Completed successfully");
      
      });
});