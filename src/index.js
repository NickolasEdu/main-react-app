import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Styled from 'styled-components'

const Main = Styled.div`
  padding: 0;
  margin: 0;
`

ReactDOM.render(
  <Main>
    <App />
  </Main>,
  document.getElementById('root')
);