import React, { useState } from 'react';
import { updateUsuario } from '../services/api';

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
        <form onSubmit={handleSubmit}>
            <div>User Profile</div>
            <label htmlFor="nombre">Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={userData.nombre}
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="email">Email:
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="telefono">Teléfono:
                <input
                    type="text"
                    name="telefono"
                    value={userData.telefono}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Update Profile</button>
        </form>
    );
}

export default UserProfile;