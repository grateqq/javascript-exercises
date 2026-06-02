const reverseString = function (word) {
  var reverse = "";
  for (var i = 0; i < word.length; i++) {
    reverse = reverse.concat(word[word.length - 1 - i]);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
