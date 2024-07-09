import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { fetchScooters } from '../services/api';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import PropTypes from 'prop-types';
import '../ScooterMap.css'; // Importar el archivo CSS para los estilos

// Icono personalizado para scooters
const scooterIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.freepik.com/512/1553/1553985.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Componente para el botón de centrado
const LocateButton = ({ onClick }) => (
    <button className="locate-button" onClick={onClick}>
        Locate Me
    </button>
);

LocateButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const ScooterMap = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userLocation, setUserLocation] = useState(null);
    const [userMarker, setUserMarker] = useState(null);
    const [mapInstance, setMapInstance] = useState(null);

    useEffect(() => {
        const getScooters = async () => {
            try {
                const scooters = await fetchScooters();
                const scooterLocations = scooters.map(scooter => {
                    const [lat, lng] = scooter.ubicacionActual.split(',').map(Number);
                    return {
                        id: scooter.id,
                        lat,
                        lng,
                        status: scooter.estado,
                        batteryLevel: scooter.nivelBateria
                    };
                });
                setLocations(scooterLocations);
            } catch (error) {
                console.error('Error fetching scooter locations:', error);
            } finally {
                setLoading(false);
            }
        };

        const updateUserLocation = (position) => {
            const { latitude, longitude } = position.coords;
            const newLocation = { lat: latitude, lng: longitude };
            setUserLocation(newLocation);

            if (userMarker) {
                userMarker.setLatLng(newLocation);
            }
        };

        const watchId = navigator.geolocation.watchPosition(
            updateUserLocation,
            (error) => {
                console.error('Error getting user location:', error);
            },
            { enableHighAccuracy: true }
        );

        getScooters();

        return () => navigator.geolocation.clearWatch(watchId);
    }, [userMarker]);

    const handleLocate = () => {
        if (userLocation && mapInstance) {
            mapInstance.flyTo([userLocation.lat, userLocation.lng], 15); // Ajuste de zoom a 15
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const defaultCenter = userLocation ? [userLocation.lat, userLocation.lng] : [51.505, -0.09];

    return (
        <div className="map-container">
            <MapContainer
                center={defaultCenter}
                zoom={13}
                style={{ height: "100vh", width: "100%" }}
                whenCreated={setMapInstance}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {userLocation && (
                    <Marker
                        position={[userLocation.lat, userLocation.lng]}
                        ref={(marker) => setUserMarker(marker)}
                    >
                        <Popup>
                            You are here
                        </Popup>
                    </Marker>
                )}
                {locations.map(location => (
                    <Marker key={location.id} position={[location.lat, location.lng]} icon={scooterIcon}>
                        <Popup>
                            {`Estado: ${location.status}`}<br/>
                            {`Nivel de Batería: ${location.batteryLevel}%`}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
            <LocateButton onClick={handleLocate} />
        </div>
    );
};

export default ScooterMap;
