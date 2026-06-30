import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// 1. Agregamos IconButton a las importaciones de Material-UI
import { Box, CircularProgress, Alert, Typography, Button, Card, CardContent, IconButton } from '@mui/material';
// 2. Importamos el ícono de la cruz
import CloseIcon from '@mui/icons-material/Close';
import { useAdmin } from '../context/AdminContext';

const DetalleCliente = ()=>{
  const { id } = useParams();

  const { admin, eliminarCliente } = useAdmin();

  const navigate = useNavigate();

  const [cliente, setCliente]= useState(null);
  const [loading, setLoading] =useState(true);
  const [error, setError] =useState(null);

  useEffect(() =>{
    const obtenerCliente= async () => {
      try {
        setLoading(true);
        const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`);
        
        if (!respuesta.ok) {
          throw new Error('No se pudo obtener el detalle del cliente');
        }

        const datos = await respuesta.json();
        setCliente(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerCliente();
  }, [id]);

  const manejarEliminar = async () => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este cliente?");
    if (!confirmar) return;

    try {
      setLoading(true);
      const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: 'DELETE' 
      });

      if (!respuesta.ok) {
        throw new Error('No se pudo eliminar el cliente en el servidor');
      }

      const datos = await respuesta.json();
      alert(`¡Cliente eliminado con éxito! Datos del usuario borrado: ${datos.username}`);

      eliminarCliente(id);
      navigate('/clientes')
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4, width: '100%' }}>
      
      <Card 
        sx={{ 
          maxWidth: 600, 
          width: '100%', 
          borderRadius: 4, 
          border: '1px solid #90caf9', 
          boxShadow: '0px 10px 30px rgba(3, 38, 78, 0.25)',
          p: 2,
          position: 'relative' // IMPORTANTE: Esto permite ubicar la cruz libremente adentro de la tarjeta
        }}
      >
        
        {/* 3. ACÁ ESTÁ EL BOTÓN DE LA CRUZ ROJA */}
        <IconButton
          onClick={() => navigate(-1)} // La misma función que usamos para volver atrás
          sx={{
            position: 'absolute',
            top: 8, // Lo empuja un poquito desde arriba
            right: 8, // Lo empuja un poquito desde la derecha
            color: 'error.main', // Color rojo
            '&:hover': {
              bgcolor: 'error.light', // Se pone un rojo clarito de fondo si pasás el mouse
              color: 'white'
            }
          }}
        >
          <CloseIcon />
        </IconButton>

        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mt: 2 }}>
          
          <Typography variant="h4" component="h1" color="primary" sx={{ mb: 4, fontWeight: 'bold' }}>
            Ficha de Cliente N°: {id}
          </Typography>
          
          <Box sx={{ mb: 3, width: '100%' }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Nombre completo:</strong> {cliente.name.firstname} {cliente.name.lastname}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Email:</strong> {cliente.email}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Teléfono:</strong> {cliente.phone}
            </Typography>
          </Box>

          <Box sx={{ mb: 3, width: '100%', bgcolor: '#f5f7fa', p: 2, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" color="primary" sx={{ mb: 2 }}>
              Dirección Completa
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Calle:</strong> {cliente.address.street} <strong>N°:</strong> {cliente.address.number}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Código Postal:</strong> {cliente.address.zipcode}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Ciudad:</strong> {cliente.address.city}
            </Typography>
          </Box>

          <Box sx={{ mb: 4, width: '100%' }}>
            <Typography variant="h6" component="h2" color="primary" sx={{ mb: 2 }}>
              Credenciales de Acceso
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Usuario:</strong> {cliente.username}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Contraseña:</strong> {cliente.password}
            </Typography>
          </Box>

          {admin.sector === 'Gerencia' && (
            <Button 
              variant="contained" 
              color="error" 
              size="large"
              sx={{ mt: 2, borderRadius: 2, px: 4 }}
              className="boton-eliminar"
              onClick={manejarEliminar}
            >
            Eliminar Cliente de la Base de Datos
            </Button>
          )}

        </CardContent>
      </Card>
      
    </Box>
  );
};

export default DetalleCliente;