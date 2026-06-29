import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Alert, Grid, Card, CardContent, Typography ,TextField , Button, CardActions, Dialog} from '@mui/material';
import '../styles/listaClientes.css';
import FormularioCliente from '../components/common/FormularioCliente';


const ListaClientes = () => {

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const navigate = useNavigate();
  



  useEffect(()=>{
    const obtenerClientes = async () => {
      try {

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

      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        
        <Button 
          variant="contained" 
          color={mostrarFormulario ? "error" : "success"}
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario ? "Cancelar Alta" : "Agregar Nuevo Cliente"}
        </Button>

        {/* ESTE ES EL NUEVO BOTÓN */}
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={() => navigate(-1)} 
        >
          Volver Atrás
        </Button>

      </Box>
      {/*{mostrarFormulario && <FormularioCliente />}condicion para saber si mostrar o no el formulario alta*/}
      <Dialog open={mostrarFormulario} onClose={() => setMostrarFormulario(false)}>
        <FormularioCliente />
      </Dialog>

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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={cliente.id}>
            <Card className="tarjeta-cliente" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <CardContent>
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
              <CardActions sx={{ p: 2, pt: 0 }}>
              <Button
                component={Link}
                to={`/clientes/${cliente.id}`}
                variant="outlined"
                color="primary"
                fullWidth
                className="boton-ver-ficha"
              >
                Ver Ficha Completa
              </Button>
            </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListaClientes;