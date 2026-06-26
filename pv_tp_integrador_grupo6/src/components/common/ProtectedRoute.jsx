import { Navigate } from "react-router-dom";
import { useAdmin } from "../../context/AdminContext";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAdmin();

    if (isLoading) return <div>Cargando...</div>;

    if (!isAuthenticated) return <Navigate to="/login" replace />;
   
    return children;
};
export default ProtectedRoute;