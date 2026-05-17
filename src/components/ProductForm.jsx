function ProductForm({ formData, handleChange, handleSubmit, buttonText }) {
  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input name="name" placeholder="Product name" value={formData.name} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default ProductForm;