import React from "react";
import getUsers from "../../../../services/getUsers";

export default async function UserDetails({ params }) {
  const users = await getUsers();
  const user = users.users[params.userDetails - 1];
  return (
    <div>
      <h1>UserDetails</h1>
      {user && (
        <div>
          <h1>{user.username}</h1>
        </div>
      )}
    </div>
  );
}

// for static generation => so that at build time all the pages gets load.

export async function generateStaticParams() {
  const users = await getUsers();
  return users.users.map(user => ({
    userDetails: user.id.toString(),
  }));
}
// it takes string only
