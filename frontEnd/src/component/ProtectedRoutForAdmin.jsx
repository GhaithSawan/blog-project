import React, { useContext, useEffect } from 'react';
import { authContext } from '../context/authContextAPI';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutForAdmin = ({ children }) => {
    const { user } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.isAdmin) {
            navigate("/");
        }
    }, [user]);

    return <div>{user?.isAdmin ? children : ""}</div>;
}

export default ProtectedRoutForAdmin;
