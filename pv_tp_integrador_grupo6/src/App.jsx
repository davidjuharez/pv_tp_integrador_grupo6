import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from  './components/layout/Layout';
import Dashboard from "./views/Dashboard";
import ListaClientes from "./views/ListaClientes";
import Login from "./views/Login";
import ProtectedRoute from "./components/common/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      {/* Debes agregar el componente <Routes> aquí */}
      <Routes>
  {/* Ruta pública */}
  <Route path="/login" element={<Login />} />

  {/* Rutas protegidas */}
  <Route 
    path="/" 
    element={
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    }
  >
    {/* Estas rutas hijas se renderizarán dentro del Outlet de Layout */}
    <Route index element={<Dashboard />} />
    <Route path="clientes" element={<ListaClientes />} />
  </Route>
</Routes>
    </BrowserRouter>
  );
};

export default App;