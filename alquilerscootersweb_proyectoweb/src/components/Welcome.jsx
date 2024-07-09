import React from 'react';
import { Typography } from '@mui/material';
import scooterImage from '../assets/logo.jpg';
import '../Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <Typography variant="h3" component="h1" className="welcome-title">
                Renta de scooters eléctricos
            </Typography>
            <Typography variant="body1" component="p" className="welcome-text">
                Hay una nueva manera de trasladarse por la ciudad. Los scooters eléctricos son divertidos, económicos, fáciles de usar y están disponibles a través de nuestra app.
            </Typography>
            <img src={scooterImage} alt="Scooter" className="welcome-image" />
            <div className="info-section">
                <Typography variant="h5" component="h2" className="welcome-subtitle">
                    Fácil de reservar
                </Typography>
                <Typography variant="body1" component="p" className="welcome-text">
                    Instala la última versión de la app de Uber. Toca en 2 ruedas y sigue las instrucciones para reservar el scooter más cercano.
                </Typography>
            </div>
            <div className="info-section">
                <Typography variant="h5" component="h2" className="welcome-subtitle">
                    Una sensación eléctrica
                </Typography>
                <Typography variant="body1" component="p" className="welcome-text">
                    Experimenta lo divertido que es usar un scooter eléctrico. Al usar el acelerador, sentirás la potencia.
                </Typography>
            </div>
            <div className="info-section">
                <Typography variant="h5" component="h2" className="welcome-subtitle">
                    Viaja con precaución. Viaja seguro.
                </Typography>
                <Typography variant="body1" component="p" className="welcome-text">
                    Te recomendamos usar casco, respetar las normas viales, ceder el paso a los peatones y controlar la velocidad. Evita conducir en pendientes pronunciadas.
                </Typography>
            </div>
        </div>
    );
}

export default Welcome;
