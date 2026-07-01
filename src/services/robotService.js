    import { ref, update } from "firebase/database";

    import { db } from "@/firebase/firebase";

    export const moveRobot = async (direction) => {
    const directions = {
        Up: false,
        Down: false,
        Left: false,
        Right: false,
    };

    if (direction !== "Stop") {
        directions[direction] = true;
    }

    await update(
        ref(db, "Robot/Directions"),

        directions,
    );
    };
