import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://urbankicks-json-server.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      }),
    });

    navigate("/products");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
      />

      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />

      <input
        name="stock"
        placeholder="Stock"
        onChange={handleChange}
      />

      <input
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;