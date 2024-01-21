import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <p
        style={{
          fontFamily: "serif",
        }}
      >
        Hi, I am Pranjal gogoi
      </p>

      <br />

      <p className={roboto.className}>
        I am next.js font | Pranjal gogoi | font optimization
      </p>
    </div>
  );
}
