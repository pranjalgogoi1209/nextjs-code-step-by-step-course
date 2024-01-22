import React from "react";
// import { redirect } from "next/navigation";

// if we change our file name from users to user. and if someone previously visited the users page. then in the history he will get users page. and he will not get to know about the user page. in that case how can we redirect from users page. bcz now we don't have users page. in that case we have to change config file.

export default function Users() {
  //   redirect("/");
  return (
    <div>
      <h1>Users page</h1>
    </div>
  );
}
