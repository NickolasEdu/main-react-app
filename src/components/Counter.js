import React, { useState } from 'react'
import styled from 'styled-components'

const Main = styled.counter`
    width: 300px;
    margin: 0 auto;
    background-color: #000000;
    color: #FFFF;
    text-align: center;
    padding: 50px;
    border-radius: 3%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri;
`



function Counter() {
  
  const [ value, setValue] = useState(0)

  function minusOne() {
    setValue(value - 1)
  }

  function plusOne() {
    setValue(value + 1)
  }

  return (
    <Main className='counter'>
      <span>{ value }</span>
      <br></br>
      <button onClick={minusOne}>-1</button>
      <button onClick={plusOne}>+1</button>
    </Main>
  );
}

export default Counter;