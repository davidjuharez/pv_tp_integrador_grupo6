import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAdmin } from '../../context/AdminContext';
import logo from '../../assets/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


const Header = () => {
    const { admin, logout } = useAdmin();

    return (
        <AppBar position="static" 
            sx={{ 
                bgcolor: 'rgba(3, 38, 78, 0.4)', 
                backdropFilter: 'blur(8px)',     
                boxShadow: 'none', 
                border: 'none !important' 
            }}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 1.5 }}>
                    
                    <Box 
                        component={Link} 
                        to="/" 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.03)', 
                                filter: 'drop-shadow(0 0 3px rgba(0, 229, 255, 1)) drop-shadow(0 0 8px rgba(0, 229, 255, 0.4))'
                            }
                        }}>
                        <img src={logo} alt="Logo" style={{ height: '70px', width: 'auto' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.8px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.3rem' }}>
                        Central de Clientes
                    </Typography>
                </Box>

                {admin && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>
                            {admin.nombre} <span style={{ color: '#fff', fontWeight: 'bold' }}>| {admin.sector}</span>
                        </Typography>
                        <Button color="inherit" onClick={logout}
                        startIcon={<LogoutIcon />}
                        sx={{ textTransform: 'none', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.3)', px: 2, py: 0.5, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.5)' } }}>
                            Cerrar Sesión
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;