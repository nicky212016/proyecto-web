import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
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
            <form className="form">
              <label htmlFor="user" className="label">Usuario</label>
              <input type="text" id="email" placeholder="Usuario UAO" className="input input-email" />
              <label htmlFor="password" className="label">Contraseña</label>
              <input type="password" id="password" placeholder="********" className="input input-password" />
              <button type="submit" className="primary-button login-button">Enviar</button>
            </form>
            <button
              className="primary-button2 login-button"
              onClick={() => handleNavigate('/registro')}
            >
              Registrarse
            </button>
            <button
              className="subtitle"
              onClick={() => handleNavigate('/passwordChanger')}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
