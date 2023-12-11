class appnew{
  constructor(page) {
    this.page = page;
 
        this.position = page.locator('[aria-roledescription="Position"]');
        this.positionjpn = page.locator('[aria-roledescription="役職"]');
 
    }
        async isValidApprover(validApprovers,n) {
            const approverElement = await this.position.nth(n).textContent();
            console.log(approverElement);
            const isValid = validApprovers.includes(approverElement);
            if (isValid) {
              console.log("Correct approver as expected");
            } else {
              console.log("Wrong approver, current approver is "+approverElement+"correct approver is "+validApprovers);
            }
            return isValid;
          }
   
          async isValidApproverJPN(validApprovers,n) {
            const approverElement = await this.positionjpn.nth(n).textContent();
            console.log(approverElement);
            const isValid = validApprovers.includes(approverElement);
            if (isValid) {
              console.log("Correct approver as expected");
            } else {
              console.log("Wrong approver, current approver is "+approverElement+"correct approver is "+validApprovers);
            }
            return isValid;
          }
 
 
        async correctApprover(rowid){
            await this.page.locator('[aria-label="Inbox Items List Applet:Query"]').click();
            await this.page.locator('[id="1_s_1_l_Name"]').click();
            await this.page.locator('[id="1_Name"]').fill(rowid);
            await this.page.locator('[aria-label="Inbox Items List Applet:Go"]').click();
            await this.page.locator('[id="1_s_1_l_Action"]').click();
            await this.page.locator('[id="1_Action"]').fill('Approved');
            await this.page.locator('[id="1_Action"]').press('Control+s');
            await this.page.waitForLoadState('networkidle');          
 
    }
    async correctApproverJPN(rowid){
      await this.page.locator('[id="s_2_1_10_0_Ctrl"]').click();
      await this.page.locator('[id="1_s_2_l_Name"]').click();
      await this.page.locator('[id="1_Name"]').fill(rowid);
      await this.page.locator('[id="s_2_1_7_0_Ctrl"]').click();
      await this.page.locator('[id="1_s_2_l_Action"]').click();
      await this.page.locator('[id="1_Action"]').fill('承認');
      await this.page.locator('[id="1_Action"]').press('Control+s');
      await this.page.waitForLoadState('networkidle');          
 
}
  }
module.exports = {appnew};