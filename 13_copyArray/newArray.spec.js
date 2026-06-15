const newArray = require("./newArray");

describe("Menajeo de arrays", () => {
  test("comparar 2 arrays toStrictEqual ", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 4];
    expect(newArray(array1)).toStrictEqual(array2);
  });
});
