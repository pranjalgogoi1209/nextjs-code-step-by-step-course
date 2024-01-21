"use client";
import React from "react";
import Script from "next/script";

export default function About() {
  return (
    <div>
      <Script
        src="/getLocation.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />
      <h1>About page</h1>
      <p>Get location</p>
    </div>
  );
}
