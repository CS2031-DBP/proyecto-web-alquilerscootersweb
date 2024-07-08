import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from './components/login.jsx';
import Register from './components/Register';
import NavBar from './components/NavBar';
import ScooterList from './components/ScooterList';
import ScooterMap from './components/ScooterMap';
import UserProfile from './components/UserProfile';
import TripHistory from './components/TripHistory';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);
 //vamo
    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/scooters" /> : <Navigate to="/login" />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/scooters" /> : <Login onLogin={handleLogin} />} />
                <Route path="/register" element={isAuthenticated ? <Navigate to="/scooters" /> : <Register />} />
                <Route path="/scooters" element={isAuthenticated ? <ScooterList /> : <Navigate to="/login" />} />
                <Route path="/map" element={isAuthenticated ? <ScooterMap /> : <Navigate to="/login" />} />
                <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/login" />} />
                <Route path="/trips" element={isAuthenticated ? <TripHistory /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;