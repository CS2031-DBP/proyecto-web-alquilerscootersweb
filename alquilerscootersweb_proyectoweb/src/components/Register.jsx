import React, { useState } from 'react';
import { fetchRegister } from '../services/api';
import '../Register.css';

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
                role: 'USER'
            });
            alert('Register successful');
            console.log(response);
        } catch (error) {
            alert('Register failed');
        }
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label htmlFor='email'>Email:
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label htmlFor='name'>Full Name:
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
            <label htmlFor='phone'>Phone:
                <input
                    type='text'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Register;
