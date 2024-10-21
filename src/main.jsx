import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Prueba from './Prueba.jsx';

const root = createRoot(document.getElementById("root"));

root.render( //renderiza en la pontalla
  <Prueba/>
);

