import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
  // 1. Creamos una variable con todos los estilos de la letra juntos
  const estiloLink = { 
    color: 'black', 
    textDecoration: 'none', 
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Estilo de la fuente
    fontWeight: '500', // Grosor de la letra 
    fontSize: '16px'   // Tamaño de la letra
  };

  return (
    <Box component="nav" sx={{ bgcolor: '#cacde7', display: 'flex', flexDirection: 'row', px: 2, py: 0.5, gap: 2 }}>
      
      {/* 2. Cambiamos "Dashboard" por "Inicio" y le pasamos la variable estiloLink */}
      <Link to="/" style={estiloLink}>Inicio</Link>
      
      {/* 3. Hacemos lo mismo con el link de "Clientes" */}
      <Link to="/clientes" style={estiloLink}>Clientes</Link>
      
     
      
    </Box>
  );
};

export default Nav;