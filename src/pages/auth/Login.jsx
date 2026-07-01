import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { loginUser } from "@/services/authService";
import { loginWithGoogle } from "@/services/authService";
import { createPatientProfile } from "@/services/patientService";
import { get, ref } from "firebase/database";
import { db } from "@/firebase/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
function Login() {
    const [formData, setFormData] = useState({

        email: "",

        password: ""

    });

    const navigate = useNavigate();
    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };
    const handleLogin = async () => {

        try {

            await loginUser(

                formData.email,

                formData.password

            );

            toast.success("Login Successfully");

            navigate("/");

        }

        catch (error) {

            toast.error(error.message);

        }

    };
    const handleGoogleLogin = async () => {

        try {

            const userCredential = await loginWithGoogle();

            const user = userCredential.user;

            const snapshot = await get(

                ref(db, `users/${user.uid}`)

            );

            if (!snapshot.exists()) { // Check if the user profile exists in the database

                await createPatientProfile(user); // lw awl mra l user by3ml create ll profile bta3o

            }

            navigate("/");

        }

        catch (error) {

            alert(error.message);

        }

    };
    return (

        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">

            <Card className="w-full max-w-md shadow-lg">

                <CardHeader>

                    <CardTitle className="text-center text-3xl">

                        Prime Ride

                    </CardTitle>

                    <p className="text-center text-slate-500">

                        Login to your account

                    </p>

                </CardHeader>

                <CardContent className="space-y-5">

                    <div>

                        <Label>Email</Label>

                        <Input

                            name="email"

                            type="email"

                            placeholder="Enter your email"

                            value={formData.email}

                            onChange={handleChange}

                        />

                    </div>

                    <div>

                        <Label>Password</Label>

                        <Input

                            name="password"

                            type="password"

                            placeholder="Enter your password"

                            value={formData.password}

                            onChange={handleChange}

                        />

                    </div>

                    <Button

                        className="w-full"

                        onClick={handleLogin}

                    >

                        Login

                    </Button>

                    <Separator />

                    <Button

                        variant="outline"

                        className="w-full"

                        onClick={handleGoogleLogin}

                    >

                        Continue with Google

                    </Button>

                    <p className="text-center text-sm">

                        Don't have an account?{" "}

                        <Link

                            to="/signup"

                            className="text-blue-600 hover:underline"

                        >

                            Sign Up

                        </Link>

                    </p>

                </CardContent>

            </Card>

        </div>

    );
}

export default Login;