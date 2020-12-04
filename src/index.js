import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./styles/index.css"
import Home from "./componentes/home"
import Nosotros from "./componentes/sobre nosotros"
import Tutorial from "./componentes/temas"
import Curso from "./componentes/cursos"
import Fundadores from "./componentes/fundadores"
import Registrarse from "./componentes/registro"
import Footer from "./componentes/final"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home />
    <Nosotros />
    <Tutorial />
    <Curso />
    <Fundadores />
    <Registrarse />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();