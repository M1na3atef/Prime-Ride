import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

import { logoutUser } from "@/services/authService";

import { getUserData } from "@/services/patientService";

import {

    Card,
    CardContent,
    CardHeader,
    CardTitle,

} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {

    CircleUserRound,
    Mail,

} from "lucide-react";
function Settings() {

    const navigate = useNavigate();

    const { currentUser } = useAuth();

    const [userData, setUserData] = useState(null);
    useEffect(() => {

        const loadUser = async () => {

            if (!currentUser) return;

            const data = await getUserData(

                currentUser.uid

            );

            setUserData(data);

        };

        loadUser();

    }, [currentUser]);
    const handleLogout = async () => {

        await logoutUser();

        navigate("/login");

    };
    return (

        <div className="max-w-2xl mx-auto">

            <Card>

                <CardHeader>

                    <CardTitle>

                        Settings

                    </CardTitle>

                </CardHeader>

                <CardContent className="space-y-8">

                    <div className="flex items-center gap-4">

                        <CircleUserRound className="w-14 h-14 text-blue-600" />

                        <div>

                            <h2 className="text-xl font-semibold">

                                {

                                    userData?.patient?.fullName ||

                                    "Patient"

                                }

                            </h2>

                            <p className="text-slate-500">

                                {currentUser?.email}

                            </p>

                        </div>

                    </div>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3">

                            <Mail className="w-5 h-5 text-slate-500" />

                            <span>

                                {currentUser?.email}

                            </span>

                        </div>

                    </div>

                    <Button

                        variant="destructive"

                        className="w-full"

                        onClick={handleLogout}

                    >

                        Logout

                    </Button>

                </CardContent>

            </Card>

        </div>

    );

}

export default Settings;