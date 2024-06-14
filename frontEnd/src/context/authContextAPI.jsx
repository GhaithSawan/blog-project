import React, { createContext, useState } from "react";
import { useEffect } from "react";

export let authContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setUser(storedUser ? JSON.parse(storedUser) : null);
    }, []);

    const updateUser = (newUser) => {
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
    };

    return (
        <authContext.Provider value={{ user, updateUser }}>
            {children}
        </authContext.Provider>
    );
};


export default AuthContextProvider