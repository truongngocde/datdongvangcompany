// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../configs/routerConfig'; // Import ROUTES từ file routes

function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('token'); // Kiểm tra token
  return isAuthenticated ? children : <Navigate to={ROUTES.ADMIN_LOGIN} replace />;
}

export default ProtectedRoute;