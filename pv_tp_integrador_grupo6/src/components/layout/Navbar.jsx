import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
  const estiloLink = { 
    color: 'rgba(255, 255, 255, 0.7)', 
    textDecoration: 'none', 
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
    fontWeight: '600', 
    fontSize: '18px',
    padding: '4px 0px', 
    letterSpacing: '0.5px',
    transition: 'all 0.2s ease-in-out', 
    borderBottom: '2px solid transparent',
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
        gap: 6,         
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
       
        '& a': {
          borderBottom: '2px solid transparent', 
        },
        '& a:hover': {
        color: '#ffffff !important',
        filter: 'drop-shadow(0 0 4px rgba(0, 229, 255, 1)) drop-shadow(0 0 12px rgba(0, 229, 255, 0.6))', 
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