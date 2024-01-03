// ProductForm.jsx
import React from 'react';
import '/Users/puja/Movies/Software Dev/src/assets/css/admin/ProductForm.css';

const ProductForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="productId" className="form-label">
          Product ID:
        </label>
        <input type="text" id="productId" name="productId" className="form-input" required />

        <label htmlFor="category" className="form-label">
          Category:
        </label>
        <input type="text" id="category" name="category" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="image" className="form-label">
          Image URL:
        </label>
        <input type="text" id="image" name="image" className="form-input" required />

        <label htmlFor="productName" className="form-label">
          Product Name:
        </label>
        <input type="text" id="productName" name="productName" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="productDescription" className="form-label">
          Product Description:
        </label>
        <textarea
          id="productDescription"
          name="productDescription"
          className="form-input form-textarea"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="quantityInStock" className="form-label">
          Quantity in Stock:
        </label>
        <input type="number" id="quantityInStock" name="quantityInStock" className="form-input" required />
      </div>

      <button type="submit" className="form-button">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
