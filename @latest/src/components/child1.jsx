import React, { useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0);

  console.log("Welcome to side Effect");

  setInterval(() => {
    console.log("Interval");
  }, 2000);

  fetch("test").then(() => {});

  function clickHandler() {
    console.log("Button Click");
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Child;