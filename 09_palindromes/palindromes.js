const palindromes = function (word) {
  const wordarray = word.toLowerCase().split("");
  //console.log(wordarray)

  const wordfilter = wordarray.filter((i) => testvalid3(i));
  const word1 = wordfilter.join("");
  let wordinv = [];
  for (let i = 0; i < word1.length; i++) {
    //console.log(word1[word1.length-1-i])
    wordinv.push(word1[word1.length - 1 - i]);
  }
  const word2 = wordinv.join("");
  console.log("w1: " + word1);
  console.log("w2: " + word2);

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

function testvalid2(item) {
  if ((item >= "a" && item <= "z") || (item >= "0" && item <= "9")) {
    return true;
  } else {
    return false;
  }
}

function testvalid3(item) {
  let code = item.charCodeAt();
  if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
    return true;
  } else {
    return false;
  }
}

// Do not edit below this line
module.exports = palindromes;
