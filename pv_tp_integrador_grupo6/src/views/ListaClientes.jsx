import { useState, useEffect } from 'react';
import { Box, CircularProgress, Alert } from '@mui/material';
import '../styles/listaClientes.css';

const ListaClientes = () => {

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const obtenerClientes = async () => {
      try {
        setLoading(true);
        const respuesta = await fetch('https://fakestoreapi.com/users');
        
        if (!respuesta.ok) {
          throw new Error('Error al conectar con el servidor');
        }

        const datos = await respuesta.json();
        setClientes(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerClientes();
  }, []);

  if (loading) {
    return (
      <Box className="loading-container">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="error-container">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <div>
      <h1>Clientes</h1>
    </div>
  );
};

export default ListaClientes;