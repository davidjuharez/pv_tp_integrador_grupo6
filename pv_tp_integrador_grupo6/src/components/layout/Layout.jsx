import { Box } from '@mui/material';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#021831' }}>
            <Header />
            <Navbar />
            <Box component="main" sx={{ flex: 1 }}>
                < Outlet />
            </Box>
            <Footer />
        </Box>
    );
};


export default Layout;