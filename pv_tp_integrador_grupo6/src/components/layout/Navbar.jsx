import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
  // 1. Creamos una variable con todos los estilos de la letra juntos
  const estiloLink = { 
    color: 'rgba(255, 255, 255, 0.75)', 
    textDecoration: 'none', 
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
    fontWeight: '500', 
    fontSize: '15px',
    padding: '8px 20px',               
    borderRadius: '8px',              
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',      
  };

  return (
    <Box component="nav" sx={{ 
    bgcolor: 'rgba(3, 38, 78, 0.4)', 
        backdropFilter: 'blur(8px)',     
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        px: 2, 
        py: 1, 
        gap: 3,         
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
       
        '& a:hover': {
          color: '#ffffff !important',
          bgcolor: 'rgba(255, 255, 255, 0.1)', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }
  }}>
      
      {/* 2. Cambiamos "Dashboard" por "Inicio" y le pasamos la variable estiloLink */}
      <Link to="/" style={estiloLink}>Inicio</Link>
      
      {/* 3. Hacemos lo mismo con el link de "Clientes" */}
      <Link to="/clientes" style={estiloLink}>Clientes</Link>
      
     
      
    </Box>
  );
};

export default Nav;