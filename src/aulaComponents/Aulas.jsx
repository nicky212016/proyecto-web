// components/Aulas.jsx
import React from "react";
import "./Aulas.css";
import AulaCard from "./AulaCard";
import Header from "../generalComponents/Header";
import AulaImg from '../imagenes/Aula.jpeg'

const Aulas = () => {
  return (
    <>
      <Header titulo={"Aulas"} />      
      <div className="ur-Aulas">
        <AulaCard aula={'1'} imgUrl={AulaImg}/>
        <AulaCard aula={'2'} imgUrl={AulaImg}/>
        <AulaCard aula={'3'} imgUrl={AulaImg}/>
        <AulaCard aula={'4'} imgUrl={AulaImg}/>
        {/* <div className="column left-column">
          <div className="aulas1-card">
            <div className="aulas1-card1"></div>
          </div>
          <div className="aulas2-card">
            <div className="aulas2-card1"></div>
          </div>
        </div>

        <div className="column right-column">
          <div className="aulas3-card">
            <div className="aulas3-card1"></div>
          </div>
          <div className="aulas4-card">
            <div className="aulas4-card1"></div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Aulas;
