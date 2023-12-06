class appnew{
    constructor(page,page1) { 

        this.position = page.locator('[aria-roledescription="Position"]');
        this.positionjpn = page1.locator('[aria-roledescription="役職"]');

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
    }
module.exports = {appnew};