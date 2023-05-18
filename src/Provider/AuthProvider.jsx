import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // Create user with email and password
    const userSignIn = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //user login with email and password
    const userLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo = {
        user,
        loading,
        userSignIn,
        userLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;