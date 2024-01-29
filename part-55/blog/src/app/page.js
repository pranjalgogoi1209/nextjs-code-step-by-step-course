"use client";
import React, { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("clicked");
    file && console.log(file);

    /* const data = new FormData();
    data.set("file", file);
    // api calling : post method
    let result = await fetch("url", {
      method: "post",
      body: data,
    });
    resutl = await result.json();
    if(result.success){
      alert("fule uploaded")
      console.log(result); 
    }*/
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="file"
          name="file"
          onChange={e => setFile(e.target.files?.[0])}
          // e.target.files ? e.target.files[0] : none
        />
        <button type="submit">Upload image</button>
      </form>
    </div>
  );
}
