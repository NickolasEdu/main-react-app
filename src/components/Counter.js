import { useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
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
  
  const [ counterValue, setCounterValue] = useState(0)

  function handleCounting(operator) {
    let newCounterValue = operator === '+'
    ? counterValue + 1
    : counterValue - 1

    setCounterValue(newCounterValue)
  }

  return (
    <Main className='counter'>
      <Display>{ counterValue }</Display>
      <br></br>
      <Button onClick={() => handleCounting('-')}>-1</Button>
      <Button onClick={() => handleCounting('+')}>+1</Button>
    </Main>
  );
}

export default Counter;