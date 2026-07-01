// 3l4an lw 3amel log in mayrg34 l el log in page tany w lw 3amel log out mayrg34 l el login page
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

function PublicRoute({ children }) {

    const { currentUser } = useAuth();

    if (currentUser) {

        return <Navigate to="/" replace />;

    }

    return children;

}

export default PublicRoute;