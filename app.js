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
function getNumber(min, max) {
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
  cookiesPerDay: 0,

  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      // fill customPerHour with random numbers
      const randNum = getNumber(this.customMin, this.customMax);
      this.customPerHour.push(randNum);
      // fill cookiesPerHour
      this.cookiesPerHour.push(randNum * this.cookiesPerCustom);
    }
  },
};

// get parent element
const cookiesList = document.getElementById("cookiesList");

// create a new element, or elements, that represent frankie
// const article = document.createElement("article");

// create list
const ul = document.createElement("ul");
for (let j = 0; j < hours.length; j++) {
  const li = document.createElement("li");
  li.textContent = hours[j] + seattle.cookiesPerHour[j];
  ul.appendChild(li);
}

seattle.calcCookiesPerHour();
console.log(seattle);

cookiesList.appendChild(ul);
