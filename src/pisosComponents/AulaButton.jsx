import React from "react";
import { useState } from "react";
import "./AulaButton.css";

const AulaButton = ({ aula,piso,salon, link }) => {
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
  const handleClick = () => {
    alert("Imagina que cambiaste de página");
  };
  return (
    <div className="ur-aulaButton">
      <div className="ur-aulaButton-code">{aula}{piso}0{salon}</div>
      <div
        className={buttonClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        Ver Disponibilidad
      </div>
    </div>
  );
};

export default AulaButton;
