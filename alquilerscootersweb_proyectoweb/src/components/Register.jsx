// Register.js
import React, { useState } from 'react';
import { fetchRegister } from '../services/api';
import '../Register.css';
import registerImage from '../assets/register.png';
import { Email as EmailIcon, Person as PersonIcon, Phone as PhoneIcon, VpnKey as VpnKeyIcon } from '@mui/icons-material';
import ErrorMessage from './ErrorMessage'; // Importar el componente de mensaje de error
import SuccessMessage from './SuccessMessage'; // Importar el componente de mensaje de éxito

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(''); // Estado para el mensaje de error
    const [success, setSuccess] = useState(''); // Estado para el mensaje de éxito

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
            setSuccess('Registration successful, welcome!');
            setError('');
            // Limpiar los campos del formulario
            setEmail('');
            setName('');
            setPassword('');
            setPhone('');
        } catch (error) {
            setSuccess('');
            if (error.response && error.response.status === 400) {
                setError('Registration failed. Please check your inputs and try again.');
            } else {
                setError('Registration failed. Please try again later.');
            }
        }
    }

    return (
        <div className="register-container">
            <div className="register-content">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    {error && <ErrorMessage message={error} />} {/* Mostrar mensaje de error */}
                    {success && <SuccessMessage message={success} />} {/* Mostrar mensaje de éxito */}
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
                    <label htmlFor='name'>Full Name:
                        <div className="input-with-icon">
                            <PersonIcon className="input-icon" />
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                    <label htmlFor='phone'>Phone:
                        <div className="input-with-icon">
                            <PhoneIcon className="input-icon" />
                            <input
                                type='text'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <img src={registerImage} alt="Register Image" className="register-image" />
            </div>
        </div>
    );
}

export default Register;
