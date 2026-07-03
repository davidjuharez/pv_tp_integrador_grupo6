import { Box, Typography, Container, Grid, IconButton, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { GitHub, LinkedIn, Email, Instagram, Facebook, Twitter, Phone, LocationCity } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#03264e', py: 2, px: 3, textAlign: 'center', mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>ENLACES RÁPIDOS</Typography>
            <Stack spacing={0.5}>
              {['Inicio', 'Clientes', 'Detalles', 'Agregar Clientes', 'Sector'].map((text) => (
                <Typography key={text} component={Link} to="/" sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>{text}</Typography>
              ))}
            </Stack>
          </Grid>

            <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>CONTÁCTANOS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, color: 'rgba(255,255,255,0.7)' }}><Email fontSize="small" /> centralclients@unju.edu.ar</Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.7)' }}><Phone fontSize="small" /> +54 388 123-4567</Box>
          </Grid>
    </Grid>
      <Typography variant="caption" sx={{ color: '#90caf9' }}>Panel de Control de Clientes © {new Date().getFullYear()} — Programación Visual · Facultad de Ingeniería</Typography>
    </Container>
    </Box>
  );
};

export default Footer;