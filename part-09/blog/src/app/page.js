"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => router.push("/about")}>About</button>
    </div>
  );
}
