import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "../components/ProductCard";

test("renders product details", () => {
  const product = {
    id: 1,
    name: "Nike Air Force 1",
    description: "Classic white sneaker",
    category: "Sneakers",
    price: 120,
    stock: 15,
    image: "test-image.jpg",
  };

  render(
    <BrowserRouter>
      <ProductCard product={product} handleDelete={() => {}} />
    </BrowserRouter>
  );

  expect(screen.getByText(/Nike Air Force 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Price: \$120/i)).toBeInTheDocument();
  expect(screen.getByText(/Stock: 15/i)).toBeInTheDocument();
});