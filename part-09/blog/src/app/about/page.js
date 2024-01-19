import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      About Page
      <button>
        <Link href={"/about/about-student"}>about student</Link>
      </button>
      <button>
        <Link href={"/about/about-college"}>about college</Link>
      </button>
    </div>
  );
}
