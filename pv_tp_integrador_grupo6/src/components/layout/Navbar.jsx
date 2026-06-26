import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Box component="nav" sx={{ bgcolor: '#cacde7', display: 'flex', flexDirection: 'row', px: 2, py: 0.5, gap: 2 }}>
      <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/clientes" style={{ color: 'black', textDecoration: 'none' }}>Clientes</Link>
      {/*<Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>*/}
    </Box>
  );
};

export default Nav;