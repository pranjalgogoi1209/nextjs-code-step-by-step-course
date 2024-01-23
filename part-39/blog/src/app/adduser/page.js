"use client";

import React, { useEffect, useState } from "react";

export default function AddUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = async () => {
    console.log(username, password);
    /*  fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    })
      .then(res => res.json())
      .then(console.log); */

    let res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    res = await res.json();

    // it will not work now, bcz api don't throw me an error with success key
    /*  if (res.success) {
      alert("new user added");
    }else{
        alert("some error with data please check and try again")
    } */

    console.log(res);
  };
  return (
    <div>
      <h1>Add User</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit" onClick={handleAddUser}>
        Submit
      </button>
    </div>
  );
}
