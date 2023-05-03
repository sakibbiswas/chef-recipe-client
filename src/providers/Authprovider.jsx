import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const Authcontext = createContext(null)
const auth = getAuth(app)
import { GoogleAuthProvider } from "firebase/auth";

const googleprovider = new GoogleAuthProvider();
import { GithubAuthProvider } from "firebase/auth";

const githubprovider = new GithubAuthProvider();

const Authprovider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true);

    const createuser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password,)
    }
    const signIN = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singnInGoogle = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)

    }
    const githubsignIn = () => {
        setloading(true)
        return signInWithPopup(auth, githubprovider)
    }
    const logOut = () => {
        setloading(true)
        signOut(auth)
    }
    useEffect(() => {
        const unsuccribe = onAuthStateChanged(auth, loggeduser => {
            console.log('logged in user null', loggeduser);
            setuser(loggeduser)
            setloading(false)
        })
        return () => {
            unsuccribe();
        }
    }, [])

    const authinfo = {
        user,
        loading,
        createuser,
        signIN,
        logOut,
        singnInGoogle,
        githubsignIn
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;