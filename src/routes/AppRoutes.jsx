import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/ProtectedRoutes";
import MainLayout from "@/layouts/MainLayout";
import PublicRoute from "@/routes/PublicRoutes";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Settings from "@/pages/settings/Settings";
import Dashboard from "@/pages/dashboard/Dashboard";
import PatientInfo from "@/pages/patient/PatientInfo";
import MedicalHistory from "@/pages/patient/MedicalHistory";
import Control from "@/pages/control/Control";
import NotFound from "@/pages/Notfound";

function AppRoutes() {
    return (
        <Routes>

            {/* صفحات تسجيل الدخول */}
            <Route

                path="/login"

                element={

                    <PublicRoute>

                        <Login />

                    </PublicRoute>

                }

            />

            <Route

                path="/signup"

                element={

                    <PublicRoute>

                        <Signup />

                    </PublicRoute>

                }

            />

            {/* صفحات الموقع */}
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <MainLayout />
                    </ProtectedRoute>
                }
            >

                <Route index element={<Dashboard />} />

                <Route
                    path="patient"
                    element={<PatientInfo />}
                />

                <Route
                    path="history"
                    element={<MedicalHistory />}
                />

                <Route
                    path="control"
                    element={<Control />}
                />
                <Route

                    path="settings"

                    element={<Settings />}

                />

            </Route>

            {/* صفحة 404 */}
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}

export default AppRoutes;