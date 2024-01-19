"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      This is Login Page
      <button onClick={handleClick}>Home</button>
    </div>
  );
}
