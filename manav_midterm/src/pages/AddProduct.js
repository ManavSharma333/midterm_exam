// src/AddProduct.js
import React, { useState } from 'react';
import './AddProduct.css'

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    quantity: '',
    category:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(product, null, 2));
    console.log(product);
  };
  const handleCancel = () => {
    
    setProduct({
      name: '',
      price: '',
      description: '',
    });
  };

  return (
    <div class="style01">
      <h2>Add Product</h2>
      <form>
        <div>
          <label htmlFor="name">Product Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div><br></br>
        <div>
          <label htmlFor="price">Price : </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div><br></br>
        <div>
          <label htmlFor="price">Quantity : </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
          />
        </div><br></br>
        <div>
          <label htmlFor="price">Category : </label>
          <input
            type="name"
            id="category"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </div><br></br>
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div><br></br><br></br>
        <button class="style02" type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button class="style02" type="Reset" onClick={handleCancel}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default AddProduct;