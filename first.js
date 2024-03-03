var operatorObj = require('./operations.js');

function greet(name){
    console.log("Hello there " + name);
}

greet("Varun");
operatorObj.add(2, 3); // 5
operatorObj.subtract(3, 2); // 1