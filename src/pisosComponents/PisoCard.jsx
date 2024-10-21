import React from "react";
import { useState } from "react";
import AulaButton from "./AulaButton";
import "./PisoCard.css";

const PisoCard = ({ aula, imgUrl, piso, initialState = "default" }) => {
  const [state, setState] = useState(initialState);

  //Manejaremos el estado de la card mediante su clase
  const divClassName =
    state === "default"
      ? "ur-pisoCard"
      : state === "hover"
      ? "ur-pisoCard hover"
      : "ur-pisoCard open";

  const aulaButtonClassName =
    state === "open"
      ? "ur-pisoCard-buttonList visible"
      : "ur-pisoCard-buttonList";

  //Cuando el mouse entre, se oscurece
  const handleMouseEnter = () => {
    setState("hover");
  };

  //Cuando el mouse salga, este siempre volvera al estado inicial
  const handleMouseLeave = () => {
    setState("default");
  };

  //Al dar click, se abre el div
  const handleClick = () => {
    state === "open" ? setState("hover") : setState("open");
  };
  return (
    <>
      <div
        className={divClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img className="ur-pisoCard-img" src={imgUrl} alt="Imagen Aula" />
        <span className="ur-pisoCard-title"> Piso {piso}</span>
        <div className = {aulaButtonClassName}>
          <AulaButton aula={aula} piso={piso} salon="1" />
          <AulaButton aula={aula} piso={piso} salon="2" />
          <AulaButton aula={aula} piso={piso} salon="3" />
          <AulaButton aula={aula} piso={piso} salon="4" />
          <AulaButton aula={aula} piso={piso} salon="5" />
          <AulaButton aula={aula} piso={piso} salon="6" />
        </div>
      </div>
    </>
  );
};

export default PisoCard;
