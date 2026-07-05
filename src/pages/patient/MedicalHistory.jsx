import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    ClipboardList,
    ShieldAlert,
    Pill,
    FileText,
    Check,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

import InfoCard from "@/components/common/InfoCard";

import {
    getMedicalHistory,
    updateMedicalHistory,
} from "@/services/patientService";

function MedicalHistory() {

    const { currentUser } = useAuth();

    const [saved, setSaved] = useState(false);

    const [history, setHistory] = useState({

        diseases: "",

        allergies: "",

        medications: "",

        notes: "",

    });

    const handleChange = (e) => {

        setHistory({

            ...history,

            [e.target.name]: e.target.value,

        });

    };

    useEffect(() => {
        const loadHistory = async () => {
            if (!currentUser) return;
            const data = await getMedicalHistory( currentUser.uid );
            if (data) {
                setHistory(data);
            }
        };
        loadHistory();
    }, [currentUser]);

    const handleSave = async () => {

        await updateMedicalHistory(

            currentUser.uid,

            history

        );

        setSaved(true);

        setTimeout(() => {

            setSaved(false);

        }, 2000);

    };
    return (

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Preview */}

            <Card className="order-1 lg:order-2 h-fit lg:sticky lg:top-24 shadow-sm">

                <CardHeader>

                    <CardTitle>

                        Current History

                    </CardTitle>

                </CardHeader>

                <CardContent>

                    {

                        !history.diseases &&
                            !history.allergies &&
                            !history.medications &&
                            !history.notes

                            ?

                            (

                                <div className="text-center py-8">

                                    <ClipboardList className="mx-auto w-14 h-14 text-slate-300" />

                                    <p className="mt-4 text-slate-500">

                                        No Medical History

                                    </p>

                                    <p className="text-sm text-slate-400">

                                        Fill the form to save medical information.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="space-y-3">

                                    <InfoCard
                                        title="Diseases"
                                        value={history.diseases}
                                        icon={ClipboardList}
                                    />

                                    <InfoCard
                                        title="Allergies"
                                        value={history.allergies}
                                        icon={ShieldAlert}
                                    />

                                    <InfoCard
                                        title="Current Medications"
                                        value={history.medications}
                                        icon={Pill}
                                    />

                                    <InfoCard
                                        title="Notes"
                                        value={history.notes}
                                        icon={FileText}
                                    />

                                </div>

                            )

                    }

                </CardContent>

            </Card>

            {/* Form */}

            <Card className="order-2 lg:order-1 lg:col-span-2 shadow-sm">

                <CardHeader>

                    <CardTitle>

                        Medical History

                    </CardTitle>

                </CardHeader>

                <CardContent className="space-y-6">
                    <div>

                        <Label className="block mb-2">

                            Diseases

                        </Label>

                        <Textarea

                            name="diseases"

                            value={history.diseases}

                            onChange={handleChange}

                            placeholder="Example: Diabetes, Hypertension"

                        />

                    </div>

                    <div>

                        <Label className="block mb-2">

                            Allergies

                        </Label>

                        <Textarea

                            name="allergies"

                            value={history.allergies}

                            onChange={handleChange}

                            placeholder="Example: Penicillin"

                        />

                    </div>

                    <div>

                        <Label className="block mb-2">

                            Current Medications

                        </Label>

                        <Textarea

                            name="medications"

                            value={history.medications}

                            onChange={handleChange}

                            placeholder="Example: Panadol"

                        />

                    </div>

                    <div>

                        <Label className="block mb-2">

                            Additional Notes

                        </Label>

                        <Textarea

                            name="notes"

                            value={history.notes}

                            onChange={handleChange}

                            placeholder="Any additional medical notes"

                        />

                    </div>

                    <Button

                        onClick={handleSave}

                        className={`w-full transition-all ${saved

                            ?

                            "bg-green-600 hover:bg-green-600"

                            :

                            ""

                            }`}

                    >

                        {

                            saved

                                ?

                                <>

                                    <Check className="w-4 h-4 mr-2" />

                                    Saved

                                </>

                                :

                                "Save Information"

                        }

                    </Button>

                </CardContent>

            </Card>

        </div>

    );

}

export default MedicalHistory;