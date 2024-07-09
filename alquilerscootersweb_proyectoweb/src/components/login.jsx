// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../services/api';
import '../Login.css';
import loginImage from '../assets/loginn.jpg';
import { Email as EmailIcon, VpnKey as VpnKeyIcon } from '@mui/icons-material';
import ErrorMessage from './ErrorMessage'; // Importar el componente de mensaje de error

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); // Estado para el mensaje de error
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchLogin({ password, email });
            onLogin(response.token);
            localStorage.setItem('token', response.token);
            navigate('/scooters');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('Email or password is incorrect. Please try again.');
            } else {
                setError('Login failed. Please try again later.');
            }
        }
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {error && <ErrorMessage message={error} />} {/* Mostrar mensaje de error */}
                    <label htmlFor='email'>Email:
                        <div className="input-with-icon">
                            <EmailIcon className="input-icon" />
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label htmlFor='password'>Password:
                        <div className="input-with-icon">
                            <VpnKeyIcon className="input-icon" />
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <img src={loginImage} alt="Login Image" className="login-image" />
            </div>
        </div>
    );
}

export default Login;
