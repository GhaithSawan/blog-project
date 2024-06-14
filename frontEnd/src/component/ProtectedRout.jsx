import React, { useContext, useEffect } from 'react';
import { authContext } from '../context/authContextAPI';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();
    let user = localStorage.getItem("user")
    useEffect(() => {
        if (user === null) {
            console.log("its null");
            navigate("/login");
        }
        console.log("its  not null");

    }, [user])

    return <div>{user ? children : ""}</div>;
}

export default ProtectedRoute;
