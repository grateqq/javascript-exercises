const convertToCelsius = function (tempF) {
  // De Fahrenheit a Celsius
  const tempC = (tempF - 32) * (5 / 9);
  let rounded = Math.round(tempC * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (tempC) {
  //De Celsius a Fahrenheit
  const tempF = tempC * (9 / 5) + 32;
  let rounded = Math.round(tempF * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
