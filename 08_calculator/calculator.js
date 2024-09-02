const add = function(num1, num2) {
  return num1 + num2
	
};

const subtract = function(num1, num2) {
	return num1- num2
};

const sum = function(array) {
	return array.reduce((contador,value)=> contador += value,0)
};

const multiply = function(num1,num2) {
  return num1 *num2

};

const power = function(num1, num2) {
	return num1 ^ num2
};

const factorial = function(num1) {
  let contador = num1
  for (i=num1; i > 1; i--) {
    console.log(i) // 5
    contador *= i
    }

	return contador
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
