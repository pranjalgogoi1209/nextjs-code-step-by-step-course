"use client";
import React, { useEffect, useState } from "react";

export default function Update({ params }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // console.log(params.userDetails);
  const id = params.userDetails;
  useEffect(() => {
    fetch(`http://localhost:8000/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setName(data.name);
        setEmail(data.email);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Update User Details</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Write your name"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Write your e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>
        <button type="submit">Update User Details</button>
      </form>
    </div>
  );
}
