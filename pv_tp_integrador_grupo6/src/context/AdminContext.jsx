import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [clientes, setClientes] =useState([]);
    const [cargandoClientes, setCargandoClientes]= useState(true);
    const [errorClientes, setErrorClientes] =useState(null);

    useEffect(() => {
        const session = localStorage.getItem("adminSession");
        if (session) {
            setAdmin(JSON.parse(session));
        }
        setIsLoading(false);
    }, []);

    const login = (nombre, sector) => {
        const adminData = { nombre, sector };
        setAdmin(adminData);
        localStorage.setItem("adminSession", JSON.stringify(adminData));
    };

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem("adminSession");
    };
    //para remover el cliente localmente por ID
    const eliminarCliente = (idParaEliminar) => {
        //filtramos el arreglo
        setClientes((clientesPrevios) => 
            clientesPrevios.filter((cliente) => cliente.id !== Number(idParaEliminar))
        );
    };

    return (
        <AdminContext.Provider value={{ 
            admin,
            login, 
            logout,       
            isAuthenticated: !!admin,
             isLoading,
            clientes,
            setClientes,
            cargandoClientes,
            setCargandoClientes,
            errorClientes,
            setErrorClientes,
            eliminarCliente
         }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
export default AdminProvider;