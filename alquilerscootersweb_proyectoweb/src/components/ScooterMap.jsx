import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { fetchScooterLocations } from '../services/api';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Icono personalizado para scooters
const scooterIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1238/1238607.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const ScooterMap = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLocations = async () => {
            try {
                const data = await fetchScooterLocations();
                setLocations(data);
            } catch (error) {
                console.error('Error fetching scooter locations:', error);
            } finally {
                setLoading(false);
            }
        };

        getLocations();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map(location => (
                <Marker key={location.id} position={[location.lat, location.lng]} icon={scooterIcon}>
                    <Popup>
                        {location.name} - {location.status}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default ScooterMap;
