// know if logged in or not
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";

const AuthContext = createContext(); // box gded feh el user el 7aly w el function elly bt3ml login w logout

export default function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(
            // mn firebase auth elly bt3ml check 3la el user el 7aly w bt3ml update ll currentUser

            auth,

            (user) => {

                setCurrentUser(user);

                setLoading(false);

            }

        );

        return unsubscribe;

    }, []);

    return (

        <AuthContext.Provider
            value={{ currentUser }}
        >

            {!loading && children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}