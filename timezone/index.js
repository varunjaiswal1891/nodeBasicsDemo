//console.log("Hello from the timezone module");
//npm install moment - library to work with timezones

//const lodash = require('lodash'); //lodash is a utility library that provides a lot of useful methods for working with arrays, collections, and objects

//console.log(moment().format('dddd'));
//console.log(lodash.random(1, 10)); //random number between 1 and 10

const moment = require('moment-timezone'); //moment-timezone is a library that provides a lot of useful methods for working with timezones
moment.tz.setDefault("Asia/Kolkata");
let targetTimeZone;
//const targetTimeZone = "America/New_York";
console.log(process.argv);
console.log(`The time in India  is ${moment().format()}`); 

if (process.argv.length != 3) {
    console.log("Please provide the timezone as an argument");
    process.exit(1);
}
else {
    targetTimeZone = process.argv[2];
}

console.log(`The time in timezone ${targetTimeZone} is ${moment().tz(targetTimeZone).format()}`); //current time in target timezone
//npm start America/New_York - to run the program with the timezone as an argument
