import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';


import axios from 'axios';

export const authContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const GooglePorvider = new GoogleAuthProvider()
    const [theme, settheme] = useState(localStorage.getItem('theme') || 'pastel')

    // toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'pastel' ? 'forest' : 'pastel'
        settheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

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
                axios.post("https://restaurant-management-server-side-wheat.vercel.app/jwt", user, { withCredentials: true })

            }
            else {
                axios.post('https://restaurant-management-server-side-wheat.vercel.app/logOut', {}, { withCredentials: true })

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
 
        toggleTheme,
        theme,
       
        user,
        loading
    }
    return (
        <authContext.Provider value={authValue}>

            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;