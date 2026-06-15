const workElem = function (elem) {
  let newElem;
  if (elem === null) {
    newElem = null;
  } else if (typeof elem === "string" || typeof elem === "number") {
    newElem = elem;
  } else if (Array.isArray(elem) === true) {
    newElem = [];

    elem.forEach((item) => {
      newElem.push(workElem(item));
    });
  } else if (typeof elem === "object") {
    newElem = {};
    //elem = {}
    const props = Object.keys(elem);

    props.forEach((item, index) => {
      newElem[item] = workElem(elem[item]);
    });
  }

  return newElem;
};
//no modificar
module.exports = workElem;
