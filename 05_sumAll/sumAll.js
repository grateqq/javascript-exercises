const sumAll = function (a, b) {
  if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  if (a > b) {
    return sumarmm(b, a);
  } else {
    return sumarmm(a, b);
  }

  function sumarmm(menor, mayor) {
    let sum = 0;
    for (let i = menor; i <= mayor; i++) {
      sum += i;
    }
    return sum;
  }
};
// Math.min y Math.max  se pueden usar para calcualr
//const start = Math.min(a, b);
// se puede manejar mejor las condicoines con every
// Do not edit below this line
module.exports = sumAll;
