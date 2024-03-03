function add(a, b) {
  console.log("sum = "+ (a + b));
  return a + b;
}   

function subtract(a, b) {
  console.log("difference = "+ (a - b));
  return a - b;
}

//console.log("sum = "+ add1(2, 3)); // 5
/*
module.exports =
{   
    add: add,
    subtract: subtract
};
*/
//another way to export
module.exports.add = add;
module.exports.subtract = subtract;