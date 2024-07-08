import React, { useState } from 'react';
import { fetchRegister } from '../services/api';
import './App.css'; // Importamos el archivo CSS principal

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchRegister({
                email,
                name,
                password,
                phone,
                role: 'USER' // Asignamos el rol directamente
            });
            alert('Register successful');
            console.log(response);
        } catch (error) {
            console.error('Register failed', error);
            alert('Register failed');
        }
    }

    return (
        <div className="register-container">
            <div className="register-content">
                <div className="register-image">
                    <img src="/mnt/data/image.png" alt="ScootSmart Logo" />
                    <p>"Muévete libremente, muévete con ScootSmart"</p>
                    <p>"El futuro de la movilidad está a un clic de distancia"</p>
                </div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>Regístrate</h2>
                    <label htmlFor='email'>Correo Electrónico:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor='name'>Nombre Completo:</label>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor='password'>Contraseña:</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor='phone'>Teléfono:</label>
                    <input
                        type='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <button type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
