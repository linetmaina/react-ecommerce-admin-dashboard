import { useEffect, useState } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://urbankicks-json-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return { products, setProducts };
}

export default useProducts;