"use client";

// at the time of using parameter, we need to use use client

import React from "react";

export default function ProductDetails({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Product Details</h1>
      <h4>id: {params["product-details"]}</h4>
    </div>
  );
}
