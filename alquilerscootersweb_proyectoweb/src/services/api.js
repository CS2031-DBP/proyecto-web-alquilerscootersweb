import axios from 'axios';

const URL = "http://localhost:8080";

function saveToken(token) {
    console.log('Saving token:', token);
    localStorage.setItem('token', token);
}

export const fetchLogin = async ({ email, password }) => {
    const response = await axios.post(`${URL}/auth/login`, { email, password });
    const { token, userId } = response.data; // Suponiendo que la respuesta incluye token y userId
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId); // Almacenar el ID del usuario en localStorage
    return response.data;
};

export const fetchRegister = async (body) => {
    const response = await axios.post(`${URL}/auth/register`, body);
    return response.data;
}

export const fetchScooters = async () => {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);
    if (!token) {
        throw new Error('No token found');
    }
    const response = await axios.get(`${URL}/scooters`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export const createScooter = async (body) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${URL}/scooters`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
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
    return response.data; // Devolver los datos del perfil del usuario
};

export const updateUserProfile = async (body) => {
    const response = await axios.put(`${URL}/usuarios/profile`, body, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
}

export const fetchTripHistory = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('No token found');
    }
    const response = await axios.get(`${URL}/viajes/usuario`, {
        headers: {
            Authorization: `Bearer ${token}`
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
