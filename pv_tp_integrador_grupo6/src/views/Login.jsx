import { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Paper, Container, MenuItem } from '@mui/material';
import logo from '../assets/logo.png';
import fondoLogin from '../assets/fondoLogin.png';

const Login = () => {
    const [form, setForm] = useState({ nombre: '', sector: '' });
    const { login } = useAdmin();
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.nombre && form.sector) {
            login(form.nombre, form.sector);
            navigate("/");
        } else {
            alert("Completa todos los campos");
        }
    };

    return (
        <Box sx={{ minHeight: "100vh", backgroundImage: `url(${fondoLogin})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
            <Paper elevation={4} sx={{ p: 3, width: "100%", maxWidth: 320, borderRadius: 3, bgcolor: 'rgba(3, 38, 78, 0.4)', backdropFilter: 'blur(8px)', border: '3px solid rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Box component="img" src={logo} alt="Logo" sx={{ width: 60, height: 60 }} />
                </Box>
                <Typography variant="h5" align="center" sx={{ mb: 3 }}>Acceso</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Nombre" name="nombre" onChange={handleChange} margin="normal" required />
                    <TextField fullWidth select label="Sector" name="sector" value={form.sector} onChange={handleChange} margin="normal" required>
                        <MenuItem value="Soporte">Soporte</MenuItem>
                        <MenuItem value="Gerencia">Gerencia</MenuItem>
                    </TextField>
                    <Button fullWidth variant="contained" type="submit" sx={{ mt: 3, bgcolor: '#03264e' }}>Ingresar</Button>
                </form>
            </Paper>

        </Box>
    );
};

export default Login;