import React from 'react';

const Registro = () => {
  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form>
        <label htmlFor="user" className="label">Usuario</label>
        <input type="text" id="user" placeholder="Crea tu nombre de usuario" />
        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" placeholder="Tu email" />
        <label htmlFor="password" className="label">Contraseña</label>
        <input type="password" id="password" placeholder="Crea una contraseña" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;
