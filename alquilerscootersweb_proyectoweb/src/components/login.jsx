import React, { useState } from 'react';
import { fetchLogin } from '../services/api';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchLogin({ password, username });
            alert('Login successful');
            onLogin(response.access_token);
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>Login</div>
            <label htmlFor='username'>Username:
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br />
            <label htmlFor='password'>Password:
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
