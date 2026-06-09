const newList = require("./newList");

describe("Menajeo de arrays", () => {
  test("comparar 2 arrays toStrictEqual ", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 5];
    expect(newList(array1)).toBe(true);
  });
  test.skip("comparar 2 arrays toStrictEqual ", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 5];
    expect(newList(array1)).toStrictEqual(array1);
  });

  test.skip("works with multiple words", () => {
    expect(palindromes("A car, a man, a maraca.")).toBe(true);
  });
  test.skip("works with multiple words", () => {
    expect(palindromes("Animal loots foliated detail of stool lamina.")).toBe(
      true,
    );
  });
  test.skip("doesn't just always return true", () => {
    expect(palindromes("ZZZZ car, a man, a maracaz.")).toBe(false);
  });
  test.skip("works with numbers in a string", () => {
    expect(palindromes("rac3e3car")).toBe(true);
  });
  test.skip("works with unevenly spaced numbers in a string", () => {
    expect(palindromes("r3ace3car")).toBe(false);
  });
});
