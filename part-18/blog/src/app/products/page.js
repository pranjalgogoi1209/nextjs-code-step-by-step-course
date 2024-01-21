"use client";
import React, { useState, useEffect } from "react";

export default function page() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);
  products && console.log(products);
  return (
    <div>
      <h1>All products</h1>
      {products &&
        products.map(product => (
          <div key={product.id}>
            <img src={product.images[1]} width={200} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
    </div>
  );
}
