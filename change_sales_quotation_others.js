
// Assuming vehicle.json is in the same directory as this JavaScript file
const jsonData = require('../RT2/sales1.json');

// Accessing subset1 and subset2 separately
const subset1 = jsonData.HDT[0]['Branch-limit']['Branch-Sales-Staf'];
const subset2 = jsonData.HDT[0]['Branch-limit']['Branch-Sales-Mgr'];

// Print or use subset1 and subset2 as needed
console.log(subset1);
console.log(subset2);
