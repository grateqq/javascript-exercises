const palindromes = function (word) {
  const wordarray = word.toLowerCase().split("");
  //console.log(wordarray)

  const wordfilter = wordarray.filter((i) => testvalid(i));
  const word1 = wordfilter.join("");
  let wordinv = [];
  for (let i = 0; i < word1.length; i++) {
    //console.log(word1[word1.length-1-i])
    wordinv.push(word1[word1.length - 1 - i]);
  }
  const word2 = wordinv.join("");
  //console.log("w2: " + word2)

  if (word1 === word2) {
    return true;
  } else {
    return false;
  }
};

function testvalid(item) {
  const valid = "abcdefghijklmnopqrstuvwxyz0123456789";
  const check = valid.includes(item);
  //console.log(valid)
  return check;
}
//console.log(testvalid(" "))

// Do not edit below this line
module.exports = palindromes;
