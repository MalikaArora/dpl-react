import React, { useState } from "react";
import './Counter.css';
function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div className='Counter'>
      <div>
        <button className='CounterDecrement' onClick={handleDecrement}>-</button>
        <h5 className='CounterValue'>{count}</h5>
        <button className='CounterIncrement' onClick={handleIncrement}>+</button>
      </div>
      <button className='CounterReset' onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;