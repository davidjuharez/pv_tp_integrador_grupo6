import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import AdminProvider from './context/AdminContext'; // Importamos el provider
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AdminProvider>
  </StrictMode>,
);
