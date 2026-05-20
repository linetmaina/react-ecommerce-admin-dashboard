import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Products() {
  const { products, setProducts } = useProducts();
  const [search, setSearch] = useState("");

  // Deletes a product from the backend and updates the UI immediately.
  function handleDelete(id) {
    fetch(`https://urbankicks-json-server.onrender.com/products/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((product) => product.id !== id));
  }

  // Filters products as the admin types in the search bar.
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="page">
      <h2>Product Inventory</h2>

      <SearchBar search={search} setSearch={setSearch} />

      <section className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Products;