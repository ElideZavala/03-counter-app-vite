import { render } from "@testing-library/react";
import { Otro } from "../otro";

/* eslint-disable no-undef */
describe("Pruebas en <Otro/>", () => {
  // test("debe de hacer match con el snapshot", () => {
  //   const title = "Hola soy Goku";
  //   const { container } = render(<Otro title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("debe de mostrar el titulo en un h1", () => {
    const title = "Hola soy Goku";
    const { container, getByText, getByTestId } = render(
      <Otro title={title} />
    );

    // Que exista el titulo
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);
    // const h2 = container.querySelector("h2");
    // expect(h2.innerHTML).toContain(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const subTitle = "Soy un subtitulo";
    const title = "Hola soy Goku";
    const { getAllByText } = render(
      <Otro title={title} subtitule={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(2);
    // expect(getByText(subTitle)).toBeTruthy();
  });
});
