const newList = function (array) {
  const array2 = [];
  array.forEach((element) => {
    array2.push(element);
  });

  array2[3] = 5;

  return array[3] !== array2[3];
};

//no modificar
module.exports = newList;
