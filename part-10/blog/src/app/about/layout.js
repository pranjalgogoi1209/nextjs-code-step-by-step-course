import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <h5>Common layout for About page</h5>
      <ul>
        <li>
          <Link href={"/about/about-company"}>About company</Link>
        </li>
        <li>
          <Link href={"/about/about-employee"}>About employee</Link>
        </li>
      </ul>
      <hr />
      {children}
    </div>
  );
}
