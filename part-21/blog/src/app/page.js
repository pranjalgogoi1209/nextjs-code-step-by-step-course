"use client";
import React, { useRef, useState } from "react";
export default function Home() {
  const h3ref = useRef();
  const [style, setStyle] = useState();
  console.log(h3ref);
  const handleClick = () => {
    h3ref.current.style.backgroundColor = "orange";
  };
  return (
    <div>
      <h1>Home page</h1>
      <h2
        style={{
          backgroundColor: "blue",
          color: "white",
        }}
      >
        Pranjal Gogoi{" "}
      </h2>
      <h3 ref={h3ref} style={style}>
        Change my bg
      </h3>
      <button onClick={handleClick}>Change bg 1</button>
      <button onClick={() => setStyle({ backgroundColor: "pink" })}>
        Change bg 2
      </button>
    </div>
  );
}
