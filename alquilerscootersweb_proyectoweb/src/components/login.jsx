import React, { useState } from 'react';
import { fetchLogin } from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchLogin({ email, password });
            alert('Login successful');
            console.log(response);
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
