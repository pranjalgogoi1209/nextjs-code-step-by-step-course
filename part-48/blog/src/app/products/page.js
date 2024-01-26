"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Products Page</h1>
      <Link href={"/products/add-product"}>
        <button>Add product</button>
      </Link>
      {products &&
        products.map(product => (
          <div key={product.id}>
            <h1>
              {product.name} : {product.price}
            </h1>
            <br />
          </div>
        ))}
    </div>
  );
}
