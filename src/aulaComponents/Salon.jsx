import React from "react";
import { useLocation } from "react-router-dom";
import "./Salon.css";
import DispTabla from "./DispTabla";

import Header from "../generalComponents/Header";

const Salon = () => {
  const location = useLocation();
  const { aula, piso, salon } = location.state || {};
  return (
    <>
      <Header titulo={`Salón ${aula}${piso}0${salon}`} />
      <div className="ur-salon-tabla">
        Holaaaa Estas en el salon: {aula}{piso}0{salon}
        <DispTabla></DispTabla>
      </div>
    </>
  );
};

export default Salon;
