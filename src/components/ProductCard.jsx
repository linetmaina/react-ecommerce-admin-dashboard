import { Link } from "react-router-dom";

function ProductCard({ product, handleDelete }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>

      <Link to={`/products/${product.id}`}>
        <button>Edit</button>
      </Link>

      <button
        className="delete-btn"
        onClick={() => handleDelete(product.id)}
      >
        Delete
      </button>
    </article>
  );
}

export default ProductCard;