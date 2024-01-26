import React from "react";
import Link from "next/link";

export default function UserDetails({ params }) {
  console.log(params);
  return (
    <div>
      <h1>User Details of {params.userDetails}</h1>
      <Link href={`/users/${params.userDetails}/update`}>
        <button>Update</button>
      </Link>
    </div>
  );
}
