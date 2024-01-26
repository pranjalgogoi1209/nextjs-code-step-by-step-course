"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserDetails({ params }) {
  const route = useRouter();
  const id = params.userDetails;
  const handleDelete = () => {
    console.log("delete now");
    fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        route.push("/users");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>User Details of {params.userDetails}</h1>
      <Link href={`/users/${params.userDetails}/update`}>
        <button>Update</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
