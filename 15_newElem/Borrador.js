console.clear();
const array1 = [
  { rate: 0, masc: 1, car: 2 },
  "gato",
  [4, 5, 6],
  { gatos: 7, perros: 8, peces: 9 },
  10,
];
const array2 = [];

array1.forEach((e) => {
  if (Array.isArray(e) === true) {
    const arraySec = newArray(e);
    array2.push(arraySec);
  } else if (typeof e === "object") {
    const obj = newObj(e);
    array2.push(obj);
  } else if (typeof e === "string" || typeof e === "number") {
    array2.push(e);
  }

  console.log(e);
  console.log(typeof e);
});
console.log("array2");
console.log(array2);

function newArray(array) {
  const array2 = [];
  array.forEach((element) => {
    array2.push(element);
  });
  return array2;
}

function newObj(objeto) {
  const props = Object.keys(objeto);
  const objeto2 = {};
  for (let i = 0; i < props.length; i++) {
    objeto2[props[i]] = objeto[props[i]];
  }
  return objeto2;
}
