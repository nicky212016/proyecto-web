import React from "react";
import "./DispTabla.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const DispTabla = () => {
  const [data, setData] = useState([
    { id: 1, horaInicio: "06:00", horaFin: "07:00", estado: "Sin Reservar", motivo: "" },
  ]);

  const updateTabla = ({horaInicio,horaFin,estado,motivo}) => {
    const newRow = {
      id: data.length + 1,
      horaInicio: horaInicio,
      horaFin: horaFin,
      estado: estado,
      motivo: motivo,
    };
    setData([...data, newRow]);
  };

  const celdaEstado= (estado)=>{
    return(estado === "Sin Reservar"? <Link to={"/"}>Sin Reservar</Link> : "Reservado")

  }
  const claseEstado= (estado)=>{
    return(estado === "Sin Reservar"? "ur-dispTabla-rowEstado activo" : "ur-dispTabla-rowEstado")

  }

  return (
    <div className="ur-dispTabla">
      <table className="ur-dispTabla-tabla" border="1">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Estado</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="ur-dispTabla-rowHora">{row.horaInicio} - {row.horaFin}</td>
              <td className={claseEstado(row.estado)}>{celdaEstado(row.estado)}</td>
              <td className="ur-dispTabla-rowMotivo">{row.motivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={updateTabla}>Agregar Fila</button>
    </div>
  );
};

export default DispTabla;
