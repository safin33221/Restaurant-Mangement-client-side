import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../Theme/Theme';
import axios from 'axios';

export const authContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [darktheme, setDarkTheme] = useState(false)
    const GooglePorvider = new GoogleAuthProvider()

    //create user with email and password
    const signUpWithEmailAndPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singIn user with email and pasword
    const signInWithEmailAndPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signWith Gooogle
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, GooglePorvider)
    }

    //sign out user
    const singOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)

            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post("http://localhost:8080/jwt", user, { withCredentials: true })
                    
            }
            else {
                axios.post('http://localhost:8080/logOut', {}, { withCredentials: true })
                
            }
            setLoading(false)
            return () => {
                unsubcribe()
            }
        })
    }, [user])

    const authValue = {
        signUpWithEmailAndPass,
        signInWithEmailAndPass,
        signInWithGoogle,
        singOutUser,
        setDarkTheme,
        darktheme,
        user,
        loading
    }
    return (
        <authContext.Provider value={authValue}>

            <ThemeProvider theme={darktheme ? darkTheme : lightTheme}>{children}</ThemeProvider>
        </authContext.Provider>
    );
};

export default AuthProvider;