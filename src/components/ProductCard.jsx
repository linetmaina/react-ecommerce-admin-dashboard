import { Link } from "react-router-dom";

function ProductCard({ product, handleDelete }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} />
        <span className="stock-badge">{product.stock} in stock</span>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <strong>{product.price}</strong>

          <div className="product-actions">
            <Link to={`/products/${product.id}`}>
              <button>Edit</button>
            </Link>

            <button
              className="delete-btn"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;