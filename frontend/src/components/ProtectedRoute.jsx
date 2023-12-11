// components/ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, roles }) => {
    const storedRoles = JSON.parse(localStorage.getItem('roles'));
    console.log('test: ', storedRoles);

    if (storedRoles && roles.every(role => storedRoles.includes(role))) {
        console.log('berhasil');
        return element; // Kembalikan element langsung tanpa membalut dengan <Route>
    } else {
        // Redirect to a login page or unauthorized page
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
