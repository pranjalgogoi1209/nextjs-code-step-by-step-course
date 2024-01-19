"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = navigate => {
    router.push(navigate);
  };
  return (
    <div>
      <h1>Basic Routing</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>

        <ul>
          <li>
            <button onClick={() => handleClick("/login")}>LOGIN</button>
          </li>
          <li>
            <button onClick={() => handleClick("/about")}>ABOUT</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
