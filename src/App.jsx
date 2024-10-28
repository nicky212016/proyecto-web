import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";
import PasswordChanger from "./components/PasswordChanger.jsx";
import Aulas from "./aulaComponents/Aulas.jsx";
import Pisos from "./pisosComponents/Pisos";
import Salon from "./salonComponents/Salon";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/passwordChanger" element={<PasswordChanger />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/pisos" element={<Pisos />} />
        <Route path="/salon" element={<Salon />} />
      </Routes>
    </Router>
  );
};
export default App;
