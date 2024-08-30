const add = function(num1, num2) {
  return num1 + num2
	
};

const subtract = function(num1, num2) {
	return num1- num2
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
const sum = function(array) {
	return array.reduce((contador,value)=> contador += value,0)
};

const multiply = function(array) {
  return array.reduce((result,num,)=>result *= num, 1)


};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num1) {
  let contador = 1
  if (num1 === 0) {
    contador = 1
  } else {
    for (i=num1; i >= 1; i--) {
    console.log("Vuetla : " + i) // 5
    contador *= i
    console.log(contador)
    }}
  
	return contador

};
