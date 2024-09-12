const findTheOldest = function(array) {
  
  /*array.unshift({
     name: "None",
     yearOfBirth: 1942,
     yearOfDeath: 1942,
   }) 
   */
  let old = array[0]
   for (i=0; i<array.length; i ++) {
     // console.log(array[i].yearOfDeath)
     // console.log((array[i].yearOfDeath == undefined))
     // console.log((array[i].yearOfDeath == "NaN"))
     // console.log((array[i].yearOfDeath === "NaN"))
     // console.log((array[i].yearOfDeath === NaN))
     if (array[i].yearOfDeath == undefined) { array[i].yearOfDeath = 2024}
   }
   console.log(array)
   for (i=1; i<array.length; i ++) {
     
     console.log(array[i])
     console.log(array[i].yearOfDeath-array[i].yearOfBirth)
     console.log(old.yearOfDeath-old.yearOfBirth)
     console.log(array[i].yearOfDeath-array[i].yearOfBirth > old.yearOfDeath-old.yearOfBirth)
 
     if (array[i].yearOfDeath-array[i].yearOfBirth > old.yearOfDeath-old.yearOfBirth) {
       
       old = array[i]
     }
     
   }
   console.log("FIN")
   return old
 }

// Do not edit below this line
module.exports = findTheOldest;
