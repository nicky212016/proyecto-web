import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

const Registro = () => {
  const navigate = useNavigate();
  const { signUp, errors: signUpErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) 
      navigate("/aulas");
    }, [isAuthenticated]);

  const handleNavigate = (url) => {
    navigate(url);
  };

  const onSubmit = handleSubmit((data) => {
    signUp(data);
  });

  return (
    <div className="login">
      <div className="container">
        <img
          src="https://www.uao.edu.co/wp-content/uploads/2024/01/version-color-1-1536x864.png"
          alt="uao-logo"
          className="logo-uao"
        ></img>
        <h1 className="title">Ingresa tus credenciales</h1>
        <p className="subtitle">
          Escribe tus datos para completar el registro con éxito
        </p>
        <Form onSubmit={onSubmit}>
          <h4>Nombre</h4>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && (
            <p className="text-danger">Este campo es requerido</p>
          )}

          <h4>Apellido</h4>
          <input type="text" {...register("lastname", { required: true })} />
          {errors.lastname && (
            <p className="text-danger">Este campo es requerido</p>
          )}

          <h4>Correo institucional</h4>
          <input type="text" {...register("email", { required: true })} />
          {errors.email && (
            <p className="text-danger">Este campo es requerido</p>
          )}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-danger">Password is required</p>
            )}
          </Form.Group>

          <button type="submit" className="primary-button login-button">
            Registrarse
          </button>
          <p>{signUpErrors}</p>
        </Form>
      </div>
    </div>
  );
};

export default Registro;
