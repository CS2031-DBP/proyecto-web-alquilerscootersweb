import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../services/api';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchLogin({ password, email });
            console.log('Login successful, token:', response.token);
            alert('Login successful');
            onLogin(response.token);
            localStorage.setItem('token', response.token);  // Asegúrate de guardar el token
            console.log('Token saved in localStorage:', localStorage.getItem('token'));  // Verificar que se guardó
            navigate('/scooters'); // Redirigir a ScooterList después del inicio de sesión exitoso
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Login</div>
            <label htmlFor='email'>Email:
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label htmlFor='password'>Password:
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
