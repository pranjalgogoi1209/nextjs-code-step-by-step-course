import React from "react";

export default function About() {
  return (
    <div>
      <h1>This is about page | DYNAMIC META DATA IS WORKING NOW</h1>
    </div>
  );
}

// d small, M capital
export function generateMetadata({ params }) {
  return {
    title: "dynamic about page",
    description: "dynamic about page description",
  };
}
