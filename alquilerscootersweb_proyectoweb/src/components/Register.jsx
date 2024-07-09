import React, { useState } from 'react';
import { fetchRegister } from '../services/api';
import '../Register.css';
import registerImage from '../assets/register.png';  // Agregando la nueva imagen
import { Email as EmailIcon, Person as PersonIcon, Phone as PhoneIcon, VpnKey as VpnKeyIcon } from '@mui/icons-material';  // Importando los iconos necesarios

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
        <div className="register-container">
            <div className="register-content">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h2>Register</h2>
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
                <img src={registerImage} alt="Register Image" className="register-image" />  {/* Agregando la imagen */}
            </div>
        </div>
    );
}

export default Register;
