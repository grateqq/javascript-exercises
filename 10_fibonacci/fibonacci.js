const fibonacci = function(num) {
  let numbers = [0,1,1];
  // num 4
  num = +num
  if (num==0) {return 0}; 
  if (num==1) {return 1}; 
  if (num < 0) {return "OOPS"}
  num = +num
  for (i=2; i<num; i ++) {
      //console.log("ciclo: " + i)
      //console.log(numbers[i]);
      //console.log(numbers[i-1]);
      numbers.push(numbers[i] + numbers[i-1]);
      //console.log(numbers)
    }
  
    //console.log("--------- FIN")
  return numbers[num-1] + numbers[num-2];
  }

// Do not edit below this line
module.exports = fibonacci;
