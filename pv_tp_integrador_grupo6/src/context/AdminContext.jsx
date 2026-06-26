import { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <AdminContext.Provider value={{ admin, login, logout, isAuthenticated: !!admin, isLoading }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
export default AdminProvider;