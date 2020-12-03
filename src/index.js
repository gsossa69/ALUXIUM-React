import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./styles/index.css"
import Home from "./componentes/home"
import Nosotros from "./componentes/sobre nosotros"
import Temas from "./componentes/temas"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
    <Nosotros />
    <Temas />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();