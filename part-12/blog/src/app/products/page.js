import React from "react";
import Link from "next/link";

export default function Products() {
  const productList = [
    {
      id: 1,
      name: "mobile",
      price: 20000,
    },
    {
      id: 2,
      name: "laptop",
      price: 50000,
    },
    {
      id: 3,
      name: "desktop",
      price: 100000,
    },
  ];
  return (
    <div>
      <h1>Product Lists :</h1>

      {productList &&
        productList.map(product => (
          <Link href={`/products/${product.id}`}>
            <div>
              <br />
              <h1>Product name: {product.name}</h1>
              <h3>Product ID: {product.id}</h3>
              <h3>Product price: {product.price}</h3>
              <hr />
            </div>
          </Link>
        ))}

      {/*  <ul>
        <li>
          <Link href={"/products/mobile"}>Mobile</Link>
        </li>
        <li>
          <Link href={"/products/laptop"}>Laptop</Link>
        </li>
        <li>
          <Link href={"/products/watch"}>Watch</Link>
        </li>
      </ul> */}
    </div>
  );
}
