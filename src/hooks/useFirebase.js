import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);
    return {
        user,
        signInUsingGoogle,
        logOut
    };
};

export default useFirebase;