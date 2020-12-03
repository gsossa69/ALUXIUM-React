import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./styles/index.css"
import Home from "./componentes/home"
import Nosotros from "./componentes/sobre nosotros"
import Tutorial from "./componentes/temas"
import Curso from "./componentes/cursos"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
    <Nosotros />
    <Tutorial />
    <Curso />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();