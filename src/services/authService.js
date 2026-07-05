import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "@/firebase/firebase";

// Register
export const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

  // function fe firebase auth bt3ml register ll user btrg3 userCredential as object
  // el object da feh user w feh accessToken w feh el userCredential object
// Login
export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logoutUser = async () => {
  return await signOut(auth);
};
const provider = new GoogleAuthProvider(); 
export const loginWithGoogle = async () => {
  return await signInWithPopup(auth,provider);
};
// el provider da by3ml login b google