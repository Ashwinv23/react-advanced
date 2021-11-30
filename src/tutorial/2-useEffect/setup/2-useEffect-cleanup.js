import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth);

  const checkSize = () => setValue(window.innerWidth);

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return (
    <>
      <h1>Window Size</h1>
      <h3>{value} Pixels</h3>
    </>
  );
};

export default UseEffectCleanup;
