// Create new date object
const date = new Date();

const weekDay = {weekday: 'long'};
const year = {year: 'numeric'};
const month = {month: 'long'};
const numericalDate = {day: 'numeric'};

// Set weekday
document.getElementById('weekDay').innerText = date.toLocaleString('default', weekDay);

// Set Month
document.getElementById('month').innerText = date.toLocaleString('default', month);

// Set numerical Date
document.getElementById('numericalDate').innerText = date.toLocaleString('default', numericalDate);

// Set Year
document.getElementById('year').innerText = date.toLocaleString('default', year);