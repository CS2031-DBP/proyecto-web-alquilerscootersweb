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
            const data = await fetchScooters();
            setScooters(data);
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
                                {scooter.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {scooter.status}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ScooterList;
