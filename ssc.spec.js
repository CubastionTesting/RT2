// const { test, chromium } = require("@playwright/test");

// test("ssc tests",async () => {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.waitForTimeout(5000);
//   await page.waitForLoadState('domcontentloaded')
//   console.log("Before navigating to the URL");
//   await page.goto("https://qassc.cubastion.net/");
//   console.log("After navigating to the URL");

//   // Assuming the first input field is for username and the second is for password
//   await page.keyboard.type('cubastion');
//   await page.keyboard.press('Tab'); // Move to the next input field
//   await page.keyboard.type('ssc#654');
//   await page.keyboard.press('Enter'); // Submit the form

//   // Wait for navigation or any other asynchronous tasks to complete
//   await page.waitForLoadState();

//   // Continue with further actions if needed

//   await browser.close();
// });





const { test, chromium } = require('@playwright/test');

test("ssc tests",async () => {
    const browser = await chromium.launch({
    headless: false
        
    });
  const context = await browser.newContext({
    httpCredentials:{
        username: 'cubastion',
         password: 'ssc#654'
    }
  });
  const page = await context.newPage();
// await page.pause()
  await page.waitForTimeout(5000);
  await page.waitForLoadState('domcontentloaded');
  await page.goto('https://qassc.cubastion.net/');

//   const credentials = {
    
//   };

//   async function authenticate(page, credentials) {
//     // Assuming the first input field is for username and the second is for password
//     await page.keyboard.type(credentials.username);
//     await page.keyboard.press('Tab'); // Move to the next input field
//     await page.keyboard.type(credentials.password);
//     await page.keyboard.press('Enter'); // Submit the form
//   }

//   await authenticate(page, credentials);

await page.waitForTimeout(5000);
// Continue with further actions if needed
console.log('Login done');
  await browser.close();
});
