import { render, screen } from "@testing-library/react";
import { Otro } from "../otro";

/* eslint-disable no-undef */
describe("Pruebas en <Otro/>", () => {
  const title = "Hola soy Goku";
  const subtitule = "Soy un subtitulo";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<Otro title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola soy Goku"', () => {
    render(<Otro title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe de mostrar el titulo en un h1", () => {
    render(<Otro title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    render(<Otro title={title} subtitule={subtitule} />);
    expect(screen.getAllByText(subtitule).length).toBe(2);
  });
});
