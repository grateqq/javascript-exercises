const getTheTitles = function (array) {
  return array.map((obj) => obj.title);
};

// Con forEach

// const getTheTitles = function (array) {
//   const resultado = [];
//   array.forEach((element) => {
//     resultado.push(element.title);
//   });
//   return resultado;
// };

// Do not edit below this line
module.exports = getTheTitles;
