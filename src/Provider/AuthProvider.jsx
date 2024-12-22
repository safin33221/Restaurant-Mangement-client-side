import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

export const authContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
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
            console.log(currentUser);
            setUser(currentUser)
            return () => {
                unsubcribe()
            }
        })
    }, [])

    const authValue = {
        signUpWithEmailAndPass,
        signInWithEmailAndPass,
        signInWithGoogle,
        singOutUser,
        user
    }
    return (
        <authContext.Provider value={authValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;