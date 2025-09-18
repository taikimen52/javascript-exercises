const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
  if(arr.length === 0){
    return 0;
  }
  for(let item of arr){
    sum+=item;
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  if(arr.length === 0){
    return 0;
  }
  for(let item of arr){
    result *= item;
  }
  return result;
};

const power = function(a, b) {
  let result = a;
  for(let i =1; i < b; i++){
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
	let result = 1;
  for(let i =1; i <= a; i++){
    result = result *i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

add(0,0)
add(2,2)
add(2,6)
subtract(10,4)
subtract(-10,-4)
subtract(-8,7)
sum([7])
sum([7,11])
sum([1, 3, 5, 7, 9])
multiply[2,4]
multiply([2, 4, 6, 8, 10, 12, 14])
power(4,3)
power(3,10)
factorial(0)
factorial(1)
factorial(2)
factorial(5)
factorial(10)