import React, { useState } from "react";
import CounterTask from "./CounterTask";

const Counter = () => {
  const [num, setNum] = useState("");
  const [showCounter, setShowCounter] = useState(false);
  const handleClick = () => {
    setShowCounter(true);
  };
  const handleChange = (e) => {
   setNum(e.target.value);
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
      {showCounter === false ? (
        <button onClick={handleClick}>Make Counter</button>
      ) : (
        ""
      )}
      {showCounter !== false ? <CounterTask num={num}  /> : "" }
      {showCounter !== false ? <button onClick={()=>{setNum(""); setShowCounter(false)}}>Reset</button> : "" }
    </div>
  );
};

export default Counter;
