import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './partials/Menu'

ReactDOM.render(
  <>
    <Menu >
      <App />
    </Menu>
  </>,
  document.getElementById('root')
);