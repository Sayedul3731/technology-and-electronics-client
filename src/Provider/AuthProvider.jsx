import PropTypes from "prop-types"
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        userCreate,
        signIn,
        signInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;