import React, { createContext, useEffect, useState } from 'react';

import app from '../firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

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

    /* Signup, Login with Google */
    const googleSign = () => {
        return signInWithPopup(auth, googleProvider);
    }

    /* Update a user's profile */
    /* const updateUserProfile = () =>{
        return updateProfile();
    } */


    /* updateProfile(auth.user, {
        displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
        console.log('profile updated');
    }).catch((error) => {
        console.log(error);
    }); */


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

    const authInfo = { user, loading, createUser, signIn, userSignOut, googleSign };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;