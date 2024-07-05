import React, { useState, useEffect } from 'react';
import { fetchUserProfile, updateUserProfile } from '../services/api';

const UserProfile = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        fullName: ''
    });

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await fetchUserProfile();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        getUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(userData);
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>User Profile</div>
            <label htmlFor="username">Username:
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="email">Email:
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label htmlFor="fullName">Full Name:
                <input
                    type="text"
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Update Profile</button>
        </form>
    );
}

export default UserProfile;
