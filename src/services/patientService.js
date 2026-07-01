    import { ref, set, get } from "firebase/database";
    import { db } from "@/firebase/firebase";
    // Create Patient Profile
    export const createPatientProfile = async (user) => {
    await set(
        ref(db, `users/${user.uid}`),

        {
        email: user.email,

        patient: {
            fullName: "",

            age: "",

            gender: "",

            bloodType: "",

            emergencyContact: "",
        },

        medicalHistory: {
            diseases: "",

            allergies: "",

            medications: "",
        },

        wheelchair: {
            connected: false,

            status: "offline",
        },
        },
    );
    };
    // Get Patient Profile
    export const getPatientProfile = async (uid) => {
    const snapshot = await get(ref(db, `users/${uid}/patient`));

    if (snapshot.exists()) {
        return snapshot.val();
    }

    return null;
    };
    // Update Patient Profile
    export const updatePatientProfile = async (uid, data) => {
    await set(
        ref(db, `users/${uid}/patient`),

        data,
    );
    };
    // Get Medical History
    export const getMedicalHistory = async (uid) => {
    const snapshot = await get(ref(db, `users/${uid}/medicalHistory`));

    if (snapshot.exists()) {
        return snapshot.val();
    }

    return null;
    };

    // Update Medical History
    export const updateMedicalHistory = async (uid, data) => {
    await set(
        ref(db, `users/${uid}/medicalHistory`),

        data,
    );
    };
    export const getUserData = async (uid) => {
    // 3l4an el dashboard by7tag kolh

    const snapshot = await get(ref(db, `users/${uid}`));

    if (snapshot.exists()) {
        return snapshot.val();
    }

    return null;
    };
