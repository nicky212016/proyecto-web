import React from "react";
import "./DispTabla.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const DispTabla = () => {
  const [data, setData] = useState([
    { id: 1, hora: "06:00-07:00", estado: "Sin Reservar", motivo: "" },
  ]);

  const updateTabla = ({hora,estado,motivo}) => {
    const newRow = {
      id: data.length + 1,
      name: hora,
      estado: estado,
      motivo: motivo,
    };
    setData([...data, newRow]);
  };

  const celdaEstado = (estado)=>{
    return(estado === "Sin Reservar"? <Link to={"/"}>Sin Reservar</Link> : "Reservado")

  }

  return (
    <div className="ur-DispTabla">
      <table border="1">
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
              <td>{row.hora}</td>
              <td>{celdaEstado(row.estado)}</td>
              <td>{row.motivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={updateTabla}>Agregar Fila</button>
    </div>
  );
};

export default DispTabla;
