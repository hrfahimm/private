import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/Firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

initializeAuthentication();

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsIngGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const logout = () => {
        signOut(auth).then((result) => {
            setUser({});
        });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("inside State Change", user);
                setUser(user);
            }
        });
    }, []);
    return { user, error, signInUsIngGoogle, logout };
};
export default useFireBase;
