import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useReserves } from "../context/ReservesContext";

const ModalRes = ({ show, handleClose, room }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createReserve } = useReserves();

  const availableHours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const onSubmit = handleSubmit((data) => {
    createReserve({ ...data, room });
    handleClose();
  });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reservar Salón</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("studentCode", { required: true })}
            placeholder="Código Estudiante"
          />
          {errors.studentCode && <span>Este campo es requerido</span>}

          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="Teléfono"
          />
          {errors.phone && <span>Este campo es requerido</span>}

          <label>Fecha</label>
          <input type="date" {...register("date", { required: true })} />
          {errors.date && <span>Este campo es requerido</span>}

          <label>Hora de Inicio</label>
          <select {...register("start", { required: true })}>
            {availableHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          {errors.start && <span>Este campo es requerido</span>}

          <label>Hora de Fin</label>
          <select {...register("end", { required: true })}>
            {availableHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          {errors.end && <span>Este campo es requerido</span>}

          <input
            type="text"
            {...register("reason", { required: true })}
            placeholder="Motivo"
          />
          {errors.reason && <span>Este campo es requerido</span>}

          <Button variant="primary" type="submit">
            Reservar
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalRes;
