import React from "react";

export default function Contact() {
  return (
    <div>
      {/* <title>This is not a good way for SEO</title> */}
      <h1>Contact us</h1>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "dynamic contact us page",
    description: "dynamic description of contact us page",
  };
}
