"use client";
import React from "react";

export default function CheckPrice({ price }) {
  const handleClick = () => {
    alert(price);
  };

  return (
    <div>
      <button onClick={handleClick}>Check price</button>
    </div>
  );
}
