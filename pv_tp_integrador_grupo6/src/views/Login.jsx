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
        <Container maxWidth="xs" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
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
        </Container>
        </Box>
    );
};

export default Login;