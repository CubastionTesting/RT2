class appnew{
    constructor(page) { 
  
          this.position = page.locator('[aria-roledescription="Position"]');

      }
          async validateApprover() {
            await page.goto('https://forcefdp-rt2.mitsubishi-fuso.com/siebel/app/edealer/enu?SWECmd=GotoView&SWEView=UInbox+My+Team+Inbox+Item+List+View',{ waitUntil: 'networkidle' });
            await page.bringToFront();
            await page.locator('[aria-label="Inbox Items List Applet:Query"]').click();
            await page.locator('[id="1_s_1_l_Name"]').click();
            await page.locator('[id="1_Name"]').fill(rowid);
            await page.locator('[aria-label="Inbox Items List Applet:Go"]').click();
            await page.locator('[id="1_s_1_l_Action"]').click();
            await page.locator('[id="1_Action"]').fill('Approved');
            await page.locator('[id="1_Action"]').press('Control+s');
            await page.waitForLoadState('networkidle');              
              const isValid = validApprovers.includes(approverElement);
              if (isValid) {
                console.log("Correct approver as expected");
              } else {
                console.log("Wrong approver, current approver is "+approverElement+"correct approver is "+validApprovers);
              }
              return isValid;
            }
      }
  module.exports = {appnew};