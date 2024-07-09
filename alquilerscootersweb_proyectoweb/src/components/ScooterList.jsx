// ScooterList.js
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import RoomIcon from '@mui/icons-material/Room';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { fetchScooters } from '../services/api';
import '../ScooterList.css';
import ErrorMessage from './ErrorMessage'; // Importar el componente de mensaje de error

const ScooterList = () => {
    const [scooters, setScooters] = useState([]);
    const [error, setError] = useState(''); // Estado para el mensaje de error

    useEffect(() => {
        const getScooters = async () => {
            try {
                const data = await fetchScooters();
                setScooters(data);
            } catch (error) {
                console.error('Error fetching scooters:', error);
                setError('Failed to fetch scooters. Please make sure you are logged in.');
            }
        };

        getScooters();
    }, []);

    return (
        <div>
            {error && <ErrorMessage message={error} />} {/* Mostrar mensaje de error */}
            <Grid container spacing={3}>
                {scooters.map((scooter) => (
                    <Grid item key={scooter.id} xs={12} sm={6} md={4}>
                        <Card className="card">
                            <CardContent className="card-content">
                                <Typography variant="h5" component="div" className="typography-title">
                                    Scooter ID: {scooter.id}
                                </Typography>
                                <div className="attribute">
                                    <BatteryFullIcon className="attribute-icon" />
                                    <Typography variant="body2" color="textSecondary" className="typography-secondary">
                                        Estado: {scooter.estado}
                                    </Typography>
                                </div>
                                <div className="attribute">
                                    <BatteryFullIcon className="attribute-icon" />
                                    <Typography variant="body2" color="textSecondary" className="typography-secondary">
                                        Nivel de Batería: {scooter.nivelBateria}%
                                    </Typography>
                                </div>
                                <div className="attribute">
                                    <RoomIcon className="attribute-icon" />
                                    <Typography variant="body2" color="textSecondary" className="typography-secondary">
                                        Ubicación Actual: {scooter.ubicacionActual}
                                    </Typography>
                                </div>
                                <div className="attribute">
                                    <ReportProblemIcon className="attribute-icon" />
                                    <Typography variant="body2" color="textSecondary" className="typography-secondary">
                                        Es Necesario Mantención: {scooter.esNecesarioMantencion ? 'Sí' : 'No'}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ScooterList;
