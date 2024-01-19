"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function page() {
  const [name, setName] = useState("PRANJAL GOGOI");

  // handleclick will call at the time of clicking on the button
  const handleClick = element => {
    setName("KRISHNA YADAV");
    element.style.padding = "2vw";
  };

  // component inside a component
  const InsideComponent = () => {
    return <h1>I am a component inside a component</h1>;
  };

  return (
    <main className={styles.main}>
      <h1>Events, Functions and State | {name}</h1>
      <button onClick={e => handleClick(e.target)}>Click me</button>
      <InsideComponent />
      <InsideComponent />
      {/* call a component like a function */}
      {InsideComponent()}
    </main>
  );
}
