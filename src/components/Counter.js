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
const Display = styled.span`
    display: block;
    font-size: 3em;
`

const Button = styled.button`
    padding: 20px;
    font-size: 2em;
    border-radius: 5px;
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
      <Display>{ value }</Display>
      <br></br>
      <Button onClick={minusOne}>-1</Button>
      <Button onClick={plusOne}>+1</Button>
    </Main>
  );
}

export default Counter;