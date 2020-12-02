import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import cursos from "./componentes/cursos/cursos"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <cursos />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();