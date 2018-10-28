// Jan 1st 1970 00:00:00 am

const moment = require('moment');

// var date = moment();
// console.log(date.format('MMM YYYY'));
// date.add(1,'year').subtract(9,'months');
// console.log(date.format('MMM Do, YYYY'));

// console.log(date.format('h:mm a'));

// console.log(date);
var createdAt = 12345566343423;
var date = moment(createdAt);
console.log(date.format('YYYY MM D ddd h:mm a '));