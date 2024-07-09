import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Login from './components/login';
import Register from './components/Register';
import ScooterList from './components/ScooterList';
import ScooterMap from './components/ScooterMap';
import UserProfile from './components/UserProfile';
import TripHistory from './components/TripHistory';
import './App.css';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/scooters" />} />
                    <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/scooters" />} />
                    <Route path="/scooters" element={isAuthenticated ? <ScooterList /> : <Navigate to="/login" />} />
                    <Route path="/map" element={isAuthenticated ? <ScooterMap /> : <Navigate to="/login" />} />
                    <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
                    <Route path="/trips" element={isAuthenticated ? <TripHistory /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;