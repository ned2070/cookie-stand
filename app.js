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

// cookie shop prototype - add function to calculate cookies sold
Cookieshop.prototype.calcCookiesSold = function () {
  for (let i = 0; i < hours.length; i++) {
    // fill customPerHour with random numbers
    const customHourly = getRndNum(this.customMin, this.customMax);
    // test
    console.log(this.customMin);
    console.log(this.customMax);
    console.log(customHourly);
    this.customPerHour.push(customHourly);

    // fill cookiesPerHour
    const cookiesHourly = Math.floor(customHourly * this.cookiesPerCustom);
    this.cookiesPerHour.push(cookiesHourly);

    // sum cookiesPerDay
    this.cookiesPerDay = this.cookiesPerDay + cookiesHourly;
  }
};

// instantiate shops
const seattle = new Cookieshop("Seattle", 23, 65, 6.3);
const tokyo = new Cookieshop("Tokyo", 3, 24, 1.2);
const dubai = new Cookieshop("Dubai", 11, 38, 3.7);
const paris = new Cookieshop("Paris", 20, 38, 2.3);
const lima = new Cookieshop("Lima", 2, 16, 4.6);
//const London = new Cookieshop("London", 12, 44, 5.5);

// fill arrays for each shop
seattle.calcCookiesSold();
tokyo.calcCookiesSold();
dubai.calcCookiesSold();
paris.calcCookiesSold();
lima.calcCookiesSold();
//London.calcCookiesSold();

// get the table from the HTML so we can add rows
const table = document.getElementById("shopData");

// cookieshop prototype - add function to render table row on page
Cookieshop.prototype.render = function () {
  // create a row
  const tr = document.createElement("tr");

  // add the store name to the row
  const th = document.createElement("th");
  th.textContent = this.shopLocation;
  tr.appendChild(th);

  // add this store's data to that row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    // create a new td and put the sales number in it
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  // add the total to the end of the row
  const totalTd = document.createElement("td");
  totalTd.textContent = this.cookiesPerDay;
  tr.appendChild(totalTd);

  // add that row to the table
  table.appendChild(tr);
};

// render the header row
// create the tr
const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

// add each time in a th
for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}

// add a total heading
const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

// add the row to the table
table.appendChild(headerRow);

// render each store on the page
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
//London.render();

// Get the form from the html
const form = document.getElementById("form");

// add event listener to form
form.addEventListener("submit", function (event) {
  // prevent page reloading
  event.preventDefault();
  //test function
  //console.log("submitted");
  const shopLocation = event.target.newShopLocation.value;
  const customMin = event.target.newCustomMin.value;
  const customMax = event.target.newCustomMax.value;
  const cookiesPerCustom = event.target.newCookiesPerCustom.value;

  const newShop = new Cookieshop(
    shopLocation,
    customMin,
    customMax,
    cookiesPerCustom
  );

  //console.log(newShop.shopLocation);
  //console.log(newShop.customMin);
  //console.log(newShop.customMax);
  //console.log(newShop.cookiesPerCustom);

  newShop.calcCookiesSold();
  newShop.render();
});
