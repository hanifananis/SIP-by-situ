// components/ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element, roles }) => {
    const storedRoles = Cookies.get('role');
    console.log('test: ', storedRoles);

    if (storedRoles && roles.every(role => storedRoles.includes(role))) {
        console.log('berhasil');
        return element; // Return the element directly without wrapping it with <Route>
    } else {
        // Redirect to a login page or unauthorized page
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
