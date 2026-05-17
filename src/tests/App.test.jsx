import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders navigation links", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Products" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Add Product" })).toBeInTheDocument();
});