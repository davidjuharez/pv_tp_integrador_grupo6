import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Alert, Typography, Button } from '@mui/material';
import { useAdmin } from '../context/AdminContext';

const DetalleCliente = ()=>{
  const { id } = useParams();
  const { admin } = useAdmin();

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

  //funcion que manejara la eliminacion
  const manejarEliminar = async () => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este cliente?");
    if (!confirmar) return;

    try {
      setLoading(true);
      
      //la petición con el metod Delete
      const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: 'DELETE' 
      });

      if (!respuesta.ok) {
        throw new Error('No se pudo eliminar el cliente en el servidor');
      }

      const datos = await respuesta.json();
      
      //mensaje de exito
      alert(`¡Cliente eliminado con éxito! Datos del usuario borrado: ${datos.username}`);
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
    <Box className="contenedor-detalle">
      <Typography variant="h4" component="h1" className="titulo-seccion">
        Ficha de Cliente N°: {id}
      </Typography>
      
      {/*seccion de los datos personales*/}
      <Typography variant="body1" className="info-cliente">
        <strong>Nombre completo:</strong> {cliente.name.firstname} {cliente.name.lastname}
      </Typography>
      <Typography variant="body1" className="info-cliente">
        <strong>Email:</strong> {cliente.email}
      </Typography>
      <Typography variant="body1" className="info-cliente">
        <strong>Teléfono:</strong> {cliente.phone}
      </Typography>

      {/*datos de la direccion*/}
      <Typography variant="h6" component="h2" className="subtitulo-seccion">
        Dirección Completa
      </Typography>
      <Typography variant="body1" className="info-cliente">
        <strong>Calle:</strong> {cliente.address.street}
      </Typography>
      <Typography variant="body1" className="info-cliente">
        <strong>Número:</strong> {cliente.address.number}
      </Typography>
      <Typography variant="body1" className="info-cliente">
        <strong>Código Postal:</strong> {cliente.address.zipcode}
      </Typography>
      <Typography variant="body1" className="info-cliente">
        <strong>Ciudad:</strong> {cliente.address.city}
      </Typography>

      {/*las credenciales de acceso*/}
      <Typography variant="h6" component="h2" className="subtitulo-seccion">
        Credenciales de Acceso
      </Typography>
      <Typography variant="body1" className="info-cliente">
        <strong>Usuario:</strong> {cliente.username}
      </Typography>
      <Typography variant="body1" className="info-cliente">
        <strong>Contraseña:</strong> {cliente.password}
      </Typography>

      {/*la condicion dependiendo el rol, para gerencia se habilita el boton rojo para eliminar cliente*/}
      {admin.sector === 'Gerencia' && (
        <Button 
          variant="contained" 
          color="error" 
          className="boton-eliminar"
          onClick={manejarEliminar}//al hacer clic se ejecuta la funcion para eliminado
        >
        Eliminar Cliente de la Base de Datos
        </Button>
      )}
    </Box>
  );
};

export default DetalleCliente;