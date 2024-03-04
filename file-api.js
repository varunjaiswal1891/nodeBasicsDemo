let fs = require('fs');
/*
//understand callback function
fs.writeFileSync("out.txt", "This should get written to the file");
console.log("This should print after prevoius line is written to the file");

fs.writeFile("out.txt", "This should get written asynchronously to the file", (err) => {
    console.log("This should print after the file is written");
});
console.log("This should print after prevoius line is written to the file");
*/

let myLoggerAPI = function(logMessage,callback) {
    fs.writeFile("out.log", logMessage,callback);
}

myLoggerAPI("This should get written to the log file", (err) => {
    console.log("Do something with error");
    updateLogMetrics();
});

let updateLogMetrics = function() {
    console.log("Update log metrics");
}