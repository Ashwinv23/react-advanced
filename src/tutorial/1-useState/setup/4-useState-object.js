import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ashwin",
    age: 36,
    message: "React Developer",
  });

  const changeMess = () =>
    setPerson({ ...person, message: "Senior Developer" });

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMess}>
        Click
      </button>
    </>
  );
};

export default UseStateObject;
