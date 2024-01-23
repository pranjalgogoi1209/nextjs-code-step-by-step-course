import React from "react";
import { API_BASE_URL } from "@/config/constants";

console.log(process.env.SERVER_PASSWORD);
console.log(process.env.DB_PASSWORD);
console.log(process.env.CUSTOM_MODE);

// console.log(process.env.NODE_ENV);

// at the time of production, we cann't see console.log or any console, so I am doing this to know about NODE_ENV
export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      {process.env.NODE_ENV === "development" ? (
        <h3>Developement mode</h3>
      ) : (
        <h3>Production mode</h3>
      )}
      <hr />
      <h3>{API_BASE_URL}</h3>
    </div>
  );
}
