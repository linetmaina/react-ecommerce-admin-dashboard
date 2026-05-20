import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`https://urbankicks-json-server.onrender.com/products${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),
    });

    navigate("/products");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={product.name || ""}
        onChange={handleChange}
      />

      <input
        name="price"
        value={product.price || ""}
        onChange={handleChange}
      />

      <button type="submit">
        Update Product
      </button>
    </form>
  );
}

export default EditProduct;