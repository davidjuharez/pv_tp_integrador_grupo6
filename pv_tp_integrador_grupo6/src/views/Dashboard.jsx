import { Container, Typography, Grid, Paper, Box, Alert, Card, CardContent } from '@mui/material';
import { useAdmin } from '../context/AdminContext';
import PeopleIcon from '@mui/icons-material/People';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import fondoLogin from '../assets/fondoLogin.png';
import UpdateIcon from '@mui/icons-material/Update';
import graficoActividadImg from '../assets/grafico-actividad.png';
import mapaMundiImg from '../assets/mapa-mundi.png';

const Dashboard = () => {
  const { admin } = useAdmin();

  return (
    <Box sx={{ backgroundImage: `url(${fondoLogin})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', marginTop: '-24px', marginBottom: '-24px', paddingTop: '24px', paddingBottom: '24px' }}>
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
        <Card elevation={3} sx={{ mb: 6, borderRadius: 3, bgcolor: 'rgba(3, 38, 78, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.2)' }}>
          <CardContent>
            <Box sx={{ textAlign: 'left', pb: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#d6e4f0' }}>Panel de Cliente</Typography>
              <Box sx={{ my: 2, borderBottom: '2px solid rgba(255,255,255,0.15)' }} />
              <Typography variant="h6" sx={{ color: '#d6e4f0' }}>Bienvenido al panel, <strong>{admin?.nombre}</strong> | Sector: {admin?.sector}</Typography>
            </Box>
          </CardContent>
        </Card>
        {/* Tarjetas */}
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Card elevation={3} sx={{ borderRadius: 3, bgcolor: 'rgba(3, 38, 78, 0.4)', backdropFilter: 'blur(8px)', color: '#fff', height: '130px', width: '360px', border: '3px solid rgba(255, 255, 255, 0.2)' }}>
              <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <CloudQueueIcon sx={{ fontSize: 55, color: '#64b5f6', flexShrink: 0 }} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="overline" sx={{ fontWeight: 'bold', color: '#90caf9' }}>Estado del Sistema</Typography>
                  <Typography variant="h5" noWrap>Conectado: {admin?.nombre}</Typography>
                  <Typography variant="body1" sx={{ color: '#81c784', fontWeight: 'bold' }}>● ONLINE</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Card elevation={3} sx={{ borderRadius: 3, bgcolor: 'rgba(3, 38, 78, 0.4)', backdropFilter: 'blur(8px)', color: '#fff', height: '130px', width: '360px', border: '3px solid rgba(255, 255, 255, 0.2)' }}>
              <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <PeopleIcon sx={{ fontSize: 55, color: '#64b5f6', flexShrink: 0 }} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="overline" sx={{ fontWeight: 'bold', color: '#90caf9' }}>Base de Clientes</Typography>
                  <Typography variant="h5" noWrap>Total en Base de Datos</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>10 Activos</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <Card elevation={3} sx={{ borderRadius: 3, bgcolor: 'rgba(3, 38, 78, 0.4)', backdropFilter: 'blur(8px)', color: '#fff', height: '130px', width: '360px', border: '3px solid rgba(255, 255, 255, 0.2)' }}>
              <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <UpdateIcon sx={{ fontSize: 55, color: '#64b5f6', flexShrink: 0 }} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="overline" sx={{ fontWeight: 'bold', color: '#90caf9' }}>Última Actualización</Typography>
                  <Typography variant="h5" noWrap>Sincronización</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Hace 5 minutos</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3, alignItems: 'stretch' }}>
          {/* Card del Gráfico */}
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Paper sx={{ p: 2, borderRadius: 3, bgcolor: 'rgba(3, 38, 78, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.2)', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>Clientes registrados por región</Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={graficoActividadImg} alt="Gráfico de actividad" style={{ width: '100%', maxHeight: '350px', borderRadius: '8px', objectFit: 'contain' }} />
              </Box>
            </Paper>
          </Grid>
          {/* Card del Mapa */}
          <Grid item xs={12} md={6} sx={{ display: 'flex' }}>
            <Paper sx={{ p: 2, borderRadius: 3, bgcolor: 'rgba(3, 38, 78, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.2)', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ color: '#fff', mb: 2 }}>Conectividad Global Activa</Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={mapaMundiImg} alt="Mapa mundial" style={{ width: '100%', maxHeight: '350px', borderRadius: '8px', objectFit: 'contain' }} />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ mt: 4 }}>
            <Alert severity="info" sx={{ borderRadius: 3, p: 2, bgcolor: 'rgba(3, 38, 78, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.2)', color: '#ffffff', '& .MuiAlert-icon': { color: '#2196f3' } }}>
              <strong>Nota de acceso:</strong> El sector {admin?.sector} tiene permisos configurados de forma restringida.
            </Alert>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;