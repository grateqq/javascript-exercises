const workElem = require("./copiaProfunda");

describe("Funcion copiar elemento", () => {
  test("copia array anidaciones? ", () => {
    const array4 = [
      { vida: { escudo: 28 }, power: 44 },
      [1, 2, 3, 4],
      10,
      20,
      "grate",
      [4],
    ];
    expect(workElem(array4)).toStrictEqual(array4);
  });
});
