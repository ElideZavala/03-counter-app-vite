import { fireEvent, render, screen } from "@testing-library/react";
import CouterApp from "../couterApp";

/* eslint-disable no-undef */
describe("Pruebas de el <CouterApp/>", () => {
  const initialValue = 10;

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CouterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100 <CounterApp/>", () => {
    render(<CouterApp value={100} />);
    // expect(screen.getByText(100)).toBeTruthy();
  });

  test("debe de incrementar con el boton +1", () => {
    render(<CouterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe de decrementar con el boton -1", () => {
    render(<CouterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("debe de colocar el valor por defecto con el btn reset", () => {
    render(<CouterApp value={initialValue} />);
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
