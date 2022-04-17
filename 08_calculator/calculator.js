const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prev, curr) => prev * curr, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num < 2) return 1; // special case for 0 & 1

  let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
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
