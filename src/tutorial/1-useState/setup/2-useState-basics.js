import React, { useState } from "react";

const UseStateBasics = () => {
  const [value, func1] = useState("Change My Title :(");

  const handleClick = () => {
    value === "Change My Title :("
      ? func1("Title Changed :)")
      : func1("Change My Title :(");
  };

  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
