import React from "react";

const getUsers = async () => {
  let data = await fetch("https://dummyjson.com/users");
  data = data.json();
  return data;
};

// if getting .map is not a function error then check whether i am mapping in the array or not

export default async function Users() {
  const users = await getUsers();
  console.log(users.users);
  return (
    <div>
      <h1>Users page</h1>
      {users &&
        users.users.map(user => (
          <h2>
            {user.firstName} {user.lastName}
          </h2>
        ))}
    </div>
  );
}
