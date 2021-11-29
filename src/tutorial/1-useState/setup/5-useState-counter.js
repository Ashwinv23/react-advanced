import React, { useState } from "react";

const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  return (
    <>
      <section>
        <h3>Regular Counter</h3>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
