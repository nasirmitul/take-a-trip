import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();


    /* Signup, Login, Logout with Email Password */
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        return signOut(auth);
    }

    /* Handle Forget Pass */
    const handleForgetPass = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    /* Signup, Login with Google */
    const googleSign = () => {
        return signInWithPopup(auth, googleProvider);
    }


    /* Checking user current state */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, createUser, signIn, userSignOut, googleSign, handleForgetPass };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;