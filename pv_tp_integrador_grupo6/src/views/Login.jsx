import { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Paper, Container, MenuItem } from '@mui/material';
import logo from '../assets/logo.png';
import fondoLogin from '../assets/fondoLogin.png';
import LoginIcon from "@mui/icons-material/Login";

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
            <Paper elevation={4} sx={{ p: 3, width: "100%", maxWidth: 320}}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Box component="img" src={logo} alt="Logo" sx={{ width: 60, height: 60 }} />
                </Box>
                <Typography variant="h6" align="center" sx={{ mb: 0.5, fontWeight: 700, color: "#d6e4f0" }}>Acceso</Typography>
                <Typography align="center" sx={{ mb: 2, color: "#d6e4f0", fontSize: "0.75rem" }}>Central de Clientes</Typography>

                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Nombre" name="nombre" onChange={handleChange} margin="normal" required/>
                    <TextField fullWidth select label="Sector" name="sector" value={form.sector} onChange={handleChange} margin="normal" required>
                        <MenuItem value="Soporte">Soporte</MenuItem>
                        <MenuItem value="Gerencia">Gerencia</MenuItem>
                    </TextField>
                    <Button fullWidth variant="contained" type="submit" startIcon={<LoginIcon />} sx={{ mt: 2, bgcolor: "#03264e", py: 1, borderRadius: 1.5, fontSize: "0.9rem", '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.5)' }, border: '1px solid rgba(255,255,255,0.3)' }}>
                        Ingresar
                    </Button>
                </form>
            </Paper>

        </Box>
    );
};

export default Login;