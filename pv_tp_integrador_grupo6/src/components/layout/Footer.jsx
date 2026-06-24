import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#03264e', color: '#03264e', py: 2, px: 3, textAlign: 'center', mt: 'auto' }}>
      
      <Typography variant="caption" sx={{ color: '#90caf9' }}>Panel de Control de Clientes © {new Date().getFullYear()} — Programación Visual · Facultad de Ingeniería</Typography>
    </Box>
  );
};

export default Footer;