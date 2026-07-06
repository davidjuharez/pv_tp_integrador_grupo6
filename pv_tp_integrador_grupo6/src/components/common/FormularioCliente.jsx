import { useAdmin } from '../../context/AdminContext';
import { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../../styles/formularioCliente.css';

const FormularioCliente =({ onClienteAgregado, onClose })=>{
  const {clientes }=useAdmin();//para traer los clientes globales
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');

  const [calle, setCalle] = useState('');
  const [numero, setNumero] = useState('');

  //estados para la notificación flotante de exito
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');

  //esta es la función que maneja el envio del formulario
  const handleSubmit = async (e) => {
  e.preventDefault();

  //estructura para la validacion correcta del correo
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //si el correo no coincide con el molde, mostrá la alerta y frená el envío con el return
  if (!regexEmail.test(email)) {
    alert('Por favor, ingresá un correo electrónico válido (ejemplo: usuario@correo.com)');
    return;
  }

    //la estructura del objeto segun fakeAPI
    const nuevoCliente = {
      email: email,
      username: nombre.toLowerCase(),
      password: 'password123',
      name: {
        firstname: nombre,
        lastname: apellido
      },
      address: {
        city: ciudad,
        street: calle,
        number: Number(numero),
        zipcode: '5500',
        geolocation: { lat: '-34.6037', long: '-58.3816' }
      },
      phone: telefono
    };
    try {
      //esta es la petición POST
      const respuesta = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoCliente)
      });

      if (!respuesta.ok) {
        throw new Error('Error al registrar el cliente en el servidor');
      }

      const datos = await respuesta.json();

      //calculamos un ID único basado en el mas alto de la lista actual
      //si no hay clientes arranca en 1. Si hay busca el máximo id y le suma 1.
      const idUnicoLocal = clientes.length > 0 
        ? Math.max(...clientes.map(c => Number(c.id))) + 1 
        : 1;

      setMensajeExito(`¡Cliente creado con éxito!`);
      setOpenSnackbar(true);
      //aqui usamos el idUnicoLocal en lugar de datos.id para que no se pise con los de la API
      const clienteConId = { ...nuevoCliente, id: idUnicoLocal };
      onClienteAgregado(clienteConId);

      setNombre('');//limpiamos los campos del formulario
      setApellido('');
      setEmail('');
      setTelefono('');
      setCiudad('');
      setCalle('');
      setNumero('');
      setTimeout(()=>{//tiempo para que se vea el mensaje por pantalla antes de rederigir
        onClose();
      },1500);
      
    } catch (error) {
      alert('Hubo un error: ' + error.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="formulario-alta">
      <Typography variant="h6" className="titulo-formulario">
        Alta Nuevo Cliente
      </Typography>
      
      <Box className="campos-formulario">
        <Box className="fila-formulario">
          <TextField
            label="Nombre"
            variant="outlined"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            required
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Box>
        <Box className="fila-formulario">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Teléfono"
            variant="outlined"
            type="number"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Box>
        <Box className="fila-formulario">
          <TextField
            label="Calle"
            variant="outlined"
            required
            value={calle}
            onChange={(e) => setCalle(e.target.value)}
          />

          <TextField
            label="Número"
            variant="outlined"
            type="number"
            required
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </Box>

        <FormControl fullWidth variant="outlined" required sx={{ '& .MuiInputLabel-root': { color: 'white' }, '& .MuiOutlinedInput-root': { color: 'white', '& .MuiSvgIcon-root': { color: 'white' } } }}>
          <InputLabel id="select-ciudad-label">Ciudad</InputLabel>
          <Select
            labelId="select-ciudad-label"
            id="select-ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            label="Ciudad"
          >
            <MenuItem value="Mendoza">Mendoza</MenuItem>
            <MenuItem value="Buenos Aires">Buenos Aires</MenuItem>
            <MenuItem value="Córdoba">Córdoba</MenuItem>
            <MenuItem value="Salta">Salta</MenuItem>
            <MenuItem value="Jujuy">Jujuy</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" className="boton-guardar">
          Guardar Cliente
        </Button>
      </Box>
        {/*un cartelito flotante que va aparecer abajo y se va solo*/}
        <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled" onClose={() => setOpenSnackbar(false)}>
          {mensajeExito}
        </Alert>
      </Snackbar>        

    </Box>
  );
};

export default FormularioCliente;