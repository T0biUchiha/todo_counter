import React, { useState } from 'react'

const CounterTask = ({num,showCounter}) => {
    const [count,setCount] =useState(num);
  return (
    <>
      <h3 style={count%2===0?{color:'red'}:{color:'green'}}>{count}</h3>
        <button onClick={()=>{setCount(+count+1)}}>Increase</button>
        <button onClick={()=>{setCount(+count-1)}}>Decrease</button>
        <button onClick={()=>{setCount(+count*2)}}>2 times</button>
    </>
  )
}

export default CounterTask
