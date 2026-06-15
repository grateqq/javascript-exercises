const workElem = require("./newElem");

describe("Funcion copiar elemento", () => {
  test("copia string? ", () => {
    expect(workElem("gato")).toBe("gato");
  });
  test("comparar 2 listas toStrictEqual ", () => {
    const array1 = ["gato", [4, 5, 6], 10, [1, 2, 3]];
    expect(workElem(array1)).toStrictEqual(array1);
  });
});
