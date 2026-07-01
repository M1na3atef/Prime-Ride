import { Navigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

function ProtectedRoute({ children }) {

    const { currentUser } = useAuth();// Get the current user from the authentication context


    if (!currentUser) {

        return <Navigate to="/login" replace />; // replace 3l4an my3mlsh history 3l4an my2drsh y3ml back

    }

    return children; // lw feh account 3ml render ll children elly feh el route elly 3ayz ad5ol 3leh

}

export default ProtectedRoute;

