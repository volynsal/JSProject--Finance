// const fetch = require('node-fetch')
// const puppeteer = require('puppeteer');

// // fetch(`https://sandbox.iexapis.com/stable/stock/gm/quote?token=Tpk_d2b98c6549ce4e72b5a3b6fcf2b30a9f`)
// //         .then(resQuote => resQuote.json())
// //         .then(jsonQuote => {

// //             information = {};
// //             information['Market Price'] = jsonQuote.latestPrice;

// //             fetch(`https://cloud.iexapis.com/stable/data-points/AAPL/SECTOR?token=pk_4ff1095565dc41bead7f03ffb53cf52a`)
// //                 .then(resValuations => resValuations.json())
// //                 .then(jsonValuations => {
// //                     console.log(jsonValuations);
                    
// //                     valuations = jsonValuations.data.models;

// //                     valuations.forEach((element, index) => {
// //                         information[element.name] = element.price.mid;
// //                     })
// //                     xValues = Object.keys(information);
// //                     // yValues = Object.values(information);

// //                     // console.log(xValues);
// //                     // console.log(yValues);
// //                 })
// //         })

// var url = "https://finbox.com/aapl/models/dcf-ebitda-exit-5yr"

// var excellent = (async () => {
//   const browser = await puppeteer.launch({ headless: false});
//   const page = await browser.newPage();

//   // await page.goto('https://finbox.com/login');
//   // await page.waitForSelector('.login-password')

//   // await page.type('.login-email', 'volynsal@gmail.com');
//   // await page.type('.login-password', 'BeastMode23');

//   // page.click('.pb-button');

//   await page.goto(url);

//   await page.waitForSelector('#model-export');

//   const button = await page.$('#model-export');
//   button.click();

//   await page.waitForSelector('.export-option.excel');

//   const secondButton = await page.$('.export-option.excel');
//   secondButton.click();

//   await page.waitForSelector('.export-option.Download');

//   const thirdButton = await page.$('.export-option.Download')
//   thirdButton.click();

//   await browser.close();
  
// })();















