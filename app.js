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

// cookie shop object
function Cookieshop(
  shopLocation,
  customMin,
  customMax,
  customPerHour,
  cookiesPerCustom,
  cookiesPerHour,
  cookiesPerDay
) {
  this.shopLocation = shopLocation;
  this.customMin = customMin;
  this.customMax = customMax;
  this.customPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      // fill customPerHour with random numbers
      const rndNum = getRndNum(this.customMin, this.customMax);
      this.customPerHour.push(rndNum);
      // this.CustomPerHour = rndNum;
      console.log(rndNum);
      //console.log(this.customPerHour);
    }
  };
  this.cookiesPerCustom = cookiesPerCustom;
  this.cookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      // fill cookiesPerHour
      this.cookiesPerHour.push(Math.floor(rndNum * this.cookiesPerCustom));
    }
  };
  this.cookiesPerDay = cookiesPerDay;
}

// instantiate seattle
const seattle = new Cookieshop("Seattle", 23, 65, [], 6.3, [], 0);

console.log(seattle.customPerHour);
