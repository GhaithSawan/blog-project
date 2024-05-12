import React, { useContext, useEffect } from 'react';
import { authContext } from '../context/authContextAPI';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user]);

    return <div>{user ? children : ""}</div>;
}

export default ProtectedRoute;
