import { Box, Typography, Container, Grid, IconButton, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { GitHub, LinkedIn, Email, Instagram, Facebook, Twitter, Phone, LocationCity } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'rgba(3, 38, 78, 0.4)',
backdropFilter: 'blur(8px)', py: 2, px: 3, textAlign: 'center', mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>ENLACES RÁPIDOS</Typography>
            <Stack spacing={0.5}>
              {[
                { text: 'Inicio', path: '/' },
                { text: 'Clientes', path: '/clientes' }
                ].map((item) => (
                <Typography 
                  key={item.text} 
                  component={Link} 
                  to={item.path} 
                  sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}
                >
                  {item.text}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>CONTÁCTANOS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, color: 'rgba(255,255,255,0.7)' }}><Email fontSize="small" /> centralclients@unju.edu.ar</Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.7)' }}><Phone fontSize="small" /> +54 388 123-4567</Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>NUESTRAS REDES</Typography>
            <Stack direction="row" spacing={1} sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
              {[
                  { Icon: GitHub, url: 'https://github.com' },
                  { Icon: LinkedIn, url: 'https://linkedin.com' },
                  { Icon: Instagram, url: 'https://instagram.com' },
                  { Icon: Facebook, url: 'https://facebook.com' },
                  { Icon: Twitter, url: 'https://twitter.com' }
                ].map((item, i) => (
                  <IconButton 
                    key={i} 
                    component="a" 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    sx={{ color: 'white', background: 'rgba(255,255,255,0.1)', '&:hover': { background: 'rgba(255,255,255,0.2)' } }}
                  >
                    <item.Icon />
                  </IconButton>
                ))}
            </Stack>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Typography variant="caption" sx={{ color: '#90caf9' }}>
          <LocationCity sx={{ verticalAlign: 'middle', mr: 1 }} />
          Panel de Control de Clientes © {new Date().getFullYear()} — Universidad Nacional de Jujuy · Facultad de Ingeniería
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;