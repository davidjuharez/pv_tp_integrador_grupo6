import { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../../styles/formularioCliente.css';

const FormularioCliente =()=>{
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');

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
        street: 'San Martín',
        number: 123,
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
      //la API nos responde con el ID
      setMensajeExito(`¡Cliente creado con éxito! ID asignado por la API: #${datos.id}`);
      setOpenSnackbar(true);
      
      setNombre('');//limpiamos los campos del formulario
      setApellido('');
      setEmail('');
      setTelefono('');
      setCiudad('');
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
        <FormControl fullWidth variant="outlined" required>
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