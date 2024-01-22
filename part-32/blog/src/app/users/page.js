import React from "react";
import getUsers from "../../../services/getUsers";
import Link from "next/link";

export default async function Users() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>All users</h1>
      {users &&
        users.users.map(user => (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>
              <h3>{user.username}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
}
