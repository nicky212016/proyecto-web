import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";
import PasswordChanger from "./components/PasswordChanger.jsx";
import Aulas from "./aulaComponents/Aulas.jsx";
import Pisos from "./pisosComponents/Pisos";
import Salon from "./salonComponents/Salon";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ReservesProvider } from "./context/ReservesContext.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

const App = () => {
  return (
    <AuthProvider>
      <ReservesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/passwordChanger" element={<PasswordChanger />} />
            <Route element={<ProtectedRoute />}>
              {/* protege el acceso si no se está logueado */}
              <Route path="/aulas" element={<Aulas />} />
              <Route path="/pisos" element={<Pisos />} />
              <Route path="/salon" element={<Salon />} />
            </Route>
          </Routes>
        </Router>
      </ReservesProvider>
    </AuthProvider>
  );
};
export default App;
