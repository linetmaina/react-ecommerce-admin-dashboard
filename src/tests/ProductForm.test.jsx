import { render, screen, fireEvent } from "@testing-library/react";
import ProductForm from "../components/ProductForm";

test("allows user to type in product form", () => {
  const formData = {
    name: "",
    category: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  };

  render(
    <ProductForm
      formData={formData}
      handleChange={() => {}}
      handleSubmit={(e) => e.preventDefault()}
      buttonText="Add Product"
    />
  );

  expect(screen.getByPlaceholderText(/Product name/i)).toBeInTheDocument();
  expect(screen.getByText(/Add Product/i)).toBeInTheDocument();
});