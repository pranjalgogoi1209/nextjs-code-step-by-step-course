"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const route = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleAddProduct = () => {
    fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        price: price,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        route.push("/products");
      });
  };
  return (
    <div>
      <h1>Add product page</h1>
      <input
        type="text"
        placeholder="Enter product name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter product price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add product</button>
    </div>
  );
}
