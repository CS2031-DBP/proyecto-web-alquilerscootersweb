import React, { useState } from 'react';
import { fetchRegister } from '../services/api';

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
        <form onSubmit={handleSubmit}>
            <div>Register</div>
            <label htmlFor='email'>Email:
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <br />
            <label htmlFor='name'>Full Name:
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
            <label htmlFor='phone'>Phone:
                <input
                    type='text'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;
