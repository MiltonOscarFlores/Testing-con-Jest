import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("06-deses-obj debe retornar un objeto", () => {
    const input = {
      clave: "ABC123",
      nombre: "Milton",
      edad: 34,
    };

    const expectedOutput = {
      nombreClave: "ABC123",
      anios: 34,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const result = usContext(input);

    expect(result).toEqual(expectedOutput);
  });
});
