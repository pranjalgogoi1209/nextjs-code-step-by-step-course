import React from "react";

export default async function getUsers() {
  let result = await fetch("https://dummyjson.com/users");
  result = await result.json();
  return result;
}
