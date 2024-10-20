import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Registro from './components/Registro.jsx';
import PasswordChanger from './components/PasswordChanger.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/passwordChanger" element={<PasswordChanger />} />
        
      </Routes>
    </Router>
  );
};

export default App;
