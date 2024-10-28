import React from "react";
import { useState } from "react";
import "./AulaButton.css";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const AulaButton = ({aula,piso,salon}) => {
  const [state, SetState] = useState(false);
  const buttonClassName = state
    ? "ur-aulaButton-button active"
    : "ur-aulaButton-button";
  const handleMouseEnter = () => {
    SetState(true);
  };
  const handleMouseLeave = () => {
    SetState(false);
  };
  return (
    <div className="ur-aulaButton">
      <div className="ur-aulaButton-code">{aula}{piso}0{salon}</div>
      <div
        className={buttonClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/salon" state={{aula:aula,piso:piso,salon:salon}}>Ver Disponibilidad</Link>
        
      </div>
    </div>
  );
};

export default AulaButton;
