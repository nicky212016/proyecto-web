import React, { useEffect } from "react";
import "./DispTabla.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalRes from "./ModalRes";

import { useReserves } from "../context/ReservesContext";
import { useAuth } from "../context/AuthContext";

const DispTabla = () => {
  const [showModal, setShowModal] = useState(false);
  const { allReserves } = useReserves();
  const {isAuthenticated } = useAuth();
  const [reserves, setReserves] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await allReserves();
      setReserves(res);
    };
    fetchData();
  }, [allReserves]);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="ur-dispTabla">
        <table className="ur-dispTabla-tabla" border="1">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Salón</th>
              <th>Motivo</th>
              <th>Código Estudiante</th>
              <th>Teléfono</th>
              <th>Razón</th>
            </tr>
          </thead>
          <tbody>
            {reserves ? (
              reserves.map((reserve) => (
                <tr key={reserve.id}>
                  <td>{reserve.start + "-" + reserve.end}</td>
                  <td>{reserve.room}</td>
                  <td>{reserve.reason}</td>
                  <td>{reserve.studentCode}</td>
                  <td>{reserve.phone}</td>
                  <td>{reserve.reason}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No hay reservas</td>
              </tr>
            )}
          </tbody>
        </table>
        {isAuthenticated ? (
          <button onClick={handleShow}>Agregar Reserva</button>
        ) : null}
      </div>
      <ModalRes show={showModal} handleClose={handleClose} />
    </>
  );
};

export default DispTabla;
