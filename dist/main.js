/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import { fetchData } from './finbox';

const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js")

document.addEventListener("DOMContentLoaded", () => {
    // Personal navbar

    var personalNav = document.createElement('div');
    
    var linkedinLogo = document.createElement('img');
    linkedinLogo.style.height = "5.46875vh";
    linkedinLogo.style.width = "2.734375vw";
    linkedinLogo.onclick = () => {
        window.location = "https://www.linkedin.com/in/alex-volynsky-03570a82/";
    }
    linkedinLogo.onmouseover = () => {
        linkedinLogo.style.cursor = "pointer";
    }

    var githubLogo = document.createElement('img');
    githubLogo.style.height = "5.46875vh";
    githubLogo.style.width = "2.734375vw";
    githubLogo.style.paddingLeft = "0.75vw";
    githubLogo.style.paddingRight = "0.6vw";
    githubLogo.onclick = () => {
        window.location = "https://github.com/volynsal";
    }
    githubLogo.onmouseover = () => {
        githubLogo.style.cursor = "pointer";
    }

    var personalSite = document.createElement('div');
    personalSite.style.fontSize = "1.953125vmax";
    personalSite.style.fontWeight = "bolder";
    personalSite.style.fontFamily = "Source Sans Pro", "sans serif";
    personalSite.onclick = () => {
        window.location = "https://volynsal.github.io/";
    }
    personalSite.onmouseover = () => {
        personalSite.style.cursor = "pointer";
    }

    linkedinLogo.src = "app/assets/images/linkedin.png";
    githubLogo.src = "app/assets/images/github.png";
    personalSite.innerHTML = 'AV';

    personalNav.appendChild(personalSite);
    personalNav.appendChild(githubLogo);
    personalNav.appendChild(linkedinLogo);

    personalNav.style.display = "flex";

    
    // Introduction

    var TESTER = document.getElementById('tester');
   
    TESTER.style.zIndex = "1"
    TESTER.style.display = "block";
    TESTER.style.marginLeft = "auto";
    TESTER.style.marginRight = "auto";
    TESTER.style.backgroundColor = "white";
    TESTER.style.boxShadow = "0 0 4px 1px rgba(0, 0, 0, 0.01), 0 3px 24px rgba(48, 51, 51, 0.09)";
    TESTER.style.borderRadius = "5px";
    
    var header = document.createElement('div');

    var gps = document.createElement('img');
    var img = document.createElement('img');
    var titleIntroduction = document.createElement('div');

    var titleBackground = document.createElement('div');
    var titleInstructions = document.createElement('div');
    var background = document.createElement('p');
    
    var loadingBars = document.createElement('img');
    var postIntroduction = document.createElement('button');

    TESTER.style.marginTop = '7vh';
    // TESTER.style.boxShadow = "0 0 4px 1px rgba(0, 0, 0, 0.01), 0 3px 24px rgba(48, 51, 51, 0.09)";
    TESTER.style.width = '39.0625vw';
    TESTER.style.padding = "3.125vh 1.5625vw 3.125vh 1.5625vw";
    
    // Instructions 

    var instructions = document.createElement('ol');
    var firstInstruction = document.createElement('li');
    var secondInstruction = document.createElement('li');
    var thirdInstruction = document.createElement('li');
    var fourthInstruction = document.createElement('li');

    instructions.appendChild(firstInstruction);
    instructions.appendChild(secondInstruction);
    instructions.appendChild(thirdInstruction);
    instructions.appendChild(fourthInstruction);

    // Text

    titleIntroduction.innerHTML = "Fair Value GPS";
    titleBackground.innerHTML = "Background: "
    titleInstructions.innerHTML = "Instructions: "
    background.innerHTML = "Stocks can be valued using a variety of techniques. The following data visualization will enable the user to compare the fair value calculated by multiple valuation techniques at once. The most popular include: 5Y DCF Growth Exit, EBITDA Multiples, and P/E Multiples (which are used to trigger buy or sell signals). Please use the following information at your own discretion."
    
    firstInstruction.innerHTML = "Type a ticker in the top-right hand corner of your screen.";
    secondInstruction.innerHTML = "Wait for the bar chart to load the calculated fair values.";
    thirdInstruction.innerHTML = "Watch for conditional formatting to give a buy or sell signal based on market price."
    fourthInstruction.innerHTML = "Click on any bar to export the selected model to Google Sheets.";

    background.style.textAlign = "justify";
    background.style.paddingRight = "1.4vw";

    titleBackground.style.color = "black";
    titleBackground.style.fontSize = "1.0375vmax";
    titleBackground.style.marginTop = "3.4653125000000005vh";
    titleBackground.style.marginBottom = "3.4653125000000005vh";
    titleBackground.style.fontWeight = "bolder";
    titleBackground.style.fontFamily = "Source Sans Pro", "sans serif";

    titleInstructions.style.color = "black";
    titleInstructions.style.fontSize = "1.0375vmax";
    titleInstructions.style.marginTop = "3.4653125000000005vh";
    titleInstructions.style.marginBottom = "3.4653125000000005vh";
    titleInstructions.style.fontWeight = "bolder";
    titleInstructions.style.fontFamily = "Source Sans Pro", "sans serif";

    instructions.style.paddingLeft = "3.125vw";

    // Styling redirect button

    // loading.style.display = "inline-flex";
    // loading.style.alignContent = "center";
    // loading.style.alignItems = "center";
    // loading.style.paddingLeft = "12vw";
    
    // loadingText.innerHTML = "Loading..."
    // loadingText.style.fontFamily = "Source Sans Pro", "sans serif";
    // loadingText.style.fontWeight = "600";
    // loadingText.style.fontSize = "20px";
    // loadingText.style.paddingBottom = "2vh";
    // loadingText.style.textAlign = "center";

    loadingBars.src = "app/assets/images/bars.svg";
    loadingBars.style.height = "125vh";
    loadingBars.style.width = "62.5vw";
    loadingBars.style.marginLeft = "18.5vw";
    loadingBars.style.marginTop = "-20vh";

    postIntroduction.innerHTML = 'Continue';
    postIntroduction.style.color = 'white';
    postIntroduction.style.backgroundColor = '#21ce99';
    postIntroduction.style.fontFamily = 'Source Sans Pro', 'sans serif';
    postIntroduction.style.transition = '300ms';
    postIntroduction.style.borderColor = '#21ce99';
    postIntroduction.style.fontSize = '1.171875vmax';
    postIntroduction.style.fontWeight = '600';
    postIntroduction.style.padding = '0.78125vh 0.78125vw 0.78125vh 0.78125vw';
    postIntroduction.style.width = '37.03125vh';
    postIntroduction.style.height = '3.75vw';
    postIntroduction.style.borderRadius = '4px';
    postIntroduction.style.cursor = 'pointer';
    postIntroduction.style.textDecoration = 'none';
    postIntroduction.style.marginTop = '1.875vh';
    postIntroduction.style.marginBottom = '1.875vh';
    postIntroduction.style.marginLeft = "9.765625vw";

    postIntroduction.onmouseover = function() {
        postIntroduction.style.backgroundColor = "#1ae9aa";
        postIntroduction.style.borderColor = "#1ae9aa";
        postIntroduction.style.cursor = pointer;
    }

    postIntroduction.onmouseleave = function() {
        postIntroduction.style.backgroundColor = '#21ce99';
        postIntroduction.style.borderColor = '#21ce99';
        postIntroduction.style.cursor = pointer;
    }

    postIntroduction.onclick = function () {
        postIntroduction.style.outline = "0";
    }  

    // Styling title

    header.appendChild(img);
    header.appendChild(titleIntroduction);
    
    titleIntroduction.style.fontStyle = "italic";
    titleIntroduction.style.color = "black";
    titleIntroduction.style.fontSize = "2.5vmax";
    titleIntroduction.style.fontWeight = "bolder";
    titleIntroduction.style.marginTop = "1.5625vh";
    titleIntroduction.style.marginBottom = "3.35vh";
    titleIntroduction.style.fontFamily = "Source Sans Pro", "sans serif";

    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.flexDirection = "row-reverse";

    // Styling logo

    // gps.src = "app/assets/images/gpsicon.png";
    // gps.style.height = "275px";
    // gps.style.width = "275px";
    // gps.style.position = "absolute";
    // gps.style.zIndex = "-1";
    // gps.style.paddingLeft = "15vw";
    // gps.style.top = "55vh";

    img.style.marginTop = "1.015625vh";
    img.style.height = "7.03125vh";
    img.style.width = "10.546875vw";

    img.src = "app/assets/images/logo.png";
    img.onclick = () => {
        debugger
        window.location = 'https://robbinhood.herokuapp.com/#/';
    }

    img.onmouseover = () => {
        img.style.cursor = 'pointer';
    }

    // Add all elements to introductory section

    body.insertBefore(personalNav, TESTER);
    // body.insertBefore(gps, TESTER);
    TESTER.appendChild(header);
    TESTER.appendChild(titleBackground);
    TESTER.appendChild(background);
    TESTER.appendChild(titleInstructions);
    TESTER.appendChild(instructions);
    TESTER.appendChild(postIntroduction);

    var ctx = document.getElementById('myChart').getContext('2d');
    debugger
    myChart.style.height = "0vh";
    myChart.style.width = "0vw";
    myChart.style.marginLeft= "0vw";
    myChart.style.marginTop= "0vh";

    postIntroduction.onclick = () => {            
        var creditContainer = document.getElementsByClassName('credit-container');
        var body = document.getElementById('body');

        body.removeChild(personalNav);
        TESTER.removeChild(header);
        TESTER.removeChild(titleBackground);
        TESTER.removeChild(background);
        TESTER.removeChild(titleInstructions);
        TESTER.removeChild(instructions);
        TESTER.removeChild(postIntroduction);
        body.removeChild(creditContainer[0]);
        TESTER.style.backgroundColor = null;
        TESTER.style.color = null;

        TESTER.style.boxShadow = null;
        TESTER.style.width = null;
        TESTER.style.padding = null;
        TESTER.style.marginTop = null;
        img.style.marginLeft = null;
        
        
        var ticker = document.createElement('input');
        ticker.setAttribute('type', 'text');
        ticker.setAttribute('placeholder', 'Enter ticker');
        ticker.setAttribute('id', 'ticker');
        ticker.setAttribute('value', 'FB');
        
        var warningMessage = document.createElement('span');
        warningMessage.style.fontFamily = "Source Sans Pro", "sans serif";
        warningMessage.style.fontSize = "5vmax";
        warningMessage.style.display = "flex";
        warningMessage.style.fontWeight = "900";
        
        myChart.style.height = "89.0625vh !important";
        myChart.style.width = "96.875vw! important";
        myChart.style.marginLeft = "1.1vw";
        myChart.style.marginTop = "-3vh";

        img.style.height = "7.8125vh";
        img.style.width = "11.71875vw";
        img.style.marginTop = '0.3vh';

        personalNav.style.marginTop = "0.5vh";
        personalNav.style.marginTop = "1.6vh";
        personalNav.style.marginLeft = "0.25vw";
        githubLogo.style.paddingLeft = "0.6vw";
        githubLogo.style.paddingRight = "0.6vw";

        var datapageHeader = document.createElement('div');
        datapageHeader.appendChild(img);
        datapageHeader.appendChild(personalNav);

        datapageHeader.style.display = "inline-flex";
                
        TESTER.appendChild(datapageHeader);
        TESTER.appendChild(ticker);
        body.insertBefore(loadingBars, myChart);

        TESTER.style.display = "flex";
        TESTER.style.justifyContent = "space-between";

        var chart;

        fetch(`https://cors-anywhere.herokuapp.com/https://api.finbox.io/beta/data/${ticker.value}/company_name`, {
            headers: {
                // 'Origin': 'https://robbinhood.herokuapp.com/#/',
                // 'API-Key': 'de8cf11d97908f358d139d01b44ba39af52e88e3',
                'Authorization': 'Bearer de8cf11d97908f358d139d01b44ba39af52e88e3'
            },
            // Authorization: Bearer de8cf11d97908f358d139d01b44ba39af52e88e3,
        })
            .then(rescompanyName => rescompanyName.json())
            .then(jsoncompanyName => {
                debugger
                var companyName = jsoncompanyName.data;

                fetch(`https://cors-anywhere.herokuapp.com/https://api.finbox.io/beta/data/${ticker.value}/stock_price`, {
                    headers: {
                        // 'Origin': 'https://robbinhood.herokuapp.com/#/',
                        // 'API-Key': 'de8cf11d97908f358d139d01b44ba39af52e88e3',
                        'Authorization': 'Bearer de8cf11d97908f358d139d01b44ba39af52e88e3'
                    },
                    // Authorization: Bearer de8cf11d97908f358d139d01b44ba39af52e88e3,
                })
                    .then(resQuote => resQuote.json())
                    .then(jsonQuote => {
                        debugger
                        var information = {};
                        information['Market Price'] = jsonQuote.data;


                        fetch(`https://cors-anywhere.herokuapp.com/https://api.finbox.io/beta/fairvalues/${ticker.value}/models`, {
                            headers: {
                                // 'Origin': 'https://robbinhood.herokuapp.com/#/',
                                // 'API-Key': 'de8cf11d97908f358d139d01b44ba39af52e88e3',
                                'Authorization': 'Bearer de8cf11d97908f358d139d01b44ba39af52e88e3'
                            },
                            // Authorization: Bearer de8cf11d97908f358d139d01b44ba39af52e88e3,
                        })
                            .then(resValuations => resValuations.json())
                            .then(jsonValuations => {

                                valuations = jsonValuations.data.models;

                                valuations.forEach((element, index) => {
                                    information[element.name] = parseFloat(element.price.mid.toFixed(2));
                                })

                                var marketPrice = information['Market Price'];
                                var finalMetric = 0;
                                var hoverColor = '';

                                if (information['5Y DCF Growth Exit'] !== undefined) {
                                    finalMetric = information['5Y DCF Growth Exit'];
                                }
                                else if (information['5Y DCF EBITDA Exit'] !== undefined) {
                                    finalMetric = information['5Y DCF EBITDA Exit'];
                                }
                                else if (information['EBITDA Multiples'] !== undefined) {
                                    finalMetric = information['EBITDA Multiples'];
                                }
                                else if (information['P/E Multiples'] !== undefined) {
                                    finalMetric = information['P/E Multiples'];
                                }

                                if (finalMetric >= marketPrice) {
                                    hoverColor = '#21ce99';
                                    ticker.onfocus = function () {
                                        ticker.style.borderColor = '#21ce99';
                                    }
                                    ticker.onblur = function () {
                                        ticker.style.borderColor = '#f4f4f5';
                                    }
                                    document.activeElement.style.borderColor = '#21ce99';
                                }
                                else {
                                    hoverColor = '#FF0000';
                                    ticker.onfocus = function () {
                                        ticker.style.borderColor = '#FF0000';
                                    }
                                    ticker.onblur = function () {
                                        ticker.style.borderColor = '#f4f4f5';
                                    }
                                    ticker.hasfocus = function () {
                                        ticker.style.borderColor = '#FF0000';
                                    }
                                    document.activeElement.style.borderColor = '#FF0000';
                                }

                                var xValues = Object.keys(information);
                                var yValues = Object.values(information);
                                var models = [];

                                xValues.forEach((methodology, index) => {
                                    switch (methodology) {
                                        case '5Y DCF Revenue Exit':
                                            models.push(`https://finbox.com/${ticker.value}/models/dcf-revenue-exit-5yr`);
                                            break;
                                        case '10Y DCF Growth Exit':
                                            models.push(`https://finbox.com/${ticker.value}/models/dcf-growth-exit-10yr`);
                                            break;
                                        case '10Y DCF EBITDA Exit':
                                            models.push(`https://finbox.com/${ticker.value}/models/dcf-ebitda-exit-10yr`);
                                            break;
                                        case '10Y DCF Revenue Exit':
                                            models.push(`https://finbox.com/${ticker.value}/models/dcf-revenue-exit-10yr`);
                                            break;
                                        case 'Earnings Power Value':
                                            models.push(`https://finbox.com/${ticker.value}/models/epv`);
                                            break;
                                        case 'Dividends: Stable Growth':
                                            models.push(`https://finbox.com/${ticker.value}/models/ddm-sg`);
                                            break;
                                        case 'Dividends: Multi-Stage':
                                            models.push(`https://finbox.com/${ticker.value}/models/ddm-ms`);
                                            break;
                                        case 'P/E Multiples':
                                            models.push(`https://finbox.com/${ticker.value}/models/pe-multiples`);
                                            break;
                                        case 'EBITDA Multiples':
                                            models.push(`https://finbox.com/${ticker.value}/models/ebitda-multiples`);
                                            break;
                                        case '5Y DCF Growth Exit':
                                            models.push(`https://finbox.com/${ticker.value}/models/dcf-growth-exit-5yr`);
                                            break;
                                        case '5Y DCF EBITDA Exit':
                                            models.push(`https://finbox.com/${ticker.value}/models/dcf-ebitda-exit-5yr`);
                                            break;
                                        default:
                                            models.push(`https://finbox.com/${ticker.value}`);
                                            break;
                                    }
                                })
                                
                                // var maxValue = 0;

                                // yValues.forEach(value => {
                                //     if (value > maxValue) {
                                //         maxValue = value;
                                //     }
                                // })

                                // maxValue = Math.ceil(maxValue / 10) * 10;

                                // var newLineWidth;

                                // if (window.screen.availHeight > 1000) {
                                //     newLineWidth = 10;
                                // }

                                // else {
                                //     newLineWidth = 5;
                                // }

                                body.removeChild(loadingBars);
                                chart = new Chart(ctx, {
                                    type: 'bar',
                                    data: {
                                        labels: xValues,
                                        datasets: [{
                                            lineTension: 0,
                                            fill: false,
                                            type: 'line',
                                            data: yValues,
                                            hoverBackgroundColor: '#f4f4f5',
                                            hoverBorderColor: '#f4f4f5',
                                            backgroundColor: hoverColor,
                                            borderColor: hoverColor,
                                            borderWidth: 5,
                                            pointBorderColor: hoverColor,
                                            pointBackgroundColor: '#f4f4f5',
                                            pointBorderWidth: 4,
                                            pointRadius: 6,
                                        }, {
                                            // label: `Valuation of Apple, Inc.'s Common Stock`,
                                            data: yValues,
                                            backgroundColor: '#f4f4f5',
                                            borderColor: '#f4f4f5',
                                            hoverBackgroundColor: hoverColor,
                                            hoverBorderColor: hoverColor,
                                        }]
                                    },
                                    options: {
                                        // layout: {
                                        //     padding: {
                                        //         // left: 20,
                                        //         // right: 20,
                                        //         // bottom: 30,
                                        //         top: 20,
                                        //     }
                                        // },
                                        responsive: true,
                                        maintainAspectRatio: true,
                                        onClick: (event, item) => {

                                            var modelPosition = item[0]._index;                                            
                                            window.open(models[modelPosition]);
                                        },
                                        legend: {
                                            display: false
                                        },
                                        title: {
                                            display: true,
                                            text: `Valuation of ${companyName}'s Common Stock`,
                                            fontFamily: 'Source Sans Pro',
                                            fontSize: 25,
                                            padding: 30,
                                        },
                                        // scaleOverride: true, 
                                        // scaleSteps: 10,
                                        // scaleStepWidth: maxValue+10,
                                        // scaleStartValue: 0,
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    // barPercentage: 1.5,
                                                    // categoryPercentage: 1.5,
                                                    beginAtZero: true,
                                                    // max: (maxValue + 10),
                                                    // stepSize: 25,
                                                    // padding: 25,
                                                },
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Fair Value',
                                                    fontFamily: 'Source Sans Pro',
                                                    fontSize: 16,
                                                    fontStyle: 'bold'
                                                },
                                                gridLines: {
                                                    color: 'rgba(0,0,0,0)',
                                                    drawBorder: false,
                                                    display: false
                                                },
                                                afterFit: function (scale) {
                                                    scale.width = 65;
                                                }
                                            }],
                                            xAxes: [{
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Valuation Methodology',
                                                    fontFamily: 'Source Sans Pro',
                                                    fontSize: 16,
                                                    fontStyle: 'bold',
                                                },
                                                gridLines: {
                                                    color: 'rgba(0,0,0,0)',
                                                    drawBorder: false,
                                                    display: false
                                                },
                                            }]
                                        }
                                    }
                                });
                            });
                    })

            })

        debugger
        ticker.onchange = function () {
            debugger
            TESTER.style.paddingBottom = "0";
            body.insertBefore(loadingBars, myChart);

            if (typeof chart === "object") {
                chart.destroy();
            }
            if (body.contains(warningMessage)) {
                debugger
                body.removeChild(warningMessage);
            }
            if (ticker.value === "") {
                ticker.value = "ZZZZZZZZ";
            }

            fetch(`https://cors-anywhere.herokuapp.com/https://api.finbox.io/beta/data/${ticker.value}/company_name`, {
                headers: {
                    // 'Origin': 'https://robbinhood.herokuapp.com/#/',
                    // 'API-Key': 'de8cf11d97908f358d139d01b44ba39af52e88e3',
                    'Authorization': 'Bearer de8cf11d97908f358d139d01b44ba39af52e88e3'
                },
                // Authorization: Bearer de8cf11d97908f358d139d01b44ba39af52e88e3,
            })
                    .then(rescompanyName => {
                        let status = rescompanyName.status; 
                        debugger
                        
                        if (status === 207 || ticker.value === "") {
                            warningMessage.innerHTML = "Please enter a valid ticker!"
                            warningMessage.style.marginLeft = "20vw";
                            warningMessage.style.width = "78.88888888888889vw";

                            body.removeChild(loadingBars);
                            TESTER.style.paddingBottom = "28vh";
                            warningMessage.style.textAlign = 'center';
                            body.insertBefore(warningMessage, myChart);
                        }
                        else {
                            return rescompanyName.json();
                        }
                    })
                    .then(jsoncompanyName => {
                        var companyName = jsoncompanyName.data;

                        fetch(`https://cors-anywhere.herokuapp.com/https://api.finbox.io/beta/data/${ticker.value}/stock_price`, {
                            headers: {
                                // 'Origin': 'https://robbinhood.herokuapp.com/#/',
                                // 'API-Key': 'de8cf11d97908f358d139d01b44ba39af52e88e3',
                                'Authorization': 'Bearer de8cf11d97908f358d139d01b44ba39af52e88e3'
                            },
                            // Authorization: Bearer de8cf11d97908f358d139d01b44ba39af52e88e3,
                        })
                            .then(resQuote => resQuote.json())
                            .then(jsonQuote => {                                
                                var information = {};
                                information['Market Price'] = jsonQuote.data;

                                fetch(`https://cors-anywhere.herokuapp.com/https://api.finbox.io/beta/fairvalues/${ticker.value}/models`, {
                                    headers: {
                                        // 'Origin': 'https://robbinhood.herokuapp.com/#/',
                                        // 'API-Key': 'de8cf11d97908f358d139d01b44ba39af52e88e3',
                                        'Authorization': 'Bearer de8cf11d97908f358d139d01b44ba39af52e88e3'
                                    },
                                    // Authorization: Bearer de8cf11d97908f358d139d01b44ba39af52e88e3,
                                })
                                    .then(resValuations => {
                                        if (resValuations.status === 402) {
                                            debugger
                                            warningMessage.innerHTML = "Premium key required for this ticker!";
                                            warningMessage.style.marginLeft = "20vw";
                                            warningMessage.style.width = "60vw";

                                            body.removeChild(loadingBars);
                                            TESTER.style.paddingBottom = "28vh";
                                            warningMessage.style.textAlign = 'center';
                                            body.insertBefore(warningMessage, myChart);
                                        }
                                        else {
                                            return resValuations.json();
                                        }
                                    })
                                    .then(jsonValuations => {

                                        valuations = jsonValuations.data.models;

                                        valuations.forEach((element, index) => {
                                            information[element.name] = parseFloat(element.price.mid.toFixed(2));
                                        })

                                        var marketPrice = information['Market Price'];
                                        var finalMetric = 0;
                                        var hoverColor = '';

                                        if (information['5Y DCF Growth Exit'] !== undefined) {
                                            finalMetric = information['5Y DCF Growth Exit'];
                                        }
                                        else if (information['5Y DCF EBITDA Exit'] !== undefined) {
                                            finalMetric = information['5Y DCF EBITDA Exit'];
                                        }
                                        else if (information['EBITDA Multiples'] !== undefined) {
                                            finalMetric = information['EBITDA Multiples'];
                                        }
                                        else if (information['P/E Multiples'] !== undefined) {
                                            finalMetric = information['P/E Multiples'];
                                        }

                                        if (finalMetric >= marketPrice) {
                                            hoverColor = '#21ce99';
                                            ticker.onfocus = function () {
                                                ticker.style.borderColor = '#21ce99';
                                            }
                                            ticker.onblur = function () {
                                                ticker.style.borderColor = '#f4f4f5';
                                            }
                                            document.activeElement.style.borderColor = '#21ce99';
                                        }
                                        else {
                                            hoverColor = '#FF0000';
                                            ticker.onfocus = function () {
                                                ticker.style.borderColor = '#FF0000';
                                            }
                                            ticker.onblur = function () {
                                                ticker.style.borderColor = '#f4f4f5';
                                            }
                                            ticker.hasfocus = function () {
                                                ticker.style.borderColor = '#FF0000';
                                            }
                                            document.activeElement.style.borderColor = '#FF0000';
                                        }

                                        xValues = Object.keys(information);
                                        yValues = Object.values(information);
                                        var models = [];

                                        xValues.forEach((methodology) => {
                                            switch (methodology) {
                                                case '5Y DCF Revenue Exit':
                                                    models.push(`https://finbox.com/${ticker.value}/models/dcf-revenue-exit-5yr`);
                                                    break;
                                                case '10Y DCF Growth Exit':
                                                    models.push(`https://finbox.com/${ticker.value}/models/dcf-growth-exit-10yr`);
                                                    break;
                                                case '10Y DCF EBITDA Exit':
                                                    models.push(`https://finbox.com/${ticker.value}/models/dcf-ebitda-exit-10yr`);
                                                    break;
                                                case '10Y DCF Revenue Exit':
                                                    models.push(`https://finbox.com/${ticker.value}/models/dcf-revenue-exit-10yr`);
                                                    break;
                                                case 'Earnings Power Value':
                                                    models.push(`https://finbox.com/${ticker.value}/models/epv`);
                                                    break;
                                                case 'Dividends: Stable Growth':
                                                    models.push(`https://finbox.com/${ticker.value}/models/ddm-sg`);
                                                    break;
                                                case 'Dividends: Multi-Stage':
                                                    models.push(`https://finbox.com/${ticker.value}/models/ddm-ms`);
                                                    break;
                                                case 'P/E Multiples':
                                                    models.push(`https://finbox.com/${ticker.value}/models/pe-multiples`);
                                                    break;
                                                case 'EBITDA Multiples':
                                                    models.push(`https://finbox.com/${ticker.value}/models/ebitda-multiples`);
                                                    break;
                                                case '5Y DCF Growth Exit':
                                                    models.push(`https://finbox.com/${ticker.value}/models/dcf-growth-exit-5yr`);
                                                    break;
                                                case '5Y DCF EBITDA Exit':
                                                    models.push(`https://finbox.com/${ticker.value}/models/dcf-ebitda-exit-5yr`);
                                                    break;
                                                default:
                                                    models.push(`https://finbox.com/${ticker.value}`);
                                                    break;
                                            }
                                        })

                                        // var maxValue = 0;
                                        // var stepSize = 0;
                                        
                                        // yValues.forEach(value => {
                                        //     if (value > maxValue) {
                                        //         maxValue = value;
                                        //     }
                                        // })
                                        
                                        // if (((Math.ceil(maxValue / 25) * 25) % 50 === 0) && maxValue > 100) { 
                                        //     stepSize = 50;
                                        // }

                                        // else {
                                        //     stepSize = 25;
                                        // }
                                        body.removeChild(loadingBars);
                                        chart = new Chart(ctx, {
                                            type: 'bar',
                                            data: {
                                                labels: xValues,
                                                datasets: [{
                                                    lineTension: 0,
                                                    fill: false,
                                                    type: 'line',
                                                    data: yValues,
                                                    hoverBackgroundColor: '#f4f4f5',
                                                    hoverBorderColor: '#f4f4f5',
                                                    backgroundColor: hoverColor,
                                                    borderColor: hoverColor,
                                                    borderWidth: 5,
                                                    pointBorderColor: hoverColor,
                                                    pointBackgroundColor: '#f4f4f5',
                                                    pointBorderWidth: 4,
                                                    pointRadius: 6,
                                                }, {
                                                    // label: `Valuation of Apple, Inc.'s Common Stock`,
                                                    data: yValues,
                                                    backgroundColor: '#f4f4f5',
                                                    borderColor: '#f4f4f5',
                                                    hoverBackgroundColor: hoverColor,
                                                    hoverBorderColor: hoverColor,
                                                }]
                                            },
                                            options: {
                                                // layout: {
                                                //     padding: {
                                                //         // left: 20,
                                                //         // right: 20,
                                                //         // bottom: 30,
                                                //         top: 20,
                                                //     }
                                                // },
                                                responsive: true,
                                                // maintainAspectRatio: false,
                                                onClick: (event, item) => {

                                                    var modelPosition = item[0]._index;
                                                    
                                                    
                                                    
                                                    
                                                    window.open(models[modelPosition]);
                                                },
                                                // animation: {
                                                //     duration: 1000,
                                                //     easing: '',
                                                //     onHover: (event, item) => {
                                                //         if (item.length > 0) {

                                                //         }
                                                //     }
                                                // },
                                                // onHover: (event, item) => {
                                                //     if (item.length > 0) {
                                                //         item
                                                // },
                                                legend: {
                                                    display: false
                                                },
                                                title: {
                                                    display: true,
                                                    text: `Valuation of ${companyName}'s Common Stock`,
                                                    fontFamily: 'Source Sans Pro',
                                                    fontSize: 25,
                                                    padding: 30,
                                                },
                                                scales: {
                                                    yAxes: [{
                                                        ticks: {
                                                            beginAtZero: true,
                                                            // max: (maxValue+10),
                                                            // stepSize: stepSize,
                                                            // padding: 25,
                                                        },
                                                        scaleLabel: {
                                                            display: true,
                                                            labelString: 'Fair Value',
                                                            fontFamily: 'Source Sans Pro',
                                                            fontSize: 16,
                                                            fontStyle: 'bold'
                                                        },
                                                        gridLines: {
                                                            color: 'rgba(0,0,0,0)',
                                                            drawBorder: false,
                                                            display: false
                                                        },
                                                        afterFit: function (scale) {
                                                            scale.width = 65;
                                                        }
                                                    }],
                                                    xAxes: [{
                                                        scaleLabel: {
                                                            display: true,
                                                            labelString: 'Valuation Methodology',
                                                            fontFamily: 'Source Sans Pro',
                                                            fontSize: 16,
                                                            fontStyle: 'bold',
                                                        },
                                                        gridLines: {
                                                            color: 'rgba(0,0,0,0)',
                                                            drawBorder: false,
                                                            display: false
                                                        }, 
                                                    }]
                                                }
                                            }
                                        });
                                    });
                            })
                    })
        }
    }
});
                

/***/ })

/******/ });
//# sourceMappingURL=main.js.map