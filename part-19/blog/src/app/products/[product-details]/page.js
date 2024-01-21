// "use client";

// use client cann't use if async await is there problem

import React from "react";

/* const products = async () => {
  let data = await fetch("https://api.escuelajs.co/api/v1/products");
  data = await data.json();
  return data;
}; */

// async
export default function ProductDetails(params) {
  //   const productList = await products();

  /*   const productDetails =
    productList &&
    productList.filter(
      product => product.id === params.params["product-details"]
    ); */

  //   productDetails && console.log(productDetails);

  console.log(params.params["product-details"]);

  return (
    <div>
      <h1>Product Details Page : {params.params["product-details"]}</h1>
      {/* {productDetails && <img src={productDetails[0].images[0]} width={200} />} */}
    </div>
  );
}
