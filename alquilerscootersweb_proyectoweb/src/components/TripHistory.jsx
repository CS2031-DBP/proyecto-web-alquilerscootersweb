import React, { useState, useEffect } from 'react';
import { fetchTripHistory } from '../services/api';

const TripHistory = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        const getTrips = async () => {
            try {
                const data = await fetchTripHistory();
                setTrips(data);
            } catch (error) {
                console.error('Error fetching trip history:', error);
            }
        };
        getTrips();
    }, []);

    return (
        <div>
            <h2>Historial de Viajes</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <p>ID del Scooter: {trip.scooterId}</p>
                        <p>Estado del viaje: {trip.isActive ? 'En uso' : 'Culminado'}</p>
                        <p>Nivel de batería: {trip.batteryLevel}%</p>
                        <p>Detalles del viaje: {trip.details}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TripHistory;
