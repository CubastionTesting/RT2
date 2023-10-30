class FusoLogin{
    constructor(page){
        this.username = page.locator("[title='User ID']");
        this.password = page.locator("[title='Password']");
        this.submit= page.locator('#s_swepi_22');
        this.page = page;
        //this.waitforpageload = page.waitForLoadState('networkidle');
    }
    async login(Username,pass){
        await this.username.fill(Username);
        await this.password.fill(pass);
        
        await this.submit.click();
    }
        
    async loginUAT2(username,pass){
  // Click input[name="userid"]
  await this.page.locator('input[name="userid"]').click();

  // Fill input[name="userid"]
  // Fill input[name="userid"]
  await this.page.locator('input[name="userid"]').fill(username);

  // Click button:has-text("Next")
  await this.page.locator('button:has-text("Next")').click();

  // Click input[name="password"]
  await this.page.locator('input[name="password"]').click();

  // Fill input[name="password"]
  await this.page.locator('input[name="password"]').fill(pass);

  await this.page.locator('text=Log on').click();
  await this.page.waitForLoadState("domcontentloaded");

        }

        async loginFDP(username,pass){
            // Click input[name="userid"]
            await this.page.locator('input[name="userid"]').click();
          
            // Fill input[name="userid"]
            await this.page.locator('input[name="userid"]').fill(username);
          
            // Click button:has-text("Next")
            await this.page.locator('button:has-text("Next")').click();
          
            // Click input[name="password"]
            await this.page.locator('input[name="password"]').click();
          
            // Fill input[name="password"]
            await this.page.locator('input[name="password"]').fill(pass);
          
            await this.page.locator('text=Log on').click();
            await this.page.waitForLoadState("domcontentloaded");
          
                  }
  }
module.exports={FusoLogin};