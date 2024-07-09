import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { AccessTime as AccessTimeIcon, CheckCircle as CheckCircleIcon, LocationOn as LocationOnIcon, MonetizationOn as MonetizationOnIcon } from '@mui/icons-material';
import '../TripHistory.css';
import ErrorMessage from './ErrorMessage';

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

    return (
        <div className="trip-history-container">
            <Typography variant="h5">Historial de Viajes</Typography>
            {error && <ErrorMessage message={error} />}
            {viajes.length === 0 && !error ? (
                <div className="no-viajes">
                    <Typography variant="h6" component="p">
                        No hay viajes registrados.
                    </Typography>
                </div>
            ) : (
                <ul className="trip-list">
                    {viajes.map(viaje => (
                        <li key={viaje.id} className="trip-item">
                            <Typography variant="body1">
                                <AccessTimeIcon /> <strong>Inicio:</strong> {viaje.horaInicio}
                            </Typography>
                            <Typography variant="body1">
                                <AccessTimeIcon /> <strong>Fin:</strong> {viaje.horaFin}
                            </Typography>
                            <Typography variant="body1">
                                <LocationOnIcon /> <strong>Partida:</strong> {viaje.puntoPartida}
                            </Typography>
                            <Typography variant="body1">
                                <LocationOnIcon /> <strong>Destino:</strong> {viaje.puntoFin}
                            </Typography>
                            <Typography variant="body1">
                                <MonetizationOnIcon /> <strong>Costo:</strong> {viaje.costo}
                            </Typography>
                            <Typography variant="body1">
                                <CheckCircleIcon /> <strong>Estado:</strong> {viaje.estado}
                            </Typography>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TripHistory;
