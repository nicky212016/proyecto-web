import React from 'react';

const PasswordChanger = () => {
  return (
    <div>
      <h1>Recuperar Contraseña</h1>
      <form>
        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" placeholder="Introduce tu email" />
        <button type="submit">Enviar enlace de recuperación</button>
      </form>
    </div>
  );
};

export default PasswordChanger;
