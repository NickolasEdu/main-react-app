import React, { useState } from 'react'

import './Counter.css'

function Counter() {
  
  const [ value, setValue] = useState(0)

  function minusOne() {
    setValue(value - 1)
  }

  function plusOne() {
    setValue(value + 1)
  }

  return (
    <div className='counter'>
      <span>{ value }</span>
      <br></br>
      <button onClick={minusOne}>-1</button>
      <button onClick={plusOne}>+1</button>
    </div>
  );
}

export default Counter;