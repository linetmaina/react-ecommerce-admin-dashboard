import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Nairobi Strides Admin</h1>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;