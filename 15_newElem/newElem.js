const workElem = function (elem) {
  let newElem;

  if (typeof elem === "string" || typeof elem === "number") {
    newElem = elem;
  } else if (Array.isArray(elem) === true) {
    newElem = [];

    elem.forEach((item) => {
      newElem.push(workElem(item));
    });
  }
  return newElem;
};
//no modificar
module.exports = workElem;
