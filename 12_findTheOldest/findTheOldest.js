const findTheOldest = function (array) {
  const newarray = array;
  //console.log(newarray)

  const date = new Date().getFullYear(); //2026

  function verf(array) {
    array.forEach((item) => {
      if (item.yearOfDeath === undefined) {
        //console.log("error")
        item.yearOfDeath = date;
        //console.log(item)
      }
    });
  }

  verf(newarray);
  //console.log(newarray)
  // esta completado
  //let resultado = newarray[0];
  const oldman = newarray.reduce((acc, cur) => {
    console.log("---- turn");
    console.log(acc);
    console.log(cur);
    const edadAcc = acc.yearOfDeath - acc.yearOfBirth;
    const edadCur = cur.yearOfDeath - cur.yearOfBirth;
    if (edadAcc > edadCur) {
      console.log(acc.name + ": " + edadAcc);
      console.log(cur.name + ": " + edadCur);
      return acc;
    } else {
      console.log(acc.name + ": " + edadAcc);
      console.log(cur.name + ": " + edadCur);
      return cur;
    }
    //console.log("resultado")
    console.log(resultado);
  }, newarray[0]);

  console.log("---END ---");

  return oldman;
};
// Do not edit below this line
module.exports = findTheOldest;
