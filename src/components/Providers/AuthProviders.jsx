import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin= ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
   
    const logout = () =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unSubscribe
        }
    },[])

    const authInfo ={
       user,
       loading,
       createUser,
       loginUser,
       googleLogin,
       logout
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;