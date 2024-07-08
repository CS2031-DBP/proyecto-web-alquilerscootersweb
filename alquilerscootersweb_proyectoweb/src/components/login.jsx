import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../services/api';
import logo from './logo.jpg'; // Asegúrate de que la ruta sea correcta.

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchLogin({ password, email });
            alert('Login successful');
            onLogin(response.token);
            localStorage.setItem('token', response.token);
            navigate('/scooters');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <h2>Welcome Back!</h2>
                    <p>Login to rent your favorite scooters in no time.</p>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <div className="login-image">
                    <img src={logo} alt="Scooter Logo" />
                    <p>Register to get access to the best scooters in the city!</p>
                    <p>Fast, convenient, and eco-friendly. Join us today!</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
