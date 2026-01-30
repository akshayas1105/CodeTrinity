import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        // Simulate login - in real app would call backend
        console.log("Logging in with:", email, password);
        if (email && password) {
            setUser({ email, role: "authority" }); // Mock user
            return true;
        } else {
            throw new Error("Invalid credentials");
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
