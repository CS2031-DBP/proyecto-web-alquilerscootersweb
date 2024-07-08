import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { fetchScooters } from '../services/api';

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
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Scooter ID: {scooter.id}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Estado: {scooter.estado}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Nivel de Batería: {scooter.nivelBateria}%
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Ubicación Actual: {scooter.ubicacionActual}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ScooterList;
