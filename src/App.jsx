import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";
import PasswordChanger from "./components/PasswordChanger.jsx";
import Aulas from "./aulaComponents/Aulas.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/passwordChanger" element={<PasswordChanger />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/" element={<Pisos aula="1" />} />
        <Route path="/salon" element={<Salon />} />
      </Routes>
    </Router>
  );
export default App;
