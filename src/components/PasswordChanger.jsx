import React from "react";
import "./App.css";

const PasswordChanger = () => {
  return (
    <div className="login">
      <div className="container">
        <img
          src="https://www.uao.edu.co/wp-content/uploads/2024/01/version-color-1-1536x864.png"
          alt="uao-logo"
          className="logo-uao"
        />
        <h1 className="title">Cambio de contraseña</h1>
        <p className="subtitle">
          Escribe tu correo para poder cambiar tu contraseña correctamente
        </p>
        <form action="/" className="form">
          <label for="email" className="label">
            Correo electrónico
          </label>
          <input
            type="text"
            id="email"
            placeholder="user@uao.edu.co"
            className="input input-email"
          />
          <button
            className="subtitle"
            onClick={() => handleNavigate("/passwordChanger")}
          >
            Cambiar contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordChanger;
