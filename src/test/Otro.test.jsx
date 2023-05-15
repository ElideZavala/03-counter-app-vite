import { render } from "@testing-library/react";
import { Otro } from "../otro";

/* eslint-disable no-undef */
describe("Pruebas en <Otro/>", () => {
  test("debe de hacer match con el snapshot", () => {
    const title = "Hola soy Goku";
    render(<Otro title={title} />);
  });
});
