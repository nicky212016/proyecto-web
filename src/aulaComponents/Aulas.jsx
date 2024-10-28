// components/Aulas.jsx
import React from "react";
import "./Aulas.css";
import AulaCard from "./AulaCard";

const Aulas = () => {
  return (
    <>
      <div className="barra-roja">
        <h1 className="aulas-title">Aulas</h1>
      </div>
      <div className="ur-Aulas">
        <AulaCard aula={'1'} imgUrl={'https://media.cnn.com/api/v1/images/stellar/prod/cnne-1479579-las-declaraciones-de-maduro-tras-firmar-el-acuerdo-de-barbados.jpg?c=original'}/>
        <AulaCard aula={'2'} imgUrl={'https://steamuserimages-a.akamaihd.net/ugc/2504639238669974091/72E61C5E512E39DF5B4D3156594F9D22D75A291A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'}/>
        <AulaCard aula={'3'} imgUrl={'https://w7.pngwing.com/pngs/134/113/png-transparent-tyler-joseph-twenty-%C3%98ne-pil%C3%98ts-singer-others-face-head-musician-thumbnail.png'}/>
        <AulaCard aula={'4'} imgUrl={'https://www.illuminidol.com/cdn/shop/products/Josh_Dun_Illuminidol_Celebrity_Prayer_Candle.jpg?v=1540321176&width=1445'}/>
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
