import { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import '../../styles/formularioCliente.css';

const FormularioCliente =()=>{
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');

  //esta es la función pra guardar
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Listo para enviar: ${nombre} ${apellido} (${email})`);

  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="formulario-alta">
      <Typography variant="h6" className="titulo-formulario">
        Dar de Alta Nuevo Cliente
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
        <Button type="submit" variant="contained" color="primary" className="boton-guardar">
          Guardar Cliente
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioCliente;