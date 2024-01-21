"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isRed, setIsRed] = useState(false);

  // destructre or extraction class from styles
  const { red, green } = styles;

  const handleColor = e => {
    if (e.target.innerText === "Change to red") {
      setIsRed(true);
      e.target.innerText = "Change to green";
    } else {
      setIsRed(false);
      e.target.innerText = "Change to red";
    }
  };
  return (
    <div>
      <h1 className={isRed ? red : green}>Home page</h1>
      <button onClick={e => handleColor(e)}>Change to red</button>
    </div>
  );
}
