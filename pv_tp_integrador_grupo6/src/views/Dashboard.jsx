import { Container, Typography, Grid, Paper, Box, Alert, Card, CardContent } from '@mui/material';
import { useAdmin } from '../context/AdminContext';
import PeopleIcon from '@mui/icons-material/People';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import fondoLogin from '../assets/fondoLogin.png';

const Dashboard = () => {
  const { admin } = useAdmin();

  return (
    <Box sx={{ backgroundImage: `url(${fondoLogin})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', marginTop: '-24px', marginBottom: '-24px', paddingTop: '24px', paddingBottom: '24px' }}>
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>

        <Box sx={{ mb: 6, textAlign: 'left', borderBottom: '2px solid #e0e0e0', pb: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: '#1a237e' }}>
            Panel de Cliente
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Bienvenido al panel, <strong>{admin?.nombre}</strong> | Sector: {admin?.sector}
          </Typography>
        </Box>

        {/* 2. Tarjetas con separación y elevación */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 3, borderTop: '6px solid #1976d2', height: '100%' }}>
              <CardContent sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                <CloudQueueIcon sx={{ fontSize: 60, color: '#1976d2' }} />
                <Box>
                  <Typography variant="overline" sx={{ fontWeight: 'bold' }}>Estado del Sistema</Typography>
                  <Typography variant="h5">Conectado: {admin?.nombre}</Typography>
                  <Typography variant="body1" sx={{ color: 'success.main', fontWeight: 'bold' }}>● ONLINE</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 3, borderTop: '6px solid #2e7d32', height: '100%' }}>
              <CardContent sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
                <PeopleIcon sx={{ fontSize: 60, color: '#2e7d32' }} />
                <Box>
                  <Typography variant="overline" sx={{ fontWeight: 'bold' }}>Base de Clientes</Typography>
                  <Typography variant="h5">Total en Base de Datos</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold' }}>10 Activos</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* 3. Aviso inferior */}
        <Alert severity="info" sx={{ mt: 6, borderRadius: 2, p: 2 }}>
          <strong>Nota de acceso:</strong> El sector {admin?.sector} tiene permisos configurados de forma restringida.
        </Alert>
      </Container>
    </Box>
  );
};

export default Dashboard;