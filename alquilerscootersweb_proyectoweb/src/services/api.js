import axios from 'axios';

//Link to deployed backend
const URL = "http://localhost8080"

function saveToken(token){
    localStorage.setItem('token', token);
    console.log(token);
}

export const fetchLogin = async(body) =>{
    const response = await axios.post(`${URL}/auth/login`, body);
    saveToken(response.data.access_token);
    return response.data;
}

export const fetchRegister = async(body) =>{
    const response = await axios.post(`${URL}/auth/register`, body);
    return response.data;
}

export const fetchScooters = async() => {
    const response = await axios.get(`${URL}/scooters`);
    return response.data;
}

export const fetchScooterLocations = async() => {
    const response = await axios.get(`${URL}/scooters/locations`);
    return response.data;
}

export const fetchUserProfile = async () => {
    const response = await axios.get(`${URL}/user/profile`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const updateUserProfile = async (body) => {
    const response = await axios.put(`${URL}/user/profile`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}