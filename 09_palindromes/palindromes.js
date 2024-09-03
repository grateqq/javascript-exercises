const palindromes = function (word) {
  console.log("---" + word)
  word = word.replace(/[^a-zA-Z0-9]/g, "")
  word = word.toLowerCase()
  console.log("--->" + word)
  
  word = word.split("") 
  console.log(word.length/2) 
  console.log(word.length)
  console.log(word)
  wordlong = Math.floor(word.length / 2)
  console.log(wordlong)
  
  console.log("inicio")
  
  for (i=0; i<wordlong; i ++) {
    //console.log(word[i])
    //console.log(word[word.length-1-i])
    let a = word[i]
    let b = word[word.length-1-i]
    console.log(a)
    console.log(b)
    if (a !== b) {return false}
    }
  
    return true
};

// Do not edit below this line
module.exports = palindromes;
