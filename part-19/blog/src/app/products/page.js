import React from "react";
import Link from "next/link";

// whenever we log on server componet, we will get to see the result in the terminal of vs node not on console of browser
const products = async () => {
  let data = await fetch("https://api.escuelajs.co/api/v1/products");
  data = await data.json();
  return data;
};

export default async function Products() {
  const productList = await products();
  return (
    <div>
      <h1>All Products</h1>
      {productList &&
        productList.map(product => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <img src={product.images[0]} width={200} />
              <h3>{product.title}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
}
