import React from 'react';
import '../Welcome.css';
import scooterLogo from '../assets/logo.jpg';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import SecurityIcon from '@mui/icons-material/Security';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike'; // Icono para "Reserva o acércate"
import CommuteIcon from '@mui/icons-material/Commute'; // Icono para "Comienza a viajar"
import SpeedIcon from '@mui/icons-material/Speed'; // Icono para "Mientras viajas"
import LocalParkingIcon from '@mui/icons-material/LocalParking'; // Icono para "Estaciona con responsabilidad"

const Welcome = () => {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Renta de scooters eléctricos</h1>
            <p className="welcome-subtitle">Hay una nueva manera de trasladarse por la ciudad. Los scooters eléctricos son divertidos, económicos, fáciles de usar y están disponibles a través de nuestra app.</p>
            <img src={scooterLogo} alt="Scooter Logo" className="welcome-image" />
            <div className="info-sections">
                <div className="info-section">
                    <TouchAppIcon className="info-icon" />
                    <div>
                        <h2 className="info-title">Reserva de forma sencilla</h2>
                        <p className="info-text">Actualiza la app Uber a la última versión. Pulsa 2 ruedas y sigue las instrucciones para reservar el patinete más cercano.</p>
                    </div>
                </div>
                <div className="info-section">
                    <ElectricScooterIcon className="info-icon" />
                    <div>
                        <h2 className="info-title">Una experiencia electrizante</h2>
                        <p className="info-text">Disfruta de la sensación de conducir un patinete eléctrico. Acelera y siente la velocidad.</p>
                    </div>
                </div>
                <div className="info-section">
                    <SecurityIcon className="info-icon" />
                    <div>
                        <h2 className="info-title">Viaja con precaución. Viaja seguro.</h2>
                        <p className="info-text">Ponte el casco, respeta las normas de circulación locales, da prioridad a los peatones y ten cuidado con la velocidad. Además, te recomendamos que evites las pendientes pronunciadas.</p>
                    </div>
                </div>
            </div>
            <div className="travel-guide">
                <h2 className="guide-title">Cómo viajar</h2>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <DirectionsBikeIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontWeight: 'bold', color: '#000'}}>Reserva o acércate</span>} secondary="Toca el ícono del scooter en la app de Uber y reserva un scooter eléctrico cercano o simplemente acércate a uno para comenzar a viajar." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CommuteIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontWeight: 'bold', color: '#000'}}>Comienza a viajar</span>} secondary="Escanea el código QR del manubrio para desbloquear el scooter y empezar a conducir. (O ingresa manualmente los 6 dígitos del número de identificación del vehículo). Te recomendamos usar casco." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SpeedIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontWeight: 'bold', color: '#000'}}>Mientras viajas</span>} secondary="Para frenar en cualquier momento, presiona la palanca ubicada en la parte izquierda del manubrio. Para arrancar presiona la palanca ubicada en la parte derecha del manubrio. Hazlo con cuidado y comienza lento porque el scooter tiene potencia." />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocalParkingIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontWeight: 'bold', color: '#000'}}>Estaciona con responsabilidad</span>} secondary="Asegúrate de estacionar el scooter en la zona correcta, que se muestra en el mapa de la app, no en las áreas de la ciudad donde está prohibido hacerlo. No obstruyas aceras, rampas ni otras áreas destinadas a personas con necesidades de accesibilidad. Consulta el sitio web del gobierno de tu ciudad para conocer las normas locales sobre dónde conducir scooters." />
                    </ListItem>
                </List>
            </div>
        </div>
    );
};

export default Welcome;
