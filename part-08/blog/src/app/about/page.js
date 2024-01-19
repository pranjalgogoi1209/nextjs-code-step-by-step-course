"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div>
      This is About page | Shivam
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
}
