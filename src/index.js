import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import styles from "./styles/index.css"
import home from "./componentes/home"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <home />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();