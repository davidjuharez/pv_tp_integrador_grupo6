import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAdmin } from '../../context/AdminContext';

const Header = () => {
  const { admin, logout } = useAdmin();

    return (
        <AppBar position="static" sx={{ bgcolor: '#03264e' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Panel de Control</Typography>
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