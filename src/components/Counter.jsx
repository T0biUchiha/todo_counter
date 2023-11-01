import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState("");
  const [showCounter,setShowCounter] =useState(false);
  const handleClick = () => {
    setShowCounter(true);
  };
  const handleChange = (e) => {
    parseInt(setNum(e.target.value));
  };
  return (
    <div>
      <h1>Counter</h1>
      {showCounter === false ? (
        <input
          type="number"
          placeholder="Enter value"
          value={num}
          onChange={handleChange}
        />
      ) : (
        ""
      )}
      {showCounter === false ? <button onClick={handleClick}>Make Counter</button> : ""}
      {showCounter !== false ?<div>{num}</div>:""}
      {showCounter !== false ? (
        <button
          onClick={() => {
            parseInt(setNum(+num + 1));
          }}
        >
          +
        </button>
      ) : (
        ""
      )}
      {showCounter !== false ? (
        <button
          onClick={() => {
            parseInt(setNum(num - 1));
          }}
        >
          -
        </button>
      ) : (
        ""
      )}
      {showCounter !== false ? (
        <button
          onClick={() => {
            parseInt(setNum(num * 2));
          }}
        >
          *2
        </button>
      ) : (
        ""
      )}
      {showCounter !== false ? (
        <button
          onClick={() => {
            setShowCounter(false);
            setNum("");
          }}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Counter;
