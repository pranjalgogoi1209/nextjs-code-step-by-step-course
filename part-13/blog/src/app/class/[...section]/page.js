"use client";
import React from "react";

// catch all segments of route
export default function Section({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Section page</h1>
      <div>
        <h2>Section: {params.section[0]}</h2>
        <h2>Subject: {params.section[1]}</h2>
        <h2>lecture no.: {params.section[2]}</h2>
      </div>
    </div>
  );
}
