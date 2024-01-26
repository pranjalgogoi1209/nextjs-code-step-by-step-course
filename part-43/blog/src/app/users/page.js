"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

/* const userList = async () => {
  let res = await fetch("http://localhost:8000/users");
  res = await res.json();
  return res;
}; */

export default function users() {
  /* const data = await userList();
  console.log(data); */
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  });
  return (
    <div>
      <h1>Users page</h1>
      <Link href={"/users/addUser"}>
        <button>Add user</button>
      </Link>
      <div>
        {data &&
          data.map(user => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div>
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <br />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
