import { useState, useEffect } from 'react';
import { Box, CircularProgress, Alert, Grid2, Card, CardContent, Typography } from '@mui/material';
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
    <Box className="contenedor-clientes">
      <Typography variant="h4" component="h1" className="titulo-seccion">
        Listado de Clientes
      </Typography>

      <Grid2 container spacing={3}>
        {clientes.map((cliente) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={cliente.id}>
            <Card className="tarjeta-cliente">
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  ID Cliente: #{cliente.id}
                </Typography>
                <Typography variant="h6" component="h2" className="nombre-cliente">
                  {cliente.name.firstname} {cliente.name.lastname}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="info-cliente">
                  <strong>Email:</strong> {cliente.email}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="info-cliente">
                  <strong>Teléfono:</strong> {cliente.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="info-cliente">
                  <strong>Ciudad:</strong> {cliente.address.city}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ListaClientes;