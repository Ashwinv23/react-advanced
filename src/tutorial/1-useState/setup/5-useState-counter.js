import React, { useState } from "react";

const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  const complexCounter = () => {
    setTimeout(() => {
      setValue((prevState) => prevState + 1);
    }, 2000);
  };

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

      <section style={{ marginTop: "50px" }}>
        <h3>Complex Counter</h3>
        <h3>{value}</h3>
        <button className="btn" onClick={complexCounter}>
          +
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
