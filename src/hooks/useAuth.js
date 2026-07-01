import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext"; // Import the AuthContext from the context file

export function useAuth() {

    return useContext(AuthContext); //hatly kol elly feh el context w 3mlha return 3shan a2dr ast5dmha fe ay component

}