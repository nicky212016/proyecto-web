// components/Aulas.jsx
import React from "react";

const Aulas = () => {
  return (
    <>
      <div className="barra-roja">
        <h1 className="aulas-title">Aulas</h1>
      </div>
      <div className="container-aulas">
        <div className="column left-column">
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

        </div>  
      </div>
    </>
  );
};

export default Aulas;
