const newObj = require("./newObj");

describe("Menajeo de arrays", () => {
  test("comparar 2 arrays toStrictEqual ", () => {
    const objeto1 = { rate: 4, masc: 2, car: 12 };
    const objeto2 = { rate: 4, masc: 2, car: 12 };
    expect(newObj(objeto1)).toStrictEqual(objeto2);
  });
});
