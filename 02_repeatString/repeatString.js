const repeatString = function (word, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    var saveword = "";
    for (i = 0; i < num; i++) {
      saveword = saveword.concat(word);
    }
    return saveword;
  }
};

// Do not edit below this line
module.exports = repeatString;
