import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
    // async function authenticateWithFirebase() {
    //     const { user } = useUser(); // Clerk user object
    //     try {
    //         const firebaseToken = await user.getToken(); // Get token from Clerk
    //         const auth = getAuth();
    //         await signInWithCustomToken(auth, firebaseToken); // Sign in to Firebase with token
    //         console.log("Authenticated with Firebase!");
    //     } catch (error) {
    //         console.error("Error authenticating with Firebase:", error);
    //     }
    // }
    return <SignIn />
}