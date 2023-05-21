import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] =useState(true)
    const [defaultUser,setDefaultUser]=useState(null)
    const [userProfile,setUserProfile]=useState(null);
    const [userName,setUserName] =useState(null);
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const githubSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            console.log('currentUser login',currentUser)
             setUser(currentUser)
             setLoading(false)
         })
         return ()=>{
             return unsubscribe();
         }
     },[])
    const authInfo ={
        createUser,
        signIn,
        loading,
        user,
        logOut,
        googleSignIn,
        githubSignIn,
        defaultUser,
        setDefaultUser,
        userProfile,
        setUserProfile,
        userName,
        setUserName
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;