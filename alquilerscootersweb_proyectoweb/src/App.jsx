import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from './components/login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import ScooterList from './components/ScooterList';
import ScooterMap from './components/ScooterMap';
import UserProfile from './components/UserProfile';
import TripHistory from './components/TripHistory';
import './App.css';

function App() {
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
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/scooters" element={isAuthenticated ? <ScooterList /> : <Navigate to="/login" />} />
                <Route path="/map" element={isAuthenticated ? <ScooterMap /> : <Navigate to="/login" />} />
                <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
                <Route path="/trips" element={isAuthenticated ? <TripHistory /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
