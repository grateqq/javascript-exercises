const repeatString = function (word, num) {
  var saveword = word;
  for (i = 1; i < num; i++) {
    saveword = saveword.concat(word);
  }
  return saveword;
};

// Do not edit below this line
module.exports = repeatString;
