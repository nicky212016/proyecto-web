import React from "react";
import "./AulaCard.css";
import { useState } from "react";

const AulaCard = ({ aula, imgUrl }) => {
  const [state, setState] = useState("default");

  const divClassName =
    state === "default"
      ? "ur-aulaCard"
      : "ur-aulaCard hover"


  const handleMouseEnter = () => {
    setState("hover");
  };

  const handleMouseLeave = () => {
    setState("default");
  };

  const handleClick = () => {};

  return (
    <div
      className={divClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img className="ur-aulaCard-img" alt="aulas" src={imgUrl}></img>
      <span className="ur-aulaCard-title">Aulas {aula}</span>
    </div>
  );
};

export default AulaCard;
