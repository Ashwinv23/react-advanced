import React, { useState } from "react";

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle
      </button>
      <h2>{isError && <h2>Error...</h2>}</h2>
    </>
  );
};

export default ShortCircuit;
