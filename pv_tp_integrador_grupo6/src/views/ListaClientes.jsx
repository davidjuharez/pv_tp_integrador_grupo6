import { useState, useEffect } from 'react';
import { Box, CircularProgress, Alert, Grid, Card, CardContent, Typography,TextField } from '@mui/material';
import '../styles/listaClientes.css';

const ListaClientes = () => {

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [busqueda, setBusqueda] = useState('');//estado para la busqueda

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

  //filtro de clientes por apellido o ciudad
  const clientesFiltrados = clientes.filter((cliente) => {
    const termino = busqueda.toLowerCase();
    const apellido = cliente.name.lastname.toLowerCase();
    const ciudad = cliente.address.city.toLowerCase();
    
    return apellido.includes(termino) || ciudad.includes(termino);
  });

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

      <Box className="contenedor-buscador">
        <TextField
          label="Buscar por apellido o ciudad..."
          variant="outlined"
          fullWidth
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Box>


      <Grid container spacing={3}>
        {clientesFiltrados.map((cliente) => (
          <Grid item xs={12} sm={6} md={4} key={cliente.id}>
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
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListaClientes;