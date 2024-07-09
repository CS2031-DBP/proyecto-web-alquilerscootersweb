import React, { useState } from 'react';
import { updateUsuario } from '../services/api';
import '../Login.css'; // Asegúrate de tener el archivo CSS con los estilos de Login
import { TextField, Button, Typography, Grid } from '@mui/material'; // Importa componentes de Material-UI
import EmailIcon from '@mui/icons-material/Email'; // Icono para email
import PhoneIcon from '@mui/icons-material/Phone'; // Icono para teléfono
import PersonIcon from '@mui/icons-material/Person'; // Icono para nombre

const UserProfile = () => {
    const [userData, setUserData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId'); // Suponiendo que el ID del usuario está almacenado en localStorage
        if (!userId) {
            console.error('User ID not found');
            return;
        }

        try {
            const updatedData = {};
            if (userData.nombre) updatedData.nombre = userData.nombre;
            if (userData.email) updatedData.email = userData.email;
            if (userData.telefono) updatedData.telefono = userData.telefono;

            await updateUsuario(userId, updatedData);
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile');
        }
    };

    return (
        <div className="login-container"> {/* Utilizando la clase login-container para mantener el mismo estilo */}
            <div className="login-content"> {/* Utilizando la clase login-content */}
                <form className="login-form user-profile-form" onSubmit={handleSubmit}>
                    <Typography variant="h5">User Profile</Typography>
                    <div className="input-with-icon"> {/* Clase para mantener el mismo estilo de input-with-icon */}
                        <PersonIcon className="input-icon" /> {/* Clase para el mismo estilo de input-icon */}
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="nombre"
                            value={userData.nombre}
                            onChange={handleChange}
                            required
                            InputProps={{
                                startAdornment: <PersonIcon />
                            }}
                            className="profile-field"
                            InputLabelProps={{
                                style: { fontSize: '1rem' } // Ajuste de tamaño de letra
                            }}
                            style={{ marginBottom: '16px' }} // Ajuste de margen inferior
                        />
                    </div>
                    <div className="input-with-icon"> {/* Clase para mantener el mismo estilo de input-with-icon */}
                        <EmailIcon className="input-icon" /> {/* Clase para el mismo estilo de input-icon */}
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={userData.email}
                            onChange={handleChange}
                            required
                            InputProps={{
                                startAdornment: <EmailIcon />
                            }}
                            className="profile-field"
                            InputLabelProps={{
                                style: { fontSize: '1rem' } // Ajuste de tamaño de letra
                            }}
                            style={{ marginBottom: '16px' }} // Ajuste de margen inferior
                        />
                    </div>
                    <div className="input-with-icon"> {/* Clase para mantener el mismo estilo de input-with-icon */}
                        <PhoneIcon className="input-icon" /> {/* Clase para el mismo estilo de input-icon */}
                        <TextField
                            fullWidth
                            label="Teléfono"
                            name="telefono"
                            value={userData.telefono}
                            onChange={handleChange}
                            required
                            InputProps={{
                                startAdornment: <PhoneIcon />
                            }}
                            className="profile-field"
                            InputLabelProps={{
                                style: { fontSize: '1rem' } // Ajuste de tamaño de letra
                            }}
                        />
                    </div>
                    <Button type="submit" variant="contained" color="primary">Update Profile</Button>
                </form>
            </div>
        </div>
    );
}

export default UserProfile;
