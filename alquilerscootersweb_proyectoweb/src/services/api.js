import axios from 'axios';

// Link to deployed backend
const URL = "http://localhost:8080";

function saveToken(token) {
    localStorage.setItem('token', token);
    console.log(token);
}

export const fetchLogin = async (body) => {
    const response = await axios.post(`${URL}/auth/login`, body);
    saveToken(response.data.access_token); // Guarda el token si es necesario
    return response.data;
}


export const fetchRegister = async (body) => {
    const response = await axios.post(`${URL}/auth/register`, body);
    return response.data;
}

export const fetchScooters = async () => {
    const response = await axios.get(`${URL}/scooters`);
    return response.data;
}

export const fetchScooterLocations = async () => {
    const response = await axios.get(`${URL}/scooters/locations`);
    return response.data;
}

export const fetchUserProfile = async () => {
    const response = await axios.get(`${URL}/usuarios/profile`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const updateUserProfile = async (body) => {
    const response = await axios.put(`${URL}/usuarios/profile`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}
export const fetchTripHistory = async () => {
    const response = await axios.get(`${URL}/user/trips`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const fetchAllUsuarios = async () => {
    const response = await axios.get(`${URL}/usuarios`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const fetchUsuarioById = async (id) => {
    const response = await axios.get(`${URL}/usuarios/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const createUsuario = async (body) => {
    const response = await axios.post(`${URL}/usuarios`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const deleteUsuario = async (id) => {
    const response = await axios.delete(`${URL}/usuarios/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const updateUsuario = async (id, body) => {
    const response = await axios.patch(`${URL}/usuarios/${id}`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const fetchViajesByUsuarioId = async (id) => {
    const response = await axios.get(`${URL}/usuarios/${id}/viajes`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const fetchUsuarioByEmail = async (email) => {
    const response = await axios.get(`${URL}/usuarios/email/${email}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}
