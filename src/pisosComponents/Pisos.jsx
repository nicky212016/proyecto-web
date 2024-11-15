import React from "react";
import PisoCard from "./PisoCard";
import { useLocation } from "react-router-dom";
import Header from "../generalComponents/Header";
import "./Pisos.css";

const Pisos = () => {
  const location = useLocation();
  const { aula } = location.state || {};
  return (
    <>
      <Header titulo={"Pisos"} />
      <div className="ur-Pisos-list">
        <PisoCard
          aula={aula}
          imgUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
          }
          piso={"1"}
        />
        <PisoCard
          aula={aula}
          imgUrl={
            "https://i.pinimg.com/222x/74/bb/34/74bb340ffe87e31837a04a538f1bbc10.jpg"
          }
          piso={"2"}
        />
        <PisoCard
          aula={aula}
          imgUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbZb7nphMjqeMhPRZT3L8xlYF8D0DD0v9Yw&s"
          }
          piso={"3"}
        />
        <PisoCard
          aula={aula}
          imgUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbZb7nphMjqeMhPRZT3L8xlYF8D0DD0v9Yw&s"
          }
          piso={"4"}
        />
      </div>
    </>
  );
};

export default Pisos;
