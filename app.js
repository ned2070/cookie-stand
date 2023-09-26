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
const seattle = {
  shopLocation: "Seattle",
  customMin: 23,
  customMax: 65,
  customPerHour: [],
  cookiesPerCustom: 6.3,
  cookiesPerHour: [],
  cookiesSold: 0,

  calcCookiesSold: function () {
    for (let i = 0; i < hours.length; i++) {
      // fill customPerHour with random numbers
      const rndNum = getRndNum(this.customMin, this.customMax);
      this.customPerHour.push(rndNum);
      // fill cookiesPerHour
      this.cookiesPerHour.push(Math.floor(rndNum * this.cookiesPerCustom));
    }
  },
};

// calculate cookies sold in every hour
seattle.calcCookiesSold();

// get parent element
const salesList = document.getElementById("salesList");

// create list
const seattleUl = document.createElement("ul");
for (let j = 0; j < hours.length; j++) {
  const li = document.createElement("li");
  li.textContent = `${hours[j]}: ${seattle.cookiesPerHour[j]} cookies`;
  seattleUl.appendChild(li);
}

salesList.appendChild(seattleUl);
