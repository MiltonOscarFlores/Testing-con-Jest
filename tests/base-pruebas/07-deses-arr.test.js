import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("pruebas en 07-deses-arr", () => {
  test("Debe retornar un string y un number", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number"); // Esto es lo mismo que

    expect(numbers).toEqual(expect.any(Number)); // que esto.
  });
});
