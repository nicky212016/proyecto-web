import React from "react";

const Registro = () => {
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
        <form action="/" className="form">
          <label for="name" className="label">
            Nombre
          </label>
          <input
            type="text"
            ide="name"
            placeholder="Nombre"
            className="input input-name"
          ></input>

          <label for="last name" className="label">
            Apellidos
          </label>
          <input
            type="text"
            id="last-name"
            placeholder="Apellidos"
            className="input input-lastname"
          ></input>

          <label for="last name" className="label">
            Correo institucional
          </label>
          <input
            type="text"
            id="email"
            placeholder="user@uao.edu.co"
            className="input input-email"
          ></input>

          <label for="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="input input-password"
          ></input>

          <button
            onClick={() => handleNavigate("/")}
            className="primary-button login-button"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
