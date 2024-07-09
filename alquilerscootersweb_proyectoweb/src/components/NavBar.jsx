import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';

const NavBar = ({ isAuthenticated, handleLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Easyscooter</div>
            <div className="navbar-links">
                <Link className="nav-link" to="/">Inicio</Link>
                {!isAuthenticated ? (
                    <>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                    </>
                ) : (
                    <>
                        <Link className="nav-link" to="/scooters">Scooters</Link>
                        <Link className="nav-link" to="/map">Scooter Map</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <Link className="nav-link" to="/trips">Trip History</Link>
                        <button className="nav-link logout-button" onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
