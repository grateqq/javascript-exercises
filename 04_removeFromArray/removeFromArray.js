const removeFromArray = function (array, a) {
  const find = array.findIndex((item) => a === item);
  array.splice(find, 1);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
