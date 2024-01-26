"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, email);
    let res = await fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
    res = await res.json();
    console.log(res);
    router.push("/users");
  };
  return (
    <div>
      <h1>Add user page</h1>

      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
