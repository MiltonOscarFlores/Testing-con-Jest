import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en el archivo 08-imp-exp", () => {
  test("getHeroById debe retornar un heroe por ID", () => {
    const id = 1;

    const hero = getHeroeById(id);

    console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
});
