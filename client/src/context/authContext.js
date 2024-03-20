import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../axios"

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Simulated login function
    const login = async (credentials) => {
        try{
            let response;
            if(credentials.userType === "consumer"){
                response = await axios.post('/auth/login-consumer', credentials);
                // navigate("/consumer-home")
            }    
            else{
                response = await axios.post('/auth/login-provider', credentials);
                // navigate("/provider-home")
            }    
            console.log("User logged in successfully:", response.data.user);
            setUser(response.data.user); // Set user with response data including the user type
        }catch(error){
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};
