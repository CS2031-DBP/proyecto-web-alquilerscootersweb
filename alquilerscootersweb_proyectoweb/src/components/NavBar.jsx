import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './App.css'; // Importamos el archivo CSS principal

const NavBar = ({ isAuthenticated, handleLogout }) => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar className="navbar-toolbar">
                <Typography variant="h6" component="div" className="navbar-title">
                    EasyScooter
                </Typography>
                <div className="navbar-spacer" />
                {!isAuthenticated ? (
                    <>
                        <Button color="inherit" component={Link} to="/login" className="navbar-button">Login</Button>
                        <Button color="inherit" component={Link} to="/register" className="navbar-button">Register</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/scooters" className="navbar-button">Scooters</Button>
                        <Button color="inherit" component={Link} to="/map" className="navbar-button">Scooter Map</Button>
                        <Button color="inherit" component={Link} to="/profile" className="navbar-button">Profile</Button>
                        <Button color="inherit" component={Link} to="/trips" className="navbar-button">Trip History</Button>
                        <Button color="inherit" onClick={handleLogout} className="navbar-button">Logout</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
