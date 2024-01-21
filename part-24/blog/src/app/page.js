import React from "react";
import Image from "next/image";
import techkilla from "./../../public/techkilla.png";

export default function Home() {
  console.log(techkilla);
  return (
    <div>
      <h1>Home Page</h1>
      {/* new next.js image component */}
      <Image src={techkilla} width={200} alt="techkilla" />

      {/* html img tag */}
      <img src={techkilla.src} width={300} alt="techkilla" />

      {/* external image link, to use it change the next.config.mjs file */}
      <Image
        src={
          "https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        width={1000}
        height={500}
        alt={"nature"}
      />
    </div>
  );
}
