import React from 'react';
import ReactDOM from 'react-dom';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #53a0d0;
    font-family: 'Roboto', sans-serif;
  }
`;

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
