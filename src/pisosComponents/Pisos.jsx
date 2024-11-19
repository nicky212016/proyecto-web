import React from "react";
import PisoCard from "./PisoCard";
import { useLocation } from "react-router-dom";
import Header from "../generalComponents/Header";
import "./Pisos.css";

import Piso1Img from "../imagenes/Piso1.jpeg";
import Piso2Img from "../imagenes/Piso2.jpeg";
import Piso3Img from "../imagenes/Piso3.jpeg";
import Piso4Img from "../imagenes/Piso4.jpeg";

const Pisos = () => {
  const location = useLocation();
  const { aula } = location.state || {};
  return (
    <>
      <Header titulo={"Pisos"} />
      <div className="ur-Pisos-list">
        <PisoCard aula={aula} imgUrl={Piso1Img} piso={"1"} />
        <PisoCard aula={aula} imgUrl={Piso2Img} piso={"2"} />
        <PisoCard aula={aula} imgUrl={Piso3Img} piso={"3"} />
        <PisoCard aula={aula} imgUrl={Piso4Img} piso={"4"} />
      </div>
    </>
  );
};

export default Pisos;
