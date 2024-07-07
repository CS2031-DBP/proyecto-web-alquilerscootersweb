import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TripHistory = () => {
    const [viajes, setViajes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchViajes = async () => {
            const userId = localStorage.getItem('userId'); // Obtén el ID del usuario desde localStorage
            if (!userId) {
                setError("No se encontró el ID del usuario en localStorage");
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8080/viajes/usuario/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setViajes(response.data);
            } catch (error) {
                setError(error.response ? error.response.data : "Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchViajes();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Historial de Viajes</h1>
            {viajes.length === 0 ? (
                <p>No hay viajes registrados.</p>
            ) : (
                <ul>
                    {viajes.map(viaje => (
                        <li key={viaje.id}>
                            <p>Inicio: {viaje.horaInicio}</p>
                            <p>Fin: {viaje.horaFin}</p>
                            <p>Partida: {viaje.puntoPartida}</p>
                            <p>Destino: {viaje.puntoFin}</p>
                            <p>Costo: {viaje.costo}</p>
                            <p>Estado: {viaje.estado}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TripHistory;
