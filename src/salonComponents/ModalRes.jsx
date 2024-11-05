import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

const ModalRes = ({ show, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Reservar</Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <h4>Nombres</h4>
            <input type="text" {...register("nombres", { required: true })} />
            {errors.nombres && (
              <p className="text-danger">Este campo es requerido</p>
            )}

            <h4>Apellidos</h4>
            <input type="text" {...register("apellidos", { required: true })} />
            {errors.apellidos && (
              <p className="text-danger">Este campo es requerido</p>
            )}

            <h4>Código</h4>
            <input type="text" {...register("codigo", { required: true })} />
            {errors.codigo && (
              <p className="text-danger">Este campo es requerido</p>
            )}

            <h4>Teléfono</h4>
            <input type="text" {...register("telefono", { required: true })} />
            {errors.telefono && (
              <p className="text-danger">Este campo es requerido</p>
            )}

            <h4>Hora de inicio</h4>
            <input
              type="text"
              {...register("horaInicio", { required: true })}
            />
            {errors.horaInicio && (
              <p className="text-danger">Este campo es requerido</p>
            )}

            <h4>Hora de finalización</h4>
            <input type="text" {...register("horaFin", { required: true })} />
            {errors.horaFin && (
              <p className="text-danger">Este campo es requerido</p>
            )}

            <h4>Motivo</h4>
            <input type="text" {...register("motivo", { required: true })} />
            {errors.motivo && (
              <p className="text-danger">Este campo es requerido</p>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary">
            Reservar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRes;
