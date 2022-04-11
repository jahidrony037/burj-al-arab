import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/compat/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError(" ");
                console.log(result.user);
            })
            .catch((error) => {
                setError(error.message);
                console.log(error.message);
            })
    }


    useEffect(() => {
        const auth = getAuth();
        //const unSubscribe =
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        // return unSubscribe;
    }, [])


    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;