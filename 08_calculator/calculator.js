console.log("hola");
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((contador, value) => (contador += value), 0);
};

const multiply = function (array) {
  return array.reduce((contador, value) => (contador *= value), 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num1) {
  if (num1 < 0 || num1 % 1 !== 0) {
    return "error";
  }

  if (num1 === 0) {
    return 1;
  }
  return num1 * factorial(num1 - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
