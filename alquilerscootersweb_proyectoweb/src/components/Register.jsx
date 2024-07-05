import React, {useState} from 'react';
import { fetchRegister } from '../services/api';

const Register = () =>{
    const [email, setEmail] = useState('');
    const [full_name, setFull_name] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetchRegister({email,full_name,password,username});
            alert('Register successful');
            console.log(response);
        }
        catch(error){
            console.error('Register failed', error);
            alert('Register failed');
        }
    }

    return(
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
            <br/>
            <label htmlFor='full_name'>Full Name:
                <input
                    type='text'
                    value={full_name}
                    onChange={(e) => setFull_name(e.target.value)}
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
            <label htmlFor='username'>Username:
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default Register;