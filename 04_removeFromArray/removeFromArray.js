const removeFromArray = function (array, ...itemdelete) {
  for (let i = 0; i < itemdelete.length; i++) {
    while (array.findIndex((item) => itemdelete[i] === item) !== -1) {
      const find = array.findIndex((item) => itemdelete[i] === item);
      array.splice(find, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
