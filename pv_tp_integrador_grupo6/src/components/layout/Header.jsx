import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAdmin } from '../../context/AdminContext';
import logo from '../../assets/logo.png';


const Header = () => {
    const { admin, logout } = useAdmin();

    return (
        <AppBar position="static" sx={{ bgcolor: '#03264e', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 1.5 }}>
                    <img src={logo} alt="Logo" style={{ height: '70px', width: 'auto' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.8px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.3rem' }}>
                        Central de Clientes
                    </Typography>
                </Box>
                {admin && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2">{admin.nombre} ({admin.sector})</Typography>
                        <Button color="inherit" onClick={logout}>Cerrar Sesión</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;