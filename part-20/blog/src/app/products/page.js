import React from "react";
import CheckPrice from "./checkPrice";

const products = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};

export default async function Products() {
  const productList = await products();
  console.log(productList);
  return (
    <div>
      <h1>Products page</h1>
      {productList &&
        productList.map(product => (
          <div key={product.id}>
            <img src={product.images[0]} width={200} />
            <h3>{product.title}</h3>
            <CheckPrice price={product.price} />
            <hr />
            <br />
          </div>
        ))}
    </div>
  );
}
