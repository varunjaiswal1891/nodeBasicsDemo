//console.log("Hello from the timezone module");
//npm install moment - library to work with timezones

let moment = require('moment');
let lodash = require('lodash'); //lodash is a utility library that provides a lot of useful methods for working with arrays, collections, and objects

console.log(moment().format('dddd'));
console.log(lodash.random(1, 10)); //random number between 1 and 10