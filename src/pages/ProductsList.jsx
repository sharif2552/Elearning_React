import React, { useState, useEffect } from "react";
import pyimg from "../assets/img/part 7/pythonimg.png"
function ProductList() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

const fetchProducts = () => {
  fetch("http://localhost:5000/api/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((products) => {
      const updatedProducts = products.map((product) => ({
        ...product,
        imageUrl: product.imageUrl.replace(/\\/g, "/"), // Replace backslashes with forward slashes
      }));
      setProducts(updatedProducts);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
      // Handle error
    });
};


  return (
    <div>
      <h1>Product List</h1>
      <img src={pyimg} alt="" />
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> - ${product.price}
            <br />
            {product.description}
            <br />
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ maxWidth: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
