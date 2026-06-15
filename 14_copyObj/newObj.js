const newObj = function (objeto) {
  const props = Object.keys(objeto);
  const objeto2 = {};
  for (let i = 0; i < props.length; i++) {
    objeto2[props[i]] = objeto[props[i]];
  }
  return objeto2;
};

//no modificar
module.exports = newObj;
