import DashboardCard from "@/components/DashboardCard";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getUserData } from "@/services/patientService";
import {
    Heart,
    ClipboardList,
    Phone,
    Droplets,
    Cake,
} from "lucide-react";

function Dashboard() {

    const { currentUser } = useAuth();

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            if (!currentUser) return;
            const data = await getUserData(currentUser.uid);
            setUserData(data);
        };
        loadData();
    }, [currentUser]);

    return (

        <div className="space-y-8">

            {/* Welcome */}

            <div className="bg-white rounded-2xl shadow-sm p-6">

                <h1 className="text-2xl md:text-3xl font-bold">

                    Welcome,

                    {" "}

                    {userData?.patient?.fullName || "Patient"}

                    👋

                </h1>

                <p className="text-slate-500 mt-2">

                    Manage your smart wheelchair system easily.

                </p>

            </div>

            {/* Dashboard Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                <DashboardCard
                    title="Blood Type"
                    value={userData?.patient?.bloodType || "--"}
                    icon={Droplets}
                    color="bg-red-500"
                />

                <DashboardCard
                    title="Medical History"
                    value={userData?.medicalHistory?.diseases || "No History"}
                    icon={ClipboardList}
                    color="bg-green-600"
                />

                <DashboardCard
                    title="Age"
                    value={userData?.patient?.age ? `${userData.patient.age} Years` : "--"}
                    icon={Cake}
                    color="bg-green-600"
                />

                <DashboardCard
                    title="Emergency"
                    value={userData?.patient?.emergencyContact || "--"}
                    icon={Phone}
                    color="bg-orange-500"
                />

            </div>

        </div>

    );
}

export default Dashboard;