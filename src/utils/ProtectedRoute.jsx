import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  if (isAuthenticated) {
    if (window.location.pathname.startsWith("/")) {
      return <Outlet />;
    } else {
      return <Navigate to="/aulas" replace />;
    }
  }

  return <Navigate to="/aulas" replace />;
}

export default ProtectedRoute;
