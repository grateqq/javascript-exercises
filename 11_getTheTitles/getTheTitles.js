const getTheTitles = function(array) {
  let arrayTitles = []
  array.forEach(element => {arrayTitles.push(element.title)
    
  });

  console.log(arrayTitles)
  return arrayTitles
};

// Do not edit below this line
module.exports = getTheTitles;
