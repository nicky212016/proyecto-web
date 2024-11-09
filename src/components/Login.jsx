import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

import "./App.css";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
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
    const { email, password } = data;
    login(email, password);
  });

  return (
    <div>
      <div className="barra-roja"></div>
      <div className="todo">
        <div className="layout"></div>
        <div className="login">
          <div className="container">
            <img
              src="https://www.uao.edu.co/wp-content/uploads/2024/01/version-color-1-1536x864.png"
              alt="uao-logo"
              className="logo-uao"
            />
            <h1 className="title">Ingresa tus credenciales</h1>
            <Form className="form" onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo institucional</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-danger">Email is required</p>
                )}
              </Form.Group>

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
                Iniciar sesión
              </button>
            </Form>
            <button
              className="primary-button2 login-button"
              onClick={() => handleNavigate("/registro")}
            >
              Registrarse
            </button>
            <button
              className="subtitle"
              onClick={() => handleNavigate("/passwordChanger")}
            >
              Cambiar Contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
