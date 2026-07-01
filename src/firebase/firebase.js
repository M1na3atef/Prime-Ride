    // Firebase SDK
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getDatabase } from "firebase/database";

    // Firebase Configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDIoehkq9dZo_3YhgtHs9E76sNlrWHncFM",
    authDomain: "prime-ride-3834c.firebaseapp.com",
    databaseURL:
        "https://prime-ride-3834c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "prime-ride-3834c",
    storageBucket: "prime-ride-3834c.firebasestorage.app",
    messagingSenderId: "755682014631",
    appId: "1:755682014631:web:6443a0a6482e35f7abb282",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Export Services
    export const auth = getAuth(app);
    export const db = getDatabase(app);

    export default app;
