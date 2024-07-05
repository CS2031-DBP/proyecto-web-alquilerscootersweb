import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import ScooterList from './components/ScooterList';
import ScooterMap from './components/ScooterMap';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/scooters" element={<ScooterList />} />
                <Route path="/map" element={<ScooterMap />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
