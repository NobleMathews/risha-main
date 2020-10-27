import React, { useState, useEffect } from 'react'
import {projectAuth} from './config'
// propagate through component tree
export const AuthContext = React.createContext(); 

export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    useEffect(() => {
        projectAuth.onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
        value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};