// opening hours
const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// give a random number between two numbers
function getRndNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// constructor for cookie shop objects
function Cookieshop(shopLocation, customMin, customMax, cookiesPerCustom) {
  this.shopLocation = shopLocation;
  this.customMin = customMin;
  this.customMax = customMax;
  this.cookiesPerCustom = cookiesPerCustom;
  this.customPerHour = [];
  this.cookiesPerHour = [];
  this.cookiesPerDay = 0;
}

// cookie shop prototype - add function
Cookieshop.prototype.calcCookiesSold = function () {
  for (let i = 0; i < hours.length; i++) {
    // fill customPerHour with random numbers
    const customHourly = getRndNum(this.customMin, this.customMax);
    console.log(customHourly);
    this.customPerHour.push(customHourly);

    // fill cookiesPerHour
    const cookiesHourly = Math.floor(customHourly * this.cookiesPerCustom);
    this.cookiesPerHour.push(cookiesHourly);
  }
};

// instantiate shops
const seattle = new Cookieshop("Seattle", 23, 65, 6.3);
const tokyo = new Cookieshop("Tokyo", 3, 24, 1.2);
const dubai = new Cookieshop("Dubai", 11, 38, 3.7);
const paris = new Cookieshop("Paris", 20, 38, 2.3);
const lima = new Cookieshop("Lima", 2, 16, 4.6);

// fill arrays for each shop
seattle.calcCookiesSold();
tokyo.calcCookiesSold();
dubai.calcCookiesSold();
paris.calcCookiesSold();
lima.calcCookiesSold();

// test arrays
//console.log(seattle.customPerHour);
//console.log(seattle.cookiesPerHour);
//console.log(tokyo.customPerHour);
//console.log(tokyo.cookiesPerHour);
//console.log(dubai.customPerHour);
//console.log(dubai.cookiesPerHour);
//console.log(paris.customPerHour);
//console.log(paris.cookiesPerHour);
//console.log(lima.customPerHour);
//console.log(lima.cookiesPerHour);
