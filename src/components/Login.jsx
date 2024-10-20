import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNavigate = (url) => {
    navigate(url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Por favor, ingrese su usuario y contraseña.");
    } else {
      // Lógica para enviar el formulario
    }
  };

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
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="user" className="label">
                Usuario
              </label>
              <input
                type="text"
                id="email"
                placeholder="Usuario UAO"
                className="input input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="label">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="input input-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="primary-button login-button"
                onClick={() => handleNavigate("/aulas")}
              >
                Iniciar sesión
              </button>
            </form>
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
