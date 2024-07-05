import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div">
                    ScootSmart
                </Typography>
                <div style={{ flexGrow: 1 }} />
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/register">Register</Button>
                <Button color="inherit" component={Link} to="/scooters">Scooters</Button>
                <Button color="inherit" component={Link} to="/map">Scooter Map</Button>
                <Button color="inherit" component={Link} to="/profile">Profile</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
