import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { useReserves } from "../context/ReservesContext";

const ModalRes = ({ show, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createReserve } = useReserves();

  const onSubmit = handleSubmit((data) => {
    createReserve(data);
    handleClose();
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Reservar</Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <h4>Salon</h4>
            <input
              type="text"
              {...register("room", { required: true })}
              placeholder="room"
            />
            {errors.room && <span>This field is required</span>}
            <h4>Codigo del estudiante</h4>
            <input
              type="text"
              {...register("studentCode", { required: true })}
              placeholder="studentCode"
            />
            {errors.studentCode && <span>This field is required</span>}
            <h4>Telofono</h4>
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="phone"
            />
            {errors.phone && <span>This field is required</span>}
            <h4>Fecha de inicio</h4>
            <input
              type="text"
              {...register("start", { required: true })}
              placeholder="start"
            />
            {errors.start && <span>This field is required</span>}
            <h4>Fecha de fin</h4>
            <input
              type="text"
              {...register("end", { required: true })}
              placeholder="end"
            />
            {errors.end && <span>This field is required</span>}
            <h4>Razón</h4>
            <input
              type="text"
              {...register("reason", { required: true })}
              placeholder="reason"
            />
            {errors.reason && <span>This field is required</span>}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="primary">
                Reservar
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalRes;
