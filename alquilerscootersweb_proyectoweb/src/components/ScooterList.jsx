import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import RoomIcon from '@mui/icons-material/Room';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { fetchScooters } from '../services/api';
import '../ScooterList.css';  // Importar el archivo de estilos CSS

const ScooterList = () => {
    const [scooters, setScooters] = useState([]);

    useEffect(() => {
        const getScooters = async () => {
            try {
                const data = await fetchScooters();
                setScooters(data);
            } catch (error) {
                console.error('Error fetching scooters:', error);
                alert('Failed to fetch scooters. Please make sure you are logged in.');
            }
        };

        getScooters();
    }, []);

    return (
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
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ScooterList;
