import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from  './components/layout/Layout';
import Dashboard from "./views/Dashboard";
import ListaClientes from "./views/ListaClientes";
import Login from "./views/Login";
import ProtectedRoute from "./components/common/ProtectedRoute";
import DetalleClientes from "./views/DetalleClientes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*para ruta pública*/}
        <Route path="/login" element={<Login />} />

        {/*ruta protegida*/}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="clientes" element={<ListaClientes />} />
          {/*ruta dinamica con el parametro de id*/}
          <Route path="clientes/:id" element={<DetalleClientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;