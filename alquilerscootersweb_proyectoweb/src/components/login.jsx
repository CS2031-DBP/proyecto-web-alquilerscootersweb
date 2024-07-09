import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../services/api';
import '../Login.css';

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
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor='email'>Email:
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='password'>Password:
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
