'use client'
import { useAuth } from '@clerk/nextjs'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithCustomToken } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { doc, getDoc, } from 'firebase/firestore'
import React from 'react'

// Add your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyDF2UqHEM11nOj43BX2g7gzvJ2r1ue0kTU",
    authDomain: "sheridan-swiftie-club.firebaseapp.com",
    projectId: "sheridan-swiftie-club",
    storageBucket: "sheridan-swiftie-club.appspot.com",
    messagingSenderId: "771518961945",
    appId: "1:771518961945:web:6856abfb131434c2104d88",
    measurementId: "G-L08HBCQ7BS"
}

// Connect to your Firebase app
const app = initializeApp(firebaseConfig)
// Connect to your Firestore database
const db = getFirestore(app)
// Connect to Firebase auth
const auth = getAuth(app)

// Remove this if you do not have Firestore set up
// for your Firebase app
const getFirestoreData = async () => {
    const docRef = doc(db, 'sheridan-swiftie-club', 'users')
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        console.log('Document data:', docSnap.data())
    } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!')
    }
}

export default function FirebaseUI() {
    const { getToken, userId } = useAuth()

    // Handle if the user is not signed in
    // You could display content, or redirect them to a sign-in page
    if (!userId) {
        return <p className='bg-white'>You need to sign in with Clerk to access this page.</p>
    }

    const signIntoFirebaseWithClerk = async () => {
        const token = await getToken({ template: 'integration_firebase' })

        const userCredentials = await signInWithCustomToken(auth, token || '')


        // The userCredentials.user object can call the methods of
        // the Firebase platform as an authenticated user.
        console.log('User:', userCredentials.user.displayName)
    }

    return (
        <main className='bg-white' style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
            <button onClick={signIntoFirebaseWithClerk}>Sign in</button>

            {/* Remove this button if you do not have Firestore set up */}
            <button onClick={getFirestoreData}>Get document</button>
        </main>
    )
}